const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CvContent-Cldlt5gS.js","./CvContent-CC9Oz7ya.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const pt={},Ms=[],Nn=()=>{},Mf=()=>!1,Ro=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Gl=n=>n.startsWith("onUpdate:"),It=Object.assign,kl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Eh=Object.prototype.hasOwnProperty,ot=(n,e)=>Eh.call(n,e),We=Array.isArray,Es=n=>Po(n)==="[object Map]",Ef=n=>Po(n)==="[object Set]",ke=n=>typeof n=="function",St=n=>typeof n=="string",ci=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",bf=n=>(mt(n)||ke(n))&&ke(n.then)&&ke(n.catch),yf=Object.prototype.toString,Po=n=>yf.call(n),bh=n=>Po(n).slice(8,-1),Tf=n=>Po(n)==="[object Object]",Wl=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Qs=Vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},yh=/-\w/g,mn=Lo(n=>n.replace(yh,e=>e.slice(1).toUpperCase())),Th=/\B([A-Z])/g,Qi=Lo(n=>n.replace(Th,"-$1").toLowerCase()),Do=Lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),$o=Lo(n=>n?`on${Do(n)}`:""),Ci=(n,e)=>!Object.is(n,e),Yo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Af=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ah=n=>{const e=parseFloat(n);return isNaN(e)?n:e},wh=n=>{const e=St(n)?Number(n):NaN;return isNaN(e)?n:e};let Lc;const Io=()=>Lc||(Lc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ps(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=St(i)?Lh(i):Ps(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(St(n)||mt(n))return n}const Ch=/;(?![^(]*\))/g,Rh=/:([^]+)/,Ph=/\/\*[^]*?\*\//g;function Lh(n){const e={};return n.replace(Ph,"").split(Ch).forEach(t=>{if(t){const i=t.split(Rh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Fn(n){let e="";if(St(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=Fn(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Dh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ih=Vl(Dh);function wf(n){return!!n||n===""}const Cf=n=>!!(n&&n.__v_isRef===!0),ti=n=>St(n)?n:n==null?"":We(n)||mt(n)&&(n.toString===yf||!ke(n.toString))?Cf(n)?ti(n.value):JSON.stringify(n,Rf,2):String(n),Rf=(n,e)=>Cf(e)?Rf(n,e.value):Es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ko(i,r)+" =>"]=s,t),{})}:Ef(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ko(t))}:ci(e)?Ko(e):mt(e)&&!We(e)&&!Tf(e)?String(e):e,Ko=(n,e="")=>{var t;return ci(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class Uh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=jt;try{return jt=this,e()}finally{jt=t}}}on(){++this._on===1&&(this.prevScope=jt,jt=this)}off(){this._on>0&&--this._on===0&&(jt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Nh(){return jt}let _t;const jo=new WeakSet;class Pf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&jt.active&&jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jo.has(this)&&(jo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Df(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dc(this),If(this);const e=_t,t=Mn;_t=this,Mn=!0;try{return this.fn()}finally{Uf(this),_t=e,Mn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$l(e);this.deps=this.depsTail=void 0,Dc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ba(this)&&this.run()}get dirty(){return Ba(this)}}let Lf=0,er,tr;function Df(n,e=!1){if(n.flags|=8,e){n.next=tr,tr=n;return}n.next=er,er=n}function Xl(){Lf++}function ql(){if(--Lf>0)return;if(tr){let e=tr;for(tr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;er;){let e=er;for(er=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function If(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Uf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),$l(i),Fh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Ba(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Nf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Nf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ar)||(n.globalVersion=ar,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ba(n))))return;n.flags|=2;const e=n.dep,t=_t,i=Mn;_t=n,Mn=!0;try{If(n);const s=n.fn(n._value);(e.version===0||Ci(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{_t=t,Mn=i,Uf(n),n.flags&=-3}}function $l(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)$l(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Fh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Mn=!0;const Ff=[];function ri(){Ff.push(Mn),Mn=!1}function oi(){const n=Ff.pop();Mn=n===void 0?!0:n}function Dc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=_t;_t=void 0;try{e()}finally{_t=t}}}let ar=0;class Oh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!_t||!Mn||_t===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==_t)t=this.activeLink=new Oh(_t,this),_t.deps?(t.prevDep=_t.depsTail,_t.depsTail.nextDep=t,_t.depsTail=t):_t.deps=_t.depsTail=t,Of(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=_t.depsTail,t.nextDep=void 0,_t.depsTail.nextDep=t,_t.depsTail=t,_t.deps===t&&(_t.deps=i)}return t}trigger(e){this.version++,ar++,this.notify(e)}notify(e){Xl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ql()}}}function Of(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Of(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const fo=new WeakMap,Ki=Symbol(""),za=Symbol(""),lr=Symbol("");function Gt(n,e,t){if(Mn&&_t){let i=fo.get(n);i||fo.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Yl),s.map=i,s.key=t),s.track()}}function Jn(n,e,t,i,s,r){const o=fo.get(n);if(!o){ar++;return}const a=l=>{l&&l.trigger()};if(Xl(),e==="clear")o.forEach(a);else{const l=We(n),c=l&&Wl(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===lr||!ci(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(lr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ki)),Es(n)&&a(o.get(za)));break;case"delete":l||(a(o.get(Ki)),Es(n)&&a(o.get(za)));break;case"set":Es(n)&&a(o.get(Ki));break}}ql()}function Bh(n,e){const t=fo.get(n);return t&&t.get(e)}function is(n){const e=rt(n);return e===n?e:(Gt(e,"iterate",lr),pn(n)?e:e.map(Ut))}function Uo(n){return Gt(n=rt(n),"iterate",lr),n}const zh={__proto__:null,[Symbol.iterator](){return Zo(this,Symbol.iterator,Ut)},concat(...n){return is(this).concat(...n.map(e=>We(e)?is(e):e))},entries(){return Zo(this,"entries",n=>(n[1]=Ut(n[1]),n))},every(n,e){return kn(this,"every",n,e,void 0,arguments)},filter(n,e){return kn(this,"filter",n,e,t=>t.map(Ut),arguments)},find(n,e){return kn(this,"find",n,e,Ut,arguments)},findIndex(n,e){return kn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return kn(this,"findLast",n,e,Ut,arguments)},findLastIndex(n,e){return kn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return kn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Jo(this,"includes",n)},indexOf(...n){return Jo(this,"indexOf",n)},join(n){return is(this).join(n)},lastIndexOf(...n){return Jo(this,"lastIndexOf",n)},map(n,e){return kn(this,"map",n,e,void 0,arguments)},pop(){return Hs(this,"pop")},push(...n){return Hs(this,"push",n)},reduce(n,...e){return Ic(this,"reduce",n,e)},reduceRight(n,...e){return Ic(this,"reduceRight",n,e)},shift(){return Hs(this,"shift")},some(n,e){return kn(this,"some",n,e,void 0,arguments)},splice(...n){return Hs(this,"splice",n)},toReversed(){return is(this).toReversed()},toSorted(n){return is(this).toSorted(n)},toSpliced(...n){return is(this).toSpliced(...n)},unshift(...n){return Hs(this,"unshift",n)},values(){return Zo(this,"values",Ut)}};function Zo(n,e,t){const i=Uo(n),s=i[e]();return i!==n&&!pn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Hh=Array.prototype;function kn(n,e,t,i,s,r){const o=Uo(n),a=o!==n&&!pn(n),l=o[e];if(l!==Hh[e]){const d=l.apply(n,r);return a?Ut(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,Ut(d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ic(n,e,t,i){const s=Uo(n);let r=t;return s!==n&&(pn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Ut(a),l,n)}),s[e](r,...i)}function Jo(n,e,t){const i=rt(n);Gt(i,"iterate",lr);const s=i[e](...t);return(s===-1||s===!1)&&Jl(t[0])?(t[0]=rt(t[0]),i[e](...t)):s}function Hs(n,e,t=[]){ri(),Xl();const i=rt(n)[e].apply(n,t);return ql(),oi(),i}const Vh=Vl("__proto__,__v_isRef,__isVue"),Bf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ci));function Gh(n){ci(n)||(n=String(n));const e=rt(this);return Gt(e,"has",n),e.hasOwnProperty(n)}class zf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Jh:kf:r?Gf:Vf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!s){let l;if(o&&(l=zh[t]))return l;if(t==="hasOwnProperty")return Gh}const a=Reflect.get(e,t,Ct(e)?e:i);if((ci(t)?Bf.has(t):Vh(t))||(s||Gt(e,"get",t),r))return a;if(Ct(a)){const l=o&&Wl(t)?a:a.value;return s&&mt(l)?Va(l):l}return mt(a)?s?Va(a):jl(a):a}}class Hf extends zf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Ri(r);if(!pn(i)&&!Ri(i)&&(r=rt(r),i=rt(i)),!We(e)&&Ct(r)&&!Ct(i))return l||(r.value=i),!0}const o=We(e)&&Wl(t)?Number(t)<e.length:ot(e,t),a=Reflect.set(e,t,i,Ct(e)?e:s);return e===rt(s)&&(o?Ci(i,r)&&Jn(e,"set",t,i):Jn(e,"add",t,i)),a}deleteProperty(e,t){const i=ot(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Jn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ci(t)||!Bf.has(t))&&Gt(e,"has",t),i}ownKeys(e){return Gt(e,"iterate",We(e)?"length":Ki),Reflect.ownKeys(e)}}class kh extends zf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Wh=new Hf,Xh=new kh,qh=new Hf(!0);const Ha=n=>n,wr=n=>Reflect.getPrototypeOf(n);function $h(n,e,t){return function(...i){const s=this.__v_raw,r=rt(s),o=Es(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Ha:e?ho:Ut;return!e&&Gt(r,"iterate",l?za:Ki),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Cr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Yh(n,e){const t={get(s){const r=this.__v_raw,o=rt(r),a=rt(s);n||(Ci(s,a)&&Gt(o,"get",s),Gt(o,"get",a));const{has:l}=wr(o),c=e?Ha:n?ho:Ut;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Gt(rt(s),"iterate",Ki),s.size},has(s){const r=this.__v_raw,o=rt(r),a=rt(s);return n||(Ci(s,a)&&Gt(o,"has",s),Gt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=rt(a),c=e?Ha:n?ho:Ut;return!n&&Gt(l,"iterate",Ki),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return It(t,n?{add:Cr("add"),set:Cr("set"),delete:Cr("delete"),clear:Cr("clear")}:{add(s){!e&&!pn(s)&&!Ri(s)&&(s=rt(s));const r=rt(this);return wr(r).has.call(r,s)||(r.add(s),Jn(r,"add",s,s)),this},set(s,r){!e&&!pn(r)&&!Ri(r)&&(r=rt(r));const o=rt(this),{has:a,get:l}=wr(o);let c=a.call(o,s);c||(s=rt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ci(r,u)&&Jn(o,"set",s,r):Jn(o,"add",s,r),this},delete(s){const r=rt(this),{has:o,get:a}=wr(r);let l=o.call(r,s);l||(s=rt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Jn(r,"delete",s,void 0),c},clear(){const s=rt(this),r=s.size!==0,o=s.clear();return r&&Jn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=$h(s,n,e)}),t}function Kl(n,e){const t=Yh(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ot(t,s)&&s in i?t:i,s,r)}const Kh={get:Kl(!1,!1)},jh={get:Kl(!1,!0)},Zh={get:Kl(!0,!1)};const Vf=new WeakMap,Gf=new WeakMap,kf=new WeakMap,Jh=new WeakMap;function Qh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ep(n){return n.__v_skip||!Object.isExtensible(n)?0:Qh(bh(n))}function jl(n){return Ri(n)?n:Zl(n,!1,Wh,Kh,Vf)}function tp(n){return Zl(n,!1,qh,jh,Gf)}function Va(n){return Zl(n,!0,Xh,Zh,kf)}function Zl(n,e,t,i,s){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=ep(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function bs(n){return Ri(n)?bs(n.__v_raw):!!(n&&n.__v_isReactive)}function Ri(n){return!!(n&&n.__v_isReadonly)}function pn(n){return!!(n&&n.__v_isShallow)}function Jl(n){return n?!!n.__v_raw:!1}function rt(n){const e=n&&n.__v_raw;return e?rt(e):n}function np(n){return!ot(n,"__v_skip")&&Object.isExtensible(n)&&Af(n,"__v_skip",!0),n}const Ut=n=>mt(n)?jl(n):n,ho=n=>mt(n)?Va(n):n;function Ct(n){return n?n.__v_isRef===!0:!1}function nt(n){return Wf(n,!1)}function ip(n){return Wf(n,!0)}function Wf(n,e){return Ct(n)?n:new sp(n,e)}class sp{constructor(e,t){this.dep=new Yl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:rt(e),this._value=t?e:Ut(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||pn(e)||Ri(e);e=i?e:rt(e),Ci(e,t)&&(this._rawValue=e,this._value=i?e:Ut(e),this.dep.trigger())}}function At(n){return Ct(n)?n.value:n}function UE(n){return ke(n)?n():At(n)}const rp={get:(n,e,t)=>e==="__v_raw"?n:At(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ct(s)&&!Ct(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Xf(n){return bs(n)?n:new Proxy(n,rp)}class op{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Bh(rt(this._object),this._key)}}class ap{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function NE(n,e,t){return Ct(n)?n:ke(n)?new ap(n):mt(n)&&arguments.length>1?lp(n,e,t):nt(n)}function lp(n,e,t){const i=n[e];return Ct(i)?i:new op(n,e,t)}class cp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Yl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ar-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_t!==this)return Df(this,!0),!0}get value(){const e=this.dep.track();return Nf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function up(n,e,t=!1){let i,s;return ke(n)?i=n:(i=n.get,s=n.set),new cp(i,s,t)}const Rr={},po=new WeakMap;let ki;function fp(n,e=!1,t=ki){if(t){let i=po.get(t);i||po.set(t,i=[]),i.push(n)}}function dp(n,e,t=pt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=b=>s?b:pn(b)||s===!1||s===0?Qn(b,1):Qn(b);let u,d,f,p,_=!1,M=!1;if(Ct(n)?(d=()=>n.value,_=pn(n)):bs(n)?(d=()=>c(n),_=!0):We(n)?(M=!0,_=n.some(b=>bs(b)||pn(b)),d=()=>n.map(b=>{if(Ct(b))return b.value;if(bs(b))return c(b);if(ke(b))return l?l(b,2):b()})):ke(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){ri();try{f()}finally{oi()}}const b=ki;ki=u;try{return l?l(n,3,[p]):n(p)}finally{ki=b}}:d=Nn,e&&s){const b=d,I=s===!0?1/0:s;d=()=>Qn(b(),I)}const g=Nh(),h=()=>{u.stop(),g&&g.active&&kl(g.effects,u)};if(r&&e){const b=e;e=(...I)=>{b(...I),h()}}let E=M?new Array(n.length).fill(Rr):Rr;const y=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const I=u.run();if(s||_||(M?I.some((T,P)=>Ci(T,E[P])):Ci(I,E))){f&&f();const T=ki;ki=u;try{const P=[I,E===Rr?void 0:M&&E[0]===Rr?[]:E,p];E=I,l?l(e,3,P):e(...P)}finally{ki=T}}}else u.run()};return a&&a(y),u=new Pf(d),u.scheduler=o?()=>o(y,!1):y,p=b=>fp(b,!1,u),f=u.onStop=()=>{const b=po.get(u);if(b){if(l)l(b,4);else for(const I of b)I();po.delete(u)}},e?i?y(!0):E=u.run():o?o(y.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Qn(n,e=1/0,t){if(e<=0||!mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ct(n))Qn(n.value,e,t);else if(We(n))for(let i=0;i<n.length;i++)Qn(n[i],e,t);else if(Ef(n)||Es(n))n.forEach(i=>{Qn(i,e,t)});else if(Tf(n)){for(const i in n)Qn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Qn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vr(n,e,t,i){try{return i?n(...i):n()}catch(s){xr(s,e,t)}}function En(n,e,t,i){if(ke(n)){const s=vr(n,e,t,i);return s&&bf(s)&&s.catch(r=>{xr(r,e,t)}),s}if(We(n)){const s=[];for(let r=0;r<n.length;r++)s.push(En(n[r],e,t,i));return s}}function xr(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){ri(),vr(r,null,10,[n,l,c]),oi();return}}hp(n,t,s,i,o)}function hp(n,e,t,i=!0,s=!1){if(s)throw n}const Yt=[];let Rn=-1;const ys=[];let bi=null,xs=0;const qf=Promise.resolve();let mo=null;function Zt(n){const e=mo||qf;return n?e.then(this?n.bind(this):n):e}function pp(n){let e=Rn+1,t=Yt.length;for(;e<t;){const i=e+t>>>1,s=Yt[i],r=cr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Ql(n){if(!(n.flags&1)){const e=cr(n),t=Yt[Yt.length-1];!t||!(n.flags&2)&&e>=cr(t)?Yt.push(n):Yt.splice(pp(e),0,n),n.flags|=1,$f()}}function $f(){mo||(mo=qf.then(Kf))}function mp(n){We(n)?ys.push(...n):bi&&n.id===-1?bi.splice(xs+1,0,n):n.flags&1||(ys.push(n),n.flags|=1),$f()}function Uc(n,e,t=Rn+1){for(;t<Yt.length;t++){const i=Yt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Yt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yf(n){if(ys.length){const e=[...new Set(ys)].sort((t,i)=>cr(t)-cr(i));if(ys.length=0,bi){bi.push(...e);return}for(bi=e,xs=0;xs<bi.length;xs++){const t=bi[xs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}bi=null,xs=0}}const cr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Kf(n){try{for(Rn=0;Rn<Yt.length;Rn++){const e=Yt[Rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rn<Yt.length;Rn++){const e=Yt[Rn];e&&(e.flags&=-2)}Rn=-1,Yt.length=0,Yf(),mo=null,(Yt.length||ys.length)&&Kf()}}let Ft=null,jf=null;function go(n){const e=Ft;return Ft=n,jf=n&&n.type.__scopeId||null,e}function Ga(n,e=Ft,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&xo(-1);const r=go(e);let o;try{o=n(...s)}finally{go(r),i._d&&xo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function gp(n,e){if(Ft===null)return n;const t=Ho(Ft),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=pt]=e[s];r&&(ke(r)&&(r={mounted:r,updated:r}),r.deep&&Qn(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ii(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ri(),En(l,t,8,[n.el,a,n,e]),oi())}}const _p=Symbol("_vte"),Zf=n=>n.__isTeleport,Zn=Symbol("_leaveCb"),Pr=Symbol("_enterCb");function vp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fo(()=>{n.isMounted=!0}),Oo(()=>{n.isUnmounting=!0}),n}const ln=[Function,Array],Jf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},Qf=n=>{const e=n.subTree;return e.component?Qf(e.component):e},xp={name:"BaseTransition",props:Jf,setup(n,{slots:e}){const t=Td(),i=vp();return()=>{const s=e.default&&nd(e.default(),!0);if(!s||!s.length)return;const r=ed(s),o=rt(n),{mode:a}=o;if(i.isLeaving)return Qo(r);const l=Nc(r);if(!l)return Qo(r);let c=ka(l,o,i,t,d=>c=d);l.type!==kt&&ur(l,c);let u=t.subTree&&Nc(t.subTree);if(u&&u.type!==kt&&!Xi(u,l)&&Qf(t).type!==kt){let d=ka(u,o,i,t);if(ur(u,d),a==="out-in"&&l.type!==kt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Qo(r);a==="in-out"&&l.type!==kt?d.delayLeave=(f,p,_)=>{const M=td(i,u);M[String(u.key)]=u,f[Zn]=()=>{p(),f[Zn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function ed(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==kt){e=t;break}}return e}const Sp=xp;function td(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function ka(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:_,onLeaveCancelled:M,onBeforeAppear:g,onAppear:h,onAfterAppear:E,onAppearCancelled:y}=e,b=String(n.key),I=td(t,n),T=(A,U)=>{A&&En(A,i,9,U)},P=(A,U)=>{const R=U[1];T(A,U),We(A)?A.every(L=>L.length<=1)&&R():A.length<=1&&R()},x={mode:o,persisted:a,beforeEnter(A){let U=l;if(!t.isMounted)if(r)U=g||l;else return;A[Zn]&&A[Zn](!0);const R=I[b];R&&Xi(n,R)&&R.el[Zn]&&R.el[Zn](),T(U,[A])},enter(A){let U=c,R=u,L=d;if(!t.isMounted)if(r)U=h||c,R=E||u,L=y||d;else return;let X=!1;const W=A[Pr]=O=>{X||(X=!0,O?T(L,[A]):T(R,[A]),x.delayedLeave&&x.delayedLeave(),A[Pr]=void 0)};U?P(U,[A,W]):W()},leave(A,U){const R=String(n.key);if(A[Pr]&&A[Pr](!0),t.isUnmounting)return U();T(f,[A]);let L=!1;const X=A[Zn]=W=>{L||(L=!0,U(),W?T(M,[A]):T(_,[A]),A[Zn]=void 0,I[R]===n&&delete I[R])};I[R]=n,p?P(p,[A,X]):X()},clone(A){const U=ka(A,e,t,i,s);return s&&s(U),U}};return x}function Qo(n){if(Sr(n))return n=Pi(n),n.children=null,n}function Nc(n){if(!Sr(n))return Zf(n.type)&&n.children?ed(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ke(t.default))return t.default()}}function ur(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ur(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function nd(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Kt?(o.patchFlag&128&&s++,i=i.concat(nd(o.children,e,a))):(e||o.type!==kt)&&i.push(a!=null?Pi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Mp(n,e){return ke(n)?It({name:n.name},e,{setup:n}):n}function ec(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const _o=new WeakMap;function nr(n,e,t,i,s=!1){if(We(n)){n.forEach((_,M)=>nr(_,e&&(We(e)?e[M]:e),t,i,s));return}if(Ts(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&nr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ho(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===pt?a.refs={}:a.refs,d=a.setupState,f=rt(d),p=d===pt?Mf:_=>ot(f,_);if(c!=null&&c!==l){if(Fc(e),St(c))u[c]=null,p(c)&&(d[c]=null);else if(Ct(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(ke(l))vr(l,a,12,[o,u]);else{const _=St(l),M=Ct(l);if(_||M){const g=()=>{if(n.f){const h=_?p(l)?d[l]:u[l]:l.value;if(s)We(h)&&kl(h,r);else if(We(h))h.includes(r)||h.push(r);else if(_)u[l]=[r],p(l)&&(d[l]=u[l]);else{const E=[r];l.value=E,n.k&&(u[n.k]=E)}}else _?(u[l]=o,p(l)&&(d[l]=o)):M&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const h=()=>{g(),_o.delete(n)};h.id=-1,_o.set(n,h),sn(h,t)}else Fc(n),g()}}}function Fc(n){const e=_o.get(n);e&&(e.flags|=8,_o.delete(n))}const Oc=n=>n.nodeType===8;Io().requestIdleCallback;Io().cancelIdleCallback;function Ep(n,e){if(Oc(n)&&n.data==="["){let t=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Oc(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else e(n)}const Ts=n=>!!n.type.__asyncLoader;function Ui(n){ke(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:s=200,hydrate:r,timeout:o,suspensible:a=!0,onError:l}=n;let c=null,u,d=0;const f=()=>(d++,c=null,p()),p=()=>{let _;return c||(_=c=e().catch(M=>{if(M=M instanceof Error?M:new Error(String(M)),l)return new Promise((g,h)=>{l(M,()=>g(f()),()=>h(M),d+1)});throw M}).then(M=>_!==c&&c?c:(M&&(M.__esModule||M[Symbol.toStringTag]==="Module")&&(M=M.default),u=M,M)))};return Mp({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(_,M,g){let h=!1;(M.bu||(M.bu=[])).push(()=>h=!0);const E=()=>{h||g()},y=r?()=>{const b=r(E,I=>Ep(_,I));b&&(M.bum||(M.bum=[])).push(b)}:E;u?y():p().then(()=>!M.isUnmounted&&y())},get __asyncResolved(){return u},setup(){const _=Nt;if(ec(_),u)return()=>ea(u,_);const M=y=>{c=null,xr(y,_,13,!i)};if(a&&_.suspense||Ds)return p().then(y=>()=>ea(y,_)).catch(y=>(M(y),()=>i?vt(i,{error:y}):null));const g=nt(!1),h=nt(),E=nt(!!s);return s&&setTimeout(()=>{E.value=!1},s),o!=null&&setTimeout(()=>{if(!g.value&&!h.value){const y=new Error(`Async component timed out after ${o}ms.`);M(y),h.value=y}},o),p().then(()=>{g.value=!0,_.parent&&Sr(_.parent.vnode)&&_.parent.update()}).catch(y=>{M(y),h.value=y}),()=>{if(g.value&&u)return ea(u,_);if(h.value&&i)return vt(i,{error:h.value});if(t&&!E.value)return vt(t)}}})}function ea(n,e){const{ref:t,props:i,children:s,ce:r}=e.vnode,o=vt(n,i,s);return o.ref=t,o.ce=r,delete e.vnode.ce,o}const Sr=n=>n.type.__isKeepAlive;function bp(n,e){id(n,"a",e)}function yp(n,e){id(n,"da",e)}function id(n,e,t=Nt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(No(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Sr(s.parent.vnode)&&Tp(i,e,t,s),s=s.parent}}function Tp(n,e,t,i){const s=No(e,n,i,!0);sd(()=>{kl(i[e],s)},t)}function No(n,e,t=Nt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{ri();const a=Mr(t),l=En(e,t,n,o);return a(),oi(),l});return i?s.unshift(r):s.push(r),r}}const ui=n=>(e,t=Nt)=>{(!Ds||n==="sp")&&No(n,(...i)=>e(...i),t)},Ap=ui("bm"),Fo=ui("m"),wp=ui("bu"),Cp=ui("u"),Oo=ui("bum"),sd=ui("um"),Rp=ui("sp"),Pp=ui("rtg"),Lp=ui("rtc");function Dp(n,e=Nt){No("ec",n,e)}const Ip="components",rd=Symbol.for("v-ndc");function Up(n){return St(n)?Np(Ip,n,!1)||n:n||rd}function Np(n,e,t=!0,i=!1){const s=Ft||Nt;if(s){const r=s.type;{const a=Am(r,!1);if(a&&(a===e||a===mn(e)||a===Do(mn(e))))return r}const o=Bc(s[n]||r[n],e)||Bc(s.appContext[n],e);return!o&&i?r:o}}function Bc(n,e){return n&&(n[e]||n[mn(e)]||n[Do(mn(e))])}function Fp(n,e,t,i){let s;const r=t,o=We(n);if(o||St(n)){const a=o&&bs(n);let l=!1,c=!1;a&&(l=!pn(n),c=Ri(n),n=Uo(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?ho(Ut(n[u])):Ut(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(mt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function FE(n,e,t={},i,s){if(Ft.ce||Ft.parent&&Ts(Ft.parent)&&Ft.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),wt(),Ls(Kt,null,[vt("slot",t,i)],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),wt();const o=r&&od(r(t)),a=t.key||o&&o.key,l=Ls(Kt,{key:(a&&!ci(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function od(n){return n.some(e=>dr(e)?!(e.type===kt||e.type===Kt&&!od(e.children)):!0)?n:null}const Wa=n=>n?Ad(n)?Ho(n):Wa(n.parent):null,ir=It(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Wa(n.parent),$root:n=>Wa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ld(n),$forceUpdate:n=>n.f||(n.f=()=>{Ql(n.update)}),$nextTick:n=>n.n||(n.n=Zt.bind(n.proxy)),$watch:n=>sm.bind(n)}),ta=(n,e)=>n!==pt&&!n.__isScriptSetup&&ot(n,e),Op={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ta(i,e))return o[e]=1,i[e];if(s!==pt&&ot(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&ot(c,e))return o[e]=3,r[e];if(t!==pt&&ot(t,e))return o[e]=4,t[e];Xa&&(o[e]=0)}}const u=ir[e];let d,f;if(u)return e==="$attrs"&&Gt(n.attrs,"get",""),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==pt&&ot(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ot(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ta(s,e)?(s[e]=t,!0):i!==pt&&ot(i,e)?(i[e]=t,!0):ot(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r,type:o}},a){let l,c;return!!(t[a]||n!==pt&&a[0]!=="$"&&ot(n,a)||ta(e,a)||(l=r[0])&&ot(l,a)||ot(i,a)||ot(ir,a)||ot(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ot(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function zc(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Xa=!0;function Bp(n){const e=ld(n),t=n.proxy,i=n.ctx;Xa=!1,e.beforeCreate&&Hc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:_,activated:M,deactivated:g,beforeDestroy:h,beforeUnmount:E,destroyed:y,unmounted:b,render:I,renderTracked:T,renderTriggered:P,errorCaptured:x,serverPrefetch:A,expose:U,inheritAttrs:R,components:L,directives:X,filters:W}=e;if(c&&zp(c,i,null),o)for(const B in o){const J=o[B];ke(J)&&(i[B]=J.bind(t))}if(s){const B=s.call(t,t);mt(B)&&(n.data=jl(B))}if(Xa=!0,r)for(const B in r){const J=r[B],$=ke(J)?J.bind(t,t):ke(J.get)?J.get.bind(t,t):Nn,le=!ke(J)&&ke(J.set)?J.set.bind(t):Nn,ae=Mo({get:$,set:le});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>ae.value,set:be=>ae.value=be})}if(a)for(const B in a)ad(a[B],i,t,B);if(l){const B=ke(l)?l.call(t):l;Reflect.ownKeys(B).forEach(J=>{Xp(J,B[J])})}u&&Hc(u,n,"c");function H(B,J){We(J)?J.forEach($=>B($.bind(t))):J&&B(J.bind(t))}if(H(Ap,d),H(Fo,f),H(wp,p),H(Cp,_),H(bp,M),H(yp,g),H(Dp,x),H(Lp,T),H(Pp,P),H(Oo,E),H(sd,b),H(Rp,A),We(U))if(U.length){const B=n.exposed||(n.exposed={});U.forEach(J=>{Object.defineProperty(B,J,{get:()=>t[J],set:$=>t[J]=$,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===Nn&&(n.render=I),R!=null&&(n.inheritAttrs=R),L&&(n.components=L),X&&(n.directives=X),A&&ec(n)}function zp(n,e,t=Nn){We(n)&&(n=qa(n));for(const i in n){const s=n[i];let r;mt(s)?"default"in s?r=eo(s.from||i,s.default,!0):r=eo(s.from||i):r=eo(s),Ct(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Hc(n,e,t){En(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ad(n,e,t,i){let s=i.includes(".")?Sd(t,i):()=>t[i];if(St(n)){const r=e[n];ke(r)&&ws(s,r)}else if(ke(n))ws(s,n.bind(t));else if(mt(n))if(We(n))n.forEach(r=>ad(r,e,t,i));else{const r=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(r)&&ws(s,r,n)}}function ld(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>vo(l,c,o,!0)),vo(l,e,o)),mt(e)&&r.set(e,l),l}function vo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&vo(n,r,t,!0),s&&s.forEach(o=>vo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Hp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Hp={data:Vc,props:Gc,emits:Gc,methods:js,computed:js,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:js,directives:js,watch:Gp,provide:Vc,inject:Vp};function Vc(n,e){return e?n?function(){return It(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function Vp(n,e){return js(qa(n),qa(e))}function qa(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xt(n,e){return n?[...new Set([].concat(n,e))]:e}function js(n,e){return n?It(Object.create(null),n,e):e}function Gc(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:It(Object.create(null),zc(n),zc(e??{})):e}function Gp(n,e){if(!n)return e;if(!e)return n;const t=It(Object.create(null),n);for(const i in e)t[i]=Xt(n[i],e[i]);return t}function cd(){return{app:null,config:{isNativeTag:Mf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kp=0;function Wp(n,e){return function(i,s=null){ke(i)||(i=It({},i)),s!=null&&!mt(s)&&(s=null);const r=cd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:kp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Rm,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&ke(u.install)?(o.add(u),u.install(c,...d)):ke(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||vt(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Ho(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(En(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=As;As=c;try{return u()}finally{As=d}}};return c}}let As=null;function Xp(n,e){if(Nt){let t=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===t&&(t=Nt.provides=Object.create(i)),t[n]=e}}function eo(n,e,t=!1){const i=Td();if(i||As){let s=As?As._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const ud={},fd=()=>Object.create(ud),dd=n=>Object.getPrototypeOf(n)===ud;function qp(n,e,t,i=!1){const s={},r=fd();n.propsDefaults=Object.create(null),hd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:tp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function $p(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=rt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Bo(n.emitsOptions,f))continue;const p=e[f];if(l)if(ot(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const _=mn(f);s[_]=$a(l,a,_,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{hd(n,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!ot(e,d)&&((u=Qi(d))===d||!ot(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=$a(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!ot(e,d))&&(delete r[d],c=!0)}c&&Jn(n.attrs,"set","")}function hd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Qs(l))continue;const c=e[l];let u;s&&ot(s,u=mn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Bo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=rt(t),c=a||pt;for(let u=0;u<r.length;u++){const d=r[u];t[d]=$a(s,l,d,c[d],n,!ot(c,d))}}return o}function $a(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ot(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Mr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Qi(t))&&(i=!0))}return i}const Yp=new WeakMap;function pd(n,e,t=!1){const i=t?Yp:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ke(n)){const u=d=>{l=!0;const[f,p]=pd(d,e,!0);It(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return mt(n)&&i.set(n,Ms),Ms;if(We(r))for(let u=0;u<r.length;u++){const d=mn(r[u]);kc(d)&&(o[d]=pt)}else if(r)for(const u in r){const d=mn(u);if(kc(d)){const f=r[u],p=o[d]=We(f)||ke(f)?{type:f}:It({},f),_=p.type;let M=!1,g=!0;if(We(_))for(let h=0;h<_.length;++h){const E=_[h],y=ke(E)&&E.name;if(y==="Boolean"){M=!0;break}else y==="String"&&(g=!1)}else M=ke(_)&&_.name==="Boolean";p[0]=M,p[1]=g,(M||ot(p,"default"))&&a.push(d)}}const c=[o,a];return mt(n)&&i.set(n,c),c}function kc(n){return n[0]!=="$"&&!Qs(n)}const tc=n=>n==="_"||n==="_ctx"||n==="$stable",nc=n=>We(n)?n.map(Pn):[Pn(n)],Kp=(n,e,t)=>{if(e._n)return e;const i=Ga((...s)=>nc(e(...s)),t);return i._c=!1,i},md=(n,e,t)=>{const i=n._ctx;for(const s in n){if(tc(s))continue;const r=n[s];if(ke(r))e[s]=Kp(s,r,i);else if(r!=null){const o=nc(r);e[s]=()=>o}}},gd=(n,e)=>{const t=nc(e);n.slots.default=()=>t},_d=(n,e,t)=>{for(const i in e)(t||!tc(i))&&(n[i]=e[i])},jp=(n,e,t)=>{const i=n.slots=fd();if(n.vnode.shapeFlag&32){const s=e._;s?(_d(i,e,t),t&&Af(i,"_",s,!0)):md(e,i)}else e&&gd(n,e)},Zp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:_d(s,e,t):(r=!e.$stable,md(e,s)),o=e}else e&&(gd(n,e),o={default:1});if(r)for(const a in s)!tc(a)&&o[a]==null&&delete s[a]},sn=dm;function Jp(n){return Qp(n)}function Qp(n,e){const t=Io();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Nn,insertStaticContent:_}=n,M=(C,D,V,te=null,K=null,ne=null,ce=void 0,he=null,w=!!D.dynamicChildren)=>{if(C===D)return;C&&!Xi(C,D)&&(te=Se(C),be(C,K,ne,!0),C=null),D.patchFlag===-2&&(w=!1,D.dynamicChildren=null);const{type:oe,ref:ge,shapeFlag:fe}=D;switch(oe){case zo:g(C,D,V,te);break;case kt:h(C,D,V,te);break;case to:C==null&&E(D,V,te,ce);break;case Kt:L(C,D,V,te,K,ne,ce,he,w);break;default:fe&1?I(C,D,V,te,K,ne,ce,he,w):fe&6?X(C,D,V,te,K,ne,ce,he,w):(fe&64||fe&128)&&oe.process(C,D,V,te,K,ne,ce,he,w,ze)}ge!=null&&K?nr(ge,C&&C.ref,ne,D||C,!D):ge==null&&C&&C.ref!=null&&nr(C.ref,null,ne,C,!0)},g=(C,D,V,te)=>{if(C==null)i(D.el=a(D.children),V,te);else{const K=D.el=C.el;D.children!==C.children&&c(K,D.children)}},h=(C,D,V,te)=>{C==null?i(D.el=l(D.children||""),V,te):D.el=C.el},E=(C,D,V,te)=>{[C.el,C.anchor]=_(C.children,D,V,te,C.el,C.anchor)},y=({el:C,anchor:D},V,te)=>{let K;for(;C&&C!==D;)K=f(C),i(C,V,te),C=K;i(D,V,te)},b=({el:C,anchor:D})=>{let V;for(;C&&C!==D;)V=f(C),s(C),C=V;s(D)},I=(C,D,V,te,K,ne,ce,he,w)=>{D.type==="svg"?ce="svg":D.type==="math"&&(ce="mathml"),C==null?T(D,V,te,K,ne,ce,he,w):A(C,D,K,ne,ce,he,w)},T=(C,D,V,te,K,ne,ce,he)=>{let w,oe;const{props:ge,shapeFlag:fe,transition:Q,dirs:me}=C;if(w=C.el=o(C.type,ne,ge&&ge.is,ge),fe&8?u(w,C.children):fe&16&&x(C.children,w,null,te,K,na(C,ne),ce,he),me&&Ii(C,null,te,"created"),P(w,C,C.scopeId,ce,te),ge){for(const m in ge)m!=="value"&&!Qs(m)&&r(w,m,null,ge[m],ne,te);"value"in ge&&r(w,"value",null,ge.value,ne),(oe=ge.onVnodeBeforeMount)&&An(oe,te,C)}me&&Ii(C,null,te,"beforeMount");const v=em(K,Q);v&&Q.beforeEnter(w),i(w,D,V),((oe=ge&&ge.onVnodeMounted)||v||me)&&sn(()=>{oe&&An(oe,te,C),v&&Q.enter(w),me&&Ii(C,null,te,"mounted")},K)},P=(C,D,V,te,K)=>{if(V&&p(C,V),te)for(let ne=0;ne<te.length;ne++)p(C,te[ne]);if(K){let ne=K.subTree;if(D===ne||Ed(ne.type)&&(ne.ssContent===D||ne.ssFallback===D)){const ce=K.vnode;P(C,ce,ce.scopeId,ce.slotScopeIds,K.parent)}}},x=(C,D,V,te,K,ne,ce,he,w=0)=>{for(let oe=w;oe<C.length;oe++){const ge=C[oe]=he?yi(C[oe]):Pn(C[oe]);M(null,ge,D,V,te,K,ne,ce,he)}},A=(C,D,V,te,K,ne,ce)=>{const he=D.el=C.el;let{patchFlag:w,dynamicChildren:oe,dirs:ge}=D;w|=C.patchFlag&16;const fe=C.props||pt,Q=D.props||pt;let me;if(V&&Ni(V,!1),(me=Q.onVnodeBeforeUpdate)&&An(me,V,D,C),ge&&Ii(D,C,V,"beforeUpdate"),V&&Ni(V,!0),(fe.innerHTML&&Q.innerHTML==null||fe.textContent&&Q.textContent==null)&&u(he,""),oe?U(C.dynamicChildren,oe,he,V,te,na(D,K),ne):ce||J(C,D,he,null,V,te,na(D,K),ne,!1),w>0){if(w&16)R(he,fe,Q,V,K);else if(w&2&&fe.class!==Q.class&&r(he,"class",null,Q.class,K),w&4&&r(he,"style",fe.style,Q.style,K),w&8){const v=D.dynamicProps;for(let m=0;m<v.length;m++){const N=v[m],j=fe[N],se=Q[N];(se!==j||N==="value")&&r(he,N,j,se,K,V)}}w&1&&C.children!==D.children&&u(he,D.children)}else!ce&&oe==null&&R(he,fe,Q,V,K);((me=Q.onVnodeUpdated)||ge)&&sn(()=>{me&&An(me,V,D,C),ge&&Ii(D,C,V,"updated")},te)},U=(C,D,V,te,K,ne,ce)=>{for(let he=0;he<D.length;he++){const w=C[he],oe=D[he],ge=w.el&&(w.type===Kt||!Xi(w,oe)||w.shapeFlag&198)?d(w.el):V;M(w,oe,ge,null,te,K,ne,ce,!0)}},R=(C,D,V,te,K)=>{if(D!==V){if(D!==pt)for(const ne in D)!Qs(ne)&&!(ne in V)&&r(C,ne,D[ne],null,K,te);for(const ne in V){if(Qs(ne))continue;const ce=V[ne],he=D[ne];ce!==he&&ne!=="value"&&r(C,ne,he,ce,K,te)}"value"in V&&r(C,"value",D.value,V.value,K)}},L=(C,D,V,te,K,ne,ce,he,w)=>{const oe=D.el=C?C.el:a(""),ge=D.anchor=C?C.anchor:a("");let{patchFlag:fe,dynamicChildren:Q,slotScopeIds:me}=D;me&&(he=he?he.concat(me):me),C==null?(i(oe,V,te),i(ge,V,te),x(D.children||[],V,ge,K,ne,ce,he,w)):fe>0&&fe&64&&Q&&C.dynamicChildren?(U(C.dynamicChildren,Q,V,K,ne,ce,he),(D.key!=null||K&&D===K.subTree)&&vd(C,D,!0)):J(C,D,V,ge,K,ne,ce,he,w)},X=(C,D,V,te,K,ne,ce,he,w)=>{D.slotScopeIds=he,C==null?D.shapeFlag&512?K.ctx.activate(D,V,te,ce,w):W(D,V,te,K,ne,ce,w):O(C,D,w)},W=(C,D,V,te,K,ne,ce)=>{const he=C.component=Mm(C,te,K);if(Sr(C)&&(he.ctx.renderer=ze),Em(he,!1,ce),he.asyncDep){if(K&&K.registerDep(he,H,ce),!C.el){const w=he.subTree=vt(kt);h(null,w,D,V),C.placeholder=w.el}}else H(he,C,D,V,K,ne,ce)},O=(C,D,V)=>{const te=D.component=C.component;if(um(C,D,V))if(te.asyncDep&&!te.asyncResolved){B(te,D,V);return}else te.next=D,te.update();else D.el=C.el,te.vnode=D},H=(C,D,V,te,K,ne,ce)=>{const he=()=>{if(C.isMounted){let{next:fe,bu:Q,u:me,parent:v,vnode:m}=C;{const pe=xd(C);if(pe){fe&&(fe.el=m.el,B(C,fe,ce)),pe.asyncDep.then(()=>{C.isUnmounted||he()});return}}let N=fe,j;Ni(C,!1),fe?(fe.el=m.el,B(C,fe,ce)):fe=m,Q&&Yo(Q),(j=fe.props&&fe.props.onVnodeBeforeUpdate)&&An(j,v,fe,m),Ni(C,!0);const se=Xc(C),de=C.subTree;C.subTree=se,M(de,se,d(de.el),Se(de),C,K,ne),fe.el=se.el,N===null&&fm(C,se.el),me&&sn(me,K),(j=fe.props&&fe.props.onVnodeUpdated)&&sn(()=>An(j,v,fe,m),K)}else{let fe;const{el:Q,props:me}=D,{bm:v,m,parent:N,root:j,type:se}=C,de=Ts(D);Ni(C,!1),v&&Yo(v),!de&&(fe=me&&me.onVnodeBeforeMount)&&An(fe,N,D),Ni(C,!0);{j.ce&&j.ce._def.shadowRoot!==!1&&j.ce._injectChildStyle(se);const pe=C.subTree=Xc(C);M(null,pe,V,te,C,K,ne),D.el=pe.el}if(m&&sn(m,K),!de&&(fe=me&&me.onVnodeMounted)){const pe=D;sn(()=>An(fe,N,pe),K)}(D.shapeFlag&256||N&&Ts(N.vnode)&&N.vnode.shapeFlag&256)&&C.a&&sn(C.a,K),C.isMounted=!0,D=V=te=null}};C.scope.on();const w=C.effect=new Pf(he);C.scope.off();const oe=C.update=w.run.bind(w),ge=C.job=w.runIfDirty.bind(w);ge.i=C,ge.id=C.uid,w.scheduler=()=>Ql(ge),Ni(C,!0),oe()},B=(C,D,V)=>{D.component=C;const te=C.vnode.props;C.vnode=D,C.next=null,$p(C,D.props,te,V),Zp(C,D.children,V),ri(),Uc(C),oi()},J=(C,D,V,te,K,ne,ce,he,w=!1)=>{const oe=C&&C.children,ge=C?C.shapeFlag:0,fe=D.children,{patchFlag:Q,shapeFlag:me}=D;if(Q>0){if(Q&128){le(oe,fe,V,te,K,ne,ce,he,w);return}else if(Q&256){$(oe,fe,V,te,K,ne,ce,he,w);return}}me&8?(ge&16&&ee(oe,K,ne),fe!==oe&&u(V,fe)):ge&16?me&16?le(oe,fe,V,te,K,ne,ce,he,w):ee(oe,K,ne,!0):(ge&8&&u(V,""),me&16&&x(fe,V,te,K,ne,ce,he,w))},$=(C,D,V,te,K,ne,ce,he,w)=>{C=C||Ms,D=D||Ms;const oe=C.length,ge=D.length,fe=Math.min(oe,ge);let Q;for(Q=0;Q<fe;Q++){const me=D[Q]=w?yi(D[Q]):Pn(D[Q]);M(C[Q],me,V,null,K,ne,ce,he,w)}oe>ge?ee(C,K,ne,!0,!1,fe):x(D,V,te,K,ne,ce,he,w,fe)},le=(C,D,V,te,K,ne,ce,he,w)=>{let oe=0;const ge=D.length;let fe=C.length-1,Q=ge-1;for(;oe<=fe&&oe<=Q;){const me=C[oe],v=D[oe]=w?yi(D[oe]):Pn(D[oe]);if(Xi(me,v))M(me,v,V,null,K,ne,ce,he,w);else break;oe++}for(;oe<=fe&&oe<=Q;){const me=C[fe],v=D[Q]=w?yi(D[Q]):Pn(D[Q]);if(Xi(me,v))M(me,v,V,null,K,ne,ce,he,w);else break;fe--,Q--}if(oe>fe){if(oe<=Q){const me=Q+1,v=me<ge?D[me].el:te;for(;oe<=Q;)M(null,D[oe]=w?yi(D[oe]):Pn(D[oe]),V,v,K,ne,ce,he,w),oe++}}else if(oe>Q)for(;oe<=fe;)be(C[oe],K,ne,!0),oe++;else{const me=oe,v=oe,m=new Map;for(oe=v;oe<=Q;oe++){const xe=D[oe]=w?yi(D[oe]):Pn(D[oe]);xe.key!=null&&m.set(xe.key,oe)}let N,j=0;const se=Q-v+1;let de=!1,pe=0;const Z=new Array(se);for(oe=0;oe<se;oe++)Z[oe]=0;for(oe=me;oe<=fe;oe++){const xe=C[oe];if(j>=se){be(xe,K,ne,!0);continue}let Te;if(xe.key!=null)Te=m.get(xe.key);else for(N=v;N<=Q;N++)if(Z[N-v]===0&&Xi(xe,D[N])){Te=N;break}Te===void 0?be(xe,K,ne,!0):(Z[Te-v]=oe+1,Te>=pe?pe=Te:de=!0,M(xe,D[Te],V,null,K,ne,ce,he,w),j++)}const re=de?tm(Z):Ms;for(N=re.length-1,oe=se-1;oe>=0;oe--){const xe=v+oe,Te=D[xe],Me=D[xe+1],ve=xe+1<ge?Me.el||Me.placeholder:te;Z[oe]===0?M(null,Te,V,ve,K,ne,ce,he,w):de&&(N<0||oe!==re[N]?ae(Te,V,ve,2):N--)}}},ae=(C,D,V,te,K=null)=>{const{el:ne,type:ce,transition:he,children:w,shapeFlag:oe}=C;if(oe&6){ae(C.component.subTree,D,V,te);return}if(oe&128){C.suspense.move(D,V,te);return}if(oe&64){ce.move(C,D,V,ze);return}if(ce===Kt){i(ne,D,V);for(let fe=0;fe<w.length;fe++)ae(w[fe],D,V,te);i(C.anchor,D,V);return}if(ce===to){y(C,D,V);return}if(te!==2&&oe&1&&he)if(te===0)he.beforeEnter(ne),i(ne,D,V),sn(()=>he.enter(ne),K);else{const{leave:fe,delayLeave:Q,afterLeave:me}=he,v=()=>{C.ctx.isUnmounted?s(ne):i(ne,D,V)},m=()=>{ne._isLeaving&&ne[Zn](!0),fe(ne,()=>{v(),me&&me()})};Q?Q(ne,v,m):m()}else i(ne,D,V)},be=(C,D,V,te=!1,K=!1)=>{const{type:ne,props:ce,ref:he,children:w,dynamicChildren:oe,shapeFlag:ge,patchFlag:fe,dirs:Q,cacheIndex:me}=C;if(fe===-2&&(K=!1),he!=null&&(ri(),nr(he,null,V,C,!0),oi()),me!=null&&(D.renderCache[me]=void 0),ge&256){D.ctx.deactivate(C);return}const v=ge&1&&Q,m=!Ts(C);let N;if(m&&(N=ce&&ce.onVnodeBeforeUnmount)&&An(N,D,C),ge&6)Ve(C.component,V,te);else{if(ge&128){C.suspense.unmount(V,te);return}v&&Ii(C,null,D,"beforeUnmount"),ge&64?C.type.remove(C,D,V,ze,te):oe&&!oe.hasOnce&&(ne!==Kt||fe>0&&fe&64)?ee(oe,D,V,!1,!0):(ne===Kt&&fe&384||!K&&ge&16)&&ee(w,D,V),te&&Fe(C)}(m&&(N=ce&&ce.onVnodeUnmounted)||v)&&sn(()=>{N&&An(N,D,C),v&&Ii(C,null,D,"unmounted")},V)},Fe=C=>{const{type:D,el:V,anchor:te,transition:K}=C;if(D===Kt){Xe(V,te);return}if(D===to){b(C);return}const ne=()=>{s(V),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(C.shapeFlag&1&&K&&!K.persisted){const{leave:ce,delayLeave:he}=K,w=()=>ce(V,ne);he?he(C.el,ne,w):w()}else ne()},Xe=(C,D)=>{let V;for(;C!==D;)V=f(C),s(C),C=V;s(D)},Ve=(C,D,V)=>{const{bum:te,scope:K,job:ne,subTree:ce,um:he,m:w,a:oe}=C;Wc(w),Wc(oe),te&&Yo(te),K.stop(),ne&&(ne.flags|=8,be(ce,C,D,V)),he&&sn(he,D),sn(()=>{C.isUnmounted=!0},D)},ee=(C,D,V,te=!1,K=!1,ne=0)=>{for(let ce=ne;ce<C.length;ce++)be(C[ce],D,V,te,K)},Se=C=>{if(C.shapeFlag&6)return Se(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const D=f(C.anchor||C.el),V=D&&D[_p];return V?f(V):D};let _e=!1;const Be=(C,D,V)=>{C==null?D._vnode&&be(D._vnode,null,null,!0):M(D._vnode||null,C,D,null,null,null,V),D._vnode=C,_e||(_e=!0,Uc(),Yf(),_e=!1)},ze={p:M,um:be,m:ae,r:Fe,mt:W,mc:x,pc:J,pbc:U,n:Se,o:n};return{render:Be,hydrate:void 0,createApp:Wp(Be)}}function na({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ni({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function em(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function vd(n,e,t=!1){const i=n.children,s=e.children;if(We(i)&&We(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=yi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&vd(o,a)),a.type===zo&&a.patchFlag!==-1&&(a.el=o.el),a.type===kt&&!a.el&&(a.el=o.el)}}function tm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function xd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:xd(e)}function Wc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const nm=Symbol.for("v-scx"),im=()=>eo(nm);function OE(n,e){return ic(n,null,e)}function ws(n,e,t){return ic(n,e,t)}function ic(n,e,t=pt){const{immediate:i,deep:s,flush:r,once:o}=t,a=It({},t),l=e&&i||!e&&r!=="post";let c;if(Ds){if(r==="sync"){const p=im();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Nn,p.resume=Nn,p.pause=Nn,p}}const u=Nt;a.call=(p,_,M)=>En(p,u,_,M);let d=!1;r==="post"?a.scheduler=p=>{sn(p,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(p,_)=>{_?p():Ql(p)}),a.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=dp(n,e,a);return Ds&&(c?c.push(f):l&&f()),f}function sm(n,e,t){const i=this.proxy,s=St(n)?n.includes(".")?Sd(i,n):()=>i[n]:n.bind(i,i);let r;ke(e)?r=e:(r=e.handler,t=e);const o=Mr(this),a=ic(s,r.bind(i),t);return o(),a}function Sd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const rm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${mn(e)}Modifiers`]||n[`${Qi(e)}Modifiers`];function om(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||pt;let s=t;const r=e.startsWith("update:"),o=r&&rm(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>St(u)?u.trim():u)),o.number&&(s=t.map(Ah)));let a,l=i[a=$o(e)]||i[a=$o(mn(e))];!l&&r&&(l=i[a=$o(Qi(e))]),l&&En(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,En(c,n,6,s)}}const am=new WeakMap;function Md(n,e,t=!1){const i=t?am:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ke(n)){const l=c=>{const u=Md(c,e,!0);u&&(a=!0,It(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(mt(n)&&i.set(n,null),null):(We(r)?r.forEach(l=>o[l]=null):It(o,r),mt(n)&&i.set(n,o),o)}function Bo(n,e){return!n||!Ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(n,e[0].toLowerCase()+e.slice(1))||ot(n,Qi(e))||ot(n,e))}function Xc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:_,inheritAttrs:M}=n,g=go(n);let h,E;try{if(t.shapeFlag&4){const b=s||i,I=b;h=Pn(c.call(I,b,u,d,p,f,_)),E=a}else{const b=e;h=Pn(b.length>1?b(d,{attrs:a,slots:o,emit:l}):b(d,null)),E=e.props?a:lm(a)}}catch(b){sr.length=0,xr(b,n,1),h=vt(kt)}let y=h;if(E&&M!==!1){const b=Object.keys(E),{shapeFlag:I}=y;b.length&&I&7&&(r&&b.some(Gl)&&(E=cm(E,r)),y=Pi(y,E,!1,!0))}return t.dirs&&(y=Pi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&ur(y,t.transition),h=y,go(g),h}const lm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ro(t))&&((e||(e={}))[t]=n[t]);return e},cm=(n,e)=>{const t={};for(const i in n)(!Gl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function um(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?qc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!Bo(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?qc(i,o,c):!0:!!o;return!1}function qc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Bo(t,r))return!0}return!1}function fm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ed=n=>n.__isSuspense;function dm(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):mp(n)}const Kt=Symbol.for("v-fgt"),zo=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),to=Symbol.for("v-stc"),sr=[];let rn=null;function wt(n=!1){sr.push(rn=n?null:[])}function hm(){sr.pop(),rn=sr[sr.length-1]||null}let fr=1;function xo(n,e=!1){fr+=n,n<0&&rn&&e&&(rn.hasOnce=!0)}function bd(n){return n.dynamicChildren=fr>0?rn||Ms:null,hm(),fr>0&&rn&&rn.push(n),n}function Jt(n,e,t,i,s,r){return bd(Ie(n,e,t,i,s,r,!0))}function Ls(n,e,t,i,s){return bd(vt(n,e,t,i,s,!0))}function dr(n){return n?n.__v_isVNode===!0:!1}function Xi(n,e){return n.type===e.type&&n.key===e.key}const yd=({key:n})=>n??null,no=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Ct(n)||ke(n)?{i:Ft,r:n,k:e,f:!!t}:n:null);function Ie(n,e=null,t=null,i=0,s=null,r=n===Kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&yd(e),ref:e&&no(e),scopeId:jf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ft};return a?(sc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),fr>0&&!o&&rn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&rn.push(l),l}const vt=pm;function pm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===rd)&&(n=kt),dr(n)){const a=Pi(n,e,!0);return t&&sc(a,t),fr>0&&!r&&rn&&(a.shapeFlag&6?rn[rn.indexOf(n)]=a:rn.push(a)),a.patchFlag=-2,a}if(wm(n)&&(n=n.__vccOpts),e){e=mm(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=Fn(a)),mt(l)&&(Jl(l)&&!We(l)&&(l=It({},l)),e.style=Ps(l))}const o=St(n)?1:Ed(n)?128:Zf(n)?64:mt(n)?4:ke(n)?2:0;return Ie(n,e,t,i,s,o,r,!0)}function mm(n){return n?Jl(n)||dd(n)?It({},n):n:null}function Pi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?vm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&yd(c),ref:e&&e.ref?t&&r?We(r)?r.concat(no(e)):[r,no(e)]:no(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Kt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Pi(n.ssContent),ssFallback:n.ssFallback&&Pi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ur(u,l.clone(u)),u}function gm(n=" ",e=0){return vt(zo,null,n,e)}function _m(n,e){const t=vt(to,null,n);return t.staticCount=e,t}function Ei(n="",e=!1){return e?(wt(),Ls(kt,null,n)):vt(kt,null,n)}function Pn(n){return n==null||typeof n=="boolean"?vt(kt):We(n)?vt(Kt,null,n.slice()):dr(n)?yi(n):vt(zo,null,String(n))}function yi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Pi(n)}function sc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),sc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!dd(e)?e._ctx=Ft:s===3&&Ft&&(Ft.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:Ft},t=32):(e=String(e),i&64?(t=16,e=[gm(e)]):t=8);n.children=e,n.shapeFlag|=t}function vm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Fn([e.class,i.class]));else if(s==="style")e.style=Ps([e.style,i.style]);else if(Ro(s)){const r=e[s],o=i[s];o&&r!==o&&!(We(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function An(n,e,t,i=null){En(n,e,7,[t,i])}const xm=cd();let Sm=0;function Mm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||xm,r={uid:Sm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Uh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pd(i,s),emitsOptions:Md(i,s),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=om.bind(null,r),n.ce&&n.ce(r),r}let Nt=null;const Td=()=>Nt||Ft;let So,Ya;{const n=Io(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};So=e("__VUE_INSTANCE_SETTERS__",t=>Nt=t),Ya=e("__VUE_SSR_SETTERS__",t=>Ds=t)}const Mr=n=>{const e=Nt;return So(n),n.scope.on(),()=>{n.scope.off(),So(e)}},$c=()=>{Nt&&Nt.scope.off(),So(null)};function Ad(n){return n.vnode.shapeFlag&4}let Ds=!1;function Em(n,e=!1,t=!1){e&&Ya(e);const{props:i,children:s}=n.vnode,r=Ad(n);qp(n,i,r,e),jp(n,s,t||e);const o=r?bm(n,e):void 0;return e&&Ya(!1),o}function bm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Op);const{setup:i}=t;if(i){ri();const s=n.setupContext=i.length>1?Tm(n):null,r=Mr(n),o=vr(i,n,0,[n.props,s]),a=bf(o);if(oi(),r(),(a||n.sp)&&!Ts(n)&&ec(n),a){if(o.then($c,$c),e)return o.then(l=>{Yc(n,l)}).catch(l=>{xr(l,n,0)});n.asyncDep=o}else Yc(n,o)}else wd(n)}function Yc(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=Xf(e)),wd(n)}function wd(n,e,t){const i=n.type;n.render||(n.render=i.render||Nn);{const s=Mr(n);ri();try{Bp(n)}finally{oi(),s()}}}const ym={get(n,e){return Gt(n,"get",""),n[e]}};function Tm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,ym),slots:n.slots,emit:n.emit,expose:e}}function Ho(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Xf(np(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ir)return ir[t](n)},has(e,t){return t in e||t in ir}})):n.proxy}function Am(n,e=!0){return ke(n)?n.displayName||n.name:n.name||e&&n.__name}function wm(n){return ke(n)&&"__vccOpts"in n}const Mo=(n,e)=>up(n,e,Ds);function Cm(n,e,t){try{xo(-1);const i=arguments.length;return i===2?mt(e)&&!We(e)?dr(e)?vt(n,null,[e]):vt(n,e):vt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&dr(t)&&(t=[t]),vt(n,e,t))}finally{xo(1)}}const Rm="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ka;const Kc=typeof window<"u"&&window.trustedTypes;if(Kc)try{Ka=Kc.createPolicy("vue",{createHTML:n=>n})}catch{}const Cd=Ka?n=>Ka.createHTML(n):n=>n,Pm="http://www.w3.org/2000/svg",Lm="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,jc=jn&&jn.createElement("template"),Dm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?jn.createElementNS(Pm,n):e==="mathml"?jn.createElementNS(Lm,n):t?jn.createElement(n,{is:t}):jn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>jn.createTextNode(n),createComment:n=>jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{jc.innerHTML=Cd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=jc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},mi="transition",Vs="animation",hr=Symbol("_vtc"),Rd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Im=It({},Jf,Rd),Um=n=>(n.displayName="Transition",n.props=Im,n),Zc=Um((n,{slots:e})=>Cm(Sp,Nm(n),e)),Fi=(n,e=[])=>{We(n)?n.forEach(t=>t(...e)):n&&n(...e)},Jc=n=>n?We(n)?n.some(e=>e.length>1):n.length>1:!1;function Nm(n){const e={};for(const L in n)L in Rd||(e[L]=n[L]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=Fm(s),M=_&&_[0],g=_&&_[1],{onBeforeEnter:h,onEnter:E,onEnterCancelled:y,onLeave:b,onLeaveCancelled:I,onBeforeAppear:T=h,onAppear:P=E,onAppearCancelled:x=y}=e,A=(L,X,W,O)=>{L._enterCancelled=O,Oi(L,X?u:a),Oi(L,X?c:o),W&&W()},U=(L,X)=>{L._isLeaving=!1,Oi(L,d),Oi(L,p),Oi(L,f),X&&X()},R=L=>(X,W)=>{const O=L?P:E,H=()=>A(X,L,W);Fi(O,[X,H]),Qc(()=>{Oi(X,L?l:r),Wn(X,L?u:a),Jc(O)||eu(X,i,M,H)})};return It(e,{onBeforeEnter(L){Fi(h,[L]),Wn(L,r),Wn(L,o)},onBeforeAppear(L){Fi(T,[L]),Wn(L,l),Wn(L,c)},onEnter:R(!1),onAppear:R(!0),onLeave(L,X){L._isLeaving=!0;const W=()=>U(L,X);Wn(L,d),L._enterCancelled?(Wn(L,f),iu(L)):(iu(L),Wn(L,f)),Qc(()=>{L._isLeaving&&(Oi(L,d),Wn(L,p),Jc(b)||eu(L,i,g,W))}),Fi(b,[L,W])},onEnterCancelled(L){A(L,!1,void 0,!0),Fi(y,[L])},onAppearCancelled(L){A(L,!0,void 0,!0),Fi(x,[L])},onLeaveCancelled(L){U(L),Fi(I,[L])}})}function Fm(n){if(n==null)return null;if(mt(n))return[ia(n.enter),ia(n.leave)];{const e=ia(n);return[e,e]}}function ia(n){return wh(n)}function Wn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[hr]||(n[hr]=new Set)).add(e)}function Oi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[hr];t&&(t.delete(e),t.size||(n[hr]=void 0))}function Qc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Om=0;function eu(n,e,t,i){const s=n._endId=++Om,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Bm(n,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{n.removeEventListener(c,f),r()},f=p=>{p.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function Bm(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${mi}Delay`),r=i(`${mi}Duration`),o=tu(s,r),a=i(`${Vs}Delay`),l=i(`${Vs}Duration`),c=tu(a,l);let u=null,d=0,f=0;e===mi?o>0&&(u=mi,d=o,f=r.length):e===Vs?c>0&&(u=Vs,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?mi:Vs:null,f=u?u===mi?r.length:l.length:0);const p=u===mi&&/\b(?:transform|all)(?:,|$)/.test(i(`${mi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function tu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>nu(t)+nu(n[i])))}function nu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function iu(n){return(n?n.ownerDocument:document).body.offsetHeight}function zm(n,e,t){const i=n[hr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Eo=Symbol("_vod"),Pd=Symbol("_vsh"),Hm={name:"show",beforeMount(n,{value:e},{transition:t}){n[Eo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Gs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Gs(n,!0),i.enter(n)):i.leave(n,()=>{Gs(n,!1)}):Gs(n,e))},beforeUnmount(n,{value:e}){Gs(n,e)}};function Gs(n,e){n.style.display=e?n[Eo]:"none",n[Pd]=!e}const Vm=Symbol(""),Gm=/(?:^|;)\s*display\s*:/;function km(n,e,t){const i=n.style,s=St(t);let r=!1;if(t&&!s){if(e)if(St(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&io(i,a,"")}else for(const o in e)t[o]==null&&io(i,o,"");for(const o in t)o==="display"&&(r=!0),io(i,o,t[o])}else if(s){if(e!==t){const o=i[Vm];o&&(t+=";"+o),i.cssText=t,r=Gm.test(t)}}else e&&n.removeAttribute("style");Eo in n&&(n[Eo]=r?i.display:"",n[Pd]&&(i.display="none"))}const su=/\s*!important$/;function io(n,e,t){if(We(t))t.forEach(i=>io(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Wm(n,e);su.test(t)?n.setProperty(Qi(i),t.replace(su,""),"important"):n[i]=t}}const ru=["Webkit","Moz","ms"],sa={};function Wm(n,e){const t=sa[e];if(t)return t;let i=mn(e);if(i!=="filter"&&i in n)return sa[e]=i;i=Do(i);for(let s=0;s<ru.length;s++){const r=ru[s]+i;if(r in n)return sa[e]=r}return e}const ou="http://www.w3.org/1999/xlink";function au(n,e,t,i,s,r=Ih(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ou,e.slice(6,e.length)):n.setAttributeNS(ou,e,t):t==null||r&&!wf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ci(t)?String(t):t)}function lu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Cd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=wf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Xm(n,e,t,i){n.addEventListener(e,t,i)}function qm(n,e,t,i){n.removeEventListener(e,t,i)}const cu=Symbol("_vei");function $m(n,e,t,i,s=null){const r=n[cu]||(n[cu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Ym(e);if(i){const c=r[e]=Zm(i,s);Xm(n,a,c,l)}else o&&(qm(n,a,o,l),r[e]=void 0)}}const uu=/(?:Once|Passive|Capture)$/;function Ym(n){let e;if(uu.test(n)){e={};let i;for(;i=n.match(uu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Qi(n.slice(2)),e]}let ra=0;const Km=Promise.resolve(),jm=()=>ra||(Km.then(()=>ra=0),ra=Date.now());function Zm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;En(Jm(i,t.value),e,5,[i])};return t.value=n,t.attached=jm(),t}function Jm(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const fu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Qm=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?zm(n,i,o):e==="style"?km(n,t,i):Ro(e)?Gl(e)||$m(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eg(n,e,i,o))?(lu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&au(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!St(i))?lu(n,mn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),au(n,e,i,o))};function eg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&fu(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return fu(e)&&St(t)?!1:e in n}const tg=["ctrl","shift","alt","meta"],ng={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>tg.some(t=>n[`${t}Key`]&&!e.includes(t))},un=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=ng[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},ig=It({patchProp:Qm},Dm);let du;function sg(){return du||(du=Jp(ig))}const rg=((...n)=>{const e=sg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=ag(i);if(!s)return;const r=e._component;!ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,og(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function og(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ag(n){return St(n)?document.querySelector(n):n}const lg=["innerHTML"],cg={__name:"TerminalOutput",setup(n,{expose:e}){const t=nt(""),i=nt(null);function s(o){t.value+=o,i.value&&(i.value.scrollTop=i.value.scrollHeight)}function r(){t.value="",i.value&&(i.value.scrollTop=0)}return e({appendHtml:s,clear:r,container:i}),(o,a)=>(wt(),Jt("div",{ref_key:"container",ref:i,class:"flex-grow overflow-y-auto pr-2 terminal-output",innerHTML:t.value},null,8,lg))}},ug=["id"],fg={class:"accent-warm text-xs sm:text-sm md:text-base whitespace-nowrap"},dg={class:"relative ml-2 flex-grow h-6"},hg={class:"absolute inset-0 flex items-center whitespace-pre"},pg={id:"input-text",class:"text-xs sm:text-sm md:text-base"},mg={class:"text-white/20"},gg=["value"],_g={__name:"TerminalInput",props:{modelValue:{type:String,default:""},isFocused:{type:Boolean,default:!0},inputLineId:{type:String,default:"input-line"},suggestionRemainder:{type:String,default:""},promptPath:{type:String,default:"~"}},emits:["update:modelValue","keydown","input"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=nt(null),o=nt(null);function a(){Zt(()=>{r.value&&r.value.focus()})}e({focus:a,inputRefLocal:r,inputLineRef:o});function l(u){s("update:modelValue",u.target.value),s("input",u)}function c(u){s("keydown",u)}return ws(()=>i.modelValue,async()=>{i.isFocused&&(await Zt(),r.value&&r.value.value!==i.modelValue&&(r.value.value=i.modelValue))}),Zt(()=>{i.isFocused&&a()}),(u,d)=>(wt(),Jt("div",{ref_key:"inputLineRef",ref:o,id:n.inputLineId,class:Fn(["flex items-center mt-2 flex-shrink-0 transition-all duration-200",n.isFocused?"is-focused":""])},[d[1]||(d[1]=Ie("span",{class:"accent-teal font-bold text-xs sm:text-sm md:text-base whitespace-nowrap"},"ismael@leosoftware",-1)),d[2]||(d[2]=Ie("span",{class:"text-white/70 text-xs sm:text-sm md:text-base"},":",-1)),Ie("span",fg,ti(n.promptPath),1),d[3]||(d[3]=Ie("span",{class:"text-white/70 text-xs sm:text-sm md:text-base"},"$",-1)),Ie("div",dg,[Ie("div",hg,[Ie("span",pg,ti(n.modelValue),1),d[0]||(d[0]=Ie("span",{class:"bg-white w-2 h-5 blink"},null,-1)),Ie("span",mg,ti(n.suggestionRemainder),1)]),Ie("input",{ref_key:"inputRefLocal",ref:r,id:"command-input",type:"text",class:"absolute inset-0 bg-transparent border-none text-transparent w-full outline-none caret-transparent text-xs sm:text-sm md:text-base",value:n.modelValue,onInput:l,onKeydown:c,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",autofocus:""},null,40,gg)])],10,ug))}},vg="modulepreload",xg=function(n,e){return new URL(n,e).href},hu={},Bi=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=c(t.map(u=>{if(u=xg(u,i),u in hu)return;hu[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(i)for(let _=o.length-1;_>=0;_--){const M=o[_];if(M.href===u&&(!d||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":vg,d||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((_,M)=>{p.addEventListener("load",_),p.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},Sg={class:"bg-white/[3%] rounded-t-[24px] p-4 flex justify-between items-center border-b border-white/[15%] shrink-0 z-20"},Mg=["innerHTML"],Eg={key:1,class:"flex items-center justify-center py-10"},bg={__name:"Modal",props:{modalHidden:{type:Boolean,default:!0},title:{type:String,default:""},componentName:{type:String,default:""},currentLang:{type:String,default:"en"}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,s=()=>i("close"),r=ip(null),o={about:Ui(()=>Bi(()=>import("./AboutContent-Du89jMoT.js"),[],import.meta.url)),education:Ui(()=>Bi(()=>import("./EducationContent-CP1FnvZh.js"),[],import.meta.url)),experience:Ui(()=>Bi(()=>import("./ExperienceContent-J5hvVnzA.js"),[],import.meta.url)),skills:Ui(()=>Bi(()=>import("./SkillsContent-GvbMLG_h.js"),[],import.meta.url)),projects:Ui(()=>Bi(()=>import("./ProjectsContent-D9vDOcQw.js"),[],import.meta.url)),contact:Ui(()=>Bi(()=>import("./ContactContent-Byo_hx5q.js"),[],import.meta.url)),cv:Ui(()=>Bi(()=>import("./CvContent-Cldlt5gS.js"),__vite__mapDeps([0,1]),import.meta.url))},a=()=>{const l=document.querySelectorAll("#modal-content .grid > div");l.length&&l.forEach(c=>{c.style.transformStyle="preserve-3d",c.style.willChange="transform",c.onmousemove=u=>{const d=c.getBoundingClientRect(),f=u.clientX-d.left,p=u.clientY-d.top,_=d.width/2,M=d.height/2,g=(p-M)/M*-6,h=(f-_)/_*6;c.style.transform=`perspective(1000px) scale(1.01) rotateX(${g}deg) rotateY(${h}deg)`,c.style.transition="transform 0.1s ease-out, box-shadow 0.1s ease-out",c.style.boxShadow="0 10px 30px rgba(74, 222, 128, 0.12)",c.style.zIndex="10"},c.onmouseleave=()=>{c.style.transform="perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)",c.style.transition="transform 0.5s ease-out, box-shadow 0.5s ease-out",c.style.boxShadow="",c.style.zIndex="1"}})};return ws(()=>t.componentName,l=>{r.value=l&&o[l]?o[l]:null}),ws([()=>t.modalHidden,r],async([l,c])=>{!l&&c&&(await Zt(),window.lucide&&window.lucide.createIcons(),setTimeout(a,100))}),(l,c)=>(wt(),Jt("div",{id:"modal-window",class:Fn(["fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300 p-4",n.modalHidden?"opacity-0 pointer-events-none":"opacity-100"]),onClick:un(s,["self"])},[Ie("div",{id:"modal-container",class:Fn(["glass-panel p-0 text-white flex flex-col w-full max-w-3xl max-h-[90vh] sm:max-h-[85vh] mx-2 sm:mx-4 rounded-[24px] transition-all duration-300",n.modalHidden?"scale-95":"scale-100"])},[Ie("div",Sg,[Ie("h2",{id:"modal-title",class:"text-lg font-bold flex items-center heading-gradient",innerHTML:n.title},null,8,Mg),Ie("button",{id:"modal-close-btn",class:"text-white/40 hover:text-white transition-colors",onClick:s},[...c[0]||(c[0]=[Ie("i",{"data-lucide":"x",class:"w-6 h-6"},null,-1)])])]),Ie("div",{id:"modal-content",class:Fn(["flex-grow overflow-y-auto relative custom-scrollbar",n.componentName==="cv"?"p-0":"p-4 sm:p-6"])},[r.value?(wt(),Ls(Up(r.value),{key:0,lang:n.currentLang},null,8,["lang"])):n.modalHidden?Ei("",!0):(wt(),Jt("div",Eg,[...c[1]||(c[1]=[Ie("p",{class:"text-white/60 animate-pulse font-mono"}," Initializing module... ",-1)])]))],2)],2)],2))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="184",yg=0,pu=1,Tg=2,so=1,Ag=2,Zs=3,Li=0,Qt=1,Dn=2,ni=0,Cs=1,mu=2,gu=3,_u=4,wg=5,qi=100,Cg=101,Rg=102,Pg=103,Lg=104,Dg=200,Ig=201,Ug=202,Ng=203,ja=204,Za=205,Fg=206,Og=207,Bg=208,zg=209,Hg=210,Vg=211,Gg=212,kg=213,Wg=214,Ja=0,Qa=1,el=2,Is=3,tl=4,nl=5,il=6,sl=7,Ld=0,Xg=1,qg=2,On=0,Dd=1,Id=2,Ud=3,Nd=4,Fd=5,Od=6,Bd=7,zd=300,ji=301,Us=302,oa=303,aa=304,Vo=306,rl=1e3,ei=1001,ol=1002,Ot=1003,$g=1004,Lr=1005,Bt=1006,la=1007,Ai=1008,hn=1009,Hd=1010,Vd=1011,pr=1012,oc=1013,Hn=1014,In=1015,ai=1016,ac=1017,lc=1018,mr=1020,Gd=35902,kd=35899,Wd=1021,Xd=1022,Sn=1023,li=1026,Yi=1027,qd=1028,cc=1029,Zi=1030,uc=1031,fc=1033,ro=33776,oo=33777,ao=33778,lo=33779,al=35840,ll=35841,cl=35842,ul=35843,fl=36196,dl=37492,hl=37496,pl=37488,ml=37489,bo=37490,gl=37491,_l=37808,vl=37809,xl=37810,Sl=37811,Ml=37812,El=37813,bl=37814,yl=37815,Tl=37816,Al=37817,wl=37818,Cl=37819,Rl=37820,Pl=37821,Ll=36492,Dl=36494,Il=36495,Ul=36283,Nl=36284,yo=36285,Fl=36286,Yg=3200,vu=0,Kg=1,Ti="",fn="srgb",To="srgb-linear",Ao="linear",at="srgb",ss=7680,xu=519,jg=512,Zg=513,Jg=514,dc=515,Qg=516,e_=517,hc=518,t_=519,Su=35044,Mu="300 es",Un=2e3,wo=2001;function n_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function i_(){const n=gr("canvas");return n.style.display="block",n}const Eu={};function bu(...n){const e="THREE."+n.shift()}function $d(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=$d(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace}}function it(...n){n=$d(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace}}function Ol(...n){const e=n.join(" ");e in Eu||(Eu[e]=!0,Ge(...n))}function s_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const r_={[Ja]:Qa,[el]:il,[tl]:sl,[Is]:nl,[Qa]:Ja,[il]:el,[sl]:tl,[nl]:Is};class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yu=1234567;const rr=Math.PI/180,_r=180/Math.PI;function Os(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function pc(n,e){return(n%e+e)%e}function o_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function a_(n,e,t){return n!==e?(t-n)/(e-n):0}function or(n,e,t){return(1-t)*n+t*e}function l_(n,e,t,i){return or(n,e,1-Math.exp(-t*i))}function c_(n,e=1){return e-Math.abs(pc(n,e*2)-e)}function u_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function f_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function d_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function h_(n,e){return n+Math.random()*(e-n)}function p_(n){return n*(.5-Math.random())}function m_(n){n!==void 0&&(yu=n);let e=yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g_(n){return n*rr}function __(n){return n*_r}function v_(n){return(n&n-1)===0&&n!==0}function x_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function S_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function M_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ss(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const E_={DEG2RAD:rr,RAD2DEG:_r,generateUUID:Os,clamp:Qe,euclideanModulo:pc,mapLinear:o_,inverseLerp:a_,lerp:or,damp:l_,pingpong:c_,smoothstep:u_,smootherstep:f_,randInt:d_,randFloat:h_,randFloatSpread:p_,seededRandom:m_,degToRad:g_,radToDeg:__,isPowerOfTwo:v_,ceilPowerOfTwo:x_,floorPowerOfTwo:S_,setQuaternionFromProperEuler:M_,normalize:qt,denormalize:Ss},vc=class vc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vc.prototype.isVector2=!0;let ft=vc;class Bs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],p=r[o+1],_=r[o+2],M=r[o+3];if(d!==M||l!==f||c!==p||u!==_){let g=l*f+c*p+u*_+d*M;g<0&&(f=-f,p=-p,_=-_,M=-M,g=-g);let h=1-a;if(g<.9995){const E=Math.acos(g),y=Math.sin(E);h=Math.sin(h*E)/y,a=Math.sin(a*E)/y,l=l*h+f*a,c=c*h+p*a,u=u*h+_*a,d=d*h+M*a}else{l=l*h+f*a,c=c*h+p*a,u=u*h+_*a,d=d*h+M*a;const E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*d+l*p-c*f,e[t+1]=l*_+u*f+c*d-a*p,e[t+2]=c*_+u*p+a*f-l*d,e[t+3]=u*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xc=class xc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xc.prototype.isVector3=!0;let q=xc;const ca=new q,Tu=new Bs,Sc=class Sc{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],M=s[0],g=s[3],h=s[6],E=s[1],y=s[4],b=s[7],I=s[2],T=s[5],P=s[8];return r[0]=o*M+a*E+l*I,r[3]=o*g+a*y+l*T,r[6]=o*h+a*b+l*P,r[1]=c*M+u*E+d*I,r[4]=c*g+u*y+d*T,r[7]=c*h+u*b+d*P,r[2]=f*M+p*E+_*I,r[5]=f*g+p*y+_*T,r[8]=f*h+p*b+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,p=c*r-o*l,_=t*d+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=d*M,e[1]=(s*c-u*i)*M,e[2]=(a*i-s*o)*M,e[3]=f*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=p*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sc.prototype.isMatrix3=!0;let $e=Sc;const ua=new $e,Au=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b_(){const n={enabled:!0,workingColorSpace:To,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ol("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ol("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[To]:{primaries:e,whitePoint:i,transfer:Ao,toXYZ:Au,fromXYZ:wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Au,fromXYZ:wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}const et=b_();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class y_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=gr("canvas")),rs.width=e.width,rs.height=e.height;const s=rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T_=0;class mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fa(s[o].image)):r.push(fa(s[o]))}else r=fa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?y_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let A_=0;const da=new q;class Wt extends es{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=ei,s=ei,r=Bt,o=Ai,a=Sn,l=hn,c=Wt.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Os(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(da).x}get height(){return this.source.getSize(da).y}get depth(){return this.source.getSize(da).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rl:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rl:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=zd;Wt.DEFAULT_ANISOTROPY=1;const Mc=class Mc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],M=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(p+1)/2,I=(h+1)/2,T=(u+f)/4,P=(d+M)/4,x=(_+g)/4;return y>b&&y>I?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=T/i,r=P/i):b>I?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=T/s,r=x/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=P/r,s=x/r),this.set(i,s,r,t),this}let E=Math.sqrt((g-_)*(g-_)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(g-_)/E,this.y=(d-M)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mc.prototype.isVector4=!0;let yt=Mc;class w_ extends es{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Wt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new mc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends w_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yd extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class C_ extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Co=class Co{constructor(e,t,i,s,r,o,a,l,c,u,d,f,p,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,p,_,M,g)}set(e,t,i,s,r,o,a,l,c,u,d,f,p,_,M,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=M,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Co().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*d,_=a*u,M=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,M=c*d;t[0]=f+M*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,M=c*d;t[0]=f-M*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,_=a*u,M=a*d;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+M,t[1]=l*d,t[5]=M*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=M-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+_,t[10]=f-M*d}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+M,t[5]=o*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*u,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R_,e,P_)}lookAt(e,t,i){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),gi.crossVectors(i,tn),gi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),gi.crossVectors(i,tn)),gi.normalize(),Dr.crossVectors(tn,gi),s[0]=gi.x,s[4]=Dr.x,s[8]=tn.x,s[1]=gi.y,s[5]=Dr.y,s[9]=tn.y,s[2]=gi.z,s[6]=Dr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],M=i[6],g=i[10],h=i[14],E=i[3],y=i[7],b=i[11],I=i[15],T=s[0],P=s[4],x=s[8],A=s[12],U=s[1],R=s[5],L=s[9],X=s[13],W=s[2],O=s[6],H=s[10],B=s[14],J=s[3],$=s[7],le=s[11],ae=s[15];return r[0]=o*T+a*U+l*W+c*J,r[4]=o*P+a*R+l*O+c*$,r[8]=o*x+a*L+l*H+c*le,r[12]=o*A+a*X+l*B+c*ae,r[1]=u*T+d*U+f*W+p*J,r[5]=u*P+d*R+f*O+p*$,r[9]=u*x+d*L+f*H+p*le,r[13]=u*A+d*X+f*B+p*ae,r[2]=_*T+M*U+g*W+h*J,r[6]=_*P+M*R+g*O+h*$,r[10]=_*x+M*L+g*H+h*le,r[14]=_*A+M*X+g*B+h*ae,r[3]=E*T+y*U+b*W+I*J,r[7]=E*P+y*R+b*O+I*$,r[11]=E*x+y*L+b*H+I*le,r[15]=E*A+y*X+b*B+I*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],M=e[7],g=e[11],h=e[15],E=l*p-c*f,y=a*p-c*d,b=a*f-l*d,I=o*p-c*u,T=o*f-l*u,P=o*d-a*u;return t*(M*E-g*y+h*b)-i*(_*E-g*I+h*T)+s*(_*y-M*I+h*P)-r*(_*b-M*T+g*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],M=e[13],g=e[14],h=e[15],E=t*a-i*o,y=t*l-s*o,b=t*c-r*o,I=i*l-s*a,T=i*c-r*a,P=s*c-r*l,x=u*M-d*_,A=u*g-f*_,U=u*h-p*_,R=d*g-f*M,L=d*h-p*M,X=f*h-p*g,W=E*X-y*L+b*R+I*U-T*A+P*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/W;return e[0]=(a*X-l*L+c*R)*O,e[1]=(s*L-i*X-r*R)*O,e[2]=(M*P-g*T+h*I)*O,e[3]=(f*T-d*P-p*I)*O,e[4]=(l*U-o*X-c*A)*O,e[5]=(t*X-s*U+r*A)*O,e[6]=(g*b-_*P-h*y)*O,e[7]=(u*P-f*b+p*y)*O,e[8]=(o*L-a*U+c*x)*O,e[9]=(i*U-t*L-r*x)*O,e[10]=(_*T-M*b+h*E)*O,e[11]=(d*b-u*T-p*E)*O,e[12]=(a*A-o*R-l*x)*O,e[13]=(t*R-i*A+s*x)*O,e[14]=(M*y-_*I-g*E)*O,e[15]=(u*I-d*y+f*E)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,p=r*u,_=r*d,M=o*u,g=o*d,h=a*d,E=l*c,y=l*u,b=l*d,I=i.x,T=i.y,P=i.z;return s[0]=(1-(M+h))*I,s[1]=(p+b)*I,s[2]=(_-y)*I,s[3]=0,s[4]=(p-b)*T,s[5]=(1-(f+h))*T,s[6]=(g+E)*T,s[7]=0,s[8]=(_+y)*P,s[9]=(g-E)*P,s[10]=(1-(f+M))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=os.set(s[0],s[1],s[2]).length();const a=os.set(s[4],s[5],s[6]).length(),l=os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),gn.copy(this);const c=1/o,u=1/a,d=1/l;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,t.setFromRotationMatrix(gn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Un,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let _,M;if(l)_=r/(o-r),M=o*r/(o-r);else if(a===Un)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===wo)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Un,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let _,M;if(l)_=1/(o-r),M=o/(o-r);else if(a===Un)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===wo)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Co.prototype.isMatrix4=!0;let Rt=Co;const os=new q,gn=new Rt,R_=new q(0,0,0),P_=new q(1,1,1),gi=new q,Dr=new q,tn=new q,Cu=new Rt,Ru=new Bs;class Ji{constructor(e=0,t=0,i=0,s=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class Kd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L_=0;const Pu=new q,as=new Bs,Xn=new Rt,Ir=new q,ks=new q,D_=new q,I_=new Bs,Lu=new q(1,0,0),Du=new q(0,1,0),Iu=new q(0,0,1),Uu={type:"added"},U_={type:"removed"},ls={type:"childadded",child:null},ha={type:"childremoved",child:null};class on extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new q,t=new Ji,i=new Bs,s=new q(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new $e}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Lu,e)}rotateY(e){return this.rotateOnAxis(Du,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Pu.copy(e).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lu,e)}translateY(e){return this.translateOnAxis(Du,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ir.copy(e):Ir.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(ks,Ir,this.up):Xn.lookAt(Ir,ks,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Xn),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uu),ls.child=e,this.dispatchEvent(ls),ls.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(U_),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uu),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,D_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,I_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}on.DEFAULT_UP=new q(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ur extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,i),h=this._getHandJoint(c,M);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ur;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=pc(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ma(o,r,e+1/3),this.g=ma(o,r,e),this.b=ma(o,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=jd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return et.workingToColorSpace(Vt.copy(this),e),Math.round(Qe(Vt.r*255,0,255))*65536+Math.round(Qe(Vt.g*255,0,255))*256+Math.round(Qe(Vt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Vt.copy(this),t);const i=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=fn){et.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,s=Vt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Nr);const i=or(_i.h,Nr.h,t),s=or(_i.s,Nr.s,t),r=or(_i.l,Nr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new ut;ut.NAMES=jd;class F_ extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _n=new q,qn=new q,ga=new q,$n=new q,cs=new q,us=new q,Nu=new q,_a=new q,va=new q,xa=new q,Sa=new yt,Ma=new yt,Ea=new yt;class xn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_n.subVectors(s,t),qn.subVectors(i,t),ga.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(qn),l=_n.dot(ga),c=qn.dot(qn),u=qn.dot(ga),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Sa.setScalar(0),Ma.setScalar(0),Ea.setScalar(0),Sa.fromBufferAttribute(e,t),Ma.fromBufferAttribute(e,i),Ea.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Sa,r.x),o.addScaledVector(Ma,r.y),o.addScaledVector(Ea,r.z),o}static isFrontFacing(e,t,i,s){return _n.subVectors(i,t),qn.subVectors(e,t),_n.cross(qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),_n.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;cs.subVectors(s,i),us.subVectors(r,i),_a.subVectors(e,i);const l=cs.dot(_a),c=us.dot(_a);if(l<=0&&c<=0)return t.copy(i);va.subVectors(e,s);const u=cs.dot(va),d=us.dot(va);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(cs,o);xa.subVectors(e,r);const p=cs.dot(xa),_=us.dot(xa);if(_>=0&&p<=_)return t.copy(r);const M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(us,a);const g=u*_-p*d;if(g<=0&&d-u>=0&&p-_>=0)return Nu.subVectors(r,s),a=(d-u)/(d-u+(p-_)),t.copy(s).addScaledVector(Nu,a);const h=1/(g+M+f);return o=M*h,a=f*h,t.copy(i).addScaledVector(cs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Er{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Or.subVectors(this.max,Ws),fs.subVectors(e.a,Ws),ds.subVectors(e.b,Ws),hs.subVectors(e.c,Ws),vi.subVectors(ds,fs),xi.subVectors(hs,ds),zi.subVectors(fs,hs);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-zi.z,zi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,zi.z,0,-zi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-zi.y,zi.x,0];return!ba(t,fs,ds,hs,Or)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,fs,ds,hs,Or))?!1:(Br.crossVectors(vi,xi),t=[Br.x,Br.y,Br.z],ba(t,fs,ds,hs,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new q,new q,new q,new q,new q,new q,new q,new q],vn=new q,Fr=new Er,fs=new q,ds=new q,hs=new q,vi=new q,xi=new q,zi=new q,Ws=new q,Or=new q,Br=new q,Hi=new q;function ba(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Hi.fromArray(n,r);const a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Tt=new q,zr=new ft;let O_=0;class zn extends es{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Su,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ss(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Su&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zd extends zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Jd extends zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class si extends zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const B_=new Er,Xs=new q,ya=new q;class gc{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):B_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Xs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(ya)),this.expandByPoint(Xs.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let z_=0;const cn=new Rt,Ta=new on,ps=new q,nn=new Er,qs=new Er,Dt=new q;class fi extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n_(e)?Jd:Zd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new si(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(nn.min,qs.min),nn.expandByPoint(Dt),Dt.addVectors(nn.max,qs.max),nn.expandByPoint(Dt)):(nn.expandByPoint(qs.min),nn.expandByPoint(qs.max))}nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),Dt.add(ps)),s=Math.max(s,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new q,l[x]=new q;const c=new q,u=new q,d=new q,f=new ft,p=new ft,_=new ft,M=new q,g=new q;function h(x,A,U){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,U),f.fromBufferAttribute(r,x),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,U),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(R),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(R),a[x].add(M),a[A].add(M),a[U].add(M),l[x].add(g),l[A].add(g),l[U].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,A=E.length;x<A;++x){const U=E[x],R=U.start,L=U.count;for(let X=R,W=R+L;X<W;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const y=new q,b=new q,I=new q,T=new q;function P(x){I.fromBufferAttribute(s,x),T.copy(I);const A=a[x];y.copy(A),y.sub(I.multiplyScalar(I.dot(A))).normalize(),b.crossVectors(T,A);const R=b.dot(l[x])<0?-1:1;o.setXYZW(x,y.x,y.y,y.z,R)}for(let x=0,A=E.length;x<A;++x){const U=E[x],R=U.start,L=U.count;for(let X=R,W=R+L;X<W;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new zn(f,u,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let H_=0;class Go extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Cs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Za,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ja&&(i.blendSrc=this.blendSrc),this.blendDst!==Za&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Kn=new q,Aa=new q,Hr=new q,Si=new q,wa=new q,Vr=new q,Ca=new q;class V_{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Aa.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Aa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Hr),a=Si.dot(this.direction),l=-Si.dot(Hr),c=Si.lengthSq(),u=Math.abs(1-o*o);let d,f,p,_;if(u>0)if(d=o*l-a,f=o*a-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const M=1/u;d*=M,f*=M,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Aa).addScaledVector(Hr,f),p}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,s,r){wa.subVectors(t,e),Vr.subVectors(i,e),Ca.crossVectors(wa,Vr);let o=this.direction.dot(Ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(Vr.crossVectors(Si,Vr));if(l<0)return null;const c=a*this.direction.dot(wa.cross(Si));if(c<0||l+c>o)return null;const u=-a*Si.dot(Ca);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qd extends Go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fu=new Rt,Vi=new V_,Gr=new gc,Ou=new q,kr=new q,Wr=new q,Xr=new q,Ra=new q,qr=new q,Bu=new q,$r=new q;class Vn extends on{constructor(e=new fi,t=new Qd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Ra.fromBufferAttribute(d,e),o?qr.addScaledVector(Ra,u):qr.addScaledVector(Ra.sub(t),u))}t.add(qr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(Gr.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Gr,Ou)===null||Vi.origin.distanceToSquared(Ou)>(e.far-e.near)**2))&&(Fu.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Fu),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const g=f[_],h=o[g.materialIndex],E=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let b=E,I=y;b<I;b+=3){const T=a.getX(b),P=a.getX(b+1),x=a.getX(b+2);s=Yr(this,h,e,i,c,u,d,T,P,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let g=_,h=M;g<h;g+=3){const E=a.getX(g),y=a.getX(g+1),b=a.getX(g+2);s=Yr(this,o,e,i,c,u,d,E,y,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const g=f[_],h=o[g.materialIndex],E=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let b=E,I=y;b<I;b+=3){const T=b,P=b+1,x=b+2;s=Yr(this,h,e,i,c,u,d,T,P,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=_,h=M;g<h;g+=3){const E=g,y=g+1,b=g+2;s=Yr(this,o,e,i,c,u,d,E,y,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function G_(n,e,t,i,s,r,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Li,a),l===null)return null;$r.copy(a),$r.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:n}}function Yr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,kr),n.getVertexPosition(l,Wr),n.getVertexPosition(c,Xr);const u=G_(n,e,t,i,kr,Wr,Xr,Bu);if(u){const d=new q;xn.getBarycoord(Bu,kr,Wr,Xr,d),s&&(u.uv=xn.getInterpolatedAttribute(s,a,l,c,d,new ft)),r&&(u.uv1=xn.getInterpolatedAttribute(r,a,l,c,d,new ft)),o&&(u.normal=xn.getInterpolatedAttribute(o,a,l,c,d,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};xn.getNormal(kr,Wr,Xr,f.normal),u.face=f,u.barycoord=d}return u}class k_ extends Wt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Ot,u=Ot,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pa=new q,W_=new q,X_=new $e;class Wi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Pa.subVectors(i,t).cross(W_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Pa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||X_.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new gc,q_=new ft(.5,.5),Kr=new q;class eh{constructor(e=new Wi,t=new Wi,i=new Wi,s=new Wi,r=new Wi,o=new Wi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],p=r[7],_=r[8],M=r[9],g=r[10],h=r[11],E=r[12],y=r[13],b=r[14],I=r[15];if(s[0].setComponents(c-o,p-u,h-_,I-E).normalize(),s[1].setComponents(c+o,p+u,h+_,I+E).normalize(),s[2].setComponents(c+a,p+d,h+M,I+y).normalize(),s[3].setComponents(c-a,p-d,h-M,I-y).normalize(),i)s[4].setComponents(l,f,g,b).normalize(),s[5].setComponents(c-l,p-f,h-g,I-b).normalize();else if(s[4].setComponents(c-l,p-f,h-g,I-b).normalize(),t===Un)s[5].setComponents(c+l,p+f,h+g,I+b).normalize();else if(t===wo)s[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);const t=q_.distanceTo(e.center);return Gi.radius=.7071067811865476+t,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Kr.x=s.normal.x>0?e.max.x:e.min.x,Kr.y=s.normal.y>0?e.max.y:e.min.y,Kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class th extends Wt{constructor(e=[],t=ji,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ns extends Wt{constructor(e,t,i=Hn,s,r,o,a=Ot,l=Ot,c,u=li,d=1){if(u!==li&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $_ extends Ns{constructor(e,t=Hn,i=ji,s,r,o=Ot,a=Ot,l,c=li){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nh extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class br extends fi{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(d,2));function _(M,g,h,E,y,b,I,T,P,x,A){const U=b/P,R=I/x,L=b/2,X=I/2,W=T/2,O=P+1,H=x+1;let B=0,J=0;const $=new q;for(let le=0;le<H;le++){const ae=le*R-X;for(let be=0;be<O;be++){const Fe=be*U-L;$[M]=Fe*E,$[g]=ae*y,$[h]=W,c.push($.x,$.y,$.z),$[M]=0,$[g]=0,$[h]=T>0?1:-1,u.push($.x,$.y,$.z),d.push(be/P),d.push(1-le/x),B+=1}}for(let le=0;le<x;le++)for(let ae=0;ae<P;ae++){const be=f+ae+O*le,Fe=f+ae+O*(le+1),Xe=f+(ae+1)+O*(le+1),Ve=f+(ae+1)+O*le;l.push(be,Fe,Ve),l.push(Fe,Xe,Ve),J+=6}a.addGroup(p,J,A),p+=J,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yr extends fi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,p=[],_=[],M=[],g=[];for(let h=0;h<u;h++){const E=h*f-o;for(let y=0;y<c;y++){const b=y*d-r;_.push(b,-E,0),M.push(0,0,1),g.push(y/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<a;E++){const y=E+c*h,b=E+c*(h+1),I=E+1+c*(h+1),T=E+1+c*h;p.push(y,b,T),p.push(b,I,T)}this.setIndex(p),this.setAttribute("position",new si(_,3)),this.setAttribute("normal",new si(M,3)),this.setAttribute("uv",new si(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.widthSegments,e.heightSegments)}}function Fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(zu(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(zu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=Fs(n[t]);for(const s in i)e[s]=i[s]}return e}function zu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Y_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ih(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const K_={clone:Fs,merge:$t};var j_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j_,this.fragmentShader=Z_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class J_ extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Q_ extends Go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e0 extends Go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const La={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Hu(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Hu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Hu(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class t0{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const n0=new t0;class _c{constructor(e){this.manager=e!==void 0?e:n0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_c.DEFAULT_MATERIAL_NAME="__DEFAULT";const ms=new WeakMap;class i0 extends _c{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=La.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=ms.get(o);d===void 0&&(d=[],ms.set(o,d)),d.push({onLoad:t,onError:s})}return o}const a=gr("img");function l(){u(),t&&t(this);const d=ms.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}ms.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),La.remove(`image:${e}`);const f=ms.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(d)}ms.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),La.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class s0 extends _c{constructor(e){super(e)}load(e,t,i,s){const r=new Wt,o=new i0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}const jr=new q,Zr=new Bs,wn=new q;class sh extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jr,Zr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jr,Zr,wn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(jr,Zr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jr,Zr,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new q,Vu=new ft,Gu=new ft;class dn extends sh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Vu,Gu),t.subVectors(Gu,Vu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class rh extends sh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gs=-90,_s=1;class r0 extends on{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(gs,_s,e,t);s.layers=this.layers,this.add(s);const r=new dn(gs,_s,e,t);r.layers=this.layers,this.add(r);const o=new dn(gs,_s,e,t);o.layers=this.layers,this.add(o);const a=new dn(gs,_s,e,t);a.layers=this.layers,this.add(a);const l=new dn(gs,_s,e,t);l.layers=this.layers,this.add(l);const c=new dn(gs,_s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class o0 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class a0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ge("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ec=class Ec{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Ec.prototype.isMatrix2=!0;let ku=Ec;function Wu(n,e,t,i){const s=l0(i);switch(t){case Wd:return n*e;case qd:return n*e/s.components*s.byteLength;case cc:return n*e/s.components*s.byteLength;case Zi:return n*e*2/s.components*s.byteLength;case uc:return n*e*2/s.components*s.byteLength;case Xd:return n*e*3/s.components*s.byteLength;case Sn:return n*e*4/s.components*s.byteLength;case fc:return n*e*4/s.components*s.byteLength;case ro:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ao:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:case ul:return Math.max(n,16)*Math.max(e,8)/4;case al:case cl:return Math.max(n,8)*Math.max(e,8)/2;case fl:case dl:case pl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hl:case bo:case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ll:case Dl:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ul:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yo:case Fl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function l0(n){switch(n){case hn:case Hd:return{byteLength:1,components:1};case pr:case Vd:case ai:return{byteLength:2,components:1};case ac:case lc:return{byteLength:2,components:4};case Hn:case oc:case In:return{byteLength:4,components:1};case Gd:case kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function oh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function c0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],M=d[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,d[f]=M)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const M=d[p];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var u0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,y0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,U0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,N0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",V0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,av=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_v=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Av=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ix=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_x=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ox=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:u0,alphahash_pars_fragment:f0,alphamap_fragment:d0,alphamap_pars_fragment:h0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:_0,batching_pars_vertex:v0,batching_vertex:x0,begin_vertex:S0,beginnormal_vertex:M0,bsdfs:E0,iridescence_fragment:b0,bumpmap_pars_fragment:y0,clipping_planes_fragment:T0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:C0,color_fragment:R0,color_pars_fragment:P0,color_pars_vertex:L0,color_vertex:D0,common:I0,cube_uv_reflection_fragment:U0,defaultnormal_vertex:N0,displacementmap_pars_vertex:F0,displacementmap_vertex:O0,emissivemap_fragment:B0,emissivemap_pars_fragment:z0,colorspace_fragment:H0,colorspace_pars_fragment:V0,envmap_fragment:G0,envmap_common_pars_fragment:k0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:nv,envmap_vertex:q0,fog_vertex:$0,fog_pars_vertex:Y0,fog_fragment:K0,fog_pars_fragment:j0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:J0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:ev,lights_pars_begin:tv,lights_toon_fragment:iv,lights_toon_pars_fragment:sv,lights_phong_fragment:rv,lights_phong_pars_fragment:ov,lights_physical_fragment:av,lights_physical_pars_fragment:lv,lights_fragment_begin:cv,lights_fragment_maps:uv,lights_fragment_end:fv,lightprobes_pars_fragment:dv,logdepthbuf_fragment:hv,logdepthbuf_pars_fragment:pv,logdepthbuf_pars_vertex:mv,logdepthbuf_vertex:gv,map_fragment:_v,map_pars_fragment:vv,map_particle_fragment:xv,map_particle_pars_fragment:Sv,metalnessmap_fragment:Mv,metalnessmap_pars_fragment:Ev,morphinstance_vertex:bv,morphcolor_vertex:yv,morphnormal_vertex:Tv,morphtarget_pars_vertex:Av,morphtarget_vertex:wv,normal_fragment_begin:Cv,normal_fragment_maps:Rv,normal_pars_fragment:Pv,normal_pars_vertex:Lv,normal_vertex:Dv,normalmap_pars_fragment:Iv,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Nv,clearcoat_pars_fragment:Fv,iridescence_pars_fragment:Ov,opaque_fragment:Bv,packing:zv,premultiplied_alpha_fragment:Hv,project_vertex:Vv,dithering_fragment:Gv,dithering_pars_fragment:kv,roughnessmap_fragment:Wv,roughnessmap_pars_fragment:Xv,shadowmap_pars_fragment:qv,shadowmap_pars_vertex:$v,shadowmap_vertex:Yv,shadowmask_pars_fragment:Kv,skinbase_vertex:jv,skinning_pars_vertex:Zv,skinning_vertex:Jv,skinnormal_vertex:Qv,specularmap_fragment:ex,specularmap_pars_fragment:tx,tonemapping_fragment:nx,tonemapping_pars_fragment:ix,transmission_fragment:sx,transmission_pars_fragment:rx,uv_pars_fragment:ox,uv_pars_vertex:ax,uv_vertex:lx,worldpos_vertex:cx,background_vert:ux,background_frag:fx,backgroundCube_vert:dx,backgroundCube_frag:hx,cube_vert:px,cube_frag:mx,depth_vert:gx,depth_frag:_x,distance_vert:vx,distance_frag:xx,equirect_vert:Sx,equirect_frag:Mx,linedashed_vert:Ex,linedashed_frag:bx,meshbasic_vert:yx,meshbasic_frag:Tx,meshlambert_vert:Ax,meshlambert_frag:wx,meshmatcap_vert:Cx,meshmatcap_frag:Rx,meshnormal_vert:Px,meshnormal_frag:Lx,meshphong_vert:Dx,meshphong_frag:Ix,meshphysical_vert:Ux,meshphysical_frag:Nx,meshtoon_vert:Fx,meshtoon_frag:Ox,points_vert:Bx,points_frag:zx,shadow_vert:Hx,shadow_frag:Vx,sprite_vert:Gx,sprite_frag:kx},Ae={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Ln={basic:{uniforms:$t([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:$t([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:$t([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:$t([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:$t([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ut(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:$t([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:$t([Ae.points,Ae.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:$t([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:$t([Ae.common,Ae.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:$t([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:$t([Ae.sprite,Ae.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:$t([Ae.common,Ae.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:$t([Ae.lights,Ae.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Ln.physical={uniforms:$t([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Jr={r:0,b:0,g:0},Wx=new Rt,ah=new $e;ah.set(-1,0,0,0,1,0,0,0,1);function Xx(n,e,t,i,s,r){const o=new ut(0);let a=s===!0?0:1,l,c,u=null,d=0,f=null;function p(E){let y=E.isScene===!0?E.background:null;if(y&&y.isTexture){const b=E.backgroundBlurriness>0;y=e.get(y,b)}return y}function _(E){let y=!1;const b=p(E);b===null?g(o,a):b&&b.isColor&&(g(b,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(E,y){const b=p(y);b&&(b.isCubeTexture||b.mapping===Vo)?(c===void 0&&(c=new Vn(new br(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Fs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(y.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ah),c.material.toneMapped=et.getTransfer(b.colorSpace)!==at,(u!==b||d!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Vn(new yr(2,2),new bn({name:"BackgroundMaterial",uniforms:Fs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=et.getTransfer(b.colorSpace)!==at,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function g(E,y){E.getRGB(Jr,ih(n)),t.buffers.color.setClear(Jr.r,Jr.g,Jr.b,y,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,g(o,a)},render:_,addToRenderList:M,dispose:h}}function qx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(R,L,X,W,O){let H=!1;const B=d(R,W,X,L);r!==B&&(r=B,c(r.object)),H=p(R,W,X,O),H&&_(R,W,X,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,b(R,L,X,W),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function d(R,L,X,W){const O=W.wireframe===!0;let H=i[L.id];H===void 0&&(H={},i[L.id]=H);const B=R.isInstancedMesh===!0?R.id:0;let J=H[B];J===void 0&&(J={},H[B]=J);let $=J[X.id];$===void 0&&($={},J[X.id]=$);let le=$[O];return le===void 0&&(le=f(l()),$[O]=le),le}function f(R){const L=[],X=[],W=[];for(let O=0;O<t;O++)L[O]=0,X[O]=0,W[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:W,object:R,attributes:{},index:null}}function p(R,L,X,W){const O=r.attributes,H=L.attributes;let B=0;const J=X.getAttributes();for(const $ in J)if(J[$].location>=0){const ae=O[$];let be=H[$];if(be===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(be=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(be=R.instanceColor)),ae===void 0||ae.attribute!==be||be&&ae.data!==be.data)return!0;B++}return r.attributesNum!==B||r.index!==W}function _(R,L,X,W){const O={},H=L.attributes;let B=0;const J=X.getAttributes();for(const $ in J)if(J[$].location>=0){let ae=H[$];ae===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));const be={};be.attribute=ae,ae&&ae.data&&(be.data=ae.data),O[$]=be,B++}r.attributes=O,r.attributesNum=B,r.index=W}function M(){const R=r.newAttributes;for(let L=0,X=R.length;L<X;L++)R[L]=0}function g(R){h(R,0)}function h(R,L){const X=r.newAttributes,W=r.enabledAttributes,O=r.attributeDivisors;X[R]=1,W[R]===0&&(n.enableVertexAttribArray(R),W[R]=1),O[R]!==L&&(n.vertexAttribDivisor(R,L),O[R]=L)}function E(){const R=r.newAttributes,L=r.enabledAttributes;for(let X=0,W=L.length;X<W;X++)L[X]!==R[X]&&(n.disableVertexAttribArray(X),L[X]=0)}function y(R,L,X,W,O,H,B){B===!0?n.vertexAttribIPointer(R,L,X,O,H):n.vertexAttribPointer(R,L,X,W,O,H)}function b(R,L,X,W){M();const O=W.attributes,H=X.getAttributes(),B=L.defaultAttributeValues;for(const J in H){const $=H[J];if($.location>=0){let le=O[J];if(le===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const ae=le.normalized,be=le.itemSize,Fe=e.get(le);if(Fe===void 0)continue;const Xe=Fe.buffer,Ve=Fe.type,ee=Fe.bytesPerElement,Se=Ve===n.INT||Ve===n.UNSIGNED_INT||le.gpuType===oc;if(le.isInterleavedBufferAttribute){const _e=le.data,Be=_e.stride,ze=le.offset;if(_e.isInstancedInterleavedBuffer){for(let He=0;He<$.locationSize;He++)h($.location+He,_e.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let He=0;He<$.locationSize;He++)g($.location+He);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let He=0;He<$.locationSize;He++)y($.location+He,be/$.locationSize,Ve,ae,Be*ee,(ze+be/$.locationSize*He)*ee,Se)}else{if(le.isInstancedBufferAttribute){for(let _e=0;_e<$.locationSize;_e++)h($.location+_e,le.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<$.locationSize;_e++)g($.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let _e=0;_e<$.locationSize;_e++)y($.location+_e,be/$.locationSize,Ve,ae,be*ee,be/$.locationSize*_e*ee,Se)}}else if(B!==void 0){const ae=B[J];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv($.location,ae);break;case 3:n.vertexAttrib3fv($.location,ae);break;case 4:n.vertexAttrib4fv($.location,ae);break;default:n.vertexAttrib1fv($.location,ae)}}}}E()}function I(){A();for(const R in i){const L=i[R];for(const X in L){const W=L[X];for(const O in W){const H=W[O];for(const B in H)u(H[B].object),delete H[B];delete W[O]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;const L=i[R.id];for(const X in L){const W=L[X];for(const O in W){const H=W[O];for(const B in H)u(H[B].object),delete H[B];delete W[O]}}delete i[R.id]}function P(R){for(const L in i){const X=i[L];for(const W in X){const O=X[W];if(O[R.id]===void 0)continue;const H=O[R.id];for(const B in H)u(H[B].object),delete H[B];delete O[R.id]}}}function x(R){for(const L in i){const X=i[L],W=R.isInstancedMesh===!0?R.id:0,O=X[W];if(O!==void 0){for(const H in O){const B=O[H];for(const J in B)u(B[J].object),delete B[J];delete O[H]}delete X[W],Object.keys(X).length===0&&delete i[L]}}}function A(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:g,disableUnusedAttributes:E}}function $x(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Yx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Sn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const x=P===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==hn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==In&&!x)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ge("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:b,maxSamples:I,samples:T}}function Kx(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Wi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,h=n.get(d);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{const E=r?0:i,y=E*4;let b=h.clippingState||null;l.value=b,b=u(_,f,y,p);for(let I=0;I!==y;++I)b[I]=t[I];h.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,_){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const h=p+M*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<h)&&(g=new Float32Array(h));for(let y=0,b=p;y!==M;++y,b+=4)o.copy(d[y]).applyMatrix4(E,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const wi=4,Xu=[.125,.215,.35,.446,.526,.582],$i=20,jx=256,$s=new rh,qu=new ut;let Da=null,Ia=0,Ua=0,Na=!1;const Zx=new q;class $u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Zx}=r;Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,Ia,Ua),this._renderer.xr.enabled=Na,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:ai,format:Sn,colorSpace:To,depthBuffer:!1},s=Yu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jx(r)),this._blurMaterial=eS(r,e,t),this._ggxMaterial=Qx(r,e,t)}return s}_compileMaterial(e){const t=new Vn(new fi,e);this._renderer.compile(t,$s)}_sceneToCubeUV(e,t,i,s,r){const l=new dn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(qu),d.toneMapping=On,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vn(new br,new Qd({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let h=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,h=!0):(g.color.copy(qu),h=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const I=this._cubeSize;vs(s,b*I,y>2?I:0,I,I),d.setRenderTarget(s),h&&d.render(M,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ji||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;vs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$s)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,p=d*f,{_lodMax:_}=this,M=this._sizeLods[i],g=3*M*(i>_-wi?i-_+wi:0),h=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,vs(r,g,h,3*M,2*M),s.setRenderTarget(r),s.render(a,$s),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,vs(e,g,h,3*M,2*M),s.setRenderTarget(e),s.render(a,$s)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$i-1),M=r/_,g=isFinite(r)?1+Math.floor(u*M):$i;g>$i&&Ge(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$i}`);const h=[];let E=0;for(let P=0;P<$i;++P){const x=P/M,A=Math.exp(-x*x/2);h.push(A),P===0?E+=A:P<g&&(E+=2*A)}for(let P=0;P<h.length;P++)h[P]=h[P]/E;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const b=this._sizeLods[s],I=3*b*(s>y-wi?s-y+wi:0),T=4*(this._cubeSize-b);vs(t,I,T,3*b,2*b),l.setRenderTarget(t),l.render(d,$s)}}function Jx(n){const e=[],t=[],i=[];let s=n;const r=n-wi+1+Xu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-wi?l=Xu[o-n+wi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,M=3,g=2,h=1,E=new Float32Array(M*_*p),y=new Float32Array(g*_*p),b=new Float32Array(h*_*p);for(let T=0;T<p;T++){const P=T%3*2/3-1,x=T>2?0:-1,A=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];E.set(A,M*_*T),y.set(f,g*_*T);const U=[T,T,T,T,T,T];b.set(U,h*_*T)}const I=new fi;I.setAttribute("position",new zn(E,M)),I.setAttribute("uv",new zn(y,g)),I.setAttribute("faceIndex",new zn(b,h)),i.push(new Vn(I,null)),s>wi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Yu(n,e,t){const i=new Bn(n,e,t);return i.texture.mapping=Vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Qx(n,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ko(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function eS(n,e,t){const i=new Float32Array($i),s=new q(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ku(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ju(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class lh extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new th(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new br(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:ni});r.uniforms.tEquirect.value=t;const o=new Vn(s,r),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Bt),new r0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function tS(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,p=!1){return f==null?null:p?o(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===oa||p===aa)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const M=new lh(_.height);return M.fromEquirectangularTexture(n,f),e.set(f,M),f.addEventListener("dispose",c),a(M.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,_=p===oa||p===aa,M=p===ji||p===Us;if(_||M){let g=t.get(f);const h=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new $u(n)),g=_?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const E=f.image;return _&&E&&E.height>0||M&&E&&l(E)?(i===null&&(i=new $u(n)),g=_?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,p){return p===oa?f.mapping=ji:p===aa&&(f.mapping=Us),f}function l(f){let p=0;const _=6;for(let M=0;M<_;M++)f[M]!==void 0&&p++;return p===_}function c(f){const p=f.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function nS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ol("WebGLRenderer: "+i+" extension not supported."),s}}}function iS(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,_=d.attributes.position;let M=0;if(_===void 0)return;if(p!==null){const E=p.array;M=p.version;for(let y=0,b=E.length;y<b;y+=3){const I=E[y+0],T=E[y+1],P=E[y+2];f.push(I,T,T,P,P,I)}}else{const E=_.array;M=_.version;for(let y=0,b=E.length/3-1;y<b;y+=3){const I=y+0,T=y+1,P=y+2;f.push(I,T,T,P,P,I)}}const g=new(_.count>=65535?Jd:Zd)(f,1);g.version=M;const h=r.get(d);h&&e.remove(h),r.set(d,g)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function sS(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),t.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let M=0;for(let g=0;g<p;g++)M+=f[g];t.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function rS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function oS(n,e,t){const i=new WeakMap,s=new yt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let A=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),M===!0&&(y=3);let b=a.attributes.position.count*y,I=1;b>e.maxTextureSize&&(I=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*I*4*d),P=new Yd(T,b,I,d);P.type=In,P.needsUpdate=!0;const x=y*4;for(let U=0;U<d;U++){const R=g[U],L=h[U],X=E[U],W=b*I*4*U;for(let O=0;O<R.count;O++){const H=O*x;p===!0&&(s.fromBufferAttribute(R,O),T[W+H+0]=s.x,T[W+H+1]=s.y,T[W+H+2]=s.z,T[W+H+3]=0),_===!0&&(s.fromBufferAttribute(L,O),T[W+H+4]=s.x,T[W+H+5]=s.y,T[W+H+6]=s.z,T[W+H+7]=0),M===!0&&(s.fromBufferAttribute(X,O),T[W+H+8]=s.x,T[W+H+9]=s.y,T[W+H+10]=s.z,T[W+H+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new ft(b,I)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function aS(n,e,t,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const lS={[Dd]:"LINEAR_TONE_MAPPING",[Id]:"REINHARD_TONE_MAPPING",[Ud]:"CINEON_TONE_MAPPING",[Nd]:"ACES_FILMIC_TONE_MAPPING",[Od]:"AGX_TONE_MAPPING",[Bd]:"NEUTRAL_TONE_MAPPING",[Fd]:"CUSTOM_TONE_MAPPING"};function cS(n,e,t,i,s){const r=new Bn(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Ns(e,t):void 0}),o=new Bn(e,t,{type:ai,depthBuffer:!1,stencilBuffer:!1}),a=new fi;a.setAttribute("position",new si([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new si([0,2,0,0,2,0],2));const l=new J_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Vn(a,l),u=new rh(-1,1,1,-1,0,1);let d=null,f=null,p=!1,_,M=null,g=[],h=!1;this.setSize=function(E,y){r.setSize(E,y),o.setSize(E,y);for(let b=0;b<g.length;b++){const I=g[b];I.setSize&&I.setSize(E,y)}},this.setEffects=function(E){g=E,h=g.length>0&&g[0].isRenderPass===!0;const y=r.width,b=r.height;for(let I=0;I<g.length;I++){const T=g[I];T.setSize&&T.setSize(y,b)}},this.begin=function(E,y){if(p||E.toneMapping===On&&g.length===0)return!1;if(M=y,y!==null){const b=y.width,I=y.height;(r.width!==b||r.height!==I)&&this.setSize(b,I)}return h===!1&&E.setRenderTarget(r),_=E.toneMapping,E.toneMapping=On,!0},this.hasRenderPass=function(){return h},this.end=function(E,y){E.toneMapping=_,p=!0;let b=r,I=o;for(let T=0;T<g.length;T++){const P=g[T];if(P.enabled!==!1&&(P.render(E,I,b,y),P.needsSwap!==!1)){const x=b;b=I,I=x}}if(d!==E.outputColorSpace||f!==E.toneMapping){d=E.outputColorSpace,f=E.toneMapping,l.defines={},et.getTransfer(d)===at&&(l.defines.SRGB_TRANSFER="");const T=lS[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,E.setRenderTarget(M),E.render(c,u),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const ch=new Wt,Bl=new Ns(1,1),uh=new Yd,fh=new C_,dh=new th,Zu=[],Ju=[],Qu=new Float32Array(16),ef=new Float32Array(9),tf=new Float32Array(4);function zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Zu[s];if(r===void 0&&(r=new Float32Array(s),Zu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wo(n,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function dS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function pS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;tf.set(i),n.uniformMatrix2fv(this.addr,!1,tf),Lt(t,i)}}function mS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;ef.set(i),n.uniformMatrix3fv(this.addr,!1,ef),Lt(t,i)}}function gS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Qu.set(i),n.uniformMatrix4fv(this.addr,!1,Qu),Lt(t,i)}}function _S(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function xS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function SS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function MS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ES(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function bS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function yS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function TS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Bl.compareFunction=t.isReversedDepthBuffer()?hc:dc,r=Bl):r=ch,t.setTexture2D(e||r,s)}function AS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fh,s)}function wS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dh,s)}function CS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||uh,s)}function RS(n){switch(n){case 5126:return uS;case 35664:return fS;case 35665:return dS;case 35666:return hS;case 35674:return pS;case 35675:return mS;case 35676:return gS;case 5124:case 35670:return _S;case 35667:case 35671:return vS;case 35668:case 35672:return xS;case 35669:case 35673:return SS;case 5125:return MS;case 36294:return ES;case 36295:return bS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return TS;case 35679:case 36299:case 36307:return AS;case 35680:case 36300:case 36308:case 36293:return wS;case 36289:case 36303:case 36311:case 36292:return CS}}function PS(n,e){n.uniform1fv(this.addr,e)}function LS(n,e){const t=zs(e,this.size,2);n.uniform2fv(this.addr,t)}function DS(n,e){const t=zs(e,this.size,3);n.uniform3fv(this.addr,t)}function IS(n,e){const t=zs(e,this.size,4);n.uniform4fv(this.addr,t)}function US(n,e){const t=zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NS(n,e){const t=zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function FS(n,e){const t=zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function OS(n,e){n.uniform1iv(this.addr,e)}function BS(n,e){n.uniform2iv(this.addr,e)}function zS(n,e){n.uniform3iv(this.addr,e)}function HS(n,e){n.uniform4iv(this.addr,e)}function VS(n,e){n.uniform1uiv(this.addr,e)}function GS(n,e){n.uniform2uiv(this.addr,e)}function kS(n,e){n.uniform3uiv(this.addr,e)}function WS(n,e){n.uniform4uiv(this.addr,e)}function XS(n,e,t){const i=this.cache,s=e.length,r=Wo(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Bl:o=ch;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function qS(n,e,t){const i=this.cache,s=e.length,r=Wo(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||fh,r[o])}function $S(n,e,t){const i=this.cache,s=e.length,r=Wo(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||dh,r[o])}function YS(n,e,t){const i=this.cache,s=e.length,r=Wo(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||uh,r[o])}function KS(n){switch(n){case 5126:return PS;case 35664:return LS;case 35665:return DS;case 35666:return IS;case 35674:return US;case 35675:return NS;case 35676:return FS;case 5124:case 35670:return OS;case 35667:case 35671:return BS;case 35668:case 35672:return zS;case 35669:case 35673:return HS;case 5125:return VS;case 36294:return GS;case 36295:return kS;case 36296:return WS;case 35678:case 36198:case 36298:case 36306:case 35682:return XS;case 35679:case 36299:case 36307:return qS;case 35680:case 36300:case 36308:case 36293:return $S;case 36289:case 36303:case 36311:case 36292:return YS}}class jS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RS(t.type)}}class ZS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KS(t.type)}}class JS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function nf(n,e){n.seq.push(e),n.map[e.id]=e}function QS(n,e,t){const i=n.name,s=i.length;for(Fa.lastIndex=0;;){const r=Fa.exec(i),o=Fa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nf(t,c===void 0?new jS(a,n,e):new ZS(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new JS(a),nf(t,d)),t=d}}}class co{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);QS(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function sf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const eM=37297;let tM=0;function nM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const rf=new $e;function iM(n){et._getMatrix(rf,et.workingColorSpace,n);const e=`mat3( ${rf.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Ao:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function of(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+nM(n.getShaderSource(e),a)}else return r}function sM(n,e){const t=iM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const rM={[Dd]:"Linear",[Id]:"Reinhard",[Ud]:"Cineon",[Nd]:"ACESFilmic",[Od]:"AgX",[Bd]:"Neutral",[Fd]:"Custom"};function oM(n,e){const t=rM[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qr=new q;function aM(){et.getLuminanceCoefficients(Qr);const n=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function cM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Js(n){return n!==""}function af(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fM=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(n){return n.replace(fM,hM)}const dM=new Map;function hM(n,e){let t=Ze[e];if(t===void 0){const i=dM.get(e);if(i!==void 0)t=Ze[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}const pM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(n){return n.replace(pM,mM)}function mM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const gM={[so]:"SHADOWMAP_TYPE_PCF",[Zs]:"SHADOWMAP_TYPE_VSM"};function _M(n){return gM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vM={[ji]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[Vo]:"ENVMAP_TYPE_CUBE_UV"};function xM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":vM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const SM={[Us]:"ENVMAP_MODE_REFRACTION"};function MM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":SM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EM={[Ld]:"ENVMAP_BLENDING_MULTIPLY",[Xg]:"ENVMAP_BLENDING_MIX",[qg]:"ENVMAP_BLENDING_ADD"};function bM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":EM[n.combine]||"ENVMAP_BLENDING_NONE"}function yM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function TM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_M(t),c=xM(t),u=MM(t),d=bM(t),f=yM(t),p=lM(t),_=cM(r),M=s.createProgram();let g,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Js).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Js).join(`
`),h.length>0&&(h+=`
`)):(g=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),h=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ze.tonemapping_pars_fragment:"",t.toneMapping!==On?oM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,sM("linearToOutputTexel",t.outputColorSpace),aM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=zl(o),o=af(o,t),o=lf(o,t),a=zl(a),a=af(a,t),a=lf(a,t),o=cf(o),a=cf(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=E+g+o,b=E+h+a,I=sf(s,s.VERTEX_SHADER,y),T=sf(s,s.FRAGMENT_SHADER,b);s.attachShader(M,I),s.attachShader(M,T),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(R){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(M)||"",X=s.getShaderInfoLog(I)||"",W=s.getShaderInfoLog(T)||"",O=L.trim(),H=X.trim(),B=W.trim();let J=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,I,T);else{const le=of(s,I,"vertex"),ae=of(s,T,"fragment");it("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+le+`
`+ae)}else O!==""?Ge("WebGLProgram: Program Info Log:",O):(H===""||B==="")&&($=!1);$&&(R.diagnostics={runnable:J,programLog:O,vertexShader:{log:H,prefix:g},fragmentShader:{log:B,prefix:h}})}s.deleteShader(I),s.deleteShader(T),x=new co(s,M),A=uM(s,M)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(M,eM)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tM++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=T,this}let AM=0;class wM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new CM(e),t.set(e,i)),i}}class CM{constructor(e){this.id=AM++,this.code=e,this.usedTimes=0}}function RM(n){return n===Zi||n===bo||n===yo}function PM(n,e,t,i,s,r){const o=new Kd,a=new wM,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,A,U,R,L,X){const W=R.fog,O=L.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||H,B),$=J&&J.mapping===Vo?J.image.height:null,le=p[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,be=ae!==void 0?ae.length:0;let Fe=0;O.morphAttributes.position!==void 0&&(Fe=1),O.morphAttributes.normal!==void 0&&(Fe=2),O.morphAttributes.color!==void 0&&(Fe=3);let Xe,Ve,ee,Se;if(le){const Ye=Ln[le];Xe=Ye.vertexShader,Ve=Ye.fragmentShader}else Xe=x.vertexShader,Ve=x.fragmentShader,a.update(x),ee=a.getVertexShaderID(x),Se=a.getFragmentShaderID(x);const _e=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),ze=L.isInstancedMesh===!0,He=L.isBatchedMesh===!0,C=!!x.map,D=!!x.matcap,V=!!J,te=!!x.aoMap,K=!!x.lightMap,ne=!!x.bumpMap,ce=!!x.normalMap,he=!!x.displacementMap,w=!!x.emissiveMap,oe=!!x.metalnessMap,ge=!!x.roughnessMap,fe=x.anisotropy>0,Q=x.clearcoat>0,me=x.dispersion>0,v=x.iridescence>0,m=x.sheen>0,N=x.transmission>0,j=fe&&!!x.anisotropyMap,se=Q&&!!x.clearcoatMap,de=Q&&!!x.clearcoatNormalMap,pe=Q&&!!x.clearcoatRoughnessMap,Z=v&&!!x.iridescenceMap,re=v&&!!x.iridescenceThicknessMap,xe=m&&!!x.sheenColorMap,Te=m&&!!x.sheenRoughnessMap,Me=!!x.specularMap,ve=!!x.specularColorMap,qe=!!x.specularIntensityMap,je=N&&!!x.transmissionMap,st=N&&!!x.thicknessMap,F=!!x.gradientMap,Ee=!!x.alphaMap,ie=x.alphaTest>0,Re=!!x.alphaHash,ye=!!x.extensions;let ue=On;x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ue=n.toneMapping);const Ue={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:Xe,fragmentShader:Ve,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:He,batchingColor:He&&L._colorsTexture!==null,instancing:ze,instancingColor:ze&&L.instanceColor!==null,instancingMorph:ze&&L.morphTexture!==null,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:C,matcap:D,envMap:V,envMapMode:V&&J.mapping,envMapCubeUVHeight:$,aoMap:te,lightMap:K,bumpMap:ne,normalMap:ce,displacementMap:he,emissiveMap:w,normalMapObjectSpace:ce&&x.normalMapType===Kg,normalMapTangentSpace:ce&&x.normalMapType===vu,packedNormalMap:ce&&x.normalMapType===vu&&RM(x.normalMap.format),metalnessMap:oe,roughnessMap:ge,anisotropy:fe,anisotropyMap:j,clearcoat:Q,clearcoatMap:se,clearcoatNormalMap:de,clearcoatRoughnessMap:pe,dispersion:me,iridescence:v,iridescenceMap:Z,iridescenceThicknessMap:re,sheen:m,sheenColorMap:xe,sheenRoughnessMap:Te,specularMap:Me,specularColorMap:ve,specularIntensityMap:qe,transmission:N,transmissionMap:je,thicknessMap:st,gradientMap:F,opaque:x.transparent===!1&&x.blending===Cs&&x.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ie,alphaHash:Re,combine:x.combine,mapUv:C&&_(x.map.channel),aoMapUv:te&&_(x.aoMap.channel),lightMapUv:K&&_(x.lightMap.channel),bumpMapUv:ne&&_(x.bumpMap.channel),normalMapUv:ce&&_(x.normalMap.channel),displacementMapUv:he&&_(x.displacementMap.channel),emissiveMapUv:w&&_(x.emissiveMap.channel),metalnessMapUv:oe&&_(x.metalnessMap.channel),roughnessMapUv:ge&&_(x.roughnessMap.channel),anisotropyMapUv:j&&_(x.anisotropyMap.channel),clearcoatMapUv:se&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(x.sheenRoughnessMap.channel),specularMapUv:Me&&_(x.specularMap.channel),specularColorMapUv:ve&&_(x.specularColorMap.channel),specularIntensityMapUv:qe&&_(x.specularIntensityMap.channel),transmissionMapUv:je&&_(x.transmissionMap.channel),thicknessMapUv:st&&_(x.thicknessMap.channel),alphaMapUv:Ee&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ce||fe),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(C||Ee),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&ce===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Be,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Fe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:C&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:w&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dn,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function g(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)A.push(U),A.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(h(A,x),E(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function h(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function E(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function y(x){const A=p[x.type];let U;if(A){const R=Ln[A];U=K_.clone(R.uniforms)}else U=x.uniforms;return U}function b(x,A){let U=u.get(A);return U!==void 0?++U.usedTimes:(U=new TM(n,A,x,s),c.push(U),u.set(A,U)),U}function I(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function P(){a.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:I,releaseShaderCache:T,programs:c,dispose:P}}function LM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function DM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ff(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function df(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,_,M,g,h){let E=n[e];return E===void 0?(E={id:f.id,object:f,geometry:p,material:_,materialVariant:o(f),groupOrder:M,renderOrder:f.renderOrder,z:g,group:h},n[e]=E):(E.id=f.id,E.object=f,E.geometry=p,E.material=_,E.materialVariant=o(f),E.groupOrder=M,E.renderOrder=f.renderOrder,E.z=g,E.group=h),e++,E}function l(f,p,_,M,g,h){const E=a(f,p,_,M,g,h);_.transmission>0?i.push(E):_.transparent===!0?s.push(E):t.push(E)}function c(f,p,_,M,g,h){const E=a(f,p,_,M,g,h);_.transmission>0?i.unshift(E):_.transparent===!0?s.unshift(E):t.unshift(E)}function u(f,p){t.length>1&&t.sort(f||DM),i.length>1&&i.sort(p||ff),s.length>1&&s.sort(p||ff)}function d(){for(let f=e,p=n.length;f<p;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function IM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new df,n.set(i,[o])):s>=r.length?(o=new df,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function UM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ut};break;case"SpotLight":t={position:new q,direction:new q,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function NM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let FM=0;function OM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function BM(n){const e=new UM,t=NM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const s=new q,r=new Rt,o=new Rt;function a(c){let u=0,d=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,_=0,M=0,g=0,h=0,E=0,y=0,b=0,I=0,T=0,P=0;c.sort(OM);for(let A=0,U=c.length;A<U;A++){const R=c[A],L=R.color,X=R.intensity,W=R.distance;let O=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Zi?O=R.shadow.map.texture:O=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=L.r*X,d+=L.g*X,f+=L.b*X;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],X);P++}else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const B=R.shadow,J=t.get(R);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=R.shadow.matrix,E++}i.directional[p]=H,p++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(L).multiplyScalar(X),H.distance=W,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[M]=H;const B=R.shadow;if(R.map&&(i.spotLightMap[I]=R.map,I++,B.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[M]=B.matrix,R.castShadow){const J=t.get(R);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,i.spotShadow[M]=J,i.spotShadowMap[M]=O,b++}M++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(L).multiplyScalar(X),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=H,g++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const B=R.shadow,J=t.get(R);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,J.shadowCameraNear=B.camera.near,J.shadowCameraFar=B.camera.far,i.pointShadow[_]=J,i.pointShadowMap[_]=O,i.pointShadowMatrix[_]=R.shadow.matrix,y++}i.point[_]=H,_++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(X),H.groundColor.copy(R.groundColor).multiplyScalar(X),i.hemi[h]=H,h++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==M||x.rectAreaLength!==g||x.hemiLength!==h||x.numDirectionalShadows!==E||x.numPointShadows!==y||x.numSpotShadows!==b||x.numSpotMaps!==I||x.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+I-T,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,x.directionalLength=p,x.pointLength=_,x.spotLength=M,x.rectAreaLength=g,x.hemiLength=h,x.numDirectionalShadows=E,x.numPointShadows=y,x.numSpotShadows=b,x.numSpotMaps=I,x.numLightProbes=P,i.version=FM++)}function l(c,u){let d=0,f=0,p=0,_=0,M=0;const g=u.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){const y=c[h];if(y.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(y.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const b=i.hemi[M];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),M++}}}return{setup:a,setupView:l,state:i}}function hf(n){const e=new BM(n),t=[],i=[],s=[];function r(f){d.camera=f,t.length=0,i.length=0,s.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function zM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new hf(n),e.set(s,[a])):r>=o.length?(a=new hf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GM=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],kM=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],pf=new Rt,Ys=new q,Oa=new q;function WM(n,e,t){let i=new eh;const s=new ft,r=new ft,o=new yt,a=new Q_,l=new e0,c={},u=t.maxTextureSize,d={[Li]:Qt,[Qt]:Li,[Dn]:Dn},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:HM,fragmentShader:VM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new fi;_.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Vn(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let h=this.type;this.render=function(T,P,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Ag&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=so);const A=n.getRenderTarget(),U=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ni),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const X=h!==this.type;X&&P.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(O=>O.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,O=T.length;W<O;W++){const H=T[W],B=H.shadow;if(B===void 0){Ge("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const J=B.getFrameExtents();s.multiply(J),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,B.mapSize.y=r.y));const $=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=$,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Zs){if(H.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Bn(s.x,s.y,{format:Zi,type:ai,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new Ns(s.x,s.y,In),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=li,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ot,B.map.depthTexture.magFilter=Ot}else H.isPointLight?(B.map=new lh(s.x),B.map.depthTexture=new $_(s.x,Hn)):(B.map=new Bn(s.x,s.y),B.map.depthTexture=new Ns(s.x,s.y,Hn)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=li,this.type===so?(B.map.depthTexture.compareFunction=$?hc:dc,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ot,B.map.depthTexture.magFilter=Ot);B.camera.updateProjectionMatrix()}const le=B.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<le;ae++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,ae),n.clear();else{ae===0&&(n.setRenderTarget(B.map),n.clear());const be=B.getViewport(ae);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),L.viewport(o)}if(H.isPointLight){const be=B.camera,Fe=B.matrix,Xe=H.distance||be.far;Xe!==be.far&&(be.far=Xe,be.updateProjectionMatrix()),Ys.setFromMatrixPosition(H.matrixWorld),be.position.copy(Ys),Oa.copy(be.position),Oa.add(GM[ae]),be.up.copy(kM[ae]),be.lookAt(Oa),be.updateMatrixWorld(),Fe.makeTranslation(-Ys.x,-Ys.y,-Ys.z),pf.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),B._frustum.setFromProjectionMatrix(pf,be.coordinateSystem,be.reversedDepth)}else B.updateMatrices(H);i=B.getFrustum(),b(P,x,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===Zs&&E(B,x),B.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(A,U,R)};function E(T,P){const x=e.update(M);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bn(s.x,s.y,{format:Zi,type:ai})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,x,f,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,x,p,M,null)}function y(T,P,x,A){let U=null;const R=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)U=R;else if(U=x.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const L=U.uuid,X=P.uuid;let W=c[L];W===void 0&&(W={},c[L]=W);let O=W[X];O===void 0&&(O=U.clone(),W[X]=O,P.addEventListener("dispose",I)),U=O}if(U.visible=P.visible,U.wireframe=P.wireframe,A===Zs?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:d[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const L=n.properties.get(U);L.light=x}return U}function b(T,P,x,A,U){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===Zs)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const X=e.update(T),W=T.material;if(Array.isArray(W)){const O=X.groups;for(let H=0,B=O.length;H<B;H++){const J=O[H],$=W[J.materialIndex];if($&&$.visible){const le=y(T,$,A,U);T.onBeforeShadow(n,T,P,x,X,le,J),n.renderBufferDirect(x,null,X,le,T,J),T.onAfterShadow(n,T,P,x,X,le,J)}}}else if(W.visible){const O=y(T,W,A,U);T.onBeforeShadow(n,T,P,x,X,O,null),n.renderBufferDirect(x,null,X,O,T,null),T.onAfterShadow(n,T,P,x,X,O,null)}}const L=T.children;for(let X=0,W=L.length;X<W;X++)b(L[X],P,x,A,U)}function I(T){T.target.removeEventListener("dispose",I);for(const x in c){const A=c[x],U=T.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}function XM(n,e){function t(){let F=!1;const Ee=new yt;let ie=null;const Re=new yt(0,0,0,0);return{setMask:function(ye){ie!==ye&&!F&&(n.colorMask(ye,ye,ye,ye),ie=ye)},setLocked:function(ye){F=ye},setClear:function(ye,ue,Ue,Ye,Mt){Mt===!0&&(ye*=Ye,ue*=Ye,Ue*=Ye),Ee.set(ye,ue,Ue,Ye),Re.equals(Ee)===!1&&(n.clearColor(ye,ue,Ue,Ye),Re.copy(Ee))},reset:function(){F=!1,ie=null,Re.set(-1,0,0,0)}}}function i(){let F=!1,Ee=!1,ie=null,Re=null,ye=null;return{setReversed:function(ue){if(Ee!==ue){const Ue=e.get("EXT_clip_control");ue?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Ee=ue;const Ye=ye;ye=null,this.setClear(Ye)}},getReversed:function(){return Ee},setTest:function(ue){ue?_e(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(ue){ie!==ue&&!F&&(n.depthMask(ue),ie=ue)},setFunc:function(ue){if(Ee&&(ue=r_[ue]),Re!==ue){switch(ue){case Ja:n.depthFunc(n.NEVER);break;case Qa:n.depthFunc(n.ALWAYS);break;case el:n.depthFunc(n.LESS);break;case Is:n.depthFunc(n.LEQUAL);break;case tl:n.depthFunc(n.EQUAL);break;case nl:n.depthFunc(n.GEQUAL);break;case il:n.depthFunc(n.GREATER);break;case sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=ue}},setLocked:function(ue){F=ue},setClear:function(ue){ye!==ue&&(ye=ue,Ee&&(ue=1-ue),n.clearDepth(ue))},reset:function(){F=!1,ie=null,Re=null,ye=null,Ee=!1}}}function s(){let F=!1,Ee=null,ie=null,Re=null,ye=null,ue=null,Ue=null,Ye=null,Mt=null;return{setTest:function(lt){F||(lt?_e(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(lt){Ee!==lt&&!F&&(n.stencilMask(lt),Ee=lt)},setFunc:function(lt,Gn,yn){(ie!==lt||Re!==Gn||ye!==yn)&&(n.stencilFunc(lt,Gn,yn),ie=lt,Re=Gn,ye=yn)},setOp:function(lt,Gn,yn){(ue!==lt||Ue!==Gn||Ye!==yn)&&(n.stencilOp(lt,Gn,yn),ue=lt,Ue=Gn,Ye=yn)},setLocked:function(lt){F=lt},setClear:function(lt){Mt!==lt&&(n.clearStencil(lt),Mt=lt)},reset:function(){F=!1,Ee=null,ie=null,Re=null,ye=null,ue=null,Ue=null,Ye=null,Mt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f={},p=new WeakMap,_=[],M=null,g=!1,h=null,E=null,y=null,b=null,I=null,T=null,P=null,x=new ut(0,0,0),A=0,U=!1,R=null,L=null,X=null,W=null,O=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,J=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec($)[1]),B=J>=1):$.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=J>=2);let le=null,ae={};const be=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Xe=new yt().fromArray(be),Ve=new yt().fromArray(Fe);function ee(F,Ee,ie,Re){const ye=new Uint8Array(4),ue=n.createTexture();n.bindTexture(F,ue),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<ie;Ue++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(Ee+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return ue}const Se={};Se[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(n.DEPTH_TEST),o.setFunc(Is),ne(!1),ce(pu),_e(n.CULL_FACE),te(ni);function _e(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Be(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function ze(F,Ee){return f[F]!==Ee?(n.bindFramebuffer(F,Ee),f[F]=Ee,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ee),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function He(F,Ee){let ie=_,Re=!1;if(F){ie=p.get(Ee),ie===void 0&&(ie=[],p.set(Ee,ie));const ye=F.textures;if(ie.length!==ye.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Ue=ye.length;ue<Ue;ue++)ie[ue]=n.COLOR_ATTACHMENT0+ue;ie.length=ye.length,Re=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,Re=!0);Re&&n.drawBuffers(ie)}function C(F){return M!==F?(n.useProgram(F),M=F,!0):!1}const D={[qi]:n.FUNC_ADD,[Cg]:n.FUNC_SUBTRACT,[Rg]:n.FUNC_REVERSE_SUBTRACT};D[Pg]=n.MIN,D[Lg]=n.MAX;const V={[Dg]:n.ZERO,[Ig]:n.ONE,[Ug]:n.SRC_COLOR,[ja]:n.SRC_ALPHA,[Hg]:n.SRC_ALPHA_SATURATE,[Bg]:n.DST_COLOR,[Fg]:n.DST_ALPHA,[Ng]:n.ONE_MINUS_SRC_COLOR,[Za]:n.ONE_MINUS_SRC_ALPHA,[zg]:n.ONE_MINUS_DST_COLOR,[Og]:n.ONE_MINUS_DST_ALPHA,[Vg]:n.CONSTANT_COLOR,[Gg]:n.ONE_MINUS_CONSTANT_COLOR,[kg]:n.CONSTANT_ALPHA,[Wg]:n.ONE_MINUS_CONSTANT_ALPHA};function te(F,Ee,ie,Re,ye,ue,Ue,Ye,Mt,lt){if(F===ni){g===!0&&(Be(n.BLEND),g=!1);return}if(g===!1&&(_e(n.BLEND),g=!0),F!==wg){if(F!==h||lt!==U){if((E!==qi||I!==qi)&&(n.blendEquation(n.FUNC_ADD),E=qi,I=qi),lt)switch(F){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mu:n.blendFunc(n.ONE,n.ONE);break;case gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _u:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:it("WebGLState: Invalid blending: ",F);break}else switch(F){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gu:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _u:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",F);break}y=null,b=null,T=null,P=null,x.set(0,0,0),A=0,h=F,U=lt}return}ye=ye||Ee,ue=ue||ie,Ue=Ue||Re,(Ee!==E||ye!==I)&&(n.blendEquationSeparate(D[Ee],D[ye]),E=Ee,I=ye),(ie!==y||Re!==b||ue!==T||Ue!==P)&&(n.blendFuncSeparate(V[ie],V[Re],V[ue],V[Ue]),y=ie,b=Re,T=ue,P=Ue),(Ye.equals(x)===!1||Mt!==A)&&(n.blendColor(Ye.r,Ye.g,Ye.b,Mt),x.copy(Ye),A=Mt),h=F,U=!1}function K(F,Ee){F.side===Dn?Be(n.CULL_FACE):_e(n.CULL_FACE);let ie=F.side===Qt;Ee&&(ie=!ie),ne(ie),F.blending===Cs&&F.transparent===!1?te(ni):te(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Re=F.stencilWrite;a.setTest(Re),Re&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),w(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(F){R!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),R=F)}function ce(F){F!==yg?(_e(n.CULL_FACE),F!==L&&(F===pu?n.cullFace(n.BACK):F===Tg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),L=F}function he(F){F!==X&&(B&&n.lineWidth(F),X=F)}function w(F,Ee,ie){F?(_e(n.POLYGON_OFFSET_FILL),(W!==Ee||O!==ie)&&(W=Ee,O=ie,o.getReversed()&&(Ee=-Ee),n.polygonOffset(Ee,ie))):Be(n.POLYGON_OFFSET_FILL)}function oe(F){F?_e(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function ge(F){F===void 0&&(F=n.TEXTURE0+H-1),le!==F&&(n.activeTexture(F),le=F)}function fe(F,Ee,ie){ie===void 0&&(le===null?ie=n.TEXTURE0+H-1:ie=le);let Re=ae[ie];Re===void 0&&(Re={type:void 0,texture:void 0},ae[ie]=Re),(Re.type!==F||Re.texture!==Ee)&&(le!==ie&&(n.activeTexture(ie),le=ie),n.bindTexture(F,Ee||Se[F]),Re.type=F,Re.texture=Ee)}function Q(){const F=ae[le];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function me(){try{n.compressedTexImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function v(){try{n.compressedTexImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function m(){try{n.texSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function N(){try{n.texSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function se(){try{n.compressedTexSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function de(){try{n.texStorage2D(...arguments)}catch(F){it("WebGLState:",F)}}function pe(){try{n.texStorage3D(...arguments)}catch(F){it("WebGLState:",F)}}function Z(){try{n.texImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function re(){try{n.texImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function xe(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function Te(F,Ee){d[F]!==Ee&&(n.pixelStorei(F,Ee),d[F]=Ee)}function Me(F){Xe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Xe.copy(F))}function ve(F){Ve.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ve.copy(F))}function qe(F,Ee){let ie=c.get(Ee);ie===void 0&&(ie=new WeakMap,c.set(Ee,ie));let Re=ie.get(F);Re===void 0&&(Re=n.getUniformBlockIndex(Ee,F.name),ie.set(F,Re))}function je(F,Ee){const Re=c.get(Ee).get(F);l.get(Ee)!==Re&&(n.uniformBlockBinding(Ee,Re,F.__bindingPointIndex),l.set(Ee,Re))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},le=null,ae={},f={},p=new WeakMap,_=[],M=null,g=!1,h=null,E=null,y=null,b=null,I=null,T=null,P=null,x=new ut(0,0,0),A=0,U=!1,R=null,L=null,X=null,W=null,O=null,Xe.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_e,disable:Be,bindFramebuffer:ze,drawBuffers:He,useProgram:C,setBlending:te,setMaterial:K,setFlipSided:ne,setCullFace:ce,setLineWidth:he,setPolygonOffset:w,setScissorTest:oe,activeTexture:ge,bindTexture:fe,unbindTexture:Q,compressedTexImage2D:me,compressedTexImage3D:v,texImage2D:Z,texImage3D:re,pixelStorei:Te,getParameter:xe,updateUBOMapping:qe,uniformBlockBinding:je,texStorage2D:de,texStorage3D:pe,texSubImage2D:m,texSubImage3D:N,compressedTexSubImage2D:j,compressedTexSubImage3D:se,scissor:Me,viewport:ve,reset:st}}function qM(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap,d=new Set;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(v,m){return _?new OffscreenCanvas(v,m):gr("canvas")}function g(v,m,N){let j=1;const se=me(v);if((se.width>N||se.height>N)&&(j=N/Math.max(se.width,se.height)),j<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const de=Math.floor(j*se.width),pe=Math.floor(j*se.height);f===void 0&&(f=M(de,pe));const Z=m?M(de,pe):f;return Z.width=de,Z.height=pe,Z.getContext("2d").drawImage(v,0,0,de,pe),Ge("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+de+"x"+pe+")."),Z}else return"data"in v&&Ge("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),v;return v}function h(v){return v.generateMipmaps}function E(v){n.generateMipmap(v)}function y(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(v,m,N,j,se,de=!1){if(v!==null){if(n[v]!==void 0)return n[v];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let pe;j&&(pe=e.get("EXT_texture_norm16"),pe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=m;if(m===n.RED&&(N===n.FLOAT&&(Z=n.R32F),N===n.HALF_FLOAT&&(Z=n.R16F),N===n.UNSIGNED_BYTE&&(Z=n.R8),N===n.UNSIGNED_SHORT&&pe&&(Z=pe.R16_EXT),N===n.SHORT&&pe&&(Z=pe.R16_SNORM_EXT)),m===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.R8UI),N===n.UNSIGNED_SHORT&&(Z=n.R16UI),N===n.UNSIGNED_INT&&(Z=n.R32UI),N===n.BYTE&&(Z=n.R8I),N===n.SHORT&&(Z=n.R16I),N===n.INT&&(Z=n.R32I)),m===n.RG&&(N===n.FLOAT&&(Z=n.RG32F),N===n.HALF_FLOAT&&(Z=n.RG16F),N===n.UNSIGNED_BYTE&&(Z=n.RG8),N===n.UNSIGNED_SHORT&&pe&&(Z=pe.RG16_EXT),N===n.SHORT&&pe&&(Z=pe.RG16_SNORM_EXT)),m===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.RG8UI),N===n.UNSIGNED_SHORT&&(Z=n.RG16UI),N===n.UNSIGNED_INT&&(Z=n.RG32UI),N===n.BYTE&&(Z=n.RG8I),N===n.SHORT&&(Z=n.RG16I),N===n.INT&&(Z=n.RG32I)),m===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),N===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),N===n.UNSIGNED_INT&&(Z=n.RGB32UI),N===n.BYTE&&(Z=n.RGB8I),N===n.SHORT&&(Z=n.RGB16I),N===n.INT&&(Z=n.RGB32I)),m===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),N===n.UNSIGNED_INT&&(Z=n.RGBA32UI),N===n.BYTE&&(Z=n.RGBA8I),N===n.SHORT&&(Z=n.RGBA16I),N===n.INT&&(Z=n.RGBA32I)),m===n.RGB&&(N===n.UNSIGNED_SHORT&&pe&&(Z=pe.RGB16_EXT),N===n.SHORT&&pe&&(Z=pe.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),m===n.RGBA){const re=de?Ao:et.getTransfer(se);N===n.FLOAT&&(Z=n.RGBA32F),N===n.HALF_FLOAT&&(Z=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Z=re===at?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&pe&&(Z=pe.RGBA16_EXT),N===n.SHORT&&pe&&(Z=pe.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function I(v,m){let N;return v?m===null||m===Hn||m===mr?N=n.DEPTH24_STENCIL8:m===In?N=n.DEPTH32F_STENCIL8:m===pr&&(N=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Hn||m===mr?N=n.DEPTH_COMPONENT24:m===In?N=n.DEPTH_COMPONENT32F:m===pr&&(N=n.DEPTH_COMPONENT16),N}function T(v,m){return h(v)===!0||v.isFramebufferTexture&&v.minFilter!==Ot&&v.minFilter!==Bt?Math.log2(Math.max(m.width,m.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?m.mipmaps.length:1}function P(v){const m=v.target;m.removeEventListener("dispose",P),A(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&d.delete(m)}function x(v){const m=v.target;m.removeEventListener("dispose",x),R(m)}function A(v){const m=i.get(v);if(m.__webglInit===void 0)return;const N=v.source,j=p.get(N);if(j){const se=j[m.__cacheKey];se.usedTimes--,se.usedTimes===0&&U(v),Object.keys(j).length===0&&p.delete(N)}i.remove(v)}function U(v){const m=i.get(v);n.deleteTexture(m.__webglTexture);const N=v.source,j=p.get(N);delete j[m.__cacheKey],o.memory.textures--}function R(v){const m=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(m.__webglFramebuffer[j]))for(let se=0;se<m.__webglFramebuffer[j].length;se++)n.deleteFramebuffer(m.__webglFramebuffer[j][se]);else n.deleteFramebuffer(m.__webglFramebuffer[j]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[j])}else{if(Array.isArray(m.__webglFramebuffer))for(let j=0;j<m.__webglFramebuffer.length;j++)n.deleteFramebuffer(m.__webglFramebuffer[j]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let j=0;j<m.__webglColorRenderbuffer.length;j++)m.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[j]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const N=v.textures;for(let j=0,se=N.length;j<se;j++){const de=i.get(N[j]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(N[j])}i.remove(v)}let L=0;function X(){L=0}function W(){return L}function O(v){L=v}function H(){const v=L;return v>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),L+=1,v}function B(v){const m=[];return m.push(v.wrapS),m.push(v.wrapT),m.push(v.wrapR||0),m.push(v.magFilter),m.push(v.minFilter),m.push(v.anisotropy),m.push(v.internalFormat),m.push(v.format),m.push(v.type),m.push(v.generateMipmaps),m.push(v.premultiplyAlpha),m.push(v.flipY),m.push(v.unpackAlignment),m.push(v.colorSpace),m.join()}function J(v,m){const N=i.get(v);if(v.isVideoTexture&&fe(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&N.__version!==v.version){const j=v.image;if(j===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(N,v,m);return}}else v.isExternalTexture&&(N.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+m)}function $(v,m){const N=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&N.__version!==v.version){Be(N,v,m);return}else v.isExternalTexture&&(N.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+m)}function le(v,m){const N=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&N.__version!==v.version){Be(N,v,m);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+m)}function ae(v,m){const N=i.get(v);if(v.isCubeDepthTexture!==!0&&v.version>0&&N.__version!==v.version){ze(N,v,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+m)}const be={[rl]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[ol]:n.MIRRORED_REPEAT},Fe={[Ot]:n.NEAREST,[$g]:n.NEAREST_MIPMAP_NEAREST,[Lr]:n.NEAREST_MIPMAP_LINEAR,[Bt]:n.LINEAR,[la]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},Xe={[jg]:n.NEVER,[t_]:n.ALWAYS,[Zg]:n.LESS,[dc]:n.LEQUAL,[Jg]:n.EQUAL,[hc]:n.GEQUAL,[Qg]:n.GREATER,[e_]:n.NOTEQUAL};function Ve(v,m){if(m.type===In&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Bt||m.magFilter===la||m.magFilter===Lr||m.magFilter===Ai||m.minFilter===Bt||m.minFilter===la||m.minFilter===Lr||m.minFilter===Ai)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,be[m.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,be[m.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,be[m.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,Fe[m.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,Fe[m.minFilter]),m.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,Xe[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Ot||m.minFilter!==Lr&&m.minFilter!==Ai||m.type===In&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function ee(v,m){let N=!1;v.__webglInit===void 0&&(v.__webglInit=!0,m.addEventListener("dispose",P));const j=m.source;let se=p.get(j);se===void 0&&(se={},p.set(j,se));const de=B(m);if(de!==v.__cacheKey){se[de]===void 0&&(se[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),se[de].usedTimes++;const pe=se[v.__cacheKey];pe!==void 0&&(se[v.__cacheKey].usedTimes--,pe.usedTimes===0&&U(m)),v.__cacheKey=de,v.__webglTexture=se[de].texture}return N}function Se(v,m,N){return Math.floor(Math.floor(v/N)/m)}function _e(v,m,N,j){const de=v.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,N,j,m.data);else{de.sort((Te,Me)=>Te.start-Me.start);let pe=0;for(let Te=1;Te<de.length;Te++){const Me=de[pe],ve=de[Te],qe=Me.start+Me.count,je=Se(ve.start,m.width,4),st=Se(Me.start,m.width,4);ve.start<=qe+1&&je===st&&Se(ve.start+ve.count-1,m.width,4)===je?Me.count=Math.max(Me.count,ve.start+ve.count-Me.start):(++pe,de[pe]=ve)}de.length=pe+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),xe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let Te=0,Me=de.length;Te<Me;Te++){const ve=de[Te],qe=Math.floor(ve.start/4),je=Math.ceil(ve.count/4),st=qe%m.width,F=Math.floor(qe/m.width),Ee=je,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,st),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,st,F,Ee,ie,N,j,m.data)}v.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function Be(v,m,N){let j=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(j=n.TEXTURE_3D);const se=ee(v,m),de=m.source;t.bindTexture(j,v.__webglTexture,n.TEXTURE0+N);const pe=i.get(de);if(de.version!==pe.__version||se===!0){if(t.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const ie=et.getPrimaries(et.workingColorSpace),Re=m.colorSpace===Ti?null:et.getPrimaries(m.colorSpace),ye=m.colorSpace===Ti||ie===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment);let re=g(m.image,!1,s.maxTextureSize);re=Q(m,re);const xe=r.convert(m.format,m.colorSpace),Te=r.convert(m.type);let Me=b(m.internalFormat,xe,Te,m.normalized,m.colorSpace,m.isVideoTexture);Ve(j,m);let ve;const qe=m.mipmaps,je=m.isVideoTexture!==!0,st=pe.__version===void 0||se===!0,F=de.dataReady,Ee=T(m,re);if(m.isDepthTexture)Me=I(m.format===Yi,m.type),st&&(je?t.texStorage2D(n.TEXTURE_2D,1,Me,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Me,re.width,re.height,0,xe,Te,null));else if(m.isDataTexture)if(qe.length>0){je&&st&&t.texStorage2D(n.TEXTURE_2D,Ee,Me,qe[0].width,qe[0].height);for(let ie=0,Re=qe.length;ie<Re;ie++)ve=qe[ie],je?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,xe,Te,ve.data):t.texImage2D(n.TEXTURE_2D,ie,Me,ve.width,ve.height,0,xe,Te,ve.data);m.generateMipmaps=!1}else je?(st&&t.texStorage2D(n.TEXTURE_2D,Ee,Me,re.width,re.height),F&&_e(m,re,xe,Te)):t.texImage2D(n.TEXTURE_2D,0,Me,re.width,re.height,0,xe,Te,re.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){je&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Me,qe[0].width,qe[0].height,re.depth);for(let ie=0,Re=qe.length;ie<Re;ie++)if(ve=qe[ie],m.format!==Sn)if(xe!==null)if(je){if(F)if(m.layerUpdates.size>0){const ye=Wu(ve.width,ve.height,m.format,m.type);for(const ue of m.layerUpdates){const Ue=ve.data.subarray(ue*ye/ve.data.BYTES_PER_ELEMENT,(ue+1)*ye/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,ue,ve.width,ve.height,1,xe,Ue)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,re.depth,xe,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Me,ve.width,ve.height,re.depth,0,ve.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,re.depth,xe,Te,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Me,ve.width,ve.height,re.depth,0,xe,Te,ve.data)}else{je&&st&&t.texStorage2D(n.TEXTURE_2D,Ee,Me,qe[0].width,qe[0].height);for(let ie=0,Re=qe.length;ie<Re;ie++)ve=qe[ie],m.format!==Sn?xe!==null?je?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Me,ve.width,ve.height,0,ve.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,xe,Te,ve.data):t.texImage2D(n.TEXTURE_2D,ie,Me,ve.width,ve.height,0,xe,Te,ve.data)}else if(m.isDataArrayTexture)if(je){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Me,re.width,re.height,re.depth),F)if(m.layerUpdates.size>0){const ie=Wu(re.width,re.height,m.format,m.type);for(const Re of m.layerUpdates){const ye=re.data.subarray(Re*ie/re.data.BYTES_PER_ELEMENT,(Re+1)*ie/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,re.width,re.height,1,xe,Te,ye)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,xe,Te,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,re.width,re.height,re.depth,0,xe,Te,re.data);else if(m.isData3DTexture)je?(st&&t.texStorage3D(n.TEXTURE_3D,Ee,Me,re.width,re.height,re.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,xe,Te,re.data)):t.texImage3D(n.TEXTURE_3D,0,Me,re.width,re.height,re.depth,0,xe,Te,re.data);else if(m.isFramebufferTexture){if(st)if(je)t.texStorage2D(n.TEXTURE_2D,Ee,Me,re.width,re.height);else{let ie=re.width,Re=re.height;for(let ye=0;ye<Ee;ye++)t.texImage2D(n.TEXTURE_2D,ye,Me,ie,Re,0,xe,Te,null),ie>>=1,Re>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in n){const ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),re.parentNode!==ie){ie.appendChild(re),d.add(m),ie.onpaint=Ye=>{const Mt=Ye.changedElements;for(const lt of d)Mt.includes(lt.image)&&(lt.needsUpdate=!0)},ie.requestPaint();return}const Re=0,ye=n.RGBA,ue=n.RGBA,Ue=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Re,ye,ue,Ue,re),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(qe.length>0){if(je&&st){const ie=me(qe[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Me,ie.width,ie.height)}for(let ie=0,Re=qe.length;ie<Re;ie++)ve=qe[ie],je?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,xe,Te,ve):t.texImage2D(n.TEXTURE_2D,ie,Me,xe,Te,ve);m.generateMipmaps=!1}else if(je){if(st){const ie=me(re);t.texStorage2D(n.TEXTURE_2D,Ee,Me,ie.width,ie.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Te,re)}else t.texImage2D(n.TEXTURE_2D,0,Me,xe,Te,re);h(m)&&E(j),pe.__version=de.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function ze(v,m,N){if(m.image.length!==6)return;const j=ee(v,m),se=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+N);const de=i.get(se);if(se.version!==de.__version||j===!0){t.activeTexture(n.TEXTURE0+N);const pe=et.getPrimaries(et.workingColorSpace),Z=m.colorSpace===Ti?null:et.getPrimaries(m.colorSpace),re=m.colorSpace===Ti||pe===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const xe=m.isCompressedTexture||m.image[0].isCompressedTexture,Te=m.image[0]&&m.image[0].isDataTexture,Me=[];for(let ue=0;ue<6;ue++)!xe&&!Te?Me[ue]=g(m.image[ue],!0,s.maxCubemapSize):Me[ue]=Te?m.image[ue].image:m.image[ue],Me[ue]=Q(m,Me[ue]);const ve=Me[0],qe=r.convert(m.format,m.colorSpace),je=r.convert(m.type),st=b(m.internalFormat,qe,je,m.normalized,m.colorSpace),F=m.isVideoTexture!==!0,Ee=de.__version===void 0||j===!0,ie=se.dataReady;let Re=T(m,ve);Ve(n.TEXTURE_CUBE_MAP,m);let ye;if(xe){F&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,st,ve.width,ve.height);for(let ue=0;ue<6;ue++){ye=Me[ue].mipmaps;for(let Ue=0;Ue<ye.length;Ue++){const Ye=ye[Ue];m.format!==Sn?qe!==null?F?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,0,0,Ye.width,Ye.height,qe,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,st,Ye.width,Ye.height,0,Ye.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,0,0,Ye.width,Ye.height,qe,je,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,st,Ye.width,Ye.height,0,qe,je,Ye.data)}}}else{if(ye=m.mipmaps,F&&Ee){ye.length>0&&Re++;const ue=me(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,st,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Te){F?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Me[ue].width,Me[ue].height,qe,je,Me[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,st,Me[ue].width,Me[ue].height,0,qe,je,Me[ue].data);for(let Ue=0;Ue<ye.length;Ue++){const Mt=ye[Ue].image[ue].image;F?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,0,0,Mt.width,Mt.height,qe,je,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,st,Mt.width,Mt.height,0,qe,je,Mt.data)}}else{F?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,qe,je,Me[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,st,qe,je,Me[ue]);for(let Ue=0;Ue<ye.length;Ue++){const Ye=ye[Ue];F?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,0,0,qe,je,Ye.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,st,qe,je,Ye.image[ue])}}}h(m)&&E(n.TEXTURE_CUBE_MAP),de.__version=se.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function He(v,m,N,j,se,de){const pe=r.convert(N.format,N.colorSpace),Z=r.convert(N.type),re=b(N.internalFormat,pe,Z,N.normalized,N.colorSpace),xe=i.get(m),Te=i.get(N);if(Te.__renderTarget=m,!xe.__hasExternalTextures){const Me=Math.max(1,m.width>>de),ve=Math.max(1,m.height>>de);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,de,re,Me,ve,m.depth,0,pe,Z,null):t.texImage2D(se,de,re,Me,ve,0,pe,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),ge(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,se,Te.__webglTexture,0,oe(m)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,se,Te.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(v,m,N){if(n.bindRenderbuffer(n.RENDERBUFFER,v),m.depthBuffer){const j=m.depthTexture,se=j&&j.isDepthTexture?j.type:null,de=I(m.stencilBuffer,se),pe=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ge(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(m),de,m.width,m.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(m),de,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,de,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,v)}else{const j=m.textures;for(let se=0;se<j.length;se++){const de=j[se],pe=r.convert(de.format,de.colorSpace),Z=r.convert(de.type),re=b(de.internalFormat,pe,Z,de.normalized,de.colorSpace);ge(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(m),re,m.width,m.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(m),re,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,re,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function D(v,m,N){const j=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(m.depthTexture);if(se.__renderTarget=m,(!se.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),j){if(se.__webglInit===void 0&&(se.__webglInit=!0,m.depthTexture.addEventListener("dispose",P)),se.__webglTexture===void 0){se.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,m.depthTexture);const xe=r.convert(m.depthTexture.format),Te=r.convert(m.depthTexture.type);let Me;m.depthTexture.format===li?Me=n.DEPTH_COMPONENT24:m.depthTexture.format===Yi&&(Me=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Me,m.width,m.height,0,xe,Te,null)}}else J(m.depthTexture,0);const de=se.__webglTexture,pe=oe(m),Z=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,re=m.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===li)ge(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,Z,de,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,re,Z,de,0);else if(m.depthTexture.format===Yi)ge(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,Z,de,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,re,Z,de,0);else throw new Error("Unknown depthTexture format")}function V(v){const m=i.get(v),N=v.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==v.depthTexture){const j=v.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),j){const se=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,j.removeEventListener("dispose",se)};j.addEventListener("dispose",se),m.__depthDisposeCallback=se}m.__boundDepthTexture=j}if(v.depthTexture&&!m.__autoAllocateDepthBuffer)if(N)for(let j=0;j<6;j++)D(m.__webglFramebuffer[j],v,j);else{const j=v.texture.mipmaps;j&&j.length>0?D(m.__webglFramebuffer[0],v,0):D(m.__webglFramebuffer,v,0)}else if(N){m.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[j]),m.__webglDepthbuffer[j]===void 0)m.__webglDepthbuffer[j]=n.createRenderbuffer(),C(m.__webglDepthbuffer[j],v,!1);else{const se=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=m.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,de)}}else{const j=v.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),C(m.__webglDepthbuffer,v,!1);else{const se=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(v,m,N){const j=i.get(v);m!==void 0&&He(j.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&V(v)}function K(v){const m=v.texture,N=i.get(v),j=i.get(m);v.addEventListener("dispose",x);const se=v.textures,de=v.isWebGLCubeRenderTarget===!0,pe=se.length>1;if(pe||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=m.version,o.memory.textures++),de){N.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer[Z]=[];for(let re=0;re<m.mipmaps.length;re++)N.__webglFramebuffer[Z][re]=n.createFramebuffer()}else N.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer=[];for(let Z=0;Z<m.mipmaps.length;Z++)N.__webglFramebuffer[Z]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(pe)for(let Z=0,re=se.length;Z<re;Z++){const xe=i.get(se[Z]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(v.samples>0&&ge(v)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Z=0;Z<se.length;Z++){const re=se[Z];N.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[Z]);const xe=r.convert(re.format,re.colorSpace),Te=r.convert(re.type),Me=b(re.internalFormat,xe,Te,re.normalized,re.colorSpace,v.isXRRenderTarget===!0),ve=oe(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,Me,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,N.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),C(N.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,m);for(let Z=0;Z<6;Z++)if(m.mipmaps&&m.mipmaps.length>0)for(let re=0;re<m.mipmaps.length;re++)He(N.__webglFramebuffer[Z][re],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re);else He(N.__webglFramebuffer[Z],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);h(m)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let Z=0,re=se.length;Z<re;Z++){const xe=se[Z],Te=i.get(xe);let Me=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(Me=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,Te.__webglTexture),Ve(Me,xe),He(N.__webglFramebuffer,v,xe,n.COLOR_ATTACHMENT0+Z,Me,0),h(xe)&&E(Me)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(Z=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,j.__webglTexture),Ve(Z,m),m.mipmaps&&m.mipmaps.length>0)for(let re=0;re<m.mipmaps.length;re++)He(N.__webglFramebuffer[re],v,m,n.COLOR_ATTACHMENT0,Z,re);else He(N.__webglFramebuffer,v,m,n.COLOR_ATTACHMENT0,Z,0);h(m)&&E(Z),t.unbindTexture()}v.depthBuffer&&V(v)}function ne(v){const m=v.textures;for(let N=0,j=m.length;N<j;N++){const se=m[N];if(h(se)){const de=y(v),pe=i.get(se).__webglTexture;t.bindTexture(de,pe),E(de),t.unbindTexture()}}}const ce=[],he=[];function w(v){if(v.samples>0){if(ge(v)===!1){const m=v.textures,N=v.width,j=v.height;let se=n.COLOR_BUFFER_BIT;const de=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(v),Z=m.length>1;if(Z)for(let xe=0;xe<m.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const re=v.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let xe=0;xe<m.length;xe++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);const Te=i.get(m[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,N,j,0,0,N,j,se,n.NEAREST),l===!0&&(ce.length=0,he.length=0,ce.push(n.COLOR_ATTACHMENT0+xe),v.depthBuffer&&v.resolveDepthBuffer===!1&&(ce.push(de),he.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,he)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let xe=0;xe<m.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);const Te=i.get(m[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const m=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function oe(v){return Math.min(s.maxSamples,v.samples)}function ge(v){const m=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function fe(v){const m=o.render.frame;u.get(v)!==m&&(u.set(v,m),v.update())}function Q(v,m){const N=v.colorSpace,j=v.format,se=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||N!==To&&N!==Ti&&(et.getTransfer(N)===at?(j!==Sn||se!==hn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",N)),m}function me(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.getTextureUnits=W,this.setTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=le,this.setTextureCube=ae,this.rebindTextures=te,this.setupRenderTarget=K,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=He,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $M(n,e){function t(i,s=Ti){let r;const o=et.getTransfer(s);if(i===hn)return n.UNSIGNED_BYTE;if(i===ac)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hd)return n.BYTE;if(i===Vd)return n.SHORT;if(i===pr)return n.UNSIGNED_SHORT;if(i===oc)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===ai)return n.HALF_FLOAT;if(i===Wd)return n.ALPHA;if(i===Xd)return n.RGB;if(i===Sn)return n.RGBA;if(i===li)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===qd)return n.RED;if(i===cc)return n.RED_INTEGER;if(i===Zi)return n.RG;if(i===uc)return n.RG_INTEGER;if(i===fc)return n.RGBA_INTEGER;if(i===ro||i===oo||i===ao||i===lo)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===al||i===ll||i===cl||i===ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fl||i===dl||i===hl||i===pl||i===ml||i===bo||i===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fl||i===dl)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===pl)return r.COMPRESSED_R11_EAC;if(i===ml)return r.COMPRESSED_SIGNED_R11_EAC;if(i===bo)return r.COMPRESSED_RG11_EAC;if(i===gl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_l||i===vl||i===xl||i===Sl||i===Ml||i===El||i===bl||i===yl||i===Tl||i===Al||i===wl||i===Cl||i===Rl||i===Pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_l)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ml)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===El)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Al)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ll||i===Dl||i===Il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ll)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ul||i===Nl||i===yo||i===Fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ul)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const YM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new nh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bn({vertexShader:YM,fragmentShader:KM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vn(new yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZM extends es{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const M=typeof XRWebGLBinding<"u",g=new jM,h={},E=t.getContextAttributes();let y=null,b=null;const I=[],T=[],P=new ft;let x=null;const A=new dn;A.viewport=new yt;const U=new dn;U.viewport=new yt;const R=[A,U],L=new o0;let X=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Se=I[ee];return Se===void 0&&(Se=new pa,I[ee]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ee){let Se=I[ee];return Se===void 0&&(Se=new pa,I[ee]=Se),Se.getGripSpace()},this.getHand=function(ee){let Se=I[ee];return Se===void 0&&(Se=new pa,I[ee]=Se),Se.getHandSpace()};function O(ee){const Se=T.indexOf(ee.inputSource);if(Se===-1)return;const _e=I[Se];_e!==void 0&&(_e.update(ee.inputSource,ee.frame,c||o),_e.dispatchEvent({type:ee.type,data:ee.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",B);for(let ee=0;ee<I.length;ee++){const Se=T[ee];Se!==null&&(T[ee]=null,I[ee].disconnect(Se))}X=null,W=null,g.reset();for(const ee in h)delete h[ee];e.setRenderTarget(y),p=null,f=null,d=null,s=null,b=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",B),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Be=null,ze=null;E.depth&&(ze=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=E.stencil?Yi:li,Be=E.stencil?mr:Hn);const He={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(He),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Bn(f.textureWidth,f.textureHeight,{format:Sn,type:hn,depthTexture:new Ns(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Bn(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(ee){for(let Se=0;Se<ee.removed.length;Se++){const _e=ee.removed[Se],Be=T.indexOf(_e);Be>=0&&(T[Be]=null,I[Be].disconnect(_e))}for(let Se=0;Se<ee.added.length;Se++){const _e=ee.added[Se];let Be=T.indexOf(_e);if(Be===-1){for(let He=0;He<I.length;He++)if(He>=T.length){T.push(_e),Be=He;break}else if(T[He]===null){T[He]=_e,Be=He;break}if(Be===-1)break}const ze=I[Be];ze&&ze.connect(_e)}}const J=new q,$=new q;function le(ee,Se,_e){J.setFromMatrixPosition(Se.matrixWorld),$.setFromMatrixPosition(_e.matrixWorld);const Be=J.distanceTo($),ze=Se.projectionMatrix.elements,He=_e.projectionMatrix.elements,C=ze[14]/(ze[10]-1),D=ze[14]/(ze[10]+1),V=(ze[9]+1)/ze[5],te=(ze[9]-1)/ze[5],K=(ze[8]-1)/ze[0],ne=(He[8]+1)/He[0],ce=C*K,he=C*ne,w=Be/(-K+ne),oe=w*-K;if(Se.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(oe),ee.translateZ(w),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ze[10]===-1)ee.projectionMatrix.copy(Se.projectionMatrix),ee.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const ge=C+w,fe=D+w,Q=ce-oe,me=he+(Be-oe),v=V*D/fe*ge,m=te*D/fe*ge;ee.projectionMatrix.makePerspective(Q,me,v,m,ge,fe),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ae(ee,Se){Se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let Se=ee.near,_e=ee.far;g.texture!==null&&(g.depthNear>0&&(Se=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),L.near=U.near=A.near=Se,L.far=U.far=A.far=_e,(X!==L.near||W!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),X=L.near,W=L.far),L.layers.mask=ee.layers.mask|6,A.layers.mask=L.layers.mask&-5,U.layers.mask=L.layers.mask&-3;const Be=ee.parent,ze=L.cameras;ae(L,Be);for(let He=0;He<ze.length;He++)ae(ze[He],Be);ze.length===2?le(L,A,U):L.projectionMatrix.copy(A.projectionMatrix),be(ee,L,Be)};function be(ee,Se,_e){_e===null?ee.matrix.copy(Se.matrixWorld):(ee.matrix.copy(_e.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Se.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Se.projectionMatrix),ee.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=_r*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(ee){return h[ee]};let Fe=null;function Xe(ee,Se){if(u=Se.getViewerPose(c||o),_=Se,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Be=!1;_e.length!==L.cameras.length&&(L.cameras.length=0,Be=!0);for(let D=0;D<_e.length;D++){const V=_e[D];let te=null;if(p!==null)te=p.getViewport(V);else{const ne=d.getViewSubImage(f,V);te=ne.viewport,D===0&&(e.setRenderTargetTextures(b,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(b))}let K=R[D];K===void 0&&(K=new dn,K.layers.enable(D),K.viewport=new yt,R[D]=K),K.matrix.fromArray(V.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(V.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(te.x,te.y,te.width,te.height),D===0&&(L.matrix.copy(K.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Be===!0&&L.cameras.push(K)}const ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const D=d.getDepthInformation(_e[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(ze&&ze.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let D=0;D<_e.length;D++){const V=_e[D].camera;if(V){let te=h[V];te||(te=new nh,h[V]=te);const K=d.getCameraImage(V);te.sourceTexture=K}}}}for(let _e=0;_e<I.length;_e++){const Be=T[_e],ze=I[_e];Be!==null&&ze!==void 0&&ze.update(Be,Se,c||o)}Fe&&Fe(ee,Se),Se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Se}),_=null}const Ve=new oh;Ve.setAnimationLoop(Xe),this.setAnimationLoop=function(ee){Fe=ee},this.dispose=function(){}}}const JM=new Rt,hh=new $e;hh.set(-1,0,0,0,1,0,0,0,1);function QM(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,ih(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,E,y,b){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(g,h):h.isMeshLambertMaterial?(r(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(g,h),d(g,h)):h.isMeshPhongMaterial?(r(g,h),u(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,b)):h.isMeshMatcapMaterial?(r(g,h),_(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),M(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,E,y):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Qt&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Qt&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const E=e.get(h),y=E.envMap,b=E.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(JM.makeRotationFromEuler(b)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(hh),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,E,y){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*E,g.scale.value=y*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,E){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Qt&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function M(g,h){const E=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eE(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const b=y.program;i.uniformBlockBinding(E,b)}function c(E,y){let b=s[E.id];b===void 0&&(_(E),b=u(E),s[E.id]=b,E.addEventListener("dispose",g));const I=y.program;i.updateUBOMapping(E,I);const T=e.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function u(E){const y=d();E.__bindingPointIndex=y;const b=n.createBuffer(),I=E.__size,T=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,I,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const y=s[E.id],b=E.uniforms,I=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,P=b.length;T<P;T++){const x=Array.isArray(b[T])?b[T]:[b[T]];for(let A=0,U=x.length;A<U;A++){const R=x[A];if(p(R,T,A,I)===!0){const L=R.__offset,X=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let O=0;O<X.length;O++){const H=X[O],B=M(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,L+W,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):ArrayBuffer.isView(H)?R.__data.set(new H.constructor(H.buffer,H.byteOffset,R.__data.length)):(H.toArray(R.__data,W),W+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,y,b,I){const T=E.value,P=y+"_"+b;if(I[P]===void 0)return typeof T=="number"||typeof T=="boolean"?I[P]=T:ArrayBuffer.isView(T)?I[P]=T.slice():I[P]=T.clone(),!0;{const x=I[P];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return I[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function _(E){const y=E.uniforms;let b=0;const I=16;for(let P=0,x=y.length;P<x;P++){const A=Array.isArray(y[P])?y[P]:[y[P]];for(let U=0,R=A.length;U<R;U++){const L=A[U],X=Array.isArray(L.value)?L.value:[L.value];for(let W=0,O=X.length;W<O;W++){const H=X[W],B=M(H),J=b%I,$=J%B.boundary,le=J+$;b+=$,le!==0&&I-le<B.storage&&(b+=I-le),L.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=B.storage}}}const T=b%I;return T>0&&(b+=I-T),E.__size=b,E.__cache={},this}function M(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(y.boundary=16,y.storage=E.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",E),y}function g(E){const y=E.target;y.removeEventListener("dispose",g);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function h(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}const tE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Cn=null;function nE(){return Cn===null&&(Cn=new k_(tE,16,16,Zi,ai),Cn.name="DFG_LUT",Cn.minFilter=Bt,Cn.magFilter=Bt,Cn.wrapS=ei,Cn.wrapT=ei,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}class iE{constructor(e={}){const{canvas:t=i_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=hn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const M=p,g=new Set([fc,uc,cc]),h=new Set([hn,Hn,pr,mr,ac,lc]),E=new Uint32Array(4),y=new Int32Array(4),b=new q;let I=null,T=null;const P=[],x=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let R=!1,L=null;this._outputColorSpace=fn;let X=0,W=0,O=null,H=-1,B=null;const J=new yt,$=new yt;let le=null;const ae=new ut(0);let be=0,Fe=t.width,Xe=t.height,Ve=1,ee=null,Se=null;const _e=new yt(0,0,Fe,Xe),Be=new yt(0,0,Fe,Xe);let ze=!1;const He=new eh;let C=!1,D=!1;const V=new Rt,te=new q,K=new yt,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function he(){return O===null?Ve:1}let w=i;function oe(S,z){return t.getContext(S,z)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),w===null){const z="webgl2";if(w=oe(z,S),w===null)throw oe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw it("WebGLRenderer: "+S.message),S}let ge,fe,Q,me,v,m,N,j,se,de,pe,Z,re,xe,Te,Me,ve,qe,je,st,F,Ee,ie;function Re(){ge=new nS(w),ge.init(),F=new $M(w,ge),fe=new Yx(w,ge,e,F),Q=new XM(w,ge),fe.reversedDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),me=new rS(w),v=new LM,m=new qM(w,ge,Q,v,fe,F,me),N=new tS(U),j=new c0(w),Ee=new qx(w,j),se=new iS(w,j,me,Ee),de=new aS(w,se,j,Ee,me),qe=new oS(w,fe,m),Te=new Kx(v),pe=new PM(U,N,ge,fe,Ee,Te),Z=new QM(U,v),re=new IM,xe=new zM(ge),ve=new Xx(U,N,Q,de,_,l),Me=new WM(U,de,fe),ie=new eE(w,me,fe,Q),je=new $x(w,ge,me),st=new sS(w,ge,me),me.programs=pe.programs,U.capabilities=fe,U.extensions=ge,U.properties=v,U.renderLists=re,U.shadowMap=Me,U.state=Q,U.info=me}Re(),M!==hn&&(A=new cS(M,t.width,t.height,s,r));const ye=new ZM(U,w);this.xr=ye,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const S=ge.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ge.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ve},this.setPixelRatio=function(S){S!==void 0&&(Ve=S,this.setSize(Fe,Xe,!1))},this.getSize=function(S){return S.set(Fe,Xe)},this.setSize=function(S,z,Y=!0){if(ye.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=S,Xe=z,t.width=Math.floor(S*Ve),t.height=Math.floor(z*Ve),Y===!0&&(t.style.width=S+"px",t.style.height=z+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(Fe*Ve,Xe*Ve).floor()},this.setDrawingBufferSize=function(S,z,Y){Fe=S,Xe=z,Ve=Y,t.width=Math.floor(S*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,S,z)},this.setEffects=function(S){if(M===hn){it("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let z=0;z<S.length;z++)if(S[z].isOutputPass===!0){Ge("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(J)},this.getViewport=function(S){return S.copy(_e)},this.setViewport=function(S,z,Y,G){S.isVector4?_e.set(S.x,S.y,S.z,S.w):_e.set(S,z,Y,G),Q.viewport(J.copy(_e).multiplyScalar(Ve).round())},this.getScissor=function(S){return S.copy(Be)},this.setScissor=function(S,z,Y,G){S.isVector4?Be.set(S.x,S.y,S.z,S.w):Be.set(S,z,Y,G),Q.scissor($.copy(Be).multiplyScalar(Ve).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(S){Q.setScissorTest(ze=S)},this.setOpaqueSort=function(S){ee=S},this.setTransparentSort=function(S){Se=S},this.getClearColor=function(S){return S.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,Y=!0){let G=0;if(S){let k=!1;if(O!==null){const Ce=O.texture.format;k=g.has(Ce)}if(k){const Ce=O.texture.type,Le=h.has(Ce),we=ve.getClearColor(),De=ve.getClearAlpha(),Ne=we.r,Ke=we.g,Je=we.b;Le?(E[0]=Ne,E[1]=Ke,E[2]=Je,E[3]=De,w.clearBufferuiv(w.COLOR,0,E)):(y[0]=Ne,y[1]=Ke,y[2]=Je,y[3]=De,w.clearBufferiv(w.COLOR,0,y))}else G|=w.COLOR_BUFFER_BIT}z&&(G|=w.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&w.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),ve.dispose(),re.dispose(),xe.dispose(),v.dispose(),N.dispose(),de.dispose(),Ee.dispose(),ie.dispose(),pe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",bc),ye.removeEventListener("sessionend",yc),Di.stop()};function ue(S){S.preventDefault(),bu("WebGLRenderer: Context Lost."),R=!0}function Ue(){bu("WebGLRenderer: Context Restored."),R=!1;const S=me.autoReset,z=Me.enabled,Y=Me.autoUpdate,G=Me.needsUpdate,k=Me.type;Re(),me.autoReset=S,Me.enabled=z,Me.autoUpdate=Y,Me.needsUpdate=G,Me.type=k}function Ye(S){it("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Mt(S){const z=S.target;z.removeEventListener("dispose",Mt),lt(z)}function lt(S){Gn(S),v.remove(S)}function Gn(S){const z=v.get(S).programs;z!==void 0&&(z.forEach(function(Y){pe.releaseProgram(Y)}),S.isShaderMaterial&&pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,Y,G,k,Ce){z===null&&(z=ne);const Le=k.isMesh&&k.matrixWorld.determinant()<0,we=gh(S,z,Y,G,k);Q.setMaterial(G,Le);let De=Y.index,Ne=1;if(G.wireframe===!0){if(De=se.getWireframeAttribute(Y),De===void 0)return;Ne=2}const Ke=Y.drawRange,Je=Y.attributes.position;let Oe=Ke.start*Ne,ct=(Ke.start+Ke.count)*Ne;Ce!==null&&(Oe=Math.max(Oe,Ce.start*Ne),ct=Math.min(ct,(Ce.start+Ce.count)*Ne)),De!==null?(Oe=Math.max(Oe,0),ct=Math.min(ct,De.count)):Je!=null&&(Oe=Math.max(Oe,0),ct=Math.min(ct,Je.count));const Et=ct-Oe;if(Et<0||Et===1/0)return;Ee.setup(k,G,we,Y,De);let xt,dt=je;if(De!==null&&(xt=j.get(De),dt=st,dt.setIndex(xt)),k.isMesh)G.wireframe===!0?(Q.setLineWidth(G.wireframeLinewidth*he()),dt.setMode(w.LINES)):dt.setMode(w.TRIANGLES);else if(k.isLine){let zt=G.linewidth;zt===void 0&&(zt=1),Q.setLineWidth(zt*he()),k.isLineSegments?dt.setMode(w.LINES):k.isLineLoop?dt.setMode(w.LINE_LOOP):dt.setMode(w.LINE_STRIP)}else k.isPoints?dt.setMode(w.POINTS):k.isSprite&&dt.setMode(w.TRIANGLES);if(k.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const zt=k._multiDrawStarts,Pe=k._multiDrawCounts,en=k._multiDrawCount,tt=De?j.get(De).bytesPerElement:1,an=v.get(G).currentProgram.getUniforms();for(let Tn=0;Tn<en;Tn++)an.setValue(w,"_gl_DrawID",Tn),dt.render(zt[Tn]/tt,Pe[Tn])}else if(k.isInstancedMesh)dt.renderInstances(Oe,Et,k.count);else if(Y.isInstancedBufferGeometry){const zt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pe=Math.min(Y.instanceCount,zt);dt.renderInstances(Oe,Et,Pe)}else dt.render(Oe,Et)};function yn(S,z,Y){S.transparent===!0&&S.side===Dn&&S.forceSinglePass===!1?(S.side=Qt,S.needsUpdate=!0,Ar(S,z,Y),S.side=Li,S.needsUpdate=!0,Ar(S,z,Y),S.side=Dn):Ar(S,z,Y)}this.compile=function(S,z,Y=null){Y===null&&(Y=S),T=xe.get(Y),T.init(z),x.push(T),Y.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),S!==Y&&S.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights();const G=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Ce=k.material;if(Ce)if(Array.isArray(Ce))for(let Le=0;Le<Ce.length;Le++){const we=Ce[Le];yn(we,Y,k),G.add(we)}else yn(Ce,Y,k),G.add(Ce)}),T=x.pop(),G},this.compileAsync=function(S,z,Y=null){const G=this.compile(S,z,Y);return new Promise(k=>{function Ce(){if(G.forEach(function(Le){v.get(Le).currentProgram.isReady()&&G.delete(Le)}),G.size===0){k(S);return}setTimeout(Ce,10)}ge.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Xo=null;function ph(S){Xo&&Xo(S)}function bc(){Di.stop()}function yc(){Di.start()}const Di=new oh;Di.setAnimationLoop(ph),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(S){Xo=S,ye.setAnimationLoop(S),S===null?Di.stop():Di.start()},ye.addEventListener("sessionstart",bc),ye.addEventListener("sessionend",yc),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(S,z);const Y=ye.enabled===!0&&ye.isPresenting===!0,G=A!==null&&(O===null||Y)&&A.begin(U,O);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),S.isScene===!0&&S.onBeforeRender(U,S,z,O),T=xe.get(S,x.length),T.init(z),T.state.textureUnits=m.getTextureUnits(),x.push(T),V.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),He.setFromProjectionMatrix(V,Un,z.reversedDepth),D=this.localClippingEnabled,C=Te.init(this.clippingPlanes,D),I=re.get(S,P.length),I.init(),P.push(I),ye.enabled===!0&&ye.isPresenting===!0){const Le=U.xr.getDepthSensingMesh();Le!==null&&qo(Le,z,-1/0,U.sortObjects)}qo(S,z,0,U.sortObjects),I.finish(),U.sortObjects===!0&&I.sort(ee,Se),ce=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ce&&ve.addToRenderList(I,S),this.info.render.frame++,C===!0&&Te.beginShadows();const k=T.state.shadowsArray;if(Me.render(k,S,z),C===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&A.hasRenderPass())===!1){const Le=I.opaque,we=I.transmissive;if(T.setupLights(),z.isArrayCamera){const De=z.cameras;if(we.length>0)for(let Ne=0,Ke=De.length;Ne<Ke;Ne++){const Je=De[Ne];Ac(Le,we,S,Je)}ce&&ve.render(S);for(let Ne=0,Ke=De.length;Ne<Ke;Ne++){const Je=De[Ne];Tc(I,S,Je,Je.viewport)}}else we.length>0&&Ac(Le,we,S,z),ce&&ve.render(S),Tc(I,S,z)}O!==null&&W===0&&(m.updateMultisampleRenderTarget(O),m.updateRenderTargetMipmap(O)),G&&A.end(U),S.isScene===!0&&S.onAfterRender(U,S,z),Ee.resetDefaultState(),H=-1,B=null,x.pop(),x.length>0?(T=x[x.length-1],m.setTextureUnits(T.state.textureUnits),C===!0&&Te.setGlobalState(U.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?I=P[P.length-1]:I=null,L!==null&&L.renderEnd()};function qo(S,z,Y,G){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||He.intersectsSprite(S)){G&&K.setFromMatrixPosition(S.matrixWorld).applyMatrix4(V);const Le=de.update(S),we=S.material;we.visible&&I.push(S,Le,we,Y,K.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||He.intersectsObject(S))){const Le=de.update(S),we=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),K.copy(S.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),K.copy(Le.boundingSphere.center)),K.applyMatrix4(S.matrixWorld).applyMatrix4(V)),Array.isArray(we)){const De=Le.groups;for(let Ne=0,Ke=De.length;Ne<Ke;Ne++){const Je=De[Ne],Oe=we[Je.materialIndex];Oe&&Oe.visible&&I.push(S,Le,Oe,Y,K.z,Je)}}else we.visible&&I.push(S,Le,we,Y,K.z,null)}}const Ce=S.children;for(let Le=0,we=Ce.length;Le<we;Le++)qo(Ce[Le],z,Y,G)}function Tc(S,z,Y,G){const{opaque:k,transmissive:Ce,transparent:Le}=S;T.setupLightsView(Y),C===!0&&Te.setGlobalState(U.clippingPlanes,Y),G&&Q.viewport(J.copy(G)),k.length>0&&Tr(k,z,Y),Ce.length>0&&Tr(Ce,z,Y),Le.length>0&&Tr(Le,z,Y),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Ac(S,z,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Oe=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Bn(1,1,{generateMipmaps:!0,type:Oe?ai:hn,minFilter:Ai,samples:Math.max(4,fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const Ce=T.state.transmissionRenderTarget[G.id],Le=G.viewport||J;Ce.setSize(Le.z*U.transmissionResolutionScale,Le.w*U.transmissionResolutionScale);const we=U.getRenderTarget(),De=U.getActiveCubeFace(),Ne=U.getActiveMipmapLevel();U.setRenderTarget(Ce),U.getClearColor(ae),be=U.getClearAlpha(),be<1&&U.setClearColor(16777215,.5),U.clear(),ce&&ve.render(Y);const Ke=U.toneMapping;U.toneMapping=On;const Je=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),C===!0&&Te.setGlobalState(U.clippingPlanes,G),Tr(S,Y,G),m.updateMultisampleRenderTarget(Ce),m.updateRenderTargetMipmap(Ce),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let ct=0,Et=z.length;ct<Et;ct++){const xt=z[ct],{object:dt,geometry:zt,material:Pe,group:en}=xt;if(Pe.side===Dn&&dt.layers.test(G.layers)){const tt=Pe.side;Pe.side=Qt,Pe.needsUpdate=!0,wc(dt,Y,G,zt,Pe,en),Pe.side=tt,Pe.needsUpdate=!0,Oe=!0}}Oe===!0&&(m.updateMultisampleRenderTarget(Ce),m.updateRenderTargetMipmap(Ce))}U.setRenderTarget(we,De,Ne),U.setClearColor(ae,be),Je!==void 0&&(G.viewport=Je),U.toneMapping=Ke}function Tr(S,z,Y){const G=z.isScene===!0?z.overrideMaterial:null;for(let k=0,Ce=S.length;k<Ce;k++){const Le=S[k],{object:we,geometry:De,group:Ne}=Le;let Ke=Le.material;Ke.allowOverride===!0&&G!==null&&(Ke=G),we.layers.test(Y.layers)&&wc(we,z,Y,De,Ke,Ne)}}function wc(S,z,Y,G,k,Ce){S.onBeforeRender(U,z,Y,G,k,Ce),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(U,z,Y,G,S,Ce),k.transparent===!0&&k.side===Dn&&k.forceSinglePass===!1?(k.side=Qt,k.needsUpdate=!0,U.renderBufferDirect(Y,z,G,k,S,Ce),k.side=Li,k.needsUpdate=!0,U.renderBufferDirect(Y,z,G,k,S,Ce),k.side=Dn):U.renderBufferDirect(Y,z,G,k,S,Ce),S.onAfterRender(U,z,Y,G,k,Ce)}function Ar(S,z,Y){z.isScene!==!0&&(z=ne);const G=v.get(S),k=T.state.lights,Ce=T.state.shadowsArray,Le=k.state.version,we=pe.getParameters(S,k.state,Ce,z,Y,T.state.lightProbeGridArray),De=pe.getProgramCacheKey(we);let Ne=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?z.environment:null,G.fog=z.fog;const Ke=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=N.get(S.envMap||G.environment,Ke),G.envMapRotation=G.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",Mt),Ne=new Map,G.programs=Ne);let Je=Ne.get(De);if(Je!==void 0){if(G.currentProgram===Je&&G.lightsStateVersion===Le)return Rc(S,we),Je}else we.uniforms=pe.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,Y,we),S.onBeforeCompile(we,U),Je=pe.acquireProgram(we,De),Ne.set(De,Je),G.uniforms=we.uniforms;const Oe=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=Te.uniform),Rc(S,we),G.needsLights=vh(S),G.lightsStateVersion=Le,G.needsLights&&(Oe.ambientLightColor.value=k.state.ambient,Oe.lightProbe.value=k.state.probe,Oe.directionalLights.value=k.state.directional,Oe.directionalLightShadows.value=k.state.directionalShadow,Oe.spotLights.value=k.state.spot,Oe.spotLightShadows.value=k.state.spotShadow,Oe.rectAreaLights.value=k.state.rectArea,Oe.ltc_1.value=k.state.rectAreaLTC1,Oe.ltc_2.value=k.state.rectAreaLTC2,Oe.pointLights.value=k.state.point,Oe.pointLightShadows.value=k.state.pointShadow,Oe.hemisphereLights.value=k.state.hemi,Oe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Oe.spotLightMatrix.value=k.state.spotLightMatrix,Oe.spotLightMap.value=k.state.spotLightMap,Oe.pointShadowMatrix.value=k.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=Je,G.uniformsList=null,Je}function Cc(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=co.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function Rc(S,z){const Y=v.get(S);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function mh(S,z){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;b.setFromMatrixPosition(z.matrixWorld);for(let Y=0,G=S.length;Y<G;Y++){const k=S[Y];if(k.texture!==null&&k.boundingBox.containsPoint(b))return k}return null}function gh(S,z,Y,G,k){z.isScene!==!0&&(z=ne),m.resetTextureUnits();const Ce=z.fog,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?z.environment:null,we=O===null?U.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:et.workingColorSpace,De=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ne=N.get(G.envMap||Le,De),Ke=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Je=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Oe=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,Et=!!Y.morphAttributes.color;let xt=On;G.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(xt=U.toneMapping);const dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,zt=dt!==void 0?dt.length:0,Pe=v.get(G),en=T.state.lights;if(C===!0&&(D===!0||S!==B)){const gt=S===B&&G.id===H;Te.setState(G,S,gt)}let tt=!1;G.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==en.state.version||Pe.outputColorSpace!==we||k.isBatchedMesh&&Pe.batching===!1||!k.isBatchedMesh&&Pe.batching===!0||k.isBatchedMesh&&Pe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pe.instancing===!1||!k.isInstancedMesh&&Pe.instancing===!0||k.isSkinnedMesh&&Pe.skinning===!1||!k.isSkinnedMesh&&Pe.skinning===!0||k.isInstancedMesh&&Pe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pe.instancingMorph===!1&&k.morphTexture!==null||Pe.envMap!==Ne||G.fog===!0&&Pe.fog!==Ce||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Te.numPlanes||Pe.numIntersection!==Te.numIntersection)||Pe.vertexAlphas!==Ke||Pe.vertexTangents!==Je||Pe.morphTargets!==Oe||Pe.morphNormals!==ct||Pe.morphColors!==Et||Pe.toneMapping!==xt||Pe.morphTargetsCount!==zt||!!Pe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Pe.__version=G.version);let an=Pe.currentProgram;tt===!0&&(an=Ar(G,z,k),L&&G.isNodeMaterial&&L.onUpdateProgram(G,an,Pe));let Tn=!1,di=!1,ts=!1;const ht=an.getUniforms(),bt=Pe.uniforms;if(Q.useProgram(an.program)&&(Tn=!0,di=!0,ts=!0),G.id!==H&&(H=G.id,di=!0),Pe.needsLights){const gt=mh(T.state.lightProbeGridArray,k);Pe.lightProbeGrid!==gt&&(Pe.lightProbeGrid=gt,di=!0)}if(Tn||B!==S){Q.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ht.setValue(w,"projectionMatrix",S.projectionMatrix),ht.setValue(w,"viewMatrix",S.matrixWorldInverse);const pi=ht.map.cameraPosition;pi!==void 0&&pi.setValue(w,te.setFromMatrixPosition(S.matrixWorld)),fe.logarithmicDepthBuffer&&ht.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ht.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,di=!0,ts=!0)}if(Pe.needsLights&&(en.state.directionalShadowMap.length>0&&ht.setValue(w,"directionalShadowMap",en.state.directionalShadowMap,m),en.state.spotShadowMap.length>0&&ht.setValue(w,"spotShadowMap",en.state.spotShadowMap,m),en.state.pointShadowMap.length>0&&ht.setValue(w,"pointShadowMap",en.state.pointShadowMap,m)),k.isSkinnedMesh){ht.setOptional(w,k,"bindMatrix"),ht.setOptional(w,k,"bindMatrixInverse");const gt=k.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),ht.setValue(w,"boneTexture",gt.boneTexture,m))}k.isBatchedMesh&&(ht.setOptional(w,k,"batchingTexture"),ht.setValue(w,"batchingTexture",k._matricesTexture,m),ht.setOptional(w,k,"batchingIdTexture"),ht.setValue(w,"batchingIdTexture",k._indirectTexture,m),ht.setOptional(w,k,"batchingColorTexture"),k._colorsTexture!==null&&ht.setValue(w,"batchingColorTexture",k._colorsTexture,m));const hi=Y.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&qe.update(k,Y,an),(di||Pe.receiveShadow!==k.receiveShadow)&&(Pe.receiveShadow=k.receiveShadow,ht.setValue(w,"receiveShadow",k.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&z.environment!==null&&(bt.envMapIntensity.value=z.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=nE()),di){if(ht.setValue(w,"toneMappingExposure",U.toneMappingExposure),Pe.needsLights&&_h(bt,ts),Ce&&G.fog===!0&&Z.refreshFogUniforms(bt,Ce),Z.refreshMaterialUniforms(bt,G,Ve,Xe,T.state.transmissionRenderTarget[S.id]),Pe.needsLights&&Pe.lightProbeGrid){const gt=Pe.lightProbeGrid;bt.probesSH.value=gt.texture,bt.probesMin.value.copy(gt.boundingBox.min),bt.probesMax.value.copy(gt.boundingBox.max),bt.probesResolution.value.copy(gt.resolution)}co.upload(w,Cc(Pe),bt,m)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(co.upload(w,Cc(Pe),bt,m),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ht.setValue(w,"center",k.center),ht.setValue(w,"modelViewMatrix",k.modelViewMatrix),ht.setValue(w,"normalMatrix",k.normalMatrix),ht.setValue(w,"modelMatrix",k.matrixWorld),G.uniformsGroups!==void 0){const gt=G.uniformsGroups;for(let pi=0,ns=gt.length;pi<ns;pi++){const Pc=gt[pi];ie.update(Pc,an),ie.bind(Pc,an)}}return an}function _h(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function vh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,z,Y){const G=v.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),v.get(S.texture).__webglTexture=z,v.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){const Y=v.get(S);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0};const xh=w.createFramebuffer();this.setRenderTarget=function(S,z=0,Y=0){O=S,X=z,W=Y;let G=null,k=!1,Ce=!1;if(S){const we=v.get(S);if(we.__useDefaultFramebuffer!==void 0){Q.bindFramebuffer(w.FRAMEBUFFER,we.__webglFramebuffer),J.copy(S.viewport),$.copy(S.scissor),le=S.scissorTest,Q.viewport(J),Q.scissor($),Q.setScissorTest(le),H=-1;return}else if(we.__webglFramebuffer===void 0)m.setupRenderTarget(S);else if(we.__hasExternalTextures)m.rebindTextures(S,v.get(S.texture).__webglTexture,v.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ke=S.depthTexture;if(we.__boundDepthTexture!==Ke){if(Ke!==null&&v.has(Ke)&&(S.width!==Ke.image.width||S.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");m.setupDepthRenderbuffer(S)}}const De=S.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ce=!0);const Ne=v.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[z])?G=Ne[z][Y]:G=Ne[z],k=!0):S.samples>0&&m.useMultisampledRTT(S)===!1?G=v.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[Y]:G=Ne,J.copy(S.viewport),$.copy(S.scissor),le=S.scissorTest}else J.copy(_e).multiplyScalar(Ve).floor(),$.copy(Be).multiplyScalar(Ve).floor(),le=ze;if(Y!==0&&(G=xh),Q.bindFramebuffer(w.FRAMEBUFFER,G)&&Q.drawBuffers(S,G),Q.viewport(J),Q.scissor($),Q.setScissorTest(le),k){const we=v.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,Y)}else if(Ce){const we=z;for(let De=0;De<S.textures.length;De++){const Ne=v.get(S.textures[De]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+De,Ne.__webglTexture,Y,we)}}else if(S!==null&&Y!==0){const we=v.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,we.__webglTexture,Y)}H=-1},this.readRenderTargetPixels=function(S,z,Y,G,k,Ce,Le,we=0){if(!(S&&S.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De){Q.bindFramebuffer(w.FRAMEBUFFER,De);try{const Ne=S.textures[we],Ke=Ne.format,Je=Ne.type;if(S.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+we),!fe.textureFormatReadable(Ke)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(Je)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-G&&Y>=0&&Y<=S.height-k&&w.readPixels(z,Y,G,k,F.convert(Ke),F.convert(Je),Ce)}finally{const Ne=O!==null?v.get(O).__webglFramebuffer:null;Q.bindFramebuffer(w.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,z,Y,G,k,Ce,Le,we=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De)if(z>=0&&z<=S.width-G&&Y>=0&&Y<=S.height-k){Q.bindFramebuffer(w.FRAMEBUFFER,De);const Ne=S.textures[we],Ke=Ne.format,Je=Ne.type;if(S.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+we),!fe.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Oe),w.bufferData(w.PIXEL_PACK_BUFFER,Ce.byteLength,w.STREAM_READ),w.readPixels(z,Y,G,k,F.convert(Ke),F.convert(Je),0);const ct=O!==null?v.get(O).__webglFramebuffer:null;Q.bindFramebuffer(w.FRAMEBUFFER,ct);const Et=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await s_(w,Et,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Oe),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Ce),w.deleteBuffer(Oe),w.deleteSync(Et),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,Y=0){const G=Math.pow(2,-Y),k=Math.floor(S.image.width*G),Ce=Math.floor(S.image.height*G),Le=z!==null?z.x:0,we=z!==null?z.y:0;m.setTexture2D(S,0),w.copyTexSubImage2D(w.TEXTURE_2D,Y,0,0,Le,we,k,Ce),Q.unbindTexture()};const Sh=w.createFramebuffer(),Mh=w.createFramebuffer();this.copyTextureToTexture=function(S,z,Y=null,G=null,k=0,Ce=0){let Le,we,De,Ne,Ke,Je,Oe,ct,Et;const xt=S.isCompressedTexture?S.mipmaps[Ce]:S.image;if(Y!==null)Le=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,De=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,Ke=Y.min.y,Je=Y.isBox3?Y.min.z:0;else{const bt=Math.pow(2,-k);Le=Math.floor(xt.width*bt),we=Math.floor(xt.height*bt),S.isDataArrayTexture?De=xt.depth:S.isData3DTexture?De=Math.floor(xt.depth*bt):De=1,Ne=0,Ke=0,Je=0}G!==null?(Oe=G.x,ct=G.y,Et=G.z):(Oe=0,ct=0,Et=0);const dt=F.convert(z.format),zt=F.convert(z.type);let Pe;z.isData3DTexture?(m.setTexture3D(z,0),Pe=w.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(m.setTexture2DArray(z,0),Pe=w.TEXTURE_2D_ARRAY):(m.setTexture2D(z,0),Pe=w.TEXTURE_2D),Q.activeTexture(w.TEXTURE0),Q.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,z.flipY),Q.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Q.pixelStorei(w.UNPACK_ALIGNMENT,z.unpackAlignment);const en=Q.getParameter(w.UNPACK_ROW_LENGTH),tt=Q.getParameter(w.UNPACK_IMAGE_HEIGHT),an=Q.getParameter(w.UNPACK_SKIP_PIXELS),Tn=Q.getParameter(w.UNPACK_SKIP_ROWS),di=Q.getParameter(w.UNPACK_SKIP_IMAGES);Q.pixelStorei(w.UNPACK_ROW_LENGTH,xt.width),Q.pixelStorei(w.UNPACK_IMAGE_HEIGHT,xt.height),Q.pixelStorei(w.UNPACK_SKIP_PIXELS,Ne),Q.pixelStorei(w.UNPACK_SKIP_ROWS,Ke),Q.pixelStorei(w.UNPACK_SKIP_IMAGES,Je);const ts=S.isDataArrayTexture||S.isData3DTexture,ht=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){const bt=v.get(S),hi=v.get(z),gt=v.get(bt.__renderTarget),pi=v.get(hi.__renderTarget);Q.bindFramebuffer(w.READ_FRAMEBUFFER,gt.__webglFramebuffer),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let ns=0;ns<De;ns++)ts&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,v.get(S).__webglTexture,k,Je+ns),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,v.get(z).__webglTexture,Ce,Et+ns)),w.blitFramebuffer(Ne,Ke,Le,we,Oe,ct,Le,we,w.DEPTH_BUFFER_BIT,w.NEAREST);Q.bindFramebuffer(w.READ_FRAMEBUFFER,null),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||v.has(S)){const bt=v.get(S),hi=v.get(z);Q.bindFramebuffer(w.READ_FRAMEBUFFER,Sh),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,Mh);for(let gt=0;gt<De;gt++)ts?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,bt.__webglTexture,k,Je+gt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,bt.__webglTexture,k),ht?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,hi.__webglTexture,Ce,Et+gt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,hi.__webglTexture,Ce),k!==0?w.blitFramebuffer(Ne,Ke,Le,we,Oe,ct,Le,we,w.COLOR_BUFFER_BIT,w.NEAREST):ht?w.copyTexSubImage3D(Pe,Ce,Oe,ct,Et+gt,Ne,Ke,Le,we):w.copyTexSubImage2D(Pe,Ce,Oe,ct,Ne,Ke,Le,we);Q.bindFramebuffer(w.READ_FRAMEBUFFER,null),Q.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else ht?S.isDataTexture||S.isData3DTexture?w.texSubImage3D(Pe,Ce,Oe,ct,Et,Le,we,De,dt,zt,xt.data):z.isCompressedArrayTexture?w.compressedTexSubImage3D(Pe,Ce,Oe,ct,Et,Le,we,De,dt,xt.data):w.texSubImage3D(Pe,Ce,Oe,ct,Et,Le,we,De,dt,zt,xt):S.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Ce,Oe,ct,Le,we,dt,zt,xt.data):S.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Ce,Oe,ct,xt.width,xt.height,dt,xt.data):w.texSubImage2D(w.TEXTURE_2D,Ce,Oe,ct,Le,we,dt,zt,xt);Q.pixelStorei(w.UNPACK_ROW_LENGTH,en),Q.pixelStorei(w.UNPACK_IMAGE_HEIGHT,tt),Q.pixelStorei(w.UNPACK_SKIP_PIXELS,an),Q.pixelStorei(w.UNPACK_SKIP_ROWS,Tn),Q.pixelStorei(w.UNPACK_SKIP_IMAGES,di),Ce===0&&z.generateMipmaps&&w.generateMipmap(Pe),Q.unbindTexture()},this.initRenderTarget=function(S){v.get(S).__webglFramebuffer===void 0&&m.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?m.setTextureCube(S,0):S.isData3DTexture?m.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?m.setTexture2DArray(S,0):m.setTexture2D(S,0),Q.unbindTexture()},this.resetState=function(){X=0,W=0,O=null,Q.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const sE=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,rE=`
  uniform sampler2D map;
  uniform float opacity;
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vec4 tex = texture2D(map, vUv);
    float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));

    // Duotone: #000 → #4ade80, curvas agresivas para sombras oscuras
    float r = pow(lum, 3.50) * 0.290;
    float g = pow(lum, 2.20) * 0.871;
    float b = pow(lum, 3.00) * 0.502;

    // Rayo de luz diagonal
    vec2 rayDir = normalize(vec2(0.82, 0.57));
    float proj  = dot(vUv - 0.5, rayDir);
    float sweep = sin(uTime * 0.12) * 0.70;
    float d     = abs(proj - sweep);
    float mask  = smoothstep(0.3, 0.8, tex.a);
    float core  = exp(-d * d * 220.0) * mask;
    float halo  = exp(-d * d *  12.0) * mask;
    r += core * 0.05 + halo * 0.02;
    g += core * 0.40 + halo * 0.22;
    b += core * 0.12 + halo * 0.06;

    float fw = fwidth(tex.a);
    float a  = smoothstep(0.5 - fw * 1.2, 0.5 + fw * 1.2, tex.a) * opacity;
    gl_FragColor = vec4(r, g, b, a);
  }
