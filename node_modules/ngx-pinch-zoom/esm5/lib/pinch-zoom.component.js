/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, ElementRef, HostListener, ViewChild, Input, EventEmitter, Output } from '@angular/core';
var PinchZoomComponent = /** @class */ (function () {
    function PinchZoomComponent(elementRef) {
        this.elementRef = elementRef;
        this.i = 0;
        this.scale = 1;
        this.initialScale = 1;
        this.moveX = 0;
        this.moveY = 0;
        this.initialMoveX = 0;
        this.initialMoveY = 0;
        this.lastTap = 0;
        this.draggingMode = false;
        this.transitionDuration = 200;
        this.doubleTap = true;
        this.doubleTapScale = 2;
        this.zoomButton = true;
        this.linearHorizontalSwipe = false;
        this.linearVerticalSwipe = false;
        this.autoZoomOut = false;
        this.events = new EventEmitter();
    }
    Object.defineProperty(PinchZoomComponent.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.element = this.contentElement.nativeElement;
        this.parentElement = this.elementRef.nativeElement;
        this.elementTarget = this.element.querySelector('*').tagName;
        this.setBasicStyles();
        this.element.ondragstart = (/**
         * @return {?}
         */
        function () { return false; });
    };
    Object.defineProperty(PinchZoomComponent.prototype, "isTouchScreen", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
            /** @type {?} */
            var mq = (/**
             * @param {?} query
             * @return {?}
             */
            function (query) {
                return window.matchMedia(query).matches;
            });
            if (('ontouchstart' in window)) {
                return true;
            }
            // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH
            /** @type {?} */
            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PinchZoomComponent.prototype, "isDragging", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var imgHeight = this.getImageHeight();
            /** @type {?} */
            var imgWidth = this.getImageWidth();
            if (this.scale > 1) {
                return imgHeight * this.scale > this.parentElement.offsetHeight ||
                    imgWidth * this.scale > this.parentElement.offsetWidth;
            }
            if (this.scale === 1) {
                return imgHeight > this.parentElement.offsetHeight ||
                    imgWidth > this.parentElement.offsetWidth;
            }
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Desktop listeners
     */
    /*
         * Desktop listeners
         */
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.onMouseEnter = /*
         * Desktop listeners
         */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.getElementPosition();
        if (this.isDragging) {
            this.draggingMode = true;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.onMouseMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.draggingMode) {
            event.preventDefault();
            if (!this.eventType) {
                this.startX = event.clientX - this.elementPosition.left;
                this.startY = event.clientY - this.elementPosition.top;
            }
            this.eventType = 'swipe';
            this.events.emit({
                type: 'swipe',
                moveX: this.moveX,
                moveY: this.moveY
            });
            this.moveX = this.initialMoveX + ((event.clientX - this.elementPosition.left) - this.startX);
            this.moveY = this.initialMoveY + ((event.clientY - this.elementPosition.top) - this.startY);
            this.centeringImage();
            this.transformElement(0);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.onMouseUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.draggingMode = false;
        this.updateInitialValues();
        this.eventType = '';
    };
    /*
     * Mobile listeners
     */
    /*
         * Mobile listeners
         */
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.onResize = /*
         * Mobile listeners
         */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.setImageWidth();
        this.transformElement(this.transitionDuration);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.touchstartHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.getElementPosition();
        if (!this.eventType) {
            this.startX = event.touches[0].clientX - this.elementPosition.left;
            this.startY = event.touches[0].clientY - this.elementPosition.top;
            this.startClientX = event.touches[0].clientX - this.elementPosition.left;
            this.startClientY = event.touches[0].clientY - this.elementPosition.top;
        }
        this.events.emit({ type: 'touchstart' });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.touchmoveHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var touches = event.touches;
        // Swipe
        if (this.detectSwipe(touches) || this.eventType === 'swipe') {
            this.handleSwipe(event);
        }
        // Linear swipe
        if (this.detectLinearSwipe(touches) ||
            this.eventType === 'horizontal-swipe' ||
            this.eventType === 'vertical-swipe') {
            this.handleLinearSwipe(event);
        }
        // Pinch
        if (touches.length === 2 && !this.eventType || this.eventType === 'pinch') {
            this.handlePinch(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.touchendHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.i = 0;
        this.draggingMode = false;
        /** @type {?} */
        var touches = event.touches;
        if (this.scale < 1) {
            this.scale = 1;
        }
        // Auto Zoom Out
        if (this.autoZoomOut && this.eventType === 'pinch') {
            this.scale = 1;
        }
        this.events.emit({ type: 'touchend' });
        // Double Tap
        if (this.doubleTapDetection() && !this.eventType) {
            this.toggleZoom(event);
            this.events.emit({ type: 'double-tap' });
            return;
        }
        // Limit Zoom
        if (this.limitZoom && this.eventType === 'pinch') {
            this.handleLimitZoom();
        }
        if (this.eventType === 'pinch' || this.eventType === 'swipe') {
            this.alignImage();
        }
        if (this.eventType === 'pinch' ||
            this.eventType === 'swipe' ||
            this.eventType === 'horizontal-swipe' ||
            this.eventType === 'vertical-swipe') {
            this.updateInitialValues();
        }
        this.eventType = 'touchend';
        if (touches && touches.length === 0) {
            this.eventType = '';
        }
    };
    /*
     * Handlers
     */
    /*
         * Handlers
         */
    /**
     * @param {?} index
     * @param {?} touches
     * @return {?}
     */
    PinchZoomComponent.prototype.moveLeft = /*
         * Handlers
         */
    /**
     * @param {?} index
     * @param {?} touches
     * @return {?}
     */
    function (index, touches) {
        return touches[index].clientX - this.elementPosition.left;
    };
    /**
     * @param {?} index
     * @param {?} touches
     * @return {?}
     */
    PinchZoomComponent.prototype.moveTop = /**
     * @param {?} index
     * @param {?} touches
     * @return {?}
     */
    function (index, touches) {
        return touches[index].clientY - this.elementPosition.top;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.handleSwipe = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (!this.eventType) {
            this.startX = event.touches[0].clientX - this.elementPosition.left;
            this.startY = event.touches[0].clientY - this.elementPosition.top;
        }
        this.eventType = 'swipe';
        this.events.emit({
            type: 'swipe',
            moveX: this.moveX,
            moveY: this.moveY
        });
        this.moveX = this.initialMoveX + (this.moveLeft(0, event.touches) - this.startX);
        this.moveY = this.initialMoveY + (this.moveTop(0, event.touches) - this.startY);
        this.transformElement(0);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.handlePinch = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        /** @type {?} */
        var touches = event.touches;
        if (!this.eventType) {
            this.initialDistance = this.getDistance(touches);
            /** @type {?} */
            var moveLeft0 = this.moveLeft(0, touches);
            /** @type {?} */
            var moveLeft1 = this.moveLeft(1, touches);
            /** @type {?} */
            var moveTop0 = this.moveTop(0, touches);
            /** @type {?} */
            var moveTop1 = this.moveTop(1, touches);
            this.moveXC = ((moveLeft0 + moveLeft1) / 2) - this.initialMoveX;
            this.moveYC = ((moveTop0 + moveTop1) / 2) - this.initialMoveY;
        }
        this.eventType = 'pinch';
        this.distance = this.getDistance(touches);
        this.scale = this.initialScale * (this.distance / this.initialDistance);
        this.events.emit({
            type: 'pinch',
            scale: this.scale
        });
        this.moveX = this.initialMoveX - (((this.distance / this.initialDistance) * this.moveXC) - this.moveXC);
        this.moveY = this.initialMoveY - (((this.distance / this.initialDistance) * this.moveYC) - this.moveYC);
        this.transformElement(0);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.handleLinearSwipe = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.linearVerticalSwipe) {
            event.preventDefault();
        }
        this.i++;
        if (this.i > 3) {
            this.eventType = this.getLinearSwipeType(event);
        }
        if (this.eventType === 'horizontal-swipe') {
            this.moveX = this.initialMoveX + ((event.touches[0].clientX - this.elementPosition.left) - this.startX);
            this.moveY = 0;
        }
        if (this.eventType === 'vertical-swipe') {
            this.moveX = 0;
            this.moveY = this.initialMoveY + ((event.touches[0].clientY - this.elementPosition.top) - this.startY);
        }
        if (this.eventType) {
            this.events.emit({
                type: this.eventType,
                moveX: this.moveX,
                moveY: this.moveY
            });
            this.transformElement(0);
        }
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.handleLimitZoom = /**
     * @return {?}
     */
    function () {
        if (this.scale > this.limitZoom) {
            /** @type {?} */
            var imageWidth = this.getImageWidth();
            /** @type {?} */
            var imageHeight = this.getImageHeight();
            /** @type {?} */
            var enlargedImageWidth = imageWidth * this.scale;
            /** @type {?} */
            var enlargedImageHeight = imageHeight * this.scale;
            /** @type {?} */
            var moveXRatio = this.moveX / (enlargedImageWidth - imageWidth);
            /** @type {?} */
            var moveYRatio = this.moveY / (enlargedImageHeight - imageHeight);
            this.scale = this.limitZoom;
            /** @type {?} */
            var newImageWidth = imageWidth * this.scale;
            /** @type {?} */
            var newImageHeight = imageHeight * this.scale;
            this.moveX = -Math.abs((moveXRatio * (newImageWidth - imageWidth)));
            this.moveY = -Math.abs((-moveYRatio * (newImageHeight - imageHeight)));
            this.centeringImage();
            this.transformElement(this.transitionDuration);
        }
    };
    /**
     * @param {?} touches
     * @return {?}
     */
    PinchZoomComponent.prototype.detectSwipe = /**
     * @param {?} touches
     * @return {?}
     */
    function (touches) {
        return touches.length === 1 && this.scale > 1 && !this.eventType;
    };
    /**
     * @param {?} touches
     * @return {?}
     */
    PinchZoomComponent.prototype.detectLinearSwipe = /**
     * @param {?} touches
     * @return {?}
     */
    function (touches) {
        return touches.length === 1 && this.scale === 1 && !this.eventType;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.getLinearSwipeType = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
            /** @type {?} */
            var movementX = Math.abs(this.moveLeft(0, event.touches) - this.startClientX);
            /** @type {?} */
            var movementY = Math.abs(this.moveTop(0, event.touches) - this.startClientY);
            if ((movementY * 3) > movementX) {
                return this.linearVerticalSwipe ? 'vertical-swipe' : '';
            }
            else {
                return this.linearHorizontalSwipe ? 'horizontal-swipe' : '';
            }
        }
        else {
            return this.eventType;
        }
    };
    /**
     * @param {?} touches
     * @return {?}
     */
    PinchZoomComponent.prototype.getDistance = /**
     * @param {?} touches
     * @return {?}
     */
    function (touches) {
        return Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2));
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.getImageHeight = /**
     * @return {?}
     */
    function () {
        return this.element.getElementsByTagName(this.elementTarget)[0].offsetHeight;
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.getImageWidth = /**
     * @return {?}
     */
    function () {
        return this.element.getElementsByTagName(this.elementTarget)[0].offsetWidth;
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.setBasicStyles = /**
     * @return {?}
     */
    function () {
        this.element.style.display = 'flex';
        this.element.style.height = '100%';
        this.element.style.alignItems = 'center';
        this.element.style.justifyContent = 'center';
        this.element.style.transformOrigin = '0 0';
        this.hostDisplay = 'block';
        this.hostOverflow = 'hidden';
        this.hostHeight = this.containerHeight;
        this.setImageWidth();
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.setImageWidth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var imgElement = this.element.getElementsByTagName(this.elementTarget);
        if (imgElement.length) {
            imgElement[0].style.maxWidth = '100%';
            imgElement[0].style.maxHeight = '100%';
        }
    };
    /**
     * @param {?=} duration
     * @return {?}
     */
    PinchZoomComponent.prototype.transformElement = /**
     * @param {?=} duration
     * @return {?}
     */
    function (duration) {
        if (duration === void 0) { duration = 50; }
        this.element.style.transition = "all " + duration + "ms";
        this.element.style.transform = "\n            matrix(" + Number(this.scale) + ", 0, 0, " + Number(this.scale) + ", " + Number(this.moveX) + ", " + Number(this.moveY) + ")";
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.doubleTapDetection = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.doubleTap) {
            return false;
        }
        /** @type {?} */
        var currentTime = new Date().getTime();
        /** @type {?} */
        var tapLength = currentTime - this.lastTap;
        clearTimeout(this.doubleTapTimeout);
        if (tapLength < 300 && tapLength > 0) {
            return true;
        }
        else {
            this.doubleTapTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                clearTimeout(_this.doubleTapTimeout);
            }), 300);
        }
        this.lastTap = currentTime;
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    PinchZoomComponent.prototype.toggleZoom = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (event === void 0) { event = false; }
        if (this.initialScale === 1) {
            if (event && event.changedTouches) {
                /** @type {?} */
                var changedTouches = event.changedTouches;
                this.scale = this.initialScale * this.doubleTapScale;
                this.moveX = this.initialMoveX - (changedTouches[0].clientX * (this.doubleTapScale - 1) - this.elementPosition.left);
                this.moveY = this.initialMoveY - (changedTouches[0].clientY * (this.doubleTapScale - 1) - this.elementPosition.top);
            }
            else {
                this.scale = this.initialScale * 2;
                this.moveX = this.initialMoveX - this.element.offsetWidth / 2;
                this.moveY = this.initialMoveY - this.element.offsetHeight / 2;
            }
            this.centeringImage();
            this.updateInitialValues();
            this.transformElement(this.transitionDuration);
            this.events.emit({ type: 'zoom-in' });
        }
        else {
            this.resetScale();
            this.events.emit({ type: 'zoom-out' });
        }
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.resetScale = /**
     * @return {?}
     */
    function () {
        this.scale = 1;
        this.moveX = 0;
        this.moveY = 0;
        this.updateInitialValues();
        this.transformElement(this.transitionDuration);
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.updateInitialValues = /**
     * @return {?}
     */
    function () {
        this.initialScale = this.scale;
        this.initialMoveX = this.moveX;
        this.initialMoveY = this.moveY;
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.centeringImage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var img = this.element.getElementsByTagName(this.elementTarget)[0];
        /** @type {?} */
        var initialMoveX = this.moveX;
        /** @type {?} */
        var initialMoveY = this.moveY;
        if (this.moveY > 0) {
            this.moveY = 0;
        }
        if (this.moveX > 0) {
            this.moveX = 0;
        }
        if (img) {
            this.transitionYRestriction();
            this.transitionXRestriction();
        }
        if (img && this.scale < 1) {
            if (this.moveX < this.element.offsetWidth * (1 - this.scale)) {
                this.moveX = this.element.offsetWidth * (1 - this.scale);
            }
        }
        return initialMoveX !== this.moveX || initialMoveY !== this.moveY;
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.alignImage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isMoveChanged = this.centeringImage();
        if (isMoveChanged) {
            this.updateInitialValues();
            this.transformElement(this.transitionDuration);
        }
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.transitionYRestriction = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var imgHeight = this.getImageHeight();
        if (imgHeight * this.scale < this.parentElement.offsetHeight) {
            this.moveY = (this.parentElement.offsetHeight - this.element.offsetHeight * this.scale) / 2;
        }
        else {
            /** @type {?} */
            var imgOffsetTop = ((imgHeight - this.element.offsetHeight) * this.scale) / 2;
            if (this.moveY > imgOffsetTop) {
                this.moveY = imgOffsetTop;
            }
            else if ((imgHeight * this.scale + Math.abs(imgOffsetTop) - this.parentElement.offsetHeight) + this.moveY < 0) {
                this.moveY = -(imgHeight * this.scale + Math.abs(imgOffsetTop) - this.parentElement.offsetHeight);
            }
        }
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.transitionXRestriction = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var imgWidth = this.getImageWidth();
        if (imgWidth * this.scale < this.parentElement.offsetWidth) {
            this.moveX = (this.parentElement.offsetWidth - this.element.offsetWidth * this.scale) / 2;
        }
        else {
            /** @type {?} */
            var imgOffsetLeft = ((imgWidth - this.element.offsetWidth) * this.scale) / 2;
            if (this.moveX > imgOffsetLeft) {
                this.moveX = imgOffsetLeft;
            }
            else if ((imgWidth * this.scale + Math.abs(imgOffsetLeft) - this.parentElement.offsetWidth) + this.moveX < 0) {
                this.moveX = -(imgWidth * this.scale + Math.abs(imgOffsetLeft) - this.parentElement.offsetWidth);
            }
        }
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.getElementPosition = /**
     * @return {?}
     */
    function () {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    };
    /**
     * @param {?} value
     * @param {?=} transitionDuration
     * @return {?}
     */
    PinchZoomComponent.prototype.setMoveX = /**
     * @param {?} value
     * @param {?=} transitionDuration
     * @return {?}
     */
    function (value, transitionDuration) {
        if (transitionDuration === void 0) { transitionDuration = 200; }
        this.moveX = value;
        this.transformElement(transitionDuration);
    };
    /**
     * @param {?} value
     * @param {?=} transitionDuration
     * @return {?}
     */
    PinchZoomComponent.prototype.setMoveY = /**
     * @param {?} value
     * @param {?=} transitionDuration
     * @return {?}
     */
    function (value, transitionDuration) {
        if (transitionDuration === void 0) { transitionDuration = 200; }
        this.moveY = value;
        this.transformElement(transitionDuration);
    };
    PinchZoomComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pinch-zoom, [pinch-zoom]',
                    template: "<div #content \n\t[class.pz-dragging]=\"isDragging\">\n\t<ng-content></ng-content>\n</div>\n\n<div class=\"pz-zoom-button\"\n\t*ngIf=\"zoomButton && !isTouchScreen\"\n\t(click)=\"toggleZoom()\"\n\t[class.pz-zoom-out]=\"scale > 1\">\n</div>",
                    styles: [":host{position:relative}.pz-dragging{cursor:all-scroll}.pz-zoom-button{position:absolute;left:50%;bottom:16px;margin-left:-22px;z-index:1000;color:#fff;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABVUlEQVR4Ae3PAwxQXRgA0Pvbto1sW2NDts0x27atIdeQrakpY8i23cnGe5nn8epDeO1h+VgeVdRVRJLwsCQ101nX2aWJd8OD8a7Ozrkda6UJ8XnPUsBZy43S2Wz7rs8UDnEZCZjn5+tzb6jqCDgucYhDakAnb4Rb+MdmMCPEYSqYfH2cXfPr/ymcBalDFF84izN+uD7TnHCdXqB7iCI/WByuuy1QbrAiRFEL9L3WlObmc/l7uUHfgn0hivqg47VaXMfluQ/A6RBFeTDmnq39D7aEKNKBXfcMVBVMCtFsB0XvFshbVoBSIZqGYL8/wh10B/u8F6L52E6wU7ZwEx/oC6gV4pHVOXDeIPn95WOZ1bYRsD7EJ79D7m4nmO7dEI+fTHC7o7p6h+uh4pJJB0vscMwKQ+X13uXZ6RGh4vKeeQ8c6nWoJiFadCjRFUXzntbeDc/GaxcAotf7cicflKkAAAAASUVORK5CYII=),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABS0lEQVR4Ae3UA8xWfQCG8afPNrNt240N2TbHbNu2hlxDtqamjCHbdr/s5905b9Z1fN/bdfyPfOZl8ZMSGmipggwvL8loqZsAOKaDb2Ir+UZ/t7zITjlio/nWRsBNm03T33KnHiflw4umAlaJ/ziLo6EL4LL04TTZAf3Eea5JYT9YEk60EMyP2mVxE2QP1vzuJm74P4Z+GBgcLCoN1sfYFwdbgkXNwMj7+4V1fnq6n/0DTgWLWoO+9/c7AwD3s+/B9WBRbTAjxj41OBAsygWOxdg3BPMiwTgMKkbtvrQFVAsjagtOSxKlGwxO+Tbc0HEUHFXomfx7IwHNIuFQ0C1w2zilJfOT/JrbC9gdCY/SzonOUbA49Mgknjme56KBvuaxKizy6WODIy7ZYqKSDx6xxUGq8MPeqlirPqs6RKljqwq6ovCq7r6JvBs+cwdLiOaEU9ek1AAAAABJRU5ErkJggg==),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABVUlEQVR4Ae3PAwxQXRgA0Pvbto1sW2NDts0x27atIdeQrakpY8i23cnGe5nn8epDeO1h+VgeVdRVRJLwsCQ101nX2aWJd8OD8a7Ozrkda6UJ8XnPUsBZy43S2Wz7rs8UDnEZCZjn5+tzb6jqCDgucYhDakAnb4Rb+MdmMCPEYSqYfH2cXfPr/ymcBalDFF84izN+uD7TnHCdXqB7iCI/WByuuy1QbrAiRFEL9L3WlObmc/l7uUHfgn0hivqg47VaXMfluQ/A6RBFeTDmnq39D7aEKNKBXfcMVBVMCtFsB0XvFshbVoBSIZqGYL8/wh10B/u8F6L52E6wU7ZwEx/oC6gV4pHVOXDeIPn95WOZ1bYRsD7EJ79D7m4nmO7dEI+fTHC7o7p6h+uh4pJJB0vscMwKQ+X13uXZ6RGh4vKeeQ8c6nWoJiFadCjRFUXzntbeDc/GaxcAotf7cicflKkAAAAASUVORK5CYII=),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABS0lEQVR4Ae3UA8xWfQCG8afPNrNt240N2TbHbNu2hlxDtqamjCHbdr/s5905b9Z1fN/bdfyPfOZl8ZMSGmipggwvL8loqZsAOKaDb2Ir+UZ/t7zITjlio/nWRsBNm03T33KnHiflw4umAlaJ/ziLo6EL4LL04TTZAf3Eea5JYT9YEk60EMyP2mVxE2QP1vzuJm74P4Z+GBgcLCoN1sfYFwdbgkXNwMj7+4V1fnq6n/0DTgWLWoO+9/c7AwD3s+/B9WBRbTAjxj41OBAsygWOxdg3BPMiwTgMKkbtvrQFVAsjagtOSxKlGwxO+Tbc0HEUHFXomfx7IwHNIuFQ0C1w2zilJfOT/JrbC9gdCY/SzonOUbA49Mgknjme56KBvuaxKizy6WODIy7ZYqKSDx6xxUGq8MPeqlirPqs6RKljqwq6ovCq7r6JvBs+cwdLiOaEU9ek1AAAAABJRU5ErkJggg==);background-color:rgba(0,0,0,.8);background-position:center,-1000px;background-repeat:no-repeat,no-repeat;width:56px;height:56px;border-radius:4px;opacity:.5;cursor:pointer;transition:opacity .1s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pz-zoom-button.pz-zoom-out{background-position:-1000px,center}.pz-zoom-button:hover{opacity:.7}"]
                }] }
    ];
    /** @nocollapse */
    PinchZoomComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    PinchZoomComponent.propDecorators = {
        containerHeight: [{ type: Input, args: ['height',] }],
        transitionDuration: [{ type: Input, args: ['transition-duration',] }],
        doubleTap: [{ type: Input, args: ['double-tap',] }],
        doubleTapScale: [{ type: Input, args: ['double-tap-scale',] }],
        zoomButton: [{ type: Input, args: ['zoom-button',] }],
        linearHorizontalSwipe: [{ type: Input, args: ['linear-horizontal-swipe',] }],
        linearVerticalSwipe: [{ type: Input, args: ['linear-vertical-swipe',] }],
        autoZoomOut: [{ type: Input, args: ['auto-zoom-out',] }],
        limitZoom: [{ type: Input, args: ['limit-zoom',] }],
        id: [{ type: Input }],
        events: [{ type: Output }],
        hostDisplay: [{ type: HostBinding, args: ['style.display',] }],
        hostOverflow: [{ type: HostBinding, args: ['style.overflow',] }],
        hostHeight: [{ type: HostBinding, args: ['style.height',] }],
        contentElement: [{ type: ViewChild, args: ['content',] }],
        onMouseEnter: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        onMouseMove: [{ type: HostListener, args: ['window:mousemove', ['$event'],] }],
        onMouseUp: [{ type: HostListener, args: ['window:mouseup', ['$event'],] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
        touchstartHandler: [{ type: HostListener, args: ['touchstart', ['$event'],] }],
        touchmoveHandler: [{ type: HostListener, args: ['touchmove', ['$event'],] }],
        touchendHandler: [{ type: HostListener, args: ['touchend', ['$event'],] }]
    };
    return PinchZoomComponent;
}());
export { PinchZoomComponent };
if (false) {
    /** @type {?} */
    PinchZoomComponent.prototype.i;
    /** @type {?} */
    PinchZoomComponent.prototype.scale;
    /** @type {?} */
    PinchZoomComponent.prototype.initialScale;
    /** @type {?} */
    PinchZoomComponent.prototype._id;
    /** @type {?} */
    PinchZoomComponent.prototype.element;
    /** @type {?} */
    PinchZoomComponent.prototype.elementTarget;
    /** @type {?} */
    PinchZoomComponent.prototype.elementPosition;
    /** @type {?} */
    PinchZoomComponent.prototype.parentElement;
    /** @type {?} */
    PinchZoomComponent.prototype.eventType;
    /** @type {?} */
    PinchZoomComponent.prototype.startX;
    /** @type {?} */
    PinchZoomComponent.prototype.startY;
    /** @type {?} */
    PinchZoomComponent.prototype.startClientX;
    /** @type {?} */
    PinchZoomComponent.prototype.startClientY;
    /** @type {?} */
    PinchZoomComponent.prototype.moveX;
    /** @type {?} */
    PinchZoomComponent.prototype.moveY;
    /** @type {?} */
    PinchZoomComponent.prototype.initialMoveX;
    /** @type {?} */
    PinchZoomComponent.prototype.initialMoveY;
    /** @type {?} */
    PinchZoomComponent.prototype.moveXC;
    /** @type {?} */
    PinchZoomComponent.prototype.moveYC;
    /** @type {?} */
    PinchZoomComponent.prototype.lastTap;
    /** @type {?} */
    PinchZoomComponent.prototype.draggingMode;
    /** @type {?} */
    PinchZoomComponent.prototype.distance;
    /** @type {?} */
    PinchZoomComponent.prototype.doubleTapTimeout;
    /** @type {?} */
    PinchZoomComponent.prototype.initialDistance;
    /** @type {?} */
    PinchZoomComponent.prototype.containerHeight;
    /** @type {?} */
    PinchZoomComponent.prototype.transitionDuration;
    /** @type {?} */
    PinchZoomComponent.prototype.doubleTap;
    /** @type {?} */
    PinchZoomComponent.prototype.doubleTapScale;
    /** @type {?} */
    PinchZoomComponent.prototype.zoomButton;
    /** @type {?} */
    PinchZoomComponent.prototype.linearHorizontalSwipe;
    /** @type {?} */
    PinchZoomComponent.prototype.linearVerticalSwipe;
    /** @type {?} */
    PinchZoomComponent.prototype.autoZoomOut;
    /** @type {?} */
    PinchZoomComponent.prototype.limitZoom;
    /** @type {?} */
    PinchZoomComponent.prototype.events;
    /** @type {?} */
    PinchZoomComponent.prototype.hostDisplay;
    /** @type {?} */
    PinchZoomComponent.prototype.hostOverflow;
    /** @type {?} */
    PinchZoomComponent.prototype.hostHeight;
    /** @type {?} */
    PinchZoomComponent.prototype.contentElement;
    /**
     * @type {?}
     * @private
     */
    PinchZoomComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluY2gtem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtcGluY2gtem9vbS8iLCJzb3VyY2VzIjpbImxpYi9waW5jaC16b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFlBQVksRUFFWixTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFnRUksNEJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUF4RDFDLE1BQUMsR0FBRyxDQUFDLENBQUM7UUFFTixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFjakIsVUFBSyxHQUFRLENBQUMsQ0FBQztRQUNmLFVBQUssR0FBUSxDQUFDLENBQUM7UUFDZixpQkFBWSxHQUFRLENBQUMsQ0FBQztRQUN0QixpQkFBWSxHQUFRLENBQUMsQ0FBQztRQUl0QixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osaUJBQVksR0FBRyxLQUFLLENBQUM7UUFPUyx1QkFBa0IsR0FBRyxHQUFHLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNYLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDTiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDaEMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBVWxDLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQVFoQixDQUFDO0lBaEIvQyxzQkFDSSxrQ0FBRTs7OztRQUdOO1lBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBTkQsVUFDTyxLQUFVO1lBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7Ozs7SUFlRCxxQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFFN0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVzs7O1FBQUcsY0FBTSxPQUFBLEtBQUssRUFBTCxDQUFLLENBQUEsQ0FBQztJQUMzQyxDQUFDO0lBRUQsc0JBQUksNkNBQWE7Ozs7UUFBakI7O2dCQUNRLFFBQVEsR0FBRywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztnQkFDakQsRUFBRTs7OztZQUFHLFVBQVMsS0FBSztnQkFDbkIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUM1QyxDQUFDLENBQUE7WUFFRCxJQUFJLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyxFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQzthQUNmOzs7O2dCQUlHLEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDNUUsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBVTs7OztRQUFkOztnQkFDVSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTs7Z0JBQ2pDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBRXJDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZO29CQUN4RCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzthQUNqRTtZQUNELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWTtvQkFDM0MsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO2FBQ3BEO1FBQ0wsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRzs7Ozs7Ozs7SUFHSCx5Q0FBWTs7Ozs7OztJQURaLFVBQ2EsS0FBaUI7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQzs7Ozs7SUFHRCx3Q0FBVzs7OztJQURYLFVBQ1ksS0FBaUI7UUFDekIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO2dCQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7YUFDMUQ7WUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDYixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzthQUNwQixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTVGLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUI7SUFDTCxDQUFDOzs7OztJQUdELHNDQUFTOzs7O0lBRFQsVUFDVSxLQUFpQjtRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR0Q7O09BRUc7Ozs7Ozs7O0lBR0gscUNBQVE7Ozs7Ozs7SUFEUixVQUNTLEtBQVk7UUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUdELDhDQUFpQjs7OztJQURqQixVQUNrQixLQUFVO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztZQUVsRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ3pFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7U0FDM0U7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBR0QsNkNBQWdCOzs7O0lBRGhCLFVBQ2lCLEtBQVU7O1lBQ2pCLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTztRQUU3QixRQUFRO1FBQ1IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO1lBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7UUFFRCxlQUFlO1FBQ2YsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLEtBQUssa0JBQWtCO1lBQ3JDLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLEVBQUU7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsUUFBUTtRQUNSLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDOzs7OztJQUdELDRDQUFlOzs7O0lBRGYsVUFDZ0IsS0FBVTtRQUN0QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDOztZQUNwQixPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU87UUFFN0IsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUVELGdCQUFnQjtRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7WUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDbEI7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBRXZDLGFBQWE7UUFDYixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDekMsT0FBTztTQUNWO1FBRUQsYUFBYTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtZQUM5QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO1lBQzFELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPO1lBQzFCLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTztZQUMxQixJQUFJLENBQUMsU0FBUyxLQUFLLGtCQUFrQjtZQUNyQyxJQUFJLENBQUMsU0FBUyxLQUFLLGdCQUFnQixFQUFFO1lBQ3JDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzlCO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFFNUIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBR0Q7O09BRUc7Ozs7Ozs7OztJQUVILHFDQUFROzs7Ozs7OztJQUFSLFVBQVMsS0FBYSxFQUFFLE9BQU87UUFDM0IsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUVELG9DQUFPOzs7OztJQUFQLFVBQVEsS0FBYSxFQUFFLE9BQU87UUFDMUIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsd0NBQVc7Ozs7SUFBWCxVQUFZLEtBQVU7UUFDbEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztTQUNyRTtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3BCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksS0FBVTtRQUNsQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7O1lBRWpCLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7O2dCQUUzQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDOztnQkFDckMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQzs7Z0JBQ3JDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUM7O2dCQUNuQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDO1lBRXpDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDcEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsOENBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQVU7UUFDeEIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDMUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO1FBRUQsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRVQsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLGtCQUFrQixFQUFFO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDbEI7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFHO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNiLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDcEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQzs7OztJQUVELDRDQUFlOzs7SUFBZjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFDOztnQkFDdEIsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7O2dCQUNqQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTs7Z0JBQ25DLGtCQUFrQixHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSzs7Z0JBQzVDLG1CQUFtQixHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSzs7Z0JBRTlDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDOztnQkFDM0QsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUM7WUFFbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDOztnQkFFdEIsYUFBYSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSzs7Z0JBQ3ZDLGNBQWMsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFFL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXZFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDOzs7OztJQUdELHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFZO1FBQ3BCLE9BQU8sT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBRUQsOENBQWlCOzs7O0lBQWpCLFVBQWtCLE9BQWtCO1FBQ2hDLE9BQU8sT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBRUQsK0NBQWtCOzs7O0lBQWxCLFVBQW1CLEtBQVU7UUFDekIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLGtCQUFrQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLEVBQUU7O2dCQUN4RSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7Z0JBQ3pFLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRTlFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFO2dCQUM3QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUMzRDtpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUMvRDtTQUNKO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDekI7SUFDTCxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFILENBQUM7Ozs7SUFFRCwyQ0FBYzs7O0lBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUNqRixDQUFDOzs7O0lBRUQsMENBQWE7OztJQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDaEYsQ0FBQzs7OztJQUVELDJDQUFjOzs7SUFBZDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUUzQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFdkMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCwwQ0FBYTs7O0lBQWI7O1lBQ1UsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUV4RSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3RDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUMxQztJQUNMLENBQUM7Ozs7O0lBRUQsNkNBQWdCOzs7O0lBQWhCLFVBQWlCLFFBQWtCO1FBQWxCLHlCQUFBLEVBQUEsYUFBa0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQU8sUUFBUSxPQUFJLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLDBCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBVyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBRyxDQUFDO0lBQ2xILENBQUM7Ozs7SUFFRCwrQ0FBa0I7OztJQUFsQjtRQUFBLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixPQUFPLEtBQUssQ0FBQztTQUNoQjs7WUFFSyxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBQ2xDLFNBQVMsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFNUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXBDLElBQUksU0FBUyxHQUFHLEdBQUcsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTTtZQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVOzs7WUFBQztnQkFDL0IsWUFBWSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztTQUNYO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFTSx1Q0FBVTs7OztJQUFqQixVQUFrQixLQUFrQjtRQUFsQixzQkFBQSxFQUFBLGFBQWtCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFFekIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLGNBQWMsRUFBRTs7b0JBQ3pCLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYztnQkFFM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkg7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzthQUNsRTtZQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDMUM7SUFDTCxDQUFDOzs7O0lBRUQsdUNBQVU7OztJQUFWO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxnREFBbUI7OztJQUFuQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCwyQ0FBYzs7O0lBQWQ7O1lBQ1UsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDOUQsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLOztZQUN6QixZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFFL0IsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDbEI7UUFFRCxJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUQ7U0FDSjtRQUVELE9BQU8sWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVNLHVDQUFVOzs7SUFBakI7O1lBQ1UsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFFM0MsSUFBSSxhQUFhLEVBQUU7WUFDZixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDOzs7O0lBRUQsbURBQXNCOzs7SUFBdEI7O1lBQ1UsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFFdkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRTtZQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvRjthQUFNOztnQkFDRyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBRS9FLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO2FBQzdCO2lCQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQzdHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN0RztTQUNKO0lBQ0wsQ0FBQzs7OztJQUVELG1EQUFzQjs7O0lBQXRCOztZQUNVLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBRXJDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0Y7YUFBTTs7Z0JBQ0csYUFBYSxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUU5RSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxFQUFFO2dCQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQzthQUM5QjtpQkFBTSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUM1RyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDckc7U0FDSjtJQUNMLENBQUM7Ozs7SUFFRCwrQ0FBa0I7OztJQUFsQjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqRixDQUFDOzs7Ozs7SUFFTSxxQ0FBUTs7Ozs7SUFBZixVQUFnQixLQUFhLEVBQUUsa0JBQWdDO1FBQWhDLG1DQUFBLEVBQUEsd0JBQWdDO1FBQzNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVNLHFDQUFROzs7OztJQUFmLFVBQWdCLEtBQWEsRUFBRSxrQkFBZ0M7UUFBaEMsbUNBQUEsRUFBQSx3QkFBZ0M7UUFDM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBdmpCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsMlBBQTBDOztpQkFFN0M7Ozs7Z0JBYkcsVUFBVTs7O2tDQWdEVCxLQUFLLFNBQUMsUUFBUTtxQ0FDZCxLQUFLLFNBQUMscUJBQXFCOzRCQUMzQixLQUFLLFNBQUMsWUFBWTtpQ0FDbEIsS0FBSyxTQUFDLGtCQUFrQjs2QkFDeEIsS0FBSyxTQUFDLGFBQWE7d0NBQ25CLEtBQUssU0FBQyx5QkFBeUI7c0NBQy9CLEtBQUssU0FBQyx1QkFBdUI7OEJBQzdCLEtBQUssU0FBQyxlQUFlOzRCQUNyQixLQUFLLFNBQUMsWUFBWTtxQkFDbEIsS0FBSzt5QkFRTCxNQUFNOzhCQUVOLFdBQVcsU0FBQyxlQUFlOytCQUMzQixXQUFXLFNBQUMsZ0JBQWdCOzZCQUM1QixXQUFXLFNBQUMsY0FBYztpQ0FFMUIsU0FBUyxTQUFDLFNBQVM7K0JBZ0RuQixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQVNwQyxZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBeUIzQyxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBWXpDLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0NBTXhDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7bUNBZXJDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0NBc0JwQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQWlYeEMseUJBQUM7Q0FBQSxBQXhqQkQsSUF3akJDO1NBbGpCWSxrQkFBa0I7OztJQUUzQiwrQkFBTTs7SUFFTixtQ0FBVTs7SUFDViwwQ0FBaUI7O0lBRWpCLGlDQUFTOztJQUNULHFDQUFhOztJQUNiLDJDQUFtQjs7SUFDbkIsNkNBQXFCOztJQUNyQiwyQ0FBbUI7O0lBQ25CLHVDQUFlOztJQUVmLG9DQUFlOztJQUNmLG9DQUFlOztJQUNmLDBDQUFxQjs7SUFDckIsMENBQXFCOztJQUVyQixtQ0FBZTs7SUFDZixtQ0FBZTs7SUFDZiwwQ0FBc0I7O0lBQ3RCLDBDQUFzQjs7SUFDdEIsb0NBQWU7O0lBQ2Ysb0NBQWU7O0lBRWYscUNBQVk7O0lBQ1osMENBQXFCOztJQUVyQixzQ0FBaUI7O0lBQ2pCLDhDQUFzQjs7SUFDdEIsNkNBQXdCOztJQUV4Qiw2Q0FBeUM7O0lBQ3pDLGdEQUF1RDs7SUFDdkQsdUNBQXNDOztJQUN0Qyw0Q0FBOEM7O0lBQzlDLHdDQUF3Qzs7SUFDeEMsbURBQWdFOztJQUNoRSxpREFBNEQ7O0lBQzVELHlDQUE0Qzs7SUFDNUMsdUNBQStCOztJQVMvQixvQ0FBOEQ7O0lBRTlELHlDQUFrRDs7SUFDbEQsMENBQW9EOztJQUNwRCx3Q0FBZ0Q7O0lBRWhELDRDQUFpRDs7Ozs7SUFFckMsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgT25Jbml0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBJbnB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BpbmNoLXpvb20sIFtwaW5jaC16b29tXScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BpbmNoLXpvb20uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3BpbmNoLXpvb20uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUGluY2hab29tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGkgPSAwO1xuXG4gICAgc2NhbGUgPSAxO1xuICAgIGluaXRpYWxTY2FsZSA9IDE7XG5cbiAgICBfaWQ6IGFueTtcbiAgICBlbGVtZW50OiBhbnk7XG4gICAgZWxlbWVudFRhcmdldDogYW55O1xuICAgIGVsZW1lbnRQb3NpdGlvbjogYW55O1xuICAgIHBhcmVudEVsZW1lbnQ6IGFueTtcbiAgICBldmVudFR5cGU6IGFueTtcblxuICAgIHN0YXJ0WDogbnVtYmVyO1xuICAgIHN0YXJ0WTogbnVtYmVyO1xuICAgIHN0YXJ0Q2xpZW50WDogbnVtYmVyO1xuICAgIHN0YXJ0Q2xpZW50WTogbnVtYmVyO1xuXG4gICAgbW92ZVg6IGFueSA9IDA7XG4gICAgbW92ZVk6IGFueSA9IDA7XG4gICAgaW5pdGlhbE1vdmVYOiBhbnkgPSAwO1xuICAgIGluaXRpYWxNb3ZlWTogYW55ID0gMDtcbiAgICBtb3ZlWEM6IG51bWJlcjtcbiAgICBtb3ZlWUM6IG51bWJlcjtcblxuICAgIGxhc3RUYXAgPSAwO1xuICAgIGRyYWdnaW5nTW9kZSA9IGZhbHNlO1xuXG4gICAgZGlzdGFuY2U6IG51bWJlcjtcbiAgICBkb3VibGVUYXBUaW1lb3V0OiBhbnk7XG4gICAgaW5pdGlhbERpc3RhbmNlOiBudW1iZXI7XG5cbiAgICBASW5wdXQoJ2hlaWdodCcpIGNvbnRhaW5lckhlaWdodDogc3RyaW5nO1xuICAgIEBJbnB1dCgndHJhbnNpdGlvbi1kdXJhdGlvbicpIHRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcbiAgICBASW5wdXQoJ2RvdWJsZS10YXAnKSBkb3VibGVUYXAgPSB0cnVlO1xuICAgIEBJbnB1dCgnZG91YmxlLXRhcC1zY2FsZScpIGRvdWJsZVRhcFNjYWxlID0gMjtcbiAgICBASW5wdXQoJ3pvb20tYnV0dG9uJykgem9vbUJ1dHRvbiA9IHRydWU7XG4gICAgQElucHV0KCdsaW5lYXItaG9yaXpvbnRhbC1zd2lwZScpIGxpbmVhckhvcml6b250YWxTd2lwZSA9IGZhbHNlO1xuICAgIEBJbnB1dCgnbGluZWFyLXZlcnRpY2FsLXN3aXBlJykgbGluZWFyVmVydGljYWxTd2lwZSA9IGZhbHNlO1xuICAgIEBJbnB1dCgnYXV0by16b29tLW91dCcpIGF1dG9ab29tT3V0ID0gZmFsc2U7XG4gICAgQElucHV0KCdsaW1pdC16b29tJykgbGltaXRab29tO1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IGlkKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpIGV2ZW50czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGhvc3REaXNwbGF5OiBzdHJpbmc7XG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5vdmVyZmxvdycpIGhvc3RPdmVyZmxvdzogc3RyaW5nO1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JykgaG9zdEhlaWdodDogc3RyaW5nO1xuXG4gICAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmVsZW1lbnRUYXJnZXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignKicpLnRhZ05hbWU7XG5cbiAgICAgICAgdGhpcy5zZXRCYXNpY1N0eWxlcygpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5vbmRyYWdzdGFydCA9ICgpID0+IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBpc1RvdWNoU2NyZWVuKCkge1xuICAgICAgICB2YXIgcHJlZml4ZXMgPSAnIC13ZWJraXQtIC1tb3otIC1vLSAtbXMtICcuc3BsaXQoJyAnKTtcbiAgICAgICAgdmFyIG1xID0gZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbmNsdWRlIHRoZSAnaGVhcnR6JyBhcyBhIHdheSB0byBoYXZlIGEgbm9uIG1hdGNoaW5nIE1RIHRvIGhlbHAgdGVybWluYXRlIHRoZSBqb2luXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0LmlvL3Z6bkZIXG4gICAgICAgIHZhciBxdWVyeSA9IFsnKCcsIHByZWZpeGVzLmpvaW4oJ3RvdWNoLWVuYWJsZWQpLCgnKSwgJ2hlYXJ0eicsICcpJ10uam9pbignJyk7XG4gICAgICAgIHJldHVybiBtcShxdWVyeSk7XG4gICAgfVxuXG4gICAgZ2V0IGlzRHJhZ2dpbmcoKSB7XG4gICAgICAgIGNvbnN0IGltZ0hlaWdodCA9IHRoaXMuZ2V0SW1hZ2VIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgaW1nV2lkdGggPSB0aGlzLmdldEltYWdlV2lkdGgoKTtcblxuICAgICAgICBpZiAodGhpcy5zY2FsZSA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBpbWdIZWlnaHQgKiB0aGlzLnNjYWxlID4gdGhpcy5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCB8fFxuICAgICAgICAgICAgICAgICAgIGltZ1dpZHRoICogdGhpcy5zY2FsZSA+IHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zY2FsZSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGltZ0hlaWdodCA+IHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgfHxcbiAgICAgICAgICAgICAgICAgICBpbWdXaWR0aCA+IHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogRGVza3RvcCBsaXN0ZW5lcnNcbiAgICAgKi9cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gICAgb25Nb3VzZUVudGVyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudFBvc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ01vZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93Om1vdXNlbW92ZScsIFsnJGV2ZW50J10pXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmdNb2RlKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXZlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFggPSBldmVudC5jbGllbnRYIC0gdGhpcy5lbGVtZW50UG9zaXRpb24ubGVmdDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLmVsZW1lbnRQb3NpdGlvbi50b3A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlID0gJ3N3aXBlJztcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzd2lwZScsXG4gICAgICAgICAgICAgICAgbW92ZVg6IHRoaXMubW92ZVgsXG4gICAgICAgICAgICAgICAgbW92ZVk6IHRoaXMubW92ZVlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLm1vdmVYID0gdGhpcy5pbml0aWFsTW92ZVggKyAoKGV2ZW50LmNsaWVudFggLSB0aGlzLmVsZW1lbnRQb3NpdGlvbi5sZWZ0KSAtIHRoaXMuc3RhcnRYKTtcbiAgICAgICAgICAgIHRoaXMubW92ZVkgPSB0aGlzLmluaXRpYWxNb3ZlWSArICgoZXZlbnQuY2xpZW50WSAtIHRoaXMuZWxlbWVudFBvc2l0aW9uLnRvcCkgLSB0aGlzLnN0YXJ0WSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2VudGVyaW5nSW1hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudCgwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzptb3VzZXVwJywgWyckZXZlbnQnXSlcbiAgICBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ01vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVJbml0aWFsVmFsdWVzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRUeXBlID0gJyc7XG4gICAgfVxuXG5cbiAgICAvKlxuICAgICAqIE1vYmlsZSBsaXN0ZW5lcnNcbiAgICAgKi9cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICAgIG9uUmVzaXplKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldEltYWdlV2lkdGgoKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50KHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSlcbiAgICB0b3VjaHN0YXJ0SGFuZGxlcihldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudFBvc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50VHlwZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLmVsZW1lbnRQb3NpdGlvbi5sZWZ0O1xuICAgICAgICAgICAgdGhpcy5zdGFydFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLmVsZW1lbnRQb3NpdGlvbi50b3A7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnRDbGllbnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5lbGVtZW50UG9zaXRpb24ubGVmdDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDbGllbnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5lbGVtZW50UG9zaXRpb24udG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdCh7IHR5cGU6ICd0b3VjaHN0YXJ0JyB9KTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd0b3VjaG1vdmUnLCBbJyRldmVudCddKVxuICAgIHRvdWNobW92ZUhhbmRsZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0b3VjaGVzID0gZXZlbnQudG91Y2hlcztcblxuICAgICAgICAvLyBTd2lwZVxuICAgICAgICBpZiAodGhpcy5kZXRlY3RTd2lwZSh0b3VjaGVzKSB8fCB0aGlzLmV2ZW50VHlwZSA9PT0gJ3N3aXBlJykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTd2lwZShldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaW5lYXIgc3dpcGVcbiAgICAgICAgaWYgKHRoaXMuZGV0ZWN0TGluZWFyU3dpcGUodG91Y2hlcykgfHxcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlID09PSAnaG9yaXpvbnRhbC1zd2lwZScgfHxcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlID09PSAndmVydGljYWwtc3dpcGUnKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUxpbmVhclN3aXBlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBpbmNoXG4gICAgICAgIGlmICh0b3VjaGVzLmxlbmd0aCA9PT0gMiAmJiAhdGhpcy5ldmVudFR5cGUgfHwgdGhpcy5ldmVudFR5cGUgPT09ICdwaW5jaCcpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUGluY2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnLCBbJyRldmVudCddKVxuICAgIHRvdWNoZW5kSGFuZGxlcihldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuaSA9IDA7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdNb2RlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHRvdWNoZXMgPSBldmVudC50b3VjaGVzO1xuXG4gICAgICAgIGlmICh0aGlzLnNjYWxlIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdXRvIFpvb20gT3V0XG4gICAgICAgIGlmICh0aGlzLmF1dG9ab29tT3V0ICYmIHRoaXMuZXZlbnRUeXBlID09PSAncGluY2gnKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoeyB0eXBlOiAndG91Y2hlbmQnIH0pO1xuXG4gICAgICAgIC8vIERvdWJsZSBUYXBcbiAgICAgICAgaWYgKHRoaXMuZG91YmxlVGFwRGV0ZWN0aW9uKCkgJiYgIXRoaXMuZXZlbnRUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVpvb20oZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5ldmVudHMuZW1pdCh7IHR5cGU6ICdkb3VibGUtdGFwJyB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExpbWl0IFpvb21cbiAgICAgICAgaWYgKHRoaXMubGltaXRab29tICYmIHRoaXMuZXZlbnRUeXBlID09PSAncGluY2gnKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUxpbWl0Wm9vbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZXZlbnRUeXBlID09PSAncGluY2gnIHx8IHRoaXMuZXZlbnRUeXBlID09PSAnc3dpcGUnKSB7XG4gICAgICAgICAgICB0aGlzLmFsaWduSW1hZ2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSA9PT0gJ3BpbmNoJyB8fFxuICAgICAgICAgICAgdGhpcy5ldmVudFR5cGUgPT09ICdzd2lwZScgfHxcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlID09PSAnaG9yaXpvbnRhbC1zd2lwZScgfHxcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlID09PSAndmVydGljYWwtc3dpcGUnKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRUeXBlID0gJ3RvdWNoZW5kJztcblxuICAgICAgICBpZiAodG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudFR5cGUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLypcbiAgICAgKiBIYW5kbGVyc1xuICAgICAqL1xuXG4gICAgbW92ZUxlZnQoaW5kZXg6IG51bWJlciwgdG91Y2hlcyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0b3VjaGVzW2luZGV4XS5jbGllbnRYIC0gdGhpcy5lbGVtZW50UG9zaXRpb24ubGVmdDtcbiAgICB9XG5cbiAgICBtb3ZlVG9wKGluZGV4OiBudW1iZXIsIHRvdWNoZXMpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdG91Y2hlc1tpbmRleF0uY2xpZW50WSAtIHRoaXMuZWxlbWVudFBvc2l0aW9uLnRvcDtcbiAgICB9XG5cbiAgICBoYW5kbGVTd2lwZShldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50VHlwZSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLmVsZW1lbnRQb3NpdGlvbi5sZWZ0O1xuICAgICAgICAgICAgdGhpcy5zdGFydFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLmVsZW1lbnRQb3NpdGlvbi50b3A7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50VHlwZSA9ICdzd2lwZSc7XG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoe1xuICAgICAgICAgICAgdHlwZTogJ3N3aXBlJyxcbiAgICAgICAgICAgIG1vdmVYOiB0aGlzLm1vdmVYLFxuICAgICAgICAgICAgbW92ZVk6IHRoaXMubW92ZVlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tb3ZlWCA9IHRoaXMuaW5pdGlhbE1vdmVYICsgKHRoaXMubW92ZUxlZnQoMCwgZXZlbnQudG91Y2hlcykgLSB0aGlzLnN0YXJ0WCk7XG4gICAgICAgIHRoaXMubW92ZVkgPSB0aGlzLmluaXRpYWxNb3ZlWSArICh0aGlzLm1vdmVUb3AoMCwgZXZlbnQudG91Y2hlcykgLSB0aGlzLnN0YXJ0WSk7XG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50KDApO1xuICAgIH1cblxuICAgIGhhbmRsZVBpbmNoKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB0b3VjaGVzID0gZXZlbnQudG91Y2hlcztcblxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRUeXBlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxEaXN0YW5jZSA9IHRoaXMuZ2V0RGlzdGFuY2UodG91Y2hlcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vdmVMZWZ0MCA9IHRoaXMubW92ZUxlZnQoMCwgdG91Y2hlcyk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlTGVmdDEgPSB0aGlzLm1vdmVMZWZ0KDEsIHRvdWNoZXMpO1xuICAgICAgICAgICAgY29uc3QgbW92ZVRvcDAgPSB0aGlzLm1vdmVUb3AoMCwgdG91Y2hlcyk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlVG9wMSA9IHRoaXMubW92ZVRvcCgxLCB0b3VjaGVzKTtcblxuICAgICAgICAgICAgdGhpcy5tb3ZlWEMgPSAoKG1vdmVMZWZ0MCArIG1vdmVMZWZ0MSkgLyAyKSAtIHRoaXMuaW5pdGlhbE1vdmVYO1xuICAgICAgICAgICAgdGhpcy5tb3ZlWUMgPSAoKG1vdmVUb3AwICsgbW92ZVRvcDEpIC8gMikgLSB0aGlzLmluaXRpYWxNb3ZlWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRUeXBlID0gJ3BpbmNoJztcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMuZ2V0RGlzdGFuY2UodG91Y2hlcyk7XG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLmluaXRpYWxTY2FsZSAqICh0aGlzLmRpc3RhbmNlIC8gdGhpcy5pbml0aWFsRGlzdGFuY2UpO1xuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KHsgXG4gICAgICAgICAgICB0eXBlOiAncGluY2gnLCBcbiAgICAgICAgICAgIHNjYWxlOiB0aGlzLnNjYWxlIFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vdmVYID0gdGhpcy5pbml0aWFsTW92ZVggLSAoKCh0aGlzLmRpc3RhbmNlIC8gdGhpcy5pbml0aWFsRGlzdGFuY2UpICogdGhpcy5tb3ZlWEMpIC0gdGhpcy5tb3ZlWEMpO1xuICAgICAgICB0aGlzLm1vdmVZID0gdGhpcy5pbml0aWFsTW92ZVkgLSAoKCh0aGlzLmRpc3RhbmNlIC8gdGhpcy5pbml0aWFsRGlzdGFuY2UpICogdGhpcy5tb3ZlWUMpIC0gdGhpcy5tb3ZlWUMpO1xuXG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudCgwKTtcbiAgICB9XG5cbiAgICBoYW5kbGVMaW5lYXJTd2lwZShldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmxpbmVhclZlcnRpY2FsU3dpcGUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmkrKztcblxuICAgICAgICBpZiAodGhpcy5pID4gMykge1xuICAgICAgICAgICAgdGhpcy5ldmVudFR5cGUgPSB0aGlzLmdldExpbmVhclN3aXBlVHlwZShldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ldmVudFR5cGUgPT09ICdob3Jpem9udGFsLXN3aXBlJykge1xuICAgICAgICAgICAgdGhpcy5tb3ZlWCA9IHRoaXMuaW5pdGlhbE1vdmVYICsgKChldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLmVsZW1lbnRQb3NpdGlvbi5sZWZ0KSAtIHRoaXMuc3RhcnRYKTtcbiAgICAgICAgICAgIHRoaXMubW92ZVkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZXZlbnRUeXBlID09PSAndmVydGljYWwtc3dpcGUnKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVYID0gMDtcbiAgICAgICAgICAgIHRoaXMubW92ZVkgPSB0aGlzLmluaXRpYWxNb3ZlWSArICgoZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5lbGVtZW50UG9zaXRpb24udG9wKSAtIHRoaXMuc3RhcnRZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHMuZW1pdCh7XG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5ldmVudFR5cGUsXG4gICAgICAgICAgICAgICAgbW92ZVg6IHRoaXMubW92ZVgsXG4gICAgICAgICAgICAgICAgbW92ZVk6IHRoaXMubW92ZVlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50KDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlTGltaXRab29tKCl7XG4gICAgICAgIGlmICh0aGlzLnNjYWxlID4gdGhpcy5saW1pdFpvb20pe1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VXaWR0aCA9IHRoaXMuZ2V0SW1hZ2VXaWR0aCgpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VIZWlnaHQgPSB0aGlzLmdldEltYWdlSGVpZ2h0KCk7XG4gICAgICAgICAgICBjb25zdCBlbmxhcmdlZEltYWdlV2lkdGggPSBpbWFnZVdpZHRoICogdGhpcy5zY2FsZTtcbiAgICAgICAgICAgIGNvbnN0IGVubGFyZ2VkSW1hZ2VIZWlnaHQgPSBpbWFnZUhlaWdodCAqIHRoaXMuc2NhbGU7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vdmVYUmF0aW8gPSB0aGlzLm1vdmVYIC8gKGVubGFyZ2VkSW1hZ2VXaWR0aCAtIGltYWdlV2lkdGgpO1xuICAgICAgICAgICAgY29uc3QgbW92ZVlSYXRpbyA9IHRoaXMubW92ZVkgLyAoZW5sYXJnZWRJbWFnZUhlaWdodCAtIGltYWdlSGVpZ2h0KTtcblxuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IHRoaXMubGltaXRab29tO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdJbWFnZVdpZHRoID0gaW1hZ2VXaWR0aCAqIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICBjb25zdCBuZXdJbWFnZUhlaWdodCA9IGltYWdlSGVpZ2h0ICogdGhpcy5zY2FsZTtcblxuICAgICAgICAgICAgdGhpcy5tb3ZlWCA9IC1NYXRoLmFicygobW92ZVhSYXRpbyAqIChuZXdJbWFnZVdpZHRoIC0gaW1hZ2VXaWR0aCkpKTtcbiAgICAgICAgICAgIHRoaXMubW92ZVkgPSAtTWF0aC5hYnMoKC1tb3ZlWVJhdGlvICogKG5ld0ltYWdlSGVpZ2h0IC0gaW1hZ2VIZWlnaHQpKSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2VudGVyaW5nSW1hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudCh0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRldGVjdFN3aXBlKHRvdWNoZXM6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdG91Y2hlcy5sZW5ndGggPT09IDEgJiYgdGhpcy5zY2FsZSA+IDEgJiYgIXRoaXMuZXZlbnRUeXBlO1xuICAgIH1cblxuICAgIGRldGVjdExpbmVhclN3aXBlKHRvdWNoZXM6IFRvdWNoTGlzdCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdG91Y2hlcy5sZW5ndGggPT09IDEgJiYgdGhpcy5zY2FsZSA9PT0gMSAmJiAhdGhpcy5ldmVudFR5cGU7XG4gICAgfVxuXG4gICAgZ2V0TGluZWFyU3dpcGVUeXBlKGV2ZW50OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5ldmVudFR5cGUgIT09ICdob3Jpem9udGFsLXN3aXBlJyAmJiB0aGlzLmV2ZW50VHlwZSAhPT0gJ3ZlcnRpY2FsLXN3aXBlJykge1xuICAgICAgICAgICAgY29uc3QgbW92ZW1lbnRYID0gTWF0aC5hYnModGhpcy5tb3ZlTGVmdCgwLCBldmVudC50b3VjaGVzKSAtIHRoaXMuc3RhcnRDbGllbnRYKTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVtZW50WSA9IE1hdGguYWJzKHRoaXMubW92ZVRvcCgwLCBldmVudC50b3VjaGVzKSAtIHRoaXMuc3RhcnRDbGllbnRZKTtcblxuICAgICAgICAgICAgaWYgKChtb3ZlbWVudFkgKiAzKSA+IG1vdmVtZW50WCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmVhclZlcnRpY2FsU3dpcGUgPyAndmVydGljYWwtc3dpcGUnIDogJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmVhckhvcml6b250YWxTd2lwZSA/ICdob3Jpem9udGFsLXN3aXBlJyA6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRUeXBlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGlzdGFuY2UodG91Y2hlczogYW55KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codG91Y2hlc1swXS5wYWdlWCAtIHRvdWNoZXNbMV0ucGFnZVgsIDIpICsgTWF0aC5wb3codG91Y2hlc1swXS5wYWdlWSAtIHRvdWNoZXNbMV0ucGFnZVksIDIpKTtcbiAgICB9XG5cbiAgICBnZXRJbWFnZUhlaWdodCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRoaXMuZWxlbWVudFRhcmdldClbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIGdldEltYWdlV2lkdGgoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0aGlzLmVsZW1lbnRUYXJnZXQpWzBdLm9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIHNldEJhc2ljU3R5bGVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnMCAwJztcblxuICAgICAgICB0aGlzLmhvc3REaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5ob3N0T3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgdGhpcy5ob3N0SGVpZ2h0ID0gdGhpcy5jb250YWluZXJIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5zZXRJbWFnZVdpZHRoKCk7XG4gICAgfVxuXG4gICAgc2V0SW1hZ2VXaWR0aCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW1nRWxlbWVudCA9IHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0aGlzLmVsZW1lbnRUYXJnZXQpO1xuXG4gICAgICAgIGlmIChpbWdFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgaW1nRWxlbWVudFswXS5zdHlsZS5tYXhXaWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgIGltZ0VsZW1lbnRbMF0uc3R5bGUubWF4SGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtRWxlbWVudChkdXJhdGlvbjogYW55ID0gNTApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgYWxsICR7ZHVyYXRpb259bXNgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYFxuICAgICAgICAgICAgbWF0cml4KCR7TnVtYmVyKHRoaXMuc2NhbGUpfSwgMCwgMCwgJHtOdW1iZXIodGhpcy5zY2FsZSl9LCAke051bWJlcih0aGlzLm1vdmVYKX0sICR7TnVtYmVyKHRoaXMubW92ZVkpfSlgO1xuICAgIH1cblxuICAgIGRvdWJsZVRhcERldGVjdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLmRvdWJsZVRhcCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgdGFwTGVuZ3RoID0gY3VycmVudFRpbWUgLSB0aGlzLmxhc3RUYXA7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZG91YmxlVGFwVGltZW91dCk7XG5cbiAgICAgICAgaWYgKHRhcExlbmd0aCA8IDMwMCAmJiB0YXBMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG91YmxlVGFwVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRvdWJsZVRhcFRpbWVvdXQpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RUYXAgPSBjdXJyZW50VGltZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlWm9vbShldmVudDogYW55ID0gZmFsc2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbFNjYWxlID09PSAxKSB7XG5cbiAgICAgICAgICAgIGlmIChldmVudCAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlID0gdGhpcy5pbml0aWFsU2NhbGUgKiB0aGlzLmRvdWJsZVRhcFNjYWxlO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVggPSB0aGlzLmluaXRpYWxNb3ZlWCAtIChjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICogKHRoaXMuZG91YmxlVGFwU2NhbGUgLSAxKSAtIHRoaXMuZWxlbWVudFBvc2l0aW9uLmxlZnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVkgPSB0aGlzLmluaXRpYWxNb3ZlWSAtIChjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZICogKHRoaXMuZG91YmxlVGFwU2NhbGUgLSAxKSAtIHRoaXMuZWxlbWVudFBvc2l0aW9uLnRvcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLmluaXRpYWxTY2FsZSAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlWCA9IHRoaXMuaW5pdGlhbE1vdmVYIC0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVZID0gdGhpcy5pbml0aWFsTW92ZVkgLSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jZW50ZXJpbmdJbWFnZSgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJbml0aWFsVmFsdWVzKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnQodGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5ldmVudHMuZW1pdCh7IHR5cGU6ICd6b29tLWluJyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTY2FsZSgpO1xuICAgICAgICAgICAgdGhpcy5ldmVudHMuZW1pdCh7IHR5cGU6ICd6b29tLW91dCcgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldFNjYWxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5tb3ZlWCA9IDA7XG4gICAgICAgIHRoaXMubW92ZVkgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50KHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGVJbml0aWFsVmFsdWVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRpYWxTY2FsZSA9IHRoaXMuc2NhbGU7XG4gICAgICAgIHRoaXMuaW5pdGlhbE1vdmVYID0gdGhpcy5tb3ZlWDtcbiAgICAgICAgdGhpcy5pbml0aWFsTW92ZVkgPSB0aGlzLm1vdmVZO1xuICAgIH1cblxuICAgIGNlbnRlcmluZ0ltYWdlKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBpbWcgPSB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGhpcy5lbGVtZW50VGFyZ2V0KVswXTtcbiAgICAgICAgY29uc3QgaW5pdGlhbE1vdmVYID0gdGhpcy5tb3ZlWDtcbiAgICAgICAgY29uc3QgaW5pdGlhbE1vdmVZID0gdGhpcy5tb3ZlWTtcblxuICAgICAgICBpZiAodGhpcy5tb3ZlWSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1vdmVYID4gMCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlWCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW1nKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25ZUmVzdHJpY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvblhSZXN0cmljdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbWcgJiYgdGhpcy5zY2FsZSA8IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdmVYIDwgdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoICogKDEgLSB0aGlzLnNjYWxlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGggKiAoMSAtIHRoaXMuc2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluaXRpYWxNb3ZlWCAhPT0gdGhpcy5tb3ZlWCB8fCBpbml0aWFsTW92ZVkgIT09IHRoaXMubW92ZVk7XG4gICAgfVxuXG4gICAgcHVibGljIGFsaWduSW1hZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzTW92ZUNoYW5nZWQgPSB0aGlzLmNlbnRlcmluZ0ltYWdlKCk7XG5cbiAgICAgICAgaWYgKGlzTW92ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5pdGlhbFZhbHVlcygpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50KHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zaXRpb25ZUmVzdHJpY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGltZ0hlaWdodCA9IHRoaXMuZ2V0SW1hZ2VIZWlnaHQoKTtcblxuICAgICAgICBpZiAoaW1nSGVpZ2h0ICogdGhpcy5zY2FsZSA8IHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVkgPSAodGhpcy5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCAtIHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQgKiB0aGlzLnNjYWxlKSAvIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbWdPZmZzZXRUb3AgPSAoKGltZ0hlaWdodCAtIHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQpICogdGhpcy5zY2FsZSkgLyAyO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tb3ZlWSA+IGltZ09mZnNldFRvcCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVkgPSBpbWdPZmZzZXRUb3A7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChpbWdIZWlnaHQgKiB0aGlzLnNjYWxlICsgTWF0aC5hYnMoaW1nT2Zmc2V0VG9wKSAtIHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQpICsgdGhpcy5tb3ZlWSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVZID0gLSAoaW1nSGVpZ2h0ICogdGhpcy5zY2FsZSArIE1hdGguYWJzKGltZ09mZnNldFRvcCkgLSB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zaXRpb25YUmVzdHJpY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGltZ1dpZHRoID0gdGhpcy5nZXRJbWFnZVdpZHRoKCk7XG5cbiAgICAgICAgaWYgKGltZ1dpZHRoICogdGhpcy5zY2FsZSA8IHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlWCA9ICh0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggLSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGggKiB0aGlzLnNjYWxlKSAvIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbWdPZmZzZXRMZWZ0ID0gKChpbWdXaWR0aCAtIHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCkgKiB0aGlzLnNjYWxlKSAvIDI7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1vdmVYID4gaW1nT2Zmc2V0TGVmdCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVggPSBpbWdPZmZzZXRMZWZ0O1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoaW1nV2lkdGggKiB0aGlzLnNjYWxlICsgTWF0aC5hYnMoaW1nT2Zmc2V0TGVmdCkgLSB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGgpICsgdGhpcy5tb3ZlWCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVYID0gLSAoaW1nV2lkdGggKiB0aGlzLnNjYWxlICsgTWF0aC5hYnMoaW1nT2Zmc2V0TGVmdCkgLSB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RWxlbWVudFBvc2l0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsZW1lbnRQb3NpdGlvbiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRNb3ZlWCh2YWx1ZTogbnVtYmVyLCB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciA9IDIwMCkge1xuICAgICAgICB0aGlzLm1vdmVYID0gdmFsdWU7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRNb3ZlWSh2YWx1ZTogbnVtYmVyLCB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciA9IDIwMCkge1xuICAgICAgICB0aGlzLm1vdmVZID0gdmFsdWU7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH1cbn1cbiJdfQ==