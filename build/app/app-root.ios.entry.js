/*! Built with http://stenciljs.com */
const { h } = window.App;

import { h as rIC, i as assert, j as debounce, d as createThemedClasses, a as getClassMap } from './chunk-c7f82f3c.js';
import { i as attachComponent, l as lifecycle, m as setPageHidden, n as transition, b as dismiss, c as eventMethod, e as present, f as createOverlay, g as dismissOverlay, h as getOverlay } from './chunk-3c1ae6a9.js';

class AppRoot {
    /**
     * Handle service worker updates correctly.
     * This code will show a toast letting the
     * user of the PWA know that there is a
     * new version available. When they click the
     * reload button it then reloads the page
     * so that the new service worker can take over
     * and serve the fresh content
     */
    async onSWUpdate() {
        const toast = await this.toastCtrl.create({
            message: 'Nova versão disponível',
            showCloseButton: true,
            closeButtonText: 'Recarregar'
        });
        await toast.present();
        await toast.onWillDismiss();
        window.location.reload();
    }
    render() {
        return (h("ion-app", null,
            h("ion-router", { useHash: false },
                h("ion-route", { url: "/", component: "app-home" }),
                h("ion-route", { url: "/profile/:name", component: "app-profile" }),
                h("ion-route", { url: "/adicionar_votacao", component: "app-adicionar_votacao" })),
            h("ion-nav", null)));
    }
    static get is() { return "app-root"; }
    static get properties() { return {
        "toastCtrl": {
            "connect": "ion-toast-controller"
        }
    }; }
    static get listeners() { return [{
            "name": "window:swUpdate",
            "method": "onSWUpdate"
        }]; }
    static get style() { return ""; }
}

const PLATFORMS_MAP = {
    'ipad': isIpad,
    'iphone': isIphone,
    'ios': isIOS,
    'android': isAndroid,
    'phablet': isPhablet,
    'tablet': isTablet,
    'cordova': isCordova,
    'capacitor': isCapacitorNative,
    'electron': isElectron,
    'pwa': isPWA,
    'mobile': isMobile,
    'desktop': isDesktop,
    'hybrid': isHybrid
};
function getPlatforms(win) {
    return setupPlatforms(win);
}
function isPlatform(win, platform) {
    return getPlatforms(win).includes(platform);
}
function setupPlatforms(win) {
    win.Ionic = win.Ionic || {};
    let platforms = win.Ionic.platforms;
    if (platforms == null) {
        platforms = win.Ionic.platforms = detectPlatforms(win);
        const classList = win.document.documentElement.classList;
        platforms.forEach(p => classList.add(`plt-${p}`));
    }
    return platforms;
}
function detectPlatforms(win) {
    return Object.keys(PLATFORMS_MAP).filter(p => PLATFORMS_MAP[p](win));
}
function isIpad(win) {
    return testUserAgent(win, /iPad/i);
}
function isIphone(win) {
    return testUserAgent(win, /iPhone/i);
}
function isIOS(win) {
    return testUserAgent(win, /iPad|iPhone|iPod/i);
}
function isAndroid(win) {
    return testUserAgent(win, /android|sink/i);
}
function isPhablet(win) {
    const width = win.innerWidth;
    const height = win.innerHeight;
    const smallest = Math.min(width, height);
    const largest = Math.max(width, height);
    return (smallest > 390 && smallest < 520) &&
        (largest > 620 && largest < 800);
}
function isTablet(win) {
    const width = win.innerWidth;
    const height = win.innerHeight;
    const smallest = Math.min(width, height);
    const largest = Math.max(width, height);
    return (smallest > 460 && smallest < 820) &&
        (largest > 780 && largest < 1400);
}
function isMobile(win) {
    return matchMedia(win, '(any-pointer:coarse)');
}
function isDesktop(win) {
    return !isMobile(win);
}
function isHybrid(win) {
    return isCordova(win) || isCapacitorNative(win);
}
function isCordova(window) {
    const win = window;
    return !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
}
function isCapacitorNative(window) {
    const win = window;
    const capacitor = win['Capacitor'];
    return !!(capacitor && capacitor.isNative);
}
function isElectron(win) {
    return testUserAgent(win, /electron/);
}
function isPWA(win) {
    return win.matchMedia('(display-mode: standalone)').matches;
}
function testUserAgent(win, expr) {
    return expr.test(win.navigator.userAgent);
}
function matchMedia(win, query) {
    return win.matchMedia(query).matches;
}

