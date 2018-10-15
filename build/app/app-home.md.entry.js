/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as BACKDROP, b as dismiss, c as eventMethod, d as isCancel, e as present, f as createOverlay, g as dismissOverlay, h as getOverlay, i as attachComponent, j as detachComponent, k as deepReady } from './chunk-3c1ae6a9.js';
import { a as getClassMap, b as createColorClasses, c as hostContext, d as createThemedClasses, f as deferEvent, g as renderHiddenInput, h as rIC } from './chunk-c7f82f3c.js';

class AppHome {
    loadJson(url) {
        return fetch(url)
            .then(response => response.json());
    }
    reduceNM(arr) {
        return arr.reduce(function (acumulador, valorAtual) {
            return [...acumulador, [valorAtual.nm, +valorAtual.v]];
        }, [['Candidato', 'Votação']]);
    }
    componentWillLoad() {
        var self = this;
        self.data = [];
        //    return self.loadJson('http://interessados.divulgacao.tse.jus.br/2018/divulgacao/oficial/295/dadosdivweb/br/br-c0001-e000295-w.js')
        return self.loadJson('/assets/json/br-c0001-e000295-w.json')
            .then(function (obj) {
            self.data['BR'] = JSON.stringify(self.reduceNM(obj.cand));
            //        return self.loadJson('http://interessados.divulgacao.tse.jus.br/2018/divulgacao/oficial/297/dadosdivweb/mg/mg-c0003-e000297-w.js')
            return self.loadJson('/assets/json/mg-c0003-e000297-w.json')
                .then(function (obj) {
                self.data['MG'] = JSON.stringify(self.reduceNM(obj.cand));
            });
        });
    }
    componentDidLoad() {
        var self = this;
        self.regiao_votacao.addEventListener("ionChange", function () {
            console.log(self.regiao_votacao.value);
        });
        self.adicionar_votacao_governo.addEventListener("click", function () {
            self.label_regiao_votacao.innerHTML = 'Votação para Governo';
            var option;
            option = document.getElementById('ion-selopt-0');
            option.disabled = false;
            option.innerHTML = 'BRASIL';
            self.regiao_votacao.open();
            self.regiao_votacao.selectedIndex = -1;
        });
        self.adicionar_votacao_senado.addEventListener("click", function () {
            self.label_regiao_votacao.innerHTML = 'Votação para Senado';
            var option;
            option = document.getElementById('ion-selopt-0');
            option.disabled = true;
            option.innerHTML = 'Escolha opção abaixo:';
            self.regiao_votacao.open();
            self.regiao_votacao.selectedIndex = -1;
        });
    }
    next() {
        var slides = document.querySelector('ion-slides');
        slides.options = {
            effect: 'flip'
        };
        slides.slideNext();
    }
    prev() {
        var slides = document.querySelector('ion-slides');
        slides.options = {
            effect: 'flip'
        };
        slides.slidePrev();
    }
    isBeginning() {
        var slides = document.querySelector('ion-slides');
        return slides ? slides.isBeginning() : true;
    }
    isEnd() {
        var slides = document.querySelector('ion-slides');
        return slides ? slides.isEnd() : false;
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "primary" },
                    h("ion-title", null, "Elei\u00E7\u00F5es Limpas"))),
            h("ion-tabs", null,
                h("ion-tab", { selected: true, label: "Vota\u00E7\u00E3o", icon: "information-circle-outline" },
                    h("ion-header", { translucent: true },
                        h("ion-toolbar", null,
                            h("ion-title", null, "Vota\u00E7\u00E3o"))),
                    h("ion-content", { fullscreen: true, padding: true },
                        h("h1", null, "Vota\u00E7\u00E3o"),
                        h("ion-slides", { pager: false },
                            h("ion-slide", null,
                                h("ion-card", null,
                                    h("ion-item", null,
                                        h("ion-avatar", { slot: "start" },
                                            h("ion-img", { src: "assets/img/brasil/Brasil.jpg" })),
                                        h("ion-label", null,
                                            h("ion-card-title", null, "Presidente"),
                                            h("ion-card-subtitle", { role: "heading", "aria-level": "3", class: "hydrated" }, "2018 - 1\u00BA Turno"))),
                                    h("app-piechart", { chartTitle: "", chartData: this.data['BR'] }))),
                            h("ion-slide", null,
                                h("ion-card", null,
                                    h("ion-item", null,
                                        h("ion-avatar", { slot: "start" },
                                            h("ion-img", { src: "assets/img/brasil/Minasgerais.jpg" })),
                                        h("ion-label", null,
                                            h("ion-card-title", null, "Governador MG"),
                                            h("ion-card-subtitle", { role: "heading", "aria-level": "3", class: "hydrated" }, "2018 - 1\u00BA Turno"))),
                                    h("app-piechart", { chartTitle: "", chartData: this.data['MG'] })))),
                        h("ion-item", { hidden: true },
                            h("ion-label", { ref: (el) => this.label_regiao_votacao = el }, "Regi\u00E3o de vota\u00E7\u00E3o"),
                            h("ion-select", { ref: (el) => this.regiao_votacao = el, id: "regiao_votacao", value: "", "ok-text": "OK", "cancel-text": "Cancelar" },
                                h("ion-select-option", { value: "BR" }, "BRASIL"),
                                h("ion-select-option", { value: "AC" }, "Acre"),
                                h("ion-select-option", { value: "AL" }, "Alagoas"),
                                h("ion-select-option", { value: "AP" }, "Amap\u00E1"),
                                h("ion-select-option", { value: "AM" }, "Amazonas"),
                                h("ion-select-option", { value: "BA" }, "Bahia"),
                                h("ion-select-option", { value: "CE" }, "Cear\u00E1"),
                                h("ion-select-option", { value: "DF" }, "Distrito Federal"),
                                h("ion-select-option", { value: "ES" }, "Esp\u00EDrito Santo"),
                                h("ion-select-option", { value: "GO" }, "Goi\u00E1s"),
                                h("ion-select-option", { value: "MA" }, "Maranh\u00E3o"),
                                h("ion-select-option", { value: "MT" }, "Mato Grosso"),
                                h("ion-select-option", { value: "MS" }, "Mato Grosso do Sul"),
                                h("ion-select-option", { value: "MG" }, "Minas Gerais"),
                                h("ion-select-option", { value: "PA" }, "Par\u00E1"),
                                h("ion-select-option", { value: "PB" }, "Para\u00EDba"),
                                h("ion-select-option", { value: "PR" }, "Paran\u00E1"),
                                h("ion-select-option", { value: "PE" }, "Pernambuco"),
                                h("ion-select-option", { value: "PI" }, "Piau\u00ED"),
                                h("ion-select-option", { value: "RJ" }, "Rio de Janeiro"),
                                h("ion-select-option", { value: "RN" }, "Rio Grande do Norte"),
                                h("ion-select-option", { value: "RS" }, "Rio Grande do Sul"),
                                h("ion-select-option", { value: "RO" }, "Rond\u00F4nia"),
                                h("ion-select-option", { value: "RR" }, "Roraima"),
                                h("ion-select-option", { value: "SC" }, "Santa Catarina"),
                                h("ion-select-option", { value: "SP" }, "S\u00E3o Paulo"),
                                h("ion-select-option", { value: "SE" }, "Sergipe"),
                                h("ion-select-option", { value: "TO" }, "Tocantins"))),
                        h("ion-grid", null,
                            h("ion-row", null,
                                h("ion-col", { size: "2" },
                                    h("ion-button", { expand: "block", color: "primary", class: "btnPrev", onClick: () => this.prev() },
                                        h("ion-icon", { slot: "start", name: "arrow-dropleft" }))),
                                h("ion-col", { size: "4" },
                                    h("ion-button", { ref: (el) => this.adicionar_votacao_governo = el, expand: "block", color: "primary" },
                                        h("ion-icon", { slot: "start", name: "add-circle" }),
                                        "Governo")),
                                h("ion-col", { size: "4" },
                                    h("ion-button", { ref: (el) => this.adicionar_votacao_senado = el, expand: "block", color: "primary" },
                                        h("ion-icon", { slot: "start", name: "add-circle" }),
                                        "Senado")),
                                h("ion-col", { size: "2" },
                                    h("ion-button", { expand: "block", color: "primary", class: "btnNext", onClick: () => this.next() },
                                        h("ion-icon", { slot: "end", name: "arrow-dropright" }))))))),
                h("ion-tab", { label: "Boletim de Urna", icon: "qr-scanner" },
                    h("ion-header", { translucent: true },
                        h("ion-toolbar", null,
                            h("ion-title", null, "Boletim de Urna"))),
                    h("ion-content", { fullscreen: true, padding: true },
                        h("h1", null, "Boletim de Urna"),
                        h("app-qrcode", null))),
                h("ion-tab", { label: "Auditoria", icon: "barcode" },
                    h("ion-header", { translucent: true },
                        h("ion-toolbar", null,
                            h("ion-title", null, "Auditoria"))),
                    h("ion-content", { fullscreen: true, padding: true },
                        h("h1", null, "Auditoria"))),
                h("ion-tab", { label: "Not\u00EDcias", icon: "logo-rss" },
                    h("ion-header", { translucent: true },
                        h("ion-toolbar", null,
                            h("ion-title", null, "Not\u00EDcias"))),
                    h("ion-content", { fullscreen: true, padding: true },
                        h("h1", null, "Not\u00EDcias"),
                        h("ion-button", { href: "/profile/ionic", expand: "block" }, "Profile Page"))))
        ];
    }
    static get is() { return "app-home"; }
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data",
            "mutable": true
        }
    }; }
    static get style() { return ".slide-image {\n  width: 50px;\n}"; }
}

class AppPiechart {
    constructor() {
        this.showCharts = false;
    }
    componentWillLoad() {
        this.chartId = 'piechart' + Math.random() * 999999999;
    }
    componentDidLoad() {
        this.innerData = JSON.parse(this.chartData);
        this.showCharts = true;
        this.createPieChart(this.chartId, this.innerData, this.chartTitle);
    }
    createPieChart(element, data, title) {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var gdata = google.visualization.arrayToDataTable(data);
            var options = {
                title: title,
                is3D: true,
                chartArea: { left: 20, top: 0, width: '95%', height: '85%' }
            };
            // https://developers.google.com/chart/interactive/docs/gallery/piechart
            var chart = new google.visualization.PieChart(document.getElementById(element));
            chart.draw(gdata, options);
        }
    }
    render() {
        return (h("div", null,
            h("div", { style: { display: this.showCharts ? 'block' : 'none' }, class: "chart-wrapper", id: this.chartId })));
    }
    static get is() { return "app-piechart"; }
    static get properties() { return {
        "chartData": {
            "type": String,
            "attr": "chart-data"
        },
        "chartId": {
            "type": String,
            "attr": "chart-id",
            "mutable": true
        },
        "chartTitle": {
            "type": String,
            "attr": "chart-title"
        },
        "innerData": {
            "type": "Any",
            "attr": "inner-data",
            "mutable": true
        },
        "showCharts": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

class AppQRCode {
    constructor() {
    }
    componentDidLoad() {
        console.log('> AppQRCode.ngOnInit');
        if (!('mediaDevices' in navigator &&
            'getUserMedia' in navigator.mediaDevices &&
            'Worker' in window)) {
            alert('Infelizmente seu navegador não é compatível com esta funcionalidade.');
            return;
        }
        // html elements
        const snapshotCanvas = document.getElementById('snapshot');
        const snapshotContext = snapshotCanvas.getContext('2d');
        const video = document.getElementById('camera');
        const overlay = document.getElementById('snapshotLimitOverlay');
        const flipCameraButton = document.getElementById("flipCamera");
        const loadingElement = document.getElementById('loading');
        const resultContainer = document.getElementById('result');
        const resultDialog = document.querySelector('dialog');
        const resultSearchGo = document.querySelector('dialog a.search');
        // init dialog
        dialogPolyfill.registerDialog(resultDialog);
        resultDialog.querySelector('button.continue').addEventListener('click', function () {
            resultDialog.close();
            resultContainer.innerText = "";
            flipCameraButton.disabled = false;
            scanCode(true);
        });
        // TODO: habilitar Clipboard ou remover
        //    new ClipboardJS('dialog button.copy');
        // init QRCode Web Worker
        const qrcodeWorker = new Worker("/assets/qrcode_worker.js");
        qrcodeWorker.postMessage({ cmd: 'init' });
        qrcodeWorker.addEventListener('message', showResult);
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('src/assets/qrcode_worker.js')
                .then(function (registration) {
                console.log('registration.addEventListener.message - ', registration);
                registration.active.postMessage({ cmd: 'init' });
                registration.active.addEventListener('message', showResult);
            })
                .catch(function (error) {
                console.log('QRCode Service worker registration failed:', error);
            });
        }
        let snapshotSquare;
        function calculateSquare() {
            // get square of snapshot in the video
            let snapshotSize = overlay.offsetWidth;
            snapshotSquare = {
                'x': ~~((video.videoWidth - snapshotSize) / 2),
                'y': ~~((video.videoHeight - snapshotSize) / 2),
                'size': ~~(snapshotSize)
            };
            snapshotCanvas.width = snapshotSquare.size;
            snapshotCanvas.height = snapshotSquare.size;
        }
        function scanCode(wasSuccess) {
            setTimeout(function () {
                if (flipCameraButton.disabled) {
                    // terminate this loop
                    loadingElement.style.display = "none";
                    return;
                }
                // show loading
                loadingElement.style.display = "block";
                // capture current snapshot
                snapshotContext.drawImage(video, snapshotSquare.x, snapshotSquare.y, snapshotSquare.size, snapshotSquare.size, 0, 0, snapshotSquare.size, snapshotSquare.size);
                const imageData = snapshotContext.getImageData(0, 0, snapshotSquare.size, snapshotSquare.size);
                // scan for QRCode
                qrcodeWorker.postMessage({
                    cmd: 'process',
                    width: snapshotSquare.size,
                    height: snapshotSquare.size,
                    imageData: imageData
                });
            }, wasSuccess ? 2000 : 120);
        }
        function showResult(e) {
            const resultData = e.data;
            // open a dialog with the result if found
            if (resultData !== false) {
                navigator.vibrate(200); // vibration is not supported on Edge, IE, Opera and Safari
                disableUI();
                try {
                    let url = new URL(resultData);
                    let linkToResult = document.createElement('a');
                    linkToResult.href = url.href;
                    linkToResult.innerText = resultData;
                    resultContainer.appendChild(linkToResult);
                    resultSearchGo.href = url.href;
                    resultSearchGo.innerText = "Ir";
                }
                catch (e) {
                    resultContainer.innerText = resultData;
                    resultSearchGo.href = "https://www.google.com/search?q=" + encodeURIComponent(resultData);
                    resultSearchGo.innerText = "Procurar";
                }
                resultDialog.showModal();
            }
            else {
                // if not found, retry
                scanCode(false);
            }
        }
        function disableUI() {
            flipCameraButton.disabled = true;
            loadingElement.style.display = "none";
        }
        // init video stream
        let currentDeviceId;
        function initVideoStream() {
            let config = {
                audio: false,
                video: {}
            };
            config.video = currentDeviceId ? { deviceId: currentDeviceId } : { facingMode: "environment" };
            //alert('init currentDeviceId: ' + currentDeviceId);
            stopStream();
            navigator.mediaDevices.getUserMedia(config).then(function (stream) {
                video.srcObject = stream;
                video.oncanplay = function () {
                    flipCameraButton.disabled = false;
                    calculateSquare();
                    scanCode(false);
                };
            }).catch(function (error) {
                alert(error.name + ": " + error.message);
            });
        }
        initVideoStream();
        function stopStream() {
            disableUI();
            if (video.srcObject) {
                let srcObject = video.srcObject;
                srcObject.getTracks()[0].stop();
            }
        }
        // listen for optimizedResize
        //    window.addEventListener("optimizedResize", calculateSquare);
        // add flip camera button if necessary
        navigator.mediaDevices.enumerateDevices()
            .then(function (devices) {
            devices = devices.filter(function (device) {
                return device.kind === 'videoinput';
            });
            //alert('devices.length: ' + devices.length);
            if (devices.length >= 1) {
                currentDeviceId = devices[0].deviceId; // no way to know current MediaStream's device id so arbitrarily choose the first
                //alert('enum currentDeviceId: ' + currentDeviceId);
                // show or hide a flip camera button
                flipCameraButton.style.display = (devices.length == 1 ? "none" : "block");
                if (devices.length > 1) {
                    // add a flip camera button
                    flipCameraButton.addEventListener('click', function () {
                        let targetDevice;
                        for (let i = 0; i < devices.length; i++) {
                            if (devices[i].deviceId === currentDeviceId) {
                                targetDevice = (i + 1 < devices.length) ? devices[i + 1] : devices[0];
                                break;
                            }
                        }
                        currentDeviceId = targetDevice.deviceId;
                        initVideoStream();
                    });
                }
                else {
                    initVideoStream();
                }
            }
        });
        document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
                stopStream();
            }
            else {
                initVideoStream();
            }
        });
    }
    render() {
        return (h("div", null,
            h("div", { id: "loading", class: "mdl-progress mdl-js-progress mdl-progress__indeterminate" }),
            h("video", { id: "camera", autoplay: true }, "You need a camera in order to use this app."),
            h("div", { id: "snapshotLimitOverlay" },
                h("div", { id: "about" },
                    h("h4", null, "Leitor QR Code"),
                    h("p", null,
                        "Este leitor permite digitalizar boletins de urna em formato QR Code.",
                        h("br", null),
                        h("br", null),
                        "Compare\u00E7a \u00E0 sua se\u00E7\u00E3o \u00E0s 17h do dia da vota\u00E7\u00E3o e digitalize aqui o QR Code do boletim de urna.",
                        h("br", null),
                        h("br", null),
                        "Todos os boletins de urna ficar\u00E3o dispon\u00EDveis para consulta e compara\u00E7\u00E3o na aba ",
                        h("strong", null, "Auditoria"),
                        "."))),
            h("canvas", { id: "snapshot" }),
            h("button", { id: "flipCamera", type: "button", class: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" }, "Alternar C\u00E2mera"),
            h("dialog", { class: "mdl-dialog" },
                h("h4", { class: "mdl-dialog__title" }, "QRCode lido"),
                h("div", { class: "mdl-dialog__content" },
                    h("p", { id: "resultsContainer" },
                        h("span", { id: "result" })),
                    h("p", null,
                        h("button", { type: "button", class: "copy mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised", "data-clipboard-target": "#result" }, "Copiar"),
                        h("a", { class: "search mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised" }, "Procurar"))),
                h("div", { class: "mdl-dialog__actions" },
                    h("button", { type: "button", class: "continue mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored" }, "Continuar")))));
    }
    static get is() { return "app-qrcode"; }
    static get style() { return "body {\n    margin: 0;\n    padding: 0;\n}\n\n#camera {\n    position: absolute;\n    top: 20%;\n    left: 50%;\n\n    width: 70vmin;\n    height: 70vmin;\n\n    z-index: 999;\n\n    -webkit-transform: translateX(-50%) translateY(-50%);\n\n    transform: translateX(-50%) translateY(-50%);\n}\n\n.mdl-dialog__content {\n    text-align: center;\n}\n\n#resultsContainer {\n    overflow-wrap: break-word;\n\n    border: 0;\n    border-radius: 1em;\n    background-color: #dedede;\n    padding: 0.5em 2em;\n}\n\n#snapshotLimitOverlay {\n    position: absolute;\n    top: 20%;\n    left: 50%;\n\n    width: 70vmin;\n    height: 70vmin;\n\n    -webkit-transform: translateX(-50%) translateY(-50%);\n\n    transform: translateX(-50%) translateY(-50%);\n\n    text-align: center;\n}\n\n#snapshotLimitOverlay:after {\n    content:'';\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\n    -webkit-box-shadow: 0 0 0 999px rgba(0, 0, 0, 0.4);\n\n    box-shadow: 0 0 0 999px rgba(0, 0, 0, 0.4);\n}\n\n#snapshot {\n    display: none;\n}\n\n#loading {\n    display: none;\n    position: absolute;\n    width: 100%;\n    z-index: 10;\n}\n\n#flipCamera, #aboutButton {\n    position: absolute;\n    background-color: #eee;\n}\n\n#flipCamera {\n    display: none;\n\n    top: 5vmin;\n    right: 5vmin;\n}\n\n#aboutButton {\n    bottom: 5vmin;\n    left: 5vmin;\n}\n\n#about {\n    background-color: white;\n    height: 100%;\n}\n\n#about h4 {\n    margin-top: 0;\n}"; }
}

function iosEnterAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    wrapperAnimation.fromTo('translateY', '100%', '0%');
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

function iosLeaveAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.4, 0);
    wrapperAnimation.fromTo('translateY', '0%', '100%');
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

function mdEnterAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.26);
    wrapperAnimation.fromTo('translateY', '100%', '0%');
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

function mdLeaveAnimation(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.26, 0);
    wrapperAnimation.fromTo('translateY', '0%', '100%');
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

class ActionSheet {
    constructor() {
        this.presented = false;
        this.keyboardClose = true;
        this.backdropDismiss = true;
        this.translucent = false;
        this.animated = true;
    }
    componentDidLoad() {
        this.ionActionSheetDidLoad.emit();
    }
    componentDidUnload() {
        this.ionActionSheetDidUnload.emit();
    }
    onBackdropTap() {
        this.dismiss(undefined, BACKDROP);
    }
    dispatchCancelHandler(ev) {
        const role = ev.detail.role;
        if (isCancel(role)) {
            const cancelButton = this.getButtons().find(b => b.role === "cancel");
            this.callButtonHandler(cancelButton);
        }
    }
    present() {
        return present(this, "actionSheetEnter", iosEnterAnimation, mdEnterAnimation);
    }
    dismiss(data, role) {
        return dismiss(this, data, role, "actionSheetLeave", iosLeaveAnimation, mdLeaveAnimation);
    }
    onDidDismiss() {
        return eventMethod(this.el, "ionActionSheetDidDismiss");
    }
    onWillDismiss() {
        return eventMethod(this.el, "ionActionSheetWillDismiss");
    }
    async buttonClick(button) {
        const role = button.role;
        if (isCancel(role)) {
            return this.dismiss(undefined, role);
        }
        const shouldDismiss = await this.callButtonHandler(button);
        if (shouldDismiss) {
            return this.dismiss(undefined, button.role);
        }
        return Promise.resolve();
    }
    async callButtonHandler(button) {
        if (button && button.handler) {
            try {
                const rtn = await button.handler();
                if (rtn === false) {
                    return false;
                }
            }
            catch (e) {
                console.error(e);
            }
        }
        return true;
    }
    getButtons() {
        return this.buttons.map(b => {
            return (typeof b === "string")
                ? { text: b }
                : b;
        });
    }
    hostData() {
        return {
            style: {
                zIndex: 20000 + this.overlayIndex,
            },
            class: Object.assign({}, getClassMap(this.cssClass), { "action-sheet-translucent": this.translucent })
        };
    }
    render() {
        const allButtons = this.getButtons();
        const cancelButton = allButtons.find(b => b.role === "cancel");
        const buttons = allButtons.filter(b => b.role !== "cancel");
        return [
            h("ion-backdrop", { tappable: this.backdropDismiss }),
            h("div", { class: "action-sheet-wrapper", role: "dialog" }, h("div", { class: "action-sheet-container" }, h("div", { class: "action-sheet-group" }, this.header !== undefined &&
                h("div", { class: "action-sheet-title" }, this.header, this.subHeader && h("div", { class: "action-sheet-sub-title" }, this.subHeader)), buttons.map(b => h("button", { type: "button", "ion-activatable": true, class: buttonClass(b), onClick: () => this.buttonClick(b) }, h("span", { class: "action-sheet-button-inner" }, b.icon && h("ion-icon", { icon: b.icon, lazy: false, class: "action-sheet-icon" }), b.text)))), cancelButton &&
                h("div", { class: "action-sheet-group action-sheet-group-cancel" }, h("button", { "ion-activatable": true, type: "button", class: buttonClass(cancelButton), onClick: () => this.buttonClick(cancelButton) }, h("span", { class: "action-sheet-button-inner" }, cancelButton.icon &&
                    h("ion-icon", { icon: cancelButton.icon, lazy: false, class: "action-sheet-icon" }), cancelButton.text)))))
        ];
    }
    static get is() { return "ion-action-sheet"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "animated": {
                "type": Boolean,
                "attr": "animated"
            },
            "animationCtrl": {
                "connect": "ion-animation-controller"
            },
            "backdropDismiss": {
                "type": Boolean,
                "attr": "backdrop-dismiss"
            },
            "buttons": {
                "type": "Any",
                "attr": "buttons"
            },
            "config": {
                "context": "config"
            },
            "cssClass": {
                "type": String,
                "attr": "css-class"
            },
            "dismiss": {
                "method": true
            },
            "el": {
                "elementRef": true
            },
            "enterAnimation": {
                "type": "Any",
                "attr": "enter-animation"
            },
            "header": {
                "type": String,
                "attr": "header"
            },
            "keyboardClose": {
                "type": Boolean,
                "attr": "keyboard-close"
            },
            "leaveAnimation": {
                "type": "Any",
                "attr": "leave-animation"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "onDidDismiss": {
                "method": true
            },
            "onWillDismiss": {
                "method": true
            },
            "overlayIndex": {
                "type": Number,
                "attr": "overlay-index"
            },
            "present": {
                "method": true
            },
            "subHeader": {
                "type": String,
                "attr": "sub-header"
            },
            "translucent": {
                "type": Boolean,
                "attr": "translucent"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionActionSheetDidLoad",
                "method": "ionActionSheetDidLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionActionSheetDidUnload",
                "method": "ionActionSheetDidUnload",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionActionSheetDidPresent",
                "method": "didPresent",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionActionSheetWillPresent",
                "method": "willPresent",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionActionSheetWillDismiss",
                "method": "willDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionActionSheetDidDismiss",
                "method": "didDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "ionBackdropTap",
                "method": "onBackdropTap"
            }, {
                "name": "ionActionSheetWillDismiss",
                "method": "dispatchCancelHandler"
            }];
    }
    static get style() { return ".sc-ion-action-sheet-md-h {\n  --width: 100%;\n  --max-width: 500px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: block;\n  position: fixed;\n  font-family: var(--ion-font-family, inherit);\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 1000; }\n\n.action-sheet-wrapper.sc-ion-action-sheet-md {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  -webkit-transform: translate3d(0,  100%,  0);\n  transform: translate3d(0,  100%,  0);\n  display: block;\n  position: absolute;\n  width: var(--width);\n  max-width: var(--max-width);\n  z-index: 10;\n  pointer-events: none; }\n\n.action-sheet-button.sc-ion-action-sheet-md {\n  width: var(--width);\n  border: 0;\n  outline: none;\n  font-family: inherit; }\n\n.action-sheet-button-inner.sc-ion-action-sheet-md {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n\n.action-sheet-container.sc-ion-action-sheet-md {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: column;\n  flex-flow: column;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  height: 100%;\n  max-height: 100%; }\n\n.action-sheet-group.sc-ion-action-sheet-md {\n  -ms-flex-negative: 2;\n  flex-shrink: 2;\n  overscroll-behavior-y: contain;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  pointer-events: all; }\n\n.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar {\n  display: none; }\n\n.action-sheet-group-cancel.sc-ion-action-sheet-md {\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  overflow: hidden; }\n\n.action-sheet-title.sc-ion-action-sheet-md {\n  padding: 11px 16px 17px;\n  color: var(--ion-text-color-step-400, #666666);\n  font-size: 16px;\n  text-align: start; }\n\n.action-sheet-sub-title.sc-ion-action-sheet-md {\n  padding: 16px 0 0;\n  font-size: 14px; }\n\n.action-sheet-group.sc-ion-action-sheet-md {\n  background-color: var(--ion-overlay-background-color, #fafafa); }\n\n.action-sheet-group.sc-ion-action-sheet-md:first-child {\n  padding-top: 8px; }\n\n.action-sheet-group.sc-ion-action-sheet-md:last-child {\n  padding-bottom: 8px; }\n\n.action-sheet-button.sc-ion-action-sheet-md {\n  padding: 0 16px;\n  position: relative;\n  height: 48px;\n  background: transparent;\n  color: var(--ion-text-color-step-150, #262626);\n  font-size: 16px;\n  text-align: start;\n  contain: strict;\n  overflow: hidden; }\n\n.action-sheet-button.activated.sc-ion-action-sheet-md {\n  background: var(--ion-background-color-step-50, #f2f2f2); }\n\n.action-sheet-icon.sc-ion-action-sheet-md {\n  margin: 0 32px 0 0;\n  font-size: 24px; }\n\n.action-sheet-button-inner.sc-ion-action-sheet-md {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start; }\n\n.action-sheet-selected.sc-ion-action-sheet-md {\n  font-weight: bold; }"; }
    static get styleMode() { return "md"; }
}
function buttonClass(button) {
    return Object.assign({ "action-sheet-button": true, [`action-sheet-${button.role}`]: button.role !== undefined }, getClassMap(button.cssClass));
}

class ActionSheetController {
    create(opts) {
        return createOverlay(this.doc.createElement("ion-action-sheet"), opts);
    }
    dismiss(data, role, id) {
        return dismissOverlay(this.doc, data, role, "ion-action-sheet", id);
    }
    async getTop() {
        return getOverlay(this.doc, "ion-action-sheet");
    }
    static get is() { return "ion-action-sheet-controller"; }
    static get properties() {
        return {
            "create": {
                "method": true
            },
            "dismiss": {
                "method": true
            },
            "doc": {
                "context": "document"
            },
            "getTop": {
                "method": true
            }
        };
    }
}

function iosEnterAnimation$1(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.3);
    wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

function iosLeaveAnimation$1(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.3, 0);
    wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

function mdEnterAnimation$1(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.5);
    wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}

function mdLeaveAnimation$1(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper'));
    backdropAnimation.fromTo('opacity', 0.5, 0);
    wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}

