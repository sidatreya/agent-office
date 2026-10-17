(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="186",ds={ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vf=0,Tc=1,Mf=2,Ys=1,yf=2,Hs=3,Ui=0,an=1,ke=2,Vn=0,qs=1,Fi=2,wc=3,Ac=4,Sf=5,cs=100,bf=101,Ef=102,Tf=103,wf=104,Af=200,Rf=201,Cf=202,Pf=203,hu=204,uu=205,Lf=206,Df=207,If=208,Nf=209,Uf=210,Ff=211,Of=212,Bf=213,zf=214,Ao=0,Ro=1,Co=2,js=3,Po=4,Lo=5,Do=6,Io=7,fu=0,kf=1,Hf=2,Wn=0,bl=1,El=2,Tl=3,wa=4,wl=5,Al=6,Rl=7,du=300,Oi=301,_s=302,ea=303,ka=304,Aa=306,xs=1e3,ni=1001,No=1002,qe=1003,Gf=1004,yr=1005,Qe=1006,Ha=1007,Ii=1008,gn=1009,pu=1010,mu=1011,tr=1012,Cl=1013,qn=1014,Ln=1015,un=1016,Pl=1017,Ll=1018,er=1020,gu=35902,_u=35899,xu=1021,vu=1022,Dn=1023,si=1026,Ni=1027,Dl=1028,Il=1029,Bi=1030,Nl=1031,Ul=1033,na=33776,ia=33777,sa=33778,ra=33779,Uo=35840,Fo=35841,Oo=35842,Bo=35843,zo=36196,ko=37492,Ho=37496,Go=37488,Vo=37489,ua=37490,Wo=37491,Xo=37808,Yo=37809,qo=37810,$o=37811,Zo=37812,Ko=37813,Jo=37814,Qo=37815,jo=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,rl=36492,al=36494,ol=36495,ll=36283,cl=36284,fa=36285,hl=36286,Vf=3200,ul=0,Wf=1,mi="",Se="srgb",da="srgb-linear",pa="linear",ue="srgb",Ga=7680,Xf=519,Yf=512,qf=513,$f=514,Fl=515,Zf=516,Kf=517,Ol=518,Jf=519,Qf=35044,Rc="300 es",Gn=2e3,nr=2001;function jf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function td(){const n=ma("canvas");return n.style.display="block",n}const Cc={};function Pc(...n){const t="THREE."+n.shift();console.log(t,...n)}function Mu(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Bt(...n){n=Mu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function re(...n){n=Mu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ps(...n){const t=n.join(" ");t in Cc||(Cc[t]=!0,Bt(...n))}function ed(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const nd={[Ao]:Ro,[Co]:Do,[Po]:Io,[js]:Lo,[Ro]:Ao,[Do]:Co,[Io]:Po,[Lo]:js};class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lc=1234567;const $s=Math.PI/180,ir=180/Math.PI;function ki(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function Wt(n,t,e){return Math.max(t,Math.min(e,n))}function Bl(n,t){return(n%t+t)%t}function id(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function sd(n,t,e){return n!==t?(e-n)/(t-n):0}function Zs(n,t,e){return(1-e)*n+e*t}function rd(n,t,e,i){return Zs(n,t,1-Math.exp(-e*i))}function ad(n,t=1){return t-Math.abs(Bl(n,t*2)-t)}function od(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ld(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function cd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function hd(n,t){return n+Math.random()*(t-n)}function ud(n){return n*(.5-Math.random())}function fd(n){n!==void 0&&(Lc=n);let t=Lc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dd(n){return n*$s}function pd(n){return n*ir}function md(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function gd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _d(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xd(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),u=a((t+i)/2),f=r((t-i)/2),h=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,c*f,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*f,o*l);break;case"ZXZ":n.set(c*f,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*u,o*l);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ra={DEG2RAD:$s,RAD2DEG:ir,generateUUID:ki,clamp:Wt,euclideanModulo:Bl,mapLinear:id,inverseLerp:sd,lerp:Zs,damp:rd,pingpong:ad,smoothstep:od,smootherstep:ld,randInt:cd,randFloat:hd,randFloatSpread:ud,seededRandom:fd,degToRad:dd,radToDeg:pd,isPowerOfTwo:md,ceilPowerOfTwo:gd,floorPowerOfTwo:_d,setQuaternionFromProperEuler:xd,normalize:sn,denormalize:hs},hc=class hc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hc.prototype.isVector2=!0;let rt=hc;class In{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||c!==h||l!==p||u!==g){let m=c*h+l*p+u*g+f*x;m<0&&(h=-h,p=-p,g=-g,x=-x,m=-m);let d=1-o;if(m<.9995){const v=Math.acos(m),T=Math.sin(v);d=Math.sin(d*v)/T,o=Math.sin(o*v)/T,c=c*d+h*o,l=l*d+p*o,u=u*d+g*o,f=f*d+x*o}else{c=c*d+h*o,l=l*d+p*o,u=u*d+g*o,f=f*d+x*o;const v=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=v,l*=v,u*=v,f*=v}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*f+c*p-l*h,t[e+1]=c*g+u*h+l*f-o*p,t[e+2]=l*g+u*p+o*h-c*f,t[e+3]=u*g-o*f-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),f=o(r/2),h=c(i/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const uc=class uc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),u=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+c*l+a*f-o*u,this.y=i+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uc.prototype.isVector3=!0;let L=uc;const Va=new L,Dc=new In,fc=class fc{constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],x=s[0],m=s[3],d=s[6],v=s[1],T=s[4],_=s[7],E=s[2],y=s[5],A=s[8];return r[0]=a*x+o*v+c*E,r[3]=a*m+o*T+c*y,r[6]=a*d+o*_+c*A,r[1]=l*x+u*v+f*E,r[4]=l*m+u*T+f*y,r[7]=l*d+u*_+f*A,r[2]=h*x+p*v+g*E,r[5]=h*m+p*T+g*y,r[8]=h*d+p*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*r,p=l*r-a*c,g=e*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*l-u*i)*x,t[2]=(o*i-s*a)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wa.makeScale(t,e)),this}rotate(t){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wa.makeRotation(-t)),this}translate(t,e){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fc.prototype.isMatrix3=!0;let kt=fc;const Wa=new kt,Ic=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vd(){const n={enabled:!0,workingColorSpace:da,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?pa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[da]:{primaries:t,whitePoint:i,transfer:pa,toXYZ:Ic,fromXYZ:Nc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:Ic,fromXYZ:Nc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}}),n}const ne=vd();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $i;class Md{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{$i===void 0&&($i=ma("canvas")),$i.width=t.width,$i.height=t.height;const s=$i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=$i}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ma("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ii(e[i]/255)*255):e[i]=ii(e[i]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yd=0;class zl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xa(s[a].image)):r.push(Xa(s[a]))}else r=Xa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Md.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}let Sd=0;const Ya=new L;class je extends yi{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,i=ni,s=ni,r=Qe,a=Ii,o=Dn,c=gn,l=je.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=ki(),this.name="",this.source=new zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ya).x}get height(){return this.source.getSize(Ya).y}get depth(){return this.source.getSize(Ya).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xs:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case No:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xs:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case No:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=du;je.DEFAULT_ANISOTROPY=1;const dc=class dc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,_=(p+1)/2,E=(d+1)/2,y=(u+h)/4,A=(f+x)/4,M=(g+m)/4;return T>_&&T>E?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=y/i,r=A/i):_>E?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=y/s,r=M/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=A/r,s=M/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(h-u)/v,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dc.prototype.isVector4=!0;let Te=dc;class bd extends yi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new je(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new zl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends bd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class yu extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ed extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ta=class Ta{constructor(t,e,i,s,r,a,o,c,l,u,f,h,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,u,f,h,p,g,x,m)}set(t,e,i,s,r,a,o,c,l,u,f,h,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ta().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,p=a*f,g=o*u,x=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=h-x*l,e[9]=-o*c,e[2]=x-h*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,p=c*f,g=l*u,x=l*f;e[0]=h+x*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=x+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,p=c*f,g=l*u,x=l*f;e[0]=h-x*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=x-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,p=a*f,g=o*u,x=o*f;e[0]=c*u,e[4]=g*l-p,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=x-h*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*f+g,e[10]=h-x*f}else if(t.order==="XZY"){const h=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+x,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Td,t,wd)}lookAt(t,e,i){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),li.crossVectors(i,dn),li.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),li.crossVectors(i,dn)),li.normalize(),Sr.crossVectors(dn,li),s[0]=li.x,s[4]=Sr.x,s[8]=dn.x,s[1]=li.y,s[5]=Sr.y,s[9]=dn.y,s[2]=li.z,s[6]=Sr.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],v=i[3],T=i[7],_=i[11],E=i[15],y=s[0],A=s[4],M=s[8],b=s[12],R=s[1],P=s[5],D=s[9],O=s[13],I=s[2],B=s[6],X=s[10],V=s[14],tt=s[3],Y=s[7],et=s[11],nt=s[15];return r[0]=a*y+o*R+c*I+l*tt,r[4]=a*A+o*P+c*B+l*Y,r[8]=a*M+o*D+c*X+l*et,r[12]=a*b+o*O+c*V+l*nt,r[1]=u*y+f*R+h*I+p*tt,r[5]=u*A+f*P+h*B+p*Y,r[9]=u*M+f*D+h*X+p*et,r[13]=u*b+f*O+h*V+p*nt,r[2]=g*y+x*R+m*I+d*tt,r[6]=g*A+x*P+m*B+d*Y,r[10]=g*M+x*D+m*X+d*et,r[14]=g*b+x*O+m*V+d*nt,r[3]=v*y+T*R+_*I+E*tt,r[7]=v*A+T*P+_*B+E*Y,r[11]=v*M+T*D+_*X+E*et,r[15]=v*b+T*O+_*V+E*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15],v=c*p-l*h,T=o*p-l*f,_=o*h-c*f,E=a*p-l*u,y=a*h-c*u,A=a*f-o*u;return e*(x*v-m*T+d*_)-i*(g*v-m*E+d*y)+s*(g*T-x*E+d*A)-r*(g*_-x*y+m*A)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],v=e*o-i*a,T=e*c-s*a,_=e*l-r*a,E=i*c-s*o,y=i*l-r*o,A=s*l-r*c,M=u*x-f*g,b=u*m-h*g,R=u*d-p*g,P=f*m-h*x,D=f*d-p*x,O=h*d-p*m,I=v*O-T*D+_*P+E*R-y*b+A*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return t[0]=(o*O-c*D+l*P)*B,t[1]=(s*D-i*O-r*P)*B,t[2]=(x*A-m*y+d*E)*B,t[3]=(h*y-f*A-p*E)*B,t[4]=(c*R-a*O-l*b)*B,t[5]=(e*O-s*R+r*b)*B,t[6]=(m*_-g*A-d*T)*B,t[7]=(u*A-h*_+p*T)*B,t[8]=(a*D-o*R+l*M)*B,t[9]=(i*R-e*D-r*M)*B,t[10]=(g*y-x*_+d*v)*B,t[11]=(f*_-u*y-p*v)*B,t[12]=(o*b-a*P-c*M)*B,t[13]=(e*P-i*b+s*M)*B,t[14]=(x*T-g*E-m*v)*B,t[15]=(u*E-f*T+h*v)*B,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,f=o+o,h=r*l,p=r*u,g=r*f,x=a*u,m=a*f,d=o*f,v=c*l,T=c*u,_=c*f,E=i.x,y=i.y,A=i.z;return s[0]=(1-(x+d))*E,s[1]=(p+_)*E,s[2]=(g-T)*E,s[3]=0,s[4]=(p-_)*y,s[5]=(1-(h+d))*y,s[6]=(m+v)*y,s[7]=0,s[8]=(g+T)*A,s[9]=(m-v)*A,s[10]=(1-(h+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length();const o=Zi.set(s[4],s[5],s[6]).length(),c=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),wn.copy(this);const l=1/a,u=1/o,f=1/c;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,e.setFromRotationMatrix(wn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=Gn,c=!1){const l=this.elements,u=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),p=(i+s)/(i-s);let g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Gn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===nr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Gn,c=!1){const l=this.elements,u=2/(e-t),f=2/(i-s),h=-(e+t)/(e-t),p=-(i+s)/(i-s);let g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Gn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===nr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ta.prototype.isMatrix4=!0;let jt=Ta;const Zi=new L,wn=new jt,Td=new L(0,0,0),wd=new L(1,1,1),li=new L,Sr=new L,dn=new L,Uc=new jt,Fc=new In;class xi{constructor(t=0,e=0,i=0,s=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class kl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ad=0;const Oc=new L,Ki=new In,Zn=new jt,br=new L,Rs=new L,Rd=new L,Cd=new In,Bc=new L(1,0,0),zc=new L(0,1,0),kc=new L(0,0,1),Hc={type:"added"},Pd={type:"removed"},Ji={type:"childadded",child:null},qa={type:"childremoved",child:null};class Le extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new L,e=new xi,i=new In,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new kt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Bc,t)}rotateY(t){return this.rotateOnAxis(zc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bc,t)}translateY(t){return this.translateOnAxis(zc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?br.copy(t):br.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Rs,br,this.up):Zn.lookAt(br,Rs,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Zn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pd),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Le.DEFAULT_UP=new L(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dt extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ld={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ld)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Za(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=Bl(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Za(a,r,t+1/3),this.g=Za(a,r,t),this.b=Za(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Se){function i(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const i=Su[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return ne.workingToColorSpace(Je.copy(this),t),Math.round(Wt(Je.r*255,0,255))*65536+Math.round(Wt(Je.g*255,0,255))*256+Math.round(Wt(Je.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Je.copy(this),e);const i=Je.r,s=Je.g,r=Je.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Se){ne.workingToColorSpace(Je.copy(this),t);const e=Je.r,i=Je.g,s=Je.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Er);const i=Zs(ci.h,Er.h,e),s=Zs(ci.s,Er.s,e),r=Zs(ci.l,Er.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new vt;vt.NAMES=Su;class bu extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const An=new L,Kn=new L,Ka=new L,Jn=new L,Qi=new L,ji=new L,Gc=new L,Ja=new L,Qa=new L,ja=new L,to=new Te,eo=new Te,no=new Te;class Pn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){An.subVectors(s,e),Kn.subVectors(i,e),Ka.subVectors(t,e);const a=An.dot(An),o=An.dot(Kn),c=An.dot(Ka),l=Kn.dot(Kn),u=Kn.dot(Ka),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return to.setScalar(0),eo.setScalar(0),no.setScalar(0),to.fromBufferAttribute(t,e),eo.fromBufferAttribute(t,i),no.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(to,r.x),a.addScaledVector(eo,r.y),a.addScaledVector(no,r.z),a}static isFrontFacing(t,e,i,s){return An.subVectors(i,e),Kn.subVectors(t,e),An.cross(Kn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),An.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Pn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Qi.subVectors(s,i),ji.subVectors(r,i),Ja.subVectors(t,i);const c=Qi.dot(Ja),l=ji.dot(Ja);if(c<=0&&l<=0)return e.copy(i);Qa.subVectors(t,s);const u=Qi.dot(Qa),f=ji.dot(Qa);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(Qi,a);ja.subVectors(t,r);const p=Qi.dot(ja),g=ji.dot(ja);if(g>=0&&p<=g)return e.copy(r);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(ji,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Gc.subVectors(r,s),o=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(Gc,o);const d=1/(m+x+h);return a=x*d,o=h*d,e.copy(i).addScaledVector(Qi,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Hi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tr.copy(i.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),wr.subVectors(this.max,Cs),ts.subVectors(t.a,Cs),es.subVectors(t.b,Cs),ns.subVectors(t.c,Cs),hi.subVectors(es,ts),ui.subVectors(ns,es),Ei.subVectors(ts,ns);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ei.z,Ei.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ei.z,0,-Ei.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ei.y,Ei.x,0];return!io(e,ts,es,ns,wr)||(e=[1,0,0,0,1,0,0,0,1],!io(e,ts,es,ns,wr))?!1:(Ar.crossVectors(hi,ui),e=[Ar.x,Ar.y,Ar.z],io(e,ts,es,ns,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qn=[new L,new L,new L,new L,new L,new L,new L,new L],Rn=new L,Tr=new Hi,ts=new L,es=new L,ns=new L,hi=new L,ui=new L,Ei=new L,Cs=new L,wr=new L,Ar=new L,Ti=new L;function io(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ti.fromArray(n,r);const o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=t.dot(Ti),l=e.dot(Ti),u=i.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ne=new L,Rr=new rt;let Dd=0;class Xn extends yi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qf,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=sn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Eu extends Xn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Tu extends Xn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Zt extends Xn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Id=new Hi,Ps=new L,so=new L;class Gi{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Id.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const e=Ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ps,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(so)),this.expandByPoint(Ps.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Nd=0;const xn=new jt,ro=new Le,is=new L,pn=new Hi,Ls=new Hi,We=new L;class Re extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jf(t)?Tu:Eu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(pn.min,Ls.min),pn.expandByPoint(We),We.addVectors(pn.max,Ls.max),pn.expandByPoint(We)):(pn.expandByPoint(Ls.min),pn.expandByPoint(Ls.max))}pn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)We.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(We));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)We.fromBufferAttribute(o,l),c&&(is.fromBufferAttribute(t,l),We.add(is)),s=Math.max(s,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Xn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let M=0;M<i.count;M++)o[M]=new L,c[M]=new L;const l=new L,u=new L,f=new L,h=new rt,p=new rt,g=new rt,x=new L,m=new L;function d(M,b,R){l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,R),h.fromBufferAttribute(r,M),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,R),u.sub(l),f.sub(l),p.sub(h),g.sub(h);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[M].add(x),o[b].add(x),o[R].add(x),c[M].add(m),c[b].add(m),c[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let M=0,b=v.length;M<b;++M){const R=v[M],P=R.start,D=R.count;for(let O=P,I=P+D;O<I;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const T=new L,_=new L,E=new L,y=new L;function A(M){E.fromBufferAttribute(s,M),y.copy(E);const b=o[M];T.copy(b),T.sub(E.multiplyScalar(E.dot(b))).normalize(),_.crossVectors(y,b);const P=_.dot(c[M])<0?-1:1;a.setXYZW(M,T.x,T.y,T.z,P)}for(let M=0,b=v.length;M<b;++M){const R=v[M],P=R.start,D=R.count;for(let O=P,I=P+D;O<I;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Xn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,f=new L;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let d=0;d<u;d++)h[g++]=l[p++]}return new Xn(h,u,f)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=t(h,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ao=new L,Ud=new L,Fd=new kt;class ei{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ao.subVectors(i,e).cross(Ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(ao),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Fd.getNormalMatrix(t),s=this.coplanarPoint(ao).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Od=0;class Vi extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=qs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=uu,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ei().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new rt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const jn=new L,oo=new L,Cr=new L,Pr=new L;class dr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){oo.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),Pr.copy(this.origin).sub(oo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Cr),o=Pr.dot(this.direction),c=-Pr.dot(Cr),l=Pr.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*c-o,h=a*o-c,g=r*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,p=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(oo).addScaledVector(Cr,h),p}intersectSphere(t,e){if(t.radius<0)return null;jn.subVectors(t.center,this.origin);const i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,i,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,p=t.z-a.z,g=e.x-a.x,x=e.y-a.y,m=e.z-a.z,d=i.x-a.x,v=i.y-a.y,T=i.z-a.z,_=Math.abs(c),E=Math.abs(l),y=Math.abs(u);let A,M,b,R,P,D,O,I,B,X,V,tt;if(_>=E&&_>=y?(b=c,D=f,B=g,tt=d,c>=0?(A=l,M=u,R=h,P=p,O=x,I=m,X=v,V=T):(A=u,M=l,R=p,P=h,O=m,I=x,X=T,V=v)):E>=y?(b=l,D=h,B=x,tt=v,l>=0?(A=u,M=c,R=p,P=f,O=m,I=g,X=T,V=d):(A=c,M=u,R=f,P=p,O=g,I=m,X=d,V=T)):(b=u,D=p,B=m,tt=T,u>=0?(A=c,M=l,R=f,P=h,O=g,I=x,X=d,V=v):(A=l,M=c,R=h,P=f,O=x,I=g,X=v,V=d)),b===0)return null;const Y=A/b,et=M/b,nt=1/b,Nt=R-Y*D,st=P-et*D,Ft=O-Y*B,te=I-et*B,ie=X-Y*tt,$=V-et*tt,j=ie*te-$*Ft,bt=Nt*$-st*ie,zt=Ft*st-te*Nt;if(s){if(j<0||bt<0||zt<0)return null}else if((j<0||bt<0||zt<0)&&(j>0||bt>0||zt>0))return null;const yt=j+bt+zt;if(yt===0)return null;const qt=nt*(j*D+bt*B+zt*tt);return(yt>0?qt<0:qt>0)?null:this.at(qt/yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt extends Vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Vc=new jt,wi=new dr,Lr=new Gi,Wc=new L,Dr=new L,Ir=new L,Nr=new L,lo=new L,Ur=new L,Xc=new L,Fr=new L;class Ht extends Le{constructor(t=new Re,e=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ur.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(lo.fromBufferAttribute(f,t),a?Ur.addScaledVector(lo,u):Ur.addScaledVector(lo.sub(e),u))}e.add(Ur)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Lr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Lr,Wc)===null||wi.origin.distanceToSquared(Wc)>(t.far-t.near)**2))&&(Vc.copy(r).invert(),wi.copy(t.ray).applyMatrix4(Vc),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,E=T;_<E;_+=3){const y=o.getX(_),A=o.getX(_+1),M=o.getX(_+2);s=Or(this,d,t,i,l,u,f,y,A,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const v=o.getX(m),T=o.getX(m+1),_=o.getX(m+2);s=Or(this,a,t,i,l,u,f,v,T,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,E=T;_<E;_+=3){const y=_,A=_+1,M=_+2;s=Or(this,d,t,i,l,u,f,y,A,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const v=m,T=m+1,_=m+2;s=Or(this,a,t,i,l,u,f,v,T,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Bd(n,t,e,i,s,r,a,o){let c;if(t.side===an?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Ui,o),c===null)return null;Fr.copy(o),Fr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Fr);return l<e.near||l>e.far?null:{distance:l,point:Fr.clone(),object:n}}function Or(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Dr),n.getVertexPosition(c,Ir),n.getVertexPosition(l,Nr);const u=Bd(n,t,e,i,Dr,Ir,Nr,Xc);if(u){const f=new L;Pn.getBarycoord(Xc,Dr,Ir,Nr,f),s&&(u.uv=Pn.getInterpolatedAttribute(s,o,c,l,f,new rt)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,o,c,l,f,new rt)),a&&(u.normal=Pn.getInterpolatedAttribute(a,o,c,l,f,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new L,materialIndex:0};Pn.getNormal(Dr,Ir,Nr,h.normal),u.face=h,u.barycoord=f}return u}class wu extends je{constructor(t=null,e=1,i=1,s,r,a,o,c,l=qe,u=qe,f,h){super(null,a,o,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yc extends Xn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ss=new jt,qc=new jt,Br=[],$c=new Hi,zd=new jt,Ds=new Ht,Is=new Gi;class Zc extends Ht{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,zd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ss),$c.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union($c)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ss),Is.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(i),t.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),qc.multiplyMatrices(i,ss),Ds.matrixWorld=qc,Ds.raycast(t,Br);for(let a=0,o=Br.length;a<o;a++){const c=Br[a];c.instanceId=r,c.object=this,e.push(c)}Br.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Yc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new wu(new Float32Array(s*this.count),s,this.count,Dl,Ln));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ai=new Gi,kd=new rt(.5,.5),zr=new L;class Hl{constructor(t=new ei,e=new ei,i=new ei,s=new ei,r=new ei,a=new ei){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Gn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],p=r[7],g=r[8],x=r[9],m=r[10],d=r[11],v=r[12],T=r[13],_=r[14],E=r[15];if(s[0].setComponents(l-a,p-u,d-g,E-v).normalize(),s[1].setComponents(l+a,p+u,d+g,E+v).normalize(),s[2].setComponents(l+o,p+f,d+x,E+T).normalize(),s[3].setComponents(l-o,p-f,d-x,E-T).normalize(),i)s[4].setComponents(c,h,m,_).normalize(),s[5].setComponents(l-c,p-h,d-m,E-_).normalize();else if(s[4].setComponents(l-c,p-h,d-m,E-_).normalize(),e===Gn)s[5].setComponents(l+c,p+h,d+m,E+_).normalize();else if(e===nr)s[5].setComponents(c,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){Ai.center.set(0,0,0);const e=kd.distanceTo(t.center);return Ai.radius=.7071067811865476+e,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(zr.x=s.normal.x>0?t.max.x:t.min.x,zr.y=s.normal.y>0?t.max.y:t.min.y,zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Au extends Vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ga=new L,_a=new L,Kc=new jt,Ns=new dr,kr=new Gi,co=new L,Jc=new L;class Hd extends Le{constructor(t=new Re,e=new Au){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ga.fromBufferAttribute(e,s-1),_a.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ga.distanceTo(_a);t.setAttribute("lineDistance",new Zt(i,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Kc.copy(s).invert(),Ns.copy(t.ray).applyMatrix4(Kc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=l){const d=u.getX(x),v=u.getX(x+1),T=Hr(this,t,Ns,c,d,v,x);T&&e.push(T)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),d=Hr(this,t,Ns,c,x,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=l){const d=Hr(this,t,Ns,c,x,x+1,x);d&&e.push(d)}if(this.isLineLoop){const x=Hr(this,t,Ns,c,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(ga.fromBufferAttribute(o,s),_a.fromBufferAttribute(o,r),e.distanceSqToSegment(ga,_a,co,Jc)>i)return;co.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(co);if(!(l<t.near||l>t.far))return{distance:l,point:Jc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Ru extends Vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qc=new jt,fl=new dr,Gr=new Gi,Vr=new L;class Gd extends Le{constructor(t=new Re,e=new Ru){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;Qc.copy(s).invert(),fl.copy(t.ray).applyMatrix4(Qc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const h=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=h,x=p;g<x;g++){const m=l.getX(g);Vr.fromBufferAttribute(f,m),jc(Vr,m,c,s,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=h,x=p;g<x;g++)Vr.fromBufferAttribute(f,g),jc(Vr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function jc(n,t,e,i,s,r,a){const o=fl.distanceSqToPoint(n);if(o<e){const c=new L;fl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Cu extends je{constructor(t=[],e=Oi,i,s,r,a,o,c,l,u){super(t,e,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class En extends je{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sr extends je{constructor(t,e,i=qn,s,r,a,o=qe,c=qe,l,u=si,f=1){if(u!==si&&u!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Vd extends sr{constructor(t,e=qn,i=Oi,s,r,a=qe,o=qe,c,l=si){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Pu extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Nn extends Re{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2));function g(x,m,d,v,T,_,E,y,A,M,b){const R=_/A,P=E/M,D=_/2,O=E/2,I=y/2,B=A+1,X=M+1;let V=0,tt=0;const Y=new L;for(let et=0;et<X;et++){const nt=et*P-O;for(let Nt=0;Nt<B;Nt++){const st=Nt*R-D;Y[x]=st*v,Y[m]=nt*T,Y[d]=I,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[d]=y>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(Nt/A),f.push(1-et/M),V+=1}}for(let et=0;et<M;et++)for(let nt=0;nt<A;nt++){const Nt=h+nt+B*et,st=h+nt+B*(et+1),Ft=h+(nt+1)+B*(et+1),te=h+(nt+1)+B*et;c.push(Nt,st,te),c.push(st,Ft,te),tt+=6}o.addGroup(p,tt,b),p+=tt,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class xa extends Re{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],u=e/2,f=Math.PI/2*t,h=e,p=2*f+h,g=i*2+r,x=s+1,m=new L,d=new L;for(let v=0;v<=g;v++){let T=0,_=0,E=0,y=0;if(v<=i){const b=v/i,R=b*Math.PI/2;_=-u-t*Math.cos(R),E=t*Math.sin(R),y=-t*Math.cos(R),T=b*f}else if(v<=i+r){const b=(v-i)/r;_=-u+b*e,E=t,y=0,T=f+b*h}else{const b=(v-i-r)/i,R=b*Math.PI/2;_=u+t*Math.sin(R),E=t*Math.cos(R),y=t*Math.sin(R),T=f+h+b*f}const A=Math.max(0,Math.min(1,T/p));let M=0;v===0?M=.5/s:v===g&&(M=-.5/s);for(let b=0;b<=s;b++){const R=b/s,P=R*Math.PI*2,D=Math.sin(P),O=Math.cos(P);d.x=-E*O,d.y=_,d.z=E*D,o.push(d.x,d.y,d.z),m.set(-E*O,y,E*D),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+M,A)}if(v>0){const b=(v-1)*x;for(let R=0;R<s;R++){const P=b+R,D=b+R+1,O=v*x+R,I=v*x+R+1;a.push(P,D,O),a.push(D,I,O)}}}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xa(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Wi extends Re{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new L,u=new rt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const p=i+f/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class vi extends Re{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],p=[];let g=0;const x=[],m=i/2;let d=0;v(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(p,2));function v(){const _=new L,E=new L;let y=0;const A=(e-t)/i;for(let M=0;M<=r;M++){const b=[],R=M/r,P=R*(e-t)+t;for(let D=0;D<=s;D++){const O=D/s,I=O*c+o,B=Math.sin(I),X=Math.cos(I);E.x=P*B,E.y=-R*i+m,E.z=P*X,f.push(E.x,E.y,E.z),_.set(B,A,X).normalize(),h.push(_.x,_.y,_.z),p.push(O,1-R),b.push(g++)}x.push(b)}for(let M=0;M<s;M++)for(let b=0;b<r;b++){const R=x[b][M],P=x[b+1][M],D=x[b+1][M+1],O=x[b][M+1];(t>0||b!==0)&&(u.push(R,P,O),y+=3),(e>0||b!==r-1)&&(u.push(P,D,O),y+=3)}l.addGroup(d,y,0),d+=y}function T(_){const E=g,y=new rt,A=new L;let M=0;const b=_===!0?t:e,R=_===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,m*R,0),h.push(0,R,0),p.push(.5,.5),g++;const P=g;for(let D=0;D<=s;D++){const I=D/s*c+o,B=Math.cos(I),X=Math.sin(I);A.x=b*X,A.y=m*R,A.z=b*B,f.push(A.x,A.y,A.z),h.push(0,R,0),y.x=B*.5+.5,y.y=X*.5*R+.5,p.push(y.x,y.y),g++}for(let D=0;D<s;D++){const O=E+D,I=P+D;_===!0?u.push(I,I+1,O):u.push(I+1,I,O),M+=3}l.addGroup(d,M,_===!0?1:2),d+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _i extends vi{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new _i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gl extends Re{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),u(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const T=new L,_=new L,E=new L;for(let y=0;y<e.length;y+=3)p(e[y+0],T),p(e[y+1],_),p(e[y+2],E),c(T,_,E,v)}function c(v,T,_,E){const y=E+1,A=[];for(let M=0;M<=y;M++){A[M]=[];const b=v.clone().lerp(_,M/y),R=T.clone().lerp(_,M/y),P=y-M;for(let D=0;D<=P;D++)D===0&&M===y?A[M][D]=b:A[M][D]=b.clone().lerp(R,D/P)}for(let M=0;M<y;M++)for(let b=0;b<2*(y-M)-1;b++){const R=Math.floor(b/2);b%2===0?(h(A[M][R+1]),h(A[M+1][R]),h(A[M][R])):(h(A[M][R+1]),h(A[M+1][R+1]),h(A[M+1][R]))}}function l(v){const T=new L;for(let _=0;_<r.length;_+=3)T.x=r[_+0],T.y=r[_+1],T.z=r[_+2],T.normalize().multiplyScalar(v),r[_+0]=T.x,r[_+1]=T.y,r[_+2]=T.z}function u(){const v=new L;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];const _=m(v)/2/Math.PI+.5,E=d(v)/Math.PI+.5;a.push(_,1-E)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){const T=a[v+0],_=a[v+2],E=a[v+4],y=Math.max(T,_,E),A=Math.min(T,_,E);y>.9&&A<.1&&(T<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),E<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function p(v,T){const _=v*3;T.x=t[_+0],T.y=t[_+1],T.z=t[_+2]}function g(){const v=new L,T=new L,_=new L,E=new L,y=new rt,A=new rt,M=new rt;for(let b=0,R=0;b<r.length;b+=9,R+=6){v.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),y.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),E.copy(v).add(T).add(_).divideScalar(3);const P=m(E);x(y,R+0,v,P),x(A,R+2,T,P),x(M,R+4,_,P)}}function x(v,T,_,E){E<0&&v.x===1&&(a[T]=v.x-1),_.x===0&&_.z===0&&(a[T]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.vertices,t.indices,t.radius,t.detail)}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const u=i[s],h=i[s+1]-u,p=(a-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new rt:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new L,s=[],r=[],a=[],o=new L,c=new jt;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Wt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Wt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Vl extends $n{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new rt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*f+this.aX,l=h*f+p*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Wd extends Vl{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Wl(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,p*=u,s(a,o,h,p)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const th=new L,eh=new L,ho=new Wl,uo=new Wl,fo=new Wl;class Xd extends $n{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(eh.subVectors(s[0],s[1]).add(s[0]),l=eh);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(th.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=th),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ho.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,x,m),uo.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,x,m),fo.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(ho.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),uo.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),fo.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(ho.calc(c),uo.calc(c),fo.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nh(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function Yd(n,t){const e=1-n;return e*e*t}function qd(n,t){return 2*(1-n)*n*t}function $d(n,t){return n*n*t}function Ks(n,t,e,i){return Yd(n,t)+qd(n,e)+$d(n,i)}function Zd(n,t){const e=1-n;return e*e*e*t}function Kd(n,t){const e=1-n;return 3*e*e*n*t}function Jd(n,t){return 3*(1-n)*n*n*t}function Qd(n,t){return n*n*n*t}function Js(n,t,e,i,s){return Zd(n,t)+Kd(n,e)+Jd(n,i)+Qd(n,s)}class Lu extends $n{constructor(t=new rt,e=new rt,i=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new rt){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Js(t,s.x,r.x,a.x,o.x),Js(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jd extends $n{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Js(t,s.x,r.x,a.x,o.x),Js(t,s.y,r.y,a.y,o.y),Js(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Du extends $n{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tp extends $n{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iu extends $n{constructor(t=new rt,e=new rt,i=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new rt){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ks(t,s.x,r.x,a.x),Ks(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ep extends $n{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ks(t,s.x,r.x,a.x),Ks(t,s.y,r.y,a.y),Ks(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nu extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(nh(o,c.x,l.x,u.x,f.x),nh(o,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var ih=Object.freeze({__proto__:null,ArcCurve:Wd,CatmullRomCurve3:Xd,CubicBezierCurve:Lu,CubicBezierCurve3:jd,EllipseCurve:Vl,LineCurve:Du,LineCurve3:tp,QuadraticBezierCurve:Iu,QuadraticBezierCurve3:ep,SplineCurve:Nu});class np extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ih[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new ih[s.type]().fromJSON(s))}return this}}class dl extends np{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Du(this.currentPoint.clone(),new rt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Iu(this.currentPoint.clone(),new rt(t,e),new rt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new Lu(this.currentPoint.clone(),new rt(t,e),new rt(i,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Nu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){const l=new Vl(t,e,i,s,r,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Uu extends dl{constructor(t){super(t),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new dl().fromJSON(s))}return this}}function ip(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Fu(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=lp(n,t,r,e)),n.length>80*e){o=n[0],c=n[1];let u=o,f=c;for(let h=e;h<s;h+=e){const p=n[h],g=n[h+1];p<o&&(o=p),g<c&&(c=g),p>u&&(u=p),g>f&&(f=g)}l=Math.max(u-o,f-c),l=l!==0?32767/l:0}return rr(r,a,e,o,c,l,0),a}function Fu(n,t,e,i,s){let r;if(s===vp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=sh(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=sh(a/i|0,n[a],n[a+1],r);return r&&vs(r,r.next)&&(or(r),r=r.next),r}function zi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(vs(e,e.next)||we(e.prev,e,e.next)===0)){if(or(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function rr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&dp(n,i,s,r);let o=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?rp(n,i,s,r):sp(n)){t.push(c.i,n.i,l.i),or(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=ap(zi(n),t),rr(n,t,e,i,s,r,2)):a===2&&op(n,t,e,i,s,r):rr(zi(n),t,e,i,s,r,1);break}}}function sp(n){const t=n.prev,e=n,i=n.next;if(we(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,u=Math.min(s,r,a),f=Math.min(o,c,l),h=Math.max(s,r,a),p=Math.max(o,c,l);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=p&&Gs(s,o,r,c,a,l,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rp(n,t,e,i){const s=n.prev,r=n,a=n.next;if(we(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,f=r.y,h=a.y,p=Math.min(o,c,l),g=Math.min(u,f,h),x=Math.max(o,c,l),m=Math.max(u,f,h),d=pl(p,g,t,e,i),v=pl(x,m,t,e,i);let T=n.prevZ,_=n.nextZ;for(;T&&T.z>=d&&_&&_.z<=v;){if(T.x>=p&&T.x<=x&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Gs(o,u,c,f,l,h,T.x,T.y)&&we(T.prev,T,T.next)>=0||(T=T.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Gs(o,u,c,f,l,h,_.x,_.y)&&we(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;T&&T.z>=d;){if(T.x>=p&&T.x<=x&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Gs(o,u,c,f,l,h,T.x,T.y)&&we(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;_&&_.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Gs(o,u,c,f,l,h,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ap(n,t){let e=n;do{const i=e.prev,s=e.next.next;!vs(i,s)&&Bu(i,e,e.next,s)&&ar(i,s)&&ar(s,i)&&(t.push(i.i,e.i,s.i),or(e),or(e.next),e=n=s),e=e.next}while(e!==n);return zi(e)}function op(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&gp(a,o)){let c=zu(a,o);a=zi(a,a.next),c=zi(c,c.next),rr(a,t,e,i,s,r,0),rr(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function lp(n,t,e,i){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=Fu(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(mp(l))}s.sort(cp);for(let r=0;r<s.length;r++)e=hp(s[r],e);return e}function cp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function hp(n,t){const e=up(n,t);if(!e)return t;const i=zu(e,n);return zi(i,i.next),zi(e,e.next)}function up(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,a;if(vs(n,e))return e;do{if(vs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Ou(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){const f=Math.abs(s-e.y)/(i-e.x);ar(e,n)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&fp(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function fp(n,t){return we(n.prev,n,t.prev)<0&&we(t.next,n,n.next)<0}function dp(n,t,e,i){let s=n;do s.z===0&&(s.z=pl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,pp(s)}function pp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function pl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function mp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ou(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Gs(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Ou(n,t,e,i,s,r,a,o)}function gp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!_p(n,t)&&(ar(n,t)&&ar(t,n)&&xp(n,t)&&(we(n.prev,n,t.prev)||we(n,t.prev,t))||vs(n,t)&&we(n.prev,n,n.next)>0&&we(t.prev,t,t.next)>0)}function we(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function vs(n,t){return n.x===t.x&&n.y===t.y}function Bu(n,t,e,i){const s=Xr(we(n,t,e)),r=Xr(we(n,t,i)),a=Xr(we(e,i,n)),o=Xr(we(e,i,t));return!!(s!==r&&a!==o||s===0&&Wr(n,e,t)||r===0&&Wr(n,i,t)||a===0&&Wr(e,n,i)||o===0&&Wr(e,t,i))}function Wr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Xr(n){return n>0?1:n<0?-1:0}function _p(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Bu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ar(n,t){return we(n.prev,n,n.next)<0?we(n,t,n.next)>=0&&we(n,n.prev,t)>=0:we(n,t,n.prev)<0||we(n,n.next,t)<0}function xp(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function zu(n,t){const e=ml(n.i,n.x,n.y),i=ml(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function sh(n,t,e,i){const s=ml(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function or(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ml(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Mp{static triangulate(t,e,i=2){return ip(t,e,i)}}class Qs{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Qs.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];rh(t),ah(i,t);let a=t.length;e.forEach(rh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,ah(i,e[c]);const o=Mp.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function rh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ah(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Xl extends Gl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xl(t.radius,t.detail)}}class $t extends Re{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,f=t/o,h=e/c,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const v=d*h-a;for(let T=0;T<l;T++){const _=T*f-r;g.push(_,-v,0),x.push(0,0,1),m.push(T/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){const T=v+l*d,_=v+l*(d+1),E=v+1+l*(d+1),y=v+1+l*d;p.push(T,_,y),p.push(_,E,y)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ca extends Re{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let f=t;const h=(e-t)/s,p=new L,g=new rt;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const d=r+m/i*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<s;x++){const m=x*(i+1);for(let d=0;d<i;d++){const v=d+m,T=v,_=v+i+1,E=v+i+2,y=v+1;o.push(T,_,y),o.push(_,E,y)}}this.setIndex(o),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Yl extends Re{constructor(t=new Uu([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(a,2));function l(u){const f=s.length/3,h=u.extractPoints(e);let p=h.shape;const g=h.holes;Qs.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const v=g[m];Qs.isClockWise(v)===!0&&(g[m]=v.reverse())}const x=Qs.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const v=g[m];p=p.concat(v)}for(let m=0,d=p.length;m<d;m++){const v=p[m];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,d=x.length;m<d;m++){const v=x[m],T=v[0]+f,_=v[1]+f,E=v[2]+f;i.push(T,_,E),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return yp(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}return new Yl(i,t.curveSegments)}}function yp(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class fn extends Re{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new L,h=new L,p=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){const v=[],T=d/i,_=a+T*o,E=t*Math.cos(_),y=Math.sqrt(t*t-E*E);let A=0;d===0&&a===0?A=.5/e:d===i&&c===Math.PI&&(A=-.5/e);for(let M=0;M<=e;M++){const b=M/e,R=s+b*r;f.x=-y*Math.cos(R),f.y=E,f.z=y*Math.sin(R),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(b+A,1-T),v.push(l++)}u.push(v)}for(let d=0;d<i;d++)for(let v=0;v<e;v++){const T=u[d][v+1],_=u[d][v],E=u[d+1][v],y=u[d+1][v+1];(d!==0||a>0)&&p.push(T,_,y),(d!==i-1||c<Math.PI)&&p.push(_,E,y)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class va extends Re{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],f=[],h=new L,p=new L,g=new L;for(let x=0;x<=i;x++){const m=a+x/i*o;for(let d=0;d<=s;d++){const v=d/s*r;p.x=(t+e*Math.cos(m))*Math.cos(v),p.y=(t+e*Math.cos(m))*Math.sin(v),p.z=e*Math.sin(m),l.push(p.x,p.y,p.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),g.subVectors(p,h).normalize(),u.push(g.x,g.y,g.z),f.push(d/s),f.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){const d=(s+1)*x+m-1,v=(s+1)*(x-1)+m-1,T=(s+1)*(x-1)+m,_=(s+1)*x+m;c.push(d,v,_),c.push(v,T,_)}this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Ms(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(oh(s))s.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(oh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function rn(n){const t={};for(let e=0;e<n.length;e++){const i=Ms(n[e]);for(const s in i)t[s]=i[s]}return t}function oh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Sp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ku(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const lr={clone:Ms,merge:rn};var bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends Vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=Sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new vt().setHex(s.value);break;case"v2":this.uniforms[i].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[i].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new jt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Hu extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ot extends Vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cr extends ot{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Tp extends Vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wp extends Vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ql extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ap extends ql{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const po=new jt,lh=new L,ch=new L;class Gu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(lh),ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ch),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(po,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===nr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yr=new L,qr=new In,Bn=new L;class Vu extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yr,qr,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,qr,Bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Yr,qr,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,qr,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fi=new L,hh=new rt,uh=new rt;class mn extends Vu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ir*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,hh,uh),e.subVectors(uh,hh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($s*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Rp extends Gu{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}}class Cp extends ql{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Rp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Pa extends Vu{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pp extends Gu{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fh extends ql{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Pp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const rs=-90,as=1;class Lp extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(rs,as,t,e);s.layers=this.layers,this.add(s);const r=new mn(rs,as,t,e);r.layers=this.layers,this.add(r);const a=new mn(rs,as,t,e);a.layers=this.layers,this.add(a);const o=new mn(rs,as,t,e);o.layers=this.layers,this.add(o);const c=new mn(rs,as,t,e);c.layers=this.layers,this.add(c);const l=new mn(rs,as,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Dp extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ip{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Np.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Np(){this._document.hidden===!1&&this.reset()}const dh=new jt;class Up{constructor(t,e,i=0,s=1/0){this.ray=new dr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):re("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return dh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dh),this}intersectObject(t,e=!0,i=[]){return gl(t,this,i,e),i.sort(ph),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)gl(t[s],this,i,e);return i.sort(ph),i}}function ph(n,t){return n.distance-t.distance}function gl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)gl(r[a],t,e,!0)}}class mh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const pc=class pc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};pc.prototype.isMatrix2=!0;let gh=pc;class Fp extends yi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function _h(n,t,e,i){const s=Op(i);switch(e){case xu:return n*t;case Dl:return n*t/s.components*s.byteLength;case Il:return n*t/s.components*s.byteLength;case Bi:return n*t*2/s.components*s.byteLength;case Nl:return n*t*2/s.components*s.byteLength;case vu:return n*t*3/s.components*s.byteLength;case Dn:return n*t*4/s.components*s.byteLength;case Ul:return n*t*4/s.components*s.byteLength;case na:case ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fo:case Bo:return Math.max(n,16)*Math.max(t,8)/4;case Uo:case Oo:return Math.max(n,8)*Math.max(t,8)/2;case zo:case ko:case Go:case Vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ho:case ua:case Wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case qo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $o:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case jo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case rl:case al:case ol:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ll:case cl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case fa:case hl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Op(n){switch(n){case gn:case pu:return{byteLength:1,components:1};case tr:case mu:case un:return{byteLength:2,components:1};case Pl:case Ll:return{byteLength:2,components:4};case qn:case Cl:case Ln:return{byteLength:4,components:1};case gu:case _u:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Bp(n){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
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
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
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
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
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
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qp=`#ifdef USE_IRIDESCENCE
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
#endif`,jp=`#ifdef USE_BUMPMAP
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,l0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,c0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,h0=`vec3 transformedNormal = objectNormal;
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
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,S0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
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
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,L0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,D0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F0=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,O0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,B0=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z0=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
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
#endif`,nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lm=`#ifdef USE_NORMALMAP
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
#endif`,cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Em=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,Tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Im=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`#include <common>
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
}`,Ym=`#if DEPTH_PACKING == 3200
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
}`,qm=`#define DISTANCE
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
}`,$m=`#define DISTANCE
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
void main() {
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,jm=`#include <common>
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#define LAMBERT
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define MATCAP
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
}`,sg=`#define MATCAP
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
}`,rg=`#define NORMAL
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
}`,ag=`#define NORMAL
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
}`,og=`#define PHONG
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
}`,lg=`#define PHONG
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
}`,cg=`#define STANDARD
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
}`,hg=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,ug=`#define TOON
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
}`,fg=`#define TOON
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
}`,dg=`uniform float size;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 color;
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
}`,_g=`uniform float rotation;
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
}`,xg=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:zp,alphahash_pars_fragment:kp,alphamap_fragment:Hp,alphamap_pars_fragment:Gp,alphatest_fragment:Vp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:Yp,batching_pars_vertex:qp,batching_vertex:$p,begin_vertex:Zp,beginnormal_vertex:Kp,bsdfs:Jp,iridescence_fragment:Qp,bumpmap_pars_fragment:jp,clipping_planes_fragment:t0,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:n0,clipping_planes_vertex:i0,color_fragment:s0,color_pars_fragment:r0,color_pars_vertex:a0,color_vertex:o0,common:l0,cube_uv_reflection_fragment:c0,defaultnormal_vertex:h0,displacementmap_pars_vertex:u0,displacementmap_vertex:f0,emissivemap_fragment:d0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:_0,envmap_common_pars_fragment:x0,envmap_pars_fragment:v0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:L0,envmap_vertex:y0,fog_vertex:S0,fog_pars_vertex:b0,fog_fragment:E0,fog_pars_fragment:T0,gradientmap_pars_fragment:w0,lightmap_pars_fragment:A0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:C0,lights_pars_begin:P0,lights_toon_fragment:D0,lights_toon_pars_fragment:I0,lights_phong_fragment:N0,lights_phong_pars_fragment:U0,lights_physical_fragment:F0,lights_physical_pars_fragment:O0,lights_fragment_begin:B0,lights_fragment_maps:z0,lights_fragment_end:k0,lightprobes_pars_fragment:H0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:W0,logdepthbuf_vertex:X0,map_fragment:Y0,map_pars_fragment:q0,map_particle_fragment:$0,map_particle_pars_fragment:Z0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:J0,morphinstance_vertex:Q0,morphcolor_vertex:j0,morphnormal_vertex:tm,morphtarget_pars_vertex:em,morphtarget_vertex:nm,normal_fragment_begin:im,normal_fragment_maps:sm,normal_pars_fragment:rm,normal_pars_vertex:am,normal_vertex:om,normalmap_pars_fragment:lm,clearcoat_normal_fragment_begin:cm,clearcoat_normal_fragment_maps:hm,clearcoat_pars_fragment:um,iridescence_pars_fragment:fm,opaque_fragment:dm,packing:pm,premultiplied_alpha_fragment:mm,project_vertex:gm,dithering_fragment:_m,dithering_pars_fragment:xm,roughnessmap_fragment:vm,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:Sm,shadowmap_vertex:bm,shadowmask_pars_fragment:Em,skinbase_vertex:Tm,skinning_pars_vertex:wm,skinning_vertex:Am,skinnormal_vertex:Rm,specularmap_fragment:Cm,specularmap_pars_fragment:Pm,tonemapping_fragment:Lm,tonemapping_pars_fragment:Dm,transmission_fragment:Im,transmission_pars_fragment:Nm,uv_pars_fragment:Um,uv_pars_vertex:Fm,uv_vertex:Om,worldpos_vertex:Bm,background_vert:zm,background_frag:km,backgroundCube_vert:Hm,backgroundCube_frag:Gm,cube_vert:Vm,cube_frag:Wm,depth_vert:Xm,depth_frag:Ym,distance_vert:qm,distance_frag:$m,equirect_vert:Zm,equirect_frag:Km,linedashed_vert:Jm,linedashed_frag:Qm,meshbasic_vert:jm,meshbasic_frag:tg,meshlambert_vert:eg,meshlambert_frag:ng,meshmatcap_vert:ig,meshmatcap_frag:sg,meshnormal_vert:rg,meshnormal_frag:ag,meshphong_vert:og,meshphong_frag:lg,meshphysical_vert:cg,meshphysical_frag:hg,meshtoon_vert:ug,meshtoon_frag:fg,points_vert:dg,points_frag:pg,shadow_vert:mg,shadow_frag:gg,sprite_vert:_g,sprite_frag:xg},pt={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Hn={basic:{uniforms:rn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:rn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:rn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:rn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:rn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new vt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:rn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:rn([pt.points,pt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:rn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:rn([pt.common,pt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:rn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:rn([pt.sprite,pt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:rn([pt.common,pt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:rn([pt.lights,pt.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Hn.physical={uniforms:rn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const $r={r:0,b:0,g:0},vg=new jt,Xu=new kt;Xu.set(-1,0,0,0,1,0,0,0,1);function Mg(n,t,e,i,s,r){const a=new vt(0);let o=s===!0?0:1,c,l,u=null,f=0,h=null;function p(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){const _=v.backgroundBlurriness>0;T=t.get(T,_)}return T}function g(v){let T=!1;const _=p(v);_===null?m(a,o):_&&_.isColor&&(m(_,1),T=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,T){const _=p(T);_&&(_.isCubeTexture||_.mapping===Aa)?(l===void 0&&(l=new Ht(new Nn(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Ms(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,y,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xu),l.material.toneMapped=ne.getTransfer(_.colorSpace)!==ue,(u!==_||f!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ht(new $t(2,2),new Xe({name:"BackgroundMaterial",uniforms:Ms(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ne.getTransfer(_.colorSpace)!==ue,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,T){v.getRGB($r,ku(n)),e.buffers.color.setClear($r.r,$r.g,$r.b,T,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:x,dispose:d}}function yg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(P,D,O,I,B){let X=!1;const V=f(P,I,O,D);r!==V&&(r=V,l(r.object)),X=p(P,I,O,B),X&&g(P,I,O,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,_(P,D,O,I),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function f(P,D,O,I){const B=I.wireframe===!0;let X=i[D.id];X===void 0&&(X={},i[D.id]=X);const V=P.isInstancedMesh===!0?P.id:0;let tt=X[V];tt===void 0&&(tt={},X[V]=tt);let Y=tt[O.id];Y===void 0&&(Y={},tt[O.id]=Y);let et=Y[B];return et===void 0&&(et=h(c()),Y[B]=et),et}function h(P){const D=[],O=[],I=[];for(let B=0;B<e;B++)D[B]=0,O[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:I,object:P,attributes:{},index:null}}function p(P,D,O,I){const B=r.attributes,X=D.attributes;let V=0;const tt=O.getAttributes();for(const Y in tt)if(tt[Y].location>=0){const nt=B[Y];let Nt=X[Y];if(Nt===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(Nt=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(Nt=P.instanceColor)),nt===void 0||nt.attribute!==Nt||Nt&&nt.data!==Nt.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function g(P,D,O,I){const B={},X=D.attributes;let V=0;const tt=O.getAttributes();for(const Y in tt)if(tt[Y].location>=0){let nt=X[Y];nt===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor));const Nt={};Nt.attribute=nt,nt&&nt.data&&(Nt.data=nt.data),B[Y]=Nt,V++}r.attributes=B,r.attributesNum=V,r.index=I}function x(){const P=r.newAttributes;for(let D=0,O=P.length;D<O;D++)P[D]=0}function m(P){d(P,0)}function d(P,D){const O=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;O[P]=1,I[P]===0&&(n.enableVertexAttribArray(P),I[P]=1),B[P]!==D&&(n.vertexAttribDivisor(P,D),B[P]=D)}function v(){const P=r.newAttributes,D=r.enabledAttributes;for(let O=0,I=D.length;O<I;O++)D[O]!==P[O]&&(n.disableVertexAttribArray(O),D[O]=0)}function T(P,D,O,I,B,X,V){V===!0?n.vertexAttribIPointer(P,D,O,B,X):n.vertexAttribPointer(P,D,O,I,B,X)}function _(P,D,O,I){x();const B=I.attributes,X=O.getAttributes(),V=D.defaultAttributeValues;for(const tt in X){const Y=X[tt];if(Y.location>=0){let et=B[tt];if(et===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(et=P.instanceColor)),et!==void 0){const nt=et.normalized,Nt=et.itemSize,st=t.get(et);if(st===void 0)continue;const Ft=st.buffer,te=st.type,ie=st.bytesPerElement,$=te===n.INT||te===n.UNSIGNED_INT||et.gpuType===Cl;if(et.isInterleavedBufferAttribute){const j=et.data,bt=j.stride,zt=et.offset;if(j.isInstancedInterleavedBuffer){for(let yt=0;yt<Y.locationSize;yt++)d(Y.location+yt,j.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let yt=0;yt<Y.locationSize;yt++)m(Y.location+yt);n.bindBuffer(n.ARRAY_BUFFER,Ft);for(let yt=0;yt<Y.locationSize;yt++)T(Y.location+yt,Nt/Y.locationSize,te,nt,bt*ie,(zt+Nt/Y.locationSize*yt)*ie,$)}else{if(et.isInstancedBufferAttribute){for(let j=0;j<Y.locationSize;j++)d(Y.location+j,et.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let j=0;j<Y.locationSize;j++)m(Y.location+j);n.bindBuffer(n.ARRAY_BUFFER,Ft);for(let j=0;j<Y.locationSize;j++)T(Y.location+j,Nt/Y.locationSize,te,nt,Nt*ie,Nt/Y.locationSize*j*ie,$)}}else if(V!==void 0){const nt=V[tt];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(Y.location,nt);break;case 3:n.vertexAttrib3fv(Y.location,nt);break;case 4:n.vertexAttrib4fv(Y.location,nt);break;default:n.vertexAttrib1fv(Y.location,nt)}}}}v()}function E(){b();for(const P in i){const D=i[P];for(const O in D){const I=D[O];for(const B in I){const X=I[B];for(const V in X)u(X[V].object),delete X[V];delete I[B]}}delete i[P]}}function y(P){if(i[P.id]===void 0)return;const D=i[P.id];for(const O in D){const I=D[O];for(const B in I){const X=I[B];for(const V in X)u(X[V].object),delete X[V];delete I[B]}}delete i[P.id]}function A(P){for(const D in i){const O=i[D];for(const I in O){const B=O[I];if(B[P.id]===void 0)continue;const X=B[P.id];for(const V in X)u(X[V].object),delete X[V];delete B[P.id]}}}function M(P){for(const D in i){const O=i[D],I=P.isInstancedMesh===!0?P.id:0,B=O[I];if(B!==void 0){for(const X in B){const V=B[X];for(const tt in V)u(V[tt].object),delete V[tt];delete B[X]}delete O[I],Object.keys(O).length===0&&delete i[D]}}}function b(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfObject:M,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Sg(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function bg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Dn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const M=A===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==gn&&A!==Ln&&!M&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Bt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:_,maxSamples:E,samples:y}}function Eg(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new ei,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:i,T=v*4;let _=d.clippingState||null;c.value=_,_=u(g,h,T,p);for(let E=0;E!==T;++E)_[E]=e[E];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const d=p+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,_=p;T!==x;++T,_+=4)a.copy(f[T]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}const fs=4,Tg=6,wg=20,Ag=256,Us=new Pa,xh=new vt;let mo=null,go=0,_o=0,xo=!1;const Rg=new L,Ri=new L;class _l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=Rg}=r;mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mo,go,_o),this._renderer.xr.enabled=xo,t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:un,format:Dn,colorSpace:da,depthBuffer:!1},s=vh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cg(r)),this._blurMaterial=Lg(r,t,e),this._ggxMaterial=Pg(r,t,e)}return s}_compileMaterial(t){const e=new Ht(new Re,t);this._renderer.compile(e,Us)}_sceneToCubeUV(t,e,i,s,r){const c=new mn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(xh),f.toneMapping=Wn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new Nn,new Qt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let d=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,d=!0):(m.color.copy(xh),d=!0);for(let T=0;T<6;T++){const _=T%3;_===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):_===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));const E=this._cubeSize;os(s,_*E,T>2?E:0,E,E),f.setRenderTarget(s),d&&f.render(x,c),f.render(t,c)}f.toneMapping=p,f.autoClear=h,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Oi||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;os(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Us)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,p=f*h,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-fs?i-g+fs:0),d=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=g-e,os(r,m,d,3*x,2*x),s.setRenderTarget(r),s.render(o,Us),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,os(t,m,d,3*x,2*x),s.setRenderTarget(t),s.render(o,Us)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-fs?s-this._lodMax+fs:0),h=4*(this._cubeSize-u);os(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(c,Us)}}function Cg(n){const t=[],e=[];let i=n;const s=n-fs+1+Tg;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,p=3,g=new Float32Array(p*h*f),x=new Float32Array(p*h*f);for(let d=0;d<f;d++){const v=d%3*2/3-1,T=d>2?0:-1,_=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];g.set(_,p*h*d);for(let E=0;E<h;E++){const y=u[E*2]*2-1,A=u[E*2+1]*2-1;d===0?Ri.set(1,A,y):d===1?Ri.set(-y,1,-A):d===2?Ri.set(-y,A,1):d===3?Ri.set(-1,A,-y):d===4?Ri.set(-y,-1,A):Ri.set(y,A,-1),Ri.toArray(x,(d*h+E)*p)}}const m=new Re;m.setAttribute("position",new Xn(g,p)),m.setAttribute("outputDirection",new Xn(x,p)),e.push(new Ht(m,null)),i>fs&&i--}return{lodMeshes:e,sizeLods:t}}function vh(n,t,e){const i=new on(n,t,e);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function os(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Pg(n,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ag,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:La(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Lg(n,t,e){return new Xe({name:"SphericalGaussianBlur",defines:{SAMPLES:wg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:La(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Mh(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function yh(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function La(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yu extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Cu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nn(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Vn});r.uniforms.tEquirect.value=e;const a=new Ht(s,r),o=e.minFilter;return e.minFilter===Ii&&(e.minFilter=Qe),new Lp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function Dg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===ea||p===ka)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const x=new Yu(g.height);return x.fromEquirectangularTexture(n,h),t.set(h,x),h.addEventListener("dispose",l),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,g=p===ea||p===ka,x=p===Oi||p===_s;if(g||x){let m=e.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new _l(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return g&&v&&v.height>0||x&&v&&c(v)?(i===null&&(i=new _l(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===ea?h.mapping=Oi:p===ka&&(h.mapping=_s),h}function c(h){let p=0;const g=6;for(let x=0;x<g;x++)h[x]!==void 0&&p++;return p===g}function l(h){const p=h.target;p.removeEventListener("dispose",l);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Ig(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ps("WebGLRenderer: "+i+" extension not supported."),s}}}function Ng(n,t,e,i){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const p in h)t.update(h[p],n.ARRAY_BUFFER)}function l(f){const h=[],p=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(p!==null){const v=p.array;x=p.version;for(let T=0,_=v.length;T<_;T+=3){const E=v[T+0],y=v[T+1],A=v[T+2];h.push(E,y,y,A,A,E)}}else{const v=g.array;x=g.version;for(let T=0,_=v.length/3-1;T<_;T+=3){const E=T+0,y=T+1,A=T+2;h.push(E,y,y,A,A,E)}}const m=new(g.count>=65535?Tu:Eu)(h,1);m.version=x;const d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Ug(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){n.drawElements(i,h,r,f*a),e.update(h,i,1)}function l(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,f*a,p),e.update(h,i,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let x=0;for(let m=0;m<p;m++)x+=h[m];e.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Fg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:re("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Og(n,t,e){const i=new WeakMap,s=new Te;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let R=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var p=R;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let E=o.attributes.position.count*_,y=1;E>t.maxTextureSize&&(y=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const A=new Float32Array(E*y*4*f),M=new yu(A,E,y,f);M.type=Ln,M.needsUpdate=!0;const b=_*4;for(let P=0;P<f;P++){const D=d[P],O=v[P],I=T[P],B=E*y*4*P;for(let X=0;X<D.count;X++){const V=X*b;g===!0&&(s.fromBufferAttribute(D,X),A[B+V+0]=s.x,A[B+V+1]=s.y,A[B+V+2]=s.z,A[B+V+3]=0),x===!0&&(s.fromBufferAttribute(O,X),A[B+V+4]=s.x,A[B+V+5]=s.y,A[B+V+6]=s.z,A[B+V+7]=0),m===!0&&(s.fromBufferAttribute(I,X),A[B+V+8]=s.x,A[B+V+9]=s.y,A[B+V+10]=s.z,A[B+V+11]=I.itemSize===4?s.w:1)}}h={count:f,texture:M,size:new rt(E,y)},i.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Bg(n,t,e,i,s){let r=new WeakMap;function a(l){const u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const zg={[bl]:"LINEAR_TONE_MAPPING",[El]:"REINHARD_TONE_MAPPING",[Tl]:"CINEON_TONE_MAPPING",[wa]:"ACES_FILMIC_TONE_MAPPING",[Al]:"AGX_TONE_MAPPING",[Rl]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function kg(n,t,e,i,s,r){const a=new on(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Re;l.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const u=new Hu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ht(l,u),h=new Pa(-1,1,1,-1,0,1);let p=null,g=null,x=!1,m,d=null,v=[],T=!1;this.setSize=function(_,E){a.setSize(_,E),o!==null&&o.setSize(_,E),c!==null&&c.setSize(_,E);for(let y=0;y<v.length;y++){const A=v[y];A.setSize&&A.setSize(_,E)}},this.setEffects=function(_){v=_,T=v.length>0&&v[0].isRenderPass===!0;const E=a.width,y=a.height;v.length>0&&o===null&&(o=new on(E,y,{type:un,depthBuffer:!1,stencilBuffer:!1}),c=new on(E,y,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){const M=v[A];M.setSize&&M.setSize(E,y)}},this.begin=function(_,E){if(x||_.toneMapping===Wn&&v.length===0)return!1;if(d=E,E!==null){const y=E.width,A=E.height;(a.width!==y||a.height!==A)&&this.setSize(y,A)}return T===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=Wn,!0},this.hasRenderPass=function(){return T},this.end=function(_,E){_.toneMapping=m,x=!0;let y=a,A=o;for(let M=0;M<v.length;M++){const b=v[M];b.enabled!==!1&&(b.render(_,A,y,E),b.needsSwap!==!1&&(y=A,A=A===o?c:o))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,u.defines={},ne.getTransfer(p)===ue&&(u.defines.SRGB_TRANSFER="");const M=zg[g];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,_.setRenderTarget(d),_.render(f,h),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const qu=new je,xl=new sr(1,1),$u=new yu,Zu=new Ed,Ku=new Cu,Sh=[],bh=[],Eh=new Float32Array(16),Th=new Float32Array(9),wh=new Float32Array(4);function Ss(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Sh[s];if(r===void 0&&(r=new Float32Array(s),Sh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function He(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Da(n,t){let e=bh[t];e===void 0&&(e=new Int32Array(t),bh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Hg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Gg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2fv(this.addr,t),Ge(e,t)}}function Vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;n.uniform3fv(this.addr,t),Ge(e,t)}}function Wg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4fv(this.addr,t),Ge(e,t)}}function Xg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;wh.set(i),n.uniformMatrix2fv(this.addr,!1,wh),Ge(e,i)}}function Yg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;Th.set(i),n.uniformMatrix3fv(this.addr,!1,Th),Ge(e,i)}}function qg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;Eh.set(i),n.uniformMatrix4fv(this.addr,!1,Eh),Ge(e,i)}}function $g(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Zg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2iv(this.addr,t),Ge(e,t)}}function Kg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3iv(this.addr,t),Ge(e,t)}}function Jg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4iv(this.addr,t),Ge(e,t)}}function Qg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2uiv(this.addr,t),Ge(e,t)}}function t_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3uiv(this.addr,t),Ge(e,t)}}function e_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4uiv(this.addr,t),Ge(e,t)}}function n_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(xl.compareFunction=e.isReversedDepthBuffer()?Ol:Fl,r=xl):r=qu,e.setTexture2D(t||r,s)}function i_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Zu,s)}function s_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ku,s)}function r_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$u,s)}function a_(n){switch(n){case 5126:return Hg;case 35664:return Gg;case 35665:return Vg;case 35666:return Wg;case 35674:return Xg;case 35675:return Yg;case 35676:return qg;case 5124:case 35670:return $g;case 35667:case 35671:return Zg;case 35668:case 35672:return Kg;case 35669:case 35673:return Jg;case 5125:return Qg;case 36294:return jg;case 36295:return t_;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}function o_(n,t){n.uniform1fv(this.addr,t)}function l_(n,t){const e=Ss(t,this.size,2);n.uniform2fv(this.addr,e)}function c_(n,t){const e=Ss(t,this.size,3);n.uniform3fv(this.addr,e)}function h_(n,t){const e=Ss(t,this.size,4);n.uniform4fv(this.addr,e)}function u_(n,t){const e=Ss(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function f_(n,t){const e=Ss(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function d_(n,t){const e=Ss(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function p_(n,t){n.uniform1iv(this.addr,t)}function m_(n,t){n.uniform2iv(this.addr,t)}function g_(n,t){n.uniform3iv(this.addr,t)}function __(n,t){n.uniform4iv(this.addr,t)}function x_(n,t){n.uniform1uiv(this.addr,t)}function v_(n,t){n.uniform2uiv(this.addr,t)}function M_(n,t){n.uniform3uiv(this.addr,t)}function y_(n,t){n.uniform4uiv(this.addr,t)}function S_(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=xl:a=qu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function b_(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zu,r[a])}function E_(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ku,r[a])}function T_(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$u,r[a])}function w_(n){switch(n){case 5126:return o_;case 35664:return l_;case 35665:return c_;case 35666:return h_;case 35674:return u_;case 35675:return f_;case 35676:return d_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return __;case 5125:return x_;case 36294:return v_;case 36295:return M_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return T_}}class A_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=a_(e.type)}}class R_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=w_(e.type)}}class C_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function Ah(n,t){n.seq.push(t),n.map[t.id]=t}function P_(n,t,e){const i=n.name,s=i.length;for(vo.lastIndex=0;;){const r=vo.exec(i),a=vo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ah(e,l===void 0?new A_(o,n,t):new R_(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new C_(o),Ah(e,f)),e=f}}}class aa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);P_(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Rh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const L_=37297;let D_=0;function I_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Ch=new kt;function N_(n){ne._getMatrix(Ch,ne.workingColorSpace,n);const t=`mat3( ${Ch.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case pa:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ph(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+I_(n.getShaderSource(t),o)}else return r}function U_(n,t){const e=N_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const F_={[bl]:"Linear",[El]:"Reinhard",[Tl]:"Cineon",[wa]:"ACESFilmic",[Al]:"AgX",[Rl]:"Neutral",[wl]:"Custom"};function O_(n,t){const e=F_[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zr=new L;function B_(){ne.getLuminanceCoefficients(Zr);const n=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function k_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function H_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Vs(n){return n!==""}function Lh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const G_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(n){return n.replace(G_,W_)}const V_=new Map;function W_(n,t){let e=Yt[t];if(e===void 0){const i=V_.get(t);if(i!==void 0)e=Yt[i],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vl(e)}const X_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(n){return n.replace(X_,Y_)}function Y_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nh(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const q_={[Ys]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function $_(n){return q_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Z_={[Oi]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE_UV"};function K_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Z_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const J_={[_s]:"ENVMAP_MODE_REFRACTION"};function Q_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":J_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const j_={[fu]:"ENVMAP_BLENDING_MULTIPLY",[kf]:"ENVMAP_BLENDING_MIX",[Hf]:"ENVMAP_BLENDING_ADD"};function tx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":j_[n.combine]||"ENVMAP_BLENDING_NONE"}function ex(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function nx(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=$_(e),l=K_(e),u=Q_(e),f=tx(e),h=ex(e),p=z_(e),g=k_(r),x=s.createProgram();let m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vs).join(`
`),d.length>0&&(d+=`
`)):(m=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),d=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?O_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,U_("linearToOutputTexel",e.outputColorSpace),B_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),a=vl(a),a=Lh(a,e),a=Dh(a,e),o=vl(o),o=Lh(o,e),o=Dh(o,e),a=Ih(a),o=Ih(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=v+m+a,_=v+d+o,E=Rh(s,s.VERTEX_SHADER,T),y=Rh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,E),s.attachShader(x,y),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(y)||"",B=D.trim(),X=O.trim(),V=I.trim();let tt=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(tt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,y);else{const et=Ph(s,E,"vertex"),nt=Ph(s,y,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+et+`
`+nt)}else B!==""?Bt("WebGLProgram: Program Info Log:",B):(X===""||V==="")&&(Y=!1);Y&&(P.diagnostics={runnable:tt,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:V,prefix:d}})}s.deleteShader(E),s.deleteShader(y),M=new aa(s,x),b=H_(s,x)}let M;this.getUniforms=function(){return M===void 0&&A(this),M};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,L_)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=y,this}let ix=0;class sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new rx(t),e.set(t,i)),i}}class rx{constructor(t){this.id=ix++,this.code=t,this.usedTimes=0}}function ax(n){return n===Bi||n===ua||n===fa}function ox(n,t,e,i,s,r){const a=new kl,o=new sx,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function x(M,b,R,P,D,O){const I=P.fog,B=D.geometry,X=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,V=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,tt=t.get(M.envMap||X,V),Y=tt&&tt.mapping===Aa?tt.image.height:null,et=p[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&Bt("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const nt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Nt=nt!==void 0?nt.length:0;let st=0;B.morphAttributes.position!==void 0&&(st=1),B.morphAttributes.normal!==void 0&&(st=2),B.morphAttributes.color!==void 0&&(st=3);let Ft,te,ie,$;if(et){const xe=Hn[et];Ft=xe.vertexShader,te=xe.fragmentShader}else{Ft=M.vertexShader,te=M.fragmentShader;const xe=o.getVertexShaderStage(M),ce=o.getFragmentShaderStage(M);o.update(M,xe,ce),ie=xe.id,$=ce.id}const j=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),zt=D.isInstancedMesh===!0,yt=D.isBatchedMesh===!0,qt=!!M.map,Fe=!!M.matcap,Kt=!!tt,ae=!!M.aoMap,_e=!!M.lightMap,ee=!!M.bumpMap&&M.wireframe===!1,ye=!!M.normalMap,Ve=!!M.displacementMap,cn=!!M.emissiveMap,be=!!M.metalnessMap,De=!!M.roughnessMap,F=M.anisotropy>0,$e=M.clearcoat>0,fe=M.dispersion>0,C=M.retroreflectivity>0,S=M.iridescence>0,z=M.sheen>0,G=M.transmission>0,q=F&&!!M.anisotropyMap,at=$e&&!!M.clearcoatMap,lt=$e&&!!M.clearcoatNormalMap,Z=$e&&!!M.clearcoatRoughnessMap,Q=S&&!!M.iridescenceMap,ct=S&&!!M.iridescenceThicknessMap,Ct=z&&!!M.sheenColorMap,dt=z&&!!M.sheenRoughnessMap,ht=!!M.specularMap,Pt=!!M.specularColorMap,Ut=!!M.specularIntensityMap,Vt=G&&!!M.transmissionMap,U=G&&!!M.thicknessMap,ut=!!M.gradientMap,J=!!M.alphaMap,ft=M.alphaTest>0,_t=!!M.alphaHash,it=!!M.extensions;let It=Wn;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(It=n.toneMapping);const At={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:Ft,fragmentShader:te,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:yt,batchingColor:yt&&D._colorsTexture!==null,instancing:zt,instancingColor:zt&&D.instanceColor!==null,instancingMorph:zt&&D.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:qt,matcap:Fe,envMap:Kt,envMapMode:Kt&&tt.mapping,envMapCubeUVHeight:Y,aoMap:ae,lightMap:_e,bumpMap:ee,normalMap:ye,displacementMap:Ve,emissiveMap:cn,normalMapObjectSpace:ye&&M.normalMapType===Wf,normalMapTangentSpace:ye&&M.normalMapType===ul,packedNormalMap:ye&&M.normalMapType===ul&&ax(M.normalMap.format),metalnessMap:be,roughnessMap:De,anisotropy:F,anisotropyMap:q,clearcoat:$e,clearcoatMap:at,clearcoatNormalMap:lt,clearcoatRoughnessMap:Z,dispersion:fe,retroreflection:C,iridescence:S,iridescenceMap:Q,iridescenceThicknessMap:ct,sheen:z,sheenColorMap:Ct,sheenRoughnessMap:dt,specularMap:ht,specularColorMap:Pt,specularIntensityMap:Ut,transmission:G,transmissionMap:Vt,thicknessMap:U,gradientMap:ut,opaque:M.transparent===!1&&M.blending===qs&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:_t,combine:M.combine,mapUv:qt&&g(M.map.channel),aoMapUv:ae&&g(M.aoMap.channel),lightMapUv:_e&&g(M.lightMap.channel),bumpMapUv:ee&&g(M.bumpMap.channel),normalMapUv:ye&&g(M.normalMap.channel),displacementMapUv:Ve&&g(M.displacementMap.channel),emissiveMapUv:cn&&g(M.emissiveMap.channel),metalnessMapUv:be&&g(M.metalnessMap.channel),roughnessMapUv:De&&g(M.roughnessMap.channel),anisotropyMapUv:q&&g(M.anisotropyMap.channel),clearcoatMapUv:at&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(M.sheenRoughnessMap.channel),specularMapUv:ht&&g(M.specularMap.channel),specularColorMapUv:Pt&&g(M.specularColorMap.channel),specularIntensityMapUv:Ut&&g(M.specularIntensityMap.channel),transmissionMapUv:Vt&&g(M.transmissionMap.channel),thicknessMapUv:U&&g(M.thicknessMap.channel),alphaMapUv:J&&g(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ye||F),vertexNormals:!!B.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(qt||J),fog:!!I,useFog:M.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||B.attributes.normal===void 0&&ye===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:bt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:st,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,decodeVideoTexture:qt&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===ue,decodeVideoTextureEmissive:cn&&M.emissiveMap.isVideoTexture===!0&&ne.getTransfer(M.emissiveMap.colorSpace)===ue,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ke,flipSided:M.side===an,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:it&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&M.extensions.multiDraw===!0||yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function m(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)b.push(R),b.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(d(b,M),v(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function d(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numSunLights),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numSunLightShadows),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function T(M){const b=p[M.type];let R;if(b){const P=Hn[b];R=lr.clone(P.uniforms)}else R=M.uniforms;return R}function _(M,b){let R=u.get(b);return R!==void 0?++R.usedTimes:(R=new nx(n,b,M,s),l.push(R),u.set(b,R)),R}function E(M){if(--M.usedTimes===0){const b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),u.delete(M.cacheKey),M.destroy()}}function y(M){o.remove(M)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:T,acquireProgram:_,releaseProgram:E,releaseShaderCache:y,programs:l,dispose:A}}function lx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function cx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Uh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Fh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,x,m,d){let v=n[t];return v===void 0?(v={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:d},n[t]=v):(v.id=h.id,v.object=h,v.geometry=p,v.material=g,v.materialVariant=a(h),v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=m,v.group=d),t++,v}function c(h,p,g,x,m,d,v){v.reversedDepth===!0&&(m=-m);const T=o(h,p,g,x,m,d);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):e.push(T)}function l(h,p,g,x,m,d){const v=o(h,p,g,x,m,d);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,p){e.length>1&&e.sort(h||cx),i.length>1&&i.sort(p||Uh),s.length>1&&s.sort(p||Uh)}function f(){for(let h=t,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function hx(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Fh,n.set(i,[a])):s>=r.length?(a=new Fh,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function ux(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new vt};break;case"SpotLight":e={position:new L,direction:new L,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function fx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let dx=0;function px(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function mx(n){const t=new ux,e=fx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,r=new jt,a=new jt;function o(l){let u=0,f=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,v=0,T=0,_=0,E=0,y=0,A=0,M=0,b=0,R=0;l.sort(px);for(let D=0,O=l.length;D<O;D++){const I=l[D],B=I.color,X=I.intensity,V=I.distance;let tt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Bi?tt=I.shadow.map.texture:tt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*X,f+=B.g*X,h+=B.b*X;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],X);R++}else if(I.isSunLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const et=I.shadow,nt=e.get(I);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[g]=nt,i.sunShadowMap[g]=tt;const Nt=et.getViewportCount();for(let st=0;st<Nt;st++)i.sunShadowMatrix[x+st]=et.getMatrix(st),i.sunShadowCascade[x+st]=et._cascadeData[st];x+=Nt,g++}i.sun[p]=Y,p++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const et=I.shadow,nt=e.get(I);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=tt,i.directionalShadowMatrix[m]=I.shadow.matrix,E++}i.directional[m]=Y,m++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(B).multiplyScalar(X),Y.distance=V,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[v]=Y;const et=I.shadow;if(I.map&&(i.spotLightMap[M]=I.map,M++,et.updateMatrices(I),I.castShadow&&b++),i.spotLightMatrix[v]=et.matrix,I.castShadow){const nt=e.get(I);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,i.spotShadow[v]=nt,i.spotShadowMap[v]=tt,A++}v++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(B).multiplyScalar(X),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=Y,T++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const et=I.shadow,nt=e.get(I);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,nt.shadowCameraNear=et.camera.near,nt.shadowCameraFar=et.camera.far,i.pointShadow[d]=nt,i.pointShadowMap[d]=tt,i.pointShadowMatrix[d]=I.shadow.matrix,y++}i.point[d]=Y,d++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(X),Y.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[_]=Y,_++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==d||P.spotLength!==v||P.rectAreaLength!==T||P.hemiLength!==_||P.numSunShadows!==g||P.numDirectionalShadows!==E||P.numPointShadows!==y||P.numSpotShadows!==A||P.numSpotMaps!==M||P.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=m,i.spot.length=v,i.rectArea.length=T,i.point.length=d,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.pointShadowMatrix.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+M-b,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,P.sunLength=p,P.directionalLength=m,P.pointLength=d,P.spotLength=v,P.rectAreaLength=T,P.hemiLength=_,P.numSunShadows=g,P.numDirectionalShadows=E,P.numPointShadows=y,P.numSpotShadows=A,P.numSpotMaps=M,P.numLightProbes=R,i.version=dx++)}function c(l,u){let f=0,h=0,p=0,g=0,x=0,m=0;const d=u.matrixWorldInverse;for(let v=0,T=l.length;v<T;v++){const _=l[v];if(_.isSunLight){const E=i.sun[f];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(d),f++}else if(_.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),h++}else if(_.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),g++}else if(_.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:i}}function Oh(n){const t=new mx(n),e=[],i=[],s=[];function r(h){f.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function gx(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Oh(n),t.set(s,[o])):r>=a.length?(o=new Oh(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xx=`uniform sampler2D shadow_pass;
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
}`,vx=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Mx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Bh=new jt,Fs=new L,Mo=new L;function yx(n,t,e){let i=new Hl;const s=new rt,r=new rt,a=new Te,o=new Tp,c=new wp,l={},u=e.maxTextureSize,f={[Ui]:an,[an]:Ui,[ke]:ke},h=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:_x,fragmentShader:xx}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ht(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let d=this.type;this.render=function(y,A,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===yf&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);const b=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Vn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=d!==this.type;O&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=y.length;I<B;I++){const X=y[I],V=X.shadow;if(V===void 0){Bt("WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const tt=V.getFrameExtents();s.multiply(tt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/tt.x),s.x=r.x*tt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/tt.y),s.y=r.y*tt.y,V.mapSize.y=r.y));const Y=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||O===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Hs){if(X.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new on(s.x,s.y,{format:Bi,type:un,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),V.map.texture.name=X.name+".shadowMap",V.map.depthTexture=new sr(s.x,s.y,Ln),V.map.depthTexture.name=X.name+".shadowMapDepth",V.map.depthTexture.format=si,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qe,V.map.depthTexture.magFilter=qe}else X.isPointLight?(V.map=new Yu(s.x),V.map.depthTexture=new Vd(s.x,qn)):(V.map=new on(s.x,s.y),V.map.depthTexture=new sr(s.x,s.y,qn)),V.map.depthTexture.name=X.name+".shadowMap",V.map.depthTexture.format=si,this.type===Ys?(V.map.depthTexture.compareFunction=Y?Ol:Fl,V.map.depthTexture.minFilter=Qe,V.map.depthTexture.magFilter=Qe):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qe,V.map.depthTexture.magFilter=qe);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);const et=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();X.isPointLight!==!0&&V.updateMatrices(X,M);for(let nt=0;nt<et;nt++){const Nt=V.getCamera(nt);if(X.isPointLight){const st=V.camera,Ft=V.matrix,te=X.distance||st.far;te!==st.far&&(st.far=te,st.updateProjectionMatrix()),Fs.setFromMatrixPosition(X.matrixWorld),st.position.copy(Fs),Mo.copy(st.position),Mo.add(vx[nt]),st.up.copy(Mx[nt]),st.lookAt(Mo),st.updateMatrixWorld(),Ft.makeTranslation(-Fs.x,-Fs.y,-Fs.z),Bh.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Bh,st.coordinateSystem,st.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,nt),n.clear();else{nt===0&&(n.setRenderTarget(V.map),n.clear());const st=V.getViewport(nt);a.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),D.viewport(a)}i=V.getFrustum(nt),_(A,M,Nt,X,this.type)}V.isPointLightShadow!==!0&&this.type===Hs&&v(V,M),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,R,P)};function v(y,A){const M=t.update(x);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null?y.mapPass=new on(s.x,s.y,{format:Bi,type:un}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(A,null,M,h,x,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value.set(y.map.width,y.map.height),p.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(A,null,M,p,x,null)}function T(y,A,M,b){let R=null;const P=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(P!==void 0)R=P;else if(R=M.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=R.uuid,O=A.uuid;let I=l[D];I===void 0&&(I={},l[D]=I);let B=I[O];B===void 0&&(B=R.clone(),I[O]=B,A.addEventListener("dispose",E)),R=B}if(R.visible=A.visible,R.wireframe=A.wireframe,b===Hs?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=n.properties.get(R);D.light=M}return R}function _(y,A,M,b,R){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&R===Hs)&&(!y.frustumCulled||y.intersectsFrustum(i))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);const O=t.update(y),I=y.material;if(Array.isArray(I)){const B=O.groups;for(let X=0,V=B.length;X<V;X++){const tt=B[X],Y=I[tt.materialIndex];if(Y&&Y.visible){const et=T(y,Y,b,R);y.onBeforeShadow(n,y,A,M,O,et,tt),n.renderBufferDirect(M,null,O,et,y,tt),y.onAfterShadow(n,y,A,M,O,et,tt)}}}else if(I.visible){const B=T(y,I,b,R);y.onBeforeShadow(n,y,A,M,O,B,null),n.renderBufferDirect(M,null,O,B,y,null),y.onAfterShadow(n,y,A,M,O,B,null)}}const D=y.children;for(let O=0,I=D.length;O<I;O++)_(D[O],A,M,b,R)}function E(y){y.target.removeEventListener("dispose",E);for(const M in l){const b=l[M],R=y.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function Sx(n,t){function e(){let U=!1;const ut=new Te;let J=null;const ft=new Te(0,0,0,0);return{setMask:function(_t){J!==_t&&!U&&(n.colorMask(_t,_t,_t,_t),J=_t)},setLocked:function(_t){U=_t},setClear:function(_t,it,It,At,xe){xe===!0&&(_t*=At,it*=At,It*=At),ut.set(_t,it,It,At),ft.equals(ut)===!1&&(n.clearColor(_t,it,It,At),ft.copy(ut))},reset:function(){U=!1,J=null,ft.set(-1,0,0,0)}}}function i(){let U=!1,ut=!1,J=null,ft=null,_t=null;return{setReversed:function(it){if(ut!==it){const It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ut=it;const At=_t;_t=null,this.setClear(At)}},getReversed:function(){return ut},setTest:function(it){it?j(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(it){J!==it&&!U&&(n.depthMask(it),J=it)},setFunc:function(it){if(ut&&(it=nd[it]),ft!==it){switch(it){case Ao:n.depthFunc(n.NEVER);break;case Ro:n.depthFunc(n.ALWAYS);break;case Co:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case Po:n.depthFunc(n.EQUAL);break;case Lo:n.depthFunc(n.GEQUAL);break;case Do:n.depthFunc(n.GREATER);break;case Io:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=it}},setLocked:function(it){U=it},setClear:function(it){_t!==it&&(_t=it,ut&&(it=1-it),n.clearDepth(it))},reset:function(){U=!1,J=null,ft=null,_t=null,ut=!1}}}function s(){let U=!1,ut=null,J=null,ft=null,_t=null,it=null,It=null,At=null,xe=null;return{setTest:function(ce){U||(ce?j(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(ce){ut!==ce&&!U&&(n.stencilMask(ce),ut=ce)},setFunc:function(ce,Tn,Fn){(J!==ce||ft!==Tn||_t!==Fn)&&(n.stencilFunc(ce,Tn,Fn),J=ce,ft=Tn,_t=Fn)},setOp:function(ce,Tn,Fn){(it!==ce||It!==Tn||At!==Fn)&&(n.stencilOp(ce,Tn,Fn),it=ce,It=Tn,At=Fn)},setLocked:function(ce){U=ce},setClear:function(ce){xe!==ce&&(n.clearStencil(ce),xe=ce)},reset:function(){U=!1,ut=null,J=null,ft=null,_t=null,it=null,It=null,At=null,xe=null}}}const r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},f={},h={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,T=null,_=null,E=null,y=null,A=null,M=new vt(0,0,0),b=0,R=!1,P=null,D=null,O=null,I=null,B=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,tt=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=tt>=1):Y.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=tt>=2);let et=null,nt={};const Nt=n.getParameter(n.SCISSOR_BOX),st=n.getParameter(n.VIEWPORT),Ft=new Te().fromArray(Nt),te=new Te().fromArray(st);function ie(U,ut,J,ft){const _t=new Uint8Array(4),it=n.createTexture();n.bindTexture(U,it),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<J;It++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(ut+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return it}const $={};$[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(js),ee(!1),ye(Tc),j(n.CULL_FACE),ae(Vn);function j(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function bt(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function zt(U,ut){return h[U]!==ut?(n.bindFramebuffer(U,ut),h[U]=ut,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ut),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function yt(U,ut){let J=g,ft=!1;if(U){J=p.get(ut),J===void 0&&(J=[],p.set(ut,J));const _t=U.textures;if(J.length!==_t.length||J[0]!==n.COLOR_ATTACHMENT0){for(let it=0,It=_t.length;it<It;it++)J[it]=n.COLOR_ATTACHMENT0+it;J.length=_t.length,ft=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ft=!0);ft&&n.drawBuffers(J)}function qt(U){return x!==U?(n.useProgram(U),x=U,!0):!1}const Fe={[cs]:n.FUNC_ADD,[bf]:n.FUNC_SUBTRACT,[Ef]:n.FUNC_REVERSE_SUBTRACT};Fe[Tf]=n.MIN,Fe[wf]=n.MAX;const Kt={[Af]:n.ZERO,[Rf]:n.ONE,[Cf]:n.SRC_COLOR,[hu]:n.SRC_ALPHA,[Uf]:n.SRC_ALPHA_SATURATE,[If]:n.DST_COLOR,[Lf]:n.DST_ALPHA,[Pf]:n.ONE_MINUS_SRC_COLOR,[uu]:n.ONE_MINUS_SRC_ALPHA,[Nf]:n.ONE_MINUS_DST_COLOR,[Df]:n.ONE_MINUS_DST_ALPHA,[Ff]:n.CONSTANT_COLOR,[Of]:n.ONE_MINUS_CONSTANT_COLOR,[Bf]:n.CONSTANT_ALPHA,[zf]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(U,ut,J,ft,_t,it,It,At,xe,ce){if(U===Vn){m===!0&&(bt(n.BLEND),m=!1);return}if(m===!1&&(j(n.BLEND),m=!0),U!==Sf){if(U!==d||ce!==R){if((v!==cs||E!==cs)&&(n.blendEquation(n.FUNC_ADD),v=cs,E=cs),ce)switch(U){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fi:n.blendFunc(n.ONE,n.ONE);break;case wc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ac:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:re("WebGLState: Invalid blending: ",U);break}else switch(U){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wc:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",U);break}T=null,_=null,y=null,A=null,M.set(0,0,0),b=0,d=U,R=ce}return}_t=_t||ut,it=it||J,It=It||ft,(ut!==v||_t!==E)&&(n.blendEquationSeparate(Fe[ut],Fe[_t]),v=ut,E=_t),(J!==T||ft!==_||it!==y||It!==A)&&(n.blendFuncSeparate(Kt[J],Kt[ft],Kt[it],Kt[It]),T=J,_=ft,y=it,A=It),(At.equals(M)===!1||xe!==b)&&(n.blendColor(At.r,At.g,At.b,xe),M.copy(At),b=xe),d=U,R=!1}function _e(U,ut){U.side===ke?bt(n.CULL_FACE):j(n.CULL_FACE);let J=U.side===an;ut&&(J=!J),ee(J),U.blending===qs&&U.transparent===!1?ae(Vn):ae(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const ft=U.stencilWrite;o.setTest(ft),ft&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),cn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(U){P!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),P=U)}function ye(U){U!==vf?(j(n.CULL_FACE),U!==D&&(U===Tc?n.cullFace(n.BACK):U===Mf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),D=U}function Ve(U){U!==O&&(V&&n.lineWidth(U),O=U)}function cn(U,ut,J){U?(j(n.POLYGON_OFFSET_FILL),(I!==ut||B!==J)&&(I=ut,B=J,a.getReversed()&&(ut=-ut),n.polygonOffset(ut,J))):bt(n.POLYGON_OFFSET_FILL)}function be(U){U?j(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function De(U){U===void 0&&(U=n.TEXTURE0+X-1),et!==U&&(n.activeTexture(U),et=U)}function F(U,ut,J){J===void 0&&(et===null?J=n.TEXTURE0+X-1:J=et);let ft=nt[J];ft===void 0&&(ft={type:void 0,texture:void 0},nt[J]=ft),(ft.type!==U||ft.texture!==ut)&&(et!==J&&(n.activeTexture(J),et=J),n.bindTexture(U,ut||$[U]),ft.type=U,ft.texture=ut)}function $e(){const U=nt[et];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function fe(){try{n.compressedTexImage2D(...arguments)}catch(U){re("WebGLState:",U)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(U){re("WebGLState:",U)}}function S(){try{n.texSubImage2D(...arguments)}catch(U){re("WebGLState:",U)}}function z(){try{n.texSubImage3D(...arguments)}catch(U){re("WebGLState:",U)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(U){re("WebGLState:",U)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(U){re("WebGLState:",U)}}function at(){try{n.texStorage2D(...arguments)}catch(U){re("WebGLState:",U)}}function lt(){try{n.texStorage3D(...arguments)}catch(U){re("WebGLState:",U)}}function Z(){try{n.texImage2D(...arguments)}catch(U){re("WebGLState:",U)}}function Q(){try{n.texImage3D(...arguments)}catch(U){re("WebGLState:",U)}}function ct(U){return f[U]!==void 0?f[U]:n.getParameter(U)}function Ct(U,ut){f[U]!==ut&&(n.pixelStorei(U,ut),f[U]=ut)}function dt(U){Ft.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ft.copy(U))}function ht(U){te.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),te.copy(U))}function Pt(U,ut){let J=l.get(ut);J===void 0&&(J=new WeakMap,l.set(ut,J));let ft=J.get(U);ft===void 0&&(ft=n.getUniformBlockIndex(ut,U.name),J.set(U,ft))}function Ut(U,ut){const ft=l.get(ut).get(U);c.get(ut)!==ft&&(n.uniformBlockBinding(ut,ft,U.__bindingPointIndex),c.set(ut,ft))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},et=null,nt={},h={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,T=null,_=null,E=null,y=null,A=null,M=new vt(0,0,0),b=0,R=!1,P=null,D=null,O=null,I=null,B=null,Ft.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:bt,bindFramebuffer:zt,drawBuffers:yt,useProgram:qt,setBlending:ae,setMaterial:_e,setFlipSided:ee,setCullFace:ye,setLineWidth:Ve,setPolygonOffset:cn,setScissorTest:be,activeTexture:De,bindTexture:F,unbindTexture:$e,compressedTexImage2D:fe,compressedTexImage3D:C,texImage2D:Z,texImage3D:Q,pixelStorei:Ct,getParameter:ct,updateUBOMapping:Pt,uniformBlockBinding:Ut,texStorage2D:at,texStorage3D:lt,texSubImage2D:S,texSubImage3D:z,compressedTexSubImage2D:G,compressedTexSubImage3D:q,scissor:dt,viewport:ht,reset:Vt}}function bx(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return g?new OffscreenCanvas(C,S):ma("canvas")}function m(C,S,z){let G=1;const q=fe(C);if((q.width>z||q.height>z)&&(G=z/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const at=Math.floor(G*q.width),lt=Math.floor(G*q.height);h===void 0&&(h=x(at,lt));const Z=S?x(at,lt):h;return Z.width=at,Z.height=lt,Z.getContext("2d").drawImage(C,0,0,at,lt),Bt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+at+"x"+lt+")."),Z}else return"data"in C&&Bt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function d(C){return C.generateMipmaps}function v(C){n.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,S,z,G,q,at=!1){if(C!==null){if(n[C]!==void 0)return n[C];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let lt;G&&(lt=t.get("EXT_texture_norm16"),lt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=S;if(S===n.RED&&(z===n.FLOAT&&(Z=n.R32F),z===n.HALF_FLOAT&&(Z=n.R16F),z===n.UNSIGNED_BYTE&&(Z=n.R8),z===n.UNSIGNED_SHORT&&lt&&(Z=lt.R16_EXT),z===n.SHORT&&lt&&(Z=lt.R16_SNORM_EXT)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.R8UI),z===n.UNSIGNED_SHORT&&(Z=n.R16UI),z===n.UNSIGNED_INT&&(Z=n.R32UI),z===n.BYTE&&(Z=n.R8I),z===n.SHORT&&(Z=n.R16I),z===n.INT&&(Z=n.R32I)),S===n.RG&&(z===n.FLOAT&&(Z=n.RG32F),z===n.HALF_FLOAT&&(Z=n.RG16F),z===n.UNSIGNED_BYTE&&(Z=n.RG8),z===n.UNSIGNED_SHORT&&lt&&(Z=lt.RG16_EXT),z===n.SHORT&&lt&&(Z=lt.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RG8UI),z===n.UNSIGNED_SHORT&&(Z=n.RG16UI),z===n.UNSIGNED_INT&&(Z=n.RG32UI),z===n.BYTE&&(Z=n.RG8I),z===n.SHORT&&(Z=n.RG16I),z===n.INT&&(Z=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),z===n.UNSIGNED_INT&&(Z=n.RGB32UI),z===n.BYTE&&(Z=n.RGB8I),z===n.SHORT&&(Z=n.RGB16I),z===n.INT&&(Z=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),z===n.UNSIGNED_INT&&(Z=n.RGBA32UI),z===n.BYTE&&(Z=n.RGBA8I),z===n.SHORT&&(Z=n.RGBA16I),z===n.INT&&(Z=n.RGBA32I)),S===n.RGB&&(z===n.UNSIGNED_SHORT&&lt&&(Z=lt.RGB16_EXT),z===n.SHORT&&lt&&(Z=lt.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),S===n.RGBA){const Q=at?pa:ne.getTransfer(q);z===n.FLOAT&&(Z=n.RGBA32F),z===n.HALF_FLOAT&&(Z=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Z=Q===ue?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&lt&&(Z=lt.RGBA16_EXT),z===n.SHORT&&lt&&(Z=lt.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function E(C,S){let z;return C?S===null||S===qn||S===er?z=n.DEPTH24_STENCIL8:S===Ln?z=n.DEPTH32F_STENCIL8:S===tr&&(z=n.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qn||S===er?z=n.DEPTH_COMPONENT24:S===Ln?z=n.DEPTH_COMPONENT32F:S===tr&&(z=n.DEPTH_COMPONENT16),z}function y(C,S){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==qe&&C.minFilter!==Qe?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),b(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&f.delete(S)}function M(C){const S=C.target;S.removeEventListener("dispose",M),P(S)}function b(C){const S=i.get(C);if(S.__webglInit===void 0)return;const z=C.source,G=p.get(z);if(G){const q=G[S.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(C),Object.keys(G).length===0&&p.delete(z)}i.remove(C)}function R(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const z=C.source,G=p.get(z);delete G[S.__cacheKey],a.memory.textures--}function P(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(S.__webglFramebuffer[G]))for(let q=0;q<S.__webglFramebuffer[G].length;q++)n.deleteFramebuffer(S.__webglFramebuffer[G][q]);else n.deleteFramebuffer(S.__webglFramebuffer[G]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[G])}else{if(Array.isArray(S.__webglFramebuffer))for(let G=0;G<S.__webglFramebuffer.length;G++)n.deleteFramebuffer(S.__webglFramebuffer[G]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let G=0;G<S.__webglColorRenderbuffer.length;G++)S.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[G]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=C.textures;for(let G=0,q=z.length;G<q;G++){const at=i.get(z[G]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),a.memory.textures--),i.remove(z[G])}i.remove(C)}let D=0;function O(){D=0}function I(){return D}function B(C){D=C}function X(){const C=D;return C>=s.maxTextures&&Bt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function V(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function tt(C,S){const z=i.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const G=C.image;if(G===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(z,C,S);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function Y(C,S){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){bt(z,C,S);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function et(C,S){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){bt(z,C,S);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function nt(C,S){const z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){zt(z,C,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const Nt={[xs]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[No]:n.MIRRORED_REPEAT},st={[qe]:n.NEAREST,[Gf]:n.NEAREST_MIPMAP_NEAREST,[yr]:n.NEAREST_MIPMAP_LINEAR,[Qe]:n.LINEAR,[Ha]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Ft={[Yf]:n.NEVER,[Jf]:n.ALWAYS,[qf]:n.LESS,[Fl]:n.LEQUAL,[$f]:n.EQUAL,[Ol]:n.GEQUAL,[Zf]:n.GREATER,[Kf]:n.NOTEQUAL};function te(C,S){if(S.type===Ln&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Qe||S.magFilter===Ha||S.magFilter===yr||S.magFilter===Ii||S.minFilter===Qe||S.minFilter===Ha||S.minFilter===yr||S.minFilter===Ii)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Nt[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Nt[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Nt[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,st[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,st[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ft[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qe||S.minFilter!==yr&&S.minFilter!==Ii||S.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ie(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const G=S.source;let q=p.get(G);q===void 0&&(q={},p.set(G,q));const at=V(S);if(at!==C.__cacheKey){q[at]===void 0&&(q[at]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),q[at].usedTimes++;const lt=q[C.__cacheKey];lt!==void 0&&(q[C.__cacheKey].usedTimes--,lt.usedTimes===0&&R(S)),C.__cacheKey=at,C.__webglTexture=q[at].texture}return z}function $(C,S,z){return Math.floor(Math.floor(C/z)/S)}function j(C,S,z,G){const at=C.updateRanges;if(at.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,z,G,S.data);else{at.sort((Ct,dt)=>Ct.start-dt.start);let lt=0;for(let Ct=1;Ct<at.length;Ct++){const dt=at[lt],ht=at[Ct],Pt=dt.start+dt.count,Ut=$(ht.start,S.width,4),Vt=$(dt.start,S.width,4);ht.start<=Pt+1&&Ut===Vt&&$(ht.start+ht.count-1,S.width,4)===Ut?dt.count=Math.max(dt.count,ht.start+ht.count-dt.start):(++lt,at[lt]=ht)}at.length=lt+1;const Z=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),ct=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Ct=0,dt=at.length;Ct<dt;Ct++){const ht=at[Ct],Pt=Math.floor(ht.start/4),Ut=Math.ceil(ht.count/4),Vt=Pt%S.width,U=Math.floor(Pt/S.width),ut=Ut,J=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Vt),e.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Vt,U,ut,J,z,G,S.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,ct)}}function bt(C,S,z){let G=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=n.TEXTURE_3D);const q=ie(C,S),at=S.source;e.bindTexture(G,C.__webglTexture,n.TEXTURE0+z);const lt=i.get(at);if(at.version!==lt.__version||q===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const J=ne.getPrimaries(ne.workingColorSpace),ft=S.colorSpace===mi?null:ne.getPrimaries(S.colorSpace),_t=S.colorSpace===mi||J===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let Q=m(S.image,!1,s.maxTextureSize);Q=$e(S,Q);const ct=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type);let dt=_(S.internalFormat,ct,Ct,S.normalized,S.colorSpace,S.isVideoTexture);te(G,S);let ht;const Pt=S.mipmaps,Ut=S.isVideoTexture!==!0,Vt=lt.__version===void 0||q===!0,U=at.dataReady,ut=y(S,Q);if(S.isDepthTexture)dt=E(S.format===Ni,S.type),Vt&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,dt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,dt,Q.width,Q.height,0,ct,Ct,null));else if(S.isDataTexture)if(Pt.length>0){Ut&&Vt&&e.texStorage2D(n.TEXTURE_2D,ut,dt,Pt[0].width,Pt[0].height);for(let J=0,ft=Pt.length;J<ft;J++)ht=Pt[J],Ut?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ht.width,ht.height,ct,Ct,ht.data):e.texImage2D(n.TEXTURE_2D,J,dt,ht.width,ht.height,0,ct,Ct,ht.data);S.generateMipmaps=!1}else Ut?(Vt&&e.texStorage2D(n.TEXTURE_2D,ut,dt,Q.width,Q.height),U&&j(S,Q,ct,Ct)):e.texImage2D(n.TEXTURE_2D,0,dt,Q.width,Q.height,0,ct,Ct,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ut&&Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,dt,Pt[0].width,Pt[0].height,Q.depth);for(let J=0,ft=Pt.length;J<ft;J++)if(ht=Pt[J],S.format!==Dn)if(ct!==null)if(Ut){if(U)if(S.layerUpdates.size>0){const _t=_h(ht.width,ht.height,S.format,S.type);for(const it of S.layerUpdates){const It=ht.data.subarray(it*_t/ht.data.BYTES_PER_ELEMENT,(it+1)*_t/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,it,ht.width,ht.height,1,ct,It)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,Q.depth,ct,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,dt,ht.width,ht.height,Q.depth,0,ht.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,Q.depth,ct,Ct,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,dt,ht.width,ht.height,Q.depth,0,ct,Ct,ht.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ut&&Vt&&e.texStorage2D(n.TEXTURE_2D,ut,dt,Pt[0].width,Pt[0].height);for(let J=0,ft=Pt.length;J<ft;J++)ht=Pt[J],S.format!==Dn?ct!==null?Ut?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ht.width,ht.height,ct,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,J,dt,ht.width,ht.height,0,ht.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ht.width,ht.height,ct,Ct,ht.data):e.texImage2D(n.TEXTURE_2D,J,dt,ht.width,ht.height,0,ct,Ct,ht.data)}else if(S.isDataArrayTexture)if(Ut){if(Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,dt,Q.width,Q.height,Q.depth),U)if(S.layerUpdates.size>0){const J=_h(Q.width,Q.height,S.format,S.type);for(const ft of S.layerUpdates){const _t=Q.data.subarray(ft*J/Q.data.BYTES_PER_ELEMENT,(ft+1)*J/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,Q.width,Q.height,1,ct,Ct,_t)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ct,Ct,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,dt,Q.width,Q.height,Q.depth,0,ct,Ct,Q.data);else if(S.isData3DTexture)Ut?(Vt&&e.texStorage3D(n.TEXTURE_3D,ut,dt,Q.width,Q.height,Q.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ct,Ct,Q.data)):e.texImage3D(n.TEXTURE_3D,0,dt,Q.width,Q.height,Q.depth,0,ct,Ct,Q.data);else if(S.isFramebufferTexture){if(Vt)if(Ut)e.texStorage2D(n.TEXTURE_2D,ut,dt,Q.width,Q.height);else{let J=Q.width,ft=Q.height;for(let _t=0;_t<ut;_t++)e.texImage2D(n.TEXTURE_2D,_t,dt,J,ft,0,ct,Ct,null),J>>=1,ft>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),f.add(S),J.onpaint=ft=>{const _t=ft.changedElements;for(const it of f)_t.includes(it.image)&&(it.needsUpdate=!0)},J.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const _t=n.RGBA,it=n.RGBA,It=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,_t,it,It,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Ut&&Vt){const J=fe(Pt[0]);e.texStorage2D(n.TEXTURE_2D,ut,dt,J.width,J.height)}for(let J=0,ft=Pt.length;J<ft;J++)ht=Pt[J],Ut?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ct,Ct,ht):e.texImage2D(n.TEXTURE_2D,J,dt,ct,Ct,ht);S.generateMipmaps=!1}else if(Ut){if(Vt){const J=fe(Q);e.texStorage2D(n.TEXTURE_2D,ut,dt,J.width,J.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,Ct,Q)}else e.texImage2D(n.TEXTURE_2D,0,dt,ct,Ct,Q);d(S)&&v(G),lt.__version=at.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function zt(C,S,z){if(S.image.length!==6)return;const G=ie(C,S),q=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);const at=i.get(q);if(q.version!==at.__version||G===!0){e.activeTexture(n.TEXTURE0+z);const lt=ne.getPrimaries(ne.workingColorSpace),Z=S.colorSpace===mi?null:ne.getPrimaries(S.colorSpace),Q=S.colorSpace===mi||lt===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ct=S.isCompressedTexture||S.image[0].isCompressedTexture,Ct=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let it=0;it<6;it++)!ct&&!Ct?dt[it]=m(S.image[it],!0,s.maxCubemapSize):dt[it]=Ct?S.image[it].image:S.image[it],dt[it]=$e(S,dt[it]);const ht=dt[0],Pt=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type),Vt=_(S.internalFormat,Pt,Ut,S.normalized,S.colorSpace),U=S.isVideoTexture!==!0,ut=at.__version===void 0||G===!0,J=q.dataReady;let ft=y(S,ht);te(n.TEXTURE_CUBE_MAP,S);let _t;if(ct){U&&ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Vt,ht.width,ht.height);for(let it=0;it<6;it++){_t=dt[it].mipmaps;for(let It=0;It<_t.length;It++){const At=_t[It];S.format!==Dn?Pt!==null?U?J&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,Vt,At.width,At.height,0,At.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,At.width,At.height,Pt,Ut,At.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,Vt,At.width,At.height,0,Pt,Ut,At.data)}}}else{if(_t=S.mipmaps,U&&ut){_t.length>0&&ft++;const it=fe(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Vt,it.width,it.height)}for(let it=0;it<6;it++)if(Ct){U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,dt[it].width,dt[it].height,Pt,Ut,dt[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,dt[it].width,dt[it].height,0,Pt,Ut,dt[it].data);for(let It=0;It<_t.length;It++){const xe=_t[It].image[it].image;U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,xe.width,xe.height,Pt,Ut,xe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,Vt,xe.width,xe.height,0,Pt,Ut,xe.data)}}else{U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Pt,Ut,dt[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,Pt,Ut,dt[it]);for(let It=0;It<_t.length;It++){const At=_t[It];U?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,Pt,Ut,At.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,Vt,Pt,Ut,At.image[it])}}}d(S)&&v(n.TEXTURE_CUBE_MAP),at.__version=q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function yt(C,S,z,G,q,at){const lt=r.convert(z.format,z.colorSpace),Z=r.convert(z.type),Q=_(z.internalFormat,lt,Z,z.normalized,z.colorSpace),ct=i.get(S),Ct=i.get(z);if(Ct.__renderTarget=S,!ct.__hasExternalTextures){const dt=Math.max(1,S.width>>at),ht=Math.max(1,S.height>>at);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?e.texImage3D(q,at,Q,dt,ht,S.depth,0,lt,Z,null):e.texImage2D(q,at,Q,dt,ht,0,lt,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),De(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,q,Ct.__webglTexture,0,be(S)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,q,Ct.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(C,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){const G=S.depthTexture,q=G&&G.isDepthTexture?G.type:null,at=E(S.stencilBuffer,q),lt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;De(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(S),at,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(S),at,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,at,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,C)}else{const G=S.textures;for(let q=0;q<G.length;q++){const at=G[q],lt=r.convert(at.format,at.colorSpace),Z=r.convert(at.type),Q=_(at.internalFormat,lt,Z,at.normalized,at.colorSpace);De(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(S),Q,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(S),Q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Q,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(C,S,z){const G=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(S.depthTexture);if(q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G){if(q.__webglInit===void 0&&(q.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),q.__webglTexture===void 0){q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),te(n.TEXTURE_CUBE_MAP,S.depthTexture);const ct=r.convert(S.depthTexture.format),Ct=r.convert(S.depthTexture.type);let dt;S.depthTexture.format===si?dt=n.DEPTH_COMPONENT24:S.depthTexture.format===Ni&&(dt=n.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,dt,S.width,S.height,0,ct,Ct,null)}}else tt(S.depthTexture,0);const at=q.__webglTexture,lt=be(S),Z=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,Q=S.depthTexture.format===Ni?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===si)De(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Z,at,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Z,at,0);else if(S.depthTexture.format===Ni)De(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Z,at,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Z,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(C){const S=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const G=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),G){const q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),S.__depthDisposeCallback=q}S.__boundDepthTexture=G}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let G=0;G<6;G++)Fe(S.__webglFramebuffer[G],C,G);else{const G=C.texture.mipmaps;G&&G.length>0?Fe(S.__webglFramebuffer[0],C,0):Fe(S.__webglFramebuffer,C,0)}else if(z){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]===void 0)S.__webglDepthbuffer[G]=n.createRenderbuffer(),qt(S.__webglDepthbuffer[G],C,!1);else{const q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,at)}}else{const G=C.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),qt(S.__webglDepthbuffer,C,!1);else{const q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,at)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(C,S,z){const G=i.get(C);S!==void 0&&yt(G.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Kt(C)}function _e(C){const S=C.texture,z=i.get(C),G=i.get(S);C.addEventListener("dispose",M);const q=C.textures,at=C.isWebGLCubeRenderTarget===!0,lt=q.length>1;if(lt||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=S.version,a.memory.textures++),at){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let Q=0;Q<S.mipmaps.length;Q++)z.__webglFramebuffer[Z][Q]=n.createFramebuffer()}else z.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<S.mipmaps.length;Z++)z.__webglFramebuffer[Z]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(lt)for(let Z=0,Q=q.length;Z<Q;Z++){const ct=i.get(q[Z]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&De(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<q.length;Z++){const Q=q[Z];z.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);const ct=r.convert(Q.format,Q.colorSpace),Ct=r.convert(Q.type),dt=_(Q.internalFormat,ct,Ct,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),ht=be(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,dt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),qt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),te(n.TEXTURE_CUBE_MAP,S);for(let Z=0;Z<6;Z++)if(S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)yt(z.__webglFramebuffer[Z][Q],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else yt(z.__webglFramebuffer[Z],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);d(S)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let Z=0,Q=q.length;Z<Q;Z++){const ct=q[Z],Ct=i.get(ct);let dt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Ct.__webglTexture),te(dt,ct),yt(z.__webglFramebuffer,C,ct,n.COLOR_ATTACHMENT0+Z,dt,0),d(ct)&&v(dt)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,G.__webglTexture),te(Z,S),S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)yt(z.__webglFramebuffer[Q],C,S,n.COLOR_ATTACHMENT0,Z,Q);else yt(z.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,Z,0);d(S)&&v(Z),e.unbindTexture()}C.depthBuffer&&Kt(C)}function ee(C){const S=C.textures;for(let z=0,G=S.length;z<G;z++){const q=S[z];if(d(q)){const at=T(C),lt=i.get(q).__webglTexture;e.bindTexture(at,lt),v(at),e.unbindTexture()}}}const ye=[],Ve=[];function cn(C){if(C.samples>0){if(De(C)===!1){const S=C.textures,z=C.width,G=C.height;let q=n.COLOR_BUFFER_BIT;const at=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(C),Z=S.length>1;if(Z)for(let ct=0;ct<S.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ct=0;ct<S.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const Ct=i.get(S[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ct,0)}n.blitFramebuffer(0,0,z,G,0,0,z,G,q,n.NEAREST),c===!0&&(ye.length=0,Ve.length=0,ye.push(n.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ye.push(at),Ve.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ct=0;ct<S.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const Ct=i.get(S[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,Ct,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function be(C){return Math.min(s.maxSamples,C.samples)}function De(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function F(C){const S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function $e(C,S){const z=C.colorSpace,G=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==da&&z!==mi&&(ne.getTransfer(z)===ue?(G!==Dn||q!==gn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",z)),S}function fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=tt,this.setTexture2DArray=Y,this.setTexture3D=et,this.setTextureCube=nt,this.rebindTextures=ae,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ex(n,t){function e(i,s=mi){let r;const a=ne.getTransfer(s);if(i===gn)return n.UNSIGNED_BYTE;if(i===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ll)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_u)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===pu)return n.BYTE;if(i===mu)return n.SHORT;if(i===tr)return n.UNSIGNED_SHORT;if(i===Cl)return n.INT;if(i===qn)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===un)return n.HALF_FLOAT;if(i===xu)return n.ALPHA;if(i===vu)return n.RGB;if(i===Dn)return n.RGBA;if(i===si)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===Dl)return n.RED;if(i===Il)return n.RED_INTEGER;if(i===Bi)return n.RG;if(i===Nl)return n.RG_INTEGER;if(i===Ul)return n.RGBA_INTEGER;if(i===na||i===ia||i===sa||i===ra)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uo||i===Fo||i===Oo||i===Bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zo||i===ko||i===Ho||i===Go||i===Vo||i===ua||i===Wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zo||i===ko)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ho)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Go)return r.COMPRESSED_R11_EAC;if(i===Vo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ua)return r.COMPRESSED_RG11_EAC;if(i===Wo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xo||i===Yo||i===qo||i===$o||i===Zo||i===Ko||i===Jo||i===Qo||i===jo||i===tl||i===el||i===nl||i===il||i===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$o)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ko)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===el)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===il)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===al||i===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===rl)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ll||i===cl||i===fa||i===hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wx=`
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

}`;class Ax{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Pu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Xe({vertexShader:Tx,fragmentShader:wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new $t(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rx extends yi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Ax,d={},v=e.getContextAttributes();let T=null,_=null;const E=[],y=[],A=new rt;let M=null,b=null;const R=new mn;R.viewport=new Te;const P=new mn;P.viewport=new Te;const D=[R,P],O=new Dp;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let j=E[$];return j===void 0&&(j=new $a,E[$]=j),j.getTargetRaySpace()},this.getControllerGrip=function($){let j=E[$];return j===void 0&&(j=new $a,E[$]=j),j.getGripSpace()},this.getHand=function($){let j=E[$];return j===void 0&&(j=new $a,E[$]=j),j.getHandSpace()};function X($){const j=y.indexOf($.inputSource);if(j===-1)return;const bt=E[j];bt!==void 0&&(bt.update($.inputSource,$.frame,l||a),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",tt);for(let $=0;$<E.length;$++){const j=y[$];j!==null&&(y[$]=null,E[$].disconnect(j))}I=null,B=null,m.reset();for(const $ in d)delete d[$];if(t.setRenderTarget(T),p=null,h=null,f=null,s=null,_=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(A.width,A.height,!1),b!==null){const $=b.camera;$.fov=b.fov,$.zoom=b.zoom,$.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",V),s.addEventListener("inputsourceschange",tt),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,zt=null,yt=null;v.depth&&(yt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=v.stencil?Ni:si,zt=v.stencil?er:qn);const qt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(qt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new on(h.textureWidth,h.textureHeight,{format:Dn,type:gn,depthTexture:new sr(h.textureWidth,h.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const bt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new on(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt($){for(let j=0;j<$.removed.length;j++){const bt=$.removed[j],zt=y.indexOf(bt);zt>=0&&(y[zt]=null,E[zt].disconnect(bt))}for(let j=0;j<$.added.length;j++){const bt=$.added[j];let zt=y.indexOf(bt);if(zt===-1){for(let qt=0;qt<E.length;qt++)if(qt>=y.length){y.push(bt),zt=qt;break}else if(y[qt]===null){y[qt]=bt,zt=qt;break}if(zt===-1)break}const yt=E[zt];yt&&yt.connect(bt)}}const Y=new L,et=new L;function nt($,j,bt){Y.setFromMatrixPosition(j.matrixWorld),et.setFromMatrixPosition(bt.matrixWorld);const zt=Y.distanceTo(et),yt=j.projectionMatrix.elements,qt=bt.projectionMatrix.elements,Fe=yt[14]/(yt[10]-1),Kt=yt[14]/(yt[10]+1),ae=(yt[9]+1)/yt[5],_e=(yt[9]-1)/yt[5],ee=(yt[8]-1)/yt[0],ye=(qt[8]+1)/qt[0],Ve=Fe*ee,cn=Fe*ye,be=zt/(-ee+ye),De=be*-ee;if(j.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(De),$.translateZ(be),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),yt[10]===-1)$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const F=Fe+be,$e=Kt+be,fe=Ve-De,C=cn+(zt-De),S=ae*Kt/$e*F,z=_e*Kt/$e*F;$.projectionMatrix.makePerspective(fe,C,S,z,F,$e),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Nt($,j){j===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(j.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let j=$.near,bt=$.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),O.near=P.near=R.near=j,O.far=P.far=R.far=bt,(I!==O.near||B!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,B=O.far),O.layers.mask=$.layers.mask|6,R.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;const zt=$.parent,yt=O.cameras;Nt(O,zt);for(let qt=0;qt<yt.length;qt++)Nt(yt[qt],zt);yt.length===2?nt(O,R,P):O.projectionMatrix.copy(R.projectionMatrix),b===null&&$.isPerspectiveCamera&&(b={camera:$,fov:$.fov,zoom:$.zoom}),st($,O,zt)};function st($,j,bt){bt===null?$.matrix.copy(j.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(j.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ir*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return d[$]};let Ft=null;function te($,j){if(u=j.getViewerPose(l||a),g=j,u!==null){const bt=u.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let zt=!1;bt.length!==O.cameras.length&&(O.cameras.length=0,zt=!0);for(let Kt=0;Kt<bt.length;Kt++){const ae=bt[Kt];let _e=null;if(p!==null)_e=p.getViewport(ae);else{const ye=f.getViewSubImage(h,ae);_e=ye.viewport,Kt===0&&(t.setRenderTargetTextures(_,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(_))}let ee=D[Kt];ee===void 0&&(ee=new mn,ee.layers.enable(Kt),ee.viewport=new Te,D[Kt]=ee),ee.matrix.fromArray(ae.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(_e.x,_e.y,_e.width,_e.height),Kt===0&&(O.matrix.copy(ee.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),zt===!0&&O.cameras.push(ee)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const Kt=f.getDepthInformation(bt[0]);Kt&&Kt.isValid&&Kt.texture&&m.init(Kt,s.renderState)}if(yt&&yt.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let Kt=0;Kt<bt.length;Kt++){const ae=bt[Kt].camera;if(ae){let _e=d[ae];_e||(_e=new Pu,d[ae]=_e);const ee=f.getCameraImage(ae);_e.sourceTexture=ee}}}}for(let bt=0;bt<E.length;bt++){const zt=y[bt],yt=E[bt];zt!==null&&yt!==void 0&&yt.update(zt,j,l||a)}Ft&&Ft($,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const ie=new Wu;ie.setAnimationLoop(te),this.setAnimationLoop=function($){Ft=$},this.dispose=function(){}}}const Cx=new jt,Ju=new kt;Ju.set(-1,0,0,0,1,0,0,0,1);function Px(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,ku(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,T,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,v,T):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===an&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===an&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=t.get(d),T=v.envMap,_=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ju),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Lx(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,E){const y=E.program;i.uniformBlockBinding(_,y)}function l(_,E){let y=s[_.id];y===void 0&&(m(_),y=u(_),s[_.id]=y,_.addEventListener("dispose",v));const A=E.program;i.updateUBOMapping(_,A);const M=t.render.frame;r[_.id]!==M&&(h(_),r[_.id]=M)}function u(_){const E=f();_.__bindingPointIndex=E;const y=n.createBuffer(),A=_.__size,M=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const E=s[_.id],y=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let M=0,b=y.length;M<b;M++){const R=y[M];if(Array.isArray(R))for(let P=0,D=R.length;P<D;P++)p(R[P],M,P,A);else p(R,M,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,E,y,A){if(x(_,E,y,A)===!0){const M=_.__offset,b=_.value;if(Array.isArray(b)){let R=0;for(let P=0;P<b.length;P++){const D=b[P],O=d(D);g(D,_.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,_.__data)}}function g(_,E,y){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,y)}function x(_,E,y,A){const M=_.value,b=E+"_"+y;if(A[b]===void 0)return typeof M=="number"||typeof M=="boolean"?A[b]=M:ArrayBuffer.isView(M)?A[b]=M.slice():A[b]=M.clone(),!0;{const R=A[b];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return A[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function m(_){const E=_.uniforms;let y=0;const A=16;for(let b=0,R=E.length;b<R;b++){const P=Array.isArray(E[b])?E[b]:[E[b]];for(let D=0,O=P.length;D<O;D++){const I=P[D],B=Array.isArray(I.value)?I.value:[I.value];for(let X=0,V=B.length;X<V;X++){const tt=B[X],Y=d(tt),et=y%A,nt=et%Y.boundary,Nt=et+nt;y+=nt,Nt!==0&&A-Nt<Y.storage&&(y+=A-Nt),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=Y.storage}}}const M=y%A;return M>0&&(y+=A-M),_.__size=y,_.__cache={},this}function d(_){const E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",_),E}function v(_){const E=_.target;E.removeEventListener("dispose",v);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function T(){for(const _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}const Dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function Ix(){return zn===null&&(zn=new wu(Dx,16,16,Bi,un),zn.name="DFG_LUT",zn.minFilter=Qe,zn.magFilter=Qe,zn.wrapS=ni,zn.wrapT=ni,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class Nx{constructor(t={}){const{canvas:e=td(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=gn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=p,m=new Set([Ul,Nl,Il]),d=new Set([gn,qn,tr,er,Pl,Ll]),v=new Uint32Array(4),T=new Int32Array(4),_=new L;let E=null,y=null;const A=[],M=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,D=null,O=null,I=null,B=null;this._outputColorSpace=Se;let X=0,V=0,tt=null,Y=-1,et=null;const nt=new Te,Nt=new Te;let st=null;const Ft=new vt(0);let te=0,ie=e.width,$=e.height,j=1,bt=null,zt=null;const yt=new Te(0,0,ie,$),qt=new Te(0,0,ie,$);let Fe=!1;const Kt=new Hl;let ae=!1,_e=!1;const ee=new jt,ye=new L,Ve=new Te,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function De(){return tt===null?j:1}let F=i;function $e(w,N){return e.getContext(w,N)}let fe,C,S,z,G,q,at,lt,Z,Q,ct,Ct,dt,ht,Pt,Ut,Vt,U,ut,J,ft,_t,it;try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sl}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Tn,!1),F===null){const N="webgl2";if(F=$e(N,w),F===null)throw $e(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(w){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),re("WebGLRenderer: "+w.message),w}function It(){fe=new Ig(F),fe.init(),ft=new Ex(F,fe),C=new bg(F,fe,t,ft),S=new Sx(F,fe),C.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),O=F.createFramebuffer(),I=F.createFramebuffer(),B=F.createFramebuffer(),z=new Fg(F),G=new lx,q=new bx(F,fe,S,G,C,ft,z),at=new Dg(R),lt=new Bp(F),_t=new yg(F,lt),Z=new Ng(F,lt,z,_t),Q=new Bg(F,Z,lt,_t,z),U=new Og(F,C,q),Pt=new Eg(G),ct=new ox(R,at,fe,C,_t,Pt),Ct=new Px(R,G),dt=new hx,ht=new gx(fe),Vt=new Mg(R,at,S,Q,g,c),Ut=new yx(R,Q,C),it=new Lx(F,z,C,S),ut=new Sg(F,fe,z),J=new Ug(F,fe,z),z.programs=ct.programs,R.capabilities=C,R.extensions=fe,R.properties=G,R.renderLists=dt,R.shadowMap=Ut,R.state=S,R.info=z}x!==gn&&(b=new kg(x,e.width,e.height,o,s,r));const At=new Rx(R,F);this.xr=At,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(ie,$,!1))},this.getSize=function(w){return w.set(ie,$)},this.setSize=function(w,N,W=!0){if(At.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=w,$=N,e.width=Math.floor(w*j),e.height=Math.floor(N*j),W===!0&&(e.style.width=w+"px",e.style.height=N+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(ie*j,$*j).floor()},this.setDrawingBufferSize=function(w,N,W){ie=w,$=N,j=W,e.width=Math.floor(w*W),e.height=Math.floor(N*W),this.setViewport(0,0,w,N)},this.setEffects=function(w){if(x===gn){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let N=0;N<w.length;N++)if(w[N].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(nt)},this.getViewport=function(w){return w.copy(yt)},this.setViewport=function(w,N,W,k){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,N,W,k),S.viewport(nt.copy(yt).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(qt)},this.setScissor=function(w,N,W,k){w.isVector4?qt.set(w.x,w.y,w.z,w.w):qt.set(w,N,W,k),S.scissor(Nt.copy(qt).multiplyScalar(j).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(w){S.setScissorTest(Fe=w)},this.setOpaqueSort=function(w){bt=w},this.setTransparentSort=function(w){zt=w},this.getClearColor=function(w){return w.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,W=!0){let k=0;if(w){let H=!1;if(tt!==null){const gt=tt.texture.format;H=m.has(gt)}if(H){const gt=tt.texture.type,St=d.has(gt),mt=Vt.getClearColor(),Et=Vt.getClearAlpha(),Rt=mt.r,Xt=mt.g,Jt=mt.b;St?(v[0]=Rt,v[1]=Xt,v[2]=Jt,v[3]=Et,F.clearBufferuiv(F.COLOR,0,v)):(T[0]=Rt,T[1]=Xt,T[2]=Jt,T[3]=Et,F.clearBufferiv(F.COLOR,0,T))}else k|=F.COLOR_BUFFER_BIT}N&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),Vt.dispose(),dt.dispose(),ht.dispose(),G.dispose(),at.dispose(),Q.dispose(),_t.dispose(),it.dispose(),ct.dispose(),At.dispose(),At.removeEventListener("sessionstart",gc),At.removeEventListener("sessionend",_c),bi.stop()};function xe(w){w.preventDefault(),Pc("WebGLRenderer: Context Lost."),P=!0}function ce(){Pc("WebGLRenderer: Context Restored."),P=!1;const w=z.autoReset,N=Ut.enabled,W=Ut.autoUpdate,k=Ut.needsUpdate,H=Ut.type;It(),z.autoReset=w,Ut.enabled=N,Ut.autoUpdate=W,Ut.needsUpdate=k,Ut.type=H}function Tn(w){re("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Fn(w){const N=w.target;N.removeEventListener("dispose",Fn),ff(N)}function ff(w){df(w),G.remove(w)}function df(w){const N=G.get(w).programs;N!==void 0&&(N.forEach(function(W){ct.releaseProgram(W)}),w.isShaderMaterial&&ct.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,W,k,H,gt){N===null&&(N=cn);const St=H.isMesh&&H.matrixWorld.determinantAffine()<0,mt=gf(w,N,W,k,H);S.setMaterial(k,St);let Et=W.index,Rt=1;if(k.wireframe===!0){if(Et=Z.getWireframeAttribute(W),Et===void 0)return;Rt=2}const Xt=W.drawRange,Jt=W.attributes.position;let Tt=Xt.start*Rt,he=(Xt.start+Xt.count)*Rt;gt!==null&&(Tt=Math.max(Tt,gt.start*Rt),he=Math.min(he,(gt.start+gt.count)*Rt)),Et!==null?(Tt=Math.max(Tt,0),he=Math.min(he,Et.count)):Jt!=null&&(Tt=Math.max(Tt,0),he=Math.min(he,Jt.count));const Ie=he-Tt;if(Ie<0||Ie===1/0)return;_t.setup(H,k,mt,W,Et);let Me,ge=ut;if(Et!==null&&(Me=lt.get(Et),ge=J,ge.setIndex(Me)),H.isMesh)k.wireframe===!0?(S.setLineWidth(k.wireframeLinewidth*De()),ge.setMode(F.LINES)):ge.setMode(F.TRIANGLES);else if(H.isLine){let Ze=k.linewidth;Ze===void 0&&(Ze=1),S.setLineWidth(Ze*De()),H.isLineSegments?ge.setMode(F.LINES):H.isLineLoop?ge.setMode(F.LINE_LOOP):ge.setMode(F.LINE_STRIP)}else H.isPoints?ge.setMode(F.POINTS):H.isSprite&&ge.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))ge.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ze=H._multiDrawStarts,Mt=H._multiDrawCounts,en=H._multiDrawCount,se=Et?lt.get(Et).bytesPerElement:1,_n=G.get(k).currentProgram.getUniforms();for(let On=0;On<en;On++)_n.setValue(F,"_gl_DrawID",On),ge.render(Ze[On]/se,Mt[On])}else if(H.isInstancedMesh)ge.renderInstances(Tt,Ie,H.count);else if(W.isInstancedBufferGeometry){const Ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Mt=Math.min(W.instanceCount,Ze);ge.renderInstances(Tt,Ie,Mt)}else ge.render(Tt,Ie)};function mc(w,N,W,k){D!==null&&w.isNodeMaterial&&D.setObject(k,w),ae===!0&&Pt.setState(w,W,!1),w.transparent===!0&&w.side===ke&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,Mr(w,N,k),w.side=Ui,w.needsUpdate=!0,Mr(w,N,k),w.side=ke):Mr(w,N,k)}this.compile=function(w,N,W=null){W===null&&(W=w),D!==null&&D.renderStart(w,N,W),y=ht.get(W),y.init(N),M.push(y),W.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),w!==W&&w.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),y.setupLights(),D!==null&&D.updateLights(y.state.lightsArray),_e=this.localClippingEnabled,ae=Pt.init(this.clippingPlanes,_e),ae===!0&&Pt.setGlobalState(this.clippingPlanes,N),D!==null&&Ut.render(y.state.shadowsArray,W,N);const k=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const gt=H.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){const mt=gt[St];mc(mt,W,N,H),k.add(mt)}else mc(gt,W,N,H),k.add(gt)}),y=M.pop(),D!==null&&D.renderEnd(),k},this.compileAsync=function(w,N,W=null){const k=this.compile(w,N,W);return new Promise(H=>{function gt(){if(k.forEach(function(St){const Et=G.get(St).currentProgram;(Et===void 0||Et.isReady())&&k.delete(St)}),k.size===0){H(w);return}setTimeout(gt,10)}fe.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ba=null;function pf(w){Ba&&Ba(w)}function gc(){bi.stop()}function _c(){bi.start()}const bi=new Wu;bi.setAnimationLoop(pf),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(w){Ba=w,At.setAnimationLoop(w),w===null?bi.stop():bi.start()},At.addEventListener("sessionstart",gc),At.addEventListener("sessionend",_c),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(w,N);const W=At.enabled===!0&&At.isPresenting===!0,k=b!==null&&(tt===null||W)&&b.begin(R,tt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(N),N=At.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,N,tt),y=ht.get(w,M.length),y.init(N),y.state.textureUnits=q.getTextureUnits(),M.push(y),ee.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Kt.setFromProjectionMatrix(ee,Gn,N.reversedDepth),_e=this.localClippingEnabled,ae=Pt.init(this.clippingPlanes,_e),E=dt.get(w,A.length),E.init(),A.push(E),At.enabled===!0&&At.isPresenting===!0){const St=R.xr.getDepthSensingMesh();St!==null&&za(St,N,-1/0,R.sortObjects)}za(w,N,0,R.sortObjects),E.finish(),D!==null&&D.updateLights(y.state.lightsArray),R.sortObjects===!0&&E.sort(bt,zt),be=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,be&&Vt.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Pt.beginShadows();const H=y.state.shadowsArray;if(Ut.render(H,w,N),ae===!0&&Pt.endShadows(),(k&&b.hasRenderPass())===!1){const St=E.opaque,mt=E.transmissive;if(y.setupLights(),N.isArrayCamera){const Et=N.cameras;if(mt.length>0)for(let Rt=0,Xt=Et.length;Rt<Xt;Rt++){const Jt=Et[Rt];vc(St,mt,w,Jt)}be&&Vt.render(w);for(let Rt=0,Xt=Et.length;Rt<Xt;Rt++){const Jt=Et[Rt];xc(E,w,Jt,Jt.viewport)}}else mt.length>0&&vc(St,mt,w,N),be&&Vt.render(w),xc(E,w,N)}tt!==null&&V===0&&(q.updateMultisampleRenderTarget(tt),q.updateRenderTargetMipmap(tt)),k&&b.end(R),w.isScene===!0&&w.onAfterRender(R,w,N),_t.resetDefaultState(),Y=-1,et=null,M.pop(),M.length>0?(y=M[M.length-1],q.setTextureUnits(y.state.textureUnits),ae===!0&&Pt.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,D!==null&&D.renderEnd()};function za(w,N,W,k){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLightProbeGrid)y.pushLightProbeGrid(w);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Kt)){k&&Ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const St=Q.update(w),mt=w.material;mt.visible&&E.push(w,St,mt,W,Ve.z,null,N)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Kt))){const St=Q.update(w),mt=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ve.copy(w.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ve.copy(St.boundingSphere.center)),Ve.applyMatrix4(w.matrixWorld).applyMatrix4(ee)),Array.isArray(mt)){const Et=St.groups;for(let Rt=0,Xt=Et.length;Rt<Xt;Rt++){const Jt=Et[Rt],Tt=mt[Jt.materialIndex];Tt&&Tt.visible&&E.push(w,St,Tt,W,Ve.z,Jt,N)}}else mt.visible&&E.push(w,St,mt,W,Ve.z,null,N)}}const gt=w.children;for(let St=0,mt=gt.length;St<mt;St++)za(gt[St],N,W,k)}function xc(w,N,W,k){const{opaque:H,transmissive:gt,transparent:St}=w;y.setupLightsView(W),ae===!0&&Pt.setGlobalState(R.clippingPlanes,W),k&&S.viewport(nt.copy(k)),H.length>0&&vr(H,N,W),gt.length>0&&vr(gt,N,W),St.length>0&&vr(St,N,W),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function vc(w,N,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[k.id]===void 0){const Tt=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[k.id]=new on(1,1,{generateMipmaps:!0,type:Tt?un:gn,minFilter:Ii,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}const gt=y.state.transmissionRenderTarget[k.id],St=k.viewport||nt;gt.setSize(St.z*R.transmissionResolutionScale,St.w*R.transmissionResolutionScale);const mt=R.getRenderTarget(),Et=R.getActiveCubeFace(),Rt=R.getActiveMipmapLevel();R.setRenderTarget(gt),R.getClearColor(Ft),te=R.getClearAlpha(),te<1&&R.setClearColor(16777215,.5),R.clear(),be&&Vt.render(W);const Xt=R.toneMapping;R.toneMapping=Wn;const Jt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),y.setupLightsView(k),ae===!0&&Pt.setGlobalState(R.clippingPlanes,k),vr(w,W,k),q.updateMultisampleRenderTarget(gt),q.updateRenderTargetMipmap(gt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let he=0,Ie=N.length;he<Ie;he++){const Me=N[he],{object:ge,geometry:Ze,material:Mt,group:en}=Me;if(Mt.side===ke&&ge.layers.test(k.layers)){const se=Mt.side;Mt.side=an,Mt.needsUpdate=!0,Mc(ge,W,k,Ze,Mt,en),Mt.side=se,Mt.needsUpdate=!0,Tt=!0}}Tt===!0&&(q.updateMultisampleRenderTarget(gt),q.updateRenderTargetMipmap(gt))}R.setRenderTarget(mt,Et,Rt),R.setClearColor(Ft,te),Jt!==void 0&&(k.viewport=Jt),R.toneMapping=Xt}function vr(w,N,W){const k=N.isScene===!0?N.overrideMaterial:null;for(let H=0,gt=w.length;H<gt;H++){const St=w[H],{object:mt,geometry:Et,group:Rt}=St;let Xt=St.material;Xt.allowOverride===!0&&k!==null&&(Xt=k),mt.layers.test(W.layers)&&Mc(mt,N,W,Et,Xt,Rt)}}function Mc(w,N,W,k,H,gt){D!==null&&H.isNodeMaterial&&D.setObject(w,H),w.onBeforeRender(R,N,W,k,H,gt),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(R,N,W,k,w,gt),H.transparent===!0&&H.side===ke&&H.forceSinglePass===!1?(H.side=an,H.needsUpdate=!0,R.renderBufferDirect(W,N,k,H,w,gt),H.side=Ui,H.needsUpdate=!0,R.renderBufferDirect(W,N,k,H,w,gt),H.side=ke):R.renderBufferDirect(W,N,k,H,w,gt),w.onAfterRender(R,N,W,k,H,gt)}function Mr(w,N,W){N.isScene!==!0&&(N=cn);const k=G.get(w),H=y.state.lights,gt=y.state.shadowsArray,St=H.state.version,mt=ct.getParameters(w,H.state,gt,N,W,y.state.lightProbeGridArray),Et=ct.getProgramCacheKey(mt);let Rt=k.programs;k.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;const Xt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;k.envMap=at.get(w.envMap||k.environment,Xt),k.envMapRotation=k.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Rt===void 0&&(w.addEventListener("dispose",Fn),Rt=new Map,k.programs=Rt);let Jt=Rt.get(Et);if(Jt!==void 0){if(k.currentProgram===Jt&&k.lightsStateVersion===St)return Sc(w,mt),Jt}else mt.uniforms=ct.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,W,mt),w.onBeforeCompile(mt,R),Jt=ct.acquireProgram(mt,Et),Rt.set(Et,Jt),k.uniforms=mt.uniforms;const Tt=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=Pt.uniform),Sc(w,mt),k.needsLights=xf(w),k.lightsStateVersion=St,k.needsLights&&(Tt.ambientLightColor.value=H.state.ambient,Tt.lightProbe.value=H.state.probe,Tt.sunLights.value=H.state.sun,Tt.sunLightShadows.value=H.state.sunShadow,Tt.directionalLights.value=H.state.directional,Tt.directionalLightShadows.value=H.state.directionalShadow,Tt.spotLights.value=H.state.spot,Tt.spotLightShadows.value=H.state.spotShadow,Tt.rectAreaLights.value=H.state.rectArea,Tt.ltc_1.value=H.state.rectAreaLTC1,Tt.ltc_2.value=H.state.rectAreaLTC2,Tt.pointLights.value=H.state.point,Tt.pointLightShadows.value=H.state.pointShadow,Tt.hemisphereLights.value=H.state.hemi,Tt.sunShadowMatrix.value=H.state.sunShadowMatrix,Tt.sunShadowCascade.value=H.state.sunShadowCascade,Tt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Tt.spotLightMatrix.value=H.state.spotLightMatrix,Tt.spotLightMap.value=H.state.spotLightMap,Tt.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=y.state.lightProbeGridArray.length>0,k.currentProgram=Jt,k.uniformsList=null,Jt}function yc(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=aa.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Sc(w,N){const W=G.get(w);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function mf(w,N){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(N.matrixWorld);for(let W=0,k=w.length;W<k;W++){const H=w[W];if(H.texture!==null&&H.boundingBox.containsPoint(_))return H}return null}function gf(w,N,W,k,H){N.isScene!==!0&&(N=cn),q.resetTextureUnits();const gt=N.fog,St=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,mt=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ne.workingColorSpace,Et=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Rt=at.get(k.envMap||St,Et),Xt=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Jt=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Tt=!!W.morphAttributes.position,he=!!W.morphAttributes.normal,Ie=!!W.morphAttributes.color;let Me=Wn;k.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Me=R.toneMapping);const ge=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ze=ge!==void 0?ge.length:0,Mt=G.get(k),en=y.state.lights;if(ae===!0&&(_e===!0||w!==et)){const ve=w===et&&k.id===Y;Pt.setState(k,w,ve)}let se=!1;k.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==en.state.version||Mt.outputColorSpace!==mt||H.isBatchedMesh&&Mt.batching===!1||!H.isBatchedMesh&&Mt.batching===!0||H.isBatchedMesh&&Mt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Mt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Mt.instancing===!1||!H.isInstancedMesh&&Mt.instancing===!0||H.isSkinnedMesh&&Mt.skinning===!1||!H.isSkinnedMesh&&Mt.skinning===!0||H.isInstancedMesh&&Mt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Mt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Mt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Mt.instancingMorph===!1&&H.morphTexture!==null||Mt.envMap!==Rt||k.fog===!0&&Mt.fog!==gt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Pt.numPlanes||Mt.numIntersection!==Pt.numIntersection)||Mt.vertexAlphas!==Xt||Mt.vertexTangents!==Jt||Mt.morphTargets!==Tt||Mt.morphNormals!==he||Mt.morphColors!==Ie||Mt.toneMapping!==Me||Mt.morphTargetsCount!==Ze||!!Mt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,Mt.__version=k.version);let _n=Mt.currentProgram;se===!0&&(_n=Mr(k,N,H),D&&k.isNodeMaterial&&D.onUpdateProgram(k,_n,Mt));let On=!1,ri=!1,Yi=!1;const pe=_n.getUniforms(),Ce=Mt.uniforms;if(S.useProgram(_n.program)&&(On=!0,ri=!0,Yi=!0),k.id!==Y&&(Y=k.id,ri=!0),Mt.needsLights){const ve=mf(y.state.lightProbeGridArray,H);Mt.lightProbeGrid!==ve&&(Mt.lightProbeGrid=ve,ri=!0)}if(On||et!==w){S.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),pe.setValue(F,"projectionMatrix",w.projectionMatrix),pe.setValue(F,"viewMatrix",w.matrixWorldInverse);const oi=pe.map.cameraPosition;oi!==void 0&&oi.setValue(F,ye.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&pe.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pe.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),et!==w&&(et=w,ri=!0,Yi=!0)}if(Mt.needsLights&&(en.state.sunShadowMap.length>0&&pe.setValue(F,"sunShadowMap",en.state.sunShadowMap,q),en.state.directionalShadowMap.length>0&&pe.setValue(F,"directionalShadowMap",en.state.directionalShadowMap,q),en.state.spotShadowMap.length>0&&pe.setValue(F,"spotShadowMap",en.state.spotShadowMap,q),en.state.pointShadowMap.length>0&&pe.setValue(F,"pointShadowMap",en.state.pointShadowMap,q)),H.isSkinnedMesh){pe.setOptional(F,H,"bindMatrix"),pe.setOptional(F,H,"bindMatrixInverse");const ve=H.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),pe.setValue(F,"boneTexture",ve.boneTexture,q))}H.isBatchedMesh&&(pe.setOptional(F,H,"batchingTexture"),pe.setValue(F,"batchingTexture",H._matricesTexture,q),pe.setOptional(F,H,"batchingIdTexture"),pe.setValue(F,"batchingIdTexture",H._indirectTexture,q),pe.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&pe.setValue(F,"batchingColorTexture",H._colorsTexture,q));const ai=W.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&U.update(H,W,_n),(ri||Mt.receiveShadow!==H.receiveShadow)&&(Mt.receiveShadow=H.receiveShadow,pe.setValue(F,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(Ce.envMapIntensity.value=N.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=Ix()),ri){if(pe.setValue(F,"toneMappingExposure",R.toneMappingExposure),Mt.needsLights&&_f(Ce,Yi),gt&&k.fog===!0&&Ct.refreshFogUniforms(Ce,gt),Ct.refreshMaterialUniforms(Ce,k,j,$,y.state.transmissionRenderTarget[w.id]),Mt.needsLights&&Mt.lightProbeGrid){const ve=Mt.lightProbeGrid;Ce.probesSH.value=ve.texture,Ce.probesMin.value.copy(ve.boundingBox.min),Ce.probesMax.value.copy(ve.boundingBox.max),Ce.probesResolution.value.copy(ve.resolution)}aa.upload(F,yc(Mt),Ce,q)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(aa.upload(F,yc(Mt),Ce,q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pe.setValue(F,"center",H.center),pe.setValue(F,"modelViewMatrix",H.modelViewMatrix),pe.setValue(F,"normalMatrix",H.normalMatrix),pe.setValue(F,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){const ve=k.uniformsGroups;for(let oi=0,qi=ve.length;oi<qi;oi++){const Ec=ve[oi];it.update(Ec,_n),it.bind(Ec,_n)}}return _n}function _f(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.sunLights.needsUpdate=N,w.sunLightShadows.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function xf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(w,N,W){const k=G.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(w.texture).__webglTexture=N,G.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const W=G.get(w);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,W=0){tt=w,X=N,V=W;let k=null,H=!1,gt=!1;if(w){const mt=G.get(w);if(mt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(F.FRAMEBUFFER,mt.__webglFramebuffer),nt.copy(w.viewport),Nt.copy(w.scissor),st=w.scissorTest,S.viewport(nt),S.scissor(Nt),S.setScissorTest(st),Y=-1;return}else if(mt.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(mt.__hasExternalTextures)q.rebindTextures(w,G.get(w.texture).__webglTexture,G.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xt=w.depthTexture;if(mt.__boundDepthTexture!==Xt){if(Xt!==null&&G.has(Xt)&&(w.width!==Xt.image.width||w.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}const Et=w.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(gt=!0);const Rt=G.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Rt[N])?k=Rt[N][W]:k=Rt[N],H=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?k=G.get(w).__webglMultisampledFramebuffer:Array.isArray(Rt)?k=Rt[W]:k=Rt,nt.copy(w.viewport),Nt.copy(w.scissor),st=w.scissorTest}else nt.copy(yt).multiplyScalar(j).floor(),Nt.copy(qt).multiplyScalar(j).floor(),st=Fe;if(W!==0&&(k=O),S.bindFramebuffer(F.FRAMEBUFFER,k)&&S.drawBuffers(w,k),S.viewport(nt),S.scissor(Nt),S.setScissorTest(st),H){const mt=G.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,W)}else if(gt){const mt=N;for(let Et=0;Et<w.textures.length;Et++){const Rt=G.get(w.textures[Et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Et,Rt.__webglTexture,W,mt)}}else if(w!==null&&W!==0){const mt=G.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mt.__webglTexture,W)}Y=-1};function bc(w){const N=G.get(w);return(N.__readFormat!==w.format||N.__readType!==w.type)&&(N.__readFormat=w.format,N.__readType=w.type,N.__formatReadable=C.textureFormatReadable(w.format),N.__typeReadable=C.textureTypeReadable(w.type)),N}this.readRenderTargetPixels=function(w,N,W,k,H,gt,St,mt=0){if(!(w&&w.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){S.bindFramebuffer(F.FRAMEBUFFER,Et);try{const Rt=w.textures[mt],Xt=Rt.format,Jt=Rt.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+mt);const Tt=bc(Rt);if(Tt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-k&&W>=0&&W<=w.height-H&&F.readPixels(N,W,k,H,ft.convert(Xt),ft.convert(Jt),gt)}finally{const Rt=tt!==null?G.get(tt).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(w,N,W,k,H,gt,St,mt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(N>=0&&N<=w.width-k&&W>=0&&W<=w.height-H){S.bindFramebuffer(F.FRAMEBUFFER,Et);const Rt=w.textures[mt],Xt=Rt.format,Jt=Rt.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+mt);const Tt=bc(Rt);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,he),F.bufferData(F.PIXEL_PACK_BUFFER,gt.byteLength,F.STREAM_READ),F.readPixels(N,W,k,H,ft.convert(Xt),ft.convert(Jt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Ie=tt!==null?G.get(tt).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,Ie);const Me=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ed(F,Me,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,he),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,gt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(he),F.deleteSync(Me),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,W=0){const k=Math.pow(2,-W),H=Math.floor(w.image.width*k),gt=Math.floor(w.image.height*k),St=N!==null?N.x:0,mt=N!==null?N.y:0;q.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,St,mt,H,gt),S.unbindTexture()},this.copyTextureToTexture=function(w,N,W=null,k=null,H=0,gt=0){let St,mt,Et,Rt,Xt,Jt,Tt,he,Ie;const Me=w.isCompressedTexture?w.mipmaps[gt]:w.image;if(W!==null)St=W.max.x-W.min.x,mt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,Rt=W.min.x,Xt=W.min.y,Jt=W.isBox3?W.min.z:0;else{const Ce=Math.pow(2,-H);St=Math.floor(Me.width*Ce),mt=Math.floor(Me.height*Ce),w.isDataArrayTexture?Et=Me.depth:w.isData3DTexture?Et=Math.floor(Me.depth*Ce):Et=1,Rt=0,Xt=0,Jt=0}k!==null?(Tt=k.x,he=k.y,Ie=k.z):(Tt=0,he=0,Ie=0);const ge=ft.convert(N.format),Ze=ft.convert(N.type);let Mt;N.isData3DTexture?(q.setTexture3D(N,0),Mt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(q.setTexture2DArray(N,0),Mt=F.TEXTURE_2D_ARRAY):(q.setTexture2D(N,0),Mt=F.TEXTURE_2D),S.activeTexture(F.TEXTURE0),S.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),S.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),S.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const en=S.getParameter(F.UNPACK_ROW_LENGTH),se=S.getParameter(F.UNPACK_IMAGE_HEIGHT),_n=S.getParameter(F.UNPACK_SKIP_PIXELS),On=S.getParameter(F.UNPACK_SKIP_ROWS),ri=S.getParameter(F.UNPACK_SKIP_IMAGES);S.pixelStorei(F.UNPACK_ROW_LENGTH,Me.width),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Me.height),S.pixelStorei(F.UNPACK_SKIP_PIXELS,Rt),S.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),S.pixelStorei(F.UNPACK_SKIP_IMAGES,Jt);const Yi=w.isDataArrayTexture||w.isData3DTexture,pe=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const Ce=G.get(w),ai=G.get(N),ve=G.get(Ce.__renderTarget),oi=G.get(ai.__renderTarget);S.bindFramebuffer(F.READ_FRAMEBUFFER,ve.__webglFramebuffer),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let qi=0;qi<Et;qi++)Yi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(w).__webglTexture,H,Jt+qi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(N).__webglTexture,gt,Ie+qi)),F.blitFramebuffer(Rt,Xt,St,mt,Tt,he,St,mt,F.DEPTH_BUFFER_BIT,F.NEAREST);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||G.has(w)){const Ce=G.get(w),ai=G.get(N);S.bindFramebuffer(F.READ_FRAMEBUFFER,I),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let ve=0;ve<Et;ve++)Yi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.__webglTexture,H,Jt+ve):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ce.__webglTexture,H),pe?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ai.__webglTexture,gt,Ie+ve):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ai.__webglTexture,gt),H!==0?F.blitFramebuffer(Rt,Xt,St,mt,Tt,he,St,mt,F.COLOR_BUFFER_BIT,F.NEAREST):pe?F.copyTexSubImage3D(Mt,gt,Tt,he,Ie+ve,Rt,Xt,St,mt):F.copyTexSubImage2D(Mt,gt,Tt,he,Rt,Xt,St,mt);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else pe?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Mt,gt,Tt,he,Ie,St,mt,Et,ge,Ze,Me.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,gt,Tt,he,Ie,St,mt,Et,ge,Me.data):F.texSubImage3D(Mt,gt,Tt,he,Ie,St,mt,Et,ge,Ze,Me):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,gt,Tt,he,St,mt,ge,Ze,Me.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,gt,Tt,he,Me.width,Me.height,ge,Me.data):F.texSubImage2D(F.TEXTURE_2D,gt,Tt,he,St,mt,ge,Ze,Me);S.pixelStorei(F.UNPACK_ROW_LENGTH,en),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,se),S.pixelStorei(F.UNPACK_SKIP_PIXELS,_n),S.pixelStorei(F.UNPACK_SKIP_ROWS,On),S.pixelStorei(F.UNPACK_SKIP_IMAGES,ri),gt===0&&N.generateMipmaps&&F.generateMipmap(Mt),S.unbindTexture()},this.initRenderTarget=function(w){G.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),S.unbindTexture()},this.resetState=function(){X=0,V=0,tt=null,S.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}const zh={type:"change"},$l={type:"start"},Qu={type:"end"},Kr=new dr,kh=new ei,Ux=Math.cos(70*Ra.DEG2RAD),Oe=new L,hn=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yo=1e-6;class Fx extends Fp{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new In,this._lastTargetPosition=new L,this._quat=new In().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mh,this._sphericalDelta=new mh,this._scale=1,this._panOffset=new L,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new L,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bx.bind(this),this._onPointerDown=Ox.bind(this),this._onPointerUp=zx.bind(this),this._onContextMenu=Yx.bind(this),this._onMouseWheel=Gx.bind(this),this._onKeyDown=Vx.bind(this),this._onTouchStart=Wx.bind(this),this._onTouchMove=Xx.bind(this),this._onMouseDown=kx.bind(this),this._onMouseMove=Hx.bind(this),this._interceptControlDown=qx.bind(this),this._interceptControlUp=$x.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=de.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zh),this.update(),this.state=de.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Oe.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Kr.origin.copy(this.object.position),Kr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kr.direction))<Ux?this.object.lookAt(this.target):(kh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kr.intersectPlane(kh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>yo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yo||this._lastTargetPosition.distanceToSquared(this.target)>yo?(this.dispatchEvent(zh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Oe.copy(s).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ox(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Bx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function zx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qu),this.state=de.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function kx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=de.DOLLY;break;case ds.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}break;case ds.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent($l)}function Hx(n){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Gx(n){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(n.preventDefault(),this.dispatchEvent($l),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Qu))}function Vx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Wx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=de.TOUCH_ROTATE;break;case us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=de.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent($l)}function Xx(n){switch(this._trackPointer(n),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=de.NONE}}function Yx(n){this.enabled!==!1&&n.preventDefault()}function qx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $x(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Zl extends Le{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new rt(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}}const ls=new L,Hh=new jt,Gh=new jt,Vh=new L,Wh=new L;class Zx{constructor(t={}){const e=this;let i,s,r,a;const o={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.sortObjects=!0,this.getSize=function(){return{width:i,height:s}},this.render=function(g,x){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Hh.copy(x.matrixWorldInverse),Gh.multiplyMatrices(x.projectionMatrix,Hh),u(g,g,x),this.sortObjects&&p(g)},this.setSize=function(g,x){i=g,s=x,r=i/2,a=s/2,c.style.width=g+"px",c.style.height=x+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let x=0,m=g.children.length;x<m;x++)l(g.children[x])}function u(g,x,m){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){ls.setFromMatrixPosition(g.matrixWorld),ls.applyMatrix4(Gh);const d=ls.z>=-1&&ls.z<=1&&g.layers.test(m.layers)===!0,v=g.element;if(v.style.display=d===!0?"":"none",d===!0){g.onBeforeRender(e,x,m);const _=100*g.center.x,E=100*g.center.y;v.style.transformOrigin=`${_}% ${E}%`;const y=-g.rotation2D,A=ls.x*r+r,M=-ls.y*a+a;v.style.transform=`translate(${-_}%, ${-E}%) translate(${A}px, ${M}px) rotate(${y}rad)`,v.parentNode!==c&&c.appendChild(v),g.onAfterRender(e,x,m)}const T={distanceToCameraSquared:f(m,g)};o.objects.set(g,T)}for(let d=0,v=g.children.length;d<v;d++)u(g.children[d],x,m)}function f(g,x){return Vh.setFromMatrixPosition(g.matrixWorld),Wh.setFromMatrixPosition(x.matrixWorld),Vh.distanceToSquared(Wh)}function h(g){const x=[];return g.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function p(g){const x=h(g).sort(function(d,v){if(d.renderOrder!==v.renderOrder)return v.renderOrder-d.renderOrder;const T=o.objects.get(d).distanceToCameraSquared,_=o.objects.get(v).distanceToCameraSquared;return T-_}),m=x.length;for(let d=0,v=x.length;d<v;d++)x[d].element.style.zIndex=m-d}}}const oa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class bs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Kx=new Pa(-1,1,1,-1,0,1);class Jx extends Re{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const Qx=new Jx;class Kl{constructor(t){this._mesh=new Ht(Qx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Kx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ju extends bs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=lr.clone(t.uniforms),this.material=new Xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Kl(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Xh extends bs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class jx extends bs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class tv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new rt);this._width=i.width,this._height=i.height,e=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ju(oa),this.copyPass.material.blending=Vn,this.timer=new Ip}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xh!==void 0&&(a instanceof Xh?i=!0:a instanceof jx&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ev extends bs{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new vt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const nv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ys extends bs{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new rt(t.x,t.y):new rt(256,256),this.clearColor=new vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,a,{type:un,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new on(r,a,{type:un,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new on(r,a,{type:un,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}const o=nv;this.highPassUniforms=lr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new rt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=lr.clone(oa.uniforms),this.blendMaterial=new Xe({uniforms:this.copyUniforms,vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader,premultipliedAlpha:!0,blending:Fi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new vt,this._oldClearAlpha=1,this._basic=new Qt,this._fsQuad=new Kl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new rt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=ys.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ys.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const s=[],r=[];for(let a=1;a<t;a+=2){const o=e[a],c=a+1<t?e[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Xe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ys.BlurDirectionX=new rt(1,0);ys.BlurDirectionY=new rt(0,1);const Jr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class iv extends bs{constructor(){super(),this.isOutputPass=!0,this.uniforms=lr.clone(Jr.uniforms),this.material=new Hu({name:Jr.name,uniforms:this.uniforms,vertexShader:Jr.vertexShader,fragmentShader:Jr.fragmentShader}),this._fsQuad=new Kl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===El?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Al?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===wl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Yh=new L,sv=new In,qh=new L;class rv extends Le{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}}const kn=new jt,av=new jt;class ov{constructor(t={}){const e=this;let i,s,r,a;const o={camera:{style:""},objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);const u=document.createElement("div");u.style.transformStyle="preserve-3d",l.appendChild(u),this.getSize=function(){return{width:i,height:s}},this.render=function(m,d){const v=d.projectionMatrix.elements[5]*a;d.view&&d.view.enabled?(l.style.transform=`translate( ${-d.view.offsetX*(i/d.view.width)}px, ${-d.view.offsetY*(s/d.view.height)}px )`,l.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):l.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let T,_;d.isOrthographicCamera&&(T=-(d.right+d.left)/2,_=(d.top+d.bottom)/2);const E=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,y=d.isOrthographicCamera?`scale( ${E} )scale(`+v+")translate("+f(T)+"px,"+f(_)+"px)"+h(d.matrixWorldInverse):`scale( ${E} )translateZ(`+v+"px)"+h(d.matrixWorldInverse),M=(d.isPerspectiveCamera?"perspective("+v+"px) ":"")+y+"translate("+r+"px,"+a+"px)";o.camera.style!==M&&(u.style.transform=M,o.camera.style=M),x(m,m,d)},this.setSize=function(m,d){i=m,s=d,r=i/2,a=s/2,c.style.width=m+"px",c.style.height=d+"px",l.style.width=m+"px",l.style.height=d+"px",u.style.width=m+"px",u.style.height=d+"px"};function f(m){return Math.abs(m)<1e-10?0:m}function h(m){const d=m.elements;return"matrix3d("+f(d[0])+","+f(-d[1])+","+f(d[2])+","+f(d[3])+","+f(d[4])+","+f(-d[5])+","+f(d[6])+","+f(d[7])+","+f(d[8])+","+f(-d[9])+","+f(d[10])+","+f(d[11])+","+f(d[12])+","+f(-d[13])+","+f(d[14])+","+f(d[15])+")"}function p(m){const d=m.elements;return"translate(-50%,-50%)"+("matrix3d("+f(d[0])+","+f(d[1])+","+f(d[2])+","+f(d[3])+","+f(-d[4])+","+f(-d[5])+","+f(-d[6])+","+f(-d[7])+","+f(d[8])+","+f(d[9])+","+f(d[10])+","+f(d[11])+","+f(d[12])+","+f(d[13])+","+f(d[14])+","+f(d[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let d=0,v=m.children.length;d<v;d++)g(m.children[d])}function x(m,d,v,T){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){const _=m.layers.test(v.layers)===!0,E=m.element;if(E.style.display=_===!0?"":"none",_===!0){m.onBeforeRender(e,d,v);let y;m.isCSS3DSprite?(kn.copy(v.matrixWorldInverse),kn.transpose(),m.rotation2D!==0&&kn.multiply(av.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(Yh,sv,qh),kn.setPosition(Yh),kn.scale(qh),kn.elements[3]=0,kn.elements[7]=0,kn.elements[11]=0,kn.elements[15]=1,y=p(kn)):y=p(m.matrixWorld);const A=o.objects.get(m);if(A===void 0||A.style!==y){E.style.transform=y;const M={style:y};o.objects.set(m,M)}E.parentNode!==u&&u.appendChild(E),m.onAfterRender(e,d,v)}}for(let _=0,E=m.children.length;_<E;_++)x(m.children[_],d,v)}}}const Jl={title:"Sidatreya's Office",subtitle:"Live view of your agents at work"},Es=[{id:"b1",name:"Server & Utilities",level:-1,label:"B1"},{id:"trading",name:"Trading Room",level:0,label:"01"},{id:"admin",name:"Admin Block",level:1,label:"02"},{id:"studio",name:"Creative Studio",level:2,label:"03"},{id:"property",name:"Property Management",level:3,label:"04"}],Cn=n=>({status:"idle",task:"Waiting for first check-in",tasks:[n.role],logs:[`${n.name} checked in`],...n}),Be=[Cn({id:"pro-trader",name:"Pro Trader",role:"Markets & trading research",color:"#34d399",floor:"trading",desk:{x:-1.6,z:-2.4},tasks:["Scanning NIFTY 50 for breakout setups","Watching BTC/USDT on the 15m chart","Reworking BTC and ASTER scenario charts"],logs:["NIFTY 50 tested resistance — flagged for review","BTC/USDT funding flipped positive","Added 3 notes to the trading KB"]}),Cn({id:"gk",name:"GK",role:"Coordinator",color:"#a78bfa",floor:"admin",desk:{x:1.4,z:1.6,wide:!0},tasks:["Coordinating the team and routing new requests","Preparing the morning summary for Sidatreya"],logs:['Assigned "market scan" to Pro Trader',"Re-prioritised the task queue","Handed a design brief to Furniture Designer"]}),Cn({id:"linkedin",name:"Linkedin",role:"Content & engagement",color:"#fbbf24",floor:"admin",desk:{x:-9.6,z:-3.2},tasks:["Drafting a post on India-first GTM","Replying to comments on the latest post"],logs:["Drafted a hook for the India-first GTM post","Replied to 6 comments on the latest post"]}),Cn({id:"whatsapp-manager",name:"Whatsapp Manager",role:"WhatsApp tasks & reminders",color:"#84cc16",floor:"admin",desk:{x:-4.7,z:-3.9},tasks:["Sorting new WhatsApp task requests","Sending reminder digests"],logs:["Logged 4 new tasks from WhatsApp","Sent the evening reminder digest"]}),Cn({id:"developer",name:"Developer",role:"Builds & integrations",color:"#fb923c",floor:"admin",desk:{x:4.7,z:-3.9},tasks:["Writing the build brief","Fixing a deployment issue"],logs:["Pushed a fix to main","Build brief is ready"]}),Cn({id:"developer-whatsapp",name:"Developer Whatsapp Manager",role:"WhatsApp task-manager development",color:"#ef4444",floor:"admin",desk:{x:9.7,z:-3.2},tasks:["Setting up the WhatsApp task-manager service","Testing message parsing"],logs:["Created the whatsapp-task-manager venv","Webhook test passed"]}),Cn({id:"grok-bot",name:"Grok Bot",role:"Architect — drafting, designing & rendering",color:"#38bdf8",floor:"studio",desk:{x:-10.2,z:-2.6},tasks:["Revising the site zoning diagram","Rendering the house elevations","Drafting the floor plan"],logs:["Produced a final zoning diagram","Rendered elevation option B","Updated the drafting set"]}),Cn({id:"furniture-designer",name:"Furniture Designer",role:"Product & furniture design",color:"#f472b6",floor:"studio",desk:{x:-3.6,z:-3.3},tasks:["Rendering design options for the study built-in","Sketching a walnut lounge chair"],logs:["Rendered walnut lounge chair v3","Exported moodboard: Japandi living room"]}),Cn({id:"landscape-designer",name:"Landscape Designer",role:"Landscape & garden design",color:"#14b8a6",floor:"studio",desk:{x:2,z:-3.3},tasks:["Planting plan for the front garden","Rendering the courtyard landscape"],logs:["Picked native shrubs for the boundary","Rendered courtyard option A"]}),Cn({id:"boq",name:"BOQ",role:"BOQ & quantities — the math/counting desk",color:"#d4a373",floor:"studio",desk:{x:7.6,z:-3.3},kind:"station",tasks:["Counting quantities for the house plan","Pricing the BOQ"],logs:["BOQ v1 totals updated","Steel quantities re-checked"]}),Cn({id:"6c94624b-cff0-445d-acf3-76a7780c90f3",name:"Property Manager",role:"Property & Land Intelligence — department head",color:"#d946ef",floor:"property",desk:{x:-11.6,z:-6.6},tasks:["Reviewing flagged deeds","Planning the property department floor"],logs:["Sent the floor brief to the architect","Reviewed 12 flagged parcels (example)"]})],lv=["Waiting for the next task","Standing by","No assigned task yet"],di=n=>n[Math.floor(Math.random()*n.length)];function cv({intervalMs:n=3200,historySize:t=60}={}){const e=new Set,i=[],s=new Map(Be.map(u=>[u.id,{status:u.status,task:u.task,progress:u.status==="working"?.35:0}]));let r=null;const a=u=>{i.push(u),i.length>t&&i.shift(),e.forEach(f=>f(u))},o=Date.now(),c=[["gk","Office opened — 5 agents online"],["pro-trader",di(Be[1].logs)],["gk",Be[0].logs[0]],["linkedin",di(Be[3].logs)],["grok-bot",di(Be[2].logs)],["furniture-designer",di(Be[4].logs)],["gk",Be[0].logs[2]]];c.forEach(([u,f],h)=>{i.push({ts:new Date(o-(c.length-h)*47e3),agentId:u,type:"log",message:f})});function l(){const u=di(Be),f=s.get(u.id),h=[...s.values()].filter(g=>g.status==="working").length,p=Math.random();if(f.status==="idle"&&(p<.45||h<1)){f.status="working",f.task=di(u.tasks),f.progress=.05,a({ts:new Date,agentId:u.id,type:"status",status:"working",task:f.task,message:`Started: ${f.task}`});return}if(f.status==="working"&&(f.progress>.9||p<.18&&h>1)){const g=f.task;f.status="idle",f.task=di(lv),f.progress=0,a({ts:new Date,agentId:u.id,type:"status",status:"idle",task:f.task,message:`Finished: ${g}`});return}f.status==="working"&&(f.progress=Math.min(1,f.progress+.15+Math.random()*.2)),a({ts:new Date,agentId:u.id,type:"log",message:di(u.logs)})}return{history:i,getState:u=>s.get(u),subscribe(u){return e.add(u),()=>e.delete(u)},start(){r||(r=setInterval(l,n))},stop(){clearInterval(r),r=null}}}const $h="Waiting for first check-in";function hv({url:n="./status.json",intervalMs:t=15e3}={}){const e=new Set,i=[],s=new Map(Be.map(f=>[f.id,{status:"idle",task:$h,progress:0,lastActive:null}])),r=new Set(Be.map(f=>f.id));let a=null,o=null;const c={history:i,updatedAt:null,error:null,getState:f=>s.get(f),subscribe(f){return e.add(f),()=>e.delete(f)},start(){a||(l(),a=setInterval(l,t),document.addEventListener("visibilitychange",()=>document.visibilityState==="visible"&&l()))},stop(){clearInterval(a),a=null},refresh:()=>l()};async function l(){try{const f=n.includes("?")?"&":"?",h=await fetch(`${n}${f}t=${Date.now()}`,{cache:"no-store"});if(!h.ok)throw new Error(`HTTP ${h.status}`);const p=await h.json();if(c.error=null,p.updatedAt===o){e.forEach(g=>g({type:"heartbeat"}));return}o=p.updatedAt,u(p),e.forEach(g=>g({type:"sync"}))}catch(f){c.error=String(f.message||f),console.warn("[office] status.json poll failed:",c.error),e.forEach(h=>h({type:"error",error:c.error}))}}function u(f){const h=f.updatedAt?new Date(f.updatedAt):null;c.updatedAt=h&&!isNaN(h)?h:null;for(const g of Array.isArray(f.agents)?f.agents:[]){if(!r.has(g.id))continue;const x=g.status==="working"?"working":"idle",m=Number(g.progress);s.set(g.id,{status:x,task:typeof g.task=="string"&&g.task.trim()?g.task:$h,progress:Number.isFinite(m)?Math.max(0,Math.min(1,m)):0,hasProgress:Number.isFinite(m),detail:typeof g.detail=="string"&&g.detail.trim()?g.detail.trim():null,source:g.source==="reported"?"reported":"inferred",reportedAt:g.reportedAt?new Date(g.reportedAt):null,lastActive:g.lastActive?new Date(g.lastActive):null})}const p=(Array.isArray(f.events)?f.events:[]).filter(g=>g&&r.has(g.agentId)&&g.text).map(g=>({ts:new Date(g.time),agentId:g.agentId,type:"log",message:String(g.text)})).filter(g=>!isNaN(g.ts)).sort((g,x)=>g.ts-x.ts).slice(-40);i.splice(0,i.length,...p)}return c}function Ia(n,t,e=[1,1]){const i=document.createElement("canvas");i.width=i.height=n,t(i.getContext("2d"),n);const s=new En(i);return s.colorSpace=Se,s.wrapS=s.wrapT=xs,s.repeat.set(...e),s.anisotropy=8,s}let Zh=12345;const Ee=()=>(Zh=Zh*16807%2147483647)/2147483647;function Kh(n="#6b3f24",t="#3e2213",e="#8a5532"){return Ia(512,(i,s)=>{i.fillStyle=n,i.fillRect(0,0,s,s);for(let r=0;r<140;r++){const a=Ee()*s,o=2+Ee()*6,c=.004+Ee()*.01;i.strokeStyle=Ee()<.5?t:e,i.globalAlpha=.08+Ee()*.22,i.lineWidth=.6+Ee()*2.2,i.beginPath();for(let l=0;l<=s;l+=8)i.lineTo(l,a+Math.sin(l*c+r)*o+Math.sin(l*c*3.1)*o*.3);i.stroke()}i.globalAlpha=1})}function uv(n){return Ia(1024,(t,e)=>{const i=t.createLinearGradient(0,0,e,e);i.addColorStop(0,"#1e1c3a"),i.addColorStop(1,"#191832"),t.fillStyle=i,t.fillRect(0,0,e,e);for(let s=0;s<2600;s++)t.fillStyle=`rgba(255,255,255,${Ee()*.035})`,t.fillRect(Ee()*e,Ee()*e,2,2);for(let s=0;s<26;s++){t.strokeStyle=Ee()<.7?"rgba(190,180,255,0.16)":"rgba(255,255,255,0.22)",t.lineWidth=.6+Ee()*1.8,t.beginPath();let r=Ee()*e,a=Ee()*e;t.moveTo(r,a);for(let o=0;o<9;o++)r+=(Ee()-.3)*160,a+=(Ee()-.5)*120,t.lineTo(r,a);t.stroke()}t.strokeStyle="rgba(8,8,20,0.75)",t.lineWidth=3;for(const s of[0,e/2])t.beginPath(),t.moveTo(s,0),t.lineTo(s,e),t.stroke(),t.beginPath(),t.moveTo(0,s),t.lineTo(e,s),t.stroke()},n)}function fv(){return Ia(512,(n,t)=>{n.fillStyle="#eceaf2",n.fillRect(0,0,t,t);for(let e=0;e<18;e++){n.strokeStyle=`rgba(120,115,150,${.1+Ee()*.2})`,n.lineWidth=.5+Ee()*1.5,n.beginPath();let i=Ee()*t,s=Ee()*t;n.moveTo(i,s);for(let r=0;r<7;r++)i+=(Ee()-.4)*120,s+=(Ee()-.5)*90,n.lineTo(i,s);n.stroke()}})}function Os(n,t=[4,4]){return Ia(256,(e,i)=>{e.fillStyle=n,e.fillRect(0,0,i,i);for(let s=0;s<i;s+=3)e.fillStyle=`rgba(0,0,0,${.05+Ee()*.05})`,e.fillRect(0,s,i,1);for(let s=0;s<i;s+=3)e.fillStyle=`rgba(255,255,255,${.02+Ee()*.04})`,e.fillRect(s,0,1,i)},t)}function dv(){const n=Kh(),t=Kh("#b08356","#7a5432","#cfa577");return{walnut:new ot({map:n,roughness:.42,metalness:0}),oak:new ot({map:t,roughness:.5}),floor:new ot({map:uv([7.5,4.5]),roughness:.34,metalness:.05,envMapIntensity:.8}),marbleWhite:new ot({map:fv(),roughness:.15,metalness:0}),plinth:new ot({color:1315627,roughness:.7}),bronze:new ot({color:3813448,roughness:.35,metalness:.85}),brass:new ot({color:13214247,roughness:.28,metalness:1}),blackMetal:new ot({color:1776420,roughness:.4,metalness:.7}),whiteMatte:new ot({color:15790070,roughness:.55}),ceramic:new ot({color:16052974,roughness:.22}),terracotta:new ot({color:11817770,roughness:.75}),graphite:new ot({color:1842218,roughness:.3,metalness:.6}),velvetPlum:new ot({map:Os("#4b2a6b"),roughness:.92}),velvetTeal:new ot({map:Os("#1f5560"),roughness:.92}),linen:new ot({map:Os("#d8cfc0"),roughness:.95}),leather:new ot({color:7027234,roughness:.45,metalness:.05}),rugIndigo:new ot({map:Os("#2b2a62",[8,8]),roughness:1}),rugSand:new ot({map:Os("#5a4b6e",[8,8]),roughness:1}),leaf:new ot({color:3112266,roughness:.55,side:ke}),leaf2:new ot({color:4168282,roughness:.55,side:ke}),glass:new cr({color:12569343,transparent:!0,opacity:.1,roughness:.05,metalness:0,envMapIntensity:.5,side:ke,depthWrite:!1})}}function pv(n){const t=document.createElement("canvas");t.width=1024,t.height=512;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#05051a"),i.addColorStop(.42,"#2a1658"),i.addColorStop(.5,"#c2416f"),i.addColorStop(.53,"#3a1d55"),i.addColorStop(1,"#0a0820"),e.fillStyle=i,e.fillRect(0,0,1024,512);const s=(c,l,u,f)=>{const h=e.createRadialGradient(c,l,0,c,l,u);h.addColorStop(0,f),h.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=h,e.fillRect(c-u,l-u,u*2,u*2)};s(330,225,22,"rgba(255,240,220,0.4)"),s(330,240,200,"rgba(255,140,100,0.22)"),s(800,300,160,"rgba(255,170,90,0.35)"),s(600,330,120,"rgba(255,120,200,0.25)");const r=new En(t);r.mapping=ea,r.colorSpace=Se;const a=new _l(n),o=a.fromEquirectangular(r).texture;return a.dispose(),o}const Qr=160,Bs=-1.8;function mv(n,t={}){const e=h=>new vt(h),i={uTime:{value:0},uMoon:{value:new L(-62,12.5,-152)},uHorizonY:{value:.4},cTop:{value:e("#05051a")},cMid:{value:e("#2a1658")},cHor:{value:e("#c2416f")},cGlow:{value:e("#ff8a5c")},cWater:{value:e("#060a22")},cWater2:{value:e("#1a1446")},cHaze:{value:e("#3a1d55")},cHi:{value:e("#8b5cf6")}},s="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",r=new Ht(new fn(Qr,64,32),new Xe({side:an,depthWrite:!1,uniforms:i,vertexShader:s,fragmentShader:`
        uniform float uTime; uniform vec3 uMoon; uniform float uHorizonY;
        uniform vec3 cTop, cMid, cHor, cGlow, cHaze, cWater;
        varying vec3 vW;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        void main(){
          vec3 o = vec3(0.0, uHorizonY, 0.0);
          vec3 dir = normalize(vW - o);
          vec3 md = normalize(uMoon - o);
          float y = vW.y - uHorizonY;
          float az = max(dot(normalize(dir.xz), normalize(md.xz)), 0.0);
          vec3 c;
          if (y > 0.0) {
            float h = clamp(y / 32.0, 0.0, 1.0);
            c = mix(cHor, cMid, smoothstep(0.0, 0.12, h));
            c = mix(c, cTop, smoothstep(0.1, 0.65, h));
            c += cGlow * pow(az, 5.0) * exp(-h * 10.0) * 0.8;
            float m = dot(dir, md);
            c += vec3(1.0, 0.95, 0.86) * smoothstep(0.99962, 0.99972, m) * 1.05;
            c += vec3(1.0, 0.82, 0.9) * pow(max(m, 0.0), 2500.0) * 0.2 + cGlow * pow(max(m, 0.0), 60.0) * 0.14;
            vec2 sp = floor(vec2(atan(dir.z, dir.x) * 700.0, dir.y * 700.0));
            float s = hash(sp);
            float tw = 0.55 + 0.45 * sin(uTime * 1.7 + s * 60.0);
            c += vec3(step(0.9975, s) * smoothstep(0.04, 0.2, h) * tw * 0.85);
          } else {
            float d = clamp(-y / 2.2, 0.0, 1.0);
            c = mix(cHaze, cWater, d);
            float streak = pow(az, 2500.0) * (0.6 + 0.4 * sin(vW.y * 12.0 + uTime * 1.5));
            c += vec3(1.0, 0.85, 0.7) * streak * 0.45;
          }
          gl_FragColor = vec4(c, 1.0);
        }`}));r.position.y=Bs,r.renderOrder=-10,n.add(r);const a=new Ht((()=>{const h=new Uu;h.absarc(0,0,Qr-.6,0,Math.PI*2,!1);const p=new dl,g=t.hole||{x0:-17,x1:22,z0:-11,z1:11};return p.moveTo(g.x0,-g.z1),p.lineTo(g.x1,-g.z1),p.lineTo(g.x1,-g.z0),p.lineTo(g.x0,-g.z0),p.lineTo(g.x0,-g.z1),h.holes.push(p),new Yl(h,96)})(),new Xe({uniforms:{...i,uR:{value:Qr-.6}},vertexShader:s,fragmentShader:`
        uniform float uTime, uR; uniform vec3 uMoon; uniform vec3 cWater, cWater2, cHaze, cHi;
        varying vec3 vW;
        void main(){
          vec2 p = vW.xz; float t = uTime;
          float a1 = p.x * 0.35 + t * 0.7, a2 = p.y * 0.5 - t * 0.9, a3 = (p.x + p.y) * 1.3 + t * 1.4, a4 = p.x * 2.7 - p.y * 2.1 + t * 2.3;
          float n = sin(a1) + sin(a2) + 0.5 * sin(a3) + 0.3 * sin(a4);
          vec3 nrm = normalize(vec3(cos(a1) * 0.09 + cos(a3) * 0.08 + cos(a4) * 0.07, 1.0, cos(a2) * 0.12 + cos(a3) * 0.08 - cos(a4) * 0.05));
          vec3 V = normalize(vW - cameraPosition);
          vec3 Rf = reflect(V, nrm);
          vec3 L = normalize(uMoon - vW);
          float spec = pow(max(dot(Rf, L), 0.0), 90.0);
          float fres = pow(1.0 - max(dot(-V, nrm), 0.0), 3.0);
          vec3 c = mix(cWater, cWater2, fres);
          c += cHi * smoothstep(1.5, 2.3, n) * 0.10;
          c += vec3(1.0, 0.86, 0.72) * spec * 0.6;
          c = mix(c, cHaze, smoothstep(uR * 0.6, uR, length(p)));
          gl_FragColor = vec4(c, 1.0);
        }`}));a.rotation.x=-Math.PI/2,a.position.y=Bs,n.add(a);const o=[],c=[],l=[e("#ffd27a"),e("#ff9ec7"),e("#ffe9b0"),e("#9ad7ff")];for(let h=0;h<260;h++){const p=Ra.lerp(Math.PI*.95,Math.PI*1.32,Math.random()),g=Qr-1.2,x=Bs+6.5+Math.pow(Math.random(),2.5)*8;o.push(Math.cos(p)*g,x,Math.sin(p)*g);const m=l[Math.random()*l.length|0].clone().multiplyScalar(1.4+Math.random());c.push(m.r,m.g,m.b)}const u=new Re;u.setAttribute("position",new Zt(o,3)),u.setAttribute("color",new Zt(c,3)),n.add(new Gd(u,new Ru({size:2.2,sizeAttenuation:!1,vertexColors:!0,depthWrite:!1})));const f=[];for(let h=0;h<5;h++){const p=new Dt,g=new Ht(new Nn(.9,.18,.3),new Qt({color:657944})),x=new Ht(new fn(.09,8,6),new Qt({color:new vt(h%2?"#ff4d6d":"#ffe8a3").multiplyScalar(3)}));x.position.y=.35,p.add(g,x),p.scale.setScalar(2.2);const m=Math.PI*(1.05+h*.12),d=40+h*9;p.position.set(Math.cos(m)*d,Bs+.05,Math.sin(m)*d),p.userData={ang:m,rad:d,speed:.004+h*.0015,light:x},n.add(p),f.push(p)}return{update(h){i.uTime.value=h,f.forEach((p,g)=>{const x=p.userData.ang+h*p.userData.speed;p.position.x=Math.cos(x)*p.userData.rad,p.position.z=Math.sin(x)*p.userData.rad,p.position.y=Bs+.05+Math.sin(h*1.3+g)*.04,p.userData.light.visible=Math.sin(h*2.2+g*1.7)>-.6})}}}const Jh=["#ffb703","#fb8500","#ff006e","#c77dff","#3a86ff","#ffd166","#06d6a0"].map(n=>new vt(n));function So(n,t,e,i,s){const r=n.distanceTo(t),a=Math.max(2,Math.round(r/e)),o=[];for(let c=0;c<=a;c++){const l=c/a,u=n.clone().lerp(t,l),f=l*r%i/i;u.y-=Math.sin(f*Math.PI)*s,o.push(u)}return o}function gv(n){const t=[];function e(p){const g=p.flatMap(([_,E,y,A])=>So(_,E,.32,A||2.5,y)),x=new Zc(new fn(.055,8,6),new Qt({color:new vt(1,1,1).multiplyScalar(2.4)}),g.length),m=new jt,d=[];g.forEach((_,E)=>{m.makeTranslation(_.x,_.y,_.z),x.setMatrixAt(E,m);const y=Jh[E%Jh.length];d.push(y),x.setColorAt(E,y)}),n.add(x),p.forEach(([_,E,y,A])=>{const M=new Re().setFromPoints(So(_,E,.15,A||2.5,y));n.add(new Hd(M,new Au({color:3814246})))});let v=0;const T=new vt;t.push(_=>{if(!(_-v<.12)){v=_;for(let E=0;E<d.length;E++){const y=.35+.65*(.5+.5*Math.sin(_*2.4+E*1.7));x.setColorAt(E,T.copy(d[E]).multiplyScalar(y))}x.instanceColor.needsUpdate=!0}})}function i(p){const g=p.flatMap(([v,T,_,E])=>So(v,T,.085,E||1.25,_)),x=new Zc(new Xl(.06,0),new ot({roughness:.8,emissive:16742912,emissiveIntensity:.35}),g.length),m=new jt,d=[new vt("#ff9f1c"),new vt("#ffbf00"),new vt("#ff7b00")];g.forEach((v,T)=>{m.makeTranslation(v.x,v.y,v.z),x.setMatrixAt(T,m),x.setColorAt(T,d[Math.floor(T/3)%d.length])}),n.add(x)}const s=[];function r(p,g,x,m,d=1){const v=new Dt,T=new vt(m),_=new ot({color:T,emissive:T,emissiveIntensity:1.6,roughness:.6,side:ke}),E=new Ht(new _i(.34,.36,8,1,!0),_);E.position.y=.18;const y=new Ht(new _i(.34,.36,8,1,!0),_);y.rotation.x=Math.PI,y.position.y=-.18;const A=new Ht(new vi(.35,.35,.08,8),new ot({color:16765286,emissive:16758531,emissiveIntensity:.8}));v.add(E,y,A);for(let R=0;R<6;R++){const P=R/6*Math.PI*2,D=new Ht(new Nn(.02,.5,.02),_);D.position.set(Math.cos(P)*.12,-.6,Math.sin(P)*.12),v.add(D)}const M=7.2-g,b=new Ht(new vi(.008,.008,M,4),new Qt({color:5591162}));b.position.y=.36+M/2-.36,v.add(b),v.scale.setScalar(d),v.position.set(p,g,x),n.add(v),s.push(v)}t.push(p=>s.forEach((g,x)=>{g.rotation.y=p*.3+x,g.rotation.z=Math.sin(p*.8+x)*.04}));const a=[],o=new ot({color:12730636,roughness:.8,emissive:8138002,emissiveIntensity:.3}),c=new Qt({color:new vt(3.2,1.9,.5)}),l=new fn(.13,14,8,0,Math.PI*2,Math.PI/2,Math.PI/2),u=new _i(.035,.13,8);function f(p,g,x=0){const m=new Ht(l,o);m.scale.y=.55,m.position.set(p,x+.075,g);const d=new Ht(u,c);d.position.set(p,x+.13,g),n.add(m,d),a.push(d)}t.push(p=>a.forEach((g,x)=>{const m=.85+Math.sin(p*13+x*2.1)*.12+Math.sin(p*7.3+x)*.08;g.scale.set(1,m,1)}));function h(p,g,x,m=0){const v=document.createElement("canvas");v.width=v.height=512;const T=v.getContext("2d"),_=[["#ff006e","#ffbe0b","#3a86ff","#8338ec","#fb5607"],["#06d6a0","#ffd166","#ef476f","#118ab2","#f78c6b"],["#c77dff","#ff9e00","#00bbf9","#f15bb5","#fee440"]][m%3];T.translate(512/2,512/2);const E=[[.92,24,.09],[.74,16,.12],[.55,12,.13],[.36,8,.14]];T.fillStyle="rgba(255,255,255,0.9)",T.beginPath(),T.arc(0,0,512*.48,0,Math.PI*2),T.fill(),T.fillStyle=_[4],T.beginPath(),T.arc(0,0,512*.465,0,Math.PI*2),T.fill(),E.forEach(([R,P,D],O)=>{T.fillStyle=_[O%4],T.beginPath(),T.arc(0,0,512*.5*R,0,Math.PI*2),T.fill();for(let I=0;I<P;I++)T.save(),T.rotate(I/P*Math.PI*2+O*.2),T.fillStyle=_[(O+1)%4],T.beginPath(),T.ellipse(0,-512*.5*(R-D*.6),512*D*.18,512*D*.42,0,0,Math.PI*2),T.fill(),T.fillStyle="#ffffff",T.beginPath(),T.arc(0,-512*.5*(R-.02),4,0,Math.PI*2),T.fill(),T.restore()}),T.fillStyle="#ffffff",T.beginPath(),T.arc(0,0,512*.07,0,Math.PI*2),T.fill(),T.fillStyle=_[0],T.beginPath(),T.arc(0,0,512*.045,0,Math.PI*2),T.fill();const y=new En(v);y.colorSpace=Se;const A=new ot({map:y,transparent:!0,roughness:.9,emissive:16777215,emissiveMap:y,emissiveIntensity:.35}),M=new Ht(new Wi(x,64),A);M.rotation.x=-Math.PI/2,M.position.set(p,.011,g),M.receiveShadow=!0,n.add(M);const b=Math.round(x*5);for(let R=0;R<b;R++){const P=R/b*Math.PI*2;f(p+Math.cos(P)*(x+.28),g+Math.sin(P)*(x+.28))}}return{stringLights:e,garlands:i,lantern:r,diya:f,rangoli:h,update:p=>t.forEach(g=>g(p))}}const zs=new L;function vn(n,t,e,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;zs.copy(t),zs[i]=0,zs.normalize();const l=.5*a/(a+o),u=1-zs.angleTo(n)/c;return Math.sign(zs[e])===1?u*l:o/(a+o)+l+l*(1-u)}class Ql extends Nn{constructor(t=1,e=1,i=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new L,l=new L,u=new L(t,e,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,g=f.length/6,x=new L,m=.5/a;for(let d=0,v=0;d<f.length;d+=3,v+=2)switch(c.fromArray(f,d),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[d+0]=u.x*Math.sign(c.x)+l.x*r,f[d+1]=u.y*Math.sign(c.y)+l.y*r,f[d+2]=u.z*Math.sign(c.z)+l.z*r,h[d+0]=l.x,h[d+1]=l.y,h[d+2]=l.z,Math.floor(d/g)){case 0:x.set(1,0,0),p[v+0]=vn(x,l,"z","y",r,i),p[v+1]=1-vn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),p[v+0]=1-vn(x,l,"z","y",r,i),p[v+1]=1-vn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),p[v+0]=1-vn(x,l,"x","z",r,t),p[v+1]=vn(x,l,"z","x",r,i);break;case 3:x.set(0,-1,0),p[v+0]=1-vn(x,l,"x","z",r,t),p[v+1]=1-vn(x,l,"z","x",r,i);break;case 4:x.set(0,0,1),p[v+0]=1-vn(x,l,"x","y",r,t),p[v+1]=1-vn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),p[v+0]=vn(x,l,"x","y",r,t),p[v+1]=1-vn(x,l,"y","x",r,e);break}}static fromJSON(t){return new Ql(t.width,t.height,t.depth,t.segments,t.radius)}}const le=15,Ot=9,nn=7,Ws=7.6,Ye={M:null},me=(n,t=3)=>new Qt({color:new vt(n).multiplyScalar(t)});function Gt(n,t,{x:e=0,y:i=0,z:s=0,cast:r=!0,receive:a=!0}={}){const o=new Ht(n,t);return o.position.set(e,i,s),o.castShadow=r,o.receiveShadow=a,o}const K=(n,t,e,i,s)=>Gt(new Nn(n,t,e),i,s),wt=(n,t,e,i,s,r)=>Gt(new Ql(n,t,e,3,i),s,r),Lt=(n,t,e,i,s,r=24)=>Gt(new vi(n,t,e,r),i,s);function _v(n,t="rgba(0,0,0,0)"){const e=document.createElement("canvas");e.width=e.height=128;const i=e.getContext("2d"),s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,n),s.addColorStop(1,t),i.fillStyle=s,i.fillRect(0,0,128,128);const r=new En(e);return r.colorSpace=Se,r}function Mi(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new En(i);return s.colorSpace=Se,s.anisotropy=8,s}function Sn(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function yn(n,t,e,{pxPerUnit:i=200,emissive:s=.9,frame:r=!0}={}){const a=Mi(Math.round(n*i),Math.round(t*i),e),o=new Dt,c=new Ht(new $t(n,t),new Qt({map:a,color:new vt(s,s,s)}));return c.position.z=.03,o.add(c),r&&o.add(wt(n+.1,t+.1,.05,.02,Ye.M.graphite,{})),o}const bo=n=>String(n).padStart(2,"0"),Ma=n=>`${bo(n.getHours())}:${bo(n.getMinutes())}:${bo(n.getSeconds())}`;let xt;const xv=n=>xt=n;function ze(n,t,e,i=1,s=0){const r=new Dt;if(s===0){r.add(Lt(.34,.26,.6,xt.ceramic,{y:.3})),r.add(Lt(.31,.31,.03,new ot({color:2825492}),{y:.59}));for(let a=0;a<12;a++){const o=Gt(new _i(.06,1+Math.random()*.5,5),a%2?xt.leaf:xt.leaf2),c=a/12*Math.PI*2,l=.2+Math.random()*.45;o.position.set(Math.cos(c)*.1,1.05,Math.sin(c)*.1),o.rotation.set(Math.sin(c)*l,0,-Math.cos(c)*l),r.add(o)}}else{r.add(Lt(.36,.3,.55,xt.terracotta,{y:.275})),r.add(Lt(.025,.035,1.6,new ot({color:5980208}),{y:1.2}));const a=new fn(.2,10,8);for(let o=0;o<26;o++){const c=Gt(a,o%3?xt.leaf:xt.leaf2),l=Math.random()*Math.PI*2,u=1.2+Math.random()*1,f=.12+Math.random()*.32;c.position.set(Math.cos(l)*f,u,Math.sin(l)*f),c.scale.set(1,1.4,.25),c.rotation.set(Math.random(),l,Math.random()*.6),r.add(c)}}r.scale.setScalar(i),r.position.set(t,0,e),n.add(r)}function jl(n,t,e,i=0){const s=new Dt,r=2.4,a=3,o=.55;s.add(K(.06,a,o,xt.walnut,{x:-r/2,y:a/2})),s.add(K(.06,a,o,xt.walnut,{x:r/2,y:a/2})),s.add(K(r,.05,o,xt.walnut,{y:a})),s.add(K(r,a,.03,xt.graphite,{y:a/2,z:-o/2}));const c=[10166822,13264642,693142,24435,15637248,6966419,15325350,4014171,12271107];for(let l=0;l<4;l++){const u=.1+l*(a/4);s.add(K(r,.04,o,xt.walnut,{y:u}));let f=-r/2+.1;const h=l===1?.1:r/2-.15;for(;f<h;){const p=.06+Math.random()*.07,g=.4+Math.random()*.25,x=K(p,g,.38,new ot({color:c[Math.random()*c.length|0],roughness:.7}),{x:f+p/2,y:u+.02+g/2});s.add(x),f+=p+.012}l===1&&(s.add(Lt(.08,.06,.3,xt.ceramic,{x:.5,y:u+.17})),s.add(K(.36,.28,.03,xt.brass,{x:.9,y:u+.17,z:-.1})))}s.add(Lt(.12,.1,.18,xt.terracotta,{x:-.6,y:a+.11}));for(let l=0;l<5;l++){const u=Gt(new fn(.1,8,6),xt.leaf2,{x:-.6+(Math.random()-.5)*.2,y:a+.3+Math.random()*.1,z:(Math.random()-.5)*.15});u.scale.set(1,.6,1),s.add(u)}s.position.set(t,0,e),s.rotation.y=i,n.add(s)}function tf(n,t,e,i,s,r=2.4){const a=new Dt;a.add(wt(r,.42,.95,.08,s,{y:.33})),a.add(wt(r,.62,.22,.08,s,{y:.72,z:-.37}));for(const l of[-1,1])a.add(wt(.22,.55,.95,.08,s,{x:l*(r/2-.11),y:.5}));for(const l of[-1,1])a.add(Lt(.025,.02,.12,xt.brass,{x:l*(r/2-.15),y:.06,z:.35},8),Lt(.025,.02,.12,xt.brass,{x:l*(r/2-.15),y:.06,z:-.35},8));const o=[15320170,16032353,15167313,14208960],c=Math.max(2,Math.round(r/1));for(let l=0;l<c;l++){const u=wt(.42,.4,.14,.06,new ot({color:o[l%o.length],roughness:.95}),{x:-r/2+.45+l*((r-.9)/(c-1)),y:.72,z:-.2});u.rotation.x=-.2,u.rotation.z=(l%2?1:-1)*.08,a.add(u)}a.position.set(t,0,e),a.rotation.y=i,n.add(a)}function ya(n,t,e,i,s){const r=new Dt;r.add(wt(.85,.38,.85,.08,s,{y:.32})),r.add(wt(.85,.6,.18,.08,s,{y:.7,z:-.34}));for(const a of[-1,1])r.add(wt(.16,.42,.85,.06,s,{x:a*.42,y:.5}));r.add(wt(.38,.36,.12,.05,new ot({color:15320170,roughness:.95}),{y:.68,z:-.2})),r.position.set(t,0,e),r.rotation.y=i,n.add(r)}function tc(n,t,e,i=16763274){const s=new Dt;s.add(Lt(.22,.22,.03,xt.blackMetal,{y:.015})),s.add(Lt(.015,.015,1.7,xt.brass,{y:.86},8));const r=Lt(.18,.26,.3,new ot({color:16115400,emissive:i,emissiveIntensity:.55,side:ke}),{y:1.75});s.add(r),s.position.set(t,0,e),n.add(s)}function hr(n,t,e,i,s,r,a=!1){const o=a?new Wi(i,64):new $t(i,s),c=Gt(o,r,{x:t,y:.006,z:e,cast:!1});c.rotation.x=-Math.PI/2,n.add(c);const l=a?new Ca(i-.06,i,64):null;if(l){const u=Gt(l,new ot({color:13214247,roughness:.6}),{x:t,y:.008,z:e,cast:!1});u.rotation.x=-Math.PI/2,n.add(u)}}function ec(n,t,e,i=.75){const s=new Dt;s.add(Lt(i,i,.05,xt.marbleWhite,{y:.45},48)),s.add(Lt(.06,.06,.42,xt.brass,{y:.22},12)),s.add(Lt(.35,.35,.02,xt.brass,{y:.01},32)),s.add(Lt(.06,.05,.1,xt.ceramic,{x:.2,y:.53,z:.1},12)),s.add(Lt(.06,.05,.1,new ot({color:15167313,roughness:.3}),{x:.36,y:.53,z:-.05},12)),s.add(K(.42,.05,.3,new ot({color:2508371,roughness:.7}),{x:-.2,y:.5,z:-.05})),s.add(K(.36,.04,.26,new ot({color:15320170,roughness:.7}),{x:-.18,y:.545,z:-.03})),s.position.set(t,0,e),n.add(s)}function vv(n,t,e,i=0){const s=document.createElement("canvas");s.width=768,s.height=512;const r=s.getContext("2d");r.fillStyle="#f2eee6",r.fillRect(0,0,768,512),[["#fde68a","Ship office v2"],["#a7f3d0","NIFTY levels"],["#fbcfe8",`Chair v3
feedback`],["#bfdbfe",`Post Fri
9:00 AM`],["#ddd6fe",`India-first
GTM`],["#fed7aa",`Study
built-in`],["#fde68a",`Diwali
campaign`],["#a7f3d0",`Weekly
review`]].forEach(([u,f],h)=>{const p=40+h%4*180,g=40+Math.floor(h/4)*230;r.save(),r.translate(p+75,g+80),r.rotate((Math.random()-.5)*.12),r.translate(-75,-80),r.fillStyle="rgba(0,0,0,0.12)",r.fillRect(6,8,150,160),r.fillStyle=u,r.fillRect(0,0,150,160),r.fillStyle="#ef4444",r.beginPath(),r.arc(75,12,7,0,Math.PI*2),r.fill(),r.fillStyle="#1f2937",r.font="bold 24px system-ui, sans-serif",f.split(`
`).forEach((x,m)=>r.fillText(x,12,60+m*30)),r.restore()});const o=new En(s);o.colorSpace=Se,o.anisotropy=8;const c=new Dt,l=Gt(new $t(2.6,1.73),new ot({map:o,roughness:.8,emissive:16777215,emissiveMap:o,emissiveIntensity:.22}),{y:2.1,z:.04});c.add(l),c.add(K(2.7,1.83,.06,xt.oak,{y:2.1}));for(const u of[-1,1]){const f=K(.06,3,.06,xt.oak,{x:u*1.1,y:1.45,z:-.1});f.rotation.x=.05,c.add(f)}c.add(K(2.6,.05,.14,xt.oak,{y:1.2,z:.06})),c.position.set(t,0,e),c.rotation.y=i,n.add(c)}const Si=(n,t,e,i,s=0,r=0)=>(t.position.set(e,r,i),t.rotation.y=s,n.add(t),t),Ae=(n,t={})=>new ot({color:n,roughness:.6,...t});function Mv(n,t,e,i,s=xt.leather){const r=new Dt;r.add(wt(.95,.42,1,.1,s,{y:.36}));const a=wt(.95,.85,.24,.1,s,{y:.85,z:-.5});a.rotation.x=-.35,r.add(a);const o=wt(.9,.12,.5,.05,s,{y:.32,z:.72});o.rotation.x=.25,r.add(o);for(const c of[-1,1])r.add(wt(.16,.5,.95,.06,s,{x:c*.52,y:.5}));return r.add(K(.8,.06,.8,xt.blackMetal,{y:.06})),r.add(wt(.5,.2,.1,.05,Ae(15320170,{roughness:.95}),{y:1.12,z:-.6})),Si(n,r,t,e,i)}function Mn(n,t,e,i=0,s=2042167){const r=new Dt,a=Ae(s,{roughness:.8});r.add(wt(.52,.09,.5,.04,a,{y:.48}));const o=wt(.48,.62,.07,.04,a,{y:.86,z:-.24});o.rotation.x=-.1,r.add(o),r.add(Lt(.03,.03,.36,xt.blackMetal,{y:.27},8));for(let c=0;c<5;c++){const l=c/5*Math.PI*2,u=K(.3,.025,.04,xt.blackMetal,{x:Math.cos(l)*.15,y:.06,z:Math.sin(l)*.15});u.rotation.y=-l,r.add(u)}for(const c of[-1,1])r.add(K(.04,.2,.3,xt.blackMetal,{x:c*.27,y:.6}));return Si(n,r,t,e,i)}function yv(n,t,e,i=0){const s=new Dt;s.add(wt(3.4,1,.7,.03,xt.walnut,{y:.5})),s.add(K(3.5,.05,.8,xt.marbleWhite,{y:1.02})),s.add(K(3.3,.03,.03,me("#ffb36b",1.6),{y:.95,z:.37,cast:!1})),s.add(wt(.7,.45,.45,.04,Ae(12633292,{metalness:.9,roughness:.25}),{x:-1,y:1.27})),s.add(Lt(.05,.05,.1,xt.blackMetal,{x:-1.15,y:1,z:.2},10));for(let a=0;a<4;a++)s.add(Lt(.05,.045,.1,xt.ceramic,{x:.2+a*.16,y:1.1,z:.1},12));s.add(Lt(.18,.18,.12,Ae(15320170),{x:1.1,y:1.1},18));for(let a=0;a<5;a++)s.add(Gt(new fn(.05,8,6),Ae(11887901),{x:1.02+a%3*.08,y:1.19,z:-.05+Math.floor(a/3)*.1}));const r=yn(1.8,.9,(a,o,c)=>{a.fillStyle="#14121f",a.fillRect(0,0,o,c),a.fillStyle="#ffd7a8",a.font="700 54px system-ui",a.fillText("COFFEE BAR",30,70),a.font="400 34px system-ui",a.fillStyle="#e9e7ff",["Espresso · Cappuccino","Masala chai · Cold brew","Electrolyte lemonade"].forEach((l,u)=>a.fillText(l,30,130+u*44))});r.position.set(0,2.2,-.36),s.add(r);for(let a=0;a<3;a++){const o=new Dt;o.add(Lt(.2,.2,.06,xt.leather,{y:.78},18)),o.add(Lt(.025,.025,.75,xt.brass,{y:.39},8)),o.add(Lt(.18,.18,.02,xt.brass,{y:.01},18)),o.position.set(-1+a,0,.85),s.add(o)}return Si(n,s,t,e,i)}function Sv(n,t,e,i=0){const s=new Dt,r=5.2,a=5.4,o=3.2,c=Mi(1024,640,(m,d,v)=>{const T=m.createLinearGradient(0,0,0,v*.55);T.addColorStop(0,"#5aa9e6"),T.addColorStop(1,"#bde0fe"),m.fillStyle=T,m.fillRect(0,0,d,v),m.fillStyle="#2d6a4f",m.beginPath(),m.moveTo(0,v*.55),m.quadraticCurveTo(d*.5,v*.42,d,v*.55),m.lineTo(d,v),m.lineTo(0,v),m.fill(),m.fillStyle="#52b788",m.beginPath(),m.moveTo(d*.3,v),m.quadraticCurveTo(d*.5,v*.5,d*.58,v*.52),m.quadraticCurveTo(d*.62,v*.6,d*.75,v),m.fill(),m.fillStyle="#95d5b2",m.beginPath(),m.ellipse(d*.6,v*.53,60,14,0,0,Math.PI*2),m.fill(),m.strokeStyle="#fff",m.lineWidth=3,m.beginPath(),m.moveTo(d*.6,v*.53),m.lineTo(d*.6,v*.4),m.stroke(),m.fillStyle="#ef4444",m.beginPath(),m.moveTo(d*.6,v*.4),m.lineTo(d*.64,v*.42),m.lineTo(d*.6,v*.44),m.fill(),m.fillStyle="rgba(0,0,0,0.55)",m.fillRect(20,20,330,150),m.fillStyle="#fff",m.font="700 34px system-ui",m.fillText("HOLE 7 · PAR 4",40,64),m.font="400 28px system-ui",m.fillText("Carry 212 m · Speed 148 km/h",40,104),m.fillText("Spin 2650 rpm",40,140)}),l=new Ht(new $t(r-.3,o-.3),new Qt({map:c,color:new vt(.95,.95,.95)}));l.position.set(0,o/2,-a/2+.05),s.add(l);const u=Ae(1776424,{roughness:.5});s.add(K(r,o,.06,u,{y:o/2,z:-a/2}));const f=new ot({color:1118498,transparent:!0,opacity:.55,roughness:1,side:ke});for(const m of[-1,1]){const d=Gt(new $t(a,o),f,{x:m*r/2,y:o/2,cast:!1});d.rotation.y=Math.PI/2,s.add(d),s.add(K(.06,o,.06,xt.blackMetal,{x:m*r/2,y:o/2,z:a/2}))}s.add(K(r,.06,.06,xt.blackMetal,{y:o,z:a/2})),s.add(K(r,.06,a,u,{y:o+.03}));const h=Gt(new $t(r-.2,a-.4),Ae(3112266,{roughness:1}),{y:.01,cast:!1});h.rotation.x=-Math.PI/2,s.add(h);const p=Gt(new $t(1.4,1.6),Ae(4231532,{roughness:1}),{y:.02,z:1.2,cast:!1});p.rotation.x=-Math.PI/2,s.add(p),s.add(Lt(.012,.012,.06,xt.whiteMatte,{y:.05,z:1},6)),s.add(Gt(new fn(.04,12,10),xt.ceramic,{y:.1,z:1}));const g=new Dt;g.add(Lt(.012,.012,1.1,xt.blackMetal,{y:.55},6)),g.add(K(.12,.05,.05,xt.brass,{x:.05,y:.02})),g.position.set(.9,0,1.9),g.rotation.z=.25,s.add(g),s.add(wt(.4,.15,.25,.03,xt.graphite,{x:-.8,y:.08,z:1.3})),s.add(K(r,.04,.04,me("#22c55e",1.6),{y:.03,z:a/2,cast:!1}));const x=yn(2,.45,(m,d,v)=>{m.fillStyle="#0b2e1f",m.fillRect(0,0,d,v),m.fillStyle="#86efac",m.font="800 54px system-ui",m.textAlign="center",m.fillText("⛳ GOLF SIMULATOR",d/2,64)});return x.position.set(0,o+.4,a/2),s.add(x),Si(n,s,t,e,i)}function bv(n,t,e,i=0){const s=new Dt,r=yn(5.2,.6,(h,p,g)=>{h.fillStyle="#121022",h.fillRect(0,0,p,g),h.fillStyle="#fde68a",h.font="800 64px system-ui",h.textAlign="center",h.fillText("BOT FUEL BAR · OIL · ELECTRICITY BOOST · ELECTROLYTES",p/2,82)},{pxPerUnit:240});r.position.set(0,2.75,-.6),s.add(r);const a=new Dt;a.add(wt(1.2,1.7,.7,.05,Ae(8138002,{roughness:.4}),{y:.85})),a.add(K(.9,.5,.02,me("#f59e0b",1.2),{y:1.25,z:.36,cast:!1}));const o=Ae(15381256,{metalness:.7,roughness:.35});for(let h=0;h<6;h++)a.add(wt(.22,.3,.14,.03,o,{x:-.36+h%3*.36,y:.2+Math.floor(h/3)*.34,z:.45}));const c=Lt(.02,.02,.8,xt.blackMetal,{x:.65,y:1,z:.1},6);c.rotation.z=.3,a.add(c),a.position.x=-1.9,s.add(a);const l=h=>{const p=new Dt;return p.add(Lt(.28,.32,1.6,Ae(1976635,{metalness:.6,roughness:.3}),{y:.8},20)),p.add(Gt(new va(.3,.03,8,32),me("#22d3ee",2.2),{y:1.3,cast:!1})),p.add(Gt(new va(.3,.03,8,32),me("#22d3ee",2.2),{y:.8,cast:!1})),p.children.slice(-2).forEach(g=>g.rotation.x=Math.PI/2),p.add(Lt(.05,.05,.12,me("#facc15",2),{y:1.65},10)),p.position.x=h,p};s.add(l(-.25),l(.45));const u=new Dt;u.add(wt(1,1.9,.7,.05,Ae(15067115,{roughness:.3}),{y:.95})),u.add(K(.85,1.5,.02,new ot({color:10147839,transparent:!0,opacity:.35,roughness:.1}),{y:1.05,z:.36,cast:!1}));const f=[2282478,16020150,10741301,16486972];for(let h=0;h<3;h++)for(let p=0;p<5;p++)u.add(Lt(.05,.05,.26,new ot({color:f[(p+h)%4],emissive:f[(p+h)%4],emissiveIntensity:.4}),{x:-.3+p*.15,y:.55+h*.45,z:.2},10));return u.position.x=1.8,s.add(u),Si(n,s,t,e,i)}function nc(n,t,e,i,s=6.6,r=3878748){const a=Ae(r,{roughness:1});for(let o=t;o<=e;o+=.9)n.add(K(.06,.7,3.2,a,{x:o,y:s,z:i,cast:!1})),n.add(Lt(.006,.006,7-s-.35,xt.blackMetal,{x:o,y:s+.35+(7-s-.35)/2,z:i},4))}function ef(n,t,e,i,s=0,r=6,a=3){const o=new Dt,c=[4988309,7153881,3223169,8266446,1973067],l=new vi(.3,.3,.06,6);for(let u=0;u<a;u++)for(let f=0;f<r;f++){const h=Gt(l,Ae(c[(u*3+f)%c.length],{roughness:1}),{x:f*.54+u%2*.27,y:u*.47,cast:!1});h.rotation.x=Math.PI/2,o.add(h)}return o.position.set(t,e,i),o.rotation.y=s,n.add(o),o}function ur(n,t,e,i,s=0,r=1.4,a=1,o=0){const c=[["#ff006e","#ffbe0b","#3a86ff","#1b1b3a"],["#06d6a0","#118ab2","#ffd166","#0b132b"],["#f15bb5","#9b5de5","#00bbf9","#14102a"]][o%3],l=Mi(512,Math.round(512*a/r),(f,h,p)=>{f.fillStyle=c[3],f.fillRect(0,0,h,p);for(let g=0;g<7;g++)f.fillStyle=c[g%3],f.globalAlpha=.85,f.beginPath(),f.arc((g*97+o*51)%h,(g*61+o*37)%p,40+g*23%90,0,Math.PI*2),f.fill();f.globalAlpha=1,f.strokeStyle="#ffffff",f.lineWidth=6,f.beginPath(),f.moveTo(0,p*.7),f.bezierCurveTo(h*.3,p*.2,h*.7,p,h,p*.3),f.stroke()}),u=new Dt;return u.add(K(r+.1,a+.1,.05,xt.brass,{})),u.add(Gt(new $t(r,a),new ot({map:l,roughness:.7,emissive:16777215,emissiveMap:l,emissiveIntensity:.2}),{z:.03,cast:!1})),u.position.set(t,e,i),u.rotation.y=s,n.add(u),u}function Ev(n,t,e,i=0){const s=new Dt,r=Mi(768,512,(u,f,h)=>{u.fillStyle="#123a73",u.fillRect(0,0,f,h),u.strokeStyle="rgba(255,255,255,0.12)",u.lineWidth=1;for(let p=0;p<f;p+=24)u.beginPath(),u.moveTo(p,0),u.lineTo(p,h),u.stroke();for(let p=0;p<h;p+=24)u.beginPath(),u.moveTo(0,p),u.lineTo(f,p),u.stroke();u.strokeStyle="#e0f2fe",u.lineWidth=4,u.strokeRect(120,90,420,300),u.strokeRect(120,90,200,160),u.strokeRect(320,250,220,140),u.beginPath(),u.arc(320,250,60,Math.PI,Math.PI*1.5),u.stroke(),u.font="600 22px ui-monospace",u.fillStyle="#e0f2fe",u.fillText("LIVING 5.4 × 4.2",140,180),u.fillText("STUDY",360,320),u.fillText("GROUND FLOOR PLAN · 1:100",120,450)}),a=Gt(new $t(1.8,1.2),new ot({map:r,roughness:.8,emissive:16777215,emissiveMap:r,emissiveIntensity:.25}),{y:1.05});a.rotation.x=-Math.PI/2+.45,s.add(a);const o=K(1.9,.04,1.3,xt.oak,{y:1.02});o.rotation.x=.45,s.add(o);for(const u of[-1,1]){const f=K(.05,1,.05,xt.blackMetal,{x:u*.8,y:.5,z:-.3});s.add(f),s.add(K(.05,.75,.05,xt.blackMetal,{x:u*.8,y:.37,z:.35}))}const c=K(1.6,.01,.06,xt.whiteMatte,{y:1.1,z:.1});c.rotation.x=.45,s.add(c);const l=Lt(.05,.12,.12,Ae(1120295,{emissive:16773569,emissiveIntensity:.5}),{x:.9,y:1.7,z:-.4},14);s.add(l),s.add(Lt(.01,.01,.8,xt.brass,{x:.9,y:1.3,z:-.45},6));for(let u=0;u<4;u++){const f=Lt(.05,.05,.8,Ae(u%2?14742270:16317180),{x:-1.2,y:.4+u*.02,z:-.3+u*.12},10);f.rotation.x=.2,s.add(f)}return Si(n,s,t,e,i)}function Tv(n,t,e){const i=new Dt;i.add(K(1.2,.8,1.2,xt.whiteMatte,{y:.4}));const s=Ae(16317180,{roughness:.4});i.add(K(.9,.02,.9,Ae(8843180),{y:.81})),i.add(K(.5,.22,.4,s,{x:-.1,y:.93,z:-.1})),i.add(K(.3,.16,.3,s,{x:.22,y:.9,z:.15})),i.add(K(.52,.02,.42,Ae(9741240),{x:-.1,y:1.05,z:-.1})),i.add(K(.2,.01,.12,new ot({color:3718648,transparent:!0,opacity:.7}),{x:.25,y:.83,z:-.25}));for(let a=0;a<4;a++)i.add(Gt(new fn(.05,8,6),xt.leaf2,{x:-.38+a*.25,y:.88,z:.38}));const r=K(1,.5,1,new cr({color:16777215,transparent:!0,opacity:.12,roughness:.05}),{y:1.06,cast:!1});return i.add(r),i.position.set(t,0,e),n.add(i),i}function wv(n,t,e){const i=new Dt;i.add(Lt(.5,.5,.5,xt.whiteMatte,{y:.25},24));const s=wt(.5,.06,.5,.03,xt.walnut,{y:.78});i.add(s);const r=wt(.5,.42,.05,.03,xt.walnut,{y:1.05,z:-.22});r.rotation.x=-.15,i.add(r);for(const a of[-1,1])for(const o of[-1,1])i.add(Lt(.02,.015,.28,xt.walnut,{x:a*.2,y:.62,z:o*.2},6));return i.position.set(t,0,e),n.add(i),i}function Av(n,t,e){const i=new Dt;i.add(Lt(.5,.5,.5,xt.whiteMatte,{y:.25},24)),i.add(Lt(.3,.22,.2,xt.terracotta,{y:.6},16)),i.add(Lt(.03,.04,.35,Ae(5980208),{y:.85},6));for(let s=0;s<6;s++){const r=Gt(new fn(.16,10,8),s%2?xt.leaf:xt.leaf2,{x:Math.cos(s)*.15,y:1.05+s%3*.05,z:Math.sin(s)*.15});r.scale.set(1,.55,1),i.add(r)}return i.position.set(t,0,e),n.add(i),i}function la(n,t,e,i=1.1){const s=new Dt;return s.add(Lt(i,i,.05,xt.oak,{y:.74},40)),s.add(Lt(.06,.08,.72,xt.blackMetal,{y:.37},12)),s.add(Lt(.4,.4,.02,xt.blackMetal,{y:.01},24)),s.position.set(t,0,e),n.add(s),s}function Qh(n,t,e,i,s,r,a=0){const o=new Dt;o.add(wt(i,.06,s,.03,xt.walnut,{y:.75}));for(const l of[-1,1])o.add(K(.08,.72,s*.6,xt.blackMetal,{x:l*(i/2-.4),y:.36}));const c=Math.floor((r-(r>6?2:0))/2);for(let l=0;l<c;l++){const u=-i/2+i/(c+1)*(l+1);Mn(o,u,-s/2-.45,0),Mn(o,u,s/2+.45,Math.PI)}return r>6&&(Mn(o,-i/2-.5,0,Math.PI/2),Mn(o,i/2+.5,0,-Math.PI/2)),Si(n,o,t,e,a)}function ks(n,t,e=3,{frame:i=xt.bronze,tint:s}={}){const r=s?new cr({color:s,transparent:!0,opacity:.16,roughness:.05,depthWrite:!1,side:ke}):xt.glass;for(const[a,o,c,l]of t){const u=Math.hypot(c-a,l-o),f=Math.atan2(-(l-o),c-a),h=new Dt;h.position.set(a,0,o),h.rotation.y=f;const p=Gt(new $t(u,e),r,{x:u/2,y:e/2,cast:!1,receive:!1});p.renderOrder=5,h.add(p),h.add(K(u,.06,.08,i,{x:u/2,y:e})),h.add(K(u,.06,.08,i,{x:u/2,y:.03}));for(let g=0;g<=Math.max(1,Math.round(u/1.8));g++)h.add(K(.05,e,.08,i,{x:g/Math.max(1,Math.round(u/1.8))*u,y:e/2,receive:!1}));n.add(h)}}function Pi(n,t,e,i){for(const[s,r,a,o]of t){const c=Math.hypot(a-s,o-r),l=Math.atan2(-(o-r),a-s),u=K(c,e,.18,i,{x:(s+a)/2,y:e/2,z:(r+o)/2});u.rotation.y=l,n.add(u)}}function nf(n,t,e,i=0){const s=new Dt;s.add(wt(.7,2.1,1,.02,Ae(987413,{metalness:.6,roughness:.35}),{y:1.05}));const r=new Qt({color:new vt("#22c55e").multiplyScalar(2)}),a=new Qt({color:new vt("#38bdf8").multiplyScalar(2)});for(let o=0;o<14;o++)s.add(K(.6,.1,.02,Ae(2040880,{metalness:.5}),{y:.2+o*.13,z:.51,cast:!1})),s.add(K(.03,.03,.01,o%3?r:a,{x:.22,y:.2+o*.13,z:.525,cast:!1}));return Si(n,s,t,e,i)}function Pe(n,t,e,i,s,r=0,{w:a=2.2,h:o=.4,bg:c="#111827",fg:l="#f8fafc",size:u=52}={}){const f=yn(a,o,(h,p,g)=>{h.fillStyle=c,h.fillRect(0,0,p,g),h.fillStyle=l,h.font=`800 ${u}px system-ui`,h.textAlign="center",h.textBaseline="middle",h.fillText(t,p/2,g/2+2)},{frame:!1});return f.position.set(e,i,s),f.rotation.y=r,n.add(f),f}const oe={x0:le+.2,x1:le+4.4,z0:-Ot,z1:-3.6};let jr=null;function Rv(){if(jr)return jr;const n=document.createElement("canvas");n.width=512,n.height=256;const t=n.getContext("2d");[[60,120],[180,40],[320,160],[420,60]].forEach(([i,s])=>{const r=t.createLinearGradient(i,0,i+s,0);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(220,225,255,0.55)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.save(),t.transform(1,0,-.5,1,0,0),t.fillStyle=r,t.fillRect(i,0,s,256),t.restore()});const e=new En(n);return e.colorSpace=Se,jr=new Qt({map:e,transparent:!0,opacity:.07,blending:Fi,depthWrite:!1,side:ke}),jr}function ta(n,t,e,i,s,r,a,{sill:o=!0,top:c=!0,accent:l="#c084fc"}={}){const u=Ye.M,f=Math.hypot(i-t,s-e),h=Math.atan2(-(s-e),i-t),p=new Dt;p.position.set(t,0,e),p.rotation.y=h;const g=new Ht(new $t(f,r),u.glass);g.position.set(f/2,r/2,0),g.renderOrder=5,p.add(g);const x=new Ht(new $t(f,r),Rv());x.position.set(f/2,r/2,.01),x.renderOrder=6,p.add(x);const m=Math.max(1,Math.round(f/a));for(let d=0;d<=m;d++)p.add(K(.07,r,.12,u.bronze,{x:d/m*f,y:r/2,receive:!1}));return r>3&&p.add(K(f,.05,.1,u.bronze,{x:f/2,y:1.05,cast:!1})),o&&(p.add(K(f,.14,.18,u.bronze,{x:f/2,y:.07})),p.add(K(f,.025,.03,me("#8b5cf6",2.4),{x:f/2,y:.15,z:.08,cast:!1}))),c&&(p.add(K(f+.1,.18,.2,u.bronze,{x:f/2,y:r})),p.add(K(f,.025,.03,me(l,2),{x:f/2,y:r-.1,z:.1,cast:!1}))),n.add(p),p}function Cv(n,t,{finish:e}={}){const i=Ye.M;n.add(K(le*2+.6,.6,Ot*2+.6,i.plinth,{y:-.3,cast:!1}));const s=Gt(new $t(le*2,Ot*2),e||i.floor,{y:.001,cast:!1});s.rotation.x=-Math.PI/2,n.add(s);const r=me("#a78bfa",1.5);if(n.add(K(le*2+.6,.04,.04,r,{y:0,z:Ot+.3,cast:!1,receive:!1})),n.add(K(.04,.04,Ot*2+.6,r,{x:le+.3,y:0,cast:!1,receive:!1})),n.add(K(le*2+.6,.03,.03,me("#6d5dfc",1.1),{y:-.58,z:Ot+.3,cast:!1,receive:!1})),t.level<0){const d=new ot({color:3816008,roughness:.9});n.add(K(le*2,nn,.4,d,{y:nn/2,z:-Ot-.1})),n.add(K(.4,nn,Ot*2,d,{x:-le-.1,y:nn/2})),n.add(K(.4,nn,Ot*2+.2+oe.z1,d,{x:le+.1,y:nn/2,z:(Ot+oe.z1)/2+.1})),n.add(K(le*2,.5,.25,d,{y:.25,z:Ot}));for(let v=-le+2.5;v<le;v+=5)n.add(K(.5,nn,.5,d,{x:v,y:nn/2,z:-Ot+.25}));n.add(K(le*2,.03,.03,me("#38bdf8",1.4),{y:nn-.25,z:-Ot+.12,cast:!1}))}else ta(n,-le,-Ot,le,-Ot,nn,2.5),ta(n,-le,Ot,-le,-Ot,nn,3),ta(n,-le,Ot,le,Ot,1.05,3,{sill:!1,top:!0,accent:"#a78bfa"}),ta(n,le,Ot,le,oe.z1,1.05,3,{sill:!1,top:!0,accent:"#a78bfa"}),n.add(K(.22,nn+.1,.22,i.bronze,{x:-le,y:nn/2,z:-Ot}));if(t.level>=0)for(const d of[-le,-5,5])n.add(K(.26,nn,.26,i.bronze,{x:d,y:nn/2,z:Ot-.15}));const a=yn(9,.5,(d,v,T)=>{d.fillStyle="#0d0b26",d.fillRect(0,0,v,T),d.fillStyle="#c4b5fd",d.font="800 70px system-ui",d.textBaseline="middle",d.fillText(t.label,30,T/2+3),d.fillStyle="#f5f3ff",d.font="700 64px system-ui",d.fillText(t.name.toUpperCase(),150,T/2+3)},{frame:!1,emissive:1});a.position.set(-le+4.8,-.3,Ot+.31),n.add(a);const o=document.createElement("div");o.className="room-label floor-label",o.textContent=`${t.label} · ${t.name}`;const c=new Zl(o);c.position.set(0,.05,Ot+.2),n.add(c);const l=new ot({color:2368058,roughness:.55,metalness:.2}),u=oe.x1-oe.x0,f=oe.z1-oe.z0,h=(oe.x0+oe.x1)/2,p=(oe.z0+oe.z1)/2;n.add(K(u,Ws,f,l,{x:h,y:Ws/2-.6,z:p}));const g=new ot({color:12105160,metalness:1,roughness:.25});for(const d of[-2,.6-2+2.2]){const v=oe.z0+1.5+(d<0?0:2.5);n.add(K(.06,2.5,1.4,g,{x:oe.x0-.03,y:1.25,z:v})),n.add(K(.07,2.62,.04,i.brass,{x:oe.x0-.035,y:1.31,z:v})),n.add(K(.07,.06,1.5,i.brass,{x:oe.x0-.035,y:2.55,z:v})),n.add(K(.03,.08,.3,me("#fbbf24",1.8),{x:oe.x0-.06,y:2.85,z:v,cast:!1}))}const x=yn(1.6,.42,(d,v,T)=>{d.fillStyle="#0d0b26",d.fillRect(0,0,v,T),d.fillStyle="#fde68a",d.font="800 54px system-ui",d.textAlign="center",d.textBaseline="middle",d.fillText(`LIFT · ${t.label}`,v/2,T/2+2)},{frame:!1});x.position.set(oe.x0-.07,3.35,oe.z0+2.75),x.rotation.y=-Math.PI/2,n.add(x),n.add(K(1,2.3,.06,new ot({color:3880278,roughness:.5}),{x:h+.8,y:1.15,z:oe.z1+.03}));const m=yn(1,.3,(d,v,T)=>{d.fillStyle="#065f46",d.fillRect(0,0,v,T),d.fillStyle="#ecfdf5",d.font="800 40px system-ui",d.textAlign="center",d.textBaseline="middle",d.fillText("▲▼ STAIRS",v/2,T/2+2)},{frame:!1});m.position.set(h+.8,2.6,oe.z1+.04),n.add(m),n.add(K(.05,Ws,.05,me("#c084fc",1.6),{x:oe.x1+.03,y:Ws/2-.6,z:oe.z1+.03,cast:!1}))}function Pv(n){const t=Ye.M;n.add(K(le*2+.6,.6,Ot*2+.6,t.plinth,{y:.3,cast:!1})),n.add(K(le*2+.6,.04,.04,me("#a78bfa",1.5),{y:.62,z:Ot+.3,cast:!1})),n.add(K(oe.x1-oe.x0,1.4,oe.z1-oe.z0,new ot({color:2368058,roughness:.55}),{x:(oe.x0+oe.x1)/2,y:.7,z:(oe.z0+oe.z1)/2}));const e=new ot({color:1981066,roughness:.25,metalness:.6});for(let i=0;i<6;i++)for(let s=0;s<2;s++){const r=K(3.2,.05,1.6,e,{x:-11+i*3.6,y:1,z:-5+s*2.2});r.rotation.x=-.25,n.add(r)}}const Lv={x0:-le-1.5,x1:oe.x1+1.5,z0:-Ot-1.5,z1:Ot+1.5};function Dv(n,t,e){const i=new ot({color:2828352,roughness:.8}),s=e-t,r=(t+e)/2,a=-le-.3,o=oe.x1+.3,c=-Ot-.3,l=Ot+.3,u=1.6,f=[K(u,s,l-c+2*u,i,{x:a-u/2,y:r,cast:!1}),K(u,s,l-c+2*u,i,{x:o+u/2,y:r,cast:!1}),K(o-a,s,u,i,{x:(a+o)/2,y:r,z:c-u/2,cast:!1})],h=new Dt;h.add(K(o-a,s,u,i,{x:(a+o)/2,y:r,z:l+u/2,cast:!1})),h.add(K(o-a,s-.6,.2,i,{x:(a+o)/2,y:r-.3,z:l-.1,cast:!1})),[...f,h].forEach(g=>n.add(g));const p=me("#7c3aed",1.3);return n.add(K(o-a+2*u,.05,.05,p,{x:(a+o)/2,y:e,z:l+u,cast:!1})),n.add(K(.05,.05,l-c+2*u,p,{x:o+u,y:e,cast:!1})),{front:h}}const jh={},pi=(n,t)=>jh[n]||(jh[n]=t());function ic(n,{scale:t=1.3,ring:e=!0,manager:i=!1}={}){const s=new vt(n),r=new Dt;r.scale.setScalar(t);const a=new cr({color:16185084,roughness:.28,clearcoat:.6,clearcoatRoughness:.2}),o=new cr({color:s,roughness:.3,clearcoat:.5,emissive:s,emissiveIntensity:.1}),c=new ot({color:1315886,roughness:.15,metalness:.4}),l=new Qt({color:s.clone().multiplyScalar(2.2)}),u=[];for(const y of[-1,1]){const A=new Dt;A.position.set(y*.15,.46,0),A.add(Gt(pi("leg",()=>new vi(.08,.08,.42,12)),c,{y:-.21})),A.add(wt(.2,.1,.28,.04,o,{y:-.41,z:.03})),r.add(A),u.push(A)}const f=new Dt;f.position.y=.5,r.add(f),f.add(wt(.66,.62,.48,.16,o,{y:.32})),f.add(wt(.38,.28,.06,.05,a,{y:.32,z:.23})),f.add(Gt(pi("chest",()=>new Wi(.05,16)),l,{y:.36,z:.265,cast:!1}));const h=[];for(const y of[-1,1]){const A=new Dt;A.position.set(y*.4,.52,0),A.add(Gt(pi("arm",()=>new xa(.075,.32,4,10)),a,{y:-.2})),A.add(Gt(pi("hand",()=>new fn(.09,12,10)),o,{y:-.42})),A.rotation.z=y*.12,f.add(A),h.push(A)}const p=new Dt;p.position.y=.98,f.add(p),p.add(wt(.82,.6,.62,.2,a,{})),p.add(wt(.64,.36,.08,.1,c,{z:.3,cast:!1}));const g=[];for(const y of[-1,1]){const A=Gt(pi("eye",()=>new xa(.045,.06,4,8)),l,{x:y*.14,y:.01,z:.345,cast:!1});p.add(A),g.push(A)}for(const y of[-1,1]){const A=Lt(.1,.1,.08,o,{x:y*.43},16);A.rotation.z=Math.PI/2,p.add(A)}p.add(Lt(.015,.015,.22,c,{y:.4},6));const x=Gt(pi("bulb",()=>new fn(.06,14,10)),l,{y:.53,cast:!1});if(p.add(x),i){const y=new ot({color:15381256,metalness:.8,roughness:.3}),A=Gt(new _i(.06,.26,4),y,{y:.42,z:.27});A.rotation.x=Math.PI,f.add(A);const M=Lt(.3,.33,.1,new ot({color:1973067,roughness:.6}),{y:.34},20);p.add(M),p.add(Lt(.34,.34,.02,y,{y:.3},20));const b=wt(.28,.36,.03,.02,new ot({color:9132587,roughness:.6}),{y:-.38,z:.12});b.add(Gt(new $t(.22,.28),new Qt({color:16317180}),{z:.02,cast:!1})),b.rotation.x=-.5,h[1].add(b)}let m=null,d=null;if(e){m=new Qt({color:s.clone().multiplyScalar(2),transparent:!0,opacity:.9,side:ke}),d=new Ht(pi("ring",()=>new Ca(.62,.71,64)),m),d.rotation.x=-Math.PI/2,d.position.y=.012,r.add(d);const y=new Ht(pi("glow",()=>new $t(2.4,2.4)),new Qt({map:_v(`rgba(${s.r*255|0},${s.g*255|0},${s.b*255|0},0.5)`),transparent:!0,depthWrite:!1,blending:Fi}));y.rotation.x=-Math.PI/2,y.position.y=.01,r.add(y)}const v=Math.random()*10;let T=2+Math.random()*4;const _=Ra.lerp;function E(y,A="idle"){if(A==="walking"){const b=Math.sin(y*7+v);u[0].rotation.x=b*.45,u[1].rotation.x=-b*.45,h[0].rotation.x=-b*.35,h[1].rotation.x=_(h[1].rotation.x,-.6,.1),f.position.y=.5+Math.abs(Math.cos(y*7+v))*.04,p.rotation.y=_(p.rotation.y,Math.sin(y*.7)*.25,.05)}else u[0].rotation.x=_(u[0].rotation.x,0,.15),u[1].rotation.x=_(u[1].rotation.x,0,.15),f.position.y=.5+Math.sin(y*2.2+v)*.035;A==="working"?(p.rotation.y=_(p.rotation.y,-.25+Math.sin(y*.8+v)*.12,.08),p.rotation.x=_(p.rotation.x,.2,.08),h[0].rotation.x=-1.05+Math.sin(y*16+v)*.14,h[1].rotation.x=-1.05+Math.sin(y*16+v+Math.PI)*.14,l.color.copy(s).multiplyScalar(2.4+Math.sin(y*9)*.5),m&&(m.opacity=.75+Math.sin(y*5)*.25,d.scale.setScalar(1+Math.sin(y*3)*.05))):A==="idle"&&(p.rotation.y=_(p.rotation.y,Math.sin(y*.55+v)*.6,.05),p.rotation.x=_(p.rotation.x,0,.05),h[0].rotation.x=_(h[0].rotation.x,Math.sin(y*1.6+v)*.08,.1),h[1].rotation.x=_(h[1].rotation.x,i?-.6:-Math.sin(y*1.6+v)*.08,.1),l.color.copy(s).multiplyScalar(1.5),m&&(m.opacity=.4,d.scale.setScalar(1)));const M=y>T&&y<T+.12;g.forEach(b=>b.scale.y=M?.15:1),y>T+.12&&(T=y+2.5+Math.random()*4),x.scale.setScalar(1+Math.sin(y*4+v)*.15)}return{group:r,head:p,body:f,arms:h,update:E}}const Ci=n=>n?n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"--:--",Iv=30*60*1e3,tu=new Map;function Nv(n,t){if(!n)return null;let e=tu.get(n);return e||(e={img:new Image,ok:!1,failed:!1,cbs:[]},e.img.decoding="async",e.img.onload=()=>{e.ok=!0,e.cbs.splice(0).forEach(i=>i())},e.img.onerror=()=>{e.failed=!0,e.cbs.splice(0).forEach(i=>i())},e.img.src=n,tu.set(n,e)),!e.ok&&!e.failed&&t&&e.cbs.push(t),e}function Xs(n,t,e,i){const s=String(t||"").split(/\s+/).filter(Boolean),r=[];let a="";for(let c=0;c<s.length;c++){const l=a?`${a} ${s[c]}`:s[c];if(n.measureText(l).width<=e){a=l;continue}if(a&&r.push(a),a=s[c],r.length===i){a="",r[i-1]+=" …";break}}a&&r.length<i&&r.push(a);const o=r.length-1;if(o>=0){let c=r[o];for(;n.measureText(c).width>e&&c.length>3;)c=c.slice(0,-3)+"…";r[o]=c}return r}function Uv(n,{width:t=1024,height:e=640,anisotropy:i=8,onNeedsRedraw:s}={}){const r=t,a=e,o=a/640,c=document.createElement("canvas");c.width=r,c.height=a;const l=c.getContext("2d"),u=new En(c);u.colorSpace=Se,u.anisotropy=i;let f="";const h={dot:{x:0,y:0},cursor:{x:0,y:0,h:60},working:!1,image:!1},p=(m,d,v="system-ui, sans-serif")=>`${m} ${Math.round(d*o)}px ${v}`;function g(m,d,v,T,_){l.fillStyle=n.color,l.globalAlpha=.25,l.fillRect(0,0,r,100*o),l.globalAlpha=1,l.fillStyle="rgba(8,8,26,0.55)",l.fillRect(0,0,r,100*o),l.fillStyle=n.color,l.fillRect(0,0,14*o,100*o),l.fillStyle="#ffffff",l.font=p(700,56),l.textBaseline="alphabetic",l.fillText(n.name,40*o,68*o),l.font=p(800,44);const E=d?"WORKING":"IDLE",y=l.measureText(E).width;l.fillStyle=d?"#4ade80":"#94a3b8",l.textAlign="right",l.fillText(E,r-36*o,66*o),l.textAlign="left",h.dot={x:r-36*o-y-30*o,y:51*o},l.beginPath(),l.arc(h.dot.x,h.dot.y,13*o,0,Math.PI*2),d?l.fill():(l.lineWidth=4*o,l.strokeStyle="#94a3b8",l.stroke());const A=100*o+44*o;l.fillStyle="rgba(8,8,26,0.7)",l.fillRect(0,100*o,r,62*o),l.font=p(700,32),v?(l.fillStyle="#4ade80",l.fillText(`● LIVE · reported ${Ci(m.reportedAt)}`,40*o,A)):T?(l.fillStyle="#a5b4fc",l.fillText(`reported ${Ci(m.reportedAt)}`,40*o,A)):(l.fillStyle="#fbbf24",l.fillText("estimated from activity",40*o,A)),l.font=p(500,32),l.fillStyle="#b4b2e0",l.textAlign="right",l.fillText(`updated ${Ci(_)}`,r-36*o,A),l.textAlign="left"}function x(m){const d=m.status==="working",v=m.source==="reported"&&m.reportedAt,T=v&&Date.now()-m.reportedAt.getTime()<Iv,_=m.lastActive||m.updatedAt,E=(m.events||[]).slice(-2).reverse(),y=m.screenshot?Nv(m.screenshot,()=>{f="",s&&s()}):null,A=!!(y&&y.ok),M=JSON.stringify([m.status,m.task,m.detail,m.source,T,v&&Ci(m.reportedAt),Ci(_),E.map(R=>[Ci(R.ts),R.message]),m.screenshot,A]);if(M===f)return h;f=M;const b=l.createLinearGradient(0,0,0,a);if(b.addColorStop(0,d?"#0f1738":"#0c0c22"),b.addColorStop(1,d?"#0a0f28":"#08081a"),l.fillStyle=b,l.fillRect(0,0,r,a),A){const R=y.img,P=162*o,D=a-96*o,O=Math.min(r/R.width,(D-P)/R.height),I=R.width*O,B=R.height*O;l.fillStyle="#05050f",l.fillRect(0,P,r,D-P),l.drawImage(R,(r-I)/2,P+(D-P-B)/2,I,B),g(m,d,T,v,_),l.fillStyle="rgba(8,8,26,0.88)",l.fillRect(0,D,r,a-D),l.fillStyle=n.color,l.fillRect(0,D,r,4*o),l.font=p(700,46),l.fillStyle="#ffffff";const X=Xs(l,m.task||"—",r-80*o,1)[0]||"";l.fillText(X,40*o,D+64*o),h.cursor={x:40*o+l.measureText(X).width+12*o,y:D+26*o,h:46*o},h.image=!0}else{l.fillStyle="rgba(255,255,255,0.02)";for(let I=0;I<a;I+=6)l.fillRect(0,I,r,2);g(m,d,T,v,_),l.font=p(700,26),l.fillStyle="#8b8bc4",l.fillText("CURRENT TASK",40*o,206*o),l.font=p(700,70),l.fillStyle=d?"#ffffff":"#d9d9ee";const R=Xs(l,m.task||"—",r-90*o,3),P=80*o;R.forEach((I,B)=>l.fillText(I,40*o,276*o+B*P));const D=276*o+(R.length-1)*P;h.cursor={x:40*o+l.measureText(R[R.length-1]||"").width+14*o,y:D-52*o,h:60*o},m.detail&&(l.font=p(500,36),l.fillStyle="#c4c2f0",l.fillText(Xs(l,m.detail,r-90*o,1)[0]||"",40*o,D+56*o));const O=a-108*o;l.fillStyle="rgba(139,92,246,0.35)",l.fillRect(40*o,O,r-80*o,2*o),E.forEach((I,B)=>{const X=O+44*o+B*42*o;l.font=p(500,28,"ui-monospace, Menlo, monospace"),l.fillStyle="#7a78b4";const V=Ci(I.ts);l.fillText(V,40*o,X);const tt=40*o+l.measureText(V).width+22*o;l.font=p(400,30),l.fillStyle="#d6d5f2",l.fillText(Xs(l,I.message,r-tt-40*o,1)[0]||"",tt,X)}),E.length||(l.font=p(400,30),l.fillStyle="#6f6fa8",l.fillText("No recent events",40*o,O+44*o)),h.image=!1}return h.working=d,u.needsUpdate=!0,h}return{tex:u,draw:x,W:r,H:a,invalidate:()=>f=""}}function Fv(n,t,e,{onNeedsRedraw:i}={}){const s=Ye.M,r=new vt(t.color),a=new Dt;a.position.set(t.desk.x,0,t.desk.z),a.rotation.y=t.desk.rot||0,n.add(a);const o=!!t.desk.wide,c=t.kind==="station",l=o?4.4:3.2,u=1.15,f=.76;a.add(wt(l,.06,u,.02,s.walnut,{y:f}));for(const st of[-1,1])for(const Ft of[-1,1])a.add(K(.045,f-.03,.045,s.blackMetal,{x:st*(l/2-.08),y:(f-.03)/2,z:Ft*(u/2-.08)}));a.add(wt(.5,.55,u-.15,.02,s.whiteMatte,{x:-l/2+.4,y:.42})),a.add(K(l-.04,.012,.012,me(t.color,1.8),{y:f-.035,z:u/2,cast:!1}));const h=o?3.9:2.9,p=o?1600:1280,g=800,x=h*(g/p),m=Uv(t,{width:p,height:g,onNeedsRedraw:()=>i&&i(t.id)}),d=new Dt,v=wt(h+.1,x+.1,.07,.03,s.graphite,{});d.add(v);const T=new Qt({map:m.tex}),_=new Ht(new $t(h,x),T);_.position.z=.037,d.add(_),d.add(K(h*.4,x*.5,.05,s.graphite,{z:-.05}));const E=new Ht(new Wi(1,24),new Qt({color:new vt("#4ade80").multiplyScalar(1.3),transparent:!0})),y=new Ht(new $t(1,1),new Qt({color:r.clone().multiplyScalar(1.4)})),A=new Ht(new $t(h,x*.06),new Qt({color:5267632,transparent:!0,opacity:.06,blending:Fi,depthWrite:!1}));[E,y,A].forEach((st,Ft)=>{st.position.z=.04+Ft*.001,d.add(st)});const M=(st,Ft)=>[(st/p-.5)*h,(.5-Ft/g)*x],b=.25,R=new Dt;if(d.position.y=b+x/2,d.rotation.x=-.06,R.add(d),R.add(Lt(.045,.045,b+x*.3,s.blackMetal,{y:(b+x*.3)/2,z:-.08},12)),R.add(wt(.6,.03,.34,.01,s.blackMetal,{y:.015,z:-.04})),R.position.set(o?-.3:-.45,f+.03,-.25),a.add(R),v.userData.agentId=t.id,_.userData.agentId=t.id,o){const st=wt(1.2,.8,.05,.02,s.graphite,{x:-l/2-.55,y:f+.75,z:-.05});st.rotation.y=.5,a.add(st);const Ft=Gt(new $t(1.1,.7),new Qt({color:new vt(r).multiplyScalar(.35)}),{x:-l/2-.54,y:f+.75,z:-.02,cast:!1});Ft.rotation.y=.5,a.add(Ft),a.add(Lt(.03,.03,.4,s.blackMetal,{x:-l/2-.55,y:f+.2,z:-.07},8))}const P=o?2.2:1.6;a.add(wt(.62,.025,.2,.01,s.whiteMatte,{x:0,y:f+.045,z:.3})),a.add(wt(.07,.03,.11,.015,s.whiteMatte,{x:.5,y:f+.045,z:.32}));const D=Lt(.06,.055,.13,new ot({color:r,roughness:.3}),{x:l/2-.22,y:f+.095,z:.3},16);a.add(D),a.add(Lt(.07,.055,.1,s.ceramic,{x:-l/2+.25,y:f+.08,z:.3},12));for(let st=0;st<5;st++){const Ft=Gt(new _i(.025,.12,5),s.leaf2,{x:-l/2+.25+Math.cos(st)*.03,y:f+.17,z:.3+Math.sin(st)*.03});Ft.rotation.set(Math.sin(st)*.4,0,Math.cos(st)*.4),a.add(Ft)}if(c){a.add(wt(.3,.04,.4,.02,s.graphite,{x:-.9,y:f+.05,z:.25}));for(let st=0;st<12;st++)a.add(K(.05,.01,.05,st%4===3?s.brass:s.whiteMatte,{x:-.97+st%4*.05,y:f+.075,z:.18+Math.floor(st/4)*.07}));for(let st=0;st<4;st++)a.add(K(.42,.012,.3,s.whiteMatte,{x:.9,y:f+.04+st*.013,z:.25}))}let O=null;const I=new Dt;I.position.set(P,0,-1),a.add(I),c||(O=ic(t.color,{scale:1.25}),I.add(O.group));const B=new Ht(new Nn(1.1,2.1,1.1),new Qt({visible:!1}));B.position.y=1.05,B.userData.agentId=t.id,I.add(B),c&&B.position.set(-P,1.05,1);const X=document.createElement("div");X.className="tag",X.dataset.agent=t.id,X.innerHTML=`<span class="tag-dot" style="background:${t.color}"></span><span class="tag-name">${t.name}</span><span class="tag-state"></span>`;const V=new Zl(X);V.position.set(c?-P:0,c?f+x+.75:2.6,c?.8:0),I.add(V);let tt=!1,Y=null;function et(st){st.status!==Y&&(Y=st.status,tt=st.status==="working",X.classList.toggle("working",tt),X.querySelector(".tag-state").textContent=tt?"working":"idle");const Ft=m.draw(st),[te,ie]=M(Ft.dot.x,Ft.dot.y);E.position.set(te,ie,E.position.z),E.scale.setScalar(13*g/640/p*h),E.visible=tt;const[$,j]=M(Ft.cursor.x+9,Ft.cursor.y+Ft.cursor.h/2);y.position.set($,j,y.position.z),y.scale.set(14/p*h*(g/640),Ft.cursor.h/g*x,1),y.userData.show=tt&&!Ft.image,y.visible=y.userData.show,A.visible=tt,T.color.setScalar(tt?1:.6)}function nt(st,Ft=!0){Ft&&(O&&O.update(st,tt?"working":"idle"),tt&&(E.material.opacity=.35+(.5+.5*Math.sin(st*4))*.65,y.visible=y.userData.show&&Math.floor(st*2.2)%2===0,A.position.y=x/2-st*.18%1*x))}function Nt(){_.updateWorldMatrix(!0,!1);const st=new L().setFromMatrixPosition(_.matrixWorld),Ft=new L(0,0,1).applyQuaternion(_.getWorldQuaternion(new In));return{center:st,normal:Ft,width:h,height:x}}return{agent:t,hit:B,frame:_,tag:X,tex:m.tex,setData:et,update:nt,screenView:Nt,isWorking:()=>tt,worldPos:()=>I.getWorldPosition(new L)}}const eu=3600*1e3;function Ov(n,t=Date.now()){const e=n.lastActive?n.lastActive.getTime():0;return n.status==="working"&&e&&t-e>2*eu?"no update for 2h+":n.status==="idle"&&e&&t-e>6*eu?"idle 6h+":/error|fail|blocked|stuck/i.test(n.task||"")?"reports a problem":null}function Bv(n,t,e,{board:i}={}){const s=ic("#e2e8f0",{scale:1.15,ring:!1,manager:!0});n.add(s.group);const r=e.map(([T,_])=>new L(T,0,_));s.group.position.copy(r[0]);let a=0,o=0;const c=document.createElement("div");c.className="tag manager-tag",c.innerHTML='<span class="tag-dot" style="background:#fbbf24"></span><span class="tag-name">Floor Manager</span><span class="tag-state"></span><div class="mgr-tip"></div>';const l=new Zl(c);l.position.set(0,2.45,0),s.group.add(l);const u=new Ht(new Nn(1,2,1),new Qt({visible:!1}));u.position.y=1,u.userData.managerFloor=t.id,s.group.add(u);let f=null,h=null;if(i){const T=document.createElement("canvas");T.width=1024,T.height=640,h=T.getContext("2d"),f=new En(T),f.colorSpace=Se;const _=new Dt;_.add(K(i.w+.1,i.w*.625+.1,.06,Ye.M.graphite,{}));const E=new Ht(new $t(i.w,i.w*.625),new Qt({map:f}));E.position.z=.035,_.add(E),_.position.set(i.x,i.y,i.z),_.rotation.y=i.rot||0,n.add(_)}let p={working:0,total:0,flags:[]};function g(T,_){const E=Date.now(),y=T.map(b=>({a:b,s:_(b.id),flag:Ov(_(b.id),E)})),A=y.filter(b=>b.s.status==="working").length,M=y.filter(b=>b.flag);p={working:A,total:y.length,flags:M},c.querySelector(".tag-state").textContent=M.length?`⚠ ${M.length}`:`${A}/${y.length}`,c.classList.toggle("alert",M.length>0),c.querySelector(".mgr-tip").innerHTML=`<b>${t.label} · ${t.name}</b><br>${A} of ${y.length} working`+(M.length?`<br>${M.map(b=>`⚠ ${b.a.name}: ${b.flag}`).join("<br>")}`:"<br>✓ nobody needs help"),h&&x(y,A,M)}function x(T,_,E){const y=h,A=1024,M=640;y.fillStyle="#0b0a24",y.fillRect(0,0,A,M),y.fillStyle="#fbbf24",y.fillRect(0,0,A,96),y.fillStyle="#1c1404",y.font="800 50px system-ui",y.textBaseline="middle",y.fillText(`FLOOR ${t.label} · STATUS`,34,50),y.textAlign="right",y.font="700 44px system-ui",y.fillText(`${_}/${T.length} working`,A-34,50),y.textAlign="left",T.slice(0,6).forEach((b,R)=>{const P=150+R*78;y.fillStyle=b.a.color,Sn(y,34,P-26,16,52,6),y.fill(),y.fillStyle="#f1f0ff",y.font="700 40px system-ui",y.fillText(b.a.name.length>22?b.a.name.slice(0,21)+"…":b.a.name,68,P),y.textAlign="right",y.fillStyle=b.flag?"#f87171":b.s.status==="working"?"#4ade80":"#94a3b8",y.font="700 36px system-ui",y.fillText(b.flag?`⚠ ${b.flag}`:b.s.status.toUpperCase(),A-34,P),y.textAlign="left"}),E.length?(y.fillStyle="#f87171",y.font="600 34px system-ui",y.fillText(`⚠ Floor Manager is checking on ${E.map(b=>b.a.name).join(", ")}`,34,M-40)):(y.fillStyle="#4ade80",y.font="600 34px system-ui",y.fillText("✓ Floor Manager: nobody needs help right now",34,M-40)),f.needsUpdate=!0}const m=new L;let d=0;function v(T){const _=Math.min(.1,T-d);if(d=T,T<o){s.update(T,"idle");return}const E=r[(a+1)%r.length];m.subVectors(E,s.group.position),m.y=0;const y=m.length();if(y<.05){a=(a+1)%r.length,o=T+2.5+a%2*2;return}const A=Math.min(y,.95*_);s.group.position.addScaledVector(m.normalize(),A);let b=Math.atan2(m.x,m.z)-s.group.rotation.y;b=Math.atan2(Math.sin(b),Math.cos(b)),s.group.rotation.y+=b*Math.min(1,_*6),s.update(T,"walking")}return{update:v,setSummary:g,hit:u,tag:c,summary:()=>p}}const zv="https://s.tradingview.com/embed-widget",Eo=(n,t)=>`${zv}/${n}/?locale=en#${encodeURIComponent(JSON.stringify(t))}`,gi={ticker:()=>Eo("ticker-tape",{symbols:[{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"FX_IDC:USDINR",title:"USD/INR"},{proName:"BINANCE:ETHUSDT",title:"ETH"},{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"TVC:GOLD",title:"Gold"},{proName:"TVC:USOIL",title:"Crude"},{proName:"BINANCE:ASTERUSDT",title:"ASTER"}],showSymbolLogo:!0,colorTheme:"dark",isTransparent:!0,displayMode:"adaptive"}),mini:n=>Eo("mini-symbol-overview",{symbol:n,width:"100%",height:"100%",dateRange:"1D",colorTheme:"dark",isTransparent:!0,autosize:!0}),overview:()=>Eo("market-overview",{colorTheme:"dark",dateRange:"1D",showChart:!0,width:"100%",height:"100%",isTransparent:!0,showSymbolLogo:!0,tabs:[{title:"Crypto",symbols:[{s:"BITSTAMP:BTCUSD",d:"Bitcoin"},{s:"BINANCE:ETHUSDT",d:"Ethereum"},{s:"BINANCE:SOLUSDT",d:"Solana"}]},{title:"Forex",symbols:[{s:"FX_IDC:USDINR",d:"USD/INR"},{s:"FX:EURUSD",d:"EUR/USD"}]},{title:"Indices",symbols:[{s:"FOREXCOM:SPXUSD",d:"S&P 500"},{s:"FOREXCOM:NSXUSD",d:"Nasdaq 100"}]}]})};function kv(n,t){return Mi(1024,640,(e,i,s)=>{e.fillStyle="#0a0f1f",e.fillRect(0,0,i,s),e.strokeStyle="rgba(255,255,255,0.06)";for(let l=0;l<i;l+=64)e.beginPath(),e.moveTo(l,80),e.lineTo(l,s),e.stroke();for(let l=80;l<s;l+=64)e.beginPath(),e.moveTo(0,l),e.lineTo(i,l),e.stroke();e.fillStyle="#e2e8f0",e.font="700 44px system-ui",e.fillText(n,32,56),e.fillStyle="#64748b",e.font="500 26px system-ui",e.textAlign="right",e.fillText("TradingView · live on this floor",i-32,54),e.textAlign="left";let r=s*.6,a=t;const o=[];for(let l=0;l<=i;l+=16)a=(a*9301+49297)%233280,r+=(a/233280-.48)*34,r=Math.max(140,Math.min(s-40,r)),o.push([l,r]);const c=e.createLinearGradient(0,140,0,s);c.addColorStop(0,"rgba(34,197,94,0.35)"),c.addColorStop(1,"rgba(34,197,94,0)"),e.beginPath(),e.moveTo(0,s),o.forEach(([l,u])=>e.lineTo(l,u)),e.lineTo(i,s),e.fillStyle=c,e.fill(),e.beginPath(),o.forEach(([l,u],f)=>f?e.lineTo(l,u):e.moveTo(l,u)),e.strokeStyle="#22c55e",e.lineWidth=4,e.stroke()})}function Hv(n,t,e){const i=Ye.M,s=[],r=900;for(const[o,c]of e.entries()){const l=new Dt;l.position.set(c.x,c.y,c.z),l.rotation.y=c.rotY||0,n.add(l),l.add(K(c.w+.14,c.h+.14,.08,i.graphite,{}));const u=new Ht(new $t(c.w,c.h),new Qt({map:kv(c.title,17+o*31),color:new vt(.9,.9,.9)}));u.position.z=.045,l.add(u),l.add(K(c.w,.03,.03,me("#22c55e",1.6),{y:-c.h/2-.1,z:.05,cast:!1}));const f=document.createElement("div");f.className="tv3d",f.style.width=`${r}px`,f.style.height=`${Math.round(r*c.h/c.w)}px`;const h=new rv(f);h.scale.setScalar(c.w/r),h.position.z=.05,l.add(h),h.visible=!1,s.push({obj:h,el:f,url:c.url,loaded:!1,s:c.w/r})}s.forEach(o=>{o.anchor=o.obj.parent,o.anchor.remove(o.obj),t.add(o.obj)});const a=new jt;return{setLive(o){for(const c of s)o&&!c.loaded&&(c.el.innerHTML=`<iframe src="${c.url}" loading="lazy" allowtransparency="true" frameborder="0" scrolling="no"></iframe>`,c.loaded=!0),c.obj.visible=o,c.el.style.display=o?"":"none"},sync(){for(const o of s)o.obj.visible&&(o.anchor.updateWorldMatrix(!0,!1),a.copy(o.anchor.matrixWorld).multiply(new jt().compose(new L(0,0,.05),new In,new L().setScalar(o.s))),a.decompose(o.obj.position,o.obj.quaternion,o.obj.scale))}}}function Gv(n,t){const e=Ye.M,i=2048,s=965,r=document.createElement("canvas");r.width=i,r.height=s;const a=r.getContext("2d"),o=new En(r);o.colorSpace=Se,o.anisotropy=8;const c=new Dt,l=7,u=l*(s/i);c.add(wt(l+.25,u+.25,.14,.04,e.graphite,{y:0}));const f=new Ht(new $t(l,u),new Qt({map:o,color:new vt(.95,.95,.95)}));f.position.z=.075,c.add(f),c.add(K(l+.2,.03,.03,me("#7c3aed",2.6),{y:-u/2-.14,z:.06,cast:!1})),c.position.set(0,1.9+u/2,-Ot+.75),n.add(c);for(const g of[-1,1])n.add(K(.1,1.95,.1,e.bronze,{x:g*(l/2-.4),y:.97,z:-Ot+.7}));n.add(K(l-.3,.08,.5,e.walnut,{y:.04,z:-Ot+.7}));const h=Object.fromEntries(t.map(g=>[g.id,g]));function p(g,x){const m=a.createLinearGradient(0,0,i,s);m.addColorStop(0,"#0c0d2b"),m.addColorStop(1,"#141038"),a.fillStyle=m,a.fillRect(0,0,i,s),a.fillStyle="rgba(255,255,255,0.018)";for(let _=0;_<s;_+=6)a.fillRect(0,_,i,2);a.fillStyle="#ef4444",a.beginPath(),a.arc(70,72,14,0,Math.PI*2),a.fill(),a.fillStyle="#e9e7ff",a.font="700 52px system-ui, sans-serif",a.fillText("LIVE ACTIVITY FEED",100,90),a.fillStyle="#8b8bc4",a.font="500 46px ui-monospace, Menlo, monospace",a.textAlign="right",a.fillText(Ma(new Date),i-50,90),a.textAlign="left",a.fillStyle="#2d2a6e",a.fillRect(50,125,i-100,3);const d=1440,v=g.slice(-10);v.forEach((_,E)=>{const y=196+E*74,A=h[_.agentId];E===v.length-1&&(a.fillStyle="rgba(139,92,246,0.18)",Sn(a,40,y-50,d-20,66,10),a.fill()),a.fillStyle="#6f6fa8",a.font="500 38px ui-monospace, Menlo, monospace",a.fillText(Ma(_.ts),60,y),a.fillStyle=(A==null?void 0:A.color)||"#fff",a.font="700 38px system-ui, sans-serif";const M=(A==null?void 0:A.name)||_.agentId;a.fillText(M,280,y);const b=a.measureText(M).width;a.fillStyle="#dcdcf5",a.font="400 38px system-ui, sans-serif";let R=_.message;const P=d-310-b-30;for(;a.measureText(R).width>P&&R.length>4;)R=R.slice(0,-2);R!==_.message&&(R=R.trimEnd()+"…"),a.fillText(R,280+b+22,y)});const T=d+70;a.fillStyle="#1a1848",Sn(a,T-20,150,i-T-30,s-190,18),a.fill(),a.fillStyle="#8b8bc4",a.font="700 36px system-ui, sans-serif",a.fillText("AGENTS",T+10,212),t.forEach((_,E)=>{const y=x(_.id),A=270+E*60;a.fillStyle=_.color,a.beginPath(),a.arc(T+20,A-11,11,0,Math.PI*2),a.fill(),a.fillStyle="#ecebff",a.font="600 32px system-ui, sans-serif";let M=_.name;for(;a.measureText(M).width>300&&M.length>3;)M=M.slice(0,-1);a.fillText(M===_.name?M:M+"…",T+44,A),a.fillStyle=y.status==="working"?"#4ade80":"#94a3b8",a.font="600 28px system-ui, sans-serif",a.textAlign="right",a.fillText(y.status==="working"?"● working":"○ idle",i-70,A),a.textAlign="left"}),o.needsUpdate=!0}return{draw:p}}function pr(n,t,e,i=0){const s=Ye.M;return n.add(K(.1,1.6,.1,s.blackMetal,{x:t,y:.8,z:e})),n.add(Lt(.35,.35,.04,s.blackMetal,{x:t,y:.02,z:e},20)),{x:t,y:2.15,z:e,rot:i,w:1.7}}function Vv(n,{cssScene:t}){const e=Ye.M,i=[],s=Hv(n,t,[{title:"Ticker",url:gi.ticker(),x:-2,y:6.35,z:-Ot+.45,w:17.6,h:.55},{title:"BTC / USD",url:gi.mini("BITSTAMP:BTCUSD"),x:-8.4,y:4.45,z:-Ot+.45,w:4.6,h:2.9},{title:"USD / INR",url:gi.mini("FX_IDC:USDINR"),x:-3.5,y:4.45,z:-Ot+.45,w:4.6,h:2.9},{title:"Market overview",url:gi.overview(),x:2.6,y:4.2,z:-Ot+.45,w:6.6,h:3.4}]);return n.add(K(18,.1,.5,e.walnut,{x:-2,y:2.35,z:-Ot+.35})),Pe(n,"TRADING FLOOR · LIVE MARKETS",-2,2.6,-Ot+.62,0,{w:4.4,h:.32,bg:"#052e1a",fg:"#86efac",size:40}),hr(n,-6.4,3.6,7.2,3.4,e.rugIndigo),[-9,-6.4,-3.8].forEach(r=>Mv(n,r,3.4,Math.PI)),ec(n,-6.4,5.4,.5),Sv(n,10.4,-4.6,0),bv(n,-13.6,-1.2,Math.PI/2),ur(n,6.6,3.6,-Ot+.3,0,2.2,1.4,0),ef(n,13.6,2.3,2.4,-Math.PI/2,5,3),ze(n,-14.2,-8.2,1.15,1),ze(n,7.6,7.8,1,0),ze(n,-14.2,7.9,1,0),ze(n,4.2,1.8,.8,0),tc(n,-10.6,5.6),ya(n,10.8,4.8,-Math.PI/4,e.velvetTeal),ya(n,8.6,5.6,Math.PI/6,e.velvetTeal),{markets:s,ups:i,waypoints:[[-1,1.2],[6.5,1.2],[6.5,6.6],[-11.5,6.6],[-11.5,1.2]],board:pr(n,4.6,6.8,-.35),light:[[-6,0],[6,0]]}}function Wv(n,{agents:t}){const e=Ye.M,i=Gv(n,t);return yv(n,-11.4,6.6,0),hr(n,10.4,5.4,6,3.2,e.rugSand),tf(n,10.4,6.6,Math.PI,e.velvetPlum,2.6),ya(n,7.8,5.2,Math.PI/2,e.velvetTeal),ec(n,10.4,5,.55),jl(n,-14.6,1.6,Math.PI/2),nc(n,-12,12,.8,6.2),ur(n,-8.2,4.4,-Ot+.3,0,1.6,1.1,1),ur(n,8.2,4.4,-Ot+.3,0,1.6,1.1,2),ze(n,-14.2,-8.2,1.1,1),ze(n,14.2,7.9,1,0),ze(n,-4.2,-8.2,1,0),ze(n,4.2,-8.2,1,0),ze(n,-6.8,7.6,.9,1),tc(n,13.8,4.2),{feed:i,waypoints:[[-7,0],[-2,4.6],[6,3.6],[7,0],[-1,-1]],board:pr(n,-4.6,6.4,.25),light:[[-6,0],[6,0]]}}function Xv(n,{agents:t,stations:e}){const i=Ye.M,s=[],r=t.filter(p=>p.floor==="studio");Pe(n,"LIVE WORK WALL",-3.6,6.6,-Ot+.55,0,{w:3.4,h:.34,bg:"#1e1b4b",fg:"#e0e7ff",size:44}),r.forEach((p,g)=>{const d=-11.2+g*4.4,v=new Dt;v.position.set(d,4.85,-Ot+.5),n.add(v),v.add(wt(4+.12,2.5+.12,.08,.03,i.graphite,{}));const T=new Ht(new $t(4,2.5),new Qt({map:e.get(p.id).tex}));T.position.z=.045,T.userData.agentId=p.id,v.add(T),v.add(K(4,.03,.03,me(p.color,1.8),{y:-2.5/2-.1,z:.05,cast:!1})),s.push({hit:T})});const a=document.createElement("canvas");a.width=1024,a.height=768;const o=new En(a);o.colorSpace=Se;const c=new Dt;c.position.set(10.6,4.6,-Ot+.5),n.add(c),c.add(wt(4+.12,3+.12,.08,.03,i.graphite,{}));const l=new Ht(new $t(4,3),new Qt({map:o}));l.position.z=.045,c.add(l);function u(p){const g=a.getContext("2d");g.fillStyle="#f8f5ee",g.fillRect(0,0,1024,768),g.fillStyle="#1f1b3a",g.font="800 56px system-ui",g.fillText("STUDIO TASK BOARD",40,80),r.forEach((x,m)=>{const d=p(x.id),v=130+m*150;g.fillStyle=x.color,Sn(g,40,v,944,130,16),g.globalAlpha=.18,g.fill(),g.globalAlpha=1,g.fillStyle=x.color,g.fillRect(40,v,14,130),g.fillStyle="#1f1b3a",g.font="700 40px system-ui",g.fillText(x.name,76,v+48),g.textAlign="right",g.fillStyle=d.status==="working"?"#15803d":"#64748b",g.fillText(d.status.toUpperCase(),964,v+48),g.textAlign="left",g.fillStyle="#334155",g.font="400 34px system-ui",Xs(g,d.task,880,2).forEach((T,_)=>g.fillText(T,76,v+92+_*36))}),o.needsUpdate=!0}Ev(n,-12.6,1.6,.4),Tv(n,-8.4,1.8),jl(n,-14.6,-5.6,Math.PI/2),wv(n,-3.4,.9),Av(n,2.2,.9),vv(n,5,.6,-.2),hr(n,11.4,4.8,0,0,i.rugIndigo,!0),la(n,11.4,4.8,1.2);const f=[];[["#f97316",0],["#22d3ee",2.1],["#a3e635",4.2]].forEach(([p,g])=>{const x=ic(p,{scale:.95,ring:!1});x.group.position.set(11.4+Math.cos(g)*1.75,0,4.8+Math.sin(g)*1.75),x.group.rotation.y=Math.atan2(11.4-x.group.position.x,4.8-x.group.position.z),n.add(x.group),f.push(x)});const h=yn(1.6,.9,(p,g,x)=>{p.fillStyle="#111",p.fillRect(0,0,g,x),p.strokeStyle="#f97316",p.lineWidth=14,p.beginPath(),p.arc(g/2,x/2-10,90,0,Math.PI*1.6),p.stroke(),p.fillStyle="#fff",p.font="700 30px system-ui",p.textAlign="center",p.fillText("LOGO v4",g/2,x-18)});return h.position.set(11.4,1.6,6.9),h.rotation.y=Math.PI,n.add(h),Pe(n,"DESIGN TEAM",11.4,3.2,7.6,Math.PI,{w:2.2,h:.32,bg:"#3b0764",fg:"#f5d0fe",size:44}),nc(n,-12,12,-.2,6.2,3091023),ef(n,14.6,2.6,-1.2,-Math.PI/2,4,3),ur(n,-14.6+.2,4,4.4,Math.PI/2,1.8,1.2,2),ze(n,-14.2,7.9,1.1,1),ze(n,6.2,7.9,1,0),ze(n,14.2,-8.2,1,1),tc(n,-10.4,4.6),{drawBoard:u,ups:s,update:p=>f.forEach((g,x)=>g.update(p+x,Math.sin(p*.4+x)>.3?"working":"idle")),waypoints:[[-6.8,3.6],[6.6,3.2],[7.6,.2],[-6.6,.2]],board:pr(n,-6.2,6.4,.3),light:[[-6,0],[6,0]]}}const Ts=(n,t,e)=>{n.save(),n.font="800 26px system-ui";const i="EXAMPLE DATA",s=n.measureText(i).width;n.fillStyle="rgba(251,191,36,0.9)",Sn(n,t-s-54,e-52,s+30,38,8),n.fill(),n.fillStyle="#1c1404",n.textBaseline="middle",n.fillText(i,t-s-39,e-32),n.restore()};function mr(n,t,e,i){n.fillStyle="#070b1a",n.fillRect(0,0,t,2e3),n.fillStyle=i,n.fillRect(0,0,t,8),n.fillStyle="#e2e8f0",n.font="800 40px system-ui",n.textBaseline="alphabetic",n.fillText(e,28,62)}function nu(n,t,e){mr(n,t,"PROPERTY DASHBOARD","#f59e0b"),[["Parcels tracked","1,248"],["Registered","1,032"],["In possession","978"],["In dispute","41"],["Flagged","17"]].forEach(([a,o],c)=>{const l=28+c%3*((t-56)/3),u=90+Math.floor(c/3)*130;n.fillStyle="#111a33",Sn(n,l,u,(t-56)/3-14,116,12),n.fill(),n.fillStyle=c===3?"#f87171":c===4?"#fbbf24":"#f8fafc",n.font="800 46px system-ui",n.fillText(o,l+18,u+58),n.fillStyle="#94a3b8",n.font="500 24px system-ui",n.fillText(a,l+18,u+96)});const s=[62,48,80,35,55,72,40],r=e-80;n.fillStyle="#94a3b8",n.font="600 22px system-ui",n.fillText("Est. profit by region (example)",t*.36+30,285),s.forEach((a,o)=>{n.fillStyle=o%2?"#38bdf8":"#22c55e",n.fillRect(t*.36+30+o*(t*.6/7),r-a*2.4,t*.6/7-14,a*2.4)}),Ts(n,t,e)}function iu(n,t,e){mr(n,t,"PARCEL MAP","#22d3ee"),n.fillStyle="#0b2530",n.fillRect(20,84,t-40,e-104);let i=7;const s=()=>(i=(i*9301+49297)%233280)/233280;for(let a=0;a<9;a++){const o=60+s()*(t-120),c=120+s()*(e-200);n.beginPath();for(let l=0;l<7;l++){const u=l/7*Math.PI*2,f=60+s()*70;n.lineTo(o+Math.cos(u)*f,c+Math.sin(u)*f*.7)}n.closePath(),n.fillStyle=`hsla(${180+a*14},45%,${18+a%3*5}%,1)`,n.fill(),n.strokeStyle="rgba(148,233,255,0.35)",n.lineWidth=2,n.stroke()}n.strokeStyle="rgba(255,255,255,0.25)",n.lineWidth=5,n.beginPath(),n.moveTo(20,e*.7),n.bezierCurveTo(t*.3,e*.4,t*.6,e*.9,t-20,e*.45),n.stroke();const r=["#22c55e","#22c55e","#fbbf24","#f87171","#38bdf8"];for(let a=0;a<26;a++){const o=50+s()*(t-100),c=110+s()*(e-190);n.fillStyle=r[a%5],n.beginPath(),n.arc(o,c,9,0,Math.PI*2),n.fill(),n.strokeStyle="#fff",n.lineWidth=2,n.stroke()}n.fillStyle="rgba(7,11,26,0.8)",Sn(n,34,e-150,330,104,10),n.fill(),[["Registered","#22c55e"],["Pending","#fbbf24"],["Dispute","#f87171"]].forEach(([a,o],c)=>{n.fillStyle=o,n.beginPath(),n.arc(56,e-124+c*30,8,0,7),n.fill(),n.fillStyle="#e2e8f0",n.font="500 22px system-ui",n.fillText(a,74,e-116+c*30)}),n.fillStyle="#94a3b8",n.font="500 20px system-ui",n.fillText("not real locations",t-240,62),Ts(n,t,e)}const su=[["Deed reading (OCR + AI)","#22c55e"],["Parcel classification","#22c55e"],["Registration / possession check","#fbbf24"],["Profit calculation","#22c55e"],["Circle-rate refresh","#38bdf8"],["Land-deal data refresh","#38bdf8"],["Project news scan","#22c55e"]];function Yv(n,t,e,i=0){mr(n,t,"AUTOMATION STATUS","#22c55e"),su.forEach(([s,r],a)=>{const o=104+a*((e-150)/su.length),c=(i*(.05+a*.013)+a*.17)%1;n.fillStyle="#cbd5e1",n.font="600 25px system-ui",n.fillText(s,28,o+22),n.fillStyle="#111a33",Sn(n,t*.55,o+2,t*.4,24,12),n.fill(),n.fillStyle=r,Sn(n,t*.55,o+2,Math.max(24,t*.4*c),24,12),n.fill()}),Ts(n,t,e)}const To=["Circle rates revised in District A (example)","New ring road approved near Parcel cluster 7","Registry office hours extended this month","Land-deal volume up 4% week on week","Metro extension tender opens next quarter","Court listing update for 3 tracked cases"];function qv(n,t,e,i=0){mr(n,t,"NEWS FEED","#a78bfa");const s=Math.floor(i/4)%To.length;for(let r=0;r<5;r++){const a=96+r*92,o=To[(r+s)%To.length];n.fillStyle=r===0?"rgba(167,139,250,0.18)":"#0d1428",Sn(n,20,a,t-40,80,10),n.fill(),n.fillStyle="#a78bfa",n.font="700 20px ui-monospace",n.fillText(`EXAMPLE · ${String(9+r).padStart(2,"0")}:${String(r*13%60).padStart(2,"0")}`,36,a+30),n.fillStyle="#e2e8f0",n.font="600 26px system-ui",n.fillText(o.length>44?o.slice(0,43)+"…":o,36,a+64)}Ts(n,t,e)}function $v(n,t,e,i=0){mr(n,t,"HYBRID INFRA · ON-SITE + CLOUD","#38bdf8");const s=(c,l,u,f,h,p,g)=>{n.fillStyle="#0d1428",Sn(n,c,l,u,f,14),n.fill(),n.strokeStyle=g,n.lineWidth=3,n.stroke(),n.fillStyle=g,n.font="800 28px system-ui",n.fillText(h,c+18,l+40),p.forEach(([x,m,d],v)=>{n.fillStyle="#94a3b8",n.font="500 22px system-ui",n.fillText(x,c+18,l+80+v*34),n.fillStyle=d?"#4ade80":"#fbbf24",n.font="700 22px system-ui",n.textAlign="right",n.fillText(m,c+u-18,l+80+v*34),n.textAlign="left"})},r=(t-110)/2;s(28,90,r,e-160,"ON-SITE (B1)",[["Racks online","12 / 12",1],["CRAC cooling","OK · 22°C",1],["UPS","mains · 100%",1],["Generator","standby",1],["ISP A / ISP B","up / up",1]],"#22c55e"),s(28+r+54,90,r,e-160,"CLOUD",[["Uplink","2 × 1 Gbps",1],["Backup sync","last 02:00",1],["AI inference","healthy",1],["Object storage","68% used",1],["Failover","ready",1]],"#38bdf8");const a=28+r+27,o=e/2;n.fillStyle="#38bdf8";for(let c=0;c<3;c++){const l=(i*.8+c/3)%1;n.globalAlpha=1-l,n.beginPath(),n.arc(a,o-40+l*80,7,0,7),n.fill()}n.globalAlpha=1,Ts(n,t,e)}function Li(n,t,e,i,{px:s=900,x:r,y:a,z:o,rotY:c=0,frame:l=!0}={}){const u=Ye.M,f=document.createElement("canvas");f.width=s,f.height=Math.round(s*e/t);const h=new En(f);h.colorSpace=Se,h.anisotropy=8;const p=new Dt;p.position.set(r,a,o),p.rotation.y=c,n.add(p),l&&p.add(wt(t+.12,e+.12,.08,.03,u.graphite,{}));const g=new Ht(new $t(t,e),new Qt({map:h}));g.position.z=.045,p.add(g);const x=m=>{i(f.getContext("2d"),f.width,f.height,m),h.needsUpdate=!0};return x(0),{redraw:x,group:p}}function Ml(n,t,e,i,s){const r=new Dt;return r.position.set(t,e,i),r.rotation.y=s,n.add(r),r.add(wt(.22,.34,.05,.02,new ot({color:988970,metalness:.6,roughness:.3}),{})),r.add(Gt(new Wi(.06,20),me("#22d3ee",2.2),{y:-.04,z:.03,cast:!1})),r.add(K(.14,.05,.01,me("#4ade80",1.8),{y:.1,z:.03,cast:!1})),r}function ca(n,t,e,i,s=4937059){const r=K(1,2.25,.08,new ot({color:s,metalness:.5,roughness:.4}),{x:t,y:1.125,z:e});return r.rotation.y=i,n.add(r),r}function ru(n,t,e,i,s){for(let r=0;r<i;r++)nf(n,t+r*.75,e,s)}function au(n,t,e,i){const s=new Dt;s.position.set(t,0,e),s.rotation.y=i,n.add(s),s.add(wt(1.8,2,.9,.03,new ot({color:15067115,roughness:.4}),{y:1}));for(let r=0;r<9;r++)s.add(K(1.5,.03,.02,Ye.M.graphite,{y:.4+r*.12,z:.46,cast:!1}));return s.add(K(.35,.22,.02,me("#38bdf8",1.4),{x:.55,y:1.65,z:.46,cast:!1})),s}function sf(n,t,e,i,s,{perforated:r=!1,lifted:a=[]}={}){const o=Mi(256,256,(l,u,f)=>{if(l.fillStyle=r?"#9aa0ae":"#b9bccb",l.fillRect(0,0,u,f),l.strokeStyle="#6b7080",l.lineWidth=6,l.strokeRect(0,0,u,f),r){l.fillStyle="#585d6c";for(let h=24;h<u;h+=22)for(let p=24;p<f;p+=22)l.beginPath(),l.arc(h,p,5,0,7),l.fill()}});o.wrapS=o.wrapT=xs,o.repeat.set((i-t)/.6,(s-e)/.6);const c=Gt(new $t(i-t,s-e),new ot({map:o,roughness:.7,metalness:.1}),{x:(t+i)/2,y:.11,z:(e+s)/2,cast:!1});c.rotation.x=-Math.PI/2,n.add(c),n.add(K(i-t,.1,.04,Ye.M.blackMetal,{x:(t+i)/2,y:.05,z:s}));for(const[l,u]of a){n.add(K(.58,.02,.58,new ot({color:1381663}),{x:l,y:.115,z:u,cast:!1}));const f=K(.58,.03,.58,new ot({color:12172491}),{x:l+.1,y:.4,z:u+.35});f.rotation.x=1,n.add(f),["#3b82f6","#f59e0b","#22c55e"].forEach((h,p)=>{const g=Lt(.02,.02,.56,new ot({color:h}),{x:l-.18+p*.12,y:.13,z:u},6);g.rotation.x=Math.PI/2,n.add(g)})}}function yl(n,t,e,i,s,r,a=2.4){return Pe(n,t,e,i,s,r,{w:a,h:.34,bg:"#7f1d1d",fg:"#fee2e2",size:38})}function Zv(n){const t=Ye.M,e=new ot({color:4867411,roughness:.85});ks(n,[[-8.2,-9,-8.2,-4.7],[-8.2,-3.6,-8.2,-2.6],[-15,-2.6,-8.2,-2.6]],3,{tint:14207231}),Pe(n,"DEPARTMENT HEAD",-11.6,3.25,-2.6,0,{w:2.6,h:.3,bg:"#312e81",fg:"#e0e7ff",size:40}),la(n,-13.2,-4,.75),[0,1,2,3].forEach(_=>{const E=_/4*Math.PI*2+.6;Mn(n,-13.2+Math.cos(E)*1.1,-4+Math.sin(E)*1.1,Math.atan2(Math.cos(E),Math.sin(E))+Math.PI)}),jl(n,-14.6,-7,Math.PI/2),ze(n,-9,-8.4,.9,1),hr(n,-11.6,-5.4,6,5.2,t.rugIndigo),ks(n,[[-8.2,-2.6,-8.2,0],[-8.2,1.1,-8.2,4.2],[-15,4.2,-8.2,4.2]],3,{tint:13166335}),Pe(n,"MEETING ROOM · 10",-11.6,3.25,4.2,0,{w:2.6,h:.3,bg:"#0c4a6e",fg:"#e0f2fe",size:40}),Qh(n,-11,.8,3.4,1.3,10),Li(n,2.6,1.6,nu,{x:-14.65,y:2,z:-.3,rotY:Math.PI/2}),Li(n,2.6,1.6,iu,{x:-14.65,y:2,z:2.4,rotY:Math.PI/2}),sf(n,-7.6,-3.6,7.4,6,{lifted:[[-6.9,1.8],[6.6,-2.8]]});const i=new ot({color:15196888,roughness:.5}),s=["#f59e0b","#38bdf8","#22c55e","#f472b6"];[-4.8,0,4.8].forEach((_,E)=>{for(let y=0;y<2;y++)for(let A=0;A<2;A++){const M=_-.78+A*1.56,b=y?-.825:-1.575,R=y?1:-1;n.add(wt(1.5,.05,.75,.02,i,{x:M,y:.86,z:b}));for(const B of[-1,1])n.add(K(.05,.84,.6,t.blackMetal,{x:M+B*.7,y:.42,z:b}));const P=b-R*.26,D=y?0:Math.PI,O=wt(.62,.38,.03,.01,t.graphite,{x:M,y:1.25,z:P});O.rotation.y=D,n.add(O);const I=Gt(new $t(.56,.32),new Qt({color:new vt(s[(E+y+A)%4]).multiplyScalar(.5)}),{x:M,y:1.25,z:P+R*.02,cast:!1});I.rotation.y=D,n.add(I),n.add(K(.03,.3,.03,t.blackMetal,{x:M,y:1,z:P-R*.03})),n.add(K(.2,.04,.06,me("#facc15",1.2),{x:M+.5,y:.9,z:P,cast:!1})),Mn(n,M,b+R*.75,y?Math.PI:0)}n.add(K(.06,.3,1.5,i,{x:_,y:1.05,z:-1.2})),n.add(K(.05,2,.05,t.blackMetal,{x:_,y:1.95,z:-1.2}))}),n.add(K(13.4,.04,.4,t.blackMetal,{y:2.95,z:-1.2,cast:!1}));for(let _=-6.6;_<=6.6;_+=.5)n.add(K(.03,.03,.4,t.blackMetal,{x:_,y:2.97,z:-1.2,cast:!1}));["#3b82f6","#f59e0b","#22c55e","#e11d48"].forEach((_,E)=>{const y=Lt(.025,.025,13.2,new ot({color:_}),{y:3,z:-1.33+E*.09,cast:!1},6);y.rotation.z=Math.PI/2,n.add(y)});for(const _ of[-6.6,6.6])n.add(Lt(.01,.01,4,t.blackMetal,{x:_,y:5,z:-1.2},4));const r=Mi(600,600,(_,E,y)=>{_.strokeStyle="#fbbf24",_.lineWidth=10,_.setLineDash([36,22]),_.strokeRect(10,10,E-20,y-20),_.fillStyle="rgba(251,191,36,0.85)",_.font="800 64px system-ui",_.textAlign="center",_.fillText("FUTURE BAY",E/2,y/2-10),_.font="700 56px system-ui",_.fillText("+4 desks",E/2,y/2+64)});[-2.6,2.6].forEach(_=>{const E=Gt(new $t(3.2,3),new Qt({map:r,transparent:!0,depthWrite:!1}),{x:_,y:.125,z:3.8,cast:!1});E.rotation.x=-Math.PI/2,n.add(E)}),Pe(n,"OPEN OFFICE · 12 DESKS → 20",0,3.35,-1.2,0,{w:3.6,h:.3,bg:"#1f2937",fg:"#fde68a",size:38}),Pe(n,"LIVE MONITORING · PROPERTY INTELLIGENCE  (EXAMPLE DATA)",0,5,-Ot+.5,0,{w:9,h:.36,bg:"#111827",fg:"#fde68a",size:40});const a=2.8,o=[nu,iu,Yv,qv,$v].map((_,E)=>Li(n,a,1.9,_,{x:-5.9+E*2.95,y:3.6,z:-Ot+.5,px:840})),c=Li(n,14.6,.32,(_,E,y,A=0)=>{_.fillStyle="#0b1020",_.fillRect(0,0,E,y),_.fillStyle="#fde68a",_.font="700 30px system-ui",_.textBaseline="middle";const M="EXAMPLE DATA ·  17 deeds flagged for review  ·  circle-rate refresh queued for 02:00  ·  ISP A + ISP B up  ·  cloud backup synced  ·  3 field visits scheduled  ·  ",b=_.measureText(M).width,R=A*80%b;_.fillText(M+M+M,-R,y/2)},{x:0,y:2.38,z:-Ot+.5,px:2400,frame:!1});n.add(wt(6.4,.06,.9,.02,t.walnut,{x:-1,y:.78,z:-6.3}));for(const _ of[-1,1])n.add(K(.06,.75,.7,t.blackMetal,{x:-1+_*3,y:.4,z:-6.3}));[-3,-1,1].forEach(_=>{n.add(wt(.9,.5,.04,.01,t.graphite,{x:_,y:1.3,z:-6.55})),n.add(Gt(new $t(.84,.45),new Qt({color:new vt("#0ea5e9").multiplyScalar(.55)}),{x:_,y:1.3,z:-6.525,cast:!1})),Mn(n,_,-5.6,Math.PI)}),Pe(n,"AI SUPERVISION DESK",-1,.55,-5.83,0,{w:1.8,h:.2,bg:"#0c4a6e",fg:"#e0f2fe",size:34}),Pi(n,[[7.9,-9,7.9,-6.2],[7.9,-6.2,10.8,-6.2],[10.8,-6.2,10.8,-9]],3,new ot({color:14078944,roughness:.7})),ca(n,8.7,-6.12,0,9146275),ca(n,10,-6.12,0,9146275),Pe(n,"🚻 TOILETS",9.35,2.6,-6.08,0,{w:1.8,h:.3,bg:"#1e3a8a",fg:"#fff",size:40}),ks(n,[[7.9,-5.6,10.8,-5.6],[7.9,-5.6,7.9,-3],[7.9,-3,9,-3],[10,-3,10.8,-3],[10.8,-3,10.8,-5.6]],2.8,{tint:12573694}),la(n,9.35,-4.3,.5),Mn(n,9.35,-5,0),n.add(wt(1.2,.7,.05,.02,t.graphite,{x:9.35,y:1.6,z:-5.5})),Pe(n,"VIDEO CALL",9.35,3,-3,0,{w:1.6,h:.26,bg:"#1e3a8a",fg:"#fff",size:38}),Pe(n,"WELCOME · VISITORS & CLIENTS",13,3,-8.75,0,{w:3.6,h:.34,bg:"#3f1d0b",fg:"#fde68a",size:40}),n.add(wt(2.4,1.05,.7,.04,t.walnut,{x:12.6,y:.53,z:-6.6})),n.add(K(2.5,.05,.8,t.marbleWhite,{x:12.6,y:1.07,z:-6.6})),Mn(n,12.6,-7.4,0),tf(n,12.9,-1.4,Math.PI,t.linen,2.4),ya(n,11.4,-3.4,Math.PI/2,t.velvetTeal),ec(n,12.9,-3,.5),ze(n,14.4,-4.6,1,1),ze(n,11.2,-8.4,.8,0),ks(n,[[9.6,0,11.6,0],[12.7,0,15,0],[9.6,0,9.6,4.2]],3,{tint:16639626}),Pi(n,[[9.6,4.3,15,4.3]],3,new ot({color:2761024,roughness:.6})),hr(n,12.3,2.1,5,3.8,t.rugSand),Qh(n,11.8,2.1,2.4,1.1,6);const l=Li(n,2.9,1.65,Kv,{x:14.75,y:1.85,z:2.1,rotY:-Math.PI/2,px:1100}),u=yn(3.4,.7,(_,E,y)=>{_.fillStyle="#2a2140",_.fillRect(0,0,E,y),_.fillStyle="#fbbf24",_.font="800 70px Georgia, serif",_.textAlign="center",_.textBaseline="middle",_.fillText("SIDATREYA",E/2,y*.38),_.fillStyle="#e9d5ff",_.font="600 36px system-ui",_.fillText("PROPERTY & LAND INTELLIGENCE",E/2,y*.76)},{frame:!1});u.position.set(12.3,2.2,4.2),u.rotation.y=Math.PI,n.add(u),Pe(n,"CLIENT PRESENTATION ROOM",12.3,3.25,0,0,{w:3.4,h:.3,bg:"#713f12",fg:"#fef3c7",size:40}),ze(n,10.1,3.7,.8,0),Pi(n,[[9.6,4.8,15,4.8],[9.6,4.8,9.6,5.6],[9.6,6.6,9.6,9]],3.2,e),Pi(n,[[9.6,9,15,9]],1.1,e),n.add(K(5.4,.12,.2,me("#ef4444",1.2),{x:12.3,y:3.15,z:4.7,cast:!1})),ca(n,9.56,6.1,Math.PI/2,7020576),Ml(n,9.48,1.35,6.85,-Math.PI/2),Li(n,.5,.32,(_,E,y)=>{_.fillStyle="#04131c",_.fillRect(0,0,E,y),_.fillStyle="#67e8f9",_.font="800 70px ui-monospace",_.fillText("20°C",20,90),_.font="700 44px ui-monospace",_.fillText("RH 45%",24,160),_.fillStyle="#4ade80",_.fillText("● STABLE",24,220)},{x:9.48,y:1.6,z:7.6,rotY:-Math.PI/2,px:400}),yl(n,"DEED RECORDS · RESTRICTED",9.46,2.75,6.6,-Math.PI/2,2.8),Pe(n,"FIRE-RATED 2 HR · CLIMATE CONTROLLED",9.46,2.4,6.6,-Math.PI/2,{w:2.8,h:.22,bg:"#450a0a",fg:"#fecaca",size:30});const f=new ot({color:7041664,metalness:.7,roughness:.35}),h=[14075809,13219210,14866104].map(_=>new ot({color:_,roughness:.9}));for(let _=0;_<4;_++){const E=5.5+_*.85;n.add(K(4,2.4,.5,f,{x:12.6,y:1.2,z:E}));for(let A=0;A<4;A++)for(let M=0;M<9;M++)n.add(K(.36,.42,.06,h[(_+A+M)%3],{x:10.9+M*.42,y:.35+A*.56,z:E+.27,cast:!1}));const y=Lt(.12,.12,.05,t.brass,{x:14.7,y:1.2,z:E+.27},12);y.rotation.x=Math.PI/2,n.add(y)}n.add(wt(2.6,.06,.9,.02,i,{x:7.6,y:.86,z:7.4}));for(const _ of[-1,1])n.add(K(.05,.84,.75,t.blackMetal,{x:7.6+_*1.2,y:.42,z:7.4}));n.add(wt(.9,.4,.6,.04,new ot({color:15987958,roughness:.4}),{x:7,y:1.1,z:7.4}));const p=K(.7,.03,.45,t.blackMetal,{x:7,y:1.38,z:7.15});p.rotation.x=-.4,n.add(p);for(let _=0;_<6;_++)n.add(K(.6,.008,.4,t.whiteMatte,{x:7,y:1.4+_*.01,z:7.15,cast:!1}));n.add(K(.5,.04,.02,me("#22d3ee",2),{x:7,y:1,z:7.71,cast:!1})),n.add(wt(.8,.5,.04,.01,t.graphite,{x:8.3,y:1.35,z:7.15})),n.add(Gt(new $t(.74,.44),new Qt({color:new vt("#22d3ee").multiplyScalar(.5)}),{x:8.3,y:1.35,z:7.175,cast:!1})),Mn(n,7.6,8.3,Math.PI),Pe(n,"SCAN & INTAKE → AI PIPELINE",7.6,2.2,6.85,0,{w:2.8,h:.3,bg:"#083344",fg:"#a5f3fc",size:38});const g=Mi(256,16,(_,E,y)=>{_.fillStyle="#000",_.fillRect(0,0,E,y);for(let A=0;A<E;A+=64)_.fillStyle="#22d3ee",_.fillRect(A,0,30,y)});g.wrapS=xs,g.repeat.set(12,1);const x=new Qt({map:g,transparent:!0,opacity:.9,blending:Fi,depthWrite:!1}),m=Gt(new $t(15,.08),x,{x:-.6,y:3.12,z:6.9,cast:!1});m.rotation.x=-Math.PI/2,n.add(m);const d=Gt(new $t(1.8,.08),x,{x:6.9,y:2.25,z:6.88,cast:!1});d.rotation.z=Math.PI/2,n.add(d),n.add(K(15,.06,.18,t.blackMetal,{x:-.6,y:3.08,z:6.9,cast:!1})),ks(n,[[-10.4,4.8,-10.4,9]],2.6,{tint:16639626}),n.add(wt(4.2,.95,.65,.03,t.walnut,{x:-12.7,y:.48,z:8.5})),n.add(K(4.3,.05,.75,t.marbleWhite,{x:-12.7,y:.98,z:8.5})),n.add(wt(.8,1.9,.7,.04,new ot({color:13751771,metalness:.7,roughness:.3}),{x:-14.5,y:.95,z:5.4})),n.add(Lt(.12,.1,.25,t.ceramic,{x:-12,y:1.13,z:8.5},14)),n.add(wt(.45,.4,.35,.03,t.blackMetal,{x:-13.4,y:1.2,z:8.5})),la(n,-12.6,6.4,.6),Mn(n,-13.4,6.4,Math.PI/2),Mn(n,-11.8,6.4,-Math.PI/2),Pe(n,"PANTRY",-12.7,2.3,9.1,0,{w:1.4,h:.28,bg:"#78350f",fg:"#fef3c7",size:40});const v=new ot({color:3621201,roughness:.8});Pi(n,[[-10.2,6.8,-8.2,6.8],[-8.2,6.8,-8.2,7.4]],2.8,v),Pi(n,[[-8.2,8.4,-8.2,9]],2.8,v),nf(n,-9.6,8.2,0),Ml(n,-8.1,1.3,7.8,Math.PI/2),yl(n,"NETWORK · RESTRICTED",-9.2,2.45,6.7,Math.PI,1.9),ur(n,-14.65,4.2,-5.8,Math.PI/2,1.6,1,1),ze(n,-7.2,7.4,1,0),ze(n,5.6,5.6,.9,1),ze(n,-7.2,-8.2,1,1),nc(n,-6,6,2.6,6.2,3158090);let T=-1;return{waypoints:[[-6.4,1.2],[6.4,1.2],[6.4,-4.2],[-6.4,-4.2]],board:pr(n,5.2,4.2,-.3),light:[[-10,0],[2,0],[12,2]],update(_){g.offset.x=-_*.6,!(_-T<.5)&&(T=_,o[2].redraw(_),o[3].redraw(_),o[4].redraw(_),c.redraw(_),l.redraw(_))}}}function Kv(n,t,e,i=0){const s=Math.floor(i/6)%3;n.fillStyle="#0f0a1e",n.fillRect(0,0,t,e);const r=n.createLinearGradient(0,0,t,e);if(r.addColorStop(0,"#1e1145"),r.addColorStop(1,"#3b1d0b"),n.fillStyle=r,n.fillRect(0,0,t,e),n.fillStyle="#fbbf24",n.font="800 50px Georgia, serif",n.fillText("Sidatreya · Property & Land Intelligence",40,80),n.fillStyle="#e9d5ff",n.font="600 32px system-ui",n.fillText(["Portfolio overview","Site visual · Parcel cluster 7","Value growth (illustrative)"][s],40,130),s===1){n.fillStyle="#365314",n.fillRect(60,170,t-120,e-250),n.strokeStyle="#fde68a",n.setLineDash([16,10]),n.lineWidth=6,n.strokeRect(160,220,t-320,e-360),n.setLineDash([]),[[260,280,220,140],[540,300,180,200],[780,260,120,120]].forEach(([a,o,c,l])=>{n.fillStyle="#e5e7eb",n.fillRect(a,o,c,l),n.fillStyle="#94a3b8",n.fillRect(a,o,c,18)});for(let a=0;a<14;a++)n.fillStyle="#4d7c0f",n.beginPath(),n.arc(120+a*62,e-110,22,0,7),n.fill()}else if(s===2){n.strokeStyle="#22c55e",n.lineWidth=8,n.beginPath();for(let a=0;a<=10;a++){const o=80+a*((t-160)/10),c=e-120-Math.pow(a,1.4)*22-Math.sin(a)*14;a?n.lineTo(o,c):n.moveTo(o,c)}n.stroke(),n.fillStyle="#94a3b8",n.font="500 24px system-ui",n.fillText("Indexed value, illustrative only",80,e-70)}else[["Parcels","1,248"],["Countries","India first"],["Clients served","38"]].forEach(([a,o],c)=>{const l=60+c*((t-120)/3);n.fillStyle="rgba(255,255,255,0.06)",Sn(n,l,190,(t-120)/3-30,220,18),n.fill(),n.fillStyle="#fff",n.font="800 60px system-ui",n.fillText(o,l+26,300),n.fillStyle="#c4b5fd",n.font="600 30px system-ui",n.fillText(a,l+26,360)});Ts(n,t,e)}function Jv(n){const t=Ye.M,e=new ot({color:4935516,roughness:.85});sf(n,-14.8,-8.8,3.8,3.6,{perforated:!0,lifted:[[-1,2.4]]}),Pi(n,[[3.8,-8.8,3.8,-6.9],[3.8,-5.8,3.8,3.6],[-14.8,3.6,3.8,3.6]],3.2,e),ru(n,-11.6,-4.6,10,0),ru(n,-11.6,-1.4,10,Math.PI),n.add(K(7.6,.04,2.2,new ot({color:9684477,transparent:!0,opacity:.25,depthWrite:!1}),{x:-8.2,y:2.15,z:-3,cast:!1})),Pe(n,"COLD AISLE",-8.2,2.4,-3,0,{w:1.6,h:.26,bg:"#1e3a8a",fg:"#dbeafe",size:40}),au(n,-14,-6.6,Math.PI/2),au(n,-14,-.6,Math.PI/2),Pe(n,"CRAC 1",-13.5,2.3,-6.6,Math.PI/2,{w:1,h:.24,bg:"#0c4a6e",fg:"#e0f2fe",size:40}),Pe(n,"CRAC 2",-13.5,2.3,-.6,Math.PI/2,{w:1,h:.24,bg:"#0c4a6e",fg:"#e0f2fe",size:40});const i=(h,p,g,x,m)=>{const d=new Dt;d.position.set(h,0,p),d.rotation.y=g,n.add(d),d.add(wt(.9,1.2,.3,.03,new ot({color:2042167,metalness:.5}),{y:1.6})),d.add(K(.6,.06,.02,me(m,1.8),{y:1.9,z:.16,cast:!1})),d.add(Lt(.07,.07,1,new ot({color:m==="#f59e0b"?16096779:3900150}),{y:2.7},10));const v=yn(1.2,.3,(T,_,E)=>{T.fillStyle=m,T.fillRect(0,0,_,E),T.fillStyle="#0b0b10",T.font="800 46px system-ui",T.textAlign="center",T.textBaseline="middle",T.fillText(x,_/2,E/2+2)},{frame:!1});v.position.set(0,.8,.12),d.add(v)};i(-3,-8.75,0,"ISP A","#f59e0b"),i(-14.75,2.4,Math.PI/2,"ISP B","#60a5fa");const s=yn(5.6,.9,(h,p,g)=>{h.fillStyle="#0b1324",h.fillRect(0,0,p,g),h.fillStyle="#38bdf8",h.fillRect(0,0,16,g),h.fillStyle="#e0f2fe",h.font="800 84px system-ui",h.textBaseline="middle",h.fillText("Hybrid: on-site servers + cloud",50,g/2+4)},{pxPerUnit:200});s.position.set(-5.4,4.2,-8.68),n.add(s);const r=Li(n,3.2,1.9,(h,p,g,x=0)=>{h.fillStyle="#060b18",h.fillRect(0,0,p,g),h.fillStyle="#e2e8f0",h.font="800 40px system-ui",h.fillText("CLOUD UPLINK",30,60);for(let m=0;m<3;m++){h.fillStyle="#1f2937",h.fillRect(60+m*70,200,56,180);for(let d=0;d<6;d++)h.fillStyle=(d+m)%3?"#22c55e":"#38bdf8",h.fillRect(70+m*70,214+d*28,10,8)}h.fillStyle="#94a3b8",h.font="600 26px system-ui",h.fillText("ON-SITE · B1",60,420),h.fillStyle="#e0f2fe",[[p-230,230,60],[p-170,200,75],[p-100,235,55]].forEach(([m,d,v])=>{h.beginPath(),h.arc(m,d,v,0,7),h.fill()}),h.fillRect(p-290,230,245,60),h.fillStyle="#94a3b8",h.fillText("CLOUD",p-210,340),h.strokeStyle="#38bdf8",h.lineWidth=6,h.setLineDash([18,12]),h.lineDashOffset=-x*60,h.beginPath(),h.moveTo(280,290),h.lineTo(p-300,260),h.stroke(),h.setLineDash([]),h.fillStyle="#4ade80",h.font="700 26px system-ui",h.fillText("● LINK UP · 2 × 1 Gbps (example)",30,g-30)},{x:.4,y:4,z:-8.6,px:800});ca(n,3.86,-6.35,Math.PI/2,3359061),Ml(n,3.95,1.35,-5.55,Math.PI/2),yl(n,"SERVER ROOM · AUTHORISED ONLY",3.95,2.75,-6.35,Math.PI/2,3),Pe(n,"UPS & BATTERY BANK",9,2.7,-2.7,0,{w:2.6,h:.3,bg:"#14532d",fg:"#dcfce7",size:40});for(let h=0;h<2;h++)n.add(wt(1.1,2,.85,.03,new ot({color:2042167,metalness:.5,roughness:.4}),{x:5.4+h*1.3,y:1,z:-1.8})),n.add(K(.4,.25,.02,me("#4ade80",1.5),{x:5.4+h*1.3,y:1.6,z:-1.36,cast:!1}));for(let h=0;h<2;h++)for(let p=0;p<6;p++)n.add(K(.75,1.6,.7,new ot({color:4937059,roughness:.6}),{x:8.4+p*.85,y:.8,z:-1.8+h*2.4})),n.add(K(.5,.05,.02,me(p%3?"#4ade80":"#facc15",1.4),{x:8.4+p*.85,y:1.4,z:-1.8+h*2.4+(h?-.36:.36),cast:!1}));const a=new Dt;a.position.set(9,0,6.6),n.add(a),a.add(wt(4.6,1.9,1.8,.06,new ot({color:13273604,roughness:.45,metalness:.3}),{y:1.05})),a.add(K(4.8,.15,2,t.blackMetal,{y:.08}));for(let h=0;h<8;h++)a.add(K(.04,1.2,.02,t.blackMetal,{x:-2+h*.15,y:1.1,z:.91,cast:!1}));a.add(Lt(.12,.12,4.2,t.blackMetal,{x:1.8,y:4,z:-.4},12)),a.add(wt(1.4,.9,1,.05,new ot({color:3621201}),{x:3.6,y:.45}));const o=yn(2.8,.36,(h,p,g)=>{h.fillStyle="#111",h.fillRect(0,0,p,g),h.fillStyle="#facc15",h.font="800 46px system-ui",h.textAlign="center",h.textBaseline="middle",h.fillText("BACKUP GENERATOR · 500 kVA",p/2,g/2+2)},{frame:!1});o.position.set(0,2.25,.92),a.add(o);const c=new ot({color:10265519,transparent:!0,opacity:.35,side:ke,depthWrite:!1}),l=Gt(new $t(10,2.2),c,{x:9.6,y:1.1,z:4.4,cast:!1});n.add(l),Pe(n,"B1 · SERVER & UTILITIES",12.6,3.2,-8.68,0,{w:3.6,h:.38,bg:"#0f172a",fg:"#e2e8f0",size:44});const u=Gt(new $t(.12,12),new Qt({color:16436245}),{x:4.3,y:.012,z:.2,cast:!1});u.rotation.x=-Math.PI/2,n.add(u);let f=-1;return{waypoints:[[5.2,-4.6],[13.4,-4.6],[13.4,3.4],[5.2,3.4]],board:pr(n,12.6,3.2,-.4),light:[[-6,-2],[9,0]],lightColor:13623551,update(h){h-f<.25||(f=h,r.redraw(h))}}}const Di=n=>n*Ws;function Qv(n,t,e,{renderer:i,cssScene:s,onStationRedraw:r}){const a=Ye.M=dv();xv(a),n.background=new vt(328986),n.environment=pv(i),n.environmentIntensity=.45,n.add(new Ap(8028128,1708080,.6));const o=new fh(16769732,1.35);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-21,right:21,top:15,bottom:-15,near:1,far:70}),o.shadow.bias=-4e-4,o.shadow.normalBias=.03,n.add(o,o.target);const c=new fh(9414399,.4);c.position.set(-18,30,-22),n.add(c);const l=mv(n,{hole:Lv}),u=Dv(n,Di(-1)-.6,-.6),f=new Map,h=new Map,p=[],g=[];for(const b of e){const R=new Dt;R.position.y=Di(b.level),R.name=`floor-${b.id}`,n.add(R),Cv(R,b);const P=t.filter(D=>D.floor===b.id);P.forEach((D,O)=>h.set(D.id,Fv(R,D,O,{onNeedsRedraw:r}))),f.set(b.id,{floor:b,group:R,agents:P})}const x={agents:t,stations:h,cssScene:s},m={trading:Vv(f.get("trading").group,x),admin:Wv(f.get("admin").group,x),studio:Xv(f.get("studio").group,x),property:Zv(f.get("property").group),b1:Jv(f.get("b1").group)},d=new Dt;d.position.y=Di(Math.max(...e.map(b=>b.level))+1)-.6,n.add(d),Pv(d);for(const[b,R]of f){const P=m[b];R.content=P;for(const[D,O]of P.light||[]){const I=new Cp(P.lightColor||16753242,9,16,1.8);I.position.set(D,4.8,O),R.group.add(I),g.push(I)}R.manager=Bv(R.group,R.floor,P.waypoints,{board:P.board}),P.update&&p.push({id:b,fn:P.update})}const v=(b,R,P)=>new L(b,R,P),T=[];for(const b of["trading","admin","studio","property"]){const R=gv(f.get(b).group);R.stringLights([[v(-le+.25,6.75,Ot-.1),v(-le+.25,6.75,-Ot+.2),.35,3]]),T.push({id:b,fest:R})}const _=T[1].fest,E=T[2].fest;_.lantern(-10,5.2,2,"#ff7b00"),_.lantern(9.5,5.4,2.4,"#ff006e"),_.rangoli(-1.6,5.4,1.3,1),E.lantern(-4,5.4,2.6,"#c77dff"),E.lantern(9.6,5.2,1,"#ffb703"),E.rangoli(4.4,5.2,1.1,2),T[0].fest.lantern(-11.2,5.4,5.6,"#ffb703"),T[3].fest.lantern(12.8,5.2,-4,"#ff7b00"),T[3].fest.diya(12.9,-3,.5);let y=null;function A(b){y=b;const R=b?f.get(b).floor.level:1/0;for(const O of f.values())O.group.visible=!b||O.floor.id===b;u.front.visible=b!=="b1",d.visible=!b;const P=Di(b?R:1);o.position.set(12,P+18,15),o.target.position.set(-1,P,-1);const D=b?1:2.2;Object.assign(o.shadow.camera,{left:-21*D,right:21*D,top:15*D,bottom:-15*D,far:70*D}),o.shadow.camera.updateProjectionMatrix(),m.trading.markets.setLive(b==="trading")}A(null);const M=b=>y?b===y:!0;return{byFloor:f,stations:h,content:m,setFloor:A,wallScreen:m.admin.feed,get current(){return y},hitTargets:[...h.values()].flatMap(b=>[b.hit,b.frame]).concat(m.studio.ups.map(b=>b.hit)),managerHits:[...f.values()].map(b=>b.manager.hit),updateManagers(b){for(const R of f.values())R.manager.setSummary(R.agents,b);m.studio.drawBoard(b)},update(b){l.update(b),T.forEach(({id:R,fest:P})=>M(R)&&P.update(b)),h.forEach(R=>R.update(b,M(R.agent.floor)));for(const R of f.values())R.group.visible&&R.manager.update(b);p.forEach(R=>M(R.id)&&R.fn(b)),m.trading.markets.sync(),g.forEach((R,P)=>R.intensity=9+Math.sin(b*3+P*2)*.5)}}}function jv({agents:n,floors:t,world:e,feed:i}){const s=document.getElementById("overlay"),r=s.querySelector(".ov-body"),a=s.querySelector(".ov-title");let o=null,c=null;const l=new Map;function u(){o=null,s.classList.add("hidden"),clearInterval(c),r.innerHTML="",l.clear()}s.querySelector(".ov-close").onclick=u,window.addEventListener("keydown",g=>g.key==="Escape"&&u());function f(){o="screens",a.textContent="Agent screens",r.innerHTML="",r.className="ov-body screens";for(const g of[...t].reverse()){const x=n.filter(T=>T.floor===g.id),m=e.byFloor.get(g.id).manager.summary(),d=document.createElement("div");if(d.className="ov-floor",d.innerHTML=`<b>${g.label} · ${g.name}</b><span>${x.length?`${m.working}/${m.total} working`:"infrastructure"}${m.flags.length?` · ⚠ ${m.flags.map(T=>T.a.name).join(", ")}`:""}</span>`,r.appendChild(d),!x.length)continue;const v=document.createElement("div");v.className="ov-grid",r.appendChild(v);for(const T of x){const _=e.stations.get(T.id).tex.image,E=document.createElement("canvas");E.width=_.width,E.height=_.height,E.onclick=()=>{u(),window.office.focusAgent(T.id)},v.appendChild(E),l.set(T.id,E)}}p(),c=setInterval(p,4e3),s.classList.remove("hidden")}function h(){o="markets",a.textContent="Markets · live (TradingView)",r.className="ov-body markets",r.innerHTML=`
      <iframe class="tv-ticker" src="${gi.ticker()}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      <div class="tv-grid">
        <iframe src="${gi.mini("BITSTAMP:BTCUSD")}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
        <iframe src="${gi.mini("FX_IDC:USDINR")}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      </div>
      <iframe class="tv-overview" src="${gi.overview()}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      <p class="tv-note">Market data by TradingView. Example dashboards on Floor 04 are placeholder data.</p>`,s.classList.remove("hidden")}function p(){o==="screens"&&l.forEach((g,x)=>{const m=e.stations.get(x).tex.image;g.getContext("2d").drawImage(m,0,0)})}return document.getElementById("btn-screens").onclick=()=>o==="screens"?u():f(),document.getElementById("btn-markets").onclick=()=>o==="markets"?u():h(),{refresh:p,openScreens:f,openMarkets:h,close:u}}const sc=new URLSearchParams(location.search).get("demo")==="1",Ue=sc?cv({intervalMs:3200}):hv({url:"./status.json",intervalMs:15e3}),rc=document.getElementById("app"),tn=new Nx({antialias:!0,powerPreference:"high-performance"}),tM=Math.min(window.innerWidth,window.innerHeight)<700;tn.setPixelRatio(Math.min(window.devicePixelRatio,tM?1.25:1.75));tn.setSize(window.innerWidth,window.innerHeight);tn.shadowMap.enabled=!0;tn.shadowMap.type=Ys;tn.toneMapping=wa;tn.toneMappingExposure=1;rc.appendChild(tn.domElement);const gr=new ov;gr.setSize(window.innerWidth,window.innerHeight);gr.domElement.className="css3d";rc.appendChild(gr.domElement);const rf=new bu,ws=new Zx;ws.setSize(window.innerWidth,window.innerHeight);ws.domElement.className="css2d";rc.appendChild(ws.domElement);const Na=new bu,ln=new mn(38,window.innerWidth/window.innerHeight,.1,600);function ac(n){const t=window.innerWidth/window.innerHeight<1,e=window.innerWidth/window.innerHeight,i=t?Math.min(3.4,1.5/e):window.innerWidth<1e3?1.25:1;if(!n)return{pos:new L(30*i,25+6*i,64*i),target:new L(0,Di(1.5)-1,0)};const s=Di(Es.find(a=>a.id===n).level),r=n==="b1"?4.5:0;return{pos:new L(6*i,s+(13.2+r)*i,27.5*i),target:new L(t?1.5:-1.2,s+1.8,-2)}}const ou=new URLSearchParams(location.search);let Xi=Es.some(n=>n.id===ou.get("floor"))?ou.get("floor"):null,Yn=ac(Xi);ln.position.copy(Yn.pos);const bn=new Fx(ln,tn.domElement);bn.target.copy(Yn.target);bn.enableDamping=!0;bn.dampingFactor=.08;bn.minDistance=4;bn.maxDistance=150;bn.maxPolarAngle=Math.PI*.47;bn.update();const As=new tv(tn);As.addPass(new ev(Na,ln));const eM=new ys(new rt(window.innerWidth,window.innerHeight),.6,.55,1);As.addPass(eM);As.addPass(new ju({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126,0.7152,0.0722));
      c.rgb = mix(c.rgb, c.rgb * vec3(1.04,0.98,1.06), 0.6);              // slight warm-magenta grade
      c.rgb += vec3(0.004,0.002,0.012) * (1.0 - smoothstep(0.0, 0.25, l));  // lift shadows towards indigo
      float v = smoothstep(0.95, 0.35, distance(vUv, vec2(0.5)));
      c.rgb *= mix(0.72, 1.0, v);
      gl_FragColor = c; }`}));As.addPass(new iv);const Un=Qv(Na,Be,Es,{renderer:tn,cssScene:rf,onStationRedraw:n=>fr(n)});Un.setFloor(Xi);document.getElementById("title").textContent=Jl.title;document.getElementById("subtitle").textContent=Jl.subtitle;document.title=Jl.title;const wo=document.getElementById("sidebar"),_r=new Map;for(const n of[...Es].reverse()){const t=Be.filter(i=>i.floor===n.id),e=document.createElement("div");if(e.className="floor-head",e.textContent=`${n.label} · ${n.name}`,e.addEventListener("click",()=>xr(n.id)),wo.appendChild(e),!t.length){const i=document.createElement("div");i.className="floor-empty",i.textContent="Infrastructure · Floor Manager on duty",wo.appendChild(i)}for(const i of t){const s=document.createElement("div");s.className="agent-card",s.style.setProperty("--c",i.color),s.innerHTML=`
      <div class="row"><div class="name"><span class="avatar"></span>${i.name}</div><span class="pill"></span></div>
      <div class="task"></div>
      <div class="bar"><i></i></div>`,s.addEventListener("click",()=>Oa(i.id)),wo.appendChild(s),_r.set(i.id,s)}}const nM=document.getElementById("floorbar"),af=new Map;for(const n of[{id:null,label:"ALL",name:"All floors"},...[...Es].reverse()]){const t=document.createElement("button");t.innerHTML=`<b>${n.label}</b><span>${n.id?n.name:"Building"}</span>`,t.title=n.name,t.addEventListener("click",()=>xr(n.id)),nM.appendChild(t),af.set(n.id,t)}function xr(n,{fly:t=!0}={}){Xi=n,Un.setFloor(n),Yn=ac(n),af.forEach((i,s)=>i.classList.toggle("on",s===n)),document.body.dataset.floor=n||"all";const e=new URL(location.href);n?e.searchParams.set("floor",n):e.searchParams.delete("floor"),history.replaceState(null,"",e),t&&(Ua=null,_r.forEach(i=>i.classList.remove("selected")),gs.classList.add("hidden"),Fa(Yn.pos.clone(),Yn.target.clone()))}function fr(n){const t=Ue.getState(n),e=_r.get(n),i=e.querySelector(".pill");i.className=`pill ${t.status}`,i.textContent=t.status,e.querySelector(".task").textContent=t.task,e.querySelector(".bar").style.visibility=t.status==="working"&&t.hasProgress!==!1&&t.progress>0?"visible":"hidden",e.querySelector(".bar > i").style.width=`${Math.round(t.progress*100)}%`,Un.stations.get(n).setData({...t,updatedAt:Ue.updatedAt||null,events:Ue.history.filter(s=>s.agentId===n).slice(-2)}),Ua===n&&lf(n)}function of(){const n=Be.map(e=>Ue.getState(e.id)),t=n.filter(e=>e.status==="working").length;document.getElementById("count-working").textContent=t,document.getElementById("count-idle").textContent=n.length-t,document.getElementById("count-total").textContent=n.length}const gs=document.getElementById("infocard");let Ua=null;function lf(n){const t=Be.find(s=>s.id===n),e=Ue.getState(n),i=Ue.history.filter(s=>s.agentId===n).slice(-4).reverse();gs.style.setProperty("--c",t.color),gs.innerHTML=`
    <button class="close" title="Close">×</button>
    <h3><span class="avatar" style="width:12px;height:12px;border-radius:4px;background:${t.color};box-shadow:0 0 10px ${t.color}"></span>${t.name}
      <span class="pill ${e.status}" style="margin-left:auto">${e.status}</span></h3>
    <div class="role">${t.role}</div>
    <div class="label">Current task</div>
    <div class="val">${e.task}</div>
    ${e.status==="working"&&e.progress>0?`<div class="bar" style="--c:${t.color}"><i style="width:${Math.round(e.progress*100)}%"></i></div>`:""}
    <div class="label">Recent activity</div>
    <ul>${i.length?i.map(s=>`<li><time>${Ma(s.ts)}</time>${s.message}</li>`).join(""):"<li>No activity yet</li>"}</ul>`,gs.querySelector(".close").onclick=oc}let ti=null;function Fa(n,t,e=900){ti={fromP:ln.position.clone(),fromT:bn.target.clone(),toP:n,toT:t,t0:performance.now(),ms:e}}function Oa(n){var o;const t=(o=Be.find(c=>c.id===n))==null?void 0:o.floor;t&&t!==Xi&&xr(t,{fly:!1}),Ua=n,_r.forEach((c,l)=>c.classList.toggle("selected",l===n));const e=Un.stations.get(n).screenView(),i=2*Math.atan(Math.tan(Ra.degToRad(ln.fov/2))*ln.aspect),s=Math.max(2.2,e.width*1.05/(2*Math.tan(i/2)*(window.innerWidth>900?.52:.9))),r=e.center.clone(),a=r.clone().add(e.normal.clone().multiplyScalar(s)).add(new L(0,s*.12,0));Fa(a,r),lf(n),gs.classList.remove("hidden")}function oc(){Ua=null,_r.forEach(n=>n.classList.remove("selected")),gs.classList.add("hidden"),Fa(Yn.pos.clone(),Yn.target.clone())}window.addEventListener("keydown",n=>{(n.key==="r"||n.key==="R"||n.key==="Escape")&&oc()});const cf=n=>{for(let t=n;t;t=t.parent)if(!t.visible&&t!==n)return!1;return!0},Sa=new Up,ba=new rt;let ha=null;tn.domElement.addEventListener("pointerdown",n=>ha={x:n.clientX,y:n.clientY});tn.domElement.addEventListener("pointerup",n=>{if(!ha||Math.hypot(n.clientX-ha.x,n.clientY-ha.y)>5)return;ba.set(n.clientX/window.innerWidth*2-1,-(n.clientY/window.innerHeight)*2+1),Sa.setFromCamera(ba,ln);const t=Sa.intersectObjects(Un.hitTargets.filter(cf),!1)[0];t&&Oa(t.object.userData.agentId)});tn.domElement.addEventListener("pointermove",n=>{ba.set(n.clientX/window.innerWidth*2-1,-(n.clientY/window.innerHeight)*2+1),Sa.setFromCamera(ba,ln),tn.domElement.style.cursor=Sa.intersectObjects(Un.hitTargets.filter(cf),!1).length?"pointer":""});ws.domElement.addEventListener("click",n=>{const t=n.target.closest(".tag");t&&t.dataset.agent?Oa(t.dataset.agent):t&&t.classList.contains("manager-tag")&&t.classList.toggle("open")});Be.forEach(n=>fr(n.id));of();const hf=jv({agents:Be,floors:Es,world:Un,feed:Ue}),lc=()=>Un.wallScreen.draw(Ue.history,Ue.getState),cc=()=>Un.updateManagers(Ue.getState);cc();lc();Ue.subscribe(n=>{if(n.type==="heartbeat"||n.type==="error")return Ea();n.agentId&&sc?fr(n.agentId):Be.forEach(t=>fr(t.id)),of(),lc(),cc(),hf.refresh(),Ea()});Ue.start();const iM=document.getElementById("live-label"),lu=document.getElementById("live-chip"),cu=n=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});function Ea(){let n,t;sc?(n="demo · simulated feed",t="live"):Ue.updatedAt?Date.now()-Ue.updatedAt.getTime()>30*60*1e3?(n=`stale · updated ${cu(Ue.updatedAt)}`,t="stale"):(n=`live · updated ${cu(Ue.updatedAt)}`,t="live"):(n=Ue.error?"offline · no status data":"connecting…",t="stale"),iM.textContent=n,lu.className=`chip ${t}`,lu.title=Ue.updatedAt?`Last update: ${Ue.updatedAt.toLocaleString()}`:""}Ea();const sM=document.getElementById("clock");let rM=0;const uf=()=>{sM.textContent=Ma(new Date),++rM%30===0&&(Be.forEach(n=>fr(n.id)),cc()),lc(),Ea()};uf();setInterval(uf,1e3);window.addEventListener("resize",()=>{ln.aspect=window.innerWidth/window.innerHeight,ln.updateProjectionMatrix(),tn.setSize(window.innerWidth,window.innerHeight),As.setSize(window.innerWidth,window.innerHeight),ws.setSize(window.innerWidth,window.innerHeight),gr.setSize(window.innerWidth,window.innerHeight),Yn=ac(Xi)});const aM=performance.now(),oM=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;tn.setAnimationLoop(()=>{const n=(performance.now()-aM)/1e3;if(ti){const t=Math.min(1,(performance.now()-ti.t0)/ti.ms),e=oM(t);ln.position.lerpVectors(ti.fromP,ti.toP,e),bn.target.lerpVectors(ti.fromT,ti.toT,e),t>=1&&(ti=null)}bn.update(),Un.update(n),As.render(),Xi==="trading"&&gr.render(rf,ln),ws.render(Na,ln)});window.office={feed:Ue,focusAgent:Oa,clearFocus:oc,selectFloor:xr,overlays:hf,scene:Na,camera:ln,world:Un,view:(n,t,e=10)=>Fa(new L(...n),new L(...t),e)};xr(Xi,{fly:!1});ln.position.copy(Yn.pos);bn.target.copy(Yn.target);bn.update();
