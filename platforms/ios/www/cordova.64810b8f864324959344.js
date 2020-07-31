!function(){var e,n,o,t,r;o={},t=[],r={},e=function(n){if(!o[n])throw"module "+n+" not found";var i,a;if(n in r)throw"Cycle in require graph: "+t.slice(r[n]).join("->")+"->"+n;if(o[n].factory)try{return r[n]=t.length,t.push(n),a=(i=o[n]).factory,i.exports={},delete i.factory,a(function(n){var o=n;return"."===n.charAt(0)&&(o=i.id.slice(0,i.id.lastIndexOf("."))+"."+n.slice(2)),e(o)},i.exports,i),i.exports}finally{delete r[n],t.pop()}return o[n].exports},(n=function(e,n){if(Object.prototype.hasOwnProperty.call(o,e))throw"module "+e+" already defined";o[e]={id:e,factory:n}}).remove=function(e){delete o[e]},n.moduleMap=o,"object"==typeof module&&"function"==typeof e&&(module.exports.require=e,module.exports.define=n),n("cordova",function(e,o,t){if(window.cordova&&!(window.cordova instanceof HTMLElement))throw new Error("cordova already defined");var r=e("cordova/channel"),i=e("cordova/platform"),a=document.addEventListener,c=document.removeEventListener,l=window.addEventListener,u=window.removeEventListener,s={},d={};function f(e,n){var o=document.createEvent("Events");if(o.initEvent(e,!1,!1),n)for(var t in n)n.hasOwnProperty(t)&&(o[t]=n[t]);return o}document.addEventListener=function(e,n,o){var t=e.toLowerCase();void 0!==s[t]?s[t].subscribe(n):a.call(document,e,n,o)},window.addEventListener=function(e,n,o){var t=e.toLowerCase();void 0!==d[t]?d[t].subscribe(n):l.call(window,e,n,o)},document.removeEventListener=function(e,n,o){var t=e.toLowerCase();void 0!==s[t]?s[t].unsubscribe(n):c.call(document,e,n,o)},window.removeEventListener=function(e,n,o){var t=e.toLowerCase();void 0!==d[t]?d[t].unsubscribe(n):u.call(window,e,n,o)};var v={define:n,require:e,version:"5.1.1",platformVersion:"5.1.1",platformId:i.id,addWindowEventHandler:function(e){return d[e]=r.create(e)},addStickyDocumentEventHandler:function(e){return s[e]=r.createSticky(e)},addDocumentEventHandler:function(e){return s[e]=r.create(e)},removeWindowEventHandler:function(e){delete d[e]},removeDocumentEventHandler:function(e){delete s[e]},getOriginalHandlers:function(){return{document:{addEventListener:a,removeEventListener:c},window:{addEventListener:l,removeEventListener:u}}},fireDocumentEvent:function(e,n,o){var t=f(e,n);void 0!==s[e]?o?s[e].fire(t):setTimeout(function(){"deviceready"===e&&document.dispatchEvent(t),s[e].fire(t)},0):document.dispatchEvent(t)},fireWindowEvent:function(e,n){var o=f(e,n);void 0!==d[e]?setTimeout(function(){d[e].fire(o)},0):window.dispatchEvent(o)},callbackId:Math.floor(2e9*Math.random()),callbacks:{},callbackStatus:{NO_RESULT:0,OK:1,CLASS_NOT_FOUND_EXCEPTION:2,ILLEGAL_ACCESS_EXCEPTION:3,INSTANTIATION_EXCEPTION:4,MALFORMED_URL_EXCEPTION:5,IO_EXCEPTION:6,INVALID_ACTION:7,JSON_EXCEPTION:8,ERROR:9},callbackSuccess:function(e,n){v.callbackFromNative(e,!0,n.status,[n.message],n.keepCallback)},callbackError:function(e,n){v.callbackFromNative(e,!1,n.status,[n.message],n.keepCallback)},callbackFromNative:function(e,n,o,t,r){try{var i=v.callbacks[e];i&&(n&&o===v.callbackStatus.OK?i.success&&i.success.apply(null,t):n||i.fail&&i.fail.apply(null,t),r||delete v.callbacks[e])}catch(c){var a="Error in "+(n?"Success":"Error")+" callbackId: "+e+" : "+c;throw console&&console.log&&console.log(a),console&&console.log&&c.stack&&console.log(c.stack),v.fireWindowEvent("cordovacallbackerror",{message:a}),c}},addConstructor:function(e){r.onCordovaReady.subscribe(function(){try{e()}catch(n){console.log("Failed to run constructor: "+n)}})}};t.exports=v}),n("cordova/argscheck",function(e,n,o){var t=e("cordova/utils"),r=o.exports,i={A:"Array",D:"Date",N:"Number",S:"String",F:"Function",O:"Object"};r.checkArgs=function(e,n,o,a){if(r.enableChecks){for(var c,l,u=null,s=0;s<e.length;++s){var d=e.charAt(s),f=d.toUpperCase(),v=o[s];if("*"!==d&&(c=t.typeName(v),(null!=v||d!==f)&&c!==i[f])){u="Expected "+i[f];break}}if(u)throw u+=", but got "+c+".",u='Wrong type for parameter "'+(l=s,/\(\s*([^)]*?)\s*\)/.exec(a||o.callee)[1].split(/\s*,\s*/)[l])+'" of '+n+": "+u,"undefined"==typeof jasmine&&console.error(u),TypeError(u)}},r.getValue=function(e,n){return void 0===e?n:e},r.enableChecks=!0}),n("cordova/base64",function(e,n,o){var t=n;t.fromArrayBuffer=function(e){return function(e){for(var n,o=e.byteLength,t="",r=a(),c=0;c<o-2;c+=3)t+=r[(n=(e[c]<<16)+(e[c+1]<<8)+e[c+2])>>12],t+=r[4095&n];return o-c==2?(t+=r[(n=(e[c]<<16)+(e[c+1]<<8))>>12],t+=i[(4095&n)>>6],t+="="):o-c==1&&(t+=r[(n=e[c]<<16)>>12],t+="=="),t}(new Uint8Array(e))},t.toArrayBuffer=function(e){for(var n=atob(e),o=new ArrayBuffer(n.length),t=new Uint8Array(o),r=0,i=n.length;r<i;r++)t[r]=n.charCodeAt(r);return o};var r,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=function(){r=[];for(var e=0;e<64;e++)for(var n=0;n<64;n++)r[64*e+n]=i[e]+i[n];return a=function(){return r},r}}),n("cordova/builder",function(e,n,o){var t=e("cordova/utils");function r(e,n,o){var r=!1;try{e[n]=o}catch(i){r=!0}(r||e[n]!==o)&&t.defineGetter(e,n,function(){return o})}function i(e,n,o,i){i?t.defineGetter(e,n,function(){return console.log(i),delete e[n],r(e,n,o),o}):r(e,n,o)}function a(n,o,r,l){!function(e,n,o){for(var t in e)e.hasOwnProperty(t)&&n.apply(void 0,[e[t],t])}(o,function(o,u){try{var s=o.path?e(o.path):{};r?(void 0===n[u]?i(n,u,s,o.deprecated):void 0!==o.path&&(l?c(n[u],s):i(n,u,s,o.deprecated)),s=n[u]):void 0===n[u]?i(n,u,s,o.deprecated):s=n[u],o.children&&a(s,o.children,r,l)}catch(d){t.alert("Exception building Cordova JS globals: "+d+' for key "'+u+'"')}})}function c(e,n){for(var o in n)n.hasOwnProperty(o)&&(e.prototype&&e.prototype.constructor===e?r(e.prototype,o,n[o]):"object"==typeof n[o]&&"object"==typeof e[o]?c(e[o],n[o]):r(e,o,n[o]))}n.buildIntoButDoNotClobber=function(e,n){a(n,e,!1,!1)},n.buildIntoAndClobber=function(e,n){a(n,e,!0,!1)},n.buildIntoAndMerge=function(e,n){a(n,e,!0,!0)},n.recursiveMerge=c,n.assignOrWrapInDeprecateGetter=i}),n("cordova/channel",function(e,n,o){var t=e("cordova/utils"),r=1,i=function(e,n){this.type=e,this.handlers={},this.state=n?1:0,this.fireArgs=null,this.numHandlers=0,this.onHasSubscribersChange=null},a={join:function(e,n){for(var o=n.length,t=o,r=function(){--t||e()},i=0;i<o;i++){if(0===n[i].state)throw Error("Can only use join with sticky channels.");n[i].subscribe(r)}o||e()},create:function(e){return a[e]=new i(e,!1)},createSticky:function(e){return a[e]=new i(e,!0)},deviceReadyChannelsArray:[],deviceReadyChannelsMap:{},waitForInitialization:function(e){if(e){var n=a[e]||this.createSticky(e);this.deviceReadyChannelsMap[e]=n,this.deviceReadyChannelsArray.push(n)}},initializationComplete:function(e){var n=this.deviceReadyChannelsMap[e];n&&n.fire()}};function c(e){if("function"!=typeof e&&"function"!=typeof e.handleEvent)throw new Error("Must provide a function or an EventListener object implementing the handleEvent interface.")}i.prototype.subscribe=function(e,n){var o,i;c(e),e&&"object"==typeof e?(o=e.handleEvent,n=e):o=e,2!==this.state?(i=e.observer_guid,"object"==typeof n&&(o=t.close(n,o)),i||(i=""+r++),o.observer_guid=i,e.observer_guid=i,this.handlers[i]||(this.handlers[i]=o,this.numHandlers++,1===this.numHandlers&&this.onHasSubscribersChange&&this.onHasSubscribersChange())):o.apply(n||this,this.fireArgs)},i.prototype.unsubscribe=function(e){var n;c(e),this.handlers[n=(e&&"object"==typeof e?e.handleEvent:e).observer_guid]&&(delete this.handlers[n],this.numHandlers--,0===this.numHandlers&&this.onHasSubscribersChange&&this.onHasSubscribersChange())},i.prototype.fire=function(e){var n=Array.prototype.slice.call(arguments);if(1===this.state&&(this.state=2,this.fireArgs=n),this.numHandlers){var o=[];for(var t in this.handlers)o.push(this.handlers[t]);for(var r=0;r<o.length;++r)o[r].apply(this,n);2===this.state&&this.numHandlers&&(this.numHandlers=0,this.handlers={},this.onHasSubscribersChange&&this.onHasSubscribersChange())}},a.createSticky("onDOMContentLoaded"),a.createSticky("onNativeReady"),a.createSticky("onCordovaReady"),a.createSticky("onPluginsReady"),a.createSticky("onDeviceReady"),a.create("onResume"),a.create("onPause"),a.waitForInitialization("onCordovaReady"),a.waitForInitialization("onDOMContentLoaded"),o.exports=a}),n("cordova/exec",function(e,n,o){var t,r=e("cordova"),i=e("cordova/utils"),a=e("cordova/base64"),c=[],l=0,u=0;function s(e){return"ArrayBuffer"===e.CDVType&&(e=function(e){for(var n=new Uint8Array(e.length),o=0;o<e.length;o++)n[o]=e.charCodeAt(o);return n.buffer}(atob(e.data))),e}function d(){var e,n,o,t,u,s=null;if("string"==typeof arguments[0])throw new Error("The old format of this exec call has been removed (deprecated since 2.1). Change to: cordova.exec(null, null, 'Service', 'action', [ arg1, arg2 ]);");n=arguments[1],o=arguments[2],t=arguments[3],s="INVALID",u=(u=arguments[4])||[],((e=arguments[0])||n)&&(s=o+r.callbackId++,r.callbacks[s]={success:e,fail:n}),u=function(e){if(!e||"Array"!==i.typeName(e))return e;var n=[];return e.forEach(function(e,o){"ArrayBuffer"===i.typeName(e)?n.push({CDVType:"ArrayBuffer",data:a.fromArrayBuffer(e)}):n.push(e)}),n}(u),c.push(JSON.stringify([s,o,t,u])),l||1!==c.length||f()}function f(){document.body?(t&&t.contentWindow?t.contentWindow.location="gap://ready":((t=document.createElement("iframe")).style.display="none",t.src="gap://ready",document.body.appendChild(t)),u=setTimeout(function(){c.length&&(function(){if(p!==(t=v())&&d!==t){for(var e=c.shift();e;){var n=JSON.parse(e),o=r.callbacks[n[0]]||{};p(o.success,o.fail,n[1],n[2],n[3]),e=c.shift()}return!0}var t;return!1}()||f())},50)):setTimeout(f)}function v(){var n=e("cordova/exec");return"function"==typeof n.nativeFetchMessages&&"function"==typeof n.nativeEvalAndFetch&&"function"==typeof n.nativeCallback&&p!==n?n:d}function p(){v().apply(null,arguments)}d.nativeFetchMessages=function(){if(u&&(clearTimeout(u),u=0),!c.length)return"";var e="["+c.join(",")+"]";return c.length=0,e},d.nativeCallback=function(e,n,o,t,i){return d.nativeEvalAndFetch(function(){var i=0===n||1===n,a=function(e){var n=[];return e&&e.hasOwnProperty("CDVType")?"MultiPart"===e.CDVType?e.messages.forEach(function(e){n.push(s(e))}):n.push(s(e)):n.push(e),n}(o);setTimeout(function(){r.callbackFromNative(e,i,n,a,t)},0)})},d.nativeEvalAndFetch=function(e){l++;try{return e(),d.nativeFetchMessages()}finally{l--}},p.nativeFetchMessages=function(){return v().nativeFetchMessages.apply(null,arguments)},p.nativeEvalAndFetch=function(){return v().nativeEvalAndFetch.apply(null,arguments)},p.nativeCallback=function(){return v().nativeCallback.apply(null,arguments)},o.exports=p}),n("cordova/exec/proxy",function(e,n,o){var t={};o.exports={add:function(e,n){return console.log("adding proxy for "+e),t[e]=n,n},remove:function(e){var n=t[e];return delete t[e],t[e]=null,n},get:function(e,n){return t[e]?t[e][n]:null}}}),n("cordova/init",function(e,n,o){var t=e("cordova/channel"),r=e("cordova"),i=e("cordova/modulemapper"),a=e("cordova/platform"),c=e("cordova/pluginloader"),l=e("cordova/utils"),u=[t.onNativeReady,t.onPluginsReady];function s(e){for(var n=0;n<e.length;++n)2!==e[n].state&&console.log("Channel not fired: "+e[n].type)}window.setTimeout(function(){2!==t.onDeviceReady.state&&(console.log("deviceready has not fired after 5 seconds."),s(u),s(t.deviceReadyChannelsArray))},5e3),window.navigator&&(window.navigator=function(e){var n=function(){};n.prototype=e;var o=new n;if(n.bind)for(var t in e)"function"==typeof e[t]?o[t]=e[t].bind(e):function(n){l.defineGetterSetter(o,t,function(){return e[n]})}(t);return o}(window.navigator)),window.console||(window.console={log:function(){}}),window.console.warn||(window.console.warn=function(e){this.log("warn: "+e)}),t.onPause=r.addDocumentEventHandler("pause"),t.onResume=r.addDocumentEventHandler("resume"),t.onActivated=r.addDocumentEventHandler("activated"),t.onDeviceReady=r.addStickyDocumentEventHandler("deviceready"),"complete"===document.readyState||"interactive"===document.readyState?t.onDOMContentLoaded.fire():document.addEventListener("DOMContentLoaded",function(){t.onDOMContentLoaded.fire()},!1),window._nativeReady&&t.onNativeReady.fire(),i.clobbers("cordova","cordova"),i.clobbers("cordova/exec","cordova.exec"),i.clobbers("cordova/exec","Cordova.exec"),a.bootstrap&&a.bootstrap(),setTimeout(function(){c.load(function(){t.onPluginsReady.fire()})},0),t.join(function(){i.mapModules(window),a.initialize&&a.initialize(),t.onCordovaReady.fire(),t.join(function(){e("cordova").fireDocumentEvent("deviceready")},t.deviceReadyChannelsArray)},u)}),n("cordova/modulemapper",function(e,o,t){var r,i,a=e("cordova/builder"),c=n.moduleMap;function l(e,n,o,t){if(!(n in c))throw new Error("Module "+n+" does not exist.");r.push(e,n,o),t&&(i[o]=t)}function u(e,n){return e?e.split(".").reduce(function(e,n){return e[n]=e[n]||{}},n):n}o.reset=function(){r=[],i={}},o.clobbers=function(e,n,o){l("c",e,n,o)},o.merges=function(e,n,o){l("m",e,n,o)},o.defaults=function(e,n,o){l("d",e,n,o)},o.runs=function(e){l("r",e,null)},o.mapModules=function(n){var o={};n.CDV_origSymbols=o;for(var t=0,c=r.length;t<c;t+=3){var l=r[t],s=e(r[t+1]);if("r"!==l){var d=r[t+2],f=d.lastIndexOf("."),v=d.substr(0,f),p=d.substr(f+1),h=d in i?"Access made to deprecated symbol: "+d+". "+h:null,g=u(v,n),y=g[p];"m"===l&&y?a.recursiveMerge(y,s):("d"===l&&!y||"d"!==l)&&(d in o||(o[d]=y),a.assignOrWrapInDeprecateGetter(g,p,s,h))}}},o.getOriginalSymbol=function(e,n){var o=e.CDV_origSymbols;if(o&&n in o)return o[n];for(var t=n.split("."),r=e,i=0;i<t.length;++i)r=r&&r[t[i]];return r},o.reset()}),n("cordova/platform",function(e,n,o){o.exports={id:"ios",bootstrap:function(){e("cordova/modulemapper").clobbers("cordova/plugin/ios/console","window.console"),e("cordova/channel").onNativeReady.fire()}}}),n("cordova/plugin/ios/console",function(e,n,o){var t=e("cordova/plugin/ios/logger"),r=o.exports,i=window.console,a=!1,c={};function l(){}function u(e,n){return function(){var o=[].slice.call(arguments);try{e.apply(i,o)}catch(t){}try{n.apply(r,o)}catch(t){}}}for(var s in r.useLogger=function(e){if(arguments.length&&(a=!!e),a&&t.useConsole())throw new Error("console and logger are too intertwingly");return a},r.log=function(){t.useConsole()||t.log.apply(t,[].slice.call(arguments))},r.error=function(){t.useConsole()||t.error.apply(t,[].slice.call(arguments))},r.warn=function(){t.useConsole()||t.warn.apply(t,[].slice.call(arguments))},r.info=function(){t.useConsole()||t.info.apply(t,[].slice.call(arguments))},r.debug=function(){t.useConsole()||t.debug.apply(t,[].slice.call(arguments))},r.assert=function(e){if(!e){var n=t.format.apply(t.format,[].slice.call(arguments,1));r.log("ASSERT: "+n)}},r.clear=function(){},r.dir=function(e){r.log("%o",e)},r.dirxml=function(e){r.log(e.innerHTML)},r.trace=l,r.group=r.log,r.groupCollapsed=r.log,r.groupEnd=l,r.time=function(e){c[e]=(new Date).valueOf()},r.timeEnd=function(e){var n=c[e];if(n){var o=(new Date).valueOf()-n;r.log(e+": "+o+"ms")}else r.warn("unknown timer: "+e)},r.timeStamp=l,r.profile=l,r.profileEnd=l,r.count=l,r.exception=r.log,r.table=function(e,n){r.log("%o",e)},r)"function"==typeof i[s]&&(r[s]=u(i[s],r[s]))}),n("cordova/plugin/ios/logger",function(e,n,o){for(var t,r=n,i=e("cordova/exec"),a=!1,c=!0,l=[],u=!1,s=console,d=["LOG","ERROR","WARN","INFO","DEBUG"],f={},v=0;v<d.length;v++){var p=d[v];f[p]=v,r[p]=p}function h(e,n){n=[e].concat([].slice.call(n)),r.logLevel.apply(r,n)}function g(e,n){try{switch(n){case"j":case"o":return JSON.stringify(e);case"c":return""}}catch(o){return"error JSON.stringify()ing argument: "+o}return null==e?Object.prototype.toString.call(e):e.toString()}t=f.WARN,r.level=function(e){if(arguments.length){if(null===f[e])throw new Error("invalid logging level: "+e);t=f[e]}return d[t]},r.useConsole=function(e){if(arguments.length&&(a=!!e),a){if("undefined"==typeof console)throw new Error("global console object is not defined");if("function"!=typeof console.log)throw new Error("global console object does not have a log function");if("function"==typeof console.useLogger&&console.useLogger())throw new Error("console and logger are too intertwingly")}return a},r.useLogger=function(e){return arguments.length&&(c=!!e),c},r.log=function(e){h("LOG",arguments)},r.error=function(e){h("ERROR",arguments)},r.warn=function(e){h("WARN",arguments)},r.info=function(e){h("INFO",arguments)},r.debug=function(e){h("DEBUG",arguments)},r.logLevel=function(e){var n=[].slice.call(arguments,1),o="string"==typeof n[0]?"":"%o";o.length>0&&n.unshift(o);var d=r.format.apply(r.format,n);if(null===f[e])throw new Error("invalid logging level: "+e);if(!(f[e]>t))if(u||a){if(c&&i(null,null,"Console","logLevel",[e,d]),a){if(console.useLogger())throw new Error("console and logger are too intertwingly");switch(e){case r.LOG:s.log(d);break;case r.ERROR:s.log("ERROR: "+d);break;case r.WARN:s.log("WARN: "+d);break;case r.INFO:s.log("INFO: "+d);break;case r.DEBUG:s.log("DEBUG: "+d)}}}else l.push([e,d])},r.format=function(e,n){return function(e,n){if(null==e)return[""];if(1===arguments.length)return[e.toString()];"string"!=typeof e&&(e=e.toString());for(var o=/(.*?)%(.)(.*)/,t=e,r=[];n.length;){var i=o.exec(t);if(!i)break;var a=n.shift();t=i[3],r.push(i[1]),"%"!==i[2]?r.push(g(a,i[2])):(r.push("%"),n.unshift(a))}r.push(t);var c=[].slice.call(n);return c.unshift(r.join("")),c}(arguments[0],[].slice.call(arguments,1)).join(" ")},r.__onDeviceReady=function(){if(!u){u=!0;for(var e=0;e<l.length;e++){var n=l[e];r.logLevel(n[0],n[1])}l=null}},document.addEventListener("deviceready",r.__onDeviceReady,!1)}),n("cordova/pluginloader",function(e,o,t){var r=e("cordova/modulemapper");function i(e,t,r,i){i=i||r,e in n.moduleMap?r():o.injectScript(t,function(){e in n.moduleMap?r():i()},i)}o.injectScript=function(e,n,o){var t=document.createElement("script");t.onload=n,t.onerror=o,t.src=e,document.head.appendChild(t)},o.load=function(n){var o=function(){for(var e=null,n=document.getElementsByTagName("script"),o="/cordova.js",t=n.length-1;t>-1;t--){var r=n[t].src.replace(/\?.*$/,"");if(r.indexOf(o)===r.length-o.length){e=r.substring(0,r.length-o.length)+"/";break}}return e}();null===o&&(console.log("Could not find cordova.js script tag. Plugin loading may fail."),o=""),i("cordova/plugin_list",o+"cordova_plugins.js",function(){var t=e("cordova/plugin_list");!function(e,n,o){var t=n.length;if(t)for(var a=0;a<n.length;a++)i(n[a].id,e+n[a].file,c);else o();function c(){--t||function(e,n){for(var o,t=0;o=e[t];t++){if(o.clobbers&&o.clobbers.length)for(var i=0;i<o.clobbers.length;i++)r.clobbers(o.id,o.clobbers[i]);if(o.merges&&o.merges.length)for(var a=0;a<o.merges.length;a++)r.merges(o.id,o.merges[a]);o.runs&&r.runs(o.id)}n()}(n,o)}}(o,t,n)},n)}}),n("cordova/urlutil",function(e,n,o){n.makeAbsolute=function(e){var n=document.createElement("a");return n.href=e,n.href}}),n("cordova/utils",function(e,n,o){var t,r=n;function i(e){for(var n="",o=0;o<e;o++){var t=parseInt(256*Math.random(),10).toString(16);1===t.length&&(t="0"+t),n+=t}return n}r.defineGetterSetter=function(e,n,o,t){if(Object.defineProperty){var r={get:o,configurable:!0};t&&(r.set=t),Object.defineProperty(e,n,r)}else e.__defineGetter__(n,o),t&&e.__defineSetter__(n,t)},r.defineGetter=r.defineGetterSetter,r.arrayIndexOf=function(e,n){if(e.indexOf)return e.indexOf(n);for(var o=e.length,t=0;t<o;++t)if(e[t]===n)return t;return-1},r.arrayRemove=function(e,n){var o=r.arrayIndexOf(e,n);return-1!==o&&e.splice(o,1),-1!==o},r.typeName=function(e){return Object.prototype.toString.call(e).slice(8,-1)},r.isArray=Array.isArray||function(e){return"Array"===r.typeName(e)},r.isDate=function(e){return e instanceof Date},r.clone=function(e){if(!e||"function"==typeof e||r.isDate(e)||"object"!=typeof e)return e;var n,o;if(r.isArray(e)){for(n=[],o=0;o<e.length;++o)n.push(r.clone(e[o]));return n}for(o in n={},e)o in n&&n[o]===e[o]||void 0===e[o]||"unknown"==typeof e[o]||(n[o]=r.clone(e[o]));return n},r.close=function(e,n,o){return function(){return n.apply(e,o||arguments)}},r.createUUID=function(){return i(4)+"-"+i(2)+"-"+i(2)+"-"+i(2)+"-"+i(6)},r.extend=(t=function(){},function(e,n){t.prototype=n.prototype,e.prototype=new t,e.__super__=n.prototype,e.prototype.constructor=e}),r.alert=function(e){window.alert?window.alert(e):console&&console.log&&console.log(e)}}),window.cordova=e("cordova"),e("cordova/init")}();