class Alert {
    constructor() {
        this.processedInputs = [];
        this.processedButtons = [];
        this.presented = false;
        this.keyboardClose = true;
        this.buttons = [];
        this.inputs = [];
        this.backdropDismiss = true;
        this.translucent = false;
        this.animated = true;
    }
    buttonsChanged() {
        const buttons = this.buttons;
        this.processedButtons = buttons.map(btn => {
            return (typeof btn === "string")
                ? { text: btn, role: btn.toLowerCase() === "cancel" ? "cancel" : undefined }
                : btn;
        });
    }
    inputsChanged() {
        const inputs = this.inputs;
        const inputTypes = new Set(inputs.map(i => i.type));
        if (inputTypes.has("checkbox") && inputTypes.has("radio")) {
            console.warn(`Alert cannot mix input types: ${(Array.from(inputTypes.values()).join("/"))}. Please see alert docs for more info.`);
        }
        this.inputType = inputTypes.values().next().value;
        this.processedInputs = inputs.map((i, index) => ({
            type: i.type || "text",
            name: i.name || `${index}`,
            placeholder: i.placeholder || "",
            value: i.value || "",
            label: i.label,
            checked: !!i.checked,
            disabled: !!i.disabled,
            id: i.id || `alert-input-${this.overlayIndex}-${index}`,
            handler: i.handler,
            min: i.min,
            max: i.max
        }));
    }
    componentWillLoad() {
        this.inputsChanged();
        this.buttonsChanged();
    }
    componentDidLoad() {
        this.ionAlertDidLoad.emit();
    }
    componentDidUnload() {
        this.ionAlertDidUnload.emit();
    }
    onBackdropTap() {
        this.dismiss(undefined, BACKDROP);
    }
    dispatchCancelHandler(ev) {
        const role = ev.detail.role;
        if (isCancel(role)) {
            const cancelButton = this.processedButtons.find(b => b.role === "cancel");
            this.callButtonHandler(cancelButton);
        }
    }
    present() {
        return present(this, "alertEnter", iosEnterAnimation$1, mdEnterAnimation$1);
    }
    dismiss(data, role) {
        return dismiss(this, data, role, "alertLeave", iosLeaveAnimation$1, mdLeaveAnimation$1);
    }
    onDidDismiss() {
        return eventMethod(this.el, "ionAlertDidDismiss");
    }
    onWillDismiss() {
        return eventMethod(this.el, "ionAlertWillDismiss");
    }
    rbClick(selectedInput) {
        for (const input of this.processedInputs) {
            input.checked = input === selectedInput;
        }
        this.activeId = selectedInput.id;
        if (selectedInput.handler) {
            selectedInput.handler(selectedInput);
        }
        this.el.forceUpdate();
    }
    cbClick(selectedInput) {
        selectedInput.checked = !selectedInput.checked;
        if (selectedInput.handler) {
            selectedInput.handler(selectedInput);
        }
        this.el.forceUpdate();
    }
    buttonClick(button) {
        const role = button.role;
        const values = this.getValues();
        if (isCancel(role)) {
            return this.dismiss({ values }, role);
        }
        const returnData = this.callButtonHandler(button, values);
        if (returnData !== false) {
            return this.dismiss(Object.assign({ values }, returnData), button.role);
        }
        return Promise.resolve(false);
    }
    callButtonHandler(button, data) {
        if (button && button.handler) {
            const returnData = button.handler(data);
            if (returnData === false) {
                return false;
            }
            if (typeof returnData === "object") {
                return returnData;
            }
        }
        return {};
    }
    getValues() {
        if (this.processedInputs.length === 0) {
            return undefined;
        }
        if (this.inputType === "radio") {
            const checkedInput = this.processedInputs.find(i => !!i.checked);
            return checkedInput ? checkedInput.value : undefined;
        }
        if (this.inputType === "checkbox") {
            return this.processedInputs.filter(i => i.checked).map(i => i.value);
        }
        const values = {};
        this.processedInputs.forEach(i => {
            values[i.name] = i.value || "";
        });
        return values;
    }
    renderAlertInputs(labelledBy) {
        switch (this.inputType) {
            case "checkbox": return this.renderCheckbox(labelledBy);
            case "radio": return this.renderRadio(labelledBy);
            default: return this.renderInput(labelledBy);
        }
    }
    renderCheckbox(labelledby) {
        const inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (h("div", { class: "alert-checkbox-group", "aria-labelledby": labelledby }, inputs.map(i => (h("button", { type: "button", onClick: () => this.cbClick(i), "aria-checked": i.checked ? "true" : null, id: i.id, disabled: i.disabled, tabIndex: 0, role: "checkbox", class: "alert-tappable alert-checkbox alert-checkbox-button" }, h("div", { class: "alert-button-inner" }, h("div", { class: "alert-checkbox-icon" }, h("div", { class: "alert-checkbox-inner" })), h("div", { class: "alert-checkbox-label" }, i.label)), this.mode === "md" && h("ion-ripple-effect", null))))));
    }
    renderRadio(labelledby) {
        const inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (h("div", { class: "alert-radio-group", role: "radiogroup", "aria-labelledby": labelledby, "aria-activedescendant": this.activeId }, inputs.map(i => (h("button", { type: "button", onClick: () => this.rbClick(i), "aria-checked": i.checked ? "true" : null, disabled: i.disabled, id: i.id, tabIndex: 0, class: "alert-radio-button alert-tappable alert-radio", role: "radio" }, h("div", { class: "alert-button-inner" }, h("div", { class: "alert-radio-icon" }, h("div", { class: "alert-radio-inner" })), h("div", { class: "alert-radio-label" }, i.label)), this.mode === "md" && h("ion-ripple-effect", null))))));
    }
    renderInput(labelledby) {
        const inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (h("div", { class: "alert-input-group", "aria-labelledby": labelledby }, inputs.map(i => (h("div", { class: "alert-input-wrapper" }, h("input", { placeholder: i.placeholder, value: i.value, type: i.type, min: i.min, max: i.max, onInput: e => i.value = e.target.value, id: i.id, disabled: i.disabled, tabIndex: 0, class: "alert-input" }))))));
    }
    hostData() {
        return {
            role: "alertdialog",
            style: {
                zIndex: 20000 + this.overlayIndex,
            },
            class: Object.assign({}, getClassMap(this.cssClass), { "alert-translucent": this.translucent })
        };
    }
    renderAlertButtons() {
        const buttons = this.processedButtons;
        const alertButtonGroupClass = {
            "alert-button-group": true,
            "alert-button-group-vertical": buttons.length > 2
        };
        return (h("div", { class: alertButtonGroupClass }, buttons.map(button => h("button", { type: "button", "ion-activatable": true, class: buttonClass$1(button), tabIndex: 0, onClick: () => this.buttonClick(button) }, h("span", { class: "alert-button-inner" }, button.text)))));
    }
    render() {
        const hdrId = `alert-${this.overlayIndex}-hdr`;
        const subHdrId = `alert-${this.overlayIndex}-sub-hdr`;
        const msgId = `alert-${this.overlayIndex}-msg`;
        let labelledById;
        if (this.header !== undefined) {
            labelledById = hdrId;
        }
        else if (this.subHeader !== undefined) {
            labelledById = subHdrId;
        }
        return [
            h("ion-backdrop", { tappable: this.backdropDismiss }),
            h("div", { class: "alert-wrapper" }, h("div", { class: "alert-head" }, this.header && h("h2", { id: hdrId, class: "alert-title" }, this.header), this.subHeader && h("h2", { id: subHdrId, class: "alert-sub-title" }, this.subHeader)), h("div", { id: msgId, class: "alert-message", innerHTML: this.message }), this.renderAlertInputs(labelledById), this.renderAlertButtons())
        ];
    }
    static get is() { return "ion-alert"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "animated": {
                "type": Boolean,
                "attr": "animated"
            },
            "animationCtrl": {
                "connect": "ion-animation-controller"
            },
            "backdropDismiss": {
                "type": Boolean,
                "attr": "backdrop-dismiss"
            },
            "buttons": {
                "type": "Any",
                "attr": "buttons",
                "watchCallbacks": ["buttonsChanged"]
            },
            "config": {
                "context": "config"
            },
            "cssClass": {
                "type": String,
                "attr": "css-class"
            },
            "dismiss": {
                "method": true
            },
            "el": {
                "elementRef": true
            },
            "enterAnimation": {
                "type": "Any",
                "attr": "enter-animation"
            },
            "header": {
                "type": String,
                "attr": "header"
            },
            "inputs": {
                "type": "Any",
                "attr": "inputs",
                "mutable": true,
                "watchCallbacks": ["inputsChanged"]
            },
            "keyboardClose": {
                "type": Boolean,
                "attr": "keyboard-close"
            },
            "leaveAnimation": {
                "type": "Any",
                "attr": "leave-animation"
            },
            "message": {
                "type": String,
                "attr": "message"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "onDidDismiss": {
                "method": true
            },
            "onWillDismiss": {
                "method": true
            },
            "overlayIndex": {
                "type": Number,
                "attr": "overlay-index"
            },
            "present": {
                "method": true
            },
            "subHeader": {
                "type": String,
                "attr": "sub-header"
            },
            "translucent": {
                "type": Boolean,
                "attr": "translucent"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionAlertDidLoad",
                "method": "ionAlertDidLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionAlertDidUnload",
                "method": "ionAlertDidUnload",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionAlertDidPresent",
                "method": "didPresent",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionAlertWillPresent",
                "method": "willPresent",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionAlertWillDismiss",
                "method": "willDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionAlertDidDismiss",
                "method": "didDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "ionBackdropTap",
                "method": "onBackdropTap"
            }, {
                "name": "ionAlertWillDismiss",
                "method": "dispatchCancelHandler"
            }];
    }
    static get style() { return ".sc-ion-alert-md-h {\n  --min-width: 250px;\n  --max-height: 90%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-family: var(--ion-font-family, inherit);\n  contain: strict;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 1000; }\n\n.alert-top.sc-ion-alert-md-h {\n  padding-top: 50px;\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.alert-wrapper.sc-ion-alert-md {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  max-height: var(--max-height);\n  background: var(--background);\n  contain: content;\n  opacity: 0;\n  z-index: 10; }\n\n.alert-title.sc-ion-alert-md {\n  margin: 0;\n  padding: 0; }\n\n.alert-sub-title.sc-ion-alert-md {\n  margin: 5px 0 0;\n  padding: 0;\n  font-weight: normal; }\n\n.alert-message.sc-ion-alert-md {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: scroll;\n  overscroll-behavior-y: contain; }\n\n.alert-message.sc-ion-alert-md::-webkit-scrollbar {\n  display: none; }\n\n.alert-input.sc-ion-alert-md {\n  padding: 10px 0;\n  width: 100%;\n  border: 0;\n  background: inherit;\n  font: inherit;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.alert-button-group.sc-ion-alert-md {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  width: 100%; }\n\n.alert-button-group-vertical.sc-ion-alert-md {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap; }\n\n.alert-button.sc-ion-alert-md {\n  margin: 0;\n  display: block;\n  border: 0;\n  font-size: 14px;\n  line-height: 20px;\n  z-index: 0; }\n\n.alert-button-inner.sc-ion-alert-md {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n\n.alert-tappable.sc-ion-alert-md {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  font-size: inherit;\n  line-height: initial;\n  text-align: start;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.alert-button.sc-ion-alert-md:active, .alert-button.sc-ion-alert-md:focus, .alert-checkbox.sc-ion-alert-md:active, .alert-checkbox.sc-ion-alert-md:focus, .alert-input.sc-ion-alert-md:active, .alert-input.sc-ion-alert-md:focus, .alert-radio.sc-ion-alert-md:active, .alert-radio.sc-ion-alert-md:focus {\n  outline: none; }\n\n.alert-radio-icon.sc-ion-alert-md, .alert-checkbox-icon.sc-ion-alert-md, .alert-checkbox-inner.sc-ion-alert-md {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.sc-ion-alert-md-h {\n  --background: var(--ion-overlay-background-color, #fafafa);\n  --max-width: 280px;\n  font-size: 14px; }\n\n.alert-wrapper.sc-ion-alert-md {\n  border-radius: 2px;\n  -webkit-box-shadow: 0 16px 20px rgba(0, 0, 0, 0.4);\n  box-shadow: 0 16px 20px rgba(0, 0, 0, 0.4); }\n\n.alert-head.sc-ion-alert-md {\n  padding: 20px 23px 15px;\n  text-align: start; }\n\n.alert-title.sc-ion-alert-md {\n  color: var(--ion-text-color, #000);\n  font-size: 20px;\n  font-weight: 500; }\n\n.alert-sub-title.sc-ion-alert-md {\n  color: var(--ion-text-color, #000);\n  font-size: 16px; }\n\n.alert-message.sc-ion-alert-md, .alert-input-group.sc-ion-alert-md {\n  padding: 0 24px 24px;\n  color: var(--ion-text-color-step-450, #737373); }\n\n.alert-message.sc-ion-alert-md {\n  max-height: 240px;\n  font-size: 15px; }\n\n.alert-message.sc-ion-alert-md:empty {\n  padding: 0; }\n\n.alert-input.sc-ion-alert-md {\n  margin: 5px 0;\n  border-bottom: 1px solid var(--ion-background-color-step-150, #d9d9d9);\n  color: var(--ion-text-color, #000); }\n  .alert-input.sc-ion-alert-md::-webkit-input-placeholder {\n    color: var(--ion-placeholder-text-color, #999);\n    font-family: inherit;\n    font-weight: inherit; }\n  .alert-input.sc-ion-alert-md:-ms-input-placeholder {\n    color: var(--ion-placeholder-text-color, #999);\n    font-family: inherit;\n    font-weight: inherit; }\n  .alert-input.sc-ion-alert-md::-ms-input-placeholder {\n    color: var(--ion-placeholder-text-color, #999);\n    font-family: inherit;\n    font-weight: inherit; }\n  .alert-input.sc-ion-alert-md::placeholder {\n    color: var(--ion-placeholder-text-color, #999);\n    font-family: inherit;\n    font-weight: inherit; }\n\n.alert-input.sc-ion-alert-md:focus {\n  margin-bottom: 4px;\n  border-bottom: 2px solid var(--ion-color-primary, #3880ff); }\n\n.alert-radio-group.sc-ion-alert-md, .alert-checkbox-group.sc-ion-alert-md {\n  position: relative;\n  max-height: 240px;\n  border-top: 1px solid var(--ion-background-color-step-150, #d9d9d9);\n  border-bottom: 1px solid var(--ion-background-color-step-150, #d9d9d9);\n  overflow: auto; }\n\n.alert-tappable.sc-ion-alert-md {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  height: 44px;\n  contain: strict;\n  overflow: hidden; }\n\n.alert-radio-label.sc-ion-alert-md {\n  padding: 13px 26px 13px 52px;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  color: var(--ion-text-color-step-150, #262626);\n  font-size: 16px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.alert-radio-icon.sc-ion-alert-md {\n  left: 26px;\n  top: 0;\n  border-radius: 50%;\n  display: block;\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: var(--ion-text-color-step-450, #737373); }\n\n.alert-radio-inner.sc-ion-alert-md {\n  left: 3px;\n  top: 3px;\n  border-radius: 50%;\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0);\n  -webkit-transition: -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: var(--ion-color-primary, #3880ff); }\n\n[aria-checked=true].sc-ion-alert-md   .alert-radio-label.sc-ion-alert-md {\n  color: var(--ion-text-color-step-150, #262626); }\n\n[aria-checked=true].sc-ion-alert-md   .alert-radio-icon.sc-ion-alert-md {\n  border-color: var(--ion-color-primary, #3880ff); }\n\n[aria-checked=true].sc-ion-alert-md   .alert-radio-inner.sc-ion-alert-md {\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1); }\n\n.alert-checkbox-label.sc-ion-alert-md {\n  padding: 13px 26px 13px 53px;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  color: var(--ion-text-color-step-150, #262626);\n  font-size: 16px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.alert-checkbox-icon.sc-ion-alert-md {\n  left: 26px;\n  top: 0;\n  border-radius: 2px;\n  position: relative;\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: var(--ion-text-color-step-450, #737373);\n  contain: strict; }\n\n[aria-checked=true].sc-ion-alert-md   .alert-checkbox-icon.sc-ion-alert-md {\n  border-color: var(--ion-color-primary, #3880ff);\n  background-color: var(--ion-color-primary, #3880ff); }\n\n[aria-checked=true].sc-ion-alert-md   .alert-checkbox-inner.sc-ion-alert-md {\n  left: 3px;\n  top: 0;\n  position: absolute;\n  width: 6px;\n  height: 10px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--ion-color-primary-contrast, #fff); }\n\n.alert-button-group.sc-ion-alert-md {\n  padding: 5px 12px 7px 24px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -ms-flex-wrap: wrap-reverse;\n  flex-wrap: wrap-reverse;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end; }\n\n.alert-button.sc-ion-alert-md {\n  border-radius: 2px;\n  margin: 0 8px 0 0;\n  padding: 10px;\n  position: relative;\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n  font-weight: 500;\n  text-align: end;\n  text-transform: uppercase;\n  overflow: hidden; }\n\n.alert-button.activated.sc-ion-alert-md {\n  background-color: var(--ion-background-color-step-400, #999999); }\n\n.alert-button-inner.sc-ion-alert-md {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end; }"; }
    static get styleMode() { return "md"; }
}
function buttonClass$1(button) {
    return Object.assign({ "alert-button": true }, getClassMap(button.cssClass));
}

