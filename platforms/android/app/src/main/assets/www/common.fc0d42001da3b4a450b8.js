(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6bLf":function(t,n,e){"use strict";e.d(n,"a",function(){return y}),e.d(n,"b",function(){return g}),e.d(n,"c",function(){return s}),e.d(n,"d",function(){return w});var r=e("B5Ai"),i=e("awvO"),o=function(){return e.e(72).then(e.bind(null,"rSHd"))},a=function(){return e.e(73).then(e.bind(null,"NJz6"))};function s(t){return new Promise(function(n,e){t.queue.write(function(){(function(t){var n=t.enteringEl,e=t.leavingEl;(function(t,n,e){void 0!==t&&(t.style.zIndex="back"===e?"99":"101"),void 0!==n&&(n.style.zIndex="100")})(n,e,t.direction),t.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),w(n,!1),e&&w(e,!1)})(t),function(t){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(e){switch(e.label){case 0:return[4,c(t)];case 1:return[2,(n=e.sent())?d(n,t):l(t)]}})})}(t).then(function(e){e.animation&&e.animation.destroy(),u(t),n(e)},function(n){u(t),e(n)})})})}function u(t){var n=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")}function c(t){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(e){switch(e.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,o()]:[2,void 0];case 1:return n=e.sent().iosTransitionAnimation,[3,4];case 2:return[4,a()];case 3:n=e.sent().mdTransitionAnimation,e.label=4;case 4:return[2,n]}})})}function d(t,n){return r.a(this,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return[4,f(n,!0)];case 1:return r.sent(),[4,e.e(2).then(e.bind(null,"LWFY")).then(function(e){return e.create(t,n.baseEl,n)})];case 2:return i=r.sent(),v(n.enteringEl,n.leavingEl),[4,p(i,n)];case 3:return r.sent(),n.progressCallback&&n.progressCallback(void 0),i.hasCompleted&&m(n.enteringEl,n.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function l(t){return r.a(this,void 0,void 0,function(){var n,e;return r.c(this,function(r){switch(r.label){case 0:return n=t.enteringEl,e=t.leavingEl,[4,f(t,!1)];case 1:return r.sent(),v(n,e),m(n,e),[2,{hasCompleted:!0}]}})})}function f(t,n){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(r){switch(r.label){case 0:return e=(void 0!==t.deepWait?t.deepWait:n)?[y(t.enteringEl),y(t.leavingEl)]:[b(t.enteringEl),b(t.leavingEl)],[4,Promise.all(e)];case 1:return r.sent(),[4,h(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})}function h(t,n){return r.a(this,void 0,void 0,function(){return r.c(this,function(e){switch(e.label){case 0:return t?[4,t(n)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}function p(t,n){var e=n.progressCallback,r=new Promise(function(n){return t.onFinish(n)});return e?(t.progressStart(),e(t)):t.play(),r}function v(t,n){g(n,i.a),g(t,i.b)}function m(t,n){g(t,i.c),g(n,i.d)}function g(t,n){if(t){var e=new CustomEvent(n,{bubbles:!1,cancelable:!1});t.dispatchEvent(e)}}function b(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}function y(t){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(e){switch(e.label){case 0:return(n=t)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(y))];case 3:e.sent(),e.label=4;case 4:return[2]}})})}function w(t,n){n?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}},B5Ai:function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"a",function(){return o}),e.d(n,"c",function(){return a});var r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function i(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function o(t,n,e,r){return new(e||(e=Promise))(function(i,o){function a(t){try{u(r.next(t))}catch(n){o(n)}}function s(t){try{u(r.throw(t))}catch(n){o(n)}}function u(t){t.done?i(t.value):new e(function(n){n(t.value)}).then(a,s)}u((r=r.apply(t,n||[])).next())})}function a(t,n){var e,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(t,a)}catch(s){o=[6,s],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}},Bs4g:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(t,n){return function(t){return i(t)}(t).includes(n)},i=function(t){t.Ionic=t.Ionic||{};var n=t.Ionic.platforms;return null==n&&(n=t.Ionic.platforms=o(t)).forEach(function(n){return t.document.documentElement.classList.add("plt-"+n)}),n},o=function(t){return Object.keys(p).filter(function(n){return p[n](t)})},a=function(t){return f(t,/iPad/i)},s=function(t){return f(t,/android|sink/i)},u=function(t){return h(t,"(any-pointer:coarse)")},c=function(t){return d(t)||l(t)},d=function(t){return!!(t.cordova||t.phonegap||t.PhoneGap)},l=function(t){var n=t.Capacitor;return!(!n||!n.isNative)},f=function(t,n){return!(!t.navigator||!t.navigator.userAgent)&&n.test(t.navigator.userAgent)},h=function(t,n){return!!t.matchMedia&&t.matchMedia(n).matches},p={ipad:a,iphone:function(t){return f(t,/iPhone/i)},ios:function(t){return f(t,/iPad|iPhone|iPod/i)},android:s,phablet:function(t){var n=t.innerWidth,e=t.innerHeight,r=Math.min(n,e),i=Math.max(n,e);return r>390&&r<520&&i>620&&i<800},tablet:function(t){var n=t.innerWidth,e=t.innerHeight,r=Math.min(n,e),i=Math.max(n,e);return a(t)||function(t){return s(t)&&!f(t,/mobile/i)}(t)||r>460&&r<820&&i>780&&i<1400},cordova:d,capacitor:l,electron:function(t){return f(t,/electron/)},pwa:function(t){return!!t.matchMedia&&(t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone)},mobile:u,mobileweb:function(t){return u(t)&&!c(t)},desktop:function(t){return!u(t)},hybrid:c}},EJtt:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e("mrSG"),i=e("7Y6Z"),o=e("q8lh"),a=e("Px6c"),s=(e("BuZO"),e("CcnG")),u=e("t/Na"),c=function(){function t(t,n,e){this.http=t,this._as=n,this._ds=e,this.pagina=0,this.dia_actual="",this.dias=[],this.actividad=null}return t.prototype.cargar_todos=function(){return r.b(this,void 0,void 0,function(){var t,n,e,o=this;return r.e(this,function(r){switch(r.label){case 0:return this._as.online?[3,1]:(this._as.presentLoading("Cargando...",.5),t=this._ds.getActividades().then(function(n){return o.dias=n.dias,o.dia_actual=n.diaactual,o.pagina=100,o._as.loading.dismiss(),t}).catch(function(t){return o._as.loading.dismiss(),Promise.reject(t)}),[3,3]);case 1:return this._as.presentLoading("Cargando...",2.5),[4,i.a];case 2:n=r.sent()+"/minutoxminuto.php?todos&pagina="+this.pagina,e=this.http.get(n).toPromise().then(function(t){return o.dias=t.dias,o.dia_actual=t.diaactual,o.pagina=o.pagina+=1,o._as.loading.dismiss(),e}).catch(function(t){return o._as.loading.dismiss(),Promise.reject(t)}),r.label=3;case 3:return[2]}})})},t.prototype.getDetalles=function(t){return r.b(this,void 0,void 0,function(){var n,e,o,a=this;return r.e(this,function(r){switch(r.label){case 0:return this._as.presentLoading("Cargando...",.5),this._as.online?[3,1]:[2,n=this._ds.getActividad(t).then(function(t){return a.actividad=t,a._as.loading.dismiss(),n}).catch(function(t){return a._as.loading.dismiss(),Promise.reject(t)})];case 1:return[4,i.a];case 2:return e=r.sent()+"/actividad.php?id="+t,[2,o=this.http.get(e).toPromise().then(function(t){return a.actividad=t[0],a._as.loading.dismiss(),o}).catch(function(t){return a._as.loading.dismiss(),Promise.reject(t)})]}})})},t.prototype.buscar=function(t){return r.b(this,void 0,void 0,function(){var n,e,o=this;return r.e(this,function(r){switch(r.label){case 0:return[4,i.a];case 1:return n=r.sent()+"/minutoxminuto.php?search="+t,e=this.http.get(n).toPromise().then(function(t){o.dias=t.dias,o.dia_actual=t.diaactual,o.pagina=0;for(var n=0,r=o.dias;n<r.length;n++){o.dia_actual=r[n].clave_dia;break}return e}).catch(function(t){return Promise.reject(t)}),[2]}})})},t.prototype.actividadesPonente=function(t){return r.b(this,void 0,void 0,function(){var n,e,o=this;return r.e(this,function(r){switch(r.label){case 0:return[4,i.a];case 1:return n=r.sent()+"/actividadesprofesor.php?profesor="+t,e=this.http.get(n).toPromise().then(function(t){return console.log(t),o.actsPonente=t.actividades,e}).catch(function(t){return Promise.reject(t)}),[2]}})})},t.ngInjectableDef=s.S({factory:function(){return new t(s.W(u.c),s.W(o.a),s.W(a.a))},token:t,providedIn:"root"}),t}()},JvIM:function(t,n,e){"use strict";function r(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function i(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var n=t.closest("ion-item");return n?n.querySelector("ion-label"):null}function a(t,n,e,r,o){if(t||i(n)){var a=n.querySelector("input.aux-input");a||((a=n.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),n.appendChild(a)),a.disabled=o,a.name=e,a.value=r||""}}function s(t,n,e){return Math.max(t,Math.min(n,e))}function u(t){return t.timeStamp||Date.now()}function c(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function d(t,n){var e="rtl"===t.document.dir;switch(n){case"start":return e;case"end":return!e;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function l(t,n){var e=t._original||t;return{_original:t,emit:f(e.emit.bind(e),n)}}function f(t,n){var e;return void 0===n&&(n=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(e),e=setTimeout.apply(void 0,[t,n].concat(r))}}e.d(n,"a",function(){return r}),e.d(n,"b",function(){return u}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return o}),e.d(n,"e",function(){return a}),e.d(n,"f",function(){return l}),e.d(n,"g",function(){return d}),e.d(n,"h",function(){return s}),e.d(n,"i",function(){return f}),e.d(n,"j",function(){return c})},awvO:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return a}),e.d(n,"e",function(){return s});var r="ionViewWillEnter",i="ionViewDidEnter",o="ionViewWillLeave",a="ionViewDidLeave",s="ionViewWillUnload"},dYSE:function(t,n,e){"use strict";e.d(n,"a",function(){return p}),e.d(n,"b",function(){return h}),e.d(n,"c",function(){return u}),e.d(n,"d",function(){return c}),e.d(n,"e",function(){return f}),e.d(n,"f",function(){return o}),e.d(n,"g",function(){return a}),e.d(n,"h",function(){return s});var r=e("B5Ai"),i=0;function o(t,n){var e=t.ownerDocument;(function(t){0===i&&(i=1,t.addEventListener("focusin",function(n){var e=s(t);if(e&&e.backdropDismiss&&!function(t,n){for(;n;){if(n===t)return!0;n=n.parentElement}return!1}(e,n.target)){var r=e.querySelector("input,button");r&&r.focus()}}),t.addEventListener("ionBackButton",function(n){var e=s(t);e&&e.backdropDismiss&&n.detail.register(100,function(){return e.dismiss(void 0,p)})}),t.addEventListener("keyup",function(n){if("Escape"===n.key){var e=s(t);e&&e.backdropDismiss&&e.dismiss(void 0,p)}}))})(e),Object.assign(t,n),t.classList.add("overlay-hidden");var r=i++;return t.overlayIndex=r,t.hasAttribute("id")||(t.id="ion-overlay-"+r),d(e).appendChild(t),t.componentOnReady()}function a(t,n,e,r,i){var o=s(t,r,i);return o?o.dismiss(n,e):Promise.reject("overlay does not exist")}function s(t,n,e){var r=function(t,n){var e=Array.from(d(t).children).filter(function(t){return t.overlayIndex>0});return void 0===n?e:(n=n.toUpperCase(),e.filter(function(t){return t.tagName===n}))}(t,n);return void 0===e?r[r.length-1]:r.find(function(t){return t.id===e})}function u(t,n,e,i,o){return r.a(this,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:return t.presented?[2]:(t.presented=!0,t.willPresent.emit(),a=t.enterAnimation?t.enterAnimation:t.config.get(n,"ios"===t.mode?e:i),[4,l(t,a,t.el,o)]);case 1:return r.sent()&&t.didPresent.emit(),[2]}})})}function c(t,n,e,i,o,a,s){return r.a(this,void 0,void 0,function(){var u,c;return r.c(this,function(r){switch(r.label){case 0:if(!t.presented)return[2,!1];t.presented=!1,r.label=1;case 1:return r.trys.push([1,3,,4]),t.willDismiss.emit({data:n,role:e}),u=t.leaveAnimation?t.leaveAnimation:t.config.get(i,"ios"===t.mode?o:a),[4,l(t,u,t.el,s)];case 2:return r.sent(),t.didDismiss.emit({data:n,role:e}),[3,4];case 3:return c=r.sent(),console.error(c),[3,4];case 4:return t.el.remove(),[2,!0]}})})}function d(t){return t.querySelector("ion-app")||t.body}function l(t,n,i,o){return r.a(this,void 0,void 0,function(){var a,s,u,c;return r.c(this,function(r){switch(r.label){case 0:return t.animation?(t.animation.destroy(),t.animation=void 0,[2,!1]):(i.classList.remove("overlay-hidden"),a=i.shadowRoot||t.el,u=t,[4,e.e(2).then(e.bind(null,"LWFY")).then(function(t){return t.create(n,a,o)})]);case 1:return s=u.animation=r.sent(),t.animation=s,t.animated&&t.config.getBoolean("animated",!0)||s.duration(0),t.keyboardClose&&s.beforeAddWrite(function(){var t=i.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}),[4,s.playAsync()];case 2:return r.sent(),c=s.hasCompleted,s.destroy(),t.animation=void 0,[2,c]}})})}function f(t,n){var e,r=new Promise(function(t){return e=t});return function(t,n,e){var r=function(i){t.removeEventListener(n,r),e(i)};t.addEventListener(n,r)}(t,n,function(t){e(t.detail)}),r}function h(t){return"cancel"===t||t===p}var p="backdrop"},jT1R:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var r=e("B5Ai");function i(t,n,e,i,o){return r.a(this,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(n,e,o,i)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e,i&&i.forEach(function(t){return a.classList.add(t)}),o&&Object.assign(a,o),n.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,a]}})})}function o(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},k6lV:function(t,n,e){"use strict";e.r(n),e.d(n,"createGesture",function(){return f}),e.d(n,"GESTURE_CONTROLLER",function(){return u});var r,i=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new a(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,n,e){return this.canStart(t)?(this.requestedStart.set(n,e),!0):(this.requestedStart.delete(n),!1)},t.prototype.capture=function(t,n,e){if(!this.start(t,n,e))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(t){i=Math.max(i,t)}),i===e){this.capturedId=n,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(o),!0}return r.delete(n),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0===e&&(e=new Set,this.disabledGestures.set(t,e)),e.add(n)},t.prototype.enableGesture=function(t,n){var e=this.disabledGestures.get(t);void 0!==e&&e.delete(n)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(s)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(s)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var n=this.disabledGestures.get(t);return!!(n&&n.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),o=function(){function t(t,n,e,r,i){this.id=n,this.name=e,this.disableScroll=i,this.priority=1e6*r+n,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),a=function(){function t(t,n,e,r){this.id=n,this.disable=e,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.disableGesture(n[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,n=this.disable;t<n.length;t++)this.ctrl.enableGesture(n[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),s="backdrop-no-scroll",u=new i(document);function c(t,n,e,i){var o,a,s=function(t){if(void 0===r)try{var n=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},n)}catch(t){r=!1}return!!r}(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(o="addEventListener",a="removeEventListener"),t[o](n,e,s),function(){t[a](n,e,s)}}var d=2e3;function l(t){return t instanceof Document?t:t.ownerDocument}function f(t){var n=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),e=n.canStart,r=n.onWillStart,i=n.onStart,o=n.onEnd,a=n.notCaptured,s=n.onMove,f=n.threshold,m=n.queue,g={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},b=function(t,n,e,r,i){var o,a,s,u,f,h,p,v=0;function m(r){v=Date.now()+d,n(r)&&(!a&&e&&(a=c(t,"touchmove",e,i)),s||(s=c(t,"touchend",b,i)),u||(u=c(t,"touchcancel",b,i)))}function g(r){v>Date.now()||n(r)&&(!h&&e&&(h=c(l(t),"mousemove",e,i)),p||(p=c(l(t),"mouseup",y,i)))}function b(t){w(),r&&r(t)}function y(t){S(),r&&r(t)}function w(){a&&a(),s&&s(),u&&u(),a=s=u=void 0}function S(){h&&h(),p&&p(),h=p=void 0}function _(){w(),S()}function k(n){n?(o&&o(),f&&f(),o=f=void 0,_()):(o||(o=c(t,"touchstart",m,i)),f||(f=c(t,"mousedown",g,i)))}return{setDisabled:k,stop:_,destroy:function(){k(!0),r=e=n=void 0}}}(n.el,function(t){var n=v(t);return!(_||!k)&&(p(t,g),g.startX=g.currentX,g.startY=g.currentY,g.startTimeStamp=g.timeStamp=n,g.velocityX=g.velocityY=g.deltaX=g.deltaY=0,g.event=t,(!e||!1!==e(g))&&(w.release(),!!w.start()&&(_=!0,0===f?L():(y.start(g.startX,g.startY),!0))))},function(t){S?!E&&k&&(E=!0,h(g,t),m.write(P)):(h(g,t),y.detect(g.currentX,g.currentY)&&(y.isGesture()&&L()||(D(),b.stop(),a&&a(g))))},T,{capture:!1}),y=function(t,n,e){var r=e*(Math.PI/180),i="x"===t,o=Math.cos(r),a=n*n,s=0,u=0,c=!1,d=0;return{start:function(t,n){s=t,u=n,d=0,c=!0},detect:function(t,n){if(!c)return!1;var e=t-s,r=n-u,l=e*e+r*r;if(l<a)return!1;var f=Math.sqrt(l),h=(i?e:r)/f;return d=h>o?1:h<-o?-1:0,c=!1,!0},isGesture:function(){return 0!==d},getDirection:function(){return d}}}(n.direction,n.threshold,n.maxAngle),w=u.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),S=!1,_=!1,k=!0,E=!1;function P(){S&&(E=!1,s&&s(g))}function L(){return!(w&&!w.capture()||(S=!0,k=!1,g.startX=g.currentX,g.startY=g.currentY,g.startTimeStamp=g.timeStamp,r?r(g).then(C):C(),0))}function C(){i&&i(g),k=!0}function D(){S=!1,_=!1,E=!1,k=!0,w.release()}function T(t){var n=S,e=k;D(),e&&(h(g,t),n?o&&o(g):a&&a(g))}return{setDisabled:function(t){t&&S&&T(void 0),b.setDisabled(t)},destroy:function(){w.destroy(),b.destroy()}}}function h(t,n){if(n){var e=t.currentX,r=t.currentY,i=t.timeStamp;p(n,t);var o=t.currentX,a=t.currentY,s=(t.timeStamp=v(n))-i;if(s>0&&s<100){var u=(a-r)/s;t.velocityX=(o-e)/s*.7+.3*t.velocityX,t.velocityY=.7*u+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=a-t.startY,t.event=n}}function p(t,n){var e=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];e=o.clientX,r=o.clientY}else void 0!==t.pageX&&(e=t.pageX,r=t.pageY)}n.currentX=e,n.currentY=r}function v(t){return t.timeStamp||Date.now()}},on2l:function(t,n,e){"use strict";e.d(n,"a",function(){return d});var r=e("mrSG"),i=e("7Y6Z"),o=e("q8lh"),a=e("ZZ/e"),s=e("CcnG"),u=e("iw74"),c=e("t/Na"),d=function(){function t(t,n,e,r){this.storage=t,this.http=n,this._as=e,this.navCtrl=r,this.token=null,this.usuario={}}return t.prototype.login=function(t,n){var e=this,r={email:t,password:n},o=i.a+"/login.php";return new Promise(function(t){e.http.post(o,r).subscribe(function(n){console.log(n),n.error?(e.token=null,e.storage.remove("token"),t(!1)):(e.guardarToken(n.token),t(!0))})})},t.prototype.registro=function(t){var n=this,e=i.a+"/registro.php";return new Promise(function(r){n.http.post(e,t).subscribe(function(t){console.log(t),t.error?(n._as.presentAlert(t.mensaje),n.token=null,n.storage.remove("token"),r(!1)):(n.guardarToken(t.token),r(!0))})})},t.prototype.getUsuario=function(){return r.b(this,void 0,void 0,function(){return r.e(this,function(t){switch(t.label){case 0:return[4,this.validaToken()];case 1:return t.sent(),[4,r.a({},this.usuario)];case 2:return[2,t.sent()]}})})},t.prototype.guardarToken=function(t){return r.b(this,void 0,void 0,function(){return r.e(this,function(n){switch(n.label){case 0:return this.token=t,[4,this.storage.set("token",t)];case 1:return n.sent(),[2]}})})},t.prototype.cargarToken=function(){return r.b(this,void 0,void 0,function(){var t;return r.e(this,function(n){switch(n.label){case 0:return t=this,[4,this.storage.get("token")];case 1:return t.token=n.sent()||null,[2]}})})},t.prototype.existeToken=function(){return r.b(this,void 0,void 0,function(){return r.e(this,function(t){switch(t.label){case 0:return[4,this.cargarToken()];case 1:return t.sent(),this.token?(console.log("Si existe token"),[2,Promise.resolve(!0)]):(console.log("No existe token"),[2,Promise.resolve(!1)])}})})},t.prototype.tienePermiso=function(){return r.b(this,void 0,void 0,function(){return r.e(this,function(t){switch(t.label){case 0:return[4,this.cargarToken()];case 1:return t.sent(),this.token?(console.log("Si existe token"),[2,Promise.resolve(!0)]):(this._as.presentAlert("Reg\xedstrate para ver esta secci\xf3n"),[2,Promise.resolve(!1)])}})})},t.prototype.validaToken=function(){return r.b(this,void 0,void 0,function(){var t=this;return r.e(this,function(n){switch(n.label){case 0:return[4,this.cargarToken()];case 1:return n.sent(),this.token?[2,new Promise(function(n){t.http.post(i.a+"/usuario.php",{token:t.token}).subscribe(function(e){e.id?(t.usuario=e,n(!0)):(t.navCtrl.navigateRoot("/tabs/login"),n(!1))})})]:(this.navCtrl.navigateRoot("/tabs/login"),[2,Promise.resolve(!1)])}})})},t.prototype.logout=function(){this.token=null,this.usuario=null,this.storage.remove("token"),this.navCtrl.navigateRoot("/tabs/login",{animated:!0})},t.prototype.actualizarUsuario=function(t){var n=this;return new Promise(function(e){n.http.post(i.a+"/updateuser.php",t).subscribe(function(t){e(!!t.success)})})},t.ngInjectableDef=s.S({factory:function(){return new t(s.W(u.b),s.W(c.c),s.W(o.a),s.W(a.Hb))},token:t,providedIn:"root"}),t}()},"pC/p":function(t,n,e){"use strict";e.d(n,"a",function(){return u});var r=e("mrSG"),i=e("q8lh"),o=e("7Y6Z"),a=e("CcnG"),s=e("t/Na"),u=function(){function t(t,n){this.http=t,this._as=n,this.pagina=0}return t.prototype.getDetalles=function(t){return r.b(this,void 0,void 0,function(){var n=this;return r.e(this,function(e){return this._as.online?(this._as.presentLoading("Cargando..."),[2,this.http.get(o.a+"/usuarios.php?id="+t).toPromise().then(function(t){return n.congresista=t.resultados[0],n._as.loading.dismiss(),t}).catch(function(t){return n._as.loading.dismiss(),Promise.reject(t)})]):[2,!1]})})},t.prototype.cargar_todos=function(){var t=this;return this._as.presentLoading("Cargando..."),this.http.get(o.a+"/usuarios.php?todos&pagina="+this.pagina).toPromise().then(function(n){return t.congresistas=n.resultados,t.pagina=t.pagina+=1,t._as.loading.dismiss(),n}).catch(function(n){return t._as.loading.dismiss(),Promise.reject(n)})},t.prototype.siguiente_pagina=function(){return r.b(this,void 0,void 0,function(){var t,n=this;return r.e(this,function(e){switch(e.label){case 0:return this._as.online?[4,this.http.get(o.a+"/usuarios.php?todos&pagina="+this.pagina).toPromise().then(function(e){var r;return e.resultados.length>0?((r=n.congresistas).push.apply(r,e.resultados),n.pagina=n.pagina+=1):n._as.presentToast("No hay mas informaci\xf3n"),t}).catch(function(t){return n._as.presentToast("Ocurrio un error"),Promise.reject(t)})]:[2,!1];case 1:return[2,t=e.sent()]}})})},t.prototype.buscar=function(t){return r.b(this,void 0,void 0,function(){var n,e=this;return r.e(this,function(r){switch(r.label){case 0:return[4,this.http.get(o.a+"/usuarios.php?search="+t).toPromise().then(function(t){return e.congresistas=null,e.congresistas=t.resultados,e.pagina=1,n}).catch(function(t){return e._as.presentToast("Ocurrio un error"),Promise.reject(t)})];case 1:return[2,n=r.sent()]}})})},t.prototype.recargar=function(t){return r.b(this,void 0,void 0,function(){var n,e=this;return r.e(this,function(r){switch(r.label){case 0:return this._as.online?[3,1]:(this.cargar_todos(),[2,!0]);case 1:return this.pagina=0,this._as.presentLoading("Recargando..."),[4,this.http.get(o.a+"/usuarios.php?todos&pagina="+this.pagina+"&search="+t).toPromise().then(function(t){return t.resultados.length>0?(e.congresistas=t.resultados,e.pagina=1):e._as.presentToast("No hay mas informaci\xf3n"),e._as.loading.dismiss(),n}).catch(function(t){return e._as.loading.dismiss(),Promise.reject(t)})];case 2:return[2,n=r.sent()]}})})},t.ngInjectableDef=a.S({factory:function(){return new t(a.W(s.c),a.W(i.a))},token:t,providedIn:"root"}),t}()},yIUm:function(t,n,e){"use strict";e.d(n,"a",function(){return s}),e.d(n,"b",function(){return c}),e.d(n,"c",function(){return o}),e.d(n,"d",function(){return i}),e.d(n,"e",function(){return a});var r=e("B5Ai");function i(t,n){return null!==n.closest(t)}function o(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0}function a(t,n){var e;return(e={})[n]=!0,e[n+"-"+t]=void 0!==t,e}function s(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n}var u=/^[a-z][a-z0-9+\-.]*:/;function c(t,n,e,i){return r.a(this,void 0,void 0,function(){var o;return r.c(this,function(r){switch(r.label){case 0:return null==n||"#"===n[0]||u.test(n)?[3,2]:(o=t.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return r.sent(),[2,o.push(n,i)];case 2:return[2,!1]}})})}},ySCp:function(t,n,e){"use strict";function r(){var t=window.TapticEngine;t&&t.selection()}function i(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function o(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function a(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"d",function(){return r})}}]);