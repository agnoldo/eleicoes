/*! Built with http://stenciljs.com */
const { h } = window.App;

//
// Componente Diálogo OK Cancelar
// Como usar: https://github.com/carlrip/x-modal-stencil/blob/master/src/index.html
// https://www.carlrippon.com/creating-modal-dialog-web-component-stenciljs/
class AppDialogoOKCancelar {
    constructor() {
        this.handleCancelClick = () => {
            this.visible = false;
            this.cancel.emit();
        };
        this.handleOkClick = () => {
            this.visible = false;
            this.ok.emit();
        };
    }
    render() {
        const { visible, title, handleCancelClick, handleOkClick } = this;
        return (h("div", { class: visible ? "dialogo-okcancelar-wrapper visible" : "dialogo-okcancelar-wrapper" },
            h("div", { class: "dialogo-okcancelar" },
                h("div", { class: "dialogo-okcancelar-header" },
                    h("span", null, title)),
                h("div", { class: "dialogo-okcancelar-content" },
                    h("slot", null)),
                h("div", { class: "dialogo-okcancelar-buttons" },
                    h("button", { class: "dialogo-okcancelar-cancel", onClick: handleCancelClick }, "Cancelar"),
                    h("button", { class: "dialogo-okcancelar-ok", onClick: handleOkClick }, "OK")))));
    }
    static get is() { return "app-dialogo_okcancelar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "title": {
            "type": String,
            "attr": "title"
        },
        "visible": {
            "type": Boolean,
            "attr": "visible",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "ok",
            "method": "ok",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "cancel",
            "method": "cancel",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".dialogo-okcancelar-wrapper {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: gray;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n  -webkit-transition: visibility 0s linear 0.25s, opacity 0.25s 0s, -webkit-transform 0.25s;\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, -webkit-transform 0.25s;\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s, -webkit-transform 0.25s;\n  z-index: 1;\n}\n.visible {\n  opacity: 1;\n  visibility: visible;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: visibility 0s linear 0s, opacity 0.25s 0s, -webkit-transform 0.25s;\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, -webkit-transform 0.25s;\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s, -webkit-transform 0.25s;\n}\n.dialogo-okcancelar {\n  font-family: var(--font-family, Helvetica);\n  font-size: var(--font-size, 13px);\n  background-color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  border-radius: var(--border-radius, 0.2em);\n  min-width: 300px;\n}\n.dialogo-okcancelar-header {\n  font-size: 1.3em;\n  padding: 5px 10px 5px 10px;\n  border-top-left-radius: var(--border-radius, 0.2em);\n  border-top-right-radius: var(--border-radius, 0.2em);\n  background-color: var(--header-bg-color, #fff);\n  color: var(--header-color, #4c4b4b);\n}\n.dialogo-okcancelar-content {\n  padding: 0px 10px 5px 10px;\n}\n.dialogo-okcancelar-buttons {\n  padding: 5px 10px 10px 10px;\n  text-align: right;\n}\n.dialogo-okcancelar-buttons button {\n  font-size: inherit;\n  margin-left: 10px;\n  min-width: 80px;\n  line-height: 20px;\n  border-style: solid;\n  border-radius: var(--border-radius, 0.2em);\n  padding: 3px;\n  color: var(--button-color, white);\n  cursor: pointer;\n}\n.dialogo-okcancelar-cancel {\n  background-color: var(--cancel-bg-color, #848e97);\n  border-color: var(--cancel-bg-color, #848e97);\n}\n.dialogo-okcancelar-cancel:hover {\n  background-color: var(--cancel-hover-bg-color, #6c757d);\n  border-color: var(--cancel-hover-bg-color, #6c757d);\n}\n.dialogo-okcancelar-ok {\n  background-color: var(--ok-bg-color, #848e97);\n  border-color: var(--ok-bg-color, #848e97);\n}\n.dialogo-okcancelar-ok:hover {\n  background-color: var(--ok-hover-bg-color, #6c757d);\n  border-color: var(--ok-hover-bg-color, #6c757d);\n}\n\n/* OLD */\n/* .dialogo-okcancelar {\n  font-family: Helvetica;\n  font-size: 13px;\n  background-color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 0.2em;\n  min-width: 300px;\n}\n.dialogo-okcancelar-header {\n  font-size: 1.3em;\n  padding: 5px 10px 5px 10px;\n  border-top-left-radius: 0.2em;\n  border-top-right-radius: 0.2em;\n  background-color: #fff;\n  color: #4c4b4b;\n}\n.dialogo-okcancelar-content {\n  padding: 0px 10px 5px 10px;\n}\n.dialogo-okcancelar-buttons {\n  padding: 5px 10px 10px 10px;\n  text-align: right;\n}\n.dialogo-okcancelar-buttons button {\n  font-size: inherit;\n  margin-left: 10px;\n  min-width: 80px;\n  line-height: 20px;\n  border-style: solid;\n  border-radius: 0.2em;\n  padding: 3px;\n  color: white;\n  cursor: pointer;\n}\n.dialogo-okcancelar-cancel {\n  background-color: #848e97;\n  border-color: #848e97;\n}\n.dialogo-okcancelar-cancel:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.dialogo-okcancelar-ok {\n  background-color: #848e97;\n  border-color: #848e97;\n}\n.dialogo-okcancelar-ok:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n} */"; }
}

export { AppDialogoOKCancelar as AppDialogo_okcancelar };