class AlertController {
    create(opts) {
        return createOverlay(this.doc.createElement("ion-alert"), opts);
    }
    dismiss(data, role, id) {
        return dismissOverlay(this.doc, data, role, "ion-alert", id);
    }
    async getTop() {
        return getOverlay(this.doc, "ion-alert");
    }
    static get is() { return "ion-alert-controller"; }
    static get properties() {
        return {
            "create": {
                "method": true
            },
            "dismiss": {
                "method": true
            },
            "doc": {
                "context": "document"
            },
            "getTop": {
                "method": true
            }
        };
    }
}

class Avatar {
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ":host {\n  /**\n   * \@prop --border-radius: Border radius of the avatar and inner image\n   */\n  border-radius: var(--border-radius);\n  display: block; }\n\n::slotted(ion-img),\n::slotted(img) {\n  border-radius: var(--border-radius);\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  overflow: hidden; }\n\n:host {\n  --border-radius: 50%;\n  width: 64px;\n  height: 64px; }"; }
    static get styleMode() { return "md"; }
}

class Badge {
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-badge"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            }
        };
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the badge\n   * \@prop --color: Text color of the badge\n   *\n   * \@prop --padding-top: Padding top of the badge\n   * \@prop --padding-end: Padding end of the badge\n   * \@prop --padding-bottom: Padding bottom of the badge\n   * \@prop --padding-start: Padding start of the badge\n   */\n  --background: var(--ion-color-primary, #3880ff);\n  --color: var(--ion-color-primary-contrast, #fff);\n  --padding-top: 3px;\n  --padding-end: 8px;\n  --padding-bottom: 3px;\n  --padding-start: 8px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  padding: var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);\n  display: inline-block;\n  min-width: 10px;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  contain: content;\n  vertical-align: baseline; }\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n:host(:empty) {\n  display: none; }\n\n:host {\n  border-radius: 4px; }"; }
    static get styleMode() { return "md"; }
}

class Card {
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    static get is() { return "ion-card"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            }
        };
    }
    static get style() { return ".sc-ion-card-md-h {\n  \n  --ion-safe-area-left: 0px;\n  --ion-safe-area-right: 0px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  position: relative;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  overflow: hidden; }\n\n.ion-color.sc-ion-card-md-h {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n.sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-title , .sc-ion-card-md-h.ion-color.sc-ion-card-md-s  ion-card-subtitle  {\n  color: currentColor; }\n\n.sc-ion-card-md-s  img  {\n  display: block;\n  width: 100%; }\n\n.sc-ion-card-md-s  ion-list  {\n  margin: 0; }\n\n.sc-ion-card-md-h {\n  --background: var(--ion-item-background-color, transparent);\n  --color: var(--ion-text-color-step-150, #262626);\n  margin: 10px;\n  border-radius: 2px;\n  font-size: 14px;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }"; }
    static get styleMode() { return "md"; }
}

class CardSubtitle {
    hostData() {
        return {
            class: createColorClasses(this.color),
            "role": "heading",
            "aria-level": "3"
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-card-subtitle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            }
        };
    }
    static get style() { return ":host {\n  /**\n   * \@prop --color: Color of the card subtitle\n   */\n  display: block;\n  position: relative;\n  color: var(--color); }\n\n:host(.ion-color) {\n  color: var(--ion-color-base); }\n\n:host {\n  --color: var(--ion-text-color-step-450, #737373);\n  margin: 0 0 8px;\n  padding: 0;\n  font-size: 14px; }"; }
    static get styleMode() { return "md"; }
}

class CardTitle {
    hostData() {
        return {
            class: createColorClasses(this.color),
            "role": "heading",
            "aria-level": "2"
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-card-title"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            }
        };
    }
    static get style() { return ":host {\n  /**\n   * \@prop --color: Color of the card title\n   */\n  display: block;\n  position: relative;\n  color: var(--color); }\n\n:host(.ion-color) {\n  color: var(--ion-color-base); }\n\n:host {\n  --color: var(--ion-text-color-step-150, #262626);\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  line-height: 1.2; }"; }
    static get styleMode() { return "md"; }
}

const SIZE_TO_MEDIA = {
    'xs': '(min-width: 0px)',
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
};
function matchBreakpoint(win, breakpoint) {
    if (breakpoint === undefined || breakpoint === '') {
        return true;
    }
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return win.matchMedia(mediaQuery).matches;
}

const SUPPORTS_VARS = !!(CSS && CSS.supports && CSS.supports("--a: 0"));
const BREAKPOINTS = ["", "xs", "sm", "md", "lg", "xl"];
class Col {
    onResize() {
        this.el.forceUpdate();
    }
    getColumns(property) {
        let matched;
        for (const breakpoint of BREAKPOINTS) {
            const matches = matchBreakpoint(this.win, breakpoint);
            const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
            if (matches && columns !== undefined) {
                matched = columns;
            }
        }
        return matched;
    }
    calculateSize() {
        const columns = this.getColumns("size");
        if (!columns || columns === "") {
            return;
        }
        const colSize = (columns === "auto")
            ? "auto"
            : SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
                : ((columns / 12) * 100) + "%";
        return {
            "flex": `0 0 ${colSize}`,
            "width": `${colSize}`,
            "max-width": `${colSize}`
        };
    }
    calculatePosition(property, modifier) {
        const columns = this.getColumns(property);
        if (!columns) {
            return;
        }
        const amount = SUPPORTS_VARS
            ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
            : (columns > 0 && columns < 12) ? (columns / 12 * 100) + "%" : "auto";
        return {
            [modifier]: amount
        };
    }
    calculateOffset() {
        return this.calculatePosition("offset", "margin-left");
    }
    calculatePull() {
        return this.calculatePosition("pull", "right");
    }
    calculatePush() {
        return this.calculatePosition("push", "left");
    }
    hostData() {
        return {
            style: Object.assign({}, this.calculateOffset(), this.calculatePull(), this.calculatePush(), this.calculateSize())
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-col"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "el": {
                "elementRef": true
            },
            "offset": {
                "type": String,
                "attr": "offset"
            },
            "offsetLg": {
                "type": String,
                "attr": "offset-lg"
            },
            "offsetMd": {
                "type": String,
                "attr": "offset-md"
            },
            "offsetSm": {
                "type": String,
                "attr": "offset-sm"
            },
            "offsetXl": {
                "type": String,
                "attr": "offset-xl"
            },
            "offsetXs": {
                "type": String,
                "attr": "offset-xs"
            },
            "pull": {
                "type": String,
                "attr": "pull"
            },
            "pullLg": {
                "type": String,
                "attr": "pull-lg"
            },
            "pullMd": {
                "type": String,
                "attr": "pull-md"
            },
            "pullSm": {
                "type": String,
                "attr": "pull-sm"
            },
            "pullXl": {
                "type": String,
                "attr": "pull-xl"
            },
            "pullXs": {
                "type": String,
                "attr": "pull-xs"
            },
            "push": {
                "type": String,
                "attr": "push"
            },
            "pushLg": {
                "type": String,
                "attr": "push-lg"
            },
            "pushMd": {
                "type": String,
                "attr": "push-md"
            },
            "pushSm": {
                "type": String,
                "attr": "push-sm"
            },
            "pushXl": {
                "type": String,
                "attr": "push-xl"
            },
            "pushXs": {
                "type": String,
                "attr": "push-xs"
            },
            "size": {
                "type": String,
                "attr": "size"
            },
            "sizeLg": {
                "type": String,
                "attr": "size-lg"
            },
            "sizeMd": {
                "type": String,
                "attr": "size-md"
            },
            "sizeSm": {
                "type": String,
                "attr": "size-sm"
            },
            "sizeXl": {
                "type": String,
                "attr": "size-xl"
            },
            "sizeXs": {
                "type": String,
                "attr": "size-xs"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get listeners() {
        return [{
                "name": "window:resize",
                "method": "onResize",
                "passive": true
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --ion-grid-columns: The number of total Columns in the Grid\n   * \@prop --ion-grid-column-padding: Padding for the Column\n   * \@prop --ion-grid-column-padding-xs: Padding for the Column on xs screens and up\n   * \@prop --ion-grid-column-padding-sm: Padding for the Column on sm screens and up\n   * \@prop --ion-grid-column-padding-md: Padding for the Column on md screens and up\n   * \@prop --ion-grid-column-padding-lg: Padding for the Column on lg screens and up\n   * \@prop --ion-grid-column-padding-xl: Padding for the Column on xl screens and up\n   */\n  padding: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n  margin: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  width: 100%;\n  max-width: 100%;\n  min-height: 1px; }\n  \@media (min-width: 576px) {\n    :host {\n      padding: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px)); } }\n  \@media (min-width: 768px) {\n    :host {\n      padding: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px)); } }\n  \@media (min-width: 992px) {\n    :host {\n      padding: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px)); } }\n  \@media (min-width: 1200px) {\n    :host {\n      padding: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px)); } }"; }
}

class Grid {
    constructor() {
        this.fixed = false;
    }
    hostData() {
        return {
            class: {
                "grid-fixed": this.fixed
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-grid"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "fixed": {
                "type": Boolean,
                "attr": "fixed"
            }
        };
    }
    static get style() { return ":host {\n  /**\n   * \@prop --ion-grid-padding: Padding for the Grid\n   * \@prop --ion-grid-padding-xs: Padding for the Grid on xs screens\n   * \@prop --ion-grid-padding-sm: Padding for the Grid on sm screens\n   * \@prop --ion-grid-padding-md: Padding for the Grid on md screens\n   * \@prop --ion-grid-padding-lg: Padding for the Grid on lg screens\n   * \@prop --ion-grid-padding-xl: Padding for the Grid on xl screens\n   *\n   * \@prop --ion-grid-width: Width of the fixed Grid\n   * \@prop --ion-grid-width-xs: Width of the fixed Grid on xs screens\n   * \@prop --ion-grid-width-sm: Width of the fixed Grid on sm screens\n   * \@prop --ion-grid-width-md: Width of the fixed Grid on md screens\n   * \@prop --ion-grid-width-lg: Width of the fixed Grid on lg screens\n   * \@prop --ion-grid-width-xl: Width of the fixed Grid on xl screens\n   */\n  padding: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n  \@media (min-width: 576px) {\n    :host {\n      padding: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px)); } }\n  \@media (min-width: 768px) {\n    :host {\n      padding: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px)); } }\n  \@media (min-width: 992px) {\n    :host {\n      padding: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px)); } }\n  \@media (min-width: 1200px) {\n    :host {\n      padding: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px)); } }\n\n:host(.grid-fixed) {\n  width: var(--ion-grid-width-xs, var(--ion-grid-width, 100%));\n  max-width: 100%; }\n  \@media (min-width: 576px) {\n    :host(.grid-fixed) {\n      width: var(--ion-grid-width-sm, var(--ion-grid-width, 540px)); } }\n  \@media (min-width: 768px) {\n    :host(.grid-fixed) {\n      width: var(--ion-grid-width-md, var(--ion-grid-width, 720px)); } }\n  \@media (min-width: 992px) {\n    :host(.grid-fixed) {\n      width: var(--ion-grid-width-lg, var(--ion-grid-width, 960px)); } }\n  \@media (min-width: 1200px) {\n    :host(.grid-fixed) {\n      width: var(--ion-grid-width-xl, var(--ion-grid-width, 1140px)); } }\n\n:host([no-padding]) {\n  padding: 0; }\n\n:host([no-padding]) ::slotted(ion-col) {\n  padding: 0; }"; }
}

class Img {
    srcChanged() {
        this.addIO();
    }
    componentDidLoad() {
        this.addIO();
    }
    addIO() {
        if (this.src === undefined) {
            return;
        }
        if ("IntersectionObserver" in window) {
            this.removeIO();
            this.io = new IntersectionObserver(data => {
                if (data[0].isIntersecting) {
                    this.loadSrc = this.src;
                    this.removeIO();
                    this.ionImgDidLoad.emit();
                }
            });
            this.io.observe(this.el);
        }
        else {
            setTimeout(() => this.loadSrc = this.src, 200);
        }
    }
    removeIO() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    render() {
        return (h("img", { src: this.loadSrc, alt: this.alt, decoding: "async" }));
    }
    static get is() { return "ion-img"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "alt": {
                "type": String,
                "attr": "alt"
            },
            "el": {
                "elementRef": true
            },
            "loadSrc": {
                "state": true
            },
            "src": {
                "type": String,
                "attr": "src",
                "watchCallbacks": ["srcChanged"]
            }
        };
    }
    static get events() {
        return [{
                "name": "ionImgDidLoad",
                "method": "ionImgDidLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return ":host {\n  display: block;\n  -o-object-fit: contain;\n  object-fit: contain; }\n\nimg {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: inherit;\n  object-fit: inherit;\n  -o-object-position: inherit;\n  object-position: inherit; }"; }
}

function iosEnterAnimation$2(AnimationC, baseEl, ev) {
    let originY = 'top';
    let originX = 'left';
    const contentEl = baseEl.querySelector('.popover-content');
    const contentDimentions = contentEl.getBoundingClientRect();
    const contentWidth = contentDimentions.width;
    const contentHeight = contentDimentions.height;
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;
    const targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    const targetTop = targetDim != null && 'top' in targetDim ? targetDim.top : bodyHeight / 2 - contentHeight / 2;
    const targetLeft = targetDim != null && 'left' in targetDim ? targetDim.left : bodyWidth / 2;
    const targetWidth = (targetDim && targetDim.width) || 0;
    const targetHeight = (targetDim && targetDim.height) || 0;
    const arrowEl = baseEl.querySelector('.popover-arrow');
    const arrowDim = arrowEl.getBoundingClientRect();
    const arrowWidth = arrowDim.width;
    const arrowHeight = arrowDim.height;
    if (targetDim == null) {
        arrowEl.style.display = 'none';
    }
    const arrowCSS = {
        top: targetTop + targetHeight,
        left: targetLeft + targetWidth / 2 - arrowWidth / 2
    };
    const popoverCSS = {
        top: targetTop + targetHeight + (arrowHeight - 1),
        left: targetLeft + targetWidth / 2 - contentWidth / 2
    };
    let checkSafeAreaLeft = false;
    let checkSafeAreaRight = false;
    if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {
        checkSafeAreaLeft = true;
        popoverCSS.left = POPOVER_IOS_BODY_PADDING;
    }
    else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 > bodyWidth) {
        checkSafeAreaRight = true;
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;
        originX = 'right';
    }
    if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {
        arrowCSS.top = targetTop - (arrowHeight + 1);
        console.log(arrowCSS);
        console.log(targetTop);
        console.log(contentHeight);
        popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
    }
    arrowEl.style.top = arrowCSS.top + 'px';
    arrowEl.style.left = arrowCSS.left + 'px';
    contentEl.style.top = popoverCSS.top + 'px';
    contentEl.style.left = popoverCSS.left + 'px';
    if (checkSafeAreaLeft) {
        contentEl.style.left = `calc(${popoverCSS.left}px + var(--ion-safe-area-left, 0px))`;
    }
    if (checkSafeAreaRight) {
        contentEl.style.left = `calc(${popoverCSS.left}px - var(--ion-safe-area-right, 0px))`;
    }
    contentEl.style.transformOrigin = originY + ' ' + originX;
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    backdropAnimation.fromTo('opacity', 0.01, 0.08);
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.01, 1);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(100)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
const POPOVER_IOS_BODY_PADDING = 5;

function iosLeaveAnimation$2(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.99, 0);
    backdropAnimation.fromTo('opacity', 0.08, 0);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}

