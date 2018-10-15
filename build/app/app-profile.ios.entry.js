/*! Built with http://stenciljs.com */
const { h } = window.App;

import { b as createColorClasses, e as openURL, c as hostContext, f as deferEvent, g as renderHiddenInput } from './chunk-c7f82f3c.js';

function sayHello() {
    return Math.random() < 0.5 ? 'Hello' : 'Hola';
}

class AppProfile {
    constructor() {
        this.state = false;
    }
    formattedName() {
        if (this.name) {
            return this.name.substr(0, 1).toUpperCase() + this.name.substr(1).toLowerCase();
        }
        return '';
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "primary" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: "/" })),
                    h("ion-title", null,
                        "Profile: ",
                        this.name))),
            h("ion-content", { padding: true },
                h("p", null,
                    sayHello(),
                    "! My name is ",
                    this.formattedName(),
                    ". My name was passed in through a route param!"),
                h("ion-item", null,
                    h("ion-label", null,
                        "Setting (",
                        this.state.toString(),
                        ")"),
                    h("ion-toggle", { checked: this.state, onIonChange: ev => (this.state = ev.detail.checked) })))
        ];
    }
    static get is() { return "app-profile"; }
    static get properties() { return {
        "name": {
            "type": String,
            "attr": "name"
        },
        "state": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

class BackButton {
    async onClick(ev) {
        const nav = this.el.closest("ion-nav");
        ev.preventDefault();
        if (nav && await nav.canGoBack()) {
            return nav.pop({ skipIfBusy: true });
        }
        return openURL(this.win, this.defaultHref, ev, "back");
    }
    hostData() {
        const showBackButton = this.defaultHref !== undefined;
        return {
            "ion-activatable": true,
            class: Object.assign({}, createColorClasses(this.color), { "button": true, "show-back-button": showBackButton })
        };
    }
    render() {
        const defaultBackButtonText = this.mode === "ios" ? "Back" : null;
        const backButtonIcon = this.icon != null ? this.icon : this.config.get("backButtonIcon", "arrow-back");
        const backButtonText = this.text != null ? this.text : this.config.get("backButtonText", defaultBackButtonText);
        return (h("button", { type: "button", class: "button-native", onClick: ev => this.onClick(ev) }, h("span", { class: "button-inner" }, backButtonIcon && h("ion-icon", { icon: backButtonIcon, lazy: false }), backButtonText && h("span", { class: "button-text" }, backButtonText), this.mode === "md" && h("ion-ripple-effect", null)), this.mode === "md" && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-back-button"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "config": {
                "context": "config"
            },
            "defaultHref": {
                "type": String,
                "attr": "default-href"
            },
            "el": {
                "elementRef": true
            },
            "icon": {
                "type": String,
                "attr": "icon"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "text": {
                "type": String,
                "attr": "text"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get style() { return ".sc-ion-back-button-ios-h {\n  \n  --background: transparent;\n  --ripple-color: currentColor;\n  --transition: background-color, opacity 100ms linear;\n  --opacity: 1;\n  display: none;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-font-kerning: none;\n  font-kerning: none; }\n\n.ion-color.sc-ion-back-button-ios-h   .button-native.sc-ion-back-button-ios {\n  color: var(--ion-color-base); }\n\n.activated.sc-ion-back-button-ios-h   .button-native.sc-ion-back-button-ios {\n  opacity: .4; }\n\n.can-go-back.sc-ion-back-button-ios-h    > ion-header.sc-ion-back-button-ios, .can-go-back    > ion-header   .sc-ion-back-button-ios-h, .show-back-button.sc-ion-back-button-ios-h {\n  display: block; }\n\n.button-native.sc-ion-back-button-ios {\n  border-radius: var(--border-radius);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin: var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);\n  padding: var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: block;\n  position: relative;\n  min-width: var(--min-width);\n  min-height: var(--min-height);\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border: 0;\n  outline: none;\n  background: var(--background);\n  line-height: 1;\n  cursor: pointer;\n  opacity: var(--opacity);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.button-inner.sc-ion-back-button-ios {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n\nion-icon.sc-ion-back-button-ios {\n  padding: var(--icon-padding-top) var(--icon-padding-end) var(--icon-padding-bottom) var(--icon-padding-start);\n  margin: var(--icon-margin-top) var(--icon-margin-end) var(--icon-margin-bottom) var(--icon-margin-start);\n  display: inherit;\n  font-size: var(--icon-font-size);\n  font-weight: var(--icon-font-weight);\n  pointer-events: none; }\n\n.sc-ion-back-button-ios-h {\n  --color: var(--ion-color-primary, #3880ff);\n  --margin-top: 0;\n  --margin-end: 0;\n  --margin-bottom: 0;\n  --margin-start: 0;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --min-height: 32px;\n  --min-width: auto;\n  --icon-padding-top: 0;\n  --icon-padding-end: 0;\n  --icon-padding-bottom: 0;\n  --icon-padding-start: 0;\n  --icon-margin-top: 0;\n  --icon-margin-end: -5px;\n  --icon-margin-bottom: 0;\n  --icon-margin-start: -4px;\n  --icon-font-size: 1.85em;\n  font-size: 17px; }\n\n.button-native.sc-ion-back-button-ios {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  overflow: visible;\n  z-index: 99; }"; }
    static get styleMode() { return "ios"; }
}

class Buttons {
    static get is() { return "ion-buttons"; }
    static get encapsulation() { return "scoped"; }
    static get style() { return ".sc-ion-buttons-ios-h {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  z-index: 99; }\n\n.sc-ion-buttons-ios-s  ion-button  {\n  --margin-top: 0;\n  --margin-bottom: 0;\n  --margin-start: 0;\n  --margin-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  --box-shadow: none;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.sc-ion-buttons-ios-s  ion-button  {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  --height: 32px;\n  font-size: 17px;\n  font-weight: 400; }\n\n.sc-ion-buttons-ios-s  ion-button:not(.button-round)  {\n  --border-radius: 4px; }\n\n.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button  {\n  --color: currentColor;\n  --color-activated: currentColor; }\n\n\@media (any-hover: hover) {\n  .sc-ion-buttons-ios-s  .button-solid-ios:hover  {\n    opacity: .4; } }\n\n.sc-ion-buttons-ios-s  ion-icon[slot=\"start\"]  {\n  margin: 0;\n  margin-right: 0.3em;\n  font-size: 24px;\n  line-height: .67; }\n\n.sc-ion-buttons-ios-s  ion-icon[slot=\"end\"]  {\n  margin: 0;\n  margin-left: 0.4em;\n  font-size: 24px;\n  line-height: .67; }\n\n.sc-ion-buttons-ios-s  ion-icon[slot=\"icon-only\"]  {\n  padding: 0;\n  margin: 0;\n  font-size: 31px;\n  line-height: .67; }\n\n[slot=\"start\"].sc-ion-buttons-ios-h {\n  -webkit-box-ordinal-group: 3;\n  -ms-flex-order: 2;\n  order: 2; }\n\n[slot=\"secondary\"].sc-ion-buttons-ios-h {\n  -webkit-box-ordinal-group: 4;\n  -ms-flex-order: 3;\n  order: 3; }\n\n[slot=\"primary\"].sc-ion-buttons-ios-h {\n  -webkit-box-ordinal-group: 6;\n  -ms-flex-order: 5;\n  order: 5;\n  text-align: end; }\n\n[slot=\"end\"].sc-ion-buttons-ios-h {\n  -webkit-box-ordinal-group: 7;\n  -ms-flex-order: 6;\n  order: 6;\n  text-align: end; }"; }
    static get styleMode() { return "ios"; }
}

function hapticSelection() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
}

class Toggle {
    constructor() {
        this.inputId = `ion-tg-${toggleIds++}`;
        this.pivotX = 0;
        this.activated = false;
        this.keyFocus = false;
        this.name = this.inputId;
        this.checked = false;
        this.disabled = false;
        this.value = "on";
    }
    checkedChanged(isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
    }
    disabledChanged() {
        this.ionStyle.emit({
            "interactive-disabled": this.disabled,
        });
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    componentWillLoad() {
        this.ionStyle = deferEvent(this.ionStyle);
    }
    async componentDidLoad() {
        const parentItem = this.nativeInput.closest("ion-item");
        if (parentItem) {
            const itemLabel = parentItem.querySelector("ion-label");
            if (itemLabel) {
                itemLabel.id = this.inputId + "-lbl";
                this.nativeInput.setAttribute("aria-labelledby", itemLabel.id);
            }
        }
        this.gesture = (await import("./gesture.js")).createGesture({
            el: this.el,
            queue: this.queue,
            gestureName: "toggle",
            gesturePriority: 100,
            threshold: 0,
            onStart: ev => this.onStart(ev),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.disabledChanged();
    }
    onStart(detail) {
        this.pivotX = detail.currentX;
        this.activated = true;
        detail.event.preventDefault();
        return true;
    }
    onMove(detail) {
        const currentX = detail.currentX;
        if (shouldToggle(this.checked, currentX - this.pivotX, -15)) {
            this.checked = !this.checked;
            this.pivotX = currentX;
            hapticSelection();
        }
    }
    onEnd(detail) {
        const delta = detail.currentX - this.pivotX;
        if (shouldToggle(this.checked, delta, 4)) {
            this.checked = !this.checked;
            hapticSelection();
        }
        this.activated = false;
        this.nativeInput.focus();
    }
    onChange() {
        this.checked = !this.checked;
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onFocus() {
        this.ionFocus.emit();
    }
    onBlur() {
        this.keyFocus = false;
        this.ionBlur.emit();
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { "in-item": hostContext("ion-item", this.el), "toggle-activated": this.activated, "toggle-checked": this.checked, "toggle-disabled": this.disabled, "toggle-key": this.keyFocus, "interactive": true })
        };
    }
    render() {
        renderHiddenInput(this.el, this.name, (this.checked ? this.value : ""), this.disabled);
        return [
            h("div", { class: "toggle-icon" }, h("div", { class: "toggle-inner" })),
            h("input", { type: "checkbox", onChange: this.onChange.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyUp: this.onKeyUp.bind(this), checked: this.checked, id: this.inputId, name: this.name, value: this.value, disabled: this.disabled, ref: r => this.nativeInput = r }),
            h("slot", null)
        ];
    }
    static get is() { return "ion-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "activated": {
                "state": true
            },
            "checked": {
                "type": Boolean,
                "attr": "checked",
                "mutable": true,
                "watchCallbacks": ["checkedChanged"]
            },
            "color": {
                "type": String,
                "attr": "color"
            },
            "disabled": {
                "type": Boolean,
                "attr": "disabled",
                "watchCallbacks": ["disabledChanged"]
            },
            "el": {
                "elementRef": true
            },
            "keyFocus": {
                "state": true
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "name": {
                "type": String,
                "attr": "name"
            },
            "queue": {
                "context": "queue"
            },
            "value": {
                "type": String,
                "attr": "value"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionChange",
                "method": "ionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionFocus",
                "method": "ionFocus",
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
                "name": "ionStyle",
                "method": "ionStyle",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the toggle\n   * \@prop --background-checked: Background of the toggle when checked\n   * \@prop --handle-background: Background of the toggle handle\n   * \@prop --handle-background-checked: Background of the toggle handle when checked\n   */\n  /* stylelint-disable-next-line declaration-no-important */\n  -webkit-box-sizing: content-box !important;\n  box-sizing: content-box !important;\n  display: inline-block;\n  contain: content;\n  cursor: pointer;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n:host(.toggle-key) input {\n  border: 2px solid #5e9ed6; }\n\n:host(:focus) {\n  outline: none; }\n\n:host(.toggle-disabled) {\n  pointer-events: none; }\n\ninput {\n  left: 0;\n  top: 0;\n  margin: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  pointer-events: none; }\n\n:host {\n  --background: var(--ion-item-background-color, var(--ion-background-color, #fff));\n  --background-checked: var(--ion-color-primary, #3880ff);\n  --handle-background: var(--ion-item-background-color, var(--ion-background-color, #fff));\n  --handle-background-checked: var(--ion-item-background-color, var(--ion-background-color, #fff));\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  position: relative;\n  width: 51px;\n  height: 32px;\n  contain: strict; }\n\n:host(.ion-color.toggle-checked) .toggle-icon {\n  background: var(--ion-color-base); }\n\n:host(.ion-color.toggle-checked) .toggle-inner {\n  background: var(--ion-color-contrast); }\n\n.toggle-icon {\n  border-radius: 16px;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: background-color 300ms;\n  transition: background-color 300ms;\n  background-color: var(--ion-background-color-step-50, #f2f2f2);\n  overflow: hidden;\n  pointer-events: none; }\n\n.toggle-icon::before {\n  left: 2px;\n  right: 2px;\n  top: 2px;\n  bottom: 2px;\n  border-radius: 16px;\n  position: absolute;\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1);\n  -webkit-transition: -webkit-transform 300ms;\n  transition: -webkit-transform 300ms;\n  transition: transform 300ms;\n  transition: transform 300ms, -webkit-transform 300ms;\n  background: var(--background);\n  content: \"\"; }\n\n.toggle-inner {\n  left: 2px;\n  top: 2px;\n  border-radius: 14px;\n  position: absolute;\n  width: 28px;\n  height: 28px;\n  -webkit-transition: width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms, -webkit-transform 300ms;\n  transition: width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms, -webkit-transform 300ms;\n  transition: transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms;\n  transition: transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms, -webkit-transform 300ms;\n  background: var(--handle-background);\n  -webkit-box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n  will-change: transform;\n  contain: strict; }\n\n:host(.toggle-checked) .toggle-icon {\n  background: var(--background-checked); }\n\n:host(.toggle-activated) .toggle-icon::before,\n:host(.toggle-checked) .toggle-icon::before {\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0); }\n\n:host(.toggle-checked) .toggle-inner {\n  -webkit-transform: translate3d(19px,  0,  0);\n  transform: translate3d(19px,  0,  0);\n  background: var(--handle-background-checked); }\n\n:host(.toggle-activated.toggle-checked) .toggle-inner::before {\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0); }\n\n:host(.toggle-activated) .toggle-inner {\n  width: 34px; }\n\n:host(.toggle-activated.toggle-checked) .toggle-inner {\n  left: -4px; }\n\n:host(.toggle-disabled) {\n  opacity: 0.3; }\n\n:host(.in-item[slot]) {\n  margin: 0;\n  padding: 6px 8px 5px 16px; }\n\n:host(.in-item[slot=\"start\"]) {\n  padding: 6px 16px 5px 0; }"; }
    static get styleMode() { return "ios"; }
}
function shouldToggle(checked, deltaX, margin) {
    const isRTL = document.dir === "rtl";
    if (checked) {
        return (!isRTL && (margin > deltaX)) ||
            (isRTL && (-margin < deltaX));
    }
    else {
        return (!isRTL && (-margin < deltaX)) ||
            (isRTL && (margin > deltaX));
    }
}
let toggleIds = 0;

export { AppProfile, BackButton as IonBackButton, Buttons as IonButtons, Toggle as IonToggle };
