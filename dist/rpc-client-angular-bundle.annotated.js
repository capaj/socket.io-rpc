"format register";

System.register("github:angular/bower-angular@1.3.1/angular.min", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {  /* */ 
      "format global";
      "exports angular";
      /*
       AngularJS v1.3.1
       (c) 2010-2014 Google, Inc. http://angularjs.org
       License: MIT
      */
      (function(N,U,t){'use strict';function w(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.1/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Qa(b){if(null==b||Ra(b))return!1;var a=b.length;return b.nodeType===
      ka&&a?!0:J(b)||H(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function s(b,a,c){var d,e;if(b)if(A(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(H(b)||Qa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==s)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Cd(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
      b[d[e]],d[e]);return d}function jc(b){return function(a,c){b(c,a)}}function Dd(){return++gb}function kc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function F(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,k=f.length;g<k;g++){var h=f[g];b[h]=e[h]}}kc(b,a);return b}function aa(b){return parseInt(b,10)}function lc(b,a){return F(new (F(function(){},{prototype:b})),a)}function y(){}function Sa(b){return b}function da(b){return function(){return b}}
      function x(b){return"undefined"===typeof b}function z(b){return"undefined"!==typeof b}function P(b){return null!==b&&"object"===typeof b}function J(b){return"string"===typeof b}function X(b){return"number"===typeof b}function ea(b){return"[object Date]"===Ja.call(b)}function A(b){return"function"===typeof b}function hb(b){return"[object RegExp]"===Ja.call(b)}function Ra(b){return b&&b.window===b}function Ta(b){return b&&b.$evalAsync&&b.$watch}function Ua(b){return"boolean"===typeof b}function mc(b){return!(!b||
      !(b.nodeName||b.prop&&b.attr&&b.find))}function Ed(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function pa(b){return S(b.nodeName||b[0].nodeName)}function Va(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ca(b,a,c,d){if(Ra(b)||Ta(b))throw Wa("cpws");if(a){if(b===a)throw Wa("cpi");c=c||[];d=d||[];if(P(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(H(b))for(var f=a.length=0;f<b.length;f++)e=Ca(b[f],null,c,d),P(b[f])&&(c.push(b[f]),
      d.push(e)),a.push(e);else{var g=a.$$hashKey;H(a)?a.length=0:s(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ca(b[f],null,c,d),P(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);kc(a,g)}}else if(a=b)H(b)?a=Ca(b,[],c,d):ea(b)?a=new Date(b.getTime()):hb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):P(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ca(b,e,c,d));return a}function qa(b,a){if(H(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(P(b))for(c in a=
      a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function la(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(H(b)){if(!H(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!la(b[d],a[d]))return!1;return!0}}else{if(ea(b))return ea(a)?la(b.getTime(),a.getTime()):!1;if(hb(b)&&hb(a))return b.toString()==a.toString();if(Ta(b)||Ta(a)||Ra(b)||Ra(a)||H(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&
      !A(b[d])){if(!la(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!A(a[d]))return!1;return!0}return!1}function ib(b,a,c){return b.concat(Xa.call(a,c))}function nc(b,a){var c=2<arguments.length?Xa.call(arguments,2):[];return!A(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Xa.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Fd(b,a){var c=a;"string"===typeof b&&
      "$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ra(a)?c="$WINDOW":a&&U===a?c="$DOCUMENT":Ta(a)&&(c="$SCOPE");return c}function ra(b,a){return"undefined"===typeof b?t:JSON.stringify(b,Fd,a?"  ":null)}function oc(b){return J(b)?JSON.parse(b):b}function sa(b){b=v(b).clone();try{b.empty()}catch(a){}var c=v("<div>").append(b).html();try{return b[0].nodeType===jb?S(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+S(b)})}catch(d){return S(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}
      function qc(b){var a={},c,d;s((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),z(d)&&(b=z(c[1])?pc(c[1]):!0,Hb.call(a,d)?H(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Ib(b){var a=[];s(b,function(b,d){H(b)?s(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}function kb(b){return Da(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,
      "@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Gd(b,a){var c,d,e=lb.length;b=v(b);for(d=0;d<e;++d)if(c=lb[d]+a,J(c=b.attr(c)))return c;return null}function Hd(b,a){var c,d,e={};s(lb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});s(lb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Gd(c,"strict-di"),
      a(c,d?[d]:[],e))}function rc(b,a,c){P(c)||(c={});c=F({strictDi:!1},c);var d=function(){b=v(b);if(b.injector()){var d=b[0]===U?"document":sa(b);throw Wa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Jb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
      d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;N&&e.test(N.name)&&(c.debugInfoEnabled=!0,N.name=N.name.replace(e,""));if(N&&!f.test(N.name))return d();N.name=N.name.replace(f,"");ta.resumeBootstrap=function(b){s(b,function(b){a.push(b)});d()}}function Id(){N.name="NG_ENABLE_DEBUG_INFO!"+N.name;N.location.reload()}function Jd(b){return ta.element(b).injector().get("$$testability")}function Kb(b,a){a=a||"_";return b.replace(Kd,function(b,d){return(d?a:"")+b.toLowerCase()})}
      function Ld(){var b;sc||((ma=N.jQuery)&&ma.fn.on?(v=ma,F(ma.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ma.cleanData,ma.cleanData=function(a){var c;if(Lb)Lb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ma._data(e,"events"))&&c.$destroy&&ma(e).triggerHandler("$destroy");b(a)}):v=Q,ta.element=v,sc=!0)}function Mb(b,a,c){if(!b)throw Wa("areq",a||"?",c||"required");return b}function mb(b,a,c){c&&H(b)&&(b=b[b.length-1]);
      Mb(A(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Wa("badname",a);}function tc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&A(b)?nc(e,b):b}function nb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return v(c)}function wa(){return Object.create(null)}function Md(b){function a(a,b,c){return a[b]||
      (a[b]=c())}var c=w("$injector"),d=w("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||w;return a(b,"module",function(){var b={};return function(f,g,k){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return n}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),n={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide",
      "provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};k&&q(k);return n})}})}function Nd(b){F(b,{bootstrap:rc,copy:Ca,extend:F,equals:la,element:v,forEach:s,injector:Jb,noop:y,bind:nc,toJson:ra,
      fromJson:oc,identity:Sa,isUndefined:x,isDefined:z,isString:J,isFunction:A,isObject:P,isNumber:X,isElement:mc,isArray:H,version:Od,isDate:ea,lowercase:S,uppercase:ob,callbacks:{counter:0},getTestability:Jd,$$minErr:w,$$csp:Ya,reloadWithDebugInfo:Id});Za=Md(N);try{Za("ngLocale")}catch(a){Za("ngLocale",[]).provider("$locale",Pd)}Za("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Qd});a.provider("$compile",uc).directive({a:Rd,input:vc,textarea:vc,form:Sd,script:Td,select:Ud,style:Vd,
      option:Wd,ngBind:Xd,ngBindHtml:Yd,ngBindTemplate:Zd,ngClass:$d,ngClassEven:ae,ngClassOdd:be,ngCloak:ce,ngController:de,ngForm:ee,ngHide:fe,ngIf:ge,ngInclude:he,ngInit:ie,ngNonBindable:je,ngPluralize:ke,ngRepeat:le,ngShow:me,ngStyle:ne,ngSwitch:oe,ngSwitchWhen:pe,ngSwitchDefault:qe,ngOptions:re,ngTransclude:se,ngModel:te,ngList:ue,ngChange:ve,pattern:wc,ngPattern:wc,required:xc,ngRequired:xc,minlength:yc,ngMinlength:yc,maxlength:zc,ngMaxlength:zc,ngValue:we,ngModelOptions:xe}).directive({ngInclude:ye}).directive(pb).directive(Ac);
      a.provider({$anchorScroll:ze,$animate:Ae,$browser:Be,$cacheFactory:Ce,$controller:De,$document:Ee,$exceptionHandler:Fe,$filter:Bc,$interpolate:Ge,$interval:He,$http:Ie,$httpBackend:Je,$location:Ke,$log:Le,$parse:Me,$rootScope:Ne,$q:Oe,$$q:Pe,$sce:Qe,$sceDelegate:Re,$sniffer:Se,$templateCache:Te,$templateRequest:Ue,$$testability:Ve,$timeout:We,$window:Xe,$$rAF:Ye,$$asyncCallback:Ze})}])}function $a(b){return b.replace($e,function(a,b,d,e){return e?d.toUpperCase():d}).replace(af,"Moz$1")}function Cc(b){b=
      b.nodeType;return b===ka||!b||9===b}function Dc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Nb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(bf.exec(b)||["",""])[1].toLowerCase();d=ha[d]||ha._default;c.innerHTML=d[1]+b.replace(cf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=ib(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";s(f,function(a){e.appendChild(a)});return e}function Q(b){if(b instanceof Q)return b;var a;
      J(b)&&(b=T(b),a=!0);if(!(this instanceof Q)){if(a&&"<"!=b.charAt(0))throw Ob("nosel");return new Q(b)}if(a){a=U;var c;b=(c=df.exec(b))?[a.createElement(c[1])]:(c=Dc(b,a))?c.childNodes:[]}Ec(this,b)}function Pb(b){return b.cloneNode(!0)}function qb(b,a){a||rb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)rb(c[d])}function Fc(b,a,c,d){if(z(d))throw Ob("offargs");var e=(d=sb(b))&&d.events,f=d&&d.handle;if(f)if(a)s(a.split(" "),function(a){if(z(c)){var d=e[a];Va(d||
      [],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function rb(b,a){var c=b.ng339,d=c&&tb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Fc(b)),delete tb[c],b.ng339=t))}function sb(b,a){var c=b.ng339,c=c&&tb[c];a&&!c&&(b.ng339=c=++ef,c=tb[c]={events:{},data:{},handle:t});return c}function Qb(b,a,c){if(Cc(b)){var d=z(c),e=!d&&a&&!P(a),f=!a;b=(b=sb(b,!e))&&b.data;if(d)b[a]=
      c;else{if(f)return b;if(e)return b&&b[a];F(b,a)}}}function Rb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Sb(b,a){a&&b.setAttribute&&s(a.split(" "),function(a){b.setAttribute("class",T((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(a)+" "," ")))})}function Tb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");s(a.split(" "),function(a){a=T(a);-1===
      c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",T(c))}}function Ec(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Gc(b,a){return ub(b,"$"+(a||"ngController")+"Controller")}function ub(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=H(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=v.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Hc(b){for(qb(b,
      !0);b.firstChild;)b.removeChild(b.firstChild)}function Ic(b,a){a||qb(b);var c=b.parentNode;c&&c.removeChild(b)}function ff(b,a){a=a||N;if("complete"===a.document.readyState)a.setTimeout(b);else v(a).on("load",b)}function Jc(b,a){var c=vb[a.toLowerCase()];return c&&Kc[pa(b)]&&c}function gf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Lc[a]}function hf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(x(c.immediatePropagationStopped)){var k=
      c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var h=0;h<g;h++)c.isImmediatePropagationStopped()||f[h].call(b,c)}};c.elem=b;return c}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=
      c+":"+(a||Dd)():c+":"+b}function ab(b,a){if(a){var c=0;this.nextUid=function(){return++c}}s(b,this.put,this)}function jf(b){return(b=b.toString().replace(Mc,"").match(Nc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Ub(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw J(c)&&c||(c=b.name||jf(b)),Ea("strictdi",c);a=b.toString().replace(Mc,"");a=a.match(Nc);s(a[1].split(kf),function(a){a.replace(lf,function(a,b,c){d.push(c)})})}b.$inject=d}}else H(b)?
      (a=b.length-1,mb(b[a],"fn"),d=b.slice(0,a)):mb(b,"fn",!0);return d}function Jb(b,a){function c(a){return function(b,c){if(P(b))s(b,jc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(A(b)||H(b))b=q.instantiate(b);if(!b.$get)throw Ea("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=r.invoke(b,this,t,a);if(x(c))throw Ea("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;s(a,function(a){function d(a){var b,c;b=0;for(c=
      a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{J(a)?(c=Za(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):A(a)?b.push(q.invoke(a)):H(a)?b.push(q.invoke(a)):mb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ea("modulerr",a,e.stack||e.message||e);}}});return b}function k(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===h)throw Ea("cdep",
      a+" <- "+l.join(" <- "));return b[a]}try{return l.unshift(a),b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{l.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[];g=Ub(b,a,g);var k,l,n;l=0;for(k=g.length;l<k;l++){n=g[l];if("string"!==typeof n)throw Ea("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n))}H(b)&&(b=b[k]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(H(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,
      c);return P(a)||A(a)?a:d},get:d,annotate:Ub,has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var h={},l=[],m=new ab([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,da(b),!1)}),constant:c(function(a,b){La(a,"constant");p[a]=b;n[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,
      null,{$delegate:a})}}}},q=p.$injector=k(p,function(){throw Ea("unpr",l.join(" <- "));}),n={},r=n.$injector=k(n,function(a){var b=q.get(a+"Provider");return r.invoke(b.$get,b,t,a)});s(g(b),function(a){r.invoke(a||y)});return r}function ze(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===pa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;
      c=g.yOffset;A(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):X(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||ff(function(){d.$evalAsync(g)})});return g}]}function Ze(){this.$get=["$$rAF","$timeout",
      function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function mf(b,a,c,d){function e(a){try{a.apply(null,Xa.call(arguments,1))}finally{if(C--,0===C)for(;D.length;)try{D.pop()()}catch(b){c.error(b)}}}function f(a,b){(function xa(){s(G,function(a){a()});u=b(xa,a)})()}function g(){k();h()}function k(){I=b.history.state;I=x(I)?null:I;la(I,R)&&(I=R);R=I}function h(){if(E!==m.url()||K!==I)E=m.url(),K=I,s(V,function(a){a(m.url(),I)})}function l(a){try{return decodeURIComponent(a)}catch(b){return a}}
      var m=this,p=a[0],q=b.location,n=b.history,r=b.setTimeout,O=b.clearTimeout,B={};m.isMock=!1;var C=0,D=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){C++};m.notifyWhenNoOutstandingRequests=function(a){s(G,function(a){a()});0===C?a():D.push(a)};var G=[],u;m.addPollFn=function(a){x(u)&&f(100,r);G.push(a);return a};var I,K,E=q.href,ca=a.find("base"),M=null;k();K=I;m.url=function(a,c,e){x(e)&&(e=null);q!==b.location&&(q=b.location);n!==b.history&&(n=b.history);if(a){var f=
      K===e;if(E!==a||d.history&&!f){var g=E&&Fa(E)===Fa(a);E=a;K=e;!d.history||g&&f?(g||(M=a),c?q.replace(a):q.href=a):(n[c?"replaceState":"pushState"](e,"",a),k(),K=I);return m}}else return M||q.href.replace(/%27/g,"'")};m.state=function(){return I};var V=[],W=!1,R=null;m.onUrlChange=function(a){if(!W){if(d.history)v(b).on("popstate",g);v(b).on("hashchange",g);W=!0}V.push(a);return a};m.$$checkUrlChange=h;m.baseHref=function(){var a=ca.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};
      var ba={},z="",fa=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===t?p.cookie=encodeURIComponent(a)+"=;path="+fa+";expires=Thu, 01 Jan 1970 00:00:00 GMT":J(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+fa).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==z)for(z=p.cookie,d=z.split("; "),ba={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=l(e.substring(0,g)),ba[a]===
      t&&(ba[a]=l(e.substring(g+1))));return ba}};m.defer=function(a,b){var c;C++;c=r(function(){delete B[c];e(a)},b||0);B[c]=!0;return c};m.defer.cancel=function(a){return B[a]?(delete B[a],O(a),e(y),!0):!1}}function Be(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new mf(b,d,a,c)}]}function Ce(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw w("$cacheFactory")("iid",
      b);var g=0,k=F({},d,{id:b}),h={},l=d&&d.capacity||Number.MAX_VALUE,m={},p=null,q=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!x(b))return a in h||g++,h[a]=b,g>l&&this.remove(q.key),b},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete h[a];g--},removeAll:function(){h={};g=0;m={};p=q=null},destroy:function(){m=
      k=h=null;delete a[b]},info:function(){return F({},k,{size:g})}}}var a={};b.info=function(){var b={};s(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Te(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function uc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};s(a,function(a,e){var f=a.match(c);if(!f)throw ia("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d=
      {},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Ed("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,h=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){La(a,"directive");J(a)?(Mb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];s(d[a],function(d,g){try{var h=b.invoke(d);A(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=
      g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";P(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):s(a,jc(p));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var l=!0;this.debugInfoEnabled=
      function(a){return z(a)?(l=a,this):l};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,r,O,B,C,D,G,u,I){function K(a,b){try{a.addClass(b)}catch(c){}}function E(a,b,c,d,e){a instanceof v||(a=v(a));s(a,function(b,c){b.nodeType==jb&&b.nodeValue.match(/\S+/)&&(a[c]=v(b).wrap("<span></span>").parent()[0])});var f=ca(a,b,a,c,d,e);E.$$addScopeClass(a);var g=null;return function(b,
      c,d,e,h){Mb(b,"scope");g||(g=(h=h&&h[0])?"foreignobject"!==pa(h)&&h.toString().match(/SVG/)?"svg":"html":"html");h="html"!==g?v(N(g,v("<div>").append(a).html())):c?Ka.clone.call(a):a;if(d)for(var k in d)h.data("$"+k+"Controller",d[k].instance);E.$$addScopeInfo(h,b);c&&c(h,b);f&&f(b,h,h,e);return h}}function ca(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,q,n,r,D;if(p)for(D=Array(c.length),q=0;q<h.length;q+=3)f=h[q],D[f]=c[f];else D=c;q=0;for(n=h.length;q<n;)k=D[h[q++]],c=h[q++],f=h[q++],c?(c.scope?
      (l=a.$new(),E.$$addScopeInfo(v(k),l)):l=a,r=c.transcludeOnThisElement?M(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?M(a,b):null,c(f,l,k,d,r)):f&&f(a,k.childNodes,t,e)}for(var h=[],k,l,q,n,p,r=0;r<a.length;r++){k=new X;l=V(a[r],[],k,0===r?d:t,e);(f=l.length?ba(l,a[r],k,b,c,null,[],[],f):null)&&f.scope&&E.$$addScopeClass(k.$$element);k=f&&f.terminal||!(q=a[r].childNodes)||!q.length?null:ca(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:
      b);if(f||k)h.push(r,f,k),n=!0,p=p||f;f=null}return n?g:null}function M(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,f,c,g)}}function V(b,c,g,h,k){var l=g.$attr,q;switch(b.nodeType){case ka:fa(c,ua(pa(b)),"E",h,k);for(var n,r,D,B=b.attributes,O=0,G=B&&B.length;O<G;O++){var I=!1,E=!1;n=B[O];q=n.name;n=T(n.value);r=ua(q);if(D=ya.test(r))q=Kb(r.substr(6),"-");var K=r.replace(/(Start|End)$/,""),u;a:{var C=K;if(d.hasOwnProperty(C)){u=void 0;for(var C=a.get(C+"Directive"),
      s=0,ca=C.length;s<ca;s++)if(u=C[s],u.multiElement){u=!0;break a}}u=!1}u&&r===K+"Start"&&(I=q,E=q.substr(0,q.length-5)+"end",q=q.substr(0,q.length-6));r=ua(q.toLowerCase());l[r]=q;if(D||!g.hasOwnProperty(r))g[r]=n,Jc(b,r)&&(g[r]=!0);Q(b,c,n,r,D);fa(c,r,"A",h,k,I,E)}b=b.className;if(J(b)&&""!==b)for(;q=f.exec(b);)r=ua(q[2]),fa(c,r,"C",h,k)&&(g[r]=T(q[3])),b=b.substr(q.index+q[0].length);break;case jb:Y(c,b.nodeValue);break;case 8:try{if(q=e.exec(b.nodeValue))r=ua(q[1]),fa(c,r,"M",h,k)&&(g[r]=T(q[2]))}catch(V){}}c.sort(w);
      return c}function W(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);a.nodeType==ka&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return v(d)}function R(a,b,c){return function(d,e,f,g,h){e=W(e[0],b,c);return a(d,e,f,g,h)}}function ba(a,d,e,f,g,h,l,r,p){function D(a,b,c,d){if(a){c&&(a=R(a,c,d));a.require=L.require;a.directiveName=ga;if(M===L||L.$$isolateScope)a=Z(a,{isolateScope:!0});l.push(a)}if(b){c&&
      (b=R(b,c,d));b.require=L.require;b.directiveName=ga;if(M===L||L.$$isolateScope)b=Z(b,{isolateScope:!0});r.push(b)}}function I(a,b,c,d){var e,f="data",g=!1,h=c,l;if(J(b)){l=b.match(k);b=b.substring(l[0].length);l[3]&&(l[1]?l[3]=null:l[1]=l[3]);"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",h=c.parent());"?"===l[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||h[f]("$"+b+"Controller");if(!e&&!g)throw ia("ctreq",b,a);return e||null}H(b)&&(e=[],s(b,function(b){e.push(I(a,b,
      c,d))}));return e}function G(a,c,f,g,h){function k(a,b,c){var d;Ta(a)||(c=b,b=a,a=t);F&&(d=u);c||(c=F?V.parent():V);return h(a,b,d,c,Vb)}var n,p,D,K,u,xb,V,R;d===f?(R=e,V=e.$$element):(V=v(f),R=new X(V,e));M&&(K=c.$new(!0));xb=h&&k;C&&(ca={},u={},s(C,function(a){var b={$scope:a===M||a.$$isolateScope?K:c,$element:V,$attrs:R,$transclude:xb};D=a.controller;"@"==D&&(D=R[a.name]);b=B(D,b,!0,a.controllerAs);u[a.name]=b;F||V.data("$"+a.name+"Controller",b.instance);ca[a.name]=b}));if(M){E.$$addScopeInfo(V,
      K,!0,!(ba&&(ba===M||ba===M.$$originalDirective)));E.$$addScopeClass(V,!0);g=ca&&ca[M.name];var W=K;g&&g.identifier&&!0===M.bindToController&&(W=g.instance);s(K.$$isolateBindings=M.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":R.$observe(e,function(a){W[d]=a});R.$$observers[e].$$scope=c;R[e]&&(W[d]=b(R[e])(c));break;case "=":if(f&&!R[e])break;h=O(R[e]);l=h.literal?la:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=W[d]=h(c);throw ia("nonassign",
      R[e],M.name);};g=W[d]=h(c);f=function(a){l(a,W[d])||(l(a,g)?k(c,a=W[d]):W[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(R[e],f):c.$watch(O(R[e],f),null,h.literal);K.$on("$destroy",f);break;case "&":h=O(R[e]),W[d]=function(a){return h(c,a)}}})}ca&&(s(ca,function(a){a()}),ca=null);g=0;for(n=l.length;g<n;g++)p=l[g],$(p,p.isolateScope?K:c,V,R,p.require&&I(p.directiveName,p.require,V,u),xb);var Vb=c;M&&(M.template||null===M.templateUrl)&&(Vb=K);a&&a(Vb,f.childNodes,t,h);for(g=r.length-
      1;0<=g;g--)p=r[g],$(p,p.isolateScope?K:c,V,R,p.require&&I(p.directiveName,p.require,V,u),xb)}p=p||{};for(var K=-Number.MAX_VALUE,u,C=p.controllerDirectives,ca,M=p.newIsolateScopeDirective,ba=p.templateDirective,fa=p.nonTlbTranscludeDirective,y=!1,Na=!1,F=p.hasElementTranscludeDirective,Y=e.$$element=v(d),L,ga,w,Ga=f,S,Q=0,ya=a.length;Q<ya;Q++){L=a[Q];var wb=L.$$start,aa=L.$$end;wb&&(Y=W(d,wb,aa));w=t;if(K>L.priority)break;if(w=L.scope)L.templateUrl||(P(w)?(xa("new/isolated scope",M||u,L,Y),M=L):xa("new/isolated scope",
      M,L,Y)),u=u||L;ga=L.name;!L.templateUrl&&L.controller&&(w=L.controller,C=C||{},xa("'"+ga+"' controller",C[ga],L,Y),C[ga]=L);if(w=L.transclude)y=!0,L.$$tlb||(xa("transclusion",fa,L,Y),fa=L),"element"==w?(F=!0,K=L.priority,w=Y,Y=e.$$element=v(U.createComment(" "+ga+": "+e[ga]+" ")),d=Y[0],yb(g,Xa.call(w,0),d),Ga=E(w,f,K,h&&h.name,{nonTlbTranscludeDirective:fa})):(w=v(Pb(d)).contents(),Y.empty(),Ga=E(w,f));if(L.template)if(Na=!0,xa("template",ba,L,Y),ba=L,w=A(L.template)?L.template(Y,e):L.template,w=
      Pc(w),L.replace){h=L;w=Nb.test(w)?Qc(N(L.templateNamespace,T(w))):[];d=w[0];if(1!=w.length||d.nodeType!==ka)throw ia("tplrt",ga,"");yb(g,Y,d);ya={$attr:{}};w=V(d,[],ya);var nf=a.splice(Q+1,a.length-(Q+1));M&&z(w);a=a.concat(w).concat(nf);Oc(e,ya);ya=a.length}else Y.html(w);if(L.templateUrl)Na=!0,xa("template",ba,L,Y),ba=L,L.replace&&(h=L),G=x(a.splice(Q,a.length-Q),Y,e,g,y&&Ga,l,r,{controllerDirectives:C,newIsolateScopeDirective:M,templateDirective:ba,nonTlbTranscludeDirective:fa}),ya=a.length;else if(L.compile)try{S=
      L.compile(Y,e,Ga),A(S)?D(null,S,wb,aa):S&&D(S.pre,S.post,wb,aa)}catch(da){c(da,sa(Y))}L.terminal&&(G.terminal=!0,K=Math.max(K,L.priority))}G.scope=u&&!0===u.scope;G.transcludeOnThisElement=y;G.elementTranscludeOnThisElement=F;G.templateOnThisElement=Na;G.transclude=Ga;p.hasElementTranscludeDirective=F;return G}function z(a){for(var b=0,c=a.length;b<c;b++)a[b]=lc(a[b],{$$isolateScope:!0})}function fa(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var r=
      0,D=e.length;r<D;r++)try{q=e[r],(g===t||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(k&&(q=lc(q,{$$start:k,$$end:l})),b.push(q),h=q)}catch(B){c(B)}}return h}function Oc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;s(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});s(b,function(b,f){"class"==f?(K(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||
      a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function x(a,b,c,d,e,f,g,h){var k=[],l,q,n=b[0],p=a.shift(),D=F({},p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),B=A(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,O=p.templateNamespace;b.empty();r(G.getTrustedResourceUrl(B)).then(function(r){var G,I;r=Pc(r);if(p.replace){r=Nb.test(r)?Qc(N(O,T(r))):[];G=r[0];if(1!=r.length||G.nodeType!==ka)throw ia("tplrt",p.name,B);r={$attr:{}};yb(d,b,G);var u=V(G,[],r);P(p.scope)&&z(u);a=u.concat(a);
      Oc(c,r)}else G=n,b.html(r);a.unshift(D);l=ba(a,G,c,e,b,p,f,g,h);s(d,function(a,c){a==G&&(d[c]=b[0])});for(q=ca(b[0].childNodes,e);k.length;){r=k.shift();I=k.shift();var E=k.shift(),C=k.shift(),u=b[0];if(!r.$$destroyed){if(I!==n){var R=I.className;h.hasElementTranscludeDirective&&p.replace||(u=Pb(G));yb(E,v(I),u);K(v(u),R)}I=l.transcludeOnThisElement?M(r,l.transclude,C):C;l(q,r,u,d,I)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?(k.push(b),k.push(c),k.push(d),k.push(a)):(l.transcludeOnThisElement&&
      (a=M(b,l.transclude,e)),l(q,b,c,d,a)))}}function w(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function xa(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,sa(d));}function Y(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&E.$$addBindingClass(a);return function(a,c){var e=c.parent();b||E.$$addBindingClass(e);E.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function N(a,
      b){a=S(a||"html");switch(a){case "svg":case "math":var c=U.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Ga(a,b){if("srcdoc"==b)return G.HTML;var c=pa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return G.RESOURCE_URL}function Q(a,c,d,e,f){var k=b(d,!0);if(k){if("multiple"===e&&"select"===pa(a))throw ia("selmulti",sa(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||
      (l.$$observers={});if(h.test(e))throw ia("nodomevents");l[e]&&(k=b(l[e],!0,Ga(a,e),g[e]||f))&&(l[e]=k(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(k,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)}))}}}})}}function yb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,
      d);a=U.createDocumentFragment();a.appendChild(d);v(c).data(v(d).data());ma?(Lb=!0,ma.cleanData([d])):delete v.cache[d[v.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],v(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return F(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,sa(d))}}var X=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};X.prototype=
      {$normalize:ua,$addClass:function(a){a&&0<a.length&&u.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&u.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Rc(a,b);c&&c.length&&u.addClass(this.$$element,c);(c=Rc(b,a))&&c.length&&u.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Jc(f,a),h=gf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Kb(a,"-"));g=pa(this.$$element);
      if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=I(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var q=2*l,g=g+I(T(h[q]),!0),g=g+(" "+T(h[q+1]));h=T(h[2*l]).split(/\s/);g+=I(T(h[0]),!0);2===h.length&&(g+=" "+T(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&s(a[f],function(a){try{a(b)}catch(d){c(d)}})},
      $observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=wa()),e=d[a]||(d[a]=[]);e.push(b);C.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Va(e,b)}}};var Na=b.startSymbol(),ga=b.endSymbol(),Pc="{{"==Na||"}}"==ga?Sa:function(a){return a.replace(/\{\{/g,Na).replace(/}}/g,ga)},ya=/^ngAttr[A-Z]/;E.$$addBindingInfo=l?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:y;E.$$addBindingClass=l?function(a){K(a,"ng-binding")}:
      y;E.$$addScopeInfo=l?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:y;E.$$addScopeClass=l?function(a,b){K(a,b?"ng-isolate-scope":"ng-scope")}:y;return E}]}function ua(b){return $a(b.replace(of,""))}function Rc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],k=0;k<e.length;k++)if(g==e[k])continue a;c+=(0<c.length?" ":"")+g}return c}function Qc(b){b=v(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&pf.call(b,
      a,1);return b}function De(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,"controller");P(a)?F(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!P(a.$scope))throw w("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,k,h,l){var m,p,q;h=!0===h;l&&J(l)&&(q=l);J(g)&&(l=g.match(c),p=l[1],q=q||l[3],g=b.hasOwnProperty(p)?b[p]:tc(k.$scope,p,!0)||(a?tc(e,p,!0):t),mb(g,p,!0));if(h)return h=function(){},
      h.prototype=(H(g)?g[g.length-1]:g).prototype,m=new h,q&&f(k,q,m,p||g.name),F(function(){d.invoke(g,m,k,p);return m},{instance:m,identifier:q});m=d.instantiate(g,k,p);q&&f(k,q,m,p||g.name);return m}}]}function Ee(){this.$get=["$window",function(b){return v(b.document)}]}function Fe(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Wb(b,a){if(J(b)){b=b.replace(qf,"");var c=a("Content-Type");if(c&&0===c.indexOf(Sc)||rf.test(b)&&sf.test(b))b=oc(b)}return b}function Tc(b){var a=
      {},c,d,e;if(!b)return a;s(b.split("\n"),function(b){e=b.indexOf(":");c=S(T(b.substr(0,e)));d=T(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Uc(b){var a=P(b)?b:t;return function(c){a||(a=Tc(b));return c?a[S(c)]||null:a}}function Vc(b,a,c){if(A(c))return c(b,a);s(c,function(c){b=c(b,a)});return b}function Ie(){var b=this.defaults={transformResponse:[Wb],transformRequest:[function(a){return P(a)&&"[object File]"!==Ja.call(a)&&"[object Blob]"!==Ja.call(a)?ra(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
      post:qa(Xb),put:qa(Xb),patch:qa(Xb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return z(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,k,h){function l(a){function c(a){var b=F({},a);b.data=a.data?Vc(a.data,a.headers,d.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:k.reject(b)}var d={method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},
      e=function(a){var c=b.headers,d=F({},a.headers),e,f,c=F({},c.common,c[S(a.method)]);a:for(e in c){a=S(e);for(f in d)if(S(f)===a)continue a;d[e]=c[e]}(function(a){var b;s(a,function(c,d){A(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(d);return d}(a);F(d,a);d.headers=e;d.method=ob(d.method);var f=[function(a){e=a.headers;var d=Vc(a.data,Uc(e),a.transformRequest);x(d)&&s(e,function(a,b){"content-type"===S(b)&&delete e[b]});x(a.withCredentials)&&!x(b.withCredentials)&&(a.withCredentials=b.withCredentials);
      return m(a,d,e).then(c,c)},t],g=k.when(d);for(s(n,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,d)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)});return g};return g}function m(c,f,h){function n(b,c,d,e){function f(){m(c,b,d,e)}K&&(200<=b&&
      300>b?K.put(s,[b,c,Tc(d),e]):K.remove(s));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?u.resolve:u.reject)({data:a,status:b,headers:Uc(d),config:c,statusText:e})}function G(){var a=l.pendingRequests.indexOf(c);-1!==a&&l.pendingRequests.splice(a,1)}var u=k.defer(),I=u.promise,K,E,s=p(c.url,c.params);l.pendingRequests.push(c);I.then(G,G);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(K=P(c.cache)?c.cache:P(b.cache)?b.cache:
      q);if(K)if(E=K.get(s),z(E)){if(E&&A(E.then))return E.then(G,G),E;H(E)?m(E[1],E[0],qa(E[2]),E[3]):m(E,200,{},"OK")}else K.put(s,I);x(E)&&((E=Wc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(h[c.xsrfHeaderName||b.xsrfHeaderName]=E),d(c.method,s,f,n,h,c.timeout,c.withCredentials,c.responseType));return I}function p(a,b){if(!b)return a;var c=[];Cd(b,function(a,b){null===a||x(a)||(H(a)||(a=[a]),s(a,function(a){P(a)&&(a=ea(a)?a.toISOString():ra(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&
      (a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),n=[];s(c,function(a){n.unshift(J(a)?h.get(a):h.invoke(a))});l.pendingRequests=[];(function(a){s(arguments,function(a){l[a]=function(b,c){return l(F(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){s(arguments,function(a){l[a]=function(b,c,d){return l(F(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");l.defaults=b;return l}]}function tf(){return new N.XMLHttpRequest}function Je(){this.$get=["$browser",
      "$window","$document",function(b,a,c){return uf(b,tf,b.defer,a.angular.callbacks,c[0])}]}function uf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,n="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),n=a.type,g="error"===a.type?404:200);c&&c(g,n)};f.addEventListener("load",m,!1);f.addEventListener("error",
      m,!1);e.body.appendChild(f);return m}return function(e,k,h,l,m,p,q,n){function r(){C&&C();D&&D.abort()}function O(a,d,e,f,g){u&&c.cancel(u);C=D=null;a(d,e,f,g);b.$$completeOutstandingRequest(y)}b.$$incOutstandingRequestCount();k=k||b.url();if("jsonp"==S(e)){var B="_"+(d.counter++).toString(36);d[B]=function(a){d[B].data=a;d[B].called=!0};var C=f(k.replace("JSON_CALLBACK","angular.callbacks."+B),B,function(a,b){O(l,a,d[B].data,"",b);d[B]=y})}else{var D=a();D.open(e,k,!0);s(m,function(a,b){z(a)&&D.setRequestHeader(b,
      a)});D.onload=function(){var a=D.statusText||"",b="response"in D?D.response:D.responseText,c=1223===D.status?204:D.status;0===c&&(c=b?200:"file"==za(k).protocol?404:0);O(l,c,b,D.getAllResponseHeaders(),a)};e=function(){O(l,-1,null,null,"")};D.onerror=e;D.onabort=e;q&&(D.withCredentials=!0);if(n)try{D.responseType=n}catch(G){if("json"!==n)throw G;}D.send(h||null)}if(0<p)var u=c(r,p);else p&&A(p.then)&&p.then(r)}}function Ge(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=
      function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,n,r){function O(c){return c.replace(l,b).replace(m,a)}function B(a){try{var b;var c=n?e.getTrusted(n,a):e.valueOf(a);if(null==c)b="";else{switch(typeof c){case "string":break;case "number":c=""+c;break;default:c=ra(c)}b=c}return b}catch(g){a=Yb("interr",f,g.toString()),d(a)}}r=!!r;for(var C,D,G=0,u=[],I=[],K=f.length,E=[],s=[];G<K;)if(-1!=(C=f.indexOf(b,G))&&
      -1!=(D=f.indexOf(a,C+k)))G!==C&&E.push(O(f.substring(G,C))),G=f.substring(C+k,D),u.push(G),I.push(c(G,B)),G=D+h,s.push(E.length),E.push("");else{G!==K&&E.push(O(f.substring(G)));break}if(n&&1<E.length)throw Yb("noconcat",f);if(!g||u.length){var M=function(a){for(var b=0,c=u.length;b<c;b++){if(r&&x(a[b]))return;E[s[b]]=a[b]}return E.join("")};return F(function(a){var b=0,c=u.length,e=Array(c);try{for(;b<c;b++)e[b]=I[b](a);return M(e)}catch(g){a=Yb("interr",f,g.toString()),d(a)}},{exp:f,expressions:u,
      $$watchDelegate:function(a,b,c){var d;return a.$watchGroup(I,function(c,e){var f=M(c);A(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var k=b.length,h=a.length,l=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function He(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,k,h,l){var m=a.setInterval,p=a.clearInterval,q=0,n=z(l)&&!l,r=(n?d:c).defer(),O=r.promise;h=z(h)?h:0;O.then(null,
      null,e);O.$$intervalId=m(function(){r.notify(q++);0<h&&q>=h&&(r.resolve(q),p(O.$$intervalId),delete f[O.$$intervalId]);n||b.$apply()},k);f[O.$$intervalId]=r;return O}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Pd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",
      negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",
      "short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Zb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=kb(b[a]);return b.join("/")}function Xc(b,a,c){b=za(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=aa(b.port)||vf[b.protocol]||null}function Yc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=za(b,c);a.$$path=decodeURIComponent(d&&
      "/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=qc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function va(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Fa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function $b(b){return b.substr(0,Fa(b).lastIndexOf("/")+1)}function ac(b,a){this.$$html5=!0;a=a||"";var c=$b(b);Xc(b,this,b);this.$$parse=function(a){var e=va(c,a);if(!J(e))throw bb("ipthprfx",
      a,c);Yc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Ib(this.$$search),b=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Zb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=va(b,d))!==t?(g=f,g=(f=va(a,f))!==t?c+(va("/",f)||f):b+g):(f=va(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function bc(b,a){var c=$b(b);Xc(b,this,b);this.$$parse=
      function(d){var e=va(b,d)||va(c,d),e="#"==e.charAt(0)?va(a,e):this.$$html5?e:"";if(!J(e))throw bb("ihshprfx",d,a);Yc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Ib(this.$$search),e=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Fa(b)==Fa(a)?(this.$$parse(a),
      !0):!1}}function Zc(b,a){this.$$html5=!0;bc.apply(this,arguments);var c=$b(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Fa(d)?f=d:(g=va(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Ib(this.$$search),e=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function zb(b){return function(){return this[b]}}function $c(b,a){return function(c){if(x(c))return this[b];
      this[b]=a(c);this.$$compose();return this}}function Ke(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return Ua(b)?(a.enabled=b,this):P(b)?(Ua(b.enabled)&&(a.enabled=b.enabled),Ua(b.requireBase)&&(a.requireBase=b.requireBase),Ua(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a,b,c){var e=h.url(),f=h.$$state;
      try{d.url(a,b,c),h.$$state=d.state()}catch(g){throw h.url(e),h.$$state=f,g;}}function k(a,b){c.$broadcast("$locationChangeSuccess",h.absUrl(),a,h.$$state,b)}var h,l;l=d.baseHref();var m=d.url(),p;if(a.enabled){if(!l&&a.requireBase)throw bb("nobase");p=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(l||"/");l=e.history?ac:Zc}else p=Fa(m),l=bc;h=new l(p,"#"+b);h.$$parseLinkUrl(m,m);h.$$state=d.state();var q=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&
      2!=b.which){for(var e=v(b.target);"a"!==pa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");P(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=za(g.animVal).href);q.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!h.$$parseLinkUrl(g,k)||(b.preventDefault(),h.absUrl()!=d.url()&&(c.$apply(),N.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=m&&d.url(h.absUrl(),!0);var n=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=
      h.absUrl(),e=h.$$state;h.$$parse(a);h.$$state=b;c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented?(h.$$parse(d),h.$$state=e,g(d,!1,e)):(n=!1,k(d,e))});c.$$phase||c.$digest()});c.$watch(function(){var a=d.url(),b=d.state(),f=h.$$replace,l=a!==h.absUrl()||h.$$html5&&e.history&&b!==h.$$state;if(n||l)n=!1,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a,h.$$state,b).defaultPrevented?(h.$$parse(a),h.$$state=b):(l&&g(h.absUrl(),f,b===h.$$state?null:h.$$state),k(a,b))});
      h.$$replace=!1});return h}]}function Le(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||y;a=!1;try{a=!!e.apply}catch(h){}return a?function(){var a=[];s(arguments,function(b){a.push(d(b))});return e.apply(b,
      a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function na(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw oa("isecfld",a);return b}function Aa(b,a){if(b){if(b.constructor===b)throw oa("isecfn",a);if(b.window===b)throw oa("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw oa("isecdom",
      a);if(b===Object)throw oa("isecobj",a);}return b}function cc(b){return b.constant}function Oa(b,a,c,d){Aa(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=na(a.shift(),d);var g=Aa(b[e],d);g||(g={},b[e]=g);b=g}e=na(a.shift(),d);Aa(b[e],d);return b[e]=c}function ad(b,a,c,d,e,f){na(b,f);na(a,f);na(c,f);na(d,f);na(e,f);return function(f,k){var h=k&&k.hasOwnProperty(b)?k:f;if(null==h)return h;h=h[b];if(!a)return h;if(null==h)return t;h=h[a];if(!c)return h;if(null==h)return t;h=h[c];if(!d)return h;if(null==
      h)return t;h=h[d];return e?null==h?t:h=h[e]:h}}function bd(b,a,c){var d=cd[b];if(d)return d;var e=b.split("."),f=e.length;if(a.csp)d=6>f?ad(e[0],e[1],e[2],e[3],e[4],c):function(a,b){var d=0,g;do g=ad(e[d++],e[d++],e[d++],e[d++],e[d++],c)(a,b),b=t,a=g;while(d<f);return g};else{var g="";s(e,function(a,b){na(a,c);g+="if(s == null) return undefined;\ns="+(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a+";\n"});g+="return s;";a=new Function("s","l",g);a.toString=da(g);d=a}d.sharedGetter=!0;d.assign=
      function(a,c){return Oa(a,b,c,b)};return cd[b]=d}function dc(b){return A(b.valueOf)?b.valueOf():wf.call(b)}function Me(){var b=wa(),a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==
      b?a===b:"object"===typeof a&&(a=dc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function k(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&dc(b));return h},b,c)}for(var l=[],m=0,p=e.length;m<p;m++)l[m]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&dc(k)}b&&(h=d(a));return h},b,c)}function h(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},
      function(a,c,d){f=a;A(b)&&b.apply(this,arguments);z(a)&&d.$$postDigest(function(){z(f)&&e()})},c)}function l(a,b,c,d){function e(a){var b=!0;s(a,function(a){z(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;A(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){A(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=function(c,d){var e=
      a(c,d),f=b(e,c,d);return z(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==k?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=k,c.inputs=[a]);return c}a.csp=d.csp;return function(d,f){var g,O,B;switch(typeof d){case "string":return B=d=d.trim(),g=b[B],g||(":"===d.charAt(0)&&":"===d.charAt(1)&&(O=!0,d=d.substring(2)),g=new ec(a),g=(new cb(g,c,a)).parse(d),g.constant?g.$$watchDelegate=m:O?(g=e(g),g.$$watchDelegate=g.literal?l:h):g.inputs&&(g.$$watchDelegate=k),b[B]=g),p(g,f);case "function":return p(d,
      f);default:return p(y,f)}}}]}function Oe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return dd(function(a){b.$evalAsync(a)},a)}]}function Pe(){this.$get=["$browser","$exceptionHandler",function(b,a){return dd(function(a){b.defer(a)},a)}]}function dd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&
      (c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{A(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var k=w("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
      [];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(k("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(P(b)||A(b))d=b&&b.then;A(d)?(this.promise.$$state.status=
      -1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(A(b)?
      b(c):c)}catch(h){a(h)}}})}};var h=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{A(c)&&(d=c())}catch(e){return h(e,!1)}return d&&A(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function n(a){if(!A(a))throw k("norslvr",a);if(!(this instanceof n))return new n(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
      p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=m;p.all=function(a){var b=new g,c=0,d=H(a)?[]:{};s(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function Ye(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||
      b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Ne(){var b=10,a=w("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,k){function h(){this.$id=++gb;this.$$phase=this.$parent=this.$$watchers=
      this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function l(b){if(r.$$phase)throw a("inprog",r.$$phase);r.$$phase=b}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function q(){for(;C.length;)try{C.shift()()}catch(a){f(a)}d=null}function n(){null===d&&(d=k.defer(function(){r.$apply(q)}))}
      h.prototype={constructor:h,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new h,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++gb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=
      b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;A(b)||(h.fn=y);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Va(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=
      !1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});s(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(P(e))if(Qa(e))for(f!==p&&(f=p,r=f.length=0,l++),a=e.length,r!==a&&(l++,f.length=r=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==q&&(f=q={},r=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&
      (a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(r++,f[b]=g,l++));if(r>a)for(b in l++,f)e.hasOwnProperty(b)||(r--,delete f[b])}else f!==e&&(f=e,l++);return l}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),p=[],q={},n=!0,r=0;return this.$watch(m,function(){n?(n=!1,b(e,e,d)):b(e,h,d);if(k)if(P(e))if(Qa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)Hb.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,h,m,n,s,C=b,M,t=[],W,R,z;
      l("$digest");k.$$checkUrlChange();this===r&&null!==d&&(k.defer.cancel(d),q());c=null;do{s=!1;for(M=this;O.length;){try{z=O.shift(),z.scope.$eval(z.expression)}catch(w){f(w)}c=null}a:do{if(m=M.$$watchers)for(n=m.length;n--;)try{if(e=m[n])if((g=e.get(M))!==(h=e.last)&&!(e.eq?la(g,h):"number"===typeof g&&"number"===typeof h&&isNaN(g)&&isNaN(h)))s=!0,c=e,e.last=e.eq?Ca(g,null):g,e.fn(g,h===p?g:h,M),5>C&&(W=4-C,t[W]||(t[W]=[]),R=A(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,R+="; newVal: "+ra(g)+
      "; oldVal: "+ra(h),t[W].push(R));else if(e===c){s=!1;break a}}catch(v){f(v)}if(!(m=M.$$childHead||M!==this&&M.$$nextSibling))for(;M!==this&&!(m=M.$$nextSibling);)M=M.$parent}while(M=m);if((s||O.length)&&!C--)throw r.$$phase=null,a("infdig",b,ra(t));}while(s||O.length);for(r.$$phase=null;B.length;)try{B.shift()()}catch(y){f(y)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==r){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],
      b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=y;this.$on=this.$watch=this.$watchGroup=function(){return y};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
      this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){r.$$phase||O.length||k.defer(function(){O.length&&r.$digest()});O.push({scope:this,expression:a})},$$postDigest:function(a){B.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){f(b)}finally{r.$$phase=null;try{r.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&C.push(b);n()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=
      c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ib([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(p){f(p)}else d.splice(l,
      1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ib([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&
      c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var r=new h,O=r.$$asyncQueue=[],B=r.$$postDigestQueue=[],C=r.$$applyAsyncQueue=[];return r}]}function Qd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=za(c).href;
      return""===f||f.match(e)?c:"unsafe:"+f}}}function xf(b){if("self"===b)return b;if(J(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=ed(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(hb(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function fd(b){var a=[];z(b)&&s(b,function(b){a.push(xf(b))});return a}function Re(){this.SCE_CONTEXTS=ja;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=fd(a));return b};this.resourceUrlBlacklist=
      function(b){arguments.length&&(a=fd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Wc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),k={};k[ja.HTML]=
      e(g);k[ja.CSS]=e(g);k[ja.URL]=e(g);k[ja.JS]=e(g);k[ja.RESOURCE_URL]=e(k[ja.URL]);return{trustAs:function(a,b){var c=k.hasOwnProperty(a)?k[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=k.hasOwnProperty(c)?k[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ja.RESOURCE_URL){var g=za(e.toString()),p,q,n=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],
      g)){n=!0;break}if(n)for(p=0,q=a.length;p<q;p++)if(d(a[p],g)){n=!1;break}if(n)return e;throw Ba("insecurl",e.toString());}if(c===ja.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Qe(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Ha)throw Ba("iequirks");var d=qa(ja);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=
      c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=Sa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;s(ja,function(a,b){var c=S(b);d[$a("parse_as_"+c)]=function(b){return e(a,b)};d[$a("get_trusted_"+c)]=function(b){return f(a,b)};d[$a("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Se(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(S((b.navigator||
      {}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,k=/^(Moz|webkit|ms)(?=[A-Z])/,h=f.body&&f.body.style,l=!1,m=!1;if(h){for(var p in h)if(l=k.exec(p)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||g+"Transition"in h);m=!!("animation"in h||g+"Animation"in h);!d||l&&m||(l=J(f.body.style.webkitTransition),m=J(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"==
      a&&9==Ha)return!1;if(x(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Ya(),vendorPrefix:g,transitions:l,animations:m,android:d}}]}function Ue(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;if(H(g))for(var k=g,g=[],h=0;h<k.length;++h){var l=k[h];l!==Wb&&g.push(l)}else g===Wb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).then(function(a){a=a.data;d.totalPendingRequests--;
      b.put(e,a);return a},function(){d.totalPendingRequests--;if(!f)throw ia("tpload",e);return c.reject()})}d.totalPendingRequests=0;return d}]}function Ve(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];s(a,function(a){var d=ta.element(a).data("$binding");d&&s(d,function(d){c?(new RegExp("(^|\\s)"+ed(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,
      b,c){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(c?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function We(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,h,l){var m=z(l)&&!l,p=(m?d:c).defer(),q=p.promise;h=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),
      e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},h);q.$$timeoutId=h;g[h]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function za(b,a){var c=b;Ha&&(Z.setAttribute("href",c),c=Z.href);Z.setAttribute("href",c);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,
      ""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Wc(b){b=J(b)?za(b):b;return b.protocol===gd.protocol&&b.host===gd.host}function Xe(){this.$get=da(N)}function Bc(b){function a(c,d){if(P(c)){var e={};s(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",hd);a("date",id);a("filter",yf);a("json",zf);a("limitTo",
      Af);a("lowercase",Bf);a("number",jd);a("orderBy",kd);a("uppercase",Cf)}function yf(){return function(b,a,c){if(!H(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return ta.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Hb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});
      var f=function(a,b){if("string"===typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==
      typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var k=b[g];e.check(k,g)&&d.push(k)}return d}}function hd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){x(d)&&(d=a.CURRENCY_SYM);x(e)&&(e=2);return null==b?b:ld(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:ld(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,
      d)}}function ld(b,a,c,d,e){if(!isFinite(b)||P(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",k="",h=[],l=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?(g="0",b=0):(k=g,l=!0)}if(l)0<e&&-1<b&&1>b&&(k=b.toFixed(e));else{g=(g.split(md)[1]||"").length;x(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(md);g=b[0];b=b[1]||"";var m=0,p=a.lgSize,q=a.gSize;if(g.length>=p+q)for(m=g.length-
      p,l=0;l<m;l++)0===(m-l)%q&&0!==l&&(k+=c),k+=g.charAt(l);for(l=m;l<g.length;l++)0===(g.length-l)%p&&0!==l&&(k+=c),k+=g.charAt(l);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,e))}h.push(f?a.negPre:a.posPre);h.push(k);h.push(f?a.negSuf:a.posSuf);return h.join("")}function Ab(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ab(e,a,d)}}
      function Bb(b,a){return function(c,d){var e=c["get"+b](),f=ob(a?"SHORT"+b:b);return d[f][e]}}function nd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function od(b){return function(a){var c=nd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Ab(a,b)}}function id(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&
      (f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));k.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;k=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",k=[],h,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;J(c)&&(c=Df.test(c)?aa(c):a(c));X(c)&&(c=new Date(c));if(!ea(c))return c;for(;e;)(l=Ef.exec(e))?(k=ib(k,l,1),e=k.pop()):
      (k.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));s(k,function(a){h=Ff[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function zf(){return function(b){return ra(b,!0)}}function Af(){return function(b,a){X(b)&&(b=b.toString());if(!H(b)&&!J(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):aa(a);if(J(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&
      (a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function kd(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ea(a)&&ea(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Qa(a))return a;c=H(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||Sa;if(J(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c=
      "-"==a.charAt(0),a=a.substring(1);if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],k=0;k<a.length;k++)g.push(a[k]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){A(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}function pd(b,a,c,d,e){var f=this,g=[],k=f.$$parentForm=b.parent().controller("form")||
      Cb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;k.$addControl(f);f.$rollbackViewValue=function(){s(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){s(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&
      f[a.$name]===a&&delete f[a.$name];s(f.$pending,function(b,c){f.$setValidity(c,null,a)});s(f.$error,function(b,c){f.$setValidity(c,null,a)});Va(g,a)};qd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Va(d,c),0===d.length&&delete a[b])},parentForm:k,$animate:d});f.$setDirty=function(){d.removeClass(b,Pa);d.addClass(b,Db);f.$dirty=!0;f.$pristine=!1;k.$setDirty()};f.$setPristine=function(){d.setClass(b,Pa,Db+" ng-submitted");
      f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;s(g,function(a){a.$setPristine()})};f.$setUntouched=function(){s(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;k.$setSubmitted()}}function fc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function db(b,a,c,d,e,f){var g=a[0].placeholder,k={},h=S(a[0].type);if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;m()})}var m=
      function(b){if(!l){var e=a.val(),f=b&&b.type;Ha&&"input"===(b||k).type&&a[0].placeholder!==g?g=a[0].placeholder:("password"===h||c.ngTrim&&"false"===c.ngTrim||(e=T(e)),(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,f))}};if(e.hasEvent("input"))a.on("input",m);else{var p,q=function(a){p||(p=f.defer(function(){m(a);p=null}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||q(a)});if(e.hasEvent("paste"))a.on("paste cut",q)}a.on("change",m);d.$render=
      function(){a.val(d.$isEmpty(d.$modelValue)?"":d.$viewValue)}}function Eb(b,a){return function(c,d){var e,f;if(ea(c))return c;if(J(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Gf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},s(e,function(b,c){c<a.length&&
      (f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function eb(b,a,c,d){return function(e,f,g,k,h,l,m){function p(a){return z(a)?ea(a)?a:c(a):t}rd(e,f,g,k);db(e,f,g,k,h,l);var q=k&&k.$options&&k.$options.timezone,n;k.$$parserName=b;k.$parsers.push(function(b){return k.$isEmpty(b)?null:a.test(b)?(b=c(b,n),"UTC"===q&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});k.$formatters.push(function(a){if(k.$isEmpty(a))n=null;else{if(!ea(a))throw Fb("datefmt",a);
      if((n=a)&&"UTC"===q){var b=6E4*n.getTimezoneOffset();n=new Date(n.getTime()+b)}return m("date")(a,d,q)}return""});if(z(g.min)||g.ngMin){var r;k.$validators.min=function(a){return k.$isEmpty(a)||x(r)||c(a)>=r};g.$observe("min",function(a){r=p(a);k.$validate()})}if(z(g.max)||g.ngMax){var s;k.$validators.max=function(a){return k.$isEmpty(a)||x(s)||c(a)<=s};g.$observe("max",function(a){s=p(a);k.$validate()})}k.$isEmpty=function(a){return!a||a.getTime&&a.getTime()!==a.getTime()}}}function rd(b,a,c,d){(d.$$hasNativeValidators=
      P(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function sd(b,a,c,d,e){if(z(d)){b=b(d);if(!b.constant)throw w("ngModel")("constexpr",c,d);return b(a)}return e}function qd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Kb(b,"-"):"";a(fb+b,!0===c);a(td+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,k=b.unset,h=b.parentForm,l=b.$animate;f[td]=!(f[fb]=e.hasClass(fb));
      d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&k(d.$pending,b,f),ud(d.$pending)&&(d.$pending=t));Ua(e)?e?(k(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),k(d.$$success,b,f)):(k(d.$error,b,f),k(d.$$success,b,f));d.$pending?(a(vd,!0),d.$valid=d.$invalid=t,c("",null)):(a(vd,!1),d.$valid=ud(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);h.$setValidity(b,e,d)}}function ud(b){if(b)for(var a in b)return!1;
      return!0}function gc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!H(a)){if(J(a))return a.split(" ");if(P(a)){var b=[];s(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,k){function h(a,b){var c=g.data("$classCounts")||{},d=[];s(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});
      g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===a||f.$index%2===a){var l=e(b||[]);if(!m){var n=h(l,1);k.$addClass(n)}else if(!la(b,m)){var r=e(m),n=d(l,r),l=d(r,l),n=h(n,1),l=h(l,-1);n&&n.length&&c.addClass(g,n);l&&l.length&&c.removeClass(g,l)}}m=qa(b)}var m;f.$watch(k[b],l,!0);k.$observe("class",function(a){l(f.$eval(k[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(k[b]));g===a?(g=h(l,1),k.$addClass(g)):(g=h(l,-1),k.$removeClass(g))}})}}}]}
      var Hf=/^\/(.+)\/([a-z]*)$/,S=function(b){return J(b)?b.toLowerCase():b},Hb=Object.prototype.hasOwnProperty,ob=function(b){return J(b)?b.toUpperCase():b},Ha,v,ma,Xa=[].slice,pf=[].splice,If=[].push,Ja=Object.prototype.toString,Wa=w("ng"),ta=N.angular||(N.angular={}),Za,gb=0;Ha=U.documentMode;y.$inject=[];Sa.$inject=[];var H=Array.isArray,T=function(b){return J(b)?b.trim():b},ed=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ya=function(){if(z(Ya.isActive_))return Ya.isActive_;
      var b=!(!U.querySelector("[ng-csp]")&&!U.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Ya.isActive_=b},lb=["ng-","data-ng-","ng:","x-ng-"],Kd=/[A-Z]/g,sc=!1,Lb,ka=1,jb=3,Od={full:"1.3.1",major:1,minor:3,dot:1,codeName:"spectral-lobster"};Q.expando="ng339";var tb=Q.cache={},ef=1;Q._data=function(b){return this.cache[b[this.expando]]||{}};var $e=/([\:\-\_]+(.))/g,af=/^moz([A-Z])/,Jf={mouseleave:"mouseout",mouseenter:"mouseover"},Ob=w("jqLite"),df=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      Nb=/<|&#?\w+;/,bf=/<([\w:]+)/,cf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var Ka=Q.prototype={ready:function(b){function a(){c||(c=
      !0,b())}var c=!1;"complete"===U.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),Q(N).on("load",a))},toString:function(){var b=[];s(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?v(this[b]):v(this[this.length+b])},length:0,push:If,sort:[].sort,splice:[].splice},vb={};s("multiple selected checked disabled readOnly required open".split(" "),function(b){vb[S(b)]=b});var Kc={};s("input select option textarea button form details".split(" "),function(b){Kc[b]=
      !0});var Lc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};s({data:Qb,removeData:rb},function(b,a){Q[a]=b});s({data:Qb,inheritedData:ub,scope:function(b){return v.data(b,"$scope")||ub(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return v.data(b,"$isolateScope")||v.data(b,"$isolateScopeNoTemplate")},controller:Gc,injector:function(b){return ub(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Rb,css:function(b,
      a,c){a=$a(a);if(z(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=S(a);if(vb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||y).specified?d:t;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(x(b)){var d=a.nodeType;return d===ka||d===jb?a.textContent:""}a.textContent=b}
      b.$dv="";return b}(),val:function(b,a){if(x(a)){if(b.multiple&&"select"===pa(b)){var c=[];s(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(x(a))return b.innerHTML;qb(b,!0);b.innerHTML=a},empty:Hc},function(b,a){Q.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Hc&&(2==b.length&&b!==Rb&&b!==Gc?a:d)===t){if(P(a)){for(e=0;e<g;e++)if(b===Qb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;
      g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var k=b(this[f],a,d);e=e?e+k:k}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});s({removeData:rb,on:function a(c,d,e,f){if(z(f))throw Ob("onargs");if(Cc(c)){var g=sb(c,!0);f=g.events;var k=g.handle;k||(k=g.handle=hf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],h=g.length;h--;){d=g[h];var l=f[d];l||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Jf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||k(a,d)}):"$destroy"!==d&&c.addEventListener(d,
      k,!1),l=f[d]);l.push(e)}}},off:Fc,one:function(a,c,d){a=v(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;qb(a);s(new Q(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];s(a.childNodes,function(a){a.nodeType===ka&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===ka||11===d){c=new Q(c);for(var d=0,e=c.length;d<
      e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===ka){var d=a.firstChild;s(new Q(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=v(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Ic,detach:function(a){Ic(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new Q(c);for(var f=0,g=c.length;f<g;f++){var k=c[f];e.insertBefore(k,d.nextSibling);d=k}},addClass:Tb,removeClass:Sb,toggleClass:function(a,c,d){c&&s(c.split(" "),function(c){var f=
      d;x(f)&&(f=!Rb(a,c));(f?Tb:Sb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Pb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,k=sb(a);if(k=(k=k&&k.events)&&k[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
      !0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:y,type:g,target:a},c.type&&(e=F(e,c)),c=qa(k),f=d?[e].concat(d):[e],s(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){Q.prototype[c]=function(c,e,f){for(var g,k=0,h=this.length;k<h;k++)x(g)?(g=a(this[k],c,e,f),z(g)&&(g=v(g))):Ec(g,a(this[k],c,e,f));return z(g)?g:this};Q.prototype.bind=Q.prototype.on;Q.prototype.unbind=Q.prototype.off});ab.prototype={put:function(a,
      c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];return c}};var Nc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,kf=/,/,lf=/^\s*(_?)(\S+?)\1\s*$/,Mc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ea=w("$injector");Jb.$$annotate=Ub;var Kf=w("$animate"),Ae=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Kf("notcsel",c);this.$$selectors[c.substr(1)]=e;
      a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=wa();s((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});s(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):
      !0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function k(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function h(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function l(a,c){if(ta.isObject(c)){var d=F(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){l(a,{from:c,to:d});return h()},enter:function(a,c,d,e){l(a,e);d?d.after(a):c.prepend(a);return h()},leave:function(a,c){a.remove();return h()},move:function(a,c,d,e){return this.enter(a,
      c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=v(a);c=J(c)?c:H(c)?c.join(" "):"";s(a,function(a){Tb(a,c)});l(a,d);return h()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=v(a);c=J(c)?c:H(c)?c.join(" "):"";s(a,function(a){Sb(a,c)});l(a,d);return h()},setClass:function(a,c,d,e){var h=this,l=!1;a=v(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ta.extend(m.options||{},e)):
      (m={classes:{},options:e},l=!0);e=m.classes;c=H(c)?c:c.split(" ");d=H(d)?d:d.split(" ");k(e,c,!0);k(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&h.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);l(a,e);return h()},enabled:y,cancel:y}}]}],ia=w("$compile");
      uc.$inject=["$provide","$$sanitizeUriProvider"];var of=/^((?:x|data)[\:\-_])/i,Sc="application/json",Xb={"Content-Type":Sc+";charset=utf-8"},rf=/^\s*(\[|\{[^\{])/,sf=/[\}\]]\s*$/,qf=/^\)\]\}',?\n/,Yb=w("$interpolate"),Lf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,vf={http:80,https:443,ftp:21},bb=w("$location"),Mf={$$html5:!1,$$replace:!1,absUrl:zb("$$absUrl"),url:function(a){if(x(a))return this.$$url;a=Lf.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||
      "");return this},protocol:zb("$$protocol"),host:zb("$$host"),port:zb("$$port"),path:$c("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(J(a)||X(a))a=a.toString(),this.$$search=qc(a);else if(P(a))a=Ca(a,{}),s(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw bb("isrcharg");break;default:x(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},
      hash:$c("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};s([Zc,bc,ac],function(a){a.prototype=Object.create(Mf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==ac||!this.$$html5)throw bb("nostate");this.$$state=x(c)?null:c;return this}});var oa=w("$parse"),Nf=Function.prototype.call,Of=Function.prototype.apply,Pf=Function.prototype.bind,Gb=wa();s({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},
      undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;Gb[c]=a});Gb["this"]=function(a){return a};Gb["this"].sharedGetter=!0;var hc=F(wa(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return z(d)?z(e)?d+e:d:z(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(z(d)?d:0)-(z(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,
      c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Qf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},
      ec=function(a){this.options=a};ec.prototype={constructor:ec,lex:function(a){this.text=a;this.index=0;this.ch=t;for(this.tokens=[];this.index<this.text.length;)if(this.ch=this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;
      else{a=this.ch+this.peek();var c=a+this.peek(2),d=hc[this.ch],e=hc[a],f=hc[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+
      a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw oa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=
      S(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this.text,c="",d=this.index,e,f,g,k;this.index<
      this.text.length;){k=this.text.charAt(this.index);if("."===k||this.isIdent(k)||this.isNumber(k))"."===k&&(e=this.index),c+=k;else break;this.index++}e&&"."===c[c.length-1]&&(this.index--,c=c.slice(0,-1),e=c.lastIndexOf("."),-1===e&&(e=t));if(e)for(f=this.index;f<this.text.length;){k=this.text.charAt(f);if("("===k){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(k))f++;else break}this.tokens.push({index:d,text:c,fn:Gb[c]||bd(c,this.options,a)});g&&(this.tokens.push({index:e,
      text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Qf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,
      fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var cb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};cb.ZERO=F(function(){return 0},{sharedGetter:!0,constant:!0});cb.prototype={constructor:cb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=
      this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw oa("syntax",
      c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw oa("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,
      c){return F(function(d,e){return a(d,e,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){return F(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=
      this.filter(a);return a},filter:function(a){var c=this.expect(),d=this.$filter(c.text),e,f;if(this.peek(":"))for(e=[],f=[];this.expect(":");)e.push(this.expression());c=[a].concat(e||[]);return F(function(c,k){var h=a(c,k);if(f){f[0]=h;for(h=e.length;h--;)f[h+1]=e[h](c,k);return d.apply(t,f)}return d(h)},{constant:!d.$stateful&&c.every(cc),inputs:!d.$stateful&&c})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||
      this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),F(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c,d;if(d=this.expect("?")){c=this.assignment();if(d=this.expect(":")){var e=this.assignment();return F(function(d,g){return a(d,g)?c(d,g):e(d,g)},{constant:a.constant&&c.constant&&e.constant})}this.throwError("expected :",d)}return a},logicalOR:function(){for(var a=this.logicalAND(),
      c;c=this.expect("||");)a=this.binaryFn(a,c.fn,this.logicalAND(),!0);return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND(),!0);return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=
      this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(cb.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.expect().text,e=bd(d,this.options,
      c);return F(function(c,d,k){return e(k||a(c,d))},{assign:function(e,g,k){(k=a(e,k))||a.assign(e,k={});return Oa(k,d,g,c)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return F(function(e,f){var g=a(e,f),k=d(e,f);na(k,c);return g?Aa(g[k],c):t},{assign:function(e,f,g){var k=na(d(e,g),c);(g=Aa(a(e,g),c))||a.assign(e,g={});return g[k]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");
      var e=this.text,f=d.length?[]:null;return function(g,k){var h=c?c(g,k):g,l=a(g,k,h)||y;if(f)for(var m=d.length;m--;)f[m]=Aa(d[m](g,k),e);Aa(h,e);if(l){if(l.constructor===l)throw oa("isecfn",e);if(l===Nf||l===Of||l===Pf)throw oa("isecff",e);}h=l.apply?l.apply(h,f):l(f[0],f[1],f[2],f[3],f[4]);return Aa(h,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var c=this.expression();a.push(c)}while(this.expect(","))}this.consume("]");return F(function(c,
      e){for(var f=[],g=0,k=a.length;g<k;g++)f.push(a[g](c,e));return f},{literal:!0,constant:a.every(cc),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect();a.push(d.string||d.text);this.consume(":");d=this.expression();c.push(d)}while(this.expect(","))}this.consume("}");return F(function(d,f){for(var g={},k=0,h=c.length;k<h;k++)g[a[k]]=c[k](d,f);return g},{literal:!0,constant:c.every(cc),inputs:c})}};var cd=wa(),wf=Object.prototype.valueOf,
      Ba=w("$sce"),ja={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ia=w("$compile"),Z=U.createElement("a"),gd=za(N.location.href,!0);Bc.$inject=["$provide"];hd.$inject=["$locale"];jd.$inject=["$locale"];var md=".",Ff={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Bb("Month"),MMM:Bb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",
      1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Bb("Day"),EEE:Bb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ab(Math[0<a?"floor":"ceil"](a/60),2)+Ab(Math.abs(a%60),2))},ww:od(2),w:od(1)},Ef=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Df=/^\-?\d+$/;id.$inject=["$locale"];var Bf=da(S),Cf=da(ob);kd.$inject=["$parse"];var Rd=da({restrict:"E",compile:function(a,
      c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ja.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),pb={};s(vb,function(a,c){if("multiple"!=a){var d=ua("ng-"+c);pb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});s(Lc,function(a,c){pb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&
      (e=f.ngPattern.match(Hf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});s(["src","srcset","href"],function(a){var c=ua("ng-"+a);pb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===Ja.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(k,c),Ha&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}});var Cb={$addControl:y,$$renameControl:function(a,
      c){a.$name=c},$removeControl:y,$setValidity:y,$setDirty:y,$setPristine:y,$setSubmitted:y};pd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var wd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:pd,compile:function(a){a.addClass(Pa).addClass(fb);return{pre:function(a,d,g,k){if(!("action"in g)){var h=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault?c.preventDefault():c.returnValue=!1};d[0].addEventListener("submit",
      h,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",h,!1)},0,!1)})}var l=k.$$parentForm,m=k.$name;m&&(Oa(a,m,k,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(Oa(a,m,t,m),m=c,Oa(a,m,k,m),l.$$renameControl(k,m))}));d.on("$destroy",function(){l.$removeControl(k);m&&Oa(a,m,t,m);F(k,Cb)})}}}}}]},Sd=wd(),ee=wd(!0),Gf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Rf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
      Sf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Tf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,xd=/^(\d{4})-(\d{2})-(\d{2})$/,yd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ic=/^(\d{4})-W(\d\d)$/,zd=/^(\d{4})-(\d\d)$/,Ad=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Uf=/(\s+|^)default(\s+|$)/,Fb=new w("ngModel"),Bd={text:function(a,c,d,e,f,g){db(a,c,d,e,f,g);fc(e)},date:eb("date",xd,Eb(xd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":eb("datetimelocal",
      yd,Eb(yd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:eb("time",Ad,Eb(Ad,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:eb("week",ic,function(a,c){if(ea(a))return a;if(J(a)){ic.lastIndex=0;var d=ic.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,k=0,h=0,l=nd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),k=c.getSeconds(),h=c.getMilliseconds());return new Date(e,0,l.getDate()+f,d,g,k,h)}}return NaN},"yyyy-Www"),month:eb("month",zd,Eb(zd,["yyyy","MM"]),"yyyy-MM"),number:function(a,
      c,d,e,f,g){rd(a,c,d,e);db(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Tf.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!X(a))throw Fb("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var k;e.$validators.min=function(a){return e.$isEmpty(a)||x(k)||a>=k};d.$observe("min",function(a){z(a)&&!X(a)&&(a=parseFloat(a,10));k=X(a)&&!isNaN(a)?a:t;e.$validate()})}if(d.max||d.ngMax){var h;e.$validators.max=function(a){return e.$isEmpty(a)||
      x(h)||a<=h};d.$observe("max",function(a){z(a)&&!X(a)&&(a=parseFloat(a,10));h=X(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){db(a,c,d,e,f,g);fc(e);e.$$parserName="url";e.$validators.url=function(a){return e.$isEmpty(a)||Rf.test(a)}},email:function(a,c,d,e,f,g){db(a,c,d,e,f,g);fc(e);e.$$parserName="email";e.$validators.email=function(a){return e.$isEmpty(a)||Sf.test(a)}},radio:function(a,c,d,e){x(d.name)&&c.attr("name",++gb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,
      a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,k,h){var l=sd(h,a,"ngTrueValue",d.ngTrueValue,!0),m=sd(h,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==l};e.$formatters.push(function(a){return la(a,l)});e.$parsers.push(function(a){return a?l:m})},hidden:y,button:y,submit:y,reset:y,
      file:y},vc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,k,h){h[0]&&(Bd[S(k.type)]||Bd.text)(f,g,k,h[0],c,a,d,e)}}}}],fb="ng-valid",td="ng-invalid",Pa="ng-pristine",Db="ng-dirty",vd="ng-pending",Vf=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,k,h,l,m){this.$modelValue=this.$viewValue=Number.NaN;this.$validators={};this.$asyncValidators=
      {};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=m(d.name||"",!1)(a);var p=f(d.ngModel),q=null,n=this,r=function(){var c=p(a);n.$options&&n.$options.getterSetter&&A(c)&&(c=c());return c},O=function(c){var d;n.$options&&n.$options.getterSetter&&A(d=p(a))?d(n.$modelValue):p.assign(a,n.$modelValue)};this.$$setOptions=function(a){n.$options=
      a;if(!(p.assign||a&&a.getterSetter))throw Fb("nonassign",d.ngModel,sa(e));};this.$render=y;this.$isEmpty=function(a){return x(a)||""===a||null===a||a!==a};var B=e.inheritedData("$formController")||Cb,C=0;qd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:B,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Db);g.addClass(e,Pa)};this.$setUntouched=function(){n.$touched=!1;n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};
      this.$setTouched=function(){n.$touched=!0;n.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){k.cancel(q);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){X(n.$modelValue)&&isNaN(n.$modelValue)||this.$$parseAndValidate()};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;s(n.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(s(n.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=
      !0;s(n.$asyncValidators,function(f,g){var k=f(c,d);if(!k||!A(k.then))throw Fb("$asyncValidators",k);h(g,t);a.push(k.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?l.all(a).then(function(){k(e)},y):k(!0)}function h(a,c){m===C&&n.$setValidity(a,c)}function k(a){m===C&&e(a)}C++;var m=C;(function(a){var c=n.$$parserName||"parse";if(a===t)h(c,null);else if(h(c,a),!a)return s(n.$validators,function(a,c){h(c,null)}),s(n.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():
      k(!1):k(!1)};this.$commitViewValue=function(){var a=n.$viewValue;k.cancel(q);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=a,n.$pristine&&(n.$dirty=!0,n.$pristine=!1,g.removeClass(e,Pa),g.addClass(e,Db),B.$setDirty()),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var a=n.$$lastCommittedViewValue,c=a,d=x(c)?t:!0;if(d)for(var e=0;e<n.$parsers.length;e++)if(c=n.$parsers[e](c),x(c)){d=!1;break}X(n.$modelValue)&&isNaN(n.$modelValue)&&(n.$modelValue=
      r());var f=n.$modelValue,g=n.$options&&n.$options.allowInvalid;g&&(n.$modelValue=c,n.$modelValue!==f&&n.$$writeModelToScope());n.$$runValidators(d,c,a,function(a){g||(n.$modelValue=a?c:t,n.$modelValue!==f&&n.$$writeModelToScope())})};this.$$writeModelToScope=function(){O(n.$modelValue);s(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=
      function(c){var d=0,e=n.$options;e&&z(e.debounce)&&(e=e.debounce,X(e)?d=e:X(e[c])?d=e[c]:X(e["default"])&&(d=e["default"]));k.cancel(q);d?q=k(function(){n.$commitViewValue()},d):h.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var a=r();if(a!==n.$modelValue){n.$modelValue=a;for(var c=n.$formatters,d=c.length,e=a;d--;)e=c[d](e);n.$viewValue!==e&&(n.$viewValue=n.$$lastCommittedViewValue=e,n.$render(),n.$$runValidators(t,a,e,y))}return a})}],te=function(){return{restrict:"A",
      require:["ngModel","^?form","^?ngModelOptions"],controller:Vf,priority:1,compile:function(a){a.addClass(Pa).addClass("ng-untouched").addClass(fb);return{pre:function(a,d,e,f){var g=f[0],k=f[1]||Cb;g.$$setOptions(f[2]&&f[2].$options);k.$addControl(g);e.$observe("name",function(a){g.$name!==a&&k.$$renameControl(g,a)});a.$on("$destroy",function(){k.$removeControl(g)})},post:function(a,d,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)d.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&
      a.type)});d.on("blur",function(d){g.$touched||a.$apply(function(){g.$setTouched()})})}}}}},ve=da({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),xc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a){return!d.required||!e.$isEmpty(a)},d.$observe("required",function(){e.$validate()}))}}},wc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
      c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){J(a)&&0<a.length&&(a=new RegExp(a));if(a&&!a.test)throw w("ngPattern")("noregexp",g,a,sa(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||x(f)||f.test(a)}}}}},zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.maxlength=function(a,c){return e.$isEmpty(a)||c.length<=f}}}}},yc=
      function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(a)||c.length>=f}}}}},ue=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,k=g?T(f):f;e.$parsers.push(function(a){if(!x(a)){var c=[];a&&s(a.split(k),function(a){a&&c.push(g?T(a):a)});return c}});e.$formatters.push(function(a){return H(a)?
      a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},Wf=/^(true|false|\d+)$/,we=function(){return{restrict:"A",priority:100,compile:function(a,c){return Wf.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},xe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=
      T(this.$options.updateOn.replace(Uf,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Xd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],Zd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,
      d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],Yd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),k=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(k,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],$d=gc("",!0),be=gc("Odd",0),ae=gc("Even",1),ce=Ia({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),
      de=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ac={},Xf={blur:!0,focus:!0};s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ua("ng-"+a);Ac[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var k=d(g[c]);return function(c,d){d.on(a,function(d){var f=function(){k(c,{$event:d})};Xf[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});
      var ge=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var k,h,l;c.$watch(e.ngIf,function(c){c?h||g(function(c,f){h=f;c[c.length++]=U.createComment(" end ngIf: "+e.ngIf+" ");k={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=nb(k.clone),a.leave(l).then(function(){l=null}),k=null))})}}}],he=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",
      priority:400,terminal:!0,transclude:"element",controller:ta.noop,compile:function(f,g){var k=g.ngInclude||g.src,h=g.onload||"",l=g.autoscroll;return function(f,g,q,n,r){var s=0,t,C,D,G=function(){C&&(C.remove(),C=null);t&&(t.$destroy(),t=null);D&&(d.leave(D).then(function(){C=null}),C=D,D=null)};f.$watch(e.parseAsResourceUrl(k),function(e){var k=function(){!z(l)||l&&!f.$eval(l)||c()},q=++s;e?(a(e,!0).then(function(a){if(q===s){var c=f.$new();n.template=a;a=r(c,function(a){G();d.enter(a,null,g).then(k)});
      t=c;D=a;t.$emit("$includeContentLoaded",e);f.$eval(h)}},function(){q===s&&(G(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(G(),n.template=null)})}}}}],ye=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Dc(f.template,U).childNodes)(c,function(a){d.append(a)},t,t,d)):(d.html(f.template),a(d.contents())(c))}}}],ie=Ia({priority:450,compile:function(){return{pre:function(a,c,
      d){a.$eval(d.ngInit)}}}}),je=Ia({terminal:!0,priority:1E3}),ke=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var k=g.count,h=g.$attr.when&&f.attr(g.$attr.when),l=g.offset||0,m=e.$eval(h)||{},p={},q=c.startSymbol(),n=c.endSymbol(),r=/^when(Minus)?(.+)$/;s(g,function(a,c){r.test(c)&&(m[S(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});s(m,function(a,e){p[e]=c(a.replace(d,q+k+"-"+l+n))});e.$watch(function(){var c=parseFloat(e.$eval(k));
      if(isNaN(c))return"";c in m||(c=a.pluralCat(c-l));return p[c](e)},function(a){f.text(a)})}}}],le=["$parse","$animate",function(a,c){var d=w("ngRepeat"),e=function(a,c,d,e,l,m,p){a[d]=e;l&&(a[l]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var k=g.ngRepeat,h=U.createComment(" end ngRepeat: "+k+" "),l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
      if(!l)throw d("iexp",k);var m=l[1],p=l[2],q=l[3],n=l[4],l=m.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",m);var r=l[3]||l[1],z=l[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q)))throw d("badident",q);var w,C,D,G,u={$id:Ma};n?w=a(n):(D=function(a,c){return Ma(c)},G=function(a){return a});return function(a,f,g,l,m){w&&(C=function(c,d,e){z&&(u[z]=c);u[r]=d;u.$index=e;return w(a,u)});
      var n=wa();a.$watchCollection(p,function(g){var l,p,E=f[0],u,w=wa(),B,y,F,x,H,A,J;q&&(a[q]=g);if(Qa(g))H=g,p=C||D;else{p=C||G;H=[];for(J in g)g.hasOwnProperty(J)&&"$"!=J.charAt(0)&&H.push(J);H.sort()}B=H.length;J=Array(B);for(l=0;l<B;l++)if(y=g===H?l:H[l],F=g[y],x=p(y,F,l),n[x])A=n[x],delete n[x],w[x]=A,J[l]=A;else{if(w[x])throw s(J,function(a){a&&a.scope&&(n[a.id]=a)}),d("dupes",k,x,ra(F));J[l]={id:x,scope:t,clone:t};w[x]=!0}for(u in n){A=n[u];x=nb(A.clone);c.leave(x);if(x[0].parentNode)for(l=0,
      p=x.length;l<p;l++)x[l].$$NG_REMOVED=!0;A.scope.$destroy()}for(l=0;l<B;l++)if(y=g===H?l:H[l],F=g[y],A=J[l],A.scope){u=E;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);A.clone[0]!=u&&c.move(nb(A.clone),null,v(E));E=A.clone[A.clone.length-1];e(A.scope,l,r,F,z,y,B)}else m(function(a,d){A.scope=d;var f=h.cloneNode(!1);a[a.length++]=f;c.enter(a,null,v(E));E=f;A.clone=a;w[A.id]=A;e(A.scope,l,r,F,z,y,B)});n=w})}}}}],me=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,
      function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],fe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ne=Ia(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&s(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),oe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
      {}}],link:function(c,d,e,f){var g=[],k=[],h=[],l=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=h.length;d<e;++d)a.cancel(h[d]);d=h.length=0;for(e=l.length;d<e;++d){var r=nb(k[d].clone);l[d].$destroy();(h[d]=a.leave(r)).then(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&s(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=U.createComment(" end ngSwitchWhen: ");k.push({clone:d});a.enter(d,
      f.parent(),f)})})})}}}],pe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),qe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),se=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw w("ngTransclude")("orphan",
      sa(c));f(function(a){c.empty();c.append(a)})}}),Td=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Yf=w("ngOptions"),re=da({restrict:"A",terminal:!0}),Ud=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:y};
      return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var h=this,l={},m=e,p;h.databound=d.ngModel;h.init=function(a,c,d){m=a;p=d};h.addOption=function(c,d){La(c,'"option value"');l[c]=!0;m.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};h.removeOption=function(a){this.hasOption(a)&&(delete l[a],m.$viewValue==a&&this.renderUnknownOption(a))};h.renderUnknownOption=function(c){c="? "+Ma(c)+" ?";
      p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};h.hasOption=function(a){return l.hasOwnProperty(a)};c.$on("$destroy",function(){h.renderUnknownOption=y})}],link:function(e,g,k,h){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(u.parent()&&u.remove(),c.val(a),""===a&&A.prop("selected",!0)):x(a)&&A?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){u.parent()&&u.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=
      new ab(d.$viewValue);s(c.find("option"),function(c){c.selected=z(a.get(c.value))})};a.$watch(function(){la(e,d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];s(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){S[y]=d;F&&(S[F]=c);return a(e,S)}function k(a){var c;if(n)if(I&&H(a)){c=new ab([]);for(var d=0;d<a.length;d++)c.put(h(I,null,a[d]),!0)}else c=new ab(a);else I&&(a=h(I,null,
      a));return function(d,e){var f;f=I?I:v?v:B;return n?z(c.remove(h(f,d,e))):a==h(f,d,e)}}function l(){C||(e.$$postDigest(p),C=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){C=!1;var a={"":[]},c=[""],d,l,r,t,u;r=g.$viewValue;t=K(e)||[];var y=F?Object.keys(t).sort():t,v,x,H,B,R={};u=k(r);var N=!1,T,U;P={};for(B=0;H=y.length,B<H;B++){v=B;if(F&&(v=y[B],"$"===v.charAt(0)))continue;x=t[v];d=h(J,v,x)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=u(v,x);N=N||d;x=h(A,v,x);x=z(x)?x:"";U=I?I(e,S):F?y[B]:
      B;I&&(P[U]=v);l.push({id:U,label:x,selected:d})}n||(w||null===r?a[""].unshift({id:"",label:"",selected:!N}):N||a[""].unshift({id:"?",label:"",selected:!0}));v=0;for(y=c.length;v<y;v++){d=c[v];l=a[d];Q.length<=v?(r={element:G.clone().attr("label",d),label:l.label},t=[r],Q.push(t),f.append(r.element)):(t=Q[v],r=t[0],r.label!=d&&r.element.attr("label",r.label=d));N=null;B=0;for(H=l.length;B<H;B++)d=l[B],(u=t[B+1])?(N=u.element,u.label!==d.label&&(m(R,u.label,!1),m(R,d.label,!0),N.text(u.label=d.label)),
      u.id!==d.id&&N.val(u.id=d.id),N[0].selected!==d.selected&&(N.prop("selected",u.selected=d.selected),Ha&&N.prop("selected",u.selected))):(""===d.id&&w?T=w:(T=D.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).text(d.label),t.push(u={element:T,label:d.label,id:d.id,selected:d.selected}),m(R,d.label,!0),N?N.after(T):r.element.append(T),N=T);for(B++;t.length>B;)d=t.pop(),m(R,d.label,!1),d.element.remove();s(R,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}for(;Q.length>
      v;)Q.pop()[0].element.remove()}var u;if(!(u=r.match(d)))throw Yf("iexp",r,sa(f));var A=c(u[2]||u[1]),y=u[4]||u[6],x=/ as /.test(u[0])&&u[1],v=x?c(x):null,F=u[5],J=c(u[3]||""),B=c(u[2]?u[1]:y),K=c(u[7]),I=u[8]?c(u[8]):null,P={},Q=[[{element:f,label:""}]],S={};w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=K(e)||[],c;if(n)c=[],s(f.val(),function(d){d=I?P[d]:d;c.push("?"===d?t:""===d?null:h(v?v:B,d,a[d]))});else{var d=I?P[f.val()]:f.val();
      c="?"===d?t:""===d?null:h(v?v:B,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(K,l);e.$watchCollection(function(){var a=K(e),c;if(a&&H(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(A,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(A,d,a[d]));return c},l);n&&e.$watchCollection(function(){return g.$modelValue},l)}if(h[1]){var q=h[0];h=h[1];var n=k.multiple,r=k.ngOptions,w=!1,A,C=!1,D=v(U.createElement("option")),G=v(U.createElement("optgroup")),u=D.clone();
      k=0;for(var y=g.children(),F=y.length;k<F;k++)if(""===y[k].value){A=w=y.eq(k);break}q.init(h,w,u);n&&(h.$isEmpty=function(a){return!a||0===a.length});r?p(e,g,h):n?m(e,g,h):l(e,g,h,q)}}}}],Wd=["$interpolate",function(a){var c={addOption:y,removeOption:y};return{restrict:"E",priority:100,compile:function(d,e){if(x(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),m=l.data("$selectController")||l.parent().data("$selectController");m&&m.databound||(m=c);
      f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Vd=da({restrict:"E",terminal:!1});N.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Ld(),Nd(ta),v(U).ready(function(){Hd(U,rc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
      
      
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
System.register("github:angular/bower-angular@1.3.1", ["github:angular/bower-angular@1.3.1/angular.min"], function($__export) {
  "use strict";
  var __moduleName = "github:angular/bower-angular@1.3.1";
  return {
    setters: [function(m) {
      Object.keys(m).forEach(function(p) {
        $__export(p, m[p]);
      });
    }],
    execute: function() {}
  };
});

System.register("client", ["socket.io-client"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "client.js";
  var __dirname = ".";
  module.exports = function ($rootScope, $log, $q) {
  	var nop = function(){};
  	var io = require('socket.io-client');
  	/**
  	 * pseudo constructor, connects to remote server which exposes RPC calls
  	 * @param {String} url to connect to, for example http://localhost:8080
  	 * @param {Object} handshake for global authorization, is passed to socket.io connect method
  	 * returns {Socket} master socket namespace which you can use for looking under the hood
  	 */
  	function RPCBackend(url, handshake) {
  
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
  				serverChannels[name] = {};
  			}
  			var channel = serverChannels[name];
  			channel._loadDef = deferred;
  
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
  
  			return channel._loadDef.promise;
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
  
  
  			channel._loadDef.resolve(channel);
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
  
  			channel._socket = io.connect(baseURL + '/rpc-' + name)
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
  					channel._loadDef.reject(reason);
  				})
  				.on('disconnect', function (data) {
  					reconDfd = $q.defer();
  
  					channel._loadDef = reconDfd;
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
  			 * @returns {promise}
  			 */
  			loadChannel: function (name) {
  				if (serverChannels.hasOwnProperty(name)) {
  					return serverChannels[name]._loadDef.promise;
  				} else {
  					var def = $q.defer();
  					_loadChannel(name, def);
  					return def.promise;
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
  				channel._loadDef.reject();
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
  		return rpc;
  
  	}
  
  	return RPCBackend;
  };
  global.define = __define;
  return module.exports;
});

System.register("socket.io-rpc-client-angular", ["angular","./client"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "socket.io-rpc-client-angular.js";
  var __dirname = ".";
  var angular = require('angular');
  /**
   * factory which returns a connect function
   */
  angular.module('RPC', []).factory('$RPC', require('./client'))
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
  								localInj[attr.rpcChannel] = channel;
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
