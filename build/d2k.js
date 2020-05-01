(function () {function q(a){return a&&a.__esModule?{d:a.default}:{d:a}}var R={};function ua(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}function Y(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?ua(Object(a),!0).forEach(function(r){var $IxO8$$interop$default=q(A);$IxO8$$interop$default.d(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ua(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}var A={};function Cb(e,r,$){return r in e?Object.defineProperty(e,r,{value:$,enumerable:!0,configurable:!0,writable:!0}):e[r]=$,e}A=Cb;var T,z={};!function(){function r(r){return r&&r.__esModule?{d:r.default}:{d:r}}var e={};function t(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}var n={};n=function(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r};var o={keys2Array:function(e){return Object.values(function(e){for(var o=1;o<arguments.length;o++){var c=null!=arguments[o]?arguments[o]:{};o%2?t(Object(c),!0).forEach(function(t){r(n).d(e,t,c[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):t(Object(c)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(c,r))})}return e}({},e))}},c=function(r){throw new Error(r)},i={set required(r){c(r)},get required(){c("required parameter")}},u={};u=function(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n};var a={};a=function(r){if(Array.isArray(r))return u(r)};var f={};f=function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)};var s={};s=function(r,e){if(r){if("string"==typeof r)return u(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(r,e):void 0}};var p={};p=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var O;O=function(r){return a(r)||f(r)||s(r)||p()};var b=function(e){return e.reduce(function(e,t){var n=r(O);return Array.isArray(t)?[].concat(n.d(e),n.d(b(t))):[].concat(n.d(e),[t])},[])},y=function(r){return Object.keys(r).forEach(function(e){return r[e].hasOwnProperty(e)||!Object.isFrozen(r[e])?y(r[e]):r[e]}),Object.freeze(r)};function d(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach(function(t){r(n).d(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}var j=function(r){return Array.isArray(r)},g={array:j,exist:function(r){return Object.keys(l({},r)).length>0},empty:function(r){return!Object.keys(l({},r)).length},include:function(r,e){return j(r)?r.includes(e):void 0!==Object.keys(l({},r)).find(function(r){return r===e})}};function w(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function v(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(Object(o),!0).forEach(function(t){r(n).d(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}var P=function(e,t,n){var o=r(O);return[].concat(o.d(e),[0===n?t.toUpperCase():t])},m={toFirstLetterUpperCase:function(r){return r.trim().toLowerCase().split("").reduce(P,"").join("")},toFirstLetterUpperCaseReducer:function(r,e){var t=r.split(/[-._]/g);return t.reduce(function(r,n,o){return r+=m.toFirstLetterUpperCase(n),e&&o===t.length-1&&(r+=m.toFirstLetterUpperCase(e)),r},"")},ToInt:function(r,e){return r.split(e).map(function(r){return window.parseInt(r)})}},S=window.navigator.userAgent,$={convert:o,debounce:function(r,e){var t;return function(n){window.clearTimeout(t),t=window.setTimeout(r(n),e)}},fail:i,flatten:b,frozen:y,is:g,loop:function(e,t){return r(O).d(e).forEach(function(r,e,n){return t(r,e,n)})},merge:function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?w(Object(o),!0).forEach(function(t){r(n).d(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}({},e,{},t)},oftype:function(r){return Object.prototype.toString.call(r).slice(8,-1).toLowerCase()},pipe:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(r){return[].concat(e).reduce(function(r,e){return e(r)},r||Object.create(null))}},ratio169:function(r){return Math.round(r/16*9)},reducer:function(e,t){return Object.keys(h({},e)).reduce(function(o,c){return h({},o,r(n).d({},c,t(e[c])))},e)},strings:m,ua:{android:function(r){return /Android/.test(S)},browser:function(r){return /Chrome|Firefox|Safari/.test(S)},egde:function(r){return /Edge/.test(S)&&window.MSStream},ie:function(r){return /MSIE/.test(S)&&window.MSStream},ios:function(r){return /iPad|iPhone|iPod/.test(S)&&!window.MSStream},phone:function(r){return /iPhone|iPod|Android/.test(S)}},uniqid:function(r){return"".concat(Math.random().toString(36).substr(2,9))},"\u03C0":{degrees:function(r){return r/Math.PI*180},radians:function(r){return r*Math.PI/180},distance:function(r,e){var t=e.x-r.x,n=e.y-r.y;return Math.sqrt(t*t+n*n)},randomize:{float:function(r,e){return Math.random()*(e-r)+r},int:function(r,e){return Math.floor(Math.random()*(e-r))+r}}}};e.default=$,e=$,"object"==typeof z?z=e:"function"==typeof T&&T.amd?T(function(){return e}):this.u3s=e}();var K=Object.freeze({OBJECT:Object.create(null)});var I=Object.freeze({loaders:[],renders:[],resizers:[]});var aa=Object.freeze({CAMERA:{name:"current",config:{args:[75,window.innerWidth/window.innerHeight,.1,1e3],position:[0,0,100],type:"perspective"}},RENDERER:{name:"current",config:{pixelRatio:window.devicePixelRatio,size:[window.innerWidth,window.innerHeight]}}});var ba=Object.freeze({PRIMITIVES:{v2:"Vector2",v3:"Vector3",v4:"Vector4"},TYPES:["v2","v3","v4"]});var da=Object.freeze({BABYLON:{DYNAMIC_PROPERTIES:["position","rotation","scaling"]},THREE:{DYNAMIC_PROPERTIES:["position","rotation","scale"]}});var V=Object.freeze({GEOMETRY:{args:[2,2]},TYPE:{vertexShader:{name:"#include <core_vertex>",template:""},fragmentShader:{name:"#include <core_fragment>",template:""}},UNIFORMS:{mouse:{type:"v2",value:[]},resolution:{type:"v2",value:[window.innerWidth,window.innerHeight]},time:{type:"f",value:1}}});var Bb={};function na(t,r){return Bb=na=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},na(t,r)}Bb=na;var Ab={};function xb(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}Ab=xb;var D={};function Z(t,r,$){return D=Z=Ab()?Reflect.construct:function(t,r,$){var e=[null];e.push.apply(e,r);var c=new(Function.bind.apply(t,e));return $&&Bb(c,$.prototype),c},Z.apply(null,arguments)}D=Z;var U={};function vb(r,a){(null==a||a>r.length)&&(a=r.length);for(var $=0,e=new Array(a);$<a;$++)e[$]=r[$];return e}U=vb;var ub={};function rb(r){if(Array.isArray(r))return U(r)}ub=rb;var ob={};function nb(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}ob=nb;var ga={};function mb(r,a){if(r){if("string"==typeof r)return U(r,a);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?U(r,a):void 0}}ga=mb;var fb={};function eb(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}fb=eb;var C={};function db(r){return ub(r)||ob(r)||ga(r)||fb()}C=db;var Ya={};function Wa(r){if(Array.isArray(r))return r}Ya=Wa;var Va={};function Sa(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],i=!0,a=!1,o=void 0;try{for(var n,l=r[Symbol.iterator]();!(i=(n=l.next()).done)&&(e.push(n.value),!t||e.length!==t);i=!0);}catch(v){a=!0,o=v}finally{try{i||null==l.return||l.return()}finally{if(a)throw o}}return e}}Va=Sa;var Oa={};function Ma(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Oa=Ma;var La={};function Ga(r,e){return Ya(r)||Va(r,e)||ga(r,e)||Oa()}La=Ga;var Da=function(e,r){var $HETk$$interop$default=q(La);var $dJhE$$interop$default=q(D);var $Fhqp$$interop$default=q(C);var a=r.args,t=r.type,$=e.coreData,o=$.canvas,i=$.scene,c=$HETk$$interop$default.d(a,4),s=c[0],p=void 0!==s&&s,n=c[1],l=void 0===n?1:n,m=c[2],u=void 0===m?1:m,Q=c[3],W=void 0===Q?[0,0,0]:Q,v=new e[z.strings.toFirstLetterUpperCaseReducer(t,"camera")](name,p,l,u,$dJhE$$interop$default.d(e.Vector3.Zero,$Fhqp$$interop$default.d(W)),i);return v.setTarget(e.Vector3.Zero()),i.activeCamera.attachControl(o,!0),v};function va(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n}function Ca(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?va(Object(n),!0).forEach(function(r){var $IxO8$$interop$default=q(A);$IxO8$$interop$default.d(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):va(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var ab=function(e){var r=e.engine,n=e.scene;r.runRenderLoop(function(e){for(var t=0;t<r.renders.length;t++)if(null===r.renders[t](r.getDeltaTime()))return null;n.render()})},za=function(e){var r=e.coreData.canvas,n=new e.Engine(r,!0);return e.coreData.engine=n,Object.assign(n,Ca({},I,{onrender:ab}))};function xa(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function Aa(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?xa(Object(t),!0).forEach(function(r){var $IxO8$$interop$default=q(A);$IxO8$$interop$default.d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xa(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ba=function(e,r){var $dJhE$$interop$default=q(D);var $Fhqp$$interop$default=q(C);var t=r.args,o=void 0===t?[0,0,0]:t,$=r.type,n=void 0===$?"arc-to-rotate":$,c=e.coreData.scene,i=new e[z.strings.toFirstLetterUpperCaseReducer(n,"light")]("light",$dJhE$$interop$default.d(e.Vector3,$Fhqp$$interop$default.d(o)),c);return Object.assign(i,Aa({},H))};function wa(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(e);r&&($=$.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,$)}return t}function M(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?wa(Object(t),!0).forEach(function(r){var $IxO8$$interop$default=q(A);$IxO8$$interop$default.d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):wa(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ea=function(e,r){var t=e.coreData.scene,$=z.strings.toFirstLetterUpperCaseReducer("create",r.type),o=(z.is.array(r)?r:[M({},r)]).filter(function(e){return"object"===z.oftype(e)}).reduce(function(r,o){var a=e.MeshBuilder[$](name,o.args,t);if(z.is.exist(o.material)){var i=z.strings.toFirstLetterUpperCaseReducer(o.material.type,"material");var $dJhE$$interop$default=q(D);var $Fhqp$$interop$default=q(C);a.material=new e[i](o.material.name,t),a.material.emissiveColor=$dJhE$$interop$default.d(e.Color3,$Fhqp$$interop$default.d(o.material.emissiveColor))}var $IxO8$$interop$default=q(A);return Object.keys(o).filter(function(e){return da.BABYLON.DYNAMIC_PROPERTIES.includes(e)}).forEach(function(e){var r;var $Fhqp$$interop$default=q(C);return(r=a[e]).set.apply(r,$Fhqp$$interop$default.d(o[e]))}),Object.assign(a,M({},H)),M({},r,$IxO8$$interop$default.d({},o.name,z.is.array(o)?group.add(a):a))},{});return Object.assign(o[r.name],M({},H))};var Fa=function(e,r){var o=r.autoClear,c=void 0===o||o,a=r.clearColor,t=void 0===a?[0,0,0]:a,n=e.coreData.engine,$=new e.Scene(n);var $dJhE$$interop$default=q(D);var $Fhqp$$interop$default=q(C);return $.autoClear=c,$.clearColor=$dJhE$$interop$default.d(e.Color3,$Fhqp$$interop$default.d(t)),$.beforeRender=function(e){return n.wipeCaches(!0)},e.coreData.scene=$,$};var ya=function(r,e){var $dJhE$$interop$default=q(D);var $Fhqp$$interop$default=q(C);var t,s=e.args,a=e.name,$=e.position,n=e.type,o=z.strings.toFirstLetterUpperCaseReducer(n,"camera"),i=s.map(function(r){return null==r?r=window.innerWidth/window.innerHeight:r}),p=$dJhE$$interop$default.d(r[o],$Fhqp$$interop$default.d(i));return p.name=a,(t=p.position).set.apply(t,$Fhqp$$interop$default.d($)),p};var Ha=function(r,e){var t=e.args,$=e.type,o=z.strings.toFirstLetterUpperCaseReducer($,"geometry");var $dJhE$$interop$default=q(D);var $Fhqp$$interop$default=q(C);return $dJhE$$interop$default.d(r[o],$Fhqp$$interop$default.d(t))};var Ia=function(r){return new r.Group};var Ja=function(r,t){var $Fhqp$$interop$default=q(C);var e=t.args,o=t.name,$=void 0===o?"light":o,i=t.type,a=new r[z.strings.toFirstLetterUpperCaseReducer(i,"light")](z.strings.ToInt.apply(z.strings,$Fhqp$$interop$default.d(e).concat([" "])));return a.name=$,a};var Ka={};var sa={},ra=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return G()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(k([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(s).then(function(t){f.value=t,a(f)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function $(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:G}}function G(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(sa);try{regeneratorRuntime=ra}catch(accidentalStrictMode){Function("r","regeneratorRuntime = r")(ra)}Ka=sa;var Na={};function qa(r,a,n,e,t,o,$){try{var c=r[o]($),v=c.value}catch(G){return void n(G)}c.done?a(v):Promise.resolve(v).then(e,t)}function Pa(r){return function(){var a=this,n=arguments;return new Promise(function(e,t){var o=r.apply(a,n);function $(r){qa(o,e,t,$,c,"next",r)}function c(r){qa(o,e,t,$,c,"throw",r)}$(void 0)})}}Na=Pa;var Qa=function(r){return function(e){var t=e.name,n=e.url,a=r.load(n);return a.name=t,a}},Ra=function(){var $agGE$$interop$default=q(Na);var $PMvg$$interop$default=q(Ka);var r=$agGE$$interop$default.d($PMvg$$interop$default.d.mark(function r(e,t){var n,a,i,$,o,u;return $PMvg$$interop$default.d.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.args,a=t.type,i=new e[z.strings.toFirstLetterUpperCaseReducer(a,"loader")],$=z.is.array(n)?n:[n],o=$.map(Qa(i)),r.next=6,Promise.all(o).then(function(r){return r}).catch(function(r){return r});case 6:return u=r.sent,I.loaders.forEach(function(r){return r(u)}),r.abrupt("return",u);case 9:case"end":return r.stop();}},r)}));return function(e,t){return r.apply(this,arguments)}}();function pa(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(e);r&&($=$.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,$)}return t}function Ta(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?pa(Object(t),!0).forEach(function(r){var $IxO8$$interop$default=q(A);$IxO8$$interop$default.d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pa(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ua=function(e,r){var t=r.args,$=r.type,o=z.strings.toFirstLetterUpperCaseReducer($,"material"),i=z.is.exist(i)?X.createUniforms(e,t.uniforms):K.OBJECT,n=z.is.empty(i)?t:Ta({},t,{uniforms:i});return new e[o](n)};function oa(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(e);r&&($=$.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,$)}return t}function N(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?oa(Object(t),!0).forEach(function(r){var $IxO8$$interop$default=q(A);$IxO8$$interop$default.d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oa(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Xa=function(e,r){var t=Ia(e),$=z.is.array(r)?r:[N({},r)],o=$.filter(function(e){return"object"===z.oftype(e)}).reduce(function(r,o){var n=Ha(e,o.geometry),a=Ua(e,o.material),p=new e.Mesh(n,a);var $IxO8$$interop$default=q(A);return Object.keys(o).filter(function(e){return da.THREE.DYNAMIC_PROPERTIES.includes(e)}).forEach(function(e){var r;var $Fhqp$$interop$default=q(C);return(r=p[e]).set.apply(r,$Fhqp$$interop$default.d(o[e]))}),Object.assign(p,N({},H)),N({},r,$IxO8$$interop$default.d({},o.name,"array"===z.oftype($)?t.add(p):p))},{});return Object.assign(o[r.name],N({},H))};function ma(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n}function Za(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ma(Object(n),!0).forEach(function(r){var $IxO8$$interop$default=q(A);$IxO8$$interop$default.d(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ma(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var $a=function(e){var $Fhqp$$interop$default=q(C);var r=e.TARGET,n=e.SOURCE,t=r.renderer.current,o=n.engine.current,i=[].concat($Fhqp$$interop$default.d(t.renders),$Fhqp$$interop$default.d(o.renders));return function(e){t.setAnimationLoop(function(e){for(var o=0;o<i.length;o++)if(null===i[o](t.timer.getDelta()))return null;t.getContext().bindVertexArray(null),t.state.reset(),t.render(r.scene.mySceneName,r.camera.current),n.scene.current.render()}),e&&i.push(e)}},_a=function(e){var r=e.renderer,n=e.scene,t=e.camera;r.setAnimationLoop(function(e){for(var o=0;o<r.renders.length;o++)if(null===r.renders[o](r.timer.getDelta()))return null;cb(r)&&(z.is.exist(t)&&(t.aspect=r.domElement.clientWidth/r.domElement.clientHeight,t.updateProjectionMatrix()),r.resizers.forEach(function(e){return e([r.domElement.clientWidth,r.domElement.clientHeight])})),r.render(n,t)})},Db=function(e,r){return{onrenderlayering:$a({TARGET:e,SOURCE:r})}},bb=function(e){e.clear(),e.dispose()},cb=function(e){var r=window.innerWidth,n=window.innerHeight,t=e.domElement.width!==r||e.domElement.height!==n;return t&&e.setSize(r,n),t},la=function(e,r){var n=r.background,t=r.pixelRatio,o=Object.create(null),i=e.coreData.canvas,a=i.getContext("webgl2",{alpha:!1}),$=z.is.exist(t)?t:ca.pixelRatio;return z.is.empty(o.current)&&(o.current=new e.WebGLRenderer({antialias:!0,canvas:i,context:a})),o.current.timer=new e.Clock,o.current.autoClear=!1,o.current.setClearColor(n),o.current.setPixelRatio($),Object.assign(o.current,Za({},I,{onrender:_a,assign:Db,clean:bb}))};var ja=function(e){return new e.Scene};function ia(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function gb(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ia(Object(t),!0).forEach(function(r){var $IxO8$$interop$default=q(A);$IxO8$$interop$default.d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ia(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var hb=function(e,r){var $dJhE$$interop$default=q(D);var $Fhqp$$interop$default=q(C);var t=r.uniforms,n=r.fragmentShader,p=r.vertexShader,$=X.createUniforms(e,z.merge(V.UNIFORMS,t)),o=X.compile({uniforms:$,fragmentShader:n,vertexShader:p}),a=$dJhE$$interop$default.d(e.PlaneBufferGeometry,$Fhqp$$interop$default.d(V.GEOMETRY.args)),h=new e.ShaderMaterial(o),i=new e.Mesh(a,h);return Object.assign(i,gb({},H))};var ib=Object.freeze({BABYLONCamera:Da,BABYLONLight:Ba,BABYLONMesh:Ea,BABYLONEngine:za,BABYLONScene:Fa,THREECamera:ya,THREELight:Ja,THREELoader:Ra,THREEMesh:Xa,THREERenderer:la,THREEScene:ja}),jb=function(e){var r=e.conf,a=e.name,t=e.starter;return function(){z.is.empty(r[a])&&(r[a]={});for(var e=arguments.length,$=new Array(e),n=0;n<e;n++)$[n]=arguments[n];var i="renderer"===a?[$[0]]:$;var $IxO8$$interop$default=q(A);return t(Object.assign(r,$IxO8$$interop$default.d({},a,B.createPrimitive(i,a,r.RENDERING_ENGINE))))}},kb=function(e){var r=e.parameter,a=e.selectedPrimitives,t=K.OBJECT,$=function(e){var r=e.primitivesName,a=e.parameter;return null==r?void 0:r.filter(function(e){return z.is.exist(a[e.name])}).reduce(function(e,r){var $IxO8$$interop$default=q(A);return a[r.name].userData={currentScene:r.parent},Y({},e,$IxO8$$interop$default.d({},r.name,a[r.name]))},{})};return t.camera=Object.assign({main:r.camera[a.camera.main]},{others:$({primitivesName:a.camera.others,parameter:r.camera})}),t.mesh=$({primitivesName:a.mesh,parameter:r.mesh}),t.light=$({primitivesName:a.light,parameter:r.light}),t.renderer=r.renderer[a.renderer],t.scene=Object.assign({main:r.scene[a.scene.main]},{others:$({primitivesName:a.scene.others,parameter:r.scene})}),t},lb=function(e,r,a){var t=a.BoxBufferGeometry?"THREE":"BABYLON",$="".concat(t).concat(z.strings.toFirstLetterUpperCase(r));return e.reduce(function(e,r){var $IxO8$$interop$default=q(A);return z.is.empty(r.config)&&(r.config={}),z.is.array(r.config)&&r.config.forEach(function(e){return e.name=r.name}),r.config.name=r.name,Y({},e,$IxO8$$interop$default.d({},r.name,ib[$](a,r.config)))},{})},B=Object.freeze({oncreate:jb,composeScene:kb,createPrimitive:lb});function fa(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(r);e&&($=$.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,$)}return t}function ea(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?fa(Object(t),!0).forEach(function(e){var $IxO8$$interop$default=q(A);$IxO8$$interop$default.d(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):fa(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}var pb=function(r,e){if(z.is.include(e,"type"))return e;return Object.keys(e).filter(function(r){return ba.TYPES.includes(e[r].type)}).reduce(function(t,$){var n=ba.PRIMITIVES[e[$].type];var $dJhE$$interop$default=q(D);var $Fhqp$$interop$default=q(C);var $IxO8$$interop$default=q(A);return e[$].value=$dJhE$$interop$default.d(r[n],$Fhqp$$interop$default.d(e[$].value)),ea({},t,$IxO8$$interop$default.d({},$,e[$]))},e)},qb=function(r){if(!z.is.empty(r)){return Object.keys(r).filter(function(r){return /Shader/i.test(r)}).reduce(function(e,t){var $=V.TYPE[t];var $IxO8$$interop$default=q(A);return ea({},e,$IxO8$$interop$default.d({},t,r[t].includes($.name)?r[t].replace($.name,$.template):r[t]))},r)}},X=Object.freeze({createUniforms:pb,compile:qb});var sb=function(e,t){return e.appendChild(t)},tb=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.innerWidth,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.innerHeight;e.width=t,e.height=i,e.style.width="".concat(t,"px"),e.style.height="".concat(i,"px")},ca={get body(){return document.body},get pixelRatio(){return window.devicePixelRatio},get size(){return[window.innerWidth,window.innerHeight]},add:sb,setCanvasSize:tb};var H=Object.freeze({onloader:function(e){return"function"==typeof e&&I.loaders.push(e)},onresize:function(e){return"function"==typeof e&&I.resizers.push(e)},onrender:function(e){return"function"==typeof e&&I.renders.push(e)}});var wb=function(o){var c="v".concat(o||"0.0.0"),n=["%c ".concat("d2k.js"," %c ").concat(c," "),"color: #ffffff; background: #000000; padding: 3px 0;","padding: 3px 0; color: #000000; background: #ffffff; text-decoration: none;"];return z.ua.browser()?console.log.apply(console,n):window.console&&console.log("".concat("d2k.js"," ").concat(c," ")),!0};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K.OBJECT;return Object.freeze({value:function(t){return e},withCamera:B.oncreate({conf:e,name:"camera",starter:J}),withEngine:B.oncreate({conf:e,name:"engine",starter:J}),withLight:B.oncreate({conf:e,name:"light",starter:J}),withMesh:B.oncreate({conf:e,name:"mesh",starter:J}),withScene:B.oncreate({conf:e,name:"scene",starter:J})})};var yb;var zb=function(){for(var r=arguments.length,e=new Array(r),$=0;$<r;$++)e[$]=arguments[$];var t=e[0],n=e[1];return t.renderer[Object.keys(t.renderer)].assign(t,n)};var ta=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:__.OBJECT;return void 0===yb&&(yb=wb()),Object.freeze({use:function(e){return z.is.empty(e)?ta(r):(ca.setCanvasSize(r.canvas),r.event=H,r.RENDERING_ENGINE=e,r.RENDERING_ENGINE.coreData={canvas:r.canvas},r.RENDERING_ENGINE.SceneComponentConstants?J(r):r.RENDERING_ENGINE.BoxBufferGeometry&&r.glsl?ka(r):r.RENDERING_ENGINE.BoxBufferGeometry&&!r.glsl?F(r):console.log("invalid rendering engine"))},value:function(e){return r}})};var ka=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K.OBJECT;return Object.freeze({value:function(r){return e},withShader:function(r){var $=r.name,t=r.config;z.is.empty(e.shader)&&(e.shader=Object.create(null),e.renderer=Object.create(null));var s=hb(e.RENDERING_ENGINE,t),n=la(e.RENDERING_ENGINE,aa.RENDERER.config),a=ja(e.RENDERING_ENGINE),E=ya(e.RENDERING_ENGINE,aa.CAMERA.config);return e.shader[$]=s,e.renderer.current=n,a.add(e.shader.myShaderName),n.onrender({renderer:n,scene:a,camera:E}),ka(e)}})};var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K.OBJECT;return Object.freeze({composify:function(r){var t,o=r.config,$=B.composeScene({parameter:e,selectedPrimitives:o}),a=z.merge($.light,$.mesh);return z.is.exist(a)&&Object.keys(a).forEach(function(e){return $.scene[a[e].userData.currentScene].add(a[e])}),$.renderer.onrender({renderer:$.renderer,scene:$.scene.main,camera:$.camera.main}),t=e,["canvas","RENDERING_ENGINE"].forEach(function(e){return delete t[e]}),F(e)},value:function(r){return e},withCamera:B.oncreate({conf:e,name:"camera",starter:F}),withLight:B.oncreate({conf:e,name:"light",starter:F}),withLoader:B.oncreate({conf:e,name:"loader",starter:F}),withMesh:B.oncreate({conf:e,name:"mesh",starter:F}),withRenderer:B.oncreate({conf:e,name:"renderer",starter:F}),withScene:B.oncreate({conf:e,name:"scene",starter:F})})};var ha=function(r){return Object.freeze({onlayering:zb,onstarter:ta})};R.d2k=ha,R=ha();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=R}else if(typeof define==="function"&&define.amd){define(function(){return R})}else{this["d2k"]=R}})();