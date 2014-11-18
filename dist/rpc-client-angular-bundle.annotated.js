"format register";

System.register("github:angular/bower-angular@1.3.3/angular.min", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {  /* */ 
      "format global";
      "exports angular";
      /*
       AngularJS v1.3.3
       (c) 2010-2014 Google, Inc. http://angularjs.org
       License: MIT
      */
      (function(T,U,t){'use strict';function v(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.3/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ra(b){if(null==b||Sa(b))return!1;var a=b.length;return b.nodeType===
      la&&a?!0:I(b)||G(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(u(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(G(b)||Ra(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Cd(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
      b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Dd(){return++kb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function H(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var k=f[g];b[k]=e[k]}}lc(b,a);return b}function aa(b){return parseInt(b,10)}function mc(b,a){return H(new (H(function(){},{prototype:b})),a)}function w(){}function ma(b){return b}function ba(b){return function(){return b}}
      function D(b){return"undefined"===typeof b}function A(b){return"undefined"!==typeof b}function L(b){return null!==b&&"object"===typeof b}function I(b){return"string"===typeof b}function W(b){return"number"===typeof b}function ea(b){return"[object Date]"===Ja.call(b)}function u(b){return"function"===typeof b}function lb(b){return"[object RegExp]"===Ja.call(b)}function Sa(b){return b&&b.window===b}function Ta(b){return b&&b.$evalAsync&&b.$watch}function Ua(b){return"boolean"===typeof b}function nc(b){return!(!b||
      !(b.nodeName||b.prop&&b.attr&&b.find))}function Ed(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function sa(b){return Q(b.nodeName||b[0].nodeName)}function Va(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ca(b,a,c,d){if(Sa(b)||Ta(b))throw Wa("cpws");if(a){if(b===a)throw Wa("cpi");c=c||[];d=d||[];if(L(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(G(b))for(var f=a.length=0;f<b.length;f++)e=Ca(b[f],null,c,d),L(b[f])&&(c.push(b[f]),
      d.push(e)),a.push(e);else{var g=a.$$hashKey;G(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ca(b[f],null,c,d),L(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)G(b)?a=Ca(b,[],c,d):ea(b)?a=new Date(b.getTime()):lb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):L(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ca(b,e,c,d));return a}function ta(b,a){if(G(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(L(b))for(c in a=
      a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function na(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(G(b)){if(!G(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!na(b[d],a[d]))return!1;return!0}}else{if(ea(b))return ea(a)?na(b.getTime(),a.getTime()):!1;if(lb(b)&&lb(a))return b.toString()==a.toString();if(Ta(b)||Ta(a)||Sa(b)||Sa(a)||G(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&
      !u(b[d])){if(!na(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!u(a[d]))return!1;return!0}return!1}function Xa(b,a,c){return b.concat(Ya.call(a,c))}function oc(b,a){var c=2<arguments.length?Ya.call(arguments,2):[];return!u(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Xa(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Fd(b,a){var c=a;"string"===typeof b&&"$"===
      b.charAt(0)&&"$"===b.charAt(1)?c=t:Sa(a)?c="$WINDOW":a&&U===a?c="$DOCUMENT":Ta(a)&&(c="$SCOPE");return c}function Za(b,a){return"undefined"===typeof b?t:JSON.stringify(b,Fd,a?"  ":null)}function pc(b){return I(b)?JSON.parse(b):b}function ua(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y("<div>").append(b).html();try{return b[0].nodeType===mb?Q(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(d){return Q(c)}}function qc(b){try{return decodeURIComponent(b)}catch(a){}}
      function rc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=qc(c[0]),A(d)&&(b=A(c[1])?qc(c[1]):!0,Jb.call(a,d)?G(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Kb(b){var a=[];r(b,function(b,d){G(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}function nb(b){return Da(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,
      "@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Gd(b,a){var c,d,e=ob.length;b=y(b);for(d=0;d<e;++d)if(c=ob[d]+a,I(c=b.attr(c)))return c;return null}function Hd(b,a){var c,d,e={};r(ob,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(ob,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Gd(c,"strict-di"),
      a(c,d?[d]:[],e))}function sc(b,a,c){L(c)||(c={});c=H({strictDi:!1},c);var d=function(){b=y(b);if(b.injector()){var d=b[0]===U?"document":ua(b);throw Wa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Lb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
      d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;T&&e.test(T.name)&&(c.debugInfoEnabled=!0,T.name=T.name.replace(e,""));if(T&&!f.test(T.name))return d();T.name=T.name.replace(f,"");va.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function Id(){T.name="NG_ENABLE_DEBUG_INFO!"+T.name;T.location.reload()}function Jd(b){return va.element(b).injector().get("$$testability")}function Mb(b,a){a=a||"_";return b.replace(Kd,function(b,d){return(d?a:"")+b.toLowerCase()})}
      function Ld(){var b;tc||((oa=T.jQuery)&&oa.fn.on?(y=oa,H(oa.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=oa.cleanData,oa.cleanData=function(a){var c;if(Nb)Nb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=oa._data(e,"events"))&&c.$destroy&&oa(e).triggerHandler("$destroy");b(a)}):y=R,va.element=y,tc=!0)}function Ob(b,a,c){if(!b)throw Wa("areq",a||"?",c||"required");return b}function pb(b,a,c){c&&G(b)&&(b=b[b.length-1]);
      Ob(u(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Wa("badname",a);}function uc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&u(b)?oc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return y(c)}function pa(){return Object.create(null)}function Md(b){function a(a,b,c){return a[b]||
      (a[b]=c())}var c=v("$injector"),d=v("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||v;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return n}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),n={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide",
      "provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return n})}})}function Nd(b){H(b,{bootstrap:sc,copy:Ca,extend:H,equals:na,element:y,forEach:r,injector:Lb,noop:w,bind:oc,toJson:Za,
      fromJson:pc,identity:ma,isUndefined:D,isDefined:A,isString:I,isFunction:u,isObject:L,isNumber:W,isElement:nc,isArray:G,version:Od,isDate:ea,lowercase:Q,uppercase:rb,callbacks:{counter:0},getTestability:Jd,$$minErr:v,$$csp:$a,reloadWithDebugInfo:Id});ab=Md(T);try{ab("ngLocale")}catch(a){ab("ngLocale",[]).provider("$locale",Pd)}ab("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Qd});a.provider("$compile",vc).directive({a:Rd,input:wc,textarea:wc,form:Sd,script:Td,select:Ud,style:Vd,
      option:Wd,ngBind:Xd,ngBindHtml:Yd,ngBindTemplate:Zd,ngClass:$d,ngClassEven:ae,ngClassOdd:be,ngCloak:ce,ngController:de,ngForm:ee,ngHide:fe,ngIf:ge,ngInclude:he,ngInit:ie,ngNonBindable:je,ngPluralize:ke,ngRepeat:le,ngShow:me,ngStyle:ne,ngSwitch:oe,ngSwitchWhen:pe,ngSwitchDefault:qe,ngOptions:re,ngTransclude:se,ngModel:te,ngList:ue,ngChange:ve,pattern:xc,ngPattern:xc,required:yc,ngRequired:yc,minlength:zc,ngMinlength:zc,maxlength:Ac,ngMaxlength:Ac,ngValue:we,ngModelOptions:xe}).directive({ngInclude:ye}).directive(sb).directive(Bc);
      a.provider({$anchorScroll:ze,$animate:Ae,$browser:Be,$cacheFactory:Ce,$controller:De,$document:Ee,$exceptionHandler:Fe,$filter:Cc,$interpolate:Ge,$interval:He,$http:Ie,$httpBackend:Je,$location:Ke,$log:Le,$parse:Me,$rootScope:Ne,$q:Oe,$$q:Pe,$sce:Qe,$sceDelegate:Re,$sniffer:Se,$templateCache:Te,$templateRequest:Ue,$$testability:Ve,$timeout:We,$window:Xe,$$rAF:Ye,$$asyncCallback:Ze})}])}function bb(b){return b.replace($e,function(a,b,d,e){return e?d.toUpperCase():d}).replace(af,"Moz$1")}function Dc(b){b=
      b.nodeType;return b===la||!b||9===b}function Ec(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Pb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(bf.exec(b)||["",""])[1].toLowerCase();d=ha[d]||ha._default;c.innerHTML=d[1]+b.replace(cf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Xa(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;
      I(b)&&(b=P(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Qb("nosel");return new R(b)}if(a){a=U;var c;b=(c=df.exec(b))?[a.createElement(c[1])]:(c=Ec(b,a))?c.childNodes:[]}Fc(this,b)}function Rb(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ub(c[d])}function Gc(b,a,c,d){if(A(d))throw Qb("offargs");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),function(a){if(A(c)){var d=e[a];Va(d||
      [],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function ub(b,a){var c=b.ng339,d=c&&wb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Gc(b)),delete wb[c],b.ng339=t))}function vb(b,a){var c=b.ng339,c=c&&wb[c];a&&!c&&(b.ng339=c=++ef,c=wb[c]={events:{},data:{},handle:t});return c}function Sb(b,a,c){if(Dc(b)){var d=A(c),e=!d&&a&&!L(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=
      c;else{if(f)return b;if(e)return b&&b[a];H(b,a)}}}function Tb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Ub(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",P((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+P(a)+" "," ")))})}function Vb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=P(a);-1===
      c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",P(c))}}function Fc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Hc(b,a){return xb(b,"$"+(a||"ngController")+"Controller")}function xb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=G(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=y.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Ic(b){for(tb(b,
      !0);b.firstChild;)b.removeChild(b.firstChild)}function Jc(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function ff(b,a){a=a||T;if("complete"===a.document.readyState)a.setTimeout(b);else y(a).on("load",b)}function Kc(b,a){var c=yb[a.toLowerCase()];return c&&Lc[sa(b)]&&c}function gf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Mc[a]}function hf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(D(c.immediatePropagationStopped)){var h=
      c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=ta(f));for(var k=0;k<g;k++)c.isImmediatePropagationStopped()||f[k].call(b,c)}};c.elem=b;return c}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=
      c+":"+(a||Dd)():c+":"+b}function cb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function jf(b){return(b=b.toString().replace(Nc,"").match(Oc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Wb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw I(c)&&c||(c=b.name||jf(b)),Ea("strictdi",c);a=b.toString().replace(Nc,"");a=a.match(Oc);r(a[1].split(kf),function(a){a.replace(lf,function(a,b,c){d.push(c)})})}b.$inject=d}}else G(b)?
      (a=b.length-1,pb(b[a],"fn"),d=b.slice(0,a)):pb(b,"fn",!0);return d}function Lb(b,a){function c(a){return function(b,c){if(L(b))r(b,kc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(u(b)||G(b))b=q.instantiate(b);if(!b.$get)throw Ea("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,this,t,a);if(D(c))throw Ea("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=
      a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{I(a)?(c=ab(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):u(a)?b.push(q.invoke(a)):G(a)?b.push(q.invoke(a)):pb(a,"module")}catch(e){throw G(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ea("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===k)throw Ea("cdep",
      a+" <- "+l.join(" <- "));return b[a]}try{return l.unshift(a),b[a]=k,b[a]=c(a)}catch(e){throw b[a]===k&&delete b[a],e;}finally{l.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[];g=Wb(b,a,g);var h,l,n;l=0;for(h=g.length;l<h;l++){n=g[l];if("string"!==typeof n)throw Ea("itkn",n);k.push(f&&f.hasOwnProperty(n)?f[n]:d(n))}G(b)&&(b=b[h]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(G(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,
      c);return L(a)||u(a)?a:d},get:d,annotate:Wb,has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var k={},l=[],m=new cb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ba(b),!1)}),constant:c(function(a,b){La(a,"constant");p[a]=b;n[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,
      null,{$delegate:a})}}}},q=p.$injector=h(p,function(){throw Ea("unpr",l.join(" <- "));}),n={},s=n.$injector=h(n,function(a){var b=q.get(a+"Provider");return s.invoke(b.$get,b,t,a)});r(g(b),function(a){s.invoke(a||w)});return s}function ze(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===sa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;
      c=g.yOffset;u(c)?c=c():nc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||ff(function(){d.$evalAsync(g)})});return g}]}function Ze(){this.$get=["$$rAF","$timeout",
      function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function mf(b,a,c,d){function e(a){try{a.apply(null,Ya.call(arguments,1))}finally{if(x--,0===x)for(;B.length;)try{B.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ya(){r(J,function(a){a()});z=b(ya,a)})()}function g(){h();k()}function h(){F=b.history.state;F=D(F)?null:F;na(F,S)&&(F=S);S=F}function k(){if(C!==m.url()||N!==F)C=m.url(),N=F,r(V,function(a){a(m.url(),F)})}function l(a){try{return decodeURIComponent(a)}catch(b){return a}}
      var m=this,p=a[0],q=b.location,n=b.history,s=b.setTimeout,O=b.clearTimeout,E={};m.isMock=!1;var x=0,B=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){x++};m.notifyWhenNoOutstandingRequests=function(a){r(J,function(a){a()});0===x?a():B.push(a)};var J=[],z;m.addPollFn=function(a){D(z)&&f(100,s);J.push(a);return a};var F,N,C=q.href,ca=a.find("base"),M=null;h();N=F;m.url=function(a,c,e){D(e)&&(e=null);q!==b.location&&(q=b.location);n!==b.history&&(n=b.history);if(a){var f=
      N===e;if(C!==a||d.history&&!f){var g=C&&Fa(C)===Fa(a);C=a;N=e;!d.history||g&&f?(g||(M=a),c?q.replace(a):q.href=a):(n[c?"replaceState":"pushState"](e,"",a),h(),N=F);return m}}else return M||q.href.replace(/%27/g,"'")};m.state=function(){return F};var V=[],X=!1,S=null;m.onUrlChange=function(a){if(!X){if(d.history)y(b).on("popstate",g);y(b).on("hashchange",g);X=!0}V.push(a);return a};m.$$checkUrlChange=k;m.baseHref=function(){var a=ca.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};
      var da={},A="",fa=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===t?p.cookie=encodeURIComponent(a)+"=;path="+fa+";expires=Thu, 01 Jan 1970 00:00:00 GMT":I(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+fa).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==A)for(A=p.cookie,d=A.split("; "),da={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=l(e.substring(0,g)),da[a]===
      t&&(da[a]=l(e.substring(g+1))));return da}};m.defer=function(a,b){var c;x++;c=s(function(){delete E[c];e(a)},b||0);E[c]=!0;return c};m.defer.cancel=function(a){return E[a]?(delete E[a],O(a),e(w),!0):!1}}function Be(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new mf(b,d,a,c)}]}function Ce(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw v("$cacheFactory")("iid",
      b);var g=0,h=H({},d,{id:b}),k={},l=d&&d.capacity||Number.MAX_VALUE,m={},p=null,q=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!D(b))return a in k||g++,k[a]=b,g>l&&this.remove(q.key),b},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete k[a];g--},removeAll:function(){k={};g=0;m={};p=q=null},destroy:function(){m=
      h=k=null;delete a[b]},info:function(){return H({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Te(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function vc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw ia("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d=
      {},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Ed("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){La(a,"directive");I(a)?(Ob(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);u(h)?h={compile:ba(h)}:!h.compile&&h.link&&(h.compile=ba(h.link));h.priority=h.priority||0;h.index=
      g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";L(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,kc(p));return this};this.aHrefSanitizationWhitelist=function(b){return A(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return A(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var l=!0;this.debugInfoEnabled=
      function(a){return A(a)?(l=a,this):l};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,O,E,x,B,J,z,F){function N(a,b){try{a.addClass(b)}catch(c){}}function C(a,b,c,d,e){a instanceof y||(a=y(a));r(a,function(b,c){b.nodeType==mb&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var f=ca(a,b,a,c,d,e);C.$$addScopeClass(a);var g=null;return function(b,
      c,d){Ob(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==sa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?y(T(g,y("<div>").append(a).html())):c?Ka.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);C.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function ca(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,q,s,p,B;if(n)for(B=
      Array(c.length),q=0;q<h.length;q+=3)f=h[q],B[f]=c[f];else B=c;q=0;for(s=h.length;q<s;)k=B[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(l=a.$new(),C.$$addScopeInfo(y(k),l)):l=a,p=c.transcludeOnThisElement?M(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?M(a,b):null,c(f,l,k,d,p)):f&&f(a,k.childNodes,t,e)}for(var h=[],k,l,q,s,n,p=0;p<a.length;p++){k=new W;l=V(a[p],[],k,0===p?d:t,e);(f=l.length?A(l,a[p],k,b,c,null,[],[],f):null)&&f.scope&&C.$$addScopeClass(k.$$element);
      k=f&&f.terminal||!(q=a[p].childNodes)||!q.length?null:ca(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(p,f,k),s=!0,n=n||f;f=null}return s?g:null}function M(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function V(b,c,g,h,k){var l=g.$attr,q;switch(b.nodeType){case la:fa(c,wa(sa(b)),"E",h,k);for(var s,n,B,O=b.attributes,E=0,J=O&&O.length;E<
      J;E++){var F=!1,x=!1;s=O[E];q=s.name;s=P(s.value);n=wa(q);if(B=za.test(n))q=Mb(n.substr(6),"-");var N=n.replace(/(Start|End)$/,""),C;a:{var z=N;if(d.hasOwnProperty(z)){C=void 0;for(var z=a.get(z+"Directive"),V=0,r=z.length;V<r;V++)if(C=z[V],C.multiElement){C=!0;break a}}C=!1}C&&n===N+"Start"&&(F=q,x=q.substr(0,q.length-5)+"end",q=q.substr(0,q.length-6));n=wa(q.toLowerCase());l[n]=q;if(B||!g.hasOwnProperty(n))g[n]=s,Kc(b,n)&&(g[n]=!0);R(b,c,s,n,B);fa(c,n,"A",h,k,F,x)}b=b.className;if(I(b)&&""!==b)for(;q=
      f.exec(b);)n=wa(q[2]),fa(c,n,"C",h,k)&&(g[n]=P(q[3])),b=b.substr(q.index+q[0].length);break;case mb:Y(c,b.nodeValue);break;case 8:try{if(q=e.exec(b.nodeValue))n=wa(q[1]),fa(c,n,"M",h,k)&&(g[n]=P(q[2]))}catch(ca){}}c.sort(v);return c}function X(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);a.nodeType==la&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function S(a,b,c){return function(d,
      e,f,g,h){e=X(e[0],b,c);return a(d,e,f,g,h)}}function A(a,d,e,f,g,k,l,s,p){function B(a,b,c,d){if(a){c&&(a=S(a,c,d));a.require=K.require;a.directiveName=ga;if(M===K||K.$$isolateScope)a=Z(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=S(b,c,d));b.require=K.require;b.directiveName=ga;if(M===K||K.$$isolateScope)b=Z(b,{isolateScope:!0});s.push(b)}}function J(a,b,c,d){var e,f="data",g=!1,k=c,l;if(I(b)){l=b.match(h);b=b.substring(l[0].length);l[3]&&(l[1]?l[3]=null:l[1]=l[3]);"^"===l[1]?f="inheritedData":"^^"===
      l[1]&&(f="inheritedData",k=c.parent());"?"===l[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||k[f]("$"+b+"Controller");if(!e&&!g)throw ia("ctreq",b,a);return e||null}G(b)&&(e=[],r(b,function(b){e.push(J(a,b,c,d))}));return e}function F(a,c,f,g,h){function k(a,b,c){var d;Ta(a)||(c=b,b=a,a=t);H&&(d=N);c||(c=H?V.parent():V);return h(a,b,d,c,Xb)}var n,p,B,x,N,db,V,S;d===f?(S=e,V=e.$$element):(V=y(f),S=new W(V,e));M&&(x=c.$new(!0));h&&(db=k,db.$$boundTransclude=h);z&&(ca={},N={},r(z,function(a){var b=
      {$scope:a===M||a.$$isolateScope?x:c,$element:V,$attrs:S,$transclude:db};B=a.controller;"@"==B&&(B=S[a.name]);b=E(B,b,!0,a.controllerAs);N[a.name]=b;H||V.data("$"+a.name+"Controller",b.instance);ca[a.name]=b}));if(M){C.$$addScopeInfo(V,x,!0,!(da&&(da===M||da===M.$$originalDirective)));C.$$addScopeClass(V,!0);g=ca&&ca[M.name];var X=x;g&&g.identifier&&!0===M.bindToController&&(X=g.instance);r(x.$$isolateBindings=M.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":S.$observe(e,
      function(a){X[d]=a});S.$$observers[e].$$scope=c;S[e]&&(X[d]=b(S[e])(c));break;case "=":if(f&&!S[e])break;h=O(S[e]);l=h.literal?na:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=X[d]=h(c);throw ia("nonassign",S[e],M.name);};g=X[d]=h(c);f=function(a){l(a,X[d])||(l(a,g)?k(c,a=X[d]):X[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(S[e],f):c.$watch(O(S[e],f),null,h.literal);x.$on("$destroy",f);break;case "&":h=O(S[e]),X[d]=function(a){return h(c,a)}}})}ca&&(r(ca,
      function(a){a()}),ca=null);g=0;for(n=l.length;g<n;g++)p=l[g],$(p,p.isolateScope?x:c,V,S,p.require&&J(p.directiveName,p.require,V,N),db);var Xb=c;M&&(M.template||null===M.templateUrl)&&(Xb=x);a&&a(Xb,f.childNodes,t,h);for(g=s.length-1;0<=g;g--)p=s[g],$(p,p.isolateScope?x:c,V,S,p.require&&J(p.directiveName,p.require,V,N),db)}p=p||{};for(var x=-Number.MAX_VALUE,N,z=p.controllerDirectives,ca,M=p.newIsolateScopeDirective,da=p.templateDirective,fa=p.nonTlbTranscludeDirective,w=!1,Na=!1,H=p.hasElementTranscludeDirective,
      Y=e.$$element=y(d),K,ga,v,Ga=f,Q,R=0,za=a.length;R<za;R++){K=a[R];var zb=K.$$start,aa=K.$$end;zb&&(Y=X(d,zb,aa));v=t;if(x>K.priority)break;if(v=K.scope)K.templateUrl||(L(v)?(ya("new/isolated scope",M||N,K,Y),M=K):ya("new/isolated scope",M,K,Y)),N=N||K;ga=K.name;!K.templateUrl&&K.controller&&(v=K.controller,z=z||{},ya("'"+ga+"' controller",z[ga],K,Y),z[ga]=K);if(v=K.transclude)w=!0,K.$$tlb||(ya("transclusion",fa,K,Y),fa=K),"element"==v?(H=!0,x=K.priority,v=Y,Y=e.$$element=y(U.createComment(" "+ga+
      ": "+e[ga]+" ")),d=Y[0],Ab(g,Ya.call(v,0),d),Ga=C(v,f,x,k&&k.name,{nonTlbTranscludeDirective:fa})):(v=y(Rb(d)).contents(),Y.empty(),Ga=C(v,f));if(K.template)if(Na=!0,ya("template",da,K,Y),da=K,v=u(K.template)?K.template(Y,e):K.template,v=Qc(v),K.replace){k=K;v=Pb.test(v)?Rc(T(K.templateNamespace,P(v))):[];d=v[0];if(1!=v.length||d.nodeType!==la)throw ia("tplrt",ga,"");Ab(g,Y,d);za={$attr:{}};v=V(d,[],za);var of=a.splice(R+1,a.length-(R+1));M&&D(v);a=a.concat(v).concat(of);Pc(e,za);za=a.length}else Y.html(v);
      if(K.templateUrl)Na=!0,ya("template",da,K,Y),da=K,K.replace&&(k=K),F=nf(a.splice(R,a.length-R),Y,e,g,w&&Ga,l,s,{controllerDirectives:z,newIsolateScopeDirective:M,templateDirective:da,nonTlbTranscludeDirective:fa}),za=a.length;else if(K.compile)try{Q=K.compile(Y,e,Ga),u(Q)?B(null,Q,zb,aa):Q&&B(Q.pre,Q.post,zb,aa)}catch(ba){c(ba,ua(Y))}K.terminal&&(F.terminal=!0,x=Math.max(x,K.priority))}F.scope=N&&!0===N.scope;F.transcludeOnThisElement=w;F.elementTranscludeOnThisElement=H;F.templateOnThisElement=Na;
      F.transclude=Ga;p.hasElementTranscludeDirective=H;return F}function D(a){for(var b=0,c=a.length;b<c;b++)a[b]=mc(a[b],{$$isolateScope:!0})}function fa(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var s=0,B=e.length;s<B;s++)try{q=e[s],(g===t||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(k&&(q=mc(q,{$$start:k,$$end:l})),b.push(q),h=q)}catch(O){c(O)}}return h}function Pc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&
      (b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(N(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function nf(a,b,c,d,e,f,g,h){var k=[],l,q,n=b[0],p=a.shift(),B=H({},p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),O=u(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,E=p.templateNamespace;
      b.empty();s(J.getTrustedResourceUrl(O)).then(function(s){var F,J;s=Qc(s);if(p.replace){s=Pb.test(s)?Rc(T(E,P(s))):[];F=s[0];if(1!=s.length||F.nodeType!==la)throw ia("tplrt",p.name,O);s={$attr:{}};Ab(d,b,F);var x=V(F,[],s);L(p.scope)&&D(x);a=x.concat(a);Pc(c,s)}else F=n,b.html(s);a.unshift(B);l=A(a,F,c,e,b,p,f,g,h);r(d,function(a,c){a==F&&(d[c]=b[0])});for(q=ca(b[0].childNodes,e);k.length;){s=k.shift();J=k.shift();var z=k.shift(),C=k.shift(),x=b[0];if(!s.$$destroyed){if(J!==n){var S=J.className;h.hasElementTranscludeDirective&&
      p.replace||(x=Rb(F));Ab(z,y(J),x);N(y(x),S)}J=l.transcludeOnThisElement?M(s,l.transclude,C):C;l(q,s,x,d,J)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?(k.push(b),k.push(c),k.push(d),k.push(a)):(l.transcludeOnThisElement&&(a=M(b,l.transclude,e)),l(q,b,c,d,a)))}}function v(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ya(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ua(d));}function Y(a,c){var d=b(c,!0);d&&a.push({priority:0,
      compile:function(a){a=a.parent();var b=!!a.length;b&&C.$$addBindingClass(a);return function(a,c){var e=c.parent();b||C.$$addBindingClass(e);C.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function T(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=U.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Ga(a,b){if("srcdoc"==b)return J.HTML;var c=sa(a);if("xlinkHref"==b||"form"==c&&"action"==b||
      "img"!=c&&("src"==b||"ngSrc"==b))return J.RESOURCE_URL}function R(a,c,d,e,f){var h=b(d,!0);if(h){if("multiple"===e&&"select"===sa(a))throw ia("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||(l.$$observers={});if(k.test(e))throw ia("nodomevents");l[e]&&(h=b(l[e],!0,Ga(a,e),g[e]||f))&&(l[e]=h(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(h,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)}))}}}})}}
      function Ab(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);y(c).data(y(d).data());oa?(Nb=!0,oa.cleanData([d])):delete y.cache[d[y.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],y(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return H(function(){return a.apply(null,
      arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}var W=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};W.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&z.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&z.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Sc(a,b);c&&c.length&&z.addClass(this.$$element,c);(c=Sc(b,a))&&c.length&&z.removeClass(this.$$element,
      c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Kc(f,a),h=gf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Mb(a,"-"));g=sa(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=F(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=P(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var q=2*l,g=g+F(P(h[q]),!0),g=g+(" "+P(h[q+
      1]));h=P(h[2*l]).split(/\s/);g+=F(P(h[0]),!0);2===h.length&&(g+=" "+P(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=pa()),e=d[a]||(d[a]=[]);e.push(b);x.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Va(e,b)}}};var Na=b.startSymbol(),ga=b.endSymbol(),Qc="{{"==Na||"}}"==ga?ma:function(a){return a.replace(/\{\{/g,
      Na).replace(/}}/g,ga)},za=/^ngAttr[A-Z]/;C.$$addBindingInfo=l?function(a,b){var c=a.data("$binding")||[];G(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:w;C.$$addBindingClass=l?function(a){N(a,"ng-binding")}:w;C.$$addScopeInfo=l?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;C.$$addScopeClass=l?function(a,b){N(a,b?"ng-isolate-scope":"ng-scope")}:w;return C}]}function wa(b){return bb(b.replace(pf,""))}function Sc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),
      f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Rc(b){b=y(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&qf.call(b,a,1);return b}function De(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,"controller");L(a)?H(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!L(a.$scope))throw v("$controller")("noscp",d,
      b);a.$scope[b]=c}return function(g,h,k,l){var m,p,q;k=!0===k;l&&I(l)&&(q=l);I(g)&&(l=g.match(c),p=l[1],q=q||l[3],g=b.hasOwnProperty(p)?b[p]:uc(h.$scope,p,!0)||(a?uc(e,p,!0):t),pb(g,p,!0));if(k)return k=function(){},k.prototype=(G(g)?g[g.length-1]:g).prototype,m=new k,q&&f(h,q,m,p||g.name),H(function(){d.invoke(g,m,h,p);return m},{instance:m,identifier:q});m=d.instantiate(g,h,p);q&&f(h,q,m,p||g.name);return m}}]}function Ee(){this.$get=["$window",function(b){return y(b.document)}]}function Fe(){this.$get=
      ["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b,a){if(I(b)){b=b.replace(rf,"");var c=a("Content-Type");if(c&&0===c.indexOf(Tc)&&b.trim()||sf.test(b)&&tf.test(b))b=pc(b)}return b}function Uc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=Q(P(b.substr(0,e)));d=P(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Vc(b){var a=L(b)?b:t;return function(c){a||(a=Uc(b));return c?a[Q(c)]||null:a}}function Wc(b,a,c){if(u(c))return c(b,
      a);r(c,function(c){b=c(b,a)});return b}function Ie(){var b=this.defaults={transformResponse:[Yb],transformRequest:[function(a){return L(a)&&"[object File]"!==Ja.call(a)&&"[object Blob]"!==Ja.call(a)?Za(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ta(Zb),put:ta(Zb),patch:ta(Zb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return A(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory",
      "$rootScope","$q","$injector",function(d,e,f,g,h,k){function l(a){function c(a){var b=H({},a);b.data=a.data?Wc(a.data,a.headers,d.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}var d={method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},e=function(a){var c=b.headers,d=H({},a.headers),e,f,c=H({},c.common,c[Q(a.method)]);a:for(e in c){a=Q(e);for(f in d)if(Q(f)===a)continue a;d[e]=c[e]}(function(a){var b;r(a,function(c,d){u(c)&&(b=c(),null!=
      b?a[d]=b:delete a[d])})})(d);return d}(a);H(d,a);d.headers=e;d.method=rb(d.method);var f=[function(a){e=a.headers;var d=Wc(a.data,Vc(e),a.transformRequest);D(d)&&r(e,function(a,b){"content-type"===Q(b)&&delete e[b]});D(a.withCredentials)&&!D(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,d,e).then(c,c)},t],g=h.when(d);for(r(n,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=
      f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,d)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)});return g};return g}function m(c,f,k){function n(b,c,d,e){function f(){m(c,b,d,e)}N&&(200<=b&&300>b?N.put(r,[b,c,Uc(d),e]):N.remove(r));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?z.resolve:z.reject)({data:a,status:b,headers:Vc(d),config:c,statusText:e})}
      function J(){var a=l.pendingRequests.indexOf(c);-1!==a&&l.pendingRequests.splice(a,1)}var z=h.defer(),F=z.promise,N,C,r=p(c.url,c.params);l.pendingRequests.push(c);F.then(J,J);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(N=L(c.cache)?c.cache:L(b.cache)?b.cache:q);if(N)if(C=N.get(r),A(C)){if(C&&u(C.then))return C.then(J,J),C;G(C)?m(C[1],C[0],ta(C[2]),C[3]):m(C,200,{},"OK")}else N.put(r,F);D(C)&&((C=Xc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(k[c.xsrfHeaderName||
      b.xsrfHeaderName]=C),d(c.method,r,f,n,k,c.timeout,c.withCredentials,c.responseType));return F}function p(a,b){if(!b)return a;var c=[];Cd(b,function(a,b){null===a||D(a)||(G(a)||(a=[a]),r(a,function(a){L(a)&&(a=ea(a)?a.toISOString():Za(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),n=[];r(c,function(a){n.unshift(I(a)?k.get(a):k.invoke(a))});l.pendingRequests=[];(function(a){r(arguments,function(a){l[a]=function(b,c){return l(H(c||
      {},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){l[a]=function(b,c,d){return l(H(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");l.defaults=b;return l}]}function uf(){return new T.XMLHttpRequest}function Je(){this.$get=["$browser","$window","$document",function(b,a,c){return vf(b,uf,b.defer,a.angular.callbacks,c[0])}]}function vf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;
      m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,n="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),n=a.type,g="error"===a.type?404:200);c&&c(g,n)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,p,q,n){function s(){x&&x();B&&B.abort()}function O(a,d,e,f,g){z&&c.cancel(z);x=B=null;a(d,e,f,g);b.$$completeOutstandingRequest(w)}b.$$incOutstandingRequestCount();
      h=h||b.url();if("jsonp"==Q(e)){var E="_"+(d.counter++).toString(36);d[E]=function(a){d[E].data=a;d[E].called=!0};var x=f(h.replace("JSON_CALLBACK","angular.callbacks."+E),E,function(a,b){O(l,a,d[E].data,"",b);d[E]=w})}else{var B=a();B.open(e,h,!0);r(m,function(a,b){A(a)&&B.setRequestHeader(b,a)});B.onload=function(){var a=B.statusText||"",b="response"in B?B.response:B.responseText,c=1223===B.status?204:B.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);O(l,c,b,B.getAllResponseHeaders(),a)};e=
      function(){O(l,-1,null,null,"")};B.onerror=e;B.onabort=e;q&&(B.withCredentials=!0);if(n)try{B.responseType=n}catch(J){if("json"!==n)throw J;}B.send(k||null)}if(0<p)var z=c(s,p);else p&&u(p.then)&&p.then(s)}}function Ge(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,n,s){function O(c){return c.replace(l,b).replace(m,
      a)}function E(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var c;if(s&&!A(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=Za(a)}c=a}return c}catch(g){c=$b("interr",f,g.toString()),d(c)}}s=!!s;for(var x,B,J=0,z=[],F=[],N=f.length,C=[],r=[];J<N;)if(-1!=(x=f.indexOf(b,J))&&-1!=(B=f.indexOf(a,x+h)))J!==x&&C.push(O(f.substring(J,x))),J=f.substring(x+h,B),z.push(J),F.push(c(J,E)),J=B+k,r.push(C.length),C.push("");else{J!==N&&C.push(O(f.substring(J)));
      break}if(n&&1<C.length)throw $b("noconcat",f);if(!g||z.length){var M=function(a){for(var b=0,c=z.length;b<c;b++){if(s&&D(a[b]))return;C[r[b]]=a[b]}return C.join("")};return H(function(a){var b=0,c=z.length,e=Array(c);try{for(;b<c;b++)e[b]=F[b](a);return M(e)}catch(g){a=$b("interr",f,g.toString()),d(a)}},{exp:f,expressions:z,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(F,function(c,e){var f=M(c);u(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,k=a.length,l=new RegExp(b.replace(/./g,
      f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function He(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,k,l){var m=a.setInterval,p=a.clearInterval,q=0,n=A(l)&&!l,s=(n?d:c).defer(),O=s.promise;k=A(k)?k:0;O.then(null,null,e);O.$$intervalId=m(function(){s.notify(q++);0<k&&q>=k&&(s.resolve(q),p(O.$$intervalId),delete f[O.$$intervalId]);n||b.$apply()},h);f[O.$$intervalId]=s;return O}var f={};
      e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Pd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
      SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
      nb(b[a]);return b.join("/")}function Yc(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||wf[c.protocol]||null}function Zc(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=rc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function xa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Fa(b){var a=
      b.indexOf("#");return-1==a?b:b.substr(0,a)}function bc(b){return b.substr(0,Fa(b).lastIndexOf("/")+1)}function cc(b,a){this.$$html5=!0;a=a||"";var c=bc(b);Yc(b,this);this.$$parse=function(a){var b=xa(c,a);if(!I(b))throw eb("ipthprfx",a,c);Zc(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Kb(this.$$search),b=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&
      "#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=xa(b,d))!==t?(g=f,g=(f=xa(a,f))!==t?c+(xa("/",f)||f):b+g):(f=xa(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function dc(b,a){var c=bc(b);Yc(b,this);this.$$parse=function(d){var e=xa(b,d)||xa(c,d),e="#"==e.charAt(0)?xa(a,e):this.$$html5?e:"";if(!I(e))throw eb("ihshprfx",d,a);Zc(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};
      this.$$compose=function(){var c=Kb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Fa(b)==Fa(a)?(this.$$parse(a),!0):!1}}function $c(b,a){this.$$html5=!0;dc.apply(this,arguments);var c=bc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Fa(d)?f=d:(g=xa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=
      function(){var c=Kb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Bb(b){return function(){return this[b]}}function ad(b,a){return function(c){if(D(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ke(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return A(a)?(b=a,this):b};this.html5Mode=function(b){return Ua(b)?(a.enabled=b,this):L(b)?(Ua(b.enabled)&&(a.enabled=
      b.enabled),Ua(b.requireBase)&&(a.requireBase=b.requireBase),Ua(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function h(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,l;l=d.baseHref();var m=d.url(),p;if(a.enabled){if(!l&&a.requireBase)throw eb("nobase");p=m.substring(0,
      m.indexOf("/",m.indexOf("//")+2))+(l||"/");l=e.history?cc:$c}else p=Fa(m),l=dc;k=new l(p,"#"+b);k.$$parseLinkUrl(m,m);k.$$state=d.state();var q=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&2!=b.which){for(var e=y(b.target);"a"!==sa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),h=e.attr("href")||e.attr("xlink:href");L(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=Aa(g.animVal).href);q.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||
      !k.$$parseLinkUrl(g,h)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),T.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=m&&d.url(k.absUrl(),!0);var n=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,g(d,!1,e)):(n=!1,h(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=d.url(),b=d.state(),f=k.$$replace,l=a!==
      k.absUrl()||k.$$html5&&e.history&&b!==k.$$state;if(n||l)n=!1,c.$evalAsync(function(){var d=k.absUrl(),e=c.$broadcast("$locationChangeStart",d,a,k.$$state,b).defaultPrevented;k.absUrl()===d&&(e?(k.$$parse(a),k.$$state=b):(l&&g(d,f,b===k.$$state?null:k.$$state),h(a,b)))});k.$$replace=!1});return k}]}function Le(){var b=!0,a=this;this.debugEnabled=function(a){return A(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?
      "Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||w;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function qa(b,a){if("__defineGetter__"===
      b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ja("isecfld",a);return b}function ra(b,a){if(b){if(b.constructor===b)throw ja("isecfn",a);if(b.window===b)throw ja("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ja("isecdom",a);if(b===Object)throw ja("isecobj",a);}return b}function ec(b){return b.constant}function Oa(b,a,c,d){ra(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=qa(a.shift(),d);var g=ra(b[e],d);g||(g={},b[e]=
      g);b=g}e=qa(a.shift(),d);ra(b[e],d);return b[e]=c}function Pa(b){return"constructor"==b}function bd(b,a,c,d,e,f,g){qa(b,f);qa(a,f);qa(c,f);qa(d,f);qa(e,f);var h=function(a){return ra(a,f)},k=g||Pa(b)?h:ma,l=g||Pa(a)?h:ma,m=g||Pa(c)?h:ma,p=g||Pa(d)?h:ma,q=g||Pa(e)?h:ma;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=k(h[b]);if(!a)return h;if(null==h)return t;h=l(h[a]);if(!c)return h;if(null==h)return t;h=m(h[c]);if(!d)return h;if(null==h)return t;h=p(h[d]);return e?null==
      h?t:h=q(h[e]):h}}function xf(b,a){return function(c,d){return b(c,d,ra,a)}}function cd(b,a,c){var d=a.expensiveChecks,e=d?yf:zf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?bd(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=bd(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=t,a=f;while(e<h);return f};else{var k="";d&&(k+="s = eso(s, fe);\nl = eso(l, fe);\n");var l=d;r(g,function(a,b){qa(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Pa(a))e="eso("+
      e+", fe)",l=!0;k+="if(s == null) return undefined;\ns="+e+";\n"});k+="return s;";a=new Function("s","l","eso","fe",k);a.toString=ba(k);l&&(a=xf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c){return Oa(a,b,c,b)};return e[b]=f}function fc(b){return u(b.valueOf)?b.valueOf():Af.call(b)}function Me(){var b=pa(),a=pa();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}
      function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&fc(b));return h},b,c)}for(var l=[],q=0,n=e.length;q<n;q++)l[q]=g;return a.$watch(function(a){for(var b=
      !1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&fc(k)}b&&(h=d(a));return h},b,c)}function k(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;u(b)&&b.apply(this,arguments);A(a)&&d.$$postDigest(function(){A(f)&&e()})},c)}function l(a,b,c,d){function e(a){var b=!0;r(a,function(a){A(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;u(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,
      b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){u(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==l&&c!==k?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return A(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},n={csp:d.csp,expensiveChecks:!0};return function(d,
      f,g){var r,B,J;switch(typeof d){case "string":J=d=d.trim();var z=g?a:b;r=z[J];r||(":"===d.charAt(0)&&":"===d.charAt(1)&&(B=!0,d=d.substring(2)),g=g?n:q,r=new gc(g),r=(new fb(r,c,g)).parse(d),r.constant?r.$$watchDelegate=m:B?(r=e(r),r.$$watchDelegate=r.literal?l:k):r.inputs&&(r.$$watchDelegate=h),z[J]=r);return p(r,f);case "function":return p(d,f);default:return p(w,f)}}}]}function Oe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return dd(function(a){b.$evalAsync(a)},a)}]}function Pe(){this.$get=
      ["$browser","$exceptionHandler",function(b,a){return dd(function(a){b.defer(a)},a)}]}function dd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{u(b)?d.resolve(b(c.value)):
      1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=v("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,
      !0,a)},function(b){return l(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(L(b)||u(b))d=b&&b.then;u(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},
      $$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(u(b)?b(c):c)}catch(h){a(h)}}})}};var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{u(c)&&(d=c())}catch(e){return k(e,!1)}return d&&u(d.then)?d.then(function(){return k(a,
      b)},function(a){return k(a,!1)}):k(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function n(a){if(!u(a))throw h("norslvr",a);if(!(this instanceof n))return new n(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=m;p.all=function(a){var b=new g,c=0,d=G(a)?[]:{};r(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||
      (d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function Ye(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};
      f.supported=e;return f}]}function Ne(){var b=10,a=v("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function k(){this.$id=++kb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function l(b){if(s.$$phase)throw a("inprog",
      s.$$phase);s.$$phase=b}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function q(){for(;x.length;)try{x.shift()()}catch(a){f(a)}d=null}function n(){null===d&&(d=h.defer(function(){s.$apply(q)}))}k.prototype={constructor:k,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new k,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=
      this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++kb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;u(b)||
      (h.fn=w);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Va(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
      $watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!D(e)){if(L(e))if(Ra(e))for(f!==m&&(f=m,s=f.length=0,l++),a=e.length,s!==a&&(l++,f.length=s=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==q&&(f=q={},s=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(s++,f[b]=g,l++));if(s>a)for(b in l++,f)e.hasOwnProperty(b)||(s--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<
      b.length,l=0,p=g(a,c),m=[],q={},n=!0,s=0;return this.$watch(p,function(){n?(n=!1,b(e,e,d)):b(e,h,d);if(k)if(L(e))if(Ra(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)Jb.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,k,m,n,r,x=b,M,t=[],X,S;l("$digest");h.$$checkUrlChange();this===s&&null!==d&&(h.defer.cancel(d),q());c=null;do{r=!1;for(M=this;O.length;){try{S=O.shift(),S.scope.$eval(S.expression)}catch(A){f(A)}c=null}a:do{if(m=M.$$watchers)for(n=m.length;n--;)try{if(e=
      m[n])if((g=e.get(M))!==(k=e.last)&&!(e.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))r=!0,c=e,e.last=e.eq?Ca(g,null):g,e.fn(g,k===p?g:k,M),5>x&&(X=4-x,t[X]||(t[X]=[]),t[X].push({msg:u(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:k}));else if(e===c){r=!1;break a}}catch(v){f(v)}if(!(m=M.$$childHead||M!==this&&M.$$nextSibling))for(;M!==this&&!(m=M.$$nextSibling);)M=M.$parent}while(M=m);if((r||O.length)&&!x--)throw s.$$phase=null,a("infdig",b,t);}while(r||
      O.length);for(s.$$phase=null;E.length;)try{E.shift()()}catch(y){f(y)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==s){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=
      this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=w;this.$on=this.$watch=this.$watchGroup=function(){return w};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){s.$$phase||O.length||h.defer(function(){O.length&&s.$digest()});O.push({scope:this,expression:a})},$$postDigest:function(a){E.push(a)},$apply:function(a){try{return l("$apply"),
      this.$eval(a)}catch(b){f(b)}finally{s.$$phase=null;try{s.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&x.push(b);n()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,
      stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=Xa([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(p){f(p)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;
      for(var g=Xa([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var s=new k,O=s.$$asyncQueue=[],E=s.$$postDigestQueue=[],x=s.$$applyAsyncQueue=[];return s}]}function Qd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;
      this.aHrefSanitizationWhitelist=function(a){return A(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return A(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Bf(b){if("self"===b)return b;if(I(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=ed(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(lb(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function fd(b){var a=
      [];A(b)&&r(b,function(b){a.push(Bf(b))});return a}function Re(){this.SCE_CONTEXTS=ka;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=fd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=fd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Xc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};
      b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ka.HTML]=e(g);h[ka.CSS]=e(g);h[ka.URL]=e(g);h[ka.JS]=e(g);h[ka.RESOURCE_URL]=e(h[ka.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===
      e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ka.RESOURCE_URL){var g=Aa(e.toString()),p,q,n=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){n=!0;break}if(n)for(p=0,q=a.length;p<q;p++)if(d(a[p],g)){n=!1;break}if(n)return e;throw Ba("insecurl",e.toString());}if(c===ka.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Qe(){var b=!0;this.enabled=function(a){arguments.length&&
      (b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Ha)throw Ba("iequirks");var d=ta(ka);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=ma);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(ka,function(a,b){var c=Q(b);d[bb("parse_as_"+c)]=function(b){return e(a,
      b)};d[bb("get_trusted_"+c)]=function(b){return f(a,b)};d[bb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Se(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(Q((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var p in k)if(l=h.exec(p)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");
      l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!d||l&&m||(l=I(f.body.style.webkitTransition),m=I(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"==a&&9==Ha)return!1;if(D(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:$a(),vendorPrefix:g,transitions:l,animations:m,android:d}}]}function Ue(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;
      var g=a.defaults&&a.defaults.transformResponse;if(G(g))for(var h=g,g=[],k=0;k<h.length;++k){var l=h[k];l!==Yb&&g.push(l)}else g===Yb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).then(function(a){a=a.data;d.totalPendingRequests--;b.put(e,a);return a},function(){d.totalPendingRequests--;if(!f)throw ia("tpload",e);return c.reject()})}d.totalPendingRequests=0;return d}]}function Ve(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");
      var g=[];r(a,function(a){var d=va.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+ed(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}
      function We(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,k,l){var m=A(l)&&!l,p=(m?d:c).defer(),q=p.promise;k=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},k);q.$$timeoutId=k;g[k]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Ha&&(Z.setAttribute("href",
      b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Xc(b){b=I(b)?Aa(b):b;return b.protocol===gd.protocol&&b.host===gd.host}function Xe(){this.$get=ba(T)}function Cc(b){function a(c,d){if(L(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+
      "Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",hd);a("date",id);a("filter",Cf);a("json",Df);a("limitTo",Ef);a("lowercase",Ff);a("number",jd);a("orderBy",kd);a("uppercase",Gf)}function Cf(){return function(b,a,c){if(!G(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return va.equals(a,b)}:function(a,b){if(a&&
      b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Jb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"===typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=
      0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h,g)&&d.push(h)}return d}}function hd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){D(d)&&(d=a.CURRENCY_SYM);D(e)&&(e=2);return null==
      b?b:ld(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:ld(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function ld(b,a,c,d,e){if(!isFinite(b)||L(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],l=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?(g="0",b=0):(h=g,l=!0)}if(l)0<e&&-1<b&&1>b&&(h=b.toFixed(e));else{g=(g.split(md)[1]||"").length;D(e)&&(e=Math.min(Math.max(a.minFrac,
      g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(md);g=b[0];b=b[1]||"";var m=0,p=a.lgSize,q=a.gSize;if(g.length>=p+q)for(m=g.length-p,l=0;l<m;l++)0===(m-l)%q&&0!==l&&(h+=c),h+=g.charAt(l);for(l=m;l<g.length;l++)0===(g.length-l)%p&&0!==l&&(h+=c),h+=g.charAt(l);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}k.push(f?a.negPre:a.posPre);k.push(h);k.push(f?a.negSuf:a.posSuf);return k.join("")}function Cb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=
      ""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Cb(e,a,d)}}function Db(b,a){return function(c,d){var e=c["get"+b](),f=rb(a?"SHORT"+b:b);return d[f][e]}}function nd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function od(b){return function(a){var c=nd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/
      6048E5);return Cb(a,b)}}function id(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g=
      "",h=[],k,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;I(c)&&(c=Hf.test(c)?aa(c):a(c));W(c)&&(c=new Date(c));if(!ea(c))return c;for(;e;)(l=If.exec(e))?(h=Xa(h,l,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){k=Jf[a];g+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Df(){return function(b){return Za(b,!0)}}function Ef(){return function(b,a){W(b)&&(b=b.toString());
      if(!G(b)&&!I(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):aa(a);if(I(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function kd(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ea(a)&&ea(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),
      a===b?0:a<b?-1:1):c<d?-1:1}if(!Ra(a))return a;c=G(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||ma;if(I(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var l=d();return e(function(a,b){return f(a[l],b[l])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});return Ya.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){u(b)&&
      (b={link:b});b.restrict=b.restrict||"AC";return ba(b)}function pd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Eb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);
      a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});Va(g,a)};qd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Va(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=
      function(){d.removeClass(b,Qa);d.addClass(b,Fb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Qa,Fb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function gb(b,a,c,d,e,f){var g=
      a[0].placeholder,h={},k=Q(a[0].type);if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;m()})}var m=function(b){if(!l){var e=a.val(),f=b&&b.type;Ha&&"input"===(b||h).type&&a[0].placeholder!==g?g=a[0].placeholder:("password"===k||c.ngTrim&&"false"===c.ngTrim||(e=P(e)),(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,f))}};if(e.hasEvent("input"))a.on("input",m);else{var p,q=function(a){p||(p=f.defer(function(){m(a);p=null}))};
      a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||q(a)});if(e.hasEvent("paste"))a.on("paste cut",q)}a.on("change",m);d.$render=function(){a.val(d.$isEmpty(d.$modelValue)?"":d.$viewValue)}}function Gb(b,a){return function(c,d){var e,f;if(ea(c))return c;if(I(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Kf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),
      HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function hb(b,a,c,d){return function(e,f,g,h,k,l,m){function p(a){return A(a)?ea(a)?a:c(a):t}rd(e,f,g,h);gb(e,f,g,h,k,l);var q=h&&h.$options&&h.$options.timezone,n;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,n),"UTC"===
      q&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(h.$isEmpty(a))n=null;else{if(!ea(a))throw Hb("datefmt",a);if((n=a)&&"UTC"===q){var b=6E4*n.getTimezoneOffset();n=new Date(n.getTime()+b)}return m("date")(a,d,q)}return""});if(A(g.min)||g.ngMin){var s;h.$validators.min=function(a){return h.$isEmpty(a)||D(s)||c(a)>=s};g.$observe("min",function(a){s=p(a);h.$validate()})}if(A(g.max)||g.ngMax){var r;h.$validators.max=function(a){return h.$isEmpty(a)||D(r)||c(a)<=
      r};g.$observe("max",function(a){r=p(a);h.$validate()})}h.$isEmpty=function(a){return!a||a.getTime&&a.getTime()!==a.getTime()}}}function rd(b,a,c,d){(d.$$hasNativeValidators=L(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function sd(b,a,c,d,e){if(A(d)){b=b(d);if(!b.constant)throw v("ngModel")("constexpr",c,d);return b(a)}return e}function qd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=
      !1)}function c(b,c){b=b?"-"+Mb(b,"-"):"";a(ib+b,!0===c);a(td+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,k=b.parentForm,l=b.$animate;f[td]=!(f[ib]=e.hasClass(ib));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),ud(d.$pending)&&(d.$pending=t));Ua(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(vd,!0),d.$valid=d.$invalid=t,c("",null)):(a(vd,
      !1),d.$valid=ud(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);k.$setValidity(b,e,d)}}function ud(b){if(b)for(var a in b)return!1;return!0}function ic(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!G(a)){if(I(a))return a.split(" ");if(L(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});
      return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===a||f.$index%2===a){var l=e(b||[]);if(!m){var n=k(l,1);h.$addClass(n)}else if(!na(b,m)){var s=e(m),n=d(l,s),l=d(s,l),n=k(n,1),l=k(l,-1);n&&n.length&&c.addClass(g,n);l&&l.length&&c.removeClass(g,l)}}m=ta(b)}var m;f.$watch(h[b],l,!0);h.$observe("class",
      function(a){l(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}var Lf=/^\/(.+)\/([a-z]*)$/,Q=function(b){return I(b)?b.toLowerCase():b},Jb=Object.prototype.hasOwnProperty,rb=function(b){return I(b)?b.toUpperCase():b},Ha,y,oa,Ya=[].slice,qf=[].splice,Mf=[].push,Ja=Object.prototype.toString,Wa=v("ng"),va=T.angular||(T.angular={}),ab,kb=0;Ha=U.documentMode;w.$inject=[];ma.$inject=
      [];var G=Array.isArray,P=function(b){return I(b)?b.trim():b},ed=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},$a=function(){if(A($a.isActive_))return $a.isActive_;var b=!(!U.querySelector("[ng-csp]")&&!U.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return $a.isActive_=b},ob=["ng-","data-ng-","ng:","x-ng-"],Kd=/[A-Z]/g,tc=!1,Nb,la=1,mb=3,Od={full:"1.3.3",major:1,minor:3,dot:3,codeName:"undersea-arithmetic"};R.expando="ng339";
      var wb=R.cache={},ef=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var $e=/([\:\-\_]+(.))/g,af=/^moz([A-Z])/,Nf={mouseleave:"mouseout",mouseenter:"mouseover"},Qb=v("jqLite"),df=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Pb=/<|&#?\w+;/,bf=/<([\w:]+)/,cf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],
      td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var Ka=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===U.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(T).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:Mf,sort:[].sort,
      splice:[].splice},yb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){yb[Q(b)]=b});var Lc={};r("input select option textarea button form details".split(" "),function(b){Lc[b]=!0});var Mc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Sb,removeData:ub},function(b,a){R[a]=b});r({data:Sb,inheritedData:xb,scope:function(b){return y.data(b,"$scope")||xb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return y.data(b,
      "$isolateScope")||y.data(b,"$isolateScopeNoTemplate")},controller:Hc,injector:function(b){return xb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Tb,css:function(b,a,c){a=bb(a);if(A(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=Q(a);if(yb[d])if(A(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||w).specified?d:t;else if(A(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,
      2),null===b?t:b},prop:function(b,a,c){if(A(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(D(b)){var d=a.nodeType;return d===la||d===mb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(D(a)){if(b.multiple&&"select"===sa(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(D(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Ic},function(b,a){R.prototype[a]=function(a,
      d){var e,f,g=this.length;if(b!==Ic&&(2==b.length&&b!==Tb&&b!==Hc?a:d)===t){if(L(a)){for(e=0;e<g;e++)if(b===Sb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:ub,on:function a(c,d,e,f){if(A(f))throw Qb("onargs");if(Dc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=hf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],k=g.length;k--;){d=
      g[k];var l=f[d];l||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Nf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),l=f[d]);l.push(e)}}},off:Gc,one:function(a,c,d){a=y(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;tb(a);r(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===
      la&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===la||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===la){var d=a.firstChild;r(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Jc,detach:function(a){Jc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;
      c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Vb,removeClass:Ub,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;D(f)&&(f=!Tb(a,c));(f?Vb:Ub)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Rb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&
      h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:w,type:g,target:a},c.type&&(e=H(e,c)),c=ta(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,k=this.length;h<
      k;h++)D(g)?(g=a(this[h],c,e,f),A(g)&&(g=y(g))):Fc(g,a(this[h],c,e,f));return A(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});cb.prototype={put:function(a,c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];return c}};var Oc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,kf=/,/,lf=/^\s*(_?)(\S+?)\1\s*$/,Nc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ea=v("$injector");Lb.$$annotate=Wb;var Of=
      v("$animate"),Ae=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Of("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=
      d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=pa();r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function k(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function l(a,c){if(va.isObject(c)){var d=H(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,
      c,d){l(a,{from:c,to:d});return k()},enter:function(a,c,d,e){l(a,e);d?d.after(a):c.prepend(a);return k()},leave:function(a,c){a.remove();return k()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=y(a);c=I(c)?c:G(c)?c.join(" "):"";r(a,function(a){Vb(a,c)});l(a,d);return k()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=y(a);c=I(c)?c:G(c)?c.join(" "):
      "";r(a,function(a){Ub(a,c)});l(a,d);return k()},setClass:function(a,c,d,e){var k=this,l=!1;a=y(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=va.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=G(c)?c:c.split(" ");d=G(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));
      return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);l(a,e);return k()},enabled:w,cancel:w}}]}],ia=v("$compile");vc.$inject=["$provide","$$sanitizeUriProvider"];var pf=/^((?:x|data)[\:\-_])/i,Tc="application/json",Zb={"Content-Type":Tc+";charset=utf-8"},sf=/^\s*(\[|\{[^\{])/,tf=/[\}\]]\s*$/,rf=/^\)\]\}',?\n/,$b=v("$interpolate"),Pf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,wf={http:80,https:443,ftp:21},eb=v("$location"),Qf={$$html5:!1,
      $$replace:!1,absUrl:Bb("$$absUrl"),url:function(a){if(D(a))return this.$$url;a=Pf.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:Bb("$$protocol"),host:Bb("$$host"),port:Bb("$$port"),path:ad("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(I(a)||W(a))a=a.toString(),this.$$search=rc(a);else if(L(a))a=Ca(a,
      {}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw eb("isrcharg");break;default:D(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:ad("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([$c,dc,cc],function(a){a.prototype=Object.create(Qf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw eb("nostate");this.$$state=D(c)?null:c;return this}});
      var ja=v("$parse"),Rf=Function.prototype.call,Sf=Function.prototype.apply,Tf=Function.prototype.bind,Ib=pa();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;Ib[c]=a});Ib["this"]=function(a){return a};Ib["this"].sharedGetter=!0;var jb=H(pa(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return A(d)?A(e)?d+e:d:A(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(A(d)?d:0)-(A(e)?e:0)},
      "*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,
      c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Uf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();
      else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=jb[c],f=jb[d];jb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+
      a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=A(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ja("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<
      this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=
      this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):
      d+=Uf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var fb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};fb.ZERO=H(function(){return 0},{sharedGetter:!0,constant:!0});fb.prototype={constructor:fb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);
      a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=
      this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ja("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ja("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=
      this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw ja("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=jb[a];return H(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=jb[c];return H(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&
      this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return Ib[a]||cd(a,this.options,this.text)},constant:function(){var a=this.consume().value;return H(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=
      this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return H(function(f,h){var k=a(f,h);if(e){e[0]=k;for(k=d.length;k--;)e[k+1]=d[k](f,h);return c.apply(t,e)}return c(k)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;
      return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),H(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return H(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),
      c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.text,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.text,this.relational());return a},additive:function(){for(var a=
      this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(fb.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.consume().text,e=cd(d,this.options,
      c);return H(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return Oa(h,d,g,c)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return H(function(e,f){var g=a(e,f),h=d(e,f);qa(h,c);return g?ra(g[h],c):t},{assign:function(e,f,g){var h=qa(d(e,g),c);(g=ra(a(e,g),c))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");
      var e=this.text,f=d.length?[]:null;return function(g,h){var k=c?c(g,h):g,l=a(g,h,k)||w;if(f)for(var m=d.length;m--;)f[m]=ra(d[m](g,h),e);ra(k,e);if(l){if(l.constructor===l)throw ja("isecfn",e);if(l===Rf||l===Sf||l===Tf)throw ja("isecff",e);}k=l.apply?l.apply(k,f):l(f[0],f[1],f[2],f[3],f[4]);return ra(k,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return H(function(c,d){for(var e=
      [],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return H(function(d,f){for(var g={},h=0,k=c.length;h<k;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ec),
      inputs:c})}};var zf=pa(),yf=pa(),Af=Object.prototype.valueOf,Ba=v("$sce"),ka={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ia=v("$compile"),Z=U.createElement("a"),gd=Aa(T.location.href);Cc.$inject=["$provide"];hd.$inject=["$locale"];jd.$inject=["$locale"];var md=".",Jf={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Db("Month"),MMM:Db("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",
      2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Db("Day"),EEE:Db("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Cb(Math[0<a?"floor":"ceil"](a/60),2)+Cb(Math.abs(a%60),2))},ww:od(2),w:od(1)},If=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Hf=/^\-?\d+$/;id.$inject=["$locale"];var Ff=ba(Q),Gf=ba(rb);
      kd.$inject=["$parse"];var Rd=ba({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ja.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),sb={};r(yb,function(a,c){if("multiple"!=a){var d=wa("ng-"+c);sb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Mc,function(a,c){sb[c]=function(){return{priority:100,
      link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Lf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=wa("ng-"+a);sb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ja.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Ha&&g&&e.prop(g,f[h])):"href"===
      a&&f.$set(h,null)})}}}});var Eb={$addControl:w,$$renameControl:function(a,c){a.$name=c},$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w,$setSubmitted:w};pd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var wd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:pd,compile:function(a){a.addClass(Qa).addClass(ib);return{pre:function(a,d,g,h){if(!("action"in g)){var k=function(c){a.$apply(function(){h.$commitViewValue();h.$setSubmitted()});
      c.preventDefault?c.preventDefault():c.returnValue=!1};d[0].addEventListener("submit",k,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",k,!1)},0,!1)})}var l=h.$$parentForm,m=h.$name;m&&(Oa(a,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(Oa(a,m,t,m),m=c,Oa(a,m,h,m),l.$$renameControl(h,m))}));d.on("$destroy",function(){l.$removeControl(h);m&&Oa(a,m,t,m);H(h,Eb)})}}}}}]},Sd=wd(),ee=wd(!0),Kf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
      Vf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Wf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Xf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,xd=/^(\d{4})-(\d{2})-(\d{2})$/,yd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,jc=/^(\d{4})-W(\d\d)$/,zd=/^(\d{4})-(\d\d)$/,Ad=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Yf=/(\s+|^)default(\s+|$)/,Hb=new v("ngModel"),Bd={text:function(a,c,d,e,f,g){gb(a,
      c,d,e,f,g);hc(e)},date:hb("date",xd,Gb(xd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":hb("datetimelocal",yd,Gb(yd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:hb("time",Ad,Gb(Ad,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:hb("week",jc,function(a,c){if(ea(a))return a;if(I(a)){jc.lastIndex=0;var d=jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,k=0,l=nd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),k=c.getMilliseconds());return new Date(e,0,l.getDate()+
      f,d,g,h,k)}}return NaN},"yyyy-Www"),month:hb("month",zd,Gb(zd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){rd(a,c,d,e);gb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Xf.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!W(a))throw Hb("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||D(h)||a>=h};d.$observe("min",function(a){A(a)&&!W(a)&&(a=parseFloat(a,
      10));h=W(a)&&!isNaN(a)?a:t;e.$validate()})}if(d.max||d.ngMax){var k;e.$validators.max=function(a){return e.$isEmpty(a)||D(k)||a<=k};d.$observe("max",function(a){A(a)&&!W(a)&&(a=parseFloat(a,10));k=W(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a){return e.$isEmpty(a)||Vf.test(a)}},email:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a){return e.$isEmpty(a)||Wf.test(a)}},
      radio:function(a,c,d,e){D(d.name)&&c.attr("name",++kb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,k){var l=sd(k,a,"ngTrueValue",d.ngTrueValue,!0),m=sd(k,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==l};e.$formatters.push(function(a){return na(a,
      l)});e.$parsers.push(function(a){return a?l:m})},hidden:w,button:w,submit:w,reset:w,file:w},wc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,k){k[0]&&(Bd[Q(h.type)]||Bd.text)(f,g,h,k[0],c,a,d,e)}}}}],ib="ng-valid",td="ng-invalid",Qa="ng-pristine",Fb="ng-dirty",vd="ng-pending",Zf=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,k,l,
      m){this.$modelValue=this.$viewValue=Number.NaN;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=m(d.name||"",!1)(a);var p=f(d.ngModel),q=null,n=this,s=function(){var c=p(a);n.$options&&n.$options.getterSetter&&u(c)&&(c=c());return c},O=function(c){var d;n.$options&&n.$options.getterSetter&&
      u(d=p(a))?d(n.$modelValue):p.assign(a,n.$modelValue)};this.$$setOptions=function(a){n.$options=a;if(!(p.assign||a&&a.getterSetter))throw Hb("nonassign",d.ngModel,ua(e));};this.$render=w;this.$isEmpty=function(a){return D(a)||""===a||null===a||a!==a};var E=e.inheritedData("$formController")||Eb,x=0;qd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:E,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Fb);g.addClass(e,Qa)};
      this.$setUntouched=function(){n.$touched=!1;n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){n.$touched=!0;n.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(q);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){W(n.$modelValue)&&isNaN(n.$modelValue)||this.$$parseAndValidate()};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;r(n.$validators,function(e,f){var g=e(c,d);
      a=a&&g;h(f,g)});return a?!0:(r(n.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;r(n.$asyncValidators,function(f,g){var k=f(c,d);if(!k||!u(k.then))throw Hb("$asyncValidators",k);h(g,t);a.push(k.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?l.all(a).then(function(){k(e)},w):k(!0)}function h(a,c){m===x&&n.$setValidity(a,c)}function k(a){m===x&&e(a)}x++;var m=x;(function(a){var c=n.$$parserName||"parse";if(a===t)h(c,null);else if(h(c,a),!a)return r(n.$validators,
      function(a,c){h(c,null)}),r(n.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():k(!1):k(!1)};this.$commitViewValue=function(){var a=n.$viewValue;h.cancel(q);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=a,n.$pristine&&(n.$dirty=!0,n.$pristine=!1,g.removeClass(e,Qa),g.addClass(e,Fb),E.$setDirty()),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var a=n.$$lastCommittedViewValue,c=a,d=D(c)?t:!0;if(d)for(var e=0;e<n.$parsers.length;e++)if(c=
      n.$parsers[e](c),D(c)){d=!1;break}W(n.$modelValue)&&isNaN(n.$modelValue)&&(n.$modelValue=s());var f=n.$modelValue,g=n.$options&&n.$options.allowInvalid;g&&(n.$modelValue=c,n.$modelValue!==f&&n.$$writeModelToScope());n.$$runValidators(d,c,a,function(a){g||(n.$modelValue=a?c:t,n.$modelValue!==f&&n.$$writeModelToScope())})};this.$$writeModelToScope=function(){O(n.$modelValue);r(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||
      n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=n.$options;e&&A(e.debounce)&&(e=e.debounce,W(e)?d=e:W(e[c])?d=e[c]:W(e["default"])&&(d=e["default"]));h.cancel(q);d?q=h(function(){n.$commitViewValue()},d):k.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var a=s();if(a!==n.$modelValue){n.$modelValue=a;for(var c=n.$formatters,d=c.length,e=a;d--;)e=c[d](e);n.$viewValue!==e&&(n.$viewValue=n.$$lastCommittedViewValue=e,n.$render(),
      n.$$runValidators(t,a,e,w))}return a})}],te=function(){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Zf,priority:1,compile:function(a){a.addClass(Qa).addClass("ng-untouched").addClass(ib);return{pre:function(a,d,e,f){var g=f[0],h=f[1]||Eb;g.$$setOptions(f[2]&&f[2].$options);h.$addControl(g);e.$observe("name",function(a){g.$name!==a&&h.$$renameControl(g,a)});a.$on("$destroy",function(){h.$removeControl(g)})},post:function(a,d,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)d.on(g.$options.updateOn,
      function(a){g.$$debounceViewValueCommit(a&&a.type)});d.on("blur",function(d){g.$touched||a.$apply(function(){g.$setTouched()})})}}}}},ve=ba({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a){return!d.required||!e.$isEmpty(a)},d.$observe("required",function(){e.$validate()}))}}},xc=function(){return{restrict:"A",
      require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){I(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw v("ngPattern")("noregexp",g,a,ua(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||D(f)||f.test(a)}}}}},Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.maxlength=function(a,c){return e.$isEmpty(a)||
      c.length<=f}}}}},zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(a)||c.length>=f}}}}},ue=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?P(f):f;e.$parsers.push(function(a){if(!D(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?P(a):a)});return c}});
      e.$formatters.push(function(a){return G(a)?a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},$f=/^(true|false|\d+)$/,we=function(){return{restrict:"A",priority:100,compile:function(a,c){return $f.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},xe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?
      (this.$options.updateOnDefault=!1,this.$options.updateOn=P(this.$options.updateOn.replace(Yf,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Xd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],Zd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,
      f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],Yd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],$d=ic("",!0),be=ic("Odd",0),ae=ic("Even",
      1),ce=Ia({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),de=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Bc={},ag={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=wa("ng-"+a);Bc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,
      function(d){var f=function(){h(c,{$event:d})};ag[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ge=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,l;c.$watch(e.ngIf,function(c){c?k||g(function(c,f){k=f;c[c.length++]=U.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=qb(h.clone),a.leave(l).then(function(){l=null}),
      h=null))})}}}],he=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:va.noop,compile:function(f,g){var h=g.ngInclude||g.src,k=g.onload||"",l=g.autoscroll;return function(f,g,q,n,r){var t=0,E,x,B,v=function(){x&&(x.remove(),x=null);E&&(E.$destroy(),E=null);B&&(d.leave(B).then(function(){x=null}),x=B,B=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!A(l)||l&&!f.$eval(l)||c()},q=
      ++t;e?(a(e,!0).then(function(a){if(q===t){var c=f.$new();n.template=a;a=r(c,function(a){v();d.enter(a,null,g).then(h)});E=c;B=a;E.$emit("$includeContentLoaded",e);f.$eval(k)}},function(){q===t&&(v(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(v(),n.template=null)})}}}}],ye=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Ec(f.template,U).childNodes)(c,function(a){d.append(a)},
      {futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ie=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),je=Ia({terminal:!0,priority:1E3}),ke=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,k=g.$attr.when&&f.attr(g.$attr.when),l=g.offset||0,m=e.$eval(k)||{},p={},q=c.startSymbol(),n=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(m[Q(c.replace("when","").replace("Minus",
      "-"))]=f.attr(g.$attr[c]))});r(m,function(a,e){p[e]=c(a.replace(d,q+h+"-"+l+n))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-l));return p[c](e)},function(a){f.text(a)})}}}],le=["$parse","$animate",function(a,c){var d=v("ngRepeat"),e=function(a,c,d,e,l,m,p){a[d]=e;l&&(a[l]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,
      $$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=U.createComment(" end ngRepeat: "+h+" "),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw d("iexp",h);var m=l[1],p=l[2],q=l[3],n=l[4],l=m.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",m);var s=l[3]||l[1],A=l[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q)))throw d("badident",
      q);var v,x,B,J,z={$id:Ma};n?v=a(n):(B=function(a,c){return Ma(c)},J=function(a){return a});return function(a,f,g,l,n){v&&(x=function(c,d,e){A&&(z[A]=c);z[s]=d;z.$index=e;return v(a,z)});var m=pa();a.$watchCollection(p,function(g){var l,p,C=f[0],v,z=pa(),E,H,w,D,G,u,I;q&&(a[q]=g);if(Ra(g))G=g,p=x||B;else{p=x||J;G=[];for(I in g)g.hasOwnProperty(I)&&"$"!=I.charAt(0)&&G.push(I);G.sort()}E=G.length;I=Array(E);for(l=0;l<E;l++)if(H=g===G?l:G[l],w=g[H],D=p(H,w,l),m[D])u=m[D],delete m[D],z[D]=u,I[l]=u;else{if(z[D])throw r(I,
      function(a){a&&a.scope&&(m[a.id]=a)}),d("dupes",h,D,w);I[l]={id:D,scope:t,clone:t};z[D]=!0}for(v in m){u=m[v];D=qb(u.clone);c.leave(D);if(D[0].parentNode)for(l=0,p=D.length;l<p;l++)D[l].$$NG_REMOVED=!0;u.scope.$destroy()}for(l=0;l<E;l++)if(H=g===G?l:G[l],w=g[H],u=I[l],u.scope){v=C;do v=v.nextSibling;while(v&&v.$$NG_REMOVED);u.clone[0]!=v&&c.move(qb(u.clone),null,y(C));C=u.clone[u.clone.length-1];e(u.scope,l,s,w,A,H,E)}else n(function(a,d){u.scope=d;var f=k.cloneNode(!1);a[a.length++]=f;c.enter(a,
      null,y(C));C=f;u.clone=a;z[u.id]=u;e(u.scope,l,s,w,A,H,E)});m=z})}}}}],me=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],fe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ne=Ia(function(a,c,d){a.$watch(d.ngStyle,
      function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),oe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],l=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=qb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;
      (g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=U.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],pe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),qe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,
      link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),se=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw v("ngTransclude")("orphan",ua(c));f(function(a){c.empty();c.append(a)})}}),Td=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],bg=v("ngOptions"),re=ba({restrict:"A",terminal:!0}),Ud=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      e={$setViewValue:w};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var k=this,l={},m=e,p;k.databound=d.ngModel;k.init=function(a,c,d){m=a;p=d};k.addOption=function(c,d){La(c,'"option value"');l[c]=!0;m.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};k.removeOption=function(a){this.hasOption(a)&&(delete l[a],m.$viewValue==a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c=
      "? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};k.hasOption=function(a){return l.hasOwnProperty(a)};c.$on("$destroy",function(){k.renderUnknownOption=w})}],link:function(e,g,h,k){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(z.parent()&&z.remove(),c.val(a),""===a&&u.prop("selected",!0)):D(a)&&u?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){z.parent()&&z.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;
      d.$render=function(){var a=new cb(d.$viewValue);r(c.find("option"),function(c){c.selected=A(a.get(c.value))})};a.$watch(function(){na(e,d.$viewValue)||(e=ta(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){T[z]=d;F&&(T[F]=c);return a(e,T)}function k(a){var c;if(n)if(L&&G(a)){c=new cb([]);for(var d=0;d<a.length;d++)c.put(h(L,null,a[d]),!0)}else c=
      new cb(a);else L&&(a=h(L,null,a));return function(d,e){var f;f=L?L:w?w:E;return n?A(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){x||(e.$$postDigest(p),x=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){x=!1;var a={"":[]},c=[""],d,l,s,t,u;s=g.$viewValue;t=N(e)||[];var z=F?Object.keys(t).sort():t,w,y,G,E,S={};u=k(s);var P=!1,U,W;R={};for(E=0;G=z.length,E<G;E++){w=E;if(F&&(w=z[E],"$"===w.charAt(0)))continue;y=t[w];d=h(I,w,y)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=u(w,y);P=P||d;y=h(D,w,y);
      y=A(y)?y:"";W=L?L(e,T):F?z[E]:E;L&&(R[W]=w);l.push({id:W,label:y,selected:d})}n||(v||null===s?a[""].unshift({id:"",label:"",selected:!P}):P||a[""].unshift({id:"?",label:"",selected:!0}));w=0;for(z=c.length;w<z;w++){d=c[w];l=a[d];Q.length<=w?(s={element:H.clone().attr("label",d),label:l.label},t=[s],Q.push(t),f.append(s.element)):(t=Q[w],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));P=null;E=0;for(G=l.length;E<G;E++)d=l[E],(u=t[E+1])?(P=u.element,u.label!==d.label&&(m(S,u.label,!1),m(S,d.label,
      !0),P.text(u.label=d.label),P.prop("label",u.label)),u.id!==d.id&&P.val(u.id=d.id),P[0].selected!==d.selected&&(P.prop("selected",u.selected=d.selected),Ha&&P.prop("selected",u.selected))):(""===d.id&&v?U=v:(U=B.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),t.push(u={element:U,label:d.label,id:d.id,selected:d.selected}),m(S,d.label,!0),P?P.after(U):s.element.append(U),P=U);for(E++;t.length>E;)d=t.pop(),m(S,d.label,!1),d.element.remove();
      r(S,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}for(;Q.length>w;)Q.pop()[0].element.remove()}var u;if(!(u=s.match(d)))throw bg("iexp",s,ua(f));var D=c(u[2]||u[1]),z=u[4]||u[6],y=/ as /.test(u[0])&&u[1],w=y?c(y):null,F=u[5],I=c(u[3]||""),E=c(u[2]?u[1]:z),N=c(u[7]),L=u[8]?c(u[8]):null,R={},Q=[[{element:f,label:""}]],T={};v&&(a(v)(e),v.removeClass("ng-scope"),v.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=N(e)||[],c;if(n)c=[],r(f.val(),function(d){d=L?R[d]:d;c.push("?"===
      d?t:""===d?null:h(w?w:E,d,a[d]))});else{var d=L?R[f.val()]:f.val();c="?"===d?t:""===d?null:h(w?w:E,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(N,l);e.$watchCollection(function(){var a=N(e),c;if(a&&G(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(D,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(D,d,a[d]));return c},l);n&&e.$watchCollection(function(){return g.$modelValue},l)}if(k[1]){var q=k[0];k=k[1];var n=h.multiple,s=h.ngOptions,v=!1,u,x=!1,B=y(U.createElement("option")),
      H=y(U.createElement("optgroup")),z=B.clone();h=0;for(var F=g.children(),w=F.length;h<w;h++)if(""===F[h].value){u=v=F.eq(h);break}q.init(k,v,z);n&&(k.$isEmpty=function(a){return!a||0===a.length});s?p(e,g,k):n?m(e,g,k):l(e,g,k,q)}}}}],Wd=["$interpolate",function(a){var c={addOption:w,removeOption:w};return{restrict:"E",priority:100,compile:function(d,e){if(D(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),m=l.data("$selectController")||l.parent().data("$selectController");
      m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Vd=ba({restrict:"E",terminal:!1});T.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Ld(),Nd(va),y(U).ready(function(){Hd(U,sc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
      
      
  this["angular"] = angular;
  }).call(System.global);  return System.get("@@global-helpers").retrieveGlobal(__module.id, "angular");
});

(function() {
function define(){};  define.amd = {};
  !function(e) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = e();
    else if ("function" == typeof define && define.amd)
      System.register("node_modules/socket.io-client/socket.io", [], false, function(__require, __exports, __module) {
        return (e).call(this);
      });
    else {
      var f;
      "undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.io = e();
    }
  }(function() {
    var define,
        module,
        exports;
    return (function e(t, n, r) {
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            var a = typeof require == "function" && require;
            if (!u && a)
              return a(o, !0);
            if (i)
              return i(o, !0);
            throw new Error("Cannot find module '" + o + "'");
          }
          var f = n[o] = {exports: {}};
          t[o][0].call(f.exports, function(e) {
            var n = t[o][1][e];
            return s(n ? n : e);
          }, f, f.exports, e, t, n, r);
        }
        return n[o].exports;
      }
      var i = typeof require == "function" && require;
      for (var o = 0; o < r.length; o++)
        s(r[o]);
      return s;
    })({
      1: [function(_dereq_, module, exports) {
        module.exports = _dereq_('./lib/');
      }, {"./lib/": 2}],
      2: [function(_dereq_, module, exports) {
        var url = _dereq_('./url');
        var parser = _dereq_('socket.io-parser');
        var Manager = _dereq_('./manager');
        var debug = _dereq_('debug')('socket.io-client');
        module.exports = exports = lookup;
        var cache = exports.managers = {};
        function lookup(uri, opts) {
          if (typeof uri == 'object') {
            opts = uri;
            uri = undefined;
          }
          opts = opts || {};
          var parsed = url(uri);
          var source = parsed.source;
          var id = parsed.id;
          var io;
          if (opts.forceNew || opts['force new connection'] || false === opts.multiplex) {
            debug('ignoring socket cache for %s', source);
            io = Manager(source, opts);
          } else {
            if (!cache[id]) {
              debug('new io instance for %s', source);
              cache[id] = Manager(source, opts);
            }
            io = cache[id];
          }
          return io.socket(parsed.path);
        }
        exports.protocol = parser.protocol;
        exports.connect = lookup;
        exports.Manager = _dereq_('./manager');
        exports.Socket = _dereq_('./socket');
      }, {
        "./manager": 3,
        "./socket": 5,
        "./url": 6,
        "debug": 9,
        "socket.io-parser": 40
      }],
      3: [function(_dereq_, module, exports) {
        var url = _dereq_('./url');
        var eio = _dereq_('engine.io-client');
        var Socket = _dereq_('./socket');
        var Emitter = _dereq_('component-emitter');
        var parser = _dereq_('socket.io-parser');
        var on = _dereq_('./on');
        var bind = _dereq_('component-bind');
        var object = _dereq_('object-component');
        var debug = _dereq_('debug')('socket.io-client:manager');
        var indexOf = _dereq_('indexof');
        module.exports = Manager;
        function Manager(uri, opts) {
          if (!(this instanceof Manager))
            return new Manager(uri, opts);
          if (uri && ('object' == typeof uri)) {
            opts = uri;
            uri = undefined;
          }
          opts = opts || {};
          opts.path = opts.path || '/socket.io';
          this.nsps = {};
          this.subs = [];
          this.opts = opts;
          this.reconnection(opts.reconnection !== false);
          this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
          this.reconnectionDelay(opts.reconnectionDelay || 1000);
          this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
          this.timeout(null == opts.timeout ? 20000 : opts.timeout);
          this.readyState = 'closed';
          this.uri = uri;
          this.connected = [];
          this.attempts = 0;
          this.encoding = false;
          this.packetBuffer = [];
          this.encoder = new parser.Encoder();
          this.decoder = new parser.Decoder();
          this.autoConnect = opts.autoConnect !== false;
          if (this.autoConnect)
            this.open();
        }
        Manager.prototype.emitAll = function() {
          this.emit.apply(this, arguments);
          for (var nsp in this.nsps) {
            this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
          }
        };
        Emitter(Manager.prototype);
        Manager.prototype.reconnection = function(v) {
          if (!arguments.length)
            return this._reconnection;
          this._reconnection = !!v;
          return this;
        };
        Manager.prototype.reconnectionAttempts = function(v) {
          if (!arguments.length)
            return this._reconnectionAttempts;
          this._reconnectionAttempts = v;
          return this;
        };
        Manager.prototype.reconnectionDelay = function(v) {
          if (!arguments.length)
            return this._reconnectionDelay;
          this._reconnectionDelay = v;
          return this;
        };
        Manager.prototype.reconnectionDelayMax = function(v) {
          if (!arguments.length)
            return this._reconnectionDelayMax;
          this._reconnectionDelayMax = v;
          return this;
        };
        Manager.prototype.timeout = function(v) {
          if (!arguments.length)
            return this._timeout;
          this._timeout = v;
          return this;
        };
        Manager.prototype.maybeReconnectOnOpen = function() {
          if (!this.openReconnect && !this.reconnecting && this._reconnection && this.attempts === 0) {
            this.openReconnect = true;
            this.reconnect();
          }
        };
        Manager.prototype.open = Manager.prototype.connect = function(fn) {
          debug('readyState %s', this.readyState);
          if (~this.readyState.indexOf('open'))
            return this;
          debug('opening %s', this.uri);
          this.engine = eio(this.uri, this.opts);
          var socket = this.engine;
          var self = this;
          this.readyState = 'opening';
          this.skipReconnect = false;
          var openSub = on(socket, 'open', function() {
            self.onopen();
            fn && fn();
          });
          var errorSub = on(socket, 'error', function(data) {
            debug('connect_error');
            self.cleanup();
            self.readyState = 'closed';
            self.emitAll('connect_error', data);
            if (fn) {
              var err = new Error('Connection error');
              err.data = data;
              fn(err);
            }
            self.maybeReconnectOnOpen();
          });
          if (false !== this._timeout) {
            var timeout = this._timeout;
            debug('connect attempt will timeout after %d', timeout);
            var timer = setTimeout(function() {
              debug('connect attempt timed out after %d', timeout);
              openSub.destroy();
              socket.close();
              socket.emit('error', 'timeout');
              self.emitAll('connect_timeout', timeout);
            }, timeout);
            this.subs.push({destroy: function() {
                clearTimeout(timer);
              }});
          }
          this.subs.push(openSub);
          this.subs.push(errorSub);
          return this;
        };
        Manager.prototype.onopen = function() {
          debug('open');
          this.cleanup();
          this.readyState = 'open';
          this.emit('open');
          var socket = this.engine;
          this.subs.push(on(socket, 'data', bind(this, 'ondata')));
          this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
          this.subs.push(on(socket, 'error', bind(this, 'onerror')));
          this.subs.push(on(socket, 'close', bind(this, 'onclose')));
        };
        Manager.prototype.ondata = function(data) {
          this.decoder.add(data);
        };
        Manager.prototype.ondecoded = function(packet) {
          this.emit('packet', packet);
        };
        Manager.prototype.onerror = function(err) {
          debug('error', err);
          this.emitAll('error', err);
        };
        Manager.prototype.socket = function(nsp) {
          var socket = this.nsps[nsp];
          if (!socket) {
            socket = new Socket(this, nsp);
            this.nsps[nsp] = socket;
            var self = this;
            socket.on('connect', function() {
              if (!~indexOf(self.connected, socket)) {
                self.connected.push(socket);
              }
            });
          }
          return socket;
        };
        Manager.prototype.destroy = function(socket) {
          var index = indexOf(this.connected, socket);
          if (~index)
            this.connected.splice(index, 1);
          if (this.connected.length)
            return;
          this.close();
        };
        Manager.prototype.packet = function(packet) {
          debug('writing packet %j', packet);
          var self = this;
          if (!self.encoding) {
            self.encoding = true;
            this.encoder.encode(packet, function(encodedPackets) {
              for (var i = 0; i < encodedPackets.length; i++) {
                self.engine.write(encodedPackets[i]);
              }
              self.encoding = false;
              self.processPacketQueue();
            });
          } else {
            self.packetBuffer.push(packet);
          }
        };
        Manager.prototype.processPacketQueue = function() {
          if (this.packetBuffer.length > 0 && !this.encoding) {
            var pack = this.packetBuffer.shift();
            this.packet(pack);
          }
        };
        Manager.prototype.cleanup = function() {
          var sub;
          while (sub = this.subs.shift())
            sub.destroy();
          this.packetBuffer = [];
          this.encoding = false;
          this.decoder.destroy();
        };
        Manager.prototype.close = Manager.prototype.disconnect = function() {
          this.skipReconnect = true;
          this.readyState = 'closed';
          this.engine && this.engine.close();
        };
        Manager.prototype.onclose = function(reason) {
          debug('close');
          this.cleanup();
          this.readyState = 'closed';
          this.emit('close', reason);
          if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
          }
        };
        Manager.prototype.reconnect = function() {
          if (this.reconnecting || this.skipReconnect)
            return this;
          var self = this;
          this.attempts++;
          if (this.attempts > this._reconnectionAttempts) {
            debug('reconnect failed');
            this.emitAll('reconnect_failed');
            this.reconnecting = false;
          } else {
            var delay = this.attempts * this.reconnectionDelay();
            delay = Math.min(delay, this.reconnectionDelayMax());
            debug('will wait %dms before reconnect attempt', delay);
            this.reconnecting = true;
            var timer = setTimeout(function() {
              if (self.skipReconnect)
                return;
              debug('attempting reconnect');
              self.emitAll('reconnect_attempt', self.attempts);
              self.emitAll('reconnecting', self.attempts);
              if (self.skipReconnect)
                return;
              self.open(function(err) {
                if (err) {
                  debug('reconnect attempt error');
                  self.reconnecting = false;
                  self.reconnect();
                  self.emitAll('reconnect_error', err.data);
                } else {
                  debug('reconnect success');
                  self.onreconnect();
                }
              });
            }, delay);
            this.subs.push({destroy: function() {
                clearTimeout(timer);
              }});
          }
        };
        Manager.prototype.onreconnect = function() {
          var attempt = this.attempts;
          this.attempts = 0;
          this.reconnecting = false;
          this.emitAll('reconnect', attempt);
        };
      }, {
        "./on": 4,
        "./socket": 5,
        "./url": 6,
        "component-bind": 7,
        "component-emitter": 8,
        "debug": 9,
        "engine.io-client": 10,
        "indexof": 36,
        "object-component": 37,
        "socket.io-parser": 40
      }],
      4: [function(_dereq_, module, exports) {
        module.exports = on;
        function on(obj, ev, fn) {
          obj.on(ev, fn);
          return {destroy: function() {
              obj.removeListener(ev, fn);
            }};
        }
      }, {}],
      5: [function(_dereq_, module, exports) {
        var parser = _dereq_('socket.io-parser');
        var Emitter = _dereq_('component-emitter');
        var toArray = _dereq_('to-array');
        var on = _dereq_('./on');
        var bind = _dereq_('component-bind');
        var debug = _dereq_('debug')('socket.io-client:socket');
        var hasBin = _dereq_('has-binary');
        module.exports = exports = Socket;
        var events = {
          connect: 1,
          connect_error: 1,
          connect_timeout: 1,
          disconnect: 1,
          error: 1,
          reconnect: 1,
          reconnect_attempt: 1,
          reconnect_failed: 1,
          reconnect_error: 1,
          reconnecting: 1
        };
        var emit = Emitter.prototype.emit;
        function Socket(io, nsp) {
          this.io = io;
          this.nsp = nsp;
          this.json = this;
          this.ids = 0;
          this.acks = {};
          if (this.io.autoConnect)
            this.open();
          this.receiveBuffer = [];
          this.sendBuffer = [];
          this.connected = false;
          this.disconnected = true;
        }
        Emitter(Socket.prototype);
        Socket.prototype.subEvents = function() {
          if (this.subs)
            return;
          var io = this.io;
          this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
        };
        Socket.prototype.open = Socket.prototype.connect = function() {
          if (this.connected)
            return this;
          this.subEvents();
          this.io.open();
          if ('open' == this.io.readyState)
            this.onopen();
          return this;
        };
        Socket.prototype.send = function() {
          var args = toArray(arguments);
          args.unshift('message');
          this.emit.apply(this, args);
          return this;
        };
        Socket.prototype.emit = function(ev) {
          if (events.hasOwnProperty(ev)) {
            emit.apply(this, arguments);
            return this;
          }
          var args = toArray(arguments);
          var parserType = parser.EVENT;
          if (hasBin(args)) {
            parserType = parser.BINARY_EVENT;
          }
          var packet = {
            type: parserType,
            data: args
          };
          if ('function' == typeof args[args.length - 1]) {
            debug('emitting packet with ack id %d', this.ids);
            this.acks[this.ids] = args.pop();
            packet.id = this.ids++;
          }
          if (this.connected) {
            this.packet(packet);
          } else {
            this.sendBuffer.push(packet);
          }
          return this;
        };
        Socket.prototype.packet = function(packet) {
          packet.nsp = this.nsp;
          this.io.packet(packet);
        };
        Socket.prototype.onopen = function() {
          debug('transport is open - connecting');
          if ('/' != this.nsp) {
            this.packet({type: parser.CONNECT});
          }
        };
        Socket.prototype.onclose = function(reason) {
          debug('close (%s)', reason);
          this.connected = false;
          this.disconnected = true;
          this.emit('disconnect', reason);
        };
        Socket.prototype.onpacket = function(packet) {
          if (packet.nsp != this.nsp)
            return;
          switch (packet.type) {
            case parser.CONNECT:
              this.onconnect();
              break;
            case parser.EVENT:
              this.onevent(packet);
              break;
            case parser.BINARY_EVENT:
              this.onevent(packet);
              break;
            case parser.ACK:
              this.onack(packet);
              break;
            case parser.BINARY_ACK:
              this.onack(packet);
              break;
            case parser.DISCONNECT:
              this.ondisconnect();
              break;
            case parser.ERROR:
              this.emit('error', packet.data);
              break;
          }
        };
        Socket.prototype.onevent = function(packet) {
          var args = packet.data || [];
          debug('emitting event %j', args);
          if (null != packet.id) {
            debug('attaching ack callback to event');
            args.push(this.ack(packet.id));
          }
          if (this.connected) {
            emit.apply(this, args);
          } else {
            this.receiveBuffer.push(args);
          }
        };
        Socket.prototype.ack = function(id) {
          var self = this;
          var sent = false;
          return function() {
            if (sent)
              return;
            sent = true;
            var args = toArray(arguments);
            debug('sending ack %j', args);
            var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
            self.packet({
              type: type,
              id: id,
              data: args
            });
          };
        };
        Socket.prototype.onack = function(packet) {
          debug('calling ack %s with %j', packet.id, packet.data);
          var fn = this.acks[packet.id];
          fn.apply(this, packet.data);
          delete this.acks[packet.id];
        };
        Socket.prototype.onconnect = function() {
          this.connected = true;
          this.disconnected = false;
          this.emit('connect');
          this.emitBuffered();
        };
        Socket.prototype.emitBuffered = function() {
          var i;
          for (i = 0; i < this.receiveBuffer.length; i++) {
            emit.apply(this, this.receiveBuffer[i]);
          }
          this.receiveBuffer = [];
          for (i = 0; i < this.sendBuffer.length; i++) {
            this.packet(this.sendBuffer[i]);
          }
          this.sendBuffer = [];
        };
        Socket.prototype.ondisconnect = function() {
          debug('server disconnect (%s)', this.nsp);
          this.destroy();
          this.onclose('io server disconnect');
        };
        Socket.prototype.destroy = function() {
          if (this.subs) {
            for (var i = 0; i < this.subs.length; i++) {
              this.subs[i].destroy();
            }
            this.subs = null;
          }
          this.io.destroy(this);
        };
        Socket.prototype.close = Socket.prototype.disconnect = function() {
          if (this.connected) {
            debug('performing disconnect (%s)', this.nsp);
            this.packet({type: parser.DISCONNECT});
          }
          this.destroy();
          if (this.connected) {
            this.onclose('io client disconnect');
          }
          return this;
        };
      }, {
        "./on": 4,
        "component-bind": 7,
        "component-emitter": 8,
        "debug": 9,
        "has-binary": 32,
        "socket.io-parser": 40,
        "to-array": 44
      }],
      6: [function(_dereq_, module, exports) {
        (function(global) {
          var parseuri = _dereq_('parseuri');
          var debug = _dereq_('debug')('socket.io-client:url');
          module.exports = url;
          function url(uri, loc) {
            var obj = uri;
            var loc = loc || global.location;
            if (null == uri)
              uri = loc.protocol + '//' + loc.hostname;
            if ('string' == typeof uri) {
              if ('/' == uri.charAt(0)) {
                if ('/' == uri.charAt(1)) {
                  uri = loc.protocol + uri;
                } else {
                  uri = loc.hostname + uri;
                }
              }
              if (!/^(https?|wss?):\/\//.test(uri)) {
                debug('protocol-less url %s', uri);
                if ('undefined' != typeof loc) {
                  uri = loc.protocol + '//' + uri;
                } else {
                  uri = 'https://' + uri;
                }
              }
              debug('parse %s', uri);
              obj = parseuri(uri);
            }
            if (!obj.port) {
              if (/^(http|ws)$/.test(obj.protocol)) {
                obj.port = '80';
              } else if (/^(http|ws)s$/.test(obj.protocol)) {
                obj.port = '443';
              }
            }
            obj.path = obj.path || '/';
            obj.id = obj.protocol + '://' + obj.host + ':' + obj.port;
            obj.href = obj.protocol + '://' + obj.host + (loc && loc.port == obj.port ? '' : (':' + obj.port));
            return obj;
          }
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {
        "debug": 9,
        "parseuri": 38
      }],
      7: [function(_dereq_, module, exports) {
        var slice = [].slice;
        module.exports = function(obj, fn) {
          if ('string' == typeof fn)
            fn = obj[fn];
          if ('function' != typeof fn)
            throw new Error('bind() requires a function');
          var args = slice.call(arguments, 2);
          return function() {
            return fn.apply(obj, args.concat(slice.call(arguments)));
          };
        };
      }, {}],
      8: [function(_dereq_, module, exports) {
        module.exports = Emitter;
        function Emitter(obj) {
          if (obj)
            return mixin(obj);
        }
        ;
        function mixin(obj) {
          for (var key in Emitter.prototype) {
            obj[key] = Emitter.prototype[key];
          }
          return obj;
        }
        Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
          this._callbacks = this._callbacks || {};
          (this._callbacks[event] = this._callbacks[event] || []).push(fn);
          return this;
        };
        Emitter.prototype.once = function(event, fn) {
          var self = this;
          this._callbacks = this._callbacks || {};
          function on() {
            self.off(event, on);
            fn.apply(this, arguments);
          }
          on.fn = fn;
          this.on(event, on);
          return this;
        };
        Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
          this._callbacks = this._callbacks || {};
          if (0 == arguments.length) {
            this._callbacks = {};
            return this;
          }
          var callbacks = this._callbacks[event];
          if (!callbacks)
            return this;
          if (1 == arguments.length) {
            delete this._callbacks[event];
            return this;
          }
          var cb;
          for (var i = 0; i < callbacks.length; i++) {
            cb = callbacks[i];
            if (cb === fn || cb.fn === fn) {
              callbacks.splice(i, 1);
              break;
            }
          }
          return this;
        };
        Emitter.prototype.emit = function(event) {
          this._callbacks = this._callbacks || {};
          var args = [].slice.call(arguments, 1),
              callbacks = this._callbacks[event];
          if (callbacks) {
            callbacks = callbacks.slice(0);
            for (var i = 0,
                len = callbacks.length; i < len; ++i) {
              callbacks[i].apply(this, args);
            }
          }
          return this;
        };
        Emitter.prototype.listeners = function(event) {
          this._callbacks = this._callbacks || {};
          return this._callbacks[event] || [];
        };
        Emitter.prototype.hasListeners = function(event) {
          return !!this.listeners(event).length;
        };
      }, {}],
      9: [function(_dereq_, module, exports) {
        module.exports = debug;
        function debug(name) {
          if (!debug.enabled(name))
            return function() {};
          return function(fmt) {
            fmt = coerce(fmt);
            var curr = new Date;
            var ms = curr - (debug[name] || curr);
            debug[name] = curr;
            fmt = name + ' ' + fmt + ' +' + debug.humanize(ms);
            window.console && console.log && Function.prototype.apply.call(console.log, console, arguments);
          };
        }
        debug.names = [];
        debug.skips = [];
        debug.enable = function(name) {
          try {
            localStorage.debug = name;
          } catch (e) {}
          var split = (name || '').split(/[\s,]+/),
              len = split.length;
          for (var i = 0; i < len; i++) {
            name = split[i].replace('*', '.*?');
            if (name[0] === '-') {
              debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
            } else {
              debug.names.push(new RegExp('^' + name + '$'));
            }
          }
        };
        debug.disable = function() {
          debug.enable('');
        };
        debug.humanize = function(ms) {
          var sec = 1000,
              min = 60 * 1000,
              hour = 60 * min;
          if (ms >= hour)
            return (ms / hour).toFixed(1) + 'h';
          if (ms >= min)
            return (ms / min).toFixed(1) + 'm';
          if (ms >= sec)
            return (ms / sec | 0) + 's';
          return ms + 'ms';
        };
        debug.enabled = function(name) {
          for (var i = 0,
              len = debug.skips.length; i < len; i++) {
            if (debug.skips[i].test(name)) {
              return false;
            }
          }
          for (var i = 0,
              len = debug.names.length; i < len; i++) {
            if (debug.names[i].test(name)) {
              return true;
            }
          }
          return false;
        };
        function coerce(val) {
          if (val instanceof Error)
            return val.stack || val.message;
          return val;
        }
        try {
          if (window.localStorage)
            debug.enable(localStorage.debug);
        } catch (e) {}
      }, {}],
      10: [function(_dereq_, module, exports) {
        module.exports = _dereq_('./lib/');
      }, {"./lib/": 11}],
      11: [function(_dereq_, module, exports) {
        module.exports = _dereq_('./socket');
        module.exports.parser = _dereq_('engine.io-parser');
      }, {
        "./socket": 12,
        "engine.io-parser": 21
      }],
      12: [function(_dereq_, module, exports) {
        (function(global) {
          var transports = _dereq_('./transports');
          var Emitter = _dereq_('component-emitter');
          var debug = _dereq_('debug')('engine.io-client:socket');
          var index = _dereq_('indexof');
          var parser = _dereq_('engine.io-parser');
          var parseuri = _dereq_('parseuri');
          var parsejson = _dereq_('parsejson');
          var parseqs = _dereq_('parseqs');
          module.exports = Socket;
          function noop() {}
          function Socket(uri, opts) {
            if (!(this instanceof Socket))
              return new Socket(uri, opts);
            opts = opts || {};
            if (uri && 'object' == typeof uri) {
              opts = uri;
              uri = null;
            }
            if (uri) {
              uri = parseuri(uri);
              opts.host = uri.host;
              opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
              opts.port = uri.port;
              if (uri.query)
                opts.query = uri.query;
            }
            this.secure = null != opts.secure ? opts.secure : (global.location && 'https:' == location.protocol);
            if (opts.host) {
              var pieces = opts.host.split(':');
              opts.hostname = pieces.shift();
              if (pieces.length)
                opts.port = pieces.pop();
            }
            this.agent = opts.agent || false;
            this.hostname = opts.hostname || (global.location ? location.hostname : 'localhost');
            this.port = opts.port || (global.location && location.port ? location.port : (this.secure ? 443 : 80));
            this.query = opts.query || {};
            if ('string' == typeof this.query)
              this.query = parseqs.decode(this.query);
            this.upgrade = false !== opts.upgrade;
            this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
            this.forceJSONP = !!opts.forceJSONP;
            this.jsonp = false !== opts.jsonp;
            this.forceBase64 = !!opts.forceBase64;
            this.enablesXDR = !!opts.enablesXDR;
            this.timestampParam = opts.timestampParam || 't';
            this.timestampRequests = opts.timestampRequests;
            this.transports = opts.transports || ['polling', 'websocket'];
            this.readyState = '';
            this.writeBuffer = [];
            this.callbackBuffer = [];
            this.policyPort = opts.policyPort || 843;
            this.rememberUpgrade = opts.rememberUpgrade || false;
            this.open();
            this.binaryType = null;
            this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
          }
          Socket.priorWebsocketSuccess = false;
          Emitter(Socket.prototype);
          Socket.protocol = parser.protocol;
          Socket.Socket = Socket;
          Socket.Transport = _dereq_('./transport');
          Socket.transports = _dereq_('./transports');
          Socket.parser = _dereq_('engine.io-parser');
          Socket.prototype.createTransport = function(name) {
            debug('creating transport "%s"', name);
            var query = clone(this.query);
            query.EIO = parser.protocol;
            query.transport = name;
            if (this.id)
              query.sid = this.id;
            var transport = new transports[name]({
              agent: this.agent,
              hostname: this.hostname,
              port: this.port,
              secure: this.secure,
              path: this.path,
              query: query,
              forceJSONP: this.forceJSONP,
              jsonp: this.jsonp,
              forceBase64: this.forceBase64,
              enablesXDR: this.enablesXDR,
              timestampRequests: this.timestampRequests,
              timestampParam: this.timestampParam,
              policyPort: this.policyPort,
              socket: this
            });
            return transport;
          };
          function clone(obj) {
            var o = {};
            for (var i in obj) {
              if (obj.hasOwnProperty(i)) {
                o[i] = obj[i];
              }
            }
            return o;
          }
          Socket.prototype.open = function() {
            var transport;
            if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
              transport = 'websocket';
            } else if (0 == this.transports.length) {
              var self = this;
              setTimeout(function() {
                self.emit('error', 'No transports available');
              }, 0);
              return;
            } else {
              transport = this.transports[0];
            }
            this.readyState = 'opening';
            var transport;
            try {
              transport = this.createTransport(transport);
            } catch (e) {
              this.transports.shift();
              this.open();
              return;
            }
            transport.open();
            this.setTransport(transport);
          };
          Socket.prototype.setTransport = function(transport) {
            debug('setting transport %s', transport.name);
            var self = this;
            if (this.transport) {
              debug('clearing existing transport %s', this.transport.name);
              this.transport.removeAllListeners();
            }
            this.transport = transport;
            transport.on('drain', function() {
              self.onDrain();
            }).on('packet', function(packet) {
              self.onPacket(packet);
            }).on('error', function(e) {
              self.onError(e);
            }).on('close', function() {
              self.onClose('transport close');
            });
          };
          Socket.prototype.probe = function(name) {
            debug('probing transport "%s"', name);
            var transport = this.createTransport(name, {probe: 1}),
                failed = false,
                self = this;
            Socket.priorWebsocketSuccess = false;
            function onTransportOpen() {
              if (self.onlyBinaryUpgrades) {
                var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
                failed = failed || upgradeLosesBinary;
              }
              if (failed)
                return;
              debug('probe transport "%s" opened', name);
              transport.send([{
                type: 'ping',
                data: 'probe'
              }]);
              transport.once('packet', function(msg) {
                if (failed)
                  return;
                if ('pong' == msg.type && 'probe' == msg.data) {
                  debug('probe transport "%s" pong', name);
                  self.upgrading = true;
                  self.emit('upgrading', transport);
                  if (!transport)
                    return;
                  Socket.priorWebsocketSuccess = 'websocket' == transport.name;
                  debug('pausing current transport "%s"', self.transport.name);
                  self.transport.pause(function() {
                    if (failed)
                      return;
                    if ('closed' == self.readyState)
                      return;
                    debug('changing transport and sending upgrade packet');
                    cleanup();
                    self.setTransport(transport);
                    transport.send([{type: 'upgrade'}]);
                    self.emit('upgrade', transport);
                    transport = null;
                    self.upgrading = false;
                    self.flush();
                  });
                } else {
                  debug('probe transport "%s" failed', name);
                  var err = new Error('probe error');
                  err.transport = transport.name;
                  self.emit('upgradeError', err);
                }
              });
            }
            function freezeTransport() {
              if (failed)
                return;
              failed = true;
              cleanup();
              transport.close();
              transport = null;
            }
            function onerror(err) {
              var error = new Error('probe error: ' + err);
              error.transport = transport.name;
              freezeTransport();
              debug('probe transport "%s" failed because of error: %s', name, err);
              self.emit('upgradeError', error);
            }
            function onTransportClose() {
              onerror("transport closed");
            }
            function onclose() {
              onerror("socket closed");
            }
            function onupgrade(to) {
              if (transport && to.name != transport.name) {
                debug('"%s" works - aborting "%s"', to.name, transport.name);
                freezeTransport();
              }
            }
            function cleanup() {
              transport.removeListener('open', onTransportOpen);
              transport.removeListener('error', onerror);
              transport.removeListener('close', onTransportClose);
              self.removeListener('close', onclose);
              self.removeListener('upgrading', onupgrade);
            }
            transport.once('open', onTransportOpen);
            transport.once('error', onerror);
            transport.once('close', onTransportClose);
            this.once('close', onclose);
            this.once('upgrading', onupgrade);
            transport.open();
          };
          Socket.prototype.onOpen = function() {
            debug('socket open');
            this.readyState = 'open';
            Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
            this.emit('open');
            this.flush();
            if ('open' == this.readyState && this.upgrade && this.transport.pause) {
              debug('starting upgrade probes');
              for (var i = 0,
                  l = this.upgrades.length; i < l; i++) {
                this.probe(this.upgrades[i]);
              }
            }
          };
          Socket.prototype.onPacket = function(packet) {
            if ('opening' == this.readyState || 'open' == this.readyState) {
              debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
              this.emit('packet', packet);
              this.emit('heartbeat');
              switch (packet.type) {
                case 'open':
                  this.onHandshake(parsejson(packet.data));
                  break;
                case 'pong':
                  this.setPing();
                  break;
                case 'error':
                  var err = new Error('server error');
                  err.code = packet.data;
                  this.emit('error', err);
                  break;
                case 'message':
                  this.emit('data', packet.data);
                  this.emit('message', packet.data);
                  break;
              }
            } else {
              debug('packet received with socket readyState "%s"', this.readyState);
            }
          };
          Socket.prototype.onHandshake = function(data) {
            this.emit('handshake', data);
            this.id = data.sid;
            this.transport.query.sid = data.sid;
            this.upgrades = this.filterUpgrades(data.upgrades);
            this.pingInterval = data.pingInterval;
            this.pingTimeout = data.pingTimeout;
            this.onOpen();
            if ('closed' == this.readyState)
              return;
            this.setPing();
            this.removeListener('heartbeat', this.onHeartbeat);
            this.on('heartbeat', this.onHeartbeat);
          };
          Socket.prototype.onHeartbeat = function(timeout) {
            clearTimeout(this.pingTimeoutTimer);
            var self = this;
            self.pingTimeoutTimer = setTimeout(function() {
              if ('closed' == self.readyState)
                return;
              self.onClose('ping timeout');
            }, timeout || (self.pingInterval + self.pingTimeout));
          };
          Socket.prototype.setPing = function() {
            var self = this;
            clearTimeout(self.pingIntervalTimer);
            self.pingIntervalTimer = setTimeout(function() {
              debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
              self.ping();
              self.onHeartbeat(self.pingTimeout);
            }, self.pingInterval);
          };
          Socket.prototype.ping = function() {
            this.sendPacket('ping');
          };
          Socket.prototype.onDrain = function() {
            for (var i = 0; i < this.prevBufferLen; i++) {
              if (this.callbackBuffer[i]) {
                this.callbackBuffer[i]();
              }
            }
            this.writeBuffer.splice(0, this.prevBufferLen);
            this.callbackBuffer.splice(0, this.prevBufferLen);
            this.prevBufferLen = 0;
            if (this.writeBuffer.length == 0) {
              this.emit('drain');
            } else {
              this.flush();
            }
          };
          Socket.prototype.flush = function() {
            if ('closed' != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
              debug('flushing %d packets in socket', this.writeBuffer.length);
              this.transport.send(this.writeBuffer);
              this.prevBufferLen = this.writeBuffer.length;
              this.emit('flush');
            }
          };
          Socket.prototype.write = Socket.prototype.send = function(msg, fn) {
            this.sendPacket('message', msg, fn);
            return this;
          };
          Socket.prototype.sendPacket = function(type, data, fn) {
            if ('closing' == this.readyState || 'closed' == this.readyState) {
              return;
            }
            var packet = {
              type: type,
              data: data
            };
            this.emit('packetCreate', packet);
            this.writeBuffer.push(packet);
            this.callbackBuffer.push(fn);
            this.flush();
          };
          Socket.prototype.close = function() {
            if ('opening' == this.readyState || 'open' == this.readyState) {
              this.readyState = 'closing';
              var self = this;
              function close() {
                self.onClose('forced close');
                debug('socket closing - telling transport to close');
                self.transport.close();
              }
              function cleanupAndClose() {
                self.removeListener('upgrade', cleanupAndClose);
                self.removeListener('upgradeError', cleanupAndClose);
                close();
              }
              function waitForUpgrade() {
                self.once('upgrade', cleanupAndClose);
                self.once('upgradeError', cleanupAndClose);
              }
              if (this.writeBuffer.length) {
                this.once('drain', function() {
                  if (this.upgrading) {
                    waitForUpgrade();
                  } else {
                    close();
                  }
                });
              } else if (this.upgrading) {
                waitForUpgrade();
              } else {
                close();
              }
            }
            return this;
          };
          Socket.prototype.onError = function(err) {
            debug('socket error %j', err);
            Socket.priorWebsocketSuccess = false;
            this.emit('error', err);
            this.onClose('transport error', err);
          };
          Socket.prototype.onClose = function(reason, desc) {
            if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
              debug('socket close with reason: "%s"', reason);
              var self = this;
              clearTimeout(this.pingIntervalTimer);
              clearTimeout(this.pingTimeoutTimer);
              setTimeout(function() {
                self.writeBuffer = [];
                self.callbackBuffer = [];
                self.prevBufferLen = 0;
              }, 0);
              this.transport.removeAllListeners('close');
              this.transport.close();
              this.transport.removeAllListeners();
              this.readyState = 'closed';
              this.id = null;
              this.emit('close', reason, desc);
            }
          };
          Socket.prototype.filterUpgrades = function(upgrades) {
            var filteredUpgrades = [];
            for (var i = 0,
                j = upgrades.length; i < j; i++) {
              if (~index(this.transports, upgrades[i]))
                filteredUpgrades.push(upgrades[i]);
            }
            return filteredUpgrades;
          };
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {
        "./transport": 13,
        "./transports": 14,
        "component-emitter": 8,
        "debug": 9,
        "engine.io-parser": 21,
        "indexof": 36,
        "parsejson": 28,
        "parseqs": 29,
        "parseuri": 30
      }],
      13: [function(_dereq_, module, exports) {
        var parser = _dereq_('engine.io-parser');
        var Emitter = _dereq_('component-emitter');
        module.exports = Transport;
        function Transport(opts) {
          this.path = opts.path;
          this.hostname = opts.hostname;
          this.port = opts.port;
          this.secure = opts.secure;
          this.query = opts.query;
          this.timestampParam = opts.timestampParam;
          this.timestampRequests = opts.timestampRequests;
          this.readyState = '';
          this.agent = opts.agent || false;
          this.socket = opts.socket;
          this.enablesXDR = opts.enablesXDR;
        }
        Emitter(Transport.prototype);
        Transport.timestamps = 0;
        Transport.prototype.onError = function(msg, desc) {
          var err = new Error(msg);
          err.type = 'TransportError';
          err.description = desc;
          this.emit('error', err);
          return this;
        };
        Transport.prototype.open = function() {
          if ('closed' == this.readyState || '' == this.readyState) {
            this.readyState = 'opening';
            this.doOpen();
          }
          return this;
        };
        Transport.prototype.close = function() {
          if ('opening' == this.readyState || 'open' == this.readyState) {
            this.doClose();
            this.onClose();
          }
          return this;
        };
        Transport.prototype.send = function(packets) {
          if ('open' == this.readyState) {
            this.write(packets);
          } else {
            throw new Error('Transport not open');
          }
        };
        Transport.prototype.onOpen = function() {
          this.readyState = 'open';
          this.writable = true;
          this.emit('open');
        };
        Transport.prototype.onData = function(data) {
          var packet = parser.decodePacket(data, this.socket.binaryType);
          this.onPacket(packet);
        };
        Transport.prototype.onPacket = function(packet) {
          this.emit('packet', packet);
        };
        Transport.prototype.onClose = function() {
          this.readyState = 'closed';
          this.emit('close');
        };
      }, {
        "component-emitter": 8,
        "engine.io-parser": 21
      }],
      14: [function(_dereq_, module, exports) {
        (function(global) {
          var XMLHttpRequest = _dereq_('xmlhttprequest');
          var XHR = _dereq_('./polling-xhr');
          var JSONP = _dereq_('./polling-jsonp');
          var websocket = _dereq_('./websocket');
          exports.polling = polling;
          exports.websocket = websocket;
          function polling(opts) {
            var xhr;
            var xd = false;
            var xs = false;
            var jsonp = false !== opts.jsonp;
            if (global.location) {
              var isSSL = 'https:' == location.protocol;
              var port = location.port;
              if (!port) {
                port = isSSL ? 443 : 80;
              }
              xd = opts.hostname != location.hostname || port != opts.port;
              xs = opts.secure != isSSL;
            }
            opts.xdomain = xd;
            opts.xscheme = xs;
            xhr = new XMLHttpRequest(opts);
            if ('open' in xhr && !opts.forceJSONP) {
              return new XHR(opts);
            } else {
              if (!jsonp)
                throw new Error('JSONP disabled');
              return new JSONP(opts);
            }
          }
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {
        "./polling-jsonp": 15,
        "./polling-xhr": 16,
        "./websocket": 18,
        "xmlhttprequest": 19
      }],
      15: [function(_dereq_, module, exports) {
        (function(global) {
          var Polling = _dereq_('./polling');
          var inherit = _dereq_('component-inherit');
          module.exports = JSONPPolling;
          var rNewline = /\n/g;
          var rEscapedNewline = /\\n/g;
          var callbacks;
          var index = 0;
          function empty() {}
          function JSONPPolling(opts) {
            Polling.call(this, opts);
            this.query = this.query || {};
            if (!callbacks) {
              if (!global.___eio)
                global.___eio = [];
              callbacks = global.___eio;
            }
            this.index = callbacks.length;
            var self = this;
            callbacks.push(function(msg) {
              self.onData(msg);
            });
            this.query.j = this.index;
            if (global.document && global.addEventListener) {
              global.addEventListener('beforeunload', function() {
                if (self.script)
                  self.script.onerror = empty;
              });
            }
          }
          inherit(JSONPPolling, Polling);
          JSONPPolling.prototype.supportsBinary = false;
          JSONPPolling.prototype.doClose = function() {
            if (this.script) {
              this.script.parentNode.removeChild(this.script);
              this.script = null;
            }
            if (this.form) {
              this.form.parentNode.removeChild(this.form);
              this.form = null;
              this.iframe = null;
            }
            Polling.prototype.doClose.call(this);
          };
          JSONPPolling.prototype.doPoll = function() {
            var self = this;
            var script = document.createElement('script');
            if (this.script) {
              this.script.parentNode.removeChild(this.script);
              this.script = null;
            }
            script.async = true;
            script.src = this.uri();
            script.onerror = function(e) {
              self.onError('jsonp poll error', e);
            };
            var insertAt = document.getElementsByTagName('script')[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
            if (isUAgecko) {
              setTimeout(function() {
                var iframe = document.createElement('iframe');
                document.body.appendChild(iframe);
                document.body.removeChild(iframe);
              }, 100);
            }
          };
          JSONPPolling.prototype.doWrite = function(data, fn) {
            var self = this;
            if (!this.form) {
              var form = document.createElement('form');
              var area = document.createElement('textarea');
              var id = this.iframeId = 'eio_iframe_' + this.index;
              var iframe;
              form.className = 'socketio';
              form.style.position = 'absolute';
              form.style.top = '-1000px';
              form.style.left = '-1000px';
              form.target = id;
              form.method = 'POST';
              form.setAttribute('accept-charset', 'utf-8');
              area.name = 'd';
              form.appendChild(area);
              document.body.appendChild(form);
              this.form = form;
              this.area = area;
            }
            this.form.action = this.uri();
            function complete() {
              initIframe();
              fn();
            }
            function initIframe() {
              if (self.iframe) {
                try {
                  self.form.removeChild(self.iframe);
                } catch (e) {
                  self.onError('jsonp polling iframe removal error', e);
                }
              }
              try {
                var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
                iframe = document.createElement(html);
              } catch (e) {
                iframe = document.createElement('iframe');
                iframe.name = self.iframeId;
                iframe.src = 'javascript:0';
              }
              iframe.id = self.iframeId;
              self.form.appendChild(iframe);
              self.iframe = iframe;
            }
            initIframe();
            data = data.replace(rEscapedNewline, '\\\n');
            this.area.value = data.replace(rNewline, '\\n');
            try {
              this.form.submit();
            } catch (e) {}
            if (this.iframe.attachEvent) {
              this.iframe.onreadystatechange = function() {
                if (self.iframe.readyState == 'complete') {
                  complete();
                }
              };
            } else {
              this.iframe.onload = complete;
            }
          };
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {
        "./polling": 17,
        "component-inherit": 20
      }],
      16: [function(_dereq_, module, exports) {
        (function(global) {
          var XMLHttpRequest = _dereq_('xmlhttprequest');
          var Polling = _dereq_('./polling');
          var Emitter = _dereq_('component-emitter');
          var inherit = _dereq_('component-inherit');
          var debug = _dereq_('debug')('engine.io-client:polling-xhr');
          module.exports = XHR;
          module.exports.Request = Request;
          function empty() {}
          function XHR(opts) {
            Polling.call(this, opts);
            if (global.location) {
              var isSSL = 'https:' == location.protocol;
              var port = location.port;
              if (!port) {
                port = isSSL ? 443 : 80;
              }
              this.xd = opts.hostname != global.location.hostname || port != opts.port;
              this.xs = opts.secure != isSSL;
            }
          }
          inherit(XHR, Polling);
          XHR.prototype.supportsBinary = true;
          XHR.prototype.request = function(opts) {
            opts = opts || {};
            opts.uri = this.uri();
            opts.xd = this.xd;
            opts.xs = this.xs;
            opts.agent = this.agent || false;
            opts.supportsBinary = this.supportsBinary;
            opts.enablesXDR = this.enablesXDR;
            return new Request(opts);
          };
          XHR.prototype.doWrite = function(data, fn) {
            var isBinary = typeof data !== 'string' && data !== undefined;
            var req = this.request({
              method: 'POST',
              data: data,
              isBinary: isBinary
            });
            var self = this;
            req.on('success', fn);
            req.on('error', function(err) {
              self.onError('xhr post error', err);
            });
            this.sendXhr = req;
          };
          XHR.prototype.doPoll = function() {
            debug('xhr poll');
            var req = this.request();
            var self = this;
            req.on('data', function(data) {
              self.onData(data);
            });
            req.on('error', function(err) {
              self.onError('xhr poll error', err);
            });
            this.pollXhr = req;
          };
          function Request(opts) {
            this.method = opts.method || 'GET';
            this.uri = opts.uri;
            this.xd = !!opts.xd;
            this.xs = !!opts.xs;
            this.async = false !== opts.async;
            this.data = undefined != opts.data ? opts.data : null;
            this.agent = opts.agent;
            this.isBinary = opts.isBinary;
            this.supportsBinary = opts.supportsBinary;
            this.enablesXDR = opts.enablesXDR;
            this.create();
          }
          Emitter(Request.prototype);
          Request.prototype.create = function() {
            var xhr = this.xhr = new XMLHttpRequest({
              agent: this.agent,
              xdomain: this.xd,
              xscheme: this.xs,
              enablesXDR: this.enablesXDR
            });
            var self = this;
            try {
              debug('xhr open %s: %s', this.method, this.uri);
              xhr.open(this.method, this.uri, this.async);
              if (this.supportsBinary) {
                xhr.responseType = 'arraybuffer';
              }
              if ('POST' == this.method) {
                try {
                  if (this.isBinary) {
                    xhr.setRequestHeader('Content-type', 'application/octet-stream');
                  } else {
                    xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                  }
                } catch (e) {}
              }
              if ('withCredentials' in xhr) {
                xhr.withCredentials = true;
              }
              if (this.hasXDR()) {
                xhr.onload = function() {
                  self.onLoad();
                };
                xhr.onerror = function() {
                  self.onError(xhr.responseText);
                };
              } else {
                xhr.onreadystatechange = function() {
                  if (4 != xhr.readyState)
                    return;
                  if (200 == xhr.status || 1223 == xhr.status) {
                    self.onLoad();
                  } else {
                    setTimeout(function() {
                      self.onError(xhr.status);
                    }, 0);
                  }
                };
              }
              debug('xhr data %s', this.data);
              xhr.send(this.data);
            } catch (e) {
              setTimeout(function() {
                self.onError(e);
              }, 0);
              return;
            }
            if (global.document) {
              this.index = Request.requestsCount++;
              Request.requests[this.index] = this;
            }
          };
          Request.prototype.onSuccess = function() {
            this.emit('success');
            this.cleanup();
          };
          Request.prototype.onData = function(data) {
            this.emit('data', data);
            this.onSuccess();
          };
          Request.prototype.onError = function(err) {
            this.emit('error', err);
            this.cleanup();
          };
          Request.prototype.cleanup = function() {
            if ('undefined' == typeof this.xhr || null === this.xhr) {
              return;
            }
            if (this.hasXDR()) {
              this.xhr.onload = this.xhr.onerror = empty;
            } else {
              this.xhr.onreadystatechange = empty;
            }
            try {
              this.xhr.abort();
            } catch (e) {}
            if (global.document) {
              delete Request.requests[this.index];
            }
            this.xhr = null;
          };
          Request.prototype.onLoad = function() {
            var data;
            try {
              var contentType;
              try {
                contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
              } catch (e) {}
              if (contentType === 'application/octet-stream') {
                data = this.xhr.response;
              } else {
                if (!this.supportsBinary) {
                  data = this.xhr.responseText;
                } else {
                  data = 'ok';
                }
              }
            } catch (e) {
              this.onError(e);
            }
            if (null != data) {
              this.onData(data);
            }
          };
          Request.prototype.hasXDR = function() {
            return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
          };
          Request.prototype.abort = function() {
            this.cleanup();
          };
          if (global.document) {
            Request.requestsCount = 0;
            Request.requests = {};
            if (global.attachEvent) {
              global.attachEvent('onunload', unloadHandler);
            } else if (global.addEventListener) {
              global.addEventListener('beforeunload', unloadHandler);
            }
          }
          function unloadHandler() {
            for (var i in Request.requests) {
              if (Request.requests.hasOwnProperty(i)) {
                Request.requests[i].abort();
              }
            }
          }
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {
        "./polling": 17,
        "component-emitter": 8,
        "component-inherit": 20,
        "debug": 9,
        "xmlhttprequest": 19
      }],
      17: [function(_dereq_, module, exports) {
        var Transport = _dereq_('../transport');
        var parseqs = _dereq_('parseqs');
        var parser = _dereq_('engine.io-parser');
        var inherit = _dereq_('component-inherit');
        var debug = _dereq_('debug')('engine.io-client:polling');
        module.exports = Polling;
        var hasXHR2 = (function() {
          var XMLHttpRequest = _dereq_('xmlhttprequest');
          var xhr = new XMLHttpRequest({xdomain: false});
          return null != xhr.responseType;
        })();
        function Polling(opts) {
          var forceBase64 = (opts && opts.forceBase64);
          if (!hasXHR2 || forceBase64) {
            this.supportsBinary = false;
          }
          Transport.call(this, opts);
        }
        inherit(Polling, Transport);
        Polling.prototype.name = 'polling';
        Polling.prototype.doOpen = function() {
          this.poll();
        };
        Polling.prototype.pause = function(onPause) {
          var pending = 0;
          var self = this;
          this.readyState = 'pausing';
          function pause() {
            debug('paused');
            self.readyState = 'paused';
            onPause();
          }
          if (this.polling || !this.writable) {
            var total = 0;
            if (this.polling) {
              debug('we are currently polling - waiting to pause');
              total++;
              this.once('pollComplete', function() {
                debug('pre-pause polling complete');
                --total || pause();
              });
            }
            if (!this.writable) {
              debug('we are currently writing - waiting to pause');
              total++;
              this.once('drain', function() {
                debug('pre-pause writing complete');
                --total || pause();
              });
            }
          } else {
            pause();
          }
        };
        Polling.prototype.poll = function() {
          debug('polling');
          this.polling = true;
          this.doPoll();
          this.emit('poll');
        };
        Polling.prototype.onData = function(data) {
          var self = this;
          debug('polling got data %s', data);
          var callback = function(packet, index, total) {
            if ('opening' == self.readyState) {
              self.onOpen();
            }
            if ('close' == packet.type) {
              self.onClose();
              return false;
            }
            self.onPacket(packet);
          };
          parser.decodePayload(data, this.socket.binaryType, callback);
          if ('closed' != this.readyState) {
            this.polling = false;
            this.emit('pollComplete');
            if ('open' == this.readyState) {
              this.poll();
            } else {
              debug('ignoring poll - transport state "%s"', this.readyState);
            }
          }
        };
        Polling.prototype.doClose = function() {
          var self = this;
          function close() {
            debug('writing close packet');
            self.write([{type: 'close'}]);
          }
          if ('open' == this.readyState) {
            debug('transport open - closing');
            close();
          } else {
            debug('transport not open - deferring close');
            this.once('open', close);
          }
        };
        Polling.prototype.write = function(packets) {
          var self = this;
          this.writable = false;
          var callbackfn = function() {
            self.writable = true;
            self.emit('drain');
          };
          var self = this;
          parser.encodePayload(packets, this.supportsBinary, function(data) {
            self.doWrite(data, callbackfn);
          });
        };
        Polling.prototype.uri = function() {
          var query = this.query || {};
          var schema = this.secure ? 'https' : 'http';
          var port = '';
          if (false !== this.timestampRequests) {
            query[this.timestampParam] = +new Date + '-' + Transport.timestamps++;
          }
          if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
          }
          query = parseqs.encode(query);
          if (this.port && (('https' == schema && this.port != 443) || ('http' == schema && this.port != 80))) {
            port = ':' + this.port;
          }
          if (query.length) {
            query = '?' + query;
          }
          return schema + '://' + this.hostname + port + this.path + query;
        };
      }, {
        "../transport": 13,
        "component-inherit": 20,
        "debug": 9,
        "engine.io-parser": 21,
        "parseqs": 29,
        "xmlhttprequest": 19
      }],
      18: [function(_dereq_, module, exports) {
        var Transport = _dereq_('../transport');
        var parser = _dereq_('engine.io-parser');
        var parseqs = _dereq_('parseqs');
        var inherit = _dereq_('component-inherit');
        var debug = _dereq_('debug')('engine.io-client:websocket');
        var WebSocket = _dereq_('ws');
        module.exports = WS;
        function WS(opts) {
          var forceBase64 = (opts && opts.forceBase64);
          if (forceBase64) {
            this.supportsBinary = false;
          }
          Transport.call(this, opts);
        }
        inherit(WS, Transport);
        WS.prototype.name = 'websocket';
        WS.prototype.supportsBinary = true;
        WS.prototype.doOpen = function() {
          if (!this.check()) {
            return;
          }
          var self = this;
          var uri = this.uri();
          var protocols = void(0);
          var opts = {agent: this.agent};
          this.ws = new WebSocket(uri, protocols, opts);
          if (this.ws.binaryType === undefined) {
            this.supportsBinary = false;
          }
          this.ws.binaryType = 'arraybuffer';
          this.addEventListeners();
        };
        WS.prototype.addEventListeners = function() {
          var self = this;
          this.ws.onopen = function() {
            self.onOpen();
          };
          this.ws.onclose = function() {
            self.onClose();
          };
          this.ws.onmessage = function(ev) {
            self.onData(ev.data);
          };
          this.ws.onerror = function(e) {
            self.onError('websocket error', e);
          };
        };
        if ('undefined' != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
          WS.prototype.onData = function(data) {
            var self = this;
            setTimeout(function() {
              Transport.prototype.onData.call(self, data);
            }, 0);
          };
        }
        WS.prototype.write = function(packets) {
          var self = this;
          this.writable = false;
          for (var i = 0,
              l = packets.length; i < l; i++) {
            parser.encodePacket(packets[i], this.supportsBinary, function(data) {
              try {
                self.ws.send(data);
              } catch (e) {
                debug('websocket closed before onclose event');
              }
            });
          }
          function ondrain() {
            self.writable = true;
            self.emit('drain');
          }
          setTimeout(ondrain, 0);
        };
        WS.prototype.onClose = function() {
          Transport.prototype.onClose.call(this);
        };
        WS.prototype.doClose = function() {
          if (typeof this.ws !== 'undefined') {
            this.ws.close();
          }
        };
        WS.prototype.uri = function() {
          var query = this.query || {};
          var schema = this.secure ? 'wss' : 'ws';
          var port = '';
          if (this.port && (('wss' == schema && this.port != 443) || ('ws' == schema && this.port != 80))) {
            port = ':' + this.port;
          }
          if (this.timestampRequests) {
            query[this.timestampParam] = +new Date;
          }
          if (!this.supportsBinary) {
            query.b64 = 1;
          }
          query = parseqs.encode(query);
          if (query.length) {
            query = '?' + query;
          }
          return schema + '://' + this.hostname + port + this.path + query;
        };
        WS.prototype.check = function() {
          return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
        };
      }, {
        "../transport": 13,
        "component-inherit": 20,
        "debug": 9,
        "engine.io-parser": 21,
        "parseqs": 29,
        "ws": 31
      }],
      19: [function(_dereq_, module, exports) {
        var hasCORS = _dereq_('has-cors');
        module.exports = function(opts) {
          var xdomain = opts.xdomain;
          var xscheme = opts.xscheme;
          var enablesXDR = opts.enablesXDR;
          try {
            if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
              return new XMLHttpRequest();
            }
          } catch (e) {}
          try {
            if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
              return new XDomainRequest();
            }
          } catch (e) {}
          if (!xdomain) {
            try {
              return new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {}
          }
        };
      }, {"has-cors": 34}],
      20: [function(_dereq_, module, exports) {
        module.exports = function(a, b) {
          var fn = function() {};
          fn.prototype = b.prototype;
          a.prototype = new fn;
          a.prototype.constructor = a;
        };
      }, {}],
      21: [function(_dereq_, module, exports) {
        (function(global) {
          var keys = _dereq_('./keys');
          var sliceBuffer = _dereq_('arraybuffer.slice');
          var base64encoder = _dereq_('base64-arraybuffer');
          var after = _dereq_('after');
          var utf8 = _dereq_('utf8');
          var isAndroid = navigator.userAgent.match(/Android/i);
          exports.protocol = 3;
          var packets = exports.packets = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
          };
          var packetslist = keys(packets);
          var err = {
            type: 'error',
            data: 'parser error'
          };
          var Blob = _dereq_('blob');
          exports.encodePacket = function(packet, supportsBinary, utf8encode, callback) {
            if ('function' == typeof supportsBinary) {
              callback = supportsBinary;
              supportsBinary = false;
            }
            if ('function' == typeof utf8encode) {
              callback = utf8encode;
              utf8encode = null;
            }
            var data = (packet.data === undefined) ? undefined : packet.data.buffer || packet.data;
            if (global.ArrayBuffer && data instanceof ArrayBuffer) {
              return encodeArrayBuffer(packet, supportsBinary, callback);
            } else if (Blob && data instanceof global.Blob) {
              return encodeBlob(packet, supportsBinary, callback);
            }
            var encoded = packets[packet.type];
            if (undefined !== packet.data) {
              encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
            }
            return callback('' + encoded);
          };
          function encodeArrayBuffer(packet, supportsBinary, callback) {
            if (!supportsBinary) {
              return exports.encodeBase64Packet(packet, callback);
            }
            var data = packet.data;
            var contentArray = new Uint8Array(data);
            var resultBuffer = new Uint8Array(1 + data.byteLength);
            resultBuffer[0] = packets[packet.type];
            for (var i = 0; i < contentArray.length; i++) {
              resultBuffer[i + 1] = contentArray[i];
            }
            return callback(resultBuffer.buffer);
          }
          function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
            if (!supportsBinary) {
              return exports.encodeBase64Packet(packet, callback);
            }
            var fr = new FileReader();
            fr.onload = function() {
              packet.data = fr.result;
              exports.encodePacket(packet, supportsBinary, true, callback);
            };
            return fr.readAsArrayBuffer(packet.data);
          }
          function encodeBlob(packet, supportsBinary, callback) {
            if (!supportsBinary) {
              return exports.encodeBase64Packet(packet, callback);
            }
            if (isAndroid) {
              return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
            }
            var length = new Uint8Array(1);
            length[0] = packets[packet.type];
            var blob = new Blob([length.buffer, packet.data]);
            return callback(blob);
          }
          exports.encodeBase64Packet = function(packet, callback) {
            var message = 'b' + exports.packets[packet.type];
            if (Blob && packet.data instanceof Blob) {
              var fr = new FileReader();
              fr.onload = function() {
                var b64 = fr.result.split(',')[1];
                callback(message + b64);
              };
              return fr.readAsDataURL(packet.data);
            }
            var b64data;
            try {
              b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
            } catch (e) {
              var typed = new Uint8Array(packet.data);
              var basic = new Array(typed.length);
              for (var i = 0; i < typed.length; i++) {
                basic[i] = typed[i];
              }
              b64data = String.fromCharCode.apply(null, basic);
            }
            message += global.btoa(b64data);
            return callback(message);
          };
          exports.decodePacket = function(data, binaryType, utf8decode) {
            if (typeof data == 'string' || data === undefined) {
              if (data.charAt(0) == 'b') {
                return exports.decodeBase64Packet(data.substr(1), binaryType);
              }
              if (utf8decode) {
                try {
                  data = utf8.decode(data);
                } catch (e) {
                  return err;
                }
              }
              var type = data.charAt(0);
              if (Number(type) != type || !packetslist[type]) {
                return err;
              }
              if (data.length > 1) {
                return {
                  type: packetslist[type],
                  data: data.substring(1)
                };
              } else {
                return {type: packetslist[type]};
              }
            }
            var asArray = new Uint8Array(data);
            var type = asArray[0];
            var rest = sliceBuffer(data, 1);
            if (Blob && binaryType === 'blob') {
              rest = new Blob([rest]);
            }
            return {
              type: packetslist[type],
              data: rest
            };
          };
          exports.decodeBase64Packet = function(msg, binaryType) {
            var type = packetslist[msg.charAt(0)];
            if (!global.ArrayBuffer) {
              return {
                type: type,
                data: {
                  base64: true,
                  data: msg.substr(1)
                }
              };
            }
            var data = base64encoder.decode(msg.substr(1));
            if (binaryType === 'blob' && Blob) {
              data = new Blob([data]);
            }
            return {
              type: type,
              data: data
            };
          };
          exports.encodePayload = function(packets, supportsBinary, callback) {
            if (typeof supportsBinary == 'function') {
              callback = supportsBinary;
              supportsBinary = null;
            }
            if (supportsBinary) {
              if (Blob && !isAndroid) {
                return exports.encodePayloadAsBlob(packets, callback);
              }
              return exports.encodePayloadAsArrayBuffer(packets, callback);
            }
            if (!packets.length) {
              return callback('0:');
            }
            function setLengthHeader(message) {
              return message.length + ':' + message;
            }
            function encodeOne(packet, doneCallback) {
              exports.encodePacket(packet, supportsBinary, true, function(message) {
                doneCallback(null, setLengthHeader(message));
              });
            }
            map(packets, encodeOne, function(err, results) {
              return callback(results.join(''));
            });
          };
          function map(ary, each, done) {
            var result = new Array(ary.length);
            var next = after(ary.length, done);
            var eachWithIndex = function(i, el, cb) {
              each(el, function(error, msg) {
                result[i] = msg;
                cb(error, result);
              });
            };
            for (var i = 0; i < ary.length; i++) {
              eachWithIndex(i, ary[i], next);
            }
          }
          exports.decodePayload = function(data, binaryType, callback) {
            if (typeof data != 'string') {
              return exports.decodePayloadAsBinary(data, binaryType, callback);
            }
            if (typeof binaryType === 'function') {
              callback = binaryType;
              binaryType = null;
            }
            var packet;
            if (data == '') {
              return callback(err, 0, 1);
            }
            var length = '',
                n,
                msg;
            for (var i = 0,
                l = data.length; i < l; i++) {
              var chr = data.charAt(i);
              if (':' != chr) {
                length += chr;
              } else {
                if ('' == length || (length != (n = Number(length)))) {
                  return callback(err, 0, 1);
                }
                msg = data.substr(i + 1, n);
                if (length != msg.length) {
                  return callback(err, 0, 1);
                }
                if (msg.length) {
                  packet = exports.decodePacket(msg, binaryType, true);
                  if (err.type == packet.type && err.data == packet.data) {
                    return callback(err, 0, 1);
                  }
                  var ret = callback(packet, i + n, l);
                  if (false === ret)
                    return;
                }
                i += n;
                length = '';
              }
            }
            if (length != '') {
              return callback(err, 0, 1);
            }
          };
          exports.encodePayloadAsArrayBuffer = function(packets, callback) {
            if (!packets.length) {
              return callback(new ArrayBuffer(0));
            }
            function encodeOne(packet, doneCallback) {
              exports.encodePacket(packet, true, true, function(data) {
                return doneCallback(null, data);
              });
            }
            map(packets, encodeOne, function(err, encodedPackets) {
              var totalLength = encodedPackets.reduce(function(acc, p) {
                var len;
                if (typeof p === 'string') {
                  len = p.length;
                } else {
                  len = p.byteLength;
                }
                return acc + len.toString().length + len + 2;
              }, 0);
              var resultArray = new Uint8Array(totalLength);
              var bufferIndex = 0;
              encodedPackets.forEach(function(p) {
                var isString = typeof p === 'string';
                var ab = p;
                if (isString) {
                  var view = new Uint8Array(p.length);
                  for (var i = 0; i < p.length; i++) {
                    view[i] = p.charCodeAt(i);
                  }
                  ab = view.buffer;
                }
                if (isString) {
                  resultArray[bufferIndex++] = 0;
                } else {
                  resultArray[bufferIndex++] = 1;
                }
                var lenStr = ab.byteLength.toString();
                for (var i = 0; i < lenStr.length; i++) {
                  resultArray[bufferIndex++] = parseInt(lenStr[i]);
                }
                resultArray[bufferIndex++] = 255;
                var view = new Uint8Array(ab);
                for (var i = 0; i < view.length; i++) {
                  resultArray[bufferIndex++] = view[i];
                }
              });
              return callback(resultArray.buffer);
            });
          };
          exports.encodePayloadAsBlob = function(packets, callback) {
            function encodeOne(packet, doneCallback) {
              exports.encodePacket(packet, true, true, function(encoded) {
                var binaryIdentifier = new Uint8Array(1);
                binaryIdentifier[0] = 1;
                if (typeof encoded === 'string') {
                  var view = new Uint8Array(encoded.length);
                  for (var i = 0; i < encoded.length; i++) {
                    view[i] = encoded.charCodeAt(i);
                  }
                  encoded = view.buffer;
                  binaryIdentifier[0] = 0;
                }
                var len = (encoded instanceof ArrayBuffer) ? encoded.byteLength : encoded.size;
                var lenStr = len.toString();
                var lengthAry = new Uint8Array(lenStr.length + 1);
                for (var i = 0; i < lenStr.length; i++) {
                  lengthAry[i] = parseInt(lenStr[i]);
                }
                lengthAry[lenStr.length] = 255;
                if (Blob) {
                  var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
                  doneCallback(null, blob);
                }
              });
            }
            map(packets, encodeOne, function(err, results) {
              return callback(new Blob(results));
            });
          };
          exports.decodePayloadAsBinary = function(data, binaryType, callback) {
            if (typeof binaryType === 'function') {
              callback = binaryType;
              binaryType = null;
            }
            var bufferTail = data;
            var buffers = [];
            var numberTooLong = false;
            while (bufferTail.byteLength > 0) {
              var tailArray = new Uint8Array(bufferTail);
              var isString = tailArray[0] === 0;
              var msgLength = '';
              for (var i = 1; ; i++) {
                if (tailArray[i] == 255)
                  break;
                if (msgLength.length > 310) {
                  numberTooLong = true;
                  break;
                }
                msgLength += tailArray[i];
              }
              if (numberTooLong)
                return callback(err, 0, 1);
              bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
              msgLength = parseInt(msgLength);
              var msg = sliceBuffer(bufferTail, 0, msgLength);
              if (isString) {
                try {
                  msg = String.fromCharCode.apply(null, new Uint8Array(msg));
                } catch (e) {
                  var typed = new Uint8Array(msg);
                  msg = '';
                  for (var i = 0; i < typed.length; i++) {
                    msg += String.fromCharCode(typed[i]);
                  }
                }
              }
              buffers.push(msg);
              bufferTail = sliceBuffer(bufferTail, msgLength);
            }
            var total = buffers.length;
            buffers.forEach(function(buffer, i) {
              callback(exports.decodePacket(buffer, binaryType, true), i, total);
            });
          };
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {
        "./keys": 22,
        "after": 23,
        "arraybuffer.slice": 24,
        "base64-arraybuffer": 25,
        "blob": 26,
        "utf8": 27
      }],
      22: [function(_dereq_, module, exports) {
        module.exports = Object.keys || function keys(obj) {
          var arr = [];
          var has = Object.prototype.hasOwnProperty;
          for (var i in obj) {
            if (has.call(obj, i)) {
              arr.push(i);
            }
          }
          return arr;
        };
      }, {}],
      23: [function(_dereq_, module, exports) {
        module.exports = after;
        function after(count, callback, err_cb) {
          var bail = false;
          err_cb = err_cb || noop;
          proxy.count = count;
          return (count === 0) ? callback() : proxy;
          function proxy(err, result) {
            if (proxy.count <= 0) {
              throw new Error('after called too many times');
            }
            --proxy.count;
            if (err) {
              bail = true;
              callback(err);
              callback = err_cb;
            } else if (proxy.count === 0 && !bail) {
              callback(null, result);
            }
          }
        }
        function noop() {}
      }, {}],
      24: [function(_dereq_, module, exports) {
        module.exports = function(arraybuffer, start, end) {
          var bytes = arraybuffer.byteLength;
          start = start || 0;
          end = end || bytes;
          if (arraybuffer.slice) {
            return arraybuffer.slice(start, end);
          }
          if (start < 0) {
            start += bytes;
          }
          if (end < 0) {
            end += bytes;
          }
          if (end > bytes) {
            end = bytes;
          }
          if (start >= bytes || start >= end || bytes === 0) {
            return new ArrayBuffer(0);
          }
          var abv = new Uint8Array(arraybuffer);
          var result = new Uint8Array(end - start);
          for (var i = start,
              ii = 0; i < end; i++, ii++) {
            result[ii] = abv[i];
          }
          return result.buffer;
        };
      }, {}],
      25: [function(_dereq_, module, exports) {
        (function(chars) {
          "use strict";
          exports.encode = function(arraybuffer) {
            var bytes = new Uint8Array(arraybuffer),
                i,
                len = bytes.length,
                base64 = "";
            for (i = 0; i < len; i += 3) {
              base64 += chars[bytes[i] >> 2];
              base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
              base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
              base64 += chars[bytes[i + 2] & 63];
            }
            if ((len % 3) === 2) {
              base64 = base64.substring(0, base64.length - 1) + "=";
            } else if (len % 3 === 1) {
              base64 = base64.substring(0, base64.length - 2) + "==";
            }
            return base64;
          };
          exports.decode = function(base64) {
            var bufferLength = base64.length * 0.75,
                len = base64.length,
                i,
                p = 0,
                encoded1,
                encoded2,
                encoded3,
                encoded4;
            if (base64[base64.length - 1] === "=") {
              bufferLength--;
              if (base64[base64.length - 2] === "=") {
                bufferLength--;
              }
            }
            var arraybuffer = new ArrayBuffer(bufferLength),
                bytes = new Uint8Array(arraybuffer);
            for (i = 0; i < len; i += 4) {
              encoded1 = chars.indexOf(base64[i]);
              encoded2 = chars.indexOf(base64[i + 1]);
              encoded3 = chars.indexOf(base64[i + 2]);
              encoded4 = chars.indexOf(base64[i + 3]);
              bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
              bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
              bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
            }
            return arraybuffer;
          };
        })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
      }, {}],
      26: [function(_dereq_, module, exports) {
        (function(global) {
          var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder;
          var blobSupported = (function() {
            try {
              var b = new Blob(['hi']);
              return b.size == 2;
            } catch (e) {
              return false;
            }
          })();
          var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
          function BlobBuilderConstructor(ary, options) {
            options = options || {};
            var bb = new BlobBuilder();
            for (var i = 0; i < ary.length; i++) {
              bb.append(ary[i]);
            }
            return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
          }
          ;
          module.exports = (function() {
            if (blobSupported) {
              return global.Blob;
            } else if (blobBuilderSupported) {
              return BlobBuilderConstructor;
            } else {
              return undefined;
            }
          })();
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}],
      27: [function(_dereq_, module, exports) {
        (function(global) {
          ;
          (function(root) {
            var freeExports = typeof exports == 'object' && exports;
            var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;
            var freeGlobal = typeof global == 'object' && global;
            if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
              root = freeGlobal;
            }
            var stringFromCharCode = String.fromCharCode;
            function ucs2decode(string) {
              var output = [];
              var counter = 0;
              var length = string.length;
              var value;
              var extra;
              while (counter < length) {
                value = string.charCodeAt(counter++);
                if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                  extra = string.charCodeAt(counter++);
                  if ((extra & 0xFC00) == 0xDC00) {
                    output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                  } else {
                    output.push(value);
                    counter--;
                  }
                } else {
                  output.push(value);
                }
              }
              return output;
            }
            function ucs2encode(array) {
              var length = array.length;
              var index = -1;
              var value;
              var output = '';
              while (++index < length) {
                value = array[index];
                if (value > 0xFFFF) {
                  value -= 0x10000;
                  output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                  value = 0xDC00 | value & 0x3FF;
                }
                output += stringFromCharCode(value);
              }
              return output;
            }
            function createByte(codePoint, shift) {
              return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
            }
            function encodeCodePoint(codePoint) {
              if ((codePoint & 0xFFFFFF80) == 0) {
                return stringFromCharCode(codePoint);
              }
              var symbol = '';
              if ((codePoint & 0xFFFFF800) == 0) {
                symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
              } else if ((codePoint & 0xFFFF0000) == 0) {
                symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
                symbol += createByte(codePoint, 6);
              } else if ((codePoint & 0xFFE00000) == 0) {
                symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
                symbol += createByte(codePoint, 12);
                symbol += createByte(codePoint, 6);
              }
              symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
              return symbol;
            }
            function utf8encode(string) {
              var codePoints = ucs2decode(string);
              var length = codePoints.length;
              var index = -1;
              var codePoint;
              var byteString = '';
              while (++index < length) {
                codePoint = codePoints[index];
                byteString += encodeCodePoint(codePoint);
              }
              return byteString;
            }
            function readContinuationByte() {
              if (byteIndex >= byteCount) {
                throw Error('Invalid byte index');
              }
              var continuationByte = byteArray[byteIndex] & 0xFF;
              byteIndex++;
              if ((continuationByte & 0xC0) == 0x80) {
                return continuationByte & 0x3F;
              }
              throw Error('Invalid continuation byte');
            }
            function decodeSymbol() {
              var byte1;
              var byte2;
              var byte3;
              var byte4;
              var codePoint;
              if (byteIndex > byteCount) {
                throw Error('Invalid byte index');
              }
              if (byteIndex == byteCount) {
                return false;
              }
              byte1 = byteArray[byteIndex] & 0xFF;
              byteIndex++;
              if ((byte1 & 0x80) == 0) {
                return byte1;
              }
              if ((byte1 & 0xE0) == 0xC0) {
                var byte2 = readContinuationByte();
                codePoint = ((byte1 & 0x1F) << 6) | byte2;
                if (codePoint >= 0x80) {
                  return codePoint;
                } else {
                  throw Error('Invalid continuation byte');
                }
              }
              if ((byte1 & 0xF0) == 0xE0) {
                byte2 = readContinuationByte();
                byte3 = readContinuationByte();
                codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
                if (codePoint >= 0x0800) {
                  return codePoint;
                } else {
                  throw Error('Invalid continuation byte');
                }
              }
              if ((byte1 & 0xF8) == 0xF0) {
                byte2 = readContinuationByte();
                byte3 = readContinuationByte();
                byte4 = readContinuationByte();
                codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) | (byte3 << 0x06) | byte4;
                if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
                  return codePoint;
                }
              }
              throw Error('Invalid UTF-8 detected');
            }
            var byteArray;
            var byteCount;
            var byteIndex;
            function utf8decode(byteString) {
              byteArray = ucs2decode(byteString);
              byteCount = byteArray.length;
              byteIndex = 0;
              var codePoints = [];
              var tmp;
              while ((tmp = decodeSymbol()) !== false) {
                codePoints.push(tmp);
              }
              return ucs2encode(codePoints);
            }
            var utf8 = {
              'version': '2.0.0',
              'encode': utf8encode,
              'decode': utf8decode
            };
            if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
              define(function() {
                return utf8;
              });
            } else if (freeExports && !freeExports.nodeType) {
              if (freeModule) {
                freeModule.exports = utf8;
              } else {
                var object = {};
                var hasOwnProperty = object.hasOwnProperty;
                for (var key in utf8) {
                  hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
                }
              }
            } else {
              root.utf8 = utf8;
            }
          }(this));
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}],
      28: [function(_dereq_, module, exports) {
        (function(global) {
          var rvalidchars = /^[\],:{}\s]*$/;
          var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
          var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
          var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
          var rtrimLeft = /^\s+/;
          var rtrimRight = /\s+$/;
          module.exports = function parsejson(data) {
            if ('string' != typeof data || !data) {
              return null;
            }
            data = data.replace(rtrimLeft, '').replace(rtrimRight, '');
            if (global.JSON && JSON.parse) {
              return JSON.parse(data);
            }
            if (rvalidchars.test(data.replace(rvalidescape, '@').replace(rvalidtokens, ']').replace(rvalidbraces, ''))) {
              return (new Function('return ' + data))();
            }
          };
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}],
      29: [function(_dereq_, module, exports) {
        exports.encode = function(obj) {
          var str = '';
          for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
              if (str.length)
                str += '&';
              str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
            }
          }
          return str;
        };
        exports.decode = function(qs) {
          var qry = {};
          var pairs = qs.split('&');
          for (var i = 0,
              l = pairs.length; i < l; i++) {
            var pair = pairs[i].split('=');
            qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
          }
          return qry;
        };
      }, {}],
      30: [function(_dereq_, module, exports) {
        var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
        module.exports = function parseuri(str) {
          var src = str,
              b = str.indexOf('['),
              e = str.indexOf(']');
          if (b != -1 && e != -1) {
            str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
          }
          var m = re.exec(str || ''),
              uri = {},
              i = 14;
          while (i--) {
            uri[parts[i]] = m[i] || '';
          }
          if (b != -1 && e != -1) {
            uri.source = src;
            uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
            uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
            uri.ipv6uri = true;
          }
          return uri;
        };
      }, {}],
      31: [function(_dereq_, module, exports) {
        var global = (function() {
          return this;
        })();
        var WebSocket = global.WebSocket || global.MozWebSocket;
        module.exports = WebSocket ? ws : null;
        function ws(uri, protocols, opts) {
          var instance;
          if (protocols) {
            instance = new WebSocket(uri, protocols);
          } else {
            instance = new WebSocket(uri);
          }
          return instance;
        }
        if (WebSocket)
          ws.prototype = WebSocket.prototype;
      }, {}],
      32: [function(_dereq_, module, exports) {
        (function(global) {
          var isArray = _dereq_('isarray');
          module.exports = hasBinary;
          function hasBinary(data) {
            function _hasBinary(obj) {
              if (!obj)
                return false;
              if ((global.Buffer && global.Buffer.isBuffer(obj)) || (global.ArrayBuffer && obj instanceof ArrayBuffer) || (global.Blob && obj instanceof Blob) || (global.File && obj instanceof File)) {
                return true;
              }
              if (isArray(obj)) {
                for (var i = 0; i < obj.length; i++) {
                  if (_hasBinary(obj[i])) {
                    return true;
                  }
                }
              } else if (obj && 'object' == typeof obj) {
                if (obj.toJSON) {
                  obj = obj.toJSON();
                }
                for (var key in obj) {
                  if (obj.hasOwnProperty(key) && _hasBinary(obj[key])) {
                    return true;
                  }
                }
              }
              return false;
            }
            return _hasBinary(data);
          }
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {"isarray": 33}],
      33: [function(_dereq_, module, exports) {
        module.exports = Array.isArray || function(arr) {
          return Object.prototype.toString.call(arr) == '[object Array]';
        };
      }, {}],
      34: [function(_dereq_, module, exports) {
        var global = _dereq_('global');
        try {
          module.exports = 'XMLHttpRequest' in global && 'withCredentials' in new global.XMLHttpRequest();
        } catch (err) {
          module.exports = false;
        }
      }, {"global": 35}],
      35: [function(_dereq_, module, exports) {
        module.exports = (function() {
          return this;
        })();
      }, {}],
      36: [function(_dereq_, module, exports) {
        var indexOf = [].indexOf;
        module.exports = function(arr, obj) {
          if (indexOf)
            return arr.indexOf(obj);
          for (var i = 0; i < arr.length; ++i) {
            if (arr[i] === obj)
              return i;
          }
          return -1;
        };
      }, {}],
      37: [function(_dereq_, module, exports) {
        var has = Object.prototype.hasOwnProperty;
        exports.keys = Object.keys || function(obj) {
          var keys = [];
          for (var key in obj) {
            if (has.call(obj, key)) {
              keys.push(key);
            }
          }
          return keys;
        };
        exports.values = function(obj) {
          var vals = [];
          for (var key in obj) {
            if (has.call(obj, key)) {
              vals.push(obj[key]);
            }
          }
          return vals;
        };
        exports.merge = function(a, b) {
          for (var key in b) {
            if (has.call(b, key)) {
              a[key] = b[key];
            }
          }
          return a;
        };
        exports.length = function(obj) {
          return exports.keys(obj).length;
        };
        exports.isEmpty = function(obj) {
          return 0 == exports.length(obj);
        };
      }, {}],
      38: [function(_dereq_, module, exports) {
        var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
        module.exports = function parseuri(str) {
          var m = re.exec(str || ''),
              uri = {},
              i = 14;
          while (i--) {
            uri[parts[i]] = m[i] || '';
          }
          return uri;
        };
      }, {}],
      39: [function(_dereq_, module, exports) {
        (function(global) {
          var isArray = _dereq_('isarray');
          var isBuf = _dereq_('./is-buffer');
          exports.deconstructPacket = function(packet) {
            var buffers = [];
            var packetData = packet.data;
            function _deconstructPacket(data) {
              if (!data)
                return data;
              if (isBuf(data)) {
                var placeholder = {
                  _placeholder: true,
                  num: buffers.length
                };
                buffers.push(data);
                return placeholder;
              } else if (isArray(data)) {
                var newData = new Array(data.length);
                for (var i = 0; i < data.length; i++) {
                  newData[i] = _deconstructPacket(data[i]);
                }
                return newData;
              } else if ('object' == typeof data && !(data instanceof Date)) {
                var newData = {};
                for (var key in data) {
                  newData[key] = _deconstructPacket(data[key]);
                }
                return newData;
              }
              return data;
            }
            var pack = packet;
            pack.data = _deconstructPacket(packetData);
            pack.attachments = buffers.length;
            return {
              packet: pack,
              buffers: buffers
            };
          };
          exports.reconstructPacket = function(packet, buffers) {
            var curPlaceHolder = 0;
            function _reconstructPacket(data) {
              if (data && data._placeholder) {
                var buf = buffers[data.num];
                return buf;
              } else if (isArray(data)) {
                for (var i = 0; i < data.length; i++) {
                  data[i] = _reconstructPacket(data[i]);
                }
                return data;
              } else if (data && 'object' == typeof data) {
                for (var key in data) {
                  data[key] = _reconstructPacket(data[key]);
                }
                return data;
              }
              return data;
            }
            packet.data = _reconstructPacket(packet.data);
            packet.attachments = undefined;
            return packet;
          };
          exports.removeBlobs = function(data, callback) {
            function _removeBlobs(obj, curKey, containingObject) {
              if (!obj)
                return obj;
              if ((global.Blob && obj instanceof Blob) || (global.File && obj instanceof File)) {
                pendingBlobs++;
                var fileReader = new FileReader();
                fileReader.onload = function() {
                  if (containingObject) {
                    containingObject[curKey] = this.result;
                  } else {
                    bloblessData = this.result;
                  }
                  if (!--pendingBlobs) {
                    callback(bloblessData);
                  }
                };
                fileReader.readAsArrayBuffer(obj);
              } else if (isArray(obj)) {
                for (var i = 0; i < obj.length; i++) {
                  _removeBlobs(obj[i], i, obj);
                }
              } else if (obj && 'object' == typeof obj && !isBuf(obj)) {
                for (var key in obj) {
                  _removeBlobs(obj[key], key, obj);
                }
              }
            }
            var pendingBlobs = 0;
            var bloblessData = data;
            _removeBlobs(bloblessData);
            if (!pendingBlobs) {
              callback(bloblessData);
            }
          };
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {
        "./is-buffer": 41,
        "isarray": 42
      }],
      40: [function(_dereq_, module, exports) {
        var debug = _dereq_('debug')('socket.io-parser');
        var json = _dereq_('json3');
        var isArray = _dereq_('isarray');
        var Emitter = _dereq_('component-emitter');
        var binary = _dereq_('./binary');
        var isBuf = _dereq_('./is-buffer');
        exports.protocol = 4;
        exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'BINARY_EVENT', 'ACK', 'BINARY_ACK', 'ERROR'];
        exports.CONNECT = 0;
        exports.DISCONNECT = 1;
        exports.EVENT = 2;
        exports.ACK = 3;
        exports.ERROR = 4;
        exports.BINARY_EVENT = 5;
        exports.BINARY_ACK = 6;
        exports.Encoder = Encoder;
        exports.Decoder = Decoder;
        function Encoder() {}
        Encoder.prototype.encode = function(obj, callback) {
          debug('encoding packet %j', obj);
          if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
            encodeAsBinary(obj, callback);
          } else {
            var encoding = encodeAsString(obj);
            callback([encoding]);
          }
        };
        function encodeAsString(obj) {
          var str = '';
          var nsp = false;
          str += obj.type;
          if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
            str += obj.attachments;
            str += '-';
          }
          if (obj.nsp && '/' != obj.nsp) {
            nsp = true;
            str += obj.nsp;
          }
          if (null != obj.id) {
            if (nsp) {
              str += ',';
              nsp = false;
            }
            str += obj.id;
          }
          if (null != obj.data) {
            if (nsp)
              str += ',';
            str += json.stringify(obj.data);
          }
          debug('encoded %j as %s', obj, str);
          return str;
        }
        function encodeAsBinary(obj, callback) {
          function writeEncoding(bloblessData) {
            var deconstruction = binary.deconstructPacket(bloblessData);
            var pack = encodeAsString(deconstruction.packet);
            var buffers = deconstruction.buffers;
            buffers.unshift(pack);
            callback(buffers);
          }
          binary.removeBlobs(obj, writeEncoding);
        }
        function Decoder() {
          this.reconstructor = null;
        }
        Emitter(Decoder.prototype);
        Decoder.prototype.add = function(obj) {
          var packet;
          if ('string' == typeof obj) {
            packet = decodeString(obj);
            if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) {
              this.reconstructor = new BinaryReconstructor(packet);
              if (this.reconstructor.reconPack.attachments == 0) {
                this.emit('decoded', packet);
              }
            } else {
              this.emit('decoded', packet);
            }
          } else if (isBuf(obj) || obj.base64) {
            if (!this.reconstructor) {
              throw new Error('got binary data when not reconstructing a packet');
            } else {
              packet = this.reconstructor.takeBinaryData(obj);
              if (packet) {
                this.reconstructor = null;
                this.emit('decoded', packet);
              }
            }
          } else {
            throw new Error('Unknown type: ' + obj);
          }
        };
        function decodeString(str) {
          var p = {};
          var i = 0;
          p.type = Number(str.charAt(0));
          if (null == exports.types[p.type])
            return error();
          if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
            p.attachments = '';
            while (str.charAt(++i) != '-') {
              p.attachments += str.charAt(i);
            }
            p.attachments = Number(p.attachments);
          }
          if ('/' == str.charAt(i + 1)) {
            p.nsp = '';
            while (++i) {
              var c = str.charAt(i);
              if (',' == c)
                break;
              p.nsp += c;
              if (i + 1 == str.length)
                break;
            }
          } else {
            p.nsp = '/';
          }
          var next = str.charAt(i + 1);
          if ('' != next && Number(next) == next) {
            p.id = '';
            while (++i) {
              var c = str.charAt(i);
              if (null == c || Number(c) != c) {
                --i;
                break;
              }
              p.id += str.charAt(i);
              if (i + 1 == str.length)
                break;
            }
            p.id = Number(p.id);
          }
          if (str.charAt(++i)) {
            try {
              p.data = json.parse(str.substr(i));
            } catch (e) {
              return error();
            }
          }
          debug('decoded %s as %j', str, p);
          return p;
        }
        Decoder.prototype.destroy = function() {
          if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
          }
        };
        function BinaryReconstructor(packet) {
          this.reconPack = packet;
          this.buffers = [];
        }
        BinaryReconstructor.prototype.takeBinaryData = function(binData) {
          this.buffers.push(binData);
          if (this.buffers.length == this.reconPack.attachments) {
            var packet = binary.reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
          }
          return null;
        };
        BinaryReconstructor.prototype.finishedReconstruction = function() {
          this.reconPack = null;
          this.buffers = [];
        };
        function error(data) {
          return {
            type: exports.ERROR,
            data: 'parser error'
          };
        }
      }, {
        "./binary": 39,
        "./is-buffer": 41,
        "component-emitter": 8,
        "debug": 9,
        "isarray": 42,
        "json3": 43
      }],
      41: [function(_dereq_, module, exports) {
        (function(global) {
          module.exports = isBuf;
          function isBuf(obj) {
            return (global.Buffer && global.Buffer.isBuffer(obj)) || (global.ArrayBuffer && obj instanceof ArrayBuffer);
          }
        }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}],
      42: [function(_dereq_, module, exports) {
        module.exports = _dereq_(33);
      }, {}],
      43: [function(_dereq_, module, exports) {
        ;
        (function(window) {
          var getClass = {}.toString,
              isProperty,
              forEach,
              undef;
          var isLoader = typeof define === "function" && define.amd;
          var nativeJSON = typeof JSON == "object" && JSON;
          var JSON3 = typeof exports == "object" && exports && !exports.nodeType && exports;
          if (JSON3 && nativeJSON) {
            JSON3.stringify = nativeJSON.stringify;
            JSON3.parse = nativeJSON.parse;
          } else {
            JSON3 = window.JSON = nativeJSON || {};
          }
          var isExtended = new Date(-3509827334573292);
          try {
            isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 && isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
          } catch (exception) {}
          function has(name) {
            if (has[name] !== undef) {
              return has[name];
            }
            var isSupported;
            if (name == "bug-string-char-index") {
              isSupported = "a"[0] != "a";
            } else if (name == "json") {
              isSupported = has("json-stringify") && has("json-parse");
            } else {
              var value,
                  serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
              if (name == "json-stringify") {
                var stringify = JSON3.stringify,
                    stringifySupported = typeof stringify == "function" && isExtended;
                if (stringifySupported) {
                  (value = function() {
                    return 1;
                  }).toJSON = value;
                  try {
                    stringifySupported = stringify(0) === "0" && stringify(new Number()) === "0" && stringify(new String()) == '""' && stringify(getClass) === undef && stringify(undef) === undef && stringify() === undef && stringify(value) === "1" && stringify([value]) == "[1]" && stringify([undef]) == "[null]" && stringify(null) == "null" && stringify([undef, getClass, null]) == "[null,null,null]" && stringify({"a": [value, true, false, null, "\x00\b\n\f\r\t"]}) == serialized && stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" && stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' && stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' && stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                  } catch (exception) {
                    stringifySupported = false;
                  }
                }
                isSupported = stringifySupported;
              }
              if (name == "json-parse") {
                var parse = JSON3.parse;
                if (typeof parse == "function") {
                  try {
                    if (parse("0") === 0 && !parse(false)) {
                      value = parse(serialized);
                      var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                      if (parseSupported) {
                        try {
                          parseSupported = !parse('"\t"');
                        } catch (exception) {}
                        if (parseSupported) {
                          try {
                            parseSupported = parse("01") !== 1;
                          } catch (exception) {}
                        }
                        if (parseSupported) {
                          try {
                            parseSupported = parse("1.") !== 1;
                          } catch (exception) {}
                        }
                      }
                    }
                  } catch (exception) {
                    parseSupported = false;
                  }
                }
                isSupported = parseSupported;
              }
            }
            return has[name] = !!isSupported;
          }
          if (!has("json")) {
            var functionClass = "[object Function]";
            var dateClass = "[object Date]";
            var numberClass = "[object Number]";
            var stringClass = "[object String]";
            var arrayClass = "[object Array]";
            var booleanClass = "[object Boolean]";
            var charIndexBuggy = has("bug-string-char-index");
            if (!isExtended) {
              var floor = Math.floor;
              var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
              var getDay = function(year, month) {
                return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
              };
            }
            if (!(isProperty = {}.hasOwnProperty)) {
              isProperty = function(property) {
                var members = {},
                    constructor;
                if ((members.__proto__ = null, members.__proto__ = {"toString": 1}, members).toString != getClass) {
                  isProperty = function(property) {
                    var original = this.__proto__,
                        result = property in (this.__proto__ = null, this);
                    this.__proto__ = original;
                    return result;
                  };
                } else {
                  constructor = members.constructor;
                  isProperty = function(property) {
                    var parent = (this.constructor || constructor).prototype;
                    return property in this && !(property in parent && this[property] === parent[property]);
                  };
                }
                members = null;
                return isProperty.call(this, property);
              };
            }
            var PrimitiveTypes = {
              'boolean': 1,
              'number': 1,
              'string': 1,
              'undefined': 1
            };
            var isHostType = function(object, property) {
              var type = typeof object[property];
              return type == 'object' ? !!object[property] : !PrimitiveTypes[type];
            };
            forEach = function(object, callback) {
              var size = 0,
                  Properties,
                  members,
                  property;
              (Properties = function() {
                this.valueOf = 0;
              }).prototype.valueOf = 0;
              members = new Properties();
              for (property in members) {
                if (isProperty.call(members, property)) {
                  size++;
                }
              }
              Properties = members = null;
              if (!size) {
                members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                forEach = function(object, callback) {
                  var isFunction = getClass.call(object) == functionClass,
                      property,
                      length;
                  var hasProperty = !isFunction && typeof object.constructor != 'function' && isHostType(object, 'hasOwnProperty') ? object.hasOwnProperty : isProperty;
                  for (property in object) {
                    if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                      callback(property);
                    }
                  }
                  for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property))
                    ;
                };
              } else if (size == 2) {
                forEach = function(object, callback) {
                  var members = {},
                      isFunction = getClass.call(object) == functionClass,
                      property;
                  for (property in object) {
                    if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                      callback(property);
                    }
                  }
                };
              } else {
                forEach = function(object, callback) {
                  var isFunction = getClass.call(object) == functionClass,
                      property,
                      isConstructor;
                  for (property in object) {
                    if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                      callback(property);
                    }
                  }
                  if (isConstructor || isProperty.call(object, (property = "constructor"))) {
                    callback(property);
                  }
                };
              }
              return forEach(object, callback);
            };
            if (!has("json-stringify")) {
              var Escapes = {
                92: "\\\\",
                34: '\\"',
                8: "\\b",
                12: "\\f",
                10: "\\n",
                13: "\\r",
                9: "\\t"
              };
              var leadingZeroes = "000000";
              var toPaddedString = function(width, value) {
                return (leadingZeroes + (value || 0)).slice(-width);
              };
              var unicodePrefix = "\\u00";
              var quote = function(value) {
                var result = '"',
                    index = 0,
                    length = value.length,
                    isLarge = length > 10 && charIndexBuggy,
                    symbols;
                if (isLarge) {
                  symbols = value.split("");
                }
                for (; index < length; index++) {
                  var charCode = value.charCodeAt(index);
                  switch (charCode) {
                    case 8:
                    case 9:
                    case 10:
                    case 12:
                    case 13:
                    case 34:
                    case 92:
                      result += Escapes[charCode];
                      break;
                    default:
                      if (charCode < 32) {
                        result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                        break;
                      }
                      result += isLarge ? symbols[index] : charIndexBuggy ? value.charAt(index) : value[index];
                  }
                }
                return result + '"';
              };
              var serialize = function(property, object, callback, properties, whitespace, indentation, stack) {
                var value,
                    className,
                    year,
                    month,
                    date,
                    time,
                    hours,
                    minutes,
                    seconds,
                    milliseconds,
                    results,
                    element,
                    index,
                    length,
                    prefix,
                    result;
                try {
                  value = object[property];
                } catch (exception) {}
                if (typeof value == "object" && value) {
                  className = getClass.call(value);
                  if (className == dateClass && !isProperty.call(value, "toJSON")) {
                    if (value > -1 / 0 && value < 1 / 0) {
                      if (getDay) {
                        date = floor(value / 864e5);
                        for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++)
                          ;
                        for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++)
                          ;
                        date = 1 + date - getDay(year, month);
                        time = (value % 864e5 + 864e5) % 864e5;
                        hours = floor(time / 36e5) % 24;
                        minutes = floor(time / 6e4) % 60;
                        seconds = floor(time / 1e3) % 60;
                        milliseconds = time % 1e3;
                      } else {
                        year = value.getUTCFullYear();
                        month = value.getUTCMonth();
                        date = value.getUTCDate();
                        hours = value.getUTCHours();
                        minutes = value.getUTCMinutes();
                        seconds = value.getUTCSeconds();
                        milliseconds = value.getUTCMilliseconds();
                      }
                      value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + "." + toPaddedString(3, milliseconds) + "Z";
                    } else {
                      value = null;
                    }
                  } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
                    value = value.toJSON(property);
                  }
                }
                if (callback) {
                  value = callback.call(object, property, value);
                }
                if (value === null) {
                  return "null";
                }
                className = getClass.call(value);
                if (className == booleanClass) {
                  return "" + value;
                } else if (className == numberClass) {
                  return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
                } else if (className == stringClass) {
                  return quote("" + value);
                }
                if (typeof value == "object") {
                  for (length = stack.length; length--; ) {
                    if (stack[length] === value) {
                      throw TypeError();
                    }
                  }
                  stack.push(value);
                  results = [];
                  prefix = indentation;
                  indentation += whitespace;
                  if (className == arrayClass) {
                    for (index = 0, length = value.length; index < length; index++) {
                      element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                      results.push(element === undef ? "null" : element);
                    }
                    result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
                  } else {
                    forEach(properties || value, function(property) {
                      var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                      if (element !== undef) {
                        results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                      }
                    });
                    result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
                  }
                  stack.pop();
                  return result;
                }
              };
              JSON3.stringify = function(source, filter, width) {
                var whitespace,
                    callback,
                    properties,
                    className;
                if (typeof filter == "function" || typeof filter == "object" && filter) {
                  if ((className = getClass.call(filter)) == functionClass) {
                    callback = filter;
                  } else if (className == arrayClass) {
                    properties = {};
                    for (var index = 0,
                        length = filter.length,
                        value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1))
                      ;
                  }
                }
                if (width) {
                  if ((className = getClass.call(width)) == numberClass) {
                    if ((width -= width % 1) > 0) {
                      for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ")
                        ;
                    }
                  } else if (className == stringClass) {
                    whitespace = width.length <= 10 ? width : width.slice(0, 10);
                  }
                }
                return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
              };
            }
            if (!has("json-parse")) {
              var fromCharCode = String.fromCharCode;
              var Unescapes = {
                92: "\\",
                34: '"',
                47: "/",
                98: "\b",
                116: "\t",
                110: "\n",
                102: "\f",
                114: "\r"
              };
              var Index,
                  Source;
              var abort = function() {
                Index = Source = null;
                throw SyntaxError();
              };
              var lex = function() {
                var source = Source,
                    length = source.length,
                    value,
                    begin,
                    position,
                    isSigned,
                    charCode;
                while (Index < length) {
                  charCode = source.charCodeAt(Index);
                  switch (charCode) {
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                      Index++;
                      break;
                    case 123:
                    case 125:
                    case 91:
                    case 93:
                    case 58:
                    case 44:
                      value = charIndexBuggy ? source.charAt(Index) : source[Index];
                      Index++;
                      return value;
                    case 34:
                      for (value = "@", Index++; Index < length; ) {
                        charCode = source.charCodeAt(Index);
                        if (charCode < 32) {
                          abort();
                        } else if (charCode == 92) {
                          charCode = source.charCodeAt(++Index);
                          switch (charCode) {
                            case 92:
                            case 34:
                            case 47:
                            case 98:
                            case 116:
                            case 110:
                            case 102:
                            case 114:
                              value += Unescapes[charCode];
                              Index++;
                              break;
                            case 117:
                              begin = ++Index;
                              for (position = Index + 4; Index < position; Index++) {
                                charCode = source.charCodeAt(Index);
                                if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                                  abort();
                                }
                              }
                              value += fromCharCode("0x" + source.slice(begin, Index));
                              break;
                            default:
                              abort();
                          }
                        } else {
                          if (charCode == 34) {
                            break;
                          }
                          charCode = source.charCodeAt(Index);
                          begin = Index;
                          while (charCode >= 32 && charCode != 92 && charCode != 34) {
                            charCode = source.charCodeAt(++Index);
                          }
                          value += source.slice(begin, Index);
                        }
                      }
                      if (source.charCodeAt(Index) == 34) {
                        Index++;
                        return value;
                      }
                      abort();
                    default:
                      begin = Index;
                      if (charCode == 45) {
                        isSigned = true;
                        charCode = source.charCodeAt(++Index);
                      }
                      if (charCode >= 48 && charCode <= 57) {
                        if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                          abort();
                        }
                        isSigned = false;
                        for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++)
                          ;
                        if (source.charCodeAt(Index) == 46) {
                          position = ++Index;
                          for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++)
                            ;
                          if (position == Index) {
                            abort();
                          }
                          Index = position;
                        }
                        charCode = source.charCodeAt(Index);
                        if (charCode == 101 || charCode == 69) {
                          charCode = source.charCodeAt(++Index);
                          if (charCode == 43 || charCode == 45) {
                            Index++;
                          }
                          for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++)
                            ;
                          if (position == Index) {
                            abort();
                          }
                          Index = position;
                        }
                        return +source.slice(begin, Index);
                      }
                      if (isSigned) {
                        abort();
                      }
                      if (source.slice(Index, Index + 4) == "true") {
                        Index += 4;
                        return true;
                      } else if (source.slice(Index, Index + 5) == "false") {
                        Index += 5;
                        return false;
                      } else if (source.slice(Index, Index + 4) == "null") {
                        Index += 4;
                        return null;
                      }
                      abort();
                  }
                }
                return "$";
              };
              var get = function(value) {
                var results,
                    hasMembers;
                if (value == "$") {
                  abort();
                }
                if (typeof value == "string") {
                  if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                    return value.slice(1);
                  }
                  if (value == "[") {
                    results = [];
                    for (; ; hasMembers || (hasMembers = true)) {
                      value = lex();
                      if (value == "]") {
                        break;
                      }
                      if (hasMembers) {
                        if (value == ",") {
                          value = lex();
                          if (value == "]") {
                            abort();
                          }
                        } else {
                          abort();
                        }
                      }
                      if (value == ",") {
                        abort();
                      }
                      results.push(get(value));
                    }
                    return results;
                  } else if (value == "{") {
                    results = {};
                    for (; ; hasMembers || (hasMembers = true)) {
                      value = lex();
                      if (value == "}") {
                        break;
                      }
                      if (hasMembers) {
                        if (value == ",") {
                          value = lex();
                          if (value == "}") {
                            abort();
                          }
                        } else {
                          abort();
                        }
                      }
                      if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                        abort();
                      }
                      results[value.slice(1)] = get(lex());
                    }
                    return results;
                  }
                  abort();
                }
                return value;
              };
              var update = function(source, property, callback) {
                var element = walk(source, property, callback);
                if (element === undef) {
                  delete source[property];
                } else {
                  source[property] = element;
                }
              };
              var walk = function(source, property, callback) {
                var value = source[property],
                    length;
                if (typeof value == "object" && value) {
                  if (getClass.call(value) == arrayClass) {
                    for (length = value.length; length--; ) {
                      update(value, length, callback);
                    }
                  } else {
                    forEach(value, function(property) {
                      update(value, property, callback);
                    });
                  }
                }
                return callback.call(source, property, value);
              };
              JSON3.parse = function(source, callback) {
                var result,
                    value;
                Index = 0;
                Source = "" + source;
                result = get(lex());
                if (lex() != "$") {
                  abort();
                }
                Index = Source = null;
                return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
              };
            }
          }
          if (isLoader) {
            define(function() {
              return JSON3;
            });
          }
        }(this));
      }, {}],
      44: [function(_dereq_, module, exports) {
        module.exports = toArray;
        function toArray(list, index) {
          var array = [];
          index = index || 0;
          for (var i = index || 0; i < list.length; i++) {
            array[i - index] = list[i];
          }
          return array;
        }
      }, {}]
    }, {}, [1])(1);
  });
  })();
System.register("github:angular/bower-angular@1.3.3", ["github:angular/bower-angular@1.3.3/angular.min"], function($__export) {
  "use strict";
  var __moduleName = "github:angular/bower-angular@1.3.3";
  return {
    setters: [function(m) {
      Object.keys(m).forEach(function(p) {
        $__export(p, m[p]);
      });
    }],
    execute: function() {}
  };
});

System.register("rpc:client", ["socket.io-client"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "client/client.js";
  var __dirname = "client";
  module.exports = function ($rootScope, $log, $q) {
  	var nop = function(){};
  	var io = require('socket.io-client');
  	var backends = {};
  	/**
  	 * pseudo constructor, connects to remote server which exposes RPC calls, if trying to connect to a backend, which
  	 * already exists, then existing instance is returned
  	 * @param {String} url to connect to, for example http://localhost:8080
  	 * @param {Object} handshake for global authorization, is passed to socket.io connect method
  	 * returns {Socket} master socket namespace which you can use for looking under the hood
  	 */
  	function RPCBackend(url, handshake) {
  		if (backends[url]) {
  			return backends[url];
  		}
  		var invocationCounter = 0;
  		var endCounter = 0;
  		var serverChannels = {};
  		var clientChannels = {};
  		var deferreds = [];
  		var baseURL;
  		var rpcMaster;
  		var knownTemplates = {};
  
  		var serverRunDate;  // used for invalidating the cache
  		var serverRunDateDeferred = $q.defer();
  		serverRunDateDeferred.promise.then(function (date) {
  			serverRunDate = new Date(date);
  		});
  
  		var callEnded = function (Id) {
  			if (deferreds[Id]) {
  				delete deferreds[Id];
  				endCounter++;
  				rpc.onEnd(endCounter);
  				if (endCounter == invocationCounter) {
  					rpc.onBatchEnd(endCounter);
  					invocationCounter = 0;
  					endCounter = 0;
  				}
  			}else {
  				$log.warn("Deferred Id " + Id + " was resolved/rejected more than once, this should not occur.");
  			}
  		};
  
  		/**
  		 * Generates a 'safe' key for storing cache in client's local storage
  		 * @param name
  		 * @returns {string}
  		 */
  		function getCacheKey(name) {
  			return 'SIORPC:' + baseURL + '/' + name;
  		}
  
  		function cacheIt(key, data) {
  			try{
  				localStorage[key] = JSON.stringify(data);
  			}catch(e){
  				$log.warn("Error raised when writing to local storage: " + e); // probably quota exceeded
  			}
  		}
  
  		var _loadChannel = function (name, deferred) {
  			if (!serverChannels.hasOwnProperty(name)) {
  				serverChannels[name] = {rpcProps: {}};
  			}
  			var channel = serverChannels[name];
  			channel.rpcProps._loadDef = deferred;
  
  			serverRunDateDeferred.promise.then(function () {
  
  				var cacheKey = getCacheKey(name);
  				var cached = localStorage[cacheKey];
  				if (cached) {
  					cached = JSON.parse(cached);
  					if (serverRunDate < new Date(cached.cDate)) {
  						connectToServerChannel(channel, name);
  						registerRemoteFunctions(cached, false); // will register functions from cached manifest
  					} else {
  						//cache has been invalidated
  						delete localStorage[cacheKey];
  						rpcMaster.emit('load channel', {name: name});
  					}
  				} else {
  					rpcMaster.emit('load channel', {name: name});
  				}
  			});
  
  			return channel.rpcProps._loadDef.promise;
  		};
  
  		var registerRemoteFunctions = function (data, storeInCache) {
  			var channel = serverChannels[data.name];
  			var remoteMethodInvocation = function (fnName) {
  				channel[fnName] = function () {
  					invocationCounter++;
  					channel._socket.emit('call',
  						{Id: invocationCounter, fnName: fnName, args: Array.prototype.slice.call(arguments, 0)}
  					);
  					if (invocationCounter == 1) {
  						rpc.onBatchStarts(invocationCounter);
  					}
  					rpc.onCall(invocationCounter);
  					deferreds[invocationCounter] = $q.defer();
  					return deferreds[invocationCounter].promise;
  				};
  			};
  
  			if (data.fnNames) {
  				if (data.tplId) {
  					//store the template
  					knownTemplates[data.tplId] = data.fnNames;
  				}
  				data.fnNames.forEach(remoteMethodInvocation);   //initialize from incoming data
  			} else {
  				knownTemplates[data.tplId].forEach(remoteMethodInvocation); //this has to be initialized from known template
  			}
  
  			channel.rpcProps._loadDef.resolve(channel);
  			channel.rpcProps._connected = true;
  
  			if (storeInCache !== false) {
  				$rootScope.$apply();
  				data.cDate = new Date();    // here we make a note of when the channel cache was saved
  				cacheIt(getCacheKey(data.name), data)
  			}
  
  		};
  
  		/**
  		 *
  		 * @param {Object} channel
  		 * @param {String} name
  		 */
  		var connectToServerChannel = function (channel, name) {
  			if (channel._socket) {
  				$log.info('connect to server channel ignored, because we already have _socket' + name);
  				return; //this was fired upon reconnect, so let's not register any more event subscribers
  			}
  			var reconDfd = $q.defer();
  			var rpcProps = channel.rpcProps;
  
  			channel._socket = io.connect(baseURL + '/rpc/' + name)
  				.on('resolve', function (data) {
  					deferreds[data.Id].resolve(data.value);
  					callEnded(data.Id);
  				})
  				.on('reject', function (data) {
  					if (data && data.Id) {
  						deferreds[data.Id].reject(data.reason);
  						//$log.error("Call " + name + ':' + data.Id + " is rejected, reason ", data.reason);
  
  						callEnded(data.Id);
  					} else {
  						$log.error("Channel: " + name + "Reject response doesn't have id: ", data);
  					}
  				})
  				.on('connectFailed', function (reason) {
  					$log.error('unable to connect to namespace ' + name, reason);
  					rpcProps._loadDef.reject(reason);
  				})
  				.on('disconnect', function (data) {
  					reconDfd = $q.defer();
  					rpcProps._connected = false;
  					rpcProps._loadDef = reconDfd;
  					$log.warn("Server channel " + name + " disconnected.");
  				})
  				.on('reconnect', function () {
  					$log.info('reconnected channel' + name);
  					_loadChannel(name, reconDfd);
  				});
  		};
  
  		var rpc = {
  			loadAllChannels: function () {
  				if (rpcMaster) {
  					rpcMaster.__channelListLoad = $q.defer();
  					rpcMaster.emit('load channelList');
  					rpcMaster
  						.on('channels', function (data) {
  							var name = data.list.pop();
  							while(name) {
  								serverChannels[name] = {};
  								_loadChannel(name);
  								name = data.list.pop();
  							}
  							rpcMaster.__channelListLoad.resolve(serverChannels);
  							$rootScope.$apply();
  
  						});
  					return rpcMaster.__channelListLoad.promise;
  				} else {
  					$log.error("no connection to master");
  				}
  
  			},
  			/**
  			 * for a particular channel this will connect and prepare the channel for use, if called more than once for one
  			 * channel, it will return it's promise
  			 * @param {string} name
  			 * @returns {Promise}
  			 */
  			loadChannel: function (name) {
  				if (serverChannels.hasOwnProperty(name)) {
  					return serverChannels[name].rpcProps._loadDef.promise;
  				} else {
  					var def = $q.defer();
  					_loadChannel(name, def);
  					return def.promise;
  				}
  			},
  			/**
  			 * this will create a channel from predefined array of method names
  			 * channel, it will return it's promise
  			 * @param {string} name
  			 * @param {Array<String>} methods must be provided
  			 * @returns {Object} which mirrors the exported object in the serverside script
  			 */
  			loadChannelSync: function (name, methods) {
  				if (serverChannels.hasOwnProperty(name)) {
  					return serverChannels[name];
  				} else {
  					var chnl = {rpcProps: {_loadDef: $q.defer()}};
            serverChannels[name] = chnl;
  
  					connectToServerChannel(chnl, name);
  					registerRemoteFunctions({fnNames: methods, name: name});
  					return chnl;
  				}
  			},
  			/**
  			 * @param {string} name of the channel
  			 * @param {Object} toExpose object with functions as values
  			 * @returns {Promise} a promise confirming that server is connected and can call the client, throws an error if already exposed
  			 */
  			expose: function (name, toExpose) { //
  				if (clientChannels.hasOwnProperty(name)) {
  					throw new Error('Failed to expose channel, this client channel is already exposed');
  				}
  
  				var channel = {fns: toExpose, deferred: $q.defer()};
  				clientChannels[name] = channel;
  
  				var fnNames = [];
  				for(var fn in toExpose)
  				{
  					if (fn === '_socket') {
  						throw new Error('Failed to expose channel, _socket property is reserved for socket namespace');
  					}
  					fnNames.push(fn);
  				}
  				var expose = function() {
  					rpcMaster.emit('exposeChannel', {name: name, fns: fnNames});
  				};
  
  				if (rpcMaster.connected) {
  					// when no on connect event will be fired, we just expose the channel immediately
  					expose();
  				}
  
  				rpcMaster
  					.on('disconnect', function () {
  						channel.deferred = $q.defer();
  					})
  					.on('connect', expose)
  					.on('reexposeChannels', expose);	//not sure if this will be needed, since simulating socket.io
  				// reconnects is hard, leaving it here for now
  
  				return channel.deferred.promise;
  			},
  			/**
  			 * @param name
  			 * @returns {Object} client channel
  			 */
  			getClientChannel: function(name) {
  				return clientChannels[name];
  			},
  			//These are internal callbacks of socket.io-rpc, use them if you want to implement something like a global loader indicator
  			onBatchStarts: nop, //called when invocation counter equals 1
  			onBatchEnd: nop,    //called when invocation counter equals endCounter
  			onCall: nop,        //called when invocation counter equals endCounter
  			onEnd: nop         //called when one call is returned
  		};
  
  		baseURL = url;
  		rpcMaster = io.connect(url + '/rpc-master', handshake)
  			.on('serverRunDate', function (runDate) {
  				serverRunDateDeferred.resolve(runDate);
  				$rootScope.$apply();
  			})
  			.on('channelFns', function (data, storeInCache) {
  				var name = data.name;
  				var channel = serverChannels[name];
  				connectToServerChannel(channel, name);
  				registerRemoteFunctions(data, storeInCache);
  			})
  			.on('channelDoesNotExist', function (data) {
  
  				var channel = serverChannels[data.name];
  				channel.rpcProps._loadDef.reject();
  				$log.warn("no channel under name: " + data.name);
  				$rootScope.$apply();
  
  			})
  			.on('clientChannelCreated', function (name) {
  
  				var channel = clientChannels[name];
  				var socket = io.connect(baseURL + '/rpcC-' + name + '/' + rpcMaster.io.engine.id);  //rpcC stands for rpc Client
  				channel._socket = socket;
  				socket.on('call', function (data) {
  					var exposed = channel.fns;
  					if (exposed.hasOwnProperty(data.fnName) && typeof exposed[data.fnName] === 'function') {
  
  						var retVal = exposed[data.fnName].apply(this, data.args);
  						if (typeof retVal === 'object' && typeof retVal.then === 'function') {
  							//async - promise must be returned in order to be treated as async
  							retVal.then(function (asyncRetVal) {
  								socket.emit('resolve', { Id: data.Id, value: asyncRetVal });
  							}, function (error) {
  								if (error instanceof Error) {
  									error = error.toString();
  								}
  								socket.emit('reject', { Id: data.Id, reason: error });
  							});
  						} else {
  							//synchronous
  							if (retVal instanceof Error) {
  								socket.emit('reject', { Id: data.Id, reason: retVal.toString() });
  							} else {
  								socket.emit('resolve', { Id: data.Id, value: retVal });
  							}
  						}
  
  					} else {
  						socket.emit('reject', {Id: data.Id, reason: 'no such function has been exposed: ' + data.fnName });
  					}
  				});
  				channel.deferred.resolve(channel);
  
  			});
  		rpc.masterChannel = rpcMaster;
  
  		if (!RPCBackend.defaultBackend) {
  			RPCBackend.defaultBackend = rpc;   //the first rpc connection is the default, if you want, you can set some other
  		}
  
  		backends[url] = rpc;
  		return rpc;	//an instance of backend
  
  	}
  
  	return RPCBackend;	//backend constructor
  };
  global.define = __define;
  return module.exports;
});

System.register("client/socket.io-rpc-client-angular", ["angular","rpc:client"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "client/socket.io-rpc-client-angular.js";
  var __dirname = "client";
  var angular = require('angular');
  /**
   * factory which returns a connect function
   */
  angular.module('RPC', []).factory('$RPC', ['$rootScope', '$log', '$q', require('rpc:client')])
  /**
   * @ngdoc directive
   * @name RPC.directive:rpcController
   * @restrict AC
   *
   * @description
   * Will instantiate angular controller when socket.io-rpc channel is established. This way it is possible to work with
   * it instantly without waiting on promises to resolve inside the controller itself.
   * @param {string} rpcChannel name of the channel to load
   * @param {string=} rpcBackend rpc object on scope
   * @param {string=} rpcAuth function on scope which serves as authorization token getter for this channel
   *
   */
  	.directive('rpcController', ["$controller", "$q", "$RPC", "$log", function($controller, $q, $RPC, $log) {
  		return {
  			scope: true,
  			compile: function compile(tEl, tAttrs) {
  				return {
  					pre: function(scope, iElement, attr, controller) {
  						if (!attr.rpcChannel) {
  							throw new Error("No channel name defined on rpc-controller element: " + iElement[0].outerHTML);
  						}
  						var ctrlName = attr.rpcController;
  						var backend;
  						if (attr.rpcBackend) {
  							backend = scope.$eval(attr.rpcBackend);
  							if (!backend) {
  								throw new Error('Your backend is not on scope');
  							}
  						} else {
  							backend = $RPC.defaultBackend;
  						}
  
  						var instantiate = function(promise) {
  							promise.then(function(channel) {
  								var localInj = {
  									$scope: scope
  								};
  								var chnlName = attr.rpcChannel.substr(attr.rpcChannel.lastIndexOf('/') + 1);
  								localInj[chnlName] = channel;
  								var ctrl = $controller(ctrlName, localInj);
  								iElement.children().data('$ngControllerController', ctrl);
  							}, function(err) {
  								$log.error("Cannot instantiate rpc-controller - channel failed to load");
  								throw err;
  							});
  						};
  
  						var promise = backend.loadChannel(attr.rpcChannel);
  						instantiate(promise);
  
  					}
  				};
  			}
  		}
  
  	}]);
  
  global.define = __define;
  return module.exports;
});
