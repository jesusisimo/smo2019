(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\n\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\n\nbody {\n  background: var(--ion-background-color);\n}\n\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 12, 209, 232) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important;\n}\n\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #7044ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112, 68, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important;\n}\n\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #10dc60) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 16, 220, 96) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #28e070) !important;\n}\n\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffce00) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 206, 0) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important;\n}\n\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #f04141) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 240, 65, 65) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #f25454) !important;\n}\n\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #989aa2) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 152, 154, 162) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important;\n}\n\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n\n.ion-page-invisible {\n  opacity: 0;\n}\n\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\n\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n.md .menu-content-reveal {\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n}\n\n.md .menu-content-push {\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\n\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\n\ntextarea::-moz-placeholder {\n  padding-left: 2px;\n}\n\ntextarea:-ms-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::placeholder {\n  padding-left: 2px;\n}\n\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\n\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\n\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\n\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\n[tappable] {\n  cursor: pointer;\n}\n\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\nhtml:not(.hydrated) body {\n  display: none;\n}\n\nhtml.plt-pwa {\n  height: 100vh;\n}\n\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\nhtml {\n  font-family: var(--ion-font-family);\n}\n\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\nsmall {\n  font-size: 75%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n.ion-hide {\n  display: none !important;\n}\n\n.ion-hide-up {\n  display: none !important;\n}\n\n@media (max-width: 575px) {\n  .ion-hide-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 991px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 1199px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n\n.ion-hide-xl-down {\n  display: none !important;\n}\n\n.ion-no-padding,\n[no-padding] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.ion-padding,\n[padding] {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding,\n[padding] {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-top,\n[padding-top] {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n\n.ion-padding-start,\n[padding-start] {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-start,\n[padding-start] {\n    padding-left: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-end,\n[padding-end] {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-end,\n[padding-end] {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-bottom,\n[padding-bottom] {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n.ion-padding-vertical,\n[padding-vertical] {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n.ion-padding-horizontal,\n[padding-horizontal] {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal,\n[padding-horizontal] {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-no-margin,\n[no-margin] {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.ion-margin,\n[margin] {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin,\n[margin] {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-top,\n[margin-top] {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n\n.ion-margin-start,\n[margin-start] {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-start,\n[margin-start] {\n    margin-left: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-end,\n[margin-end] {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-end,\n[margin-end] {\n    margin-right: unset;\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-bottom,\n[margin-bottom] {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n.ion-margin-vertical,\n[margin-vertical] {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n.ion-margin-horizontal,\n[margin-horizontal] {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal,\n[margin-horizontal] {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-float-left,\n[float-left] {\n  float: left !important;\n}\n\n.ion-float-right,\n[float-right] {\n  float: right !important;\n}\n\n.ion-float-start,\n[float-start] {\n  float: left !important;\n}\n\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start, [dir=rtl] [float-start], :host-context([dir=rtl]) [float-start] {\n  float: right !important;\n}\n\n.ion-float-end,\n[float-end] {\n  float: right !important;\n}\n\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end, [dir=rtl] [float-end], :host-context([dir=rtl]) [float-end] {\n  float: left !important;\n}\n\n@media (min-width: 576px) {\n  .ion-float-sm-left,\n[float-sm-left] {\n    float: left !important;\n  }\n\n  .ion-float-sm-right,\n[float-sm-right] {\n    float: right !important;\n  }\n\n  .ion-float-sm-start,\n[float-sm-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start, [dir=rtl] [float-sm-start], :host-context([dir=rtl]) [float-sm-start] {\n    float: right !important;\n  }\n\n  .ion-float-sm-end,\n[float-sm-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end, [dir=rtl] [float-sm-end], :host-context([dir=rtl]) [float-sm-end] {\n    float: left !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-float-md-left,\n[float-md-left] {\n    float: left !important;\n  }\n\n  .ion-float-md-right,\n[float-md-right] {\n    float: right !important;\n  }\n\n  .ion-float-md-start,\n[float-md-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start, [dir=rtl] [float-md-start], :host-context([dir=rtl]) [float-md-start] {\n    float: right !important;\n  }\n\n  .ion-float-md-end,\n[float-md-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end, [dir=rtl] [float-md-end], :host-context([dir=rtl]) [float-md-end] {\n    float: left !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-float-lg-left,\n[float-lg-left] {\n    float: left !important;\n  }\n\n  .ion-float-lg-right,\n[float-lg-right] {\n    float: right !important;\n  }\n\n  .ion-float-lg-start,\n[float-lg-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start, [dir=rtl] [float-lg-start], :host-context([dir=rtl]) [float-lg-start] {\n    float: right !important;\n  }\n\n  .ion-float-lg-end,\n[float-lg-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end, [dir=rtl] [float-lg-end], :host-context([dir=rtl]) [float-lg-end] {\n    float: left !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-float-xl-left,\n[float-xl-left] {\n    float: left !important;\n  }\n\n  .ion-float-xl-right,\n[float-xl-right] {\n    float: right !important;\n  }\n\n  .ion-float-xl-start,\n[float-xl-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start, [dir=rtl] [float-xl-start], :host-context([dir=rtl]) [float-xl-start] {\n    float: right !important;\n  }\n\n  .ion-float-xl-end,\n[float-xl-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end, [dir=rtl] [float-xl-end], :host-context([dir=rtl]) [float-xl-end] {\n    float: left !important;\n  }\n}\n\n.ion-text-center,\n[text-center] {\n  text-align: center !important;\n}\n\n.ion-text-justify,\n[text-justify] {\n  text-align: justify !important;\n}\n\n.ion-text-start,\n[text-start] {\n  text-align: start !important;\n}\n\n.ion-text-end,\n[text-end] {\n  text-align: end !important;\n}\n\n.ion-text-left,\n[text-left] {\n  text-align: left !important;\n}\n\n.ion-text-right,\n[text-right] {\n  text-align: right !important;\n}\n\n.ion-text-nowrap,\n[text-nowrap] {\n  white-space: nowrap !important;\n}\n\n.ion-text-wrap,\n[text-wrap] {\n  white-space: normal !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-center,\n[text-sm-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify,\n[text-sm-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start,\n[text-sm-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end,\n[text-sm-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left,\n[text-sm-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right,\n[text-sm-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap,\n[text-sm-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap,\n[text-sm-wrap] {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-text-md-center,\n[text-md-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify,\n[text-md-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start,\n[text-md-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end,\n[text-md-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left,\n[text-md-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right,\n[text-md-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap,\n[text-md-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap,\n[text-md-wrap] {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-text-lg-center,\n[text-lg-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify,\n[text-lg-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start,\n[text-lg-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end,\n[text-lg-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left,\n[text-lg-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right,\n[text-lg-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap,\n[text-lg-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap,\n[text-lg-wrap] {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-text-xl-center,\n[text-xl-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify,\n[text-xl-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start,\n[text-xl-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end,\n[text-xl-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left,\n[text-xl-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right,\n[text-xl-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap,\n[text-xl-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap,\n[text-xl-wrap] {\n    white-space: normal !important;\n  }\n}\n\n.ion-text-uppercase,\n[text-uppercase] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n\n.ion-text-lowercase,\n[text-lowercase] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n\n.ion-text-capitalize,\n[text-capitalize] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase,\n[text-sm-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase,\n[text-sm-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize,\n[text-sm-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-text-md-uppercase,\n[text-md-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase,\n[text-md-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize,\n[text-md-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase,\n[text-lg-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase,\n[text-lg-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize,\n[text-lg-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase,\n[text-xl-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase,\n[text-xl-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize,\n[text-xl-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n.ion-align-self-start,\n[align-self-start] {\n  align-self: flex-start !important;\n}\n\n.ion-align-self-end,\n[align-self-end] {\n  align-self: flex-end !important;\n}\n\n.ion-align-self-center,\n[align-self-center] {\n  align-self: center !important;\n}\n\n.ion-align-self-stretch,\n[align-self-stretch] {\n  align-self: stretch !important;\n}\n\n.ion-align-self-baseline,\n[align-self-baseline] {\n  align-self: baseline !important;\n}\n\n.ion-align-self-auto,\n[align-self-auto] {\n  align-self: auto !important;\n}\n\n.ion-wrap,\n[wrap] {\n  flex-wrap: wrap !important;\n}\n\n.ion-nowrap,\n[nowrap] {\n  flex-wrap: nowrap !important;\n}\n\n.ion-wrap-reverse,\n[wrap-reverse] {\n  flex-wrap: wrap-reverse !important;\n}\n\n.ion-justify-content-start,\n[justify-content-start] {\n  justify-content: flex-start !important;\n}\n\n.ion-justify-content-center,\n[justify-content-center] {\n  justify-content: center !important;\n}\n\n.ion-justify-content-end,\n[justify-content-end] {\n  justify-content: flex-end !important;\n}\n\n.ion-justify-content-around,\n[justify-content-around] {\n  justify-content: space-around !important;\n}\n\n.ion-justify-content-between,\n[justify-content-between] {\n  justify-content: space-between !important;\n}\n\n.ion-justify-content-evenly,\n[justify-content-evenly] {\n  justify-content: space-evenly !important;\n}\n\n.ion-align-items-start,\n[align-items-start] {\n  align-items: flex-start !important;\n}\n\n.ion-align-items-center,\n[align-items-center] {\n  align-items: center !important;\n}\n\n.ion-align-items-end,\n[align-items-end] {\n  align-items: flex-end !important;\n}\n\n.ion-align-items-stretch,\n[align-items-stretch] {\n  align-items: stretch !important;\n}\n\n.ion-align-items-baseline,\n[align-items-baseline] {\n  align-items: baseline !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2NvcmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLmdsb2JhbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuaW9zLnZhcnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUubWQudmFycy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvbm9ybWFsaXplLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9zdHJ1Y3R1cmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3R5cG9ncmFwaHkuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9kaXNwbGF5LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvcGFkZGluZy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Zsb2F0LWVsZW1lbnRzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtYWxpZ25tZW50LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9mbGV4LXV0aWxzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsNkZBQUE7QUNQRjs7QURTQTtFQUNFLDBEQUFBO0FDTkY7O0FEU0E7RUFDRSwwQ0FBQTtBQ05GOztBRFNBO0VBQ0UsdUNBQUE7QUNORjs7QURTQTtFQUNFLGdCQUFBO0FDTkY7O0FEcUNFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDeEJGOztBRDRCRTtFQVRBLGdFQUFBO0VBQ0EsNkVBQUE7RUFDQSwwRUFBQTtFQUNBLDJGQUFBO0VBQ0EsdUVBQUE7RUFDQSxxRUFBQTtBQ2ZGOztBRG1CRTtFQVRBLCtEQUFBO0VBQ0EsNEVBQUE7RUFDQSx5RUFBQTtFQUNBLDBGQUFBO0VBQ0Esc0VBQUE7RUFDQSxvRUFBQTtBQ05GOztBRFVFO0VBVEEsOERBQUE7RUFDQSwwRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDR0Y7O0FEQ0U7RUFUQSw4REFBQTtFQUNBLDBFQUFBO0VBQ0Esd0VBQUE7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QkFBQTtBQ3ZDRjs7QUQwQ0E7RUFDRSxXQUFBO0FDdkNGOztBRDBDQTtFQUNFLGVBQUE7QUN2Q0Y7O0FDdERBO0VBQ0Usd0JBQUE7QUNQRjs7QURpQkk7RUFDRSx3QkFBQTtBQ2ROOztBWDBISTtFVXJHQTtJQUNFLHdCQUFBO0VDakJKO0FBQ0Y7O0FYZ0ZJO0VVekVBO0lBQ0Usd0JBQUE7RUNKSjtBQUNGOztBWCtHSTtFVXJHQTtJQUNFLHdCQUFBO0VDUEo7QUFDRjs7QVhzRUk7RVV6RUE7SUFDRSx3QkFBQTtFQ01KO0FBQ0Y7O0FYcUdJO0VVckdBO0lBQ0Usd0JBQUE7RUNHSjtBQUNGOztBWDRESTtFVXpFQTtJQUNFLHdCQUFBO0VDZ0JKO0FBQ0Y7O0FYMkZJO0VVckdBO0lBQ0Usd0JBQUE7RUNhSjtBQUNGOztBWGtESTtFVXpFQTtJQUNFLHdCQUFBO0VDMEJKO0FBQ0Y7O0FEcEJJO0VBQ0Usd0JBQUE7QUNzQk47O0FDbENBOztFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0Vab0xFLGVZbExlO0VabUxmLGdCWW5MZTtFWnVOakIsY1l2TmlCO0Vad05qQixpQll4TmlCO0FDYm5COztBRGdCQTs7RUFFRSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFWjhLRSxzQ1luTU07RVpvTU4sdUNZcE1NO0Vab09SLHFDWXBPUTtFWnFPUix3Q1lyT1E7QUNZVjs7QWIyTE07RUFDRTs7SUFFSSxtQkFBQTtJQUdBLG9CQUFBO0lBR0YsK0NZaE5BO0laaU5BLDhDWWpOQTtJWmtOQSw2Q1lsTkE7SVptTkEsNENZbk5BO0VDc0JSO0FBQ0Y7O0FER0E7O0VBRUUsdUNBQUE7RVp3TUEscUNZcE9RO0FDNkJWOztBRElBOztFQUVFLHlDQUFBO0VaZ0tFLHNDWW5NTTtBQ2tDVjs7QWJxS007RUFDRTs7SUFFSSxtQkFBQTtJQU1GLCtDWWhOQTtJWmlOQSw4Q1lqTkE7RUN5Q1I7QUFDRjs7QURGQTs7RUFFRSx1Q0FBQTtFWjBKRSx1Q1lwTU07QUNnRFY7O0FidUpNO0VBQ0U7O0lBS0ksb0JBQUE7SUFLRiw2Q1lsTkE7SVptTkEsNENZbk5BO0VDdURSO0FBQ0Y7O0FEVEE7O0VBRUUsMENBQUE7RVpvTEEsd0NZck9RO0FDOERWOztBRFJBOztFQUVFLHVDQUFBO0VBQ0EsMENBQUE7RVoyS0EscUNZcE9RO0VacU9SLHdDWXJPUTtBQ3FFVjs7QURQQTs7RUFFRSx5Q0FBQTtFQUNBLHVDQUFBO0Vaa0lFLHNDWW5NTTtFWm9NTix1Q1lwTU07QUM0RVY7O0FiMkhNO0VBQ0U7O0lBRUksbUJBQUE7SUFHQSxvQkFBQTtJQUdGLCtDWWhOQTtJWmlOQSw4Q1lqTkE7SVprTkEsNkNZbE5BO0labU5BLDRDWW5OQTtFQ3NGUjtBQUNGOztBRGJBOztFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFWmdIRSxjWTlHYztFWitHZCxlWS9HYztFWm1KaEIsYVluSmdCO0Vab0poQixnQllwSmdCO0FDa0JsQjs7QURmQTs7RUFFRSx1Q0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFWjBHRSxvQ1lsTUs7RVptTUwscUNZbk1LO0VabU9QLG1DWW5PTztFWm9PUCxzQ1lwT087QUM4R1Q7O0Fid0ZNO0VBQ0U7O0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUdGLDZDWS9NRDtJWmdOQyw0Q1loTkQ7SVppTkMsMkNZak5EO0laa05DLDBDWWxORDtFQ3dIUDtBQUNGOztBRDVCQTs7RUFFRSxxQ0FBQTtFWm9JQSxtQ1luT087QUMrSFQ7O0FEM0JBOztFQUVFLHVDQUFBO0VaNEZFLG9DWWxNSztBQ29JVDs7QWJrRU07RUFDRTs7SUFFSSxrQkFBQTtJQU1GLDZDWS9NRDtJWmdOQyw0Q1loTkQ7RUMySVA7QUFDRjs7QURqQ0E7O0VBRUUscUNBQUE7RVpzRkUscUNZbk1LO0FDa0pUOztBYm9ETTtFQUNFOztJQUtJLG1CQUFBO0lBS0YsMkNZak5EO0laa05DLDBDWWxORDtFQ3lKUDtBQUNGOztBRHhDQTs7RUFFRSx3Q0FBQTtFWmdIQSxzQ1lwT087QUNnS1Q7O0FEdkNBOztFQUVFLHFDQUFBO0VBQ0Esd0NBQUE7RVp1R0EsbUNZbk9PO0Vab09QLHNDWXBPTztBQ3VLVDs7QUR0Q0E7O0VBRUUsdUNBQUE7RUFDQSxxQ0FBQTtFWjhERSxvQ1lsTUs7RVptTUwscUNZbk1LO0FDOEtUOztBYndCTTtFQUNFOztJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFHRiw2Q1kvTUQ7SVpnTkMsNENZaE5EO0laaU5DLDJDWWpORDtJWmtOQywwQ1lsTkQ7RUN3TFA7QUFDRjs7QUN0TEk7O0VkZ1hFLHNCQUFBO0FlM1hOOztBRGdCSTs7RWQyV0UsdUJBQUE7QWV0WE47O0FEZ0JJOztFZHdWRSxzQkFBQTtBZW5XTjs7QWZnSlc7RUFzTkwsdUJBQUE7QWVuV047O0FEYUk7O0VkMFZFLHVCQUFBO0FlbFdOOztBZndJVztFQTZOTCxzQkFBQTtBZWxXTjs7QWZvRUk7RWM5RUE7O0lkZ1hFLHNCQUFBO0VlaFdKOztFRFhFOztJZDJXRSx1QkFBQTtFZTNWSjs7RURYRTs7SWR3VkUsc0JBQUE7RWV4VUo7RWZxSFM7SUFzTkwsdUJBQUE7RWV4VUo7O0VEZEU7O0lkMFZFLHVCQUFBO0VldlVKO0VmNkdTO0lBNk5MLHNCQUFBO0VldlVKO0FBQ0Y7O0Fmd0NJO0VjOUVBOztJZGdYRSxzQkFBQTtFZXJVSjs7RUR0Q0U7O0lkMldFLHVCQUFBO0VlaFVKOztFRHRDRTs7SWR3VkUsc0JBQUE7RWU3U0o7RWYwRlM7SUFzTkwsdUJBQUE7RWU3U0o7O0VEekNFOztJZDBWRSx1QkFBQTtFZTVTSjtFZmtGUztJQTZOTCxzQkFBQTtFZTVTSjtBQUNGOztBZmFJO0VjOUVBOztJZGdYRSxzQkFBQTtFZTFTSjs7RURqRUU7O0lkMldFLHVCQUFBO0VlclNKOztFRGpFRTs7SWR3VkUsc0JBQUE7RWVsUko7RWYrRFM7SUFzTkwsdUJBQUE7RWVsUko7O0VEcEVFOztJZDBWRSx1QkFBQTtFZWpSSjtFZnVEUztJQTZOTCxzQkFBQTtFZWpSSjtBQUNGOztBZmRJO0VjOUVBOztJZGdYRSxzQkFBQTtFZS9RSjs7RUQ1RkU7O0lkMldFLHVCQUFBO0VlMVFKOztFRDVGRTs7SWR3VkUsc0JBQUE7RWV2UEo7RWZvQ1M7SUFzTkwsdUJBQUE7RWV2UEo7O0VEL0ZFOztJZDBWRSx1QkFBQTtFZXRQSjtFZjRCUztJQTZOTCxzQkFBQTtFZXRQSjtBQUNGOztBQ3ZISTs7RUFFRSw2QkFBQTtBQ2JOOztBRGdCSTs7RUFFRSw4QkFBQTtBQ2JOOztBRGdCSTs7RUFFRSw0QkFBQTtBQ2JOOztBRGdCSTs7RUFFRSwwQkFBQTtBQ2JOOztBRGdCSTs7RUFFRSwyQkFBQTtBQ2JOOztBRGdCSTs7RUFFRSw0QkFBQTtBQ2JOOztBRGdCSTs7RUFFRSw4QkFBQTtBQ2JOOztBRGdCSTs7RUFFRSw4QkFBQTtBQ2JOOztBakJzREk7RWdCOUVBOztJQUVFLDZCQUFBO0VDNEJKOztFRHpCRTs7SUFFRSw4QkFBQTtFQzRCSjs7RUR6QkU7O0lBRUUsNEJBQUE7RUM0Qko7O0VEekJFOztJQUVFLDBCQUFBO0VDNEJKOztFRHpCRTs7SUFFRSwyQkFBQTtFQzRCSjs7RUR6QkU7O0lBRUUsNEJBQUE7RUM0Qko7O0VEekJFOztJQUVFLDhCQUFBO0VDNEJKOztFRHpCRTs7SUFFRSw4QkFBQTtFQzRCSjtBQUNGOztBakJZSTtFZ0I5RUE7O0lBRUUsNkJBQUE7RUNxRUo7O0VEbEVFOztJQUVFLDhCQUFBO0VDcUVKOztFRGxFRTs7SUFFRSw0QkFBQTtFQ3FFSjs7RURsRUU7O0lBRUUsMEJBQUE7RUNxRUo7O0VEbEVFOztJQUVFLDJCQUFBO0VDcUVKOztFRGxFRTs7SUFFRSw0QkFBQTtFQ3FFSjs7RURsRUU7O0lBRUUsOEJBQUE7RUNxRUo7O0VEbEVFOztJQUVFLDhCQUFBO0VDcUVKO0FBQ0Y7O0FqQjdCSTtFZ0I5RUE7O0lBRUUsNkJBQUE7RUM4R0o7O0VEM0dFOztJQUVFLDhCQUFBO0VDOEdKOztFRDNHRTs7SUFFRSw0QkFBQTtFQzhHSjs7RUQzR0U7O0lBRUUsMEJBQUE7RUM4R0o7O0VEM0dFOztJQUVFLDJCQUFBO0VDOEdKOztFRDNHRTs7SUFFRSw0QkFBQTtFQzhHSjs7RUQzR0U7O0lBRUUsOEJBQUE7RUM4R0o7O0VEM0dFOztJQUVFLDhCQUFBO0VDOEdKO0FBQ0Y7O0FqQnRFSTtFZ0I5RUE7O0lBRUUsNkJBQUE7RUN1Sko7O0VEcEpFOztJQUVFLDhCQUFBO0VDdUpKOztFRHBKRTs7SUFFRSw0QkFBQTtFQ3VKSjs7RURwSkU7O0lBRUUsMEJBQUE7RUN1Sko7O0VEcEpFOztJQUVFLDJCQUFBO0VDdUpKOztFRHBKRTs7SUFFRSw0QkFBQTtFQ3VKSjs7RURwSkU7O0lBRUUsOEJBQUE7RUN1Sko7O0VEcEpFOztJQUVFLDhCQUFBO0VDdUpKO0FBQ0Y7O0FDN0xJOztFQUVFLHlEQUFBO0VBQ0Esb0NBQUE7QUNiTjs7QURnQkk7O0VBRUUseURBQUE7RUFDQSxvQ0FBQTtBQ2JOOztBRGdCSTs7RUFFRSx5REFBQTtFQUNBLHFDQUFBO0FDYk47O0FuQjRFSTtFa0I5RUE7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQ01KOztFREhFOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUNNSjs7RURIRTs7SUFFRSx5REFBQTtJQUNBLHFDQUFBO0VDTUo7QUFDRjs7QW5Cd0RJO0VrQjlFQTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDeUJKOztFRHRCRTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDeUJKOztFRHRCRTs7SUFFRSx5REFBQTtJQUNBLHFDQUFBO0VDeUJKO0FBQ0Y7O0FuQnFDSTtFa0I5RUE7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQzRDSjs7RUR6Q0U7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQzRDSjs7RUR6Q0U7O0lBRUUseURBQUE7SUFDQSxxQ0FBQTtFQzRDSjtBQUNGOztBbkJrQkk7RWtCOUVBOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUMrREo7O0VENURFOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUMrREo7O0VENURFOztJQUVFLHlEQUFBO0lBQ0EscUNBQUE7RUMrREo7QUFDRjs7QUNyRkE7O0VBRUUsaUNBQUE7QUNQRjs7QURVQTs7RUFFRSwrQkFBQTtBQ1BGOztBRFVBOztFQUVFLDZCQUFBO0FDUEY7O0FEVUE7O0VBRUUsOEJBQUE7QUNQRjs7QURVQTs7RUFFRSwrQkFBQTtBQ1BGOztBRFVBOztFQUVFLDJCQUFBO0FDUEY7O0FEY0E7O0VBRUUsMEJBQUE7QUNYRjs7QURjQTs7RUFFRSw0QkFBQTtBQ1hGOztBRGNBOztFQUVFLGtDQUFBO0FDWEY7O0FEa0JBOztFQUVFLHNDQUFBO0FDZkY7O0FEa0JBOztFQUVFLGtDQUFBO0FDZkY7O0FEa0JBOztFQUVFLG9DQUFBO0FDZkY7O0FEa0JBOztFQUVFLHdDQUFBO0FDZkY7O0FEa0JBOztFQUVFLHlDQUFBO0FDZkY7O0FEa0JBOztFQUVFLHdDQUFBO0FDZkY7O0FEc0JBOztFQUVFLGtDQUFBO0FDbkJGOztBRHNCQTs7RUFFRSw4QkFBQTtBQ25CRjs7QURzQkE7O0VBRUUsZ0NBQUE7QUNuQkY7O0FEc0JBOztFQUVFLCtCQUFBO0FDbkJGOztBRHNCQTs7RUFFRSxnQ0FBQTtBQ25CRiIsImZpbGUiOiJzcmMvZ2xvYmFsLnNjc3MifQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ":root {\n  --ion-color-primary: #006;\n  --ion-color-primary-rgb: 18,161,207;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #006;\n  --ion-color-primary-tint: #006;\n  --ion-color-secondary: #b9b9b9;\n  --ion-color-secondary-rgb: 228,76,11;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #b9b9b9;\n  --ion-color-secondary-tint: #b9b9b9;\n  --ion-color-tertiary: #FDDC03;\n  --ion-color-tertiary-rgb: 253,220,3;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0,0,0;\n  --ion-color-tertiary-shade: #dfc203;\n  --ion-color-tertiary-tint: #fde01c;\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16,220,96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255,255,255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255,206,0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245,61,61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34,34,34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255,255,255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152,154,162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244,244,244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --ion-color-codeBV: #F57D32;\n  --ion-color-codeBV-rgb: 245,125,50;\n  --ion-color-codeBV-contrast: #ffffff;\n  --ion-color-codeBV-contrast-rgb: 0,0,0;\n  --ion-color-codeBV-shade: #d86e2c;\n  --ion-color-codeBV-tint: #f68a47;\n  --ion-color-codeCA: #FDDD00;\n  --ion-color-codeCA-rgb: 253,221,0;\n  --ion-color-codeCA-contrast: #000000;\n  --ion-color-codeCA-contrast-rgb: 0,0,0;\n  --ion-color-codeCA-shade: #dfc200;\n  --ion-color-codeCA-tint: #fde01a;\n  --ion-color-codeCO: #12a1cf;\n  --ion-color-codeCO-rgb: 18,161,207;\n  --ion-color-codeCO-contrast: #ffffff;\n  --ion-color-codeCO-contrast-rgb: 255,255,255;\n  --ion-color-codeCO-shade: #108eb6;\n  --ion-color-codeCO-tint: #2aaad4;\n  --ion-color-codeCR: #d86e2c;\n  --ion-color-codeCR-rgb: 216,110,44;\n  --ion-color-codeCR-contrast: #000000;\n  --ion-color-codeCR-contrast-rgb: 0,0,0;\n  --ion-color-codeCR-shade: #be6127;\n  --ion-color-codeCR-tint: #dc7d41;\n  --ion-color-codeES: #ff9858;\n  --ion-color-codeES-rgb: 255,152,88;\n  --ion-color-codeES-contrast: #000000;\n  --ion-color-codeES-contrast-rgb: 0,0,0;\n  --ion-color-codeES-shade: #e0864d;\n  --ion-color-codeES-tint: #ffa269;\n  --ion-color-codeGL: #dfc200;\n  --ion-color-codeGL-rgb: 223,194,0;\n  --ion-color-codeGL-contrast: #000000;\n  --ion-color-codeGL-contrast-rgb: 0,0,0;\n  --ion-color-codeGL-shade: #c4ab00;\n  --ion-color-codeGL-tint: #e2c81a;\n  --ion-color-codeIN: #ebd64a;\n  --ion-color-codeIN-rgb: 235,214,74;\n  --ion-color-codeIN-contrast: #000000;\n  --ion-color-codeIN-contrast-rgb: 0,0,0;\n  --ion-color-codeIN-shade: #cfbc41;\n  --ion-color-codeIN-tint: #edda5c;\n  --ion-color-codeMU: #108eb6;\n  --ion-color-codeMU-rgb: 16,142,182;\n  --ion-color-codeMU-contrast: #ffffff;\n  --ion-color-codeMU-contrast-rgb: 255,255,255;\n  --ion-color-codeMU-shade: #0e7da0;\n  --ion-color-codeMU-tint: #2899bd;\n  --ion-color-codeNE: #6fbdd6;\n  --ion-color-codeNE-rgb: 111,189,214;\n  --ion-color-codeNE-contrast: #000000;\n  --ion-color-codeNE-contrast-rgb: 0,0,0;\n  --ion-color-codeNE-shade: #62a6bc;\n  --ion-color-codeNE-tint: #7dc4da;\n  --ion-color-codeOC: #dc7d41;\n  --ion-color-codeOC-rgb: 220,125,65;\n  --ion-color-codeOC-contrast: #000000;\n  --ion-color-codeOC-contrast-rgb: 0,0,0;\n  --ion-color-codeOC-shade: #c26e39;\n  --ion-color-codeOC-tint: #e08a54;\n  --ion-color-codeON: #e39665;\n  --ion-color-codeON-rgb: 227,150,101;\n  --ion-color-codeON-contrast: #000000;\n  --ion-color-codeON-contrast-rgb: 0,0,0;\n  --ion-color-codeON-shade: #c88459;\n  --ion-color-codeON-tint: #e6a174;\n  --ion-color-codeOP: #c4ab00;\n  --ion-color-codeOP-rgb: 196,171,0;\n  --ion-color-codeOP-contrast: #000000;\n  --ion-color-codeOP-contrast-rgb: 0,0,0;\n  --ion-color-codeOP-shade: #ac9600;\n  --ion-color-codeOP-tint: #cab31a;\n  --ion-color-codePC: #efde6c;\n  --ion-color-codePC-rgb: 239,222,108;\n  --ion-color-codePC-contrast: #000000;\n  --ion-color-codePC-contrast-rgb: 0,0,0;\n  --ion-color-codePC-shade: #d2c35f;\n  --ion-color-codePC-tint: #f1e17b;\n  --ion-color-codeRE: #0e7da0;\n  --ion-color-codeRE-rgb: 14,125,160;\n  --ion-color-codeRE-contrast: #ffffff;\n  --ion-color-codeRE-contrast-rgb: 255,255,255;\n  --ion-color-codeRE-shade: #0c6e8d;\n  --ion-color-codeRE-tint: #268aaa;\n  --ion-color-codeRP: #8acade;\n  --ion-color-codeRP-rgb: 138,202,222;\n  --ion-color-codeRP-contrast: #000000;\n  --ion-color-codeRP-contrast-rgb: 0,0,0;\n  --ion-color-codeRP-shade: #79b2c3;\n  --ion-color-codeRP-tint: #96cfe1;\n  --ion-color-codeTR: #df5c0a;\n  --ion-color-codeTR-rgb: 223,92,10;\n  --ion-color-codeTR-contrast: #ffffff;\n  --ion-color-codeTR-contrast-rgb: 255,255,255;\n  --ion-color-codeTR-shade: #c45109;\n  --ion-color-codeTR-tint: #e26c23;\n  --ion-color-codeUS: #f9e34e;\n  --ion-color-codeUS-rgb: 249,227,78;\n  --ion-color-codeUS-contrast: #000000;\n  --ion-color-codeUS-contrast-rgb: 0,0,0;\n  --ion-color-codeUS-shade: #dbc845;\n  --ion-color-codeUS-tint: #fae660;\n  --ion-color-codeVA: #51b1d0;\n  --ion-color-codeVA-rgb: 81,177,208;\n  --ion-color-codeVA-contrast: #000000;\n  --ion-color-codeVA-contrast-rgb: 0,0,0;\n  --ion-color-codeVA-shade: #479cb7;\n  --ion-color-codeVA-tint: #62b9d5; }\n\n.ion-color-codeBV {\n  --ion-color-base: var(--ion-color-codeBV) !important;\n  --ion-color-base-rgb: var(--ion-color-codeBV-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeBV-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeBV-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeBV-shade) !important;\n  --ion-color-tint: var(--ion-color-codeBV-tint) !important; }\n\n.ion-color-codeCA {\n  --ion-color-base: var(--ion-color-codeCA) !important;\n  --ion-color-base-rgb: var(--ion-color-codeCA-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeCA-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeCA-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeCA-shade) !important;\n  --ion-color-tint: var(--ion-color-codeCA-tint) !important; }\n\n.ion-color-codeCO {\n  --ion-color-base: var(--ion-color-codeCO) !important;\n  --ion-color-base-rgb: var(--ion-color-codeCO-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeCO-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeCO-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeCO-shade) !important;\n  --ion-color-tint: var(--ion-color-codeCO-tint) !important; }\n\n.ion-color-codeCR {\n  --ion-color-base: var(--ion-color-codeCR) !important;\n  --ion-color-base-rgb: var(--ion-color-codeCR-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeCR-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeCR-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeCR-shade) !important;\n  --ion-color-tint: var(--ion-color-codeCR-tint) !important; }\n\n.ion-color-codeES {\n  --ion-color-base: var(--ion-color-codeES) !important;\n  --ion-color-base-rgb: var(--ion-color-codeES-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeES-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeES-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeES-shade) !important;\n  --ion-color-tint: var(--ion-color-codeES-tint) !important; }\n\n.ion-color-codeGL {\n  --ion-color-base: var(--ion-color-codeGL) !important;\n  --ion-color-base-rgb: var(--ion-color-codeGL-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeGL-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeGL-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeGL-shade) !important;\n  --ion-color-tint: var(--ion-color-codeGL-tint) !important; }\n\n.ion-color-codeIN {\n  --ion-color-base: var(--ion-color-codeIN) !important;\n  --ion-color-base-rgb: var(--ion-color-codeIN-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeIN-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeIN-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeIN-shade) !important;\n  --ion-color-tint: var(--ion-color-codeIN-tint) !important; }\n\n.ion-color-codeMU {\n  --ion-color-base: var(--ion-color-codeMU) !important;\n  --ion-color-base-rgb: var(--ion-color-codeMU-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeMU-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeMU-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeMU-shade) !important;\n  --ion-color-tint: var(--ion-color-codeMU-tint) !important; }\n\n.ion-color-codeNE {\n  --ion-color-base: var(--ion-color-codeNE) !important;\n  --ion-color-base-rgb: var(--ion-color-codeNE-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeNE-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeNE-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeNE-shade) !important;\n  --ion-color-tint: var(--ion-color-codeNE-tint) !important; }\n\n.ion-color-codeOC {\n  --ion-color-base: var(--ion-color-codeOC) !important;\n  --ion-color-base-rgb: var(--ion-color-codeOC-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeOC-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeOC-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeOC-shade) !important;\n  --ion-color-tint: var(--ion-color-codeOC-tint) !important; }\n\n.ion-color-codeON {\n  --ion-color-base: var(--ion-color-codeON) !important;\n  --ion-color-base-rgb: var(--ion-color-codeON-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeON-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeON-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeON-shade) !important;\n  --ion-color-tint: var(--ion-color-codeON-tint) !important; }\n\n.ion-color-codeOP {\n  --ion-color-base: var(--ion-color-codeOP) !important;\n  --ion-color-base-rgb: var(--ion-color-codeOP-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeOP-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeOP-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeOP-shade) !important;\n  --ion-color-tint: var(--ion-color-codeOP-tint) !important; }\n\n.ion-color-codePC {\n  --ion-color-base: var(--ion-color-codePC) !important;\n  --ion-color-base-rgb: var(--ion-color-codePC-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codePC-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codePC-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codePC-shade) !important;\n  --ion-color-tint: var(--ion-color-codePC-tint) !important; }\n\n.ion-color-codeRE {\n  --ion-color-base: var(--ion-color-codeRE) !important;\n  --ion-color-base-rgb: var(--ion-color-codeRE-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeRE-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeRE-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeRE-shade) !important;\n  --ion-color-tint: var(--ion-color-codeRE-tint) !important; }\n\n.ion-color-codeRP {\n  --ion-color-base: var(--ion-color-codeRP) !important;\n  --ion-color-base-rgb: var(--ion-color-codeRP-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeRP-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeRP-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeRP-shade) !important;\n  --ion-color-tint: var(--ion-color-codeRP-tint) !important; }\n\n.ion-color-codeTR {\n  --ion-color-base: var(--ion-color-codeTR) !important;\n  --ion-color-base-rgb: var(--ion-color-codeTR-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeTR-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeTR-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeTR-shade) !important;\n  --ion-color-tint: var(--ion-color-codeTR-tint) !important; }\n\n.ion-color-codeUS {\n  --ion-color-base: var(--ion-color-codeUS) !important;\n  --ion-color-base-rgb: var(--ion-color-codeUS-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeUS-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeUS-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeUS-shade) !important;\n  --ion-color-tint: var(--ion-color-codeUS-tint) !important; }\n\n.ion-color-codeVA {\n  --ion-color-base: var(--ion-color-codeVA) !important;\n  --ion-color-base-rgb: var(--ion-color-codeVA-rgb) !important;\n  --ion-color-contrast: var(--ion-color-codeVA-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-codeVA-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-codeVA-shade) !important;\n  --ion-color-tint: var(--ion-color-codeVA-tint) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY2lubm92YXRpb24vSkMgSW5ub3ZhdGlvbiBEcm9wYm94L0plc3XMgXMgQ3VldmFzL01pIE1hYyAoTWFjQm9vay1Qcm8tZGUtSkMtSW5ub3ZhdGlvbi5sb2NhbCkvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFvQjtFQUNwQixtQ0FBd0I7RUFDeEIscUNBQTZCO0VBQzdCLDZDQUFpQztFQUNqQywrQkFBMEI7RUFDMUIsOEJBQXlCO0VBRXpCLDhCQUFzQjtFQUN0QixvQ0FBMEI7RUFDMUIsdUNBQStCO0VBQy9CLCtDQUFtQztFQUNuQyxvQ0FBNEI7RUFDNUIsbUNBQTJCO0VBRTNCLDZCQUFxQjtFQUNyQixtQ0FBeUI7RUFDekIsc0NBQThCO0VBQzlCLHdDQUFrQztFQUNsQyxtQ0FBMkI7RUFDM0Isa0NBQTBCO0VBRTFCLDRCQUFvQjtFQUNwQixrQ0FBd0I7RUFDeEIscUNBQTZCO0VBQzdCLDZDQUFpQztFQUNqQyxrQ0FBMEI7RUFDMUIsaUNBQXlCO0VBRXpCLDRCQUFvQjtFQUNwQixrQ0FBd0I7RUFDeEIscUNBQTZCO0VBQzdCLDZDQUFpQztFQUNqQyxrQ0FBMEI7RUFDMUIsaUNBQXlCO0VBRXpCLDJCQUFtQjtFQUNuQixpQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLDRDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLHlCQUFpQjtFQUNqQiw4QkFBcUI7RUFDckIsa0NBQTBCO0VBQzFCLDBDQUE4QjtFQUM5QiwrQkFBdUI7RUFDdkIsOEJBQXNCO0VBRXRCLDJCQUFtQjtFQUNuQixtQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLDRDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLDBCQUFrQjtFQUNsQixrQ0FBc0I7RUFDdEIsbUNBQTJCO0VBQzNCLHFDQUErQjtFQUMvQixnQ0FBd0I7RUFDeEIsK0JBQXVCO0VBR3ZCLDJCQUFtQjtFQUNuQixrQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLHNDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLDJCQUFtQjtFQUNuQixpQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLHNDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLDJCQUFtQjtFQUNuQixrQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLDRDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLDJCQUFtQjtFQUNuQixrQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLHNDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLDJCQUFtQjtFQUNuQixrQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLHNDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLDJCQUFtQjtFQUNuQixpQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLHNDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLDJCQUFtQjtFQUNuQixrQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLHNDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLDJCQUFtQjtFQUNuQixrQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLDRDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLDJCQUFtQjtFQUNuQixtQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLHNDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLDJCQUFtQjtFQUNuQixrQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLHNDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLDJCQUFtQjtFQUNuQixtQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLHNDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLDJCQUFtQjtFQUNuQixpQ0FBdUI7RUFDdkIsb0NB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aUVBQXFCO0VBQ3JCLHlFQUF5QjtFQUN6QiwyREFBa0I7RUFDbEIseURBQWlCLEVBQUE7O0FBR25CO0VBQ0Usb0RBQWlCO0VBQ2pCLDREQUFxQjtFQUNyQixpRUFBcUI7RUFDckIseUVBQXlCO0VBQ3pCLDJEQUFrQjtFQUNsQix5REFBaUIsRUFBQTs7QUFHbkI7RUFDRSxvREFBaUI7RUFDakIsNERBQXFCO0VBQ3JCLGlFQUFxQjtFQUNyQix5RUFBeUI7RUFDekIsMkRBQWtCO0VBQ2xCLHlEQUFpQixFQUFBOztBQUduQjtFQUNFLG9EQUFpQjtFQUNqQiw0REFBcUI7RUFDckIsaUVBQXFCO0VBQ3JCLHlFQUF5QjtFQUN6QiwyREFBa0I7RUFDbEIseURBQWlCLEVBQUEiLCJmaWxlIjoic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMDA2O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMTgsMTYxLDIwNztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMDA2O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICMwMDY7XG5cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjYjliOWI5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAyMjgsNzYsMTE7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogI2I5YjliOTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICNiOWI5Yjk7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNGRERDMDM7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjUzLDIyMCwzO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICNkZmMyMDM7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICNmZGUwMWM7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzEwZGM2MDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDE2LDIyMCw5NjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XG5cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmY2UwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwyMDYsMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiNTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQzMWE7XG5cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZjA0MTQxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNDUsNjEsNjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2QzMzkzOTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmMjU0NTQ7XG5cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LDM0LDM0O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwxNTQsMTYyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwyNDQsMjQ0O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbi8vIENPRElHT1MgREUgQ09MT1JFU1xuICAtLWlvbi1jb2xvci1jb2RlQlY6ICNGNTdEMzI7XG4gIC0taW9uLWNvbG9yLWNvZGVCVi1yZ2I6IDI0NSwxMjUsNTA7XG4gIC0taW9uLWNvbG9yLWNvZGVCVi1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItY29kZUJWLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLWNvZGVCVi1zaGFkZTogI2Q4NmUyYztcbiAgLS1pb24tY29sb3ItY29kZUJWLXRpbnQ6ICNmNjhhNDc7XG5cbiAgLS1pb24tY29sb3ItY29kZUNBOiAjRkRERDAwO1xuICAtLWlvbi1jb2xvci1jb2RlQ0EtcmdiOiAyNTMsMjIxLDA7XG4gIC0taW9uLWNvbG9yLWNvZGVDQS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItY29kZUNBLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLWNvZGVDQS1zaGFkZTogI2RmYzIwMDtcbiAgLS1pb24tY29sb3ItY29kZUNBLXRpbnQ6ICNmZGUwMWE7XG5cbiAgLS1pb24tY29sb3ItY29kZUNPOiAjMTJhMWNmO1xuICAtLWlvbi1jb2xvci1jb2RlQ08tcmdiOiAxOCwxNjEsMjA3O1xuICAtLWlvbi1jb2xvci1jb2RlQ08tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWNvZGVDTy1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1jb2RlQ08tc2hhZGU6ICMxMDhlYjY7XG4gIC0taW9uLWNvbG9yLWNvZGVDTy10aW50OiAjMmFhYWQ0O1xuXG4gIC0taW9uLWNvbG9yLWNvZGVDUjogI2Q4NmUyYztcbiAgLS1pb24tY29sb3ItY29kZUNSLXJnYjogMjE2LDExMCw0NDtcbiAgLS1pb24tY29sb3ItY29kZUNSLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1jb2RlQ1ItY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItY29kZUNSLXNoYWRlOiAjYmU2MTI3O1xuICAtLWlvbi1jb2xvci1jb2RlQ1ItdGludDogI2RjN2Q0MTtcblxuICAtLWlvbi1jb2xvci1jb2RlRVM6ICNmZjk4NTg7XG4gIC0taW9uLWNvbG9yLWNvZGVFUy1yZ2I6IDI1NSwxNTIsODg7XG4gIC0taW9uLWNvbG9yLWNvZGVFUy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItY29kZUVTLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLWNvZGVFUy1zaGFkZTogI2UwODY0ZDtcbiAgLS1pb24tY29sb3ItY29kZUVTLXRpbnQ6ICNmZmEyNjk7XG5cbiAgLS1pb24tY29sb3ItY29kZUdMOiAjZGZjMjAwO1xuICAtLWlvbi1jb2xvci1jb2RlR0wtcmdiOiAyMjMsMTk0LDA7XG4gIC0taW9uLWNvbG9yLWNvZGVHTC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItY29kZUdMLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLWNvZGVHTC1zaGFkZTogI2M0YWIwMDtcbiAgLS1pb24tY29sb3ItY29kZUdMLXRpbnQ6ICNlMmM4MWE7XG5cbiAgLS1pb24tY29sb3ItY29kZUlOOiAjZWJkNjRhO1xuICAtLWlvbi1jb2xvci1jb2RlSU4tcmdiOiAyMzUsMjE0LDc0O1xuICAtLWlvbi1jb2xvci1jb2RlSU4tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWNvZGVJTi1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1jb2RlSU4tc2hhZGU6ICNjZmJjNDE7XG4gIC0taW9uLWNvbG9yLWNvZGVJTi10aW50OiAjZWRkYTVjO1xuXG4gIC0taW9uLWNvbG9yLWNvZGVNVTogIzEwOGViNjtcbiAgLS1pb24tY29sb3ItY29kZU1VLXJnYjogMTYsMTQyLDE4MjtcbiAgLS1pb24tY29sb3ItY29kZU1VLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1jb2RlTVUtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItY29kZU1VLXNoYWRlOiAjMGU3ZGEwO1xuICAtLWlvbi1jb2xvci1jb2RlTVUtdGludDogIzI4OTliZDtcblxuICAtLWlvbi1jb2xvci1jb2RlTkU6ICM2ZmJkZDY7XG4gIC0taW9uLWNvbG9yLWNvZGVORS1yZ2I6IDExMSwxODksMjE0O1xuICAtLWlvbi1jb2xvci1jb2RlTkUtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWNvZGVORS1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1jb2RlTkUtc2hhZGU6ICM2MmE2YmM7XG4gIC0taW9uLWNvbG9yLWNvZGVORS10aW50OiAjN2RjNGRhO1xuXG4gIC0taW9uLWNvbG9yLWNvZGVPQzogI2RjN2Q0MTtcbiAgLS1pb24tY29sb3ItY29kZU9DLXJnYjogMjIwLDEyNSw2NTtcbiAgLS1pb24tY29sb3ItY29kZU9DLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1jb2RlT0MtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItY29kZU9DLXNoYWRlOiAjYzI2ZTM5O1xuICAtLWlvbi1jb2xvci1jb2RlT0MtdGludDogI2UwOGE1NDtcblxuICAtLWlvbi1jb2xvci1jb2RlT046ICNlMzk2NjU7XG4gIC0taW9uLWNvbG9yLWNvZGVPTi1yZ2I6IDIyNywxNTAsMTAxO1xuICAtLWlvbi1jb2xvci1jb2RlT04tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWNvZGVPTi1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1jb2RlT04tc2hhZGU6ICNjODg0NTk7XG4gIC0taW9uLWNvbG9yLWNvZGVPTi10aW50OiAjZTZhMTc0O1xuXG4gIC0taW9uLWNvbG9yLWNvZGVPUDogI2M0YWIwMDtcbiAgLS1pb24tY29sb3ItY29kZU9QLXJnYjogMTk2LDE3MSwwO1xuICAtLWlvbi1jb2xvci1jb2RlT1AtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWNvZGVPUC1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1jb2RlT1Atc2hhZGU6ICNhYzk2MDA7XG4gIC0taW9uLWNvbG9yLWNvZGVPUC10aW50OiAjY2FiMzFhO1xuXG4gIC0taW9uLWNvbG9yLWNvZGVQQzogI2VmZGU2YztcbiAgLS1pb24tY29sb3ItY29kZVBDLXJnYjogMjM5LDIyMiwxMDg7XG4gIC0taW9uLWNvbG9yLWNvZGVQQy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItY29kZVBDLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLWNvZGVQQy1zaGFkZTogI2QyYzM1ZjtcbiAgLS1pb24tY29sb3ItY29kZVBDLXRpbnQ6ICNmMWUxN2I7XG5cbiAgLS1pb24tY29sb3ItY29kZVJFOiAjMGU3ZGEwO1xuICAtLWlvbi1jb2xvci1jb2RlUkUtcmdiOiAxNCwxMjUsMTYwO1xuICAtLWlvbi1jb2xvci1jb2RlUkUtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWNvZGVSRS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1jb2RlUkUtc2hhZGU6ICMwYzZlOGQ7XG4gIC0taW9uLWNvbG9yLWNvZGVSRS10aW50OiAjMjY4YWFhO1xuXG4gIC0taW9uLWNvbG9yLWNvZGVSUDogIzhhY2FkZTtcbiAgLS1pb24tY29sb3ItY29kZVJQLXJnYjogMTM4LDIwMiwyMjI7XG4gIC0taW9uLWNvbG9yLWNvZGVSUC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItY29kZVJQLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLWNvZGVSUC1zaGFkZTogIzc5YjJjMztcbiAgLS1pb24tY29sb3ItY29kZVJQLXRpbnQ6ICM5NmNmZTE7XG5cbiAgLS1pb24tY29sb3ItY29kZVRSOiAjZGY1YzBhO1xuICAtLWlvbi1jb2xvci1jb2RlVFItcmdiOiAyMjMsOTIsMTA7XG4gIC0taW9uLWNvbG9yLWNvZGVUUi1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItY29kZVRSLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWNvZGVUUi1zaGFkZTogI2M0NTEwOTtcbiAgLS1pb24tY29sb3ItY29kZVRSLXRpbnQ6ICNlMjZjMjM7XG5cbiAgLS1pb24tY29sb3ItY29kZVVTOiAjZjllMzRlO1xuICAtLWlvbi1jb2xvci1jb2RlVVMtcmdiOiAyNDksMjI3LDc4O1xuICAtLWlvbi1jb2xvci1jb2RlVVMtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWNvZGVVUy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1jb2RlVVMtc2hhZGU6ICNkYmM4NDU7XG4gIC0taW9uLWNvbG9yLWNvZGVVUy10aW50OiAjZmFlNjYwO1xuXG4gIC0taW9uLWNvbG9yLWNvZGVWQTogIzUxYjFkMDtcbiAgLS1pb24tY29sb3ItY29kZVZBLXJnYjogODEsMTc3LDIwODtcbiAgLS1pb24tY29sb3ItY29kZVZBLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1jb2RlVkEtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItY29kZVZBLXNoYWRlOiAjNDc5Y2I3O1xuICAtLWlvbi1jb2xvci1jb2RlVkEtdGludDogIzYyYjlkNTtcblxuXG5cbn1cblxuLmlvbi1jb2xvci1jb2RlQlYge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItY29kZUJWKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWNvZGVCVi1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItY29kZUJWLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1jb2RlQlYtY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWNvZGVCVi1zaGFkZSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWNvZGVCVi10aW50KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWNvZGVDQSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1jb2RlQ0EpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItY29kZUNBLXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1jb2RlQ0EtY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWNvZGVDQS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItY29kZUNBLXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItY29kZUNBLXRpbnQpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItY29kZUNPIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWNvZGVDTykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1jb2RlQ08tcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWNvZGVDTy1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItY29kZUNPLWNvbnRyYXN0LXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1jb2RlQ08tc2hhZGUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1jb2RlQ08tdGludCkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1jb2RlQ1Ige1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItY29kZUNSKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWNvZGVDUi1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItY29kZUNSLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1jb2RlQ1ItY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWNvZGVDUi1zaGFkZSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWNvZGVDUi10aW50KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWNvZGVFU3tcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWNvZGVFUykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1jb2RlRVMtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWNvZGVFUy1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItY29kZUVTLWNvbnRyYXN0LXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1jb2RlRVMtc2hhZGUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1jb2RlRVMtdGludCkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1jb2RlR0wge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItY29kZUdMKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWNvZGVHTC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItY29kZUdMLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1jb2RlR0wtY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWNvZGVHTC1zaGFkZSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWNvZGVHTC10aW50KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWNvZGVJTiB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1jb2RlSU4pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItY29kZUlOLXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1jb2RlSU4tY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWNvZGVJTi1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItY29kZUlOLXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItY29kZUlOLXRpbnQpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItY29kZU1Ve1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItY29kZU1VKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWNvZGVNVS1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItY29kZU1VLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1jb2RlTVUtY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWNvZGVNVS1zaGFkZSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWNvZGVNVS10aW50KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWNvZGVORSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1jb2RlTkUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItY29kZU5FLXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1jb2RlTkUtY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWNvZGVORS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItY29kZU5FLXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItY29kZU5FLXRpbnQpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItY29kZU9DIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWNvZGVPQykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1jb2RlT0MtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWNvZGVPQy1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItY29kZU9DLWNvbnRyYXN0LXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1jb2RlT0Mtc2hhZGUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1jb2RlT0MtdGludCkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1jb2RlT057XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1jb2RlT04pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItY29kZU9OLXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1jb2RlT04tY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWNvZGVPTi1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItY29kZU9OLXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItY29kZU9OLXRpbnQpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItY29kZU9QIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWNvZGVPUCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1jb2RlT1AtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWNvZGVPUC1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItY29kZU9QLWNvbnRyYXN0LXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1jb2RlT1Atc2hhZGUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1jb2RlT1AtdGludCkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1jb2RlUEMge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItY29kZVBDKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWNvZGVQQy1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItY29kZVBDLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1jb2RlUEMtY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWNvZGVQQy1zaGFkZSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWNvZGVQQy10aW50KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWNvZGVSRXtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWNvZGVSRSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1jb2RlUkUtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWNvZGVSRS1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItY29kZVJFLWNvbnRyYXN0LXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1jb2RlUkUtc2hhZGUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1jb2RlUkUtdGludCkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1jb2RlUlAge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItY29kZVJQKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWNvZGVSUC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItY29kZVJQLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1jb2RlUlAtY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWNvZGVSUC1zaGFkZSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWNvZGVSUC10aW50KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWNvZGVUUiB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1jb2RlVFIpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItY29kZVRSLXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1jb2RlVFItY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWNvZGVUUi1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItY29kZVRSLXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItY29kZVRSLXRpbnQpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItY29kZVVTe1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItY29kZVVTKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWNvZGVVUy1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItY29kZVVTLWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1jb2RlVVMtY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWNvZGVVUy1zaGFkZSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWNvZGVVUy10aW50KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWNvZGVWQSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1jb2RlVkEpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItY29kZVZBLXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1jb2RlVkEtY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWNvZGVWQS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItY29kZVZBLXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItY29kZVZBLXRpbnQpICFpbXBvcnRhbnQ7XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jcinnovation/JC Innovation Dropbox/Jesús Cuevas/Mi Mac (MacBook-Pro-de-JC-Innovation.local)/Documents/GitHub/smo2019/src/theme/variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! /Users/jcinnovation/JC Innovation Dropbox/Jesús Cuevas/Mi Mac (MacBook-Pro-de-JC-Innovation.local)/Documents/GitHub/smo2019/src/global.scss */"./src/global.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map