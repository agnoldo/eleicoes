/*!
 * Built with http://stenciljs.com
 * 2018-09-15T22:15:01
 */
(function(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

  function init(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCorePolyfilled, hydratedCssClass, components, HTMLElementPrototype, App, x, y, scriptElm) {
    // create global namespace if it doesn't already exist
    App = win[namespace] = win[namespace] || {};
    App.components = components;
    y = components.map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        y = doc.head.querySelector('meta[charset]');
        doc.head.insertBefore(x, y ? y.nextSibling : doc.head.firstChild);
    }
    createComponentOnReadyPrototype(win, namespace, HTMLElementPrototype);
    resourcesUrl = resourcesUrl || App.resourcesUrl;
    // figure out the script element for this current script
    y = doc.querySelectorAll('script');
    for (x = y.length - 1; x >= 0; x--) {
        scriptElm = y[x];
        if (scriptElm.src || scriptElm.hasAttribute('data-resources-url')) {
            break;
        }
    }
    // get the resource path attribute on this script element
    y = scriptElm.getAttribute('data-resources-url');
    if (!resourcesUrl && y) {
        // the script element has a data-resources-url attribute, always use that
        resourcesUrl = y;
    }
    if (!resourcesUrl && scriptElm.src) {
        // we don't have an exact resourcesUrl, so let's
        // figure it out relative to this script's src and app's filesystem namespace
        y = scriptElm.src.split('/').slice(0, -1);
        resourcesUrl = (y.join('/')) + (y.length ? '/' : '') + fsNamespace + '/';
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    if (usePolyfills(win, win.location, x, 'import("")')) {
        // requires the es5/polyfilled core
        x.src = resourcesUrl + appCorePolyfilled;
    }
    else {
        // let's do this!
        x.src = resourcesUrl + appCore;
        x.setAttribute('type', 'module');
        x.setAttribute('crossorigin', true);
    }
    x.setAttribute('data-resources-url', resourcesUrl);
    x.setAttribute('data-namespace', fsNamespace);
    doc.head.appendChild(x);
}
function usePolyfills(win, location, scriptElm, dynamicImportTest) {
    // fyi, dev mode has verbose if/return statements
    // but it minifies to a nice 'lil one-liner ;)
    if (location.search.indexOf('core=esm') > 0) {
        // force esm build
        return false;
    }
    if ((location.search.indexOf('core=es5') > 0) ||
        (location.protocol === 'file:') ||
        (!(win.customElements && win.customElements.define)) ||
        (!win.fetch) ||
        (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) ||
        (!('noModule' in scriptElm))) {
        // es5 build w/ polyfills
        return true;
    }
    // final test to see if this browser support dynamic imports
    return doesNotSupportsDynamicImports(dynamicImportTest);
}
function doesNotSupportsDynamicImports(dynamicImportTest) {
    try {
        new Function(dynamicImportTest);
        return false;
    }
    catch (e) { }
    return true;
}
function createComponentOnReadyPrototype(win, namespace, HTMLElementPrototype) {
    (win['s-apps'] = win['s-apps'] || []).push(namespace);
    if (!HTMLElementPrototype.componentOnReady) {
        HTMLElementPrototype.componentOnReady = function componentOnReady() {
            /*tslint:disable*/
            var elm = this;
            function executor(resolve) {
                if (elm.nodeName.indexOf('-') > 0) {
                    // window hasn't loaded yet and there's a
                    // good chance this is a custom element
                    var apps = win['s-apps'];
                    var appsReady = 0;
                    // loop through all the app namespaces
                    for (var i = 0; i < apps.length; i++) {
                        // see if this app has "componentOnReady" setup
                        if (win[apps[i]].componentOnReady) {
                            // this app's core has loaded call its "componentOnReady"
                            if (win[apps[i]].componentOnReady(elm, resolve)) {
                                // this component does belong to this app and would
                                // have fired off the resolve fn
                                // let's stop here, we're good
                                return;
                            }
                            appsReady++;
                        }
                    }
                    if (appsReady < apps.length) {
                        // not all apps are ready yet
                        // add it to the queue to be figured out when they are
                        (win['s-cr'] = win['s-cr'] || []).push([elm, resolve]);
                        return;
                    }
                }
                // not a recognized app component
                resolve(null);
            }
            // callback wasn't provided, let's return a promise
            if (win.Promise) {
                // use native/polyfilled promise
                return new win.Promise(executor);
            }
            // promise may not have been polyfilled yet
            return { then: executor };
        };
    }
}


  init(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components);

  })(window, document, "App","app",0,"app.core.js","es5-build-disabled.js","hydrated",[["app-adicionar_votacao",{"ios":"app-adicionar_votacao.ios","md":"app-adicionar_votacao.md"},1,[["items",16]]],["app-dialogo_okcancelar","app-dialogo_okcancelar",1,[["title",1,0,1,2],["visible",2,1,1,4]],1],["app-home",{"ios":"app-home.ios","md":"app-home.md"},1,[["data",2,0,1,1]]],["app-piechart",{"ios":"app-home.ios","md":"app-home.md"},1,[["chartData",1,0,"chart-data",2],["chartId",2,0,"chart-id",2],["chartTitle",1,0,"chart-title",2],["innerData",2,0,"inner-data",1],["showCharts",16]]],["app-profile",{"ios":"app-profile.ios","md":"app-profile.md"},1,[["name",1,0,1,2],["state",16]]],["app-qrcode",{"ios":"app-home.ios","md":"app-home.md"},1],["app-root",{"ios":"app-root.ios","md":"app-root.md"},1,[["toastCtrl",8,0,0,0,"ion-toast-controller"]],0,[["window:swUpdate","onSWUpdate"]]],["ion-action-sheet",{"ios":"app-home.ios","md":"app-home.md"},1,[["animated",1,0,1,4],["animationCtrl",8,0,0,0,"ion-animation-controller"],["backdropDismiss",1,0,"backdrop-dismiss",4],["buttons",1],["config",4,0,0,0,"config"],["cssClass",1,0,"css-class",2],["dismiss",32],["el",64],["enterAnimation",1],["header",1,0,1,2],["keyboardClose",1,0,"keyboard-close",4],["leaveAnimation",1],["mode",1,0,1,2],["onDidDismiss",32],["onWillDismiss",32],["overlayIndex",1,0,"overlay-index",8],["present",32],["subHeader",1,0,"sub-header",2],["translucent",1,0,1,4]],2,[["ionActionSheetWillDismiss","dispatchCancelHandler"],["ionBackdropTap","onBackdropTap"]]],["ion-action-sheet-controller",{"ios":"app-home.ios","md":"app-home.md"},0,[["create",32],["dismiss",32],["doc",4,0,0,0,"document"],["getTop",32]]],["ion-alert",{"ios":"app-home.ios","md":"app-home.md"},1,[["animated",1,0,1,4],["animationCtrl",8,0,0,0,"ion-animation-controller"],["backdropDismiss",1,0,"backdrop-dismiss",4],["buttons",1],["config",4,0,0,0,"config"],["cssClass",1,0,"css-class",2],["dismiss",32],["el",64],["enterAnimation",1],["header",1,0,1,2],["inputs",2],["keyboardClose",1,0,"keyboard-close",4],["leaveAnimation",1],["message",1,0,1,2],["mode",1,0,1,2],["onDidDismiss",32],["onWillDismiss",32],["overlayIndex",1,0,"overlay-index",8],["present",32],["subHeader",1,0,"sub-header",2],["translucent",1,0,1,4]],2,[["ionAlertWillDismiss","dispatchCancelHandler"],["ionBackdropTap","onBackdropTap"]]],["ion-alert-controller",{"ios":"app-home.ios","md":"app-home.md"},0,[["create",32],["dismiss",32],["doc",4,0,0,0,"document"],["getTop",32]]],["ion-animation-controller","ion-animation-controller",0,[["config",4,0,0,0,"config"],["create",32]]],["ion-app",{"ios":"app-root.ios","md":"app-root.md"},1,[["config",4,0,0,0,"config"],["el",64],["queue",4,0,0,0,"queue"],["win",4,0,0,0,"window"]]],["ion-avatar",{"ios":"app-home.ios","md":"app-home.md"},1,0,1],["ion-back-button",{"ios":"app-profile.ios","md":"app-profile.md"},1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["defaultHref",1,0,"default-href",2],["el",64],["icon",1,0,1,2],["mode",1,0,1,2],["text",1,0,1,2],["win",4,0,0,0,"window"]],2],["ion-backdrop",{"ios":"ion-backdrop.ios","md":"ion-backdrop.md"},1,[["doc",4,0,0,0,"document"],["stopPropagation",1,0,"stop-propagation",4],["tappable",1,0,1,4],["visible",1,0,1,4]],1,[["click","onMouseDown",0,0,1],["mousedown","onMouseDown",0,0,1],["touchstart","onTouchStart",0,0,1]]],["ion-badge",{"ios":"app-home.ios","md":"app-home.md"},1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-button",{"ios":"ion-button.ios","md":"ion-button.md"},1,[["buttonType",2,0,"button-type",2],["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["expand",1,0,1,2],["fill",2,0,1,2],["href",1,0,1,2],["keyFocus",16],["mode",1,0,1,2],["routerDirection",1,0,"router-direction",2],["shape",1,0,1,2],["size",1,0,1,2],["strong",1,0,1,4],["type",1,0,1,2],["win",4,0,0,0,"window"]],1],["ion-buttons",{"ios":"app-profile.ios","md":"app-profile.md"},1,0,2],["ion-card",{"ios":"app-home.ios","md":"app-home.md"},1,[["color",1,0,1,2],["mode",1,0,1,2]],2],["ion-card-subtitle",{"ios":"app-home.ios","md":"app-home.md"},1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-card-title",{"ios":"app-home.ios","md":"app-home.md"},1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-col",{"ios":"app-home.ios","md":"app-home.md"},1,[["el",64],["offset",1,0,1,2],["offsetLg",1,0,"offset-lg",2],["offsetMd",1,0,"offset-md",2],["offsetSm",1,0,"offset-sm",2],["offsetXl",1,0,"offset-xl",2],["offsetXs",1,0,"offset-xs",2],["pull",1,0,1,2],["pullLg",1,0,"pull-lg",2],["pullMd",1,0,"pull-md",2],["pullSm",1,0,"pull-sm",2],["pullXl",1,0,"pull-xl",2],["pullXs",1,0,"pull-xs",2],["push",1,0,1,2],["pushLg",1,0,"push-lg",2],["pushMd",1,0,"push-md",2],["pushSm",1,0,"push-sm",2],["pushXl",1,0,"push-xl",2],["pushXs",1,0,"push-xs",2],["size",1,0,1,2],["sizeLg",1,0,"size-lg",2],["sizeMd",1,0,"size-md",2],["sizeSm",1,0,"size-sm",2],["sizeXl",1,0,"size-xl",2],["sizeXs",1,0,"size-xs",2],["win",4,0,0,0,"window"]],1,[["window:resize","onResize",0,1]]],["ion-content",{"ios":"ion-content.ios","md":"ion-content.md"},1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["el",64],["forceOverscroll",2,0,"force-overscroll",4],["fullscreen",1,0,1,4],["getScrollElement",32],["queue",4,0,0,0,"queue"],["scrollByPoint",32],["scrollEvents",1,0,"scroll-events",4],["scrollToBottom",32],["scrollToPoint",32],["scrollToTop",32],["scrollX",1,0,"scroll-x",4],["scrollY",1,0,"scroll-y",4],["win",4,0,0,0,"window"]],1,[["body:ionNavDidChange","onNavChanged"]]],["ion-grid",{"ios":"app-home.ios","md":"app-home.md"},1,[["fixed",1,0,1,4]],1],["ion-header",{"ios":"ion-content.ios","md":"ion-content.md"},1,[["mode",1,0,1,2],["translucent",1,0,1,4]]],["ion-icon",{"ios":"ion-backdrop.ios","md":"ion-backdrop.md"},1,[["ariaLabel",2,0,"aria-label",2],["color",1,0,1,2],["doc",4,0,0,0,"document"],["el",64],["icon",1,0,1,2],["ios",1,0,1,2],["isServer",4,0,0,0,"isServer"],["isVisible",16],["lazy",1,0,1,4],["md",1,0,1,2],["mode",1,0,1,2],["name",1,0,1,2],["resourcesUrl",4,0,0,0,"resourcesUrl"],["size",1,0,1,2],["src",1,0,1,2],["svgContent",16],["win",4,0,0,0,"window"]],1],["ion-img",{"ios":"app-home.ios","md":"app-home.md"},1,[["alt",1,0,1,2],["el",64],["loadSrc",16],["src",1,0,1,2]],1],["ion-item",{"ios":"ion-content.ios","md":"ion-content.md"},1,[["button",1,0,1,4],["color",1,0,1,2],["detail",1,0,1,4],["detailIcon",1,0,"detail-icon",2],["disabled",1,0,1,4],["el",64],["href",1,0,1,2],["lines",1,0,1,2],["mode",1,0,1,2],["multipleInputs",16],["routerDirection",1,0,"router-direction",2],["state",1,0,1,2],["type",1,0,1,2],["win",4,0,0,0,"window"]],1,[["ionStyle","itemStyle"]]],["ion-item-option",{"ios":"app-adicionar_votacao.ios","md":"app-adicionar_votacao.md"},1,[["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["expandable",1,0,1,4],["href",1,0,1,2],["mode",1,0,1,2]],1],["ion-item-options",{"ios":"app-adicionar_votacao.ios","md":"app-adicionar_votacao.md"},1,[["el",64],["fireSwipeEvent",32],["side",1,0,1,2],["win",4,0,0,0,"window"]]],["ion-item-sliding",{"ios":"app-adicionar_votacao.ios","md":"app-adicionar_votacao.md"},1,[["close",32],["closeOpened",32],["disabled",1,0,1,4],["el",64],["getOpenAmount",32],["getSlidingRatio",32],["queue",4,0,0,0,"queue"],["state",16]]],["ion-label",{"ios":"ion-content.ios","md":"ion-content.md"},1,[["color",1,0,1,2],["el",64],["mode",1,0,1,2],["position",1,0,1,2]],2],["ion-list",{"ios":"app-adicionar_votacao.ios","md":"app-adicionar_votacao.md"},1,[["closeSlidingItems",32],["el",64],["inset",1,0,1,4],["lines",1,0,1,2],["mode",1,0,1,2]]],["ion-nav",{"ios":"app-root.ios","md":"app-root.md"},1,[["animated",1,0,1,4],["animationCtrl",8,0,0,0,"ion-animation-controller"],["canGoBack",32],["config",4,0,0,0,"config"],["delegate",1],["el",64],["getActive",32],["getByIndex",32],["getPrevious",32],["getRouteId",32],["insert",32],["insertPages",32],["pop",32],["popTo",32],["popToRoot",32],["push",32],["queue",4,0,0,0,"queue"],["removeIndex",32],["root",1,0,1,2],["rootParams",1],["setPages",32],["setRoot",32],["setRouteId",32],["swipeGesture",2,0,"swipe-gesture",4],["win",4,0,0,0,"window"]],1],["ion-popover",{"ios":"app-home.ios","md":"app-home.md"},1,[["animated",1,0,1,4],["animationCtrl",8,0,0,0,"ion-animation-controller"],["backdropDismiss",1,0,"backdrop-dismiss",4],["component",1,0,1,2],["componentProps",1],["config",4,0,0,0,"config"],["cssClass",1,0,"css-class",2],["delegate",1],["dismiss",32],["el",64],["enterAnimation",1],["event",1,0,1,1],["keyboardClose",1,0,"keyboard-close",4],["leaveAnimation",1],["mode",1,0,1,2],["onDidDismiss",32],["onWillDismiss",32],["overlayIndex",1,0,"overlay-index",8],["present",32],["showBackdrop",1,0,"show-backdrop",4],["translucent",1,0,1,4]],2,[["ionBackdropTap","onBackdropTap"],["ionDismiss","onDismiss"],["ionPopoverDidDismiss","lifecycle"],["ionPopoverDidPresent","lifecycle"],["ionPopoverWillDismiss","lifecycle"],["ionPopoverWillPresent","lifecycle"]]],["ion-popover-controller",{"ios":"app-home.ios","md":"app-home.md"},0,[["create",32],["dismiss",32],["doc",4,0,0,0,"document"],["getTop",32]]],["ion-ripple-effect","ion-ripple-effect",1,[["addRipple",32],["config",4,0,0,0,"config"],["el",64],["queue",4,0,0,0,"queue"],["win",4,0,0,0,"window"]],1],["ion-route",{"ios":"app-root.ios","md":"app-root.md"},0,[["component",1,0,1,2],["componentProps",1],["url",1,0,1,2]]],["ion-router",{"ios":"app-root.ios","md":"app-root.md"},0,[["config",4,0,0,0,"config"],["el",64],["goBack",32],["navChanged",32],["printDebug",32],["push",32],["queue",4,0,0,0,"queue"],["root",1,0,1,2],["useHash",1,0,"use-hash",4],["win",4,0,0,0,"window"]],0,[["document:ionBackButton","onBackButton"],["window:popstate","onPopState"]]],["ion-row",{"ios":"app-home.ios","md":"app-home.md"},1,0,1],["ion-searchbar",{"ios":"app-adicionar_votacao.ios","md":"app-adicionar_votacao.md"},1,[["animated",1,0,1,4],["autocomplete",1,0,1,2],["autocorrect",1,0,1,2],["cancelButtonIcon",1,0,"cancel-button-icon",2],["cancelButtonText",1,0,"cancel-button-text",2],["clearIcon",1,0,"clear-icon",2],["color",1,0,1,2],["debounce",1,0,1,8],["doc",4,0,0,0,"document"],["el",64],["focus",32],["focused",16],["mode",1,0,1,2],["placeholder",1,0,1,2],["searchIcon",1,0,"search-icon",2],["showCancelButton",1,0,"show-cancel-button",4],["spellcheck",1,0,1,4],["type",1,0,1,2],["value",2,0,1,2]],2],["ion-select",{"ios":"app-home.ios","md":"app-home.md"},1,[["actionSheetCtrl",8,0,0,0,"ion-action-sheet-controller"],["alertCtrl",8,0,0,0,"ion-alert-controller"],["cancelText",1,0,"cancel-text",2],["disabled",1,0,1,4],["el",64],["interface",1,0,1,2],["interfaceOptions",1,0,"interface-options",1],["isExpanded",16],["keyFocus",16],["mode",1,0,1,2],["multiple",1,0,1,4],["name",1,0,1,2],["okText",1,0,"ok-text",2],["open",32],["placeholder",1,0,1,2],["popoverCtrl",8,0,0,0,"ion-popover-controller"],["selectedText",1,0,"selected-text",2],["text",16],["value",2,0,1,1]],1,[["ionSelect","onSelect"],["ionSelectOptionDidLoad","optLoad"],["ionSelectOptionDidUnload","optUnload"]]],["ion-select-option",{"ios":"app-home.ios","md":"app-home.md"},0,[["disabled",1,0,1,4],["el",64],["selected",1,0,1,4],["value",2,0,1,1]]],["ion-slide",{"ios":"app-home.ios","md":"app-home.md"},1],["ion-slides",{"ios":"app-home.ios","md":"app-home.md"},1,[["el",64],["getActiveIndex",32],["getPreviousIndex",32],["isBeginning",32],["isEnd",32],["length",32],["lockSwipeToNext",32],["lockSwipeToPrev",32],["lockSwipes",32],["mode",1,0,1,2],["options",1,0,1,1],["pager",1,0,1,4],["scrollbar",1,0,1,4],["slideNext",32],["slidePrev",32],["slideTo",32],["startAutoplay",32],["stopAutoplay",32],["update",32]],0,[["ionSlideChanged","onSlideChanged"]]],["ion-tab",{"ios":"app-home.ios","md":"app-home.md"},1,[["active",2,0,1,4],["badge",1,0,1,2],["badgeColor",1,0,"badge-color",2],["btnId",1,0,"btn-id",2],["component",1,0,1,2],["delegate",1],["disabled",1,0,1,4],["el",64],["href",1,0,1,2],["icon",1,0,1,2],["label",1,0,1,2],["name",2,0,1,2],["selected",1,0,1,4],["setActive",32],["show",1,0,1,4],["tabsHideOnSubPages",1,0,"tabs-hide-on-sub-pages",4]],1],["ion-tabbar",{"ios":"app-home.ios","md":"app-home.md"},1,[["canScrollLeft",16],["canScrollRight",16],["color",1,0,1,2],["doc",4,0,0,0,"document"],["el",64],["highlight",1,0,1,4],["keyboardVisible",16],["layout",1,0,1,2],["mode",1,0,1,2],["placement",1,0,1,2],["queue",4,0,0,0,"queue"],["selectedTab",1],["tabs",1],["translucent",1,0,1,4]],1,[["body:keyboardWillHide","onKeyboardWillHide"],["body:keyboardWillShow","onKeyboardWillShow"],["window:resize","updateHighlight",0,1]]],["ion-tabs",{"ios":"app-home.ios","md":"app-home.md"},1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["doc",4,0,0,0,"document"],["el",64],["getRouteId",32],["getSelected",32],["getTab",32],["name",1,0,1,2],["select",32],["selectedTab",16],["setRouteId",32],["tabbarHidden",1,0,"tabbar-hidden",4],["tabbarHighlight",2,0,"tabbar-highlight",4],["tabbarLayout",2,0,"tabbar-layout",2],["tabbarPlacement",2,0,"tabbar-placement",2],["tabs",16],["translucent",1,0,1,4],["useRouter",2,0,"use-router",4]],1,[["ionTabbarClick","onTabClicked"],["ionTabMutated","onTabMutated"]]],["ion-title",{"ios":"ion-content.ios","md":"ion-content.md"},1,[["color",1,0,1,2],["el",64]],1],["ion-toast",{"ios":"app-root.ios","md":"app-root.md"},1,[["animated",1,0,1,4],["animationCtrl",8,0,0,0,"ion-animation-controller"],["closeButtonText",1,0,"close-button-text",2],["config",4,0,0,0,"config"],["cssClass",1,0,"css-class",2],["dismiss",32],["duration",1,0,1,8],["el",64],["enterAnimation",1],["keyboardClose",1,0,"keyboard-close",4],["leaveAnimation",1],["message",1,0,1,2],["mode",1,0,1,2],["onDidDismiss",32],["onWillDismiss",32],["overlayIndex",1,0,"overlay-index",8],["position",1,0,1,2],["present",32],["showCloseButton",1,0,"show-close-button",4],["translucent",1,0,1,4]]],["ion-toast-controller",{"ios":"app-root.ios","md":"app-root.md"},0,[["create",32],["dismiss",32],["doc",4,0,0,0,"document"],["getTop",32]]],["ion-toggle",{"ios":"app-profile.ios","md":"app-profile.md"},1,[["activated",16],["checked",2,0,1,4],["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["keyFocus",16],["mode",1,0,1,2],["name",1,0,1,2],["queue",4,0,0,0,"queue"],["value",1,0,1,2]],1],["ion-toolbar",{"ios":"ion-content.ios","md":"ion-content.md"},1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["mode",1,0,1,2]],1]],HTMLElement.prototype);