function mdEnterAnimation$2(AnimationC, baseEl, ev) {
    let originY = 'top';
    let originX = 'left';
    const contentEl = baseEl.querySelector('.popover-content');
    const contentDimentions = contentEl.getBoundingClientRect();
    const contentWidth = contentDimentions.width;
    const contentHeight = contentDimentions.height;
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;
    const targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    const targetTop = targetDim != null && 'top' in targetDim
        ? targetDim.top
        : bodyHeight / 2 - contentHeight / 2;
    const targetLeft = targetDim != null && 'left' in targetDim
        ? targetDim.left
        : bodyWidth / 2 - contentWidth / 2;
    const targetHeight = (targetDim && targetDim.height) || 0;
    const popoverCSS = {
        top: targetTop,
        left: targetLeft
    };
    if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
        popoverCSS.left = POPOVER_MD_BODY_PADDING;
    }
    else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left >
        bodyWidth) {
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING;
        originX = 'right';
    }
    if (targetTop + targetHeight + contentHeight > bodyHeight &&
        targetTop - contentHeight > 0) {
        popoverCSS.top = targetTop - contentHeight;
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
    }
    contentEl.style.top = popoverCSS.top + 'px';
    contentEl.style.left = popoverCSS.left + 'px';
    contentEl.style.transformOrigin = originY + ' ' + originX;
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    backdropAnimation.fromTo('opacity', 0.01, 0.08);
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.01, 1);
    const contentAnimation = new AnimationC();
    contentAnimation.addElement(baseEl.querySelector('.popover-content'));
    contentAnimation.fromTo('scale', 0.001, 1);
    const viewportAnimation = new AnimationC();
    viewportAnimation.addElement(baseEl.querySelector('.popover-viewport'));
    viewportAnimation.fromTo('opacity', 0.01, 1);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(300)
        .add(backdropAnimation)
        .add(wrapperAnimation)
        .add(contentAnimation)
        .add(viewportAnimation));
}
const POPOVER_MD_BODY_PADDING = 12;

function mdLeaveAnimation$2(AnimationC, baseEl) {
    const baseAnimation = new AnimationC();
    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.99, 0);
    backdropAnimation.fromTo('opacity', 0.08, 0);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}

class Popover {
    constructor() {
        this.presented = false;
        this.keyboardClose = true;
        this.backdropDismiss = true;
        this.showBackdrop = true;
        this.translucent = false;
        this.animated = true;
    }
    componentDidLoad() {
        this.ionPopoverDidLoad.emit();
    }
    componentDidUnload() {
        this.ionPopoverDidUnload.emit();
    }
    onDismiss(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    }
    onBackdropTap() {
        this.dismiss(undefined, BACKDROP);
    }
    lifecycle(modalEvent) {
        const el = this.usersElement;
        const name = LIFECYCLE_MAP[modalEvent.type];
        if (el && name) {
            const event = new CustomEvent(name, {
                bubbles: false,
                cancelable: false,
                detail: modalEvent.detail
            });
            el.dispatchEvent(event);
        }
    }
    async present() {
        if (this.presented) {
            return;
        }
        const container = this.el.querySelector(".popover-content");
        if (!container) {
            throw new Error("container is undefined");
        }
        const data = Object.assign({}, this.componentProps, { popover: this.el });
        this.usersElement = await attachComponent(this.delegate, container, this.component, ["popover-viewport", this.el["s-sc"]], data);
        await deepReady(this.usersElement);
        return present(this, "popoverEnter", iosEnterAnimation$2, mdEnterAnimation$2, this.event);
    }
    async dismiss(data, role) {
        const shouldDismiss = await dismiss(this, data, role, "popoverLeave", iosLeaveAnimation$2, mdLeaveAnimation$2, this.event);
        if (shouldDismiss) {
            await detachComponent(this.delegate, this.usersElement);
        }
        return shouldDismiss;
    }
    onDidDismiss() {
        return eventMethod(this.el, "ionPopoverDidDismiss");
    }
    onWillDismiss() {
        return eventMethod(this.el, "ionPopoverWillDismiss");
    }
    hostData() {
        return {
            style: {
                zIndex: 20000 + this.overlayIndex,
            },
            "no-router": true,
            class: Object.assign({ "popover-translucent": this.translucent }, getClassMap(this.cssClass))
        };
    }
    render() {
        return [
            h("ion-backdrop", { tappable: this.backdropDismiss }),
            h("div", { class: "popover-wrapper" }, h("div", { class: "popover-arrow" }), h("div", { class: "popover-content" }))
        ];
    }
    static get is() { return "ion-popover"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "animated": {
                "type": Boolean,
                "attr": "animated"
            },
            "animationCtrl": {
                "connect": "ion-animation-controller"
            },
            "backdropDismiss": {
                "type": Boolean,
                "attr": "backdrop-dismiss"
            },
            "component": {
                "type": String,
                "attr": "component"
            },
            "componentProps": {
                "type": "Any",
                "attr": "component-props"
            },
            "config": {
                "context": "config"
            },
            "cssClass": {
                "type": String,
                "attr": "css-class"
            },
            "delegate": {
                "type": "Any",
                "attr": "delegate"
            },
            "dismiss": {
                "method": true
            },
            "el": {
                "elementRef": true
            },
            "enterAnimation": {
                "type": "Any",
                "attr": "enter-animation"
            },
            "event": {
                "type": "Any",
                "attr": "event"
            },
            "keyboardClose": {
                "type": Boolean,
                "attr": "keyboard-close"
            },
            "leaveAnimation": {
                "type": "Any",
                "attr": "leave-animation"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "onDidDismiss": {
                "method": true
            },
            "onWillDismiss": {
                "method": true
            },
            "overlayIndex": {
                "type": Number,
                "attr": "overlay-index"
            },
            "present": {
                "method": true
            },
            "showBackdrop": {
                "type": Boolean,
                "attr": "show-backdrop"
            },
            "translucent": {
                "type": Boolean,
                "attr": "translucent"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionPopoverDidLoad",
                "method": "ionPopoverDidLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionPopoverDidUnload",
                "method": "ionPopoverDidUnload",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionPopoverDidPresent",
                "method": "didPresent",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionPopoverWillPresent",
                "method": "willPresent",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionPopoverWillDismiss",
                "method": "willDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionPopoverDidDismiss",
                "method": "didDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "ionDismiss",
                "method": "onDismiss"
            }, {
                "name": "ionBackdropTap",
                "method": "onBackdropTap"
            }, {
                "name": "ionPopoverDidPresent",
                "method": "lifecycle"
            }, {
                "name": "ionPopoverWillPresent",
                "method": "lifecycle"
            }, {
                "name": "ionPopoverWillDismiss",
                "method": "lifecycle"
            }, {
                "name": "ionPopoverDidDismiss",
                "method": "lifecycle"
            }];
    }
    static get style() { return ".sc-ion-popover-md-h {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  z-index: 1000; }\n\n.popover-wrapper.sc-ion-popover-md {\n  opacity: 0;\n  z-index: 10; }\n\n.popover-content.sc-ion-popover-md {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  overflow: auto;\n  z-index: 10; }\n\n.popover-viewport.sc-ion-popover-md {\n  --ion-safe-area-top: 0px;\n  --ion-safe-area-right: 0px;\n  --ion-safe-area-bottom: 0px;\n  --ion-safe-area-left: 0px; }\n\n.popover-content.sc-ion-popover-md {\n  border-radius: 2px;\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  width: 250px;\n  min-width: 0;\n  min-height: 0;\n  max-height: 90%;\n  background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #000);\n  -webkit-box-shadow: 0 3px 12px 2px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 3px 12px 2px rgba(0, 0, 0, 0.3); }\n\n.popover-viewport.sc-ion-popover-md {\n  -webkit-transition-delay: 100ms;\n  transition-delay: 100ms; }"; }
    static get styleMode() { return "md"; }
}
const LIFECYCLE_MAP = {
    "ionPopoverDidPresent": "ionViewDidEnter",
    "ionPopoverWillPresent": "ionViewWillEnter",
    "ionPopoverWillDismiss": "ionViewWillDismiss",
    "ionPopoverDidDismiss": "ionViewDidDismiss",
};

class PopoverController {
    create(opts) {
        return createOverlay(this.doc.createElement("ion-popover"), opts);
    }
    dismiss(data, role, id) {
        return dismissOverlay(this.doc, data, role, "ion-popover", id);
    }
    async getTop() {
        return getOverlay(this.doc, "ion-popover");
    }
    static get is() { return "ion-popover-controller"; }
    static get properties() {
        return {
            "create": {
                "method": true
            },
            "dismiss": {
                "method": true
            },
            "doc": {
                "context": "document"
            },
            "getTop": {
                "method": true
            }
        };
    }
}

class Row {
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-row"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }"; }
}