class App {
    componentDidLoad() {
        rIC(() => {
            const { win, config, queue } = this;
            importTapClick(win);
            importInputShims(win, config);
            importStatusTap(win, config, queue);
            importHardwareBackButton(win, config);
        });
    }
    hostData() {
        return {
            class: {
                "ion-page": true,
                "force-statusbar-padding": this.config.getBoolean("_forceStatusbarPadding")
            }
        };
    }
    static get is() { return "ion-app"; }
    static get properties() {
        return {
            "config": {
                "context": "config"
            },
            "el": {
                "elementRef": true
            },
            "queue": {
                "context": "queue"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get style() { return "html.plt-mobile ion-app {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\nion-app.force-statusbar-padding {\n  --ion-safe-area-top: 20px; }"; }
}
function importHardwareBackButton(win, config) {
    const hardwareBackConfig = config.getBoolean("hardwareBackButton", isPlatform(win, "hybrid"));
    if (hardwareBackConfig) {
        import("./hardware-back-button.js").then(module => module.startHardwareBackButton(win));
    }
}
function importStatusTap(win, config, queue) {
    const statusTap = config.getBoolean("statusTap", isPlatform(win, "hybrid"));
    if (statusTap) {
        import("./status-tap.js").then(module => module.startStatusTap(win, queue));
    }
}
function importTapClick(win) {
    import("./tap-click.js").then(module => module.startTapClick(win.document));
}
function importInputShims(win, config) {
    const inputShims = config.getBoolean("inputShims", needInputShims(win));
    if (inputShims) {
        import("./input-shims.js").then(module => module.startInputShims(win.document, config));
    }
}
function needInputShims(win) {
    return isPlatform(win, "ios") && isPlatform(win, "mobile");
}

class ViewController {
    constructor(component, params) {
        this.component = component;
        this.params = params;
        this.state = 1;
    }
    async init(container) {
        this.state = 2;
        if (!this.element) {
            const component = this.component;
            this.element = await attachComponent(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params);
        }
    }
    _destroy() {
        assert(this.state !== 3, 'view state must be ATTACHED');
        const element = this.element;
        if (element) {
            if (this.delegate) {
                this.delegate.removeViewFromDom(element.parentElement, element);
            }
            else {
                element.remove();
            }
        }
        this.nav = undefined;
        this.state = 3;
    }
}
function matches(view, id, params) {
    if (!view) {
        return false;
    }
    if (view.component !== id) {
        return false;
    }
    const currentParams = view.params;
    if (currentParams === params) {
        return true;
    }
    if (!currentParams && !params) {
        return true;
    }
    if (!currentParams || !params) {
        return false;
    }
    const keysA = Object.keys(currentParams);
    const keysB = Object.keys(params);
    if (keysA.length !== keysB.length) {
        return false;
    }
    for (const key of keysA) {
        if (currentParams[key] !== params[key]) {
            return false;
        }
    }
    return true;
}
function convertToView(page, params) {
    if (!page) {
        return null;
    }
    if (page instanceof ViewController) {
        return page;
    }
    return new ViewController(page, params);
}
function convertToViews(pages) {
    return pages.map(page => {
        if (page instanceof ViewController) {
            return page;
        }
        if ('page' in page) {
            return convertToView(page.page, page.params);
        }
        return convertToView(page, undefined);
    }).filter(v => v !== null);
}

class Nav {
    constructor() {
        this.transInstr = [];
        this.useRouter = false;
        this.isTransitioning = false;
        this.destroyed = false;
        this.views = [];
        this.animated = true;
    }
    swipeGestureChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.swipeGesture !== true);
        }
    }
    rootChanged() {
        if (this.root !== undefined) {
            if (!this.useRouter) {
                this.setRoot(this.root, this.rootParams);
            }
            else {
                console.warn("<ion-nav> does not support a root attribute when using ion-router.");
            }
        }
    }
    componentWillLoad() {
        this.useRouter =
            !!this.win.document.querySelector("ion-router") &&
                !this.el.closest("[no-router]");
        if (this.swipeGesture === undefined) {
            this.swipeGesture = this.config.getBoolean("swipeBackEnabled", this.mode === "ios");
        }
        this.ionNavWillLoad.emit();
    }
    async componentDidLoad() {
        this.rootChanged();
        this.gesture = (await import("./gesture.js")).createGesture({
            el: this.win.document.body,
            queue: this.queue,
            gestureName: "goback-swipe",
            gesturePriority: 30,
            threshold: 10,
            canStart: () => this.canStart(),
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.swipeGestureChanged();
    }
    componentDidUnload() {
        for (const view of this.views) {
            lifecycle(this.win, view.element, "ionViewWillUnload");
            view._destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
        }
        if (this.sbTrns) {
            this.sbTrns.destroy();
        }
        this.transInstr.length = this.views.length = 0;
        this.sbTrns = undefined;
        this.destroyed = true;
    }
    push(component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: -1,
            insertViews: [{ page: component, params: componentProps }],
            opts
        }, done);
    }
    insert(insertIndex, component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: [{ page: component, params: componentProps }],
            opts
        }, done);
    }
    insertPages(insertIndex, insertComponents, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: insertComponents,
            opts
        }, done);
    }
    pop(opts, done) {
        return this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts
        }, done);
    }
    popTo(indexOrViewCtrl, opts, done) {
        const config = {
            removeStart: -1,
            removeCount: -1,
            opts
        };
        if (typeof indexOrViewCtrl === "object" && indexOrViewCtrl.component) {
            config.removeView = indexOrViewCtrl;
            config.removeStart = 1;
        }
        else if (typeof indexOrViewCtrl === "number") {
            config.removeStart = indexOrViewCtrl + 1;
        }
        return this.queueTrns(config, done);
    }
    popToRoot(opts, done) {
        return this.queueTrns({
            removeStart: 1,
            removeCount: -1,
            opts
        }, done);
    }
    removeIndex(startIndex, removeCount = 1, opts, done) {
        return this.queueTrns({
            removeStart: startIndex,
            removeCount,
            opts
        }, done);
    }
    setRoot(component, componentProps, opts, done) {
        return this.setPages([{ page: component, params: componentProps }], opts, done);
    }
    setPages(views, opts, done) {
        if (opts == null) {
            opts = {};
        }
        if (opts.animated !== true) {
            opts.animated = false;
        }
        return this.queueTrns({
            insertStart: 0,
            insertViews: views,
            removeStart: 0,
            removeCount: -1,
            opts
        }, done);
    }
    setRouteId(id, params, direction) {
        const active = this.getActiveSync();
        if (matches(active, id, params)) {
            return Promise.resolve({
                changed: false,
                element: active.element
            });
        }
        let resolve;
        const promise = new Promise(r => (resolve = r));
        let finish;
        const commonOpts = {
            updateURL: false,
            viewIsReady: enteringEl => {
                let mark;
                const p = new Promise(r => (mark = r));
                resolve({
                    changed: true,
                    element: enteringEl,
                    markVisible: async () => {
                        mark();
                        await finish;
                    }
                });
                return p;
            }
        };
        if (direction === 0) {
            finish = this.setRoot(id, params, commonOpts);
        }
        else {
            const viewController = this.views.find(v => matches(v, id, params));
            if (viewController) {
                finish = this.popTo(viewController, Object.assign({}, commonOpts, { direction: "back" }));
            }
            else if (direction === 1) {
                finish = this.push(id, params, commonOpts);
            }
            else if (direction === -1) {
                finish = this.setRoot(id, params, Object.assign({}, commonOpts, { direction: "back", animated: true }));
            }
        }
        return promise;
    }
    async getRouteId() {
        const active = this.getActiveSync();
        return active
            ? {
                id: active.element.tagName,
                params: active.params,
                element: active.element
            }
            : undefined;
    }
    getActive() {
        return Promise.resolve(this.getActiveSync());
    }
    getByIndex(index) {
        return Promise.resolve(this.views[index]);
    }
    canGoBack(view) {
        return Promise.resolve(this.canGoBackSync(view));
    }
    getPrevious(view) {
        return Promise.resolve(this.getPreviousSync(view));
    }
    getLength() {
        return this.views.length;
    }
    getActiveSync() {
        return this.views[this.views.length - 1];
    }
    canGoBackSync(view = this.getActiveSync()) {
        return !!(view && this.getPreviousSync(view));
    }
    getPreviousSync(view = this.getActiveSync()) {
        if (!view) {
            return undefined;
        }
        const views = this.views;
        const index = views.indexOf(view);
        return index > 0 ? views[index - 1] : undefined;
    }
    queueTrns(ti, done) {
        if (this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy) {
            return Promise.resolve(false);
        }
        const promise = new Promise((resolve, reject) => {
            ti.resolve = resolve;
            ti.reject = reject;
        });
        ti.done = done;
        if (ti.insertViews && ti.insertViews.length === 0) {
            ti.insertViews = undefined;
        }
        this.transInstr.push(ti);
        this.nextTrns();
        return promise;
    }
    success(result, ti) {
        if (this.destroyed) {
            this.fireError("nav controller was destroyed", ti);
            return;
        }
        if (ti.done) {
            ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
        }
        ti.resolve(result.hasCompleted);
        if (ti.opts.updateURL !== false && this.useRouter) {
            const router = this.win.document.querySelector("ion-router");
            if (router) {
                const direction = result.direction === "back" ? -1 : 1;
                router.navChanged(direction);
            }
        }
    }
    failed(rejectReason, ti) {
        if (this.destroyed) {
            this.fireError("nav controller was destroyed", ti);
            return;
        }
        this.transInstr.length = 0;
        this.fireError(rejectReason, ti);
    }
    fireError(rejectReason, ti) {
        if (ti.done) {
            ti.done(false, false, rejectReason);
        }
        if (ti.reject && !this.destroyed) {
            ti.reject(rejectReason);
        }
        else {
            ti.resolve(false);
        }
    }
    nextTrns() {
        if (this.isTransitioning) {
            return false;
        }
        const ti = this.transInstr.shift();
        if (!ti) {
            return false;
        }
        this.runTransition(ti);
        return true;
    }
    async runTransition(ti) {
        try {
            this.ionNavWillChange.emit();
            this.isTransitioning = true;
            this.prepareTI(ti);
            const leavingView = this.getActiveSync();
            const enteringView = this.getEnteringView(ti, leavingView);
            if (!leavingView && !enteringView) {
                throw new Error("no views in the stack to be removed");
            }
            if (enteringView && enteringView.state === 1) {
                await enteringView.init(this.el);
            }
            this.postViewInit(enteringView, leavingView, ti);
            const requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) &&
                enteringView !== leavingView;
            const result = requiresTransition
                ? await this.transition(enteringView, leavingView, ti)
                : {
                    hasCompleted: true,
                    requiresTransition: false
                };
            this.success(result, ti);
            this.ionNavDidChange.emit();
        }
        catch (rejectReason) {
            this.failed(rejectReason, ti);
        }
        this.isTransitioning = false;
        this.nextTrns();
    }
    prepareTI(ti) {
        const viewsLength = this.views.length;
        ti.opts = ti.opts || {};
        if (ti.opts.delegate === undefined) {
            ti.opts.delegate = this.delegate;
        }
        if (ti.removeView !== undefined) {
            assert(ti.removeStart !== undefined, "removeView needs removeStart");
            assert(ti.removeCount !== undefined, "removeView needs removeCount");
            const index = this.views.indexOf(ti.removeView);
            if (index < 0) {
                throw new Error("removeView was not found");
            }
            ti.removeStart += index;
        }
        if (ti.removeStart !== undefined) {
            if (ti.removeStart < 0) {
                ti.removeStart = viewsLength - 1;
            }
            if (ti.removeCount < 0) {
                ti.removeCount = viewsLength - ti.removeStart;
            }
            ti.leavingRequiresTransition =
                ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
        }
        if (ti.insertViews) {
            if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
                ti.insertStart = viewsLength;
            }
            ti.enteringRequiresTransition = ti.insertStart === viewsLength;
        }
        const insertViews = ti.insertViews;
        if (!insertViews) {
            return;
        }
        assert(insertViews.length > 0, "length can not be zero");
        const viewControllers = convertToViews(insertViews);
        if (viewControllers.length === 0) {
            throw new Error("invalid views to insert");
        }
        for (const view of viewControllers) {
            view.delegate = ti.opts.delegate;
            const nav = view.nav;
            if (nav && nav !== this) {
                throw new Error("inserted view was already inserted");
            }
            if (view.state === 3) {
                throw new Error("inserted view was already destroyed");
            }
        }
        ti.insertViews = viewControllers;
    }
    getEnteringView(ti, leavingView) {
        const insertViews = ti.insertViews;
        if (insertViews !== undefined) {
            return insertViews[insertViews.length - 1];
        }
        const removeStart = ti.removeStart;
        if (removeStart !== undefined) {
            const views = this.views;
            const removeEnd = removeStart + ti.removeCount;
            for (let i = views.length - 1; i >= 0; i--) {
                const view = views[i];
                if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
                    return view;
                }
            }
        }
        return undefined;
    }
    postViewInit(enteringView, leavingView, ti) {
        assert(leavingView || enteringView, "Both leavingView and enteringView are null");
        assert(ti.resolve, "resolve must be valid");
        assert(ti.reject, "reject must be valid");
        const opts = ti.opts;
        const insertViews = ti.insertViews;
        const removeStart = ti.removeStart;
        const removeCount = ti.removeCount;
        let destroyQueue;
        if (removeStart !== undefined && removeCount !== undefined) {
            assert(removeStart >= 0, "removeStart can not be negative");
            assert(removeCount >= 0, "removeCount can not be negative");
            destroyQueue = [];
            for (let i = 0; i < removeCount; i++) {
                const view = this.views[i + removeStart];
                if (view && view !== enteringView && view !== leavingView) {
                    destroyQueue.push(view);
                }
            }
            opts.direction = opts.direction || "back";
        }
        const finalBalance = this.views.length +
            (insertViews !== undefined ? insertViews.length : 0) -
            (removeCount !== undefined ? removeCount : 0);
        assert(finalBalance >= 0, "final balance can not be negative");
        if (finalBalance === 0) {
            console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`, this, this.el);
            throw new Error("navigation stack needs at least one root page");
        }
        if (insertViews) {
            let insertIndex = ti.insertStart;
            for (const view of insertViews) {
                this.insertViewAt(view, insertIndex);
                insertIndex++;
            }
            if (ti.enteringRequiresTransition) {
                opts.direction = opts.direction || "forward";
            }
        }
        if (destroyQueue && destroyQueue.length > 0) {
            for (const view of destroyQueue) {
                lifecycle(this.win, view.element, "ionViewWillLeave");
                lifecycle(this.win, view.element, "ionViewDidLeave");
                lifecycle(this.win, view.element, "ionViewWillUnload");
            }
            for (const view of destroyQueue) {
                this.destroyView(view);
            }
        }
    }
    async transition(enteringView, leavingView, ti) {
        if (this.sbTrns) {
            this.sbTrns.destroy();
            this.sbTrns = undefined;
        }
        const opts = ti.opts;
        const progressCallback = opts.progressAnimation
            ? (animation) => {
                this.sbTrns = animation;
            }
            : undefined;
        const enteringEl = enteringView.element;
        const leavingEl = leavingView && leavingView.element;
        const animated = this.animated && this.config.getBoolean("animated", true);
        const animationOpts = Object.assign({ mode: this.mode, showGoBack: this.canGoBackSync(enteringView), animationCtrl: this.animationCtrl, queue: this.queue, window: this.win, baseEl: this.el, progressCallback,
            animated,
            enteringEl,
            leavingEl }, opts);
        const { hasCompleted } = await transition(animationOpts);
        return this.transitionFinish(hasCompleted, enteringView, leavingView, opts);
    }
    transitionFinish(hasCompleted, enteringView, leavingView, opts) {
        const cleanupView = hasCompleted ? enteringView : leavingView;
        if (cleanupView) {
            this.cleanup(cleanupView);
        }
        return {
            hasCompleted,
            requiresTransition: true,
            enteringView,
            leavingView,
            direction: opts.direction
        };
    }
    insertViewAt(view, index) {
        const views = this.views;
        const existingIndex = views.indexOf(view);
        if (existingIndex > -1) {
            assert(view.nav === this, "view is not part of the nav");
            views.splice(index, 0, views.splice(existingIndex, 1)[0]);
        }
        else {
            assert(!view.nav, "nav is used");
            view.nav = this;
            views.splice(index, 0, view);
        }
    }
    removeView(view) {
        assert(view.state === 2 || view.state === 3, "view state should be loaded or destroyed");
        const views = this.views;
        const index = views.indexOf(view);
        assert(index > -1, "view must be part of the stack");
        if (index >= 0) {
            views.splice(index, 1);
        }
    }
    destroyView(view) {
        view._destroy();
        this.removeView(view);
    }
    cleanup(activeView) {
        if (this.destroyed) {
            return;
        }
        const views = this.views;
        const activeViewIndex = views.indexOf(activeView);
        for (let i = views.length - 1; i >= 0; i--) {
            const view = views[i];
            const element = view.element;
            if (i > activeViewIndex) {
                lifecycle(this.win, element, "ionViewWillUnload");
                this.destroyView(view);
            }
            else if (i < activeViewIndex) {
                setPageHidden(element, true);
            }
        }
    }
    canStart() {
        return !!this.swipeGesture &&
            !this.isTransitioning &&
            this.canGoBackSync();
    }
    onStart() {
        if (this.isTransitioning || this.transInstr.length > 0) {
            return;
        }
        const opts = {
            direction: "back",
            progressAnimation: true
        };
        this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts
        }, undefined);
    }
    onMove(detail) {
        if (this.sbTrns) {
            this.isTransitioning = true;
            const delta = detail.deltaX;
            const stepValue = delta / this.win.innerWidth;
            this.sbTrns.progressStep(stepValue);
        }
    }
    onEnd(detail) {
        if (this.sbTrns) {
            const delta = detail.deltaX;
            const width = this.win.innerWidth;
            const stepValue = delta / width;
            const velocity = detail.velocityX;
            const z = width / 2;
            const shouldComplete = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
            const missing = shouldComplete ? 1 - stepValue : stepValue;
            const missingDistance = missing * width;
            let realDur = 0;
            if (missingDistance > 5) {
                const dur = missingDistance / Math.abs(velocity);
                realDur = Math.min(dur, 300);
            }
            this.sbTrns.progressEnd(shouldComplete, stepValue, realDur);
        }
    }
    render() {
        return [
            this.mode === "ios" && h("div", { class: "nav-decor" }),
            h("slot", null)
        ];
    }
    static get is() { return "ion-nav"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "animated": {
                "type": Boolean,
                "attr": "animated"
            },
            "animationCtrl": {
                "connect": "ion-animation-controller"
            },
            "canGoBack": {
                "method": true
            },
            "config": {
                "context": "config"
            },
            "delegate": {
                "type": "Any",
                "attr": "delegate"
            },
            "el": {
                "elementRef": true
            },
            "getActive": {
                "method": true
            },
            "getByIndex": {
                "method": true
            },
            "getPrevious": {
                "method": true
            },
            "getRouteId": {
                "method": true
            },
            "insert": {
                "method": true
            },
            "insertPages": {
                "method": true
            },
            "pop": {
                "method": true
            },
            "popTo": {
                "method": true
            },
            "popToRoot": {
                "method": true
            },
            "push": {
                "method": true
            },
            "queue": {
                "context": "queue"
            },
            "removeIndex": {
                "method": true
            },
            "root": {
                "type": String,
                "attr": "root",
                "watchCallbacks": ["rootChanged"]
            },
            "rootParams": {
                "type": "Any",
                "attr": "root-params"
            },
            "setPages": {
                "method": true
            },
            "setRoot": {
                "method": true
            },
            "setRouteId": {
                "method": true
            },
            "swipeGesture": {
                "type": Boolean,
                "attr": "swipe-gesture",
                "mutable": true,
                "watchCallbacks": ["swipeGestureChanged"]
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get events() {
        return [{
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
    static get style() { return ":host {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0; }\n\n.nav-decor {\n  display: none; }\n\n:host(.show-decor) .nav-decor {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: block;\n  position: absolute;\n  background: #000;\n  z-index: 0;\n  pointer-events: none; }"; }
}

class Route {
    constructor() {
        this.url = "";
    }
    onUpdate(newValue) {
        this.ionRouteDataChanged.emit(newValue);
    }
    onComponentProps(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        const keys1 = newValue ? Object.keys(newValue) : [];
        const keys2 = oldValue ? Object.keys(oldValue) : [];
        if (keys1.length !== keys2.length) {
            this.onUpdate(newValue);
            return;
        }
        for (const key of keys1) {
            if (newValue[key] !== oldValue[key]) {
                this.onUpdate(newValue);
                return;
            }
        }
    }
    componentDidLoad() {
        this.ionRouteDataChanged.emit();
    }
    componentDidUnload() {
        this.ionRouteDataChanged.emit();
    }
    static get is() { return "ion-route"; }
    static get properties() {
        return {
            "component": {
                "type": String,
                "attr": "component",
                "watchCallbacks": ["onUpdate"]
            },
            "componentProps": {
                "type": "Any",
                "attr": "component-props",
                "watchCallbacks": ["onComponentProps"]
            },
            "url": {
                "type": String,
                "attr": "url",
                "watchCallbacks": ["onUpdate"]
            }
        };
    }
    static get events() {
        return [{
                "name": "ionRouteDataChanged",
                "method": "ionRouteDataChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
}

function generatePath(segments) {
    const path = segments
        .filter(s => s.length > 0)
        .join('/');
    return '/' + path;
}
function chainToPath(chain) {
    const path = [];
    for (const route of chain) {
        for (const segment of route.path) {
            if (segment[0] === ':') {
                const param = route.params && route.params[segment.slice(1)];
                if (!param) {
                    return null;
                }
                path.push(param);
            }
            else if (segment !== '') {
                path.push(segment);
            }
        }
    }
    return path;
}
function writePath(history, root, useHash, path, intent, state) {
    let url = generatePath([
        ...parsePath(root),
        ...path
    ]);
    if (useHash) {
        url = '#' + url;
    }
    if (intent === 1) {
        history.pushState(state, '', url);
    }
    else {
        history.replaceState(state, '', url);
    }
}
function removePrefix(prefix, path) {
    if (prefix.length > path.length) {
        return null;
    }
    if (prefix.length <= 1 && prefix[0] === '') {
        return path;
    }
    for (let i = 0; i < prefix.length; i++) {
        if (prefix[i].length > 0 && prefix[i] !== path[i]) {
            return null;
        }
    }
    if (path.length === prefix.length) {
        return [''];
    }
    return path.slice(prefix.length);
}
function readPath(loc, root, useHash) {
    let pathname = loc.pathname;
    if (useHash) {
        const hash = loc.hash;
        pathname = (hash[0] === '#')
            ? hash.slice(1)
            : '';
    }
    const prefix = parsePath(root);
    const path = parsePath(pathname);
    return removePrefix(prefix, path);
}
function parsePath(path) {
    if (path == null) {
        return [''];
    }
    const segments = path.split('/')
        .map(s => s.trim())
        .filter(s => s.length > 0);
    if (segments.length === 0) {
        return [''];
    }
    else {
        return segments;
    }
}

function printRoutes(routes) {
    console.group(`[ion-core] ROUTES[${routes.length}]`);
    for (const chain of routes) {
        const path = [];
        chain.forEach(r => path.push(...r.path));
        const ids = chain.map(r => r.id);
        console.debug(`%c ${generatePath(path)}`, 'font-weight: bold; padding-left: 20px', '=>\t', `(${ids.join(', ')})`);
    }
    console.groupEnd();
}
function printRedirects(redirects) {
    console.group(`[ion-core] REDIRECTS[${redirects.length}]`);
    for (const redirect of redirects) {
        if (redirect.to) {
            console.debug('FROM: ', `$c ${generatePath(redirect.from)}`, 'font-weight: bold', ' TO: ', `$c ${generatePath(redirect.to)}`, 'font-weight: bold');
        }
    }
    console.groupEnd();
}

async function writeNavState(root, chain, intent, index, changed = false) {
    try {
        const outlet = searchNavNode(root);
        if (index >= chain.length || !outlet) {
            return changed;
        }
        await outlet.componentOnReady();
        const route = chain[index];
        const result = await outlet.setRouteId(route.id, route.params, intent);
        if (result.changed) {
            intent = 0;
            changed = true;
        }
        changed = await writeNavState(result.element, chain, intent, index + 1, changed);
        if (result.markVisible) {
            await result.markVisible();
        }
        return changed;
    }
    catch (e) {
        console.error(e);
        return false;
    }
}
async function readNavState(root) {
    const ids = [];
    let outlet;
    let node = root;
    while (true) {
        outlet = searchNavNode(node);
        if (outlet) {
            const id = await outlet.getRouteId();
            if (id) {
                node = id.element;
                id.element = undefined;
                ids.push(id);
            }
            else {
                break;
            }
        }
        else {
            break;
        }
    }
    return { ids, outlet };
}
function waitUntilNavNode(win) {
    if (searchNavNode(win.document.body)) {
        return Promise.resolve();
    }
    return new Promise(resolve => {
        win.addEventListener('ionNavWillLoad', resolve, { once: true });
    });
}
const QUERY = ':not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet';
function searchNavNode(root) {
    if (!root) {
        return undefined;
    }
    if (root.matches(QUERY)) {
        return root;
    }
    const outlet = root.querySelector(QUERY);
    return outlet ? outlet : undefined;
}

function matchesRedirect(input, route) {
    const { from, to } = route;
    if (to === undefined) {
        return false;
    }
    if (from.length > input.length) {
        return false;
    }
    for (let i = 0; i < from.length; i++) {
        const expected = from[i];
        if (expected === '*') {
            return true;
        }
        if (expected !== input[i]) {
            return false;
        }
    }
    return from.length === input.length;
}
function routeRedirect(path, routes) {
    return routes.find(route => matchesRedirect(path, route));
}
function matchesIDs(ids, chain) {
    const len = Math.min(ids.length, chain.length);
    let i = 0;
    for (; i < len; i++) {
        if (ids[i].toLowerCase() !== chain[i].id) {
            break;
        }
    }
    return i;
}
function matchesPath(inputPath, chain) {
    const segments = new RouterSegments(inputPath);
    let matchesDefault = false;
    let allparams;
    for (let i = 0; i < chain.length; i++) {
        const path = chain[i].path;
        if (path[0] === '') {
            matchesDefault = true;
        }
        else {
            for (const segment of path) {
                const data = segments.next();
                if (segment[0] === ':') {
                    if (data === '') {
                        return null;
                    }
                    allparams = allparams || [];
                    const params = allparams[i] || (allparams[i] = {});
                    params[segment.slice(1)] = data;
                }
                else if (data !== segment) {
                    return null;
                }
            }
            matchesDefault = false;
        }
    }
    const matches = (matchesDefault)
        ? matchesDefault === (segments.next() === '')
        : true;
    if (!matches) {
        return null;
    }
    if (allparams) {
        return chain.map((route, i) => ({
            id: route.id,
            path: route.path,
            params: mergeParams(route.params, allparams[i])
        }));
    }
    return chain;
}
function mergeParams(a, b) {
    if (!a && b) {
        return b;
    }
    else if (a && !b) {
        return a;
    }
    else if (a && b) {
        return Object.assign({}, a, b);
    }
    return undefined;
}
function routerIDsToChain(ids, chains) {
    let match = null;
    let maxMatches = 0;
    const plainIDs = ids.map(i => i.id);
    for (const chain of chains) {
        const score = matchesIDs(plainIDs, chain);
        if (score > maxMatches) {
            match = chain;
            maxMatches = score;
        }
    }
    if (match) {
        return match.map((route, i) => ({
            id: route.id,
            path: route.path,
            params: mergeParams(route.params, ids[i] && ids[i].params)
        }));
    }
    return null;
}
function routerPathToChain(path, chains) {
    let match = null;
    let matches = 0;
    for (const chain of chains) {
        const matchedChain = matchesPath(path, chain);
        if (matchedChain !== null) {
            const score = computePriority(matchedChain);
            if (score > matches) {
                matches = score;
                match = matchedChain;
            }
        }
    }
    return match;
}
function computePriority(chain) {
    let score = 1;
    let level = 1;
    for (const route of chain) {
        for (const path of route.path) {
            if (path[0] === ':') {
                score += Math.pow(1, level);
            }
            else if (path !== '') {
                score += Math.pow(2, level);
            }
            level++;
        }
    }
    return score;
}
class RouterSegments {
    constructor(path) {
        this.path = path.slice();
    }
    next() {
        if (this.path.length > 0) {
            return this.path.shift();
        }
        return '';
    }
}

function readRedirects(root) {
    return Array.from(root.children)
        .filter(el => el.tagName === 'ION-ROUTE-REDIRECT')
        .map(el => {
        const to = readProp(el, 'to');
        return {
            from: parsePath(readProp(el, 'from')),
            to: to == null ? undefined : parsePath(to),
        };
    });
}
function readRoutes(root) {
    return flattenRouterTree(readRouteNodes(root));
}
function readRouteNodes(root, node = root) {
    return Array.from(node.children)
        .filter(el => el.tagName === 'ION-ROUTE' && el.component)
        .map(el => {
        const component = readProp(el, 'component');
        if (component == null) {
            throw new Error('component missing in ion-route');
        }
        return {
            path: parsePath(readProp(el, 'url')),
            id: component.toLowerCase(),
            params: el.componentProps,
            children: readRouteNodes(root, el)
        };
    });
}
function readProp(el, prop) {
    if (prop in el) {
        return el[prop];
    }
    if (el.hasAttribute(prop)) {
        return el.getAttribute(prop);
    }
    return null;
}
function flattenRouterTree(nodes) {
    const routes = [];
    for (const node of nodes) {
        flattenNode([], routes, node);
    }
    return routes;
}
function flattenNode(chain, routes, node) {
    const s = chain.slice();
    s.push({
        id: node.id,
        path: node.path,
        params: node.params
    });
    if (node.children.length === 0) {
        routes.push(s);
        return;
    }
    for (const sub of node.children) {
        flattenNode(s, routes, sub);
    }
}

class Router {
    constructor() {
        this.previousPath = null;
        this.busy = false;
        this.state = 0;
        this.lastState = 0;
        this.root = "/";
        this.useHash = true;
    }
    async componentWillLoad() {
        console.debug("[ion-router] router will load");
        await waitUntilNavNode(this.win);
        console.debug("[ion-router] found nav");
        await this.onRoutesChanged();
    }
    componentDidLoad() {
        this.win.addEventListener("ionRouteRedirectChanged", debounce(this.onRedirectChanged.bind(this), 10));
        this.win.addEventListener("ionRouteDataChanged", debounce(this.onRoutesChanged.bind(this), 100));
    }
    onPopState() {
        const direction = this.historyDirection();
        const path = this.getPath();
        console.debug("[ion-router] URL changed -> update nav", path, direction);
        return this.writeNavStateRoot(path, direction);
    }
    onBackButton(ev) {
        ev.detail.register(0, () => this.goBack());
    }
    push(url, direction = "forward") {
        if (url.startsWith(".")) {
            url = (new URL(url, window.location.href)).pathname;
        }
        console.debug("[ion-router] URL pushed -> updating nav", url, direction);
        const path = parsePath(url);
        const intent = DIRECTION_TO_INTENT[direction];
        this.setPath(path, intent);
        return this.writeNavStateRoot(path, intent);
    }
    goBack() {
        this.win.history.back(1);
        return Promise.resolve(this.waitPromise);
    }
    printDebug() {
        console.debug("CURRENT PATH", this.getPath());
        console.debug("PREVIOUS PATH", this.previousPath);
        printRoutes(readRoutes(this.el));
        printRedirects(readRedirects(this.el));
    }
    async navChanged(intent) {
        if (this.busy) {
            console.warn("[ion-router] router is busy, navChanged was cancelled");
            return false;
        }
        const { ids, outlet } = await readNavState(this.win.document.body);
        const routes = readRoutes(this.el);
        const chain = routerIDsToChain(ids, routes);
        if (!chain) {
            console.warn("[ion-router] no matching URL for ", ids.map(i => i.id));
            return false;
        }
        const path = chainToPath(chain);
        if (!path) {
            console.warn("[ion-router] router could not match path because some required param is missing");
            return false;
        }
        console.debug("[ion-router] nav changed -> update URL", ids, path);
        this.setPath(path, intent);
        await this.safeWriteNavState(outlet, chain, 0, path, null, ids.length);
        return true;
    }
    onRedirectChanged() {
        const path = this.getPath();
        if (path && routeRedirect(path, readRedirects(this.el))) {
            this.writeNavStateRoot(path, 0);
        }
    }
    onRoutesChanged() {
        return this.writeNavStateRoot(this.getPath(), 0);
    }
    historyDirection() {
        if (this.win.history.state === null) {
            this.state++;
            this.win.history.replaceState(this.state, this.win.document.title, this.win.document.location.href);
        }
        const state = this.win.history.state;
        const lastState = this.lastState;
        this.lastState = state;
        if (state > lastState) {
            return 1;
        }
        else if (state < lastState) {
            return -1;
        }
        else {
            return 0;
        }
    }
    async writeNavStateRoot(path, intent) {
        if (!path) {
            console.error("[ion-router] URL is not part of the routing set");
            return false;
        }
        const redirects = readRedirects(this.el);
        const redirect = routeRedirect(path, redirects);
        let redirectFrom = null;
        if (redirect) {
            this.setPath(redirect.to, intent);
            redirectFrom = redirect.from;
            path = redirect.to;
        }
        const routes = readRoutes(this.el);
        const chain = routerPathToChain(path, routes);
        if (!chain) {
            console.error("[ion-router] the path does not match any route");
            return false;
        }
        return this.safeWriteNavState(this.win.document.body, chain, intent, path, redirectFrom);
    }
    async safeWriteNavState(node, chain, intent, path, redirectFrom, index = 0) {
        const unlock = await this.lock();
        let changed = false;
        try {
            changed = await this.writeNavState(node, chain, intent, path, redirectFrom, index);
        }
        catch (e) {
            console.error(e);
        }
        unlock();
        return changed;
    }
    async lock() {
        const p = this.waitPromise;
        let resolve;
        this.waitPromise = new Promise(r => resolve = r);
        if (p !== undefined) {
            await p;
        }
        return resolve;
    }
    async writeNavState(node, chain, intent, path, redirectFrom, index = 0) {
        if (this.busy) {
            console.warn("[ion-router] router is busy, transition was cancelled");
            return false;
        }
        this.busy = true;
        const routeEvent = this.routeChangeEvent(path, redirectFrom);
        if (routeEvent) {
            this.ionRouteWillChange.emit(routeEvent);
        }
        const changed = await writeNavState(node, chain, intent, index);
        this.busy = false;
        if (changed) {
            console.debug("[ion-router] route changed", path);
        }
        if (routeEvent) {
            this.ionRouteDidChange.emit(routeEvent);
        }
        return changed;
    }
    setPath(path, intent) {
        this.state++;
        writePath(this.win.history, this.root, this.useHash, path, intent, this.state);
    }
    getPath() {
        return readPath(this.win.location, this.root, this.useHash);
    }
    routeChangeEvent(path, redirectFromPath) {
        const from = this.previousPath;
        const to = generatePath(path);
        this.previousPath = to;
        if (to === from) {
            return null;
        }
        const redirectedFrom = redirectFromPath ? generatePath(redirectFromPath) : null;
        return {
            from,
            redirectedFrom,
            to,
        };
    }
    static get is() { return "ion-router"; }
    static get properties() {
        return {
            "config": {
                "context": "config"
            },
            "el": {
                "elementRef": true
            },
            "goBack": {
                "method": true
            },
            "navChanged": {
                "method": true
            },
            "printDebug": {
                "method": true
            },
            "push": {
                "method": true
            },
            "queue": {
                "context": "queue"
            },
            "root": {
                "type": String,
                "attr": "root"
            },
            "useHash": {
                "type": Boolean,
                "attr": "use-hash"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionRouteWillChange",
                "method": "ionRouteWillChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionRouteDidChange",
                "method": "ionRouteDidChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "window:popstate",
                "method": "onPopState"
            }, {
                "name": "document:ionBackButton",
                "method": "onBackButton"
            }];
    }
}
const DIRECTION_TO_INTENT = {
    "back": -1,
    "root": 0,
    "forward": 1
};

function iosEnterAnimation(AnimationC, baseEl, position) {
    const baseAnimation = new AnimationC();
    const wrapperAnimation = new AnimationC();
    const wrapperEle = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '-100%', top);
            break;
        case 'middle':
            const topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEle.clientHeight / 2);
            wrapperEle.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('translateY', '100%', bottom);
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.155,1.105,.295,1.12)')
        .duration(400)
        .add(wrapperAnimation));
}

function iosLeaveAnimation(AnimationC, baseEl, position) {
    const baseAnimation = new AnimationC();
    const wrapperAnimation = new AnimationC();
    const wrapperEle = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', top, '-100%');
            break;
        case 'middle':
            wrapperAnimation.fromTo('opacity', 0.99, 0);
            break;
        default:
            wrapperAnimation.fromTo('translateY', bottom, '100%');
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .add(wrapperAnimation));
}

function mdEnterAnimation(AnimationC, baseEl, position) {
    const baseAnimation = new AnimationC();
    const wrapperAnimation = new AnimationC();
    const wrapperEle = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '-100%', '0%');
            break;
        case 'middle':
            const topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEle.clientHeight / 2);
            wrapperEle.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('translateY', '100%', '0%');
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(wrapperAnimation));
}

function mdLeaveAnimation(AnimationC, baseEl, position) {
    const baseAnimation = new AnimationC();
    const wrapperAnimation = new AnimationC();
    const wrapperEle = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEle);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '0px', '-100%');
            break;
        case 'middle':
            wrapperAnimation.fromTo('opacity', 0.99, 0);
            break;
        default:
            wrapperAnimation.fromTo('translateY', `0px`, '100%');
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .add(wrapperAnimation));
}

class Toast {
    constructor() {
        this.presented = false;
        this.duration = 0;
        this.keyboardClose = false;
        this.position = "bottom";
        this.showCloseButton = false;
        this.translucent = false;
        this.animated = true;
    }
    componentDidLoad() {
        this.ionToastDidLoad.emit();
    }
    componentDidUnload() {
        this.ionToastDidUnload.emit();
    }
    async present() {
        await present(this, "toastEnter", iosEnterAnimation, mdEnterAnimation, this.position);
        if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.dismiss(undefined, "timeout"), this.duration);
        }
    }
    dismiss(data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return dismiss(this, data, role, "toastLeave", iosLeaveAnimation, mdLeaveAnimation, this.position);
    }
    onDidDismiss() {
        return eventMethod(this.el, "ionToastDidDismiss");
    }
    onWillDismiss() {
        return eventMethod(this.el, "ionToastWillDismiss");
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, "toast-translucent") : {};
        return {
            style: {
                zIndex: 60000 + this.overlayIndex,
            },
            class: Object.assign({}, themedClasses, createThemedClasses(this.mode, "toast"), getClassMap(this.cssClass))
        };
    }
    render() {
        const wrapperClass = {
            "toast-wrapper": true,
            [`toast-${this.position}`]: true
        };
        return (h("div", { class: wrapperClass }, h("div", { class: "toast-container" }, this.message !== undefined &&
            h("div", { class: "toast-message" }, this.message), this.showCloseButton &&
            h("ion-button", { fill: "clear", "ion-activatable": true, class: "toast-button", onClick: () => this.dismiss(undefined, "cancel") }, this.closeButtonText || "Close"))));
    }
    static get is() { return "ion-toast"; }
    static get properties() {
        return {
            "animated": {
                "type": Boolean,
                "attr": "animated"
            },
            "animationCtrl": {
                "connect": "ion-animation-controller"
            },
            "closeButtonText": {
                "type": String,
                "attr": "close-button-text"
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
            "duration": {
                "type": Number,
                "attr": "duration"
            },
            "el": {
                "elementRef": true
            },
            "enterAnimation": {
                "type": "Any",
                "attr": "enter-animation"
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
            "position": {
                "type": String,
                "attr": "position"
            },
            "present": {
                "method": true
            },
            "showCloseButton": {
                "type": Boolean,
                "attr": "show-close-button"
            },
            "translucent": {
                "type": Boolean,
                "attr": "translucent"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionToastDidLoad",
                "method": "ionToastDidLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionToastDidPresent",
                "method": "didPresent",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionToastWillPresent",
                "method": "willPresent",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionToastWillDismiss",
                "method": "willDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionToastDidDismiss",
                "method": "didDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }, {
                "name": "ionToastDidUnload",
                "method": "ionToastDidUnload",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return "ion-toast {\n  /**\n   * \@prop --background: Background of the toast\n   * \@prop --button-color: Color of the button text\n   * \@prop --color: Color of the toast text\n   */\n  left: 0;\n  top: 0;\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  contain: strict;\n  z-index: 1000;\n  pointer-events: none; }\n\n.toast-wrapper {\n  background: var(--background); }\n\n.toast-wrapper.toast-top {\n  -webkit-transform: translate3d(0,  -100%,  0);\n  transform: translate3d(0,  -100%,  0);\n  top: 0; }\n\n.toast-wrapper.toast-bottom {\n  -webkit-transform: translate3d(0,  100%,  0);\n  transform: translate3d(0,  100%,  0);\n  bottom: 0; }\n\n.toast-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  pointer-events: auto;\n  contain: content; }\n\n.toast-button {\n  --color: inherit;\n  font-size: 15px; }\n\n.toast-message {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.toast-ios {\n  --background: var(--ion-background-color-step-50, #f2f2f2);\n  --button-color: var(--ion-text-color-step-400, #666666);\n  --color: var(--ion-text-color-step-150, #262626);\n  font-size: 14px; }\n\n.toast-ios .toast-wrapper {\n  left: 10px;\n  right: 10px;\n  margin: auto;\n  border-radius: 14px;\n  display: block;\n  position: absolute;\n  max-width: 700px;\n  z-index: 10; }\n\n.toast-translucent-ios .toast-wrapper {\n  background: rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px); }\n\n.toast-ios .toast-wrapper.toast-middle {\n  opacity: .01; }\n\n.toast-ios .toast-message {\n  padding: 15px; }\n\n.toast-ios .toast-button {\n  color: var(--button-color); }"; }
    static get styleMode() { return "ios"; }
}

class ToastController {
    create(opts) {
        return createOverlay(this.doc.createElement("ion-toast"), opts);
    }
    dismiss(data, role, id) {
        return dismissOverlay(this.doc, data, role, "ion-toast", id);
    }
    async getTop() {
        return getOverlay(this.doc, "ion-toast");
    }
    static get is() { return "ion-toast-controller"; }
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

export { AppRoot, App as IonApp, Nav as IonNav, Route as IonRoute, Router as IonRouter, Toast as IonToast, ToastController as IonToastController };
