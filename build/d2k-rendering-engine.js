(function () {function q(a){return a&&a.__esModule?{d:a.default}:{d:a}}var F={};function Ga(r){return function(){var $XApn$$interop$default=q(U);var e,t=$XApn$$interop$default.d(r);if(ua()){var o=$XApn$$interop$default.d(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);var $cbGp$$interop$default=q(W);return $cbGp$$interop$default.d(this,e)}}function ua(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(r){return!1}}var G={};function wa(a,s){if(!(a instanceof s))throw new TypeError("Cannot call a class as a function")}G=wa;var Aa={};function ja(t,r){return Aa=ja=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},ja(t,r)}Aa=ja;var Z={};function Ra(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&Aa(e,r)}Z=Ra;var $a={};function ga(o){return $a=ga="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ga(o)}$a=ga;var L={};function Na(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}L=Na;var W={};function Ya(r,e){return!e||"object"!==$a(e)&&"function"!=typeof e?L(r):e}W=Ya;var U={};function ha(t){return U=ha=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ha(t)}U=ha;function va(){var t=new V(16);return V!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function ea(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Fa(t,$){var r=$[0],e=$[1],o=$[2],n=$[3],h=$[4],a=$[5],p=$[6],A=$[7],D=$[8],i=$[9],x=$[10],s=$[11],u=$[12],c=$[13],l=$[14],f=$[15],v=r*a-e*h,M=r*p-o*h,m=r*A-n*h,y=e*p-o*a,d=e*A-n*a,R=o*A-n*p,S=D*c-i*u,Y=D*l-x*u,E=D*f-s*u,P=i*l-x*c,T=i*f-s*c,b=x*f-s*l,k=v*b-M*T+m*P+y*E-d*Y+R*S;return k?(k=1/k,t[0]=(a*b-p*T+A*P)*k,t[1]=(o*T-e*b-n*P)*k,t[2]=(c*R-l*d+f*y)*k,t[3]=(x*d-i*R-s*y)*k,t[4]=(p*E-h*b-A*Y)*k,t[5]=(r*b-o*E+n*Y)*k,t[6]=(l*m-u*R-f*M)*k,t[7]=(D*R-x*m+s*M)*k,t[8]=(h*T-a*E+A*S)*k,t[9]=(e*E-r*T-n*S)*k,t[10]=(u*d-c*m+f*v)*k,t[11]=(i*m-D*d-s*v)*k,t[12]=(a*Y-h*P-p*S)*k,t[13]=(r*P-e*Y+o*S)*k,t[14]=(c*M-u*y-l*v)*k,t[15]=(D*y-i*M+x*v)*k,t):null}function Ha(t,$,r,e){var o,n,h,a,p,A,D,i,x,s,u=$[0],c=$[1],l=$[2],f=e[0],v=e[1],M=e[2],m=r[0],y=r[1],d=r[2];return Math.abs(u-m)<Q&&Math.abs(c-y)<Q&&Math.abs(l-d)<Q?ea(t):(D=u-m,i=c-y,x=l-d,o=v*(x*=s=1/Math.hypot(D,i,x))-M*(i*=s),n=M*(D*=s)-f*x,h=f*i-v*D,(s=Math.hypot(o,n,h))?(o*=s=1/s,n*=s,h*=s):(o=0,n=0,h=0),a=i*h-x*n,p=x*o-D*h,A=D*n-i*o,(s=Math.hypot(a,p,A))?(a*=s=1/s,p*=s,A*=s):(a=0,p=0,A=0),t[0]=o,t[1]=a,t[2]=D,t[3]=0,t[4]=n,t[5]=p,t[6]=i,t[7]=0,t[8]=h,t[9]=A,t[10]=x,t[11]=0,t[12]=-(o*u+n*c+h*l),t[13]=-(a*u+p*c+A*l),t[14]=-(D*u+i*c+x*l),t[15]=1,t)}function Ia(t,$,r,e,o,n,h){var a=1/($-r),p=1/(e-o),A=1/(n-h);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*p,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*A,t[11]=0,t[12]=($+r)*a,t[13]=(o+e)*p,t[14]=(h+n)*A,t[15]=1,t}function Ja(t,$,r,e,o){var n,h=1/Math.tan($/2);return t[0]=h/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=o&&o!==1/0?(n=1/(e-o),t[10]=(o+e)*n,t[14]=2*o*e*n):(t[10]=-1,t[14]=-2*e),t}function Ka(t,$,r,e){var o,n,h,a,p,A,D,i,x,s,u,c,l,f,v,M,m,y,d,R,S,Y,E,P,T=e[0],b=e[1],k=e[2],I=Math.hypot(T,b,k);return I<Q?null:(T*=I=1/I,b*=I,k*=I,o=Math.sin(r),h=1-(n=Math.cos(r)),a=$[0],p=$[1],A=$[2],D=$[3],i=$[4],x=$[5],s=$[6],u=$[7],c=$[8],l=$[9],f=$[10],v=$[11],M=T*T*h+n,m=b*T*h+k*o,y=k*T*h-b*o,d=T*b*h-k*o,R=b*b*h+n,S=k*b*h+T*o,Y=T*k*h+b*o,E=b*k*h-T*o,P=k*k*h+n,t[0]=a*M+i*m+c*y,t[1]=p*M+x*m+l*y,t[2]=A*M+s*m+f*y,t[3]=D*M+u*m+v*y,t[4]=a*d+i*R+c*S,t[5]=p*d+x*R+l*S,t[6]=A*d+s*R+f*S,t[7]=D*d+u*R+v*S,t[8]=a*Y+i*E+c*P,t[9]=p*Y+x*E+l*P,t[10]=A*Y+s*E+f*P,t[11]=D*Y+u*E+v*P,$!==t&&(t[12]=$[12],t[13]=$[13],t[14]=$[14],t[15]=$[15]),t)}function Ma(t,$,r){var e=r[0],o=r[1],n=r[2];return t[0]=$[0]*e,t[1]=$[1]*e,t[2]=$[2]*e,t[3]=$[3]*e,t[4]=$[4]*o,t[5]=$[5]*o,t[6]=$[6]*o,t[7]=$[7]*o,t[8]=$[8]*n,t[9]=$[9]*n,t[10]=$[10]*n,t[11]=$[11]*n,t[12]=$[12],t[13]=$[13],t[14]=$[14],t[15]=$[15],t}function na(t,$,r,e,o,n,h,a,p,A,D,i,x,s,u,c,l){return t[0]=$,t[1]=r,t[2]=e,t[3]=o,t[4]=n,t[5]=h,t[6]=a,t[7]=p,t[8]=A,t[9]=D,t[10]=i,t[11]=x,t[12]=s,t[13]=u,t[14]=c,t[15]=l,t}function Qa(t,$,r){var e,o,n,h,a,p,A,D,i,x,s,u,c=r[0],l=r[1],f=r[2];return $===t?(t[12]=$[0]*c+$[4]*l+$[8]*f+$[12],t[13]=$[1]*c+$[5]*l+$[9]*f+$[13],t[14]=$[2]*c+$[6]*l+$[10]*f+$[14],t[15]=$[3]*c+$[7]*l+$[11]*f+$[15]):(e=$[0],o=$[1],n=$[2],h=$[3],a=$[4],p=$[5],A=$[6],D=$[7],i=$[8],x=$[9],s=$[10],u=$[11],t[0]=e,t[1]=o,t[2]=n,t[3]=h,t[4]=a,t[5]=p,t[6]=A,t[7]=D,t[8]=i,t[9]=x,t[10]=s,t[11]=u,t[12]=e*c+a*l+i*f+$[12],t[13]=o*c+p*l+x*f+$[13],t[14]=n*c+A*l+s*f+$[14],t[15]=h*c+D*l+u*f+$[15]),t}var Q=1e-6;var V="undefined"!=typeof Float32Array?Float32Array:Array;var a=Math.random;var H=function t(){var r=this;var $kUj2$$interop$default=q(G);$kUj2$$interop$default.d(this,t),this.value=va(),this.identity=function(t){return ea(r.value),r},this.inverse=function(t){return Fa(r.value,t),r},this.lookAt=function(t,e,i){return Ha(r.value,t,e,i),r},this.rotate=function(t,e,i){return Ka(r.value,t,e,i),r},this.scale=function(t,e){return Ma(r.value,t,"number"==typeof e?[e,e,e]:e),r},this.set=function(t,e,i,$,o,n,a,u,s,l,p,c,d,v,h,O){return na(r.value,t,e,i,$,o,n,a,u,s,l,p,c,d,v,h,O),r},this.toOrthogonal=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.left,i=t.right,$=t.bottom,o=t.top,n=t.near,a=t.far;return Ia(r.value,e,i,$,o,n,a),r},this.toPerspective=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.fov,i=t.aspect,$=t.near,o=t.far;return Ja(r.value,e,i,$,o),r},this.transpose=function(t){return na(r.value,t),r},this.translate=function(t,e){return Qa(r.value,t,e),r}};var pa={};function ia(e,r){for(var $=0;$<r.length;$++){var a=r[$];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ra(e,r,$){return r&&ia(e.prototype,r),$&&ia(e,$),e}pa=ra;function sa($,r,t){var e=new V(3);return e[0]=$,e[1]=r,e[2]=t,e}function ta($,r,t,e){return $[0]=r,$[1]=t,$[2]=e,$}var z=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;var $kUj2$$interop$default=q(G);$kUj2$$interop$default.d(this,e),this.x=0,this.y=0,this.z=0,this.value=sa(t,r,a)}var $dMjH$$interop$default=q(pa);return $dMjH$$interop$default.d(e,[{key:"value",get:function(){return[this.x,this.y,this.z]},set:function(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}}]),$dMjH$$interop$default.d(e,[{key:"set",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return this.value=ta(this.value,e,t,r),this}}]),e}();console.log(new z);var N=function t(){var $kUj2$$interop$default=q(G);$kUj2$$interop$default.d(this,t),this.matrix=new H,this.worldMatrix=new H,this.position=new z,this.rotation=new z,this.scale=new z(1)};var bb=function(r){var $PhTw$$interop$default=q(Z);$PhTw$$interop$default.d(t,r);var e=Ga(t);function t(){var r;var $kUj2$$interop$default=q(G);return $kUj2$$interop$default.d(this,t),(r=e.call(this)).baseColors=[[1,0,0,1],[1,1,0,1],[0,1,0,1],[1,.5,.5,1],[1,0,1,1],[0,0,1,1]],r.colors=[],r.matrix=new H,r.name=name,r.processColors=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.baseColors;for(var t in e)for(var o=e[t],c=0;c<4;c++)r.colors=r.colors.concat(o);return r.colors},r.textures=[0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1],r.normals=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0],r.vertices=[-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5,-.5,.5,.5,.5,-.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,-.5,-.5,.5,.5,-.5,.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5],r.indices=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23],r.colors=r.processColors(),r}return t}(N);function xa(t){return function(){var $XApn$$interop$default=q(U);var e,r=$XApn$$interop$default.d(t);if(ya()){var p=$XApn$$interop$default.d(this).constructor;e=Reflect.construct(r,arguments,p)}else e=r.apply(this,arguments);var $cbGp$$interop$default=q(W);return $cbGp$$interop$default.d(this,e)}}function ya(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}var za=function(t){var $PhTw$$interop$default=q(Z);$PhTw$$interop$default.d(r,t);var e=xa(r);function r(){var t,p=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=p.fov,o=void 0===i?45*Math.PI/180:i,a=p.aspect,n=void 0===a?window.innerWidth/window.innerHeight:a,$=p.near,c=void 0===$?.1:$,s=p.far,l=void 0===s?100:s,u=p.type,f=void 0===u?"":u,h=p.left,v=void 0===h?0:h,k=p.right,m=void 0===k?0:k,d=p.bottom,Y=void 0===d?0:d,b=p.top,g=void 0===b?0:b;var $kUj2$$interop$default=q(G);var $oXBW$$interop$default=q(L);return $kUj2$$interop$default.d(this,r),(t=e.call(this)).isCamera=!0,t.projectionMatrix=new H,t.modelViewMatrix=new H,t.worldPosition=new z,t.perspective=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.fov,p=e.aspect,i=e.near,o=e.far;var $oXBW$$interop$default=q(L);return t.projectionMatrix.toPerspective({fov:r,aspect:p,near:i,far:o}),Object.assign($oXBW$$interop$default.d(t),{fov:r,aspect:p,near:i,far:o})},t.orthogonal=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.left,p=e.right,i=e.bottom,o=e.top,a=e.near,n=e.far;var $oXBW$$interop$default=q(L);return t.projectionMatrix.toOrthogonal({left:r,right:p,bottom:i,top:o,near:a,far:n}),Object.assign($oXBW$$interop$default.d(t),{left:r,right:p,bottom:i,top:o,near:a,far:n})},Object.assign($oXBW$$interop$default.d(t),{fov:o,aspect:n,near:c,far:l,left:v,right:m,bottom:Y,top:g,type:f}),t}return r}(N);var ma=function a(r){var o=this;var $kUj2$$interop$default=q(G);$kUj2$$interop$default.d(this,a),this.parse=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.color,r=Math.floor(a);return o.r=(r>>16&255)/255,o.g=(r>>8&255)/255,o.b=(255&r)/255,o},this.parse(r)};var Ba=function e(){var r=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).color,o=void 0===r?65520:r;var $kUj2$$interop$default=q(G);$kUj2$$interop$default.d(this,e),this.color=void 0,this.color=new ma(o)};function Ca($){return function(){var $XApn$$interop$default=q(U);var r,e=$XApn$$interop$default.d($);if(Da()){var l=$XApn$$interop$default.d(this).constructor;r=Reflect.construct(e,arguments,l)}else r=e.apply(this,arguments);var $cbGp$$interop$default=q(W);return $cbGp$$interop$default.d(this,r)}}function Da(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch($){return!1}}var Ea=function($){var $PhTw$$interop$default=q(Z);$PhTw$$interop$default.d(e,$);var r=Ca(e);function e(){var $,l=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).name,t=void 0===l?"":l;var $kUj2$$interop$default=q(G);return $kUj2$$interop$default.d(this,e),($=r.call(this)).viewMatrix=new H,$.indices=[0,1,2,1,2,3],$.vertices=[-1,1,0,1,1,0,-1,-1,0,1,-1,0],$.colors=[1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1],$.name=t,$}return e}(N);var X=[],B=[],da=1,fa=1,K=da/2,J=fa/2;function La($,r,e,l){this.a=($.x+r.x+e.x+l.x)/4,this.b=($.y+r.y+e.y+l.y)/4,this.c=($.z+r.z+e.z+l.z)/4,this.d=l}B.push(new z(-K,J,0)),B.push(new z(K,J,0)),B.push(new z(K,-J,0)),B.push(new z(-K,-J,0)),X.push(new La(B[0],B[1],B[2],B[2])),console.log(X,B),B=[];var _,aa,Oa=5,Pa=5;K=(da=20)/2,J=(fa=20)/2;var ka=Oa||1,la=Pa||1,Sa=ka+1,Ta=la+1,Ua=da/ka,Va=fa/la;for(aa=0;aa<Ta;aa++)for(_=0;_<Sa;_++){var Wa=_*Ua-K,Xa=aa*Va-J;B.push(new z(new z(Wa,-Xa,0)))}console.log(X,B);var ba,ca={};!function(){function e(e){return e&&e.__esModule?{d:e.default}:{d:e}}var r={};function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function n(r){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach(function(t){e(o).d(r,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e))})}return r}var o={};o=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e};var i=function(e){throw new Error("".concat(e))},u={set required(e){i(e)},get required(){i("required parameter")},set warning(e){!function(e){console.warn("".concat(e))}(e)},log:function(e){return window.console&&window.console.log&&console.log(e)}},c=function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},a=function(e){return Array.isArray(e)},f=function(e){return a(e)?e.length>0:Object.keys(n({},e)).length>0},s=function(e){return a(e)?0===e.length:!Object.keys(n({},e)).length},p={array:a,bool:function(e){return"boolean"===c(e)},contains:f,date:function(e){return"date"===c(e)},empty:s,error:function(e){return"error"===c(e)},exist:function(e){return u.warning="\"exist\" method has been deprecated use \"contains\" instead.",Object.keys(n({},e)).length>0},include:function(e,r){return!s(e)&&!s(r)&&(a(e)?function(e){var r=e.query;return e.payload.includes(r)}({payload:e,query:r}):function(e){var r=e.payload,t=e.query;return f(r)&&void 0!==Object.keys(r).find(function(e){return e===t})}({payload:e,query:r}))},method:function(e){return"function"===c(e)},number:function(e){return Number.isFinite(e)},regex:function(e){return"regexp"===c(e)},string:function(e){return"string"===c(e)},trueObject:function(e){return"object"===c(e)},unknown:function(e){return null==e}},l={keys2Array:function(e){return p.trueObject(e)?Object.values(e):u.warning="argument is not a \"object\"."}},d={cleaningList:function(e){return function(e){var r=e.list;return r&&p.array(r)?r.splice(0,r.length):u.warning="argument is not an array or undefined"}({list:e})},cleaningProperty:function(e,r){return p.array(r)?function(e){var r=e.object,t=e.properties;return r&&"object"===c(r)&&p.exist(r)?t.forEach(function(e){return delete r[e]}):u.warning="first argument is not an object or undefined"}({object:e,properties:r}):u.warning="second argument is not an array or undefined"}},y={};y=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n};var b={};b=function(e){if(Array.isArray(e))return y(e)};var g={};g=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)};var m={};m=function(e,r){if(e){if("string"==typeof e)return y(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,r):void 0}};var w={};w=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var O={};O=function(e){return b(e)||g(e)||m(e)||w()};var j=function(r){return r.reduce(function(r,t){var n=e(O);return p.array(t)?[].concat(n.d(r),n.d(j(t))):[].concat(n.d(r),[t])},[])},v=function(e){return function(e){var r=e.payload;if(p.exist(r)||"object"===c(r))return Object.keys(r).forEach(function(e){return p.include(r[e],e)||!Object.isFrozen(r[e])?v(r[e]):r[e]}),Object.freeze(r);u.warning="parameter is not an \"object\" or \"undefined\""}({payload:e})};function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function S(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){e(o).d(r,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var P=/[-._]/g,$={makeFirstLetterUpperCase:function(r){if(p.empty(r))return u.warning="\"string\" is empty.",r;var t=function(e){return!p.empty(e)},n=function(r,t){var n=e(O);return[].concat(n.d(r),[t.split("").map(function(e,r){return 0===r?e.toUpperCase():e}).join("")])};return function(e){return function(e){return e.trim().toLowerCase().replace(P," ").split(" ").filter(t)}(e).reduce(n,"").join("")}(r)},makeInteger:function(e,r){if(p.string(e))return e.replace(P,"").split(r).map(function(e){return p.string(e)?window.parseInt(e):e}).filter(function(e){return p.number(e)});u.warning="first argument is not a \"string\"."},toFirstLetterUpperCase:k,toFirstLetterUpperCaseReducer:function(e,r){if(u.warning="\"toFirstLetterUpperCaseReducer\" is deprecated used \"makeFirstLetterUpperCase\" instead.",!p.empty(e)){var t=e.split(P);return t.reduce(function(e,n,o){return e+=k(n),(null==r?void 0:r.length)>0&&o===t.length-1&&(e+=k(r)),e},"")}},ToInt:function(e,r){return u.warning="\"ToInt\" is deprecated used \"makeInteger\" instead.",e.split(r).map(function(e){return window.parseInt(e)})}};function k(r){return u.warning="\"toFirstLetterUpperCase\" is deprecated used \"makeFirstLetterUpperCase\" instead.",p.empty(r)?(u.warning="\"string\" is empty.",r):r.trim().toLowerCase().replace(P," ").split("").filter(function(e){return!p.empty(e)}).reduce(function(r,t,n){var o=e(O);return[].concat(o.d(r),[0===n?t.toUpperCase():t])},"").join("")}var A=window.navigator.userAgent,C={android:function(e){return /Android/.test(A)},browser:function(e){return /Chrome|Firefox|Safari/.test(A)},egde:function(e){return /Edge/.test(A)&&window.MSStream},ie:function(e){return /MSIE/.test(A)&&window.MSStream},ios:function(e){return /iPad|iPhone|iPod/.test(A)&&!window.MSStream},phone:function(e){return /iPhone|iPod|Android/.test(A)}},E={};function D(e){return E=D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}E=D;r.convert=l,r.debounce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.required,r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return function(n){window.clearTimeout(t),t=window.setTimeout(e(n),r)}},r.deletion=d,r.fail=u,r.flatten=j,r.frozen=v,r.is=p,r.loop=function(e,r){if(!p.empty(e))return p.array(e)&&p.contains(e)?function(e){var r=e.f;e.payload.forEach(function(e,t,n){return r({current:e,index:t,list:n})})}({payload:e,f:r}):u.warning="first argument is not an \"array\"."},r.merge=function(r,t){return p.trueObject(r)&&p.trueObject(t)?function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(t){e(o).d(r,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}({},r,{},t):u.warning="argument are not valid."},r.oftype=c,r.pipe=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return[].concat(r).reduce(function(e,r){return r(e)},e||{})}},r.ratio169=function(e){return p.number(e)?Math.round(e/16*9):u.warning="argument is not a \"number\"."},r.reducer=function(r,t){return Object.keys(S({},r)).reduce(function(n,i){return S({},n,e(o).d({},i,t(r[i])))},r)},r.strings=$,r.ua=C,r.uniqid=function(r){for(var t="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",n=-1!==t.indexOf("x"),o=function(){var e,r=performance.now().toString().replace(/^.{4}/,"".concat(Math.random(),".")),n=parseFloat(r);return{v:(e=t,e.replace(/x/g,function(e){return(n*Math.random()*16|16*Math.random()).toString(16)}))}};n;){var i=o();if("object"===e(E).d(i))return i.v}},"object"==typeof ca?ca=r:"function"==typeof ba&&ba.amd?ba(function(){return r}):this.u3s=r}();var oa=function(r){var e=r.gl,o=r.type,i=r.codeSource,t={fragment:e.createShader(e.FRAGMENT_SHADER),vertex:e.createShader(e.VERTEX_SHADER)}[o];return e.shaderSource(t,i),e.compileShader(t),e.getShaderParameter(t,e.COMPILE_STATUS)?t:(console.log(e.getShaderInfoLog(t)),null)},_a="\n  // # \u03BB <\u2022 /* TODO: including */ \u2022>\n  \n  attribute vec4 position;\n  attribute vec4 color;\n  attribute vec2 texture2d;\n\n  uniform vec2 resolution;\n  uniform mat4 object3dMatrix;\n  uniform mat4 modelViewMatrix;\n  uniform mat4 projectionMatrix;\n  uniform vec3 cameraPosition;\n\n  varying vec4 vColor;\n  varying vec2 vTexture;\n  varying vec3 pViewPosition;\n\n  void main () {\n    vec4 mvPosition = modelViewMatrix * position;\n    vec4 mPosition = object3dMatrix * vec4( position.xyz, 1.0 );\n    pViewPosition = cameraPosition - mPosition.xyz;\n\n    vColor = color;\n\n    gl_Position = projectionMatrix * mvPosition;\n  }\n",ab="\n  #ifdef GL_ES\n  precision highp float;\n  #endif\n\n  varying vec4 vColor;\n  varying vec3 pViewPosition;\n\n  void main () {\n\n    gl_FragColor = vColor;\n  }\n",Za=function r(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=o.alpha,t=void 0!==i&&i,a=o.antialias,n=void 0===a||a,l=o.autoClear,g=void 0===l||l,c=o.canvas,m=void 0===c?document.createElement("canvas"):c,s=o.width,p=void 0===s?200:s,d=o.height,f=void 0===d?200:d,u=o.dpr,v=void 0===u?window.devicePixelRatio:u;var $kUj2$$interop$default=q(G);$kUj2$$interop$default.d(this,r),this.gl=null,this.program=null,this.modelViewMatrix=new H,this.radian=0,this.onrender=function(r){var o,i=r.scene,t=r.camera;e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.uniform3f(e.program.cameraPosition,t.position.x,t.position.y,t.position.z);for(var a=0;a<i.children.length;a++)(o=i.children[a])&&(o.__positionBuffer||(o.__positionBuffer=e.gl.createBuffer()),e.gl.bindBuffer(e.gl.ARRAY_BUFFER,o.__positionBuffer),e.gl.bufferData(e.gl.ARRAY_BUFFER,new Float32Array(o.vertices),e.gl.STATIC_DRAW),o.__colorBuffer||(o.__colorBuffer=e.gl.createBuffer()),e.gl.bindBuffer(e.gl.ARRAY_BUFFER,o.__colorBuffer),e.gl.bufferData(e.gl.ARRAY_BUFFER,new Float32Array(o.colors),e.gl.STATIC_DRAW),o.__indexBuffer||(o.__indexBuffer=e.gl.createBuffer()),e.gl.bindBuffer(e.gl.ELEMENT_ARRAY_BUFFER,o.__indexBuffer),e.gl.bufferData(e.gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(o.indices),e.gl.STATIC_DRAW),e.setupMatrices({object3d:null,camera:t}),e.gl.bindBuffer(e.gl.ARRAY_BUFFER,o.__positionBuffer),e.gl.vertexAttribPointer(e.program.position,3,e.gl.FLOAT,!1,0,0),e.gl.enableVertexAttribArray(e.program.position),e.gl.bindBuffer(e.gl.ARRAY_BUFFER,o.__colorBuffer),e.gl.vertexAttribPointer(e.program.color,4,e.gl.FLOAT,!1,0,0),e.gl.enableVertexAttribArray(e.program.color),e.gl.bindBuffer(e.gl.ELEMENT_ARRAY_BUFFER,o.__indexBuffer),e.gl.uniformMatrix4fv(e.program.projectionMatrix,!1,t.projectionMatrix.value),e.gl.uniformMatrix4fv(e.program.modelViewMatrix,!1,t.modelViewMatrix.value),e.gl.uniformMatrix4fv(e.program.object3dMatrix,!1,o.matrix.value));return e.gl.drawElements(e.gl.TRIANGLES,o.indices.length,e.gl.UNSIGNED_SHORT,0),e.radian+=Math.PI/180,e},this.clear=function(r){return e.gl.clearColor(0,0,0,1),e.gl.clearDepth(1),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e},this.initGL=function(r){return e.gl.enable(e.gl.DEPTH_TEST),e.gl.depthFunc(e.gl.LEQUAL),e},this.initProgram=function(r){return e.program=e.gl.createProgram(),e.gl.attachShader(e.program,oa({gl:e.gl,type:"fragment",codeSource:ab})),e.gl.attachShader(e.program,oa({gl:e.gl,type:"vertex",codeSource:_a})),e.gl.linkProgram(e.program),e.gl.getProgramParameter(e.program,e.gl.LINK_STATUS)||(ca.fail.warning="Could not initialise shaders, ".concat(gl.getProgramInfoLog(e.program))),e.gl.useProgram(e.program),e.program.modelViewMatrix=e.gl.getUniformLocation(e.program,"modelViewMatrix"),e.program.projectionMatrix=e.gl.getUniformLocation(e.program,"projectionMatrix"),e.program.normalMatrix=e.gl.getUniformLocation(e.program,"normalMatrix"),e.program.object3dMatrix=e.gl.getUniformLocation(e.program,"object3dMatrix"),e.program.cameraPosition=e.gl.getUniformLocation(e.program,"cameraPosition"),e.program.resolution=e.gl.getUniformLocation(e.program,"resolution"),e.program.position=e.gl.getAttribLocation(e.program,"position"),e.gl.enableVertexAttribArray(e.program.position),e.program.color=e.gl.getAttribLocation(e.program,"color"),e.gl.enableVertexAttribArray(e.program.color),e.program.viewMatrixArray=new Float32Array(16),e.program.modelViewMatrixArray=new Float32Array(16),e.program.projectionMatrixArray=new Float32Array(16),e},this.resize=function(r){return e.setSize().clear(),e.gl.viewport(0,0,e.canvas.width,e.canvas.height),e},this.setSize=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=r.width,i=void 0===o?window.innerWidth:o,t=r.height,a=void 0===t?window.innerHeight:t;return e.canvas.width=i*e.dpr,e.canvas.height=a*e.dpr,Object.assign(e.canvas.style,{width:"".concat(i,"px"),height:"".concat(a,"px")}),e},this.setupMatrices=function(r){var o=r.camera;switch(o.type){case"perspective":o.perspective({fov:o.fov,aspect:o.aspect,near:o.near,far:o.far});break;case"orthogonal":o.orthogonal({left:o.left,right:o.right,bottom:o.bottom,top:o.top,near:o.near,far:o.far});break;default:return;}return o.modelViewMatrix.identity(),o.modelViewMatrix.translate(o.modelViewMatrix.value,[o.position.x,o.position.y,o.position.z]),o.modelViewMatrix.rotate(o.modelViewMatrix.value,e.radian,[o.rotation.x,o.rotation.y,o.rotation.z]),e},Object.assign(this,{alpha:t,antialias:n,autoClear:g,canvas:m,width:p,height:f,dpr:v}),this.gl=m.getContext("webgl",{alpha:t,antialias:n}),this.initProgram().initGL().resize()};var qa=function e(){var p=this;var $kUj2$$interop$default=q(G);$kUj2$$interop$default.d(this,e),this.children=[],this.uuid=ca.uniqid(),this.name="",this.type="scene",this.isScene=!0,this.add=function(e){return p.children.push(e),p}};F.Box=bb,F.Camera=za,F.Color=ma,F.Material=Ba,F.Plane=Ea,F.Renderer=Za,F.Renderable=N,F.Scene=qa;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=F}else if(typeof define==="function"&&define.amd){define(function(){return F})}else{this["d2k"]=F}})();