/*! Built with http://stenciljs.com */
const { h } = window.App;

class GestureController {
    constructor(doc) {
        this.doc = doc;
        this.gestureId = 0;
        this.requestedStart = new Map();
        this.disabledGestures = new Map();
        this.disabledScroll = new Set();
    }
    createGesture(config) {
        return new GestureDelegate(this, this.newID(), config.name, config.priority || 0, !!config.disableScroll);
    }
    createBlocker(opts = {}) {
        return new BlockerDelegate(this, this.newID(), opts.disable, !!opts.disableScroll);
    }
    start(gestureName, id, priority) {
        if (!this.canStart(gestureName)) {
            this.requestedStart.delete(id);
            return false;
        }
        this.requestedStart.set(id, priority);
        return true;
    }
    capture(gestureName, id, priority) {
        if (!this.start(gestureName, id, priority)) {
            return false;
        }
        const requestedStart = this.requestedStart;
        let maxPriority = -10000;
        requestedStart.forEach(value => {
            maxPriority = Math.max(maxPriority, value);
        });
        if (maxPriority === priority) {
            this.capturedId = id;
            requestedStart.clear();
            const event = new CustomEvent('ionGestureCaptured', { detail: gestureName });
            this.doc.body.dispatchEvent(event);
            return true;
        }
        requestedStart.delete(id);
        return false;
    }
    release(id) {
        this.requestedStart.delete(id);
        if (this.capturedId === id) {
            this.capturedId = undefined;
        }
    }
    disableGesture(gestureName, id) {
        let set = this.disabledGestures.get(gestureName);
        if (set === undefined) {
            set = new Set();
            this.disabledGestures.set(gestureName, set);
        }
        set.add(id);
    }
    enableGesture(gestureName, id) {
        const set = this.disabledGestures.get(gestureName);
        if (set !== undefined) {
            set.delete(id);
        }
    }
    disableScroll(id) {
        this.disabledScroll.add(id);
        if (this.disabledScroll.size === 1) {
            this.doc.body.classList.add(BACKDROP_NO_SCROLL);
        }
    }
    enableScroll(id) {
        this.disabledScroll.delete(id);
        if (this.disabledScroll.size === 0) {
            this.doc.body.classList.remove(BACKDROP_NO_SCROLL);
        }
    }
    canStart(gestureName) {
        if (this.capturedId !== undefined) {
            return false;
        }
        if (this.isDisabled(gestureName)) {
            return false;
        }
        return true;
    }
    isCaptured() {
        return this.capturedId !== undefined;
    }
    isScrollDisabled() {
        return this.disabledScroll.size > 0;
    }
    isDisabled(gestureName) {
        const disabled = this.disabledGestures.get(gestureName);
        if (disabled && disabled.size > 0) {
            return true;
        }
        return false;
    }
    newID() {
        this.gestureId++;
        return this.gestureId;
    }
}
class GestureDelegate {
    constructor(ctrl, id, name, priority, disableScroll) {
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.disableScroll = disableScroll;
        this.ctrl = ctrl;
    }
    canStart() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.canStart(this.name);
    }
    start() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.start(this.name, this.id, this.priority);
    }
    capture() {
        if (!this.ctrl) {
            return false;
        }
        const captured = this.ctrl.capture(this.name, this.id, this.priority);
        if (captured && this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
        return captured;
    }
    release() {
        if (this.ctrl) {
            this.ctrl.release(this.id);
            if (this.disableScroll) {
                this.ctrl.enableScroll(this.id);
            }
        }
    }
    destroy() {
        this.release();
        this.ctrl = undefined;
    }
}
class BlockerDelegate {
    constructor(ctrl, id, disable, disableScroll) {
        this.id = id;
        this.disable = disable;
        this.disableScroll = disableScroll;
        this.ctrl = ctrl;
    }
    block() {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (const gesture of this.disable) {
                this.ctrl.disableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
    }
    unblock() {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (const gesture of this.disable) {
                this.ctrl.enableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.enableScroll(this.id);
        }
    }
    destroy() {
        this.unblock();
        this.ctrl = undefined;
    }
}
const BACKDROP_NO_SCROLL = 'backdrop-no-scroll';
const GESTURE_CONTROLLER = new GestureController(document);

export { GESTURE_CONTROLLER as a };