class Select {
    constructor() {
        this.childOpts = [];
        this.inputId = `ion-sel-${selectIds++}`;
        this.isExpanded = false;
        this.keyFocus = false;
        this.text = "";
        this.disabled = false;
        this.cancelText = "Cancel";
        this.okText = "OK";
        this.name = this.inputId;
        this.multiple = false;
        this.interface = "alert";
        this.interfaceOptions = {};
    }
    disabledChanged() {
        this.emitStyle();
    }
    valueChanged() {
        if (this.value === undefined) {
            this.childOpts.filter(o => o.selected).forEach(selectOption => {
                selectOption.selected = false;
            });
            this.text = "";
        }
        else {
            let hasChecked = false;
            const texts = [];
            this.childOpts.forEach(selectOption => {
                if ((Array.isArray(this.value) && this.value.includes(selectOption.value)) || (selectOption.value === this.value)) {
                    if (!selectOption.selected && (this.multiple || !hasChecked)) {
                        selectOption.selected = true;
                    }
                    else if (!this.multiple && hasChecked && selectOption.selected) {
                        selectOption.selected = false;
                    }
                    hasChecked = true;
                }
                else if (selectOption.selected) {
                    selectOption.selected = false;
                }
                if (selectOption.selected) {
                    texts.push(selectOption.textContent || "");
                }
            });
            this.text = texts.join(", ");
        }
        this.ionChange.emit({
            value: this.value,
            text: this.text
        });
        this.emitStyle();
    }
    optLoad(ev) {
        const selectOption = ev.target;
        this.childOpts = Array.from(this.el.querySelectorAll("ion-select-option"));
        if (this.value != null && (Array.isArray(this.value) && this.value.includes(selectOption.value)) || (selectOption.value === this.value)) {
            selectOption.selected = true;
        }
        else if (Array.isArray(this.value) && this.multiple && selectOption.selected) {
            this.value.push(selectOption.value);
        }
        else if (this.value === undefined && selectOption.selected) {
            this.value = selectOption.value;
        }
        else if (selectOption.selected) {
            selectOption.selected = false;
        }
    }
    optUnload(ev) {
        const index = this.childOpts.indexOf(ev.target);
        if (index > -1) {
            this.childOpts.splice(index, 1);
        }
    }
    onSelect(ev) {
        this.childOpts.forEach(selectOption => {
            if (selectOption === ev.target) {
                this.value = selectOption.value;
            }
            else {
                selectOption.selected = false;
            }
        });
    }
    componentWillLoad() {
        if (!this.value) {
            this.value = this.multiple ? [] : undefined;
        }
    }
    componentDidLoad() {
        this.ionStyle = deferEvent(this.ionStyle);
        const label = this.getLabel();
        if (label) {
            this.labelId = label.id = this.name + "-lbl";
        }
        if (this.multiple) {
            const checked = this.childOpts.filter(o => o.selected);
            this.value.length = 0;
            checked.forEach(o => {
                this.value.push(o.value);
            });
            this.text = checked.map(o => o.textContent).join(", ");
        }
        else {
            const checked = this.childOpts.find(o => o.selected);
            if (checked) {
                this.value = checked.value;
                this.text = checked.textContent || "";
            }
        }
        this.emitStyle();
    }
    open(ev) {
        let selectInterface = this.interface;
        if ((selectInterface === "action-sheet" || selectInterface === "popover") && this.multiple) {
            console.warn(`Select interface cannot be "${selectInterface}" with a multi-value select. Using the "alert" interface instead.`);
            selectInterface = "alert";
        }
        if (selectInterface === "popover" && !ev) {
            console.warn("Select interface cannot be a \"popover\" without passing an event. Using the \"alert\" interface instead.");
            selectInterface = "alert";
        }
        if (selectInterface === "popover") {
            return this.openPopover(ev);
        }
        if (selectInterface === "action-sheet") {
            return this.openActionSheet();
        }
        return this.openAlert();
    }
    getLabel() {
        const item = this.el.closest("ion-item");
        if (item) {
            return item.querySelector("ion-label");
        }
        return null;
    }
    async openPopover(ev) {
        const interfaceOptions = this.interfaceOptions;
        const popoverOpts = Object.assign({}, interfaceOptions, { component: "ion-select-popover", cssClass: ["select-popover", interfaceOptions.cssClass], event: ev, componentProps: {
                header: interfaceOptions.header,
                subHeader: interfaceOptions.subHeader,
                message: interfaceOptions.message,
                value: this.value,
                options: this.childOpts.map(o => {
                    return {
                        text: o.textContent,
                        value: o.value,
                        checked: o.selected,
                        disabled: o.disabled,
                        handler: () => {
                            this.value = o.value;
                            this.close();
                        }
                    };
                })
            } });
        const popover = this.overlay = await this.popoverCtrl.create(popoverOpts);
        await popover.present();
        this.isExpanded = true;
        return popover;
    }
    async openActionSheet() {
        const actionSheetButtons = this.childOpts.map(option => {
            return {
                role: (option.selected ? "selected" : ""),
                text: option.textContent,
                handler: () => {
                    this.value = option.value;
                }
            };
        });
        actionSheetButtons.push({
            text: this.cancelText,
            role: "cancel",
            handler: () => {
                this.ionCancel.emit();
            }
        });
        const interfaceOptions = this.interfaceOptions;
        const actionSheetOpts = Object.assign({}, interfaceOptions, { buttons: actionSheetButtons, cssClass: ["select-action-sheet", interfaceOptions.cssClass] });
        const actionSheet = this.overlay = await this.actionSheetCtrl.create(actionSheetOpts);
        await actionSheet.present();
        this.isExpanded = true;
        return actionSheet;
    }
    async openAlert() {
        const label = this.getLabel();
        const labelText = (label) ? label.textContent : null;
        const interfaceOptions = this.interfaceOptions;
        const inputType = (this.multiple ? "checkbox" : "radio");
        const alertOpts = Object.assign({}, interfaceOptions, { header: interfaceOptions.header ? interfaceOptions.header : labelText, inputs: this.childOpts.map(o => {
                return {
                    type: inputType,
                    label: o.textContent,
                    value: o.value,
                    checked: o.selected,
                    disabled: o.disabled
                };
            }), buttons: [
                {
                    text: this.cancelText,
                    role: "cancel",
                    handler: () => {
                        this.ionCancel.emit();
                    }
                },
                {
                    text: this.okText,
                    handler: (selectedValues) => {
                        this.value = selectedValues;
                    }
                }
            ], cssClass: ["select-alert", interfaceOptions.cssClass,
                (this.multiple ? "multiple-select-alert" : "single-select-alert")] });
        const alert = this.overlay = await this.alertCtrl.create(alertOpts);
        await alert.present();
        this.isExpanded = true;
        return alert;
    }
    close() {
        if (!this.overlay) {
            return Promise.resolve(false);
        }
        const overlay = this.overlay;
        this.overlay = undefined;
        this.isExpanded = false;
        return overlay.dismiss();
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
    hasValue() {
        if (Array.isArray(this.value)) {
            return this.value.length > 0;
        }
        return (this.value != null && this.value !== undefined && this.value !== "");
    }
    emitStyle() {
        this.ionStyle.emit({
            "interactive": true,
            "select": true,
            "has-value": this.hasValue(),
            "interactive-disabled": this.disabled,
            "select-disabled": this.disabled
        });
    }
    hostData() {
        return {
            class: {
                "in-item": hostContext("ion-item", this.el),
                "select-disabled": this.disabled,
                "select-key": this.keyFocus
            }
        };
    }
    render() {
        renderHiddenInput(this.el, this.name, parseValue(this.value), this.disabled);
        let addPlaceholderClass = false;
        let selectText = this.selectedText || this.text;
        if (selectText === "" && this.placeholder != null) {
            selectText = this.placeholder;
            addPlaceholderClass = true;
        }
        const selectTextClasses = {
            "select-text": true,
            "select-placeholder": addPlaceholderClass
        };
        return [
            h("div", { role: "textbox", "aria-multiline": "false", class: selectTextClasses }, selectText),
            h("div", { class: "select-icon", role: "presentation" }, h("div", { class: "select-icon-inner" })),
            h("button", { type: "button", role: "combobox", "aria-haspopup": "dialog", "aria-labelledby": this.labelId, "aria-expanded": this.isExpanded ? "true" : null, "aria-disabled": this.disabled ? "true" : null, onClick: this.open.bind(this), onKeyUp: this.onKeyUp.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), class: "select-cover" }, h("slot", null), this.mode === "md" && h("ion-ripple-effect", null))
        ];
    }
    static get is() { return "ion-select"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "actionSheetCtrl": {
                "connect": "ion-action-sheet-controller"
            },
            "alertCtrl": {
                "connect": "ion-alert-controller"
            },
            "cancelText": {
                "type": String,
                "attr": "cancel-text"
            },
            "disabled": {
                "type": Boolean,
                "attr": "disabled",
                "watchCallbacks": ["disabledChanged"]
            },
            "el": {
                "elementRef": true
            },
            "interface": {
                "type": String,
                "attr": "interface"
            },
            "interfaceOptions": {
                "type": "Any",
                "attr": "interface-options"
            },
            "isExpanded": {
                "state": true
            },
            "keyFocus": {
                "state": true
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "multiple": {
                "type": Boolean,
                "attr": "multiple"
            },
            "name": {
                "type": String,
                "attr": "name"
            },
            "okText": {
                "type": String,
                "attr": "ok-text"
            },
            "open": {
                "method": true
            },
            "placeholder": {
                "type": String,
                "attr": "placeholder"
            },
            "popoverCtrl": {
                "connect": "ion-popover-controller"
            },
            "selectedText": {
                "type": String,
                "attr": "selected-text"
            },
            "text": {
                "state": true
            },
            "value": {
                "type": "Any",
                "attr": "value",
                "mutable": true,
                "watchCallbacks": ["valueChanged"]
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
                "name": "ionCancel",
                "method": "ionCancel",
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
    static get listeners() {
        return [{
                "name": "ionSelectOptionDidLoad",
                "method": "optLoad"
            }, {
                "name": "ionSelectOptionDidUnload",
                "method": "optUnload"
            }, {
                "name": "ionSelect",
                "method": "onSelect"
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --color: Color of the select text\n   * \@prop --icon-color: Color of the select icon\n   * \@prop --padding-top: Top padding of the select\n   * \@prop --padding-end: End padding of the select\n   * \@prop --padding-bottom: Bottom padding of the select\n   * \@prop --padding-start: Start padding of the select\n   * \@prop --placeholder-color: Color of the select placeholder text\n   */\n  padding: var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  overflow: hidden; }\n\n:host(.in-item) {\n  position: static;\n  max-width: 45%; }\n\n:host(.select-disabled) {\n  opacity: .4;\n  pointer-events: none; }\n\n:host(.select-key) button {\n  border: 2px solid #5e9ed6; }\n\n.select-placeholder {\n  color: var(--placeholder-color); }\n\n.select-cover {\n  left: 0;\n  top: 0;\n  margin: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none; }\n\n.select-icon {\n  position: relative; }\n\n.select-text {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  min-width: 16px;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.select-icon-inner {\n  left: 5px;\n  top: 50%;\n  margin-top: -3px;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 5px solid;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  color: var(--icon-color);\n  pointer-events: none; }\n\n::slotted(ion-select-option) {\n  display: none; }\n\nbutton:focus {\n  outline: none; }\n\n:host {\n  --color: var(--ion-text-color, #000);\n  --icon-color: var(--ion-text-color-step-600, #999999);\n  --padding-top: 11px;\n  --padding-end: 8px;\n  --padding-bottom: 11px;\n  --padding-start: 16px;\n  --placeholder-color: var(--ion-text-color-step-600, #999999); }\n\n.select-icon {\n  width: 12px;\n  height: 19px; }"; }
    static get styleMode() { return "md"; }
}
function parseValue(value) {
    if (value == null) {
        return undefined;
    }
    if (Array.isArray(value)) {
        return value.join(",");
    }
    return value.toString();
}
let selectIds = 0;

class SelectOption {
    constructor() {
        this.inputId = `ion-selopt-${selectOptionIds++}`;
        this.disabled = false;
        this.selected = false;
    }
    componentWillLoad() {
        if (this.value == null) {
            this.value = this.el.textContent || "";
        }
    }
    componentDidLoad() {
        this.ionSelectOptionDidLoad.emit();
    }
    componentDidUnload() {
        this.ionSelectOptionDidUnload.emit();
    }
    hostData() {
        return {
            "role": "option",
            "id": this.inputId
        };
    }
    static get is() { return "ion-select-option"; }
    static get properties() {
        return {
            "disabled": {
                "type": Boolean,
                "attr": "disabled"
            },
            "el": {
                "elementRef": true
            },
            "selected": {
                "type": Boolean,
                "attr": "selected"
            },
            "value": {
                "type": "Any",
                "attr": "value",
                "mutable": true
            }
        };
    }
    static get events() {
        return [{
                "name": "ionSelectOptionDidLoad",
                "method": "ionSelectOptionDidLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSelectOptionDidUnload",
                "method": "ionSelectOptionDidUnload",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
}
let selectOptionIds = 0;

class Slide {
    componentDidLoad() {
        this.ionSlideChanged.emit();
    }
    componentDidUnload() {
        this.ionSlideChanged.emit();
    }
    hostData() {
        return {
            class: {
                "swiper-slide": true
            }
        };
    }
    static get is() { return "ion-slide"; }
    static get events() {
        return [{
                "name": "ionSlideChanged",
                "method": "ionSlideChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return "ion-slide {\n  display: block;\n  width: 100%;\n  height: 100%; }\n\n.slide-zoom {\n  display: block;\n  width: 100%;\n  text-align: center; }\n\n.swiper-slide {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 18px;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.swiper-slide img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%; }"; }
}

class Slides {
    constructor() {
        this.didInit = false;
        this.swiper = new Promise(resolve => { this.readySwiper = resolve; });
        this.options = {};
        this.pager = false;
        this.scrollbar = false;
    }
    async optionsChanged() {
        if (this.didInit) {
            const swiper = await this.getSwiper();
            Object.assign(swiper.params, this.options);
            await this.update();
        }
    }
    componentDidLoad() {
        rIC(() => this.initSwiper());
    }
    async componentDidUnload() {
        const swiper = await this.getSwiper();
        swiper.destroy(true, true);
    }
    onSlideChanged() {
        if (this.didInit) {
            this.update();
        }
    }
    async update() {
        const swiper = await this.getSwiper();
        swiper.update();
    }
    async slideTo(index, speed, runCallbacks) {
        const swiper = await this.getSwiper();
        swiper.slideTo(index, speed, runCallbacks);
    }
    async slideNext(speed, runCallbacks) {
        const swiper = await this.getSwiper();
        swiper.slideNext(speed, runCallbacks);
    }
    async slidePrev(speed, runCallbacks) {
        const swiper = await this.getSwiper();
        swiper.slidePrev(speed, runCallbacks);
    }
    async getActiveIndex() {
        const swiper = await this.getSwiper();
        return swiper.activeIndex;
    }
    async getPreviousIndex() {
        const swiper = await this.getSwiper();
        return swiper.previousIndex;
    }
    async length() {
        const swiper = await this.getSwiper();
        return swiper.slides.length;
    }
    async isEnd() {
        const swiper = await this.getSwiper();
        return swiper.isEnd;
    }
    async isBeginning() {
        const swiper = await this.getSwiper();
        return swiper.isBeginning;
    }
    async startAutoplay() {
        const swiper = await this.getSwiper();
        if (swiper.autoplay) {
            swiper.autoplay.start();
        }
    }
    async stopAutoplay() {
        const swiper = await this.getSwiper();
        if (swiper.autoplay) {
            swiper.autoplay.stop();
        }
    }
    async lockSwipeToNext(shouldLockSwipeToNext) {
        const swiper = await this.getSwiper();
        swiper.allowSlideNext = !shouldLockSwipeToNext;
    }
    async lockSwipeToPrev(shouldLockSwipeToPrev) {
        const swiper = await this.getSwiper();
        swiper.allowSlidePrev = !shouldLockSwipeToPrev;
    }
    async lockSwipes(shouldLockSwipes) {
        const swiper = await this.getSwiper();
        swiper.allowSlideNext = !shouldLockSwipes;
        swiper.allowSlidePrev = !shouldLockSwipes;
        swiper.allowTouchMove = !shouldLockSwipes;
    }
    async initSwiper() {
        const finalOptions = this.normalizeOptions();
        const { Swiper } = await import("./swiper.bundle.js");
        const swiper = new Swiper(this.el, finalOptions);
        this.didInit = true;
        this.readySwiper(swiper);
    }
    getSwiper() {
        return this.swiper;
    }
    normalizeOptions() {
        const swiperOptions = {
            effect: "slide",
            direction: "horizontal",
            initialSlide: 0,
            loop: false,
            parallax: false,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 300,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            touchEventsTarget: "container",
            autoplay: {
                disableOnInteraction: true,
                stopOnLastSlide: false,
            },
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            autoHeight: false,
            setWrapperSize: false,
            zoom: {
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
            },
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            threshold: 0,
            touchMoveStopPropagation: true,
            touchReleaseOnEdges: false,
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            resistance: true,
            resistanceRatio: 0.85,
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loopAdditionalSlides: 0,
            noSwiping: true,
            runCallbacksOnInit: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            flipEffect: {
                slideShadows: true,
                limitRotation: true
            },
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fadeEffect: {
                crossfade: false
            },
            a11y: {
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide"
            }
        };
        if (this.pager) {
            swiperOptions.pagination = {
                el: this.paginationEl,
                type: "bullets",
                clickable: false,
                hideOnClick: false,
            };
        }
        if (this.scrollbar) {
            swiperOptions.scrollbar = {
                el: this.scrollbarEl,
                hide: true,
            };
        }
        const eventOptions = {
            on: {
                init: () => {
                    setTimeout(() => {
                        this.ionSlidesDidLoad.emit();
                    }, 20);
                },
                slideChangeTransitionStart: this.ionSlideWillChange.emit,
                slideChangeTransitionEnd: this.ionSlideDidChange.emit,
                slideNextTransitionStart: this.ionSlideNextStart.emit,
                slidePrevTransitionStart: this.ionSlidePrevStart.emit,
                slideNextTransitionEnd: this.ionSlideNextEnd.emit,
                slidePrevTransitionEnd: this.ionSlidePrevEnd.emit,
                transitionStart: this.ionSlideTransitionStart.emit,
                transitionEnd: this.ionSlideTransitionEnd.emit,
                sliderMove: this.ionSlideDrag.emit,
                reachBeginning: this.ionSlideReachStart.emit,
                reachEnd: this.ionSlideReachEnd.emit,
                touchStart: this.ionSlideTouchStart.emit,
                touchEnd: this.ionSlideTouchEnd.emit,
                tap: this.ionSlideTap.emit,
                doubleTap: this.ionSlideDoubleTap.emit
            }
        };
        return Object.assign({}, swiperOptions, this.options, eventOptions);
    }
    hostData() {
        return {
            class: Object.assign({}, createThemedClasses(this.mode, "slides"), { "swiper-container": true })
        };
    }
    render() {
        return [
            h("div", { class: "swiper-wrapper" }, h("slot", null)),
            this.pager && h("div", { class: "swiper-pagination", ref: el => this.paginationEl = el }),
            this.scrollbar && h("div", { class: "swiper-scrollbar", ref: el => this.scrollbarEl = el })
        ];
    }
    static get is() { return "ion-slides"; }
    static get properties() {
        return {
            "el": {
                "elementRef": true
            },
            "getActiveIndex": {
                "method": true
            },
            "getPreviousIndex": {
                "method": true
            },
            "isBeginning": {
                "method": true
            },
            "isEnd": {
                "method": true
            },
            "length": {
                "method": true
            },
            "lockSwipes": {
                "method": true
            },
            "lockSwipeToNext": {
                "method": true
            },
            "lockSwipeToPrev": {
                "method": true
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "options": {
                "type": "Any",
                "attr": "options",
                "watchCallbacks": ["optionsChanged"]
            },
            "pager": {
                "type": Boolean,
                "attr": "pager"
            },
            "scrollbar": {
                "type": Boolean,
                "attr": "scrollbar"
            },
            "slideNext": {
                "method": true
            },
            "slidePrev": {
                "method": true
            },
            "slideTo": {
                "method": true
            },
            "startAutoplay": {
                "method": true
            },
            "stopAutoplay": {
                "method": true
            },
            "update": {
                "method": true
            }
        };
    }
    static get events() {
        return [{
                "name": "ionSlidesDidLoad",
                "method": "ionSlidesDidLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlideTap",
                "method": "ionSlideTap",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlideDoubleTap",
                "method": "ionSlideDoubleTap",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlideWillChange",
                "method": "ionSlideWillChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlideDidChange",
                "method": "ionSlideDidChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlideNextStart",
                "method": "ionSlideNextStart",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlidePrevStart",
                "method": "ionSlidePrevStart",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlideNextEnd",
                "method": "ionSlideNextEnd",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlidePrevEnd",
                "method": "ionSlidePrevEnd",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlideTransitionStart",
                "method": "ionSlideTransitionStart",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlideTransitionEnd",
                "method": "ionSlideTransitionEnd",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlideDrag",
                "method": "ionSlideDrag",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlideReachStart",
                "method": "ionSlideReachStart",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlideReachEnd",
                "method": "ionSlideReachEnd",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlideTouchStart",
                "method": "ionSlideTouchStart",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionSlideTouchEnd",
                "method": "ionSlideTouchEnd",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "ionSlideChanged",
                "method": "onSlideChanged"
            }];
    }
    static get style() { return "/**\n * Swiper 4.3.5\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2018 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: July 31, 2018\n */\n.swiper-container {\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1; }\n\n.swiper-container-no-flexbox .swiper-slide {\n  float: left; }\n\n.swiper-container-vertical > .swiper-wrapper {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box; }\n\n.swiper-container-android .swiper-slide,\n.swiper-wrapper {\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0); }\n\n.swiper-container-multirow > .swiper-wrapper {\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.swiper-container-free-mode > .swiper-wrapper {\n  -webkit-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n  margin: 0 auto; }\n\n.swiper-slide {\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform; }\n\n.swiper-invisible-blank-slide {\n  visibility: hidden; }\n\n/* Auto Height */\n.swiper-container-autoheight,\n.swiper-container-autoheight .swiper-slide {\n  height: auto; }\n\n.swiper-container-autoheight .swiper-wrapper {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -webkit-transition-property: height, -webkit-transform;\n  transition-property: height, -webkit-transform;\n  -o-transition-property: transform, height;\n  transition-property: transform, height;\n  transition-property: transform, height, -webkit-transform; }\n\n/* 3D Effects */\n.swiper-container-3d {\n  -webkit-perspective: 1200px;\n  perspective: 1200px; }\n\n.swiper-container-3d .swiper-wrapper,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-cube-shadow {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10; }\n\n.swiper-container-3d .swiper-slide-shadow-left {\n  background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); }\n\n.swiper-container-3d .swiper-slide-shadow-right {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); }\n\n.swiper-container-3d .swiper-slide-shadow-top {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); }\n\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); }\n\n/* IE10 Windows Phone 8 Fixes */\n.swiper-container-wp8-horizontal,\n.swiper-container-wp8-horizontal > .swiper-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y; }\n\n.swiper-container-wp8-vertical,\n.swiper-container-wp8-vertical > .swiper-wrapper {\n  -ms-touch-action: pan-x;\n  touch-action: pan-x; }\n\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: 27px;\n  height: 44px;\n  margin-top: -22px;\n  z-index: 10;\n  cursor: pointer;\n  background-size: 27px 44px;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none; }\n\n.swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  left: 10px;\n  right: auto; }\n\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  right: 10px;\n  left: auto; }\n\n.swiper-button-prev.swiper-button-white,\n.swiper-container-rtl .swiper-button-next.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\"); }\n\n.swiper-button-next.swiper-button-white,\n.swiper-container-rtl .swiper-button-prev.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\"); }\n\n.swiper-button-prev.swiper-button-black,\n.swiper-container-rtl .swiper-button-next.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\"); }\n\n.swiper-button-next.swiper-button-black,\n.swiper-container-rtl .swiper-button-prev.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\"); }\n\n.swiper-button-lock {\n  display: none; }\n\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  -webkit-transition: 300ms opacity;\n  -o-transition: 300ms opacity;\n  transition: 300ms opacity;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  z-index: 10; }\n\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0; }\n\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 10px;\n  left: 0;\n  width: 100%; }\n\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0; }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n  position: relative; }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1); }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1); }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  -webkit-transform: scale(0.66);\n  -ms-transform: scale(0.66);\n  transform: scale(0.66); }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33); }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  -webkit-transform: scale(0.66);\n  -ms-transform: scale(0.66);\n  transform: scale(0.66); }\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33); }\n\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #000;\n  opacity: 0.2; }\n\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer; }\n\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #007aff; }\n\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translate3d(0px, -50%, 0);\n  transform: translate3d(0px, -50%, 0); }\n\n.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 6px 0;\n  display: block; }\n\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  width: 8px; }\n\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  -webkit-transition: 200ms top, 200ms -webkit-transform;\n  transition: 200ms top, 200ms -webkit-transform;\n  -o-transition: 200ms transform, 200ms top;\n  transition: 200ms transform, 200ms top;\n  transition: 200ms transform, 200ms top, 200ms -webkit-transform; }\n\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 4px; }\n\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  white-space: nowrap; }\n\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transition: 200ms left, 200ms -webkit-transform;\n  transition: 200ms left, 200ms -webkit-transform;\n  -o-transition: 200ms transform, 200ms left;\n  transition: 200ms transform, 200ms left;\n  transition: 200ms transform, 200ms left, 200ms -webkit-transform; }\n\n.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transition: 200ms right, 200ms -webkit-transform;\n  transition: 200ms right, 200ms -webkit-transform;\n  -o-transition: 200ms transform, 200ms right;\n  transition: 200ms transform, 200ms right;\n  transition: 200ms transform, 200ms right, 200ms -webkit-transform; }\n\n/* Progress */\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute; }\n\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: #007aff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: left top;\n  -ms-transform-origin: left top;\n  transform-origin: left top; }\n\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  -webkit-transform-origin: right top;\n  -ms-transform-origin: right top;\n  transform-origin: right top; }\n\n.swiper-container-horizontal > .swiper-pagination-progressbar,\n.swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0; }\n\n.swiper-container-vertical > .swiper-pagination-progressbar,\n.swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0; }\n\n.swiper-pagination-white .swiper-pagination-bullet-active {\n  background: #ffffff; }\n\n.swiper-pagination-progressbar.swiper-pagination-white {\n  background: rgba(255, 255, 255, 0.25); }\n\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {\n  background: #ffffff; }\n\n.swiper-pagination-black .swiper-pagination-bullet-active {\n  background: #000000; }\n\n.swiper-pagination-progressbar.swiper-pagination-black {\n  background: rgba(0, 0, 0, 0.25); }\n\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {\n  background: #000000; }\n\n.swiper-pagination-lock {\n  display: none; }\n\n/* Scrollbar */\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1); }\n\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%; }\n\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%; }\n\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0; }\n\n.swiper-scrollbar-cursor-drag {\n  cursor: move; }\n\n.swiper-scrollbar-lock {\n  display: none; }\n\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  text-align: center; }\n\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: contain;\n  object-fit: contain; }\n\n.swiper-slide-zoomed {\n  cursor: move; }\n\n/* Preloader */\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  -webkit-transform-origin: 50%;\n  -ms-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;\n  animation: swiper-preloader-spin 1s steps(12, end) infinite; }\n\n.swiper-lazy-preloader:after {\n  display: block;\n  content: '';\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat; }\n\n.swiper-lazy-preloader-white:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n\@-webkit-keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n\@keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n/* a11y */\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000; }\n\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  -webkit-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out; }\n\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  -webkit-transition-property: opacity;\n  -o-transition-property: opacity;\n  transition-property: opacity; }\n\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none; }\n\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto; }\n\n.swiper-container-cube {\n  overflow: visible; }\n\n.swiper-container-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  -webkit-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%; }\n\n.swiper-container-cube .swiper-slide .swiper-slide {\n  pointer-events: none; }\n\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  -webkit-transform-origin: 100% 0;\n  -ms-transform-origin: 100% 0;\n  transform-origin: 100% 0; }\n\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto; }\n\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-prev,\n.swiper-container-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible; }\n\n.swiper-container-cube .swiper-slide-shadow-top,\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.6;\n  -webkit-filter: blur(50px);\n  filter: blur(50px);\n  z-index: 0; }\n\n.swiper-container-flip {\n  overflow: visible; }\n\n.swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1; }\n\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none; }\n\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto; }\n\n.swiper-container-flip .swiper-slide-shadow-top,\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.swiper-container-coverflow .swiper-wrapper {\n  /* Windows 8 IE 10 fix */\n  -ms-perspective: 1200px; }\n\n.slides {\n  /**\n   * \@prop --bullet-background: Background of the pagination bullets\n   * \@prop --bullet-background-active: Background of the active pagination bullet\n   */\n  display: block;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.swiper-pagination-bullet {\n  background: var(--bullet-background); }\n\n.swiper-pagination-bullet-active {\n  background: var(--bullet-background-active); }\n\n.swiper-pagination-progressbar {\n  background: var(--progress-bar-background); }\n\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--progress-bar-background-active); }\n\n.swiper-scrollbar {\n  background: var(--scroll-bar-background); }\n\n.swiper-scrollbar-drag {\n  background: var(--scroll-bar-background-active); }\n\n.slides-md {\n  --bullet-background: var(--ion-text-color-step-800, #cccccc);\n  --bullet-background-active: var(--ion-color-primary, #3880ff);\n  --progress-bar-background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);\n  --progress-bar-background-active: var(--ion-color-primary-shade, #3171e0);\n  --scroll-bar-background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);\n  --scroll-bar-background-active: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5); }"; }
    static get styleMode() { return "md"; }
}

class Tab {
    constructor() {
        this.loaded = false;
        this.active = false;
        this.disabled = false;
        this.selected = false;
        this.show = true;
        this.tabsHideOnSubPages = false;
    }
    selectedChanged(selected) {
        if (selected) {
            this.ionSelect.emit();
        }
    }
    componentWillLoad() {
        if (this.name === undefined && typeof this.component === "string") {
            this.name = this.component;
        }
        {
            if (this.component !== undefined && this.el.childElementCount > 0) {
                console.error("You can not use a lazy-loaded component in a tab and inlined content at the same time." +
                    `- Remove the component attribute in: <ion-tab component="${this.component}">` +
                    ` or` +
                    `- Remove the embedded content inside the ion-tab: <ion-tab></ion-tab>`);
            }
        }
    }
    onPropChanged() {
        this.ionTabMutated.emit();
    }
    async setActive() {
        await this.prepareLazyLoaded();
        this.active = true;
    }
    prepareLazyLoaded() {
        if (!this.loaded && this.component != null) {
            this.loaded = true;
            return attachComponent(this.delegate, this.el, this.component, ["ion-page"]);
        }
        return Promise.resolve();
    }
    hostData() {
        const { btnId, active, component } = this;
        return {
            "aria-labelledby": btnId,
            "aria-hidden": !active ? "true" : null,
            "role": "tabpanel",
            "class": {
                "ion-page": component === undefined,
                "tab-hidden": !active
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-tab"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "active": {
                "type": Boolean,
                "attr": "active",
                "mutable": true
            },
            "badge": {
                "type": String,
                "attr": "badge",
                "watchCallbacks": ["onPropChanged"]
            },
            "badgeColor": {
                "type": String,
                "attr": "badge-color",
                "watchCallbacks": ["onPropChanged"]
            },
            "btnId": {
                "type": String,
                "attr": "btn-id"
            },
            "component": {
                "type": String,
                "attr": "component"
            },
            "delegate": {
                "type": "Any",
                "attr": "delegate"
            },
            "disabled": {
                "type": Boolean,
                "attr": "disabled",
                "watchCallbacks": ["onPropChanged"]
            },
            "el": {
                "elementRef": true
            },
            "href": {
                "type": String,
                "attr": "href",
                "watchCallbacks": ["onPropChanged"]
            },
            "icon": {
                "type": String,
                "attr": "icon",
                "watchCallbacks": ["onPropChanged"]
            },
            "label": {
                "type": String,
                "attr": "label",
                "watchCallbacks": ["onPropChanged"]
            },
            "name": {
                "type": String,
                "attr": "name",
                "mutable": true
            },
            "selected": {
                "type": Boolean,
                "attr": "selected",
                "watchCallbacks": ["selectedChanged"]
            },
            "setActive": {
                "method": true
            },
            "show": {
                "type": Boolean,
                "attr": "show",
                "watchCallbacks": ["onPropChanged"]
            },
            "tabsHideOnSubPages": {
                "type": Boolean,
                "attr": "tabs-hide-on-sub-pages"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionSelect",
                "method": "ionSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionTabMutated",
                "method": "ionTabMutated",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return ":host(.tab-hidden) {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important; }"; }
}

class Tabbar {
    constructor() {
        this.canScrollLeft = false;
        this.canScrollRight = false;
        this.keyboardVisible = false;
        this.layout = "icon-top";
        this.placement = "bottom";
        this.tabs = [];
        this.highlight = false;
        this.translucent = false;
    }
    onKeyboardWillHide() {
        setTimeout(() => this.keyboardVisible = false, 50);
    }
    onKeyboardWillShow() {
        if (this.placement === "bottom") {
            this.keyboardVisible = true;
        }
    }
    componentDidLoad() {
        this.updateHighlight();
    }
    getSelectedButton() {
        return this.el.shadowRoot.querySelector(".tab-btn-selected");
    }
    updateHighlight() {
        if (!this.highlight) {
            return;
        }
        this.queue.read(() => {
            const btn = this.getSelectedButton();
            const highlight = this.el.shadowRoot.querySelector(".tabbar-highlight");
            if (btn && highlight) {
                highlight.style.transform = `translate3d(${btn.offsetLeft}px,0,0) scaleX(${btn.offsetWidth})`;
            }
        });
    }
    hostData() {
        const { color, translucent, layout, placement, keyboardVisible } = this;
        return {
            role: "tablist",
            "aria-hidden": keyboardVisible ? "true" : null,
            class: Object.assign({}, createColorClasses(color), { "tabbar-translucent": translucent, [`layout-${layout}`]: true, [`placement-${placement}`]: true, "tabbar-hidden": keyboardVisible })
        };
    }
    renderTabButton(tab) {
        const { icon, label, disabled, badge, badgeColor, href } = tab;
        const selected = tab === this.selectedTab;
        const hasLabel = label !== undefined;
        const hasIcon = icon !== undefined;
        return (h("a", { role: "tab", "ion-activatable": true, "aria-selected": selected ? "true" : null, href: href || "#", class: {
                "tab-btn": true,
                "tab-btn-selected": selected,
                "tab-btn-has-label": hasLabel,
                "tab-btn-has-icon": hasIcon,
                "tab-btn-has-label-only": hasLabel && !hasIcon,
                "tab-btn-has-icon-only": hasIcon && !hasLabel,
                "tab-btn-has-badge": badge !== undefined,
                "tab-btn-disabled": disabled,
                "tab-btn-hidden": !tab.show
            }, onClick: ev => {
                if (!tab.disabled) {
                    this.ionTabbarClick.emit(tab);
                }
                ev.preventDefault();
            } }, icon && h("ion-icon", { class: "tab-btn-icon", icon: icon, lazy: false }), label && h("span", { class: "tab-btn-text" }, label), badge && h("ion-badge", { class: "tab-btn-badge", color: badgeColor }, badge), this.mode === "md" && h("ion-ripple-effect", null)));
    }
    render() {
        return [
            this.tabs.map(tab => this.renderTabButton(tab)),
            this.highlight && h("div", { class: "animated tabbar-highlight" })
        ];
    }
    static get is() { return "ion-tabbar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "canScrollLeft": {
                "state": true
            },
            "canScrollRight": {
                "state": true
            },
            "color": {
                "type": String,
                "attr": "color"
            },
            "doc": {
                "context": "document"
            },
            "el": {
                "elementRef": true
            },
            "highlight": {
                "type": Boolean,
                "attr": "highlight"
            },
            "keyboardVisible": {
                "state": true
            },
            "layout": {
                "type": String,
                "attr": "layout"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "placement": {
                "type": String,
                "attr": "placement"
            },
            "queue": {
                "context": "queue"
            },
            "selectedTab": {
                "type": "Any",
                "attr": "selected-tab",
                "watchCallbacks": ["updateHighlight"]
            },
            "tabs": {
                "type": "Any",
                "attr": "tabs"
            },
            "translucent": {
                "type": Boolean,
                "attr": "translucent"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionTabbarClick",
                "method": "ionTabbarClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "body:keyboardWillHide",
                "method": "onKeyboardWillHide"
            }, {
                "name": "body:keyboardWillShow",
                "method": "onKeyboardWillShow"
            }, {
                "name": "window:resize",
                "method": "updateHighlight",
                "passive": true
            }];
    }
    static get style() { return ":host {\n  padding-left: var(--ion-safe-area-left);\n  padding-right: var(--ion-safe-area-right);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n  width: auto;\n  background: var(--background);\n  color: var(--color);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 10; }\n\n:host(.ion-color) {\n  --background: var(--ion-color-base);\n  --color: rgba(var(--ion-color-contrast-rgb), 0.7);\n  --color-selected: var(--ion-color-contrast); }\n\n:host(.tabbar-hidden) {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important; }\n\n:host(.placement-top) {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1; }\n\n:host(.placement-bottom) {\n  padding-bottom: var(--ion-safe-area-bottom, 0); }\n\n.tabbar-highlight {\n  left: 0;\n  bottom: 0;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 2px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background: currentColor; }\n  .tabbar-highlight.animated {\n    -webkit-transition-duration: 300ms;\n    transition-duration: 300ms;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    will-change: transform; }\n\n:host(.placement-top) .tabbar-highlight {\n  bottom: 0; }\n\n:host(.placement-bottom) .tabbar-highlight {\n  top: 0; }\n\n:host(.layout-icon-start) .tab-btn {\n  --flex-direction: row; }\n\n:host(.layout-icon-end) .tab-btn {\n  --flex-direction: row-reverse; }\n\n:host(.layout-icon-bottom) .tab-btn {\n  --flex-direction: column-reverse; }\n\n:host(.layout-icon-start) .tab-btn,\n:host(.layout-icon-end) .tab-btn,\n:host(.layout-icon-hide) .tab-btn,\n:host(.layout-label-hide) .tab-btn {\n  --justify-content: center; }\n\n:host(.layout-icon-hide) .tab-btn {\n  --icon-display: none; }\n\n:host(.layout-label-hide) .tab-btn {\n  --label-display: none; }\n\n:host(.layout-icon-top) .tab-btn,\n:host(.layout-icon-bottom) .tab-btn {\n  --badge-end: calc(50% - 30px); }\n\n:host(.layout-icon-hide) .tab-btn,\n:host(.layout-icon-start) .tab-btn,\n:host(.layout-icon-end) .tab-btn {\n  --badge-end: calc(50% - 50px); }\n\n.tab-btn {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: var(--flex-direction, column);\n  flex-direction: var(--flex-direction, column);\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: var(--justify-content, flex-start);\n  -ms-flex-pack: var(--justify-content, flex-start);\n  justify-content: var(--justify-content, flex-start);\n  width: 100%;\n  height: 100%;\n  border: 0;\n  outline: none;\n  background: transparent;\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-user-drag: none; }\n\n.tab-btn:focus-visible {\n  background: var(--background-focused); }\n\n\@media (any-hover: hover) {\n  .tab-btn:hover {\n    color: var(--color-selected); } }\n\n.tab-btn-selected {\n  color: var(--color-selected); }\n\n.tab-btn-hidden {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important; }\n\n.tab-btn-disabled {\n  pointer-events: none;\n  opacity: .4; }\n\n.tab-btn-text {\n  margin-top: var(--label-margin-top);\n  margin-bottom: var(--label-margin-bottom);\n  display: var(--label-display, block);\n  font-size: var(--label-font-size);\n  line-height: var(--label-line-height); }\n\n.tab-btn-icon {\n  margin-top: var(--icon-margin-top);\n  margin-bottom: var(--icon-margin-bottom);\n  display: var(--icon-display, block);\n  min-width: var(--icon-min-width);\n  height: var(--icon-height, 1em);\n  font-size: var(--icon-font-size); }\n\n.tab-btn-text,\n.tab-btn-icon {\n  -ms-flex-item-align: center;\n  align-self: center;\n  min-width: 26px;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.tab-btn-has-label-only .tab-btn-text {\n  white-space: normal; }\n\n.tab-btn-has-icon-only,\n.tab-btn-has-label-only {\n  --justify-content: center; }\n\n.tab-btn-badge {\n  right: 4%;\n  top: 6%;\n  right: var(--badge-end, calc(50% - 30px));\n  padding: 1px 6px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: absolute;\n  height: auto;\n  font-size: 12px;\n  line-height: 16px; }\n\n.tab-btn-has-label-only .tab-btn-badge {\n  --badge-end: calc(50% - 50px); }\n\n.tab-btn-has-icon-only .tab-btn-badge {\n  --badge-end: calc(50% - 30px); }\n\n.tab-btn-selected .tab-btn-icon {\n  -webkit-transform: var(--icon-transform-selected);\n  transform: var(--icon-transform-selected); }\n\n.tab-btn {\n  padding: 8px 12px 10px 12px;\n  max-width: 168px;\n  font-weight: normal; }\n\n.tab-btn-text {\n  margin: 0;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n  -webkit-transform: var(--label-transform);\n  transform: var(--label-transform);\n  -webkit-transition: -webkit-transform 0.1s ease-in-out;\n  transition: -webkit-transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;\n  font-size: 12px;\n  text-transform: none; }\n\n.tab-btn-selected .tab-btn-text {\n  --label-transform: scale3d(1.16667, 1.16667, 1);\n  -webkit-transition: -webkit-transform 0.1s ease-in-out;\n  transition: -webkit-transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out; }\n\n.tab-btn-icon {\n  -webkit-transform-origin: center center;\n  transform-origin: center center;\n  width: 22px;\n  height: 22px;\n  -webkit-transform: var(--icon-transform);\n  transform: var(--icon-transform);\n  -webkit-transition: -webkit-transform 0.1s ease-in-out;\n  transition: -webkit-transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;\n  font-size: 22px; }\n\n:host {\n  --color: var(--ion-tabbar-text-color, var(--ion-text-color-step-400, #666666));\n  --color-selected: var(--ion-tabbar-text-color-active, #488aff);\n  --background: var(--ion-tabbar-background-color, #f8f8f8);\n  --background-focused: var(--ion-tabbar-background-color-focused, #dadada);\n  --icon-transform-selected: translate3d(0, -2px, 0);\n  height: 56px;\n  border-top: 1px solid rgba(var(--ion-tabbar-border-color-rgb, 0, 0, 0), 0.07);\n  contain: strict; }\n\n:host(.layout-icon-top) .tab-btn {\n  --label-margin-bottom: -2px; }\n\n:host(.layout-icon-end) .tab-btn {\n  --icon-transform-selected: translate3d(6px, 0, 0); }\n\n:host(.layout-icon-bottom) .tab-btn {\n  --label-margin-top: -2px;\n  --label-transform: transform-origin(center, top);\n  --icon-transform-selected: translate3d(0, 2px, 0); }\n\n:host(.layout-icon-start) .tab-btn {\n  --icon-transform-selected: translate3d(-6px, 0, 0); }"; }
    static get styleMode() { return "md"; }
}

class Tabs {
    constructor() {
        this.ids = -1;
        this.transitioning = false;
        this.tabsId = (++tabIds);
        this.tabs = [];
        this.tabbarHidden = false;
        this.translucent = false;
        this.useRouter = false;
    }
    componentWillLoad() {
        if (!this.useRouter) {
            this.useRouter = !!this.doc.querySelector("ion-router") && !this.el.closest("[no-router]");
        }
        this.loadConfig("tabbarPlacement", "bottom");
        this.loadConfig("tabbarLayout", "icon-top");
        this.loadConfig("tabbarHighlight", false);
        this.initTabs();
        this.ionNavWillLoad.emit();
    }
    componentDidLoad() {
        return this.initSelect();
    }
    componentDidUnload() {
        this.tabs.length = 0;
        this.selectedTab = this.leavingTab = undefined;
    }
    onTabMutated() {
        this.el.forceUpdate();
    }
    onTabClicked(ev) {
        const selectedTab = ev.detail;
        const href = selectedTab.href;
        if (this.useRouter && href !== undefined) {
            const router = this.doc.querySelector("ion-router");
            if (router) {
                router.push(href);
            }
        }
        else {
            this.select(selectedTab);
        }
    }
    async select(tabOrIndex) {
        const selectedTab = await this.getTab(tabOrIndex);
        if (!this.shouldSwitch(selectedTab)) {
            return false;
        }
        await this.setActive(selectedTab);
        await this.notifyRouter();
        this.tabSwitch();
        return true;
    }
    async setRouteId(id) {
        const selectedTab = await this.getTab(id);
        if (!this.shouldSwitch(selectedTab)) {
            return { changed: false, element: this.selectedTab };
        }
        await this.setActive(selectedTab);
        return {
            changed: true,
            element: this.selectedTab,
            markVisible: () => this.tabSwitch(),
        };
    }
    async getRouteId() {
        const id = this.selectedTab && this.selectedTab.name;
        return id !== undefined ? { id, element: this.selectedTab } : undefined;
    }
    async getTab(tabOrIndex) {
        if (typeof tabOrIndex === "string") {
            return this.tabs.find(tab => tab.name === tabOrIndex);
        }
        if (typeof tabOrIndex === "number") {
            return this.tabs[tabOrIndex];
        }
        return tabOrIndex;
    }
    getSelected() {
        return Promise.resolve(this.selectedTab);
    }
    initTabs() {
        const tabs = this.tabs = Array.from(this.el.querySelectorAll("ion-tab"));
        tabs.forEach(tab => {
            const id = `t-${this.tabsId}-${++this.ids}`;
            tab.btnId = "tab-" + id;
            tab.id = "tabpanel-" + id;
        });
    }
    async initSelect() {
        const tabs = this.tabs;
        if (this.useRouter) {
            {
                const tab = tabs.find(t => t.selected);
                if (tab) {
                    console.warn("When using a router (ion-router) <ion-tab selected=\"true\"> makes no difference" +
                        "Define routes properly the define which tab is selected");
                }
            }
            return;
        }
        const selectedTab = tabs.find(t => t.selected) ||
            tabs.find(t => t.show && !t.disabled);
        for (const tab of tabs) {
            if (tab !== selectedTab) {
                tab.selected = false;
            }
        }
        if (selectedTab) {
            await selectedTab.setActive();
        }
        this.selectedTab = selectedTab;
        if (selectedTab) {
            selectedTab.selected = true;
            selectedTab.active = true;
        }
    }
    loadConfig(attrKey, fallback) {
        const val = this[attrKey];
        if (typeof val === "undefined") {
            this[attrKey] = this.config.get(attrKey, fallback);
        }
    }
    setActive(selectedTab) {
        if (this.transitioning) {
            return Promise.reject("transitioning already happening");
        }
        for (const tab of this.tabs) {
            if (selectedTab !== tab) {
                tab.selected = false;
            }
        }
        this.transitioning = true;
        this.leavingTab = this.selectedTab;
        this.selectedTab = selectedTab;
        this.ionNavWillChange.emit();
        return selectedTab.setActive();
    }
    tabSwitch() {
        const selectedTab = this.selectedTab;
        const leavingTab = this.leavingTab;
        this.leavingTab = undefined;
        this.transitioning = false;
        if (!selectedTab) {
            return;
        }
        selectedTab.selected = true;
        if (leavingTab !== selectedTab) {
            if (leavingTab) {
                leavingTab.active = false;
            }
            this.ionChange.emit({ tab: selectedTab });
            this.ionNavDidChange.emit();
        }
    }
    notifyRouter() {
        if (this.useRouter) {
            const router = this.doc.querySelector("ion-router");
            if (router) {
                return router.navChanged(1);
            }
        }
        return Promise.resolve(false);
    }
    shouldSwitch(selectedTab) {
        const leavingTab = this.selectedTab;
        return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
    }
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    render() {
        return [
            h("div", { class: "tabs-inner" }, h("slot", null)),
            !this.tabbarHidden && (h("ion-tabbar", { tabs: this.tabs.slice(), color: this.color, selectedTab: this.selectedTab, highlight: this.tabbarHighlight, placement: this.tabbarPlacement, layout: this.tabbarLayout, translucent: this.translucent }))
        ];
    }
    static get is() { return "ion-tabs"; }
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
            "doc": {
                "context": "document"
            },
            "el": {
                "elementRef": true
            },
            "getRouteId": {
                "method": true
            },
            "getSelected": {
                "method": true
            },
            "getTab": {
                "method": true
            },
            "name": {
                "type": String,
                "attr": "name"
            },
            "select": {
                "method": true
            },
            "selectedTab": {
                "state": true
            },
            "setRouteId": {
                "method": true
            },
            "tabbarHidden": {
                "type": Boolean,
                "attr": "tabbar-hidden"
            },
            "tabbarHighlight": {
                "type": Boolean,
                "attr": "tabbar-highlight",
                "mutable": true
            },
            "tabbarLayout": {
                "type": String,
                "attr": "tabbar-layout",
                "mutable": true
            },
            "tabbarPlacement": {
                "type": String,
                "attr": "tabbar-placement",
                "mutable": true
            },
            "tabs": {
                "state": true
            },
            "translucent": {
                "type": Boolean,
                "attr": "translucent"
            },
            "useRouter": {
                "type": Boolean,
                "attr": "use-router",
                "mutable": true
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
                "name": "ionNavWillLoad",
                "method": "ionNavWillLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionNavWillChange",
                "method": "ionNavWillChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionNavDidChange",
                "method": "ionNavDidChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "ionTabMutated",
                "method": "onTabMutated"
            }, {
                "name": "ionTabbarClick",
                "method": "onTabClicked"
            }];
    }
    static get style() { return ":host {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  contain: layout size style;\n  z-index: 0; }\n\n.tabs-inner {\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  contain: layout size style; }"; }
}
let tabIds = -1;

export { AppHome, AppPiechart, AppQRCode as AppQrcode, ActionSheet as IonActionSheet, ActionSheetController as IonActionSheetController, Alert as IonAlert, AlertController as IonAlertController, Avatar as IonAvatar, Badge as IonBadge, Card as IonCard, CardSubtitle as IonCardSubtitle, CardTitle as IonCardTitle, Col as IonCol, Grid as IonGrid, Img as IonImg, Popover as IonPopover, PopoverController as IonPopoverController, Row as IonRow, Select as IonSelect, SelectOption as IonSelectOption, Slide as IonSlide, Slides as IonSlides, Tab as IonTab, Tabbar as IonTabbar, Tabs as IonTabs };
