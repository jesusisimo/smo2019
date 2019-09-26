/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, ElementRef, HostListener, ViewChild, Input, EventEmitter, Output } from '@angular/core';
export class PinchZoomComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value;
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.element = this.contentElement.nativeElement;
        this.parentElement = this.elementRef.nativeElement;
        this.elementTarget = this.element.querySelector('*').tagName;
        this.setBasicStyles();
        this.element.ondragstart = (/**
         * @return {?}
         */
        () => false);
    }
    /**
     * @return {?}
     */
    get isTouchScreen() {
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
    }
    /**
     * @return {?}
     */
    get isDragging() {
        /** @type {?} */
        const imgHeight = this.getImageHeight();
        /** @type {?} */
        const imgWidth = this.getImageWidth();
        if (this.scale > 1) {
            return imgHeight * this.scale > this.parentElement.offsetHeight ||
                imgWidth * this.scale > this.parentElement.offsetWidth;
        }
        if (this.scale === 1) {
            return imgHeight > this.parentElement.offsetHeight ||
                imgWidth > this.parentElement.offsetWidth;
        }
    }
    /*
         * Desktop listeners
         */
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseEnter(event) {
        this.getElementPosition();
        if (this.isDragging) {
            this.draggingMode = true;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseMove(event) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseUp(event) {
        this.draggingMode = false;
        this.updateInitialValues();
        this.eventType = '';
    }
    /*
         * Mobile listeners
         */
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.setImageWidth();
        this.transformElement(this.transitionDuration);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    touchstartHandler(event) {
        this.getElementPosition();
        if (!this.eventType) {
            this.startX = event.touches[0].clientX - this.elementPosition.left;
            this.startY = event.touches[0].clientY - this.elementPosition.top;
            this.startClientX = event.touches[0].clientX - this.elementPosition.left;
            this.startClientY = event.touches[0].clientY - this.elementPosition.top;
        }
        this.events.emit({ type: 'touchstart' });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    touchmoveHandler(event) {
        /** @type {?} */
        const touches = event.touches;
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    touchendHandler(event) {
        this.i = 0;
        this.draggingMode = false;
        /** @type {?} */
        const touches = event.touches;
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
    }
    /*
         * Handlers
         */
    /**
     * @param {?} index
     * @param {?} touches
     * @return {?}
     */
    moveLeft(index, touches) {
        return touches[index].clientX - this.elementPosition.left;
    }
    /**
     * @param {?} index
     * @param {?} touches
     * @return {?}
     */
    moveTop(index, touches) {
        return touches[index].clientY - this.elementPosition.top;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleSwipe(event) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handlePinch(event) {
        event.preventDefault();
        /** @type {?} */
        const touches = event.touches;
        if (!this.eventType) {
            this.initialDistance = this.getDistance(touches);
            /** @type {?} */
            const moveLeft0 = this.moveLeft(0, touches);
            /** @type {?} */
            const moveLeft1 = this.moveLeft(1, touches);
            /** @type {?} */
            const moveTop0 = this.moveTop(0, touches);
            /** @type {?} */
            const moveTop1 = this.moveTop(1, touches);
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleLinearSwipe(event) {
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
    }
    /**
     * @return {?}
     */
    handleLimitZoom() {
        if (this.scale > this.limitZoom) {
            /** @type {?} */
            const imageWidth = this.getImageWidth();
            /** @type {?} */
            const imageHeight = this.getImageHeight();
            /** @type {?} */
            const enlargedImageWidth = imageWidth * this.scale;
            /** @type {?} */
            const enlargedImageHeight = imageHeight * this.scale;
            /** @type {?} */
            const moveXRatio = this.moveX / (enlargedImageWidth - imageWidth);
            /** @type {?} */
            const moveYRatio = this.moveY / (enlargedImageHeight - imageHeight);
            this.scale = this.limitZoom;
            /** @type {?} */
            const newImageWidth = imageWidth * this.scale;
            /** @type {?} */
            const newImageHeight = imageHeight * this.scale;
            this.moveX = -Math.abs((moveXRatio * (newImageWidth - imageWidth)));
            this.moveY = -Math.abs((-moveYRatio * (newImageHeight - imageHeight)));
            this.centeringImage();
            this.transformElement(this.transitionDuration);
        }
    }
    /**
     * @param {?} touches
     * @return {?}
     */
    detectSwipe(touches) {
        return touches.length === 1 && this.scale > 1 && !this.eventType;
    }
    /**
     * @param {?} touches
     * @return {?}
     */
    detectLinearSwipe(touches) {
        return touches.length === 1 && this.scale === 1 && !this.eventType;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getLinearSwipeType(event) {
        if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
            /** @type {?} */
            const movementX = Math.abs(this.moveLeft(0, event.touches) - this.startClientX);
            /** @type {?} */
            const movementY = Math.abs(this.moveTop(0, event.touches) - this.startClientY);
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
    }
    /**
     * @param {?} touches
     * @return {?}
     */
    getDistance(touches) {
        return Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2));
    }
    /**
     * @return {?}
     */
    getImageHeight() {
        return this.element.getElementsByTagName(this.elementTarget)[0].offsetHeight;
    }
    /**
     * @return {?}
     */
    getImageWidth() {
        return this.element.getElementsByTagName(this.elementTarget)[0].offsetWidth;
    }
    /**
     * @return {?}
     */
    setBasicStyles() {
        this.element.style.display = 'flex';
        this.element.style.height = '100%';
        this.element.style.alignItems = 'center';
        this.element.style.justifyContent = 'center';
        this.element.style.transformOrigin = '0 0';
        this.hostDisplay = 'block';
        this.hostOverflow = 'hidden';
        this.hostHeight = this.containerHeight;
        this.setImageWidth();
    }
    /**
     * @return {?}
     */
    setImageWidth() {
        /** @type {?} */
        const imgElement = this.element.getElementsByTagName(this.elementTarget);
        if (imgElement.length) {
            imgElement[0].style.maxWidth = '100%';
            imgElement[0].style.maxHeight = '100%';
        }
    }
    /**
     * @param {?=} duration
     * @return {?}
     */
    transformElement(duration = 50) {
        this.element.style.transition = `all ${duration}ms`;
        this.element.style.transform = `
            matrix(${Number(this.scale)}, 0, 0, ${Number(this.scale)}, ${Number(this.moveX)}, ${Number(this.moveY)})`;
    }
    /**
     * @return {?}
     */
    doubleTapDetection() {
        if (!this.doubleTap) {
            return false;
        }
        /** @type {?} */
        const currentTime = new Date().getTime();
        /** @type {?} */
        const tapLength = currentTime - this.lastTap;
        clearTimeout(this.doubleTapTimeout);
        if (tapLength < 300 && tapLength > 0) {
            return true;
        }
        else {
            this.doubleTapTimeout = setTimeout((/**
             * @return {?}
             */
            () => {
                clearTimeout(this.doubleTapTimeout);
            }), 300);
        }
        this.lastTap = currentTime;
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    toggleZoom(event = false) {
        if (this.initialScale === 1) {
            if (event && event.changedTouches) {
                /** @type {?} */
                const changedTouches = event.changedTouches;
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
    }
    /**
     * @return {?}
     */
    resetScale() {
        this.scale = 1;
        this.moveX = 0;
        this.moveY = 0;
        this.updateInitialValues();
        this.transformElement(this.transitionDuration);
    }
    /**
     * @return {?}
     */
    updateInitialValues() {
        this.initialScale = this.scale;
        this.initialMoveX = this.moveX;
        this.initialMoveY = this.moveY;
    }
    /**
     * @return {?}
     */
    centeringImage() {
        /** @type {?} */
        const img = this.element.getElementsByTagName(this.elementTarget)[0];
        /** @type {?} */
        const initialMoveX = this.moveX;
        /** @type {?} */
        const initialMoveY = this.moveY;
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
    }
    /**
     * @return {?}
     */
    alignImage() {
        /** @type {?} */
        const isMoveChanged = this.centeringImage();
        if (isMoveChanged) {
            this.updateInitialValues();
            this.transformElement(this.transitionDuration);
        }
    }
    /**
     * @return {?}
     */
    transitionYRestriction() {
        /** @type {?} */
        const imgHeight = this.getImageHeight();
        if (imgHeight * this.scale < this.parentElement.offsetHeight) {
            this.moveY = (this.parentElement.offsetHeight - this.element.offsetHeight * this.scale) / 2;
        }
        else {
            /** @type {?} */
            const imgOffsetTop = ((imgHeight - this.element.offsetHeight) * this.scale) / 2;
            if (this.moveY > imgOffsetTop) {
                this.moveY = imgOffsetTop;
            }
            else if ((imgHeight * this.scale + Math.abs(imgOffsetTop) - this.parentElement.offsetHeight) + this.moveY < 0) {
                this.moveY = -(imgHeight * this.scale + Math.abs(imgOffsetTop) - this.parentElement.offsetHeight);
            }
        }
    }
    /**
     * @return {?}
     */
    transitionXRestriction() {
        /** @type {?} */
        const imgWidth = this.getImageWidth();
        if (imgWidth * this.scale < this.parentElement.offsetWidth) {
            this.moveX = (this.parentElement.offsetWidth - this.element.offsetWidth * this.scale) / 2;
        }
        else {
            /** @type {?} */
            const imgOffsetLeft = ((imgWidth - this.element.offsetWidth) * this.scale) / 2;
            if (this.moveX > imgOffsetLeft) {
                this.moveX = imgOffsetLeft;
            }
            else if ((imgWidth * this.scale + Math.abs(imgOffsetLeft) - this.parentElement.offsetWidth) + this.moveX < 0) {
                this.moveX = -(imgWidth * this.scale + Math.abs(imgOffsetLeft) - this.parentElement.offsetWidth);
            }
        }
    }
    /**
     * @return {?}
     */
    getElementPosition() {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    }
    /**
     * @param {?} value
     * @param {?=} transitionDuration
     * @return {?}
     */
    setMoveX(value, transitionDuration = 200) {
        this.moveX = value;
        this.transformElement(transitionDuration);
    }
    /**
     * @param {?} value
     * @param {?=} transitionDuration
     * @return {?}
     */
    setMoveY(value, transitionDuration = 200) {
        this.moveY = value;
        this.transformElement(transitionDuration);
    }
}
PinchZoomComponent.decorators = [
    { type: Component, args: [{
                selector: 'pinch-zoom, [pinch-zoom]',
                template: "<div #content \n\t[class.pz-dragging]=\"isDragging\">\n\t<ng-content></ng-content>\n</div>\n\n<div class=\"pz-zoom-button\"\n\t*ngIf=\"zoomButton && !isTouchScreen\"\n\t(click)=\"toggleZoom()\"\n\t[class.pz-zoom-out]=\"scale > 1\">\n</div>",
                styles: [":host{position:relative}.pz-dragging{cursor:all-scroll}.pz-zoom-button{position:absolute;left:50%;bottom:16px;margin-left:-22px;z-index:1000;color:#fff;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABVUlEQVR4Ae3PAwxQXRgA0Pvbto1sW2NDts0x27atIdeQrakpY8i23cnGe5nn8epDeO1h+VgeVdRVRJLwsCQ101nX2aWJd8OD8a7Ozrkda6UJ8XnPUsBZy43S2Wz7rs8UDnEZCZjn5+tzb6jqCDgucYhDakAnb4Rb+MdmMCPEYSqYfH2cXfPr/ymcBalDFF84izN+uD7TnHCdXqB7iCI/WByuuy1QbrAiRFEL9L3WlObmc/l7uUHfgn0hivqg47VaXMfluQ/A6RBFeTDmnq39D7aEKNKBXfcMVBVMCtFsB0XvFshbVoBSIZqGYL8/wh10B/u8F6L52E6wU7ZwEx/oC6gV4pHVOXDeIPn95WOZ1bYRsD7EJ79D7m4nmO7dEI+fTHC7o7p6h+uh4pJJB0vscMwKQ+X13uXZ6RGh4vKeeQ8c6nWoJiFadCjRFUXzntbeDc/GaxcAotf7cicflKkAAAAASUVORK5CYII=),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABS0lEQVR4Ae3UA8xWfQCG8afPNrNt240N2TbHbNu2hlxDtqamjCHbdr/s5905b9Z1fN/bdfyPfOZl8ZMSGmipggwvL8loqZsAOKaDb2Ir+UZ/t7zITjlio/nWRsBNm03T33KnHiflw4umAlaJ/ziLo6EL4LL04TTZAf3Eea5JYT9YEk60EMyP2mVxE2QP1vzuJm74P4Z+GBgcLCoN1sfYFwdbgkXNwMj7+4V1fnq6n/0DTgWLWoO+9/c7AwD3s+/B9WBRbTAjxj41OBAsygWOxdg3BPMiwTgMKkbtvrQFVAsjagtOSxKlGwxO+Tbc0HEUHFXomfx7IwHNIuFQ0C1w2zilJfOT/JrbC9gdCY/SzonOUbA49Mgknjme56KBvuaxKizy6WODIy7ZYqKSDx6xxUGq8MPeqlirPqs6RKljqwq6ovCq7r6JvBs+cwdLiOaEU9ek1AAAAABJRU5ErkJggg==),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABVUlEQVR4Ae3PAwxQXRgA0Pvbto1sW2NDts0x27atIdeQrakpY8i23cnGe5nn8epDeO1h+VgeVdRVRJLwsCQ101nX2aWJd8OD8a7Ozrkda6UJ8XnPUsBZy43S2Wz7rs8UDnEZCZjn5+tzb6jqCDgucYhDakAnb4Rb+MdmMCPEYSqYfH2cXfPr/ymcBalDFF84izN+uD7TnHCdXqB7iCI/WByuuy1QbrAiRFEL9L3WlObmc/l7uUHfgn0hivqg47VaXMfluQ/A6RBFeTDmnq39D7aEKNKBXfcMVBVMCtFsB0XvFshbVoBSIZqGYL8/wh10B/u8F6L52E6wU7ZwEx/oC6gV4pHVOXDeIPn95WOZ1bYRsD7EJ79D7m4nmO7dEI+fTHC7o7p6h+uh4pJJB0vscMwKQ+X13uXZ6RGh4vKeeQ8c6nWoJiFadCjRFUXzntbeDc/GaxcAotf7cicflKkAAAAASUVORK5CYII=),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABS0lEQVR4Ae3UA8xWfQCG8afPNrNt240N2TbHbNu2hlxDtqamjCHbdr/s5905b9Z1fN/bdfyPfOZl8ZMSGmipggwvL8loqZsAOKaDb2Ir+UZ/t7zITjlio/nWRsBNm03T33KnHiflw4umAlaJ/ziLo6EL4LL04TTZAf3Eea5JYT9YEk60EMyP2mVxE2QP1vzuJm74P4Z+GBgcLCoN1sfYFwdbgkXNwMj7+4V1fnq6n/0DTgWLWoO+9/c7AwD3s+/B9WBRbTAjxj41OBAsygWOxdg3BPMiwTgMKkbtvrQFVAsjagtOSxKlGwxO+Tbc0HEUHFXomfx7IwHNIuFQ0C1w2zilJfOT/JrbC9gdCY/SzonOUbA49Mgknjme56KBvuaxKizy6WODIy7ZYqKSDx6xxUGq8MPeqlirPqs6RKljqwq6ovCq7r6JvBs+cwdLiOaEU9ek1AAAAABJRU5ErkJggg==);background-color:rgba(0,0,0,.8);background-position:center,-1000px;background-repeat:no-repeat,no-repeat;width:56px;height:56px;border-radius:4px;opacity:.5;cursor:pointer;transition:opacity .1s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pz-zoom-button.pz-zoom-out{background-position:-1000px,center}.pz-zoom-button:hover{opacity:.7}"]
            }] }
];
/** @nocollapse */
PinchZoomComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluY2gtem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtcGluY2gtem9vbS8iLCJzb3VyY2VzIjpbImxpYi9waW5jaC16b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFlBQVksRUFFWixTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFRdkIsTUFBTSxPQUFPLGtCQUFrQjs7OztJQTBEM0IsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXhEMUMsTUFBQyxHQUFHLENBQUMsQ0FBQztRQUVOLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQWNqQixVQUFLLEdBQVEsQ0FBQyxDQUFDO1FBQ2YsVUFBSyxHQUFRLENBQUMsQ0FBQztRQUNmLGlCQUFZLEdBQVEsQ0FBQyxDQUFDO1FBQ3RCLGlCQUFZLEdBQVEsQ0FBQyxDQUFDO1FBSXRCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQU9TLHVCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUNsQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ1gsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNOLDBCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNoQyx3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDcEMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFVbEMsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBUWhCLENBQUM7Ozs7O0lBaEIvQyxJQUNJLEVBQUUsQ0FBQyxLQUFVO1FBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUNELElBQUksRUFBRTtRQUNG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c3RCaW5kaW5nLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIE9uSW5pdCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgSW5wdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwaW5jaC16b29tLCBbcGluY2gtem9vbV0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9waW5jaC16b29tLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9waW5jaC16b29tLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFBpbmNoWm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpID0gMDtcblxuICAgIHNjYWxlID0gMTtcbiAgICBpbml0aWFsU2NhbGUgPSAxO1xuXG4gICAgX2lkOiBhbnk7XG4gICAgZWxlbWVudDogYW55O1xuICAgIGVsZW1lbnRUYXJnZXQ6IGFueTtcbiAgICBlbGVtZW50UG9zaXRpb246IGFueTtcbiAgICBwYXJlbnRFbGVtZW50OiBhbnk7XG4gICAgZXZlbnRUeXBlOiBhbnk7XG5cbiAgICBzdGFydFg6IG51bWJlcjtcbiAgICBzdGFydFk6IG51bWJlcjtcbiAgICBzdGFydENsaWVudFg6IG51bWJlcjtcbiAgICBzdGFydENsaWVudFk6IG51bWJlcjtcblxuICAgIG1vdmVYOiBhbnkgPSAwO1xuICAgIG1vdmVZOiBhbnkgPSAwO1xuICAgIGluaXRpYWxNb3ZlWDogYW55ID0gMDtcbiAgICBpbml0aWFsTW92ZVk6IGFueSA9IDA7XG4gICAgbW92ZVhDOiBudW1iZXI7XG4gICAgbW92ZVlDOiBudW1iZXI7XG5cbiAgICBsYXN0VGFwID0gMDtcbiAgICBkcmFnZ2luZ01vZGUgPSBmYWxzZTtcblxuICAgIGRpc3RhbmNlOiBudW1iZXI7XG4gICAgZG91YmxlVGFwVGltZW91dDogYW55O1xuICAgIGluaXRpYWxEaXN0YW5jZTogbnVtYmVyO1xuXG4gICAgQElucHV0KCdoZWlnaHQnKSBjb250YWluZXJIZWlnaHQ6IHN0cmluZztcbiAgICBASW5wdXQoJ3RyYW5zaXRpb24tZHVyYXRpb24nKSB0cmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG4gICAgQElucHV0KCdkb3VibGUtdGFwJykgZG91YmxlVGFwID0gdHJ1ZTtcbiAgICBASW5wdXQoJ2RvdWJsZS10YXAtc2NhbGUnKSBkb3VibGVUYXBTY2FsZSA9IDI7XG4gICAgQElucHV0KCd6b29tLWJ1dHRvbicpIHpvb21CdXR0b24gPSB0cnVlO1xuICAgIEBJbnB1dCgnbGluZWFyLWhvcml6b250YWwtc3dpcGUnKSBsaW5lYXJIb3Jpem9udGFsU3dpcGUgPSBmYWxzZTtcbiAgICBASW5wdXQoJ2xpbmVhci12ZXJ0aWNhbC1zd2lwZScpIGxpbmVhclZlcnRpY2FsU3dpcGUgPSBmYWxzZTtcbiAgICBASW5wdXQoJ2F1dG8tem9vbS1vdXQnKSBhdXRvWm9vbU91dCA9IGZhbHNlO1xuICAgIEBJbnB1dCgnbGltaXQtem9vbScpIGxpbWl0Wm9vbTtcbiAgICBASW5wdXQoKVxuICAgIHNldCBpZCh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKSBldmVudHM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBob3N0RGlzcGxheTogc3RyaW5nO1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUub3ZlcmZsb3cnKSBob3N0T3ZlcmZsb3c6IHN0cmluZztcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpIGhvc3RIZWlnaHQ6IHN0cmluZztcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5lbGVtZW50VGFyZ2V0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyonKS50YWdOYW1lO1xuXG4gICAgICAgIHRoaXMuc2V0QmFzaWNTdHlsZXMoKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQub25kcmFnc3RhcnQgPSAoKSA9PiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgaXNUb3VjaFNjcmVlbigpIHtcbiAgICAgICAgdmFyIHByZWZpeGVzID0gJyAtd2Via2l0LSAtbW96LSAtby0gLW1zLSAnLnNwbGl0KCcgJyk7XG4gICAgICAgIHZhciBtcSA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW5jbHVkZSB0aGUgJ2hlYXJ0eicgYXMgYSB3YXkgdG8gaGF2ZSBhIG5vbiBtYXRjaGluZyBNUSB0byBoZWxwIHRlcm1pbmF0ZSB0aGUgam9pblxuICAgICAgICAvLyBodHRwczovL2dpdC5pby92em5GSFxuICAgICAgICB2YXIgcXVlcnkgPSBbJygnLCBwcmVmaXhlcy5qb2luKCd0b3VjaC1lbmFibGVkKSwoJyksICdoZWFydHonLCAnKSddLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gbXEocXVlcnkpO1xuICAgIH1cblxuICAgIGdldCBpc0RyYWdnaW5nKCkge1xuICAgICAgICBjb25zdCBpbWdIZWlnaHQgPSB0aGlzLmdldEltYWdlSGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGltZ1dpZHRoID0gdGhpcy5nZXRJbWFnZVdpZHRoKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2NhbGUgPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gaW1nSGVpZ2h0ICogdGhpcy5zY2FsZSA+IHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgfHxcbiAgICAgICAgICAgICAgICAgICBpbWdXaWR0aCAqIHRoaXMuc2NhbGUgPiB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2NhbGUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBpbWdIZWlnaHQgPiB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8XG4gICAgICAgICAgICAgICAgICAgaW1nV2lkdGggPiB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIERlc2t0b3AgbGlzdGVuZXJzXG4gICAgICovXG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICAgIG9uTW91c2VFbnRlcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnRQb3NpdGlvbigpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdNb2RlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzptb3VzZW1vdmUnLCBbJyRldmVudCddKVxuICAgIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdnaW5nTW9kZSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmV2ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuZWxlbWVudFBvc2l0aW9uLmxlZnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFkgPSBldmVudC5jbGllbnRZIC0gdGhpcy5lbGVtZW50UG9zaXRpb24udG9wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSA9ICdzd2lwZSc7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3dpcGUnLFxuICAgICAgICAgICAgICAgIG1vdmVYOiB0aGlzLm1vdmVYLFxuICAgICAgICAgICAgICAgIG1vdmVZOiB0aGlzLm1vdmVZXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5tb3ZlWCA9IHRoaXMuaW5pdGlhbE1vdmVYICsgKChldmVudC5jbGllbnRYIC0gdGhpcy5lbGVtZW50UG9zaXRpb24ubGVmdCkgLSB0aGlzLnN0YXJ0WCk7XG4gICAgICAgICAgICB0aGlzLm1vdmVZID0gdGhpcy5pbml0aWFsTW92ZVkgKyAoKGV2ZW50LmNsaWVudFkgLSB0aGlzLmVsZW1lbnRQb3NpdGlvbi50b3ApIC0gdGhpcy5zdGFydFkpO1xuXG4gICAgICAgICAgICB0aGlzLmNlbnRlcmluZ0ltYWdlKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnQoMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6bW91c2V1cCcsIFsnJGV2ZW50J10pXG4gICAgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlSW5pdGlhbFZhbHVlcygpO1xuICAgICAgICB0aGlzLmV2ZW50VHlwZSA9ICcnO1xuICAgIH1cblxuXG4gICAgLypcbiAgICAgKiBNb2JpbGUgbGlzdGVuZXJzXG4gICAgICovXG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgICBvblJlc2l6ZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRJbWFnZVdpZHRoKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudCh0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pXG4gICAgdG91Y2hzdGFydEhhbmRsZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnRQb3NpdGlvbigpO1xuXG4gICAgICAgIGlmICghdGhpcy5ldmVudFR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5lbGVtZW50UG9zaXRpb24ubGVmdDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5lbGVtZW50UG9zaXRpb24udG9wO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q2xpZW50WCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuZWxlbWVudFBvc2l0aW9uLmxlZnQ7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q2xpZW50WSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMuZWxlbWVudFBvc2l0aW9uLnRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoeyB0eXBlOiAndG91Y2hzdGFydCcgfSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSlcbiAgICB0b3VjaG1vdmVIYW5kbGVyKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXM7XG5cbiAgICAgICAgLy8gU3dpcGVcbiAgICAgICAgaWYgKHRoaXMuZGV0ZWN0U3dpcGUodG91Y2hlcykgfHwgdGhpcy5ldmVudFR5cGUgPT09ICdzd2lwZScpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3dpcGUoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGluZWFyIHN3aXBlXG4gICAgICAgIGlmICh0aGlzLmRldGVjdExpbmVhclN3aXBlKHRvdWNoZXMpIHx8XG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSA9PT0gJ2hvcml6b250YWwtc3dpcGUnIHx8XG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSA9PT0gJ3ZlcnRpY2FsLXN3aXBlJykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVMaW5lYXJTd2lwZShldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQaW5jaFxuICAgICAgICBpZiAodG91Y2hlcy5sZW5ndGggPT09IDIgJiYgIXRoaXMuZXZlbnRUeXBlIHx8IHRoaXMuZXZlbnRUeXBlID09PSAncGluY2gnKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBpbmNoKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQnXSlcbiAgICB0b3VjaGVuZEhhbmRsZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmkgPSAwO1xuICAgICAgICB0aGlzLmRyYWdnaW5nTW9kZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCB0b3VjaGVzID0gZXZlbnQudG91Y2hlcztcblxuICAgICAgICBpZiAodGhpcy5zY2FsZSA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXV0byBab29tIE91dFxuICAgICAgICBpZiAodGhpcy5hdXRvWm9vbU91dCAmJiB0aGlzLmV2ZW50VHlwZSA9PT0gJ3BpbmNoJykge1xuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KHsgdHlwZTogJ3RvdWNoZW5kJyB9KTtcblxuICAgICAgICAvLyBEb3VibGUgVGFwXG4gICAgICAgIGlmICh0aGlzLmRvdWJsZVRhcERldGVjdGlvbigpICYmICF0aGlzLmV2ZW50VHlwZSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVab29tKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoeyB0eXBlOiAnZG91YmxlLXRhcCcgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaW1pdCBab29tXG4gICAgICAgIGlmICh0aGlzLmxpbWl0Wm9vbSAmJiB0aGlzLmV2ZW50VHlwZSA9PT0gJ3BpbmNoJykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVMaW1pdFpvb20oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSA9PT0gJ3BpbmNoJyB8fCB0aGlzLmV2ZW50VHlwZSA9PT0gJ3N3aXBlJykge1xuICAgICAgICAgICAgdGhpcy5hbGlnbkltYWdlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ldmVudFR5cGUgPT09ICdwaW5jaCcgfHxcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlID09PSAnc3dpcGUnIHx8XG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSA9PT0gJ2hvcml6b250YWwtc3dpcGUnIHx8XG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSA9PT0gJ3ZlcnRpY2FsLXN3aXBlJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJbml0aWFsVmFsdWVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50VHlwZSA9ICd0b3VjaGVuZCc7XG5cbiAgICAgICAgaWYgKHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qXG4gICAgICogSGFuZGxlcnNcbiAgICAgKi9cblxuICAgIG1vdmVMZWZ0KGluZGV4OiBudW1iZXIsIHRvdWNoZXMpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdG91Y2hlc1tpbmRleF0uY2xpZW50WCAtIHRoaXMuZWxlbWVudFBvc2l0aW9uLmxlZnQ7XG4gICAgfVxuXG4gICAgbW92ZVRvcChpbmRleDogbnVtYmVyLCB0b3VjaGVzKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRvdWNoZXNbaW5kZXhdLmNsaWVudFkgLSB0aGlzLmVsZW1lbnRQb3NpdGlvbi50b3A7XG4gICAgfVxuXG4gICAgaGFuZGxlU3dpcGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5ldmVudFR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5lbGVtZW50UG9zaXRpb24ubGVmdDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5lbGVtZW50UG9zaXRpb24udG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudFR5cGUgPSAnc3dpcGUnO1xuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KHtcbiAgICAgICAgICAgIHR5cGU6ICdzd2lwZScsXG4gICAgICAgICAgICBtb3ZlWDogdGhpcy5tb3ZlWCxcbiAgICAgICAgICAgIG1vdmVZOiB0aGlzLm1vdmVZXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW92ZVggPSB0aGlzLmluaXRpYWxNb3ZlWCArICh0aGlzLm1vdmVMZWZ0KDAsIGV2ZW50LnRvdWNoZXMpIC0gdGhpcy5zdGFydFgpO1xuICAgICAgICB0aGlzLm1vdmVZID0gdGhpcy5pbml0aWFsTW92ZVkgKyAodGhpcy5tb3ZlVG9wKDAsIGV2ZW50LnRvdWNoZXMpIC0gdGhpcy5zdGFydFkpO1xuXG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudCgwKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQaW5jaChldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXM7XG5cbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50VHlwZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsRGlzdGFuY2UgPSB0aGlzLmdldERpc3RhbmNlKHRvdWNoZXMpO1xuXG4gICAgICAgICAgICBjb25zdCBtb3ZlTGVmdDAgPSB0aGlzLm1vdmVMZWZ0KDAsIHRvdWNoZXMpO1xuICAgICAgICAgICAgY29uc3QgbW92ZUxlZnQxID0gdGhpcy5tb3ZlTGVmdCgxLCB0b3VjaGVzKTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVUb3AwID0gdGhpcy5tb3ZlVG9wKDAsIHRvdWNoZXMpO1xuICAgICAgICAgICAgY29uc3QgbW92ZVRvcDEgPSB0aGlzLm1vdmVUb3AoMSwgdG91Y2hlcyk7XG5cbiAgICAgICAgICAgIHRoaXMubW92ZVhDID0gKChtb3ZlTGVmdDAgKyBtb3ZlTGVmdDEpIC8gMikgLSB0aGlzLmluaXRpYWxNb3ZlWDtcbiAgICAgICAgICAgIHRoaXMubW92ZVlDID0gKChtb3ZlVG9wMCArIG1vdmVUb3AxKSAvIDIpIC0gdGhpcy5pbml0aWFsTW92ZVk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50VHlwZSA9ICdwaW5jaCc7XG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmdldERpc3RhbmNlKHRvdWNoZXMpO1xuICAgICAgICB0aGlzLnNjYWxlID0gdGhpcy5pbml0aWFsU2NhbGUgKiAodGhpcy5kaXN0YW5jZSAvIHRoaXMuaW5pdGlhbERpc3RhbmNlKTtcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdCh7IFxuICAgICAgICAgICAgdHlwZTogJ3BpbmNoJywgXG4gICAgICAgICAgICBzY2FsZTogdGhpcy5zY2FsZSBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tb3ZlWCA9IHRoaXMuaW5pdGlhbE1vdmVYIC0gKCgodGhpcy5kaXN0YW5jZSAvIHRoaXMuaW5pdGlhbERpc3RhbmNlKSAqIHRoaXMubW92ZVhDKSAtIHRoaXMubW92ZVhDKTtcbiAgICAgICAgdGhpcy5tb3ZlWSA9IHRoaXMuaW5pdGlhbE1vdmVZIC0gKCgodGhpcy5kaXN0YW5jZSAvIHRoaXMuaW5pdGlhbERpc3RhbmNlKSAqIHRoaXMubW92ZVlDKSAtIHRoaXMubW92ZVlDKTtcblxuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnQoMCk7XG4gICAgfVxuXG4gICAgaGFuZGxlTGluZWFyU3dpcGUoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5saW5lYXJWZXJ0aWNhbFN3aXBlKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pKys7XG5cbiAgICAgICAgaWYgKHRoaXMuaSA+IDMpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlID0gdGhpcy5nZXRMaW5lYXJTd2lwZVR5cGUoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZXZlbnRUeXBlID09PSAnaG9yaXpvbnRhbC1zd2lwZScpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVggPSB0aGlzLmluaXRpYWxNb3ZlWCArICgoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5lbGVtZW50UG9zaXRpb24ubGVmdCkgLSB0aGlzLnN0YXJ0WCk7XG4gICAgICAgICAgICB0aGlzLm1vdmVZID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSA9PT0gJ3ZlcnRpY2FsLXN3aXBlJykge1xuICAgICAgICAgICAgdGhpcy5tb3ZlWCA9IDA7XG4gICAgICAgICAgICB0aGlzLm1vdmVZID0gdGhpcy5pbml0aWFsTW92ZVkgKyAoKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMuZWxlbWVudFBvc2l0aW9uLnRvcCkgLSB0aGlzLnN0YXJ0WSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ldmVudFR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuZXZlbnRUeXBlLFxuICAgICAgICAgICAgICAgIG1vdmVYOiB0aGlzLm1vdmVYLFxuICAgICAgICAgICAgICAgIG1vdmVZOiB0aGlzLm1vdmVZXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudCgwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUxpbWl0Wm9vbSgpe1xuICAgICAgICBpZiAodGhpcy5zY2FsZSA+IHRoaXMubGltaXRab29tKXtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlV2lkdGggPSB0aGlzLmdldEltYWdlV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlSGVpZ2h0ID0gdGhpcy5nZXRJbWFnZUhlaWdodCgpO1xuICAgICAgICAgICAgY29uc3QgZW5sYXJnZWRJbWFnZVdpZHRoID0gaW1hZ2VXaWR0aCAqIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICBjb25zdCBlbmxhcmdlZEltYWdlSGVpZ2h0ID0gaW1hZ2VIZWlnaHQgKiB0aGlzLnNjYWxlO1xuXG4gICAgICAgICAgICBjb25zdCBtb3ZlWFJhdGlvID0gdGhpcy5tb3ZlWCAvIChlbmxhcmdlZEltYWdlV2lkdGggLSBpbWFnZVdpZHRoKTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVZUmF0aW8gPSB0aGlzLm1vdmVZIC8gKGVubGFyZ2VkSW1hZ2VIZWlnaHQgLSBpbWFnZUhlaWdodCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLmxpbWl0Wm9vbTtcblxuICAgICAgICAgICAgY29uc3QgbmV3SW1hZ2VXaWR0aCA9IGltYWdlV2lkdGggKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgY29uc3QgbmV3SW1hZ2VIZWlnaHQgPSBpbWFnZUhlaWdodCAqIHRoaXMuc2NhbGU7XG5cbiAgICAgICAgICAgIHRoaXMubW92ZVggPSAtTWF0aC5hYnMoKG1vdmVYUmF0aW8gKiAobmV3SW1hZ2VXaWR0aCAtIGltYWdlV2lkdGgpKSk7XG4gICAgICAgICAgICB0aGlzLm1vdmVZID0gLU1hdGguYWJzKCgtbW92ZVlSYXRpbyAqIChuZXdJbWFnZUhlaWdodCAtIGltYWdlSGVpZ2h0KSkpO1xuXG4gICAgICAgICAgICB0aGlzLmNlbnRlcmluZ0ltYWdlKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnQodGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBkZXRlY3RTd2lwZSh0b3VjaGVzOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRvdWNoZXMubGVuZ3RoID09PSAxICYmIHRoaXMuc2NhbGUgPiAxICYmICF0aGlzLmV2ZW50VHlwZTtcbiAgICB9XG5cbiAgICBkZXRlY3RMaW5lYXJTd2lwZSh0b3VjaGVzOiBUb3VjaExpc3QpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRvdWNoZXMubGVuZ3RoID09PSAxICYmIHRoaXMuc2NhbGUgPT09IDEgJiYgIXRoaXMuZXZlbnRUeXBlO1xuICAgIH1cblxuICAgIGdldExpbmVhclN3aXBlVHlwZShldmVudDogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRUeXBlICE9PSAnaG9yaXpvbnRhbC1zd2lwZScgJiYgdGhpcy5ldmVudFR5cGUgIT09ICd2ZXJ0aWNhbC1zd2lwZScpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVtZW50WCA9IE1hdGguYWJzKHRoaXMubW92ZUxlZnQoMCwgZXZlbnQudG91Y2hlcykgLSB0aGlzLnN0YXJ0Q2xpZW50WCk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlbWVudFkgPSBNYXRoLmFicyh0aGlzLm1vdmVUb3AoMCwgZXZlbnQudG91Y2hlcykgLSB0aGlzLnN0YXJ0Q2xpZW50WSk7XG5cbiAgICAgICAgICAgIGlmICgobW92ZW1lbnRZICogMykgPiBtb3ZlbWVudFgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saW5lYXJWZXJ0aWNhbFN3aXBlID8gJ3ZlcnRpY2FsLXN3aXBlJyA6ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saW5lYXJIb3Jpem9udGFsU3dpcGUgPyAnaG9yaXpvbnRhbC1zd2lwZScgOiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2ZW50VHlwZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERpc3RhbmNlKHRvdWNoZXM6IGFueSkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRvdWNoZXNbMF0ucGFnZVggLSB0b3VjaGVzWzFdLnBhZ2VYLCAyKSArIE1hdGgucG93KHRvdWNoZXNbMF0ucGFnZVkgLSB0b3VjaGVzWzFdLnBhZ2VZLCAyKSk7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VIZWlnaHQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0aGlzLmVsZW1lbnRUYXJnZXQpWzBdLm9mZnNldEhlaWdodDtcbiAgICB9XG5cbiAgICBnZXRJbWFnZVdpZHRoKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGhpcy5lbGVtZW50VGFyZ2V0KVswXS5vZmZzZXRXaWR0aDtcbiAgICB9XG5cbiAgICBzZXRCYXNpY1N0eWxlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJzAgMCc7XG5cbiAgICAgICAgdGhpcy5ob3N0RGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuaG9zdE92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIHRoaXMuaG9zdEhlaWdodCA9IHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuc2V0SW1hZ2VXaWR0aCgpO1xuICAgIH1cblxuICAgIHNldEltYWdlV2lkdGgoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGltZ0VsZW1lbnQgPSB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGhpcy5lbGVtZW50VGFyZ2V0KTtcblxuICAgICAgICBpZiAoaW1nRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGltZ0VsZW1lbnRbMF0uc3R5bGUubWF4V2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICBpbWdFbGVtZW50WzBdLnN0eWxlLm1heEhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zZm9ybUVsZW1lbnQoZHVyYXRpb246IGFueSA9IDUwKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke2R1cmF0aW9ufW1zYDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBcbiAgICAgICAgICAgIG1hdHJpeCgke051bWJlcih0aGlzLnNjYWxlKX0sIDAsIDAsICR7TnVtYmVyKHRoaXMuc2NhbGUpfSwgJHtOdW1iZXIodGhpcy5tb3ZlWCl9LCAke051bWJlcih0aGlzLm1vdmVZKX0pYDtcbiAgICB9XG5cbiAgICBkb3VibGVUYXBEZXRlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5kb3VibGVUYXApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHRhcExlbmd0aCA9IGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0VGFwO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRvdWJsZVRhcFRpbWVvdXQpO1xuXG4gICAgICAgIGlmICh0YXBMZW5ndGggPCAzMDAgJiYgdGFwTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvdWJsZVRhcFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kb3VibGVUYXBUaW1lb3V0KTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0VGFwID0gY3VycmVudFRpbWU7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZVpvb20oZXZlbnQ6IGFueSA9IGZhbHNlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxTY2FsZSA9PT0gMSkge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VkVG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZSA9IHRoaXMuaW5pdGlhbFNjYWxlICogdGhpcy5kb3VibGVUYXBTY2FsZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVYID0gdGhpcy5pbml0aWFsTW92ZVggLSAoY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAqICh0aGlzLmRvdWJsZVRhcFNjYWxlIC0gMSkgLSB0aGlzLmVsZW1lbnRQb3NpdGlvbi5sZWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVZID0gdGhpcy5pbml0aWFsTW92ZVkgLSAoY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAqICh0aGlzLmRvdWJsZVRhcFNjYWxlIC0gMSkgLSB0aGlzLmVsZW1lbnRQb3NpdGlvbi50b3ApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlID0gdGhpcy5pbml0aWFsU2NhbGUgKiAyO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVggPSB0aGlzLmluaXRpYWxNb3ZlWCAtIHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlWSA9IHRoaXMuaW5pdGlhbE1vdmVZIC0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2VudGVyaW5nSW1hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5pdGlhbFZhbHVlcygpO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50KHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoeyB0eXBlOiAnem9vbS1pbicgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U2NhbGUoKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoeyB0eXBlOiAnem9vbS1vdXQnIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRTY2FsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICAgIHRoaXMubW92ZVggPSAwO1xuICAgICAgICB0aGlzLm1vdmVZID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVJbml0aWFsVmFsdWVzKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudCh0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlSW5pdGlhbFZhbHVlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0aWFsU2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgICAgICB0aGlzLmluaXRpYWxNb3ZlWCA9IHRoaXMubW92ZVg7XG4gICAgICAgIHRoaXMuaW5pdGlhbE1vdmVZID0gdGhpcy5tb3ZlWTtcbiAgICB9XG5cbiAgICBjZW50ZXJpbmdJbWFnZSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgaW1nID0gdGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRoaXMuZWxlbWVudFRhcmdldClbMF07XG4gICAgICAgIGNvbnN0IGluaXRpYWxNb3ZlWCA9IHRoaXMubW92ZVg7XG4gICAgICAgIGNvbnN0IGluaXRpYWxNb3ZlWSA9IHRoaXMubW92ZVk7XG5cbiAgICAgICAgaWYgKHRoaXMubW92ZVkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVZID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb3ZlWCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGltZykge1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uWVJlc3RyaWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25YUmVzdHJpY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW1nICYmIHRoaXMuc2NhbGUgPCAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tb3ZlWCA8IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCAqICgxIC0gdGhpcy5zY2FsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVYID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoICogKDEgLSB0aGlzLnNjYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbml0aWFsTW92ZVggIT09IHRoaXMubW92ZVggfHwgaW5pdGlhbE1vdmVZICE9PSB0aGlzLm1vdmVZO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbGlnbkltYWdlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpc01vdmVDaGFuZ2VkID0gdGhpcy5jZW50ZXJpbmdJbWFnZSgpO1xuXG4gICAgICAgIGlmIChpc01vdmVDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUluaXRpYWxWYWx1ZXMoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudCh0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uWVJlc3RyaWN0aW9uKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbWdIZWlnaHQgPSB0aGlzLmdldEltYWdlSGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGltZ0hlaWdodCAqIHRoaXMuc2NhbGUgPCB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVZID0gKHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgLSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0ICogdGhpcy5zY2FsZSkgLyAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW1nT2Zmc2V0VG9wID0gKChpbWdIZWlnaHQgLSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0KSAqIHRoaXMuc2NhbGUpIC8gMjtcblxuICAgICAgICAgICAgaWYgKHRoaXMubW92ZVkgPiBpbWdPZmZzZXRUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVZID0gaW1nT2Zmc2V0VG9wO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoaW1nSGVpZ2h0ICogdGhpcy5zY2FsZSArIE1hdGguYWJzKGltZ09mZnNldFRvcCkgLSB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0KSArIHRoaXMubW92ZVkgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlWSA9IC0gKGltZ0hlaWdodCAqIHRoaXMuc2NhbGUgKyBNYXRoLmFicyhpbWdPZmZzZXRUb3ApIC0gdGhpcy5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uWFJlc3RyaWN0aW9uKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbWdXaWR0aCA9IHRoaXMuZ2V0SW1hZ2VXaWR0aCgpO1xuXG4gICAgICAgIGlmIChpbWdXaWR0aCAqIHRoaXMuc2NhbGUgPCB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVggPSAodGhpcy5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoIC0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoICogdGhpcy5zY2FsZSkgLyAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaW1nT2Zmc2V0TGVmdCA9ICgoaW1nV2lkdGggLSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGgpICogdGhpcy5zY2FsZSkgLyAyO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tb3ZlWCA+IGltZ09mZnNldExlZnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVYID0gaW1nT2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGltZ1dpZHRoICogdGhpcy5zY2FsZSArIE1hdGguYWJzKGltZ09mZnNldExlZnQpIC0gdGhpcy5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoKSArIHRoaXMubW92ZVggPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlWCA9IC0gKGltZ1dpZHRoICogdGhpcy5zY2FsZSArIE1hdGguYWJzKGltZ09mZnNldExlZnQpIC0gdGhpcy5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEVsZW1lbnRQb3NpdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UG9zaXRpb24gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TW92ZVgodmFsdWU6IG51bWJlciwgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXIgPSAyMDApIHtcbiAgICAgICAgdGhpcy5tb3ZlWCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TW92ZVkodmFsdWU6IG51bWJlciwgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXIgPSAyMDApIHtcbiAgICAgICAgdGhpcy5tb3ZlWSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9XG59XG4iXX0=