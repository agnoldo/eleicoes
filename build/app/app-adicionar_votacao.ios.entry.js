/*! Built with http://stenciljs.com */
const { h } = window.App;

import { b as createColorClasses, d as createThemedClasses, m as isEndSide, n as debounceEvent } from './chunk-c7f82f3c.js';

class AppAdicionarVotacao {
    constructor() {
        this.initializeItems();
    }
    governo(sigla, event) {
        console.log('governo ' + sigla);
        console.log(event);
        this.eventoGoverno.emit();
    }
    senado(sigla, event) {
        console.log('senado ' + sigla);
        console.log(event);
        this.eventoSenado.emit();
    }
    initializeItems() {
        this.items = [
            { "nome": "BRASIL", "sigla": "BR" },
            { "nome": "Acre", "sigla": "AC" },
            { "nome": "Alagoas", "sigla": "AL" },
            { "nome": "Amapá", "sigla": "AP" },
            { "nome": "Amazonas", "sigla": "AM" },
            { "nome": "Bahia", "sigla": "BA" },
            { "nome": "Ceará", "sigla": "CE" },
            { "nome": "Distrito Federal", "sigla": "DF" },
            { "nome": "Espírito Santo", "sigla": "ES" },
            { "nome": "Goiás", "sigla": "GO" },
            { "nome": "Maranhão", "sigla": "MA" },
            { "nome": "Mato Grosso", "sigla": "MT" },
            { "nome": "Mato Grosso do Sul", "sigla": "MS" },
            { "nome": "Minas Gerais", "sigla": "MG" },
            { "nome": "Pará", "sigla": "PA" },
            { "nome": "Paraíba", "sigla": "PB" },
            { "nome": "Paraná", "sigla": "PR" },
            { "nome": "Pernambuco", "sigla": "PE" },
            { "nome": "Piauí", "sigla": "PI" },
            { "nome": "Rio de Janeiro", "sigla": "RJ" },
            { "nome": "Rio Grande do Norte", "sigla": "RN" },
            { "nome": "Rio Grande do Sul", "sigla": "RS" },
            { "nome": "Rondônia", "sigla": "RO" },
            { "nome": "Roraima", "sigla": "RR" },
            { "nome": "Santa Catarina", "sigla": "SC" },
            { "nome": "São Paulo", "sigla": "SP" },
            { "nome": "Sergipe", "sigla": "SE" },
            { "nome": "Tocantins", "sigla": "TO" }
        ];
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.items = this.items.filter(item => {
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
    render() {
        return [
            h("ion-header", { translucent: true },
                h("ion-toolbar", null,
                    h("ion-title", null, "Adicionar \u00E1rea de vota\u00E7\u00E3o"))),
            h("ion-content", { fullscreen: true },
                h("ion-searchbar", { placeholder: "\u00C1rea de vota\u00E7\u00E3o", onIonInput: event => this.getItems(event) }),
                h("ion-list", null, this.items.map(item => {
                    if (item.nome == 'BRASIL') {
                        return (h("ion-item-sliding", null,
                            h("ion-item-options", { side: "start" },
                                h("ion-item-option", { onClick: event => this.governo(item.sigla, event) }, "Presid\u00EAncia")),
                            h("ion-item", null,
                                h("ion-label", null, item.nome)),
                            h("ion-item-options", { side: "end" },
                                h("ion-item-option", { onClick: event => this.governo(item.sigla, event) }, "Presid\u00EAncia"))));
                    }
                    else {
                        return (h("ion-item-sliding", null,
                            h("ion-item-options", { side: "start" },
                                h("ion-item-option", { onClick: event => this.governo(item.sigla, event) }, "Governo")),
                            h("ion-item", null,
                                h("ion-label", null, item.nome)),
                            h("ion-item-options", { side: "end" },
                                h("ion-item-option", { onClick: event => this.senado(item.sigla, event) }, "Senado"))));
                    }
                })))
        ];
    }
    static get is() { return "app-adicionar_votacao"; }
    static get properties() { return {
        "items": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "eventoGoverno",
            "method": "eventoGoverno",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "eventoSenado",
            "method": "eventoSenado",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ""; }
}

class ItemOption {
    constructor() {
        this.disabled = false;
        this.expandable = false;
    }
    clickedOptionButton(ev) {
        const el = ev.target.closest("ion-item-option");
        return !!el;
    }
    hostData() {
        return {
            "ion-activatable": true,
            class: Object.assign({}, createColorClasses(this.color), { "item-option-expandable": this.expandable })
        };
    }
    render() {
        const TagType = this.href === undefined ? "button" : "a";
        return (h(TagType, { type: "button", class: "button-native", disabled: this.disabled, href: this.href, onClick: this.clickedOptionButton.bind(this) }, h("span", { class: "button-inner" }, h("slot", { name: "start" }), h("slot", { name: "top" }), h("slot", { name: "icon-only" }), h("slot", null), h("slot", { name: "bottom" }), h("slot", { name: "end" })), this.mode === "md" && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-item-option"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "disabled": {
                "type": Boolean,
                "attr": "disabled"
            },
            "el": {
                "elementRef": true
            },
            "expandable": {
                "type": Boolean,
                "attr": "expandable"
            },
            "href": {
                "type": String,
                "attr": "href"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            }
        };
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the item option\n   * \@prop --color: Color of the item option\n   */\n  --background: var(--ion-color-primary, #3880ff);\n  --color: var(--ion-color-primary-contrast, #fff);\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit); }\n\n:host(.in-list.item-options-end:last-child) {\n  padding-right: calc(.7em + var(--ion-safe-area-right)); }\n\n:host(.in-list.item-options-start:first-child) {\n  padding-left: calc(.7em + var(--ion-safe-area-left)); }\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n.button-native {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  padding: 0 0.7em;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  outline: none;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.button-inner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n\n::slotted([slot=\"icon-only\"]) {\n  padding: 0;\n  margin: 0 10px;\n  min-width: .9em;\n  font-size: 1.8em; }\n\n:host(.item-option-expandable) {\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-transition-duration: 0;\n  transition-duration: 0;\n  -webkit-transition-property: none;\n  transition-property: none;\n  -webkit-transition-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1); }\n\n:host {\n  font-size: 16px; }\n\n:host(.activated) {\n  background: var(--ion-color-primary-shade, #3171e0); }\n\n:host(.ion-color.activated) {\n  background: var(--ion-color-shade); }"; }
    static get styleMode() { return "ios"; }
}

class ItemOptions {
    constructor() {
        this.side = "end";
    }
    fireSwipeEvent() {
        this.ionSwipe.emit({
            side: this.side
        });
    }
    hostData() {
        const isEnd = isEndSide(this.win, this.side);
        return {
            class: {
                "item-options-start": !isEnd,
                "item-options-end": isEnd
            }
        };
    }
    static get is() { return "ion-item-options"; }
    static get properties() {
        return {
            "el": {
                "elementRef": true
            },
            "fireSwipeEvent": {
                "method": true
            },
            "side": {
                "type": String,
                "attr": "side"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionSwipe",
                "method": "ionSwipe",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return "ion-item-options {\n  /* stylelint-disable property-blacklist */\n  top: 0;\n  right: 0;\n  /* stylelint-enable property-blacklist */\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  display: none;\n  position: absolute;\n  height: 100%;\n  font-size: 14px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 1; }\n\n.item-options-start {\n  /* stylelint-disable property-blacklist */\n  right: auto;\n  left: 0;\n  /* stylelint-enable property-blacklist */\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start; }\n\n.item-options-start ion-item-option:first-child {\n  padding-right: var(--ion-safe-area-left); }\n\n.item-options-end ion-item-option:last-child {\n  padding-right: var(--ion-safe-area-right); }\n\n.item-sliding-active-slide ion-item-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,\n.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start) {\n  width: 100%;\n  visibility: visible; }\n\n.item-options-ios {\n  border-bottom-width: 0;\n  border-bottom-style: solid;\n  border-bottom-color: var(--ion-item-border-color, #c8c7cc); }\n  .item-options-ios.item-options-end {\n    border-bottom-width: 0.55px; }\n\n.list-ios-lines-none .item-options-ios {\n  border-bottom-width: 0; }\n\n.list-ios-lines-full .item-options-ios,\n.list-ios-lines-inset .item-options-ios.item-options-end {\n  border-bottom-width: 0.55px; }"; }
    static get styleMode() { return "ios"; }
}

const SWIPE_MARGIN = 30;
const ELASTIC_FACTOR = 0.55;
let openSlidingItem;
class ItemSliding {
    constructor() {
        this.item = null;
        this.openAmount = 0;
        this.initialOpenAmount = 0;
        this.optsWidthRightSide = 0;
        this.optsWidthLeftSide = 0;
        this.sides = 0;
        this.optsDirty = true;
        this.state = 2;
        this.disabled = false;
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    async componentDidLoad() {
        this.item = this.el.querySelector("ion-item");
        await this.updateOptions();
        this.gesture = (await import("./gesture.js")).createGesture({
            el: this.el,
            queue: this.queue,
            gestureName: "item-swipe",
            gesturePriority: 100,
            threshold: 5,
            canStart: () => this.canStart(),
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.disabledChanged();
    }
    componentDidUnload() {
        if (this.gesture) {
            this.gesture.destroy();
        }
        this.item = null;
        this.leftOptions = this.rightOptions = undefined;
    }
    getOpenAmount() {
        return Promise.resolve(this.openAmount);
    }
    getSlidingRatio() {
        return Promise.resolve(this.getSlidingRatioSync());
    }
    async close() {
        this.setOpenAmount(0, true);
    }
    async closeOpened() {
        if (openSlidingItem !== undefined) {
            openSlidingItem.close();
            return true;
        }
        return false;
    }
    async updateOptions() {
        const options = this.el.querySelectorAll("ion-item-options");
        let sides = 0;
        this.leftOptions = this.rightOptions = undefined;
        for (let i = 0; i < options.length; i++) {
            const option = await options.item(i).componentOnReady();
            if (option.side === "start") {
                this.leftOptions = option;
                sides |= 1;
            }
            else {
                this.rightOptions = option;
                sides |= 2;
            }
        }
        this.optsDirty = true;
        this.sides = sides;
    }
    canStart() {
        const selected = openSlidingItem;
        if (selected && selected !== this.el) {
            this.closeOpened();
            return false;
        }
        return !!(this.rightOptions || this.leftOptions);
    }
    onStart() {
        openSlidingItem = this.el;
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (this.openAmount === 0) {
            this.optsDirty = true;
            this.state = 4;
        }
        this.initialOpenAmount = this.openAmount;
        if (this.item) {
            this.item.style.transition = "none";
        }
    }
    onMove(gesture) {
        if (this.optsDirty) {
            this.calculateOptsWidth();
        }
        let openAmount = this.initialOpenAmount - gesture.deltaX;
        switch (this.sides) {
            case 2:
                openAmount = Math.max(0, openAmount);
                break;
            case 1:
                openAmount = Math.min(0, openAmount);
                break;
            case 3: break;
            case 0: return;
            default:
                console.warn("invalid ItemSideFlags value", this.sides);
                break;
        }
        let optsWidth;
        if (openAmount > this.optsWidthRightSide) {
            optsWidth = this.optsWidthRightSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        else if (openAmount < -this.optsWidthLeftSide) {
            optsWidth = -this.optsWidthLeftSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        this.setOpenAmount(openAmount, false);
    }
    onEnd(gesture) {
        const velocity = gesture.velocityX;
        let restingPoint = (this.openAmount > 0)
            ? this.optsWidthRightSide
            : -this.optsWidthLeftSide;
        const isResetDirection = (this.openAmount > 0) === !(velocity < 0);
        const isMovingFast = Math.abs(velocity) > 0.3;
        const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
        if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
            restingPoint = 0;
        }
        const state = this.state;
        this.setOpenAmount(restingPoint, true);
        if ((state & 32) !== 0 && this.rightOptions) {
            this.rightOptions.fireSwipeEvent();
        }
        else if ((state & 64) !== 0 && this.leftOptions) {
            this.leftOptions.fireSwipeEvent();
        }
    }
    calculateOptsWidth() {
        this.optsWidthRightSide = 0;
        if (this.rightOptions) {
            this.optsWidthRightSide = this.rightOptions.offsetWidth;
        }
        this.optsWidthLeftSide = 0;
        if (this.leftOptions) {
            this.optsWidthLeftSide = this.leftOptions.offsetWidth;
        }
        this.optsDirty = false;
    }
    setOpenAmount(openAmount, isFinal) {
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (!this.item) {
            return;
        }
        const style = this.item.style;
        this.openAmount = openAmount;
        if (isFinal) {
            style.transition = "";
        }
        if (openAmount > 0) {
            this.state = (openAmount >= (this.optsWidthRightSide + SWIPE_MARGIN))
                ? 8 | 32
                : 8;
        }
        else if (openAmount < 0) {
            this.state = (openAmount <= (-this.optsWidthLeftSide - SWIPE_MARGIN))
                ? 16 | 64
                : 16;
        }
        else {
            this.tmr = window.setTimeout(() => {
                this.state = 2;
                this.tmr = undefined;
            }, 600);
            openSlidingItem = undefined;
            style.transform = "";
            return;
        }
        style.transform = `translate3d(${-openAmount}px,0,0)`;
        this.ionDrag.emit({
            amount: openAmount,
            ratio: this.getSlidingRatioSync()
        });
    }
    getSlidingRatioSync() {
        if (this.openAmount > 0) {
            return this.openAmount / this.optsWidthRightSide;
        }
        else if (this.openAmount < 0) {
            return this.openAmount / this.optsWidthLeftSide;
        }
        else {
            return 0;
        }
    }
    hostData() {
        return {
            class: {
                "item-sliding-active-slide": (this.state !== 2),
                "item-sliding-active-options-end": (this.state & 8) !== 0,
                "item-sliding-active-options-start": (this.state & 16) !== 0,
                "item-sliding-active-swipe-end": (this.state & 32) !== 0,
                "item-sliding-active-swipe-start": (this.state & 64) !== 0
            }
        };
    }
    static get is() { return "ion-item-sliding"; }
    static get properties() {
        return {
            "close": {
                "method": true
            },
            "closeOpened": {
                "method": true
            },
            "disabled": {
                "type": Boolean,
                "attr": "disabled",
                "watchCallbacks": ["disabledChanged"]
            },
            "el": {
                "elementRef": true
            },
            "getOpenAmount": {
                "method": true
            },
            "getSlidingRatio": {
                "method": true
            },
            "queue": {
                "context": "queue"
            },
            "state": {
                "state": true
            }
        };
    }
    static get events() {
        return [{
                "name": "ionDrag",
                "method": "ionDrag",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return "ion-item-sliding {\n  display: block;\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\nion-item-sliding .item {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.item-sliding-active-slide .item {\n  position: relative;\n  -webkit-transition: -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  background: var(--ion-item-background-color, var(--ion-background-color, #fff));\n  opacity: 1;\n  z-index: 2;\n  pointer-events: none;\n  will-change: transform; }\n\n.item-sliding-active-swipe-end .item-options-end .item-option-expandable {\n  /* stylelint-disable-next-line property-blacklist */\n  padding-left: 90%;\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n  -webkit-transition-duration: .6s;\n  transition-duration: .6s;\n  -webkit-transition-property: padding-left;\n  transition-property: padding-left; }\n\n.item-sliding-active-swipe-start .item-options-start .item-option-expandable {\n  /* stylelint-disable-next-line property-blacklist */\n  padding-right: 90%;\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n  -webkit-transition-duration: .6s;\n  transition-duration: .6s;\n  -webkit-transition-property: padding-right;\n  transition-property: padding-right; }"; }
}
function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
    return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
}

class List {
    constructor() {
        this.inset = false;
    }
    async closeSlidingItems() {
        const item = this.el.querySelector("ion-item-sliding");
        if (item && item.closeOpened) {
            return item.closeOpened();
        }
        return false;
    }
    hostData() {
        return {
            class: Object.assign({}, createThemedClasses(this.mode, "list"), { [`list-lines-${this.lines}`]: !!this.lines, "list-inset": this.inset, [`list-${this.mode}-lines-${this.lines}`]: !!this.lines })
        };
    }
    static get is() { return "ion-list"; }
    static get properties() {
        return {
            "closeSlidingItems": {
                "method": true
            },
            "el": {
                "elementRef": true
            },
            "inset": {
                "type": Boolean,
                "attr": "inset"
            },
            "lines": {
                "type": String,
                "attr": "lines"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            }
        };
    }
    static get style() { return "ion-list {\n  margin: 0;\n  padding: 0;\n  display: block;\n  background: var(--ion-item-background-color, var(--ion-background-color, #fff));\n  contain: content;\n  list-style-type: none; }\n\nion-list.list-inset {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  overflow: hidden; }\n\n.list-ios {\n  margin: -1px 0 32px; }\n\n.list-ios:not(.list-inset):not(.list-ios-lines-none) .item:last-child {\n  --inner-border-width: 0;\n  --border-width: 0 0 0.55px 0; }\n\n.list-ios.list-inset {\n  margin: 16px;\n  border-radius: 4px; }\n\n.list-ios.list-inset ion-item {\n  --border-width: 0 0 1px 0;\n  --inner-border-width: 0; }\n\n.list-ios.list-inset ion-item:last-child {\n  --border-width: 0;\n  --inner-border-width: 0; }\n\n.list-ios.list-inset + ion-list.list-inset {\n  margin-top: 0; }\n\n.list-ios-lines-none .item {\n  --border-width: 0;\n  --inner-border-width: 0; }\n\n.list-ios-lines-full .item,\n.list-ios .item-lines-full {\n  --border-width: 0 0 0.55px 0; }\n\n.list-ios-lines-full .item {\n  --inner-border-width: 0; }\n\n.list-ios-lines-inset .item,\n.list-ios .item-lines-inset {\n  --inner-border-width: 0 0 0.55px 0; }\n\n.list-ios .item-lines-inset {\n  --border-width: 0; }\n\n.list-ios .item-lines-full {\n  --inner-border-width: 0; }"; }
    static get styleMode() { return "ios"; }
}

class Searchbar {
    constructor() {
        this.isCancelVisible = false;
        this.shouldAlignLeft = true;
        this.focused = false;
        this.animated = false;
        this.autocomplete = "off";
        this.autocorrect = "off";
        this.cancelButtonIcon = "md-arrow-back";
        this.cancelButtonText = "Cancel";
        this.debounce = 250;
        this.placeholder = "Search";
        this.showCancelButton = false;
        this.spellcheck = false;
        this.type = "search";
        this.value = "";
    }
    debounceChanged() {
        this.ionChange = debounceEvent(this.ionChange, this.debounce);
    }
    valueChanged() {
        const inputEl = this.nativeInput;
        const value = this.value;
        if (inputEl.value !== value) {
            inputEl.value = value;
        }
        this.ionChange.emit({ value });
    }
    componentDidLoad() {
        this.positionElements();
        this.debounceChanged();
    }
    focus() {
        this.nativeInput.focus();
    }
    clearInput(ev) {
        this.ionClear.emit();
        if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        setTimeout(() => {
            const value = this.value;
            if (value !== "") {
                this.value = "";
                this.ionInput.emit();
            }
        }, 16 * 4);
    }
    cancelSearchbar(ev) {
        if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        this.ionCancel.emit();
        this.clearInput();
        this.nativeInput.blur();
    }
    onInput(ev) {
        const input = ev.target;
        if (input) {
            this.value = input.value;
        }
        this.ionInput.emit(ev);
    }
    onBlur() {
        this.focused = false;
        this.ionBlur.emit();
        this.positionElements();
    }
    onFocus() {
        this.focused = true;
        this.ionFocus.emit();
        this.positionElements();
    }
    positionElements() {
        const prevAlignLeft = this.shouldAlignLeft;
        const shouldAlignLeft = (!this.animated || (this.value && this.value.toString().trim() !== "") || !!this.focused);
        this.shouldAlignLeft = shouldAlignLeft;
        if (this.mode !== "ios") {
            return;
        }
        if (prevAlignLeft !== shouldAlignLeft) {
            this.positionPlaceholder();
        }
        if (this.animated) {
            this.positionCancelButton();
        }
    }
    positionPlaceholder() {
        const isRTL = this.doc.dir === "rtl";
        const inputEl = this.nativeInput;
        const iconEl = (this.el.shadowRoot || this.el).querySelector(".searchbar-search-icon");
        if (this.shouldAlignLeft) {
            inputEl.removeAttribute("style");
            iconEl.removeAttribute("style");
        }
        else {
            const doc = this.doc;
            const tempSpan = doc.createElement("span");
            tempSpan.innerHTML = this.placeholder;
            doc.body.appendChild(tempSpan);
            const textWidth = tempSpan.offsetWidth;
            tempSpan.remove();
            const inputLeft = "calc(50% - " + (textWidth / 2) + "px)";
            const iconLeft = "calc(50% - " + ((textWidth / 2) + 30) + "px)";
            if (isRTL) {
                inputEl.style.paddingRight = inputLeft;
                iconEl.style.marginRight = iconLeft;
            }
            else {
                inputEl.style.paddingLeft = inputLeft;
                iconEl.style.marginLeft = iconLeft;
            }
        }
    }
    positionCancelButton() {
        const isRTL = this.doc.dir === "rtl";
        const cancelButton = (this.el.shadowRoot || this.el).querySelector(".searchbar-cancel-button");
        const shouldShowCancel = this.focused;
        if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
            const cancelStyle = cancelButton.style;
            this.isCancelVisible = shouldShowCancel;
            if (shouldShowCancel) {
                if (isRTL) {
                    cancelStyle.marginLeft = "0";
                }
                else {
                    cancelStyle.marginRight = "0";
                }
            }
            else {
                const offset = cancelButton.offsetWidth;
                if (offset > 0) {
                    if (isRTL) {
                        cancelStyle.marginLeft = -offset + "px";
                    }
                    else {
                        cancelStyle.marginRight = -offset + "px";
                    }
                }
            }
        }
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { "searchbar-animated": this.animated, "searchbar-has-value": (this.value !== ""), "searchbar-show-cancel": this.showCancelButton, "searchbar-left-aligned": this.shouldAlignLeft, "searchbar-has-focus": this.focused })
        };
    }
    render() {
        const clearIcon = this.clearIcon || (this.mode === "ios" ? "ios-close-circle" : "md-close");
        const searchIcon = this.searchIcon || "search";
        const cancelButton = this.showCancelButton && (h("button", { type: "button", tabIndex: this.mode === "ios" && !this.focused ? -1 : undefined, onMouseDown: this.cancelSearchbar.bind(this), onTouchStart: this.cancelSearchbar.bind(this), class: "searchbar-cancel-button" }, this.mode === "md"
            ? h("ion-icon", { mode: this.mode, icon: this.cancelButtonIcon, lazy: false })
            : this.cancelButtonText));
        return [
            h("div", { class: "searchbar-input-container" }, h("input", { ref: el => this.nativeInput = el, class: "searchbar-input", onInput: this.onInput.bind(this), onBlur: this.onBlur.bind(this), onFocus: this.onFocus.bind(this), placeholder: this.placeholder, type: this.type, value: this.value, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellCheck: this.spellcheck }), this.mode === "md" && cancelButton, h("ion-icon", { mode: this.mode, icon: searchIcon, lazy: false, class: "searchbar-search-icon" }), h("button", { type: "button", "no-blur": true, class: "searchbar-clear-button", onMouseDown: this.clearInput.bind(this), onTouchStart: this.clearInput.bind(this) }, h("ion-icon", { mode: this.mode, icon: clearIcon, lazy: false, class: "searchbar-clear-icon" }))),
            this.mode === "ios" && cancelButton
        ];
    }
    static get is() { return "ion-searchbar"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "animated": {
                "type": Boolean,
                "attr": "animated"
            },
            "autocomplete": {
                "type": String,
                "attr": "autocomplete"
            },
            "autocorrect": {
                "type": String,
                "attr": "autocorrect"
            },
            "cancelButtonIcon": {
                "type": String,
                "attr": "cancel-button-icon"
            },
            "cancelButtonText": {
                "type": String,
                "attr": "cancel-button-text"
            },
            "clearIcon": {
                "type": String,
                "attr": "clear-icon"
            },
            "color": {
                "type": String,
                "attr": "color"
            },
            "debounce": {
                "type": Number,
                "attr": "debounce",
                "watchCallbacks": ["debounceChanged"]
            },
            "doc": {
                "context": "document"
            },
            "el": {
                "elementRef": true
            },
            "focus": {
                "method": true
            },
            "focused": {
                "state": true
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "placeholder": {
                "type": String,
                "attr": "placeholder"
            },
            "searchIcon": {
                "type": String,
                "attr": "search-icon"
            },
            "showCancelButton": {
                "type": Boolean,
                "attr": "show-cancel-button"
            },
            "spellcheck": {
                "type": Boolean,
                "attr": "spellcheck"
            },
            "type": {
                "type": String,
                "attr": "type"
            },
            "value": {
                "type": String,
                "attr": "value",
                "mutable": true,
                "watchCallbacks": ["valueChanged"]
            }
        };
    }
    static get events() {
        return [{
                "name": "ionInput",
                "method": "ionInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionChange",
                "method": "ionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionCancel",
                "method": "ionCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionClear",
                "method": "ionClear",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionBlur",
                "method": "ionBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionFocus",
                "method": "ionFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return ".sc-ion-searchbar-ios-h {\n  \n  --placeholder-color: currentColor;\n  --placeholder-font-style: inherit;\n  --placeholder-font-weight: inherit;\n  --placeholder-opacity: .5;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.ion-color.sc-ion-searchbar-ios-h {\n  color: var(--ion-color-contrast); }\n\n.ion-color.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios {\n  background: var(--ion-color-base); }\n\n.ion-color.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios {\n  color: inherit; }\n\n.searchbar-search-icon.sc-ion-searchbar-ios {\n  color: var(--icon-color);\n  pointer-events: none; }\n\n.searchbar-input-container.sc-ion-searchbar-ios {\n  display: block;\n  position: relative;\n  -ms-flex-negative: 1;\n  flex-shrink: 1;\n  width: 100%; }\n\n.searchbar-input.sc-ion-searchbar-ios {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border: 0;\n  outline: none;\n  background: var(--background);\n  font-family: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n  .searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .searchbar-input.sc-ion-searchbar-ios::placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button {\n    display: none; }\n\n.searchbar-cancel-button.sc-ion-searchbar-ios {\n  color: var(--cancel-button-color); }\n\n.searchbar-clear-button.sc-ion-searchbar-ios {\n  margin: 0;\n  padding: 0;\n  display: none;\n  min-height: 0;\n  outline: none;\n  color: var(--clear-button-color);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios {\n  display: block; }\n\n.sc-ion-searchbar-ios-h {\n  --clear-button-color: var(--ion-text-color-step-400, #666666);\n  --cancel-button-color: var(--ion-color-primary, #3880ff);\n  --color: var(--ion-text-color, #000);\n  --icon-color: var(--ion-text-color-step-400, #666666);\n  --background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);\n  padding: 12px;\n  height: 60px;\n  contain: strict; }\n\n.searchbar-input-container.sc-ion-searchbar-ios {\n  height: 36px;\n  contain: strict; }\n\n.searchbar-search-icon.sc-ion-searchbar-ios {\n  margin-left: calc(50% - 60px);\n  left: 8px;\n  top: 0;\n  position: absolute;\n  width: 16px;\n  height: 100%;\n  contain: strict; }\n\n.searchbar-input.sc-ion-searchbar-ios {\n  padding: 0 28px;\n  border-radius: 10px;\n  height: 100%;\n  font-size: 14px;\n  font-weight: 400;\n  contain: strict; }\n\n.searchbar-clear-button.sc-ion-searchbar-ios {\n  right: 0;\n  top: 0;\n  background-position: center;\n  position: absolute;\n  width: 30px;\n  height: 100%;\n  border: 0;\n  background-color: transparent; }\n\n.searchbar-clear-icon.sc-ion-searchbar-ios {\n  width: 18px;\n  height: 100%; }\n\n.searchbar-cancel-button.sc-ion-searchbar-ios {\n  padding: 0 0 0 8px;\n  display: none;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  font-size: 16px;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios {\n  margin-left: 0; }\n\n.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios {\n  padding-left: 30px; }\n\n.searchbar-show-cancel.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-show-cancel.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios {\n  display: block; }\n\n.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios, .searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios {\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease; }\n\n.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios {\n  opacity: 1;\n  pointer-events: auto; }\n\n.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios {\n  margin-right: -100%;\n  -webkit-transform: translate3d(0,  0,  0);\n  transform: translate3d(0,  0,  0);\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease;\n  opacity: 0;\n  pointer-events: none; }\n\n.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios {\n  color: var(--ion-color-base); }\n\n\@media (any-hover: hover) {\n  .ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios:hover {\n    color: var(--ion-color-tint); } }\n\nion-toolbar.ion-color.sc-ion-searchbar-ios-h, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h {\n  color: inherit; }\n\nion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios {\n  color: currentColor; }\n\nion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios {\n  color: currentColor;\n  opacity: 0.5; }\n\nion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios {\n  background: rgba(var(--ion-color-contrast-rgb), 0.07);\n  color: currentColor; }\n\nion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios {\n  color: currentColor;\n  opacity: 0.5; }"; }
    static get styleMode() { return "ios"; }
}

export { AppAdicionarVotacao as AppAdicionar_votacao, ItemOption as IonItemOption, ItemOptions as IonItemOptions, ItemSliding as IonItemSliding, List as IonList, Searchbar as IonSearchbar };
