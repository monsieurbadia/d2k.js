(function () {function z(a){return a&&a.__esModule?{d:a.default}:{d:a}}var I={};function Q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Q(Object(t),!0).forEach(function(r){var $IxO8$$interop$default=z(C);$IxO8$$interop$default.d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var C={};function Pa(e,r,$){return r in e?Object.defineProperty(e,r,{value:$,enumerable:!0,configurable:!0,writable:!0}):e[r]=$,e}C=Pa;var J,q={};!function(){function r(r){return r&&r.__esModule?{d:r.default}:{d:r}}var e={};function t(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function n(e){for(var n=1;n<arguments.length;n++){var c=null!=arguments[n]?arguments[n]:{};n%2?t(Object(c),!0).forEach(function(t){r(o).d(e,t,c[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):t(Object(c)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(c,r))})}return e}var o={};o=function(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r};var c={keys2Array:function(r){return Object.keys(n({},r)).map(function(r){return r})},keysValue2Array:function(r){return Object.keys(n({},r)).map(function(e){return r[e]})}},i=function(r){throw new Error(r)},u=Object.freeze({set required(r){i(r)},get required(){i("required parameter")}}),a=function(r){return Object.keys(r).forEach(function(e){return r[e].hasOwnProperty(e)||!Object.isFrozen(r[e])?a(r[e]):r[e]}),Object.freeze(r)};function f(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){r(o).d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var p=function(r){return Array.isArray(r)},O={array:p,exist:function(r){return Object.keys(s({},r)).length>0},empty:function(r){return!Object.keys(s({},r)).length},include:function(r,e){return p(r)?r.includes(e):void 0!==Object.keys(s({},r)).find(function(r){return r===e})}},b={};b=function(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n};var y={};y=function(r){if(Array.isArray(r))return b(r)};var d={};d=function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)};var l={};l=function(r,e){if(r){if("string"==typeof r)return b(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(r,e):void 0}};var j={};j=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var w;w=function(r){return y(r)||d(r)||l(r)||j()};function g(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function v(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(t){r(o).d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var P=function(e,t,n){var o=r(w);return[].concat(o.d(e),[0===n?t.toUpperCase():t])},h={toFirstLetterUpperCase:function(r){return r.trim().toLowerCase().split("").reduce(P,"").join("")},ToInt:function(r,e){return r.split(e).map(function(r){return window.parseInt(r)})}},S=window.navigator.userAgent,$=a({convert:c,debounce:function(r,e){var t;return function(n){window.clearTimeout(t),t=window.setTimeout(r(n),e)}},fail:u,frozen:a,is:O,loop:function(e,t){return r(w).d(e).forEach(function(r,e,n){return t(r,e,n)})},merge:function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){r(o).d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}({},e,{},t)},oftype:function(r){return Object.prototype.toString.call(r).slice(8,-1).toLowerCase()},pipe:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(r){return[].concat(e).reduce(function(r,e){return e(r)},r||Object.create(null))}},ratio169:function(r){return Math.round(r/16*9)},reducer:function(e,t){return Object.keys(m({},e)).reduce(function(n,c){return m({},n,r(o).d({},c,t(e[c])))},e)},strings:h,ua:{android:function(r){return /Android/.test(S)},egde:function(r){return /Edge/.test(S)&&window.MSStream},ie:function(r){return /MSIE/.test(S)&&window.MSStream},ios:function(r){return /iPad|iPhone|iPod/.test(S)&&!window.MSStream},phone:function(r){return /iPhone|iPod|Android/.test(S)}},uniqid:function(r){return"".concat(Math.random().toString(36).substr(2,9))},"\u03C0":{degrees:function(r){return r/Math.PI*180},radians:function(r){return r*Math.PI/180},distance:function(r,e){var t=e.x-r.x,n=e.y-r.y;return Math.sqrt(t*t+n*n)},randomize:{float:function(r,e){return Math.random()*(e-r)+r},int:function(r,e){return Math.floor(Math.random()*(e-r))+r}}}});e.default=$,e=$,"object"==typeof q?q=e:"function"==typeof J&&J.amd?J(function(){return e}):this.u3s=e}();function U(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(e);r&&($=$.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,$)}return t}function Na(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?U(Object(t),!0).forEach(function(r){var $IxO8$$interop$default=z(C);$IxO8$$interop$default.d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var K,da={};function Fa(t){return(Fa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){var t={},r={};r=function(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e};var n={};n=function(t){if(Array.isArray(t))return r(t)};var e={};e=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)};var o={};o=function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}};var i={};i=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var f;f=function(t){return n(t)||e(t)||o(t)||i()};var u={},a=function(t,r){var n=function(t){return t&&t.__esModule?{d:t.default}:{d:t}}(f);return!(!t||!r||(u[t]||(u[t]=[]),u[t]=[].concat(n.d(u[t]),[r]),0))},c=function(t){return u[t]&&delete u[t]},l=function(t,r){var n=function(t){return u[t]}(t);return!!n&&(null==n||n.forEach(function(t){return window.setTimeout(function(n){return t.fs.reduce(function(t,r){return r(t)},r)},0)}),!0)},y=Object.freeze(function(){return{onsignal:a,offsignal:c,transmit:l}}),$=Object.freeze(function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return{fs:r.filter(function(t){return t instanceof Function})}});t.Station=y,t.Satellite=$,"object"===(void 0===da?"undefined":Fa(da))?da=t:"function"==typeof K&&K.amd?K(function(){return t}):this.SIG3=t}();var A=function(e,r){var t=e.split(/[-._]/g);return t.reduce(function(e,p,s){return e+=q.strings.toFirstLetterUpperCase(p),r&&s===t.length-1&&(e+=q.strings.toFirstLetterUpperCase(r)),e},"")};var Ea=function(e,a){var r=new e[A(a.option.type,"camera")]("Camera",Math.PI/2,Math.PI/2,2,e.Vector3.Zero(0,0,10),e.d2kCoreData.scene);return r.setTarget(e.Vector3.Zero()),e.d2kCoreData.scene.activeCamera.attachControl(e.d2kCoreData.canvas,!0),e.d2kCoreData.scene.autoClear=!1,r};var Da=function(n){var e=n.d2kCoreData.canvas,r=new n.Engine(e,!0);return n.d2kCoreData.engine=r,r};var ea=function(e,t){return new e[A(t.option.type,"light")]("light",new BABYLON.Vector3(0,-1,0),e.d2kCoreData.scene)};var xa=function(e,r){return BABYLON.MeshBuilder.CreateSphere("sphere",{diameter:1,segments:32},e.d2kCoreData.scene)};var va=function(e){var n=e.d2kCoreData,r=n.engine,a=n.canvas,t=new e.Scene(r);return t.autoClear=!1,t.attachControl(a),t.beforeRender=function(){r._currentProgram=null,r.wipeCaches(!0)},e.d2kCoreData.scene=t,Object.assign(t,{})};var ua={};function Y(t,r){return ua=Y=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},Y(t,r)}ua=Y;var na={};function ma(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}na=ma;var ba={};function ca(t,r,$){return ba=ca=na()?Reflect.construct:function(t,r,$){var e=[null];e.push.apply(e,r);var c=new(Function.bind.apply(t,e));return $&&ua(c,$.prototype),c},ca.apply(null,arguments)}ba=ca;var M={};function fa(r,a){(null==a||a>r.length)&&(a=r.length);for(var $=0,e=new Array(a);$<a;$++)e[$]=r[$];return e}M=fa;var za={};function ga(r){if(Array.isArray(r))return M(r)}za=ga;var ha={};function ia(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}ha=ia;var ja={};function ka(r,a){if(r){if("string"==typeof r)return M(r,a);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?M(r,a):void 0}}ja=ka;var la={};function Ua(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}la=Ua;var H={};function oa(r){return za(r)||ha(r)||ja(r)||la()}H=oa;var pa=function(r,e){var t;("object"!==q.oftype(r)||q.is.empty(r))&&console.assert("object"===q.oftype(r),"\"%s\" is not an \"object\"","camera");var $dJhE$$interop$default=z(ba);var $Fhqp$$interop$default=z(H);var o=A(e.option.type,"camera"),$=$dJhE$$interop$default.d(r[o],$Fhqp$$interop$default.d(e.option.args));return(t=$.position).set.apply(t,$Fhqp$$interop$default.d(e.option.position)),$};var qa=function(e,r){var $dJhE$$interop$default=z(ba);var $Fhqp$$interop$default=z(H);return $dJhE$$interop$default.d(e[A(r.type,"geometry")],$Fhqp$$interop$default.d(r.args))};var ra=function(r){return new r[A("group",null)]};var sa=function(r,t){var $Fhqp$$interop$default=z(H);return new r[A(t.option.type,"light")](q.strings.ToInt.apply(q.strings,$Fhqp$$interop$default.d(t.option.args).concat([" "])))};var ta={};var X={},W=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return G()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(k([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(s).then(function(t){f.value=t,a(f)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function $(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:G}}function G(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(X);try{regeneratorRuntime=W}catch(accidentalStrictMode){Function("r","regeneratorRuntime = r")(W)}ta=X;var wa={};function V(r,a,n,e,t,o,$){try{var c=r[o]($),v=c.value}catch(G){return void n(G)}c.done?a(v):Promise.resolve(v).then(e,t)}function ya(r){return function(){var a=this,n=arguments;return new Promise(function(e,t){var o=r.apply(a,n);function $(r){V(o,e,t,$,c,"next",r)}function c(r){V(o,e,t,$,c,"throw",r)}$(void 0)})}}wa=ya;var F=Object.freeze({renders:[],loaders:[]});var Aa=function(e){return"function"==typeof e&&F.loaders.push(e)};var Ba=function(e){return"function"==typeof e&&F.renders.push(e)};var Ca=function(r,e){var t=new r[A(e.option.type,"loader")],n=(q.is.array(e.option.args)?e.option.args:[e.option.args]).map(function(){var $agGE$$interop$default=z(wa);var $PMvg$$interop$default=z(ta);var r=$agGE$$interop$default.d($PMvg$$interop$default.d.mark(function r(e){var n;return $PMvg$$interop$default.d.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.load(e.url);case 2:return(n=r.sent).name=e.name,r.abrupt("return",n);case 5:case"end":return r.stop();}},r)}));return function(e){return r.apply(this,arguments)}}());return Promise.all(n).then(function(r){return F.loaders.forEach(function(e){return e(r)})})};function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(e);r&&($=$.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,$)}return t}function D(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach(function(r){var $IxO8$$interop$default=z(C);$IxO8$$interop$default.d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var N={resolution:{type:"v2",value:{}},time:{type:"f",value:1}},Ga=function(e){var r=["uniforms"],t=Object.keys(e).filter(function(e){return r.includes(e)}).reduce(function(r,t){var $IxO8$$interop$default=z(C);return D({},r,$IxO8$$interop$default.d({},t,Object.keys(N).reduce(function(r,$){return D({},r,{},e[t],$IxO8$$interop$default.d({},$,N[$]))},{})))},{});return D({},e,{},t)},Ha=function(e,r){var t=A(r.type,"material"),$=D({},Ga(r.args));return new e[t]($)};var Ia=function(r,e){if(q.is.array(e)&&!q.is.empty(e)){var $=ra(r),o=e.reduce(function(e,o){var t,i=qa(r,o.geometry),a=Ha(r,o.material),p=new r.Mesh(i,a);var $Fhqp$$interop$default=z(H);return(t=p.position).set.apply(t,$Fhqp$$interop$default.d(o.positions)),[].concat($Fhqp$$interop$default.d(e),[o.group?$.add(p):p])},[]);return Object.assign(o[0],{onloader:Aa,onrender:Ba})}};var Ja=function(e,r,t,n){return e.setAnimationLoop(null!==n?function(n){F.renders.forEach(function(r){return r(e.timer.getDelta())}),e.render(r,t)}:null)},Ka=function(e,r){if("object"===q.oftype(e)&&!q.is.empty(e)){var t=e.d2kCoreData.canvas,n=new e.WebGLRenderer({antialias:!0,canvas:t});return n.timer=new e.Clock,n.autoClear=!1,n.setClearColor(0),n.setPixelRatio(r.pixelRatio),Object.assign(n,{onrender:Ja})}};var La=function(e){return new e.Scene};var Ma={BABYLONCamera:Ea,BABYLONLight:ea,BABYLONMesh:xa,BABYLONEngine:Da,BABYLONScene:va,THREECamera:pa,THREELight:sa,THREELoader:Ca,THREEMesh:Ia,THREERenderer:Ka,THREEScene:La},B=function(e,r){var t=r.ENGINE.BoxBufferGeometry?"THREE":"BABYLON",$=Ma["".concat(t).concat(q.strings.toFirstLetterUpperCase(e))];var $IxO8$$interop$default=z(C);return Na({},r,$IxO8$$interop$default.d({},e,q.reducer(r[e],function(e){return $(r.ENGINE,e)})))};var Oa=function(e){return document.body.appendChild(e)},aa=function(e){return document.createElement(e)},Qa=function(e){var t=aa("canvas"),a=window.innerWidth,n=window.innerHeight;return t.width=a,t.height=n,t.style.width="".concat(a,"px"),t.style.height="".concat(n,"px"),e.d2kCoreData.canvas=e.d2kCoreData.canvas?e.d2kCoreData.canvas:t,{add:Oa,canvas:t,createHTMLElement:aa}};var Ra={},Sa=function(e){e.ENGINE.d2kCoreData=Ra;var r=[function(e){return R({},e,{dom:Qa(e.ENGINE)})},function(e){return B("loader",e)},function(e){return B("engine",e)},function(e){return B("scene",e)},function(e){return B("camera",e)},function(e){return B("renderer",e)},function(e){return B("mesh",e)},function(e){return B("light",e)}],t=q.pipe.apply(void 0,r)(e);return Object.keys(t).filter(function(e){return void 0===t[e]}).forEach(function(e){return delete t[e]}),delete t.THREE,R({},t)},Ta=function(e,r){var t=function(e){var r=e.getContext();r.enable(r.DEPTH_TEST),r.depthFunc(r.LEQUAL),r.enable(r.CULL_FACE),r.cullFace(r.BACK),r.clearDepth(1),r.clear(r.DEPTH_BUFFER_BIT),r.bindVertexArray(null),e.state.reset()};!function o(){window.requestAnimationFrame(o),t(r.renderer.current),r.renderer.current.render(r.scene.current,r.camera.current),e.scene.current.render()}()},Z=Object.freeze({onready:Sa,onstack:Ta});I.d2k=Z,I=Z;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=I}else if(typeof define==="function"&&define.amd){define(function(){return I})}else{this["d2k"]=I}})();