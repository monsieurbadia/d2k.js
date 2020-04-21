(function () {function z(a){return a&&a.__esModule?{d:a.default}:{d:a}}var H={};function Q(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),o.push.apply(o,t)}return o}function T(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(o),!0).forEach(function(e){var $IxO8$$interop$default=z(C);$IxO8$$interop$default.d(r,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):Q(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}var C={};function Qa(e,r,$){return r in e?Object.defineProperty(e,r,{value:$,enumerable:!0,configurable:!0,writable:!0}):e[r]=$,e}C=Qa;var J,q={};!function(){function r(r){return r&&r.__esModule?{d:r.default}:{d:r}}var e={};function t(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function n(e){for(var n=1;n<arguments.length;n++){var c=null!=arguments[n]?arguments[n]:{};n%2?t(Object(c),!0).forEach(function(t){r(o).d(e,t,c[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):t(Object(c)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(c,r))})}return e}var o={};o=function(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r};var c={keys2Array:function(r){return Object.keys(n({},r)).map(function(r){return r})},keysValue2Array:function(r){return Object.keys(n({},r)).map(function(e){return r[e]})}},i=function(r){throw new Error(r)},u=Object.freeze({set required(r){i(r)},get required(){i("required parameter")}}),a=function(r){return Object.keys(r).forEach(function(e){return r[e].hasOwnProperty(e)||!Object.isFrozen(r[e])?a(r[e]):r[e]}),Object.freeze(r)};function f(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){r(o).d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var p=function(r){return Array.isArray(r)},O={array:p,exist:function(r){return Object.keys(s({},r)).length>0},empty:function(r){return!Object.keys(s({},r)).length},include:function(r,e){return p(r)?r.includes(e):void 0!==Object.keys(s({},r)).find(function(r){return r===e})}},b={};b=function(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n};var y={};y=function(r){if(Array.isArray(r))return b(r)};var d={};d=function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)};var l={};l=function(r,e){if(r){if("string"==typeof r)return b(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(r,e):void 0}};var j={};j=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var w;w=function(r){return y(r)||d(r)||l(r)||j()};function g(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function v(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(t){r(o).d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var P=function(e,t,n){var o=r(w);return[].concat(o.d(e),[0===n?t.toUpperCase():t])},h={toFirstLetterUpperCase:function(r){return r.trim().toLowerCase().split("").reduce(P,"").join("")},ToInt:function(r,e){return r.split(e).map(function(r){return window.parseInt(r)})}},S=window.navigator.userAgent,$=a({convert:c,debounce:function(r,e){var t;return function(n){window.clearTimeout(t),t=window.setTimeout(r(n),e)}},fail:u,frozen:a,is:O,loop:function(e,t){return r(w).d(e).forEach(function(r,e,n){return t(r,e,n)})},merge:function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){r(o).d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}({},e,{},t)},oftype:function(r){return Object.prototype.toString.call(r).slice(8,-1).toLowerCase()},pipe:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(r){return[].concat(e).reduce(function(r,e){return e(r)},r||Object.create(null))}},ratio169:function(r){return Math.round(r/16*9)},reducer:function(e,t){return Object.keys(m({},e)).reduce(function(n,c){return m({},n,r(o).d({},c,t(e[c])))},e)},strings:h,ua:{android:function(r){return /Android/.test(S)},egde:function(r){return /Edge/.test(S)&&window.MSStream},ie:function(r){return /MSIE/.test(S)&&window.MSStream},ios:function(r){return /iPad|iPhone|iPod/.test(S)&&!window.MSStream},phone:function(r){return /iPhone|iPod|Android/.test(S)}},uniqid:function(r){return"".concat(Math.random().toString(36).substr(2,9))},"\u03C0":{degrees:function(r){return r/Math.PI*180},radians:function(r){return r*Math.PI/180},distance:function(r,e){var t=e.x-r.x,n=e.y-r.y;return Math.sqrt(t*t+n*n)},randomize:{float:function(r,e){return Math.random()*(e-r)+r},int:function(r,e){return Math.floor(Math.random()*(e-r))+r}}}});e.default=$,e=$,"object"==typeof q?q=e:"function"==typeof J&&J.amd?J(function(){return e}):this.u3s=e}();function Y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(e);r&&($=$.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,$)}return t}function Oa(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Y(Object(t),!0).forEach(function(r){var $IxO8$$interop$default=z(C);$IxO8$$interop$default.d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var A=function(e,r){var t=e.split(/[-._]/g);return t.reduce(function(e,p,s){return e+=q.strings.toFirstLetterUpperCase(p),r&&s===t.length-1&&(e+=q.strings.toFirstLetterUpperCase(r)),e},"")};var Ha=function(e,r){var a=new e[A(r.option.type,"camera")]("Camera",Math.PI/2,Math.PI/2,2,e.Vector3.Zero(0,0,10),e.coreData.scene);return a.setTarget(e.Vector3.Zero()),a};var Da=function(n){var e=n.coreData.canvas,r=new n.Engine(e,!0);return n.coreData.engine=r,r};var Ca=function(e,t){return new e[A(t.option.type,"light")]("light",new BABYLON.Vector3(0,-1,0),e.coreData.scene)};var Ba=function(e,r){var s=e.coreData.scene;return BABYLON.MeshBuilder.CreateSphere("sphere",{diameter:1,segments:32},s)};var xa=function(e){return function(n){e._currentProgram=null,e.wipeCaches(!0)}},va=function(e){var n=e.coreData,r=n.engine,a=n.canvas,o=new e.Scene(r);return o.autoClear=!1,o.beforeRender=xa(r),e.coreData.scene=o,o.attachControl(a),console.log(o.activeCamera),o};var ta={};function W(t,r){return ta=W=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},W(t,r)}ta=W;var sa={};function oa(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}sa=oa;var Z={};function aa(t,r,$){return Z=aa=sa()?Reflect.construct:function(t,r,$){var e=[null];e.push.apply(e,r);var c=new(Function.bind.apply(t,e));return $&&ta(c,$.prototype),c},aa.apply(null,arguments)}Z=aa;var K={};function la(r,a){(null==a||a>r.length)&&(a=r.length);for(var $=0,e=new Array(a);$<a;$++)e[$]=r[$];return e}K=la;var ea={};function Aa(r){if(Array.isArray(r))return K(r)}ea=Aa;var fa={};function ga(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}fa=ga;var ha={};function ia(r,a){if(r){if("string"==typeof r)return K(r,a);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?K(r,a):void 0}}ha=ia;var ja={};function ka(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}ja=ka;var I={};function ma(r){return ea(r)||fa(r)||ha(r)||ja()}I=ma;var na=function(r,e){var t;("object"!==q.oftype(r)||q.is.empty(r))&&console.assert("object"===q.oftype(r),"\"%s\" is not an \"object\"","camera");var $dJhE$$interop$default=z(Z);var $Fhqp$$interop$default=z(I);var o=A(e.option.type,"camera"),$=$dJhE$$interop$default.d(r[o],$Fhqp$$interop$default.d(e.option.args));return(t=$.position).set.apply(t,$Fhqp$$interop$default.d(e.option.position)),$};var Xa=function(e,r){var $dJhE$$interop$default=z(Z);var $Fhqp$$interop$default=z(I);return $dJhE$$interop$default.d(e[A(r.type,"geometry")],$Fhqp$$interop$default.d(r.args))};var pa=function(r){return new r[A("group",null)]};var qa=function(r,t){var $Fhqp$$interop$default=z(I);return new r[A(t.option.type,"light")](q.strings.ToInt.apply(q.strings,$Fhqp$$interop$default.d(t.option.args).concat([" "])))};var ra={};var X={},V=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return G()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(k([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(s).then(function(t){f.value=t,a(f)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function $(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:G}}function G(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(X);try{regeneratorRuntime=V}catch(accidentalStrictMode){Function("r","regeneratorRuntime = r")(V)}ra=X;var ua={};function U(r,a,n,e,t,o,$){try{var c=r[o]($),v=c.value}catch(G){return void n(G)}c.done?a(v):Promise.resolve(v).then(e,t)}function wa(r){return function(){var a=this,n=arguments;return new Promise(function(e,t){var o=r.apply(a,n);function $(r){U(o,e,t,$,c,"next",r)}function c(r){U(o,e,t,$,c,"throw",r)}$(void 0)})}}ua=wa;var F=Object.freeze({renders:[],loaders:[]});var ya=function(e){return"function"==typeof e&&F.loaders.push(e)};var za=function(e){return"function"==typeof e&&F.renders.push(e)};var da=function(r,e){var t=new r[A(e.option.type,"loader")],n=(q.is.array(e.option.args)?e.option.args:[e.option.args]).map(function(){var $agGE$$interop$default=z(ua);var $PMvg$$interop$default=z(ra);var r=$agGE$$interop$default.d($PMvg$$interop$default.d.mark(function r(e){var n;return $PMvg$$interop$default.d.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.load(e.url);case 2:return(n=r.sent).name=e.name,r.abrupt("return",n);case 5:case"end":return r.stop();}},r)}));return function(e){return r.apply(this,arguments)}}());return Promise.all(n).then(function(r){return F.loaders.forEach(function(e){return e(r)})})};function R(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(e);r&&($=$.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,$)}return t}function D(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?R(Object(t),!0).forEach(function(r){var $IxO8$$interop$default=z(C);$IxO8$$interop$default.d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var N={resolution:{type:"v2",value:{}},time:{type:"f",value:1}},Ea=function(e){var r=["uniforms"],t=Object.keys(e).filter(function(e){return r.includes(e)}).reduce(function(r,t){var $IxO8$$interop$default=z(C);return D({},r,$IxO8$$interop$default.d({},t,Object.keys(N).reduce(function(r,$){return D({},r,{},e[t],$IxO8$$interop$default.d({},$,N[$]))},{})))},{});return D({},e,{},t)},Fa=function(e,r){var t=A(r.type,"material"),$=D({},Ea(r.args));return new e[t]($)};var Ga=function(r,e){if(q.is.array(e)&&!q.is.empty(e)){var $=pa(r),o=e.reduce(function(e,o){var t,i=Xa(r,o.geometry),a=Fa(r,o.material),p=new r.Mesh(i,a);var $Fhqp$$interop$default=z(I);return(t=p.position).set.apply(t,$Fhqp$$interop$default.d(o.positions)),[].concat($Fhqp$$interop$default.d(e),[o.group?$.add(p):p])},[]);return Object.assign(o[0],{onloader:ya,onrender:za})}};function M(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function Ia(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?M(Object(t),!0).forEach(function(r){var $IxO8$$interop$default=z(C);$IxO8$$interop$default.d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ja=function(e){if(e){var r=e.getContext();r.enable(r.DEPTH_TEST),r.depthFunc(r.LEQUAL),r.enable(r.CULL_FACE),r.cullFace(r.BACK),r.clearDepth(1),r.clear(r.DEPTH_BUFFER_BIT),r.bindVertexArray(null),e.state.reset()}},Ka=function(e,r,t,n){return r.setAnimationLoop("null"!==q.oftype(e)?function(e){r.renders.forEach(function(e){return e(r.timer.getDelta())}),r.render(t,n)}:null)},La=function(e,r){if("object"===q.oftype(e)&&!q.is.empty(e)){var t=e.coreData.canvas,n=new e.WebGLRenderer({antialias:!0,canvas:t});return n.timer=new e.Clock,n.autoClear=!1,n.setClearColor(null==r?void 0:r.background),n.setPixelRatio(null==r?void 0:r.pixelRatio),Object.assign(n,Ia({},F,{onrender:Ka,resetState:Ja}))}};var Ma=function(e){return new e.Scene};var Na={BABYLONCamera:Ha,BABYLONLight:Ca,BABYLONMesh:Ba,BABYLONEngine:Da,BABYLONScene:va,THREECamera:na,THREELight:qa,THREELoader:da,THREEMesh:Ga,THREERenderer:La,THREEScene:Ma},B=function(e,r){var t=r.ENGINE.BoxBufferGeometry?"THREE":"BABYLON",$="".concat(t).concat(q.strings.toFirstLetterUpperCase(e)),a=Na[$];var $IxO8$$interop$default=z(C);return Oa({},r,$IxO8$$interop$default.d({},e,q.reducer(r[e],function(e){return a(r.ENGINE,e)})))};var Pa=function(e){return document.body.appendChild(e)},ca=function(e){return document.createElement(e)},Ra=function(e){var t=ca("canvas"),a=window.innerWidth,n=window.innerHeight;return t.width=a,t.height=n,t.style.width="".concat(a,"px"),t.style.height="".concat(n,"px"),e.coreData.canvas=e.coreData.canvas?e.coreData.canvas:t,{add:Pa,canvas:t,createHTMLElement:ca}};var Sa=function(r,e){return function(n){var t;n&&(null===(t=r.renderer.current)||void 0===t||t.renders.push(n)),r.renderer.current.setAnimationLoop(function(n){var t;r.renderer.current.resetState(r.renderer.current),null===(t=r.renderer.current)||void 0===t||t.renders.forEach(function(e){return e(r.renderer.current.timer.getDelta())}),r.renderer.current.render(r.scene.current,r.camera.current),e.scene.current.render()})}},Ta=function(r){var e=r[0],n=r[1];return e.renderer.current.setSize(window.innerWidth,window.innerHeight),Object.assign({},{onrender:Sa(e,n)})};var Ua={},Va=function(r,e){return Ta([r,e])},Wa=function(r){r.ENGINE.coreData=Ua;var e=[function(r){return T({},r,{dom:Ra(r.ENGINE)})},function(r){return B("loader",r)},function(r){return B("engine",r)},function(r){return B("scene",r)},function(r){return B("camera",r)},function(r){return B("renderer",r)},function(r){return B("mesh",r)},function(r){return B("light",r)}],o=q.pipe.apply(void 0,e)(r);return Object.keys(o).filter(function(r){return void 0===o[r]}).forEach(function(r){return delete o[r]}),delete o.THREE,T({},o)},ba=Object.freeze({onlayering:Va,onwebgl:Wa});H.d2k=ba,H=ba;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=H}else if(typeof define==="function"&&define.amd){define(function(){return H})}else{this["d2k"]=H}})();