/*! Built with http://stenciljs.com */
const { h } = window.App;

import { b as createColorClasses, c as hostContext, d as createThemedClasses, e as openURL } from './chunk-c7f82f3c.js';

class Content {
    constructor() {
        this.isScrolling = false;
        this.lastScroll = 0;
        this.queued = false;
        this.cTop = -1;
        this.cBottom = -1;
        this.detail = {
            scrollTop: 0,
            scrollLeft: 0,
            type: "scroll",
            event: undefined,
            startX: 0,
            startY: 0,
            startTimeStamp: 0,
            currentX: 0,
            currentY: 0,
            velocityX: 0,
            velocityY: 0,
            deltaX: 0,
            deltaY: 0,
            timeStamp: 0,
            data: undefined,
            isScrolling: true,
        };
        this.fullscreen = false;
        this.scrollX = false;
        this.scrollY = true;
        this.scrollEvents = false;
    }
    onNavChanged() {
        this.resize();
    }
    componentWillLoad() {
        if (this.forceOverscroll === undefined) {
            this.forceOverscroll = this.mode === "ios" && ("ontouchstart" in this.win);
        }
    }
    componentDidLoad() {
        this.resize();
    }
    componentDidUnload() {
        if (this.watchDog) {
            clearInterval(this.watchDog);
        }
    }
    resize() {
        if (this.fullscreen) {
            this.queue.read(this.readDimensions.bind(this));
        }
        else if (this.cTop !== 0 || this.cBottom !== 0) {
            this.cTop = this.cBottom = 0;
            this.el.forceUpdate();
        }
    }
    readDimensions() {
        const page = getPageElement(this.el);
        const top = Math.max(this.el.offsetTop, 0);
        const bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
        const dirty = top !== this.cTop || bottom !== this.cBottom;
        if (dirty) {
            this.cTop = top;
            this.cBottom = bottom;
            this.el.forceUpdate();
        }
    }
    onScroll(ev) {
        const timeStamp = Date.now();
        const shouldStart = !this.isScrolling;
        this.lastScroll = timeStamp;
        if (shouldStart) {
            this.onScrollStart();
        }
        if (!this.queued && this.scrollEvents) {
            this.queued = true;
            this.queue.read(ts => {
                this.queued = false;
                this.detail.event = ev;
                updateScrollDetail(this.detail, this.scrollEl, ts, shouldStart);
                this.ionScroll.emit(this.detail);
            });
        }
    }
    getScrollElement() {
        return Promise.resolve(this.scrollEl);
    }
    scrollToTop(duration = 0) {
        return this.scrollToPoint(undefined, 0, duration);
    }
    scrollToBottom(duration = 0) {
        const y = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
        return this.scrollToPoint(undefined, y, duration);
    }
    scrollByPoint(x, y, duration) {
        return this.scrollToPoint(x + this.scrollEl.scrollLeft, y + this.scrollEl.scrollTop, duration);
    }
    async scrollToPoint(x, y, duration = 0) {
        const el = this.scrollEl;
        if (duration < 32) {
            if (y != null) {
                el.scrollTop = y;
            }
            if (x != null) {
                el.scrollLeft = x;
            }
            return;
        }
        let resolve;
        let startTime = 0;
        const promise = new Promise(r => resolve = r);
        const fromY = el.scrollTop;
        const fromX = el.scrollLeft;
        const deltaY = y != null ? y - fromY : 0;
        const deltaX = x != null ? x - fromX : 0;
        const step = (timeStamp) => {
            const linearTime = Math.min(1, ((timeStamp - startTime) / duration)) - 1;
            const easedT = Math.pow(linearTime, 3) + 1;
            if (deltaY !== 0) {
                el.scrollTop = Math.floor((easedT * deltaY) + fromY);
            }
            if (deltaX !== 0) {
                el.scrollLeft = Math.floor((easedT * deltaX) + fromX);
            }
            if (easedT < 1) {
                requestAnimationFrame(step);
            }
            else {
                resolve();
            }
        };
        requestAnimationFrame(ts => {
            startTime = ts;
            step(ts);
        });
        return promise;
    }
    onScrollStart() {
        this.isScrolling = true;
        this.ionScrollStart.emit({
            isScrolling: true
        });
        if (this.watchDog) {
            clearInterval(this.watchDog);
        }
        this.watchDog = setInterval(() => {
            if (this.lastScroll < Date.now() - 120) {
                this.onScrollEnd();
            }
        }, 100);
    }
    onScrollEnd() {
        clearInterval(this.watchDog);
        this.watchDog = null;
        this.isScrolling = false;
        this.ionScrollEnd.emit({
            isScrolling: false
        });
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { "content-sizing": hostContext("ion-popover", this.el), "overscroll": !!this.forceOverscroll }),
            style: {
                "--offset-top": `${this.cTop}px`,
                "--offset-bottom": `${this.cBottom}px`,
            }
        };
    }
    render() {
        const { scrollX, scrollY, forceOverscroll } = this;
        this.resize();
        return [
            h("div", { class: {
                    "inner-scroll": true,
                    "scroll-x": scrollX,
                    "scroll-y": scrollY,
                    "overscroll": (scrollX || scrollY) && !!forceOverscroll
                }, ref: el => this.scrollEl = el, onScroll: ev => this.onScroll(ev) }, h("slot", null)),
            h("slot", { name: "fixed" })
        ];
    }
    static get is() { return "ion-content"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "config": {
                "context": "config"
            },
            "el": {
                "elementRef": true
            },
            "forceOverscroll": {
                "type": Boolean,
                "attr": "force-overscroll",
                "mutable": true
            },
            "fullscreen": {
                "type": Boolean,
                "attr": "fullscreen"
            },
            "getScrollElement": {
                "method": true
            },
            "queue": {
                "context": "queue"
            },
            "scrollByPoint": {
                "method": true
            },
            "scrollEvents": {
                "type": Boolean,
                "attr": "scroll-events"
            },
            "scrollToBottom": {
                "method": true
            },
            "scrollToPoint": {
                "method": true
            },
            "scrollToTop": {
                "method": true
            },
            "scrollX": {
                "type": Boolean,
                "attr": "scroll-x"
            },
            "scrollY": {
                "type": Boolean,
                "attr": "scroll-y"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionScrollStart",
                "method": "ionScrollStart",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionScroll",
                "method": "ionScroll",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionScrollEnd",
                "method": "ionScrollEnd",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "body:ionNavDidChange",
                "method": "onNavChanged"
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the Content\n   * \@prop --color: Color of the Content\n   * \@prop --padding-top: Padding top of the Content\n   * \@prop --padding-bottom: Padding bottom of the Content\n   * \@prop --padding-start: Padding start of the Content\n   * \@prop --padding-end: Padding end of the Content\n   * \@prop --keyboard-offset: Keyboard offset of the Content\n   * \@prop --offset-top: Offset top of the Content\n   * \@prop --offset-bottom: Offset bottom of the Content\n   */\n  --background: var(--ion-background-color, #fff);\n  --color: var(--ion-text-color, #000);\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --keyboard-offset: 0px;\n  --offset-top: 0px;\n  --offset-bottom: 0px;\n  --overflow: auto;\n  display: block;\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n  /* stylelint-disable */\n  margin: 0 !important;\n  padding: 0 !important;\n  /* stylelint-enable */\n  font-family: var(--ion-font-family, inherit);\n  contain: layout size style; }\n\n:host(.ion-color) .inner-scroll {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n:host(.outer-content) {\n  --background: var(--ion-background-color-step-50, #f2f2f2); }\n\n.inner-scroll {\n  left: 0px;\n  right: 0px;\n  top: calc(var(--offset-top) * -1);\n  bottom: calc(var(--offset-bottom) * -1);\n  padding: calc(var(--padding-top) + var(--offset-top)) var(--padding-end) calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom)) var(--padding-start);\n  position: absolute;\n  background: var(--background);\n  color: var(--color);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  overflow: hidden; }\n\n.scroll-y,\n.scroll-x {\n  -webkit-overflow-scrolling: touch;\n  will-change: scroll-position;\n  -ms-scroll-chaining: none;\n  overscroll-behavior: contain; }\n\n.scroll-y {\n  overflow-y: var(--overflow); }\n\n.scroll-x {\n  overflow-x: var(--overflow); }\n\n.overscroll::before,\n.overscroll::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  content: \"\"; }\n\n.overscroll::before {\n  bottom: -1px; }\n\n.overscroll::after {\n  top: -1px; }\n\n:host(.content-sizing) {\n  contain: none; }\n\n:host(.content-sizing) .inner-scroll {\n  position: relative; }"; }
}
function getParentElement(el) {
    if (el.parentElement) {
        return el.parentElement;
    }
    if (el.parentNode && el.parentNode.host) {
        return el.parentNode.host;
    }
    return null;
}
function getPageElement(el) {
    const tabs = el.closest("ion-tabs");
    if (tabs) {
        return tabs;
    }
    const page = el.closest("ion-app,ion-page,.ion-page,page-inner");
    if (page) {
        return page;
    }
    return getParentElement(el);
}
function updateScrollDetail(detail, el, timestamp, shouldStart) {
    const prevX = detail.currentX;
    const prevY = detail.currentY;
    const prevT = detail.timeStamp;
    const currentX = el.scrollLeft;
    const currentY = el.scrollTop;
    if (shouldStart) {
        detail.startTimeStamp = timestamp;
        detail.startX = currentX;
        detail.startY = currentY;
        detail.velocityX = detail.velocityY = 0;
    }
    detail.timeStamp = timestamp;
    detail.currentX = detail.scrollLeft = currentX;
    detail.currentY = detail.scrollTop = currentY;
    detail.deltaX = currentX - detail.startX;
    detail.deltaY = currentY - detail.startY;
    const timeDelta = timestamp - prevT;
    if (timeDelta > 0 && timeDelta < 100) {
        const velocityX = (currentX - prevX) / timeDelta;
        const velocityY = (currentY - prevY) / timeDelta;
        detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
        detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
    }
}

class Header {
    constructor() {
        this.translucent = false;
    }
    hostData() {
        const themedClasses = createThemedClasses(this.mode, "header");
        const translucentClasses = this.translucent ? createThemedClasses(this.mode, "header-translucent") : null;
        return {
            class: Object.assign({}, themedClasses, translucentClasses)
        };
    }
    static get is() { return "ion-header"; }
    static get properties() {
        return {
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "translucent": {
                "type": Boolean,
                "attr": "translucent"
            }
        };
    }
    static get style() { return "ion-header {\n  display: block;\n  position: relative;\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n  width: 100%;\n  z-index: 10; }\n\nion-header ion-toolbar:first-child {\n  padding-top: var(--ion-safe-area-top, 0); }\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0 0 0.55px; }\n\n.header-ios[no-border] ion-toolbar:last-child {\n  --border-width: 0; }\n\n.header-translucent-ios {\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px); }\n\n.header-translucent-ios ion-toolbar {\n  --opacity: .8;\n  --backdrop-filter: saturate(180%) blur(20px); }"; }
    static get styleMode() { return "ios"; }
}

class Item {
    constructor() {
        this.itemStyles = new Map();
        this.multipleInputs = false;
        this.button = false;
        this.detailIcon = "ios-arrow-forward";
        this.disabled = false;
        this.type = "button";
    }
    itemStyle(ev) {
        ev.stopPropagation();
        const tagName = ev.target.tagName;
        const updatedStyles = ev.detail;
        const updatedKeys = Object.keys(ev.detail);
        const newStyles = {};
        const childStyles = this.itemStyles.get(tagName) || {};
        let hasStyleChange = false;
        for (const key of updatedKeys) {
            const itemKey = `item-${key}`;
            const newValue = updatedStyles[key];
            if (newValue !== childStyles[itemKey]) {
                hasStyleChange = true;
            }
            newStyles[itemKey] = newValue;
        }
        if (hasStyleChange) {
            this.itemStyles.set(tagName, newStyles);
            this.el.forceUpdate();
        }
    }
    componentDidLoad() {
        Array.from(this.el.querySelectorAll("ion-button")).forEach(button => {
            if (!button.size) {
                button.size = "small";
            }
        });
        const inputs = this.el.querySelectorAll("ion-select, ion-datetime");
        this.multipleInputs = inputs.length > 1 ? true : false;
    }
    isClickable() {
        return (this.href !== undefined || this.button);
    }
    hostData() {
        const childStyles = {};
        this.itemStyles.forEach(value => {
            Object.assign(childStyles, value);
        });
        return {
            "ion-activatable": this.isClickable(),
            class: Object.assign({}, childStyles, createColorClasses(this.color), { [`item-lines-${this.lines}`]: !!this.lines, "item-disabled": this.disabled, "in-list": hostContext("ion-list", this.el), "item": true, "item-multiple-inputs": this.multipleInputs })
        };
    }
    render() {
        const { href, detail, mode, win, state, detailIcon, routerDirection, type } = this;
        const clickable = this.isClickable();
        const TagType = clickable ? (href === undefined ? "button" : "a") : "div";
        const attrs = TagType === "button" ? { type } : { href };
        const showDetail = detail !== undefined ? detail : mode === "ios" && clickable;
        return (h(TagType, Object.assign({}, attrs, { class: "item-native", onClick: ev => openURL(win, href, ev, routerDirection) }), h("slot", { name: "start" }), h("div", { class: "item-inner" }, h("div", { class: "input-wrapper" }, h("slot", null)), h("slot", { name: "end" }), showDetail && h("ion-icon", { icon: detailIcon, lazy: false, class: "item-detail-icon" })), state && h("div", { class: "item-state" }), clickable && mode === "md" && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "button": {
                "type": Boolean,
                "attr": "button"
            },
            "color": {
                "type": String,
                "attr": "color"
            },
            "detail": {
                "type": Boolean,
                "attr": "detail"
            },
            "detailIcon": {
                "type": String,
                "attr": "detail-icon"
            },
            "disabled": {
                "type": Boolean,
                "attr": "disabled"
            },
            "el": {
                "elementRef": true
            },
            "href": {
                "type": String,
                "attr": "href"
            },
            "lines": {
                "type": String,
                "attr": "lines"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "multipleInputs": {
                "state": true
            },
            "routerDirection": {
                "type": String,
                "attr": "router-direction"
            },
            "state": {
                "type": String,
                "attr": "state"
            },
            "type": {
                "type": String,
                "attr": "type"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get listeners() {
        return [{
                "name": "ionStyle",
                "method": "itemStyle"
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the item\n   * \@prop --background-activated: Background of the activated item\n   * \@prop --border-color: Color of the item border\n   * \@prop --border-radius: Radius of the item border\n   * \@prop --border-style: Style of the item border\n   * \@prop --border-width: Width of the item border\n   * \@prop --box-shadow: Box shadow of the item\n   * \@prop --color: Color of the item\n   * \@prop --detail-icon-color: Color of the item detail icon\n   * \@prop --inner-border-width: Width of the item inner border\n   * \@prop --inner-box-shadow: Box shadow of the item inner\n   * \@prop --inner-padding-bottom: Bottom padding of the item inner\n   * \@prop --inner-padding-end: End padding of the item inner\n   * \@prop --inner-padding-start: Start padding of the item inner\n   * \@prop --inner-padding-top: Top padding of the item inner\n   * \@prop --min-height: Minimum height of the item\n   * \@prop --padding-bottom: Bottom padding of the item\n   * \@prop --padding-end: End padding of the item\n   * \@prop --padding-start: Start padding of the item\n   * \@prop --padding-top: Top padding of the item\n   * \@prop --transition: Transition of the item\n   */\n  --min-height: 44px;\n  --background: var(--ion-color-base);\n  --background-activated: var(--ion-color-tint);\n  --color: var(--ion-color-contrast);\n  --detail-icon-color: var(--ion-color-shade);\n  --border-radius: 0px;\n  --border-width: 0px;\n  --border-style: solid;\n  --border-color: var(--ion-color-shade);\n  --inner-border-width: 0px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --inner-padding-top: 0px;\n  --inner-padding-bottom: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --box-shadow: none;\n  --inner-box-shadow: none;\n  --highlight-color-focus: var(--ion-color-primary, #3880ff);\n  --highlight-color-valid: var(--ion-color-success, #10dc60);\n  --highlight-color-invalid: var(--ion-color-danger, #f04141);\n  --highlight-height: 2px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  text-align: initial;\n  text-decoration: none;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n:host(.activated) .item-native {\n  background: var(--background-activated); }\n\n:host(.item-disabled) {\n  cursor: default;\n  opacity: .3;\n  pointer-events: none; }\n\n.item-native {\n  padding: var(--padding-top) var(--padding-end) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n  border-radius: var(--border-radius);\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: var(--min-height);\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  outline: none;\n  background: var(--background);\n  -webkit-box-shadow: var(--box-shadow);\n  box-shadow: var(--box-shadow);\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\nbutton, a {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none; }\n\n.item-state {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  height: var(--highlight-height); }\n\n.item-inner {\n  margin: 0;\n  padding: var(--inner-padding-top) calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end)) var(--inner-padding-bottom) var(--inner-padding-start);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  min-height: inherit;\n  border-width: var(--inner-border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  -webkit-box-shadow: var(--inner-box-shadow);\n  box-shadow: var(--inner-box-shadow);\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.input-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n:host([vertical-align-top]),\n:host(.item-input) {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n::slotted(ion-icon) {\n  font-size: 1.6em; }\n\n::slotted(ion-button) {\n  --margin-top: 0;\n  --margin-bottom: 0;\n  --margin-start: 0;\n  --margin-end: 0;\n  z-index: 1; }\n\n:host(.item-label-stacked) .input-wrapper,\n:host(.item-label-floating) .input-wrapper {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n:host(.item-label-stacked) ::slotted(ion-select),\n:host(.item-label-floating) ::slotted(ion-select) {\n  --padding-start: 0;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  width: 100%;\n  max-width: 100%; }\n\n:host(.item-label-stacked) ::slotted(ion-datetime),\n:host(.item-label-floating) ::slotted(ion-datetime) {\n  --padding-start: 0;\n  width: 100%; }\n\n:host(.item-multiple-inputs) ::slotted(ion-datetime),\n:host(.item-multiple-inputs) ::slotted(ion-select) {\n  position: relative; }\n\n:host(.item-textarea) {\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n::slotted(ion-reorder[slot]) {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n:host {\n  --transition: background-color 200ms linear;\n  --padding-start: 16px;\n  --inner-padding-end: 8px;\n  --inner-border-width: 0px 0px 0.55px 0px;\n  font-size: 17px; }\n\n:host(:not(.ion-color)) {\n  --background: var(--ion-item-background-color, transparent);\n  --background-activated: var(--ion-item-background-color-active, #d9d9d9);\n  --border-color: var(--ion-item-border-color, #c8c7cc);\n  --color: var(--ion-item-text-color, var(--ion-text-color, #000));\n  --detail-icon-color: var(--ion-item-border-color, #c8c7cc); }\n\n:host(.activated) {\n  --transition: none; }\n\n:host(.item-lines-full) {\n  --border-width: 0px 0px 0.55px 0px; }\n\n:host(.item-lines-inset) {\n  --inner-border-width: 0px 0px 0.55px 0px; }\n\n:host(.item-lines-inset),\n:host(.item-lines-none) {\n  --border-width: 0px; }\n\n:host(.item-lines-full),\n:host(.item-lines-none) {\n  --inner-border-width: 0px; }\n\n::slotted(:not(.interactive)[slot=\"start\"]) {\n  margin: 2px 16px 2px 0; }\n\n::slotted(:not(.interactive)[slot=\"end\"]) {\n  margin-left: 8px;\n  margin-right: 8px; }\n\n::slotted(ion-icon[slot=\"start\"]),\n::slotted(ion-icon[slot=\"end\"]) {\n  margin-left: 0;\n  margin-top: 7px;\n  margin-bottom: 7px; }\n\n:host(.item-label-stacked) ::slotted([slot=\"end\"]),\n:host(.item-label-floating) ::slotted([slot=\"end\"]) {\n  margin-top: 7px;\n  margin-bottom: 7px; }\n\n::slotted(.button-small) {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: .5em;\n  --padding-end: .5em;\n  --height: 24px;\n  font-size: 13px; }\n\n::slotted(ion-avatar) {\n  width: 36px;\n  height: 36px; }\n\n::slotted(ion-thumbnail) {\n  width: 56px;\n  height: 56px; }\n\n::slotted(ion-avatar[slot=\"end\"]),\n::slotted(ion-thumbnail[slot=\"end\"]) {\n  margin: 8px; }\n\n.item-detail-icon {\n  color: var(--detail-icon-color);\n  font-size: 20px; }\n\n:host(.item-radio) ::slotted(ion-label),\n:host(.item-toggle) ::slotted(ion-label) {\n  margin-left: 0px; }\n\n:host(.item-label-stacked) ::slotted(ion-input),\n:host(.item-label-floating) ::slotted(ion-input),\n:host(.item-label-stacked) ::slotted(ion-textarea),\n:host(.item-label-floating) ::slotted(ion-textarea),\n:host(.item-label-stacked) ::slotted(ion-select),\n:host(.item-label-floating) ::slotted(ion-select) {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 0px; }"; }
    static get styleMode() { return "ios"; }
}

class Label {
    componentDidLoad() {
        this.positionChanged();
    }
    positionChanged() {
        const position = this.position;
        this.ionStyle.emit({
            "label": true,
            [`label-${position}`]: !!position
        });
    }
    hostData() {
        const position = this.position;
        return {
            class: Object.assign({}, createColorClasses(this.color), { [`label-${position}`]: !!position })
        };
    }
    static get is() { return "ion-label"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "el": {
                "elementRef": true
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "position": {
                "type": String,
                "attr": "position",
                "watchCallbacks": ["positionChanged"]
            }
        };
    }
    static get events() {
        return [{
                "name": "ionStyle",
                "method": "ionStyle",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return ".sc-ion-label-ios-h {\n  margin: 0;\n  display: block;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  font-family: var(--ion-font-family, inherit);\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.ion-color.sc-ion-label-ios-h {\n  color: var(--ion-color-base); }\n\n[text-wrap].sc-ion-label-ios-h {\n  white-space: normal; }\n\n.item-interactive-disabled.sc-ion-label-ios-h, .item-interactive-disabled   .sc-ion-label-ios-h {\n  cursor: default;\n  opacity: .3;\n  pointer-events: none; }\n\n.item-input.sc-ion-label-ios-h, .item-input   .sc-ion-label-ios-h {\n  -webkit-box-flex: initial;\n  -ms-flex: initial;\n  flex: initial;\n  max-width: 200px;\n  pointer-events: none; }\n\n.label-fixed.sc-ion-label-ios-h {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 100px;\n  flex: 0 0 100px;\n  width: 100px;\n  min-width: 100px;\n  max-width: 200px; }\n\n.label-stacked.sc-ion-label-ios-h, .label-floating.sc-ion-label-ios-h {\n  margin-bottom: 0;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  width: auto;\n  max-width: 100%; }\n\n.item-has-focus.label-floating.sc-ion-label-ios-h, .item-has-focus   .label-floating.sc-ion-label-ios-h, .item-has-value.label-floating.sc-ion-label-ios-h, .item-has-value   .label-floating.sc-ion-label-ios-h {\n  -webkit-transform: translate3d(0,  0,  0) scale(0.8);\n  transform: translate3d(0,  0,  0) scale(0.8); }\n\n.sc-ion-label-ios-h {\n  margin: 10px 8px 10px 0; }\n\n[text-wrap].sc-ion-label-ios-h {\n  font-size: 14px;\n  line-height: 1.5; }\n\n.label-stacked.sc-ion-label-ios-h {\n  margin-bottom: 4px;\n  font-size: 12px; }\n\n.label-floating.sc-ion-label-ios-h {\n  margin-bottom: 0;\n  -webkit-transform: translate3d(0,  27px,  0);\n  transform: translate3d(0,  27px,  0);\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  -webkit-transition: -webkit-transform 150ms ease-in-out;\n  transition: -webkit-transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out; }\n\n.sc-ion-label-ios-s  h1  {\n  margin: 0 0 2px;\n  font-size: 24px;\n  font-weight: normal; }\n\n.sc-ion-label-ios-s  h2  {\n  margin: 0 0 2px;\n  font-size: 17px;\n  font-weight: normal; }\n\n.sc-ion-label-ios-s  h3 , .sc-ion-label-ios-s  h4 , .sc-ion-label-ios-s  h5 , .sc-ion-label-ios-s  h6  {\n  margin: 0 0 3px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: normal; }\n\n.sc-ion-label-ios-s  p  {\n  margin: 0 0 2px;\n  font-size: 14px;\n  line-height: normal;\n  text-overflow: inherit;\n  overflow: inherit; }\n\n.sc-ion-label-ios-s > p {\n  color: var(--ion-text-color-step-600, #999999); }\n\n.sc-ion-label-ios-h.ion-color.sc-ion-label-ios-s > p, .ion-color .sc-ion-label-ios-h.sc-ion-label-ios-s > p {\n  color: inherit; }\n\n.sc-ion-label-ios-s  h2:last-child , .sc-ion-label-ios-s  h3:last-child , .sc-ion-label-ios-s  h4:last-child , .sc-ion-label-ios-s  h5:last-child , .sc-ion-label-ios-s  h6:last-child , .sc-ion-label-ios-s  p:last-child  {\n  margin-bottom: 0; }"; }
    static get styleMode() { return "ios"; }
}

class ToolbarTitle {
    getMode() {
        const toolbar = this.el.closest("ion-toolbar");
        return (toolbar && toolbar.mode) || this.mode;
    }
    hostData() {
        const mode = this.getMode();
        return {
            class: Object.assign({}, createColorClasses(this.color), { [`title-${mode}`]: true })
        };
    }
    render() {
        return [
            h("div", { class: "toolbar-title" }, h("slot", null))
        ];
    }
    static get is() { return "ion-title"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "el": {
                "elementRef": true
            }
        };
    }
    static get style() { return ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0); }\n\n:host(.title-ios) {\n  left: 0;\n  top: 0;\n  padding: 0 90px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -.03em;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  pointer-events: none; }\n\n:host(.title-md) {\n  padding: 0 12px;\n  font-size: 20px;\n  font-weight: 500; }\n\n:host(.ion-color) {\n  color: var(--ion-color-base); }\n\n.toolbar-title {\n  display: block;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  pointer-events: auto; }"; }
}

class Toolbar {
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    render() {
        return [
            h("div", { class: "toolbar-background" }),
            h("div", { class: "toolbar-container" }, h("slot", { name: "start" }), h("slot", { name: "secondary" }), h("div", { class: "toolbar-content" }, h("slot", null)), h("slot", { name: "primary" }), h("slot", { name: "end" }))
        ];
    }
    static get is() { return "ion-toolbar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "config": {
                "context": "config"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            }
        };
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the toolbar\n   * \@prop --border-color: Color of the toolbar border\n   * \@prop --border-style: Style of the toolbar border\n   * \@prop --border-width: Width of the toolbar border\n   * \@prop --color: Color of the toolbar text\n   * \@prop --min-height: Minimum height of the toolbar\n   * \@prop --opacity: Opacity of the toolbar background\n   * \@prop --padding-bottom: Bottom padding of the toolbar\n   * \@prop --padding-end: End padding of the toolbar\n   * \@prop --padding-start: Start padding of the toolbar\n   * \@prop --padding-top: Top padding of the toolbar\n   */\n  --border-width: 0;\n  --border-style: solid;\n  --opacity: 1;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  padding-left: var(--ion-safe-area-left);\n  padding-right: var(--ion-safe-area-right);\n  display: block;\n  position: relative;\n  width: 100%;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  contain: content;\n  z-index: 10;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n:host(.ion-color) {\n  color: var(--ion-color-contrast); }\n\n:host(.ion-color) .toolbar-background {\n  background: var(--ion-color-base); }\n\n.toolbar-container {\n  padding: var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: var(--min-height);\n  contain: content;\n  overflow: hidden;\n  z-index: 10;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.toolbar-background {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  background: var(--background);\n  contain: strict;\n  opacity: var(--opacity);\n  z-index: -1;\n  pointer-events: none; }\n\n:host {\n  --background: var(--ion-toolbar-background-color, #f8f8f8);\n  --color: var(--ion-toolbar-text-color, var(--ion-text-color, #000));\n  --border-color: rgba(var(--ion-toolbar-border-color-rgb, 0, 0, 0), 0.2);\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 44px; }\n\n.toolbar-content {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-ordinal-group: 5;\n  -ms-flex-order: 4;\n  order: 4;\n  min-width: 0; }"; }
    static get styleMode() { return "ios"; }
}

export { Content as IonContent, Header as IonHeader, Item as IonItem, Label as IonLabel, ToolbarTitle as IonTitle, Toolbar as IonToolbar };