`,oE={__name:"RibbonBackground",setup(n){const e=nt(null);function t(a){const l=Math.sin(a)*43758.5453123;return l-Math.floor(l)}function i(a){const l=Math.floor(a),c=a-l,u=c*c*(3-2*c);return t(l)*(1-u)+t(l+1)*u}function s(a){const l=E_.degToRad(a.fov),c=2*Math.tan(l/2)*a.position.z;return{vw:c*(window.innerWidth/window.innerHeight),vh:c}}const r=[{posRatioX:-.46,posRatioY:.46,z:0,sizeRatio:.88,sizeMin:9,baseRx:-.14,baseRy:.07,speedMult:.95,phaseOffset:0,mirrorX:!1,mirrorY:!1,timeOffset:0},{posRatioX:.5,posRatioY:-.46,z:-2,sizeRatio:.88,sizeMin:9,baseRx:-.14,baseRy:.07,speedMult:.82,phaseOffset:4.8,mirrorX:!0,mirrorY:!0,timeOffset:5.5}];let o=null;return Fo(()=>{const a=e.value;if(!a)return;const l=new iE({canvas:a,antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setSize(window.innerWidth,window.innerHeight),l.setClearColor(0,0);const c=new F_,u=new dn(70,window.innerWidth/window.innerHeight,.1,100);u.position.z=10;const d=[];new s0().load("/ribbon-opt.png",h=>{h.generateMipmaps=!0,h.minFilter=Ai,h.magFilter=Bt,h.anisotropy=l.capabilities.getMaxAnisotropy();const{vw:E,vh:y}=s(u);for(const b of r){const I=new bn({uniforms:{map:{value:h},opacity:{value:0},uTime:{value:0}},vertexShader:sE,fragmentShader:rE,transparent:!0,depthWrite:!1,side:Dn}),T=new Vn(new yr(1,1),I),P=Math.max(E*b.sizeRatio,b.sizeMin);T.position.set(E*b.posRatioX,y*b.posRatioY,b.z),T.scale.set((b.mirrorX?-1:1)*P,(b.mirrorY?-1:1)*P,1),c.add(T),d.push({mesh:T,material:I,p:b})}});const f=new a0;let p=0,_;function M(){_=requestAnimationFrame(M);const h=f.getElapsedTime(),E=h-p;p=h;const{vw:y,vh:b}=s(u);for(const{mesh:I,material:T,p:P}of d){const x=(h+P.phaseOffset)*P.speedMult;I.rotation.x=P.baseRx+(i(x*.28)-.5)*.14+(i(x*.67+5)-.5)*.04,I.rotation.y=P.baseRy+(i(x*.2+10)-.5)*.11+(i(x*.44+15)-.5)*.03,I.rotation.z=(i(x*.15+20)-.5)*.07;const A=Math.max(y*P.sizeRatio,P.sizeMin),U=1+(i(x*.41+40)-.5)*.028;I.scale.set((P.mirrorX?-1:1)*A*U,(P.mirrorY?-1:1)*A*U,1),I.position.x=y*P.posRatioX,I.position.y=b*P.posRatioY+(i(x*.35+30)-.5)*2*(b*.038),T.uniforms.opacity.value<1&&(T.uniforms.opacity.value=Math.min(1,T.uniforms.opacity.value+E*.22)),T.uniforms.uTime.value=h+P.timeOffset}l.render(c,u)}M();function g(){u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",g),o=()=>{cancelAnimationFrame(_),window.removeEventListener("resize",g),l.dispose()}}),Oo(()=>{o?.()}),(a,l)=>(wt(),Jt("canvas",{ref_key:"canvasRef",ref:e,class:"fixed inset-0 w-full h-full pointer-events-none z-[2]"},null,512))}},aE=""+new URL("foto-perfil-CFy3N8Af.png",import.meta.url).href,lE={class:"relative z-10 min-h-screen flex flex-col items-center justify-between gap-5 px-4 py-10"},cE={class:"grid grid-cols-2 gap-3 w-full max-w-xs"},uE=["onClick"],fE={class:"font-mono text-[10px]",style:{color:"rgba(74,222,128,0.4)"}},dE={class:"font-mono text-sm font-bold",style:{color:"#4ade80"}},hE={href:"https://leosoftware.dev",class:"glass-panel w-full max-w-xs px-5 py-4 flex items-center justify-between",style:{"border-color":"rgba(74,222,128,0.28)"}},pE={class:"text-white font-semibold text-sm"},mE={class:"flex items-center gap-3 font-mono text-xs"},gE={__name:"MobileView",props:{currentLang:{type:String,default:"en"},openWindow:{type:Function,required:!0}},emits:["setLang"],setup(n){const e=n,t=[{id:"about",label:{en:"About",es:"Sobre mí"}},{id:"projects",label:{en:"Projects",es:"Proyectos"}},{id:"skills",label:{en:"Skills",es:"Habilidades"}},{id:"experience",label:{en:"Experience",es:"Experiencia"}},{id:"education",label:{en:"Education",es:"Educación"}},{id:"contact",label:{en:"Contact",es:"Contacto"}}];return(i,s)=>(wt(),Jt("div",lE,[s[5]||(s[5]=_m('<div class="glass-panel w-full max-w-xs p-6 flex flex-col items-center text-center"><img src="'+aE+'" alt="Ismael Manzano" class="w-20 h-20 rounded-full object-cover border-2 mb-3" style="border-color:rgba(74,222,128,0.35);box-shadow:0 0 20px rgba(74,222,128,0.15);"><h1 class="text-2xl font-bold text-white leading-tight">Ismael Manzano</h1><p class="font-mono text-sm mt-1" style="color:rgba(74,222,128,0.9);">▸ Full Stack Developer</p><p class="font-mono text-xs text-white/35 mt-0.5">Remote / Spain</p></div>',1)),Ie("div",cE,[(wt(),Jt(Kt,null,Fp(t,r=>Ie("button",{key:r.id,onClick:o=>e.openWindow(r.id),class:"glass-panel p-4 text-left flex flex-col gap-1.5 active:scale-95 transition-transform duration-100"},[Ie("span",fE,"~/"+ti(r.id),1),Ie("span",dE,ti(r.label[n.currentLang]),1)],8,uE)),64))]),Ie("a",hE,[Ie("div",null,[Ie("p",pE,ti(n.currentLang==="es"?"Ver portfolio completo":"Full portfolio"),1),s[2]||(s[2]=Ie("p",{class:"font-mono text-xs text-white/35 mt-0.5"},"leosoftware.dev",-1))]),s[3]||(s[3]=Ie("span",{class:"font-mono text-lg",style:{color:"rgba(74,222,128,0.7)"}},"→",-1))]),Ie("div",mE,[Ie("button",{onClick:s[0]||(s[0]=r=>i.$emit("setLang","es")),class:Fn(n.currentLang==="es"?"font-bold":"text-white/30"),style:Ps(n.currentLang==="es"?"color:#4ade80":"")},"ES",6),s[4]||(s[4]=Ie("span",{class:"text-white/15"},"|",-1)),Ie("button",{onClick:s[1]||(s[1]=r=>i.$emit("setLang","en")),class:Fn(n.currentLang==="en"?"font-bold":"text-white/30"),style:Ps(n.currentLang==="en"?"color:#4ade80":"")},"EN",6)])]))}},mf={ascii:`
  ███╗   ███╗ █████╗ ███╗   ██╗███████╗███████╗ █████╗  █████╗ ███╗   ██╗ ██████╗ 
  ████╗ ████║██╔══██╗████╗  ██║╚══███╔╝╚══███╔╝██╔══██╗██╔══██╗████╗  ██║██╔═══██╗
  ██╔████╔██║███████║██╔██╗ ██║  ███╔╝   ███╔╝ ███████║███████║██╔██╗ ██║██║   ██║
  ██║╚██╔╝██║██╔══██║██║╚██╗██║ ███╔╝   ███╔╝  ██╔══██║██╔══██║██║╚██╗██║██║   ██║
  ██║ ╚═╝ ██║██║  ██║██║ ╚████║███████╗███████╗██║  ██║██║  ██║██║ ╚████║╚██████╔╝
  ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ 
  `,stats:[{label:"OS",value:"ManzanoOS v1.1"},{label:"Role",value:"Full Stack Developer"},{label:"Github",value:"github.com/manzzaano",url:"https://github.com/manzzaano"},{label:"LinkedIn",value:"in/ismael-manzano-leon",url:"https://www.linkedin.com/in/ismael-manzano-leon/"},{label:"Kernel",value:"Vue 3.5.x"},{label:"Uptime",value:"Always Learning"},{label:"Packages",value:"Tailwind, Vite, Lucide"},{label:"Location",value:"Remote / Spain"}]},uo=["about","skills","projects","education","experience","contact","cv"],_E=["help","clear","lang","demo","neofetch","exit","leo/"],gf=[...uo,..._E];async function vE(){const n=await fetch("./content.json");if(!n.ok)throw new Error(`Error loading content.json: ${n.status} ${n.statusText}`);return await n.json()}function Ks(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Hl(){return Hl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Hl.apply(this,arguments)}var xE={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(n){},onComplete:function(n){},preStringTyped:function(n,e){},onStringTyped:function(n,e){},onLastStringBackspaced:function(n){},onTypingPaused:function(n,e){},onTypingResumed:function(n,e){},onReset:function(n){},onStop:function(n,e){},onStart:function(n,e){},onDestroy:function(n){}},SE=new((function(){function n(){}var e=n.prototype;return e.load=function(t,i,s){if(t.el=typeof s=="string"?document.querySelector(s):s,t.options=Hl({},xE,i),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(c){return c.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(t.stringsElement.children),o=r.length;if(o)for(var a=0;a<o;a+=1)t.strings.push(r[a].innerHTML.trim())}for(var l in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[l]=l;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var i="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+i+"]")){var s=document.createElement("style");s.setAttribute(i,"true"),s.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(s)}},e.appendFadeOutAnimationCss=function(t){var i="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+i+"]")){var s=document.createElement("style");s.setAttribute(i,"true"),s.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(s)}},n})()),_f=new((function(){function n(){}var e=n.prototype;return e.typeHtmlChars=function(t,i,s){if(s.contentType!=="html")return i;var r=t.substring(i).charAt(0);if(r==="<"||r==="&"){var o;for(o=r==="<"?">":";";t.substring(i+1).charAt(0)!==o&&!(1+ ++i>t.length););i++}return i},e.backSpaceHtmlChars=function(t,i,s){if(s.contentType!=="html")return i;var r=t.substring(i).charAt(0);if(r===">"||r===";"){var o;for(o=r===">"?"<":"&";t.substring(i-1).charAt(0)!==o&&!(--i<0););i--}return i},n})()),ME=(function(){function n(t,i){SE.load(this,i,t),this.begin()}var e=n.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,i){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){i=_f.typeHtmlChars(t,i,s);var a=0,l=t.substring(i);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var c=1;c+=(l=/\d+/.exec(l)[0]).length,a=parseInt(l),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,i)+t.substring(i+c),s.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;t.substring(i+o).charAt(0)!=="`"&&(o++,!(i+o>t.length)););var u=t.substring(0,i),d=t.substring(u.length+1,i+o),f=t.substring(i+o+1);t=u+d+f,o--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),i>=t.length?s.doneTyping(t,i):s.keepTyping(t,i,o),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},a)},r):this.setPauseStatus(t,i,!0)},e.keepTyping=function(t,i,s){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var r=t.substring(0,i+=s);this.replaceText(r),this.typewrite(t,i)},e.doneTyping=function(t,i){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,i)},this.backDelay))},e.backspace=function(t,i){var s=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=_f.backSpaceHtmlChars(t,i,s);var o=t.substring(0,i);if(s.replaceText(o),s.smartBackspace){var a=s.strings[s.arrayPos+1];s.stopNum=a&&o===a.substring(0,i)?i:0}i>s.stopNum?(i--,s.backspace(t,i)):i<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],i))},r)}else this.setPauseStatus(t,i,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,i,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=i},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(i){t.stop()}),this.el.addEventListener("blur",function(i){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},n})();function EE({outputRef:n,inputRef:e,inputLineRef:t,terminalRef:i}){const s=nt(""),r=nt(!0),o=nt(!1),a="~",l=Mo(()=>{const $=s.value.toLowerCase();if(!$||$.includes(" "))return"";const le=gf.find(ae=>ae.startsWith($));return le?le.slice($.length):""}),c=nt(!0),u=nt(""),d=nt(null);let f=[],p=-1;const M=nt((()=>{const $=localStorage.getItem("portfolioLang");return $==="en"||$==="es"?$:"en"})()),g=nt({}),h=$=>g.value[M.value]&&g.value[M.value][$]||$,E=()=>{Zt(()=>{i&&i.value&&(i.value.scrollTop=i.value.scrollHeight)})},y=$=>{n&&n.value&&n.value.appendHtml&&(n.value.appendHtml($),E())},b=()=>{n&&n.value&&n.value.clear&&n.value.clear()};let I=!0;const T=()=>{const $=h("welcome_name"),le=h("neofetch_role");if(I){I=!1;const ae='class="text-base font-mono mb-0.5"';[[0,`<div ${ae}><span class="text-white/25">[ BOOT  ]</span><span class="text-white/45"> DevConsole v2.0</span></div>`],[170,`<div ${ae}><span style="color:#4ade80">[ OK    ]</span><span class="text-white/40"> Loading kernel...</span></div>`],[340,`<div ${ae}><span style="color:#4ade80">[ OK    ]</span><span class="text-white/40"> Mounting filesystem...</span></div>`],[510,`<div ${ae}><span style="color:#4ade80">[ INIT  ]</span><span class="text-white/40"> Loading profile: </span><span class="text-white/70">${$}</span></div>`],[680,`<div ${ae} mb-4"><span style="color:#4ade80">[ READY ]</span><span class="text-white/40"> Environment initialized</span></div>`],[950,`<div class="border-l-2 pl-4 py-2 mb-3" style="border-color:rgba(74,222,128,0.5)"><p class="text-4xl sm:text-5xl font-bold leading-tight" style="color:#4ade80">${$}</p><p class="text-sm mt-2 tracking-wide" style="color:rgba(74,222,128,0.85)">▸ ${le}</p></div>`],[1100,'<div class="h-px mb-3" style="background:linear-gradient(90deg,rgba(74,222,128,0.3),transparent)"></div>'],[1200,`<div class="text-base font-mono"><p class="text-white/55">${h("welcome_help")}</p><p class="text-white/55 mt-0.5">${h("welcome_shortcuts")}</p></div>`]].forEach(([Fe,Xe])=>setTimeout(()=>y(Xe),Fe))}else y(`
        <div class="mb-4 text-base font-mono">
          <div class="border-l-2 pl-4 py-2 mb-3" style="border-color:rgba(74,222,128,0.5)">
            <p class="text-4xl sm:text-5xl font-bold leading-tight" style="color:#4ade80">${$}</p>
            <p class="text-sm mt-2 tracking-wide" style="color:rgba(74,222,128,0.85)">▸ ${le}</p>
          </div>
          <div class="h-px mb-3" style="background:linear-gradient(90deg,rgba(74,222,128,0.3),transparent)"></div>
          <p class="text-white/55">${h("welcome_help")}</p>
          <p class="text-white/55 mt-0.5">${h("welcome_shortcuts")}</p>
        </div>`)},P=$=>{t&&t.value&&t.value.classList&&t.value.classList.remove("is-focused"),e&&e.value&&e.value.inputRefLocal&&(e.value.inputRefLocal.disabled=!0),u.value=h(`${$}_title`),d.value=$,c.value=!1},x=()=>{c.value=!0,d.value=null,o.value||(t&&t.value&&t.value.classList&&t.value.classList.add("is-focused"),e&&e.value&&e.value.inputRefLocal&&(e.value.inputRefLocal.disabled=!1),r.value=!0,Zt(A))},A=()=>{Zt(()=>{e?.value?.focus&&e.value.focus()})},U=()=>{b(),T(),o.value||Zt(A)};let R=null;const L=()=>{R&&(R.destroy(),R=null),o.value=!1,Zt(A)};async function X(){if(o.value)return;o.value=!0;const $=le=>(W(le),uo.includes(le)?(setTimeout(x,1500),new Promise(ae=>setTimeout(ae,2e3))):new Promise(ae=>setTimeout(ae,1500)));await Zt();try{R=new ME("#demo-typing",{strings:["help^1000","neofetch^2000","about^1500","skills^1500","projects^1500","education^1500","experience^1500","contact^1500","clear^1000"],typeSpeed:50,backSpeed:30,backDelay:1e3,loop:!1,showCursor:!0,cursorChar:"▋",onStringTyped:async(le,ae)=>{const be=ae.strings[le].split("^")[0];await $(be),le===ae.strings.length-1&&setTimeout(()=>{L()},2e3)}})}catch{L()}}const W=$=>{const le=String($),[ae,...be]=le.split(" ").filter(Boolean);if(ae==="demo"){U(),X();return}if(y(`<div class="flex"><span class="accent-teal font-bold">ismael@leosoftware</span><span class="text-white/70">:</span><span class="accent-warm">${Ks(a)}</span><span class="text-white/70">$</span><p class="ml-2 text-white">${Ks(le)}</p></div>`),uo.includes(ae))y(`<div><p class="text-white/50">${h("opening_app")} <span class="text-white/80">${ae}</span>...</p></div>`),P(ae);else if(ae==="neofetch"){const Fe=`<pre class="accent-teal leading-[1.1] font-bold text-[2.2vw] sm:text-[12px] md:text-[14px] overflow-hidden mb-2">${mf.ascii}</pre>`,Xe=mf.stats.map(Ve=>{const ee=Ve.key?h(Ve.key):Ve.value,Se=Ve.url?`<a href="${Ve.url}" target="_blank" class="accent-cyan underline underline-offset-2 hover:text-white transition-colors">${ee}</a>`:`<span class="text-white/85">${ee}</span>`;return`<div><span class="accent-warm font-bold">${Ve.label}:</span> ${Se}</div>`}).join("");y(`<div class="flex flex-col my-4 overflow-hidden">${Fe}<div class="flex flex-col whitespace-nowrap ml-2"><div class="text-white/[12%] mb-2">--------------------------------</div>${Xe}</div></div>`)}else if(ae==="clear")U();else if(ae==="lang"){const Fe=be[0];Fe==="en"||Fe==="es"?(M.value=Fe,localStorage.setItem("portfolioLang",Fe),document.documentElement.lang=Fe,y(`<div><p>${h("lang_changed")}</p></div>`),setTimeout(U,800)):y(`<div><p class="text-red-400 glow">${h("lang_usage")}</p></div>`)}else if(ae==="help"){const Fe=`
        <p class="mb-2 accent-warm">${h("help_header")}</p>
        <ul class="list-disc list-inside space-y-0.5 marker:text-white/30">
          ${uo.map(Xe=>`<li class="text-white/60"><span class="accent-teal font-bold">${Xe}</span> <span class="text-white/30">—</span> ${h("help_"+Xe)}</li>`).join("")}
          <li class="text-white/60"><span class="accent-teal font-bold">lang</span> <span class="text-white/30">—</span> ${h("help_lang")}</li>
          <li class="text-white/60"><span class="accent-teal font-bold">demo</span> <span class="text-white/30">—</span> ${h("help_demo")}</li>
          <li class="text-white/60"><span class="accent-teal font-bold">neofetch</span> <span class="text-white/30">—</span> ${h("help_neofetch")}</li>
          <li class="text-white/60"><span class="accent-teal font-bold">clear</span> <span class="text-white/30">—</span> ${h("help_clear")}</li>
          <li class="text-white/60"><span class="accent-violet font-bold">Ctrl+L</span> <span class="text-white/30">—</span> ${h("help_clear_shortcut")}</li>
          <li class="text-white/60"><span class="accent-teal font-bold">exit</span> <span class="text-white/30">—</span> ${h("help_exit")}</li>
          <li class="text-white/60"><span class="accent-teal font-bold">leo/</span> <span class="text-white/30">—</span> ${h("help_leo")}</li>
        </ul>`;y(`<div>${Fe}</div>`)}else ae==="exit"||ae==="leo/"?(y('<div><p class="text-white/50">Navegando a leosoftware.dev...</p></div>'),setTimeout(()=>{window.location.href="https://leosoftware.dev"},800)):y(ae==="ls"||ae==="cat"||ae==="cd"||ae==="pwd"?`<div><p class="text-white/50 italic">${h("unix_removed")}</p></div>`:`<div><p class="text-red-400 glow">${h("command_not_found")} '${Ks(ae)}'. ${h("type_help")}</p></div>`)},O=$=>{const le=($.key||"").toString().toLowerCase();if(o.value){$.preventDefault();return}if(le==="enter"){$.preventDefault();const ae=s.value.trim().toLowerCase();ae&&(ae!==f[0]&&f.unshift(ae),p=-1,W(ae)),s.value="",Zt(A);return}if(le==="arrowup"){$.preventDefault(),p<f.length-1&&(p++,s.value=f[p]||"");return}if(le==="arrowdown"){$.preventDefault(),p>0?(p--,s.value=f[p]||""):(p=-1,s.value="");return}if(le==="arrowright"&&l.value){$.preventDefault(),s.value+=l.value;return}if(le==="tab"){if($.preventDefault(),l.value)s.value+=l.value;else{const ae=s.value.trim().toLowerCase(),be=gf.filter(Fe=>Fe.startsWith(ae));be.length===1?s.value=be[0]:be.length>1&&(y(`<div class="flex"><span class="accent-teal font-bold">ismael@leosoftware</span><span class="text-white/70">:</span><span class="accent-warm">${Ks(a)}</span><span class="text-white/70">$</span><p class="ml-2 text-white/70">${Ks(ae)}</p></div>`),y(`<div class="flex flex-wrap gap-x-4 text-white/60">${be.join(" ")}</div>`))}return}if(le==="l"&&$.ctrlKey){$.preventDefault(),U();return}if(le==="escape"&&!c.value){x();return}},H=$=>{if(($.key||"").toString().toLowerCase()==="escape"){if(o.value){$.preventDefault(),L(),y('<div><p class="text-white/50">Demo detenida.</p></div>');return}c.value||x()}},B=$=>{$!=="en"&&$!=="es"||(M.value=$,localStorage.setItem("portfolioLang",$),document.documentElement.lang=$)};async function J(){document.documentElement.lang=M.value;try{g.value=await vE(),T();const $=M.value==="es"?'<p class="text-white/55">¿Es tu primera vez aquí? Escribe <span class="accent-teal">demo</span> para un tour rápido.</p>':'<p class="text-white/55">First time here? Type <span class="accent-teal">demo</span> for a quick tour.</p>';setTimeout(()=>y(`<div class="text-base font-mono">${$}</div>`),1400),Zt(A)}catch{y('<p class="text-red-400 glow">Error: No se pudo cargar el contenido. Por favor, refresca la página.</p>')}}return{inputText:s,isFocused:r,isDemoMode:o,suggestionRemainder:l,promptPath:a,modalHidden:c,modalTitle:u,modalComponent:d,currentLang:M,onKeyDown:O,onDocumentKeyDown:H,loadContentAndInit:J,focusInput:A,clearTerminal:U,closeWindow:x,openWindow:P,setLang:B,getText:h}}const bE=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},yE={class:"relative text-white overflow-hidden bg-black min-h-screen"},TE={key:0,class:"fixed inset-0 pointer-events-none z-[5]",style:{background:"rgba(74,222,128,0.05)",border:"2px solid rgba(74,222,128,0.25)","border-radius":"4px"}},AE={class:"flex items-center gap-2"},wE={key:0,class:"ml-1 text-[11px] font-mono text-white/45 select-none pointer-events-none"},CE={key:0,class:"flex items-center mt-2 flex-shrink-0 text-sm md:text-base"},RE={class:"accent-warm text-xs sm:text-sm md:text-base"},PE={key:1,class:"mt-2"},vf=480,xf=320,Sf=240,LE={__name:"TerminalWindow",setup(n){const e=nt(null),t=nt(null),i=nt(null),s=nt(null),r=nt(null),{inputText:o,isFocused:a,isDemoMode:l,suggestionRemainder:c,promptPath:u,modalHidden:d,modalTitle:f,modalComponent:p,currentLang:_,onKeyDown:M,loadContentAndInit:g,onDocumentKeyDown:h,focusInput:E,closeWindow:y,openWindow:b,setLang:I}=EE({outputRef:e,inputRef:t,inputLineRef:i,terminalRef:s}),T=nt(!1),P=nt(!1),x=nt(!1),A=nt(!1),U=nt(!1),R=nt(!1),L=nt(""),X=Mo(()=>L.value==="close"?"cerrar":L.value==="min"?P.value?"restaurar":"minimizar":L.value==="max"?x.value?"restaurar":"maximizar":""),W=nt(0),O=nt(0),H=nt(0),B=nt(0);let J=null,$=0;function le(){if(T.value=window.innerWidth<768,T.value)return;const me=window.innerWidth,v=window.innerHeight;H.value=Math.min(896,me*.92),B.value=v*.9,W.value=(me-H.value)/2,O.value=(v-B.value)/2}const ae=Mo(()=>({left:`${W.value}px`,top:`${O.value}px`,width:`${H.value}px`,height:`${B.value}px`,overflow:"hidden",transition:A.value||U.value?"none":"left 0.22s ease, top 0.22s ease, width 0.22s ease, height 0.22s ease"}));let be=0,Fe=0,Xe=!1;function Ve(me){T.value||me.target.closest('button, [class*="group/"]')||(A.value=!0,x.value?(Xe=!0,be=me.clientX,Fe=me.clientY):(Xe=!1,be=me.clientX-W.value,Fe=me.clientY-O.value))}function ee(me){T.value||me.target.closest("button")||ge()}let Se="",_e=0,Be=0,ze=0,He=0,C=0,D=0;function V(me,v){U.value=!0,Se=v,_e=me.clientX,Be=me.clientY,ze=H.value,He=B.value,C=W.value,D=O.value}function te(me){if(A.value)if(Xe){Xe=!1;const v=me.clientX/window.innerWidth;ce(),be=Math.round(v*H.value),Fe=20,W.value=Math.max(0,Math.min(me.clientX-be,window.innerWidth-H.value)),O.value=Math.max(0,me.clientY-Fe)}else{const v=window.innerWidth,m=window.innerHeight;W.value=Math.max(0,Math.min(me.clientX-be,v-H.value)),O.value=Math.max(0,Math.min(me.clientY-Fe,m-48)),R.value=O.value<=4}if(U.value){const v=me.clientX-_e,m=me.clientY-Be;let N=ze,j=He,se=C,de=D;Se.includes("e")&&(N=Math.max(vf,ze+v)),Se.includes("s")&&(j=Math.max(xf,He+m)),Se.includes("w")&&(N=Math.max(vf,ze-v),se=C+(ze-N)),Se.includes("n")&&(j=Math.max(xf,He-m),de=D+(He-j)),H.value=N,B.value=j,W.value=se,O.value=de}}function K(){if(A.value&&R.value){R.value=!1,A.value=!1,Xe=!1,U.value=!1,w();return}R.value=!1,A.value=!1,U.value=!1,Xe=!1}function ne(){window.location.href="https://leosoftware.dev"}function ce(){J&&(W.value=J.x,O.value=J.y,H.value=J.w,B.value=J.h),x.value=!1}function he(){$=B.value,P.value=!0,B.value=48}function w(){J={x:W.value,y:O.value,w:H.value,h:B.value},W.value=0,O.value=0,H.value=window.innerWidth,B.value=window.innerHeight,x.value=!0}function oe(){if(!T.value){if(P.value){P.value=!1,B.value=$||600,setTimeout(E,0);return}if(x.value){ce(),setTimeout(he,Sf);return}he()}}function ge(){if(!T.value){if(x.value){ce();return}if(P.value){P.value=!1,B.value=$||600,setTimeout(w,Sf);return}w()}}function fe(){T.value=window.innerWidth<768,x.value&&(H.value=window.innerWidth,B.value=window.innerHeight)}function Q(){P.value||setTimeout(E,0)}return Fo(()=>{le(),document.addEventListener("keydown",h),document.addEventListener("mousemove",te),document.addEventListener("mouseup",K),window.addEventListener("resize",fe),Zt(()=>{t.value&&(i.value=t.value.inputLineRef||t.value.inputRefLocal,t.value.focus?.()),g()})}),Oo(()=>{document.removeEventListener("keydown",h),document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",K),window.removeEventListener("resize",fe)}),(me,v)=>(wt(),Jt("div",yE,[vt(oE),v[24]||(v[24]=Ie("div",{class:"fixed inset-0 pointer-events-none z-[1]",style:{background:"radial-gradient(ellipse 72% 72% at 50% 50%, transparent 28%, rgba(0,0,0,0.72) 100%)"}},null,-1)),v[25]||(v[25]=Ie("div",{class:"fixed inset-0 pointer-events-none z-[5]",style:{"background-image":`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,"background-size":"180px 180px",opacity:"0.035","mix-blend-mode":"overlay"}},null,-1)),T.value?(wt(),Ls(gE,{key:0,currentLang:At(_),openWindow:At(b),onSetLang:At(I)},null,8,["currentLang","openWindow","onSetLang"])):Ei("",!0),vt(Zc,{name:"snap"},{default:Ga(()=>[R.value&&!T.value?(wt(),Jt("div",TE)):Ei("",!0)]),_:1}),T.value?Ei("",!0):(wt(),Jt("div",{key:1,id:"window",ref_key:"windowEl",ref:r,class:"glass-panel p-0 flex flex-col z-10 fixed",style:Ps(ae.value),onMousedown:Q},[Ie("div",{class:Fn(["bg-white/[3%] rounded-t-[24px] p-3 flex items-center gap-2 flex-shrink-0 z-10",[{"select-none":!T.value&&!x.value},P.value?"rounded-b-[20px]":"border-b border-[rgba(74,222,128,0.12)]"]]),onMousedown:Ve,onDblclick:ee},[Ie("div",AE,[Ie("button",{onClick:un(ne,["stop"]),onMouseenter:v[0]||(v[0]=m=>L.value="close"),onMouseleave:v[1]||(v[1]=m=>L.value=""),class:"w-4 h-4 rounded-full flex items-center justify-center",style:{background:"#ff5f57","box-shadow":"0 0 8px rgba(255,95,87,0.5)"}},[...v[16]||(v[16]=[Ie("span",{class:"text-[8px] font-black leading-none",style:{color:"rgba(0,0,0,0.5)"}},"✕",-1)])],32),Ie("button",{onClick:un(oe,["stop"]),onMouseenter:v[2]||(v[2]=m=>L.value="min"),onMouseleave:v[3]||(v[3]=m=>L.value=""),class:"w-4 h-4 rounded-full flex items-center justify-center",style:{background:"#ffbd2e","box-shadow":"0 0 8px rgba(255,189,46,0.5)"}},[...v[17]||(v[17]=[Ie("span",{class:"text-[9px] font-black leading-none",style:{color:"rgba(0,0,0,0.5)"}},"−",-1)])],32),Ie("button",{onClick:un(ge,["stop"]),onMouseenter:v[4]||(v[4]=m=>L.value="max"),onMouseleave:v[5]||(v[5]=m=>L.value=""),class:"w-4 h-4 rounded-full flex items-center justify-center",style:{background:"#28c940","box-shadow":"0 0 8px rgba(40,201,64,0.5)"}},[...v[18]||(v[18]=[Ie("span",{class:"text-[8px] font-black leading-none",style:{color:"rgba(0,0,0,0.5)"}},"⤢",-1)])],32),vt(Zc,{name:"btn-label"},{default:Ga(()=>[L.value?(wt(),Jt("span",wE,ti(X.value),1)):Ei("",!0)]),_:1})]),v[19]||(v[19]=Ie("div",{class:"ml-2 text-xs font-mono hidden sm:block"},[Ie("span",{class:"accent-teal"},"ismael@leosoftware"),Ie("span",{class:"text-white/30"},":"),Ie("span",{class:"accent-warm"},"~")],-1))],34),gp(Ie("div",{id:"terminal",ref_key:"terminalElement",ref:s,class:"p-3 sm:p-4 md:p-6 flex-grow flex flex-col overflow-y-auto z-10 scroll-smooth custom-scrollbar",onClick:v[7]||(v[7]=(...m)=>At(E)&&At(E)(...m))},[vt(cg,{ref_key:"outputComponent",ref:e},null,512),At(l)?(wt(),Jt("div",CE,[v[20]||(v[20]=Ie("span",{class:"accent-teal font-bold text-xs sm:text-sm md:text-base"},"ismael@leosoftware",-1)),v[21]||(v[21]=Ie("span",{class:"text-white/70 text-xs sm:text-sm md:text-base"},":",-1)),Ie("span",RE,ti(At(u)),1),v[22]||(v[22]=Ie("span",{class:"text-white/70 text-xs sm:text-sm md:text-base"},"$",-1)),v[23]||(v[23]=Ie("span",{id:"demo-typing",class:"ml-2 whitespace-pre text-white text-xs sm:text-sm md:text-base"},null,-1))])):Ei("",!0),At(l)?Ei("",!0):(wt(),Jt("div",PE,[vt(_g,{ref_key:"inputComponent",ref:t,modelValue:At(o),"onUpdate:modelValue":v[6]||(v[6]=m=>Ct(o)?o.value=m:null),isFocused:At(a),suggestionRemainder:At(c),inputLineId:"input-line",promptPath:At(u),onKeydown:At(M)},null,8,["modelValue","isFocused","suggestionRemainder","promptPath","onKeydown"])]))],512),[[Hm,!P.value]]),!T.value&&!x.value&&!P.value?(wt(),Jt(Kt,{key:0},[Ie("div",{class:"absolute top-0 left-0 w-3 h-3 z-30 cursor-nw-resize",onMousedown:v[8]||(v[8]=un(m=>V(m,"nw"),["prevent"]))},null,32),Ie("div",{class:"absolute top-0 right-0 w-3 h-3 z-30 cursor-ne-resize",onMousedown:v[9]||(v[9]=un(m=>V(m,"ne"),["prevent"]))},null,32),Ie("div",{class:"absolute bottom-0 left-0 w-3 h-3 z-30 cursor-sw-resize",onMousedown:v[10]||(v[10]=un(m=>V(m,"sw"),["prevent"]))},null,32),Ie("div",{class:"absolute bottom-0 right-0 w-3 h-3 z-30 cursor-se-resize",onMousedown:v[11]||(v[11]=un(m=>V(m,"se"),["prevent"]))},null,32),Ie("div",{class:"absolute top-0 left-3 right-3 h-1.5 z-30 cursor-n-resize",onMousedown:v[12]||(v[12]=un(m=>V(m,"n"),["prevent"]))},null,32),Ie("div",{class:"absolute bottom-0 left-3 right-3 h-1.5 z-30 cursor-s-resize",onMousedown:v[13]||(v[13]=un(m=>V(m,"s"),["prevent"]))},null,32),Ie("div",{class:"absolute top-3 bottom-3 left-0 w-1.5 z-30 cursor-w-resize",onMousedown:v[14]||(v[14]=un(m=>V(m,"w"),["prevent"]))},null,32),Ie("div",{class:"absolute top-3 bottom-3 right-0 w-1.5 z-30 cursor-e-resize",onMousedown:v[15]||(v[15]=un(m=>V(m,"e"),["prevent"]))},null,32)],64)):Ei("",!0)],36)),vt(bg,{modalHidden:At(d),title:At(f),componentName:At(p),currentLang:At(_),onClose:At(y)},null,8,["modalHidden","title","componentName","currentLang","onClose"])]))}},DE=bE(LE,[["__scopeId","data-v-c155cdc0"]]),IE={__name:"App",setup(n){return(e,t)=>(wt(),Ls(DE))}};rg(IE).mount("#app");export{Kt as F,aE as _,Jt as a,Ie as b,Mo as c,Fo as d,Fn as e,gm as f,Mp as g,nt as h,NE as i,Oo as j,FE as k,Ei as l,Ps as m,Zt as n,wt as o,OE as p,UE as q,Fp as r,ip as s,ti as t,vt as u,At as v,ws as w};
