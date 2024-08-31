function oA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ii=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g0={exports:{}},Wd={},v0={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu=Symbol.for("react.element"),aA=Symbol.for("react.portal"),lA=Symbol.for("react.fragment"),uA=Symbol.for("react.strict_mode"),cA=Symbol.for("react.profiler"),dA=Symbol.for("react.provider"),hA=Symbol.for("react.context"),fA=Symbol.for("react.forward_ref"),pA=Symbol.for("react.suspense"),mA=Symbol.for("react.memo"),gA=Symbol.for("react.lazy"),ay=Symbol.iterator;function vA(t){return t===null||typeof t!="object"?null:(t=ay&&t[ay]||t["@@iterator"],typeof t=="function"?t:null)}var y0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w0=Object.assign,_0={};function sa(t,e,n){this.props=t,this.context=e,this.refs=_0,this.updater=n||y0}sa.prototype.isReactComponent={};sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function E0(){}E0.prototype=sa.prototype;function xm(t,e,n){this.props=t,this.context=e,this.refs=_0,this.updater=n||y0}var Nm=xm.prototype=new E0;Nm.constructor=xm;w0(Nm,sa.prototype);Nm.isPureReactComponent=!0;var ly=Array.isArray,T0=Object.prototype.hasOwnProperty,Om={current:null},I0={key:!0,ref:!0,__self:!0,__source:!0};function S0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)T0.call(e,r)&&!I0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:tu,type:t,key:s,ref:o,props:i,_owner:Om.current}}function yA(t,e){return{$$typeof:tu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dm(t){return typeof t=="object"&&t!==null&&t.$$typeof===tu}function wA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uy=/\/+/g;function Jh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wA(""+t.key):e.toString(36)}function kc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case tu:case aA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Jh(o,0):r,ly(i)?(n="",t!=null&&(n=t.replace(uy,"$&/")+"/"),kc(i,e,n,"",function(d){return d})):i!=null&&(Dm(i)&&(i=yA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(uy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ly(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Jh(s,l);o+=kc(s,e,n,u,i)}else if(u=vA(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Jh(s,l++),o+=kc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function rc(t,e,n){if(t==null)return t;var r=[],i=0;return kc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _A(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},Pc={transition:null},EA={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:Pc,ReactCurrentOwner:Om};function A0(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:rc,forEach:function(t,e,n){rc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rc(t,function(){e++}),e},toArray:function(t){return rc(t,function(e){return e})||[]},only:function(t){if(!Dm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=sa;de.Fragment=lA;de.Profiler=cA;de.PureComponent=xm;de.StrictMode=uA;de.Suspense=pA;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EA;de.act=A0;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=w0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Om.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)T0.call(e,u)&&!I0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:tu,type:t.type,key:i,ref:s,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:hA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dA,_context:t},t.Consumer=t};de.createElement=S0;de.createFactory=function(t){var e=S0.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:fA,render:t}};de.isValidElement=Dm;de.lazy=function(t){return{$$typeof:gA,_payload:{_status:-1,_result:t},_init:_A}};de.memo=function(t,e){return{$$typeof:mA,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Pc.transition;Pc.transition={};try{t()}finally{Pc.transition=e}};de.unstable_act=A0;de.useCallback=function(t,e){return Bt.current.useCallback(t,e)};de.useContext=function(t){return Bt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Bt.current.useEffect(t,e)};de.useId=function(){return Bt.current.useId()};de.useImperativeHandle=function(t,e,n){return Bt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Bt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Bt.current.useReducer(t,e,n)};de.useRef=function(t){return Bt.current.useRef(t)};de.useState=function(t){return Bt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Bt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Bt.current.useTransition()};de.version="18.3.1";v0.exports=de;var $=v0.exports;const On=Rm($),TA=oA({__proto__:null,default:On},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IA=$,SA=Symbol.for("react.element"),AA=Symbol.for("react.fragment"),bA=Object.prototype.hasOwnProperty,CA=IA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kA={key:!0,ref:!0,__self:!0,__source:!0};function b0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bA.call(e,r)&&!kA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:SA,type:t,key:s,ref:o,props:i,_owner:CA.current}}Wd.Fragment=AA;Wd.jsx=b0;Wd.jsxs=b0;g0.exports=Wd;var L=g0.exports,qf={},C0={exports:{}},dn={},k0={exports:{}},P0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(X,ie){var Q=X.length;X.push(ie);e:for(;0<Q;){var ke=Q-1>>>1,Ee=X[ke];if(0<i(Ee,ie))X[ke]=ie,X[Q]=Ee,Q=ke;else break e}}function n(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var ie=X[0],Q=X.pop();if(Q!==ie){X[0]=Q;e:for(var ke=0,Ee=X.length,Ne=Ee>>>1;ke<Ne;){var Tn=2*(ke+1)-1,U=X[Tn],In=Tn+1,$t=X[In];if(0>i(U,Q))In<Ee&&0>i($t,U)?(X[ke]=$t,X[In]=Q,ke=In):(X[ke]=U,X[Tn]=Q,ke=Tn);else if(In<Ee&&0>i($t,Q))X[ke]=$t,X[In]=Q,ke=In;else break e}}return ie}function i(X,ie){var Q=X.sortIndex-ie.sortIndex;return Q!==0?Q:X.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],p=1,y=null,w=3,k=!1,x=!1,D=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(X){for(var ie=n(d);ie!==null;){if(ie.callback===null)r(d);else if(ie.startTime<=X)r(d),ie.sortIndex=ie.expirationTime,e(u,ie);else break;ie=n(d)}}function F(X){if(D=!1,A(X),!x)if(n(u)!==null)x=!0,Ji(z);else{var ie=n(d);ie!==null&&be(F,ie.startTime-X)}}function z(X,ie){x=!1,D&&(D=!1,I(E),E=-1),k=!0;var Q=w;try{for(A(ie),y=n(u);y!==null&&(!(y.expirationTime>ie)||X&&!N());){var ke=y.callback;if(typeof ke=="function"){y.callback=null,w=y.priorityLevel;var Ee=ke(y.expirationTime<=ie);ie=t.unstable_now(),typeof Ee=="function"?y.callback=Ee:y===n(u)&&r(u),A(ie)}else r(u);y=n(u)}if(y!==null)var Ne=!0;else{var Tn=n(d);Tn!==null&&be(F,Tn.startTime-ie),Ne=!1}return Ne}finally{y=null,w=Q,k=!1}}var K=!1,b=null,E=-1,C=5,R=-1;function N(){return!(t.unstable_now()-R<C)}function M(){if(b!==null){var X=t.unstable_now();R=X;var ie=!0;try{ie=b(!0,X)}finally{ie?P():(K=!1,b=null)}}else K=!1}var P;if(typeof T=="function")P=function(){T(M)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,hr=ut.port2;ut.port1.onmessage=M,P=function(){hr.postMessage(null)}}else P=function(){O(M,0)};function Ji(X){b=X,K||(K=!0,P())}function be(X,ie){E=O(function(){X(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(X){X.callback=null},t.unstable_continueExecution=function(){x||k||(x=!0,Ji(z))},t.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<X?Math.floor(1e3/X):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(X){switch(w){case 1:case 2:case 3:var ie=3;break;default:ie=w}var Q=w;w=ie;try{return X()}finally{w=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(X,ie){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Q=w;w=X;try{return ie()}finally{w=Q}},t.unstable_scheduleCallback=function(X,ie,Q){var ke=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ke+Q:ke):Q=ke,X){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Q+Ee,X={id:p++,callback:ie,priorityLevel:X,startTime:Q,expirationTime:Ee,sortIndex:-1},Q>ke?(X.sortIndex=Q,e(d,X),n(u)===null&&X===n(d)&&(D?(I(E),E=-1):D=!0,be(F,Q-ke))):(X.sortIndex=Ee,e(u,X),x||k||(x=!0,Ji(z))),X},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(X){var ie=w;return function(){var Q=w;w=ie;try{return X.apply(this,arguments)}finally{w=Q}}}})(P0);k0.exports=P0;var PA=k0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RA=$,cn=PA;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R0=new Set,Sl={};function js(t,e){zo(t,e),zo(t+"Capture",e)}function zo(t,e){for(Sl[t]=e,t=0;t<e.length;t++)R0.add(e[t])}var Mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kf=Object.prototype.hasOwnProperty,xA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cy={},dy={};function NA(t){return Kf.call(dy,t)?!0:Kf.call(cy,t)?!1:xA.test(t)?dy[t]=!0:(cy[t]=!0,!1)}function OA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DA(t,e,n,r){if(e===null||typeof e>"u"||OA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function zt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){St[t]=new zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];St[e]=new zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){St[t]=new zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){St[t]=new zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){St[t]=new zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){St[t]=new zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){St[t]=new zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){St[t]=new zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){St[t]=new zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lm=/[\-:]([a-z])/g;function Mm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lm,Mm);St[e]=new zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lm,Mm);St[e]=new zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lm,Mm);St[e]=new zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){St[t]=new zt(t,1,!1,t.toLowerCase(),null,!1,!1)});St.xlinkHref=new zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){St[t]=new zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vm(t,e,n,r){var i=St.hasOwnProperty(e)?St[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DA(e,n,i,r)&&(n=null),r||i===null?NA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wr=RA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ic=Symbol.for("react.element"),go=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),Fm=Symbol.for("react.strict_mode"),Gf=Symbol.for("react.profiler"),x0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),Um=Symbol.for("react.forward_ref"),Qf=Symbol.for("react.suspense"),Yf=Symbol.for("react.suspense_list"),jm=Symbol.for("react.memo"),li=Symbol.for("react.lazy"),O0=Symbol.for("react.offscreen"),hy=Symbol.iterator;function Ua(t){return t===null||typeof t!="object"?null:(t=hy&&t[hy]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,Zh;function Qa(t){if(Zh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zh=e&&e[1]||""}return`
`+Zh+t}var ef=!1;function tf(t,e){if(!t||ef)return"";ef=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ef=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qa(t):""}function LA(t){switch(t.tag){case 5:return Qa(t.type);case 16:return Qa("Lazy");case 13:return Qa("Suspense");case 19:return Qa("SuspenseList");case 0:case 2:case 15:return t=tf(t.type,!1),t;case 11:return t=tf(t.type.render,!1),t;case 1:return t=tf(t.type,!0),t;default:return""}}function Xf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vo:return"Fragment";case go:return"Portal";case Gf:return"Profiler";case Fm:return"StrictMode";case Qf:return"Suspense";case Yf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N0:return(t.displayName||"Context")+".Consumer";case x0:return(t._context.displayName||"Context")+".Provider";case Um:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jm:return e=t.displayName||null,e!==null?e:Xf(t.type)||"Memo";case li:e=t._payload,t=t._init;try{return Xf(t(e))}catch{}}return null}function MA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xf(e);case 8:return e===Fm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Li(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function D0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VA(t){var e=D0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sc(t){t._valueTracker||(t._valueTracker=VA(t))}function L0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=D0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jf(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Li(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function M0(t,e){e=e.checked,e!=null&&Vm(t,"checked",e,!1)}function Zf(t,e){M0(t,e);var n=Li(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ep(t,e.type,n):e.hasOwnProperty("defaultValue")&&ep(t,e.type,Li(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function py(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ep(t,e,n){(e!=="number"||Jc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ya=Array.isArray;function xo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Li(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function my(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(Ya(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Li(n)}}function V0(t,e){var n=Li(e.value),r=Li(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function F0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function np(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?F0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oc,U0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oc=oc||document.createElement("div"),oc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Al(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var al={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},FA=["Webkit","ms","Moz","O"];Object.keys(al).forEach(function(t){FA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),al[e]=al[t]})});function j0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||al.hasOwnProperty(t)&&al[t]?(""+e).trim():e+"px"}function B0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=j0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var UA=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rp(t,e){if(e){if(UA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function ip(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sp=null;function Bm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var op=null,No=null,Oo=null;function vy(t){if(t=iu(t)){if(typeof op!="function")throw Error(q(280));var e=t.stateNode;e&&(e=Yd(e),op(t.stateNode,t.type,e))}}function z0(t){No?Oo?Oo.push(t):Oo=[t]:No=t}function $0(){if(No){var t=No,e=Oo;if(Oo=No=null,vy(t),e)for(t=0;t<e.length;t++)vy(e[t])}}function H0(t,e){return t(e)}function W0(){}var nf=!1;function q0(t,e,n){if(nf)return t(e,n);nf=!0;try{return H0(t,e,n)}finally{nf=!1,(No!==null||Oo!==null)&&(W0(),$0())}}function bl(t,e){var n=t.stateNode;if(n===null)return null;var r=Yd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var ap=!1;if(Mr)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){ap=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{ap=!1}function jA(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var ll=!1,Zc=null,ed=!1,lp=null,BA={onError:function(t){ll=!0,Zc=t}};function zA(t,e,n,r,i,s,o,l,u){ll=!1,Zc=null,jA.apply(BA,arguments)}function $A(t,e,n,r,i,s,o,l,u){if(zA.apply(this,arguments),ll){if(ll){var d=Zc;ll=!1,Zc=null}else throw Error(q(198));ed||(ed=!0,lp=d)}}function Bs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function K0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yy(t){if(Bs(t)!==t)throw Error(q(188))}function HA(t){var e=t.alternate;if(!e){if(e=Bs(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yy(i),t;if(s===r)return yy(i),e;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function G0(t){return t=HA(t),t!==null?Q0(t):null}function Q0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Q0(t);if(e!==null)return e;t=t.sibling}return null}var Y0=cn.unstable_scheduleCallback,wy=cn.unstable_cancelCallback,WA=cn.unstable_shouldYield,qA=cn.unstable_requestPaint,Ye=cn.unstable_now,KA=cn.unstable_getCurrentPriorityLevel,zm=cn.unstable_ImmediatePriority,X0=cn.unstable_UserBlockingPriority,td=cn.unstable_NormalPriority,GA=cn.unstable_LowPriority,J0=cn.unstable_IdlePriority,qd=null,er=null;function QA(t){if(er&&typeof er.onCommitFiberRoot=="function")try{er.onCommitFiberRoot(qd,t,void 0,(t.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:JA,YA=Math.log,XA=Math.LN2;function JA(t){return t>>>=0,t===0?32:31-(YA(t)/XA|0)|0}var ac=64,lc=4194304;function Xa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Xa(l):(s&=o,s!==0&&(r=Xa(s)))}else o=n&~i,o!==0?r=Xa(o):s!==0&&(r=Xa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dn(e),i=1<<n,r|=t[n],e&=~i;return r}function ZA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=ZA(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function up(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Z0(){var t=ac;return ac<<=1,!(ac&4194240)&&(ac=64),t}function rf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dn(e),t[e]=n}function tb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $m(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Se=0;function eE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tE,Hm,nE,rE,iE,cp=!1,uc=[],Ti=null,Ii=null,Si=null,Cl=new Map,kl=new Map,ci=[],nb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _y(t,e){switch(t){case"focusin":case"focusout":Ti=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Si=null;break;case"pointerover":case"pointerout":Cl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(e.pointerId)}}function Ba(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=iu(e),e!==null&&Hm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function rb(t,e,n,r,i){switch(e){case"focusin":return Ti=Ba(Ti,t,e,n,r,i),!0;case"dragenter":return Ii=Ba(Ii,t,e,n,r,i),!0;case"mouseover":return Si=Ba(Si,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Cl.set(s,Ba(Cl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,kl.set(s,Ba(kl.get(s)||null,t,e,n,r,i)),!0}return!1}function sE(t){var e=ms(t.target);if(e!==null){var n=Bs(e);if(n!==null){if(e=n.tag,e===13){if(e=K0(n),e!==null){t.blockedOn=e,iE(t.priority,function(){nE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sp=r,n.target.dispatchEvent(r),sp=null}else return e=iu(n),e!==null&&Hm(e),t.blockedOn=n,!1;e.shift()}return!0}function Ey(t,e,n){Rc(t)&&n.delete(e)}function ib(){cp=!1,Ti!==null&&Rc(Ti)&&(Ti=null),Ii!==null&&Rc(Ii)&&(Ii=null),Si!==null&&Rc(Si)&&(Si=null),Cl.forEach(Ey),kl.forEach(Ey)}function za(t,e){t.blockedOn===e&&(t.blockedOn=null,cp||(cp=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,ib)))}function Pl(t){function e(i){return za(i,t)}if(0<uc.length){za(uc[0],t);for(var n=1;n<uc.length;n++){var r=uc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ti!==null&&za(Ti,t),Ii!==null&&za(Ii,t),Si!==null&&za(Si,t),Cl.forEach(e),kl.forEach(e),n=0;n<ci.length;n++)r=ci[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ci.length&&(n=ci[0],n.blockedOn===null);)sE(n),n.blockedOn===null&&ci.shift()}var Do=Wr.ReactCurrentBatchConfig,rd=!0;function sb(t,e,n,r){var i=Se,s=Do.transition;Do.transition=null;try{Se=1,Wm(t,e,n,r)}finally{Se=i,Do.transition=s}}function ob(t,e,n,r){var i=Se,s=Do.transition;Do.transition=null;try{Se=4,Wm(t,e,n,r)}finally{Se=i,Do.transition=s}}function Wm(t,e,n,r){if(rd){var i=dp(t,e,n,r);if(i===null)pf(t,e,r,id,n),_y(t,r);else if(rb(i,t,e,n,r))r.stopPropagation();else if(_y(t,r),e&4&&-1<nb.indexOf(t)){for(;i!==null;){var s=iu(i);if(s!==null&&tE(s),s=dp(t,e,n,r),s===null&&pf(t,e,r,id,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pf(t,e,r,null,n)}}var id=null;function dp(t,e,n,r){if(id=null,t=Bm(r),t=ms(t),t!==null)if(e=Bs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=K0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return id=t,null}function oE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(KA()){case zm:return 1;case X0:return 4;case td:case GA:return 16;case J0:return 536870912;default:return 16}default:return 16}}var vi=null,qm=null,xc=null;function aE(){if(xc)return xc;var t,e=qm,n=e.length,r,i="value"in vi?vi.value:vi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xc=i.slice(t,1<r?1-r:void 0)}function Nc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cc(){return!0}function Ty(){return!1}function hn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cc:Ty,this.isPropagationStopped=Ty,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cc)},persist:function(){},isPersistent:cc}),e}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Km=hn(oa),ru=Be({},oa,{view:0,detail:0}),ab=hn(ru),sf,of,$a,Kd=Be({},ru,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$a&&($a&&t.type==="mousemove"?(sf=t.screenX-$a.screenX,of=t.screenY-$a.screenY):of=sf=0,$a=t),sf)},movementY:function(t){return"movementY"in t?t.movementY:of}}),Iy=hn(Kd),lb=Be({},Kd,{dataTransfer:0}),ub=hn(lb),cb=Be({},ru,{relatedTarget:0}),af=hn(cb),db=Be({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),hb=hn(db),fb=Be({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pb=hn(fb),mb=Be({},oa,{data:0}),Sy=hn(mb),gb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yb[t])?!!e[t]:!1}function Gm(){return wb}var _b=Be({},ru,{key:function(t){if(t.key){var e=gb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gm,charCode:function(t){return t.type==="keypress"?Nc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Eb=hn(_b),Tb=Be({},Kd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ay=hn(Tb),Ib=Be({},ru,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gm}),Sb=hn(Ib),Ab=Be({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),bb=hn(Ab),Cb=Be({},Kd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kb=hn(Cb),Pb=[9,13,27,32],Qm=Mr&&"CompositionEvent"in window,ul=null;Mr&&"documentMode"in document&&(ul=document.documentMode);var Rb=Mr&&"TextEvent"in window&&!ul,lE=Mr&&(!Qm||ul&&8<ul&&11>=ul),by=" ",Cy=!1;function uE(t,e){switch(t){case"keyup":return Pb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yo=!1;function xb(t,e){switch(t){case"compositionend":return cE(e);case"keypress":return e.which!==32?null:(Cy=!0,by);case"textInput":return t=e.data,t===by&&Cy?null:t;default:return null}}function Nb(t,e){if(yo)return t==="compositionend"||!Qm&&uE(t,e)?(t=aE(),xc=qm=vi=null,yo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lE&&e.locale!=="ko"?null:e.data;default:return null}}var Ob={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ky(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ob[t.type]:e==="textarea"}function dE(t,e,n,r){z0(r),e=sd(e,"onChange"),0<e.length&&(n=new Km("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var cl=null,Rl=null;function Db(t){TE(t,0)}function Gd(t){var e=Eo(t);if(L0(e))return t}function Lb(t,e){if(t==="change")return e}var hE=!1;if(Mr){var lf;if(Mr){var uf="oninput"in document;if(!uf){var Py=document.createElement("div");Py.setAttribute("oninput","return;"),uf=typeof Py.oninput=="function"}lf=uf}else lf=!1;hE=lf&&(!document.documentMode||9<document.documentMode)}function Ry(){cl&&(cl.detachEvent("onpropertychange",fE),Rl=cl=null)}function fE(t){if(t.propertyName==="value"&&Gd(Rl)){var e=[];dE(e,Rl,t,Bm(t)),q0(Db,e)}}function Mb(t,e,n){t==="focusin"?(Ry(),cl=e,Rl=n,cl.attachEvent("onpropertychange",fE)):t==="focusout"&&Ry()}function Vb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gd(Rl)}function Fb(t,e){if(t==="click")return Gd(e)}function Ub(t,e){if(t==="input"||t==="change")return Gd(e)}function jb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mn=typeof Object.is=="function"?Object.is:jb;function xl(t,e){if(Mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kf.call(e,i)||!Mn(t[i],e[i]))return!1}return!0}function xy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ny(t,e){var n=xy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xy(n)}}function pE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mE(){for(var t=window,e=Jc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jc(t.document)}return e}function Ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Bb(t){var e=mE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pE(n.ownerDocument.documentElement,n)){if(r!==null&&Ym(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ny(n,s);var o=Ny(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zb=Mr&&"documentMode"in document&&11>=document.documentMode,wo=null,hp=null,dl=null,fp=!1;function Oy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fp||wo==null||wo!==Jc(r)||(r=wo,"selectionStart"in r&&Ym(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dl&&xl(dl,r)||(dl=r,r=sd(hp,"onSelect"),0<r.length&&(e=new Km("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wo)))}function dc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _o={animationend:dc("Animation","AnimationEnd"),animationiteration:dc("Animation","AnimationIteration"),animationstart:dc("Animation","AnimationStart"),transitionend:dc("Transition","TransitionEnd")},cf={},gE={};Mr&&(gE=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function Qd(t){if(cf[t])return cf[t];if(!_o[t])return t;var e=_o[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gE)return cf[t]=e[n];return t}var vE=Qd("animationend"),yE=Qd("animationiteration"),wE=Qd("animationstart"),_E=Qd("transitionend"),EE=new Map,Dy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){EE.set(t,e),js(e,[t])}for(var df=0;df<Dy.length;df++){var hf=Dy[df],$b=hf.toLowerCase(),Hb=hf[0].toUpperCase()+hf.slice(1);Wi($b,"on"+Hb)}Wi(vE,"onAnimationEnd");Wi(yE,"onAnimationIteration");Wi(wE,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(_E,"onTransitionEnd");zo("onMouseEnter",["mouseout","mouseover"]);zo("onMouseLeave",["mouseout","mouseover"]);zo("onPointerEnter",["pointerout","pointerover"]);zo("onPointerLeave",["pointerout","pointerover"]);js("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));js("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));js("onBeforeInput",["compositionend","keypress","textInput","paste"]);js("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));js("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));js("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ja));function Ly(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$A(r,e,void 0,t),t.currentTarget=null}function TE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Ly(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Ly(i,l,d),s=u}}}if(ed)throw t=lp,ed=!1,lp=null,t}function Pe(t,e){var n=e[yp];n===void 0&&(n=e[yp]=new Set);var r=t+"__bubble";n.has(r)||(IE(e,t,2,!1),n.add(r))}function ff(t,e,n){var r=0;e&&(r|=4),IE(n,t,r,e)}var hc="_reactListening"+Math.random().toString(36).slice(2);function Nl(t){if(!t[hc]){t[hc]=!0,R0.forEach(function(n){n!=="selectionchange"&&(Wb.has(n)||ff(n,!1,t),ff(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hc]||(e[hc]=!0,ff("selectionchange",!1,e))}}function IE(t,e,n,r){switch(oE(e)){case 1:var i=sb;break;case 4:i=ob;break;default:i=Wm}n=i.bind(null,e,n,t),i=void 0,!ap||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ms(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}q0(function(){var d=s,p=Bm(n),y=[];e:{var w=EE.get(t);if(w!==void 0){var k=Km,x=t;switch(t){case"keypress":if(Nc(n)===0)break e;case"keydown":case"keyup":k=Eb;break;case"focusin":x="focus",k=af;break;case"focusout":x="blur",k=af;break;case"beforeblur":case"afterblur":k=af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Iy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=ub;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Sb;break;case vE:case yE:case wE:k=hb;break;case _E:k=bb;break;case"scroll":k=ab;break;case"wheel":k=kb;break;case"copy":case"cut":case"paste":k=pb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Ay}var D=(e&4)!==0,O=!D&&t==="scroll",I=D?w!==null?w+"Capture":null:w;D=[];for(var T=d,A;T!==null;){A=T;var F=A.stateNode;if(A.tag===5&&F!==null&&(A=F,I!==null&&(F=bl(T,I),F!=null&&D.push(Ol(T,F,A)))),O)break;T=T.return}0<D.length&&(w=new k(w,x,null,n,p),y.push({event:w,listeners:D}))}}if(!(e&7)){e:{if(w=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",w&&n!==sp&&(x=n.relatedTarget||n.fromElement)&&(ms(x)||x[Vr]))break e;if((k||w)&&(w=p.window===p?p:(w=p.ownerDocument)?w.defaultView||w.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=d,x=x?ms(x):null,x!==null&&(O=Bs(x),x!==O||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=d),k!==x)){if(D=Iy,F="onMouseLeave",I="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(D=Ay,F="onPointerLeave",I="onPointerEnter",T="pointer"),O=k==null?w:Eo(k),A=x==null?w:Eo(x),w=new D(F,T+"leave",k,n,p),w.target=O,w.relatedTarget=A,F=null,ms(p)===d&&(D=new D(I,T+"enter",x,n,p),D.target=A,D.relatedTarget=O,F=D),O=F,k&&x)t:{for(D=k,I=x,T=0,A=D;A;A=ho(A))T++;for(A=0,F=I;F;F=ho(F))A++;for(;0<T-A;)D=ho(D),T--;for(;0<A-T;)I=ho(I),A--;for(;T--;){if(D===I||I!==null&&D===I.alternate)break t;D=ho(D),I=ho(I)}D=null}else D=null;k!==null&&My(y,w,k,D,!1),x!==null&&O!==null&&My(y,O,x,D,!0)}}e:{if(w=d?Eo(d):window,k=w.nodeName&&w.nodeName.toLowerCase(),k==="select"||k==="input"&&w.type==="file")var z=Lb;else if(ky(w))if(hE)z=Ub;else{z=Vb;var K=Mb}else(k=w.nodeName)&&k.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(z=Fb);if(z&&(z=z(t,d))){dE(y,z,n,p);break e}K&&K(t,w,d),t==="focusout"&&(K=w._wrapperState)&&K.controlled&&w.type==="number"&&ep(w,"number",w.value)}switch(K=d?Eo(d):window,t){case"focusin":(ky(K)||K.contentEditable==="true")&&(wo=K,hp=d,dl=null);break;case"focusout":dl=hp=wo=null;break;case"mousedown":fp=!0;break;case"contextmenu":case"mouseup":case"dragend":fp=!1,Oy(y,n,p);break;case"selectionchange":if(zb)break;case"keydown":case"keyup":Oy(y,n,p)}var b;if(Qm)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else yo?uE(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(lE&&n.locale!=="ko"&&(yo||E!=="onCompositionStart"?E==="onCompositionEnd"&&yo&&(b=aE()):(vi=p,qm="value"in vi?vi.value:vi.textContent,yo=!0)),K=sd(d,E),0<K.length&&(E=new Sy(E,t,null,n,p),y.push({event:E,listeners:K}),b?E.data=b:(b=cE(n),b!==null&&(E.data=b)))),(b=Rb?xb(t,n):Nb(t,n))&&(d=sd(d,"onBeforeInput"),0<d.length&&(p=new Sy("onBeforeInput","beforeinput",null,n,p),y.push({event:p,listeners:d}),p.data=b))}TE(y,e)})}function Ol(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bl(t,n),s!=null&&r.unshift(Ol(t,s,i)),s=bl(t,e),s!=null&&r.push(Ol(t,s,i))),t=t.return}return r}function ho(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function My(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=bl(n,s),u!=null&&o.unshift(Ol(n,u,l))):i||(u=bl(n,s),u!=null&&o.push(Ol(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qb=/\r\n?/g,Kb=/\u0000|\uFFFD/g;function Vy(t){return(typeof t=="string"?t:""+t).replace(qb,`
`).replace(Kb,"")}function fc(t,e,n){if(e=Vy(e),Vy(t)!==e&&n)throw Error(q(425))}function od(){}var pp=null,mp=null;function gp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vp=typeof setTimeout=="function"?setTimeout:void 0,Gb=typeof clearTimeout=="function"?clearTimeout:void 0,Fy=typeof Promise=="function"?Promise:void 0,Qb=typeof queueMicrotask=="function"?queueMicrotask:typeof Fy<"u"?function(t){return Fy.resolve(null).then(t).catch(Yb)}:vp;function Yb(t){setTimeout(function(){throw t})}function mf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Pl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pl(e)}function Ai(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var aa=Math.random().toString(36).slice(2),Yn="__reactFiber$"+aa,Dl="__reactProps$"+aa,Vr="__reactContainer$"+aa,yp="__reactEvents$"+aa,Xb="__reactListeners$"+aa,Jb="__reactHandles$"+aa;function ms(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vr]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Uy(t);t!==null;){if(n=t[Yn])return n;t=Uy(t)}return e}t=n,n=t.parentNode}return null}function iu(t){return t=t[Yn]||t[Vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Eo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function Yd(t){return t[Dl]||null}var wp=[],To=-1;function qi(t){return{current:t}}function Re(t){0>To||(t.current=wp[To],wp[To]=null,To--)}function Ce(t,e){To++,wp[To]=t.current,t.current=e}var Mi={},Mt=qi(Mi),Gt=qi(!1),bs=Mi;function $o(t,e){var n=t.type.contextTypes;if(!n)return Mi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(t){return t=t.childContextTypes,t!=null}function ad(){Re(Gt),Re(Mt)}function jy(t,e,n){if(Mt.current!==Mi)throw Error(q(168));Ce(Mt,e),Ce(Gt,n)}function SE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,MA(t)||"Unknown",i));return Be({},n,r)}function ld(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mi,bs=Mt.current,Ce(Mt,t),Ce(Gt,Gt.current),!0}function By(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=SE(t,e,bs),r.__reactInternalMemoizedMergedChildContext=t,Re(Gt),Re(Mt),Ce(Mt,t)):Re(Gt),Ce(Gt,n)}var br=null,Xd=!1,gf=!1;function AE(t){br===null?br=[t]:br.push(t)}function Zb(t){Xd=!0,AE(t)}function Ki(){if(!gf&&br!==null){gf=!0;var t=0,e=Se;try{var n=br;for(Se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}br=null,Xd=!1}catch(i){throw br!==null&&(br=br.slice(t+1)),Y0(zm,Ki),i}finally{Se=e,gf=!1}}return null}var Io=[],So=0,ud=null,cd=0,gn=[],vn=0,Cs=null,Cr=1,kr="";function ds(t,e){Io[So++]=cd,Io[So++]=ud,ud=t,cd=e}function bE(t,e,n){gn[vn++]=Cr,gn[vn++]=kr,gn[vn++]=Cs,Cs=t;var r=Cr;t=kr;var i=32-Dn(r)-1;r&=~(1<<i),n+=1;var s=32-Dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cr=1<<32-Dn(e)+i|n<<i|r,kr=s+t}else Cr=1<<s|n<<i|r,kr=t}function Xm(t){t.return!==null&&(ds(t,1),bE(t,1,0))}function Jm(t){for(;t===ud;)ud=Io[--So],Io[So]=null,cd=Io[--So],Io[So]=null;for(;t===Cs;)Cs=gn[--vn],gn[vn]=null,kr=gn[--vn],gn[vn]=null,Cr=gn[--vn],gn[vn]=null}var on=null,rn=null,De=!1,Nn=null;function CE(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,rn=Ai(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cs!==null?{id:Cr,overflow:kr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,rn=null,!0):!1;default:return!1}}function _p(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ep(t){if(De){var e=rn;if(e){var n=e;if(!zy(t,e)){if(_p(t))throw Error(q(418));e=Ai(n.nextSibling);var r=on;e&&zy(t,e)?CE(r,n):(t.flags=t.flags&-4097|2,De=!1,on=t)}}else{if(_p(t))throw Error(q(418));t.flags=t.flags&-4097|2,De=!1,on=t}}}function $y(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function pc(t){if(t!==on)return!1;if(!De)return $y(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gp(t.type,t.memoizedProps)),e&&(e=rn)){if(_p(t))throw kE(),Error(q(418));for(;e;)CE(t,e),e=Ai(e.nextSibling)}if($y(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rn=Ai(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rn=null}}else rn=on?Ai(t.stateNode.nextSibling):null;return!0}function kE(){for(var t=rn;t;)t=Ai(t.nextSibling)}function Ho(){rn=on=null,De=!1}function Zm(t){Nn===null?Nn=[t]:Nn.push(t)}var eC=Wr.ReactCurrentBatchConfig;function Ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function mc(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hy(t){var e=t._init;return e(t._payload)}function PE(t){function e(I,T){if(t){var A=I.deletions;A===null?(I.deletions=[T],I.flags|=16):A.push(T)}}function n(I,T){if(!t)return null;for(;T!==null;)e(I,T),T=T.sibling;return null}function r(I,T){for(I=new Map;T!==null;)T.key!==null?I.set(T.key,T):I.set(T.index,T),T=T.sibling;return I}function i(I,T){return I=Pi(I,T),I.index=0,I.sibling=null,I}function s(I,T,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<T?(I.flags|=2,T):A):(I.flags|=2,T)):(I.flags|=1048576,T)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,T,A,F){return T===null||T.tag!==6?(T=If(A,I.mode,F),T.return=I,T):(T=i(T,A),T.return=I,T)}function u(I,T,A,F){var z=A.type;return z===vo?p(I,T,A.props.children,F,A.key):T!==null&&(T.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===li&&Hy(z)===T.type)?(F=i(T,A.props),F.ref=Ha(I,T,A),F.return=I,F):(F=Uc(A.type,A.key,A.props,null,I.mode,F),F.ref=Ha(I,T,A),F.return=I,F)}function d(I,T,A,F){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=Sf(A,I.mode,F),T.return=I,T):(T=i(T,A.children||[]),T.return=I,T)}function p(I,T,A,F,z){return T===null||T.tag!==7?(T=_s(A,I.mode,F,z),T.return=I,T):(T=i(T,A),T.return=I,T)}function y(I,T,A){if(typeof T=="string"&&T!==""||typeof T=="number")return T=If(""+T,I.mode,A),T.return=I,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ic:return A=Uc(T.type,T.key,T.props,null,I.mode,A),A.ref=Ha(I,null,T),A.return=I,A;case go:return T=Sf(T,I.mode,A),T.return=I,T;case li:var F=T._init;return y(I,F(T._payload),A)}if(Ya(T)||Ua(T))return T=_s(T,I.mode,A,null),T.return=I,T;mc(I,T)}return null}function w(I,T,A,F){var z=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return z!==null?null:l(I,T,""+A,F);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ic:return A.key===z?u(I,T,A,F):null;case go:return A.key===z?d(I,T,A,F):null;case li:return z=A._init,w(I,T,z(A._payload),F)}if(Ya(A)||Ua(A))return z!==null?null:p(I,T,A,F,null);mc(I,A)}return null}function k(I,T,A,F,z){if(typeof F=="string"&&F!==""||typeof F=="number")return I=I.get(A)||null,l(T,I,""+F,z);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ic:return I=I.get(F.key===null?A:F.key)||null,u(T,I,F,z);case go:return I=I.get(F.key===null?A:F.key)||null,d(T,I,F,z);case li:var K=F._init;return k(I,T,A,K(F._payload),z)}if(Ya(F)||Ua(F))return I=I.get(A)||null,p(T,I,F,z,null);mc(T,F)}return null}function x(I,T,A,F){for(var z=null,K=null,b=T,E=T=0,C=null;b!==null&&E<A.length;E++){b.index>E?(C=b,b=null):C=b.sibling;var R=w(I,b,A[E],F);if(R===null){b===null&&(b=C);break}t&&b&&R.alternate===null&&e(I,b),T=s(R,T,E),K===null?z=R:K.sibling=R,K=R,b=C}if(E===A.length)return n(I,b),De&&ds(I,E),z;if(b===null){for(;E<A.length;E++)b=y(I,A[E],F),b!==null&&(T=s(b,T,E),K===null?z=b:K.sibling=b,K=b);return De&&ds(I,E),z}for(b=r(I,b);E<A.length;E++)C=k(b,I,E,A[E],F),C!==null&&(t&&C.alternate!==null&&b.delete(C.key===null?E:C.key),T=s(C,T,E),K===null?z=C:K.sibling=C,K=C);return t&&b.forEach(function(N){return e(I,N)}),De&&ds(I,E),z}function D(I,T,A,F){var z=Ua(A);if(typeof z!="function")throw Error(q(150));if(A=z.call(A),A==null)throw Error(q(151));for(var K=z=null,b=T,E=T=0,C=null,R=A.next();b!==null&&!R.done;E++,R=A.next()){b.index>E?(C=b,b=null):C=b.sibling;var N=w(I,b,R.value,F);if(N===null){b===null&&(b=C);break}t&&b&&N.alternate===null&&e(I,b),T=s(N,T,E),K===null?z=N:K.sibling=N,K=N,b=C}if(R.done)return n(I,b),De&&ds(I,E),z;if(b===null){for(;!R.done;E++,R=A.next())R=y(I,R.value,F),R!==null&&(T=s(R,T,E),K===null?z=R:K.sibling=R,K=R);return De&&ds(I,E),z}for(b=r(I,b);!R.done;E++,R=A.next())R=k(b,I,E,R.value,F),R!==null&&(t&&R.alternate!==null&&b.delete(R.key===null?E:R.key),T=s(R,T,E),K===null?z=R:K.sibling=R,K=R);return t&&b.forEach(function(M){return e(I,M)}),De&&ds(I,E),z}function O(I,T,A,F){if(typeof A=="object"&&A!==null&&A.type===vo&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case ic:e:{for(var z=A.key,K=T;K!==null;){if(K.key===z){if(z=A.type,z===vo){if(K.tag===7){n(I,K.sibling),T=i(K,A.props.children),T.return=I,I=T;break e}}else if(K.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===li&&Hy(z)===K.type){n(I,K.sibling),T=i(K,A.props),T.ref=Ha(I,K,A),T.return=I,I=T;break e}n(I,K);break}else e(I,K);K=K.sibling}A.type===vo?(T=_s(A.props.children,I.mode,F,A.key),T.return=I,I=T):(F=Uc(A.type,A.key,A.props,null,I.mode,F),F.ref=Ha(I,T,A),F.return=I,I=F)}return o(I);case go:e:{for(K=A.key;T!==null;){if(T.key===K)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){n(I,T.sibling),T=i(T,A.children||[]),T.return=I,I=T;break e}else{n(I,T);break}else e(I,T);T=T.sibling}T=Sf(A,I.mode,F),T.return=I,I=T}return o(I);case li:return K=A._init,O(I,T,K(A._payload),F)}if(Ya(A))return x(I,T,A,F);if(Ua(A))return D(I,T,A,F);mc(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,T!==null&&T.tag===6?(n(I,T.sibling),T=i(T,A),T.return=I,I=T):(n(I,T),T=If(A,I.mode,F),T.return=I,I=T),o(I)):n(I,T)}return O}var Wo=PE(!0),RE=PE(!1),dd=qi(null),hd=null,Ao=null,eg=null;function tg(){eg=Ao=hd=null}function ng(t){var e=dd.current;Re(dd),t._currentValue=e}function Tp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Lo(t,e){hd=t,eg=Ao=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kt=!0),t.firstContext=null)}function _n(t){var e=t._currentValue;if(eg!==t)if(t={context:t,memoizedValue:e,next:null},Ao===null){if(hd===null)throw Error(q(308));Ao=t,hd.dependencies={lanes:0,firstContext:t}}else Ao=Ao.next=t;return e}var gs=null;function rg(t){gs===null?gs=[t]:gs.push(t)}function xE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,rg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fr(t,r)}function Fr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ui=!1;function ig(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function NE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function bi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fr(t,n)}return i=r.interleaved,i===null?(e.next=e,rg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fr(t,n)}function Oc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$m(t,n)}}function Wy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fd(t,e,n,r){var i=t.updateQueue;ui=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(s!==null){var y=i.baseState;o=0,p=d=u=null,l=s;do{var w=l.lane,k=l.eventTime;if((r&w)===w){p!==null&&(p=p.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,D=l;switch(w=e,k=n,D.tag){case 1:if(x=D.payload,typeof x=="function"){y=x.call(k,y,w);break e}y=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=D.payload,w=typeof x=="function"?x.call(k,y,w):x,w==null)break e;y=Be({},y,w);break e;case 2:ui=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,w=i.effects,w===null?i.effects=[l]:w.push(l))}else k={eventTime:k,lane:w,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=k,u=y):p=p.next=k,o|=w;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;w=l,l=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(p===null&&(u=y),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ps|=o,t.lanes=o,t.memoizedState=y}}function qy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var su={},tr=qi(su),Ll=qi(su),Ml=qi(su);function vs(t){if(t===su)throw Error(q(174));return t}function sg(t,e){switch(Ce(Ml,e),Ce(Ll,t),Ce(tr,su),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:np(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=np(e,t)}Re(tr),Ce(tr,e)}function qo(){Re(tr),Re(Ll),Re(Ml)}function OE(t){vs(Ml.current);var e=vs(tr.current),n=np(e,t.type);e!==n&&(Ce(Ll,t),Ce(tr,n))}function og(t){Ll.current===t&&(Re(tr),Re(Ll))}var Ue=qi(0);function pd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vf=[];function ag(){for(var t=0;t<vf.length;t++)vf[t]._workInProgressVersionPrimary=null;vf.length=0}var Dc=Wr.ReactCurrentDispatcher,yf=Wr.ReactCurrentBatchConfig,ks=0,je=null,st=null,mt=null,md=!1,hl=!1,Vl=0,tC=0;function Rt(){throw Error(q(321))}function lg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mn(t[n],e[n]))return!1;return!0}function ug(t,e,n,r,i,s){if(ks=s,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dc.current=t===null||t.memoizedState===null?sC:oC,t=n(r,i),hl){s=0;do{if(hl=!1,Vl=0,25<=s)throw Error(q(301));s+=1,mt=st=null,e.updateQueue=null,Dc.current=aC,t=n(r,i)}while(hl)}if(Dc.current=gd,e=st!==null&&st.next!==null,ks=0,mt=st=je=null,md=!1,e)throw Error(q(300));return t}function cg(){var t=Vl!==0;return Vl=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?je.memoizedState=mt=t:mt=mt.next=t,mt}function En(){if(st===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=st.next;var e=mt===null?je.memoizedState:mt.next;if(e!==null)mt=e,st=t;else{if(t===null)throw Error(q(310));st=t,t={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},mt===null?je.memoizedState=mt=t:mt=mt.next=t}return mt}function Fl(t,e){return typeof e=="function"?e(t):e}function wf(t){var e=En(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=st,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var p=d.lane;if((ks&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var y={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=y,o=r):u=u.next=y,je.lanes|=p,Ps|=p}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,Mn(r,e.memoizedState)||(Kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,je.lanes|=s,Ps|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _f(t){var e=En(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Mn(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function DE(){}function LE(t,e){var n=je,r=En(),i=e(),s=!Mn(r.memoizedState,i);if(s&&(r.memoizedState=i,Kt=!0),r=r.queue,dg(FE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||mt!==null&&mt.memoizedState.tag&1){if(n.flags|=2048,Ul(9,VE.bind(null,n,r,i,e),void 0,null),gt===null)throw Error(q(349));ks&30||ME(n,e,i)}return i}function ME(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function VE(t,e,n,r){e.value=n,e.getSnapshot=r,UE(e)&&jE(t)}function FE(t,e,n){return n(function(){UE(e)&&jE(t)})}function UE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mn(t,n)}catch{return!0}}function jE(t){var e=Fr(t,1);e!==null&&Ln(e,t,1,-1)}function Ky(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fl,lastRenderedState:t},e.queue=t,t=t.dispatch=iC.bind(null,je,t),[e.memoizedState,t]}function Ul(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function BE(){return En().memoizedState}function Lc(t,e,n,r){var i=Gn();je.flags|=t,i.memoizedState=Ul(1|e,n,void 0,r===void 0?null:r)}function Jd(t,e,n,r){var i=En();r=r===void 0?null:r;var s=void 0;if(st!==null){var o=st.memoizedState;if(s=o.destroy,r!==null&&lg(r,o.deps)){i.memoizedState=Ul(e,n,s,r);return}}je.flags|=t,i.memoizedState=Ul(1|e,n,s,r)}function Gy(t,e){return Lc(8390656,8,t,e)}function dg(t,e){return Jd(2048,8,t,e)}function zE(t,e){return Jd(4,2,t,e)}function $E(t,e){return Jd(4,4,t,e)}function HE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function WE(t,e,n){return n=n!=null?n.concat([t]):null,Jd(4,4,HE.bind(null,e,t),n)}function hg(){}function qE(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function KE(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function GE(t,e,n){return ks&21?(Mn(n,e)||(n=Z0(),je.lanes|=n,Ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=n)}function nC(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var r=yf.transition;yf.transition={};try{t(!1),e()}finally{Se=n,yf.transition=r}}function QE(){return En().memoizedState}function rC(t,e,n){var r=ki(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},YE(t))XE(e,n);else if(n=xE(t,e,n,r),n!==null){var i=jt();Ln(n,t,r,i),JE(n,e,r)}}function iC(t,e,n){var r=ki(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(YE(t))XE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Mn(l,o)){var u=e.interleaved;u===null?(i.next=i,rg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=xE(t,e,i,r),n!==null&&(i=jt(),Ln(n,t,r,i),JE(n,e,r))}}function YE(t){var e=t.alternate;return t===je||e!==null&&e===je}function XE(t,e){hl=md=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function JE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$m(t,n)}}var gd={readContext:_n,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},sC={readContext:_n,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:Gy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4194308,4,HE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lc(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=rC.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:Ky,useDebugValue:hg,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=Ky(!1),e=t[0];return t=nC.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=Gn();if(De){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),gt===null)throw Error(q(349));ks&30||ME(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gy(FE.bind(null,r,s,t),[t]),r.flags|=2048,Ul(9,VE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=gt.identifierPrefix;if(De){var n=kr,r=Cr;n=(r&~(1<<32-Dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oC={readContext:_n,useCallback:qE,useContext:_n,useEffect:dg,useImperativeHandle:WE,useInsertionEffect:zE,useLayoutEffect:$E,useMemo:KE,useReducer:wf,useRef:BE,useState:function(){return wf(Fl)},useDebugValue:hg,useDeferredValue:function(t){var e=En();return GE(e,st.memoizedState,t)},useTransition:function(){var t=wf(Fl)[0],e=En().memoizedState;return[t,e]},useMutableSource:DE,useSyncExternalStore:LE,useId:QE,unstable_isNewReconciler:!1},aC={readContext:_n,useCallback:qE,useContext:_n,useEffect:dg,useImperativeHandle:WE,useInsertionEffect:zE,useLayoutEffect:$E,useMemo:KE,useReducer:_f,useRef:BE,useState:function(){return _f(Fl)},useDebugValue:hg,useDeferredValue:function(t){var e=En();return st===null?e.memoizedState=t:GE(e,st.memoizedState,t)},useTransition:function(){var t=_f(Fl)[0],e=En().memoizedState;return[t,e]},useMutableSource:DE,useSyncExternalStore:LE,useId:QE,unstable_isNewReconciler:!1};function Rn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ip(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zd={isMounted:function(t){return(t=t._reactInternals)?Bs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=ki(t),s=Dr(r,i);s.payload=e,n!=null&&(s.callback=n),e=bi(t,s,i),e!==null&&(Ln(e,t,i,r),Oc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=ki(t),s=Dr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=bi(t,s,i),e!==null&&(Ln(e,t,i,r),Oc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=ki(t),i=Dr(n,r);i.tag=2,e!=null&&(i.callback=e),e=bi(t,i,r),e!==null&&(Ln(e,t,r,n),Oc(e,t,r))}};function Qy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xl(n,r)||!xl(i,s):!0}function ZE(t,e,n){var r=!1,i=Mi,s=e.contextType;return typeof s=="object"&&s!==null?s=_n(s):(i=Qt(e)?bs:Mt.current,r=e.contextTypes,s=(r=r!=null)?$o(t,i):Mi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zd.enqueueReplaceState(e,e.state,null)}function Sp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ig(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_n(s):(s=Qt(e)?bs:Mt.current,i.context=$o(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ip(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zd.enqueueReplaceState(i,i.state,null),fd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ko(t,e){try{var n="",r=e;do n+=LA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ef(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ap(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lC=typeof WeakMap=="function"?WeakMap:Map;function e1(t,e,n){n=Dr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yd||(yd=!0,Lp=r),Ap(t,e)},n}function t1(t,e,n){n=Dr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ap(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ap(t,e),typeof r!="function"&&(Ci===null?Ci=new Set([this]):Ci.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new lC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=TC.bind(null,t,e,n),e.then(t,t))}function Jy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dr(-1,1),e.tag=2,bi(n,e,1))),n.lanes|=1),t)}var uC=Wr.ReactCurrentOwner,Kt=!1;function Ut(t,e,n,r){e.child=t===null?RE(e,null,n,r):Wo(e,t.child,n,r)}function ew(t,e,n,r,i){n=n.render;var s=e.ref;return Lo(e,i),r=ug(t,e,n,r,s,i),n=cg(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ur(t,e,i)):(De&&n&&Xm(e),e.flags|=1,Ut(t,e,r,i),e.child)}function tw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_g(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,n1(t,e,s,r,i)):(t=Uc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xl,n(o,r)&&t.ref===e.ref)return Ur(t,e,i)}return e.flags|=1,t=Pi(s,r),t.ref=e.ref,t.return=e,e.child=t}function n1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xl(s,r)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,Ur(t,e,i)}return bp(t,e,n,r,i)}function r1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Co,nn),nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(Co,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ce(Co,nn),nn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ce(Co,nn),nn|=r;return Ut(t,e,i,n),e.child}function i1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bp(t,e,n,r,i){var s=Qt(n)?bs:Mt.current;return s=$o(e,s),Lo(e,i),n=ug(t,e,n,r,s,i),r=cg(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ur(t,e,i)):(De&&r&&Xm(e),e.flags|=1,Ut(t,e,n,i),e.child)}function nw(t,e,n,r,i){if(Qt(n)){var s=!0;ld(e)}else s=!1;if(Lo(e,i),e.stateNode===null)Mc(t,e),ZE(e,n,r),Sp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=_n(d):(d=Qt(n)?bs:Mt.current,d=$o(e,d));var p=n.getDerivedStateFromProps,y=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Yy(e,o,r,d),ui=!1;var w=e.memoizedState;o.state=w,fd(e,r,o,i),u=e.memoizedState,l!==r||w!==u||Gt.current||ui?(typeof p=="function"&&(Ip(e,n,p,r),u=e.memoizedState),(l=ui||Qy(e,n,l,r,w,u,d))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,NE(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Rn(e.type,l),o.props=d,y=e.pendingProps,w=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=_n(u):(u=Qt(n)?bs:Mt.current,u=$o(e,u));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||w!==u)&&Yy(e,o,r,u),ui=!1,w=e.memoizedState,o.state=w,fd(e,r,o,i);var x=e.memoizedState;l!==y||w!==x||Gt.current||ui?(typeof k=="function"&&(Ip(e,n,k,r),x=e.memoizedState),(d=ui||Qy(e,n,d,r,w,x,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),r=!1)}return Cp(t,e,n,r,s,i)}function Cp(t,e,n,r,i,s){i1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&By(e,n,!1),Ur(t,e,s);r=e.stateNode,uC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wo(e,t.child,null,s),e.child=Wo(e,null,l,s)):Ut(t,e,l,s),e.memoizedState=r.state,i&&By(e,n,!0),e.child}function s1(t){var e=t.stateNode;e.pendingContext?jy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jy(t,e.context,!1),sg(t,e.containerInfo)}function rw(t,e,n,r,i){return Ho(),Zm(i),e.flags|=256,Ut(t,e,n,r),e.child}var kp={dehydrated:null,treeContext:null,retryLane:0};function Pp(t){return{baseLanes:t,cachePool:null,transitions:null}}function o1(t,e,n){var r=e.pendingProps,i=Ue.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ce(Ue,i&1),t===null)return Ep(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nh(o,r,0,null),t=_s(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pp(n),e.memoizedState=kp,t):fg(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return cC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Pi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Pi(l,s):(s=_s(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Pp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kp,r}return s=t.child,t=s.sibling,r=Pi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fg(t,e){return e=nh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gc(t,e,n,r){return r!==null&&Zm(r),Wo(e,t.child,null,n),t=fg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ef(Error(q(422))),gc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nh({mode:"visible",children:r.children},i,0,null),s=_s(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Wo(e,t.child,null,o),e.child.memoizedState=Pp(o),e.memoizedState=kp,s);if(!(e.mode&1))return gc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(q(419)),r=Ef(s,r,void 0),gc(t,e,o,r)}if(l=(o&t.childLanes)!==0,Kt||l){if(r=gt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fr(t,i),Ln(r,t,i,-1))}return wg(),r=Ef(Error(q(421))),gc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=IC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,rn=Ai(i.nextSibling),on=e,De=!0,Nn=null,t!==null&&(gn[vn++]=Cr,gn[vn++]=kr,gn[vn++]=Cs,Cr=t.id,kr=t.overflow,Cs=e),e=fg(e,r.children),e.flags|=4096,e)}function iw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Tp(t.return,e,n)}function Tf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function a1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ut(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&iw(t,n,e);else if(t.tag===19)iw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&pd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Tf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&pd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Tf(e,!0,n,null,s);break;case"together":Tf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Pi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dC(t,e,n){switch(e.tag){case 3:s1(e),Ho();break;case 5:OE(e);break;case 1:Qt(e.type)&&ld(e);break;case 4:sg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ce(dd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?o1(t,e,n):(Ce(Ue,Ue.current&1),t=Ur(t,e,n),t!==null?t.sibling:null);Ce(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return a1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,r1(t,e,n)}return Ur(t,e,n)}var l1,Rp,u1,c1;l1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rp=function(){};u1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vs(tr.current);var s=null;switch(n){case"input":i=Jf(t,i),r=Jf(t,r),s=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),s=[];break;case"textarea":i=tp(t,i),r=tp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=od)}rp(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Sl.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Sl.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};c1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wa(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hC(t,e,n){var r=e.pendingProps;switch(Jm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return Qt(e.type)&&ad(),xt(e),null;case 3:return r=e.stateNode,qo(),Re(Gt),Re(Mt),ag(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(Fp(Nn),Nn=null))),Rp(t,e),xt(e),null;case 5:og(e);var i=vs(Ml.current);if(n=e.type,t!==null&&e.stateNode!=null)u1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return xt(e),null}if(t=vs(tr.current),pc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yn]=e,r[Dl]=s,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<Ja.length;i++)Pe(Ja[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":fy(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":my(r,s),Pe("invalid",r)}rp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&fc(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&fc(r.textContent,l,t),i=["children",""+l]):Sl.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":sc(r),py(r,s,!0);break;case"textarea":sc(r),gy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=od)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=F0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yn]=e,t[Dl]=r,l1(t,e,!1,!1),e.stateNode=t;e:{switch(o=ip(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ja.length;i++)Pe(Ja[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":fy(t,r),i=Jf(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":my(t,r),i=tp(t,r),Pe("invalid",t);break;default:i=r}rp(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?B0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&U0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Al(t,u):typeof u=="number"&&Al(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Pe("scroll",t):u!=null&&Vm(t,s,u,o))}switch(n){case"input":sc(t),py(t,r,!1);break;case"textarea":sc(t),gy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Li(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xo(t,!!r.multiple,s,!1):r.defaultValue!=null&&xo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=od)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xt(e),null;case 6:if(t&&e.stateNode!=null)c1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=vs(Ml.current),vs(tr.current),pc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(s=r.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:fc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return xt(e),null;case 13:if(Re(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&rn!==null&&e.mode&1&&!(e.flags&128))kE(),Ho(),e.flags|=98560,s=!1;else if(s=pc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[Yn]=e}else Ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xt(e),s=!1}else Nn!==null&&(Fp(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?at===0&&(at=3):wg())),e.updateQueue!==null&&(e.flags|=4),xt(e),null);case 4:return qo(),Rp(t,e),t===null&&Nl(e.stateNode.containerInfo),xt(e),null;case 10:return ng(e.type._context),xt(e),null;case 17:return Qt(e.type)&&ad(),xt(e),null;case 19:if(Re(Ue),s=e.memoizedState,s===null)return xt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Wa(s,!1);else{if(at!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pd(t),o!==null){for(e.flags|=128,Wa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(Ue,Ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ye()>Go&&(e.flags|=128,r=!0,Wa(s,!1),e.lanes=4194304)}else{if(!r)if(t=pd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return xt(e),null}else 2*Ye()-s.renderingStartTime>Go&&n!==1073741824&&(e.flags|=128,r=!0,Wa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ye(),e.sibling=null,n=Ue.current,Ce(Ue,r?n&1|2:n&1),e):(xt(e),null);case 22:case 23:return yg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nn&1073741824&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function fC(t,e){switch(Jm(e),e.tag){case 1:return Qt(e.type)&&ad(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qo(),Re(Gt),Re(Mt),ag(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return og(e),null;case 13:if(Re(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Ue),null;case 4:return qo(),null;case 10:return ng(e.type._context),null;case 22:case 23:return yg(),null;case 24:return null;default:return null}}var vc=!1,Dt=!1,pC=typeof WeakSet=="function"?WeakSet:Set,J=null;function bo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(t,e,r)}else n.current=null}function xp(t,e,n){try{n()}catch(r){We(t,e,r)}}var sw=!1;function mC(t,e){if(pp=rd,t=mE(),Ym(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,p=0,y=t,w=null;t:for(;;){for(var k;y!==n||i!==0&&y.nodeType!==3||(l=o+i),y!==s||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(k=y.firstChild)!==null;)w=y,y=k;for(;;){if(y===t)break t;if(w===n&&++d===i&&(l=o),w===s&&++p===r&&(u=o),(k=y.nextSibling)!==null)break;y=w,w=y.parentNode}y=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(mp={focusedElem:t,selectionRange:n},rd=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var D=x.memoizedProps,O=x.memoizedState,I=e.stateNode,T=I.getSnapshotBeforeUpdate(e.elementType===e.type?D:Rn(e.type,D),O);I.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(F){We(e,e.return,F)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return x=sw,sw=!1,x}function fl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xp(e,n,s)}i=i.next}while(i!==r)}}function eh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Np(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function d1(t){var e=t.alternate;e!==null&&(t.alternate=null,d1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Dl],delete e[yp],delete e[Xb],delete e[Jb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function h1(t){return t.tag===5||t.tag===3||t.tag===4}function ow(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||h1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Op(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=od));else if(r!==4&&(t=t.child,t!==null))for(Op(t,e,n),t=t.sibling;t!==null;)Op(t,e,n),t=t.sibling}function Dp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dp(t,e,n),t=t.sibling;t!==null;)Dp(t,e,n),t=t.sibling}var wt=null,xn=!1;function si(t,e,n){for(n=n.child;n!==null;)f1(t,e,n),n=n.sibling}function f1(t,e,n){if(er&&typeof er.onCommitFiberUnmount=="function")try{er.onCommitFiberUnmount(qd,n)}catch{}switch(n.tag){case 5:Dt||bo(n,e);case 6:var r=wt,i=xn;wt=null,si(t,e,n),wt=r,xn=i,wt!==null&&(xn?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(xn?(t=wt,n=n.stateNode,t.nodeType===8?mf(t.parentNode,n):t.nodeType===1&&mf(t,n),Pl(t)):mf(wt,n.stateNode));break;case 4:r=wt,i=xn,wt=n.stateNode.containerInfo,xn=!0,si(t,e,n),wt=r,xn=i;break;case 0:case 11:case 14:case 15:if(!Dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xp(n,e,o),i=i.next}while(i!==r)}si(t,e,n);break;case 1:if(!Dt&&(bo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){We(n,e,l)}si(t,e,n);break;case 21:si(t,e,n);break;case 22:n.mode&1?(Dt=(r=Dt)||n.memoizedState!==null,si(t,e,n),Dt=r):si(t,e,n);break;default:si(t,e,n)}}function aw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pC),e.forEach(function(r){var i=SC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:wt=l.stateNode,xn=!1;break e;case 3:wt=l.stateNode.containerInfo,xn=!0;break e;case 4:wt=l.stateNode.containerInfo,xn=!0;break e}l=l.return}if(wt===null)throw Error(q(160));f1(s,o,i),wt=null,xn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){We(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)p1(e,t),e=e.sibling}function p1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Kn(t),r&4){try{fl(3,t,t.return),eh(3,t)}catch(D){We(t,t.return,D)}try{fl(5,t,t.return)}catch(D){We(t,t.return,D)}}break;case 1:Pn(e,t),Kn(t),r&512&&n!==null&&bo(n,n.return);break;case 5:if(Pn(e,t),Kn(t),r&512&&n!==null&&bo(n,n.return),t.flags&32){var i=t.stateNode;try{Al(i,"")}catch(D){We(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&M0(i,s),ip(l,o);var d=ip(l,s);for(o=0;o<u.length;o+=2){var p=u[o],y=u[o+1];p==="style"?B0(i,y):p==="dangerouslySetInnerHTML"?U0(i,y):p==="children"?Al(i,y):Vm(i,p,y,d)}switch(l){case"input":Zf(i,s);break;case"textarea":V0(i,s);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?xo(i,!!s.multiple,k,!1):w!==!!s.multiple&&(s.defaultValue!=null?xo(i,!!s.multiple,s.defaultValue,!0):xo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Dl]=s}catch(D){We(t,t.return,D)}}break;case 6:if(Pn(e,t),Kn(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){We(t,t.return,D)}}break;case 3:if(Pn(e,t),Kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pl(e.containerInfo)}catch(D){We(t,t.return,D)}break;case 4:Pn(e,t),Kn(t);break;case 13:Pn(e,t),Kn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gg=Ye())),r&4&&aw(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Dt=(d=Dt)||p,Pn(e,t),Dt=d):Pn(e,t),Kn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(J=t,p=t.child;p!==null;){for(y=J=p;J!==null;){switch(w=J,k=w.child,w.tag){case 0:case 11:case 14:case 15:fl(4,w,w.return);break;case 1:bo(w,w.return);var x=w.stateNode;if(typeof x.componentWillUnmount=="function"){r=w,n=w.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(D){We(r,n,D)}}break;case 5:bo(w,w.return);break;case 22:if(w.memoizedState!==null){uw(y);continue}}k!==null?(k.return=w,J=k):uw(y)}p=p.sibling}e:for(p=null,y=t;;){if(y.tag===5){if(p===null){p=y;try{i=y.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=j0("display",o))}catch(D){We(t,t.return,D)}}}else if(y.tag===6){if(p===null)try{y.stateNode.nodeValue=d?"":y.memoizedProps}catch(D){We(t,t.return,D)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;p===y&&(p=null),y=y.return}p===y&&(p=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Pn(e,t),Kn(t),r&4&&aw(t);break;case 21:break;default:Pn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(h1(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Al(i,""),r.flags&=-33);var s=ow(t);Dp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ow(t);Op(t,l,o);break;default:throw Error(q(161))}}catch(u){We(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gC(t,e,n){J=t,m1(t)}function m1(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vc;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Dt;l=vc;var d=Dt;if(vc=o,(Dt=u)&&!d)for(J=i;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?cw(i):u!==null?(u.return=o,J=u):cw(i);for(;s!==null;)J=s,m1(s),s=s.sibling;J=i,vc=l,Dt=d}lw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):lw(t)}}function lw(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Dt||eh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var y=p.dehydrated;y!==null&&Pl(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}Dt||e.flags&512&&Np(e)}catch(w){We(e,e.return,w)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function uw(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function cw(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eh(4,e)}catch(u){We(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){We(e,i,u)}}var s=e.return;try{Np(e)}catch(u){We(e,s,u)}break;case 5:var o=e.return;try{Np(e)}catch(u){We(e,o,u)}}}catch(u){We(e,e.return,u)}if(e===t){J=null;break}var l=e.sibling;if(l!==null){l.return=e.return,J=l;break}J=e.return}}var vC=Math.ceil,vd=Wr.ReactCurrentDispatcher,pg=Wr.ReactCurrentOwner,wn=Wr.ReactCurrentBatchConfig,ve=0,gt=null,rt=null,Tt=0,nn=0,Co=qi(0),at=0,jl=null,Ps=0,th=0,mg=0,pl=null,Wt=null,gg=0,Go=1/0,Ar=null,yd=!1,Lp=null,Ci=null,yc=!1,yi=null,wd=0,ml=0,Mp=null,Vc=-1,Fc=0;function jt(){return ve&6?Ye():Vc!==-1?Vc:Vc=Ye()}function ki(t){return t.mode&1?ve&2&&Tt!==0?Tt&-Tt:eC.transition!==null?(Fc===0&&(Fc=Z0()),Fc):(t=Se,t!==0||(t=window.event,t=t===void 0?16:oE(t.type)),t):1}function Ln(t,e,n,r){if(50<ml)throw ml=0,Mp=null,Error(q(185));nu(t,n,r),(!(ve&2)||t!==gt)&&(t===gt&&(!(ve&2)&&(th|=n),at===4&&di(t,Tt)),Yt(t,r),n===1&&ve===0&&!(e.mode&1)&&(Go=Ye()+500,Xd&&Ki()))}function Yt(t,e){var n=t.callbackNode;eb(t,e);var r=nd(t,t===gt?Tt:0);if(r===0)n!==null&&wy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wy(n),e===1)t.tag===0?Zb(dw.bind(null,t)):AE(dw.bind(null,t)),Qb(function(){!(ve&6)&&Ki()}),n=null;else{switch(eE(r)){case 1:n=zm;break;case 4:n=X0;break;case 16:n=td;break;case 536870912:n=J0;break;default:n=td}n=I1(n,g1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function g1(t,e){if(Vc=-1,Fc=0,ve&6)throw Error(q(327));var n=t.callbackNode;if(Mo()&&t.callbackNode!==n)return null;var r=nd(t,t===gt?Tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_d(t,r);else{e=r;var i=ve;ve|=2;var s=y1();(gt!==t||Tt!==e)&&(Ar=null,Go=Ye()+500,ws(t,e));do try{_C();break}catch(l){v1(t,l)}while(!0);tg(),vd.current=s,ve=i,rt!==null?e=0:(gt=null,Tt=0,e=at)}if(e!==0){if(e===2&&(i=up(t),i!==0&&(r=i,e=Vp(t,i))),e===1)throw n=jl,ws(t,0),di(t,r),Yt(t,Ye()),n;if(e===6)di(t,r);else{if(i=t.current.alternate,!(r&30)&&!yC(i)&&(e=_d(t,r),e===2&&(s=up(t),s!==0&&(r=s,e=Vp(t,s))),e===1))throw n=jl,ws(t,0),di(t,r),Yt(t,Ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:hs(t,Wt,Ar);break;case 3:if(di(t,r),(r&130023424)===r&&(e=gg+500-Ye(),10<e)){if(nd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vp(hs.bind(null,t,Wt,Ar),e);break}hs(t,Wt,Ar);break;case 4:if(di(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vC(r/1960))-r,10<r){t.timeoutHandle=vp(hs.bind(null,t,Wt,Ar),r);break}hs(t,Wt,Ar);break;case 5:hs(t,Wt,Ar);break;default:throw Error(q(329))}}}return Yt(t,Ye()),t.callbackNode===n?g1.bind(null,t):null}function Vp(t,e){var n=pl;return t.current.memoizedState.isDehydrated&&(ws(t,e).flags|=256),t=_d(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&Fp(e)),t}function Fp(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function yC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Mn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function di(t,e){for(e&=~mg,e&=~th,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dn(e),r=1<<n;t[n]=-1,e&=~r}}function dw(t){if(ve&6)throw Error(q(327));Mo();var e=nd(t,0);if(!(e&1))return Yt(t,Ye()),null;var n=_d(t,e);if(t.tag!==0&&n===2){var r=up(t);r!==0&&(e=r,n=Vp(t,r))}if(n===1)throw n=jl,ws(t,0),di(t,e),Yt(t,Ye()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hs(t,Wt,Ar),Yt(t,Ye()),null}function vg(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(Go=Ye()+500,Xd&&Ki())}}function Rs(t){yi!==null&&yi.tag===0&&!(ve&6)&&Mo();var e=ve;ve|=1;var n=wn.transition,r=Se;try{if(wn.transition=null,Se=1,t)return t()}finally{Se=r,wn.transition=n,ve=e,!(ve&6)&&Ki()}}function yg(){nn=Co.current,Re(Co)}function ws(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Gb(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(Jm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ad();break;case 3:qo(),Re(Gt),Re(Mt),ag();break;case 5:og(r);break;case 4:qo();break;case 13:Re(Ue);break;case 19:Re(Ue);break;case 10:ng(r.type._context);break;case 22:case 23:yg()}n=n.return}if(gt=t,rt=t=Pi(t.current,null),Tt=nn=e,at=0,jl=null,mg=th=Ps=0,Wt=pl=null,gs!==null){for(e=0;e<gs.length;e++)if(n=gs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gs=null}return t}function v1(t,e){do{var n=rt;try{if(tg(),Dc.current=gd,md){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}md=!1}if(ks=0,mt=st=je=null,hl=!1,Vl=0,pg.current=null,n===null||n.return===null){at=1,jl=e,rt=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Tt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,y=p.tag;if(!(p.mode&1)&&(y===0||y===11||y===15)){var w=p.alternate;w?(p.updateQueue=w.updateQueue,p.memoizedState=w.memoizedState,p.lanes=w.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=Jy(o);if(k!==null){k.flags&=-257,Zy(k,o,l,s,e),k.mode&1&&Xy(s,d,e),e=k,u=d;var x=e.updateQueue;if(x===null){var D=new Set;D.add(u),e.updateQueue=D}else x.add(u);break e}else{if(!(e&1)){Xy(s,d,e),wg();break e}u=Error(q(426))}}else if(De&&l.mode&1){var O=Jy(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Zy(O,o,l,s,e),Zm(Ko(u,l));break e}}s=u=Ko(u,l),at!==4&&(at=2),pl===null?pl=[s]:pl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=e1(s,u,e);Wy(s,I);break e;case 1:l=u;var T=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Ci===null||!Ci.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var F=t1(s,l,e);Wy(s,F);break e}}s=s.return}while(s!==null)}_1(n)}catch(z){e=z,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(!0)}function y1(){var t=vd.current;return vd.current=gd,t===null?gd:t}function wg(){(at===0||at===3||at===2)&&(at=4),gt===null||!(Ps&268435455)&&!(th&268435455)||di(gt,Tt)}function _d(t,e){var n=ve;ve|=2;var r=y1();(gt!==t||Tt!==e)&&(Ar=null,ws(t,e));do try{wC();break}catch(i){v1(t,i)}while(!0);if(tg(),ve=n,vd.current=r,rt!==null)throw Error(q(261));return gt=null,Tt=0,at}function wC(){for(;rt!==null;)w1(rt)}function _C(){for(;rt!==null&&!WA();)w1(rt)}function w1(t){var e=T1(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?_1(t):rt=e,pg.current=null}function _1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fC(n,e),n!==null){n.flags&=32767,rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,rt=null;return}}else if(n=hC(n,e,nn),n!==null){rt=n;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);at===0&&(at=5)}function hs(t,e,n){var r=Se,i=wn.transition;try{wn.transition=null,Se=1,EC(t,e,n,r)}finally{wn.transition=i,Se=r}return null}function EC(t,e,n,r){do Mo();while(yi!==null);if(ve&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(tb(t,s),t===gt&&(rt=gt=null,Tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yc||(yc=!0,I1(td,function(){return Mo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var o=Se;Se=1;var l=ve;ve|=4,pg.current=null,mC(t,n),p1(n,t),Bb(mp),rd=!!pp,mp=pp=null,t.current=n,gC(n),qA(),ve=l,Se=o,wn.transition=s}else t.current=n;if(yc&&(yc=!1,yi=t,wd=i),s=t.pendingLanes,s===0&&(Ci=null),QA(n.stateNode),Yt(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yd)throw yd=!1,t=Lp,Lp=null,t;return wd&1&&t.tag!==0&&Mo(),s=t.pendingLanes,s&1?t===Mp?ml++:(ml=0,Mp=t):ml=0,Ki(),null}function Mo(){if(yi!==null){var t=eE(wd),e=wn.transition,n=Se;try{if(wn.transition=null,Se=16>t?16:t,yi===null)var r=!1;else{if(t=yi,yi=null,wd=0,ve&6)throw Error(q(331));var i=ve;for(ve|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(J=d;J!==null;){var p=J;switch(p.tag){case 0:case 11:case 15:fl(8,p,s)}var y=p.child;if(y!==null)y.return=p,J=y;else for(;J!==null;){p=J;var w=p.sibling,k=p.return;if(d1(p),p===d){J=null;break}if(w!==null){w.return=k,J=w;break}J=k}}}var x=s.alternate;if(x!==null){var D=x.child;if(D!==null){x.child=null;do{var O=D.sibling;D.sibling=null,D=O}while(D!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fl(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,J=I;break e}J=s.return}}var T=t.current;for(J=T;J!==null;){o=J;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,J=A;else e:for(o=T;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:eh(9,l)}}catch(z){We(l,l.return,z)}if(l===o){J=null;break e}var F=l.sibling;if(F!==null){F.return=l.return,J=F;break e}J=l.return}}if(ve=i,Ki(),er&&typeof er.onPostCommitFiberRoot=="function")try{er.onPostCommitFiberRoot(qd,t)}catch{}r=!0}return r}finally{Se=n,wn.transition=e}}return!1}function hw(t,e,n){e=Ko(n,e),e=e1(t,e,1),t=bi(t,e,1),e=jt(),t!==null&&(nu(t,1,e),Yt(t,e))}function We(t,e,n){if(t.tag===3)hw(t,t,n);else for(;e!==null;){if(e.tag===3){hw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ci===null||!Ci.has(r))){t=Ko(n,t),t=t1(e,t,1),e=bi(e,t,1),t=jt(),e!==null&&(nu(e,1,t),Yt(e,t));break}}e=e.return}}function TC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,gt===t&&(Tt&n)===n&&(at===4||at===3&&(Tt&130023424)===Tt&&500>Ye()-gg?ws(t,0):mg|=n),Yt(t,e)}function E1(t,e){e===0&&(t.mode&1?(e=lc,lc<<=1,!(lc&130023424)&&(lc=4194304)):e=1);var n=jt();t=Fr(t,e),t!==null&&(nu(t,e,n),Yt(t,n))}function IC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),E1(t,n)}function SC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),E1(t,n)}var T1;T1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)Kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kt=!1,dC(t,e,n);Kt=!!(t.flags&131072)}else Kt=!1,De&&e.flags&1048576&&bE(e,cd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Mc(t,e),t=e.pendingProps;var i=$o(e,Mt.current);Lo(e,n),i=ug(null,e,r,t,i,n);var s=cg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(r)?(s=!0,ld(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ig(e),i.updater=Zd,e.stateNode=i,i._reactInternals=e,Sp(e,r,t,n),e=Cp(null,e,r,!0,s,n)):(e.tag=0,De&&s&&Xm(e),Ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Mc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bC(r),t=Rn(r,t),i){case 0:e=bp(null,e,r,t,n);break e;case 1:e=nw(null,e,r,t,n);break e;case 11:e=ew(null,e,r,t,n);break e;case 14:e=tw(null,e,r,Rn(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),bp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),nw(t,e,r,i,n);case 3:e:{if(s1(e),t===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,NE(t,e),fd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ko(Error(q(423)),e),e=rw(t,e,r,n,i);break e}else if(r!==i){i=Ko(Error(q(424)),e),e=rw(t,e,r,n,i);break e}else for(rn=Ai(e.stateNode.containerInfo.firstChild),on=e,De=!0,Nn=null,n=RE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ho(),r===i){e=Ur(t,e,n);break e}Ut(t,e,r,n)}e=e.child}return e;case 5:return OE(e),t===null&&Ep(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gp(r,i)?o=null:s!==null&&gp(r,s)&&(e.flags|=32),i1(t,e),Ut(t,e,o,n),e.child;case 6:return t===null&&Ep(e),null;case 13:return o1(t,e,n);case 4:return sg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wo(e,null,r,n):Ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),ew(t,e,r,i,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ce(dd,r._currentValue),r._currentValue=o,s!==null)if(Mn(s.value,o)){if(s.children===i.children&&!Gt.current){e=Ur(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Dr(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Tp(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Tp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Lo(e,n),i=_n(i),r=r(i),e.flags|=1,Ut(t,e,r,n),e.child;case 14:return r=e.type,i=Rn(r,e.pendingProps),i=Rn(r.type,i),tw(t,e,r,i,n);case 15:return n1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),Mc(t,e),e.tag=1,Qt(r)?(t=!0,ld(e)):t=!1,Lo(e,n),ZE(e,r,i),Sp(e,r,i,n),Cp(null,e,r,!0,t,n);case 19:return a1(t,e,n);case 22:return r1(t,e,n)}throw Error(q(156,e.tag))};function I1(t,e){return Y0(t,e)}function AC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,r){return new AC(t,e,n,r)}function _g(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bC(t){if(typeof t=="function")return _g(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Um)return 11;if(t===jm)return 14}return 2}function Pi(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_g(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vo:return _s(n.children,i,s,e);case Fm:o=8,i|=8;break;case Gf:return t=yn(12,n,e,i|2),t.elementType=Gf,t.lanes=s,t;case Qf:return t=yn(13,n,e,i),t.elementType=Qf,t.lanes=s,t;case Yf:return t=yn(19,n,e,i),t.elementType=Yf,t.lanes=s,t;case O0:return nh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x0:o=10;break e;case N0:o=9;break e;case Um:o=11;break e;case jm:o=14;break e;case li:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=yn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function _s(t,e,n,r){return t=yn(7,t,r,e),t.lanes=n,t}function nh(t,e,n,r){return t=yn(22,t,r,e),t.elementType=O0,t.lanes=n,t.stateNode={isHidden:!1},t}function If(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function Sf(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rf(0),this.expirationTimes=rf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Eg(t,e,n,r,i,s,o,l,u){return t=new CC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ig(s),t}function kC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:go,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function S1(t){if(!t)return Mi;t=t._reactInternals;e:{if(Bs(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(Qt(n))return SE(t,n,e)}return e}function A1(t,e,n,r,i,s,o,l,u){return t=Eg(n,r,!0,t,i,s,o,l,u),t.context=S1(null),n=t.current,r=jt(),i=ki(n),s=Dr(r,i),s.callback=e??null,bi(n,s,i),t.current.lanes=i,nu(t,i,r),Yt(t,r),t}function rh(t,e,n,r){var i=e.current,s=jt(),o=ki(i);return n=S1(n),e.context===null?e.context=n:e.pendingContext=n,e=Dr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=bi(i,e,o),t!==null&&(Ln(t,i,o,s),Oc(t,i,o)),o}function Ed(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tg(t,e){fw(t,e),(t=t.alternate)&&fw(t,e)}function PC(){return null}var b1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ig(t){this._internalRoot=t}ih.prototype.render=Ig.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));rh(t,e,null,null)};ih.prototype.unmount=Ig.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rs(function(){rh(null,t,null,null)}),e[Vr]=null}};function ih(t){this._internalRoot=t}ih.prototype.unstable_scheduleHydration=function(t){if(t){var e=rE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ci.length&&e!==0&&e<ci[n].priority;n++);ci.splice(n,0,t),n===0&&sE(t)}};function Sg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pw(){}function RC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Ed(o);s.call(d)}}var o=A1(e,r,t,0,null,!1,!1,"",pw);return t._reactRootContainer=o,t[Vr]=o.current,Nl(t.nodeType===8?t.parentNode:t),Rs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Ed(u);l.call(d)}}var u=Eg(t,0,!1,null,null,!1,!1,"",pw);return t._reactRootContainer=u,t[Vr]=u.current,Nl(t.nodeType===8?t.parentNode:t),Rs(function(){rh(e,u,n,r)}),u}function oh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ed(o);l.call(u)}}rh(e,o,t,i)}else o=RC(n,e,t,i,r);return Ed(o)}tE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xa(e.pendingLanes);n!==0&&($m(e,n|1),Yt(e,Ye()),!(ve&6)&&(Go=Ye()+500,Ki()))}break;case 13:Rs(function(){var r=Fr(t,1);if(r!==null){var i=jt();Ln(r,t,1,i)}}),Tg(t,1)}};Hm=function(t){if(t.tag===13){var e=Fr(t,134217728);if(e!==null){var n=jt();Ln(e,t,134217728,n)}Tg(t,134217728)}};nE=function(t){if(t.tag===13){var e=ki(t),n=Fr(t,e);if(n!==null){var r=jt();Ln(n,t,e,r)}Tg(t,e)}};rE=function(){return Se};iE=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};op=function(t,e,n){switch(e){case"input":if(Zf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yd(r);if(!i)throw Error(q(90));L0(r),Zf(r,i)}}}break;case"textarea":V0(t,n);break;case"select":e=n.value,e!=null&&xo(t,!!n.multiple,e,!1)}};H0=vg;W0=Rs;var xC={usingClientEntryPoint:!1,Events:[iu,Eo,Yd,z0,$0,vg]},qa={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NC={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G0(t),t===null?null:t.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||PC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{qd=wc.inject(NC),er=wc}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xC;dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sg(e))throw Error(q(200));return kC(t,e,null,n)};dn.createRoot=function(t,e){if(!Sg(t))throw Error(q(299));var n=!1,r="",i=b1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Eg(t,1,!1,null,null,n,!1,r,i),t[Vr]=e.current,Nl(t.nodeType===8?t.parentNode:t),new Ig(e)};dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=G0(e),t=t===null?null:t.stateNode,t};dn.flushSync=function(t){return Rs(t)};dn.hydrate=function(t,e,n){if(!sh(e))throw Error(q(200));return oh(null,t,e,!0,n)};dn.hydrateRoot=function(t,e,n){if(!Sg(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=b1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=A1(e,null,t,1,n??null,i,!1,s,o),t[Vr]=e.current,Nl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ih(e)};dn.render=function(t,e,n){if(!sh(e))throw Error(q(200));return oh(null,t,e,!1,n)};dn.unmountComponentAtNode=function(t){if(!sh(t))throw Error(q(40));return t._reactRootContainer?(Rs(function(){oh(null,null,t,!1,function(){t._reactRootContainer=null,t[Vr]=null})}),!0):!1};dn.unstable_batchedUpdates=vg;dn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sh(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return oh(t,e,n,!1,r)};dn.version="18.3.1-next-f1338f8080-20240426";function C1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C1)}catch(t){console.error(t)}}C1(),C0.exports=dn;var OC=C0.exports,mw=OC;qf.createRoot=mw.createRoot,qf.hydrateRoot=mw.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bl.apply(this,arguments)}var wi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wi||(wi={}));const gw="popstate";function DC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Up("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Td(i)}return MC(e,n,null,t)}function Xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function k1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function LC(){return Math.random().toString(36).substr(2,8)}function vw(t,e){return{usr:t.state,key:t.key,idx:e}}function Up(t,e,n,r){return n===void 0&&(n=null),Bl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?la(e):e,{state:n,key:e&&e.key||r||LC()})}function Td(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function la(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function MC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=wi.Pop,u=null,d=p();d==null&&(d=0,o.replaceState(Bl({},o.state,{idx:d}),""));function p(){return(o.state||{idx:null}).idx}function y(){l=wi.Pop;let O=p(),I=O==null?null:O-d;d=O,u&&u({action:l,location:D.location,delta:I})}function w(O,I){l=wi.Push;let T=Up(D.location,O,I);d=p()+1;let A=vw(T,d),F=D.createHref(T);try{o.pushState(A,"",F)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(F)}s&&u&&u({action:l,location:D.location,delta:1})}function k(O,I){l=wi.Replace;let T=Up(D.location,O,I);d=p();let A=vw(T,d),F=D.createHref(T);o.replaceState(A,"",F),s&&u&&u({action:l,location:D.location,delta:0})}function x(O){let I=i.location.origin!=="null"?i.location.origin:i.location.href,T=typeof O=="string"?O:Td(O);return T=T.replace(/ $/,"%20"),Xe(I,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,I)}let D={get action(){return l},get location(){return t(i,o)},listen(O){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(gw,y),u=O,()=>{i.removeEventListener(gw,y),u=null}},createHref(O){return e(i,O)},createURL:x,encodeLocation(O){let I=x(O);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:w,replace:k,go(O){return o.go(O)}};return D}var yw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(yw||(yw={}));function VC(t,e,n){return n===void 0&&(n="/"),FC(t,e,n,!1)}function FC(t,e,n,r){let i=typeof e=="string"?la(e):e,s=Ag(i.pathname||"/",n);if(s==null)return null;let o=P1(t);UC(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let d=YC(s);l=GC(o[u],d,r)}return l}function P1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Xe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=Ri([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(Xe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),P1(s.children,e,p,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:qC(d,s.index),routesMeta:p})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of R1(s.path))i(s,o,u)}),e}function R1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=R1(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function UC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:KC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jC=/^:[\w-]+$/,BC=3,zC=2,$C=1,HC=10,WC=-2,ww=t=>t==="*";function qC(t,e){let n=t.split("/"),r=n.length;return n.some(ww)&&(r+=WC),e&&(r+=zC),n.filter(i=>!ww(i)).reduce((i,s)=>i+(jC.test(s)?BC:s===""?$C:HC),r)}function KC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function GC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,p=s==="/"?e:e.slice(s.length)||"/",y=_w({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},p),w=u.route;if(!y&&d&&n&&!r[r.length-1].route.index&&(y=_w({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},p)),!y)return null;Object.assign(i,y.params),o.push({params:i,pathname:Ri([s,y.pathname]),pathnameBase:ek(Ri([s,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(s=Ri([s,y.pathnameBase]))}return o}function _w(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=QC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,p,y)=>{let{paramName:w,isOptional:k}=p;if(w==="*"){let D=l[y]||"";o=s.slice(0,s.length-D.length).replace(/(.)\/+$/,"$1")}const x=l[y];return k&&!x?d[w]=void 0:d[w]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:t}}function QC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),k1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function YC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return k1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ag(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function XC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?la(t):t;return{pathname:n?n.startsWith("/")?n:JC(n,e):e,search:tk(r),hash:nk(i)}}function JC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Af(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ZC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function bg(t,e){let n=ZC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Cg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=la(t):(i=Bl({},t),Xe(!i.pathname||!i.pathname.includes("?"),Af("?","pathname","search",i)),Xe(!i.pathname||!i.pathname.includes("#"),Af("#","pathname","hash",i)),Xe(!i.search||!i.search.includes("#"),Af("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let y=e.length-1;if(!r&&o.startsWith("..")){let w=o.split("/");for(;w[0]==="..";)w.shift(),y-=1;i.pathname=w.join("/")}l=y>=0?e[y]:"/"}let u=XC(i,l),d=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||p)&&(u.pathname+="/"),u}const Ri=t=>t.join("/").replace(/\/\/+/g,"/"),ek=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const x1=["post","put","patch","delete"];new Set(x1);const ik=["get",...x1];new Set(ik);/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zl.apply(this,arguments)}const kg=$.createContext(null),sk=$.createContext(null),Gi=$.createContext(null),ah=$.createContext(null),qr=$.createContext({outlet:null,matches:[],isDataRoute:!1}),N1=$.createContext(null);function ok(t,e){let{relative:n}=e===void 0?{}:e;ua()||Xe(!1);let{basename:r,navigator:i}=$.useContext(Gi),{hash:s,pathname:o,search:l}=D1(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ri([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ua(){return $.useContext(ah)!=null}function ou(){return ua()||Xe(!1),$.useContext(ah).location}function O1(t){$.useContext(Gi).static||$.useLayoutEffect(t)}function Pg(){let{isDataRoute:t}=$.useContext(qr);return t?_k():ak()}function ak(){ua()||Xe(!1);let t=$.useContext(kg),{basename:e,future:n,navigator:r}=$.useContext(Gi),{matches:i}=$.useContext(qr),{pathname:s}=ou(),o=JSON.stringify(bg(i,n.v7_relativeSplatPath)),l=$.useRef(!1);return O1(()=>{l.current=!0}),$.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let y=Cg(d,JSON.parse(o),s,p.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Ri([e,y.pathname])),(p.replace?r.replace:r.push)(y,p.state,p)},[e,r,o,s,t])}function lk(){let{matches:t}=$.useContext(qr),e=t[t.length-1];return e?e.params:{}}function D1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=$.useContext(Gi),{matches:i}=$.useContext(qr),{pathname:s}=ou(),o=JSON.stringify(bg(i,r.v7_relativeSplatPath));return $.useMemo(()=>Cg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function uk(t,e){return ck(t,e)}function ck(t,e,n,r){ua()||Xe(!1);let{navigator:i}=$.useContext(Gi),{matches:s}=$.useContext(qr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=ou(),p;if(e){var y;let O=typeof e=="string"?la(e):e;u==="/"||(y=O.pathname)!=null&&y.startsWith(u)||Xe(!1),p=O}else p=d;let w=p.pathname||"/",k=w;if(u!=="/"){let O=u.replace(/^\//,"").split("/");k="/"+w.replace(/^\//,"").split("/").slice(O.length).join("/")}let x=VC(t,{pathname:k}),D=mk(x&&x.map(O=>Object.assign({},O,{params:Object.assign({},l,O.params),pathname:Ri([u,i.encodeLocation?i.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?u:Ri([u,i.encodeLocation?i.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),s,n,r);return e&&D?$.createElement(ah.Provider,{value:{location:zl({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:wi.Pop}},D):D}function dk(){let t=wk(),e=rk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),n?$.createElement("pre",{style:i},n):null,null)}const hk=$.createElement(dk,null);class fk extends $.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?$.createElement(qr.Provider,{value:this.props.routeContext},$.createElement(N1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pk(t){let{routeContext:e,match:n,children:r}=t,i=$.useContext(kg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(qr.Provider,{value:e},r)}function mk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);p>=0||Xe(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:w,errors:k}=n,x=y.route.loader&&w[y.route.id]===void 0&&(!k||k[y.route.id]===void 0);if(y.route.lazy||x){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,w)=>{let k,x=!1,D=null,O=null;n&&(k=l&&y.route.id?l[y.route.id]:void 0,D=y.route.errorElement||hk,u&&(d<0&&w===0?(x=!0,O=null):d===w&&(x=!0,O=y.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,w+1)),T=()=>{let A;return k?A=D:x?A=O:y.route.Component?A=$.createElement(y.route.Component,null):y.route.element?A=y.route.element:A=p,$.createElement(pk,{match:y,routeContext:{outlet:p,matches:I,isDataRoute:n!=null},children:A})};return n&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?$.createElement(fk,{location:n.location,revalidation:n.revalidation,component:D,error:k,children:T(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):T()},null)}var L1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(L1||{}),Id=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Id||{});function gk(t){let e=$.useContext(kg);return e||Xe(!1),e}function vk(t){let e=$.useContext(sk);return e||Xe(!1),e}function yk(t){let e=$.useContext(qr);return e||Xe(!1),e}function M1(t){let e=yk(),n=e.matches[e.matches.length-1];return n.route.id||Xe(!1),n.route.id}function wk(){var t;let e=$.useContext(N1),n=vk(Id.UseRouteError),r=M1(Id.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function _k(){let{router:t}=gk(L1.UseNavigateStable),e=M1(Id.UseNavigateStable),n=$.useRef(!1);return O1(()=>{n.current=!0}),$.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,zl({fromRouteId:e},s)))},[t,e])}function Ek(t){let{to:e,replace:n,state:r,relative:i}=t;ua()||Xe(!1);let{future:s,static:o}=$.useContext(Gi),{matches:l}=$.useContext(qr),{pathname:u}=ou(),d=Pg(),p=Cg(e,bg(l,s.v7_relativeSplatPath),u,i==="path"),y=JSON.stringify(p);return $.useEffect(()=>d(JSON.parse(y),{replace:n,state:r,relative:i}),[d,y,i,n,r]),null}function Sr(t){Xe(!1)}function Tk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wi.Pop,navigator:s,static:o=!1,future:l}=t;ua()&&Xe(!1);let u=e.replace(/^\/*/,"/"),d=$.useMemo(()=>({basename:u,navigator:s,static:o,future:zl({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=la(r));let{pathname:p="/",search:y="",hash:w="",state:k=null,key:x="default"}=r,D=$.useMemo(()=>{let O=Ag(p,u);return O==null?null:{location:{pathname:O,search:y,hash:w,state:k,key:x},navigationType:i}},[u,p,y,w,k,x,i]);return D==null?null:$.createElement(Gi.Provider,{value:d},$.createElement(ah.Provider,{children:n,value:D}))}function Ik(t){let{children:e,location:n}=t;return uk(jp(e),n)}new Promise(()=>{});function jp(t,e){e===void 0&&(e=[]);let n=[];return $.Children.forEach(t,(r,i)=>{if(!$.isValidElement(r))return;let s=[...e,i];if(r.type===$.Fragment){n.push.apply(n,jp(r.props.children,s));return}r.type!==Sr&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=jp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bp(){return Bp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bp.apply(this,arguments)}function Sk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Ak(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bk(t,e){return t.button===0&&(!e||e==="_self")&&!Ak(t)}const Ck=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],kk="6";try{window.__reactRouterVersion=kk}catch{}const Pk="startTransition",Ew=TA[Pk];function Rk(t){let{basename:e,children:n,future:r,window:i}=t,s=$.useRef();s.current==null&&(s.current=DC({window:i,v5Compat:!0}));let o=s.current,[l,u]=$.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},p=$.useCallback(y=>{d&&Ew?Ew(()=>u(y)):u(y)},[u,d]);return $.useLayoutEffect(()=>o.listen(p),[o,p]),$.createElement(Tk,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const xk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Nk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cs=$.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:d,preventScrollReset:p,unstable_viewTransition:y}=e,w=Sk(e,Ck),{basename:k}=$.useContext(Gi),x,D=!1;if(typeof d=="string"&&Nk.test(d)&&(x=d,xk))try{let A=new URL(window.location.href),F=d.startsWith("//")?new URL(A.protocol+d):new URL(d),z=Ag(F.pathname,k);F.origin===A.origin&&z!=null?d=z+F.search+F.hash:D=!0}catch{}let O=ok(d,{relative:i}),I=Ok(d,{replace:o,state:l,target:u,preventScrollReset:p,relative:i,unstable_viewTransition:y});function T(A){r&&r(A),A.defaultPrevented||I(A)}return $.createElement("a",Bp({},w,{href:x||O,onClick:D||s?r:T,ref:n,target:u}))});var Tw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Tw||(Tw={}));var Iw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Iw||(Iw={}));function Ok(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Pg(),d=ou(),p=D1(t,{relative:o});return $.useCallback(y=>{if(bk(y,n)){y.preventDefault();let w=r!==void 0?r:Td(d)===Td(p);u(t,{replace:w,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[d,u,p,r,i,n,t,s,o,l])}const Dk="/assets/italy_4552534-BJN6_D93.png";var Sw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Lk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},F1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,p=s>>2,y=(s&3)<<4|l>>4;let w=(l&15)<<2|d>>6,k=d&63;u||(k=64,o||(w=64)),r.push(n[p],n[y],n[w],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(V1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Lk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const y=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||y==null)throw new Mk;const w=s<<2|l>>4;if(r.push(w),d!==64){const k=l<<4&240|d>>2;if(r.push(k),y!==64){const x=d<<6&192|y;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vk=function(t){const e=V1(t);return F1.encodeByteArray(e,!0)},Sd=function(t){return Vk(t).replace(/\./g,"")},U1=function(t){try{return F1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=()=>Fk().__FIREBASE_DEFAULTS__,jk=()=>{if(typeof process>"u"||typeof Sw>"u")return;const t=Sw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&U1(t[1]);return e&&JSON.parse(e)},lh=()=>{try{return Uk()||jk()||Bk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},j1=t=>{var e,n;return(n=(e=lh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},B1=t=>{const e=j1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},z1=()=>{var t;return(t=lh())===null||t===void 0?void 0:t.config},$1=t=>{var e;return(e=lh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Sd(JSON.stringify(n)),Sd(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $k(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function Hk(){var t;const e=(t=lh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kk(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gk(){return!Hk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qk(){try{return typeof indexedDB=="object"}catch{return!1}}function Yk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk="FirebaseError";class dr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Xk,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,au.prototype.create)}}class au{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Jk(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new dr(i,l,r)}}function Jk(t,e){return t.replace(Zk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Zk=/\{\$([^}]+)}/g;function eP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ad(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Aw(s)&&Aw(o)){if(!Ad(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Aw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Za(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function el(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tP(t,e){const n=new nP(t,e);return n.subscribe.bind(n)}class nP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bf),i.error===void 0&&(i.error=bf),i.complete===void 0&&(i.complete=bf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class Vi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oP(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sP(t){return t===fs?void 0:t}function oP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const lP={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},uP=pe.INFO,cP={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},dP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=cP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rg{constructor(e){this.name=e,this._logLevel=uP,this._logHandler=dP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const hP=(t,e)=>e.some(n=>t instanceof n);let bw,Cw;function fP(){return bw||(bw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pP(){return Cw||(Cw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const W1=new WeakMap,zp=new WeakMap,q1=new WeakMap,Cf=new WeakMap,xg=new WeakMap;function mP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&W1.set(n,t)}).catch(()=>{}),xg.set(e,t),e}function gP(t){if(zp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zp.set(t,e)}let $p={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||q1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vP(t){$p=t($p)}function yP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kf(this),e,...n);return q1.set(r,e.sort?e.sort():[e]),xi(r)}:pP().includes(t)?function(...e){return t.apply(kf(this),e),xi(W1.get(this))}:function(...e){return xi(t.apply(kf(this),e))}}function wP(t){return typeof t=="function"?yP(t):(t instanceof IDBTransaction&&gP(t),hP(t,fP())?new Proxy(t,$p):t)}function xi(t){if(t instanceof IDBRequest)return mP(t);if(Cf.has(t))return Cf.get(t);const e=wP(t);return e!==t&&(Cf.set(t,e),xg.set(e,t)),e}const kf=t=>xg.get(t);function _P(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=xi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(xi(o.result),u.oldVersion,u.newVersion,xi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const EP=["get","getKey","getAll","getAllKeys","count"],TP=["put","add","delete","clear"],Pf=new Map;function kw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pf.get(e))return Pf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=TP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||EP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Pf.set(e,s),s}vP(t=>({...t,get:(e,n,r)=>kw(e,n)||t.get(e,n,r),has:(e,n)=>!!kw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hp="@firebase/app",Pw="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Rg("@firebase/app"),AP="@firebase/app-compat",bP="@firebase/analytics-compat",CP="@firebase/analytics",kP="@firebase/app-check-compat",PP="@firebase/app-check",RP="@firebase/auth",xP="@firebase/auth-compat",NP="@firebase/database",OP="@firebase/database-compat",DP="@firebase/functions",LP="@firebase/functions-compat",MP="@firebase/installations",VP="@firebase/installations-compat",FP="@firebase/messaging",UP="@firebase/messaging-compat",jP="@firebase/performance",BP="@firebase/performance-compat",zP="@firebase/remote-config",$P="@firebase/remote-config-compat",HP="@firebase/storage",WP="@firebase/storage-compat",qP="@firebase/firestore",KP="@firebase/vertexai-preview",GP="@firebase/firestore-compat",QP="firebase",YP="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="[DEFAULT]",XP={[Hp]:"fire-core",[AP]:"fire-core-compat",[CP]:"fire-analytics",[bP]:"fire-analytics-compat",[PP]:"fire-app-check",[kP]:"fire-app-check-compat",[RP]:"fire-auth",[xP]:"fire-auth-compat",[NP]:"fire-rtdb",[OP]:"fire-rtdb-compat",[DP]:"fire-fn",[LP]:"fire-fn-compat",[MP]:"fire-iid",[VP]:"fire-iid-compat",[FP]:"fire-fcm",[UP]:"fire-fcm-compat",[jP]:"fire-perf",[BP]:"fire-perf-compat",[zP]:"fire-rc",[$P]:"fire-rc-compat",[HP]:"fire-gcs",[WP]:"fire-gcs-compat",[qP]:"fire-fst",[GP]:"fire-fst-compat",[KP]:"fire-vertex","fire-js":"fire-js",[QP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=new Map,JP=new Map,qp=new Map;function Rw(t,e){try{t.container.addComponent(e)}catch(n){xs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ns(t){const e=t.name;if(qp.has(e))return xs.debug(`There were multiple attempts to register component ${e}.`),!1;qp.set(e,t);for(const n of bd.values())Rw(n,t);for(const n of JP.values())Rw(n,t);return!0}function uh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ni=new au("app","Firebase",ZP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ni.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=YP;function K1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ni.create("bad-app-name",{appName:String(i)});if(n||(n=z1()),!n)throw Ni.create("no-options");const s=bd.get(i);if(s){if(Ad(n,s.options)&&Ad(r,s.config))return s;throw Ni.create("duplicate-app",{appName:i})}const o=new aP(i);for(const u of qp.values())o.addComponent(u);const l=new eR(n,r,o);return bd.set(i,l),l}function Ng(t=Wp){const e=bd.get(t);if(!e&&t===Wp&&z1())return K1();if(!e)throw Ni.create("no-app",{appName:t});return e}function nr(t,e,n){var r;let i=(r=XP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xs.warn(l.join(" "));return}Ns(new Vi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR="firebase-heartbeat-database",nR=1,$l="firebase-heartbeat-store";let Rf=null;function G1(){return Rf||(Rf=_P(tR,nR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($l)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ni.create("idb-open",{originalErrorMessage:t.message})})),Rf}async function rR(t){try{const n=(await G1()).transaction($l),r=await n.objectStore($l).get(Q1(t));return await n.done,r}catch(e){if(e instanceof dr)xs.warn(e.message);else{const n=Ni.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xs.warn(n.message)}}}async function xw(t,e){try{const r=(await G1()).transaction($l,"readwrite");await r.objectStore($l).put(e,Q1(t)),await r.done}catch(n){if(n instanceof dr)xs.warn(n.message);else{const r=Ni.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xs.warn(r.message)}}}function Q1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=1024,sR=30*24*60*60*1e3;class oR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=sR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nw(),{heartbeatsToSend:r,unsentEntries:i}=aR(this._heartbeatsCache.heartbeats),s=Sd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nw(){return new Date().toISOString().substring(0,10)}function aR(t,e=iR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ow(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ow(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qk()?Yk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ow(t){return Sd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t){Ns(new Vi("platform-logger",e=>new IP(e),"PRIVATE")),Ns(new Vi("heartbeat",e=>new oR(e),"PRIVATE")),nr(Hp,Pw,t),nr(Hp,Pw,"esm2017"),nr("fire-js","")}uR("");var Dw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Es,Y1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function C(){}C.prototype=E.prototype,b.D=E.prototype,b.prototype=new C,b.prototype.constructor=b,b.C=function(R,N,M){for(var P=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)P[ut-2]=arguments[ut];return E.prototype[N].apply(R,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,E,C){C||(C=0);var R=Array(16);if(typeof E=="string")for(var N=0;16>N;++N)R[N]=E.charCodeAt(C++)|E.charCodeAt(C++)<<8|E.charCodeAt(C++)<<16|E.charCodeAt(C++)<<24;else for(N=0;16>N;++N)R[N]=E[C++]|E[C++]<<8|E[C++]<<16|E[C++]<<24;E=b.g[0],C=b.g[1],N=b.g[2];var M=b.g[3],P=E+(M^C&(N^M))+R[0]+3614090360&4294967295;E=C+(P<<7&4294967295|P>>>25),P=M+(N^E&(C^N))+R[1]+3905402710&4294967295,M=E+(P<<12&4294967295|P>>>20),P=N+(C^M&(E^C))+R[2]+606105819&4294967295,N=M+(P<<17&4294967295|P>>>15),P=C+(E^N&(M^E))+R[3]+3250441966&4294967295,C=N+(P<<22&4294967295|P>>>10),P=E+(M^C&(N^M))+R[4]+4118548399&4294967295,E=C+(P<<7&4294967295|P>>>25),P=M+(N^E&(C^N))+R[5]+1200080426&4294967295,M=E+(P<<12&4294967295|P>>>20),P=N+(C^M&(E^C))+R[6]+2821735955&4294967295,N=M+(P<<17&4294967295|P>>>15),P=C+(E^N&(M^E))+R[7]+4249261313&4294967295,C=N+(P<<22&4294967295|P>>>10),P=E+(M^C&(N^M))+R[8]+1770035416&4294967295,E=C+(P<<7&4294967295|P>>>25),P=M+(N^E&(C^N))+R[9]+2336552879&4294967295,M=E+(P<<12&4294967295|P>>>20),P=N+(C^M&(E^C))+R[10]+4294925233&4294967295,N=M+(P<<17&4294967295|P>>>15),P=C+(E^N&(M^E))+R[11]+2304563134&4294967295,C=N+(P<<22&4294967295|P>>>10),P=E+(M^C&(N^M))+R[12]+1804603682&4294967295,E=C+(P<<7&4294967295|P>>>25),P=M+(N^E&(C^N))+R[13]+4254626195&4294967295,M=E+(P<<12&4294967295|P>>>20),P=N+(C^M&(E^C))+R[14]+2792965006&4294967295,N=M+(P<<17&4294967295|P>>>15),P=C+(E^N&(M^E))+R[15]+1236535329&4294967295,C=N+(P<<22&4294967295|P>>>10),P=E+(N^M&(C^N))+R[1]+4129170786&4294967295,E=C+(P<<5&4294967295|P>>>27),P=M+(C^N&(E^C))+R[6]+3225465664&4294967295,M=E+(P<<9&4294967295|P>>>23),P=N+(E^C&(M^E))+R[11]+643717713&4294967295,N=M+(P<<14&4294967295|P>>>18),P=C+(M^E&(N^M))+R[0]+3921069994&4294967295,C=N+(P<<20&4294967295|P>>>12),P=E+(N^M&(C^N))+R[5]+3593408605&4294967295,E=C+(P<<5&4294967295|P>>>27),P=M+(C^N&(E^C))+R[10]+38016083&4294967295,M=E+(P<<9&4294967295|P>>>23),P=N+(E^C&(M^E))+R[15]+3634488961&4294967295,N=M+(P<<14&4294967295|P>>>18),P=C+(M^E&(N^M))+R[4]+3889429448&4294967295,C=N+(P<<20&4294967295|P>>>12),P=E+(N^M&(C^N))+R[9]+568446438&4294967295,E=C+(P<<5&4294967295|P>>>27),P=M+(C^N&(E^C))+R[14]+3275163606&4294967295,M=E+(P<<9&4294967295|P>>>23),P=N+(E^C&(M^E))+R[3]+4107603335&4294967295,N=M+(P<<14&4294967295|P>>>18),P=C+(M^E&(N^M))+R[8]+1163531501&4294967295,C=N+(P<<20&4294967295|P>>>12),P=E+(N^M&(C^N))+R[13]+2850285829&4294967295,E=C+(P<<5&4294967295|P>>>27),P=M+(C^N&(E^C))+R[2]+4243563512&4294967295,M=E+(P<<9&4294967295|P>>>23),P=N+(E^C&(M^E))+R[7]+1735328473&4294967295,N=M+(P<<14&4294967295|P>>>18),P=C+(M^E&(N^M))+R[12]+2368359562&4294967295,C=N+(P<<20&4294967295|P>>>12),P=E+(C^N^M)+R[5]+4294588738&4294967295,E=C+(P<<4&4294967295|P>>>28),P=M+(E^C^N)+R[8]+2272392833&4294967295,M=E+(P<<11&4294967295|P>>>21),P=N+(M^E^C)+R[11]+1839030562&4294967295,N=M+(P<<16&4294967295|P>>>16),P=C+(N^M^E)+R[14]+4259657740&4294967295,C=N+(P<<23&4294967295|P>>>9),P=E+(C^N^M)+R[1]+2763975236&4294967295,E=C+(P<<4&4294967295|P>>>28),P=M+(E^C^N)+R[4]+1272893353&4294967295,M=E+(P<<11&4294967295|P>>>21),P=N+(M^E^C)+R[7]+4139469664&4294967295,N=M+(P<<16&4294967295|P>>>16),P=C+(N^M^E)+R[10]+3200236656&4294967295,C=N+(P<<23&4294967295|P>>>9),P=E+(C^N^M)+R[13]+681279174&4294967295,E=C+(P<<4&4294967295|P>>>28),P=M+(E^C^N)+R[0]+3936430074&4294967295,M=E+(P<<11&4294967295|P>>>21),P=N+(M^E^C)+R[3]+3572445317&4294967295,N=M+(P<<16&4294967295|P>>>16),P=C+(N^M^E)+R[6]+76029189&4294967295,C=N+(P<<23&4294967295|P>>>9),P=E+(C^N^M)+R[9]+3654602809&4294967295,E=C+(P<<4&4294967295|P>>>28),P=M+(E^C^N)+R[12]+3873151461&4294967295,M=E+(P<<11&4294967295|P>>>21),P=N+(M^E^C)+R[15]+530742520&4294967295,N=M+(P<<16&4294967295|P>>>16),P=C+(N^M^E)+R[2]+3299628645&4294967295,C=N+(P<<23&4294967295|P>>>9),P=E+(N^(C|~M))+R[0]+4096336452&4294967295,E=C+(P<<6&4294967295|P>>>26),P=M+(C^(E|~N))+R[7]+1126891415&4294967295,M=E+(P<<10&4294967295|P>>>22),P=N+(E^(M|~C))+R[14]+2878612391&4294967295,N=M+(P<<15&4294967295|P>>>17),P=C+(M^(N|~E))+R[5]+4237533241&4294967295,C=N+(P<<21&4294967295|P>>>11),P=E+(N^(C|~M))+R[12]+1700485571&4294967295,E=C+(P<<6&4294967295|P>>>26),P=M+(C^(E|~N))+R[3]+2399980690&4294967295,M=E+(P<<10&4294967295|P>>>22),P=N+(E^(M|~C))+R[10]+4293915773&4294967295,N=M+(P<<15&4294967295|P>>>17),P=C+(M^(N|~E))+R[1]+2240044497&4294967295,C=N+(P<<21&4294967295|P>>>11),P=E+(N^(C|~M))+R[8]+1873313359&4294967295,E=C+(P<<6&4294967295|P>>>26),P=M+(C^(E|~N))+R[15]+4264355552&4294967295,M=E+(P<<10&4294967295|P>>>22),P=N+(E^(M|~C))+R[6]+2734768916&4294967295,N=M+(P<<15&4294967295|P>>>17),P=C+(M^(N|~E))+R[13]+1309151649&4294967295,C=N+(P<<21&4294967295|P>>>11),P=E+(N^(C|~M))+R[4]+4149444226&4294967295,E=C+(P<<6&4294967295|P>>>26),P=M+(C^(E|~N))+R[11]+3174756917&4294967295,M=E+(P<<10&4294967295|P>>>22),P=N+(E^(M|~C))+R[2]+718787259&4294967295,N=M+(P<<15&4294967295|P>>>17),P=C+(M^(N|~E))+R[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(N+(P<<21&4294967295|P>>>11))&4294967295,b.g[2]=b.g[2]+N&4294967295,b.g[3]=b.g[3]+M&4294967295}r.prototype.u=function(b,E){E===void 0&&(E=b.length);for(var C=E-this.blockSize,R=this.B,N=this.h,M=0;M<E;){if(N==0)for(;M<=C;)i(this,b,M),M+=this.blockSize;if(typeof b=="string"){for(;M<E;)if(R[N++]=b.charCodeAt(M++),N==this.blockSize){i(this,R),N=0;break}}else for(;M<E;)if(R[N++]=b[M++],N==this.blockSize){i(this,R),N=0;break}}this.h=N,this.o+=E},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;var C=8*this.o;for(E=b.length-8;E<b.length;++E)b[E]=C&255,C/=256;for(this.u(b),b=Array(16),E=C=0;4>E;++E)for(var R=0;32>R;R+=8)b[C++]=this.g[E]>>>R&255;return b};function s(b,E){var C=l;return Object.prototype.hasOwnProperty.call(C,b)?C[b]:C[b]=E(b)}function o(b,E){this.h=E;for(var C=[],R=!0,N=b.length-1;0<=N;N--){var M=b[N]|0;R&&M==E||(C[N]=M,R=!1)}this.g=C}var l={};function u(b){return-128<=b&&128>b?s(b,function(E){return new o([E|0],0>E?-1:0)}):new o([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return y;if(0>b)return O(d(-b));for(var E=[],C=1,R=0;b>=C;R++)E[R]=b/C|0,C*=4294967296;return new o(E,0)}function p(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return O(p(b.substring(1),E));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=d(Math.pow(E,8)),R=y,N=0;N<b.length;N+=8){var M=Math.min(8,b.length-N),P=parseInt(b.substring(N,N+M),E);8>M?(M=d(Math.pow(E,M)),R=R.j(M).add(d(P))):(R=R.j(C),R=R.add(d(P)))}return R}var y=u(0),w=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-O(this).m();for(var b=0,E=1,C=0;C<this.g.length;C++){var R=this.i(C);b+=(0<=R?R:4294967296+R)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(D(this))return"-"+O(this).toString(b);for(var E=d(Math.pow(b,6)),C=this,R="";;){var N=F(C,E).g;C=I(C,N.j(E));var M=((0<C.g.length?C.g[0]:C.h)>>>0).toString(b);if(C=N,x(C))return M+R;for(;6>M.length;)M="0"+M;R=M+R}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(var E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function D(b){return b.h==-1}t.l=function(b){return b=I(this,b),D(b)?-1:x(b)?0:1};function O(b){for(var E=b.g.length,C=[],R=0;R<E;R++)C[R]=~b.g[R];return new o(C,~b.h).add(w)}t.abs=function(){return D(this)?O(this):this},t.add=function(b){for(var E=Math.max(this.g.length,b.g.length),C=[],R=0,N=0;N<=E;N++){var M=R+(this.i(N)&65535)+(b.i(N)&65535),P=(M>>>16)+(this.i(N)>>>16)+(b.i(N)>>>16);R=P>>>16,M&=65535,P&=65535,C[N]=P<<16|M}return new o(C,C[C.length-1]&-2147483648?-1:0)};function I(b,E){return b.add(O(E))}t.j=function(b){if(x(this)||x(b))return y;if(D(this))return D(b)?O(this).j(O(b)):O(O(this).j(b));if(D(b))return O(this.j(O(b)));if(0>this.l(k)&&0>b.l(k))return d(this.m()*b.m());for(var E=this.g.length+b.g.length,C=[],R=0;R<2*E;R++)C[R]=0;for(R=0;R<this.g.length;R++)for(var N=0;N<b.g.length;N++){var M=this.i(R)>>>16,P=this.i(R)&65535,ut=b.i(N)>>>16,hr=b.i(N)&65535;C[2*R+2*N]+=P*hr,T(C,2*R+2*N),C[2*R+2*N+1]+=M*hr,T(C,2*R+2*N+1),C[2*R+2*N+1]+=P*ut,T(C,2*R+2*N+1),C[2*R+2*N+2]+=M*ut,T(C,2*R+2*N+2)}for(R=0;R<E;R++)C[R]=C[2*R+1]<<16|C[2*R];for(R=E;R<2*E;R++)C[R]=0;return new o(C,0)};function T(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function A(b,E){this.g=b,this.h=E}function F(b,E){if(x(E))throw Error("division by zero");if(x(b))return new A(y,y);if(D(b))return E=F(O(b),E),new A(O(E.g),O(E.h));if(D(E))return E=F(b,O(E)),new A(O(E.g),E.h);if(30<b.g.length){if(D(b)||D(E))throw Error("slowDivide_ only works with positive integers.");for(var C=w,R=E;0>=R.l(b);)C=z(C),R=z(R);var N=K(C,1),M=K(R,1);for(R=K(R,2),C=K(C,2);!x(R);){var P=M.add(R);0>=P.l(b)&&(N=N.add(C),M=P),R=K(R,1),C=K(C,1)}return E=I(b,N.j(E)),new A(N,E)}for(N=y;0<=b.l(E);){for(C=Math.max(1,Math.floor(b.m()/E.m())),R=Math.ceil(Math.log(C)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),M=d(C),P=M.j(E);D(P)||0<P.l(b);)C-=R,M=d(C),P=M.j(E);x(M)&&(M=w),N=N.add(M),b=I(b,P)}return new A(N,b)}t.A=function(b){return F(this,b).h},t.and=function(b){for(var E=Math.max(this.g.length,b.g.length),C=[],R=0;R<E;R++)C[R]=this.i(R)&b.i(R);return new o(C,this.h&b.h)},t.or=function(b){for(var E=Math.max(this.g.length,b.g.length),C=[],R=0;R<E;R++)C[R]=this.i(R)|b.i(R);return new o(C,this.h|b.h)},t.xor=function(b){for(var E=Math.max(this.g.length,b.g.length),C=[],R=0;R<E;R++)C[R]=this.i(R)^b.i(R);return new o(C,this.h^b.h)};function z(b){for(var E=b.g.length+1,C=[],R=0;R<E;R++)C[R]=b.i(R)<<1|b.i(R-1)>>>31;return new o(C,b.h)}function K(b,E){var C=E>>5;E%=32;for(var R=b.g.length-C,N=[],M=0;M<R;M++)N[M]=0<E?b.i(M+C)>>>E|b.i(M+C+1)<<32-E:b.i(M+C);return new o(N,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Y1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,Es=o}).apply(typeof Dw<"u"?Dw:typeof self<"u"?self:typeof window<"u"?window:{});var _c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var X1,J1,tl,Z1,jc,Kp,eT,tT,nT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,m){return a==Array.prototype||a==Object.prototype||(a[f]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _c=="object"&&_c];for(var f=0;f<a.length;++f){var m=a[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(a,f){if(f)e:{var m=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var V=a[_];if(!(V in m))break e;m=m[V]}a=a[a.length-1],_=m[a],f=f(_),f!=_&&f!=null&&e(m,a,{configurable:!0,writable:!0,value:f})}}function s(a,f){a instanceof String&&(a+="");var m=0,_=!1,V={next:function(){if(!_&&m<a.length){var B=m++;return{value:f(B,a[B]),done:!1}}return _=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(a){return a||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function d(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function p(a,f,m){return a.call.apply(a.bind,arguments)}function y(a,f,m){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,_),a.apply(f,V)}}return function(){return a.apply(f,arguments)}}function w(a,f,m){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,w.apply(null,arguments)}function k(a,f){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function x(a,f){function m(){}m.prototype=f.prototype,a.aa=f.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(_,V,B){for(var G=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)G[_e-2]=arguments[_e];return f.prototype[V].apply(_,G)}}function D(a){const f=a.length;if(0<f){const m=Array(f);for(let _=0;_<f;_++)m[_]=a[_];return m}return[]}function O(a,f){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(u(_)){const V=a.length||0,B=_.length||0;a.length=V+B;for(let G=0;G<B;G++)a[V+G]=_[G]}else a.push(_)}}class I{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function T(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function F(a){return F[" "](a),a}F[" "]=function(){};var z=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function K(a,f,m){for(const _ in a)f.call(m,a[_],_,a)}function b(a,f){for(const m in a)f.call(void 0,a[m],m,a)}function E(a){const f={};for(const m in a)f[m]=a[m];return f}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,f){let m,_;for(let V=1;V<arguments.length;V++){_=arguments[V];for(m in _)a[m]=_[m];for(let B=0;B<C.length;B++)m=C[B],Object.prototype.hasOwnProperty.call(_,m)&&(a[m]=_[m])}}function N(a){var f=1;a=a.split(":");const m=[];for(;0<f&&a.length;)m.push(a.shift()),f--;return a.length&&m.push(a.join(":")),m}function M(a){l.setTimeout(()=>{throw a},0)}function P(){var a=ie;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class ut{constructor(){this.h=this.g=null}add(f,m){const _=hr.get();_.set(f,m),this.h?this.h.next=_:this.g=_,this.h=_}}var hr=new I(()=>new Ji,a=>a.reset());class Ji{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let be,X=!1,ie=new ut,Q=()=>{const a=l.Promise.resolve(void 0);be=()=>{a.then(ke)}};var ke=()=>{for(var a;a=P();){try{a.h.call(a.g)}catch(m){M(m)}var f=hr;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}X=!1};function Ee(){this.s=this.s,this.C=this.C}Ee.prototype.s=!1,Ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var Tn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,f),l.removeEventListener("test",m,f)}catch{}return a}();function U(a,f){if(Ne.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(z){e:{try{F(f.nodeName);var V=!0;break e}catch{}V=!1}V||(f=null)}}else m=="mouseover"?f=a.fromElement:m=="mouseout"&&(f=a.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:In[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&U.aa.h.call(this)}}x(U,Ne);var In={2:"touch",3:"pen",4:"mouse"};U.prototype.h=function(){U.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),Eu=0;function ga(a,f,m,_,V){this.listener=a,this.proxy=null,this.src=f,this.type=m,this.capture=!!_,this.ha=V,this.key=++Eu,this.da=this.fa=!1}function it(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pn(a){this.src=a,this.g={},this.h=0}pn.prototype.add=function(a,f,m,_,V){var B=a.toString();a=this.g[B],a||(a=this.g[B]=[],this.h++);var G=va(a,f,_,V);return-1<G?(f=a[G],m||(f.fa=!1)):(f=new ga(f,this.src,B,!!_,V),f.fa=m,a.push(f)),f};function qs(a,f){var m=f.type;if(m in a.g){var _=a.g[m],V=Array.prototype.indexOf.call(_,f,void 0),B;(B=0<=V)&&Array.prototype.splice.call(_,V,1),B&&(it(f),a.g[m].length==0&&(delete a.g[m],a.h--))}}function va(a,f,m,_){for(var V=0;V<a.length;++V){var B=a[V];if(!B.da&&B.listener==f&&B.capture==!!m&&B.ha==_)return V}return-1}var Ks="closure_lm_"+(1e6*Math.random()|0),Gr={};function Gs(a,f,m,_,V){if(Array.isArray(f)){for(var B=0;B<f.length;B++)Gs(a,f[B],m,_,V);return null}return m=_a(m),a&&a[$t]?a.K(f,m,d(_)?!!_.capture:!!_,V):Zi(a,f,m,!1,_,V)}function Zi(a,f,m,_,V,B){if(!f)throw Error("Invalid event type");var G=d(V)?!!V.capture:!!V,_e=pr(a);if(_e||(a[Ks]=_e=new pn(a)),m=_e.add(f,m,_,G,B),m.proxy)return m;if(_=ya(),m.proxy=_,_.src=a,_.listener=m,a.addEventListener)Tn||(V=G),V===void 0&&(V=!1),a.addEventListener(f.toString(),_,V);else if(a.attachEvent)a.attachEvent(Ct(f.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ya(){function a(m){return f.call(a.src,a.listener,m)}const f=ye;return a}function vt(a,f,m,_,V){if(Array.isArray(f))for(var B=0;B<f.length;B++)vt(a,f[B],m,_,V);else _=d(_)?!!_.capture:!!_,m=_a(m),a&&a[$t]?(a=a.i,f=String(f).toString(),f in a.g&&(B=a.g[f],m=va(B,m,_,V),-1<m&&(it(B[m]),Array.prototype.splice.call(B,m,1),B.length==0&&(delete a.g[f],a.h--)))):a&&(a=pr(a))&&(f=a.g[f.toString()],a=-1,f&&(a=va(f,m,_,V)),(m=-1<a?f[a]:null)&&fr(m))}function fr(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[$t])qs(f.i,a);else{var m=a.type,_=a.proxy;f.removeEventListener?f.removeEventListener(m,_,a.capture):f.detachEvent?f.detachEvent(Ct(m),_):f.addListener&&f.removeListener&&f.removeListener(_),(m=pr(f))?(qs(m,a),m.h==0&&(m.src=null,f[Ks]=null)):it(a)}}}function Ct(a){return a in Gr?Gr[a]:Gr[a]="on"+a}function ye(a,f){if(a.da)a=!0;else{f=new U(f,this);var m=a.listener,_=a.ha||a.src;a.fa&&fr(a),a=m.call(_,f)}return a}function pr(a){return a=a[Ks],a instanceof pn?a:null}var wa="__closure_events_fn_"+(1e9*Math.random()>>>0);function _a(a){return typeof a=="function"?a:(a[wa]||(a[wa]=function(f){return a.handleEvent(f)}),a[wa])}function Ze(){Ee.call(this),this.i=new pn(this),this.M=this,this.F=null}x(Ze,Ee),Ze.prototype[$t]=!0,Ze.prototype.removeEventListener=function(a,f,m,_){vt(this,a,f,m,_)};function ct(a,f){var m,_=a.F;if(_)for(m=[];_;_=_.F)m.push(_);if(a=a.M,_=f.type||f,typeof f=="string")f=new Ne(f,a);else if(f instanceof Ne)f.target=f.target||a;else{var V=f;f=new Ne(_,a),R(f,V)}if(V=!0,m)for(var B=m.length-1;0<=B;B--){var G=f.g=m[B];V=Qr(G,_,!0,f)&&V}if(G=f.g=a,V=Qr(G,_,!0,f)&&V,V=Qr(G,_,!1,f)&&V,m)for(B=0;B<m.length;B++)G=f.g=m[B],V=Qr(G,_,!1,f)&&V}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var m=a.g[f],_=0;_<m.length;_++)it(m[_]);delete a.g[f],a.h--}}this.F=null},Ze.prototype.K=function(a,f,m,_){return this.i.add(String(a),f,!1,m,_)},Ze.prototype.L=function(a,f,m,_){return this.i.add(String(a),f,!0,m,_)};function Qr(a,f,m,_){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var V=!0,B=0;B<f.length;++B){var G=f[B];if(G&&!G.da&&G.capture==m){var _e=G.listener,$e=G.ha||G.src;G.fa&&qs(a.i,G),V=_e.call($e,_)!==!1&&V}}return V&&!_.defaultPrevented}function es(a,f,m){if(typeof a=="function")m&&(a=w(a,m));else if(a&&typeof a.handleEvent=="function")a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function Xt(a){a.g=es(()=>{a.g=null,a.i&&(a.i=!1,Xt(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Yr extends Ee{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Xt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jt(a){Ee.call(this),this.h=a,this.g={}}x(Jt,Ee);var Tu=[];function mr(a){K(a.g,function(f,m){this.g.hasOwnProperty(m)&&fr(f)},a),a.g={}}Jt.prototype.N=function(){Jt.aa.N.call(this),mr(this)},Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gr=l.JSON.stringify,Iu=l.JSON.parse,Qs=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ts(){}ts.prototype.h=null;function Su(a){return a.h||(a.h=a.i())}function Ys(){}var vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xr(){Ne.call(this,"d")}x(Xr,Ne);function Ea(){Ne.call(this,"c")}x(Ea,Ne);var Ge={},mn=null;function Xs(){return mn=mn||new Ze}Ge.La="serverreachability";function kt(a){Ne.call(this,Ge.La,a)}x(kt,Ne);function Fn(a){const f=Xs();ct(f,new kt(f))}Ge.STAT_EVENT="statevent";function Ta(a,f){Ne.call(this,Ge.STAT_EVENT,a),this.stat=f}x(Ta,Ne);function dt(a){const f=Xs();ct(f,new Ta(f,a))}Ge.Ma="timingevent";function fe(a,f){Ne.call(this,Ge.Ma,a),this.size=f}x(fe,Ne);function Pt(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function Ht(){this.g=!0}Ht.prototype.xa=function(){this.g=!1};function yr(a,f,m,_,V,B){a.info(function(){if(a.g)if(B)for(var G="",_e=B.split("&"),$e=0;$e<_e.length;$e++){var me=_e[$e].split("=");if(1<me.length){var ht=me[0];me=me[1];var ft=ht.split("_");G=2<=ft.length&&ft[1]=="type"?G+(ht+"="+me+"&"):G+(ht+"=redacted&")}}else G=null;else G=B;return"XMLHTTP REQ ("+_+") [attempt "+V+"]: "+f+`
`+m+`
`+G})}function et(a,f,m,_,V,B,G){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+V+"]: "+f+`
`+m+`
`+B+" "+G})}function Ve(a,f,m,_){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Au(a,m)+(_?" "+_:"")})}function Ia(a,f){a.info(function(){return"TIMEOUT: "+f})}Ht.prototype.info=function(){};function Au(a,f){if(!a.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var _=m[a];if(!(2>_.length)){var V=_[1];if(Array.isArray(V)&&!(1>V.length)){var B=V[0];if(B!="noop"&&B!="stop"&&B!="close")for(var G=1;G<V.length;G++)V[G]=""}}}}return gr(m)}catch{return f}}var Un={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sa;function ns(){}x(ns,ts),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},Sa=new ns;function Sn(a,f,m,_){this.j=a,this.i=f,this.l=m,this.R=_||1,this.U=new Jt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Js}function Js(){this.i=null,this.g="",this.h=!1}var bu={},Zs={};function Aa(a,f,m){a.L=1,a.v=zn(bn(f)),a.m=m,a.P=!0,Cu(a,null)}function Cu(a,f){a.F=Date.now(),eo(a),a.A=bn(a.v);var m=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Ra(m.i,"t",_),a.C=0,m=a.j.J,a.h=new Js,a.g=Yu(a.j,m?f:null,!a.m),0<a.O&&(a.M=new Yr(w(a.Y,a,a.g),a.O)),f=a.U,m=a.g,_=a.ca;var V="readystatechange";Array.isArray(V)||(V&&(Tu[0]=V.toString()),V=Tu);for(var B=0;B<V.length;B++){var G=Gs(m,V[B],_||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Fn(),yr(a.i,a.u,a.A,a.l,a.R,a.m)}Sn.prototype.ca=function(a){a=a.target;const f=this.M;f&&Cn(a)==3?f.j():this.Y(a)},Sn.prototype.Y=function(a){try{if(a==this.g)e:{const ft=Cn(this.g);var f=this.g.Ba();const Ir=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Er(this.g)))){this.J||ft!=4||f==7||(f==8||0>=Ir?Fn(3):Fn(2)),ba(this);var m=this.g.Z();this.X=m;t:if(jn(this)){var _=Er(this.g);a="";var V=_.length,B=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){An(this),rs(this);var G="";break t}this.h.i=new l.TextDecoder}for(f=0;f<V;f++)this.h.h=!0,a+=this.h.i.decode(_[f],{stream:!(B&&f==V-1)});_.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,et(this.i,this.u,this.A,this.l,this.R,ft,m),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,$e=this.g;if((_e=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(_e)){var me=_e;break t}}me=null}if(m=me)Ve(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ca(this,m);else{this.o=!1,this.s=3,dt(12),An(this),rs(this);break e}}if(this.P){m=!0;let tn;for(;!this.J&&this.C<G.length;)if(tn=Dh(this,G),tn==Zs){ft==4&&(this.s=4,dt(14),m=!1),Ve(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==bu){this.s=4,dt(15),Ve(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else Ve(this.i,this.l,tn,null),Ca(this,tn);if(jn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||G.length!=0||this.h.h||(this.s=1,dt(16),m=!1),this.o=this.o&&m,!m)Ve(this.i,this.l,G,"[Invalid Chunked Response]"),An(this),rs(this);else if(0<G.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),lo(ht),ht.M=!0,dt(11))}}else Ve(this.i,this.l,G,null),Ca(this,G);ft==4&&An(this),this.o&&!this.J&&(ft==4?Ku(this.j,this):(this.o=!1,eo(this)))}else Kh(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),An(this),rs(this)}}}catch{}finally{}};function jn(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Dh(a,f){var m=a.C,_=f.indexOf(`
`,m);return _==-1?Zs:(m=Number(f.substring(m,_)),isNaN(m)?bu:(_+=1,_+m>f.length?Zs:(f=f.slice(_,_+m),a.C=_+m,f)))}Sn.prototype.cancel=function(){this.J=!0,An(this)};function eo(a){a.S=Date.now()+a.I,ku(a,a.I)}function ku(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Pt(w(a.ba,a),f)}function ba(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Sn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ia(this.i,this.A),this.L!=2&&(Fn(),dt(17)),An(this),this.s=2,rs(this)):ku(this,this.S-a)};function rs(a){a.j.G==0||a.J||Ku(a.j,a)}function An(a){ba(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,mr(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Ca(a,f){try{var m=a.j;if(m.G!=0&&(m.g==a||ka(m.h,a))){if(!a.K&&ka(m.h,a)&&m.G==3){try{var _=m.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var V=_;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)Zt(m),oo(m);else break e;La(m),dt(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=Pt(w(m.Za,m),6e3));if(1>=Ru(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else en(m,11)}else if((a.K||m.g==a)&&Zt(m),!T(f))for(V=m.Da.g.parse(f),f=0;f<V.length;f++){let me=V[f];if(m.T=me[0],me=me[1],m.G==2)if(me[0]=="c"){m.K=me[1],m.ia=me[2];const ht=me[3];ht!=null&&(m.la=ht,m.j.info("VER="+m.la));const ft=me[4];ft!=null&&(m.Aa=ft,m.j.info("SVER="+m.Aa));const Ir=me[5];Ir!=null&&typeof Ir=="number"&&0<Ir&&(_=1.5*Ir,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const tn=a.g;if(tn){const ri=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ri){var B=_.h;B.g||ri.indexOf("spdy")==-1&&ri.indexOf("quic")==-1&&ri.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(is(B,B.h),B.h=null))}if(_.D){const uo=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;uo&&(_.ya=uo,Ie(_.I,_.D,uo))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var G=a;if(_.qa=Qu(_,_.J?_.ia:null,_.W),G.K){xu(_.h,G);var _e=G,$e=_.L;$e&&(_e.I=$e),_e.B&&(ba(_e),eo(_e)),_.g=G}else Wu(_);0<m.i.length&&ao(m)}else me[0]!="stop"&&me[0]!="close"||en(m,7);else m.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?en(m,7):Da(m):me[0]!="noop"&&m.l&&m.l.ta(me),m.v=0)}}Fn(4)}catch{}}var Lh=class{constructor(a,f){this.g=a,this.map=f}};function Bn(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ru(a){return a.h?1:a.g?a.g.size:0}function ka(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function is(a,f){a.g?a.g.add(f):a.h=f}function xu(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Bn.prototype.cancel=function(){if(this.i=Nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Nu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const m of a.g.values())f=f.concat(m.D);return f}return D(a.i)}function Mh(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var f=[],m=a.length,_=0;_<m;_++)f.push(a[_]);return f}f=[],m=0;for(_ in a)f[m++]=a[_];return f}function Vh(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var f=[];a=a.length;for(var m=0;m<a;m++)f.push(m);return f}f=[],m=0;for(const _ in a)f[m++]=_;return f}}}function Ou(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var m=Vh(a),_=Mh(a),V=_.length,B=0;B<V;B++)f.call(void 0,_[B],m&&m[B],a)}var Te=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fh(a,f){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var _=a[m].indexOf("="),V=null;if(0<=_){var B=a[m].substring(0,_);V=a[m].substring(_+1)}else B=a[m];f(B,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function wr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof wr){this.h=a.h,to(this,a.j),this.o=a.o,this.g=a.g,no(this,a.s),this.l=a.l;var f=a.i,m=new ss;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Du(this,m),this.m=a.m}else a&&(f=String(a).match(Te))?(this.h=!1,to(this,f[1]||"",!0),this.o=Jr(f[2]||""),this.g=Jr(f[3]||"",!0),no(this,f[4]),this.l=Jr(f[5]||"",!0),Du(this,f[6]||"",!0),this.m=Jr(f[7]||"")):(this.h=!1,this.i=new ss(null,this.h))}wr.prototype.toString=function(){var a=[],f=this.j;f&&a.push($n(f,Lu,!0),":");var m=this.g;return(m||f=="file")&&(a.push("//"),(f=this.o)&&a.push($n(f,Lu,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push($n(m,m.charAt(0)=="/"?jh:Uh,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",$n(m,Bh)),a.join("")};function bn(a){return new wr(a)}function to(a,f,m){a.j=m?Jr(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function no(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Du(a,f,m){f instanceof ss?(a.i=f,zh(a.i,a.h)):(m||(f=$n(f,Mu)),a.i=new ss(f,a.h))}function Ie(a,f,m){a.i.set(f,m)}function zn(a){return Ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Jr(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $n(a,f,m){return typeof a=="string"?(a=encodeURI(a).replace(f,Fe),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Fe(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Lu=/[#\/\?@]/g,Uh=/[#\?:]/g,jh=/[#\?]/g,Mu=/[#\?@]/g,Bh=/#/g;function ss(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&Fh(a.i,function(f,m){a.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=ss.prototype,t.add=function(a,f){Hn(this),this.i=null,a=Zr(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(f),this.h+=1,this};function Pa(a,f){Hn(a),f=Zr(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Vu(a,f){return Hn(a),f=Zr(a,f),a.g.has(f)}t.forEach=function(a,f){Hn(this),this.g.forEach(function(m,_){m.forEach(function(V){a.call(f,V,_,this)},this)},this)},t.na=function(){Hn(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let _=0;_<f.length;_++){const V=a[_];for(let B=0;B<V.length;B++)m.push(f[_])}return m},t.V=function(a){Hn(this);let f=[];if(typeof a=="string")Vu(this,a)&&(f=f.concat(this.g.get(Zr(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)f=f.concat(a[m])}return f},t.set=function(a,f){return Hn(this),this.i=null,a=Zr(this,a),Vu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Ra(a,f,m){Pa(a,f),0<m.length&&(a.i=null,a.g.set(Zr(a,f),D(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var _=f[m];const B=encodeURIComponent(String(_)),G=this.V(_);for(_=0;_<G.length;_++){var V=B;G[_]!==""&&(V+="="+encodeURIComponent(String(G[_]))),a.push(V)}}return this.i=a.join("&")};function Zr(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function zh(a,f){f&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(m,_){var V=_.toLowerCase();_!=V&&(Pa(this,_),Ra(this,V,m))},a)),a.j=f}function $h(a,f){const m=new Ht;if(l.Image){const _=new Image;_.onload=k(Wn,m,"TestLoadImage: loaded",!0,f,_),_.onerror=k(Wn,m,"TestLoadImage: error",!1,f,_),_.onabort=k(Wn,m,"TestLoadImage: abort",!1,f,_),_.ontimeout=k(Wn,m,"TestLoadImage: timeout",!1,f,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else f(!1)}function Hh(a,f){const m=new Ht,_=new AbortController,V=setTimeout(()=>{_.abort(),Wn(m,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:_.signal}).then(B=>{clearTimeout(V),B.ok?Wn(m,"TestPingServer: ok",!0,f):Wn(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),Wn(m,"TestPingServer: error",!1,f)})}function Wn(a,f,m,_,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),_(m)}catch{}}function Wh(){this.g=new Qs}function qh(a,f,m){const _=m||"";try{Ou(a,function(V,B){let G=V;d(V)&&(G=gr(V)),f.push(_+B+"="+encodeURIComponent(G))})}catch(V){throw f.push(_+"type="+encodeURIComponent("_badmap")),V}}function ei(a){this.l=a.Ub||null,this.j=a.eb||!1}x(ei,ts),ei.prototype.g=function(){return new ro(this.l,this.j)},ei.prototype.i=function(a){return function(){return a}}({});function ro(a,f){Ze.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(ro,Ze),t=ro.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,as(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,os(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,as(this)),this.g&&(this.readyState=3,as(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xa(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xa(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?os(this):as(this),this.readyState==3&&xa(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,os(this))},t.Qa=function(a){this.g&&(this.response=a,os(this))},t.ga=function(){this.g&&os(this)};function os(a){a.readyState=4,a.l=null,a.j=null,a.v=null,as(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=f.next();return a.join(`\r
`)};function as(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _r(a){let f="";return K(a,function(m,_){f+=_,f+=":",f+=m,f+=`\r
`}),f}function io(a,f,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=_r(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):Ie(a,f,m))}function Oe(a){Ze.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Oe,Ze);var Na=/^https?$/i,Fu=["POST","PUT"];t=Oe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sa.g(),this.v=this.o?Su(this.o):Su(Sa),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(B){Uu(this,B);return}if(a=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var V in _)m.set(V,_[V]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const B of _.keys())m.set(B,_.get(B));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(B=>B.toLowerCase()=="content-type"),V=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Fu,f,void 0))||_||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,G]of m)this.g.setRequestHeader(B,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zu(this),this.u=!0,this.g.send(a),this.u=!1}catch(B){Uu(this,B)}};function Uu(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,ju(a),so(a)}function ju(a){a.A||(a.A=!0,ct(a,"complete"),ct(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ct(this,"complete"),ct(this,"abort"),so(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),so(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bu(this):this.bb())},t.bb=function(){Bu(this)};function Bu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Cn(a)!=4||a.Z()!=2)){if(a.u&&Cn(a)==4)es(a.Ea,0,a);else if(ct(a,"readystatechange"),Cn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var _;if(_=G===0){var V=String(a.D).match(Te)[1]||null;!V&&l.self&&l.self.location&&(V=l.self.location.protocol.slice(0,-1)),_=!Na.test(V?V.toLowerCase():"")}m=_}if(m)ct(a,"complete"),ct(a,"success");else{a.m=6;try{var B=2<Cn(a)?a.g.statusText:""}catch{B=""}a.l=B+" ["+a.Z()+"]",ju(a)}}finally{so(a)}}}}function so(a,f){if(a.g){zu(a);const m=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||ct(a,"ready");try{m.onreadystatechange=_}catch{}}}function zu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Iu(f)}};function Er(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Kh(a){const f={};a=(a.g&&2<=Cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(T(a[_]))continue;var m=N(a[_]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const B=f[V]||[];f[V]=B,B.push(m)}b(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(a,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||f}function Oa(a){this.Aa=0,this.i=[],this.j=new Ht,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ti("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ti("baseRetryDelayMs",5e3,a),this.cb=ti("retryDelaySeedMs",1e4,a),this.Wa=ti("forwardChannelMaxRetries",2,a),this.wa=ti("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bn(a&&a.concurrentRequestLimit),this.Da=new Wh,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Oa.prototype,t.la=8,t.G=1,t.connect=function(a,f,m,_){dt(0),this.W=a,this.H=f||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=Qu(this,null,this.W),ao(this)};function Da(a){if($u(a),a.G==3){var f=a.U++,m=bn(a.I);if(Ie(m,"SID",a.K),Ie(m,"RID",f),Ie(m,"TYPE","terminate"),ls(a,m),f=new Sn(a,a.j,f),f.L=2,f.v=zn(bn(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=f.v,m=!0),m||(f.g=Yu(f.j,null),f.g.ea(f.v)),f.F=Date.now(),eo(f)}Gu(a)}function oo(a){a.g&&(lo(a),a.g.cancel(),a.g=null)}function $u(a){oo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Zt(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ao(a){if(!Pu(a.h)&&!a.s){a.s=!0;var f=a.Ga;be||Q(),X||(be(),X=!0),ie.add(f,a),a.B=0}}function Gh(a,f){return Ru(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Pt(w(a.Ga,a,f),Ma(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const V=new Sn(this,this.j,a);let B=this.o;if(this.S&&(B?(B=E(B),R(B,this.S)):B=this.S),this.m!==null||this.O||(V.H=B,B=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Tr(this,V,f),m=bn(this.I),Ie(m,"RID",a),Ie(m,"CVER",22),this.D&&Ie(m,"X-HTTP-Session-Id",this.D),ls(this,m),B&&(this.O?f="headers="+encodeURIComponent(String(_r(B)))+"&"+f:this.m&&io(m,this.m,B)),is(this.h,V),this.Ua&&Ie(m,"TYPE","init"),this.P?(Ie(m,"$req",f),Ie(m,"SID","null"),V.T=!0,Aa(V,m,null)):Aa(V,m,f),this.G=2}}else this.G==3&&(a?Hu(this,a):this.i.length==0||Pu(this.h)||Hu(this))};function Hu(a,f){var m;f?m=f.l:m=a.U++;const _=bn(a.I);Ie(_,"SID",a.K),Ie(_,"RID",m),Ie(_,"AID",a.T),ls(a,_),a.m&&a.o&&io(_,a.m,a.o),m=new Sn(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Tr(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),is(a.h,m),Aa(m,_,f)}function ls(a,f){a.H&&K(a.H,function(m,_){Ie(f,_,m)}),a.l&&Ou({},function(m,_){Ie(f,_,m)})}function Tr(a,f,m){m=Math.min(a.i.length,m);var _=a.l?w(a.l.Na,a.l,a):null;e:{var V=a.i;let B=-1;for(;;){const G=["count="+m];B==-1?0<m?(B=V[0].g,G.push("ofs="+B)):B=0:G.push("ofs="+B);let _e=!0;for(let $e=0;$e<m;$e++){let me=V[$e].g;const ht=V[$e].map;if(me-=B,0>me)B=Math.max(0,V[$e].g-100),_e=!1;else try{qh(ht,G,"req"+me+"_")}catch{_&&_(ht)}}if(_e){_=G.join("&");break e}}}return a=a.i.splice(0,m),f.D=a,_}function Wu(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;be||Q(),X||(be(),X=!0),ie.add(f,a),a.v=0}}function La(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Pt(w(a.Fa,a),Ma(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,qu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Pt(w(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),oo(this),qu(this))};function lo(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function qu(a){a.g=new Sn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=bn(a.qa);Ie(f,"RID","rpc"),Ie(f,"SID",a.K),Ie(f,"AID",a.T),Ie(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ie(f,"TO",a.ja),Ie(f,"TYPE","xmlhttp"),ls(a,f),a.m&&a.o&&io(f,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=zn(bn(f)),m.m=null,m.P=!0,Cu(m,a)}t.Za=function(){this.C!=null&&(this.C=null,oo(this),La(this),dt(19))};function Zt(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ku(a,f){var m=null;if(a.g==f){Zt(a),lo(a),a.g=null;var _=2}else if(ka(a.h,f))m=f.D,xu(a.h,f),_=1;else return;if(a.G!=0){if(f.o)if(_==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var V=a.B;_=Xs(),ct(_,new fe(_,m)),ao(a)}else Wu(a);else if(V=f.s,V==3||V==0&&0<f.X||!(_==1&&Gh(a,f)||_==2&&La(a)))switch(m&&0<m.length&&(f=a.h,f.i=f.i.concat(m)),V){case 1:en(a,5);break;case 4:en(a,10);break;case 3:en(a,6);break;default:en(a,2)}}}function Ma(a,f){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*f}function en(a,f){if(a.j.info("Error code "+f),f==2){var m=w(a.fb,a),_=a.Xa;const V=!_;_=new wr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||to(_,"https"),zn(_),V?$h(_.toString(),m):Hh(_.toString(),m)}else dt(2);a.G=0,a.l&&a.l.sa(f),Gu(a),$u(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Gu(a){if(a.G=0,a.ka=[],a.l){const f=Nu(a.h);(f.length!=0||a.i.length!=0)&&(O(a.ka,f),O(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Qu(a,f,m){var _=m instanceof wr?bn(m):new wr(m);if(_.g!="")f&&(_.g=f+"."+_.g),no(_,_.s);else{var V=l.location;_=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;var B=new wr(null);_&&to(B,_),f&&(B.g=f),V&&no(B,V),m&&(B.l=m),_=B}return m=a.D,f=a.ya,m&&f&&Ie(_,m,f),Ie(_,"VER",a.la),ls(a,_),_}function Yu(a,f,m){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new Oe(new ei({eb:m})):new Oe(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Va(){}t=Va.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function kn(){}kn.prototype.g=function(a,f){return new Vt(a,f)};function Vt(a,f){Ze.call(this),this.g=new Oa(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!T(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!T(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new ni(this)}x(Vt,Ze),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Da(this.g)},Vt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=gr(a),a=m);f.i.push(new Lh(f.Ya++,a)),f.G==3&&ao(f)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Da(this.g),delete this.g,Vt.aa.N.call(this)};function Xu(a){Xr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const m in f){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}x(Xu,Xr);function Ju(){Ea.call(this),this.status=1}x(Ju,Ea);function ni(a){this.g=a}x(ni,Va),ni.prototype.ua=function(){ct(this.g,"a")},ni.prototype.ta=function(a){ct(this.g,new Xu(a))},ni.prototype.sa=function(a){ct(this.g,new Ju)},ni.prototype.ra=function(){ct(this.g,"b")},kn.prototype.createWebChannel=kn.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,nT=function(){return new kn},tT=function(){return Xs()},eT=Ge,Kp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Un.NO_ERROR=0,Un.TIMEOUT=8,Un.HTTP_ERROR=6,jc=Un,yt.COMPLETE="complete",Z1=yt,Ys.EventType=vr,vr.OPEN="a",vr.CLOSE="b",vr.ERROR="c",vr.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,tl=Ys,J1=ei,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,X1=Oe}).apply(typeof _c<"u"?_c:typeof self<"u"?self:typeof window<"u"?window:{});const Lw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new Rg("@firebase/firestore");function Ka(){return Os.logLevel}function Z(t,...e){if(Os.logLevel<=pe.DEBUG){const n=e.map(Og);Os.debug(`Firestore (${ca}): ${t}`,...n)}}function jr(t,...e){if(Os.logLevel<=pe.ERROR){const n=e.map(Og);Os.error(`Firestore (${ca}): ${t}`,...n)}}function Qo(t,...e){if(Os.logLevel<=pe.WARN){const n=e.map(Og);Os.warn(`Firestore (${ca}): ${t}`,...n)}}function Og(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t="Unexpected state"){const e=`FIRESTORE (${ca}) INTERNAL ASSERTION FAILED: `+t;throw jr(e),new Error(e)}function Ae(t,e){t||se()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends dr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class dR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hR{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Lr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new rT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new Ot(e)}}class fR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new fR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new mR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=vR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Yo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new lt(0,0))}static max(){return new oe(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Hl{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const yR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Hl{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return yR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new te(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new te(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new te(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new te(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Le.fromString(e))}static fromName(e){return new ne(Le.fromString(e).popFirst(5))}static empty(){return new ne(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Le(e.slice()))}}function wR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Fi(i,ne.empty(),e)}function _R(t){return new Fi(t.readTime,t.key,-1)}class Fi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Fi(oe.min(),ne.empty(),-1)}static max(){return new Fi(oe.max(),ne.empty(),-1)}}function ER(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==TR)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(i=>i?W.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new W((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(p=>{o[d]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new W((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function SR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function cu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Dg.oe=-1;function ch(t){return t==null}function Cd(t){return t===0&&1/t==-1/0}function AR(t){return typeof t=="number"&&Number.isInteger(t)&&!Cd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ec(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ec(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ec(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ec(this.root,e,this.comparator,!0)}}class Ec{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_t.RED,this.left=i??_t.EMPTY,this.right=s??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new _t(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,n,r,i,s){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vw(this.data.getIterator())}getIteratorFrom(e){return new Vw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class Vw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new sn([])}unionWith(e){let n=new It(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new oT("Invalid base64 string: "+s):s}}(e);return new bt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const bR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=bR.exec(t);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ds(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mg(t){const e=t.mapValue.fields.__previous_value__;return Lg(e)?Mg(e):e}function Wl(t){const e=Ui(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class ql{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ql("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ql&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lg(t)?4:kR(t)?9007199254740991:10:se()}function lr(t,e){if(t===e)return!0;const n=Ls(t);if(n!==Ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wl(t).isEqual(Wl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ui(i.timestampValue),l=Ui(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ds(i.bytesValue).isEqual(Ds(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return nt(i.geoPointValue.latitude)===nt(s.geoPointValue.latitude)&&nt(i.geoPointValue.longitude)===nt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return nt(i.integerValue)===nt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=nt(i.doubleValue),l=nt(s.doubleValue);return o===l?Cd(o)===Cd(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Yo(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Mw(o)!==Mw(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!lr(o[u],l[u])))return!1;return!0}(t,e);default:return se()}}function Kl(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function Xo(t,e){if(t===e)return 0;const n=Ls(t),r=Ls(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=nt(s.integerValue||s.doubleValue),u=nt(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Fw(t.timestampValue,e.timestampValue);case 4:return Fw(Wl(t),Wl(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ds(s),u=Ds(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=we(l[d],u[d]);if(p!==0)return p}return we(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=we(nt(s.latitude),nt(o.latitude));return l!==0?l:we(nt(s.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let d=0;d<l.length&&d<u.length;++d){const p=Xo(l[d],u[d]);if(p)return p}return we(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Tc.mapValue&&o===Tc.mapValue)return 0;if(s===Tc.mapValue)return 1;if(o===Tc.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let y=0;y<u.length&&y<p.length;++y){const w=we(u[y],p[y]);if(w!==0)return w;const k=Xo(l[u[y]],d[p[y]]);if(k!==0)return k}return we(u.length,p.length)}(t.mapValue,e.mapValue);default:throw se()}}function Fw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Ui(t),r=Ui(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function Jo(t){return Gp(t)}function Gp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ui(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ds(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Gp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Gp(n.fields[o])}`;return i+"}"}(t.mapValue):se()}function Qp(t){return!!t&&"integerValue"in t}function Vg(t){return!!t&&"arrayValue"in t}function Uw(t){return!!t&&"nullValue"in t}function jw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bc(t){return!!t&&"mapValue"in t}function gl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $s(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gl(n)}setAll(e){let n=Et.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=gl(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Bc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Bc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$s(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new qt(gl(this.value))}}function aT(t){const e=[];return $s(t.fields,(n,r)=>{const i=new Et([n]);if(Bc(r)){const s=aT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Lt(e,0,oe.min(),oe.min(),oe.min(),qt.empty(),0)}static newFoundDocument(e,n,r,i){return new Lt(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new Lt(e,2,n,oe.min(),oe.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new Lt(e,3,n,oe.min(),oe.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){this.position=e,this.inclusive=n}}function Bw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=Xo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function zw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n="asc"){this.field=e,this.dir=n}}function PR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{}class ot extends lT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xR(e,n,r):n==="array-contains"?new DR(e,r):n==="in"?new LR(e,r):n==="not-in"?new MR(e,r):n==="array-contains-any"?new VR(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new NR(e,r):new OR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xo(n,this.value)):n!==null&&Ls(this.value)===Ls(n)&&this.matchesComparison(Xo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ur extends lT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ur(e,n)}matches(e){return uT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function uT(t){return t.op==="and"}function cT(t){return RR(t)&&uT(t)}function RR(t){for(const e of t.filters)if(e instanceof ur)return!1;return!0}function Yp(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+Jo(t.value);if(cT(t))return t.filters.map(e=>Yp(e)).join(",");{const e=t.filters.map(n=>Yp(n)).join(",");return`${t.op}(${e})`}}function dT(t,e){return t instanceof ot?function(r,i){return i instanceof ot&&r.op===i.op&&r.field.isEqual(i.field)&&lr(r.value,i.value)}(t,e):t instanceof ur?function(r,i){return i instanceof ur&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&dT(o,i.filters[l]),!0):!1}(t,e):void se()}function hT(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${Jo(n.value)}`}(t):t instanceof ur?function(n){return n.op.toString()+" {"+n.getFilters().map(hT).join(" ,")+"}"}(t):"Filter"}class xR extends ot{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class NR extends ot{constructor(e,n){super(e,"in",n),this.keys=fT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OR extends ot{constructor(e,n){super(e,"not-in",n),this.keys=fT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class DR extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vg(n)&&Kl(n.arrayValue,this.value)}}class LR extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Kl(this.value.arrayValue,n)}}class MR extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Kl(this.value.arrayValue,n)}}class VR extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Kl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function $w(t,e=null,n=[],r=[],i=null,s=null,o=null){return new FR(t,e,n,r,i,s,o)}function Fg(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ch(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Jo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Jo(r)).join(",")),e.ue=n}return e.ue}function Ug(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zw(t.startAt,e.startAt)&&zw(t.endAt,e.endAt)}function Xp(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function UR(t,e,n,r,i,s,o,l){return new dh(t,e,n,r,i,s,o,l)}function jg(t){return new dh(t)}function Hw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jR(t){return t.collectionGroup!==null}function vl(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new It(Et.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Pd(s,r))}),n.has(Et.keyField().canonicalString())||e.ce.push(new Pd(Et.keyField(),r))}return e.ce}function rr(t){const e=ae(t);return e.le||(e.le=BR(e,vl(t))),e.le}function BR(t,e){if(t.limitType==="F")return $w(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pd(i.field,s)});const n=t.endAt?new kd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kd(t.startAt.position,t.startAt.inclusive):null;return $w(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Jp(t,e,n){return new dh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hh(t,e){return Ug(rr(t),rr(e))&&t.limitType===e.limitType}function pT(t){return`${Fg(rr(t))}|lt:${t.limitType}`}function fo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>hT(i)).join(", ")}]`),ch(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Jo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Jo(i)).join(",")),`Target(${r})`}(rr(t))}; limitType=${t.limitType})`}function fh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of vl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=Bw(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,vl(r),i)||r.endAt&&!function(o,l,u){const d=Bw(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,vl(r),i))}(t,e)}function zR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mT(t){return(e,n)=>{let r=!1;for(const i of vl(t)){const s=$R(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $R(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Xo(u,d):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return sT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=new ze(ne.comparator);function Br(){return HR}const gT=new ze(ne.comparator);function nl(...t){let e=gT;for(const n of t)e=e.insert(n.key,n);return e}function vT(t){let e=gT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ys(){return yl()}function yT(){return yl()}function yl(){return new da(t=>t.toString(),(t,e)=>t.isEqual(e))}const WR=new ze(ne.comparator),qR=new It(ne.comparator);function he(...t){let e=qR;for(const n of t)e=e.add(n);return e}const KR=new It(we);function GR(){return KR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cd(e)?"-0":e}}function _T(t){return{integerValue:""+t}}function QR(t,e){return AR(e)?_T(e):wT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this._=void 0}}function YR(t,e,n){return t instanceof Rd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Lg(s)&&(s=Mg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Gl?TT(t,e):t instanceof Ql?IT(t,e):function(i,s){const o=ET(i,s),l=Ww(o)+Ww(i.Pe);return Qp(o)&&Qp(i.Pe)?_T(l):wT(i.serializer,l)}(t,e)}function XR(t,e,n){return t instanceof Gl?TT(t,e):t instanceof Ql?IT(t,e):n}function ET(t,e){return t instanceof xd?function(r){return Qp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Rd extends ph{}class Gl extends ph{constructor(e){super(),this.elements=e}}function TT(t,e){const n=ST(e);for(const r of t.elements)n.some(i=>lr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ql extends ph{constructor(e){super(),this.elements=e}}function IT(t,e){let n=ST(e);for(const r of t.elements)n=n.filter(i=>!lr(i,r));return{arrayValue:{values:n}}}class xd extends ph{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ww(t){return nt(t.integerValue||t.doubleValue)}function ST(t){return Vg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function JR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Gl&&i instanceof Gl||r instanceof Ql&&i instanceof Ql?Yo(r.elements,i.elements,lr):r instanceof xd&&i instanceof xd?lr(r.Pe,i.Pe):r instanceof Rd&&i instanceof Rd}(t.transform,e.transform)}class ZR{constructor(e,n){this.version=e,this.transformResults=n}}class ir{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ir}static exists(e){return new ir(void 0,e)}static updateTime(e){return new ir(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mh{}function AT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new CT(t.key,ir.none()):new du(t.key,t.data,ir.none());{const n=t.data,r=qt.empty();let i=new It(Et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qi(t.key,r,new sn(i.toArray()),ir.none())}}function ex(t,e,n){t instanceof du?function(i,s,o){const l=i.value.clone(),u=Kw(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Qi?function(i,s,o){if(!zc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Kw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(bT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wl(t,e,n,r){return t instanceof du?function(s,o,l,u){if(!zc(s.precondition,o))return l;const d=s.value.clone(),p=Gw(s.fieldTransforms,u,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qi?function(s,o,l,u){if(!zc(s.precondition,o))return l;const d=Gw(s.fieldTransforms,u,o),p=o.data;return p.setAll(bT(s)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(s,o,l){return zc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function tx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=ET(r.transform,i||null);s!=null&&(n===null&&(n=qt.empty()),n.set(r.field,s))}return n||null}function qw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Yo(r,i,(s,o)=>JR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class du extends mh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qi extends mh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function bT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kw(t,e,n){const r=new Map;Ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,XR(o,l,n[i]))}return r}function Gw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,YR(s,o,e))}return r}class CT extends mh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nx extends mh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ex(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=AT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Yo(this.mutations,e.mutations,(n,r)=>qw(n,r))&&Yo(this.baseMutations,e.baseMutations,(n,r)=>qw(n,r))}}class Bg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ae(e.mutations.length===r.length);let i=function(){return WR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Bg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,ge;function ox(t){switch(t){default:return se();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function kT(t){if(t===void 0)return jr("GRPC error has no .code"),H.UNKNOWN;switch(t){case tt.OK:return H.OK;case tt.CANCELLED:return H.CANCELLED;case tt.UNKNOWN:return H.UNKNOWN;case tt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case tt.INTERNAL:return H.INTERNAL;case tt.UNAVAILABLE:return H.UNAVAILABLE;case tt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case tt.NOT_FOUND:return H.NOT_FOUND;case tt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case tt.ABORTED:return H.ABORTED;case tt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case tt.DATA_LOSS:return H.DATA_LOSS;default:return se()}}(ge=tt||(tt={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=new Es([4294967295,4294967295],0);function Qw(t){const e=ax().encode(t),n=new Y1;return n.update(e),new Uint8Array(n.digest())}function Yw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Es([n,r],0),new Es([i,s],0)]}class zg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new rl(`Invalid padding: ${n}`);if(r<0)throw new rl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new rl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new rl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Es.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Es.fromNumber(r)));return i.compare(lx)===1&&(i=new Es([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Qw(e),[r,i]=Yw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new zg(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Qw(e),[r,i]=Yw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class rl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,hu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gh(oe.min(),i,new ze(we),Br(),he())}}class hu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new hu(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class PT{constructor(e,n){this.targetId=e,this.me=n}}class RT{constructor(e,n,r=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xw{constructor(){this.fe=0,this.ge=Zw(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=he(),n=he(),r=he();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:se()}}),new hu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Zw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ux{constructor(e){this.Le=e,this.Be=new Map,this.ke=Br(),this.qe=Jw(),this.Qe=new ze(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Xp(s))if(r===0){const o=new ne(s.path);this.Ue(n,o,Lt.newNoDocument(o,oe.min()))}else Ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ds(r).toUint8Array()}catch(u){if(u instanceof oT)return Qo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new zg(o,i,s)}catch(u){return Qo(u instanceof rl?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Xp(l.target)){const u=new ne(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Lt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=he();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new gh(e,n,this.Qe,this.ke,r);return this.ke=Br(),this.qe=Jw(),this.Qe=new ze(we),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Xw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new It(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Xw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Jw(){return new ze(ne.comparator)}function Zw(){return new ze(ne.comparator)}const cx={asc:"ASCENDING",desc:"DESCENDING"},dx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hx={and:"AND",or:"OR"};class fx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zp(t,e){return t.useProto3Json||ch(e)?e:{value:e}}function Nd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function px(t,e){return Nd(t,e.toTimestamp())}function sr(t){return Ae(!!t),oe.fromTimestamp(function(n){const r=Ui(n);return new lt(r.seconds,r.nanos)}(t))}function $g(t,e){return em(t,e).canonicalString()}function em(t,e){const n=function(i){return new Le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function NT(t){const e=Le.fromString(t);return Ae(VT(e)),e}function tm(t,e){return $g(t.databaseId,e.path)}function xf(t,e){const n=NT(e);if(n.get(1)!==t.databaseId.projectId)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(DT(n))}function OT(t,e){return $g(t.databaseId,e)}function mx(t){const e=NT(t);return e.length===4?Le.emptyPath():DT(e)}function nm(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DT(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function e_(t,e,n){return{name:tm(t,e),fields:n.value.mapValue.fields}}function gx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(Ae(p===void 0||typeof p=="string"),bt.fromBase64String(p||"")):(Ae(p===void 0||p instanceof Buffer||p instanceof Uint8Array),bt.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const p=d.code===void 0?H.UNKNOWN:kT(d.code);return new te(p,d.message||"")}(o);n=new RT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=xf(t,r.document.name),s=sr(r.document.updateTime),o=r.document.createTime?sr(r.document.createTime):oe.min(),l=new qt({mapValue:{fields:r.document.fields}}),u=Lt.newFoundDocument(i,s,o,l),d=r.targetIds||[],p=r.removedTargetIds||[];n=new $c(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=xf(t,r.document),s=r.readTime?sr(r.readTime):oe.min(),o=Lt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new $c([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=xf(t,r.document),s=r.removedTargetIds||[];n=new $c([],s,i,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new sx(i,s),l=r.targetId;n=new PT(l,o)}}return n}function vx(t,e){let n;if(e instanceof du)n={update:e_(t,e.key,e.value)};else if(e instanceof CT)n={delete:tm(t,e.key)};else if(e instanceof Qi)n={update:e_(t,e.key,e.data),updateMask:bx(e.fieldMask)};else{if(!(e instanceof nx))return se();n={verify:tm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Rd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Gl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ql)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xd)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:px(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se()}(t,e.precondition)),n}function yx(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?sr(i.updateTime):sr(s);return o.isEqual(oe.min())&&(o=sr(s)),new ZR(o,i.transformResults||[])}(n,e))):[]}function wx(t,e){return{documents:[OT(t,e.path)]}}function _x(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=OT(t,i);const s=function(d){if(d.length!==0)return MT(ur.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(p=>function(w){return{field:po(w.field),direction:Ix(w.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Zp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function Ex(t){let e=mx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ae(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(y){const w=LT(y);return w instanceof ur&&cT(w)?w.getFilters():[w]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(w=>function(x){return new Pd(mo(x.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(w))}(n.orderBy));let l=null;n.limit&&(l=function(y){let w;return w=typeof y=="object"?y.value:y,ch(w)?null:w}(n.limit));let u=null;n.startAt&&(u=function(y){const w=!!y.before,k=y.values||[];return new kd(k,w)}(n.startAt));let d=null;return n.endAt&&(d=function(y){const w=!y.before,k=y.values||[];return new kd(k,w)}(n.endAt)),UR(e,i,o,s,l,"F",u,d)}function Tx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function LT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mo(n.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=mo(n.unaryFilter.field);return ot.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mo(n.unaryFilter.field);return ot.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mo(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(mo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ur.create(n.compositeFilter.filters.map(r=>LT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return se()}}(n.compositeFilter.op))}(t):se()}function Ix(t){return cx[t]}function Sx(t){return dx[t]}function Ax(t){return hx[t]}function po(t){return{fieldPath:t.canonicalString()}}function mo(t){return Et.fromServerFormat(t.fieldPath)}function MT(t){return t instanceof ot?function(n){if(n.op==="=="){if(jw(n.value))return{unaryFilter:{field:po(n.field),op:"IS_NAN"}};if(Uw(n.value))return{unaryFilter:{field:po(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jw(n.value))return{unaryFilter:{field:po(n.field),op:"IS_NOT_NAN"}};if(Uw(n.value))return{unaryFilter:{field:po(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:po(n.field),op:Sx(n.op),value:n.value}}}(t):t instanceof ur?function(n){const r=n.getFilters().map(i=>MT(i));return r.length===1?r[0]:{compositeFilter:{op:Ax(n.op),filters:r}}}(t):se()}function bx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,r,i,s=oe.min(),o=oe.min(),l=bt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new _i(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.ct=e}}function kx(t){const e=Ex({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(){this.an=new Rx}addToCollectionParentIndex(e,n){return this.an.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(Fi.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(Fi.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class Rx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new It(Le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new It(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new Zo(0)}static Bn(){return new Zo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(){this.changes=new da(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&wl(r.mutation,i,sn.empty(),lt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const i=ys();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=nl();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ys();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Br();const o=yl(),l=function(){return yl()}();return n.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Qi)?s=s.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),wl(p.mutation,d,p.mutation.getFieldMask(),lt.now())):o.set(d.key,sn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,p)=>o.set(d,p)),n.forEach((d,p)=>{var y;return l.set(d,new Nx(p,(y=o.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=yl();let i=new ze((o,l)=>o-l),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let p=r.get(u)||sn.empty();p=l.applyToLocalView(d,p),r.set(u,p);const y=(i.get(l.batchId)||he()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,y=yT();p.forEach(w=>{if(!s.has(w)){const k=AT(n.get(w),r.get(w));k!==null&&y.set(w,k),s=s.add(w)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,y))}return W.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):W.resolve(ys());let l=-1,u=s;return o.next(d=>W.forEach(d,(p,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),s.get(p)?W.resolve():this.remoteDocumentCache.getEntry(e,p).next(w=>{u=u.insert(p,w)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,he())).next(p=>({batchId:l,changes:vT(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let i=nl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=nl();return this.indexManager.getCollectionParents(e,s).next(l=>W.forEach(l,u=>{const d=function(y,w){return new dh(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((y,w)=>{o=o.insert(y,w)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,Lt.newInvalidDocument(p)))});let l=nl();return o.forEach((u,d)=>{const p=s.get(u);p!==void 0&&wl(p.mutation,d,sn.empty(),lt.now()),fh(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return W.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:sr(i.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:kx(i.bundledQuery),readTime:sr(i.readTime)}}(n)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(){this.overlays=new ze(ne.comparator),this.Pr=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ys();return W.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const i=ys(),s=n.length+1,o=new ne(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return W.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ze((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=ys(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=ys(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return W.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ix(n,r));let s=this.Pr.get(n);s===void 0&&(s=he(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.Ir=new It(pt.Tr),this.Er=new It(pt.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new pt(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new pt(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new ne(new Le([])),r=new pt(n,e),i=new pt(n,e+1),s=[];return this.Er.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new ne(new Le([])),r=new pt(n,e),i=new pt(n,e+1);let s=he();return this.Er.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new pt(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return ne.comparator(e.key,n.key)||we(e.yr,n.yr)}static dr(e,n){return we(e.yr,n.yr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new It(pt.Tr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rx(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Sr=this.Sr.add(new pt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return W.resolve(o)}lookupMutationBatch(e,n){return W.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return W.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new pt(n,0),i=new pt(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const l=this.br(o.yr);s.push(l)}),W.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new It(we);return n.forEach(i=>{const s=new pt(i,0),o=new pt(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],l=>{r=r.add(l.yr)})}),W.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const o=new pt(new ne(s),0);let l=new It(we);return this.Sr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.yr)),!0)},o),W.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ae(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return W.forEach(n.mutations,i=>{const s=new pt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new pt(n,0),i=this.Sr.firstAfterOrEqual(r);return W.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.Fr=e,this.docs=function(){return new ze(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(n))}getEntries(e,n){let r=Br();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Lt.newInvalidDocument(i))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Br();const o=n.path,l=new ne(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||ER(_R(p),r)<=0||(i.has(p.key)||fh(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return W.resolve(s)}getAllFromCollectionGroup(e,n,r,i){se()}Mr(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ux(this)}getSize(e){return W.resolve(this.size)}}class Ux extends xx{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.persistence=e,this.Or=new da(n=>Fg(n),Ug),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Hg,this.targetCount=0,this.Br=Zo.Ln()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),W.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Zo(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Qn(n),W.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),W.waitFor(s).next(()=>i)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),W.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),W.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this.Lr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n){this.kr={},this.overlays={},this.qr=new Dg(0),this.Qr=!1,this.Qr=!0,this.Kr=new Mx,this.referenceDelegate=e(this),this.$r=new jx(this),this.indexManager=new Px,this.remoteDocumentCache=function(i){return new Fx(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new Cx(n),this.Wr=new Dx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Lx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new Vx(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new zx(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,n){return W.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class zx extends IR{constructor(e){super(),this.currentSequenceNumber=e}}class Wg{constructor(e){this.persistence=e,this.Hr=new Hg,this.Jr=null}static Yr(e){return new Wg(e)}get Zr(){if(this.Jr)return this.Jr;throw se()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),W.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Zr,r=>{const i=ne.fromPath(r);return this.Xr(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return W.or([()=>W.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=i}static Ui(e,n){let r=he(),i=he();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return Gk()?8:SR(At())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new $x;return this.Zi(e,n,o).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,n,o,l.size)})}).next(()=>s.result)}Xi(e,n,r,i){return r.documentReadCount<this.zi?(Ka()<=pe.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",fo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),W.resolve()):(Ka()<=pe.DEBUG&&Z("QueryEngine","Query:",fo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(Ka()<=pe.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",fo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rr(n))):W.resolve())}Ji(e,n){if(Hw(n))return W.resolve(null);let r=rr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jp(n,null,"F"),r=rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.Hi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.es(n,l);return this.ts(n,d,o,u.readTime)?this.Ji(e,Jp(n,null,"F")):this.ns(e,d,n,u)}))})))}Yi(e,n,r,i){return Hw(n)||i.isEqual(oe.min())?W.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const o=this.es(n,s);return this.ts(n,o,r,i)?W.resolve(null):(Ka()<=pe.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fo(n)),this.ns(e,o,n,wR(i,-1)).next(l=>l))})}es(e,n){let r=new It(mT(e));return n.forEach((i,s)=>{fh(e,s)&&(r=r.add(s))}),r}ts(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,n,r){return Ka()<=pe.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",fo(n)),this.Hi.getDocumentsMatchingQuery(e,n,Fi.min(),r)}ns(e,n,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,n,r,i){this.persistence=e,this.rs=n,this.serializer=i,this.ss=new ze(we),this.os=new da(s=>Fg(s),Ug),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ox(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function qx(t,e,n,r){return new Wx(t,e,n,r)}async function FT(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=he();for(const d of i){o.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of s){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(d=>({ls:d,removedBatchIds:o,addedBatchIds:l}))})})}function Kx(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.us.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const y=d.batch,w=y.keys();let k=W.resolve();return w.forEach(x=>{k=k.next(()=>p.getEntry(u,x)).next(D=>{const O=d.docVersions.get(x);Ae(O!==null),D.version.compareTo(O)<0&&(y.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=he();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function UT(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function Gx(t,e){const n=ae(t),r=e.snapshotVersion;let i=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.us.newChangeBuffer({trackRemovals:!0});i=n.ss;const l=[];e.targetChanges.forEach((p,y)=>{const w=i.get(y);if(!w)return;l.push(n.$r.removeMatchingKeys(s,p.removedDocuments,y).next(()=>n.$r.addMatchingKeys(s,p.addedDocuments,y)));let k=w.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?k=k.withResumeToken(bt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,r)),i=i.insert(y,k),function(D,O,I){return D.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(w,k,p)&&l.push(n.$r.updateTargetData(s,k))});let u=Br(),d=he();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(Qx(s,o,e.documentUpdates).next(p=>{u=p.hs,d=p.Ps})),!r.isEqual(oe.min())){const p=n.$r.getLastRemoteSnapshotVersion(s).next(y=>n.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return W.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.ss=i,s))}function Qx(t,e,n){let r=he(),i=he();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Br();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(oe.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{hs:o,Ps:i}})}function Yx(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Xx(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.$r.getTargetData(r,e).next(s=>s?(i=s,W.resolve(i)):n.$r.allocateTargetId(r).next(o=>(i=new _i(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function rm(t,e,n){const r=ae(t),i=r.ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!cu(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function t_(t,e,n){const r=ae(t);let i=oe.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,p){const y=ae(u),w=y.os.get(p);return w!==void 0?W.resolve(y.ss.get(w)):y.$r.getTargetData(d,p)}(r,o,rr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?i:oe.min(),n?s:he())).next(l=>(Jx(r,zR(e),l),{documents:l,Is:s})))}function Jx(t,e,n){let r=t._s.get(e)||oe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t._s.set(e,r)}class n_{constructor(){this.activeTargetIds=GR()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zx{constructor(){this.io=new n_,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new n_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic=null;function Nf(){return Ic===null?Ic=function(){return 268435456+Math.round(2147483648*Math.random())}():Ic++,"0x"+Ic.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="WebChannelConnection";class rN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(n,r,i,s,o){const l=Nf(),u=this.Mo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(d,s,o),this.Oo(n,u,d,i).then(p=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Qo("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}No(n,r,i,s,o,l){return this.Fo(n,r,i,s,o)}xo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ca}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Mo(n,r){const i=tN[n];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,i){const s=Nf();return new Promise((o,l)=>{const u=new X1;u.setWithCredentials(!0),u.listenOnce(Z1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case jc.NO_ERROR:const p=u.getResponseJson();Z(Nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),o(p);break;case jc.TIMEOUT:Z(Nt,`RPC '${e}' ${s} timed out`),l(new te(H.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const y=u.getStatus();if(Z(Nt,`RPC '${e}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const k=w==null?void 0:w.error;if(k&&k.status&&k.message){const x=function(O){const I=O.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(I)>=0?I:H.UNKNOWN}(k.status);l(new te(x,k.message))}else l(new te(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new te(H.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{Z(Nt,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);Z(Nt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Lo(e,n,r){const i=Nf(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nT(),l=tT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new J1({})),this.xo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");Z(Nt,`Creating RPC '${e}' stream ${i}: ${p}`,u);const y=o.createWebChannel(p,u);let w=!1,k=!1;const x=new nN({Po:O=>{k?Z(Nt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(w||(Z(Nt,`Opening RPC '${e}' stream ${i} transport.`),y.open(),w=!0),Z(Nt,`RPC '${e}' stream ${i} sending:`,O),y.send(O))},Io:()=>y.close()}),D=(O,I,T)=>{O.listen(I,A=>{try{T(A)}catch(F){setTimeout(()=>{throw F},0)}})};return D(y,tl.EventType.OPEN,()=>{k||(Z(Nt,`RPC '${e}' stream ${i} transport opened.`),x.po())}),D(y,tl.EventType.CLOSE,()=>{k||(k=!0,Z(Nt,`RPC '${e}' stream ${i} transport closed`),x.wo())}),D(y,tl.EventType.ERROR,O=>{k||(k=!0,Qo(Nt,`RPC '${e}' stream ${i} transport errored:`,O),x.wo(new te(H.UNAVAILABLE,"The operation could not be completed")))}),D(y,tl.EventType.MESSAGE,O=>{var I;if(!k){const T=O.data[0];Ae(!!T);const A=T,F=A.error||((I=A[0])===null||I===void 0?void 0:I.error);if(F){Z(Nt,`RPC '${e}' stream ${i} received error:`,F);const z=F.status;let K=function(C){const R=tt[C];if(R!==void 0)return kT(R)}(z),b=F.message;K===void 0&&(K=H.INTERNAL,b="Unknown error status: "+z+" with message "+F.message),k=!0,x.wo(new te(K,b)),y.close()}else Z(Nt,`RPC '${e}' stream ${i} received:`,T),x.So(T)}}),D(l,eT.STAT_EVENT,O=>{O.stat===Kp.PROXY?Z(Nt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Kp.NOPROXY&&Z(Nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.yo()},0),x}}function Of(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t){return new fx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n,r,i,s,o,l,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new jT(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(jr(n.toString()),jr("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===n&&this.h_(r,i)},r=>{e(()=>{const i=new te(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iN extends BT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=gx(this.serializer,e),r=function(s){if(!("targetChange"in s))return oe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?sr(o.readTime):oe.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=nm(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Xp(u)?{documents:wx(s,u)}:{query:_x(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=xT(s,o.resumeToken);const d=Zp(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(oe.min())>0){l.readTime=Nd(s,o.snapshotVersion.toTimestamp());const d=Zp(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=Tx(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=nm(this.serializer),n.removeTarget=e,this.__(n)}}class sN extends BT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=yx(e.writeResults,e.commitTime),r=sr(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=nm(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vx(this.serializer,r))};this.__(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,em(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new te(H.UNKNOWN,s.toString())})}No(e,n,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.No(e,em(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(H.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class aN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(jr(n),this.b_=!1):Z("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{r.enqueueAndForget(async()=>{Hs(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ae(u);d.N_.add(4),await fu(d),d.k_.set("Unknown"),d.N_.delete(4),await yh(d)}(this))})}),this.k_=new aN(r,i)}}async function yh(t){if(Hs(t))for(const e of t.L_)await e(!0)}async function fu(t){for(const e of t.L_)await e(!1)}function zT(t,e){const n=ae(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),Yg(n)?Qg(n):ha(n).n_()&&Gg(n,e))}function Kg(t,e){const n=ae(t),r=ha(n);n.O_.delete(e),r.n_()&&$T(n,e),n.O_.size===0&&(r.n_()?r.s_():Hs(n)&&n.k_.set("Unknown"))}function Gg(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ha(t).d_(e)}function $T(t,e){t.q_.xe(e),ha(t).A_(e)}function Qg(t){t.q_=new ux({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ha(t).start(),t.k_.D_()}function Yg(t){return Hs(t)&&!ha(t).t_()&&t.O_.size>0}function Hs(t){return ae(t).N_.size===0}function HT(t){t.q_=void 0}async function uN(t){t.k_.set("Online")}async function cN(t){t.O_.forEach((e,n)=>{Gg(t,e)})}async function dN(t,e){HT(t),Yg(t)?(t.k_.F_(e),Qg(t)):t.k_.set("Unknown")}async function hN(t,e,n){if(t.k_.set("Online"),e instanceof RT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.O_.delete(l),i.q_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Od(t,r)}else if(e instanceof $c?t.q_.Ke(e):e instanceof PT?t.q_.He(e):t.q_.We(e),!n.isEqual(oe.min()))try{const r=await UT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.O_.get(d);p&&s.O_.set(d,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const p=s.O_.get(u);if(!p)return;s.O_.set(u,p.withResumeToken(bt.EMPTY_BYTE_STRING,p.snapshotVersion)),$T(s,u);const y=new _i(p.target,u,d,p.sequenceNumber);Gg(s,y)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Od(t,r)}}async function Od(t,e,n){if(!cu(e))throw e;t.N_.add(1),await fu(t),t.k_.set("Offline"),n||(n=()=>UT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await yh(t)})}function WT(t,e){return e().catch(n=>Od(t,n,e))}async function wh(t){const e=ae(t),n=ji(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;fN(e);)try{const i=await Yx(e.localStore,r);if(i===null){e.x_.length===0&&n.s_();break}r=i.batchId,pN(e,i)}catch(i){await Od(e,i)}qT(e)&&KT(e)}function fN(t){return Hs(t)&&t.x_.length<10}function pN(t,e){t.x_.push(e);const n=ji(t);n.n_()&&n.R_&&n.V_(e.mutations)}function qT(t){return Hs(t)&&!ji(t).t_()&&t.x_.length>0}function KT(t){ji(t).start()}async function mN(t){ji(t).g_()}async function gN(t){const e=ji(t);for(const n of t.x_)e.V_(n.mutations)}async function vN(t,e,n){const r=t.x_.shift(),i=Bg.from(r,e,n);await WT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wh(t)}async function yN(t,e){e&&ji(t).R_&&await async function(r,i){if(function(o){return ox(o)&&o!==H.ABORTED}(i.code)){const s=r.x_.shift();ji(r).i_(),await WT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await wh(r)}}(t,e),qT(t)&&KT(t)}async function i_(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Hs(n);n.N_.add(3),await fu(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await yh(n)}async function wN(t,e){const n=ae(t);e?(n.N_.delete(2),await yh(n)):e||(n.N_.add(2),await fu(n),n.k_.set("Unknown"))}function ha(t){return t.Q_||(t.Q_=function(n,r,i){const s=ae(n);return s.y_(),new iN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:uN.bind(null,t),Ao:cN.bind(null,t),Vo:dN.bind(null,t),E_:hN.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),Yg(t)?Qg(t):t.k_.set("Unknown")):(await t.Q_.stop(),HT(t))})),t.Q_}function ji(t){return t.K_||(t.K_=function(n,r,i){const s=ae(n);return s.y_(),new sN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:mN.bind(null,t),Vo:yN.bind(null,t),m_:gN.bind(null,t),f_:vN.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await wh(t)):(await t.K_.stop(),t.x_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Xg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jg(t,e){if(jr("AsyncQueue",`${e}: ${t}`),cu(t))return new te(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=nl(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Vo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.U_=new ze(ne.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):se():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ea{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ea(e,n,Vo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class EN{constructor(){this.queries=o_(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const i=ae(n),s=i.queries;i.queries=o_(),s.forEach((o,l)=>{for(const u of l.z_)u.onError(r)})})(this,new te(H.ABORTED,"Firestore shutting down"))}}function o_(){return new da(t=>pT(t),hh)}async function GT(t,e){const n=ae(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new _N,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await n.onListen(i,!0);break;case 1:s.G_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Jg(o,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.z_.push(e),e.Y_(n.onlineState),s.G_&&e.Z_(s.G_)&&Zg(n)}async function QT(t,e){const n=ae(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function TN(t,e){const n=ae(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.z_)l.Z_(i)&&(r=!0);o.G_=i}}r&&Zg(n)}function IN(t,e,n){const r=ae(t),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(n);r.queries.delete(e)}function Zg(t){t.J_.forEach(e=>{e.next()})}var im,a_;(a_=im||(im={})).X_="default",a_.Cache="cache";class YT{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ea(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=ea.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==im.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.key=e}}class JT{constructor(e){this.key=e}}class SN{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=he(),this.mutatedKeys=he(),this.da=mT(e),this.Aa=new Vo(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new s_,i=n?n.Aa:this.Aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,y)=>{const w=i.get(p),k=fh(this.query,y)?y:null,x=!!w&&this.mutatedKeys.has(w.key),D=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;w&&k?w.data.isEqual(k.data)?x!==D&&(r.track({type:3,doc:k}),O=!0):this.fa(w,k)||(r.track({type:2,doc:k}),O=!0,(u&&this.da(k,u)>0||d&&this.da(k,d)<0)&&(l=!0)):!w&&k?(r.track({type:0,doc:k}),O=!0):w&&!k&&(r.track({type:1,doc:w}),O=!0,(u||d)&&(l=!0)),O&&(k?(o=o.add(k),s=D?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Aa:o,ma:r,ts:l,mutatedKeys:s}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((p,y)=>function(k,x){const D=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return D(k)-D(x)}(p.type,y.type)||this.da(p.doc,y.doc)),this.ga(r),i=i!=null&&i;const l=n&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,d=u!==this.Ta;return this.Ta=u,o.length!==0||d?{snapshot:new ea(this.query,e.Aa,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new s_,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=he(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new JT(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new XT(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=he();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return ea.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class AN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bN{constructor(e){this.key=e,this.Da=!1}}class CN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new da(l=>pT(l),hh),this.Fa=new Map,this.Ma=new Set,this.xa=new ze(ne.comparator),this.Oa=new Map,this.Na=new Hg,this.La={},this.Ba=new Map,this.ka=Zo.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function kN(t,e,n=!0){const r=iI(t);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await ZT(r,e,n,!0),i}async function PN(t,e){const n=iI(t);await ZT(n,e,!0,!1)}async function ZT(t,e,n,r){const i=await Xx(t.localStore,rr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await RN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&zT(t.remoteStore,i),l}async function RN(t,e,n,r,i){t.Qa=(y,w,k)=>async function(D,O,I,T){let A=O.view.Va(I);A.ts&&(A=await t_(D.localStore,O.query,!1).then(({documents:b})=>O.view.Va(b,A)));const F=T&&T.targetChanges.get(O.targetId),z=T&&T.targetMismatches.get(O.targetId)!=null,K=O.view.applyChanges(A,D.isPrimaryClient,F,z);return u_(D,O.targetId,K.ya),K.snapshot}(t,y,w,k);const s=await t_(t.localStore,e,!0),o=new SN(e,s.Is),l=o.Va(s.documents),u=hu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);u_(t,n,d.ya);const p=new AN(e,n,o);return t.va.set(e,p),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),d.snapshot}async function xN(t,e,n){const r=ae(t),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(o=>!hh(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Kg(r.remoteStore,i.targetId),sm(r,i.targetId)}).catch(uu)):(sm(r,i.targetId),await rm(r.localStore,i.targetId,!0))}async function NN(t,e){const n=ae(t),r=n.va.get(e),i=n.Fa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Kg(n.remoteStore,r.targetId))}async function ON(t,e,n){const r=jN(t);try{const i=await function(o,l){const u=ae(o),d=lt.now(),p=l.reduce((k,x)=>k.add(x.key),he());let y,w;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let x=Br(),D=he();return u.us.getEntries(k,p).next(O=>{x=O,x.forEach((I,T)=>{T.isValidDocument()||(D=D.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,x)).next(O=>{y=O;const I=[];for(const T of l){const A=tx(T,y.get(T.key).overlayedDocument);A!=null&&I.push(new Qi(T.key,A,aT(A.value.mapValue),ir.exists(!0)))}return u.mutationQueue.addMutationBatch(k,d,I,l)}).next(O=>{w=O;const I=O.applyToLocalDocumentSet(y,D);return u.documentOverlayCache.saveOverlays(k,O.batchId,I)})}).then(()=>({batchId:w.batchId,changes:vT(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.La[o.currentUser.toKey()];d||(d=new ze(we)),d=d.insert(l,u),o.La[o.currentUser.toKey()]=d}(r,i.batchId,n),await pu(r,i.changes),await wh(r.remoteStore)}catch(i){const s=Jg(i,"Failed to persist write");n.reject(s)}}async function eI(t,e){const n=ae(t);try{const r=await Gx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oa.get(s);o&&(Ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?Ae(o.Da):i.removedDocuments.size>0&&(Ae(o.Da),o.Da=!1))}),await pu(n,r,e)}catch(r){await uu(r)}}function l_(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.va.forEach((s,o)=>{const l=o.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ae(o);u.onlineState=l;let d=!1;u.queries.forEach((p,y)=>{for(const w of y.z_)w.Y_(l)&&(d=!0)}),d&&Zg(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DN(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oa.get(e),s=i&&i.key;if(s){let o=new ze(ne.comparator);o=o.insert(s,Lt.newNoDocument(s,oe.min()));const l=he().add(s),u=new gh(oe.min(),new Map,new ze(we),o,l);await eI(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),ev(r)}else await rm(r.localStore,e,!1).then(()=>sm(r,e,n)).catch(uu)}async function LN(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await Kx(n.localStore,e);nI(n,r,null),tI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pu(n,i)}catch(i){await uu(i)}}async function MN(t,e,n){const r=ae(t);try{const i=await function(o,l){const u=ae(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(y=>(Ae(y!==null),p=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);nI(r,e,n),tI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pu(r,i)}catch(i){await uu(i)}}function tI(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function nI(t,e,n){const r=ae(t);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function sm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||rI(t,r)})}function rI(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(Kg(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),ev(t))}function u_(t,e,n){for(const r of n)r instanceof XT?(t.Na.addReference(r.key,e),VN(t,r)):r instanceof JT?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||rI(t,r.key)):se()}function VN(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.Ma.add(r),ev(t))}function ev(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new ne(Le.fromString(e)),r=t.ka.next();t.Oa.set(r,new bN(n)),t.xa=t.xa.insert(n,r),zT(t.remoteStore,new _i(rr(jg(n.path)),r,"TargetPurposeLimboResolution",Dg.oe))}}async function pu(t,e,n){const r=ae(t),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach((l,u)=>{o.push(r.Qa(u,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){i.push(d);const y=qg.Ui(u.targetId,d);s.push(y)}}))}),await Promise.all(o),r.Ca.E_(i),await async function(u,d){const p=ae(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>W.forEach(d,w=>W.forEach(w.Ki,k=>p.persistence.referenceDelegate.addReference(y,w.targetId,k)).next(()=>W.forEach(w.$i,k=>p.persistence.referenceDelegate.removeReference(y,w.targetId,k)))))}catch(y){if(!cu(y))throw y;Z("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const k=p.ss.get(w),x=k.snapshotVersion,D=k.withLastLimboFreeSnapshotVersion(x);p.ss=p.ss.insert(w,D)}}}(r.localStore,s))}async function FN(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await FT(n.localStore,e);n.currentUser=e,function(s,o){s.Ba.forEach(l=>{l.forEach(u=>{u.reject(new te(H.CANCELLED,o))})}),s.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pu(n,r.ls)}}function UN(t,e){const n=ae(t),r=n.Oa.get(e);if(r&&r.Da)return he().add(r.key);{let i=he();const s=n.Fa.get(e);if(!s)return i;for(const o of s){const l=n.va.get(o);i=i.unionWith(l.view.Ra)}return i}}function iI(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=eI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DN.bind(null,e),e.Ca.E_=TN.bind(null,e.eventManager),e.Ca.Ka=IN.bind(null,e.eventManager),e}function jN(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MN.bind(null,e),e}class c_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return qx(this.persistence,new Hx,e.initialUser,this.serializer)}createPersistence(e){return new Bx(Wg.Yr,this.serializer)}createSharedClientState(e){return new Zx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>l_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FN.bind(null,this.syncEngine),await wN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new EN}()}createDatastore(e){const n=vh(e.databaseInfo.databaseId),r=function(s){return new rN(s)}(e.databaseInfo);return function(s,o,l,u){return new oN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new lN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>l_(this.syncEngine,n,0),function(){return r_.D()?new r_:new eN}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,p){const y=new CN(i,s,o,l,u,d);return p&&(y.qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ae(i);Z("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await fu(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):jr("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ot.UNAUTHENTICATED,this.clientId=iT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Df(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await FT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function d_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HN(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>i_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>i_(e.remoteStore,i)),t._onlineComponents=e}function $N(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function HN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Df(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!$N(n))throw n;Qo("Error using user provided cache. Falling back to memory cache: "+n),await Df(t,new c_)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Df(t,new c_);return t._offlineComponents}async function oI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await d_(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await d_(t,new BN))),t._onlineComponents}function WN(t){return oI(t).then(e=>e.syncEngine)}async function aI(t){const e=await oI(t),n=e.eventManager;return n.onListen=kN.bind(null,e.syncEngine),n.onUnlisten=xN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=PN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=NN.bind(null,e.syncEngine),n}function qN(t,e,n={}){const r=new Lr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new sI({next:w=>{o.enqueueAndForget(()=>QT(s,y));const k=w.docs.has(l);!k&&w.fromCache?d.reject(new te(H.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&w.fromCache&&u&&u.source==="server"?d.reject(new te(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new YT(jg(l.path),p,{includeMetadataChanges:!0,oa:!0});return GT(s,y)}(await aI(t),t.asyncQueue,e,n,r)),r.promise}function KN(t,e,n={}){const r=new Lr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new sI({next:w=>{o.enqueueAndForget(()=>QT(s,y)),w.fromCache&&u.source==="server"?d.reject(new te(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new YT(l,p,{includeMetadataChanges:!0,oa:!0});return GT(s,y)}(await aI(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e,n){if(!n)throw new te(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GN(t,e,n,r){if(e===!0&&r===!0)throw new te(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function f_(t){if(!ne.isDocumentKey(t))throw new te(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function p_(t){if(ne.isDocumentKey(t))throw new te(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tv(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function Bi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tv(t);throw new te(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _h{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new m_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new te(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new te(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new m_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cR;switch(r.type){case"firstParty":return new pR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=h_.get(n);r&&(Z("ComponentProvider","Removing Datastore"),h_.delete(n),r.terminate())}(this),Promise.resolve()}}function QN(t,e,n,r={}){var i;const s=(t=Bi(t,_h))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Qo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ot.MOCK_USER;else{l=H1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new te(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ot(d)}t._authCredentials=new dR(new rT(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Eh(this.firestore,e,this._query)}}class an{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Oi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class Oi extends Eh{constructor(e,n,r){super(e,n,jg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new ne(e))}withConverter(e){return new Oi(this.firestore,e,this._path)}}function om(t,e,...n){if(t=Je(t),uI("collection","path",e),t instanceof _h){const r=Le.fromString(e,...n);return p_(r),new Oi(t,null,r)}{if(!(t instanceof an||t instanceof Oi))throw new te(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return p_(r),new Oi(t.firestore,null,r)}}function Yl(t,e,...n){if(t=Je(t),arguments.length===1&&(e=iT.newId()),uI("doc","path",e),t instanceof _h){const r=Le.fromString(e,...n);return f_(r),new an(t,null,new ne(r))}{if(!(t instanceof an||t instanceof Oi))throw new te(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return f_(r),new an(t.firestore,t instanceof Oi?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new jT(this,"async_queue_retry"),this.Tu=()=>{const n=Of();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=Of();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=Of();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new Lr;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!cu(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw jr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const i=Xg.createAndSchedule(this,e,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&se()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}class mu extends _h{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new YN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cI(this),this._firestoreClient.terminate()}}function XN(t,e){const n=typeof t=="object"?t:Ng(),r=typeof t=="string"?t:"(default)",i=uh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=B1("firestore");s&&QN(i,...s)}return i}function nv(t){return t._firestoreClient||cI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cI(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,p){return new CR(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,lI(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new zN(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ta(bt.fromBase64String(e))}catch(n){throw new te(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ta(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=/^__.*__$/;class ZN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,n,this.fieldTransforms):new du(e,this.data,n,this.fieldTransforms)}}class dI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class sv{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new sv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return Dd(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(hI(this.yu)&&JN.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class eO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vh(e)}Ou(e,n,r,i=!1){return new sv({yu:e,methodName:n,xu:r,path:Et.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fI(t){const e=t._freezeSettings(),n=vh(t._databaseId);return new eO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tO(t,e,n,r,i,s={}){const o=t.Ou(s.merge||s.mergeFields?2:0,e,n,i);ov("Data must be an object, but it was:",o,r);const l=pI(r,o);let u,d;if(s.merge)u=new sn(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const y of s.mergeFields){const w=am(e,y,n);if(!o.contains(w))throw new te(H.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);gI(p,w)||p.push(w)}u=new sn(p),d=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=o.fieldTransforms;return new ZN(new qt(l),u,d)}class Ih extends rv{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ih}}function nO(t,e,n,r){const i=t.Ou(1,e,n);ov("Data must be an object, but it was:",i,r);const s=[],o=qt.empty();$s(r,(u,d)=>{const p=av(e,u,n);d=Je(d);const y=i.Cu(p);if(d instanceof Ih)s.push(p);else{const w=Sh(d,y);w!=null&&(s.push(p),o.set(p,w))}});const l=new sn(s);return new dI(o,l,i.fieldTransforms)}function rO(t,e,n,r,i,s){const o=t.Ou(1,e,n),l=[am(e,r,n)],u=[i];if(s.length%2!=0)throw new te(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<s.length;w+=2)l.push(am(e,s[w])),u.push(s[w+1]);const d=[],p=qt.empty();for(let w=l.length-1;w>=0;--w)if(!gI(d,l[w])){const k=l[w];let x=u[w];x=Je(x);const D=o.Cu(k);if(x instanceof Ih)d.push(k);else{const O=Sh(x,D);O!=null&&(d.push(k),p.set(k,O))}}const y=new sn(d);return new dI(p,y,o.fieldTransforms)}function Sh(t,e){if(mI(t=Je(t)))return ov("Unsupported field value:",e,t),pI(t,e);if(t instanceof rv)return function(r,i){if(!hI(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Sh(l,i.vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=lt.fromDate(r);return{timestampValue:Nd(i.serializer,s)}}if(r instanceof lt){const s=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nd(i.serializer,s)}}if(r instanceof iv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ta)return{bytesValue:xT(i.serializer,r._byteString)};if(r instanceof an){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$g(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${tv(r)}`)}(t,e)}function pI(t,e){const n={};return sT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(t,(r,i)=>{const s=Sh(i,e.Su(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function mI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof iv||t instanceof ta||t instanceof an||t instanceof rv)}function ov(t,e,n){if(!mI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=tv(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function am(t,e,n){if((e=Je(e))instanceof Th)return e._internalPath;if(typeof e=="string")return av(t,e);throw Dd("Field path arguments must be of type string or ",t,!1,void 0,n)}const iO=new RegExp("[~\\*/\\[\\]]");function av(t,e,n){if(e.search(iO)>=0)throw Dd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Th(...e.split("."))._internalPath}catch{throw Dd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new te(H.INVALID_ARGUMENT,l+t+u)}function gI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sO extends vI{data(){return super.data()}}function yI(t,e){return typeof e=="string"?av(t,e):e instanceof Th?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class aO{convertValue(e,n="none"){switch(Ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $s(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new iv(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wl(e));default:return null}}convertTimestamp(e){const n=Ui(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Ae(VT(r));const i=new ql(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(n)||jr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wI extends vI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hc extends wI{data(e={}){return super.data(e)}}class uO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new il(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hc(this._firestore,this._userDataWriter,r.key,r,new il(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Hc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new il(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Hc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new il(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:cO(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){t=Bi(t,an);const e=Bi(t.firestore,mu);return qN(nv(e),t._key).then(n=>fO(e,t,n))}class _I extends aO{constructor(e){super(),this.firestore=e}convertBytes(e){return new ta(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,n)}}function dO(t){t=Bi(t,Eh);const e=Bi(t.firestore,mu),n=nv(e),r=new _I(e);return oO(t._query),KN(n,t._query).then(i=>new uO(e,r,t,i))}function hO(t,e,n,...r){t=Bi(t,an);const i=Bi(t.firestore,mu),s=fI(i);let o;return o=typeof(e=Je(e))=="string"||e instanceof Th?rO(s,"updateDoc",t._key,e,n,r):nO(s,"updateDoc",t._key,e),TI(i,[o.toMutation(t._key,ir.exists(!0))])}function EI(t,e){const n=Bi(t.firestore,mu),r=Yl(t),i=lO(t.converter,e);return TI(n,[tO(fI(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ir.exists(!1))]).then(()=>r)}function TI(t,e){return function(r,i){const s=new Lr;return r.asyncQueue.enqueueAndForget(async()=>ON(await WN(r),i,s)),s.promise}(nv(t),e)}function fO(t,e,n){const r=n.docs.get(e._key),i=new _I(t);return new wI(t,i,e._key,r,new il(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ca=i})(zs),Ns(new Vi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new mu(new hR(r.getProvider("auth-internal")),new gR(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new te(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ql(d.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),nr(Lw,"4.6.5",e),nr(Lw,"4.6.5","esm2017")})();var pO="firebase",mO="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(pO,mO,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="firebasestorage.googleapis.com",SI="storageBucket",gO=2*60*1e3,vO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends dr{constructor(e,n,r=0){super(Lf(e),`Firebase Storage: ${n} (${Lf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qe||(qe={}));function Lf(t){return"storage/"+t}function lv(){const t="An unknown error occurred, please check the error payload for server response.";return new Ke(qe.UNKNOWN,t)}function yO(t){return new Ke(qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function wO(t){return new Ke(qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _O(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ke(qe.UNAUTHENTICATED,t)}function EO(){return new Ke(qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function TO(t){return new Ke(qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function IO(){return new Ke(qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SO(){return new Ke(qe.CANCELED,"User canceled the upload/download.")}function AO(t){return new Ke(qe.INVALID_URL,"Invalid URL '"+t+"'.")}function bO(t){return new Ke(qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function CO(){return new Ke(qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+SI+"' property when initializing the app?")}function kO(){return new Ke(qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PO(){return new Ke(qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function RO(t){return new Ke(qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function um(t){return new Ke(qe.INVALID_ARGUMENT,t)}function AI(){return new Ke(qe.APP_DELETED,"The Firebase app was deleted.")}function xO(t){return new Ke(qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _l(t,e){return new Ke(qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ga(t){throw new Ke(qe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr=class Wc{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Wc.makeFromUrl(e,n)}catch{return new Wc(e,"")}if(r.path==="")return r;throw bO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(F){F.path_=decodeURIComponent(F.path)}const p="v[A-Za-z0-9_]+",y=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",k=new RegExp(`^https?://${y}/${p}/b/${i}/o${w}`,"i"),x={bucket:1,path:3},D=n===II?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",I=new RegExp(`^https?://${D}/${i}/${O}`,"i"),A=[{regex:l,indices:u,postModify:s},{regex:k,indices:x,postModify:d},{regex:I,indices:{bucket:1,path:2},postModify:d}];for(let F=0;F<A.length;F++){const z=A[F],K=z.regex.exec(e);if(K){const b=K[z.indices.bucket];let E=K[z.indices.path];E||(E=""),r=new Wc(b,E),z.postModify(r);break}}if(r==null)throw AO(e);return r}};class NO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let d=!1;function p(...O){d||(d=!0,e.apply(null,O))}function y(O){i=setTimeout(()=>{i=null,t(k,u())},O)}function w(){s&&clearTimeout(s)}function k(O,...I){if(d){w();return}if(O){w(),p.call(null,O,...I);return}if(u()||o){w(),p.call(null,O,...I);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,y(A)}let x=!1;function D(O){x||(x=!0,w(),!d&&(i!==null?(O||(l=2),clearTimeout(i),y(0)):O||(l=1)))}return y(0),s=setTimeout(()=>{o=!0,D(!0)},n),D}function DO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t){return t!==void 0}function MO(t){return typeof t=="object"&&!Array.isArray(t)}function uv(t){return typeof t=="string"||t instanceof String}function g_(t){return cv()&&t instanceof Blob}function cv(){return typeof Blob<"u"}function v_(t,e,n,r){if(r<e)throw um(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw um(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function bI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ts||(Ts={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n,r,i,s,o,l,u,d,p,y,w=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=y,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,x)=>{this.resolve_=k,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Sc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Ts.NO_ERROR,u=s.getStatus();if(!l||VO(u,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===Ts.ABORT;r(!1,new Sc(!1,null,p));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Sc(d,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());LO(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=lv();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?AI():SO();o(u)}else{const u=IO();o(u)}};this.canceled_?n(!1,new Sc(!1,null,!0)):this.backoffId_=OO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Sc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function UO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function BO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $O(t,e,n,r,i,s,o=!0){const l=bI(t.urlParams),u=t.url+l,d=Object.assign({},t.headers);return BO(d,e),UO(d,n),jO(d,s),zO(d,r),new FO(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function WO(...t){const e=HO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(cv())return new Blob(t);throw new Ke(qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function qO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(t){if(typeof atob>"u")throw RO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Mf{constructor(e,n){this.data=e,this.contentType=n||null}}function GO(t,e){switch(t){case Xn.RAW:return new Mf(CI(e));case Xn.BASE64:case Xn.BASE64URL:return new Mf(kI(t,e));case Xn.DATA_URL:return new Mf(YO(e),XO(e))}throw lv()}function CI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function QO(t){let e;try{e=decodeURIComponent(t)}catch{throw _l(Xn.DATA_URL,"Malformed data URL.")}return CI(e)}function kI(t,e){switch(t){case Xn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw _l(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Xn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw _l(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=KO(e)}catch(i){throw i.message.includes("polyfill")?i:_l(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class PI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw _l(Xn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=JO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function YO(t){const e=new PI(t);return e.base64?kI(Xn.BASE64,e.rest):QO(e.rest)}function XO(t){return new PI(t).contentType}function JO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){let r=0,i="";g_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(g_(this.data_)){const r=this.data_,i=qO(r,e,n);return i===null?null:new hi(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new hi(r,!0)}}static getBlob(...e){if(cv()){const n=e.map(r=>r instanceof hi?r.data_:r);return new hi(WO.apply(null,n))}else{const n=e.map(o=>uv(o)?GO(Xn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new hi(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){let e;try{e=JSON.parse(t)}catch{return null}return MO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function eD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function xI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t,e){return e}class Ft{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||tD}}let Ac=null;function nD(t){return!uv(t)||t.length<2?t:xI(t)}function NI(){if(Ac)return Ac;const t=[];t.push(new Ft("bucket")),t.push(new Ft("generation")),t.push(new Ft("metageneration")),t.push(new Ft("name","fullPath",!0));function e(s,o){return nD(o)}const n=new Ft("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ft("size");return i.xform=r,t.push(i),t.push(new Ft("timeCreated")),t.push(new Ft("updated")),t.push(new Ft("md5Hash",null,!0)),t.push(new Ft("cacheControl",null,!0)),t.push(new Ft("contentDisposition",null,!0)),t.push(new Ft("contentEncoding",null,!0)),t.push(new Ft("contentLanguage",null,!0)),t.push(new Ft("contentType",null,!0)),t.push(new Ft("metadata","customMetadata",!0)),Ac=t,Ac}function rD(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Rr(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function iD(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return rD(r,t),r}function OI(t,e,n){const r=RI(e);return r===null?null:iD(t,r,n)}function sD(t,e,n,r){const i=RI(e);if(i===null||!uv(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(d=>{const p=t.bucket,y=t.fullPath,w="/b/"+o(p)+"/o/"+o(y),k=dv(w,n,r),x=bI({alt:"media",token:d});return k+x})[0]}function oD(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class DI{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){if(!t)throw lv()}function aD(t,e){function n(r,i){const s=OI(t,i,e);return LI(s!==null),s}return n}function lD(t,e){function n(r,i){const s=OI(t,i,e);return LI(s!==null),sD(s,i,t.host,t._protocol)}return n}function MI(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=EO():i=_O():n.getStatus()===402?i=wO(t.bucket):n.getStatus()===403?i=TO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function uD(t){const e=MI(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=yO(t.path)),s.serverResponse=i.serverResponse,s}return n}function cD(t,e,n){const r=e.fullServerUrl(),i=dv(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new DI(i,s,lD(t,n),o);return l.errorHandler=uD(e),l}function dD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function hD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=dD(null,e)),r}function fD(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let F=0;F<2;F++)A=A+Math.random().toString().slice(2);return A}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const d=hD(e,r,i),p=oD(d,n),y="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,w=`\r
--`+u+"--",k=hi.getBlob(y,r,w);if(k===null)throw kO();const x={name:d.fullPath},D=dv(s,t.host,t._protocol),O="POST",I=t.maxUploadRetryTime,T=new DI(D,O,aD(t,n),I);return T.urlParams=x,T.headers=o,T.body=k.uploadData(),T.errorHandler=MI(e),T}class pD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ga("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ga("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ga("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ga("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ga("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mD extends pD{initXhr(){this.xhr_.responseType="text"}}function VI(){return new mD}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this._service=e,n instanceof Rr?this._location=n:this._location=Rr.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ms(e,n)}get root(){const e=new Rr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xI(this._location.path)}get storage(){return this._service}get parent(){const e=ZO(this._location.path);if(e===null)return null;const n=new Rr(this._location.bucket,e);return new Ms(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw xO(e)}}function gD(t,e,n){t._throwIfRoot("uploadBytes");const r=fD(t.storage,t._location,NI(),new hi(e,!0),n);return t.storage.makeRequestWithTokens(r,VI).then(i=>({metadata:i,ref:t}))}function vD(t){t._throwIfRoot("getDownloadURL");const e=cD(t.storage,t._location,NI());return t.storage.makeRequestWithTokens(e,VI).then(n=>{if(n===null)throw PO();return n})}function yD(t,e){const n=eD(t._location.path,e),r=new Rr(t._location.bucket,n);return new Ms(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(t){return/^[A-Za-z]+:\/\//.test(t)}function _D(t,e){return new Ms(t,e)}function FI(t,e){if(t instanceof hv){const n=t;if(n._bucket==null)throw CO();const r=new Ms(n,n._bucket);return e!=null?FI(r,e):r}else return e!==void 0?yD(t,e):t}function ED(t,e){if(e&&wD(e)){if(t instanceof hv)return _D(t,e);throw um("To use ref(service, url), the first argument must be a Storage instance.")}else return FI(t,e)}function y_(t,e){const n=e==null?void 0:e[SI];return n==null?null:Rr.makeFromBucketSpec(n,t)}function TD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:H1(i,t.app.options.projectId))}class hv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=II,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gO,this._maxUploadRetryTime=vO,this._requests=new Set,i!=null?this._bucket=Rr.makeFromBucketSpec(i,this._host):this._bucket=y_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rr.makeFromBucketSpec(this._url,e):this._bucket=y_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){v_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){v_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ms(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new NO(AI());{const o=$O(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const w_="@firebase/storage",__="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="storage";function ID(t,e,n){return t=Je(t),gD(t,e,n)}function SD(t){return t=Je(t),vD(t)}function AD(t,e){return t=Je(t),ED(t,e)}function jI(t=Ng(),e){t=Je(t);const r=uh(t,UI).getImmediate({identifier:e}),i=B1("storage");return i&&bD(r,...i),r}function bD(t,e,n,r={}){TD(t,e,n,r)}function CD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new hv(n,r,i,e,zs)}function kD(){Ns(new Vi(UI,CD,"PUBLIC").setMultipleInstances(!0)),nr(w_,__,""),nr(w_,__,"esm2017")}kD();const PD={apiKey:"AIzaSyC9mD-OzKeGo8zP3hSaVjKYpHrWk7Z0Cwo",authDomain:"ventas-de-casa.firebaseapp.com",projectId:"ventas-de-casa",storageBucket:"ventas-de-casa.appspot.com",messagingSenderId:"379532997796",appId:"1:379532997796:web:b33f398f12070f82c32231",measurementId:"G-WZ0WF4BZQ3"},BI=K1(PD),Is=XN(BI);jI(BI);const Yi=$.createContext(),RD=({children:t})=>{const[e,n]=$.useState([]),[r,i]=$.useState([]),s=async()=>{try{const d=om(Is,"productos"),y=(await dO(d)).docs.map(w=>({id:w.id,...w.data()}));i(y)}catch(d){console.error("Error fetching productos:",d)}};$.useEffect(()=>{s()},[]);const o=d=>{n(p=>[...p,d])},l=d=>{n(p=>p.filter(y=>y.id!==d.id))},u=async(d,p)=>{try{const y={buyer:{name:d,phone:p},items:e,total:e.reduce((k,x)=>k+x.precio,0),date:new Date},w=await EI(om(Is,"orders"),y);for(const k of e){const x=Yl(Is,"productos",k.id);await hO(x,{estado:"vendido"})}return n([]),s(),w.id}catch(y){throw console.error("Error al finalizar la compra:",y),new Error("No se pudo guardar la orden.")}};return L.jsx(Yi.Provider,{value:{cartItems:e,addToCart:o,removeFromCart:l,productos:r,finalizePurchase:u},children:t})};var zI={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E_=On.createContext&&On.createContext(zI),xD=["attr","size","title"];function ND(t,e){if(t==null)return{};var n=OD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function OD(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Ld(){return Ld=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ld.apply(this,arguments)}function T_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Md(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?T_(Object(n),!0).forEach(function(r){DD(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function DD(t,e,n){return e=LD(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function LD(t){var e=MD(t,"string");return typeof e=="symbol"?e:e+""}function MD(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function $I(t){return t&&t.map((e,n)=>On.createElement(e.tag,Md({key:n},e.attr),$I(e.child)))}function VD(t){return e=>On.createElement(FD,Ld({attr:Md({},t.attr)},e),$I(t.child))}function FD(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=ND(t,xD),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),On.createElement("svg",Ld({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Md(Md({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&On.createElement("title",null,s),t.children)};return E_!==void 0?On.createElement(E_.Consumer,null,n=>e(n)):e(zI)}function UD(t){return VD({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(t)}const jD=()=>{const{cartItems:t}=$.useContext(Yi);return L.jsxs("div",{className:"position-relative d-inline-block",children:[L.jsx(UD,{className:"text-white fs-4"}),t.length>0&&L.jsx("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",children:t.length})]})};function BD(){return $.useContext(Yi),L.jsx("nav",{className:"navbar navbar-expand-xl navbar-dark ",children:L.jsxs("div",{className:"container-fluid",children:[L.jsx(cs,{to:"/",className:"navbar-brand logo",children:L.jsx("img",{src:Dk,width:"40rem",alt:"Logo"})}),L.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarDark","aria-controls":"navbarDark","aria-expanded":"false","aria-label":"Toggle navigation",children:L.jsx("span",{className:"navbar-toggler-icon"})}),L.jsxs("div",{className:"collapse navbar-collapse",id:"navbarDark",children:[L.jsxs("ul",{className:"navbar-nav me-auto mb-2 mb-xl-0",children:[L.jsx("li",{className:"nav-item",children:L.jsx(cs,{className:"nav-link active","aria-current":"page",to:"/",children:"Ventas"})}),L.jsx("li",{className:"nav-item",children:L.jsx(cs,{className:"nav-link",to:"/contacto",children:"Contacto"})}),L.jsx("li",{className:"nav-item",children:L.jsx(cs,{className:"nav-link",to:"/admin-login",children:"Login"})}),L.jsx("li",{className:"nav-item",children:L.jsx(cs,{className:"nav-link",to:"/admin-panel",children:"Admin-Panel"})}),L.jsx("li",{className:"nav-item",children:L.jsx(cs,{className:"nav-link",to:"/ubicacion",children:"Ubicación"})})]}),L.jsx("h1",{className:"navbar-title",children:"Vendo Tutto"})]}),L.jsx(cs,{to:"/cart",className:"navbar-brand cart-widget",children:L.jsx(jD,{})})]})})}const zD=({item:t})=>{const{addToCart:e,removeFromCart:n,cartItems:r}=$.useContext(Yi),[i,s]=$.useState(!1),o=()=>s(!i),l=r.find(y=>y.id===t.id),u=l?l.quantity:0,d=()=>{u===0&&e({...t,quantity:1})},p=()=>{u===1&&n(t)};return L.jsxs("div",{className:"item-card",children:[L.jsx("img",{src:t.imagen,alt:t.nombre}),L.jsxs("div",{className:"item-text",children:[L.jsx("h3",{children:t.nombre}),L.jsxs("p",{className:"price",children:["$",t.precio.toFixed(2)]}),L.jsx("button",{className:"button",onClick:o,children:i?"Ocultar Detalles":"Mostrar Detalles"}),i&&L.jsx("div",{className:"item-details",children:L.jsx("p",{children:t.descripcion})}),L.jsx("div",{className:"card-actions",children:t.estado==="vendido"?L.jsx("div",{className:"sold-banner",children:"Vendido"}):L.jsx(L.Fragment,{children:u===0?L.jsx("button",{className:"button",onClick:d,children:"Agregar al carrito"}):L.jsxs("div",{className:"quantity-control",children:[L.jsx("button",{className:"button",onClick:p,children:"-"}),L.jsx("span",{className:"quantity",children:u}),L.jsx("button",{className:"button",onClick:d,disabled:u===1,children:"+"})]})})})]})]})},$D=({onFilterChange:t})=>{$.useContext(Yi);const[e,n]=On.useState(""),r=["Menos de $10000","$10000.00 - $50000.00","$50000 - $100000","Más de $100000"],i=s=>{const o=s.target.value;n(o),t(o)};return L.jsx("div",{className:"category-filter",children:L.jsxs("select",{value:e,onChange:i,children:[L.jsx("option",{value:"",children:"Todos los precios"}),r.map((s,o)=>L.jsx("option",{value:s,children:s},o))]})})},HD=()=>{const{productos:t}=$.useContext(Yi),[e,n]=$.useState(t),[r,i]=$.useState("");$.useEffect(()=>{(l=>{if(!l){n(t);return}let u,d;switch(l){case"Menos de $10000":d=1e4;break;case"$10000.00 - $50000.00":u=1e4,d=5e4;break;case"$50000 - $100000":u=5e4,d=1e5;break;case"Más de $100000":u=1e5;break;default:n(t);return}const p=t.filter(y=>u&&d?y.precio>=u&&y.precio<=d:u?y.precio>=u:d?y.precio<=d:!0);n(p)})(r)},[t,r]);const s=o=>{i(o)};return L.jsxs("div",{className:"item-list-container",children:[L.jsx($D,{onFilterChange:s}),L.jsx("div",{className:"compra-compromiso",children:L.jsx("p",{children:"La compra es un compromiso. Una vez finalizada la misma, nos pondremos en contacto para coordinar la entrega y el pago."})}),L.jsx("div",{className:"item-list",children:e.length>0?e.map(o=>L.jsx(zD,{item:o},o.id)):L.jsx("p",{children:"No hay productos disponibles para el rango de precios seleccionado."})})]})},WD=()=>{const[t,e]=$.useState({name:"",email:"",subject:"",message:""}),n=i=>{const{name:s,value:o}=i.target;e({...t,[s]:o})},r=i=>{i.preventDefault(),console.log("Form data:",t),e({name:"",email:"",subject:"",message:""})};return L.jsxs("div",{className:"contacto-page",children:[L.jsx("h1",{children:"Contacto"}),L.jsxs("form",{onSubmit:r,children:[L.jsxs("div",{className:"form-group",children:[L.jsx("label",{htmlFor:"name",children:"Nombre"}),L.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:n,required:!0})]}),L.jsxs("div",{className:"form-group",children:[L.jsx("label",{htmlFor:"email",children:"Correo Electrónico"}),L.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:n,required:!0})]}),L.jsxs("div",{className:"form-group",children:[L.jsx("label",{htmlFor:"subject",children:"Asunto"}),L.jsx("input",{type:"text",id:"subject",name:"subject",value:t.subject,onChange:n,required:!0})]}),L.jsxs("div",{className:"form-group",children:[L.jsx("label",{htmlFor:"message",children:"Mensaje"}),L.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:n,required:!0})]}),L.jsx("button",{type:"submit",children:"Enviar"})]})]})},qD="/assets/404-CsMyYZhP.png";function KD(){return L.jsx("div",{children:L.jsx("img",{src:qD,alt:"error"})})}var HI={exports:{}};/*!
* sweetalert2 v11.12.4
* Released under the MIT License.
*/(function(t,e){(function(n,r){t.exports=r()})(ii,function(){function n(v,c){(c==null||c>v.length)&&(c=v.length);for(var h=0,g=Array(c);h<c;h++)g[h]=v[h];return g}function r(v){if(Array.isArray(v))return v}function i(v){if(Array.isArray(v))return n(v)}function s(v,c,h){if(typeof v=="function"?v===c:v.has(c))return arguments.length<3?c:h;throw new TypeError("Private element is not present on this object")}function o(v){if(v===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v}function l(v,c,h){return c=T(c),C(v,F()?Reflect.construct(c,h||[],T(v).constructor):c.apply(v,h))}function u(v,c){if(c.has(v))throw new TypeError("Cannot initialize the same private elements twice on an object")}function d(v,c){if(!(v instanceof c))throw new TypeError("Cannot call a class as a function")}function p(v,c){return v.get(s(v,c))}function y(v,c,h){u(v,c),c.set(v,h)}function w(v,c,h){return v.set(s(v,c),h),h}function k(v,c,h){if(F())return Reflect.construct.apply(null,arguments);var g=[null];g.push.apply(g,c);var S=new(v.bind.apply(v,g));return S}function x(v,c){for(var h=0;h<c.length;h++){var g=c[h];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(v,Ji(g.key),g)}}function D(v,c,h){return c&&x(v.prototype,c),Object.defineProperty(v,"prototype",{writable:!1}),v}function O(v,c){var h=typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"];if(!h){if(Array.isArray(v)||(h=X(v))||c){h&&(v=h);var g=0,S=function(){};return{s:S,n:function(){return g>=v.length?{done:!0}:{done:!1,value:v[g++]}},e:function(le){throw le},f:S}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var j,Y=!0,ue=!1;return{s:function(){h=h.call(v)},n:function(){var le=h.next();return Y=le.done,le},e:function(le){ue=!0,j=le},f:function(){try{Y||h.return==null||h.return()}finally{if(ue)throw j}}}}function I(){return I=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(v,c,h){var g=M(v,c);if(g){var S=Object.getOwnPropertyDescriptor(g,c);return S.get?S.get.call(arguments.length<3?v:h):S.value}},I.apply(null,arguments)}function T(v){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},T(v)}function A(v,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");v.prototype=Object.create(c&&c.prototype,{constructor:{value:v,writable:!0,configurable:!0}}),Object.defineProperty(v,"prototype",{writable:!1}),c&&R(v,c)}function F(){try{var v=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(F=function(){return!!v})()}function z(v){if(typeof Symbol<"u"&&v[Symbol.iterator]!=null||v["@@iterator"]!=null)return Array.from(v)}function K(v,c){var h=v==null?null:typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"];if(h!=null){var g,S,j,Y,ue=[],le=!0,He=!1;try{if(j=(h=h.call(v)).next,c!==0)for(;!(le=(g=j.call(h)).done)&&(ue.push(g.value),ue.length!==c);le=!0);}catch(Fa){He=!0,S=Fa}finally{try{if(!le&&h.return!=null&&(Y=h.return(),Object(Y)!==Y))return}finally{if(He)throw S}}return ue}}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(v,c){if(c&&(typeof c=="object"||typeof c=="function"))return c;if(c!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return o(v)}function R(v,c){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(h,g){return h.__proto__=g,h},R(v,c)}function N(v,c){return r(v)||K(v,c)||X(v,c)||b()}function M(v,c){for(;!{}.hasOwnProperty.call(v,c)&&(v=T(v))!==null;);return v}function P(v,c,h,g){var S=I(T(v.prototype),c,h);return function(j){return S.apply(h,j)}}function ut(v){return i(v)||z(v)||X(v)||E()}function hr(v,c){if(typeof v!="object"||!v)return v;var h=v[Symbol.toPrimitive];if(h!==void 0){var g=h.call(v,c);if(typeof g!="object")return g;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(v)}function Ji(v){var c=hr(v,"string");return typeof c=="symbol"?c:c+""}function be(v){"@babel/helpers - typeof";return be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},be(v)}function X(v,c){if(v){if(typeof v=="string")return n(v,c);var h={}.toString.call(v).slice(8,-1);return h==="Object"&&v.constructor&&(h=v.constructor.name),h==="Map"||h==="Set"?Array.from(v):h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)?n(v,c):void 0}}var ie=100,Q={},ke=function(){Q.previousActiveElement instanceof HTMLElement?(Q.previousActiveElement.focus(),Q.previousActiveElement=null):document.body&&document.body.focus()},Ee=function(c){return new Promise(function(h){if(!c)return h();var g=window.scrollX,S=window.scrollY;Q.restoreFocusTimeout=setTimeout(function(){ke(),h()},ie),window.scrollTo(g,S)})},Ne="swal2-",Tn=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],U=Tn.reduce(function(v,c){return v[c]=Ne+c,v},{}),In=["success","warning","info","question","error"],$t=In.reduce(function(v,c){return v[c]=Ne+c,v},{}),Eu="SweetAlert2:",ga=function(c){return c.charAt(0).toUpperCase()+c.slice(1)},it=function(c){console.warn("".concat(Eu," ").concat(be(c)==="object"?c.join(" "):c))},pn=function(c){console.error("".concat(Eu," ").concat(c))},qs=[],va=function(c){qs.includes(c)||(qs.push(c),it(c))},Ks=function(c){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;va('"'.concat(c,'" is deprecated and will be removed in the next major release.').concat(h?' Use "'.concat(h,'" instead.'):""))},Gr=function(c){return typeof c=="function"?c():c},Gs=function(c){return c&&typeof c.toPromise=="function"},Zi=function(c){return Gs(c)?c.toPromise():Promise.resolve(c)},ya=function(c){return c&&Promise.resolve(c)===c},vt=function(){return document.body.querySelector(".".concat(U.container))},fr=function(c){var h=vt();return h?h.querySelector(c):null},Ct=function(c){return fr(".".concat(c))},ye=function(){return Ct(U.popup)},pr=function(){return Ct(U.icon)},wa=function(){return Ct(U["icon-content"])},_a=function(){return Ct(U.title)},Ze=function(){return Ct(U["html-container"])},ct=function(){return Ct(U.image)},Qr=function(){return Ct(U["progress-steps"])},es=function(){return Ct(U["validation-message"])},Xt=function(){return fr(".".concat(U.actions," .").concat(U.confirm))},Yr=function(){return fr(".".concat(U.actions," .").concat(U.cancel))},Jt=function(){return fr(".".concat(U.actions," .").concat(U.deny))},Tu=function(){return Ct(U["input-label"])},mr=function(){return fr(".".concat(U.loader))},gr=function(){return Ct(U.actions)},Iu=function(){return Ct(U.footer)},Qs=function(){return Ct(U["timer-progress-bar"])},ts=function(){return Ct(U.close)},Su=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Ys=function(){var c=ye();if(!c)return[];var h=c.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),g=Array.from(h).sort(function(Y,ue){var le=parseInt(Y.getAttribute("tabindex")||"0"),He=parseInt(ue.getAttribute("tabindex")||"0");return le>He?1:le<He?-1:0}),S=c.querySelectorAll(Su),j=Array.from(S).filter(function(Y){return Y.getAttribute("tabindex")!=="-1"});return ut(new Set(g.concat(j))).filter(function(Y){return yt(Y)})},vr=function(){return mn(document.body,U.shown)&&!mn(document.body,U["toast-shown"])&&!mn(document.body,U["no-backdrop"])},Xr=function(){var c=ye();return c?mn(c,U.toast):!1},Ea=function(){var c=ye();return c?c.hasAttribute("data-loading"):!1},Ge=function(c,h){if(c.textContent="",h){var g=new DOMParser,S=g.parseFromString(h,"text/html"),j=S.querySelector("head");j&&Array.from(j.childNodes).forEach(function(ue){c.appendChild(ue)});var Y=S.querySelector("body");Y&&Array.from(Y.childNodes).forEach(function(ue){ue instanceof HTMLVideoElement||ue instanceof HTMLAudioElement?c.appendChild(ue.cloneNode(!0)):c.appendChild(ue)})}},mn=function(c,h){if(!h)return!1;for(var g=h.split(/\s+/),S=0;S<g.length;S++)if(!c.classList.contains(g[S]))return!1;return!0},Xs=function(c,h){Array.from(c.classList).forEach(function(g){!Object.values(U).includes(g)&&!Object.values($t).includes(g)&&!Object.values(h.showClass||{}).includes(g)&&c.classList.remove(g)})},kt=function(c,h,g){if(Xs(c,h),!!h.customClass){var S=h.customClass[g];if(S){if(typeof S!="string"&&!S.forEach){it("Invalid type of customClass.".concat(g,'! Expected string or iterable object, got "').concat(be(S),'"'));return}fe(c,S)}}},Fn=function(c,h){if(!h)return null;switch(h){case"select":case"textarea":case"file":return c.querySelector(".".concat(U.popup," > .").concat(U[h]));case"checkbox":return c.querySelector(".".concat(U.popup," > .").concat(U.checkbox," input"));case"radio":return c.querySelector(".".concat(U.popup," > .").concat(U.radio," input:checked"))||c.querySelector(".".concat(U.popup," > .").concat(U.radio," input:first-child"));case"range":return c.querySelector(".".concat(U.popup," > .").concat(U.range," input"));default:return c.querySelector(".".concat(U.popup," > .").concat(U.input))}},Ta=function(c){if(c.focus(),c.type!=="file"){var h=c.value;c.value="",c.value=h}},dt=function(c,h,g){!c||!h||(typeof h=="string"&&(h=h.split(/\s+/).filter(Boolean)),h.forEach(function(S){Array.isArray(c)?c.forEach(function(j){g?j.classList.add(S):j.classList.remove(S)}):g?c.classList.add(S):c.classList.remove(S)}))},fe=function(c,h){dt(c,h,!0)},Pt=function(c,h){dt(c,h,!1)},Ht=function(c,h){for(var g=Array.from(c.children),S=0;S<g.length;S++){var j=g[S];if(j instanceof HTMLElement&&mn(j,h))return j}},yr=function(c,h,g){g==="".concat(parseInt(g))&&(g=parseInt(g)),g||parseInt(g)===0?c.style.setProperty(h,typeof g=="number"?"".concat(g,"px"):g):c.style.removeProperty(h)},et=function(c){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";c&&(c.style.display=h)},Ve=function(c){c&&(c.style.display="none")},Ia=function(c){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";c&&new MutationObserver(function(){Un(c,c.innerHTML,h)}).observe(c,{childList:!0,subtree:!0})},Au=function(c,h,g,S){var j=c.querySelector(h);j&&j.style.setProperty(g,S)},Un=function(c,h){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";h?et(c,g):Ve(c)},yt=function(c){return!!(c&&(c.offsetWidth||c.offsetHeight||c.getClientRects().length))},Sa=function(){return!yt(Xt())&&!yt(Jt())&&!yt(Yr())},ns=function(c){return c.scrollHeight>c.clientHeight},Sn=function(c){var h=window.getComputedStyle(c),g=parseFloat(h.getPropertyValue("animation-duration")||"0"),S=parseFloat(h.getPropertyValue("transition-duration")||"0");return g>0||S>0},Js=function(c){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=Qs();g&&yt(g)&&(h&&(g.style.transition="none",g.style.width="100%"),setTimeout(function(){g.style.transition="width ".concat(c/1e3,"s linear"),g.style.width="0%"},10))},bu=function(){var c=Qs();if(c){var h=parseInt(window.getComputedStyle(c).width);c.style.removeProperty("transition"),c.style.width="100%";var g=parseInt(window.getComputedStyle(c).width),S=h/g*100;c.style.width="".concat(S,"%")}},Zs=function(){return typeof window>"u"||typeof document>"u"},Aa=`
 <div aria-labelledby="`.concat(U.title,'" aria-describedby="').concat(U["html-container"],'" class="').concat(U.popup,`" tabindex="-1">
   <button type="button" class="`).concat(U.close,`"></button>
   <ul class="`).concat(U["progress-steps"],`"></ul>
   <div class="`).concat(U.icon,`"></div>
   <img class="`).concat(U.image,`" />
   <h2 class="`).concat(U.title,'" id="').concat(U.title,`"></h2>
   <div class="`).concat(U["html-container"],'" id="').concat(U["html-container"],`"></div>
   <input class="`).concat(U.input,'" id="').concat(U.input,`" />
   <input type="file" class="`).concat(U.file,`" />
   <div class="`).concat(U.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(U.select,'" id="').concat(U.select,`"></select>
   <div class="`).concat(U.radio,`"></div>
   <label class="`).concat(U.checkbox,`">
     <input type="checkbox" id="`).concat(U.checkbox,`" />
     <span class="`).concat(U.label,`"></span>
   </label>
   <textarea class="`).concat(U.textarea,'" id="').concat(U.textarea,`"></textarea>
   <div class="`).concat(U["validation-message"],'" id="').concat(U["validation-message"],`"></div>
   <div class="`).concat(U.actions,`">
     <div class="`).concat(U.loader,`"></div>
     <button type="button" class="`).concat(U.confirm,`"></button>
     <button type="button" class="`).concat(U.deny,`"></button>
     <button type="button" class="`).concat(U.cancel,`"></button>
   </div>
   <div class="`).concat(U.footer,`"></div>
   <div class="`).concat(U["timer-progress-bar-container"],`">
     <div class="`).concat(U["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Cu=function(){var c=vt();return c?(c.remove(),Pt([document.documentElement,document.body],[U["no-backdrop"],U["toast-shown"],U["has-column"]]),!0):!1},jn=function(){Q.currentInstance.resetValidationMessage()},Dh=function(){var c=ye(),h=Ht(c,U.input),g=Ht(c,U.file),S=c.querySelector(".".concat(U.range," input")),j=c.querySelector(".".concat(U.range," output")),Y=Ht(c,U.select),ue=c.querySelector(".".concat(U.checkbox," input")),le=Ht(c,U.textarea);h.oninput=jn,g.onchange=jn,Y.onchange=jn,ue.onchange=jn,le.oninput=jn,S.oninput=function(){jn(),j.value=S.value},S.onchange=function(){jn(),j.value=S.value}},eo=function(c){return typeof c=="string"?document.querySelector(c):c},ku=function(c){var h=ye();h.setAttribute("role",c.toast?"alert":"dialog"),h.setAttribute("aria-live",c.toast?"polite":"assertive"),c.toast||h.setAttribute("aria-modal","true")},ba=function(c){window.getComputedStyle(c).direction==="rtl"&&fe(vt(),U.rtl)},rs=function(c){var h=Cu();if(Zs()){pn("SweetAlert2 requires document to initialize");return}var g=document.createElement("div");g.className=U.container,h&&fe(g,U["no-transition"]),Ge(g,Aa);var S=eo(c.target);S.appendChild(g),ku(c),ba(S),Dh()},An=function(c,h){c instanceof HTMLElement?h.appendChild(c):be(c)==="object"?Ca(c,h):c&&Ge(h,c)},Ca=function(c,h){c.jquery?Lh(h,c):Ge(h,c.toString())},Lh=function(c,h){if(c.textContent="",0 in h)for(var g=0;g in h;g++)c.appendChild(h[g].cloneNode(!0));else c.appendChild(h.cloneNode(!0))},Bn=function(){if(Zs())return!1;var v=document.createElement("div");return typeof v.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof v.style.animation<"u"?"animationend":!1}(),Pu=function(c,h){var g=gr(),S=mr();!g||!S||(!h.showConfirmButton&&!h.showDenyButton&&!h.showCancelButton?Ve(g):et(g),kt(g,h,"actions"),Ru(g,S,h),Ge(S,h.loaderHtml||""),kt(S,h,"loader"))};function Ru(v,c,h){var g=Xt(),S=Jt(),j=Yr();!g||!S||!j||(is(g,"confirm",h),is(S,"deny",h),is(j,"cancel",h),ka(g,S,j,h),h.reverseButtons&&(h.toast?(v.insertBefore(j,g),v.insertBefore(S,g)):(v.insertBefore(j,c),v.insertBefore(S,c),v.insertBefore(g,c))))}function ka(v,c,h,g){if(!g.buttonsStyling){Pt([v,c,h],U.styled);return}fe([v,c,h],U.styled),g.confirmButtonColor&&(v.style.backgroundColor=g.confirmButtonColor,fe(v,U["default-outline"])),g.denyButtonColor&&(c.style.backgroundColor=g.denyButtonColor,fe(c,U["default-outline"])),g.cancelButtonColor&&(h.style.backgroundColor=g.cancelButtonColor,fe(h,U["default-outline"]))}function is(v,c,h){var g=ga(c);Un(v,h["show".concat(g,"Button")],"inline-block"),Ge(v,h["".concat(c,"ButtonText")]||""),v.setAttribute("aria-label",h["".concat(c,"ButtonAriaLabel")]||""),v.className=U[c],kt(v,h,"".concat(c,"Button"))}var xu=function(c,h){var g=ts();g&&(Ge(g,h.closeButtonHtml||""),kt(g,h,"closeButton"),Un(g,h.showCloseButton),g.setAttribute("aria-label",h.closeButtonAriaLabel||""))},Nu=function(c,h){var g=vt();g&&(Mh(g,h.backdrop),Vh(g,h.position),Ou(g,h.grow),kt(g,h,"container"))};function Mh(v,c){typeof c=="string"?v.style.background=c:c||fe([document.documentElement,document.body],U["no-backdrop"])}function Vh(v,c){c&&(c in U?fe(v,U[c]):(it('The "position" parameter is not valid, defaulting to "center"'),fe(v,U.center)))}function Ou(v,c){c&&fe(v,U["grow-".concat(c)])}var Te={innerParams:new WeakMap,domCache:new WeakMap},Fh=["input","file","range","select","radio","checkbox","textarea"],wr=function(c,h){var g=ye();if(g){var S=Te.innerParams.get(c),j=!S||h.input!==S.input;Fh.forEach(function(Y){var ue=Ht(g,U[Y]);ue&&(no(Y,h.inputAttributes),ue.className=U[Y],j&&Ve(ue))}),h.input&&(j&&bn(h),Du(h))}},bn=function(c){if(c.input){if(!Fe[c.input]){pn("Unexpected type of input! Expected ".concat(Object.keys(Fe).join(" | "),', got "').concat(c.input,'"'));return}var h=Jr(c.input);if(h){var g=Fe[c.input](h,c);et(h),c.inputAutoFocus&&setTimeout(function(){Ta(g)})}}},to=function(c){for(var h=0;h<c.attributes.length;h++){var g=c.attributes[h].name;["id","type","value","style"].includes(g)||c.removeAttribute(g)}},no=function(c,h){var g=ye();if(g){var S=Fn(g,c);if(S){to(S);for(var j in h)S.setAttribute(j,h[j])}}},Du=function(c){if(c.input){var h=Jr(c.input);h&&kt(h,c,"input")}},Ie=function(c,h){!c.placeholder&&h.inputPlaceholder&&(c.placeholder=h.inputPlaceholder)},zn=function(c,h,g){if(g.inputLabel){var S=document.createElement("label"),j=U["input-label"];S.setAttribute("for",c.id),S.className=j,be(g.customClass)==="object"&&fe(S,g.customClass.inputLabel),S.innerText=g.inputLabel,h.insertAdjacentElement("beforebegin",S)}},Jr=function(c){var h=ye();if(h)return Ht(h,U[c]||U.input)},$n=function(c,h){["string","number"].includes(be(h))?c.value="".concat(h):ya(h)||it('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(be(h),'"'))},Fe={};Fe.text=Fe.email=Fe.password=Fe.number=Fe.tel=Fe.url=Fe.search=Fe.date=Fe["datetime-local"]=Fe.time=Fe.week=Fe.month=function(v,c){return $n(v,c.inputValue),zn(v,v,c),Ie(v,c),v.type=c.input,v},Fe.file=function(v,c){return zn(v,v,c),Ie(v,c),v},Fe.range=function(v,c){var h=v.querySelector("input"),g=v.querySelector("output");return $n(h,c.inputValue),h.type=c.input,$n(g,c.inputValue),zn(h,v,c),v},Fe.select=function(v,c){if(v.textContent="",c.inputPlaceholder){var h=document.createElement("option");Ge(h,c.inputPlaceholder),h.value="",h.disabled=!0,h.selected=!0,v.appendChild(h)}return zn(v,v,c),v},Fe.radio=function(v){return v.textContent="",v},Fe.checkbox=function(v,c){var h=Fn(ye(),"checkbox");h.value="1",h.checked=!!c.inputValue;var g=v.querySelector("span");return Ge(g,c.inputPlaceholder),h},Fe.textarea=function(v,c){$n(v,c.inputValue),Ie(v,c),zn(v,v,c);var h=function(S){return parseInt(window.getComputedStyle(S).marginLeft)+parseInt(window.getComputedStyle(S).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var g=parseInt(window.getComputedStyle(ye()).width),S=function(){if(document.body.contains(v)){var Y=v.offsetWidth+h(v);Y>g?ye().style.width="".concat(Y,"px"):yr(ye(),"width",c.width)}};new MutationObserver(S).observe(v,{attributes:!0,attributeFilter:["style"]})}}),v};var Lu=function(c,h){var g=Ze();g&&(Ia(g),kt(g,h,"htmlContainer"),h.html?(An(h.html,g),et(g,"block")):h.text?(g.textContent=h.text,et(g,"block")):Ve(g),wr(c,h))},Uh=function(c,h){var g=Iu();g&&(Ia(g),Un(g,h.footer,"block"),h.footer&&An(h.footer,g),kt(g,h,"footer"))},jh=function(c,h){var g=Te.innerParams.get(c),S=pr();if(S){if(g&&h.icon===g.icon){Pa(S,h),Mu(S,h);return}if(!h.icon&&!h.iconHtml){Ve(S);return}if(h.icon&&Object.keys($t).indexOf(h.icon)===-1){pn('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon,'"')),Ve(S);return}et(S),Pa(S,h),Mu(S,h),fe(S,h.showClass&&h.showClass.icon)}},Mu=function(c,h){for(var g=0,S=Object.entries($t);g<S.length;g++){var j=N(S[g],2),Y=j[0],ue=j[1];h.icon!==Y&&Pt(c,ue)}fe(c,h.icon&&$t[h.icon]),Vu(c,h),Bh(),kt(c,h,"icon")},Bh=function(){var c=ye();if(c)for(var h=window.getComputedStyle(c).getPropertyValue("background-color"),g=c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),S=0;S<g.length;S++)g[S].style.backgroundColor=h},ss=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Hn=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Pa=function(c,h){if(!(!h.icon&&!h.iconHtml)){var g=c.innerHTML,S="";if(h.iconHtml)S=Ra(h.iconHtml);else if(h.icon==="success")S=ss,g=g.replace(/ style=".*?"/g,"");else if(h.icon==="error")S=Hn;else if(h.icon){var j={question:"?",warning:"!",info:"i"};S=Ra(j[h.icon])}g.trim()!==S.trim()&&Ge(c,S)}},Vu=function(c,h){if(h.iconColor){c.style.color=h.iconColor,c.style.borderColor=h.iconColor;for(var g=0,S=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];g<S.length;g++){var j=S[g];Au(c,j,"background-color",h.iconColor)}Au(c,".swal2-success-ring","border-color",h.iconColor)}},Ra=function(c){return'<div class="'.concat(U["icon-content"],'">').concat(c,"</div>")},Zr=function(c,h){var g=ct();if(g){if(!h.imageUrl){Ve(g);return}et(g,""),g.setAttribute("src",h.imageUrl),g.setAttribute("alt",h.imageAlt||""),yr(g,"width",h.imageWidth),yr(g,"height",h.imageHeight),g.className=U.image,kt(g,h,"image")}},zh=function(c,h){var g=vt(),S=ye();if(!(!g||!S)){if(h.toast){yr(g,"width",h.width),S.style.width="100%";var j=mr();j&&S.insertBefore(j,pr())}else yr(S,"width",h.width);yr(S,"padding",h.padding),h.color&&(S.style.color=h.color),h.background&&(S.style.background=h.background),Ve(es()),$h(S,h)}},$h=function(c,h){var g=h.showClass||{};c.className="".concat(U.popup," ").concat(yt(c)?g.popup:""),h.toast?(fe([document.documentElement,document.body],U["toast-shown"]),fe(c,U.toast)):fe(c,U.modal),kt(c,h,"popup"),typeof h.customClass=="string"&&fe(c,h.customClass),h.icon&&fe(c,U["icon-".concat(h.icon)])},Hh=function(c,h){var g=Qr();if(g){var S=h.progressSteps,j=h.currentProgressStep;if(!S||S.length===0||j===void 0){Ve(g);return}et(g),g.textContent="",j>=S.length&&it("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),S.forEach(function(Y,ue){var le=Wn(Y);if(g.appendChild(le),ue===j&&fe(le,U["active-progress-step"]),ue!==S.length-1){var He=Wh(h);g.appendChild(He)}})}},Wn=function(c){var h=document.createElement("li");return fe(h,U["progress-step"]),Ge(h,c),h},Wh=function(c){var h=document.createElement("li");return fe(h,U["progress-step-line"]),c.progressStepsDistance&&yr(h,"width",c.progressStepsDistance),h},qh=function(c,h){var g=_a();g&&(Ia(g),Un(g,h.title||h.titleText,"block"),h.title&&An(h.title,g),h.titleText&&(g.innerText=h.titleText),kt(g,h,"title"))},ei=function(c,h){zh(c,h),Nu(c,h),Hh(c,h),jh(c,h),Zr(c,h),qh(c,h),xu(c,h),Lu(c,h),Pu(c,h),Uh(c,h);var g=ye();typeof h.didRender=="function"&&g&&h.didRender(g)},ro=function(){return yt(ye())},xa=function(){var c;return(c=Xt())===null||c===void 0?void 0:c.click()},os=function(){var c;return(c=Jt())===null||c===void 0?void 0:c.click()},as=function(){var c;return(c=Yr())===null||c===void 0?void 0:c.click()},_r=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),io=function(c){c.keydownTarget&&c.keydownHandlerAdded&&(c.keydownTarget.removeEventListener("keydown",c.keydownHandler,{capture:c.keydownListenerCapture}),c.keydownHandlerAdded=!1)},Oe=function(c,h,g){io(c),h.toast||(c.keydownHandler=function(S){return ju(h,S,g)},c.keydownTarget=h.keydownListenerCapture?window:ye(),c.keydownListenerCapture=h.keydownListenerCapture,c.keydownTarget.addEventListener("keydown",c.keydownHandler,{capture:c.keydownListenerCapture}),c.keydownHandlerAdded=!0)},Na=function(c,h){var g,S=Ys();if(S.length){c=c+h,c===S.length?c=0:c===-1&&(c=S.length-1),S[c].focus();return}(g=ye())===null||g===void 0||g.focus()},Fu=["ArrowRight","ArrowDown"],Uu=["ArrowLeft","ArrowUp"],ju=function(c,h,g){c&&(h.isComposing||h.keyCode===229||(c.stopKeydownPropagation&&h.stopPropagation(),h.key==="Enter"?Bu(h,c):h.key==="Tab"?so(h):[].concat(Fu,Uu).includes(h.key)?zu(h.key):h.key==="Escape"&&Cn(h,c,g)))},Bu=function(c,h){if(Gr(h.allowEnterKey)){var g=Fn(ye(),h.input);if(c.target&&g&&c.target instanceof HTMLElement&&c.target.outerHTML===g.outerHTML){if(["textarea","file"].includes(h.input))return;xa(),c.preventDefault()}}},so=function(c){for(var h=c.target,g=Ys(),S=-1,j=0;j<g.length;j++)if(h===g[j]){S=j;break}c.shiftKey?Na(S,-1):Na(S,1),c.stopPropagation(),c.preventDefault()},zu=function(c){var h=gr(),g=Xt(),S=Jt(),j=Yr();if(!(!h||!g||!S||!j)){var Y=[g,S,j];if(!(document.activeElement instanceof HTMLElement&&!Y.includes(document.activeElement))){var ue=Fu.includes(c)?"nextElementSibling":"previousElementSibling",le=document.activeElement;if(le){for(var He=0;He<h.children.length;He++){if(le=le[ue],!le)return;if(le instanceof HTMLButtonElement&&yt(le))break}le instanceof HTMLButtonElement&&le.focus()}}}},Cn=function(c,h,g){Gr(h.allowEscapeKey)&&(c.preventDefault(),g(_r.esc))},Er={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},Kh=function(){var c=vt(),h=Array.from(document.body.children);h.forEach(function(g){g.contains(c)||(g.hasAttribute("aria-hidden")&&g.setAttribute("data-previous-aria-hidden",g.getAttribute("aria-hidden")||""),g.setAttribute("aria-hidden","true"))})},ti=function(){var c=Array.from(document.body.children);c.forEach(function(h){h.hasAttribute("data-previous-aria-hidden")?(h.setAttribute("aria-hidden",h.getAttribute("data-previous-aria-hidden")||""),h.removeAttribute("data-previous-aria-hidden")):h.removeAttribute("aria-hidden")})},Oa=typeof window<"u"&&!!window.GestureEvent,Da=function(){if(Oa&&!mn(document.body,U.iosfix)){var c=document.body.scrollTop;document.body.style.top="".concat(c*-1,"px"),fe(document.body,U.iosfix),oo()}},oo=function(){var c=vt();if(c){var h;c.ontouchstart=function(g){h=$u(g)},c.ontouchmove=function(g){h&&(g.preventDefault(),g.stopPropagation())}}},$u=function(c){var h=c.target,g=vt(),S=Ze();return!g||!S||ao(c)||Gh(c)?!1:h===g||!ns(g)&&h instanceof HTMLElement&&h.tagName!=="INPUT"&&h.tagName!=="TEXTAREA"&&!(ns(S)&&S.contains(h))},ao=function(c){return c.touches&&c.touches.length&&c.touches[0].touchType==="stylus"},Gh=function(c){return c.touches&&c.touches.length>1},Hu=function(){if(mn(document.body,U.iosfix)){var c=parseInt(document.body.style.top,10);Pt(document.body,U.iosfix),document.body.style.top="",document.body.scrollTop=c*-1}},ls=function(){var c=document.createElement("div");c.className=U["scrollbar-measure"],document.body.appendChild(c);var h=c.getBoundingClientRect().width-c.clientWidth;return document.body.removeChild(c),h},Tr=null,Wu=function(c){Tr===null&&(document.body.scrollHeight>window.innerHeight||c==="scroll")&&(Tr=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Tr+ls(),"px"))},La=function(){Tr!==null&&(document.body.style.paddingRight="".concat(Tr,"px"),Tr=null)};function lo(v,c,h,g){Xr()?Va(v,g):(Ee(h).then(function(){return Va(v,g)}),io(Q)),Oa?(c.setAttribute("style","display:none !important"),c.removeAttribute("class"),c.innerHTML=""):c.remove(),vr()&&(La(),Hu(),ti()),qu()}function qu(){Pt([document.documentElement,document.body],[U.shown,U["height-auto"],U["no-backdrop"],U["toast-shown"]])}function Zt(v){v=Gu(v);var c=Er.swalPromiseResolve.get(this),h=Ku(this);this.isAwaitingPromise?v.isDismissed||(en(this),c(v)):h&&c(v)}var Ku=function(c){var h=ye();if(!h)return!1;var g=Te.innerParams.get(c);if(!g||mn(h,g.hideClass.popup))return!1;Pt(h,g.showClass.popup),fe(h,g.hideClass.popup);var S=vt();return Pt(S,g.showClass.backdrop),fe(S,g.hideClass.backdrop),Qu(c,h,g),!0};function Ma(v){var c=Er.swalPromiseReject.get(this);en(this),c&&c(v)}var en=function(c){c.isAwaitingPromise&&(delete c.isAwaitingPromise,Te.innerParams.get(c)||c._destroy())},Gu=function(c){return typeof c>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},c)},Qu=function(c,h,g){var S=vt(),j=Bn&&Sn(h);typeof g.willClose=="function"&&g.willClose(h),j?Yu(c,h,S,g.returnFocus,g.didClose):lo(c,S,g.returnFocus,g.didClose)},Yu=function(c,h,g,S,j){Bn&&(Q.swalCloseEventFinishedCallback=lo.bind(null,c,g,S,j),h.addEventListener(Bn,function(Y){Y.target===h&&(Q.swalCloseEventFinishedCallback(),delete Q.swalCloseEventFinishedCallback)}))},Va=function(c,h){setTimeout(function(){typeof h=="function"&&h.bind(c.params)(),c._destroy&&c._destroy()})},kn=function(c){var h=ye();if(h||new nc,h=ye(),!!h){var g=mr();Xr()?Ve(pr()):Vt(h,c),et(g),h.setAttribute("data-loading","true"),h.setAttribute("aria-busy","true"),h.focus()}},Vt=function(c,h){var g=gr(),S=mr();!g||!S||(!h&&yt(Xt())&&(h=Xt()),et(g),h&&(Ve(h),S.setAttribute("data-button-to-replace",h.className),g.insertBefore(S,h)),fe([c,g],U.loading))},Xu=function(c,h){h.input==="select"||h.input==="radio"?m(c,h):["text","email","number","tel","textarea"].some(function(g){return g===h.input})&&(Gs(h.inputValue)||ya(h.inputValue))&&(kn(Xt()),_(c,h))},Ju=function(c,h){var g=c.getInput();if(!g)return null;switch(h.input){case"checkbox":return ni(g);case"radio":return a(g);case"file":return f(g);default:return h.inputAutoTrim?g.value.trim():g.value}},ni=function(c){return c.checked?1:0},a=function(c){return c.checked?c.value:null},f=function(c){return c.files&&c.files.length?c.getAttribute("multiple")!==null?c.files:c.files[0]:null},m=function(c,h){var g=ye();if(g){var S=function(Y){h.input==="select"?V(g,G(Y),h):h.input==="radio"&&B(g,G(Y),h)};Gs(h.inputOptions)||ya(h.inputOptions)?(kn(Xt()),Zi(h.inputOptions).then(function(j){c.hideLoading(),S(j)})):be(h.inputOptions)==="object"?S(h.inputOptions):pn("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(be(h.inputOptions)))}},_=function(c,h){var g=c.getInput();g&&(Ve(g),Zi(h.inputValue).then(function(S){g.value=h.input==="number"?"".concat(parseFloat(S)||0):"".concat(S),et(g),g.focus(),c.hideLoading()}).catch(function(S){pn("Error in inputValue promise: ".concat(S)),g.value="",et(g),g.focus(),c.hideLoading()}))};function V(v,c,h){var g=Ht(v,U.select);if(g){var S=function(Y,ue,le){var He=document.createElement("option");He.value=le,Ge(He,ue),He.selected=_e(le,h.inputValue),Y.appendChild(He)};c.forEach(function(j){var Y=j[0],ue=j[1];if(Array.isArray(ue)){var le=document.createElement("optgroup");le.label=Y,le.disabled=!1,g.appendChild(le),ue.forEach(function(He){return S(le,He[1],He[0])})}else S(g,ue,Y)}),g.focus()}}function B(v,c,h){var g=Ht(v,U.radio);if(g){c.forEach(function(j){var Y=j[0],ue=j[1],le=document.createElement("input"),He=document.createElement("label");le.type="radio",le.name=U.radio,le.value=Y,_e(Y,h.inputValue)&&(le.checked=!0);var Fa=document.createElement("span");Ge(Fa,ue),Fa.className=U.label,He.appendChild(le),He.appendChild(Fa),g.appendChild(He)});var S=g.querySelectorAll("input");S.length&&S[0].focus()}}var G=function(c){var h=[];return c instanceof Map?c.forEach(function(g,S){var j=g;be(j)==="object"&&(j=G(j)),h.push([S,j])}):Object.keys(c).forEach(function(g){var S=c[g];be(S)==="object"&&(S=G(S)),h.push([g,S])}),h},_e=function(c,h){return!!h&&h.toString()===c.toString()},$e=void 0,me=function(c){var h=Te.innerParams.get(c);c.disableButtons(),h.input?Ir(c,"confirm"):Qh(c,!0)},ht=function(c){var h=Te.innerParams.get(c);c.disableButtons(),h.returnInputValueOnDeny?Ir(c,"deny"):ri(c,!1)},ft=function(c,h){c.disableButtons(),h(_r.cancel)},Ir=function(c,h){var g=Te.innerParams.get(c);if(!g.input){pn('The "input" parameter is needed to be set when using returnInputValueOn'.concat(ga(h)));return}var S=c.getInput(),j=Ju(c,g);g.inputValidator?tn(c,j,h):S&&!S.checkValidity()?(c.enableButtons(),c.showValidationMessage(g.validationMessage||S.validationMessage)):h==="deny"?ri(c,j):Qh(c,j)},tn=function(c,h,g){var S=Te.innerParams.get(c);c.disableInput();var j=Promise.resolve().then(function(){return Zi(S.inputValidator(h,S.validationMessage))});j.then(function(Y){c.enableButtons(),c.enableInput(),Y?c.showValidationMessage(Y):g==="deny"?ri(c,h):Qh(c,h)})},ri=function(c,h){var g=Te.innerParams.get(c||$e);if(g.showLoaderOnDeny&&kn(Jt()),g.preDeny){c.isAwaitingPromise=!0;var S=Promise.resolve().then(function(){return Zi(g.preDeny(h,g.validationMessage))});S.then(function(j){j===!1?(c.hideLoading(),en(c)):c.close({isDenied:!0,value:typeof j>"u"?h:j})}).catch(function(j){return Lv(c||$e,j)})}else c.close({isDenied:!0,value:h})},uo=function(c,h){c.close({isConfirmed:!0,value:h})},Lv=function(c,h){c.rejectPromise(h)},Qh=function(c,h){var g=Te.innerParams.get(c||$e);if(g.showLoaderOnConfirm&&kn(),g.preConfirm){c.resetValidationMessage(),c.isAwaitingPromise=!0;var S=Promise.resolve().then(function(){return Zi(g.preConfirm(h,g.validationMessage))});S.then(function(j){yt(es())||j===!1?(c.hideLoading(),en(c)):uo(c,typeof j>"u"?h:j)}).catch(function(j){return Lv(c||$e,j)})}else uo(c,h)};function Zu(){var v=Te.innerParams.get(this);if(v){var c=Te.domCache.get(this);Ve(c.loader),Xr()?v.icon&&et(pr()):a2(c),Pt([c.popup,c.actions],U.loading),c.popup.removeAttribute("aria-busy"),c.popup.removeAttribute("data-loading"),c.confirmButton.disabled=!1,c.denyButton.disabled=!1,c.cancelButton.disabled=!1}}var a2=function(c){var h=c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));h.length?et(h[0],"inline-block"):Sa()&&Ve(c.actions)};function Mv(){var v=Te.innerParams.get(this),c=Te.domCache.get(this);return c?Fn(c.popup,v.input):null}function Vv(v,c,h){var g=Te.domCache.get(v);c.forEach(function(S){g[S].disabled=h})}function Fv(v,c){var h=ye();if(!(!h||!v))if(v.type==="radio")for(var g=h.querySelectorAll('[name="'.concat(U.radio,'"]')),S=0;S<g.length;S++)g[S].disabled=c;else v.disabled=c}function Uv(){Vv(this,["confirmButton","denyButton","cancelButton"],!1)}function jv(){Vv(this,["confirmButton","denyButton","cancelButton"],!0)}function Bv(){Fv(this.getInput(),!1)}function zv(){Fv(this.getInput(),!0)}function $v(v){var c=Te.domCache.get(this),h=Te.innerParams.get(this);Ge(c.validationMessage,v),c.validationMessage.className=U["validation-message"],h.customClass&&h.customClass.validationMessage&&fe(c.validationMessage,h.customClass.validationMessage),et(c.validationMessage);var g=this.getInput();g&&(g.setAttribute("aria-invalid","true"),g.setAttribute("aria-describedby",U["validation-message"]),Ta(g),fe(g,U.inputerror))}function Hv(){var v=Te.domCache.get(this);v.validationMessage&&Ve(v.validationMessage);var c=this.getInput();c&&(c.removeAttribute("aria-invalid"),c.removeAttribute("aria-describedby"),Pt(c,U.inputerror))}var co={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},l2=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],u2={allowEnterKey:void 0},c2=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Wv=function(c){return Object.prototype.hasOwnProperty.call(co,c)},qv=function(c){return l2.indexOf(c)!==-1},Kv=function(c){return u2[c]},d2=function(c){Wv(c)||it('Unknown parameter "'.concat(c,'"'))},h2=function(c){c2.includes(c)&&it('The parameter "'.concat(c,'" is incompatible with toasts'))},f2=function(c){var h=Kv(c);h&&Ks(c,h)},p2=function(c){c.backdrop===!1&&c.allowOutsideClick&&it('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var h in c)d2(h),c.toast&&h2(h),f2(h)};function Gv(v){var c=ye(),h=Te.innerParams.get(this);if(!c||mn(c,h.hideClass.popup)){it("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var g=m2(v),S=Object.assign({},h,g);ei(this,S),Te.innerParams.set(this,S),Object.defineProperties(this,{params:{value:Object.assign({},this.params,v),writable:!1,enumerable:!0}})}var m2=function(c){var h={};return Object.keys(c).forEach(function(g){qv(g)?h[g]=c[g]:it("Invalid parameter to update: ".concat(g))}),h};function Qv(){var v=Te.domCache.get(this),c=Te.innerParams.get(this);if(!c){Yv(this);return}v.popup&&Q.swalCloseEventFinishedCallback&&(Q.swalCloseEventFinishedCallback(),delete Q.swalCloseEventFinishedCallback),typeof c.didDestroy=="function"&&c.didDestroy(),g2(this)}var g2=function(c){Yv(c),delete c.params,delete Q.keydownHandler,delete Q.keydownTarget,delete Q.currentInstance},Yv=function(c){c.isAwaitingPromise?(Yh(Te,c),c.isAwaitingPromise=!0):(Yh(Er,c),Yh(Te,c),delete c.isAwaitingPromise,delete c.disableButtons,delete c.enableButtons,delete c.getInput,delete c.disableInput,delete c.enableInput,delete c.hideLoading,delete c.disableLoading,delete c.showValidationMessage,delete c.resetValidationMessage,delete c.close,delete c.closePopup,delete c.closeModal,delete c.closeToast,delete c.rejectPromise,delete c.update,delete c._destroy)},Yh=function(c,h){for(var g in c)c[g].delete(h)},v2=Object.freeze({__proto__:null,_destroy:Qv,close:Zt,closeModal:Zt,closePopup:Zt,closeToast:Zt,disableButtons:jv,disableInput:zv,disableLoading:Zu,enableButtons:Uv,enableInput:Bv,getInput:Mv,handleAwaitingPromise:en,hideLoading:Zu,rejectPromise:Ma,resetValidationMessage:Hv,showValidationMessage:$v,update:Gv}),y2=function(c,h,g){c.toast?w2(c,h,g):(E2(h),T2(h),I2(c,h,g))},w2=function(c,h,g){h.popup.onclick=function(){c&&(_2(c)||c.timer||c.input)||g(_r.close)}},_2=function(c){return!!(c.showConfirmButton||c.showDenyButton||c.showCancelButton||c.showCloseButton)},ec=!1,E2=function(c){c.popup.onmousedown=function(){c.container.onmouseup=function(h){c.container.onmouseup=function(){},h.target===c.container&&(ec=!0)}}},T2=function(c){c.container.onmousedown=function(h){h.target===c.container&&h.preventDefault(),c.popup.onmouseup=function(g){c.popup.onmouseup=function(){},(g.target===c.popup||g.target instanceof HTMLElement&&c.popup.contains(g.target))&&(ec=!0)}}},I2=function(c,h,g){h.container.onclick=function(S){if(ec){ec=!1;return}S.target===h.container&&Gr(c.allowOutsideClick)&&g(_r.backdrop)}},S2=function(c){return be(c)==="object"&&c.jquery},Xv=function(c){return c instanceof Element||S2(c)},A2=function(c){var h={};return be(c[0])==="object"&&!Xv(c[0])?Object.assign(h,c[0]):["title","html","icon"].forEach(function(g,S){var j=c[S];typeof j=="string"||Xv(j)?h[g]=j:j!==void 0&&pn("Unexpected type of ".concat(g,'! Expected "string" or "Element", got ').concat(be(j)))}),h};function b2(){for(var v=arguments.length,c=new Array(v),h=0;h<v;h++)c[h]=arguments[h];return k(this,c)}function C2(v){var c=function(h){function g(){return d(this,g),l(this,g,arguments)}return A(g,h),D(g,[{key:"_main",value:function(j,Y){return P(g,"_main",this)([j,Object.assign({},v,Y)])}}])}(this);return c}var k2=function(){return Q.timeout&&Q.timeout.getTimerLeft()},Jv=function(){if(Q.timeout)return bu(),Q.timeout.stop()},Zv=function(){if(Q.timeout){var c=Q.timeout.start();return Js(c),c}},P2=function(){var c=Q.timeout;return c&&(c.running?Jv():Zv())},R2=function(c){if(Q.timeout){var h=Q.timeout.increase(c);return Js(h,!0),h}},x2=function(){return!!(Q.timeout&&Q.timeout.isRunning())},ey=!1,Xh={};function N2(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Xh[v]=this,ey||(document.body.addEventListener("click",O2),ey=!0)}var O2=function(c){for(var h=c.target;h&&h!==document;h=h.parentNode)for(var g in Xh){var S=h.getAttribute(g);if(S){Xh[g].fire({template:S});return}}},D2=Object.freeze({__proto__:null,argsToParams:A2,bindClickHandler:N2,clickCancel:as,clickConfirm:xa,clickDeny:os,enableLoading:kn,fire:b2,getActions:gr,getCancelButton:Yr,getCloseButton:ts,getConfirmButton:Xt,getContainer:vt,getDenyButton:Jt,getFocusableElements:Ys,getFooter:Iu,getHtmlContainer:Ze,getIcon:pr,getIconContent:wa,getImage:ct,getInputLabel:Tu,getLoader:mr,getPopup:ye,getProgressSteps:Qr,getTimerLeft:k2,getTimerProgressBar:Qs,getTitle:_a,getValidationMessage:es,increaseTimer:R2,isDeprecatedParameter:Kv,isLoading:Ea,isTimerRunning:x2,isUpdatableParameter:qv,isValidParameter:Wv,isVisible:ro,mixin:C2,resumeTimer:Zv,showLoading:kn,stopTimer:Jv,toggleTimer:P2}),L2=function(){function v(c,h){d(this,v),this.callback=c,this.remaining=h,this.running=!1,this.start()}return D(v,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(h){var g=this.running;return g&&this.stop(),this.remaining+=h,g&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),ty=["swal-title","swal-html","swal-footer"],M2=function(c){var h=typeof c.template=="string"?document.querySelector(c.template):c.template;if(!h)return{};var g=h.content;H2(g);var S=Object.assign(V2(g),F2(g),U2(g),j2(g),B2(g),z2(g),$2(g,ty));return S},V2=function(c){var h={},g=Array.from(c.querySelectorAll("swal-param"));return g.forEach(function(S){us(S,["name","value"]);var j=S.getAttribute("name"),Y=S.getAttribute("value");!j||!Y||(typeof co[j]=="boolean"?h[j]=Y!=="false":be(co[j])==="object"?h[j]=JSON.parse(Y):h[j]=Y)}),h},F2=function(c){var h={},g=Array.from(c.querySelectorAll("swal-function-param"));return g.forEach(function(S){var j=S.getAttribute("name"),Y=S.getAttribute("value");!j||!Y||(h[j]=new Function("return ".concat(Y))())}),h},U2=function(c){var h={},g=Array.from(c.querySelectorAll("swal-button"));return g.forEach(function(S){us(S,["type","color","aria-label"]);var j=S.getAttribute("type");!j||!["confirm","cancel","deny"].includes(j)||(h["".concat(j,"ButtonText")]=S.innerHTML,h["show".concat(ga(j),"Button")]=!0,S.hasAttribute("color")&&(h["".concat(j,"ButtonColor")]=S.getAttribute("color")),S.hasAttribute("aria-label")&&(h["".concat(j,"ButtonAriaLabel")]=S.getAttribute("aria-label")))}),h},j2=function(c){var h={},g=c.querySelector("swal-image");return g&&(us(g,["src","width","height","alt"]),g.hasAttribute("src")&&(h.imageUrl=g.getAttribute("src")||void 0),g.hasAttribute("width")&&(h.imageWidth=g.getAttribute("width")||void 0),g.hasAttribute("height")&&(h.imageHeight=g.getAttribute("height")||void 0),g.hasAttribute("alt")&&(h.imageAlt=g.getAttribute("alt")||void 0)),h},B2=function(c){var h={},g=c.querySelector("swal-icon");return g&&(us(g,["type","color"]),g.hasAttribute("type")&&(h.icon=g.getAttribute("type")),g.hasAttribute("color")&&(h.iconColor=g.getAttribute("color")),h.iconHtml=g.innerHTML),h},z2=function(c){var h={},g=c.querySelector("swal-input");g&&(us(g,["type","label","placeholder","value"]),h.input=g.getAttribute("type")||"text",g.hasAttribute("label")&&(h.inputLabel=g.getAttribute("label")),g.hasAttribute("placeholder")&&(h.inputPlaceholder=g.getAttribute("placeholder")),g.hasAttribute("value")&&(h.inputValue=g.getAttribute("value")));var S=Array.from(c.querySelectorAll("swal-input-option"));return S.length&&(h.inputOptions={},S.forEach(function(j){us(j,["value"]);var Y=j.getAttribute("value");if(Y){var ue=j.innerHTML;h.inputOptions[Y]=ue}})),h},$2=function(c,h){var g={};for(var S in h){var j=h[S],Y=c.querySelector(j);Y&&(us(Y,[]),g[j.replace(/^swal-/,"")]=Y.innerHTML.trim())}return g},H2=function(c){var h=ty.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(c.children).forEach(function(g){var S=g.tagName.toLowerCase();h.includes(S)||it("Unrecognized element <".concat(S,">"))})},us=function(c,h){Array.from(c.attributes).forEach(function(g){h.indexOf(g.name)===-1&&it(['Unrecognized attribute "'.concat(g.name,'" on <').concat(c.tagName.toLowerCase(),">."),"".concat(h.length?"Allowed attributes are: ".concat(h.join(", ")):"To set the value, use HTML within the element.")])})},ny=10,W2=function(c){var h=vt(),g=ye();typeof c.willOpen=="function"&&c.willOpen(g);var S=window.getComputedStyle(document.body),j=S.overflowY;G2(h,g,c),setTimeout(function(){q2(h,g)},ny),vr()&&(K2(h,c.scrollbarPadding,j),Kh()),!Xr()&&!Q.previousActiveElement&&(Q.previousActiveElement=document.activeElement),typeof c.didOpen=="function"&&setTimeout(function(){return c.didOpen(g)}),Pt(h,U["no-transition"])},ry=function(c){var h=ye();if(!(c.target!==h||!Bn)){var g=vt();h.removeEventListener(Bn,ry),g.style.overflowY="auto"}},q2=function(c,h){Bn&&Sn(h)?(c.style.overflowY="hidden",h.addEventListener(Bn,ry)):c.style.overflowY="auto"},K2=function(c,h,g){Da(),h&&g!=="hidden"&&Wu(g),setTimeout(function(){c.scrollTop=0})},G2=function(c,h,g){fe(c,g.showClass.backdrop),g.animation?(h.style.setProperty("opacity","0","important"),et(h,"grid"),setTimeout(function(){fe(h,g.showClass.popup),h.style.removeProperty("opacity")},ny)):et(h,"grid"),fe([document.documentElement,document.body],U.shown),g.heightAuto&&g.backdrop&&!g.toast&&fe([document.documentElement,document.body],U["height-auto"])},iy={email:function(c,h){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(c)?Promise.resolve():Promise.resolve(h||"Invalid email address")},url:function(c,h){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c)?Promise.resolve():Promise.resolve(h||"Invalid URL")}};function Q2(v){v.inputValidator||(v.input==="email"&&(v.inputValidator=iy.email),v.input==="url"&&(v.inputValidator=iy.url))}function Y2(v){(!v.target||typeof v.target=="string"&&!document.querySelector(v.target)||typeof v.target!="string"&&!v.target.appendChild)&&(it('Target parameter is not valid, defaulting to "body"'),v.target="body")}function X2(v){Q2(v),v.showLoaderOnConfirm&&!v.preConfirm&&it(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Y2(v),typeof v.title=="string"&&(v.title=v.title.split(`
`).join("<br />")),rs(v)}var qn,tc=new WeakMap,Qe=function(){function v(){if(d(this,v),y(this,tc,void 0),!(typeof window>"u")){qn=this;for(var c=arguments.length,h=new Array(c),g=0;g<c;g++)h[g]=arguments[g];var S=Object.freeze(this.constructor.argsToParams(h));this.params=S,this.isAwaitingPromise=!1,w(tc,this,this._main(qn.params))}}return D(v,[{key:"_main",value:function(h){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(p2(Object.assign({},g,h)),Q.currentInstance){var S=Er.swalPromiseResolve.get(Q.currentInstance),j=Q.currentInstance.isAwaitingPromise;Q.currentInstance._destroy(),j||S({isDismissed:!0}),vr()&&ti()}Q.currentInstance=qn;var Y=Z2(h,g);X2(Y),Object.freeze(Y),Q.timeout&&(Q.timeout.stop(),delete Q.timeout),clearTimeout(Q.restoreFocusTimeout);var ue=eA(qn);return ei(qn,Y),Te.innerParams.set(qn,Y),J2(qn,ue,Y)}},{key:"then",value:function(h){return p(tc,this).then(h)}},{key:"finally",value:function(h){return p(tc,this).finally(h)}}])}(),J2=function(c,h,g){return new Promise(function(S,j){var Y=function(le){c.close({isDismissed:!0,dismiss:le})};Er.swalPromiseResolve.set(c,S),Er.swalPromiseReject.set(c,j),h.confirmButton.onclick=function(){me(c)},h.denyButton.onclick=function(){ht(c)},h.cancelButton.onclick=function(){ft(c,Y)},h.closeButton.onclick=function(){Y(_r.close)},y2(g,h,Y),Oe(Q,g,Y),Xu(c,g),W2(g),tA(Q,g,Y),nA(h,g),setTimeout(function(){h.container.scrollTop=0})})},Z2=function(c,h){var g=M2(c),S=Object.assign({},co,h,g,c);return S.showClass=Object.assign({},co.showClass,S.showClass),S.hideClass=Object.assign({},co.hideClass,S.hideClass),S.animation===!1&&(S.showClass={backdrop:"swal2-noanimation"},S.hideClass={}),S},eA=function(c){var h={popup:ye(),container:vt(),actions:gr(),confirmButton:Xt(),denyButton:Jt(),cancelButton:Yr(),loader:mr(),closeButton:ts(),validationMessage:es(),progressSteps:Qr()};return Te.domCache.set(c,h),h},tA=function(c,h,g){var S=Qs();Ve(S),h.timer&&(c.timeout=new L2(function(){g("timer"),delete c.timeout},h.timer),h.timerProgressBar&&(et(S),kt(S,h,"timerProgressBar"),setTimeout(function(){c.timeout&&c.timeout.running&&Js(h.timer)})))},nA=function(c,h){if(!h.toast){if(!Gr(h.allowEnterKey)){Ks("allowEnterKey"),sA();return}rA(c)||iA(c,h)||Na(-1,1)}},rA=function(c){var h=c.popup.querySelectorAll("[autofocus]"),g=O(h),S;try{for(g.s();!(S=g.n()).done;){var j=S.value;if(j instanceof HTMLElement&&yt(j))return j.focus(),!0}}catch(Y){g.e(Y)}finally{g.f()}return!1},iA=function(c,h){return h.focusDeny&&yt(c.denyButton)?(c.denyButton.focus(),!0):h.focusCancel&&yt(c.cancelButton)?(c.cancelButton.focus(),!0):h.focusConfirm&&yt(c.confirmButton)?(c.confirmButton.focus(),!0):!1},sA=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var sy=new Date,oy=localStorage.getItem("swal-initiation");oy?(sy.getTime()-Date.parse(oy))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var v=document.createElement("audio");v.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",v.loop=!0,document.body.appendChild(v),setTimeout(function(){v.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(sy))}Qe.prototype.disableButtons=jv,Qe.prototype.enableButtons=Uv,Qe.prototype.getInput=Mv,Qe.prototype.disableInput=zv,Qe.prototype.enableInput=Bv,Qe.prototype.hideLoading=Zu,Qe.prototype.disableLoading=Zu,Qe.prototype.showValidationMessage=$v,Qe.prototype.resetValidationMessage=Hv,Qe.prototype.close=Zt,Qe.prototype.closePopup=Zt,Qe.prototype.closeModal=Zt,Qe.prototype.closeToast=Zt,Qe.prototype.rejectPromise=Ma,Qe.prototype.update=Gv,Qe.prototype._destroy=Qv,Object.assign(Qe,D2),Object.keys(v2).forEach(function(v){Qe[v]=function(){if(qn&&qn[v]){var c;return(c=qn)[v].apply(c,arguments)}return null}}),Qe.DismissReason=_r,Qe.version="11.12.4";var nc=Qe;return nc.default=nc,nc}),typeof ii<"u"&&ii.Sweetalert2&&(ii.swal=ii.sweetAlert=ii.Swal=ii.SweetAlert=ii.Sweetalert2),typeof document<"u"&&function(n,r){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(HI);var GD=HI.exports;const Vf=Rm(GD),QD=()=>{const{cartItems:t,finalizePurchase:e}=$.useContext(Yi),[n,r]=$.useState(""),[i,s]=$.useState(""),o=()=>t.reduce((u,d)=>u+d.precio,0).toFixed(2),l=async u=>{if(u.preventDefault(),!n||!i){Vf.fire({icon:"error",title:"Error",text:"Por favor, ingrese su nombre y número de teléfono."});return}try{const d=await e(n,i);Vf.fire({icon:"success",title:"Compra realizada con éxito!",text:`Su compra ha sido procesada con éxito. El total de su compra es $${o()}. Su ID de orden es: ${d}.`}),r(""),s("")}catch(d){console.error("Error al guardar la orden:",d),Vf.fire({icon:"error",title:"Error",text:"Hubo un problema al procesar su compra."})}};return L.jsxs("div",{className:"cart-page",children:[L.jsx("h1",{children:"Carrito de Compras"}),L.jsxs("form",{onSubmit:l,className:"cart-form",children:[L.jsxs("div",{className:"form-group",children:[L.jsx("label",{htmlFor:"name",children:"Nombre:"}),L.jsx("input",{type:"text",id:"name",value:n,onChange:u=>r(u.target.value),required:!0})]}),L.jsxs("div",{className:"form-group",children:[L.jsx("label",{htmlFor:"phone",children:"Número de Teléfono:"}),L.jsx("input",{type:"tel",id:"phone",value:i,onChange:u=>s(u.target.value),required:!0})]}),L.jsx("button",{type:"submit",children:"Finalizar Compra"})]}),L.jsx("div",{className:"cart-items",children:t.length>0?t.map(u=>L.jsxs("div",{className:"cart-item",children:[L.jsx("img",{src:u.imagen,alt:u.nombre,className:"item-image"}),L.jsxs("div",{className:"item-details",children:[L.jsx("h3",{children:u.nombre}),L.jsxs("p",{children:["$",u.precio.toFixed(2)]})]})]},u.id)):L.jsx("p",{children:"No hay productos en el carrito."})}),L.jsx("div",{className:"cart-total",children:L.jsxs("h3",{children:["Total: $",o()]})})]})},YD=()=>{const{id:t}=lk(),{fetchProductDetail:e,selectedProduct:n}=$.useContext(Yi);return $.useEffect(()=>{e(t)},[t,e]),n?L.jsxs("div",{className:"product-detail",children:[L.jsx("h1",{children:n.nombre}),L.jsx("img",{src:n.imagen,alt:n.nombre}),L.jsx("p",{children:n.descripcion}),L.jsxs("p",{children:[L.jsx("strong",{children:"Categoría:"})," ",n.categoria]}),L.jsxs("p",{children:[L.jsx("strong",{children:"Precio:"})," $",n.precio]})]}):L.jsx("p",{children:"Cargando detalles del producto..."})},I_=()=>{};let fv={},WI={},qI=null,KI={mark:I_,measure:I_};try{typeof window<"u"&&(fv=window),typeof document<"u"&&(WI=document),typeof MutationObserver<"u"&&(qI=MutationObserver),typeof performance<"u"&&(KI=performance)}catch{}const{userAgent:S_=""}=fv.navigator||{},zi=fv,xe=WI,A_=qI,bc=KI;zi.document;const Kr=!!xe.documentElement&&!!xe.head&&typeof xe.addEventListener=="function"&&typeof xe.createElement=="function",GI=~S_.indexOf("MSIE")||~S_.indexOf("Trident/");var Me="classic",QI="duotone",ln="sharp",un="sharp-duotone",XD=[Me,QI,ln,un],JD={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},b_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ZD=["kit"],eL=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,tL=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,nL={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},rL={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},iL={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},sL={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},oL={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},aL={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},YI={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},lL=["solid","regular","light","thin","duotone","brands"],XI=[1,2,3,4,5,6,7,8,9,10],uL=XI.concat([11,12,13,14,15,16,17,18,19,20]),sl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},cL=[...Object.keys(sL),...lL,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",sl.GROUP,sl.SWAP_OPACITY,sl.PRIMARY,sl.SECONDARY].concat(XI.map(t=>"".concat(t,"x"))).concat(uL.map(t=>"w-".concat(t))),dL={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},hL={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},fL={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},C_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const zr="___FONT_AWESOME___",cm=16,JI="fa",ZI="svg-inline--fa",Vs="data-fa-i2svg",dm="data-fa-pseudo-element",pL="data-fa-pseudo-element-pending",pv="data-prefix",mv="data-icon",k_="fontawesome-i2svg",mL="async",gL=["HTML","HEAD","STYLE","SCRIPT"],eS=(()=>{try{return!0}catch{return!1}})(),tS=[Me,ln,un];function gu(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Me]}})}const nS={...YI};nS[Me]={...YI[Me],...b_.kit,...b_["kit-duotone"]};const Ss=gu(nS),hm={...aL};hm[Me]={...hm[Me],...C_.kit,...C_["kit-duotone"]};const Xl=gu(hm),fm={...oL};fm[Me]={...fm[Me],...fL.kit};const As=gu(fm),pm={...iL};pm[Me]={...pm[Me],...hL.kit};const vL=gu(pm),yL=eL,rS="fa-layers-text",wL=tL,_L={...JD};gu(_L);const EL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ff=sl,na=new Set;Object.keys(Xl[Me]).map(na.add.bind(na));Object.keys(Xl[ln]).map(na.add.bind(na));Object.keys(Xl[un]).map(na.add.bind(na));const TL=[...ZD,...cL],El=zi.FontAwesomeConfig||{};function IL(t){var e=xe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function SL(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}xe&&typeof xe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=SL(IL(n));i!=null&&(El[r]=i)});const iS={styleDefault:"solid",familyDefault:"classic",cssPrefix:JI,replacementClass:ZI,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};El.familyPrefix&&(El.cssPrefix=El.familyPrefix);const ra={...iS,...El};ra.autoReplaceSvg||(ra.observeMutations=!1);const ee={};Object.keys(iS).forEach(t=>{Object.defineProperty(ee,t,{enumerable:!0,set:function(e){ra[t]=e,Tl.forEach(n=>n(ee))},get:function(){return ra[t]}})});Object.defineProperty(ee,"familyPrefix",{enumerable:!0,set:function(t){ra.cssPrefix=t,Tl.forEach(e=>e(ee))},get:function(){return ra.cssPrefix}});zi.FontAwesomeConfig=ee;const Tl=[];function AL(t){return Tl.push(t),()=>{Tl.splice(Tl.indexOf(t),1)}}const oi=cm,Jn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bL(t){if(!t||!Kr)return;const e=xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=xe.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return xe.head.insertBefore(e,r),t}const CL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Jl(){let t=12,e="";for(;t-- >0;)e+=CL[Math.random()*62|0];return e}function fa(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function gv(t){return t.classList?fa(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function sS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kL(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(sS(t[n]),'" '),"").trim()}function Ah(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function vv(t){return t.size!==Jn.size||t.x!==Jn.x||t.y!==Jn.y||t.rotate!==Jn.rotate||t.flipX||t.flipY}function PL(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},d={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:d}}function RL(t){let{transform:e,width:n=cm,height:r=cm,startCentered:i=!1}=t,s="";return i&&GI?s+="translate(".concat(e.x/oi-n/2,"em, ").concat(e.y/oi-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/oi,"em), calc(-50% + ").concat(e.y/oi,"em)) "):s+="translate(".concat(e.x/oi,"em, ").concat(e.y/oi,"em) "),s+="scale(".concat(e.size/oi*(e.flipX?-1:1),", ").concat(e.size/oi*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var xL=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function oS(){const t=JI,e=ZI,n=ee.cssPrefix,r=ee.replacementClass;let i=xL;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let P_=!1;function Uf(){ee.autoAddCss&&!P_&&(bL(oS()),P_=!0)}var NL={mixout(){return{dom:{css:oS,insertCss:Uf}}},hooks(){return{beforeDOMElementCreation(){Uf()},beforeI2svg(){Uf()}}}};const $r=zi||{};$r[zr]||($r[zr]={});$r[zr].styles||($r[zr].styles={});$r[zr].hooks||($r[zr].hooks={});$r[zr].shims||($r[zr].shims=[]);var Zn=$r[zr];const aS=[],lS=function(){xe.removeEventListener("DOMContentLoaded",lS),Vd=1,aS.map(t=>t())};let Vd=!1;Kr&&(Vd=(xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xe.readyState),Vd||xe.addEventListener("DOMContentLoaded",lS));function OL(t){Kr&&(Vd?setTimeout(t,0):aS.push(t))}function vu(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?sS(t):"<".concat(e," ").concat(kL(n),">").concat(r.map(vu).join(""),"</").concat(e,">")}function R_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var jf=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,u,d,p;for(r===void 0?(u=1,p=e[s[0]]):(u=0,p=r);u<o;u++)d=s[u],p=l(p,e[d],d,e);return p};function DL(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function mm(t){const e=DL(t);return e.length===1?e[0].toString(16):null}function LL(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function x_(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function gm(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=x_(e);typeof Zn.hooks.addPack=="function"&&!r?Zn.hooks.addPack(t,x_(e)):Zn.styles[t]={...Zn.styles[t]||{},...i},t==="fas"&&gm("fa",e)}const{styles:ps,shims:ML}=Zn,VL={[Me]:Object.values(As[Me]),[ln]:Object.values(As[ln]),[un]:Object.values(As[un])};let yv=null,uS={},cS={},dS={},hS={},fS={};const FL={[Me]:Object.keys(Ss[Me]),[ln]:Object.keys(Ss[ln]),[un]:Object.keys(Ss[un])};function UL(t){return~TL.indexOf(t)}function jL(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!UL(i)?i:null}const pS=()=>{const t=r=>jf(ps,(i,s,o)=>(i[o]=jf(s,r,{}),i),{});uS=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),cS=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),fS=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in ps||ee.autoFetchSvg,n=jf(ML,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});dS=n.names,hS=n.unicodes,yv=bh(ee.styleDefault,{family:ee.familyDefault})};AL(t=>{yv=bh(t.styleDefault,{family:ee.familyDefault})});pS();function wv(t,e){return(uS[t]||{})[e]}function BL(t,e){return(cS[t]||{})[e]}function Ei(t,e){return(fS[t]||{})[e]}function mS(t){return dS[t]||{prefix:null,iconName:null}}function zL(t){const e=hS[t],n=wv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $i(){return yv}const _v=()=>({prefix:null,iconName:null,rest:[]});function bh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Me}=e,r=Ss[n][t],i=Xl[n][t]||Xl[n][r],s=t in Zn.styles?t:null;return i||s||null}const $L={[Me]:Object.keys(As[Me]),[ln]:Object.keys(As[ln]),[un]:Object.keys(As[un])};function Ch(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Me]:"".concat(ee.cssPrefix,"-").concat(Me),[ln]:"".concat(ee.cssPrefix,"-").concat(ln),[un]:"".concat(ee.cssPrefix,"-").concat(un)};let i=null,s=Me;const o=XD.filter(u=>u!==QI);o.forEach(u=>{(t.includes(r[u])||t.some(d=>$L[u].includes(d)))&&(s=u)});const l=t.reduce((u,d)=>{const p=jL(ee.cssPrefix,d);if(ps[d]?(d=VL[s].includes(d)?vL[s][d]:d,i=d,u.prefix=d):FL[s].indexOf(d)>-1?(i=d,u.prefix=bh(d,{family:s})):p?u.iconName=p:d!==ee.replacementClass&&!o.some(y=>d===r[y])&&u.rest.push(d),!n&&u.prefix&&u.iconName){const y=i==="fa"?mS(u.iconName):{},w=Ei(u.prefix,u.iconName);y.prefix&&(i=null),u.iconName=y.iconName||w||u.iconName,u.prefix=y.prefix||u.prefix,u.prefix==="far"&&!ps.far&&ps.fas&&!ee.autoFetchSvg&&(u.prefix="fas")}return u},_v());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ln&&(ps.fass||ee.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ei(l.prefix,l.iconName)||l.iconName),!l.prefix&&s===un&&(ps.fasds||ee.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Ei(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=$i()||"fas"),l}class HL{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},gm(s,i[s]);const o=As[Me][s];o&&gm(o,i[s]),pS()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],u=l[2];e[s]||(e[s]={}),u.length>0&&u.forEach(d=>{typeof d=="string"&&(e[s][d]=l)}),e[s][o]=l}),e}}let N_=[],ko={};const Fo={},WL=Object.keys(Fo);function qL(t,e){let{mixoutsTo:n}=e;return N_=t,ko={},Object.keys(Fo).forEach(r=>{WL.indexOf(r)===-1&&delete Fo[r]}),N_.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{ko[o]||(ko[o]=[]),ko[o].push(s[o])})}r.provides&&r.provides(Fo)}),n}function vm(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(ko[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Fs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ko[t]||[]).forEach(s=>{s.apply(null,n)})}function Hi(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Fo[t]?Fo[t].apply(null,e):void 0}function ym(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||$i();if(e)return e=Ei(n,e)||e,R_(gS.definitions,n,e)||R_(Zn.styles,n,e)}const gS=new HL,KL=()=>{ee.autoReplaceSvg=!1,ee.observeMutations=!1,Fs("noAuto")},GL={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kr?(Fs("beforeI2svg",t),Hi("pseudoElements2svg",t),Hi("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ee.autoReplaceSvg===!1&&(ee.autoReplaceSvg=!0),ee.observeMutations=!0,OL(()=>{YL({autoReplaceSvgRoot:e}),Fs("watch",t)})}},QL={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ei(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=bh(t[0]);return{prefix:n,iconName:Ei(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ee.cssPrefix,"-"))>-1||t.match(yL))){const e=Ch(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||$i(),iconName:Ei(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=$i();return{prefix:e,iconName:Ei(e,t)||t}}}},fn={noAuto:KL,config:ee,dom:GL,parse:QL,library:gS,findIconDefinition:ym,toHtml:vu},YL=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=xe}=t;(Object.keys(Zn.styles).length>0||ee.autoFetchSvg)&&Kr&&ee.autoReplaceSvg&&fn.dom.i2svg({node:e})};function kh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>vu(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Kr)return;const n=xe.createElement("div");return n.innerHTML=t.html,n.children}}),t}function XL(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(vv(o)&&n.found&&!r.found){const{width:l,height:u}=n,d={x:l/u/2,y:.5};i.style=Ah({...s,"transform-origin":"".concat(d.x+o.x/16,"em ").concat(d.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function JL(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(ee.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function Ev(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:u,titleId:d,extra:p,watchable:y=!1}=t,{width:w,height:k}=n.found?n:e,x=r==="fak",D=[ee.replacementClass,i?"".concat(ee.cssPrefix,"-").concat(i):""].filter(z=>p.classes.indexOf(z)===-1).filter(z=>z!==""||!!z).concat(p.classes).join(" ");let O={children:[],attributes:{...p.attributes,"data-prefix":r,"data-icon":i,class:D,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(k)}};const I=x&&!~p.classes.indexOf("fa-fw")?{width:"".concat(w/k*16*.0625,"em")}:{};y&&(O.attributes[Vs]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(d||Jl())},children:[l]}),delete O.attributes.title);const T={...O,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:{...I,...p.styles}},{children:A,attributes:F}=n.found&&e.found?Hi("generateAbstractMask",T)||{children:[],attributes:{}}:Hi("generateAbstractIcon",T)||{children:[],attributes:{}};return T.children=A,T.attributes=F,o?JL(T):XL(T)}function O_(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,u={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};l&&(u[Vs]="");const d={...o.styles};vv(i)&&(d.transform=RL({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);const p=Ah(d);p.length>0&&(u.style=p);const y=[];return y.push({tag:"span",attributes:u,children:[e]}),s&&y.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),y}function ZL(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Ah(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Bf}=Zn;function wm(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(ee.cssPrefix,"-").concat(Ff.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ee.cssPrefix,"-").concat(Ff.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ee.cssPrefix,"-").concat(Ff.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const eM={found:!1,width:512,height:512};function tM(t,e){!eS&&!ee.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function _m(t,e){let n=e;return e==="fa"&&ee.styleDefault!==null&&(e=$i()),new Promise((r,i)=>{if(n==="fa"){const s=mS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Bf[e]&&Bf[e][t]){const s=Bf[e][t];return r(wm(s))}tM(t,e),r({...eM,icon:ee.showMissingIcons&&t?Hi("missingIconAbstract")||{}:{}})})}const D_=()=>{},Em=ee.measurePerformance&&bc&&bc.mark&&bc.measure?bc:{mark:D_,measure:D_},ol='FA "6.6.0"',nM=t=>(Em.mark("".concat(ol," ").concat(t," begins")),()=>vS(t)),vS=t=>{Em.mark("".concat(ol," ").concat(t," ends")),Em.measure("".concat(ol," ").concat(t),"".concat(ol," ").concat(t," begins"),"".concat(ol," ").concat(t," ends"))};var Tv={begin:nM,end:vS};const qc=()=>{};function L_(t){return typeof(t.getAttribute?t.getAttribute(Vs):null)=="string"}function rM(t){const e=t.getAttribute?t.getAttribute(pv):null,n=t.getAttribute?t.getAttribute(mv):null;return e&&n}function iM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ee.replacementClass)}function sM(){return ee.autoReplaceSvg===!0?Kc.replace:Kc[ee.autoReplaceSvg]||Kc.replace}function oM(t){return xe.createElementNS("http://www.w3.org/2000/svg",t)}function aM(t){return xe.createElement(t)}function yS(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?oM:aM}=e;if(typeof t=="string")return xe.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(yS(s,{ceFn:n}))}),r}function lM(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Kc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(yS(n),e)}),e.getAttribute(Vs)===null&&ee.keepOriginalSource){let n=xe.createComment(lM(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~gv(e).indexOf(ee.replacementClass))return Kc.replace(t);const r=new RegExp("".concat(ee.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===ee.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>vu(s)).join(`
`);e.setAttribute(Vs,""),e.innerHTML=i}};function M_(t){t()}function wS(t,e){const n=typeof e=="function"?e:qc;if(t.length===0)n();else{let r=M_;ee.mutateApproach===mL&&(r=zi.requestAnimationFrame||M_),r(()=>{const i=sM(),s=Tv.begin("mutate");t.map(i),s(),n()})}}let Iv=!1;function _S(){Iv=!0}function Tm(){Iv=!1}let Fd=null;function V_(t){if(!A_||!ee.observeMutations)return;const{treeCallback:e=qc,nodeCallback:n=qc,pseudoElementsCallback:r=qc,observeMutationsRoot:i=xe}=t;Fd=new A_(s=>{if(Iv)return;const o=$i();fa(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!L_(l.addedNodes[0])&&(ee.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&ee.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&L_(l.target)&&~EL.indexOf(l.attributeName))if(l.attributeName==="class"&&rM(l.target)){const{prefix:u,iconName:d}=Ch(gv(l.target));l.target.setAttribute(pv,u||o),d&&l.target.setAttribute(mv,d)}else iM(l.target)&&n(l.target)})}),Kr&&Fd.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function uM(){Fd&&Fd.disconnect()}function cM(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function dM(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Ch(gv(t));return i.prefix||(i.prefix=$i()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=BL(i.prefix,t.innerText)||wv(i.prefix,mm(t.innerText))),!i.iconName&&ee.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function hM(t){const e=fa(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ee.autoA11y&&(n?e["aria-labelledby"]="".concat(ee.replacementClass,"-title-").concat(r||Jl()):(e["aria-hidden"]="true",e.focusable="false")),e}function fM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Jn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function F_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=dM(t),s=hM(t),o=vm("parseNodeAttributes",{},t);let l=e.styleParser?cM(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Jn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s},...o}}const{styles:pM}=Zn;function ES(t){const e=ee.autoReplaceSvg==="nest"?F_(t,{styleParser:!1}):F_(t);return~e.extra.classes.indexOf(rS)?Hi("generateLayersText",t,e):Hi("generateSvgReplacementMutation",t,e)}let cr=new Set;tS.map(t=>{cr.add("fa-".concat(t))});Object.keys(Ss[Me]).map(cr.add.bind(cr));Object.keys(Ss[ln]).map(cr.add.bind(cr));Object.keys(Ss[un]).map(cr.add.bind(cr));cr=[...cr];function U_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kr)return Promise.resolve();const n=xe.documentElement.classList,r=p=>n.add("".concat(k_,"-").concat(p)),i=p=>n.remove("".concat(k_,"-").concat(p)),s=ee.autoFetchSvg?cr:tS.map(p=>"fa-".concat(p)).concat(Object.keys(pM));s.includes("fa")||s.push("fa");const o=[".".concat(rS,":not([").concat(Vs,"])")].concat(s.map(p=>".".concat(p,":not([").concat(Vs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=fa(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const u=Tv.begin("onTree"),d=l.reduce((p,y)=>{try{const w=ES(y);w&&p.push(w)}catch(w){eS||w.name==="MissingIcon"&&console.error(w)}return p},[]);return new Promise((p,y)=>{Promise.all(d).then(w=>{wS(w,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),p()})}).catch(w=>{u(),y(w)})})}function mM(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ES(t).then(n=>{n&&wS([n],e)})}function gM(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:ym(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:ym(i||{})),t(r,{...n,mask:i})}}const vM=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Jn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:u=[],attributes:d={},styles:p={}}=e;if(!t)return;const{prefix:y,iconName:w,icon:k}=t;return kh({type:"icon",...t},()=>(Fs("beforeDOMElementCreation",{iconDefinition:t,params:e}),ee.autoA11y&&(o?d["aria-labelledby"]="".concat(ee.replacementClass,"-title-").concat(l||Jl()):(d["aria-hidden"]="true",d.focusable="false")),Ev({icons:{main:wm(k),mask:i?wm(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:w,transform:{...Jn,...n},symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:d,styles:p,classes:u}})))};var yM={mixout(){return{icon:gM(vM)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=U_,t.nodeCallback=mM,t}}},provides(t){t.i2svg=function(e){const{node:n=xe,callback:r=()=>{}}=e;return U_(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:u,mask:d,maskId:p,extra:y}=n;return new Promise((w,k)=>{Promise.all([_m(r,o),d.iconName?_m(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[D,O]=x;w([e,Ev({icons:{main:D,mask:O},prefix:o,iconName:r,transform:l,symbol:u,maskId:p,title:i,titleId:s,extra:y,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=Ah(o);l.length>0&&(r.style=l);let u;return vv(s)&&(u=Hi("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},wM={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return kh({type:"layer"},()=>{Fs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(ee.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},_M={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return kh({type:"counter",content:t},()=>(Fs("beforeDOMElementCreation",{content:t,params:e}),ZL({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(ee.cssPrefix,"-layers-counter"),...r]}})))}}}},EM={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Jn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return kh({type:"text",content:t},()=>(Fs("beforeDOMElementCreation",{content:t,params:e}),O_({content:t,transform:{...Jn,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(ee.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(GI){const u=parseInt(getComputedStyle(e).fontSize,10),d=e.getBoundingClientRect();o=d.width/u,l=d.height/u}return ee.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,O_({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const TM=new RegExp('"',"ug"),j_=[1105920,1112319],B_={FontAwesome:{normal:"fas",400:"fas"},...rL,...nL,...dL},Im=Object.keys(B_).reduce((t,e)=>(t[e.toLowerCase()]=B_[e],t),{}),IM=Object.keys(Im).reduce((t,e)=>{const n=Im[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function SM(t){const e=t.replace(TM,""),n=LL(e,0),r=n>=j_[0]&&n<=j_[1],i=e.length===2?e[0]===e[1]:!1;return{value:mm(i?e[0]:e),isSecondary:r||i}}function AM(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Im[n]||{})[i]||IM[n]}function z_(t,e){const n="".concat(pL).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=fa(t.children).filter(w=>w.getAttribute(dm)===e)[0],l=zi.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),d=u.match(wL),p=l.getPropertyValue("font-weight"),y=l.getPropertyValue("content");if(o&&!d)return t.removeChild(o),r();if(d&&y!=="none"&&y!==""){const w=l.getPropertyValue("content");let k=AM(u,p);const{value:x,isSecondary:D}=SM(w),O=d[0].startsWith("FontAwesome");let I=wv(k,x),T=I;if(O){const A=zL(x);A.iconName&&A.prefix&&(I=A.iconName,k=A.prefix)}if(I&&!D&&(!o||o.getAttribute(pv)!==k||o.getAttribute(mv)!==T)){t.setAttribute(n,T),o&&t.removeChild(o);const A=fM(),{extra:F}=A;F.attributes[dm]=e,_m(I,k).then(z=>{const K=Ev({...A,icons:{main:z,mask:_v()},prefix:k,iconName:T,extra:F,watchable:!0}),b=xe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=K.map(E=>vu(E)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function bM(t){return Promise.all([z_(t,"::before"),z_(t,"::after")])}function CM(t){return t.parentNode!==document.head&&!~gL.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(dm)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function $_(t){if(Kr)return new Promise((e,n)=>{const r=fa(t.querySelectorAll("*")).filter(CM).map(bM),i=Tv.begin("searchPseudoElements");_S(),Promise.all(r).then(()=>{i(),Tm(),e()}).catch(()=>{i(),Tm(),n()})})}var kM={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=$_,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=xe}=e;ee.searchPseudoElements&&$_(n)}}};let H_=!1;var PM={mixout(){return{dom:{unwatch(){_S(),H_=!0}}}},hooks(){return{bootstrap(){V_(vm("mutationObserverCallbacks",{}))},noAuto(){uM()},watch(t){const{observeMutationsRoot:e}=t;H_?Tm():V_(vm("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const W_=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var RM={mixout(){return{parse:{transform:t=>W_(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=W_(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(l," ").concat(u," ").concat(d)},y={transform:"translate(".concat(s/2*-1," -256)")},w={outer:o,inner:p,path:y};return{tag:"g",attributes:{...w.outer},children:[{tag:"g",attributes:{...w.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...w.path}}]}]}}}};const zf={x:0,y:0,width:"100%",height:"100%"};function q_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function xM(t){return t.tag==="g"?t.children:[t]}var NM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Ch(n.split(" ").map(i=>i.trim())):_v();return r.prefix||(r.prefix=$i()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:u,icon:d}=i,{width:p,icon:y}=s,w=PL({transform:l,containerWidth:p,iconWidth:u}),k={tag:"rect",attributes:{...zf,fill:"white"}},x=d.children?{children:d.children.map(q_)}:{},D={tag:"g",attributes:{...w.inner},children:[q_({tag:d.tag,attributes:{...d.attributes,...w.path},...x})]},O={tag:"g",attributes:{...w.outer},children:[D]},I="mask-".concat(o||Jl()),T="clip-".concat(o||Jl()),A={tag:"mask",attributes:{...zf,id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[k,O]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:xM(y)},A]};return n.push(F,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(I,")"),...zf}}),{children:n,attributes:r}}}},OM={provides(t){let e=!1;zi.matchMedia&&(e=zi.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},DM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},LM=[NL,yM,wM,_M,EM,kM,PM,RM,NM,OM,DM];qL(LM,{mixoutsTo:fn});fn.noAuto;fn.config;fn.library;fn.dom;const Sm=fn.parse;fn.findIconDefinition;fn.toHtml;const MM=fn.icon;fn.layer;fn.text;fn.counter;var TS={exports:{}},VM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",FM=VM,UM=FM;function IS(){}function SS(){}SS.resetWarningCache=IS;var jM=function(){function t(r,i,s,o,l,u){if(u!==UM){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:SS,resetWarningCache:IS};return n.PropTypes=n,n};TS.exports=jM();var BM=TS.exports;const ce=Rm(BM);function K_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Qn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?K_(Object(n),!0).forEach(function(r){Po(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ud(t){"@babel/helpers - typeof";return Ud=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ud(t)}function Po(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $M(t,e){if(t==null)return{};var n=zM(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Am(t){return HM(t)||WM(t)||qM(t)||KM()}function HM(t){if(Array.isArray(t))return bm(t)}function WM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qM(t,e){if(t){if(typeof t=="string")return bm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bm(t,e)}}function bm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function KM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GM(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,u=t.spin,d=t.spinPulse,p=t.spinReverse,y=t.pulse,w=t.fixedWidth,k=t.inverse,x=t.border,D=t.listItem,O=t.flip,I=t.size,T=t.rotation,A=t.pull,F=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":p,"fa-spin-pulse":d,"fa-pulse":y,"fa-fw":w,"fa-inverse":k,"fa-border":x,"fa-li":D,"fa-flip":O===!0,"fa-flip-horizontal":O==="horizontal"||O==="both","fa-flip-vertical":O==="vertical"||O==="both"},Po(e,"fa-".concat(I),typeof I<"u"&&I!==null),Po(e,"fa-rotate-".concat(T),typeof T<"u"&&T!==null&&T!==0),Po(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),Po(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(F).map(function(z){return F[z]?z:null}).filter(function(z){return z})}function QM(t){return t=t-0,t===t}function AS(t){return QM(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var YM=["style"];function XM(t){return t.charAt(0).toUpperCase()+t.slice(1)}function JM(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=AS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[XM(i)]=s:e[i]=s,e},{})}function bS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return bS(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,d){var p=e.attributes[d];switch(d){case"class":u.attrs.className=p,delete e.attributes.class;break;case"style":u.attrs.style=JM(p);break;default:d.indexOf("aria-")===0||d.indexOf("data-")===0?u.attrs[d.toLowerCase()]=p:u.attrs[AS(d)]=p}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=$M(n,YM);return i.attrs.style=Qn(Qn({},i.attrs.style),o),t.apply(void 0,[e.tag,Qn(Qn({},i.attrs),l)].concat(Am(r)))}var CS=!1;try{CS=!0}catch{}function ZM(){if(!CS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function G_(t){if(t&&Ud(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Sm.icon)return Sm.icon(t);if(t===null)return null;if(t&&Ud(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function $f(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Po({},t,e):{}}var Q_={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Sv=On.forwardRef(function(t,e){var n=Qn(Qn({},Q_),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,u=n.titleId,d=n.maskId,p=G_(r),y=$f("classes",[].concat(Am(GM(n)),Am((o||"").split(" ")))),w=$f("transform",typeof n.transform=="string"?Sm.transform(n.transform):n.transform),k=$f("mask",G_(i)),x=MM(p,Qn(Qn(Qn(Qn({},y),w),k),{},{symbol:s,title:l,titleId:u,maskId:d}));if(!x)return ZM("Could not find icon",p),null;var D=x.abstract,O={ref:e};return Object.keys(n).forEach(function(I){Q_.hasOwnProperty(I)||(O[I]=n[I])}),eV(D[0],O)});Sv.displayName="FontAwesomeIcon";Sv.propTypes={beat:ce.bool,border:ce.bool,beatFade:ce.bool,bounce:ce.bool,className:ce.string,fade:ce.bool,flash:ce.bool,mask:ce.oneOfType([ce.object,ce.array,ce.string]),maskId:ce.string,fixedWidth:ce.bool,inverse:ce.bool,flip:ce.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ce.oneOfType([ce.object,ce.array,ce.string]),listItem:ce.bool,pull:ce.oneOf(["right","left"]),pulse:ce.bool,rotation:ce.oneOf([0,90,180,270]),shake:ce.bool,size:ce.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ce.bool,spinPulse:ce.bool,spinReverse:ce.bool,symbol:ce.oneOfType([ce.bool,ce.string]),title:ce.string,titleId:ce.string,transform:ce.oneOfType([ce.string,ce.object]),swapOpacity:ce.bool};var eV=bS.bind(null,On.createElement);const tV={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},nV=()=>L.jsxs("footer",{className:"footer",children:[L.jsx("p",{children:"Produced by Javier Gutierrez - Tel: +54 11 26502095"}),L.jsx("a",{href:"https://www.linkedin.com/in/javier-gutierrez-791891248/",target:"_blank",rel:"noopener noreferrer",className:"linkedin-icon",children:L.jsx(Sv,{icon:tV,size:"2x"})})]}),rV=()=>L.jsxs("div",{className:"location-page",children:[L.jsx("h1",{children:"Entregas+ en El Palomar"}),L.jsx("p",{className:"location-description",children:"Para la entrega de los productos lo haremos previa coordinacion via telefonica en la zona de El Palomar. (No realizamos envios !!)"}),L.jsxs("div",{className:"location-details",children:[L.jsx("h3",{children:"Horario de Atención:"}),L.jsx("p",{children:"Lunes a Viernes: 9:00 AM - 6:00 PM"}),L.jsx("p",{children:"Sábados: 10:00 AM - 2:00 PM"})]}),L.jsx("div",{className:"map-container",children:L.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9080455083516!2d-58.5903740847737!3d-34.60668018045924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb844fae12109%3A0x2f9b5679d4f1e3d4!2sEl%20Palomar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1692100000000!5m2!1ses!2sar",width:"100%",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Ubicación en El Palomar"})})]});function Av(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iV=kS,PS=new au("auth","Firebase",kS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Rg("@firebase/auth");function sV(t,...e){jd.logLevel<=pe.WARN&&jd.warn(`Auth (${zs}): ${t}`,...e)}function Gc(t,...e){jd.logLevel<=pe.ERROR&&jd.error(`Auth (${zs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,...e){throw bv(t,...e)}function or(t,...e){return bv(t,...e)}function RS(t,e,n){const r=Object.assign(Object.assign({},iV()),{[e]:n});return new au("auth","Firebase",r).create(e,{appName:t.name})}function Di(t){return RS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return PS.create(t,...e)}function re(t,e,...n){if(!t)throw bv(e,...n)}function xr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gc(e),new Error(e)}function Hr(t,e){t||xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oV(){return Y_()==="http:"||Y_()==="https:"}function Y_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oV()||Wk()||"connection"in navigator)?navigator.onLine:!0}function lV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hr(n>e,"Short delay should be less than long delay!"),this.isMobile=$k()||qk()}get(){return aV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t,e){Hr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV=new yu(3e4,6e4);function Ws(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xi(t,e,n,r,i={}){return NS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=lu(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),xS.fetch()(OS(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function NS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uV),e);try{const i=new hV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Cc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Cc(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Cc(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw RS(t,p,d);Vn(t,p)}}catch(i){if(i instanceof dr)throw i;Vn(t,"network-request-failed",{message:String(i)})}}async function Ph(t,e,n,r,i={}){const s=await Xi(t,e,n,r,i);return"mfaPendingCredential"in s&&Vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function OS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cv(t.config,i):`${t.config.apiScheme}://${i}`}function dV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(or(this.auth,"network-request-failed")),cV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=or(t,e,r);return i.customData._tokenResponse=n,i}function X_(t){return t!==void 0&&t.enterprise!==void 0}class fV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return dV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function pV(t,e){return Xi(t,"GET","/v2/recaptchaConfig",Ws(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mV(t,e){return Xi(t,"POST","/v1/accounts:delete",e)}async function DS(t,e){return Xi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gV(t,e=!1){const n=Je(t),r=await n.getIdToken(e),i=kv(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Il(Hf(i.auth_time)),issuedAtTime:Il(Hf(i.iat)),expirationTime:Il(Hf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hf(t){return Number(t)*1e3}function kv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gc("JWT malformed, contained fewer than 3 sections"),null;try{const i=U1(n);return i?JSON.parse(i):(Gc("Failed to decode base64 JWT payload"),null)}catch(i){return Gc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function J_(t){const e=kv(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dr&&vV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Il(this.lastLoginAt),this.creationTime=Il(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zl(t,DS(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?LS(s.providerUserInfo):[],l=_V(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new km(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,y)}async function wV(t){const e=Je(t);await Bd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _V(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function LS(t){return t.map(e=>{var{providerId:n}=e,r=Av(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EV(t,e){const n=await NS(t,{},async()=>{const r=lu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=OS(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",xS.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function TV(t,e){return Xi(t,"POST","/v2/accounts:revokeToken",Ws(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):J_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=J_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await EV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Uo;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(re(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Uo,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Av(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new km(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zl(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gV(this,e)}reload(){return wV(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pr(this.auth.app))return Promise.reject(Di(this.auth));const e=await this.getIdToken();return await Zl(this,mV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,p;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(d=n.createdAt)!==null&&d!==void 0?d:void 0,T=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:A,emailVerified:F,isAnonymous:z,providerData:K,stsTokenManager:b}=n;re(A&&b,e,"internal-error");const E=Uo.fromJSON(this.name,b);re(typeof A=="string",e,"internal-error"),ai(y,e.name),ai(w,e.name),re(typeof F=="boolean",e,"internal-error"),re(typeof z=="boolean",e,"internal-error"),ai(k,e.name),ai(x,e.name),ai(D,e.name),ai(O,e.name),ai(I,e.name),ai(T,e.name);const C=new Nr({uid:A,auth:e,email:w,emailVerified:F,displayName:y,isAnonymous:z,photoURL:x,phoneNumber:k,tenantId:D,stsTokenManager:E,createdAt:I,lastLoginAt:T});return K&&Array.isArray(K)&&(C.providerData=K.map(R=>Object.assign({},R))),O&&(C._redirectEventId=O),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new Uo;i.updateFromServerResponse(n);const s=new Nr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bd(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];re(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?LS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Uo;l.updateFromIdToken(r);const u=new Nr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new km(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=new Map;function Or(t){Hr(t instanceof Function,"Expected a class definition");let e=Z_.get(t);return e?(Hr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Z_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}MS.type="NONE";const e0=MS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t,e,n){return`firebase:${t}:${e}:${n}`}class jo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jo(Or(e0),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Or(e0);const o=Qc(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(o);if(p){const y=Nr._fromJSON(e,p);d!==s&&(l=y),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new jo(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new jo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(US(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BS(e))return"Blackberry";if(zS(e))return"Webos";if(Pv(e))return"Safari";if((e.includes("chrome/")||FS(e))&&!e.includes("edge/"))return"Chrome";if(jS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VS(t=At()){return/firefox\//i.test(t)}function Pv(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FS(t=At()){return/crios\//i.test(t)}function US(t=At()){return/iemobile/i.test(t)}function jS(t=At()){return/android/i.test(t)}function BS(t=At()){return/blackberry/i.test(t)}function zS(t=At()){return/webos/i.test(t)}function Rh(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IV(t=At()){var e;return Rh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SV(){return Kk()&&document.documentMode===10}function $S(t=At()){return Rh(t)||jS(t)||zS(t)||BS(t)||/windows phone/i.test(t)||US(t)}function AV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t,e=[]){let n;switch(t){case"Browser":n=t0(At());break;case"Worker":n=`${t0(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CV(t,e={}){return Xi(t,"GET","/v2/passwordPolicy",Ws(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kV=6;class PV{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new n0(this),this.idTokenSubscription=new n0(this),this.beforeStateQueue=new bV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=PS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await DS(this,{idToken:e}),r=await Nr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pr(this.app))return Promise.reject(Di(this));const n=e?Je(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pr(this.app)?Promise.reject(Di(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pr(this.app)?Promise.reject(Di(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CV(this),n=new PV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new au("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await TV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Or(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await jo.create(this,[Or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pa(t){return Je(t)}class n0{constructor(e){this.auth=e,this.observer=null,this.addObserver=tP(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xV(t){xh=t}function WS(t){return xh.loadJS(t)}function NV(){return xh.recaptchaEnterpriseScript}function OV(){return xh.gapiScript}function DV(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const LV="recaptcha-enterprise",MV="NO_RECAPTCHA";class VV{constructor(e){this.type=LV,this.auth=pa(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{pV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new fV(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;X_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(MV)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&X_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=NV();u.length!==0&&(u+=l),WS(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function r0(t,e,n,r=!1){const i=new VV(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function i0(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await r0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await r0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FV(t,e){const n=uh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ad(s,e??{}))return i;Vn(i,"already-initialized")}return n.initialize({options:e})}function UV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jV(t,e,n){const r=pa(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=qS(e),{host:o,port:l}=BV(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),zV()}function qS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BV(t){const e=qS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:s0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:s0(o)}}}function s0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,n){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}async function $V(t,e){return Xi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HV(t,e){return Ph(t,"POST","/v1/accounts:signInWithPassword",Ws(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WV(t,e){return Ph(t,"POST","/v1/accounts:signInWithEmailLink",Ws(t,e))}async function qV(t,e){return Ph(t,"POST","/v1/accounts:signInWithEmailLink",Ws(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends Rv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new eu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new eu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return i0(e,n,"signInWithPassword",HV);case"emailLink":return WV(e,{email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return i0(e,r,"signUpPassword",$V);case"emailLink":return qV(e,{idToken:n,email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t,e){return Ph(t,"POST","/v1/accounts:signInWithIdp",Ws(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KV="http://localhost";class Us extends Rv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Av(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Us(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bo(e,n)}buildRequest(){const e={requestUri:KV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QV(t){const e=Za(el(t)).link,n=e?Za(el(e)).deep_link_id:null,r=Za(el(t)).deep_link_id;return(r?Za(el(r)).link:null)||r||n||e||t}class xv{constructor(e){var n,r,i,s,o,l;const u=Za(el(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,y=GV((i=u.mode)!==null&&i!==void 0?i:null);re(d&&p&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=QV(e);try{return new xv(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this.providerId=ma.PROVIDER_ID}static credential(e,n){return eu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xv.parseLink(n);return re(r,"argument-error"),eu._fromEmailAndCode(e,r.code,r.tenantId)}}ma.PROVIDER_ID="password";ma.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ma.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends KS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends wu{constructor(){super("facebook.com")}static credential(e){return Us._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends wu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Us._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pi.credential(n,r)}catch{return null}}}pi.GOOGLE_SIGN_IN_METHOD="google.com";pi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends wu{constructor(){super("github.com")}static credential(e){return Us._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.GITHUB_SIGN_IN_METHOD="github.com";mi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends wu{constructor(){super("twitter.com")}static credential(e,n){return Us._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gi.credential(n,r)}catch{return null}}}gi.TWITTER_SIGN_IN_METHOD="twitter.com";gi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nr._fromIdTokenResponse(e,r,i),o=o0(r);return new ia({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=o0(r);return new ia({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function o0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd extends dr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zd(e,n,r,i)}}function GS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zd._fromErrorAndOperation(t,s,e,r):s})}async function YV(t,e,n=!1){const r=await Zl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ia._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XV(t,e,n=!1){const{auth:r}=t;if(Pr(r.app))return Promise.reject(Di(r));const i="reauthenticate";try{const s=await Zl(t,GS(r,i,e,t),n);re(s.idToken,r,"internal-error");const o=kv(s.idToken);re(o,r,"internal-error");const{sub:l}=o;return re(t.uid===l,r,"user-mismatch"),ia._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(t,e,n=!1){if(Pr(t.app))return Promise.reject(Di(t));const r="signIn",i=await GS(t,r,e),s=await ia._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function JV(t,e){return QS(pa(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZV(t){const e=pa(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function e4(t,e,n){return Pr(t.app)?Promise.reject(Di(t)):JV(Je(t),ma.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ZV(t),r})}function t4(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function n4(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function r4(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function YS(t){return Je(t).signOut()}const $d="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($d,"1"),this.storage.removeItem($d),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i4(){const t=At();return Pv(t)||Rh(t)}const s4=1e3,o4=10;class JS extends XS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=i4()&&AV(),this.fallbackToPolling=$S(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);SV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,o4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},s4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}JS.type="LOCAL";const a4=JS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS extends XS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ZS.type="SESSION";const e2=ZS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Nh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await l4(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=Nv("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(y){const w=y;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(w.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(){return window}function c4(t){ar().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function d4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function f4(){return t2()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2="firebaseLocalStorageDb",p4=1,Hd="firebaseLocalStorage",r2="fbase_key";class _u{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oh(t,e){return t.transaction([Hd],e?"readwrite":"readonly").objectStore(Hd)}function m4(){const t=indexedDB.deleteDatabase(n2);return new _u(t).toPromise()}function Pm(){const t=indexedDB.open(n2,p4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hd,{keyPath:r2})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hd)?e(r):(r.close(),await m4(),e(await Pm()))})})}async function a0(t,e,n){const r=Oh(t,!0).put({[r2]:e,value:n});return new _u(r).toPromise()}async function g4(t,e){const n=Oh(t,!1).get(e),r=await new _u(n).toPromise();return r===void 0?null:r.value}function l0(t,e){const n=Oh(t,!0).delete(e);return new _u(n).toPromise()}const v4=800,y4=3;class i2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>y4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nh._getInstance(f4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await d4(),!this.activeServiceWorker)return;this.sender=new u4(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pm();return await a0(e,$d,"1"),await l0(e,$d),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>a0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>g4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>l0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Oh(i,!1).getAll();return new _u(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),v4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i2.type="LOCAL";const w4=i2;new yu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _4(t,e){return e?Or(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov extends Rv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function E4(t){return QS(t.auth,new Ov(t),t.bypassAuthState)}function T4(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),XV(n,new Ov(t),t.bypassAuthState)}async function I4(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),YV(n,new Ov(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E4;case"linkViaPopup":case"linkViaRedirect":return I4;case"reauthViaPopup":case"reauthViaRedirect":return T4;default:Vn(this.auth,"internal-error")}}resolve(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S4=new yu(2e3,1e4);class Ro extends s2{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ro.currentPopupAction&&Ro.currentPopupAction.cancel(),Ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Hr(this.filter.length===1,"Popup operations only handle one event");const e=Nv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(or(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(or(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(or(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,S4.get())};e()}}Ro.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A4="pendingRedirect",Yc=new Map;class b4 extends s2{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yc.get(this.auth._key());if(!e){try{const r=await C4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yc.set(this.auth._key(),e)}return this.bypassAuthState||Yc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function C4(t,e){const n=R4(e),r=P4(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function k4(t,e){Yc.set(t._key(),e)}function P4(t){return Or(t._redirectPersistence)}function R4(t){return Qc(A4,t.config.apiKey,t.name)}async function x4(t,e,n=!1){if(Pr(t.app))return Promise.reject(Di(t));const r=pa(t),i=_4(r,e),o=await new b4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4=10*60*1e3;class O4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!o2(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(or(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N4&&this.cachedEventUids.clear(),this.cachedEventUids.has(u0(e))}saveEventToCache(e){this.cachedEventUids.add(u0(e)),this.lastProcessedEventTime=Date.now()}}function u0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function o2({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o2(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L4(t,e={}){return Xi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V4=/^https?/;async function F4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await L4(t);for(const n of e)try{if(U4(n))return}catch{}Vn(t,"unauthorized-domain")}function U4(t){const e=Cm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!V4.test(n))return!1;if(M4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j4=new yu(3e4,6e4);function c0(){const t=ar().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function B4(t){return new Promise((e,n)=>{var r,i,s;function o(){c0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{c0(),n(or(t,"network-request-failed"))},timeout:j4.get()})}if(!((i=(r=ar().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ar().gapi)===null||s===void 0)&&s.load)o();else{const l=DV("iframefcb");return ar()[l]=()=>{gapi.load?o():n(or(t,"network-request-failed"))},WS(`${OV()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Xc=null,e})}let Xc=null;function z4(t){return Xc=Xc||B4(t),Xc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4=new yu(5e3,15e3),H4="__/auth/iframe",W4="emulator/auth/iframe",q4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},K4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G4(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cv(e,W4):`https://${t.config.authDomain}/${H4}`,r={apiKey:e.apiKey,appName:t.name,v:zs},i=K4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${lu(r).slice(1)}`}async function Q4(t){const e=await z4(t),n=ar().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:G4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:q4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=or(t,"network-request-failed"),l=ar().setTimeout(()=>{s(o)},$4.get());function u(){ar().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},X4=500,J4=600,Z4="_blank",e5="http://localhost";class d0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t5(t,e,n,r=X4,i=J4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Y4),{width:r.toString(),height:i.toString(),top:s,left:o}),d=At().toLowerCase();n&&(l=FS(d)?Z4:n),VS(d)&&(e=e||e5,u.scrollbars="yes");const p=Object.entries(u).reduce((w,[k,x])=>`${w}${k}=${x},`,"");if(IV(d)&&l!=="_self")return n5(e||"",l),new d0(null);const y=window.open(e||"",l,p);re(y,t,"popup-blocked");try{y.focus()}catch{}return new d0(y)}function n5(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r5="__/auth/handler",i5="emulator/auth/handler",s5=encodeURIComponent("fac");async function h0(t,e,n,r,i,s){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zs,eventId:i};if(e instanceof KS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))o[p]=y}if(e instanceof wu){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${s5}=${encodeURIComponent(u)}`:"";return`${o5(t)}?${lu(l).slice(1)}${d}`}function o5({config:t}){return t.emulator?Cv(t,i5):`https://${t.authDomain}/${r5}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="webStorageSupport";class a5{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e2,this._completeRedirectFn=x4,this._overrideRedirectResult=k4}async _openPopup(e,n,r,i){var s;Hr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await h0(e,n,r,Cm(),i);return t5(e,o,Nv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await h0(e,n,r,Cm(),i);return c4(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Q4(e),r=new O4(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wf,{type:Wf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wf];o!==void 0&&n(!!o),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=F4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $S()||Pv()||Rh()}}const l5=a5;var f0="@firebase/auth",p0="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u5{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c5(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function d5(t){Ns(new Vi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HS(t)},d=new RV(r,i,s,u);return UV(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ns(new Vi("auth-internal",e=>{const n=pa(e.getProvider("auth").getImmediate());return(r=>new u5(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(f0,p0,c5(t)),nr(f0,p0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h5=5*60,f5=$1("authIdTokenMaxAge")||h5;let m0=null;const p5=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>f5)return;const i=n==null?void 0:n.token;m0!==i&&(m0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dv(t=Ng()){const e=uh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FV(t,{popupRedirectResolver:l5,persistence:[w4,a4,e2]}),r=$1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=p5(s.toString());n4(n,o,()=>o(n.currentUser)),t4(n,l=>o(l))}}const i=j1("auth");return i&&jV(n,`http://${i}`),n}function m5(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=or("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",m5().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});d5("Browser");const g5=()=>{const[t,e]=$.useState(!1),[n,r]=$.useState(!0),[i,s]=$.useState(""),[o,l]=$.useState(""),[u,d]=$.useState(null),p=Dv(),y=Pg();$.useEffect(()=>{const x=async O=>{if(O)try{const I=await lm(Yl(Is,"usuarios",O.uid));I.exists()&&I.data().rol==="admin"?(e(!0),y("/admin-panel")):(e(!1),d("No tienes permiso para acceder a esta área."),k())}catch{d("Error al verificar el rol de usuario.")}r(!1)},D=p.onAuthStateChanged(O=>{O?x(O):r(!1)});return()=>D()},[p,y]);const w=async x=>{x.preventDefault(),d(null);try{await e4(p,i,o);const D=p.currentUser,O=await lm(Yl(Is,"usuarios",D.uid));O.exists()&&O.data().rol==="admin"&&y("/admin-panel")}catch(D){D.code==="auth/invalid-email"?d("El formato del correo es incorrecto."):D.code==="auth/user-not-found"?d("No existe un usuario con este correo."):D.code==="auth/wrong-password"?d("La contraseña es incorrecta."):d("Error al iniciar sesión. Verifica tu correo y contraseña.")}},k=async()=>{try{await YS(p),e(!1),s(""),l("")}catch(x){console.error("Error al cerrar sesión:",x)}};return n?L.jsx("p",{children:"Cargando..."}):t?L.jsxs("div",{className:"admin-login",children:[L.jsx("h1",{children:"Panel de Administración"}),L.jsx("button",{onClick:k,className:"btn btn-primary",children:"Cerrar Sesión"})]}):L.jsxs("div",{className:"admin-login",children:[L.jsx("h2",{children:"Iniciar Sesión como Administrador"}),L.jsxs("form",{onSubmit:w,children:[L.jsxs("div",{className:"form-group",children:[L.jsx("label",{children:"Email:"}),L.jsx("input",{type:"email",className:"form-control",value:i,onChange:x=>s(x.target.value),required:!0})]}),L.jsxs("div",{className:"form-group",children:[L.jsx("label",{children:"Contraseña:"}),L.jsx("input",{type:"password",className:"form-control",value:o,onChange:x=>l(x.target.value),required:!0})]}),u&&L.jsx("div",{className:"alert alert-danger",children:u}),L.jsx("button",{type:"submit",className:"btn btn-primary",children:"Iniciar Sesión"})]})]})},v5=()=>{const[t,e]=$.useState(!1),[n,r]=$.useState(!0),[i,s]=$.useState(""),[o,l]=$.useState(""),[u,d]=$.useState(""),[p,y]=$.useState(""),[w,k]=$.useState(null),[x,D]=$.useState(""),[O,I]=$.useState(!1),[T,A]=$.useState(!1),[F,z]=$.useState(null),K=Dv(),b=jI();$.useEffect(()=>{const N=async P=>{if(P)try{const ut=await lm(Yl(Is,"usuarios",P.uid));ut.exists()&&ut.data().rol==="admin"?e(!0):(e(!1),z("No tienes permiso para acceder a esta área."))}catch{z("Error al verificar el rol de usuario.")}r(!1)},M=r4(K,P=>{P?N(P):r(!1)});return()=>M()},[K]);const E=N=>{k(N.target.files[0])},C=async N=>{N.preventDefault(),z(null);let M=x;if(w&&!O)try{const P=AD(b,`productos/${w.name}`);await ID(P,w),M=await SD(P)}catch(P){z("Error al subir la imagen."),console.error("Error al subir la imagen:",P);return}try{await EI(om(Is,"productos"),{nombre:i,descripcion:o,categoria:u,precio:parseFloat(p),imagen:M,estado:"disponible"}),A(!0),s(""),l(""),d(""),y(""),k(null),D(""),I(!1)}catch(P){z("Error al subir el producto."),console.error("Error al subir el producto:",P)}},R=async()=>{try{await YS(K),e(!1),s(""),l(""),d(""),y(""),k(null),D(""),I(!1)}catch(N){console.error("Error al cerrar sesión:",N)}};return n?L.jsx("p",{children:"Cargando..."}):t?L.jsxs("div",{className:"admin-panel",children:[L.jsx("h2",{children:"Subir nuevo producto"}),L.jsxs("form",{onSubmit:C,children:[L.jsx("input",{type:"text",placeholder:"Nombre del producto",value:i,onChange:N=>s(N.target.value),required:!0}),L.jsx("input",{type:"text",placeholder:"Descripción",value:o,onChange:N=>l(N.target.value),required:!0}),L.jsx("input",{type:"text",placeholder:"Categoría",value:u,onChange:N=>d(N.target.value),required:!0}),L.jsx("input",{type:"number",placeholder:"Precio",value:p,onChange:N=>y(N.target.value),required:!0}),L.jsxs("div",{children:[L.jsx("input",{type:"file",accept:"image/*",onChange:E}),L.jsxs("label",{children:[L.jsx("input",{type:"checkbox",checked:O,onChange:()=>I(!O)}),"Usar URL en lugar de subir archivo"]}),O&&L.jsx("input",{type:"text",placeholder:"URL de la imagen",value:x,onChange:N=>D(N.target.value)})]}),L.jsx("button",{type:"submit",children:"Subir producto"}),T&&L.jsx("p",{className:"success",children:"Producto subido con éxito."}),F&&L.jsx("p",{className:"error",children:F})]}),L.jsx("button",{onClick:R,children:"Cerrar Sesión"})]}):L.jsxs("div",{children:[L.jsx("h2",{children:"Acceso denegado"}),L.jsx("p",{children:F||"No tienes permiso para acceder a esta área."}),L.jsx("button",{onClick:R,children:"Cerrar Sesión"})]})},y5=({children:t})=>Dv().currentUser?t:L.jsx(Ek,{to:"/admin-login"});function w5(){return L.jsxs(RD,{children:[" ",L.jsxs(Rk,{children:[L.jsx(BD,{}),L.jsxs(Ik,{children:[L.jsx(Sr,{path:"/",element:L.jsx(HD,{})})," ",L.jsx(Sr,{path:"/contacto",element:L.jsx(WD,{})}),L.jsx(Sr,{path:"/cart",element:L.jsx(QD,{})})," ",L.jsx(Sr,{path:"/product/:id",element:L.jsx(YD,{})})," ",L.jsx(Sr,{path:"/ubicacion",element:L.jsx(rV,{})}),L.jsx(Sr,{path:"/admin-login",element:L.jsx(g5,{})})," ",L.jsx(Sr,{path:"/admin-panel",element:L.jsx(y5,{children:L.jsx(v5,{})})}),L.jsx(Sr,{path:"*",element:L.jsx(KD,{})})," "]}),L.jsx(nV,{})," "]})]})}qf.createRoot(document.getElementById("root")).render(L.jsx(w5,{}));
