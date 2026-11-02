(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="186",Ts={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jf=0,eh=1,Qf=2,or=1,jf=2,ir=3,Ii=0,hn=1,Ne=2,Jn=0,lr=1,xi=2,nh=3,ih=4,tu=5,Ms=100,eu=101,nu=102,iu=103,su=104,ru=200,au=201,ou=202,lu=203,Hd=204,Gd=205,cu=206,hu=207,du=208,fu=209,uu=210,pu=211,mu=212,gu=213,xu=214,Qo=0,jo=1,tl=2,ur=3,el=4,nl=5,il=6,sl=7,Vd=0,_u=1,vu=2,Qn=0,Ql=1,jl=2,tc=3,Xa=4,ec=5,nc=6,ic=7,Wd=300,qi=301,Is=302,ya=303,oo=304,Ya=306,Li=1e3,ui=1001,rl=1002,Je=1003,yu=1004,Or=1005,en=1006,lo=1007,Wi=1008,wn=1009,Xd=1010,Yd=1011,pr=1012,sc=1013,ii=1014,kn=1015,xn=1016,rc=1017,ac=1018,mr=1020,qd=35902,$d=35899,Kd=1021,Zd=1022,Hn=1023,_i=1026,Xi=1027,oc=1028,lc=1029,$i=1030,cc=1031,hc=1033,Ma=33776,Sa=33777,ba=33778,wa=33779,al=35840,ol=35841,ll=35842,cl=35843,hl=36196,dl=37492,fl=37496,ul=37488,pl=37489,Pa=37490,ml=37491,gl=37808,xl=37809,_l=37810,vl=37811,yl=37812,Ml=37813,Sl=37814,bl=37815,wl=37816,El=37817,Tl=37818,Al=37819,Rl=37820,Cl=37821,Pl=36492,Il=36494,Ll=36495,Dl=36283,Nl=36284,Ia=36285,Ul=36286,Mu=3200,Ol=0,Su=1,Pi="",Pe="srgb",La="srgb-linear",Da="linear",be="srgb",co=7680,bu=519,wu=512,Eu=513,Tu=514,dc=515,Au=516,Ru=517,fc=518,Cu=519,Pu=35044,sh="300 es",Kn=2e3,gr=2001;function Iu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lu(){const n=Na("canvas");return n.style.display="block",n}const rh={};function ah(...n){const t="THREE."+n.shift();console.log(t,...n)}function Jd(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Jt(...n){n=Jd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ge(...n){n=Jd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function As(...n){const t=n.join(" ");t in rh||(rh[t]=!0,Jt(...n))}function Du(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Nu={[Qo]:jo,[tl]:il,[el]:sl,[ur]:nl,[jo]:Qo,[il]:tl,[sl]:el,[nl]:ur};class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oh=1234567;const cr=Math.PI/180,Ls=180/Math.PI;function Qi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function ae(n,t,e){return Math.max(t,Math.min(e,n))}function uc(n,t){return(n%t+t)%t}function Uu(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Ou(n,t,e){return n!==t?(e-n)/(t-n):0}function hr(n,t,e){return(1-e)*n+e*t}function Fu(n,t,e,i){return hr(n,t,1-Math.exp(-e*i))}function zu(n,t=1){return t-Math.abs(uc(n,t*2)-t)}function Bu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ku(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Hu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Gu(n,t){return n+Math.random()*(t-n)}function Vu(n){return n*(.5-Math.random())}function Wu(n){n!==void 0&&(oh=n);let t=oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xu(n){return n*cr}function Yu(n){return n*Ls}function qu(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function $u(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ku(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zu(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),d=a((t+i)/2),f=r((t-i)/2),h=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*d,c*f,c*h,o*l);break;case"YZY":n.set(c*h,o*d,c*f,o*l);break;case"ZXZ":n.set(c*f,c*h,o*d,o*l);break;case"XZX":n.set(o*d,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*d,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*d,o*l);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ss(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const qa={DEG2RAD:cr,RAD2DEG:Ls,generateUUID:Qi,clamp:ae,euclideanModulo:uc,mapLinear:Uu,inverseLerp:Ou,lerp:hr,damp:Fu,pingpong:zu,smoothstep:Bu,smootherstep:ku,randInt:Hu,randFloat:Gu,randFloatSpread:Vu,seededRandom:Wu,degToRad:Xu,radToDeg:Yu,isPowerOfTwo:qu,ceilPowerOfTwo:$u,floorPowerOfTwo:Ku,setQuaternionFromProperEuler:Zu,normalize:ln,denormalize:Ss},kc=class kc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kc.prototype.isVector2=!0;let at=kc;class Ln{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],d=i[s+2],f=i[s+3],h=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||c!==h||l!==p||d!==g){let m=c*h+l*p+d*g+f*x;m<0&&(h=-h,p=-p,g=-g,x=-x,m=-m);let u=1-o;if(m<.9995){const v=Math.acos(m),b=Math.sin(v);u=Math.sin(u*v)/b,o=Math.sin(o*v)/b,c=c*u+h*o,l=l*u+p*o,d=d*u+g*o,f=f*u+x*o}else{c=c*u+h*o,l=l*u+p*o,d=d*u+g*o,f=f*u+x*o;const v=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=v,l*=v,d*=v,f*=v}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],d=i[s+3],f=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+d*f+c*p-l*h,t[e+1]=c*g+d*h+l*f-o*p,t[e+2]=l*g+d*p+o*h-c*f,t[e+3]=d*g-o*f-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(s/2),f=o(r/2),h=c(i/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*d*f+l*p*g,this._y=l*p*f-h*d*g,this._z=l*d*g+h*p*f,this._w=l*d*f-h*p*g;break;case"YXZ":this._x=h*d*f+l*p*g,this._y=l*p*f-h*d*g,this._z=l*d*g-h*p*f,this._w=l*d*f+h*p*g;break;case"ZXY":this._x=h*d*f-l*p*g,this._y=l*p*f+h*d*g,this._z=l*d*g+h*p*f,this._w=l*d*f-h*p*g;break;case"ZYX":this._x=h*d*f-l*p*g,this._y=l*p*f+h*d*g,this._z=l*d*g-h*p*f,this._w=l*d*f+h*p*g;break;case"YZX":this._x=h*d*f+l*p*g,this._y=l*p*f+h*d*g,this._z=l*d*g-h*p*f,this._w=l*d*f-h*p*g;break;case"XZY":this._x=h*d*f-l*p*g,this._y=l*p*f-h*d*g,this._z=l*d*g+h*p*f,this._w=l*d*f+h*p*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],d=e[6],f=e[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,d=e._w;return this._x=i*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-i*l,this._z=r*d+a*l+i*c-s*o,this._w=a*d-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Hc=class Hc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),d=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+c*l+a*f-o*d,this.y=i+c*d+o*l-r*f,this.z=s+c*f+r*d-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ho.copy(this).projectOnVector(t),this.sub(ho)}reflect(t){return this.sub(ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hc.prototype.isVector3=!0;let I=Hc;const ho=new I,lh=new Ln,Gc=class Gc{constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=c,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],d=i[4],f=i[7],h=i[2],p=i[5],g=i[8],x=s[0],m=s[3],u=s[6],v=s[1],b=s[4],_=s[7],M=s[2],S=s[5],A=s[8];return r[0]=a*x+o*v+c*M,r[3]=a*m+o*b+c*S,r[6]=a*u+o*_+c*A,r[1]=l*x+d*v+f*M,r[4]=l*m+d*b+f*S,r[7]=l*u+d*_+f*A,r[2]=h*x+p*v+g*M,r[5]=h*m+p*b+g*S,r[8]=h*u+p*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8];return e*a*d-e*o*l-i*r*d+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],f=d*a-o*l,h=o*c-d*r,p=l*r-a*c,g=e*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*l-d*i)*x,t[2]=(o*i-s*a)*x,t[3]=h*x,t[4]=(d*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fo.makeScale(t,e)),this}rotate(t){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fo.makeRotation(-t)),this}translate(t,e){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gc.prototype.isMatrix3=!0;let se=Gc;const fo=new se,ch=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ju(){const n={enabled:!0,workingColorSpace:La,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===be&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===be&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?Da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[La]:{primaries:t,whitePoint:i,transfer:Da,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:i,transfer:be,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),n}const pe=Ju();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class Qu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{rs===void 0&&(rs=Na("canvas")),rs.width=t.width,rs.height=t.height;const s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=rs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Na("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mi(e[i]/255)*255):e[i]=mi(e[i]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ju=0;class pc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(uo(s[a].image)):r.push(uo(s[a]))}else r=uo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function uo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let tp=0;const po=new I;class nn extends Di{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,i=ui,s=ui,r=en,a=Wi,o=Hn,c=wn,l=nn.DEFAULT_ANISOTROPY,d=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Qi(),this.name="",this.source=new pc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(po).x}get height(){return this.source.getSize(po).y}get depth(){return this.source.getSize(po).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Li:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Li:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Wd;nn.DEFAULT_ANISOTROPY=1;const Vc=class Vc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],d=c[4],f=c[8],h=c[1],p=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,_=(p+1)/2,M=(u+1)/2,S=(d+h)/4,A=(f+x)/4,y=(g+m)/4;return b>_&&b>M?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=S/i,r=A/i):_>M?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=S/s,r=y/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=A/r,s=y/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(h-d)/v,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vc.prototype.isVector4=!0;let Ue=Vc;class ep extends Di{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new nn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new pc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends ep{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Qd extends nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class np extends nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Wa=class Wa{constructor(t,e,i,s,r,a,o,c,l,d,f,h,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,d,f,h,p,g,x,m)}set(t,e,i,s,r,a,o,c,l,d,f,h,p,g,x,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wa().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),a=1/as.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*d,p=a*f,g=o*d,x=o*f;e[0]=c*d,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=h-x*l,e[9]=-o*c,e[2]=x-h*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*d,p=c*f,g=l*d,x=l*f;e[0]=h+x*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*d,e[9]=-o,e[2]=p*o-g,e[6]=x+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*d,p=c*f,g=l*d,x=l*f;e[0]=h-x*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*d,e[9]=x-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*d,p=a*f,g=o*d,x=o*f;e[0]=c*d,e[4]=g*l-p,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*d,e[4]=x-h*f,e[8]=g*f+p,e[1]=f,e[5]=a*d,e[9]=-o*d,e[2]=-l*d,e[6]=p*f+g,e[10]=h-x*f}else if(t.order==="XZY"){const h=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*d,e[4]=-f,e[8]=l*d,e[1]=h*f+x,e[5]=a*d,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*d,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,sp)}lookAt(t,e,i){const s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),wi.crossVectors(i,yn),wi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),wi.crossVectors(i,yn)),wi.normalize(),Fr.crossVectors(yn,wi),s[0]=wi.x,s[4]=Fr.x,s[8]=yn.x,s[1]=wi.y,s[5]=Fr.y,s[9]=yn.y,s[2]=wi.z,s[6]=Fr.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],d=i[1],f=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],u=i[14],v=i[3],b=i[7],_=i[11],M=i[15],S=s[0],A=s[4],y=s[8],E=s[12],R=s[1],L=s[5],D=s[9],F=s[13],P=s[2],N=s[6],X=s[10],H=s[14],et=s[3],Z=s[7],tt=s[11],j=s[15];return r[0]=a*S+o*R+c*P+l*et,r[4]=a*A+o*L+c*N+l*Z,r[8]=a*y+o*D+c*X+l*tt,r[12]=a*E+o*F+c*H+l*j,r[1]=d*S+f*R+h*P+p*et,r[5]=d*A+f*L+h*N+p*Z,r[9]=d*y+f*D+h*X+p*tt,r[13]=d*E+f*F+h*H+p*j,r[2]=g*S+x*R+m*P+u*et,r[6]=g*A+x*L+m*N+u*Z,r[10]=g*y+x*D+m*X+u*tt,r[14]=g*E+x*F+m*H+u*j,r[3]=v*S+b*R+_*P+M*et,r[7]=v*A+b*L+_*N+M*Z,r[11]=v*y+b*D+_*X+M*tt,r[15]=v*E+b*F+_*H+M*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],d=t[2],f=t[6],h=t[10],p=t[14],g=t[3],x=t[7],m=t[11],u=t[15],v=c*p-l*h,b=o*p-l*f,_=o*h-c*f,M=a*p-l*d,S=a*h-c*d,A=a*f-o*d;return e*(x*v-m*b+u*_)-i*(g*v-m*M+u*S)+s*(g*b-x*M+u*A)-r*(g*_-x*S+m*A)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],d=t[10];return e*(a*d-o*l)-i*(r*d-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],f=t[9],h=t[10],p=t[11],g=t[12],x=t[13],m=t[14],u=t[15],v=e*o-i*a,b=e*c-s*a,_=e*l-r*a,M=i*c-s*o,S=i*l-r*o,A=s*l-r*c,y=d*x-f*g,E=d*m-h*g,R=d*u-p*g,L=f*m-h*x,D=f*u-p*x,F=h*u-p*m,P=v*F-b*D+_*L+M*R-S*E+A*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return t[0]=(o*F-c*D+l*L)*N,t[1]=(s*D-i*F-r*L)*N,t[2]=(x*A-m*S+u*M)*N,t[3]=(h*S-f*A-p*M)*N,t[4]=(c*R-a*F-l*E)*N,t[5]=(e*F-s*R+r*E)*N,t[6]=(m*_-g*A-u*b)*N,t[7]=(d*A-h*_+p*b)*N,t[8]=(a*D-o*R+l*y)*N,t[9]=(i*R-e*D-r*y)*N,t[10]=(g*S-x*_+u*v)*N,t[11]=(f*_-d*S-p*v)*N,t[12]=(o*E-a*L-c*y)*N,t[13]=(e*L-i*E+s*y)*N,t[14]=(x*b-g*M-m*v)*N,t[15]=(d*M-f*b+h*v)*N,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,d=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+i,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,d=a+a,f=o+o,h=r*l,p=r*d,g=r*f,x=a*d,m=a*f,u=o*f,v=c*l,b=c*d,_=c*f,M=i.x,S=i.y,A=i.z;return s[0]=(1-(x+u))*M,s[1]=(p+_)*M,s[2]=(g-b)*M,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(h+u))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(g+b)*A,s[9]=(m-v)*A,s[10]=(1-(h+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=as.set(s[0],s[1],s[2]).length();const o=as.set(s[4],s[5],s[6]).length(),c=as.set(s[8],s[9],s[10]).length();r<0&&(a=-a),On.copy(this);const l=1/a,d=1/o,f=1/c;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=d,On.elements[5]*=d,On.elements[6]*=d,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,e.setFromRotationMatrix(On),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=Kn,c=!1){const l=this.elements,d=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),p=(i+s)/(i-s);let g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Kn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===gr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Kn,c=!1){const l=this.elements,d=2/(e-t),f=2/(i-s),h=-(e+t)/(e-t),p=-(i+s)/(i-s);let g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Kn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===gr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Wa.prototype.isMatrix4=!0;let he=Wa;const as=new I,On=new he,ip=new I(0,0,0),sp=new I(1,1,1),wi=new I,Fr=new I,yn=new I,dh=new he,fh=new Ln;class vi{constructor(t=0,e=0,i=0,s=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fh.setFromEuler(this),this.setFromQuaternion(fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rp=0;const uh=new I,os=new Ln,ai=new he,zr=new I,Xs=new I,ap=new I,op=new Ln,ph=new I(1,0,0),mh=new I(0,1,0),gh=new I(0,0,1),xh={type:"added"},lp={type:"removed"},ls={type:"childadded",child:null},mo={type:"childremoved",child:null};class Fe extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new I,e=new vi,i=new Ln,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new se}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return uh.copy(t).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?zr.copy(t):zr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Xs,zr,this.up):ai.lookAt(zr,Xs,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),os.setFromRotationMatrix(ai),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),ls.child=t,this.dispatchEvent(ls),ls.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lp),mo.child=t,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Fe.DEFAULT_UP=new I(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pt extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cp={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Pt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Br={h:0,s:0,l:0};function xo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Tt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=pe.workingColorSpace){if(t=uc(t,1),e=ae(e,0,1),i=ae(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=xo(a,r,t+1/3),this.g=xo(a,r,t),this.b=xo(a,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function i(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const i=jd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return pe.workingToColorSpace(tn.copy(this),t),Math.round(ae(tn.r*255,0,255))*65536+Math.round(ae(tn.g*255,0,255))*256+Math.round(ae(tn.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(tn.copy(this),e);const i=tn.r,s=tn.g,r=tn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=d<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Pe){pe.workingToColorSpace(tn.copy(this),t);const e=tn.r,i=tn.g,s=tn.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Br);const i=hr(Ei.h,Br.h,e),s=hr(Ei.s,Br.s,e),r=hr(Ei.l,Br.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Tt;Tt.NAMES=jd;class tf extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Fn=new I,oi=new I,_o=new I,li=new I,cs=new I,hs=new I,_h=new I,vo=new I,yo=new I,Mo=new I,So=new Ue,bo=new Ue,wo=new Ue;class Bn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Fn.subVectors(t,e),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Fn.subVectors(s,e),oi.subVectors(i,e),_o.subVectors(t,e);const a=Fn.dot(Fn),o=Fn.dot(oi),c=Fn.dot(_o),l=oi.dot(oi),d=oi.dot(_o),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(l*c-o*d)*h,g=(a*d-o*c)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,li.x),c.addScaledVector(a,li.y),c.addScaledVector(o,li.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return So.setScalar(0),bo.setScalar(0),wo.setScalar(0),So.fromBufferAttribute(t,e),bo.fromBufferAttribute(t,i),wo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(So,r.x),a.addScaledVector(bo,r.y),a.addScaledVector(wo,r.z),a}static isFrontFacing(t,e,i,s){return Fn.subVectors(i,e),oi.subVectors(t,e),Fn.cross(oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Fn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Bn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;cs.subVectors(s,i),hs.subVectors(r,i),vo.subVectors(t,i);const c=cs.dot(vo),l=hs.dot(vo);if(c<=0&&l<=0)return e.copy(i);yo.subVectors(t,s);const d=cs.dot(yo),f=hs.dot(yo);if(d>=0&&f<=d)return e.copy(s);const h=c*f-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(i).addScaledVector(cs,a);Mo.subVectors(t,r);const p=cs.dot(Mo),g=hs.dot(Mo);if(g>=0&&p<=g)return e.copy(r);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(hs,o);const m=d*g-p*f;if(m<=0&&f-d>=0&&p-g>=0)return _h.subVectors(r,s),o=(f-d)/(f-d+(p-g)),e.copy(s).addScaledVector(_h,o);const u=1/(m+x+h);return a=x*u,o=h*u,e.copy(i).addScaledVector(cs,a).addScaledVector(hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ji{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Hr.subVectors(this.max,Ys),ds.subVectors(t.a,Ys),fs.subVectors(t.b,Ys),us.subVectors(t.c,Ys),Ti.subVectors(fs,ds),Ai.subVectors(us,fs),Oi.subVectors(ds,us);let e=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-Oi.z,Oi.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,Oi.z,0,-Oi.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-Oi.y,Oi.x,0];return!Eo(e,ds,fs,us,Hr)||(e=[1,0,0,0,1,0,0,0,1],!Eo(e,ds,fs,us,Hr))?!1:(Gr.crossVectors(Ti,Ai),e=[Gr.x,Gr.y,Gr.z],Eo(e,ds,fs,us,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ci=[new I,new I,new I,new I,new I,new I,new I,new I],zn=new I,kr=new ji,ds=new I,fs=new I,us=new I,Ti=new I,Ai=new I,Oi=new I,Ys=new I,Hr=new I,Gr=new I,Fi=new I;function Eo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Fi.fromArray(n,r);const o=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),c=t.dot(Fi),l=e.dot(Fi),d=i.dot(Fi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const He=new I,Vr=new at;let hp=0;class jn extends Di{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Pu,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vr.fromBufferAttribute(this,e),Vr.applyMatrix3(t),this.setXY(e,Vr.x,Vr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ss(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ln(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ef extends jn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class nf extends jn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class jt extends jn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const dp=new ji,qs=new I,To=new I;class ts{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):dp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);const e=qs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(qs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(To)),this.expandByPoint(qs.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fp=0;const Cn=new he,Ao=new Fe,ps=new I,Mn=new ji,$s=new ji,$e=new I;class Ae extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Iu(t)?nf:ef)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new se().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,i){return Cn.makeTranslation(t,e,i),this.applyMatrix4(Cn),this}scale(t,e,i){return Cn.makeScale(t,e,i),this.applyMatrix4(Cn),this}lookAt(t){return Ao.lookAt(t),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(Mn.min,$s.min),Mn.expandByPoint($e),$e.addVectors(Mn.max,$s.max),Mn.expandByPoint($e)):(Mn.expandByPoint($s.min),Mn.expandByPoint($s.max))}Mn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)$e.fromBufferAttribute(o,l),c&&(ps.fromBufferAttribute(t,l),$e.add(ps)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let y=0;y<i.count;y++)o[y]=new I,c[y]=new I;const l=new I,d=new I,f=new I,h=new at,p=new at,g=new at,x=new I,m=new I;function u(y,E,R){l.fromBufferAttribute(i,y),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,R),h.fromBufferAttribute(r,y),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,R),d.sub(l),f.sub(l),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(L),o[y].add(x),o[E].add(x),o[R].add(x),c[y].add(m),c[E].add(m),c[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,E=v.length;y<E;++y){const R=v[y],L=R.start,D=R.count;for(let F=L,P=L+D;F<P;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new I,_=new I,M=new I,S=new I;function A(y){M.fromBufferAttribute(s,y),S.copy(M);const E=o[y];b.copy(E),b.sub(M.multiplyScalar(M.dot(E))).normalize(),_.crossVectors(S,E);const L=_.dot(c[y])<0?-1:1;a.setXYZW(y,b.x,b.y,b.z,L)}for(let y=0,E=v.length;y<E;++y){const R=v[y],L=R.start,D=R.count;for(let F=L,P=L+D;F<P;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new jn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,d=new I,f=new I;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(d),c.add(d),l.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,c){const l=o.array,d=o.itemSize,f=o.normalized,h=new l.constructor(c.length*d);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*d;for(let u=0;u<d;u++)h[g++]=l[p++]}return new jn(h,d,f)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,f=l.length;d<f;d++){const h=l[d],p=t(h,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];d.push(p.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(e))}const r=t.morphAttributes;for(const l in r){const d=[],f=r[l];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,d=a.length;l<d;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ro=new I,up=new I,pp=new se;class fi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ro.subVectors(i,e).cross(up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Ro),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||pp.getNormalMatrix(t),s=this.coplanarPoint(Ro).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let mp=0;class es extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=lr,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Gd,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new fi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const hi=new I,Co=new I,Wr=new I,Xr=new I;class Ar{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Co.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),Xr.copy(this.origin).sub(Co);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=Xr.dot(this.direction),c=-Xr.dot(Wr),l=Xr.lengthSq(),d=Math.abs(1-a*a);let f,h,p,g;if(d>0)if(f=a*c-o,h=a*o-c,g=r*d,f>=0)if(h>=-g)if(h<=g){const x=1/d;f*=x,h*=x,p=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Co).addScaledVector(Wr,h),p}intersectSphere(t,e){if(t.radius<0)return null;hi.subVectors(t.center,this.origin);const i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),d>=0?(r=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,i,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,f=t.x-a.x,h=t.y-a.y,p=t.z-a.z,g=e.x-a.x,x=e.y-a.y,m=e.z-a.z,u=i.x-a.x,v=i.y-a.y,b=i.z-a.z,_=Math.abs(c),M=Math.abs(l),S=Math.abs(d);let A,y,E,R,L,D,F,P,N,X,H,et;if(_>=M&&_>=S?(E=c,D=f,N=g,et=u,c>=0?(A=l,y=d,R=h,L=p,F=x,P=m,X=v,H=b):(A=d,y=l,R=p,L=h,F=m,P=x,X=b,H=v)):M>=S?(E=l,D=h,N=x,et=v,l>=0?(A=d,y=c,R=p,L=f,F=m,P=g,X=b,H=u):(A=c,y=d,R=f,L=p,F=g,P=m,X=u,H=b)):(E=d,D=p,N=m,et=b,d>=0?(A=c,y=l,R=f,L=h,F=g,P=x,X=u,H=v):(A=l,y=c,R=h,L=f,F=x,P=g,X=v,H=u)),E===0)return null;const Z=A/E,tt=y/E,j=1/E,Ut=R-Z*D,ot=L-tt*D,k=F-Z*N,nt=P-tt*N,ft=X-Z*et,B=H-tt*et,q=ft*nt-B*k,ht=Ut*B-ot*ft,Ot=k*ot-nt*Ut;if(s){if(q<0||ht<0||Ot<0)return null}else if((q<0||ht<0||Ot<0)&&(q>0||ht>0||Ot>0))return null;const xt=q+ht+Ot;if(xt===0)return null;const Ht=j*(q*D+ht*N+Ot*et);return(xt>0?Ht<0:Ht>0)?null:this.at(Ht/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te extends es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vh=new he,zi=new Ar,Yr=new ts,yh=new I,qr=new I,$r=new I,Kr=new I,Po=new I,Zr=new I,Mh=new I,Jr=new I;class Zt extends Fe{constructor(t=new Ae,e=new te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],f=r[c];d!==0&&(Po.fromBufferAttribute(f,t),a?Zr.addScaledVector(Po,d):Zr.addScaledVector(Po.sub(e),d))}e.add(Zr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(Yr.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Yr,yh)===null||zi.origin.distanceToSquared(yh)>(t.far-t.near)**2))&&(vh.copy(r).invert(),zi.copy(t.ray).applyMatrix4(vh),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],u=a[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,M=b;_<M;_+=3){const S=o.getX(_),A=o.getX(_+1),y=o.getX(_+2);s=Qr(this,u,t,i,l,d,f,S,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const v=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);s=Qr(this,a,t,i,l,d,f,v,b,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],u=a[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,M=b;_<M;_+=3){const S=_,A=_+1,y=_+2;s=Qr(this,u,t,i,l,d,f,S,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const v=m,b=m+1,_=m+2;s=Qr(this,a,t,i,l,d,f,v,b,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function gp(n,t,e,i,s,r,a,o){let c;if(t.side===hn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Ii,o),c===null)return null;Jr.copy(o),Jr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Jr);return l<e.near||l>e.far?null:{distance:l,point:Jr.clone(),object:n}}function Qr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,qr),n.getVertexPosition(c,$r),n.getVertexPosition(l,Kr);const d=gp(n,t,e,i,qr,$r,Kr,Mh);if(d){const f=new I;Bn.getBarycoord(Mh,qr,$r,Kr,f),s&&(d.uv=Bn.getInterpolatedAttribute(s,o,c,l,f,new at)),r&&(d.uv1=Bn.getInterpolatedAttribute(r,o,c,l,f,new at)),a&&(d.normal=Bn.getInterpolatedAttribute(a,o,c,l,f,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new I,materialIndex:0};Bn.getNormal(qr,$r,Kr,h.normal),d.face=h,d.barycoord=f}return d}class sf extends nn{constructor(t=null,e=1,i=1,s,r,a,o,c,l=Je,d=Je,f,h){super(null,a,o,c,l,d,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sh extends jn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ms=new he,bh=new he,jr=[],wh=new ji,xp=new he,Ks=new Zt,Zs=new ts;class Fl extends Zt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,xp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ms),wh.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(wh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ms),Zs.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(Zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(i),t.ray.intersectsSphere(Zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),bh.multiplyMatrices(i,ms),Ks.matrixWorld=bh,Ks.raycast(t,jr);for(let a=0,o=jr.length;a<o;a++){const c=jr[a];c.instanceId=r,c.object=this,e.push(c)}jr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Sh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new sf(new Float32Array(s*this.count),s,this.count,oc,kn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bi=new ts,_p=new at(.5,.5),ta=new I;class gc{constructor(t=new fi,e=new fi,i=new fi,s=new fi,r=new fi,a=new fi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Kn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],f=r[5],h=r[6],p=r[7],g=r[8],x=r[9],m=r[10],u=r[11],v=r[12],b=r[13],_=r[14],M=r[15];if(s[0].setComponents(l-a,p-d,u-g,M-v).normalize(),s[1].setComponents(l+a,p+d,u+g,M+v).normalize(),s[2].setComponents(l+o,p+f,u+x,M+b).normalize(),s[3].setComponents(l-o,p-f,u-x,M-b).normalize(),i)s[4].setComponents(c,h,m,_).normalize(),s[5].setComponents(l-c,p-h,u-m,M-_).normalize();else if(s[4].setComponents(l-c,p-h,u-m,M-_).normalize(),e===Kn)s[5].setComponents(l+c,p+h,u+m,M+_).normalize();else if(e===gr)s[5].setComponents(c,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){Bi.center.set(0,0,0);const e=_p.distanceTo(t.center);return Bi.radius=.7071067811865476+e,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ta.x=s.normal.x>0?t.max.x:t.min.x,ta.y=s.normal.y>0?t.max.y:t.min.y,ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rf extends es{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ua=new I,Oa=new I,Eh=new he,Js=new Ar,ea=new ts,Io=new I,Th=new I;class vp extends Fe{constructor(t=new Ae,e=new rf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ua.fromBufferAttribute(e,s-1),Oa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ua.distanceTo(Oa);t.setAttribute("lineDistance",new jt(i,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,t.ray.intersectsSphere(ea)===!1)return;Eh.copy(s).invert(),Js.copy(t.ray).applyMatrix4(Eh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=l){const u=d.getX(x),v=d.getX(x+1),b=na(this,t,Js,c,u,v,x);b&&e.push(b)}if(this.isLineLoop){const x=d.getX(g-1),m=d.getX(p),u=na(this,t,Js,c,x,m,g-1);u&&e.push(u)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=l){const u=na(this,t,Js,c,x,x+1,x);u&&e.push(u)}if(this.isLineLoop){const x=na(this,t,Js,c,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function na(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(Ua.fromBufferAttribute(o,s),Oa.fromBufferAttribute(o,r),e.distanceSqToSegment(Ua,Oa,Io,Th)>i)return;Io.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Io);if(!(l<t.near||l>t.far))return{distance:l,point:Th.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class af extends es{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ah=new he,zl=new Ar,ia=new ts,sa=new I;class yp extends Fe{constructor(t=new Ae,e=new af){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(s),ia.radius+=r,t.ray.intersectsSphere(ia)===!1)return;Ah.copy(s).invert(),zl.copy(t.ray).applyMatrix4(Ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const h=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=h,x=p;g<x;g++){const m=l.getX(g);sa.fromBufferAttribute(f,m),Rh(sa,m,c,s,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=h,x=p;g<x;g++)sa.fromBufferAttribute(f,g),Rh(sa,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rh(n,t,e,i,s,r,a){const o=zl.distanceSqToPoint(n);if(o<e){const c=new I;zl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class of extends nn{constructor(t=[],e=qi,i,s,r,a,o,c,l,d){super(t,e,i,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vn extends nn{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xr extends nn{constructor(t,e,i=ii,s,r,a,o=Je,c=Je,l,d=_i,f=1){if(d!==_i&&d!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,a,o,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Mp extends xr{constructor(t,e=ii,i=qi,s,r,a=Je,o=Je,c,l=_i){const d={width:t,height:t,depth:1},f=[d,d,d,d,d,d];super(t,t,e,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class lf extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class An extends Ae{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function g(x,m,u,v,b,_,M,S,A,y,E){const R=_/A,L=M/y,D=_/2,F=M/2,P=S/2,N=A+1,X=y+1;let H=0,et=0;const Z=new I;for(let tt=0;tt<X;tt++){const j=tt*L-F;for(let Ut=0;Ut<N;Ut++){const ot=Ut*R-D;Z[x]=ot*v,Z[m]=j*b,Z[u]=P,l.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[u]=S>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(Ut/A),f.push(1-tt/y),H+=1}}for(let tt=0;tt<y;tt++)for(let j=0;j<A;j++){const Ut=h+j+N*tt,ot=h+j+N*(tt+1),k=h+(j+1)+N*(tt+1),nt=h+(j+1)+N*tt;c.push(Ut,ot,nt),c.push(ot,k,nt),et+=6}o.addGroup(p,et,E),p+=et,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class _r extends Ae{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],d=e/2,f=Math.PI/2*t,h=e,p=2*f+h,g=i*2+r,x=s+1,m=new I,u=new I;for(let v=0;v<=g;v++){let b=0,_=0,M=0,S=0;if(v<=i){const E=v/i,R=E*Math.PI/2;_=-d-t*Math.cos(R),M=t*Math.sin(R),S=-t*Math.cos(R),b=E*f}else if(v<=i+r){const E=(v-i)/r;_=-d+E*e,M=t,S=0,b=f+E*h}else{const E=(v-i-r)/i,R=E*Math.PI/2;_=d+t*Math.sin(R),M=t*Math.cos(R),S=t*Math.sin(R),b=f+h+E*f}const A=Math.max(0,Math.min(1,b/p));let y=0;v===0?y=.5/s:v===g&&(y=-.5/s);for(let E=0;E<=s;E++){const R=E/s,L=R*Math.PI*2,D=Math.sin(L),F=Math.cos(L);u.x=-M*F,u.y=_,u.z=M*D,o.push(u.x,u.y,u.z),m.set(-M*F,S,M*D),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+y,A)}if(v>0){const E=(v-1)*x;for(let R=0;R<s;R++){const L=E+R,D=E+R+1,F=v*x+R,P=v*x+R+1;a.push(L,D,F),a.push(D,P,F)}}}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class ti extends Ae{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new I,d=new at;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const p=i+f/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[h]/t+1)/2,d.y=(a[h+1]/t+1)/2,c.push(d.x,d.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gn extends Ae{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],f=[],h=[],p=[];let g=0;const x=[],m=i/2;let u=0;v(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new jt(f,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(p,2));function v(){const _=new I,M=new I;let S=0;const A=(e-t)/i;for(let y=0;y<=r;y++){const E=[],R=y/r,L=R*(e-t)+t;for(let D=0;D<=s;D++){const F=D/s,P=F*c+o,N=Math.sin(P),X=Math.cos(P);M.x=L*N,M.y=-R*i+m,M.z=L*X,f.push(M.x,M.y,M.z),_.set(N,A,X).normalize(),h.push(_.x,_.y,_.z),p.push(F,1-R),E.push(g++)}x.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){const R=x[E][y],L=x[E+1][y],D=x[E+1][y+1],F=x[E][y+1];(t>0||E!==0)&&(d.push(R,L,F),S+=3),(e>0||E!==r-1)&&(d.push(L,D,F),S+=3)}l.addGroup(u,S,0),u+=S}function b(_){const M=g,S=new at,A=new I;let y=0;const E=_===!0?t:e,R=_===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,m*R,0),h.push(0,R,0),p.push(.5,.5),g++;const L=g;for(let D=0;D<=s;D++){const P=D/s*c+o,N=Math.cos(P),X=Math.sin(P);A.x=E*X,A.y=m*R,A.z=E*N,f.push(A.x,A.y,A.z),h.push(0,R,0),S.x=N*.5+.5,S.y=X*.5*R+.5,p.push(S.x,S.y),g++}for(let D=0;D<s;D++){const F=M+D,P=L+D;_===!0?d.push(P,P+1,F):d.push(P+1,P,F),y+=3}l.addGroup(u,y,_===!0?1:2),u+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gi extends gn{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new gi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $a extends Ae{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),d(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const b=new I,_=new I,M=new I;for(let S=0;S<e.length;S+=3)p(e[S+0],b),p(e[S+1],_),p(e[S+2],M),c(b,_,M,v)}function c(v,b,_,M){const S=M+1,A=[];for(let y=0;y<=S;y++){A[y]=[];const E=v.clone().lerp(_,y/S),R=b.clone().lerp(_,y/S),L=S-y;for(let D=0;D<=L;D++)D===0&&y===S?A[y][D]=E:A[y][D]=E.clone().lerp(R,D/L)}for(let y=0;y<S;y++)for(let E=0;E<2*(S-y)-1;E++){const R=Math.floor(E/2);E%2===0?(h(A[y][R+1]),h(A[y+1][R]),h(A[y][R])):(h(A[y][R+1]),h(A[y+1][R+1]),h(A[y+1][R]))}}function l(v){const b=new I;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(v),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function d(){const v=new I;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];const _=m(v)/2/Math.PI+.5,M=u(v)/Math.PI+.5;a.push(_,1-M)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){const b=a[v+0],_=a[v+2],M=a[v+4],S=Math.max(b,_,M),A=Math.min(b,_,M);S>.9&&A<.1&&(b<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),M<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function p(v,b){const _=v*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function g(){const v=new I,b=new I,_=new I,M=new I,S=new at,A=new at,y=new at;for(let E=0,R=0;E<r.length;E+=9,R+=6){v.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),S.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),M.copy(v).add(b).add(_).divideScalar(3);const L=m(M);x(S,R+0,v,L),x(A,R+2,b,L),x(y,R+4,_,L)}}function x(v,b,_,M){M<0&&v.x===1&&(a[b]=v.x-1),_.x===0&&_.z===0&&(a[b]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $a(t.vertices,t.indices,t.radius,t.detail)}}class xc extends $a{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xc(t.radius,t.detail)}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const d=i[s],h=i[s+1]-d,p=(a-d)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new at:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new I,s=[],r=[],a=[],o=new I,c=new he;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const d=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=l&&(l=d,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ae(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ae(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _c extends ri{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new at){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*d-p*f+this.aX,l=h*f+p*d+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Sp extends _c{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function vc(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,d,f){let h=(a-r)/l-(o-r)/(l+d)+(o-a)/d,p=(o-a)/d-(c-a)/(d+f)+(c-o)/f;h*=d,p*=d,s(a,o,h,p)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Ch=new I,Ph=new I,Lo=new vc,Do=new vc,No=new vc;class Bl extends ri{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,d;this.closed||o>0?l=s[(o-1)%r]:(Ph.subVectors(s[0],s[1]).add(s[0]),l=Ph);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Ch.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Ch),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(d),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Lo.initNonuniformCatmullRom(l.x,f.x,h.x,d.x,g,x,m),Do.initNonuniformCatmullRom(l.y,f.y,h.y,d.y,g,x,m),No.initNonuniformCatmullRom(l.z,f.z,h.z,d.z,g,x,m)}else this.curveType==="catmullrom"&&(Lo.initCatmullRom(l.x,f.x,h.x,d.x,this.tension),Do.initCatmullRom(l.y,f.y,h.y,d.y,this.tension),No.initCatmullRom(l.z,f.z,h.z,d.z,this.tension));return i.set(Lo.calc(c),Do.calc(c),No.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ih(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function bp(n,t){const e=1-n;return e*e*t}function wp(n,t){return 2*(1-n)*n*t}function Ep(n,t){return n*n*t}function dr(n,t,e,i){return bp(n,t)+wp(n,e)+Ep(n,i)}function Tp(n,t){const e=1-n;return e*e*e*t}function Ap(n,t){const e=1-n;return 3*e*e*n*t}function Rp(n,t){return 3*(1-n)*n*n*t}function Cp(n,t){return n*n*n*t}function fr(n,t,e,i,s){return Tp(n,t)+Ap(n,e)+Rp(n,i)+Cp(n,s)}class cf extends ri{constructor(t=new at,e=new at,i=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new at){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(fr(t,s.x,r.x,a.x,o.x),fr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pp extends ri{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(fr(t,s.x,r.x,a.x,o.x),fr(t,s.y,r.y,a.y,o.y),fr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hf extends ri{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ip extends ri{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class df extends ri{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(dr(t,s.x,r.x,a.x),dr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ff extends ri{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(dr(t,s.x,r.x,a.x),dr(t,s.y,r.y,a.y),dr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uf extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],d=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(Ih(o,c.x,l.x,d.x,f.x),Ih(o,c.y,l.y,d.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var Fa=Object.freeze({__proto__:null,ArcCurve:Sp,CatmullRomCurve3:Bl,CubicBezierCurve:cf,CubicBezierCurve3:Pp,EllipseCurve:_c,LineCurve:hf,LineCurve3:Ip,QuadraticBezierCurve:df,QuadraticBezierCurve3:ff,SplineCurve:uf});class Lp extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fa[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const d=c[l];i&&i.equals(d)||(e.push(d),i=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Fa[s.type]().fromJSON(s))}return this}}class kl extends Lp{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new hf(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new df(this.currentPoint.clone(),new at(t,e),new at(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new cf(this.currentPoint.clone(),new at(t,e),new at(i,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new uf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){const l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+l,e+d,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){const l=new _c(t,e,i,s,r,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zs extends kl{constructor(t){super(t),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new kl().fromJSON(s))}return this}}function Dp(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=pf(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=zp(n,t,r,e)),n.length>80*e){o=n[0],c=n[1];let d=o,f=c;for(let h=e;h<s;h+=e){const p=n[h],g=n[h+1];p<o&&(o=p),g<c&&(c=g),p>d&&(d=p),g>f&&(f=g)}l=Math.max(d-o,f-c),l=l!==0?32767/l:0}return vr(r,a,e,o,c,l,0),a}function pf(n,t,e,i,s){let r;if(s===Kp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Lh(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Lh(a/i|0,n[a],n[a+1],r);return r&&Ds(r,r.next)&&(Mr(r),r=r.next),r}function Ki(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ds(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function vr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Vp(n,i,s,r);let o=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Up(n,i,s,r):Np(n)){t.push(c.i,n.i,l.i),Mr(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=Op(Ki(n),t),vr(n,t,e,i,s,r,2)):a===2&&Fp(n,t,e,i,s,r):vr(Ki(n),t,e,i,s,r,1);break}}}function Np(n){const t=n.prev,e=n,i=n.next;if(Oe(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,d=Math.min(s,r,a),f=Math.min(o,c,l),h=Math.max(s,r,a),p=Math.max(o,c,l);let g=i.next;for(;g!==t;){if(g.x>=d&&g.x<=h&&g.y>=f&&g.y<=p&&sr(s,o,r,c,a,l,g.x,g.y)&&Oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Up(n,t,e,i){const s=n.prev,r=n,a=n.next;if(Oe(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,d=s.y,f=r.y,h=a.y,p=Math.min(o,c,l),g=Math.min(d,f,h),x=Math.max(o,c,l),m=Math.max(d,f,h),u=Hl(p,g,t,e,i),v=Hl(x,m,t,e,i);let b=n.prevZ,_=n.nextZ;for(;b&&b.z>=u&&_&&_.z<=v;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&sr(o,d,c,f,l,h,b.x,b.y)&&Oe(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&sr(o,d,c,f,l,h,_.x,_.y)&&Oe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=u;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&sr(o,d,c,f,l,h,b.x,b.y)&&Oe(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&sr(o,d,c,f,l,h,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Op(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Ds(i,s)&&gf(i,e,e.next,s)&&yr(i,s)&&yr(s,i)&&(t.push(i.i,e.i,s.i),Mr(e),Mr(e.next),e=n=s),e=e.next}while(e!==n);return Ki(e)}function Fp(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Yp(a,o)){let c=xf(a,o);a=Ki(a,a.next),c=Ki(c,c.next),vr(a,t,e,i,s,r,0),vr(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function zp(n,t,e,i){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=pf(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Xp(l))}s.sort(Bp);for(let r=0;r<s.length;r++)e=kp(s[r],e);return e}function Bp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function kp(n,t){const e=Hp(n,t);if(!e)return t;const i=xf(e,n);return Ki(i,i.next),Ki(e,e.next)}function Hp(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,a;if(Ds(n,e))return e;do{if(Ds(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let d=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&mf(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){const f=Math.abs(s-e.y)/(i-e.x);yr(e,n)&&(f<d||f===d&&(e.x>a.x||e.x===a.x&&Gp(a,e)))&&(a=e,d=f)}e=e.next}while(e!==o);return a}function Gp(n,t){return Oe(n.prev,n,t.prev)<0&&Oe(t.next,n,n.next)<0}function Vp(n,t,e,i){let s=n;do s.z===0&&(s.z=Hl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Wp(s)}function Wp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Hl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Xp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function mf(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function sr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&mf(n,t,e,i,s,r,a,o)}function Yp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!qp(n,t)&&(yr(n,t)&&yr(t,n)&&$p(n,t)&&(Oe(n.prev,n,t.prev)||Oe(n,t.prev,t))||Ds(n,t)&&Oe(n.prev,n,n.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ds(n,t){return n.x===t.x&&n.y===t.y}function gf(n,t,e,i){const s=aa(Oe(n,t,e)),r=aa(Oe(n,t,i)),a=aa(Oe(e,i,n)),o=aa(Oe(e,i,t));return!!(s!==r&&a!==o||s===0&&ra(n,e,t)||r===0&&ra(n,i,t)||a===0&&ra(e,n,i)||o===0&&ra(e,t,i))}function ra(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function aa(n){return n>0?1:n<0?-1:0}function qp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&gf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function yr(n,t){return Oe(n.prev,n,n.next)<0?Oe(n,t,n.next)>=0&&Oe(n,n.prev,t)>=0:Oe(n,t,n.prev)<0||Oe(n,n.next,t)<0}function $p(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function xf(n,t){const e=Gl(n.i,n.x,n.y),i=Gl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Lh(n,t,e,i){const s=Gl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Mr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Gl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Zp{static triangulate(t,e,i=2){return Dp(t,e,i)}}class pi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return pi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Dh(t),Nh(i,t);let a=t.length;e.forEach(Dh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Nh(i,e[c]);const o=Zp.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Dh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Nh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Rr extends Ae{constructor(t=new zs([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const u=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Jp;let b,_=!1,M,S,A,y;if(u){b=u.getSpacedPoints(d),_=!0,h=!1;const rt=u.isCatmullRomCurve3?u.closed:!1;M=u.computeFrenetFrames(d,rt),S=new I,A=new I,y=new I}h||(m=0,p=0,g=0,x=0);const E=o.extractPoints(l);let R=E.shape;const L=E.holes;if(!pi.isClockWise(R)){R=R.reverse();for(let rt=0,dt=L.length;rt<dt;rt++){const ut=L[rt];pi.isClockWise(ut)&&(L[rt]=ut.reverse())}}function F(rt){const ut=10000000000000001e-36;let pt=rt[0];for(let vt=1;vt<=rt.length;vt++){const $t=vt%rt.length,qt=rt[$t],Qt=qt.x-pt.x,ie=qt.y-pt.y,U=Qt*Qt+ie*ie,ye=Math.max(Math.abs(qt.x),Math.abs(qt.y),Math.abs(pt.x),Math.abs(pt.y)),de=ut*ye*ye;if(U<=de){rt.splice($t,1),vt--;continue}pt=qt}}F(R),L.forEach(F);const P=L.length,N=R;for(let rt=0;rt<P;rt++){const dt=L[rt];R=R.concat(dt)}function X(rt,dt,ut){return dt||ge("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(dt,ut)}const H=R.length;function et(rt,dt,ut){let pt,vt,$t;const qt=rt.x-dt.x,Qt=rt.y-dt.y,ie=ut.x-rt.x,U=ut.y-rt.y,ye=qt*qt+Qt*Qt,de=qt*U-Qt*ie;if(Math.abs(de)>Number.EPSILON){const C=Math.sqrt(ye),w=Math.sqrt(ie*ie+U*U),G=dt.x-Qt/C,Y=dt.y+qt/C,J=ut.x-U/w,mt=ut.y+ie/w,_t=((J-G)*U-(mt-Y)*ie)/(qt*U-Qt*ie);pt=G+qt*_t-rt.x,vt=Y+Qt*_t-rt.y;const Q=pt*pt+vt*vt;if(Q<=2)return new at(pt,vt);$t=Math.sqrt(Q/2)}else{let C=!1;qt>Number.EPSILON?ie>Number.EPSILON&&(C=!0):qt<-Number.EPSILON?ie<-Number.EPSILON&&(C=!0):Math.sign(Qt)===Math.sign(U)&&(C=!0),C?(pt=-Qt,vt=qt,$t=Math.sqrt(ye)):(pt=qt,vt=Qt,$t=Math.sqrt(ye/2))}return new at(pt/$t,vt/$t)}const Z=[];for(let rt=0,dt=N.length,ut=dt-1,pt=rt+1;rt<dt;rt++,ut++,pt++)ut===dt&&(ut=0),pt===dt&&(pt=0),Z[rt]=et(N[rt],N[ut],N[pt]);const tt=[];let j,Ut=Z.concat();for(let rt=0,dt=P;rt<dt;rt++){const ut=L[rt];j=[];for(let pt=0,vt=ut.length,$t=vt-1,qt=pt+1;pt<vt;pt++,$t++,qt++)$t===vt&&($t=0),qt===vt&&(qt=0),j[pt]=et(ut[pt],ut[$t],ut[qt]);tt.push(j),Ut=Ut.concat(j)}let ot;if(m===0)ot=pi.triangulateShape(N,L);else{const rt=[],dt=[];for(let ut=0;ut<m;ut++){const pt=ut/m,vt=p*Math.cos(pt*Math.PI/2),$t=g*Math.sin(pt*Math.PI/2)+x;for(let qt=0,Qt=N.length;qt<Qt;qt++){const ie=X(N[qt],Z[qt],$t);ht(ie.x,ie.y,-vt),pt===0&&rt.push(ie)}for(let qt=0,Qt=P;qt<Qt;qt++){const ie=L[qt];j=tt[qt];const U=[];for(let ye=0,de=ie.length;ye<de;ye++){const C=X(ie[ye],j[ye],$t);ht(C.x,C.y,-vt),pt===0&&U.push(C)}pt===0&&dt.push(U)}}ot=pi.triangulateShape(rt,dt)}const k=ot.length,nt=g+x;for(let rt=0;rt<H;rt++){const dt=h?X(R[rt],Ut[rt],nt):R[rt];_?(A.copy(M.normals[0]).multiplyScalar(dt.x),S.copy(M.binormals[0]).multiplyScalar(dt.y),y.copy(b[0]).add(A).add(S),ht(y.x,y.y,y.z)):ht(dt.x,dt.y,0)}for(let rt=1;rt<=d;rt++)for(let dt=0;dt<H;dt++){const ut=h?X(R[dt],Ut[dt],nt):R[dt];_?(A.copy(M.normals[rt]).multiplyScalar(ut.x),S.copy(M.binormals[rt]).multiplyScalar(ut.y),y.copy(b[rt]).add(A).add(S),ht(y.x,y.y,y.z)):ht(ut.x,ut.y,f/d*rt)}for(let rt=m-1;rt>=0;rt--){const dt=rt/m,ut=p*Math.cos(dt*Math.PI/2),pt=g*Math.sin(dt*Math.PI/2)+x;for(let vt=0,$t=N.length;vt<$t;vt++){const qt=X(N[vt],Z[vt],pt);ht(qt.x,qt.y,f+ut)}for(let vt=0,$t=L.length;vt<$t;vt++){const qt=L[vt];j=tt[vt];for(let Qt=0,ie=qt.length;Qt<ie;Qt++){const U=X(qt[Qt],j[Qt],pt);_?ht(U.x,U.y+b[d-1].y,b[d-1].x+ut):ht(U.x,U.y,f+ut)}}}ft(),B();function ft(){const rt=s.length/3;if(h){let dt=0,ut=H*dt;for(let pt=0;pt<k;pt++){const vt=ot[pt];Ot(vt[2]+ut,vt[1]+ut,vt[0]+ut)}dt=d+m*2,ut=H*dt;for(let pt=0;pt<k;pt++){const vt=ot[pt];Ot(vt[0]+ut,vt[1]+ut,vt[2]+ut)}}else{for(let dt=0;dt<k;dt++){const ut=ot[dt];Ot(ut[2],ut[1],ut[0])}for(let dt=0;dt<k;dt++){const ut=ot[dt];Ot(ut[0]+H*d,ut[1]+H*d,ut[2]+H*d)}}i.addGroup(rt,s.length/3-rt,0)}function B(){const rt=s.length/3;let dt=0;q(N,dt),dt+=N.length;for(let ut=0,pt=L.length;ut<pt;ut++){const vt=L[ut];q(vt,dt),dt+=vt.length}i.addGroup(rt,s.length/3-rt,1)}function q(rt,dt){let ut=rt.length;for(;--ut>=0;){const pt=ut;let vt=ut-1;vt<0&&(vt=rt.length-1);for(let $t=0,qt=d+m*2;$t<qt;$t++){const Qt=H*$t,ie=H*($t+1),U=dt+pt+Qt,ye=dt+vt+Qt,de=dt+vt+ie,C=dt+pt+ie;xt(U,ye,de,C)}}}function ht(rt,dt,ut){c.push(rt),c.push(dt),c.push(ut)}function Ot(rt,dt,ut){Ht(rt),Ht(dt),Ht(ut);const pt=s.length/3,vt=v.generateTopUV(i,s,pt-3,pt-2,pt-1);me(vt[0]),me(vt[1]),me(vt[2])}function xt(rt,dt,ut,pt){Ht(rt),Ht(dt),Ht(pt),Ht(dt),Ht(ut),Ht(pt);const vt=s.length/3,$t=v.generateSideWallUV(i,s,vt-6,vt-3,vt-2,vt-1);me($t[0]),me($t[1]),me($t[3]),me($t[1]),me($t[2]),me($t[3])}function Ht(rt){s.push(c[rt*3+0]),s.push(c[rt*3+1]),s.push(c[rt*3+2])}function me(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Qp(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Fa[s.type]().fromJSON(s)),new Rr(i,t.options)}}const Jp={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[s*3],d=t[s*3+1];return[new at(r,a),new at(o,c),new at(l,d)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],d=t[i*3+1],f=t[i*3+2],h=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(o-d)<Math.abs(a-l)?[new at(a,1-c),new at(l,1-f),new at(h,1-g),new at(x,1-u)]:[new at(o,1-c),new at(d,1-f),new at(p,1-g),new at(m,1-u)]}};function Qp(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Cs extends $a{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cs(t.radius,t.detail)}}class ee extends Ae{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,d=c+1,f=t/o,h=e/c,p=[],g=[],x=[],m=[];for(let u=0;u<d;u++){const v=u*h-a;for(let b=0;b<l;b++){const _=b*f-r;g.push(_,-v,0),x.push(0,0,1),m.push(b/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let v=0;v<o;v++){const b=v+l*u,_=v+l*(u+1),M=v+1+l*(u+1),S=v+1+l*u;p.push(b,_,S),p.push(_,M,S)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ka extends Ae{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],d=[];let f=t;const h=(e-t)/s,p=new I,g=new at;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const u=r+m/i*a;p.x=f*Math.cos(u),p.y=f*Math.sin(u),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,d.push(g.x,g.y)}f+=h}for(let x=0;x<s;x++){const m=x*(i+1);for(let u=0;u<i;u++){const v=u+m,b=v,_=v+i+1,M=v+i+2,S=v+1;o.push(b,_,S),o.push(_,M,S)}}this.setIndex(o),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ka(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class yc extends Ae{constructor(t=new zs([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let d=0;d<t.length;d++)l(t[d]),this.addGroup(o,c,d),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(r,3)),this.setAttribute("uv",new jt(a,2));function l(d){const f=s.length/3,h=d.extractPoints(e);let p=h.shape;const g=h.holes;pi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,u=g.length;m<u;m++){const v=g[m];pi.isClockWise(v)===!0&&(g[m]=v.reverse())}const x=pi.triangulateShape(p,g);for(let m=0,u=g.length;m<u;m++){const v=g[m];p=p.concat(v)}for(let m=0,u=p.length;m<u;m++){const v=p[m];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,u=x.length;m<u;m++){const v=x[m],b=v[0]+f,_=v[1]+f,M=v[2]+f;i.push(b,_,M),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return jp(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}return new yc(i,t.curveSegments)}}function jp(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Ve extends Ae{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const d=[],f=new I,h=new I,p=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){const v=[],b=u/i,_=a+b*o,M=t*Math.cos(_),S=Math.sqrt(t*t-M*M);let A=0;u===0&&a===0?A=.5/e:u===i&&c===Math.PI&&(A=-.5/e);for(let y=0;y<=e;y++){const E=y/e,R=s+E*r;f.x=-S*Math.cos(R),f.y=M,f.z=S*Math.sin(R),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(E+A,1-b),v.push(l++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<e;v++){const b=d[u][v+1],_=d[u][v],M=d[u+1][v],S=d[u+1][v+1];(u!==0||a>0)&&p.push(b,_,S),(u!==i-1||c<Math.PI)&&p.push(_,M,S)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zi extends Ae{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],d=[],f=[],h=new I,p=new I,g=new I;for(let x=0;x<=i;x++){const m=a+x/i*o;for(let u=0;u<=s;u++){const v=u/s*r;p.x=(t+e*Math.cos(m))*Math.cos(v),p.y=(t+e*Math.cos(m))*Math.sin(v),p.z=e*Math.sin(m),l.push(p.x,p.y,p.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),g.subVectors(p,h).normalize(),d.push(g.x,g.y,g.z),f.push(u/s),f.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){const u=(s+1)*x+m-1,v=(s+1)*(x-1)+m-1,b=(s+1)*(x-1)+m,_=(s+1)*x+m;c.push(u,v,_),c.push(v,b,_)}this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Mc extends Ae{constructor(t=1,e=.4,i=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:s,p:r,q:a},i=Math.floor(i),s=Math.floor(s);const o=[],c=[],l=[],d=[],f=new I,h=new I,p=new I,g=new I,x=new I,m=new I,u=new I;for(let b=0;b<=i;++b){const _=b/i*r*Math.PI*2;v(_,r,a,t,p),v(_+.01,r,a,t,g),m.subVectors(g,p),u.addVectors(g,p),x.crossVectors(m,u),u.crossVectors(x,m),x.normalize(),u.normalize();for(let M=0;M<=s;++M){const S=M/s*Math.PI*2,A=-e*Math.cos(S),y=e*Math.sin(S);f.x=p.x+(A*u.x+y*x.x),f.y=p.y+(A*u.y+y*x.y),f.z=p.z+(A*u.z+y*x.z),c.push(f.x,f.y,f.z),h.subVectors(f,p).normalize(),l.push(h.x,h.y,h.z),d.push(b/i),d.push(M/s)}}for(let b=1;b<=i;b++)for(let _=1;_<=s;_++){const M=(s+1)*(b-1)+(_-1),S=(s+1)*b+(_-1),A=(s+1)*b+_,y=(s+1)*(b-1)+_;o.push(M,S,y),o.push(S,A,y)}this.setIndex(o),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(d,2));function v(b,_,M,S,A){const y=Math.cos(b),E=Math.sin(b),R=M/_*b,L=Math.cos(R);A.x=S*(2+L)*.5*y,A.y=S*(2+L)*E*.5,A.z=S*Math.sin(R)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class za extends Ae{constructor(t=new ff(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,c=new I,l=new at;let d=new I;const f=[],h=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new jt(f,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(p,2));function x(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),v(),u()}function m(b){d=t.getPointAt(b/e,d);const _=a.normals[b],M=a.binormals[b];for(let S=0;S<=s;S++){const A=S/s*Math.PI*2,y=Math.sin(A),E=-Math.cos(A);c.x=E*_.x+y*M.x,c.y=E*_.y+y*M.y,c.z=E*_.z+y*M.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=d.x+i*c.x,o.y=d.y+i*c.y,o.z=d.z+i*c.z,f.push(o.x,o.y,o.z)}}function u(){for(let b=1;b<=e;b++)for(let _=1;_<=s;_++){const M=(s+1)*(b-1)+(_-1),S=(s+1)*b+(_-1),A=(s+1)*b+_,y=(s+1)*(b-1)+_;g.push(M,S,y),g.push(S,A,y)}}function v(){for(let b=0;b<=e;b++)for(let _=0;_<=s;_++)l.x=b/e,l.y=_/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new za(new Fa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Ns(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Uh(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Uh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function cn(n){const t={};for(let e=0;e<n.length;e++){const i=Ns(n[e]);for(const s in i)t[s]=i[s]}return t}function Uh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function t0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function _f(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Sr={clone:Ns,merge:cn};var e0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ke extends es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=t0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Tt().setHex(s.value);break;case"v2":this.uniforms[i].value=new at().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ue().fromArray(s.value);break;case"m3":this.uniforms[i].value=new se().fromArray(s.value);break;case"m4":this.uniforms[i].value=new he().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class vf extends Ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lt extends es{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ei extends lt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class i0 extends es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class s0 extends es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Za extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class r0 extends Za{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Uo=new he,Oh=new I,Fh=new I;class Sc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gc,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oh),Fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Uo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===gr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oa=new I,la=new Ln,Xn=new I;class yf extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oa,la,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,Xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(oa,la,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new I,zh=new at,Bh=new at;class mn extends yf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,zh,Bh),e.subVectors(Bh,zh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class a0 extends Sc{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Ls*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Mf extends Za{constructor(t,e,i=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new a0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class o0 extends Sc{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}}class l0 extends Za{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new o0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ja extends yf{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class c0 extends Sc{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kh extends Za{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new c0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const gs=-90,xs=1;class h0 extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(gs,xs,t,e);s.layers=this.layers,this.add(s);const r=new mn(gs,xs,t,e);r.layers=this.layers,this.add(r);const a=new mn(gs,xs,t,e);a.layers=this.layers,this.add(a);const o=new mn(gs,xs,t,e);o.layers=this.layers,this.add(o);const c=new mn(gs,xs,t,e);c.layers=this.layers,this.add(c);const l=new mn(gs,xs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===gr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(f,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class d0 extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class f0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=u0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function u0(){this._document.hidden===!1&&this.reset()}const Hh=new he;class p0{constructor(t,e,i=0,s=1/0){this.ray=new Ar(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ge("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(t,e=!0,i=[]){return Vl(t,this,i,e),i.sort(Gh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Vl(t[s],this,i,e);return i.sort(Gh),i}}function Gh(n,t){return n.distance-t.distance}function Vl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Vl(r[a],t,e,!0)}}class Vh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ae(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Wc=class Wc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Wc.prototype.isMatrix2=!0;let Wh=Wc;class m0 extends Di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Xh(n,t,e,i){const s=g0(i);switch(e){case Kd:return n*t;case oc:return n*t/s.components*s.byteLength;case lc:return n*t/s.components*s.byteLength;case $i:return n*t*2/s.components*s.byteLength;case cc:return n*t*2/s.components*s.byteLength;case Zd:return n*t*3/s.components*s.byteLength;case Hn:return n*t*4/s.components*s.byteLength;case hc:return n*t*4/s.components*s.byteLength;case Ma:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ba:case wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:case cl:return Math.max(n,16)*Math.max(t,8)/4;case al:case ll:return Math.max(n,8)*Math.max(t,8)/2;case hl:case dl:case ul:case pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fl:case Pa:case ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Pl:case Il:case Ll:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Dl:case Nl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ia:case Ul:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g0(n){switch(n){case wn:case Xd:return{byteLength:1,components:1};case pr:case Yd:case xn:return{byteLength:2,components:1};case rc:case ac:return{byteLength:2,components:4};case ii:case sc:case kn:return{byteLength:4,components:1};case qd:case $d:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function x0(n){const t=new WeakMap;function e(o,c){const l=o.array,d=o.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const d=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,d);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];n.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
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
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
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
#endif`,E0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
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
#endif`,A0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I0=`#ifdef USE_IRIDESCENCE
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
#endif`,L0=`#ifdef USE_BUMPMAP
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,H0=`#define PI 3.141592653589793
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
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
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
}`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hm=`#ifdef USE_ENVMAP
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
#endif`,dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
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
#endif`,gm=`uniform sampler2D dfgLUT;
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
}`,xm=`
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ym=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rm=`#if defined( USE_POINTS_UV )
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
#endif`,Cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`#ifdef USE_MORPHTARGETS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ig=`float getShadowMask() {
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vg=`uniform sampler2D t2D;
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
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
}`,Eg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ng=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,Og=`#define MATCAP
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
}`,Fg=`#define MATCAP
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
}`,zg=`#define NORMAL
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
}`,Bg=`#define NORMAL
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
}`,kg=`#define PHONG
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
}`,Hg=`#define PHONG
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
}`,Gg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
}`,Wg=`#define TOON
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
}`,Xg=`#define TOON
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
}`,Yg=`uniform float size;
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
}`,qg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,Kg=`uniform vec3 color;
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
}`,Zg=`uniform float rotation;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:_0,alphahash_pars_fragment:v0,alphamap_fragment:y0,alphamap_pars_fragment:M0,alphatest_fragment:S0,alphatest_pars_fragment:b0,aomap_fragment:w0,aomap_pars_fragment:E0,batching_pars_vertex:T0,batching_vertex:A0,begin_vertex:R0,beginnormal_vertex:C0,bsdfs:P0,iridescence_fragment:I0,bumpmap_pars_fragment:L0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:N0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:O0,color_fragment:F0,color_pars_fragment:z0,color_pars_vertex:B0,color_vertex:k0,common:H0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:V0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:Y0,emissivemap_pars_fragment:q0,colorspace_fragment:$0,colorspace_pars_fragment:K0,envmap_fragment:Z0,envmap_common_pars_fragment:J0,envmap_pars_fragment:Q0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:hm,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_pars_fragment:am,lights_lambert_fragment:om,lights_lambert_pars_fragment:lm,lights_pars_begin:cm,lights_toon_fragment:dm,lights_toon_pars_fragment:fm,lights_phong_fragment:um,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:xm,lights_fragment_maps:_m,lights_fragment_end:vm,lightprobes_pars_fragment:ym,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:wm,map_fragment:Em,map_pars_fragment:Tm,map_particle_fragment:Am,map_particle_pars_fragment:Rm,metalnessmap_fragment:Cm,metalnessmap_pars_fragment:Pm,morphinstance_vertex:Im,morphcolor_vertex:Lm,morphnormal_vertex:Dm,morphtarget_pars_vertex:Nm,morphtarget_vertex:Um,normal_fragment_begin:Om,normal_fragment_maps:Fm,normal_pars_fragment:zm,normal_pars_vertex:Bm,normal_vertex:km,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Wm,iridescence_pars_fragment:Xm,opaque_fragment:Ym,packing:qm,premultiplied_alpha_fragment:$m,project_vertex:Km,dithering_fragment:Zm,dithering_pars_fragment:Jm,roughnessmap_fragment:Qm,roughnessmap_pars_fragment:jm,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:eg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:sg,skinning_pars_vertex:rg,skinning_vertex:ag,skinnormal_vertex:og,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:hg,tonemapping_pars_fragment:dg,transmission_fragment:fg,transmission_pars_fragment:ug,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:xg,background_vert:_g,background_frag:vg,backgroundCube_vert:yg,backgroundCube_frag:Mg,cube_vert:Sg,cube_frag:bg,depth_vert:wg,depth_frag:Eg,distance_vert:Tg,distance_frag:Ag,equirect_vert:Rg,equirect_frag:Cg,linedashed_vert:Pg,linedashed_frag:Ig,meshbasic_vert:Lg,meshbasic_frag:Dg,meshlambert_vert:Ng,meshlambert_frag:Ug,meshmatcap_vert:Og,meshmatcap_frag:Fg,meshnormal_vert:zg,meshnormal_frag:Bg,meshphong_vert:kg,meshphong_frag:Hg,meshphysical_vert:Gg,meshphysical_frag:Vg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:Yg,points_frag:qg,shadow_vert:$g,shadow_frag:Kg,sprite_vert:Zg,sprite_frag:Jg},Rt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},$n={basic:{uniforms:cn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:cn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:cn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:cn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:cn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:cn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:cn([Rt.points,Rt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:cn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:cn([Rt.common,Rt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:cn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:cn([Rt.sprite,Rt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:cn([Rt.common,Rt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:cn([Rt.lights,Rt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};$n.physical={uniforms:cn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const ca={r:0,b:0,g:0},Qg=new he,bf=new se;bf.set(-1,0,0,0,1,0,0,0,1);function jg(n,t,e,i,s,r){const a=new Tt(0);let o=s===!0?0:1,c,l,d=null,f=0,h=null;function p(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const _=v.backgroundBlurriness>0;b=t.get(b,_)}return b}function g(v){let b=!1;const _=p(v);_===null?m(a,o):_&&_.isColor&&(m(_,1),b=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,b){const _=p(b);_&&(_.isCubeTexture||_.mapping===Ya)?(l===void 0&&(l=new Zt(new An(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:Ns($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(bf),l.material.toneMapped=pe.getTransfer(_.colorSpace)!==be,(d!==_||f!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Zt(new ee(2,2),new Ke({name:"BackgroundMaterial",uniforms:Ns($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=pe.getTransfer(_.colorSpace)!==be,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,b){v.getRGB(ca,_f(n)),e.buffers.color.setClear(ca.r,ca.g,ca.b,b,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:x,dispose:u}}function tx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(L,D,F,P,N){let X=!1;const H=f(L,P,F,D);r!==H&&(r=H,l(r.object)),X=p(L,P,F,N),X&&g(L,P,F,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,_(L,D,F,P),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function d(L){return n.deleteVertexArray(L)}function f(L,D,F,P){const N=P.wireframe===!0;let X=i[D.id];X===void 0&&(X={},i[D.id]=X);const H=L.isInstancedMesh===!0?L.id:0;let et=X[H];et===void 0&&(et={},X[H]=et);let Z=et[F.id];Z===void 0&&(Z={},et[F.id]=Z);let tt=Z[N];return tt===void 0&&(tt=h(c()),Z[N]=tt),tt}function h(L){const D=[],F=[],P=[];for(let N=0;N<e;N++)D[N]=0,F[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:P,object:L,attributes:{},index:null}}function p(L,D,F,P){const N=r.attributes,X=D.attributes;let H=0;const et=F.getAttributes();for(const Z in et)if(et[Z].location>=0){const j=N[Z];let Ut=X[Z];if(Ut===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(Ut=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(Ut=L.instanceColor)),j===void 0||j.attribute!==Ut||Ut&&j.data!==Ut.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(L,D,F,P){const N={},X=D.attributes;let H=0;const et=F.getAttributes();for(const Z in et)if(et[Z].location>=0){let j=X[Z];j===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const Ut={};Ut.attribute=j,j&&j.data&&(Ut.data=j.data),N[Z]=Ut,H++}r.attributes=N,r.attributesNum=H,r.index=P}function x(){const L=r.newAttributes;for(let D=0,F=L.length;D<F;D++)L[D]=0}function m(L){u(L,0)}function u(L,D){const F=r.newAttributes,P=r.enabledAttributes,N=r.attributeDivisors;F[L]=1,P[L]===0&&(n.enableVertexAttribArray(L),P[L]=1),N[L]!==D&&(n.vertexAttribDivisor(L,D),N[L]=D)}function v(){const L=r.newAttributes,D=r.enabledAttributes;for(let F=0,P=D.length;F<P;F++)D[F]!==L[F]&&(n.disableVertexAttribArray(F),D[F]=0)}function b(L,D,F,P,N,X,H){H===!0?n.vertexAttribIPointer(L,D,F,N,X):n.vertexAttribPointer(L,D,F,P,N,X)}function _(L,D,F,P){x();const N=P.attributes,X=F.getAttributes(),H=D.defaultAttributeValues;for(const et in X){const Z=X[et];if(Z.location>=0){let tt=N[et];if(tt===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),tt!==void 0){const j=tt.normalized,Ut=tt.itemSize,ot=t.get(tt);if(ot===void 0)continue;const k=ot.buffer,nt=ot.type,ft=ot.bytesPerElement,B=nt===n.INT||nt===n.UNSIGNED_INT||tt.gpuType===sc;if(tt.isInterleavedBufferAttribute){const q=tt.data,ht=q.stride,Ot=tt.offset;if(q.isInstancedInterleavedBuffer){for(let xt=0;xt<Z.locationSize;xt++)u(Z.location+xt,q.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let xt=0;xt<Z.locationSize;xt++)m(Z.location+xt);n.bindBuffer(n.ARRAY_BUFFER,k);for(let xt=0;xt<Z.locationSize;xt++)b(Z.location+xt,Ut/Z.locationSize,nt,j,ht*ft,(Ot+Ut/Z.locationSize*xt)*ft,B)}else{if(tt.isInstancedBufferAttribute){for(let q=0;q<Z.locationSize;q++)u(Z.location+q,tt.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let q=0;q<Z.locationSize;q++)m(Z.location+q);n.bindBuffer(n.ARRAY_BUFFER,k);for(let q=0;q<Z.locationSize;q++)b(Z.location+q,Ut/Z.locationSize,nt,j,Ut*ft,Ut/Z.locationSize*q*ft,B)}}else if(H!==void 0){const j=H[et];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(Z.location,j);break;case 3:n.vertexAttrib3fv(Z.location,j);break;case 4:n.vertexAttrib4fv(Z.location,j);break;default:n.vertexAttrib1fv(Z.location,j)}}}}v()}function M(){E();for(const L in i){const D=i[L];for(const F in D){const P=D[F];for(const N in P){const X=P[N];for(const H in X)d(X[H].object),delete X[H];delete P[N]}}delete i[L]}}function S(L){if(i[L.id]===void 0)return;const D=i[L.id];for(const F in D){const P=D[F];for(const N in P){const X=P[N];for(const H in X)d(X[H].object),delete X[H];delete P[N]}}delete i[L.id]}function A(L){for(const D in i){const F=i[D];for(const P in F){const N=F[P];if(N[L.id]===void 0)continue;const X=N[L.id];for(const H in X)d(X[H].object),delete X[H];delete N[L.id]}}}function y(L){for(const D in i){const F=i[D],P=L.isInstancedMesh===!0?L.id:0,N=F[P];if(N!==void 0){for(const X in N){const H=N[X];for(const et in H)d(H[et].object),delete H[et];delete N[X]}delete F[P],Object.keys(F).length===0&&delete i[D]}}}function E(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function ex(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),e.update(l,i,d))}function o(c,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let h=0;for(let p=0;p<d;p++)h+=l[p];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function nx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Hn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const y=A===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==wn&&A!==kn&&!y&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(Jt("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:_,maxSamples:M,samples:S}}function ix(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new fi,o=new se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=d(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,u=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{const v=r?0:i,b=v*4;let _=u.clippingState||null;c.value=_,_=d(g,h,b,p);for(let M=0;M!==b;++M)_[M]=e[M];u.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(f,h,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const u=p+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let b=0,_=p;b!==x;++b,_+=4)a.copy(f[b]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}const Es=4,sx=6,rx=20,ax=256,Qs=new Ja,Yh=new Tt;let Oo=null,Fo=0,zo=0,Bo=!1;const ox=new I,ki=new I;class Wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=ox}=r;Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Oo,Fo,zo),this._renderer.xr.enabled=Bo,t.scissorTest=!1,_s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:xn,format:Hn,colorSpace:La,depthBuffer:!1},s=qh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qh(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lx(r)),this._blurMaterial=hx(r,t,e),this._ggxMaterial=cx(r,t,e)}return s}_compileMaterial(t){const e=new Zt(new Ae,t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,i,s,r){const c=new mn(90,1,e,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Yh),f.toneMapping=Qn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new An,new te({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let u=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,u=!0):(m.color.copy(Yh),u=!0);for(let b=0;b<6;b++){const _=b%3;_===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[b],r.y,r.z)):_===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[b]));const M=this._cubeSize;_s(s,_*M,b>2?M:0,M,M),f.setRenderTarget(s),u&&f.render(x,c),f.render(t,c)}f.toneMapping=p,f.autoClear=h,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===qi||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$h());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;_s(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Qs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-d*d),h=l*1.25,p=f*h,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Es?i-g+Es:0),u=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=g-e,_s(r,m,u,3*x,2*x),s.setRenderTarget(r),s.render(o,Qs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,_s(t,m,u,3*x,2*x),s.setRenderTarget(t),s.render(o,Qs)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const d=this._sizeLods[s],f=3*d*(s>this._lodMax-Es?s-this._lodMax+Es:0),h=4*(this._cubeSize-d);_s(e,f,h,3*d,2*d),a.setRenderTarget(e),a.render(c,Qs)}}function lx(n){const t=[],e=[];let i=n;const s=n-Es+1+sx;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,p=3,g=new Float32Array(p*h*f),x=new Float32Array(p*h*f);for(let u=0;u<f;u++){const v=u%3*2/3-1,b=u>2?0:-1,_=[v,b,0,v+2/3,b,0,v+2/3,b+1,0,v,b,0,v+2/3,b+1,0,v,b+1,0];g.set(_,p*h*u);for(let M=0;M<h;M++){const S=d[M*2]*2-1,A=d[M*2+1]*2-1;u===0?ki.set(1,A,S):u===1?ki.set(-S,1,-A):u===2?ki.set(-S,A,1):u===3?ki.set(-1,A,-S):u===4?ki.set(-S,-1,A):ki.set(S,A,-1),ki.toArray(x,(u*h+M)*p)}}const m=new Ae;m.setAttribute("position",new jn(g,p)),m.setAttribute("outputDirection",new jn(x,p)),e.push(new Zt(m,null)),i>Es&&i--}return{lodMeshes:e,sizeLods:t}}function qh(n,t,e){const i=new dn(n,t,e);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function cx(n,t,e){return new Ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ax,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function hx(n,t,e){return new Ke({name:"SphericalGaussianBlur",defines:{SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function $h(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Kh(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Qa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class wf extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new of(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new An(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Jn});r.uniforms.tEquirect.value=e;const a=new Zt(s,r),o=e.minFilter;return e.minFilter===Wi&&(e.minFilter=en),new h0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function dx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===ya||p===oo)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const x=new wf(g.height);return x.fromEquirectangularTexture(n,h),t.set(h,x),h.addEventListener("dispose",l),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,g=p===ya||p===oo,x=p===qi||p===Is;if(g||x){let m=e.get(h);const u=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return i===null&&(i=new Wl(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return g&&v&&v.height>0||x&&v&&c(v)?(i===null&&(i=new Wl(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,p){return p===ya?h.mapping=qi:p===oo&&(h.mapping=Is),h}function c(h){let p=0;const g=6;for(let x=0;x<g;x++)h[x]!==void 0&&p++;return p===g}function l(h){const p=h.target;p.removeEventListener("dispose",l);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(h){const p=h.target;p.removeEventListener("dispose",d);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function fx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&As("WebGLRenderer: "+i+" extension not supported."),s}}}function ux(n,t,e,i){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const p in h)t.update(h[p],n.ARRAY_BUFFER)}function l(f){const h=[],p=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(p!==null){const v=p.array;x=p.version;for(let b=0,_=v.length;b<_;b+=3){const M=v[b+0],S=v[b+1],A=v[b+2];h.push(M,S,S,A,A,M)}}else{const v=g.array;x=g.version;for(let b=0,_=v.length/3-1;b<_;b+=3){const M=b+0,S=b+1,A=b+2;h.push(M,S,S,A,A,M)}}const m=new(g.count>=65535?nf:ef)(h,1);m.version=x;const u=r.get(f);u&&t.remove(u),r.set(f,m)}function d(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:d}}function px(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){n.drawElements(i,h,r,f*a),e.update(h,i,1)}function l(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,f*a,p),e.update(h,i,p))}function d(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let x=0;for(let m=0;m<p;m++)x+=h[m];e.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function mx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function gx(n,t,e){const i=new WeakMap,s=new Ue;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let R=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var p=R;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let M=o.attributes.position.count*_,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const A=new Float32Array(M*S*4*f),y=new Qd(A,M,S,f);y.type=kn,y.needsUpdate=!0;const E=_*4;for(let L=0;L<f;L++){const D=u[L],F=v[L],P=b[L],N=M*S*4*L;for(let X=0;X<D.count;X++){const H=X*E;g===!0&&(s.fromBufferAttribute(D,X),A[N+H+0]=s.x,A[N+H+1]=s.y,A[N+H+2]=s.z,A[N+H+3]=0),x===!0&&(s.fromBufferAttribute(F,X),A[N+H+4]=s.x,A[N+H+5]=s.y,A[N+H+6]=s.z,A[N+H+7]=0),m===!0&&(s.fromBufferAttribute(P,X),A[N+H+8]=s.x,A[N+H+9]=s.y,A[N+H+10]=s.z,A[N+H+11]=P.itemSize===4?s.w:1)}}h={count:f,texture:y,size:new at(M,S)},i.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function xx(n,t,e,i,s){let r=new WeakMap;function a(l){const d=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return h}function o(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const _x={[Ql]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[Xa]:"ACES_FILMIC_TONE_MAPPING",[nc]:"AGX_TONE_MAPPING",[ic]:"NEUTRAL_TONE_MAPPING",[ec]:"CUSTOM_TONE_MAPPING"};function vx(n,t,e,i,s,r){const a=new dn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Ae;l.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new jt([0,2,0,0,2,0],2));const d=new vf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Zt(l,d),h=new Ja(-1,1,1,-1,0,1);let p=null,g=null,x=!1,m,u=null,v=[],b=!1;this.setSize=function(_,M){a.setSize(_,M),o!==null&&o.setSize(_,M),c!==null&&c.setSize(_,M);for(let S=0;S<v.length;S++){const A=v[S];A.setSize&&A.setSize(_,M)}},this.setEffects=function(_){v=_,b=v.length>0&&v[0].isRenderPass===!0;const M=a.width,S=a.height;v.length>0&&o===null&&(o=new dn(M,S,{type:xn,depthBuffer:!1,stencilBuffer:!1}),c=new dn(M,S,{type:xn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){const y=v[A];y.setSize&&y.setSize(M,S)}},this.begin=function(_,M){if(x||_.toneMapping===Qn&&v.length===0)return!1;if(u=M,M!==null){const S=M.width,A=M.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return b===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=Qn,!0},this.hasRenderPass=function(){return b},this.end=function(_,M){_.toneMapping=m,x=!0;let S=a,A=o;for(let y=0;y<v.length;y++){const E=v[y];E.enabled!==!1&&(E.render(_,A,S,M),E.needsSwap!==!1&&(S=A,A=A===o?c:o))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,d.defines={},pe.getTransfer(p)===be&&(d.defines.SRGB_TRANSFER="");const y=_x[g];y&&(d.defines[y]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(u),_.render(f,h),u=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}const Ef=new nn,Xl=new xr(1,1),Tf=new Qd,Af=new np,Rf=new of,Zh=[],Jh=[],Qh=new Float32Array(16),jh=new Float32Array(9),td=new Float32Array(4);function Bs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Zh[s];if(r===void 0&&(r=new Float32Array(s),Zh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ja(n,t){let e=Jh[t];e===void 0&&(e=new Int32Array(t),Jh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function yx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2fv(this.addr,t),qe(e,t)}}function Sx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;n.uniform3fv(this.addr,t),qe(e,t)}}function bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4fv(this.addr,t),qe(e,t)}}function wx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;td.set(i),n.uniformMatrix2fv(this.addr,!1,td),qe(e,i)}}function Ex(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;jh.set(i),n.uniformMatrix3fv(this.addr,!1,jh),qe(e,i)}}function Tx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;Qh.set(i),n.uniformMatrix4fv(this.addr,!1,Qh),qe(e,i)}}function Ax(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Rx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2iv(this.addr,t),qe(e,t)}}function Cx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3iv(this.addr,t),qe(e,t)}}function Px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4iv(this.addr,t),qe(e,t)}}function Ix(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Lx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2uiv(this.addr,t),qe(e,t)}}function Dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3uiv(this.addr,t),qe(e,t)}}function Nx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4uiv(this.addr,t),qe(e,t)}}function Ux(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Xl.compareFunction=e.isReversedDepthBuffer()?fc:dc,r=Xl):r=Ef,e.setTexture2D(t||r,s)}function Ox(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Af,s)}function Fx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Rf,s)}function zx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Tf,s)}function Bx(n){switch(n){case 5126:return yx;case 35664:return Mx;case 35665:return Sx;case 35666:return bx;case 35674:return wx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return Rx;case 35668:case 35672:return Cx;case 35669:case 35673:return Px;case 5125:return Ix;case 36294:return Lx;case 36295:return Dx;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return zx}}function kx(n,t){n.uniform1fv(this.addr,t)}function Hx(n,t){const e=Bs(t,this.size,2);n.uniform2fv(this.addr,e)}function Gx(n,t){const e=Bs(t,this.size,3);n.uniform3fv(this.addr,e)}function Vx(n,t){const e=Bs(t,this.size,4);n.uniform4fv(this.addr,e)}function Wx(n,t){const e=Bs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Xx(n,t){const e=Bs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Yx(n,t){const e=Bs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function qx(n,t){n.uniform1iv(this.addr,t)}function $x(n,t){n.uniform2iv(this.addr,t)}function Kx(n,t){n.uniform3iv(this.addr,t)}function Zx(n,t){n.uniform4iv(this.addr,t)}function Jx(n,t){n.uniform1uiv(this.addr,t)}function Qx(n,t){n.uniform2uiv(this.addr,t)}function jx(n,t){n.uniform3uiv(this.addr,t)}function t_(n,t){n.uniform4uiv(this.addr,t)}function e_(n,t,e){const i=this.cache,s=t.length,r=ja(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Xl:a=Ef;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function n_(n,t,e){const i=this.cache,s=t.length,r=ja(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Af,r[a])}function i_(n,t,e){const i=this.cache,s=t.length,r=ja(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Rf,r[a])}function s_(n,t,e){const i=this.cache,s=t.length,r=ja(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Tf,r[a])}function r_(n){switch(n){case 5126:return kx;case 35664:return Hx;case 35665:return Gx;case 35666:return Vx;case 35674:return Wx;case 35675:return Xx;case 35676:return Yx;case 5124:case 35670:return qx;case 35667:case 35671:return $x;case 35668:case 35672:return Kx;case 35669:case 35673:return Zx;case 5125:return Jx;case 36294:return Qx;case 36295:return jx;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}class a_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Bx(e.type)}}class o_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r_(e.type)}}class l_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function ed(n,t){n.seq.push(t),n.map[t.id]=t}function c_(n,t,e){const i=n.name,s=i.length;for(ko.lastIndex=0;;){const r=ko.exec(i),a=ko.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ed(e,l===void 0?new a_(o,n,t):new o_(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new l_(o),ed(e,f)),e=f}}}class Ea{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);c_(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function nd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const h_=37297;let d_=0;function f_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const id=new se;function u_(n){pe._getMatrix(id,pe.workingColorSpace,n);const t=`mat3( ${id.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(n)){case Da:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function sd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+f_(n.getShaderSource(t),o)}else return r}function p_(n,t){const e=u_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const m_={[Ql]:"Linear",[jl]:"Reinhard",[tc]:"Cineon",[Xa]:"ACESFilmic",[nc]:"AgX",[ic]:"Neutral",[ec]:"Custom"};function g_(n,t){const e=m_[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ha=new I;function x_(){pe.getLuminanceCoefficients(ha);const n=ha.x.toFixed(4),t=ha.y.toFixed(4),e=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function __(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function v_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function y_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function rr(n){return n!==""}function rd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ad(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const M_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(n){return n.replace(M_,b_)}const S_=new Map;function b_(n,t){let e=le[t];if(e===void 0){const i=S_.get(t);if(i!==void 0)e=le[i],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Yl(e)}const w_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(n){return n.replace(w_,E_)}function E_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const T_={[or]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function A_(n){return T_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R_={[qi]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[Ya]:"ENVMAP_TYPE_CUBE_UV"};function C_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":R_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const P_={[Is]:"ENVMAP_MODE_REFRACTION"};function I_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":P_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L_={[Vd]:"ENVMAP_BLENDING_MULTIPLY",[_u]:"ENVMAP_BLENDING_MIX",[vu]:"ENVMAP_BLENDING_ADD"};function D_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":L_[n.combine]||"ENVMAP_BLENDING_NONE"}function N_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function U_(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=A_(e),l=C_(e),d=I_(e),f=D_(e),h=N_(e),p=__(e),g=v_(r),x=s.createProgram();let m,u,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rr).join(`
`),u.length>0&&(u+=`
`)):(m=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),u=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?le.tonemapping_pars_fragment:"",e.toneMapping!==Qn?g_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,p_("linearToOutputTexel",e.outputColorSpace),x_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),a=Yl(a),a=rd(a,e),a=ad(a,e),o=Yl(o),o=rd(o,e),o=ad(o,e),a=od(a),o=od(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=v+m+a,_=v+u+o,M=nd(s,s.VERTEX_SHADER,b),S=nd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,M),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(M)||"",P=s.getShaderInfoLog(S)||"",N=D.trim(),X=F.trim(),H=P.trim();let et=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,M,S);else{const tt=sd(s,M,"vertex"),j=sd(s,S,"fragment");ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+tt+`
`+j)}else N!==""?Jt("WebGLProgram: Program Info Log:",N):(X===""||H==="")&&(Z=!1);Z&&(L.diagnostics={runnable:et,programLog:N,vertexShader:{log:X,prefix:m},fragmentShader:{log:H,prefix:u}})}s.deleteShader(M),s.deleteShader(S),y=new Ea(s,x),E=y_(s,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,h_)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=S,this}let O_=0;class F_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new z_(t),e.set(t,i)),i}}class z_{constructor(t){this.id=O_++,this.code=t,this.usedTimes=0}}function B_(n){return n===$i||n===Pa||n===Ia}function k_(n,t,e,i,s,r){const a=new mc,o=new F_,c=new Set,l=[],d=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,E,R,L,D,F){const P=L.fog,N=D.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,et=t.get(y.envMap||X,H),Z=et&&et.mapping===Ya?et.image.height:null,tt=p[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&Jt("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ut=j!==void 0?j.length:0;let ot=0;N.morphAttributes.position!==void 0&&(ot=1),N.morphAttributes.normal!==void 0&&(ot=2),N.morphAttributes.color!==void 0&&(ot=3);let k,nt,ft,B;if(tt){const Re=$n[tt];k=Re.vertexShader,nt=Re.fragmentShader}else{k=y.vertexShader,nt=y.fragmentShader;const Re=o.getVertexShaderStage(y),Me=o.getFragmentShaderStage(y);o.update(y,Re,Me),ft=Re.id,B=Me.id}const q=n.getRenderTarget(),ht=n.state.buffers.depth.getReversed(),Ot=D.isInstancedMesh===!0,xt=D.isBatchedMesh===!0,Ht=!!y.map,me=!!y.matcap,rt=!!et,dt=!!y.aoMap,ut=!!y.lightMap,pt=!!y.bumpMap&&y.wireframe===!1,vt=!!y.normalMap,$t=!!y.displacementMap,qt=!!y.emissiveMap,Qt=!!y.metalnessMap,ie=!!y.roughnessMap,U=y.anisotropy>0,ye=y.clearcoat>0,de=y.dispersion>0,C=y.retroreflectivity>0,w=y.iridescence>0,G=y.sheen>0,Y=y.transmission>0,J=U&&!!y.anisotropyMap,mt=ye&&!!y.clearcoatMap,_t=ye&&!!y.clearcoatNormalMap,Q=ye&&!!y.clearcoatRoughnessMap,st=w&&!!y.iridescenceMap,Mt=w&&!!y.iridescenceThicknessMap,Wt=G&&!!y.sheenColorMap,At=G&&!!y.sheenRoughnessMap,St=!!y.specularMap,Xt=!!y.specularColorMap,Kt=!!y.specularIntensityMap,re=Y&&!!y.transmissionMap,z=Y&&!!y.thicknessMap,bt=!!y.gradientMap,it=!!y.alphaMap,wt=y.alphaTest>0,Dt=!!y.alphaHash,ct=!!y.extensions;let Yt=Qn;y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Yt=n.toneMapping);const Gt={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:nt,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:xt,batchingColor:xt&&D._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&D.instanceColor!==null,instancingMorph:Ot&&D.morphTexture!==null,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ht,matcap:me,envMap:rt,envMapMode:rt&&et.mapping,envMapCubeUVHeight:Z,aoMap:dt,lightMap:ut,bumpMap:pt,normalMap:vt,displacementMap:$t,emissiveMap:qt,normalMapObjectSpace:vt&&y.normalMapType===Su,normalMapTangentSpace:vt&&y.normalMapType===Ol,packedNormalMap:vt&&y.normalMapType===Ol&&B_(y.normalMap.format),metalnessMap:Qt,roughnessMap:ie,anisotropy:U,anisotropyMap:J,clearcoat:ye,clearcoatMap:mt,clearcoatNormalMap:_t,clearcoatRoughnessMap:Q,dispersion:de,retroreflection:C,iridescence:w,iridescenceMap:st,iridescenceThicknessMap:Mt,sheen:G,sheenColorMap:Wt,sheenRoughnessMap:At,specularMap:St,specularColorMap:Xt,specularIntensityMap:Kt,transmission:Y,transmissionMap:re,thicknessMap:z,gradientMap:bt,opaque:y.transparent===!1&&y.blending===lr&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:wt,alphaHash:Dt,combine:y.combine,mapUv:Ht&&g(y.map.channel),aoMapUv:dt&&g(y.aoMap.channel),lightMapUv:ut&&g(y.lightMap.channel),bumpMapUv:pt&&g(y.bumpMap.channel),normalMapUv:vt&&g(y.normalMap.channel),displacementMapUv:$t&&g(y.displacementMap.channel),emissiveMapUv:qt&&g(y.emissiveMap.channel),metalnessMapUv:Qt&&g(y.metalnessMap.channel),roughnessMapUv:ie&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:mt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:_t&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(y.sheenRoughnessMap.channel),specularMapUv:St&&g(y.specularMap.channel),specularColorMapUv:Xt&&g(y.specularColorMap.channel),specularIntensityMapUv:Kt&&g(y.specularIntensityMap.channel),transmissionMapUv:re&&g(y.transmissionMap.channel),thicknessMapUv:z&&g(y.thicknessMap.channel),alphaMapUv:it&&g(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(vt||U),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(Ht||it),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&vt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ht,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:ot,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Ht&&y.map.isVideoTexture===!0&&pe.getTransfer(y.map.colorSpace)===be,decodeVideoTextureEmissive:qt&&y.emissiveMap.isVideoTexture===!0&&pe.getTransfer(y.emissiveMap.colorSpace)===be,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ne,flipSided:y.side===hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&y.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function m(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(u(E,y),v(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function u(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){const E=p[y.type];let R;if(E){const L=$n[E];R=Sr.clone(L.uniforms)}else R=y.uniforms;return R}function _(y,E){let R=d.get(E);return R!==void 0?++R.usedTimes:(R=new U_(n,E,y,s),l.push(R),d.set(E,R)),R}function M(y){if(--y.usedTimes===0){const E=l.indexOf(y);l[E]=l[l.length-1],l.pop(),d.delete(y.cacheKey),y.destroy()}}function S(y){o.remove(y)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:M,releaseShaderCache:S,programs:l,dispose:A}}function H_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function G_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function cd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function hd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,x,m,u){let v=n[t];return v===void 0?(v={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:u},n[t]=v):(v.id=h.id,v.object=h,v.geometry=p,v.material=g,v.materialVariant=a(h),v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=m,v.group=u),t++,v}function c(h,p,g,x,m,u,v){v.reversedDepth===!0&&(m=-m);const b=o(h,p,g,x,m,u);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):e.push(b)}function l(h,p,g,x,m,u){const v=o(h,p,g,x,m,u);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function d(h,p){e.length>1&&e.sort(h||G_),i.length>1&&i.sort(p||cd),s.length>1&&s.sort(p||cd)}function f(){for(let h=t,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:d}}function V_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new hd,n.set(i,[a])):s>=r.length?(a=new hd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function W_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Tt};break;case"SpotLight":e={position:new I,direction:new I,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function X_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Y_=0;function q_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function $_(n){const t=new W_,e=X_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const s=new I,r=new he,a=new he;function o(l){let d=0,f=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,v=0,b=0,_=0,M=0,S=0,A=0,y=0,E=0,R=0;l.sort(q_);for(let D=0,F=l.length;D<F;D++){const P=l[D],N=P.color,X=P.intensity,H=P.distance;let et=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===$i?et=P.shadow.map.texture:et=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=N.r*X,f+=N.g*X,h+=N.b*X;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],X);R++}else if(P.isSunLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,j=e.get(P);j.shadowIntensity=tt.intensity,j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),i.sunShadow[g]=j,i.sunShadowMap[g]=et;const Ut=tt.getViewportCount();for(let ot=0;ot<Ut;ot++)i.sunShadowMatrix[x+ot]=tt.getMatrix(ot),i.sunShadowCascade[x+ot]=tt._cascadeData[ot];x+=Ut,g++}i.sun[p]=Z,p++}else if(P.isDirectionalLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,j=e.get(P);j.shadowIntensity=tt.intensity,j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=P.shadow.matrix,M++}i.directional[m]=Z,m++}else if(P.isSpotLight){const Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(N).multiplyScalar(X),Z.distance=H,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[v]=Z;const tt=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,tt.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[v]=tt.matrix,P.castShadow){const j=e.get(P);j.shadowIntensity=tt.intensity,j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=et,A++}v++}else if(P.isRectAreaLight){const Z=t.get(P);Z.color.copy(N).multiplyScalar(X),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[b]=Z,b++}else if(P.isPointLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const tt=P.shadow,j=e.get(P);j.shadowIntensity=tt.intensity,j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,j.shadowCameraNear=tt.camera.near,j.shadowCameraFar=tt.camera.far,i.pointShadow[u]=j,i.pointShadowMap[u]=et,i.pointShadowMatrix[u]=P.shadow.matrix,S++}i.point[u]=Z,u++}else if(P.isHemisphereLight){const Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(X),Z.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[_]=Z,_++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==u||L.spotLength!==v||L.rectAreaLength!==b||L.hemiLength!==_||L.numSunShadows!==g||L.numDirectionalShadows!==M||L.numPointShadows!==S||L.numSpotShadows!==A||L.numSpotMaps!==y||L.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=m,i.spot.length=v,i.rectArea.length=b,i.point.length=u,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+y-E,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,L.sunLength=p,L.directionalLength=m,L.pointLength=u,L.spotLength=v,L.rectAreaLength=b,L.hemiLength=_,L.numSunShadows=g,L.numDirectionalShadows=M,L.numPointShadows=S,L.numSpotShadows=A,L.numSpotMaps=y,L.numLightProbes=R,i.version=Y_++)}function c(l,d){let f=0,h=0,p=0,g=0,x=0,m=0;const u=d.matrixWorldInverse;for(let v=0,b=l.length;v<b;v++){const _=l[v];if(_.isSunLight){const M=i.sun[f];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(u),f++}else if(_.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),h++}else if(_.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(u),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),g++}else if(_.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(u),a.identity(),r.copy(_.matrixWorld),r.premultiply(u),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(u),p++}else if(_.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(u),m++}}}return{setup:o,setupView:c,state:i}}function dd(n){const t=new $_(n),e=[],i=[],s=[];function r(h){f.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function d(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function K_(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new dd(n),t.set(s,[o])):r>=a.length?(o=new dd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
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
}`,Q_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],j_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],fd=new he,js=new I,Ho=new I;function tv(n,t,e){let i=new gc;const s=new at,r=new at,a=new Ue,o=new i0,c=new s0,l={},d=e.maxTextureSize,f={[Ii]:hn,[hn]:Ii,[Ne]:Ne},h=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Z_,fragmentShader:J_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Zt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let u=this.type;this.render=function(S,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===jf&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=or);const E=n.getRenderTarget(),R=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Jn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=u!==this.type;F&&A.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(N=>N.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,N=S.length;P<N;P++){const X=S[P],H=X.shadow;if(H===void 0){Jt("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const et=H.getFrameExtents();s.multiply(et),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/et.x),s.x=r.x*et.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/et.y),s.y=r.y*et.y,H.mapSize.y=r.y));const Z=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Z,H.map===null||F===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ir){if(X.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new dn(s.x,s.y,{format:$i,type:xn,minFilter:en,magFilter:en,generateMipmaps:!1}),H.map.texture.name=X.name+".shadowMap",H.map.depthTexture=new xr(s.x,s.y,kn),H.map.depthTexture.name=X.name+".shadowMapDepth",H.map.depthTexture.format=_i,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Je,H.map.depthTexture.magFilter=Je}else X.isPointLight?(H.map=new wf(s.x),H.map.depthTexture=new Mp(s.x,ii)):(H.map=new dn(s.x,s.y),H.map.depthTexture=new xr(s.x,s.y,ii)),H.map.depthTexture.name=X.name+".shadowMap",H.map.depthTexture.format=_i,this.type===or?(H.map.depthTexture.compareFunction=Z?fc:dc,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Je,H.map.depthTexture.magFilter=Je);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const tt=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();X.isPointLight!==!0&&H.updateMatrices(X,y);for(let j=0;j<tt;j++){const Ut=H.getCamera(j);if(X.isPointLight){const ot=H.camera,k=H.matrix,nt=X.distance||ot.far;nt!==ot.far&&(ot.far=nt,ot.updateProjectionMatrix()),js.setFromMatrixPosition(X.matrixWorld),ot.position.copy(js),Ho.copy(ot.position),Ho.add(Q_[j]),ot.up.copy(j_[j]),ot.lookAt(Ho),ot.updateMatrixWorld(),k.makeTranslation(-js.x,-js.y,-js.z),fd.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),H._frustum.setFromProjectionMatrix(fd,ot.coordinateSystem,ot.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,j),n.clear();else{j===0&&(n.setRenderTarget(H.map),n.clear());const ot=H.getViewport(j);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),D.viewport(a)}i=H.getFrustum(j),_(A,y,Ut,X,this.type)}H.isPointLightShadow!==!0&&this.type===ir&&v(H,y),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(E,R,L)};function v(S,A){const y=t.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new dn(s.x,s.y,{format:$i,type:xn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,y,h,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,y,p,x,null)}function b(S,A,y,E){let R=null;const L=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)R=L;else if(R=y.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=R.uuid,F=A.uuid;let P=l[D];P===void 0&&(P={},l[D]=P);let N=P[F];N===void 0&&(N=R.clone(),P[F]=N,A.addEventListener("dispose",M)),R=N}if(R.visible=A.visible,R.wireframe=A.wireframe,E===ir?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=n.properties.get(R);D.light=y}return R}function _(S,A,y,E,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===ir)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);const F=t.update(S),P=S.material;if(Array.isArray(P)){const N=F.groups;for(let X=0,H=N.length;X<H;X++){const et=N[X],Z=P[et.materialIndex];if(Z&&Z.visible){const tt=b(S,Z,E,R);S.onBeforeShadow(n,S,A,y,F,tt,et),n.renderBufferDirect(y,null,F,tt,S,et),S.onAfterShadow(n,S,A,y,F,tt,et)}}}else if(P.visible){const N=b(S,P,E,R);S.onBeforeShadow(n,S,A,y,F,N,null),n.renderBufferDirect(y,null,F,N,S,null),S.onAfterShadow(n,S,A,y,F,N,null)}}const D=S.children;for(let F=0,P=D.length;F<P;F++)_(D[F],A,y,E,R)}function M(S){S.target.removeEventListener("dispose",M);for(const y in l){const E=l[y],R=S.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function ev(n,t){function e(){let z=!1;const bt=new Ue;let it=null;const wt=new Ue(0,0,0,0);return{setMask:function(Dt){it!==Dt&&!z&&(n.colorMask(Dt,Dt,Dt,Dt),it=Dt)},setLocked:function(Dt){z=Dt},setClear:function(Dt,ct,Yt,Gt,Re){Re===!0&&(Dt*=Gt,ct*=Gt,Yt*=Gt),bt.set(Dt,ct,Yt,Gt),wt.equals(bt)===!1&&(n.clearColor(Dt,ct,Yt,Gt),wt.copy(bt))},reset:function(){z=!1,it=null,wt.set(-1,0,0,0)}}}function i(){let z=!1,bt=!1,it=null,wt=null,Dt=null;return{setReversed:function(ct){if(bt!==ct){const Yt=t.get("EXT_clip_control");ct?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),bt=ct;const Gt=Dt;Dt=null,this.setClear(Gt)}},getReversed:function(){return bt},setTest:function(ct){ct?q(n.DEPTH_TEST):ht(n.DEPTH_TEST)},setMask:function(ct){it!==ct&&!z&&(n.depthMask(ct),it=ct)},setFunc:function(ct){if(bt&&(ct=Nu[ct]),wt!==ct){switch(ct){case Qo:n.depthFunc(n.NEVER);break;case jo:n.depthFunc(n.ALWAYS);break;case tl:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case el:n.depthFunc(n.EQUAL);break;case nl:n.depthFunc(n.GEQUAL);break;case il:n.depthFunc(n.GREATER);break;case sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=ct}},setLocked:function(ct){z=ct},setClear:function(ct){Dt!==ct&&(Dt=ct,bt&&(ct=1-ct),n.clearDepth(ct))},reset:function(){z=!1,it=null,wt=null,Dt=null,bt=!1}}}function s(){let z=!1,bt=null,it=null,wt=null,Dt=null,ct=null,Yt=null,Gt=null,Re=null;return{setTest:function(Me){z||(Me?q(n.STENCIL_TEST):ht(n.STENCIL_TEST))},setMask:function(Me){bt!==Me&&!z&&(n.stencilMask(Me),bt=Me)},setFunc:function(Me,Un,Vn){(it!==Me||wt!==Un||Dt!==Vn)&&(n.stencilFunc(Me,Un,Vn),it=Me,wt=Un,Dt=Vn)},setOp:function(Me,Un,Vn){(ct!==Me||Yt!==Un||Gt!==Vn)&&(n.stencilOp(Me,Un,Vn),ct=Me,Yt=Un,Gt=Vn)},setLocked:function(Me){z=Me},setClear:function(Me){Re!==Me&&(n.clearStencil(Me),Re=Me)},reset:function(){z=!1,bt=null,it=null,wt=null,Dt=null,ct=null,Yt=null,Gt=null,Re=null}}}const r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let d={},f={},h={},p=new WeakMap,g=[],x=null,m=!1,u=null,v=null,b=null,_=null,M=null,S=null,A=null,y=new Tt(0,0,0),E=0,R=!1,L=null,D=null,F=null,P=null,N=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,et=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=et>=1):Z.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=et>=2);let tt=null,j={};const Ut=n.getParameter(n.SCISSOR_BOX),ot=n.getParameter(n.VIEWPORT),k=new Ue().fromArray(Ut),nt=new Ue().fromArray(ot);function ft(z,bt,it,wt){const Dt=new Uint8Array(4),ct=n.createTexture();n.bindTexture(z,ct),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<it;Yt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(bt,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(bt+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return ct}const B={};B[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),B[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),B[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(n.DEPTH_TEST),a.setFunc(ur),pt(!1),vt(eh),q(n.CULL_FACE),dt(Jn);function q(z){d[z]!==!0&&(n.enable(z),d[z]=!0)}function ht(z){d[z]!==!1&&(n.disable(z),d[z]=!1)}function Ot(z,bt){return h[z]!==bt?(n.bindFramebuffer(z,bt),h[z]=bt,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=bt),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=bt),!0):!1}function xt(z,bt){let it=g,wt=!1;if(z){it=p.get(bt),it===void 0&&(it=[],p.set(bt,it));const Dt=z.textures;if(it.length!==Dt.length||it[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Yt=Dt.length;ct<Yt;ct++)it[ct]=n.COLOR_ATTACHMENT0+ct;it.length=Dt.length,wt=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,wt=!0);wt&&n.drawBuffers(it)}function Ht(z){return x!==z?(n.useProgram(z),x=z,!0):!1}const me={[Ms]:n.FUNC_ADD,[eu]:n.FUNC_SUBTRACT,[nu]:n.FUNC_REVERSE_SUBTRACT};me[iu]=n.MIN,me[su]=n.MAX;const rt={[ru]:n.ZERO,[au]:n.ONE,[ou]:n.SRC_COLOR,[Hd]:n.SRC_ALPHA,[uu]:n.SRC_ALPHA_SATURATE,[du]:n.DST_COLOR,[cu]:n.DST_ALPHA,[lu]:n.ONE_MINUS_SRC_COLOR,[Gd]:n.ONE_MINUS_SRC_ALPHA,[fu]:n.ONE_MINUS_DST_COLOR,[hu]:n.ONE_MINUS_DST_ALPHA,[pu]:n.CONSTANT_COLOR,[mu]:n.ONE_MINUS_CONSTANT_COLOR,[gu]:n.CONSTANT_ALPHA,[xu]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(z,bt,it,wt,Dt,ct,Yt,Gt,Re,Me){if(z===Jn){m===!0&&(ht(n.BLEND),m=!1);return}if(m===!1&&(q(n.BLEND),m=!0),z!==tu){if(z!==u||Me!==R){if((v!==Ms||M!==Ms)&&(n.blendEquation(n.FUNC_ADD),v=Ms,M=Ms),Me)switch(z){case lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xi:n.blendFunc(n.ONE,n.ONE);break;case nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ih:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ge("WebGLState: Invalid blending: ",z);break}else switch(z){case lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nh:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",z);break}b=null,_=null,S=null,A=null,y.set(0,0,0),E=0,u=z,R=Me}return}Dt=Dt||bt,ct=ct||it,Yt=Yt||wt,(bt!==v||Dt!==M)&&(n.blendEquationSeparate(me[bt],me[Dt]),v=bt,M=Dt),(it!==b||wt!==_||ct!==S||Yt!==A)&&(n.blendFuncSeparate(rt[it],rt[wt],rt[ct],rt[Yt]),b=it,_=wt,S=ct,A=Yt),(Gt.equals(y)===!1||Re!==E)&&(n.blendColor(Gt.r,Gt.g,Gt.b,Re),y.copy(Gt),E=Re),u=z,R=!1}function ut(z,bt){z.side===Ne?ht(n.CULL_FACE):q(n.CULL_FACE);let it=z.side===hn;bt&&(it=!it),pt(it),z.blending===lr&&z.transparent===!1?dt(Jn):dt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const wt=z.stencilWrite;o.setTest(wt),wt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),qt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?q(n.SAMPLE_ALPHA_TO_COVERAGE):ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(z){L!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),L=z)}function vt(z){z!==Jf?(q(n.CULL_FACE),z!==D&&(z===eh?n.cullFace(n.BACK):z===Qf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ht(n.CULL_FACE),D=z}function $t(z){z!==F&&(H&&n.lineWidth(z),F=z)}function qt(z,bt,it){z?(q(n.POLYGON_OFFSET_FILL),(P!==bt||N!==it)&&(P=bt,N=it,a.getReversed()&&(bt=-bt),n.polygonOffset(bt,it))):ht(n.POLYGON_OFFSET_FILL)}function Qt(z){z?q(n.SCISSOR_TEST):ht(n.SCISSOR_TEST)}function ie(z){z===void 0&&(z=n.TEXTURE0+X-1),tt!==z&&(n.activeTexture(z),tt=z)}function U(z,bt,it){it===void 0&&(tt===null?it=n.TEXTURE0+X-1:it=tt);let wt=j[it];wt===void 0&&(wt={type:void 0,texture:void 0},j[it]=wt),(wt.type!==z||wt.texture!==bt)&&(tt!==it&&(n.activeTexture(it),tt=it),n.bindTexture(z,bt||B[z]),wt.type=z,wt.texture=bt)}function ye(){const z=j[tt];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function de(){try{n.compressedTexImage2D(...arguments)}catch(z){ge("WebGLState:",z)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(z){ge("WebGLState:",z)}}function w(){try{n.texSubImage2D(...arguments)}catch(z){ge("WebGLState:",z)}}function G(){try{n.texSubImage3D(...arguments)}catch(z){ge("WebGLState:",z)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(z){ge("WebGLState:",z)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(z){ge("WebGLState:",z)}}function mt(){try{n.texStorage2D(...arguments)}catch(z){ge("WebGLState:",z)}}function _t(){try{n.texStorage3D(...arguments)}catch(z){ge("WebGLState:",z)}}function Q(){try{n.texImage2D(...arguments)}catch(z){ge("WebGLState:",z)}}function st(){try{n.texImage3D(...arguments)}catch(z){ge("WebGLState:",z)}}function Mt(z){return f[z]!==void 0?f[z]:n.getParameter(z)}function Wt(z,bt){f[z]!==bt&&(n.pixelStorei(z,bt),f[z]=bt)}function At(z){k.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),k.copy(z))}function St(z){nt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),nt.copy(z))}function Xt(z,bt){let it=l.get(bt);it===void 0&&(it=new WeakMap,l.set(bt,it));let wt=it.get(z);wt===void 0&&(wt=n.getUniformBlockIndex(bt,z.name),it.set(z,wt))}function Kt(z,bt){const wt=l.get(bt).get(z);c.get(bt)!==wt&&(n.uniformBlockBinding(bt,wt,z.__bindingPointIndex),c.set(bt,wt))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},tt=null,j={},h={},p=new WeakMap,g=[],x=null,m=!1,u=null,v=null,b=null,_=null,M=null,S=null,A=null,y=new Tt(0,0,0),E=0,R=!1,L=null,D=null,F=null,P=null,N=null,k.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:q,disable:ht,bindFramebuffer:Ot,drawBuffers:xt,useProgram:Ht,setBlending:dt,setMaterial:ut,setFlipSided:pt,setCullFace:vt,setLineWidth:$t,setPolygonOffset:qt,setScissorTest:Qt,activeTexture:ie,bindTexture:U,unbindTexture:ye,compressedTexImage2D:de,compressedTexImage3D:C,texImage2D:Q,texImage3D:st,pixelStorei:Wt,getParameter:Mt,updateUBOMapping:Xt,uniformBlockBinding:Kt,texStorage2D:mt,texStorage3D:_t,texSubImage2D:w,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:At,viewport:St,reset:re}}function nv(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,d=new WeakMap,f=new Set;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,w){return g?new OffscreenCanvas(C,w):Na("canvas")}function m(C,w,G){let Y=1;const J=de(C);if((J.width>G||J.height>G)&&(Y=G/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const mt=Math.floor(Y*J.width),_t=Math.floor(Y*J.height);h===void 0&&(h=x(mt,_t));const Q=w?x(mt,_t):h;return Q.width=mt,Q.height=_t,Q.getContext("2d").drawImage(C,0,0,mt,_t),Jt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+mt+"x"+_t+")."),Q}else return"data"in C&&Jt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function u(C){return C.generateMipmaps}function v(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,w,G,Y,J,mt=!1){if(C!==null){if(n[C]!==void 0)return n[C];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let _t;Y&&(_t=t.get("EXT_texture_norm16"),_t||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=w;if(w===n.RED&&(G===n.FLOAT&&(Q=n.R32F),G===n.HALF_FLOAT&&(Q=n.R16F),G===n.UNSIGNED_BYTE&&(Q=n.R8),G===n.UNSIGNED_SHORT&&_t&&(Q=_t.R16_EXT),G===n.SHORT&&_t&&(Q=_t.R16_SNORM_EXT)),w===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.R8UI),G===n.UNSIGNED_SHORT&&(Q=n.R16UI),G===n.UNSIGNED_INT&&(Q=n.R32UI),G===n.BYTE&&(Q=n.R8I),G===n.SHORT&&(Q=n.R16I),G===n.INT&&(Q=n.R32I)),w===n.RG&&(G===n.FLOAT&&(Q=n.RG32F),G===n.HALF_FLOAT&&(Q=n.RG16F),G===n.UNSIGNED_BYTE&&(Q=n.RG8),G===n.UNSIGNED_SHORT&&_t&&(Q=_t.RG16_EXT),G===n.SHORT&&_t&&(Q=_t.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RG8UI),G===n.UNSIGNED_SHORT&&(Q=n.RG16UI),G===n.UNSIGNED_INT&&(Q=n.RG32UI),G===n.BYTE&&(Q=n.RG8I),G===n.SHORT&&(Q=n.RG16I),G===n.INT&&(Q=n.RG32I)),w===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),G===n.UNSIGNED_INT&&(Q=n.RGB32UI),G===n.BYTE&&(Q=n.RGB8I),G===n.SHORT&&(Q=n.RGB16I),G===n.INT&&(Q=n.RGB32I)),w===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),G===n.UNSIGNED_INT&&(Q=n.RGBA32UI),G===n.BYTE&&(Q=n.RGBA8I),G===n.SHORT&&(Q=n.RGBA16I),G===n.INT&&(Q=n.RGBA32I)),w===n.RGB&&(G===n.UNSIGNED_SHORT&&_t&&(Q=_t.RGB16_EXT),G===n.SHORT&&_t&&(Q=_t.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),w===n.RGBA){const st=mt?Da:pe.getTransfer(J);G===n.FLOAT&&(Q=n.RGBA32F),G===n.HALF_FLOAT&&(Q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Q=st===be?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&_t&&(Q=_t.RGBA16_EXT),G===n.SHORT&&_t&&(Q=_t.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(C,w){let G;return C?w===null||w===ii||w===mr?G=n.DEPTH24_STENCIL8:w===kn?G=n.DEPTH32F_STENCIL8:w===pr&&(G=n.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ii||w===mr?G=n.DEPTH_COMPONENT24:w===kn?G=n.DEPTH_COMPONENT32F:w===pr&&(G=n.DEPTH_COMPONENT16),G}function S(C,w){return u(C)===!0||C.isFramebufferTexture&&C.minFilter!==Je&&C.minFilter!==en?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function A(C){const w=C.target;w.removeEventListener("dispose",A),E(w),w.isVideoTexture&&d.delete(w),w.isHTMLTexture&&f.delete(w)}function y(C){const w=C.target;w.removeEventListener("dispose",y),L(w)}function E(C){const w=i.get(C);if(w.__webglInit===void 0)return;const G=C.source,Y=p.get(G);if(Y){const J=Y[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(C),Object.keys(Y).length===0&&p.delete(G)}i.remove(C)}function R(C){const w=i.get(C);n.deleteTexture(w.__webglTexture);const G=C.source,Y=p.get(G);delete Y[w.__cacheKey],a.memory.textures--}function L(C){const w=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let J=0;J<w.__webglFramebuffer[Y].length;J++)n.deleteFramebuffer(w.__webglFramebuffer[Y][J]);else n.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)n.deleteFramebuffer(w.__webglFramebuffer[Y]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=C.textures;for(let Y=0,J=G.length;Y<J;Y++){const mt=i.get(G[Y]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),a.memory.textures--),i.remove(G[Y])}i.remove(C)}let D=0;function F(){D=0}function P(){return D}function N(C){D=C}function X(){const C=D;return C>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function H(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function et(C,w){const G=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const Y=C.image;if(Y===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(G,C,w);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+w)}function Z(C,w){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ht(G,C,w);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+w)}function tt(C,w){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ht(G,C,w);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+w)}function j(C,w){const G=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&G.__version!==C.version){Ot(G,C,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+w)}const Ut={[Li]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[rl]:n.MIRRORED_REPEAT},ot={[Je]:n.NEAREST,[yu]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[lo]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},k={[wu]:n.NEVER,[Cu]:n.ALWAYS,[Eu]:n.LESS,[dc]:n.LEQUAL,[Tu]:n.EQUAL,[fc]:n.GEQUAL,[Au]:n.GREATER,[Ru]:n.NOTEQUAL};function nt(C,w){if(w.type===kn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===en||w.magFilter===lo||w.magFilter===Or||w.magFilter===Wi||w.minFilter===en||w.minFilter===lo||w.minFilter===Or||w.minFilter===Wi)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Ut[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Ut[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Ut[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ot[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ot[w.minFilter]),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,k[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Je||w.minFilter!==Or&&w.minFilter!==Wi||w.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ft(C,w){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",A));const Y=w.source;let J=p.get(Y);J===void 0&&(J={},p.set(Y,J));const mt=H(w);if(mt!==C.__cacheKey){J[mt]===void 0&&(J[mt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[mt].usedTimes++;const _t=J[C.__cacheKey];_t!==void 0&&(J[C.__cacheKey].usedTimes--,_t.usedTimes===0&&R(w)),C.__cacheKey=mt,C.__webglTexture=J[mt].texture}return G}function B(C,w,G){return Math.floor(Math.floor(C/G)/w)}function q(C,w,G,Y){const mt=C.updateRanges;if(mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,G,Y,w.data);else{mt.sort((Wt,At)=>Wt.start-At.start);let _t=0;for(let Wt=1;Wt<mt.length;Wt++){const At=mt[_t],St=mt[Wt],Xt=At.start+At.count,Kt=B(St.start,w.width,4),re=B(At.start,w.width,4);St.start<=Xt+1&&Kt===re&&B(St.start+St.count-1,w.width,4)===Kt?At.count=Math.max(At.count,St.start+St.count-At.start):(++_t,mt[_t]=St)}mt.length=_t+1;const Q=e.getParameter(n.UNPACK_ROW_LENGTH),st=e.getParameter(n.UNPACK_SKIP_PIXELS),Mt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Wt=0,At=mt.length;Wt<At;Wt++){const St=mt[Wt],Xt=Math.floor(St.start/4),Kt=Math.ceil(St.count/4),re=Xt%w.width,z=Math.floor(Xt/w.width),bt=Kt,it=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,re),e.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,re,z,bt,it,G,Y,w.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Q),e.pixelStorei(n.UNPACK_SKIP_PIXELS,st),e.pixelStorei(n.UNPACK_SKIP_ROWS,Mt)}}function ht(C,w,G){let Y=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=n.TEXTURE_3D);const J=ft(C,w),mt=w.source;e.bindTexture(Y,C.__webglTexture,n.TEXTURE0+G);const _t=i.get(mt);if(mt.version!==_t.__version||J===!0){if(e.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const it=pe.getPrimaries(pe.workingColorSpace),wt=w.colorSpace===Pi?null:pe.getPrimaries(w.colorSpace),Dt=w.colorSpace===Pi||it===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let st=m(w.image,!1,s.maxTextureSize);st=ye(w,st);const Mt=r.convert(w.format,w.colorSpace),Wt=r.convert(w.type);let At=_(w.internalFormat,Mt,Wt,w.normalized,w.colorSpace,w.isVideoTexture);nt(Y,w);let St;const Xt=w.mipmaps,Kt=w.isVideoTexture!==!0,re=_t.__version===void 0||J===!0,z=mt.dataReady,bt=S(w,st);if(w.isDepthTexture)At=M(w.format===Xi,w.type),re&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,At,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,At,st.width,st.height,0,Mt,Wt,null));else if(w.isDataTexture)if(Xt.length>0){Kt&&re&&e.texStorage2D(n.TEXTURE_2D,bt,At,Xt[0].width,Xt[0].height);for(let it=0,wt=Xt.length;it<wt;it++)St=Xt[it],Kt?z&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,St.width,St.height,Mt,Wt,St.data):e.texImage2D(n.TEXTURE_2D,it,At,St.width,St.height,0,Mt,Wt,St.data);w.generateMipmaps=!1}else Kt?(re&&e.texStorage2D(n.TEXTURE_2D,bt,At,st.width,st.height),z&&q(w,st,Mt,Wt)):e.texImage2D(n.TEXTURE_2D,0,At,st.width,st.height,0,Mt,Wt,st.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Kt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,At,Xt[0].width,Xt[0].height,st.depth);for(let it=0,wt=Xt.length;it<wt;it++)if(St=Xt[it],w.format!==Hn)if(Mt!==null)if(Kt){if(z)if(w.layerUpdates.size>0){const Dt=Xh(St.width,St.height,w.format,w.type);for(const ct of w.layerUpdates){const Yt=St.data.subarray(ct*Dt/St.data.BYTES_PER_ELEMENT,(ct+1)*Dt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,ct,St.width,St.height,1,Mt,Yt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,St.width,St.height,st.depth,Mt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,At,St.width,St.height,st.depth,0,St.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,St.width,St.height,st.depth,Mt,Wt,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,At,St.width,St.height,st.depth,0,Mt,Wt,St.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Kt&&re&&e.texStorage2D(n.TEXTURE_2D,bt,At,Xt[0].width,Xt[0].height);for(let it=0,wt=Xt.length;it<wt;it++)St=Xt[it],w.format!==Hn?Mt!==null?Kt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,it,At,St.width,St.height,0,St.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?z&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,St.width,St.height,Mt,Wt,St.data):e.texImage2D(n.TEXTURE_2D,it,At,St.width,St.height,0,Mt,Wt,St.data)}else if(w.isDataArrayTexture)if(Kt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,At,st.width,st.height,st.depth),z)if(w.layerUpdates.size>0){const it=Xh(st.width,st.height,w.format,w.type);for(const wt of w.layerUpdates){const Dt=st.data.subarray(wt*it/st.data.BYTES_PER_ELEMENT,(wt+1)*it/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,wt,st.width,st.height,1,Mt,Wt,Dt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Mt,Wt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,At,st.width,st.height,st.depth,0,Mt,Wt,st.data);else if(w.isData3DTexture)Kt?(re&&e.texStorage3D(n.TEXTURE_3D,bt,At,st.width,st.height,st.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Mt,Wt,st.data)):e.texImage3D(n.TEXTURE_3D,0,At,st.width,st.height,st.depth,0,Mt,Wt,st.data);else if(w.isFramebufferTexture){if(re)if(Kt)e.texStorage2D(n.TEXTURE_2D,bt,At,st.width,st.height);else{let it=st.width,wt=st.height;for(let Dt=0;Dt<bt;Dt++)e.texImage2D(n.TEXTURE_2D,Dt,At,it,wt,0,Mt,Wt,null),it>>=1,wt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const it=n.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),st.parentNode!==it){it.appendChild(st),f.add(w),it.onpaint=wt=>{const Dt=wt.changedElements;for(const ct of f)Dt.includes(ct.image)&&(ct.needsUpdate=!0)},it.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,st);else{const Dt=n.RGBA,ct=n.RGBA,Yt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Dt,ct,Yt,st)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(Kt&&re){const it=de(Xt[0]);e.texStorage2D(n.TEXTURE_2D,bt,At,it.width,it.height)}for(let it=0,wt=Xt.length;it<wt;it++)St=Xt[it],Kt?z&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,Mt,Wt,St):e.texImage2D(n.TEXTURE_2D,it,At,Mt,Wt,St);w.generateMipmaps=!1}else if(Kt){if(re){const it=de(st);e.texStorage2D(n.TEXTURE_2D,bt,At,it.width,it.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Wt,st)}else e.texImage2D(n.TEXTURE_2D,0,At,Mt,Wt,st);u(w)&&v(Y),_t.__version=mt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Ot(C,w,G){if(w.image.length!==6)return;const Y=ft(C,w),J=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);const mt=i.get(J);if(J.version!==mt.__version||Y===!0){e.activeTexture(n.TEXTURE0+G);const _t=pe.getPrimaries(pe.workingColorSpace),Q=w.colorSpace===Pi?null:pe.getPrimaries(w.colorSpace),st=w.colorSpace===Pi||_t===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const Mt=w.isCompressedTexture||w.image[0].isCompressedTexture,Wt=w.image[0]&&w.image[0].isDataTexture,At=[];for(let ct=0;ct<6;ct++)!Mt&&!Wt?At[ct]=m(w.image[ct],!0,s.maxCubemapSize):At[ct]=Wt?w.image[ct].image:w.image[ct],At[ct]=ye(w,At[ct]);const St=At[0],Xt=r.convert(w.format,w.colorSpace),Kt=r.convert(w.type),re=_(w.internalFormat,Xt,Kt,w.normalized,w.colorSpace),z=w.isVideoTexture!==!0,bt=mt.__version===void 0||Y===!0,it=J.dataReady;let wt=S(w,St);nt(n.TEXTURE_CUBE_MAP,w);let Dt;if(Mt){z&&bt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,re,St.width,St.height);for(let ct=0;ct<6;ct++){Dt=At[ct].mipmaps;for(let Yt=0;Yt<Dt.length;Yt++){const Gt=Dt[Yt];w.format!==Hn?Xt!==null?z?it&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt,0,0,Gt.width,Gt.height,Xt,Gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt,re,Gt.width,Gt.height,0,Gt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt,0,0,Gt.width,Gt.height,Xt,Kt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt,re,Gt.width,Gt.height,0,Xt,Kt,Gt.data)}}}else{if(Dt=w.mipmaps,z&&bt){Dt.length>0&&wt++;const ct=de(At[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,re,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Wt){z?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,At[ct].width,At[ct].height,Xt,Kt,At[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,re,At[ct].width,At[ct].height,0,Xt,Kt,At[ct].data);for(let Yt=0;Yt<Dt.length;Yt++){const Re=Dt[Yt].image[ct].image;z?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt+1,0,0,Re.width,Re.height,Xt,Kt,Re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt+1,re,Re.width,Re.height,0,Xt,Kt,Re.data)}}else{z?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Xt,Kt,At[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,re,Xt,Kt,At[ct]);for(let Yt=0;Yt<Dt.length;Yt++){const Gt=Dt[Yt];z?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt+1,0,0,Xt,Kt,Gt.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt+1,re,Xt,Kt,Gt.image[ct])}}}u(w)&&v(n.TEXTURE_CUBE_MAP),mt.__version=J.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function xt(C,w,G,Y,J,mt){const _t=r.convert(G.format,G.colorSpace),Q=r.convert(G.type),st=_(G.internalFormat,_t,Q,G.normalized,G.colorSpace),Mt=i.get(w),Wt=i.get(G);if(Wt.__renderTarget=w,!Mt.__hasExternalTextures){const At=Math.max(1,w.width>>mt),St=Math.max(1,w.height>>mt);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,mt,st,At,St,w.depth,0,_t,Q,null):e.texImage2D(J,mt,st,At,St,0,_t,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),ie(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,J,Wt.__webglTexture,0,Qt(w)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,J,Wt.__webglTexture,mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(C,w,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer){const Y=w.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,mt=M(w.stencilBuffer,J),_t=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ie(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qt(w),mt,w.width,w.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt(w),mt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,mt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,C)}else{const Y=w.textures;for(let J=0;J<Y.length;J++){const mt=Y[J],_t=r.convert(mt.format,mt.colorSpace),Q=r.convert(mt.type),st=_(mt.internalFormat,_t,Q,mt.normalized,mt.colorSpace);ie(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qt(w),st,w.width,w.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt(w),st,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,st,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(C,w,G){const Y=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(w.depthTexture);if(J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,w.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),nt(n.TEXTURE_CUBE_MAP,w.depthTexture);const Mt=r.convert(w.depthTexture.format),Wt=r.convert(w.depthTexture.type);let At;w.depthTexture.format===_i?At=n.DEPTH_COMPONENT24:w.depthTexture.format===Xi&&(At=n.DEPTH24_STENCIL8);for(let St=0;St<6;St++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,At,w.width,w.height,0,Mt,Wt,null)}}else et(w.depthTexture,0);const mt=J.__webglTexture,_t=Qt(w),Q=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,st=w.depthTexture.format===Xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===_i)ie(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,Q,mt,0,_t):n.framebufferTexture2D(n.FRAMEBUFFER,st,Q,mt,0);else if(w.depthTexture.format===Xi)ie(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,Q,mt,0,_t):n.framebufferTexture2D(n.FRAMEBUFFER,st,Q,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(C){const w=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Y){const J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=Y}if(C.depthTexture&&!w.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)me(w.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?me(w.__webglFramebuffer[0],C,0):me(w.__webglFramebuffer,C,0)}else if(G){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]===void 0)w.__webglDepthbuffer[Y]=n.createRenderbuffer(),Ht(w.__webglDepthbuffer[Y],C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,mt)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ht(w.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,mt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(C,w,G){const Y=i.get(C);w!==void 0&&xt(Y.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&rt(C)}function ut(C){const w=C.texture,G=i.get(C),Y=i.get(w);C.addEventListener("dispose",y);const J=C.textures,mt=C.isWebGLCubeRenderTarget===!0,_t=J.length>1;if(_t||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=w.version,a.memory.textures++),mt){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let st=0;st<w.mipmaps.length;st++)G.__webglFramebuffer[Q][st]=n.createFramebuffer()}else G.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<w.mipmaps.length;Q++)G.__webglFramebuffer[Q]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(_t)for(let Q=0,st=J.length;Q<st;Q++){const Mt=i.get(J[Q]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&ie(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){const st=J[Q];G.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);const Mt=r.convert(st.format,st.colorSpace),Wt=r.convert(st.type),At=_(st.internalFormat,Mt,Wt,st.normalized,st.colorSpace,C.isXRRenderTarget===!0),St=Qt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,St,At,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ht(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),nt(n.TEXTURE_CUBE_MAP,w);for(let Q=0;Q<6;Q++)if(w.mipmaps&&w.mipmaps.length>0)for(let st=0;st<w.mipmaps.length;st++)xt(G.__webglFramebuffer[Q][st],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st);else xt(G.__webglFramebuffer[Q],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);u(w)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let Q=0,st=J.length;Q<st;Q++){const Mt=J[Q],Wt=i.get(Mt);let At=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(At=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(At,Wt.__webglTexture),nt(At,Mt),xt(G.__webglFramebuffer,C,Mt,n.COLOR_ATTACHMENT0+Q,At,0),u(Mt)&&v(At)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,Y.__webglTexture),nt(Q,w),w.mipmaps&&w.mipmaps.length>0)for(let st=0;st<w.mipmaps.length;st++)xt(G.__webglFramebuffer[st],C,w,n.COLOR_ATTACHMENT0,Q,st);else xt(G.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,Q,0);u(w)&&v(Q),e.unbindTexture()}C.depthBuffer&&rt(C)}function pt(C){const w=C.textures;for(let G=0,Y=w.length;G<Y;G++){const J=w[G];if(u(J)){const mt=b(C),_t=i.get(J).__webglTexture;e.bindTexture(mt,_t),v(mt),e.unbindTexture()}}}const vt=[],$t=[];function qt(C){if(C.samples>0){if(ie(C)===!1){const w=C.textures,G=C.width,Y=C.height;let J=n.COLOR_BUFFER_BIT;const mt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(C),Q=w.length>1;if(Q)for(let Mt=0;Mt<w.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);const st=C.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Mt=0;Mt<w.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);const Wt=i.get(w[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Wt,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,J,n.NEAREST),c===!0&&(vt.length=0,$t.length=0,vt.push(n.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(vt.push(mt),$t.push(mt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let Mt=0;Mt<w.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);const Wt=i.get(w[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,Wt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const w=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Qt(C){return Math.min(s.maxSamples,C.samples)}function ie(C){const w=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function U(C){const w=a.render.frame;d.get(C)!==w&&(d.set(C,w),C.update())}function ye(C,w){const G=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==La&&G!==Pi&&(pe.getTransfer(G)===be?(Y!==Hn||J!==wn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",G)),w}function de(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=F,this.getTextureUnits=P,this.setTextureUnits=N,this.setTexture2D=et,this.setTexture2DArray=Z,this.setTexture3D=tt,this.setTextureCube=j,this.rebindTextures=dt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function iv(n,t){function e(i,s=Pi){let r;const a=pe.getTransfer(s);if(i===wn)return n.UNSIGNED_BYTE;if(i===rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ac)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$d)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xd)return n.BYTE;if(i===Yd)return n.SHORT;if(i===pr)return n.UNSIGNED_SHORT;if(i===sc)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===xn)return n.HALF_FLOAT;if(i===Kd)return n.ALPHA;if(i===Zd)return n.RGB;if(i===Hn)return n.RGBA;if(i===_i)return n.DEPTH_COMPONENT;if(i===Xi)return n.DEPTH_STENCIL;if(i===oc)return n.RED;if(i===lc)return n.RED_INTEGER;if(i===$i)return n.RG;if(i===cc)return n.RG_INTEGER;if(i===hc)return n.RGBA_INTEGER;if(i===Ma||i===Sa||i===ba||i===wa)if(a===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===al||i===ol||i===ll||i===cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hl||i===dl||i===fl||i===ul||i===pl||i===Pa||i===ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hl||i===dl)return a===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ul)return r.COMPRESSED_R11_EAC;if(i===pl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Pa)return r.COMPRESSED_RG11_EAC;if(i===ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gl||i===xl||i===_l||i===vl||i===yl||i===Ml||i===Sl||i===bl||i===wl||i===El||i===Tl||i===Al||i===Rl||i===Cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_l)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ml)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===El)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Al)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cl)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pl||i===Il||i===Ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Pl)return a===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dl||i===Nl||i===Ia||i===Ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`;class av{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new lf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ke({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new ee(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ov extends Di{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,f=null,h=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new av,u={},v=e.getContextAttributes();let b=null,_=null;const M=[],S=[],A=new at;let y=null,E=null;const R=new mn;R.viewport=new Ue;const L=new mn;L.viewport=new Ue;const D=[R,L],F=new d0;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=M[B];return q===void 0&&(q=new go,M[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=M[B];return q===void 0&&(q=new go,M[B]=q),q.getGripSpace()},this.getHand=function(B){let q=M[B];return q===void 0&&(q=new go,M[B]=q),q.getHandSpace()};function X(B){const q=S.indexOf(B.inputSource);if(q===-1)return;const ht=M[q];ht!==void 0&&(ht.update(B.inputSource,B.frame,l||a),ht.dispatchEvent({type:B.type,data:B.inputSource}))}function H(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",et);for(let B=0;B<M.length;B++){const q=S[B];q!==null&&(S[B]=null,M[B].disconnect(q))}P=null,N=null,m.reset();for(const B in u)delete u[B];if(t.setRenderTarget(b),p=null,h=null,f=null,s=null,_=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),E!==null){const B=E.camera;B.fov=E.fov,B.zoom=E.zoom,B.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",H),s.addEventListener("inputsourceschange",et),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Ot=null,xt=null;v.depth&&(xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=v.stencil?Xi:_i,Ot=v.stencil?mr:ii);const Ht={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ht),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new dn(h.textureWidth,h.textureHeight,{format:Hn,type:wn,depthTexture:new xr(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ht={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new dn(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(B){for(let q=0;q<B.removed.length;q++){const ht=B.removed[q],Ot=S.indexOf(ht);Ot>=0&&(S[Ot]=null,M[Ot].disconnect(ht))}for(let q=0;q<B.added.length;q++){const ht=B.added[q];let Ot=S.indexOf(ht);if(Ot===-1){for(let Ht=0;Ht<M.length;Ht++)if(Ht>=S.length){S.push(ht),Ot=Ht;break}else if(S[Ht]===null){S[Ht]=ht,Ot=Ht;break}if(Ot===-1)break}const xt=M[Ot];xt&&xt.connect(ht)}}const Z=new I,tt=new I;function j(B,q,ht){Z.setFromMatrixPosition(q.matrixWorld),tt.setFromMatrixPosition(ht.matrixWorld);const Ot=Z.distanceTo(tt),xt=q.projectionMatrix.elements,Ht=ht.projectionMatrix.elements,me=xt[14]/(xt[10]-1),rt=xt[14]/(xt[10]+1),dt=(xt[9]+1)/xt[5],ut=(xt[9]-1)/xt[5],pt=(xt[8]-1)/xt[0],vt=(Ht[8]+1)/Ht[0],$t=me*pt,qt=me*vt,Qt=Ot/(-pt+vt),ie=Qt*-pt;if(q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ie),B.translateZ(Qt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),xt[10]===-1)B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const U=me+Qt,ye=rt+Qt,de=$t-ie,C=qt+(Ot-ie),w=dt*rt/ye*U,G=ut*rt/ye*U;B.projectionMatrix.makePerspective(de,C,w,G,U,ye),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Ut(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let q=B.near,ht=B.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(ht=m.depthFar)),F.near=L.near=R.near=q,F.far=L.far=R.far=ht,(P!==F.near||N!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,N=F.far),F.layers.mask=B.layers.mask|6,R.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const Ot=B.parent,xt=F.cameras;Ut(F,Ot);for(let Ht=0;Ht<xt.length;Ht++)Ut(xt[Ht],Ot);xt.length===2?j(F,R,L):F.projectionMatrix.copy(R.projectionMatrix),E===null&&B.isPerspectiveCamera&&(E={camera:B,fov:B.fov,zoom:B.zoom}),ot(B,F,Ot)};function ot(B,q,ht){ht===null?B.matrix.copy(q.matrixWorld):(B.matrix.copy(ht.matrixWorld),B.matrix.invert(),B.matrix.multiply(q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Ls*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(B){c=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(B){return u[B]};let k=null;function nt(B,q){if(d=q.getViewerPose(l||a),g=q,d!==null){const ht=d.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Ot=!1;ht.length!==F.cameras.length&&(F.cameras.length=0,Ot=!0);for(let rt=0;rt<ht.length;rt++){const dt=ht[rt];let ut=null;if(p!==null)ut=p.getViewport(dt);else{const vt=f.getViewSubImage(h,dt);ut=vt.viewport,rt===0&&(t.setRenderTargetTextures(_,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(_))}let pt=D[rt];pt===void 0&&(pt=new mn,pt.layers.enable(rt),pt.viewport=new Ue,D[rt]=pt),pt.matrix.fromArray(dt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(dt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(ut.x,ut.y,ut.width,ut.height),rt===0&&(F.matrix.copy(pt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ot===!0&&F.cameras.push(pt)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const rt=f.getDepthInformation(ht[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,s.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let rt=0;rt<ht.length;rt++){const dt=ht[rt].camera;if(dt){let ut=u[dt];ut||(ut=new lf,u[dt]=ut);const pt=f.getCameraImage(dt);ut.sourceTexture=pt}}}}for(let ht=0;ht<M.length;ht++){const Ot=S[ht],xt=M[ht];Ot!==null&&xt!==void 0&&xt.update(Ot,q,l||a)}k&&k(B,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}const ft=new Sf;ft.setAnimationLoop(nt),this.setAnimationLoop=function(B){k=B},this.dispose=function(){}}}const lv=new he,Cf=new se;Cf.set(-1,0,0,0,1,0,0,0,1);function cv(n,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,_f(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,v,b,_){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,_)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,v,b):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===hn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===hn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=t.get(u),b=v.envMap,_=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(lv.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cf),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,v,b){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=b*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.retroreflectivity>0&&(m.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const v=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function hv(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){const S=M.program;i.uniformBlockBinding(_,S)}function l(_,M){let S=s[_.id];S===void 0&&(m(_),S=d(_),s[_.id]=S,_.addEventListener("dispose",v));const A=M.program;i.updateUBOMapping(_,A);const y=t.render.frame;r[_.id]!==y&&(h(_),r[_.id]=y)}function d(_){const M=f();_.__bindingPointIndex=M;const S=n.createBuffer(),A=_.__size,y=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const M=s[_.id],S=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let y=0,E=S.length;y<E;y++){const R=S[y];if(Array.isArray(R))for(let L=0,D=R.length;L<D;L++)p(R[L],y,L,A);else p(R,y,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,M,S,A){if(x(_,M,S,A)===!0){const y=_.__offset,E=_.value;if(Array.isArray(E)){let R=0;for(let L=0;L<E.length;L++){const D=E[L],F=u(D);g(D,_.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,_.__data)}}function g(_,M,S){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,S)}function x(_,M,S,A){const y=_.value,E=M+"_"+S;if(A[E]===void 0)return typeof y=="number"||typeof y=="boolean"?A[E]=y:ArrayBuffer.isView(y)?A[E]=y.slice():A[E]=y.clone(),!0;{const R=A[E];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(_){const M=_.uniforms;let S=0;const A=16;for(let E=0,R=M.length;E<R;E++){const L=Array.isArray(M[E])?M[E]:[M[E]];for(let D=0,F=L.length;D<F;D++){const P=L[D],N=Array.isArray(P.value)?P.value:[P.value];for(let X=0,H=N.length;X<H;X++){const et=N[X],Z=u(et),tt=S%A,j=tt%Z.boundary,Ut=tt+j;S+=j,Ut!==0&&A-Ut<Z.storage&&(S+=A-Ut),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,S+=Z.storage}}}const y=S%A;return y>0&&(S+=A-y),_.__size=S,_.__cache={},this}function u(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",_),M}function v(_){const M=_.target;M.removeEventListener("dispose",v);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function b(){for(const _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:b}}const dv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function fv(){return Yn===null&&(Yn=new sf(dv,16,16,$i,xn),Yn.name="DFG_LUT",Yn.minFilter=en,Yn.magFilter=en,Yn.wrapS=ui,Yn.wrapT=ui,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class uv{constructor(t={}){const{canvas:e=Lu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=wn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=p,m=new Set([hc,cc,lc]),u=new Set([wn,ii,pr,mr,rc,ac]),v=new Uint32Array(4),b=new Int32Array(4),_=new I;let M=null,S=null;const A=[],y=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,D=null,F=null,P=null,N=null;this._outputColorSpace=Pe;let X=0,H=0,et=null,Z=-1,tt=null;const j=new Ue,Ut=new Ue;let ot=null;const k=new Tt(0);let nt=0,ft=e.width,B=e.height,q=1,ht=null,Ot=null;const xt=new Ue(0,0,ft,B),Ht=new Ue(0,0,ft,B);let me=!1;const rt=new gc;let dt=!1,ut=!1;const pt=new he,vt=new I,$t=new Ue,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function ie(){return et===null?q:1}let U=i;function ye(T,O){return e.getContext(T,O)}let de,C,w,G,Y,J,mt,_t,Q,st,Mt,Wt,At,St,Xt,Kt,re,z,bt,it,wt,Dt,ct;try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jl}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Un,!1),U===null){const O="webgl2";if(U=ye(O,T),U===null)throw ye(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(T){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),ge("WebGLRenderer: "+T.message),T}function Yt(){de=new fx(U),de.init(),wt=new iv(U,de),C=new nx(U,de,t,wt),w=new ev(U,de),C.reversedDepthBuffer&&h&&w.buffers.depth.setReversed(!0),F=U.createFramebuffer(),P=U.createFramebuffer(),N=U.createFramebuffer(),G=new mx(U),Y=new H_,J=new nv(U,de,w,Y,C,wt,G),mt=new dx(R),_t=new x0(U),Dt=new tx(U,_t),Q=new ux(U,_t,G,Dt),st=new xx(U,Q,_t,Dt,G),z=new gx(U,C,J),Xt=new ix(Y),Mt=new k_(R,mt,de,C,Dt,Xt),Wt=new cv(R,Y),At=new V_,St=new K_(de),re=new jg(R,mt,w,st,g,c),Kt=new tv(R,st,C),ct=new hv(U,G,C,w),bt=new ex(U,de,G),it=new px(U,de,G),G.programs=Mt.programs,R.capabilities=C,R.extensions=de,R.properties=Y,R.renderLists=At,R.shadowMap=Kt,R.state=w,R.info=G}x!==wn&&(E=new vx(x,e.width,e.height,o,s,r));const Gt=new ov(R,U);this.xr=Gt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=de.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=de.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(ft,B,!1))},this.getSize=function(T){return T.set(ft,B)},this.setSize=function(T,O,K=!0){if(Gt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=T,B=O,e.width=Math.floor(T*q),e.height=Math.floor(O*q),K===!0&&(e.style.width=T+"px",e.style.height=O+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(ft*q,B*q).floor()},this.setDrawingBufferSize=function(T,O,K){ft=T,B=O,q=K,e.width=Math.floor(T*K),e.height=Math.floor(O*K),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(x===wn){ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(xt)},this.setViewport=function(T,O,K,V){T.isVector4?xt.set(T.x,T.y,T.z,T.w):xt.set(T,O,K,V),w.viewport(j.copy(xt).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Ht)},this.setScissor=function(T,O,K,V){T.isVector4?Ht.set(T.x,T.y,T.z,T.w):Ht.set(T,O,K,V),w.scissor(Ut.copy(Ht).multiplyScalar(q).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(T){w.setScissorTest(me=T)},this.setOpaqueSort=function(T){ht=T},this.setTransparentSort=function(T){Ot=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,K=!0){let V=0;if(T){let W=!1;if(et!==null){const Lt=et.texture.format;W=m.has(Lt)}if(W){const Lt=et.texture.type,zt=u.has(Lt),It=re.getClearColor(),Bt=re.getClearAlpha(),Vt=It.r,oe=It.g,fe=It.b;zt?(v[0]=Vt,v[1]=oe,v[2]=fe,v[3]=Bt,U.clearBufferuiv(U.COLOR,0,v)):(b[0]=Vt,b[1]=oe,b[2]=fe,b[3]=Bt,U.clearBufferiv(U.COLOR,0,b))}else V|=U.COLOR_BUFFER_BIT}O&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),re.dispose(),At.dispose(),St.dispose(),Y.dispose(),mt.dispose(),st.dispose(),Dt.dispose(),ct.dispose(),Mt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Yc),Gt.removeEventListener("sessionend",qc),Ui.stop()};function Re(T){T.preventDefault(),ah("WebGLRenderer: Context Lost."),L=!0}function Me(){ah("WebGLRenderer: Context Restored."),L=!1;const T=G.autoReset,O=Kt.enabled,K=Kt.autoUpdate,V=Kt.needsUpdate,W=Kt.type;Yt(),G.autoReset=T,Kt.enabled=O,Kt.autoUpdate=K,Kt.needsUpdate=V,Kt.type=W}function Un(T){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Vn(T){const O=T.target;O.removeEventListener("dispose",Vn),Wf(O)}function Wf(T){Xf(T),Y.remove(T)}function Xf(T){const O=Y.get(T).programs;O!==void 0&&(O.forEach(function(K){Mt.releaseProgram(K)}),T.isShaderMaterial&&Mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,K,V,W,Lt){O===null&&(O=qt);const zt=W.isMesh&&W.matrixWorld.determinantAffine()<0,It=$f(T,O,K,V,W);w.setMaterial(V,zt);let Bt=K.index,Vt=1;if(V.wireframe===!0){if(Bt=Q.getWireframeAttribute(K),Bt===void 0)return;Vt=2}const oe=K.drawRange,fe=K.attributes.position;let kt=oe.start*Vt,Se=(oe.start+oe.count)*Vt;Lt!==null&&(kt=Math.max(kt,Lt.start*Vt),Se=Math.min(Se,(Lt.start+Lt.count)*Vt)),Bt!==null?(kt=Math.max(kt,0),Se=Math.min(Se,Bt.count)):fe!=null&&(kt=Math.max(kt,0),Se=Math.min(Se,fe.count));const ke=Se-kt;if(ke<0||ke===1/0)return;Dt.setup(W,V,It,K,Bt);let Ie,Te=bt;if(Bt!==null&&(Ie=_t.get(Bt),Te=it,Te.setIndex(Ie)),W.isMesh)V.wireframe===!0?(w.setLineWidth(V.wireframeLinewidth*ie()),Te.setMode(U.LINES)):Te.setMode(U.TRIANGLES);else if(W.isLine){let Qe=V.linewidth;Qe===void 0&&(Qe=1),w.setLineWidth(Qe*ie()),W.isLineSegments?Te.setMode(U.LINES):W.isLineLoop?Te.setMode(U.LINE_LOOP):Te.setMode(U.LINE_STRIP)}else W.isPoints?Te.setMode(U.POINTS):W.isSprite&&Te.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(de.get("WEBGL_multi_draw"))Te.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Qe=W._multiDrawStarts,Ft=W._multiDrawCounts,rn=W._multiDrawCount,xe=Bt?_t.get(Bt).bytesPerElement:1,Rn=Y.get(V).currentProgram.getUniforms();for(let Wn=0;Wn<rn;Wn++)Rn.setValue(U,"_gl_DrawID",Wn),Te.render(Qe[Wn]/xe,Ft[Wn])}else if(W.isInstancedMesh)Te.renderInstances(kt,ke,W.count);else if(K.isInstancedBufferGeometry){const Qe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ft=Math.min(K.instanceCount,Qe);Te.renderInstances(kt,ke,Ft)}else Te.render(kt,ke)};function Xc(T,O,K,V){D!==null&&T.isNodeMaterial&&D.setObject(V,T),dt===!0&&Xt.setState(T,K,!1),T.transparent===!0&&T.side===Ne&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,Ur(T,O,V),T.side=Ii,T.needsUpdate=!0,Ur(T,O,V),T.side=Ne):Ur(T,O,V)}this.compile=function(T,O,K=null){K===null&&(K=T),D!==null&&D.renderStart(T,O,K),S=St.get(K),S.init(O),y.push(S),K.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),T!==K&&T.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),ut=this.localClippingEnabled,dt=Xt.init(this.clippingPlanes,ut),dt===!0&&Xt.setGlobalState(this.clippingPlanes,O),D!==null&&Kt.render(S.state.shadowsArray,K,O);const V=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Lt=W.material;if(Lt)if(Array.isArray(Lt))for(let zt=0;zt<Lt.length;zt++){const It=Lt[zt];Xc(It,K,O,W),V.add(It)}else Xc(Lt,K,O,W),V.add(Lt)}),S=y.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(T,O,K=null){const V=this.compile(T,O,K);return new Promise(W=>{function Lt(){if(V.forEach(function(zt){const Bt=Y.get(zt).currentProgram;(Bt===void 0||Bt.isReady())&&V.delete(zt)}),V.size===0){W(T);return}setTimeout(Lt,10)}de.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let ro=null;function Yf(T){ro&&ro(T)}function Yc(){Ui.stop()}function qc(){Ui.start()}const Ui=new Sf;Ui.setAnimationLoop(Yf),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(T){ro=T,Gt.setAnimationLoop(T),T===null?Ui.stop():Ui.start()},Gt.addEventListener("sessionstart",Yc),Gt.addEventListener("sessionend",qc),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(T,O);const K=Gt.enabled===!0&&Gt.isPresenting===!0,V=E!==null&&(et===null||K)&&E.begin(R,et);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(O),O=Gt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,O,et),S=St.get(T,y.length),S.init(O),S.state.textureUnits=J.getTextureUnits(),y.push(S),pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),rt.setFromProjectionMatrix(pt,Kn,O.reversedDepth),ut=this.localClippingEnabled,dt=Xt.init(this.clippingPlanes,ut),M=At.get(T,A.length),M.init(),A.push(M),Gt.enabled===!0&&Gt.isPresenting===!0){const zt=R.xr.getDepthSensingMesh();zt!==null&&ao(zt,O,-1/0,R.sortObjects)}ao(T,O,0,R.sortObjects),M.finish(),D!==null&&D.updateLights(S.state.lightsArray),R.sortObjects===!0&&M.sort(ht,Ot),Qt=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Qt&&re.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&Xt.beginShadows();const W=S.state.shadowsArray;if(Kt.render(W,T,O),dt===!0&&Xt.endShadows(),(V&&E.hasRenderPass())===!1){const zt=M.opaque,It=M.transmissive;if(S.setupLights(),O.isArrayCamera){const Bt=O.cameras;if(It.length>0)for(let Vt=0,oe=Bt.length;Vt<oe;Vt++){const fe=Bt[Vt];Kc(zt,It,T,fe)}Qt&&re.render(T);for(let Vt=0,oe=Bt.length;Vt<oe;Vt++){const fe=Bt[Vt];$c(M,T,fe,fe.viewport)}}else It.length>0&&Kc(zt,It,T,O),Qt&&re.render(T),$c(M,T,O)}et!==null&&H===0&&(J.updateMultisampleRenderTarget(et),J.updateRenderTargetMipmap(et)),V&&E.end(R),T.isScene===!0&&T.onAfterRender(R,T,O),Dt.resetDefaultState(),Z=-1,tt=null,y.pop(),y.length>0?(S=y[y.length-1],J.setTextureUnits(S.state.textureUnits),dt===!0&&Xt.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,D!==null&&D.renderEnd()};function ao(T,O,K,V){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLightProbeGrid)S.pushLightProbeGrid(T);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(rt)){V&&$t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pt);const zt=st.update(T),It=T.material;It.visible&&M.push(T,zt,It,K,$t.z,null,O)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(rt))){const zt=st.update(T),It=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$t.copy(T.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),$t.copy(zt.boundingSphere.center)),$t.applyMatrix4(T.matrixWorld).applyMatrix4(pt)),Array.isArray(It)){const Bt=zt.groups;for(let Vt=0,oe=Bt.length;Vt<oe;Vt++){const fe=Bt[Vt],kt=It[fe.materialIndex];kt&&kt.visible&&M.push(T,zt,kt,K,$t.z,fe,O)}}else It.visible&&M.push(T,zt,It,K,$t.z,null,O)}}const Lt=T.children;for(let zt=0,It=Lt.length;zt<It;zt++)ao(Lt[zt],O,K,V)}function $c(T,O,K,V){const{opaque:W,transmissive:Lt,transparent:zt}=T;S.setupLightsView(K),dt===!0&&Xt.setGlobalState(R.clippingPlanes,K),V&&w.viewport(j.copy(V)),W.length>0&&Nr(W,O,K),Lt.length>0&&Nr(Lt,O,K),zt.length>0&&Nr(zt,O,K),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Kc(T,O,K,V){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){const kt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new dn(1,1,{generateMipmaps:!0,type:kt?xn:wn,minFilter:Wi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}const Lt=S.state.transmissionRenderTarget[V.id],zt=V.viewport||j;Lt.setSize(zt.z*R.transmissionResolutionScale,zt.w*R.transmissionResolutionScale);const It=R.getRenderTarget(),Bt=R.getActiveCubeFace(),Vt=R.getActiveMipmapLevel();R.setRenderTarget(Lt),R.getClearColor(k),nt=R.getClearAlpha(),nt<1&&R.setClearColor(16777215,.5),R.clear(),Qt&&re.render(K);const oe=R.toneMapping;R.toneMapping=Qn;const fe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),dt===!0&&Xt.setGlobalState(R.clippingPlanes,V),Nr(T,K,V),J.updateMultisampleRenderTarget(Lt),J.updateRenderTargetMipmap(Lt),de.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Se=0,ke=O.length;Se<ke;Se++){const Ie=O[Se],{object:Te,geometry:Qe,material:Ft,group:rn}=Ie;if(Ft.side===Ne&&Te.layers.test(V.layers)){const xe=Ft.side;Ft.side=hn,Ft.needsUpdate=!0,Zc(Te,K,V,Qe,Ft,rn),Ft.side=xe,Ft.needsUpdate=!0,kt=!0}}kt===!0&&(J.updateMultisampleRenderTarget(Lt),J.updateRenderTargetMipmap(Lt))}R.setRenderTarget(It,Bt,Vt),R.setClearColor(k,nt),fe!==void 0&&(V.viewport=fe),R.toneMapping=oe}function Nr(T,O,K){const V=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Lt=T.length;W<Lt;W++){const zt=T[W],{object:It,geometry:Bt,group:Vt}=zt;let oe=zt.material;oe.allowOverride===!0&&V!==null&&(oe=V),It.layers.test(K.layers)&&Zc(It,O,K,Bt,oe,Vt)}}function Zc(T,O,K,V,W,Lt){D!==null&&W.isNodeMaterial&&D.setObject(T,W),T.onBeforeRender(R,O,K,V,W,Lt),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(R,O,K,V,T,Lt),W.transparent===!0&&W.side===Ne&&W.forceSinglePass===!1?(W.side=hn,W.needsUpdate=!0,R.renderBufferDirect(K,O,V,W,T,Lt),W.side=Ii,W.needsUpdate=!0,R.renderBufferDirect(K,O,V,W,T,Lt),W.side=Ne):R.renderBufferDirect(K,O,V,W,T,Lt),T.onAfterRender(R,O,K,V,W,Lt)}function Ur(T,O,K){O.isScene!==!0&&(O=qt);const V=Y.get(T),W=S.state.lights,Lt=S.state.shadowsArray,zt=W.state.version,It=Mt.getParameters(T,W.state,Lt,O,K,S.state.lightProbeGridArray),Bt=Mt.getProgramCacheKey(It);let Vt=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;const oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=mt.get(T.envMap||V.environment,oe),V.envMapRotation=V.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Vt===void 0&&(T.addEventListener("dispose",Vn),Vt=new Map,V.programs=Vt);let fe=Vt.get(Bt);if(fe!==void 0){if(V.currentProgram===fe&&V.lightsStateVersion===zt)return Qc(T,It),fe}else It.uniforms=Mt.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,K,It),T.onBeforeCompile(It,R),fe=Mt.acquireProgram(It,Bt),Vt.set(Bt,fe),V.uniforms=It.uniforms;const kt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=Xt.uniform),Qc(T,It),V.needsLights=Zf(T),V.lightsStateVersion=zt,V.needsLights&&(kt.ambientLightColor.value=W.state.ambient,kt.lightProbe.value=W.state.probe,kt.sunLights.value=W.state.sun,kt.sunLightShadows.value=W.state.sunShadow,kt.directionalLights.value=W.state.directional,kt.directionalLightShadows.value=W.state.directionalShadow,kt.spotLights.value=W.state.spot,kt.spotLightShadows.value=W.state.spotShadow,kt.rectAreaLights.value=W.state.rectArea,kt.ltc_1.value=W.state.rectAreaLTC1,kt.ltc_2.value=W.state.rectAreaLTC2,kt.pointLights.value=W.state.point,kt.pointLightShadows.value=W.state.pointShadow,kt.hemisphereLights.value=W.state.hemi,kt.sunShadowMatrix.value=W.state.sunShadowMatrix,kt.sunShadowCascade.value=W.state.sunShadowCascade,kt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,kt.spotLightMatrix.value=W.state.spotLightMatrix,kt.spotLightMap.value=W.state.spotLightMap,kt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=fe,V.uniformsList=null,fe}function Jc(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Ea.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Qc(T,O){const K=Y.get(T);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function qf(T,O){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let K=0,V=T.length;K<V;K++){const W=T[K];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function $f(T,O,K,V,W){O.isScene!==!0&&(O=qt),J.resetTextureUnits();const Lt=O.fog,zt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,It=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:pe.workingColorSpace,Bt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Vt=mt.get(V.envMap||zt,Bt),oe=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,fe=!!K.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),kt=!!K.morphAttributes.position,Se=!!K.morphAttributes.normal,ke=!!K.morphAttributes.color;let Ie=Qn;V.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ie=R.toneMapping);const Te=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Qe=Te!==void 0?Te.length:0,Ft=Y.get(V),rn=S.state.lights;if(dt===!0&&(ut===!0||T!==tt)){const Ce=T===tt&&V.id===Z;Xt.setState(V,T,Ce)}let xe=!1;V.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==rn.state.version||Ft.outputColorSpace!==It||W.isBatchedMesh&&Ft.batching===!1||!W.isBatchedMesh&&Ft.batching===!0||W.isBatchedMesh&&Ft.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ft.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ft.instancing===!1||!W.isInstancedMesh&&Ft.instancing===!0||W.isSkinnedMesh&&Ft.skinning===!1||!W.isSkinnedMesh&&Ft.skinning===!0||W.isInstancedMesh&&Ft.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ft.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ft.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ft.instancingMorph===!1&&W.morphTexture!==null||Ft.envMap!==Vt||V.fog===!0&&Ft.fog!==Lt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Xt.numPlanes||Ft.numIntersection!==Xt.numIntersection)||Ft.vertexAlphas!==oe||Ft.vertexTangents!==fe||Ft.morphTargets!==kt||Ft.morphNormals!==Se||Ft.morphColors!==ke||Ft.toneMapping!==Ie||Ft.morphTargetsCount!==Qe||!!Ft.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Ft.__version=V.version);let Rn=Ft.currentProgram;xe===!0&&(Rn=Ur(V,O,W),D&&V.isNodeMaterial&&D.onUpdateProgram(V,Rn,Ft));let Wn=!1,Mi=!1,is=!1;const Ee=Rn.getUniforms(),Be=Ft.uniforms;if(w.useProgram(Rn.program)&&(Wn=!0,Mi=!0,is=!0),V.id!==Z&&(Z=V.id,Mi=!0),Ft.needsLights){const Ce=qf(S.state.lightProbeGridArray,W);Ft.lightProbeGrid!==Ce&&(Ft.lightProbeGrid=Ce,Mi=!0)}if(Wn||tt!==T){w.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ee.setValue(U,"projectionMatrix",T.projectionMatrix),Ee.setValue(U,"viewMatrix",T.matrixWorldInverse);const bi=Ee.map.cameraPosition;bi!==void 0&&bi.setValue(U,vt.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&Ee.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ee.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),tt!==T&&(tt=T,Mi=!0,is=!0)}if(Ft.needsLights&&(rn.state.sunShadowMap.length>0&&Ee.setValue(U,"sunShadowMap",rn.state.sunShadowMap,J),rn.state.directionalShadowMap.length>0&&Ee.setValue(U,"directionalShadowMap",rn.state.directionalShadowMap,J),rn.state.spotShadowMap.length>0&&Ee.setValue(U,"spotShadowMap",rn.state.spotShadowMap,J),rn.state.pointShadowMap.length>0&&Ee.setValue(U,"pointShadowMap",rn.state.pointShadowMap,J)),W.isSkinnedMesh){Ee.setOptional(U,W,"bindMatrix"),Ee.setOptional(U,W,"bindMatrixInverse");const Ce=W.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Ee.setValue(U,"boneTexture",Ce.boneTexture,J))}W.isBatchedMesh&&(Ee.setOptional(U,W,"batchingTexture"),Ee.setValue(U,"batchingTexture",W._matricesTexture,J),Ee.setOptional(U,W,"batchingIdTexture"),Ee.setValue(U,"batchingIdTexture",W._indirectTexture,J),Ee.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Ee.setValue(U,"batchingColorTexture",W._colorsTexture,J));const Si=K.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&z.update(W,K,Rn),(Mi||Ft.receiveShadow!==W.receiveShadow)&&(Ft.receiveShadow=W.receiveShadow,Ee.setValue(U,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(Be.envMapIntensity.value=O.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=fv()),Mi){if(Ee.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ft.needsLights&&Kf(Be,is),Lt&&V.fog===!0&&Wt.refreshFogUniforms(Be,Lt),Wt.refreshMaterialUniforms(Be,V,q,B,S.state.transmissionRenderTarget[T.id]),Ft.needsLights&&Ft.lightProbeGrid){const Ce=Ft.lightProbeGrid;Be.probesSH.value=Ce.texture,Be.probesMin.value.copy(Ce.boundingBox.min),Be.probesMax.value.copy(Ce.boundingBox.max),Be.probesResolution.value.copy(Ce.resolution)}Ea.upload(U,Jc(Ft),Be,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ea.upload(U,Jc(Ft),Be,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ee.setValue(U,"center",W.center),Ee.setValue(U,"modelViewMatrix",W.modelViewMatrix),Ee.setValue(U,"normalMatrix",W.normalMatrix),Ee.setValue(U,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const Ce=V.uniformsGroups;for(let bi=0,ss=Ce.length;bi<ss;bi++){const th=Ce[bi];ct.update(th,Rn),ct.bind(th,Rn)}}return Rn}function Kf(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Zf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(T,O,K){const V=Y.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Y.get(T.texture).__webglTexture=O,Y.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:K,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const K=Y.get(T);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,K=0){et=T,X=O,H=K;let V=null,W=!1,Lt=!1;if(T){const It=Y.get(T);if(It.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(U.FRAMEBUFFER,It.__webglFramebuffer),j.copy(T.viewport),Ut.copy(T.scissor),ot=T.scissorTest,w.viewport(j),w.scissor(Ut),w.setScissorTest(ot),Z=-1;return}else if(It.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(It.__hasExternalTextures)J.rebindTextures(T,Y.get(T.texture).__webglTexture,Y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const oe=T.depthTexture;if(It.__boundDepthTexture!==oe){if(oe!==null&&Y.has(oe)&&(T.width!==oe.image.width||T.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}const Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Lt=!0);const Vt=Y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?V=Vt[O][K]:V=Vt[O],W=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?V=Y.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?V=Vt[K]:V=Vt,j.copy(T.viewport),Ut.copy(T.scissor),ot=T.scissorTest}else j.copy(xt).multiplyScalar(q).floor(),Ut.copy(Ht).multiplyScalar(q).floor(),ot=me;if(K!==0&&(V=F),w.bindFramebuffer(U.FRAMEBUFFER,V)&&w.drawBuffers(T,V),w.viewport(j),w.scissor(Ut),w.setScissorTest(ot),W){const It=Y.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,It.__webglTexture,K)}else if(Lt){const It=O;for(let Bt=0;Bt<T.textures.length;Bt++){const Vt=Y.get(T.textures[Bt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Bt,Vt.__webglTexture,K,It)}}else if(T!==null&&K!==0){const It=Y.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,It.__webglTexture,K)}Z=-1};function jc(T){const O=Y.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=C.textureFormatReadable(T.format),O.__typeReadable=C.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,K,V,W,Lt,zt,It=0){if(!(T&&T.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&zt!==void 0&&(Bt=Bt[zt]),Bt){w.bindFramebuffer(U.FRAMEBUFFER,Bt);try{const Vt=T.textures[It],oe=Vt.format,fe=Vt.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+It);const kt=jc(Vt);if(kt.__formatReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-V&&K>=0&&K<=T.height-W&&U.readPixels(O,K,V,W,wt.convert(oe),wt.convert(fe),Lt)}finally{const Vt=et!==null?Y.get(et).__webglFramebuffer:null;w.bindFramebuffer(U.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(T,O,K,V,W,Lt,zt,It=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&zt!==void 0&&(Bt=Bt[zt]),Bt)if(O>=0&&O<=T.width-V&&K>=0&&K<=T.height-W){w.bindFramebuffer(U.FRAMEBUFFER,Bt);const Vt=T.textures[It],oe=Vt.format,fe=Vt.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+It);const kt=jc(Vt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.bufferData(U.PIXEL_PACK_BUFFER,Lt.byteLength,U.STREAM_READ),U.readPixels(O,K,V,W,wt.convert(oe),wt.convert(fe),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const ke=et!==null?Y.get(et).__webglFramebuffer:null;w.bindFramebuffer(U.FRAMEBUFFER,ke);const Ie=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Du(U,Ie,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Lt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Se),U.deleteSync(Ie),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,K=0){const V=Math.pow(2,-K),W=Math.floor(T.image.width*V),Lt=Math.floor(T.image.height*V),zt=O!==null?O.x:0,It=O!==null?O.y:0;J.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,zt,It,W,Lt),w.unbindTexture()},this.copyTextureToTexture=function(T,O,K=null,V=null,W=0,Lt=0){let zt,It,Bt,Vt,oe,fe,kt,Se,ke;const Ie=T.isCompressedTexture?T.mipmaps[Lt]:T.image;if(K!==null)zt=K.max.x-K.min.x,It=K.max.y-K.min.y,Bt=K.isBox3?K.max.z-K.min.z:1,Vt=K.min.x,oe=K.min.y,fe=K.isBox3?K.min.z:0;else{const Be=Math.pow(2,-W);zt=Math.floor(Ie.width*Be),It=Math.floor(Ie.height*Be),T.isDataArrayTexture?Bt=Ie.depth:T.isData3DTexture?Bt=Math.floor(Ie.depth*Be):Bt=1,Vt=0,oe=0,fe=0}V!==null?(kt=V.x,Se=V.y,ke=V.z):(kt=0,Se=0,ke=0);const Te=wt.convert(O.format),Qe=wt.convert(O.type);let Ft;O.isData3DTexture?(J.setTexture3D(O,0),Ft=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(J.setTexture2DArray(O,0),Ft=U.TEXTURE_2D_ARRAY):(J.setTexture2D(O,0),Ft=U.TEXTURE_2D),w.activeTexture(U.TEXTURE0),w.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const rn=w.getParameter(U.UNPACK_ROW_LENGTH),xe=w.getParameter(U.UNPACK_IMAGE_HEIGHT),Rn=w.getParameter(U.UNPACK_SKIP_PIXELS),Wn=w.getParameter(U.UNPACK_SKIP_ROWS),Mi=w.getParameter(U.UNPACK_SKIP_IMAGES);w.pixelStorei(U.UNPACK_ROW_LENGTH,Ie.width),w.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ie.height),w.pixelStorei(U.UNPACK_SKIP_PIXELS,Vt),w.pixelStorei(U.UNPACK_SKIP_ROWS,oe),w.pixelStorei(U.UNPACK_SKIP_IMAGES,fe);const is=T.isDataArrayTexture||T.isData3DTexture,Ee=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const Be=Y.get(T),Si=Y.get(O),Ce=Y.get(Be.__renderTarget),bi=Y.get(Si.__renderTarget);w.bindFramebuffer(U.READ_FRAMEBUFFER,Ce.__webglFramebuffer),w.bindFramebuffer(U.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let ss=0;ss<Bt;ss++)is&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(T).__webglTexture,W,fe+ss),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(O).__webglTexture,Lt,ke+ss)),U.blitFramebuffer(Vt,oe,zt,It,kt,Se,zt,It,U.DEPTH_BUFFER_BIT,U.NEAREST);w.bindFramebuffer(U.READ_FRAMEBUFFER,null),w.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||Y.has(T)){const Be=Y.get(T),Si=Y.get(O);w.bindFramebuffer(U.READ_FRAMEBUFFER,P),w.bindFramebuffer(U.DRAW_FRAMEBUFFER,N);for(let Ce=0;Ce<Bt;Ce++)is?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Be.__webglTexture,W,fe+Ce):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Be.__webglTexture,W),Ee?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Si.__webglTexture,Lt,ke+Ce):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Si.__webglTexture,Lt),W!==0?U.blitFramebuffer(Vt,oe,zt,It,kt,Se,zt,It,U.COLOR_BUFFER_BIT,U.NEAREST):Ee?U.copyTexSubImage3D(Ft,Lt,kt,Se,ke+Ce,Vt,oe,zt,It):U.copyTexSubImage2D(Ft,Lt,kt,Se,Vt,oe,zt,It);w.bindFramebuffer(U.READ_FRAMEBUFFER,null),w.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ee?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Ft,Lt,kt,Se,ke,zt,It,Bt,Te,Qe,Ie.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Ft,Lt,kt,Se,ke,zt,It,Bt,Te,Ie.data):U.texSubImage3D(Ft,Lt,kt,Se,ke,zt,It,Bt,Te,Qe,Ie):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Lt,kt,Se,zt,It,Te,Qe,Ie.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Lt,kt,Se,Ie.width,Ie.height,Te,Ie.data):U.texSubImage2D(U.TEXTURE_2D,Lt,kt,Se,zt,It,Te,Qe,Ie);w.pixelStorei(U.UNPACK_ROW_LENGTH,rn),w.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe),w.pixelStorei(U.UNPACK_SKIP_PIXELS,Rn),w.pixelStorei(U.UNPACK_SKIP_ROWS,Wn),w.pixelStorei(U.UNPACK_SKIP_IMAGES,Mi),Lt===0&&O.generateMipmaps&&U.generateMipmap(Ft),w.unbindTexture()},this.initRenderTarget=function(T){Y.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),w.unbindTexture()},this.resetState=function(){X=0,H=0,et=null,w.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}const ud={type:"change"},bc={type:"start"},Pf={type:"end"},da=new Ar,pd=new fi,pv=Math.cos(70*qa.DEG2RAD),We=new I,pn=2*Math.PI,we={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Go=1e-6;class mv extends m0{constructor(t,e=null){super(t,e),this.state=we.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Ln,this._lastTargetPosition=new I,this._quat=new Ln().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vh,this._sphericalDelta=new Vh,this._scale=1,this._panOffset=new I,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new I,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xv.bind(this),this._onPointerDown=gv.bind(this),this._onPointerUp=_v.bind(this),this._onContextMenu=Ev.bind(this),this._onMouseWheel=Mv.bind(this),this._onKeyDown=Sv.bind(this),this._onTouchStart=bv.bind(this),this._onTouchMove=wv.bind(this),this._onMouseDown=vv.bind(this),this._onMouseMove=yv.bind(this),this._interceptControlDown=Tv.bind(this),this._interceptControlUp=Av.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=we.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ud),this.update(),this.state=we.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;We.copy(e).sub(this.target),We.applyQuaternion(this._quat),this._spherical.setFromVector3(We),this.autoRotate&&this.state===we.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(We.setFromSpherical(this._spherical),We.applyQuaternion(this._quatInverse),e.copy(this.target).add(We),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=We.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=We.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(da.origin.copy(this.object.position),da.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(da.direction))<pv?this.object.lookAt(this.target):(pd.setFromNormalAndCoplanarPoint(this.object.up,this.target),da.intersectPlane(pd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Go||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Go||this._lastTargetPosition.distanceToSquared(this.target)>Go?(this.dispatchEvent(ud),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pn/60*this.autoRotateSpeed*t:pn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){We.setFromMatrixColumn(e,0),We.multiplyScalar(-t),this._panOffset.add(We)}_panUp(t,e){this.screenSpacePanning===!0?We.setFromMatrixColumn(e,1):(We.setFromMatrixColumn(e,0),We.crossVectors(this.object.up,We)),We.multiplyScalar(t),this._panOffset.add(We)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;We.copy(s).sub(this.target);let r=We.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function gv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function xv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function _v(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pf),this.state=we.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function vv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=we.DOLLY;break;case Ts.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=we.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=we.ROTATE}break;case Ts.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=we.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=we.PAN}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(bc)}function yv(n){switch(this.state){case we.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case we.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case we.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Mv(n){this.enabled===!1||this.enableZoom===!1||this.state!==we.NONE||(n.preventDefault(),this.dispatchEvent(bc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Pf))}function Sv(n){this.enabled!==!1&&this._handleKeyDown(n)}function bv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=we.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=we.TOUCH_PAN;break;default:this.state=we.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=we.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=we.TOUCH_DOLLY_ROTATE;break;default:this.state=we.NONE}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(bc)}function wv(n){switch(this._trackPointer(n),this.state){case we.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case we.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case we.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case we.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=we.NONE}}function Ev(n){this.enabled!==!1&&n.preventDefault()}function Tv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Av(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class wc extends Fe{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new at(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}}const vs=new I,md=new he,gd=new he,xd=new I,_d=new I;class Rv{constructor(t={}){const e=this;let i,s,r,a;const o={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.sortObjects=!0,this.getSize=function(){return{width:i,height:s}},this.render=function(g,x){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),md.copy(x.matrixWorldInverse),gd.multiplyMatrices(x.projectionMatrix,md),d(g,g,x),this.sortObjects&&p(g)},this.setSize=function(g,x){i=g,s=x,r=i/2,a=s/2,c.style.width=g+"px",c.style.height=x+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let x=0,m=g.children.length;x<m;x++)l(g.children[x])}function d(g,x,m){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){vs.setFromMatrixPosition(g.matrixWorld),vs.applyMatrix4(gd);const u=vs.z>=-1&&vs.z<=1&&g.layers.test(m.layers)===!0,v=g.element;if(v.style.display=u===!0?"":"none",u===!0){g.onBeforeRender(e,x,m);const _=100*g.center.x,M=100*g.center.y;v.style.transformOrigin=`${_}% ${M}%`;const S=-g.rotation2D,A=vs.x*r+r,y=-vs.y*a+a;v.style.transform=`translate(${-_}%, ${-M}%) translate(${A}px, ${y}px) rotate(${S}rad)`,v.parentNode!==c&&c.appendChild(v),g.onAfterRender(e,x,m)}const b={distanceToCameraSquared:f(m,g)};o.objects.set(g,b)}for(let u=0,v=g.children.length;u<v;u++)d(g.children[u],x,m)}function f(g,x){return xd.setFromMatrixPosition(g.matrixWorld),_d.setFromMatrixPosition(x.matrixWorld),xd.distanceToSquared(_d)}function h(g){const x=[];return g.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function p(g){const x=h(g).sort(function(u,v){if(u.renderOrder!==v.renderOrder)return v.renderOrder-u.renderOrder;const b=o.objects.get(u).distanceToCameraSquared,_=o.objects.get(v).distanceToCameraSquared;return b-_}),m=x.length;for(let u=0,v=x.length;u<v;u++)x[u].element.style.zIndex=m-u}}}const Ta={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ks{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Cv=new Ja(-1,1,1,-1,0,1);class Pv extends Ae{constructor(){super(),this.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jt([0,2,0,0,2,0],2))}}const Iv=new Pv;class Ec{constructor(t){this._mesh=new Zt(Iv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Cv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class If extends ks{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Sr.clone(t.uniforms),this.material=new Ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ec(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class vd extends ks{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Lv extends ks{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Dv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new at);this._width=i.width,this._height=i.height,e=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new If(Ta),this.copyPass.material.blending=Jn,this.timer=new f0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vd!==void 0&&(a instanceof vd?i=!0:a instanceof Lv&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Nv extends ks{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Tt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Uv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Us extends ks{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new Tt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(r,a,{type:xn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new dn(r,a,{type:xn,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new dn(r,a,{type:xn,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+d,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}const o=Uv;this.highPassUniforms=Sr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ke({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new at(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Sr.clone(Ta.uniforms),this.blendMaterial=new Ke({uniforms:this.copyUniforms,vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader,premultipliedAlpha:!0,blending:xi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Tt,this._oldClearAlpha=1,this._basic=new te,this._fsQuad=new Ec(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Us.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Us.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const s=[],r=[];for(let a=1;a<t;a+=2){const o=e[a],c=a+1<t?e[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Ke({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Us.BlurDirectionX=new at(1,0);Us.BlurDirectionY=new at(0,1);const fa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ov extends ks{constructor(){super(),this.isOutputPass=!0,this.uniforms=Sr.clone(fa.uniforms),this.material=new vf({name:fa.name,uniforms:this.uniforms,vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader}),this._fsQuad=new Ec(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},pe.getTransfer(this._outputColorSpace)===be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ec&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const yd=new I,Fv=new Ln,Md=new I;class zv extends Fe{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}}const qn=new he,Bv=new he;class kv{constructor(t={}){const e=this;let i,s,r,a;const o={camera:{style:""},objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);const d=document.createElement("div");d.style.transformStyle="preserve-3d",l.appendChild(d),this.getSize=function(){return{width:i,height:s}},this.render=function(m,u){const v=u.projectionMatrix.elements[5]*a;u.view&&u.view.enabled?(l.style.transform=`translate( ${-u.view.offsetX*(i/u.view.width)}px, ${-u.view.offsetY*(s/u.view.height)}px )`,l.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):l.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let b,_;u.isOrthographicCamera&&(b=-(u.right+u.left)/2,_=(u.top+u.bottom)/2);const M=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,S=u.isOrthographicCamera?`scale( ${M} )scale(`+v+")translate("+f(b)+"px,"+f(_)+"px)"+h(u.matrixWorldInverse):`scale( ${M} )translateZ(`+v+"px)"+h(u.matrixWorldInverse),y=(u.isPerspectiveCamera?"perspective("+v+"px) ":"")+S+"translate("+r+"px,"+a+"px)";o.camera.style!==y&&(d.style.transform=y,o.camera.style=y),x(m,m,u)},this.setSize=function(m,u){i=m,s=u,r=i/2,a=s/2,c.style.width=m+"px",c.style.height=u+"px",l.style.width=m+"px",l.style.height=u+"px",d.style.width=m+"px",d.style.height=u+"px"};function f(m){return Math.abs(m)<1e-10?0:m}function h(m){const u=m.elements;return"matrix3d("+f(u[0])+","+f(-u[1])+","+f(u[2])+","+f(u[3])+","+f(u[4])+","+f(-u[5])+","+f(u[6])+","+f(u[7])+","+f(u[8])+","+f(-u[9])+","+f(u[10])+","+f(u[11])+","+f(u[12])+","+f(-u[13])+","+f(u[14])+","+f(u[15])+")"}function p(m){const u=m.elements;return"translate(-50%,-50%)"+("matrix3d("+f(u[0])+","+f(u[1])+","+f(u[2])+","+f(u[3])+","+f(-u[4])+","+f(-u[5])+","+f(-u[6])+","+f(-u[7])+","+f(u[8])+","+f(u[9])+","+f(u[10])+","+f(u[11])+","+f(u[12])+","+f(u[13])+","+f(u[14])+","+f(u[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let u=0,v=m.children.length;u<v;u++)g(m.children[u])}function x(m,u,v,b){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){const _=m.layers.test(v.layers)===!0,M=m.element;if(M.style.display=_===!0?"":"none",_===!0){m.onBeforeRender(e,u,v);let S;m.isCSS3DSprite?(qn.copy(v.matrixWorldInverse),qn.transpose(),m.rotation2D!==0&&qn.multiply(Bv.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(yd,Fv,Md),qn.setPosition(yd),qn.scale(Md),qn.elements[3]=0,qn.elements[7]=0,qn.elements[11]=0,qn.elements[15]=1,S=p(qn)):S=p(m.matrixWorld);const A=o.objects.get(m);if(A===void 0||A.style!==S){M.style.transform=S;const y={style:S};o.objects.set(m,y)}M.parentNode!==d&&d.appendChild(M),m.onAfterRender(e,u,v)}}for(let _=0,M=m.children.length;_<M;_++)x(m.children[_],u,v)}}}const Tc={title:"Sidatreya's Office",subtitle:"Live view of your agents at work"},Hs=[{id:"b1",name:"Server & Utilities",level:-1,label:"B1"},{id:"trading",name:"Trading Room",level:0,label:"01"},{id:"admin",name:"Admin Block",level:1,label:"02"},{id:"studio",name:"Creative Studio",level:2,label:"03"},{id:"property",name:"Property Management",level:3,label:"04"},{id:"recreation",name:"Recreation · Dab Lab & Dispensary",level:4,label:"05"}],Xe=n=>({status:"idle",task:"Waiting for first check-in",tasks:[n.role],logs:[`${n.name} checked in`],...n}),fn=[Xe({id:"intraday-signal-trader",name:"Intraday Signal Trader",role:"Intraday signals, scans & alerts",color:"#22d3ee",floor:"trading",desk:{x:-9.8,z:-2.4},tasks:["Running intraday scans","Posting pivot alerts"],logs:["Intraday scan finished","Pivot alert sent"]}),Xe({id:"swing-htf-trader",name:"Swing HTF Trader",role:"Swing setups on higher timeframes",color:"#a3e635",floor:"trading",desk:{x:-5.7,z:-2.4},tasks:["Reviewing daily and weekly charts","Planning swing entries"],logs:["Weekly levels updated","Swing watchlist refreshed"]}),Xe({id:"pro-trader",name:"Warren Buffet",role:"Markets & trading research",color:"#34d399",floor:"trading",desk:{x:-1.6,z:-2.4},tasks:["Scanning NIFTY 50 for breakout setups","Watching BTC/USDT on the 15m chart","Reworking BTC and ASTER scenario charts"],logs:["NIFTY 50 tested resistance — flagged for review","BTC/USDT funding flipped positive","Added 3 notes to the trading KB"]}),Xe({id:"risk-verification",name:"Risk & Verification",role:"Risk limits & trade verification",color:"#f87171",floor:"trading",desk:{x:2.5,z:-2.4},tasks:["Checking position sizes against limits","Verifying signals before execution"],logs:["Risk check passed","Signal verified"]}),Xe({id:"gk",name:"PA Sid Atreya",role:"Personal assistant & coordinator",color:"#a78bfa",floor:"admin",desk:{x:1.4,z:1.6,wide:!0},tasks:["Coordinating the team and routing new requests","Preparing the morning summary for Sidatreya"],logs:["Routed a market scan to Warren Buffet","Re-prioritised the task queue","Handed a design brief to Furniture Deaigner"]}),Xe({id:"ceo",name:"CEO",role:"Chief Executive — sets priorities for the agent team",color:"#f5c46b",floor:"admin",desk:{x:8.4,z:1.6,wide:!0},tasks:["Setting today's priorities","Reviewing agent status"],logs:["Approved the work queue","Assigned a build to Web & 3D Developer"]}),Xe({id:"archivist",name:"Archivist",role:"Records, notes & knowledge base",color:"#94a3b8",floor:"admin",desk:{x:-8.4,z:1.6},tasks:["Filing project records","Indexing the knowledge base"],logs:["Archived the latest drawings","Updated the index"]}),Xe({id:"linkedin",name:"Marketing Maniac",role:"Marketing, content & engagement",color:"#fbbf24",floor:"admin",desk:{x:-9.6,z:-3.2},tasks:["Drafting a post on India-first GTM","Replying to comments on the latest post"],logs:["Drafted a hook for the India-first GTM post","Replied to 6 comments on the latest post"]}),Xe({id:"whatsapp-manager",name:"Whatsapp Manager",role:"WhatsApp tasks & reminders",color:"#84cc16",floor:"admin",desk:{x:-4.7,z:-3.9},tasks:["Sorting new WhatsApp task requests","Sending reminder digests"],logs:["Logged 4 new tasks from WhatsApp","Sent the evening reminder digest"]}),Xe({id:"developer",name:"Geek Kid",role:"Builds & integrations (WhatsApp task manager)",color:"#fb923c",floor:"admin",desk:{x:4.7,z:-3.9},tasks:["Writing the build brief","Fixing a deployment issue"],logs:["Pushed a fix to main","Build brief is ready"]}),Xe({id:"web-3d-developer",name:"Web & 3D Developer",role:"Websites, Three.js office & web tools",color:"#60a5fa",floor:"admin",desk:{x:9.7,z:-3.2},tasks:["Updating the agent office site","Shipping the Vastu tool"],logs:["Published the office site","Vastu tool build passed"]}),Xe({id:"grok-bot",name:"Grok Bot",role:"Architect — drafting, designing & rendering",color:"#38bdf8",floor:"studio",desk:{x:-12,z:-3.3},tasks:["Revising the site zoning diagram","Rendering the house elevations","Drafting the floor plan"],logs:["Produced a final zoning diagram","Rendered elevation option B","Updated the drafting set"]}),Xe({id:"cco",name:"CCO",role:"Chief Creative Officer — design direction & sign-off",color:"#e879f9",floor:"studio",desk:{x:-8,z:-3.3},tasks:["Reviewing design options","Writing the creative brief"],logs:["Signed off a design option","Sent a brief to the studio"]}),Xe({id:"furniture-designer",name:"Furniture Deaigner",role:"Product & furniture design",color:"#f472b6",floor:"studio",desk:{x:-4,z:-3.3},tasks:["Rendering design options for the study built-in","Sketching a walnut lounge chair"],logs:["Rendered walnut lounge chair v3","Exported moodboard: Japandi living room"]}),Xe({id:"landscape-designer",name:"Landscape Desigener",role:"Landscape & garden design",color:"#14b8a6",floor:"studio",desk:{x:0,z:-3.3},tasks:["Planting plan for the front garden","Rendering the courtyard landscape"],logs:["Picked native shrubs for the boundary","Rendered courtyard option A"]}),Xe({id:"dwg-drafting-operator",name:"DWG & Drafting Operator",role:"CAD / DWG drawings & drafting",color:"#facc15",floor:"studio",desk:{x:4,z:-3.3},tasks:["Cleaning up DWG layers","Drafting the working drawings"],logs:["Exported the DWG set","Layer standards applied"]}),Xe({id:"image-operator",name:"Image Operator",role:"Image generation & editing",color:"#fb7185",floor:"studio",desk:{x:8,z:-3.3},tasks:["Generating render variations","Retouching images"],logs:["Delivered image set","Upscaled renders"]}),Xe({id:"video-operator",name:"Video Operator",role:"Video generation & editing",color:"#c084fc",floor:"studio",desk:{x:12,z:-3.3},tasks:["Cutting the walkthrough video","Generating a clip"],logs:["Exported the walkthrough","Clip rendered"]}),Xe({id:"6c94624b-cff0-445d-acf3-76a7780c90f3",name:"Asset Manager",role:"Property & Land Intelligence — department head",color:"#d946ef",floor:"property",desk:{x:-11.6,z:-6.6},tasks:["Reviewing flagged deeds","Planning the property department floor"],logs:["Sent the floor brief to the architect","Reviewed 12 flagged parcels (example)"]})],Hv={"developer-whatsapp":"whatsapp-manager"},Vo=n=>Hv[n]||n,Gv=["Waiting for the next task","Standing by","No assigned task yet"],Ci=n=>n[Math.floor(Math.random()*n.length)],ys=n=>(fn.find(t=>t.id===n)||{logs:["checked in"]}).logs;function Vv({intervalMs:n=3200,historySize:t=60}={}){const e=new Set,i=[],s=new Map(fn.map(d=>[d.id,{status:d.status,task:d.task,progress:d.status==="working"?.35:0}]));let r=null;const a=d=>{i.push(d),i.length>t&&i.shift(),e.forEach(f=>f(d))},o=Date.now(),c=[["gk",`Office opened — ${fn.length} agents online`],["pro-trader",Ci(ys("pro-trader"))],["gk",ys("gk")[0]],["linkedin",Ci(ys("linkedin"))],["grok-bot",Ci(ys("grok-bot"))],["furniture-designer",Ci(ys("furniture-designer"))],["gk",ys("gk")[2]]];c.forEach(([d,f],h)=>{i.push({ts:new Date(o-(c.length-h)*47e3),agentId:d,type:"log",message:f})});function l(){const d=Ci(fn),f=s.get(d.id),h=[...s.values()].filter(g=>g.status==="working").length,p=Math.random();if(f.status==="idle"&&(p<.45||h<1)){f.status="working",f.task=Ci(d.tasks),f.progress=.05,a({ts:new Date,agentId:d.id,type:"status",status:"working",task:f.task,message:`Started: ${f.task}`});return}if(f.status==="working"&&(f.progress>.9||p<.18&&h>1)){const g=f.task;f.status="idle",f.task=Ci(Gv),f.progress=0,a({ts:new Date,agentId:d.id,type:"status",status:"idle",task:f.task,message:`Finished: ${g}`});return}f.status==="working"&&(f.progress=Math.min(1,f.progress+.15+Math.random()*.2)),a({ts:new Date,agentId:d.id,type:"log",message:Ci(d.logs)})}return{history:i,getState:d=>s.get(d),subscribe(d){return e.add(d),()=>e.delete(d)},start(){r||(r=setInterval(l,n))},stop(){clearInterval(r),r=null}}}const Sd="Waiting for first check-in";function Wv({url:n="./status.json",intervalMs:t=15e3}={}){const e=new Set,i=[],s=new Map(fn.map(f=>[f.id,{status:"idle",task:Sd,progress:0,lastActive:null}])),r=new Set(fn.map(f=>f.id));let a=null,o=null;const c={history:i,updatedAt:null,error:null,getState:f=>s.get(f),subscribe(f){return e.add(f),()=>e.delete(f)},start(){a||(l(),a=setInterval(l,t),document.addEventListener("visibilitychange",()=>document.visibilityState==="visible"&&l()))},stop(){clearInterval(a),a=null},refresh:()=>l()};async function l(){try{const f=n.includes("?")?"&":"?",h=await fetch(`${n}${f}t=${Date.now()}`,{cache:"no-store"});if(!h.ok)throw new Error(`HTTP ${h.status}`);const p=await h.json();if(c.error=null,p.updatedAt===o){e.forEach(g=>g({type:"heartbeat"}));return}o=p.updatedAt,d(p),e.forEach(g=>g({type:"sync"}))}catch(f){c.error=String(f.message||f),console.warn("[office] status.json poll failed:",c.error),e.forEach(h=>h({type:"error",error:c.error}))}}function d(f){const h=f.updatedAt?new Date(f.updatedAt):null;c.updatedAt=h&&!isNaN(h)?h:null;for(const g of Array.isArray(f.agents)?f.agents:[]){const x=g&&{...g,id:Vo(g.id)};if(!x||!r.has(x.id)||x.id!==g.id&&f.agents.some(v=>v&&v.id===x.id))continue;const m=x.status==="working"?"working":"idle",u=Number(x.progress);s.set(x.id,{status:m,task:typeof x.task=="string"&&x.task.trim()?x.task:Sd,progress:Number.isFinite(u)?Math.max(0,Math.min(1,u)):0,hasProgress:Number.isFinite(u),detail:typeof x.detail=="string"&&x.detail.trim()?x.detail.trim():null,source:x.source==="reported"?"reported":"inferred",reportedAt:x.reportedAt?new Date(x.reportedAt):null,lastActive:x.lastActive?new Date(x.lastActive):null})}const p=(Array.isArray(f.events)?f.events:[]).filter(g=>g&&r.has(Vo(g.agentId))&&g.text).map(g=>({ts:new Date(g.time),agentId:Vo(g.agentId),type:"log",message:String(g.text)})).filter(g=>!isNaN(g.ts)).sort((g,x)=>g.ts-x.ts).slice(-40);i.splice(0,i.length,...p)}return c}function Cr(n,t,e=[1,1]){const i=document.createElement("canvas");i.width=i.height=n,t(i.getContext("2d"),n);const s=new vn(i);return s.colorSpace=Pe,s.wrapS=s.wrapT=Li,s.repeat.set(...e),s.anisotropy=8,s}let bd=12345;const _e=()=>(bd=bd*16807%2147483647)/2147483647;function wd(n="#6b3f24",t="#3e2213",e="#8a5532"){return Cr(512,(i,s)=>{i.fillStyle=n,i.fillRect(0,0,s,s);for(let r=0;r<140;r++){const a=_e()*s,o=2+_e()*6,c=.004+_e()*.01;i.strokeStyle=_e()<.5?t:e,i.globalAlpha=.08+_e()*.22,i.lineWidth=.6+_e()*2.2,i.beginPath();for(let l=0;l<=s;l+=8)i.lineTo(l,a+Math.sin(l*c+r)*o+Math.sin(l*c*3.1)*o*.3);i.stroke()}i.globalAlpha=1})}function Xv(n){return Cr(1024,(t,e)=>{const i=t.createLinearGradient(0,0,e,e);i.addColorStop(0,"#1e1c3a"),i.addColorStop(1,"#191832"),t.fillStyle=i,t.fillRect(0,0,e,e);for(let s=0;s<2600;s++)t.fillStyle=`rgba(255,255,255,${_e()*.035})`,t.fillRect(_e()*e,_e()*e,2,2);for(let s=0;s<26;s++){t.strokeStyle=_e()<.7?"rgba(190,180,255,0.16)":"rgba(255,255,255,0.22)",t.lineWidth=.6+_e()*1.8,t.beginPath();let r=_e()*e,a=_e()*e;t.moveTo(r,a);for(let o=0;o<9;o++)r+=(_e()-.3)*160,a+=(_e()-.5)*120,t.lineTo(r,a);t.stroke()}t.strokeStyle="rgba(8,8,20,0.75)",t.lineWidth=3;for(const s of[0,e/2])t.beginPath(),t.moveTo(s,0),t.lineTo(s,e),t.stroke(),t.beginPath(),t.moveTo(0,s),t.lineTo(e,s),t.stroke()},n)}function Yv(){return Cr(512,(n,t)=>{n.fillStyle="#eceaf2",n.fillRect(0,0,t,t);for(let e=0;e<18;e++){n.strokeStyle=`rgba(120,115,150,${.1+_e()*.2})`,n.lineWidth=.5+_e()*1.5,n.beginPath();let i=_e()*t,s=_e()*t;n.moveTo(i,s);for(let r=0;r<7;r++)i+=(_e()-.4)*120,s+=(_e()-.5)*90,n.lineTo(i,s);n.stroke()}})}function tr(n,t=[4,4]){return Cr(256,(e,i)=>{e.fillStyle=n,e.fillRect(0,0,i,i);for(let s=0;s<i;s+=3)e.fillStyle=`rgba(0,0,0,${.05+_e()*.05})`,e.fillRect(0,s,i,1);for(let s=0;s<i;s+=3)e.fillStyle=`rgba(255,255,255,${.02+_e()*.04})`,e.fillRect(s,0,1,i)},t)}function qv(n=[10,6]){return Cr(256,(t,e)=>{t.fillStyle="#1d1d20",t.fillRect(0,0,e,e);for(let i=0;i<900;i++){const s=20+Math.floor(_e()*26);t.fillStyle=`rgba(${s},${s},${s+3},0.55)`,t.fillRect(_e()*e,_e()*e,2+_e()*3,2+_e()*3)}for(let i=0;i<160;i++)t.fillStyle=_e()<.6?"rgba(201,162,39,0.55)":"rgba(239,232,216,0.35)",t.fillRect(_e()*e,_e()*e,1+_e()*1.6,1+_e()*1.6);t.strokeStyle="rgba(0,0,0,0.55)",t.lineWidth=1.5,t.strokeRect(.75,.75,e-1.5,e-1.5)},n)}function $v(){const n=wd(),t=wd("#b08356","#7a5432","#cfa577");return{walnut:new lt({map:n,roughness:.42,metalness:0}),oak:new lt({map:t,roughness:.5}),floor:new lt({map:qv([10,6]),roughness:.4,metalness:.05,envMapIntensity:.9}),marbleFloor:new lt({map:Xv([7.5,4.5]),roughness:.34,metalness:.05,envMapIntensity:.8}),marbleWhite:new lt({map:Yv(),roughness:.15,metalness:0}),plinth:new ei({color:15986922,roughness:.32,clearcoat:.7,clearcoatRoughness:.25}),shell:new ei({color:16184302,roughness:.26,clearcoat:.9,clearcoatRoughness:.18,side:Ne}),bronze:new lt({color:14275787,roughness:.3,metalness:.55}),bullBronze:new lt({color:8015398,roughness:.36,metalness:1}),brass:new lt({color:13214247,roughness:.28,metalness:1}),blackMetal:new lt({color:1776420,roughness:.4,metalness:.7}),whiteMatte:new lt({color:15790070,roughness:.55}),ceramic:new lt({color:16052974,roughness:.22}),terracotta:new lt({color:11817770,roughness:.75}),graphite:new lt({color:1842218,roughness:.3,metalness:.6}),velvetPlum:new lt({map:tr("#4b2a6b"),roughness:.92}),velvetTeal:new lt({map:tr("#1f5560"),roughness:.92}),linen:new lt({map:tr("#d8cfc0"),roughness:.95}),leather:new lt({color:7027234,roughness:.45,metalness:.05}),rugIndigo:new lt({map:tr("#2b2a62",[8,8]),roughness:1}),rugSand:new lt({map:tr("#5a4b6e",[8,8]),roughness:1}),leaf:new lt({color:3112266,roughness:.55,side:Ne}),leaf2:new lt({color:4168282,roughness:.55,side:Ne}),glass:new ei({color:13623534,transparent:!0,opacity:.12,roughness:.05,metalness:0,envMapIntensity:.5,side:Ne,depthWrite:!1})}}function Kv(n){const t=document.createElement("canvas");t.width=1024,t.height=512;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#3b4f7e"),i.addColorStop(.4,"#8a93b8"),i.addColorStop(.5,"#ffc89a"),i.addColorStop(.55,"#7a6a72"),i.addColorStop(1,"#2a2622"),e.fillStyle=i,e.fillRect(0,0,1024,512);const s=(c,l,d,f)=>{const h=e.createRadialGradient(c,l,0,c,l,d);h.addColorStop(0,f),h.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=h,e.fillRect(c-d,l-d,d*2,d*2)};s(330,225,22,"rgba(255,240,220,0.4)"),s(330,240,200,"rgba(255,140,100,0.22)"),s(800,300,160,"rgba(255,170,90,0.35)"),s(600,330,120,"rgba(255,120,200,0.25)");const r=new vn(t);r.mapping=ya,r.colorSpace=Pe;const a=new Wl(n),o=a.fromEquirectangular(r).texture;return a.dispose(),o}const ua=160,er=-1.8;function Zv(n,t={}){const e=h=>new Tt(h),i={uTime:{value:0},uMoon:{value:new I(-62,12.5,-152)},uHorizonY:{value:.4},cTop:{value:e("#1a2747")},cMid:{value:e("#45507e")},cHor:{value:e("#f0a070")},cGlow:{value:e("#ffc08a")},cWater:{value:e("#0b1630")},cWater2:{value:e("#26365a")},cHaze:{value:e("#7a7096")},cHi:{value:e("#ffd2a0")}},s="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",r=new Zt(new Ve(ua,64,32),new Ke({side:hn,depthWrite:!1,uniforms:i,vertexShader:s,fragmentShader:`
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
        }`}));r.position.y=er,r.renderOrder=-10,n.add(r);const a=new Zt((()=>{const h=new zs;h.absarc(0,0,ua-.6,0,Math.PI*2,!1);const p=new kl,g=t.hole||{x0:-17,x1:22,z0:-11,z1:11};return p.moveTo(g.x0,-g.z1),p.lineTo(g.x1,-g.z1),p.lineTo(g.x1,-g.z0),p.lineTo(g.x0,-g.z0),p.lineTo(g.x0,-g.z1),h.holes.push(p),new yc(h,96)})(),new Ke({uniforms:{...i,uR:{value:ua-.6}},vertexShader:s,fragmentShader:`
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
        }`}));a.rotation.x=-Math.PI/2,a.position.y=er,n.add(a);const o=[],c=[],l=[e("#ffd27a"),e("#ff9ec7"),e("#ffe9b0"),e("#9ad7ff")];for(let h=0;h<260;h++){const p=qa.lerp(Math.PI*.95,Math.PI*1.32,Math.random()),g=ua-1.2,x=er+6.5+Math.pow(Math.random(),2.5)*8;o.push(Math.cos(p)*g,x,Math.sin(p)*g);const m=l[Math.random()*l.length|0].clone().multiplyScalar(1.4+Math.random());c.push(m.r,m.g,m.b)}const d=new Ae;d.setAttribute("position",new jt(o,3)),d.setAttribute("color",new jt(c,3)),n.add(new yp(d,new af({size:2.2,sizeAttenuation:!1,vertexColors:!0,depthWrite:!1})));const f=[];for(let h=0;h<5;h++){const p=new Pt,g=new Zt(new An(.9,.18,.3),new te({color:657944})),x=new Zt(new Ve(.09,8,6),new te({color:new Tt(h%2?"#ff4d6d":"#ffe8a3").multiplyScalar(3)}));x.position.y=.35,p.add(g,x),p.scale.setScalar(2.2);const m=Math.PI*(1.05+h*.12),u=40+h*9;p.position.set(Math.cos(m)*u,er+.05,Math.sin(m)*u),p.userData={ang:m,rad:u,speed:.004+h*.0015,light:x},n.add(p),f.push(p)}return{update(h){i.uTime.value=h,f.forEach((p,g)=>{const x=p.userData.ang+h*p.userData.speed;p.position.x=Math.cos(x)*p.userData.rad,p.position.z=Math.sin(x)*p.userData.rad,p.position.y=er+.05+Math.sin(h*1.3+g)*.04,p.userData.light.visible=Math.sin(h*2.2+g*1.7)>-.6})}}}const Ed=["#ffb703","#fb8500","#ff006e","#c77dff","#3a86ff","#ffd166","#06d6a0"].map(n=>new Tt(n));function Wo(n,t,e,i,s){const r=n.distanceTo(t),a=Math.max(2,Math.round(r/e)),o=[];for(let c=0;c<=a;c++){const l=c/a,d=n.clone().lerp(t,l),f=l*r%i/i;d.y-=Math.sin(f*Math.PI)*s,o.push(d)}return o}function Xo(n){const t=[];function e(p){const g=p.flatMap(([_,M,S,A])=>Wo(_,M,.32,A||2.5,S)),x=new Fl(new Ve(.055,8,6),new te({color:new Tt(1,1,1).multiplyScalar(2.4)}),g.length),m=new he,u=[];g.forEach((_,M)=>{m.makeTranslation(_.x,_.y,_.z),x.setMatrixAt(M,m);const S=Ed[M%Ed.length];u.push(S),x.setColorAt(M,S)}),n.add(x),p.forEach(([_,M,S,A])=>{const y=new Ae().setFromPoints(Wo(_,M,.15,A||2.5,S));n.add(new vp(y,new rf({color:3814246})))});let v=0;const b=new Tt;t.push(_=>{if(!(_-v<.12)){v=_;for(let M=0;M<u.length;M++){const S=.35+.65*(.5+.5*Math.sin(_*2.4+M*1.7));x.setColorAt(M,b.copy(u[M]).multiplyScalar(S))}x.instanceColor.needsUpdate=!0}})}function i(p){const g=p.flatMap(([v,b,_,M])=>Wo(v,b,.085,M||1.25,_)),x=new Fl(new Cs(.06,0),new lt({roughness:.8,emissive:16742912,emissiveIntensity:.35}),g.length),m=new he,u=[new Tt("#ff9f1c"),new Tt("#ffbf00"),new Tt("#ff7b00")];g.forEach((v,b)=>{m.makeTranslation(v.x,v.y,v.z),x.setMatrixAt(b,m),x.setColorAt(b,u[Math.floor(b/3)%u.length])}),n.add(x)}const s=[];function r(p,g,x,m,u=1){const v=new Pt,b=new Tt(m),_=new lt({color:b,emissive:b,emissiveIntensity:1.6,roughness:.6,side:Ne}),M=new Zt(new gi(.34,.36,8,1,!0),_);M.position.y=.18;const S=new Zt(new gi(.34,.36,8,1,!0),_);S.rotation.x=Math.PI,S.position.y=-.18;const A=new Zt(new gn(.35,.35,.08,8),new lt({color:16765286,emissive:16758531,emissiveIntensity:.8}));v.add(M,S,A);for(let R=0;R<6;R++){const L=R/6*Math.PI*2,D=new Zt(new An(.02,.5,.02),_);D.position.set(Math.cos(L)*.12,-.6,Math.sin(L)*.12),v.add(D)}const y=7.2-g,E=new Zt(new gn(.008,.008,y,4),new te({color:5591162}));E.position.y=.36+y/2-.36,v.add(E),v.scale.setScalar(u),v.position.set(p,g,x),n.add(v),s.push(v)}t.push(p=>s.forEach((g,x)=>{g.rotation.y=p*.3+x,g.rotation.z=Math.sin(p*.8+x)*.04}));const a=[],o=new lt({color:12730636,roughness:.8,emissive:8138002,emissiveIntensity:.3}),c=new te({color:new Tt(3.2,1.9,.5)}),l=new Ve(.13,14,8,0,Math.PI*2,Math.PI/2,Math.PI/2),d=new gi(.035,.13,8);function f(p,g,x=0){const m=new Zt(l,o);m.scale.y=.55,m.position.set(p,x+.075,g);const u=new Zt(d,c);u.position.set(p,x+.13,g),n.add(m,u),a.push(u)}t.push(p=>a.forEach((g,x)=>{const m=.85+Math.sin(p*13+x*2.1)*.12+Math.sin(p*7.3+x)*.08;g.scale.set(1,m,1)}));function h(p,g,x,m=0){const v=document.createElement("canvas");v.width=v.height=512;const b=v.getContext("2d"),_=[["#ff006e","#ffbe0b","#3a86ff","#8338ec","#fb5607"],["#06d6a0","#ffd166","#ef476f","#118ab2","#f78c6b"],["#c77dff","#ff9e00","#00bbf9","#f15bb5","#fee440"]][m%3];b.translate(512/2,512/2);const M=[[.92,24,.09],[.74,16,.12],[.55,12,.13],[.36,8,.14]];b.fillStyle="rgba(255,255,255,0.9)",b.beginPath(),b.arc(0,0,512*.48,0,Math.PI*2),b.fill(),b.fillStyle=_[4],b.beginPath(),b.arc(0,0,512*.465,0,Math.PI*2),b.fill(),M.forEach(([R,L,D],F)=>{b.fillStyle=_[F%4],b.beginPath(),b.arc(0,0,512*.5*R,0,Math.PI*2),b.fill();for(let P=0;P<L;P++)b.save(),b.rotate(P/L*Math.PI*2+F*.2),b.fillStyle=_[(F+1)%4],b.beginPath(),b.ellipse(0,-512*.5*(R-D*.6),512*D*.18,512*D*.42,0,0,Math.PI*2),b.fill(),b.fillStyle="#ffffff",b.beginPath(),b.arc(0,-512*.5*(R-.02),4,0,Math.PI*2),b.fill(),b.restore()}),b.fillStyle="#ffffff",b.beginPath(),b.arc(0,0,512*.07,0,Math.PI*2),b.fill(),b.fillStyle=_[0],b.beginPath(),b.arc(0,0,512*.045,0,Math.PI*2),b.fill();const S=new vn(v);S.colorSpace=Pe;const A=new lt({map:S,transparent:!0,roughness:.9,emissive:16777215,emissiveMap:S,emissiveIntensity:.35}),y=new Zt(new ti(x,64),A);y.rotation.x=-Math.PI/2,y.position.set(p,.011,g),y.receiveShadow=!0,n.add(y);const E=Math.round(x*5);for(let R=0;R<E;R++){const L=R/E*Math.PI*2;f(p+Math.cos(L)*(x+.28),g+Math.sin(L)*(x+.28))}}return{stringLights:e,garlands:i,lantern:r,diya:f,rangoli:h,update:p=>t.forEach(g=>g(p))}}const nr=new I;function Pn(n,t,e,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;nr.copy(t),nr[i]=0,nr.normalize();const l=.5*a/(a+o),d=1-nr.angleTo(n)/c;return Math.sign(nr[e])===1?d*l:o/(a+o)+l+l*(1-d)}class Ac extends An{constructor(t=1,e=1,i=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new I,l=new I,d=new I(t,e,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,g=f.length/6,x=new I,m=.5/a;for(let u=0,v=0;u<f.length;u+=3,v+=2)switch(c.fromArray(f,u),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[u+0]=d.x*Math.sign(c.x)+l.x*r,f[u+1]=d.y*Math.sign(c.y)+l.y*r,f[u+2]=d.z*Math.sign(c.z)+l.z*r,h[u+0]=l.x,h[u+1]=l.y,h[u+2]=l.z,Math.floor(u/g)){case 0:x.set(1,0,0),p[v+0]=Pn(x,l,"z","y",r,i),p[v+1]=1-Pn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),p[v+0]=1-Pn(x,l,"z","y",r,i),p[v+1]=1-Pn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),p[v+0]=1-Pn(x,l,"x","z",r,t),p[v+1]=Pn(x,l,"z","x",r,i);break;case 3:x.set(0,-1,0),p[v+0]=1-Pn(x,l,"x","z",r,t),p[v+1]=1-Pn(x,l,"z","x",r,i);break;case 4:x.set(0,0,1),p[v+0]=1-Pn(x,l,"x","y",r,t),p[v+1]=1-Pn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),p[v+0]=Pn(x,l,"x","y",r,t),p[v+1]=1-Pn(x,l,"y","x",r,e);break}}static fromJSON(t){return new Ac(t.width,t.height,t.depth,t.segments,t.radius)}}const ce=15,yt=9,an=7,Yi=7.6,ve={M:null},ne=(n,t=3)=>new te({color:new Tt(n).multiplyScalar(t)});function Et(n,t,{x:e=0,y:i=0,z:s=0,cast:r=!0,receive:a=!0}={}){const o=new Zt(n,t);return o.position.set(e,i,s),o.castShadow=r,o.receiveShadow=a,o}const $=(n,t,e,i,s)=>Et(new An(n,t,e),i,s),Ct=(n,t,e,i,s,r)=>Et(new Ac(n,t,e,3,i),s,r),gt=(n,t,e,i,s,r=24)=>Et(new gn(n,t,e,r),i,s);function Lf(n,t="rgba(0,0,0,0)"){const e=document.createElement("canvas");e.width=e.height=128;const i=e.getContext("2d"),s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,n),s.addColorStop(1,t),i.fillStyle=s,i.fillRect(0,0,128,128);const r=new vn(e);return r.colorSpace=Pe,r}function Tn(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new vn(i);return s.colorSpace=Pe,s.anisotropy=8,s}function Dn(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function En(n,t,e,{pxPerUnit:i=200,emissive:s=.9,frame:r=!0}={}){const a=Tn(Math.round(n*i),Math.round(t*i),e),o=new Pt,c=new Zt(new ee(n,t),new te({map:a,color:new Tt(s,s,s)}));return c.position.z=.03,o.add(c),r&&o.add(Ct(n+.1,t+.1,.05,.02,ve.M.graphite,{})),o}const Yo=n=>String(n).padStart(2,"0"),Ba=n=>`${Yo(n.getHours())}:${Yo(n.getMinutes())}:${Yo(n.getSeconds())}`;let Nt;const Jv=n=>Nt=n;function De(n,t,e,i=1,s=0){const r=new Pt;if(s===0){r.add(gt(.34,.26,.6,Nt.ceramic,{y:.3})),r.add(gt(.31,.31,.03,new lt({color:2825492}),{y:.59}));for(let a=0;a<12;a++){const o=Et(new gi(.06,1+Math.random()*.5,5),a%2?Nt.leaf:Nt.leaf2),c=a/12*Math.PI*2,l=.2+Math.random()*.45;o.position.set(Math.cos(c)*.1,1.05,Math.sin(c)*.1),o.rotation.set(Math.sin(c)*l,0,-Math.cos(c)*l),r.add(o)}}else{r.add(gt(.36,.3,.55,Nt.terracotta,{y:.275})),r.add(gt(.025,.035,1.6,new lt({color:5980208}),{y:1.2}));const a=new Ve(.2,10,8);for(let o=0;o<26;o++){const c=Et(a,o%3?Nt.leaf:Nt.leaf2),l=Math.random()*Math.PI*2,d=1.2+Math.random()*1,f=.12+Math.random()*.32;c.position.set(Math.cos(l)*f,d,Math.sin(l)*f),c.scale.set(1,1.4,.25),c.rotation.set(Math.random(),l,Math.random()*.6),r.add(c)}}r.scale.setScalar(i),r.position.set(t,0,e),n.add(r)}function Rc(n,t,e,i=0){const s=new Pt,r=2.4,a=3,o=.55;s.add($(.06,a,o,Nt.walnut,{x:-r/2,y:a/2})),s.add($(.06,a,o,Nt.walnut,{x:r/2,y:a/2})),s.add($(r,.05,o,Nt.walnut,{y:a})),s.add($(r,a,.03,Nt.graphite,{y:a/2,z:-o/2}));const c=[10166822,13264642,693142,24435,15637248,6966419,15325350,4014171,12271107];for(let l=0;l<4;l++){const d=.1+l*(a/4);s.add($(r,.04,o,Nt.walnut,{y:d}));let f=-r/2+.1;const h=l===1?.1:r/2-.15;for(;f<h;){const p=.06+Math.random()*.07,g=.4+Math.random()*.25,x=$(p,g,.38,new lt({color:c[Math.random()*c.length|0],roughness:.7}),{x:f+p/2,y:d+.02+g/2});s.add(x),f+=p+.012}l===1&&(s.add(gt(.08,.06,.3,Nt.ceramic,{x:.5,y:d+.17})),s.add($(.36,.28,.03,Nt.brass,{x:.9,y:d+.17,z:-.1})))}s.add(gt(.12,.1,.18,Nt.terracotta,{x:-.6,y:a+.11}));for(let l=0;l<5;l++){const d=Et(new Ve(.1,8,6),Nt.leaf2,{x:-.6+(Math.random()-.5)*.2,y:a+.3+Math.random()*.1,z:(Math.random()-.5)*.15});d.scale.set(1,.6,1),s.add(d)}s.position.set(t,0,e),s.rotation.y=i,n.add(s)}function Cc(n,t,e,i,s,r=2.4){const a=new Pt;a.add(Ct(r,.42,.95,.08,s,{y:.33})),a.add(Ct(r,.62,.22,.08,s,{y:.72,z:-.37}));for(const l of[-1,1])a.add(Ct(.22,.55,.95,.08,s,{x:l*(r/2-.11),y:.5}));for(const l of[-1,1])a.add(gt(.025,.02,.12,Nt.brass,{x:l*(r/2-.15),y:.06,z:.35},8),gt(.025,.02,.12,Nt.brass,{x:l*(r/2-.15),y:.06,z:-.35},8));const o=[15320170,16032353,15167313,14208960],c=Math.max(2,Math.round(r/1));for(let l=0;l<c;l++){const d=Ct(.42,.4,.14,.06,new lt({color:o[l%o.length],roughness:.95}),{x:-r/2+.45+l*((r-.9)/(c-1)),y:.72,z:-.2});d.rotation.x=-.2,d.rotation.z=(l%2?1:-1)*.08,a.add(d)}a.position.set(t,0,e),a.rotation.y=i,n.add(a)}function Os(n,t,e,i,s){const r=new Pt;r.add(Ct(.85,.38,.85,.08,s,{y:.32})),r.add(Ct(.85,.6,.18,.08,s,{y:.7,z:-.34}));for(const a of[-1,1])r.add(Ct(.16,.42,.85,.06,s,{x:a*.42,y:.5}));r.add(Ct(.38,.36,.12,.05,new lt({color:15320170,roughness:.95}),{y:.68,z:-.2})),r.position.set(t,0,e),r.rotation.y=i,n.add(r)}function br(n,t,e,i=16763274){const s=new Pt;s.add(gt(.22,.22,.03,Nt.blackMetal,{y:.015})),s.add(gt(.015,.015,1.7,Nt.brass,{y:.86},8));const r=gt(.18,.26,.3,new lt({color:16115400,emissive:i,emissiveIntensity:.55,side:Ne}),{y:1.75});s.add(r),s.position.set(t,0,e),n.add(s)}function Ji(n,t,e,i,s,r,a=!1){const o=a?new ti(i,64):new ee(i,s),c=Et(o,r,{x:t,y:.006,z:e,cast:!1});c.rotation.x=-Math.PI/2,n.add(c);const l=a?new Ka(i-.06,i,64):null;if(l){const d=Et(l,new lt({color:13214247,roughness:.6}),{x:t,y:.008,z:e,cast:!1});d.rotation.x=-Math.PI/2,n.add(d)}}function to(n,t,e,i=.75){const s=new Pt;s.add(gt(i,i,.05,Nt.marbleWhite,{y:.45},48)),s.add(gt(.06,.06,.42,Nt.brass,{y:.22},12)),s.add(gt(.35,.35,.02,Nt.brass,{y:.01},32)),s.add(gt(.06,.05,.1,Nt.ceramic,{x:.2,y:.53,z:.1},12)),s.add(gt(.06,.05,.1,new lt({color:15167313,roughness:.3}),{x:.36,y:.53,z:-.05},12)),s.add($(.42,.05,.3,new lt({color:2508371,roughness:.7}),{x:-.2,y:.5,z:-.05})),s.add($(.36,.04,.26,new lt({color:15320170,roughness:.7}),{x:-.18,y:.545,z:-.03})),s.position.set(t,0,e),n.add(s)}function Qv(n,t,e,i=0){const s=document.createElement("canvas");s.width=768,s.height=512;const r=s.getContext("2d");r.fillStyle="#f2eee6",r.fillRect(0,0,768,512),[["#fde68a","Ship office v2"],["#a7f3d0","NIFTY levels"],["#fbcfe8",`Chair v3
feedback`],["#bfdbfe",`Post Fri
9:00 AM`],["#ddd6fe",`India-first
GTM`],["#fed7aa",`Study
built-in`],["#fde68a",`Diwali
campaign`],["#a7f3d0",`Weekly
review`]].forEach(([d,f],h)=>{const p=40+h%4*180,g=40+Math.floor(h/4)*230;r.save(),r.translate(p+75,g+80),r.rotate((Math.random()-.5)*.12),r.translate(-75,-80),r.fillStyle="rgba(0,0,0,0.12)",r.fillRect(6,8,150,160),r.fillStyle=d,r.fillRect(0,0,150,160),r.fillStyle="#ef4444",r.beginPath(),r.arc(75,12,7,0,Math.PI*2),r.fill(),r.fillStyle="#1f2937",r.font="bold 24px system-ui, sans-serif",f.split(`
`).forEach((x,m)=>r.fillText(x,12,60+m*30)),r.restore()});const o=new vn(s);o.colorSpace=Pe,o.anisotropy=8;const c=new Pt,l=Et(new ee(2.6,1.73),new lt({map:o,roughness:.8,emissive:16777215,emissiveMap:o,emissiveIntensity:.22}),{y:2.1,z:.04});c.add(l),c.add($(2.7,1.83,.06,Nt.oak,{y:2.1}));for(const d of[-1,1]){const f=$(.06,3,.06,Nt.oak,{x:d*1.1,y:1.45,z:-.1});f.rotation.x=.05,c.add(f)}c.add($(2.6,.05,.14,Nt.oak,{y:1.2,z:.06})),c.position.set(t,0,e),c.rotation.y=i,n.add(c)}const Ni=(n,t,e,i,s=0,r=0)=>(t.position.set(e,r,i),t.rotation.y=s,n.add(t),t),ze=(n,t={})=>new lt({color:n,roughness:.6,...t});function jv(n,t,e,i,s=Nt.leather){const r=new Pt;r.add(Ct(.95,.42,1,.1,s,{y:.36}));const a=Ct(.95,.85,.24,.1,s,{y:.85,z:-.5});a.rotation.x=-.35,r.add(a);const o=Ct(.9,.12,.5,.05,s,{y:.32,z:.72});o.rotation.x=.25,r.add(o);for(const c of[-1,1])r.add(Ct(.16,.5,.95,.06,s,{x:c*.52,y:.5}));return r.add($(.8,.06,.8,Nt.blackMetal,{y:.06})),r.add(Ct(.5,.2,.1,.05,ze(15320170,{roughness:.95}),{y:1.12,z:-.6})),Ni(n,r,t,e,i)}function Sn(n,t,e,i=0,s=2042167){const r=new Pt,a=ze(s,{roughness:.8});r.add(Ct(.52,.09,.5,.04,a,{y:.48}));const o=Ct(.48,.62,.07,.04,a,{y:.86,z:-.24});o.rotation.x=-.1,r.add(o),r.add(gt(.03,.03,.36,Nt.blackMetal,{y:.27},8));for(let c=0;c<5;c++){const l=c/5*Math.PI*2,d=$(.3,.025,.04,Nt.blackMetal,{x:Math.cos(l)*.15,y:.06,z:Math.sin(l)*.15});d.rotation.y=-l,r.add(d)}for(const c of[-1,1])r.add($(.04,.2,.3,Nt.blackMetal,{x:c*.27,y:.6}));return Ni(n,r,t,e,i)}function ty(n,t,e,i=0){const s=new Pt;s.add(Ct(3.4,1,.7,.03,Nt.walnut,{y:.5})),s.add($(3.5,.05,.8,Nt.marbleWhite,{y:1.02})),s.add($(3.3,.03,.03,ne("#ffb36b",1.6),{y:.95,z:.37,cast:!1})),s.add(Ct(.7,.45,.45,.04,ze(12633292,{metalness:.9,roughness:.25}),{x:-1,y:1.27})),s.add(gt(.05,.05,.1,Nt.blackMetal,{x:-1.15,y:1,z:.2},10));for(let a=0;a<4;a++)s.add(gt(.05,.045,.1,Nt.ceramic,{x:.2+a*.16,y:1.1,z:.1},12));s.add(gt(.18,.18,.12,ze(15320170),{x:1.1,y:1.1},18));for(let a=0;a<5;a++)s.add(Et(new Ve(.05,8,6),ze(11887901),{x:1.02+a%3*.08,y:1.19,z:-.05+Math.floor(a/3)*.1}));const r=En(1.8,.9,(a,o,c)=>{a.fillStyle="#14121f",a.fillRect(0,0,o,c),a.fillStyle="#ffd7a8",a.font="700 54px system-ui",a.fillText("COFFEE BAR",30,70),a.font="400 34px system-ui",a.fillStyle="#e9e7ff",["Espresso · Cappuccino","Masala chai · Cold brew","Electrolyte lemonade"].forEach((l,d)=>a.fillText(l,30,130+d*44))});r.position.set(0,2.2,-.36),s.add(r);for(let a=0;a<3;a++){const o=new Pt;o.add(gt(.2,.2,.06,Nt.leather,{y:.78},18)),o.add(gt(.025,.025,.75,Nt.brass,{y:.39},8)),o.add(gt(.18,.18,.02,Nt.brass,{y:.01},18)),o.position.set(-1+a,0,.85),s.add(o)}return Ni(n,s,t,e,i)}function ey(n,t,e,i=0){const s=new Pt,r=5.2,a=5.4,o=3.2,c=Tn(1024,640,(m,u,v)=>{const b=m.createLinearGradient(0,0,0,v*.55);b.addColorStop(0,"#5aa9e6"),b.addColorStop(1,"#bde0fe"),m.fillStyle=b,m.fillRect(0,0,u,v),m.fillStyle="#2d6a4f",m.beginPath(),m.moveTo(0,v*.55),m.quadraticCurveTo(u*.5,v*.42,u,v*.55),m.lineTo(u,v),m.lineTo(0,v),m.fill(),m.fillStyle="#52b788",m.beginPath(),m.moveTo(u*.3,v),m.quadraticCurveTo(u*.5,v*.5,u*.58,v*.52),m.quadraticCurveTo(u*.62,v*.6,u*.75,v),m.fill(),m.fillStyle="#95d5b2",m.beginPath(),m.ellipse(u*.6,v*.53,60,14,0,0,Math.PI*2),m.fill(),m.strokeStyle="#fff",m.lineWidth=3,m.beginPath(),m.moveTo(u*.6,v*.53),m.lineTo(u*.6,v*.4),m.stroke(),m.fillStyle="#ef4444",m.beginPath(),m.moveTo(u*.6,v*.4),m.lineTo(u*.64,v*.42),m.lineTo(u*.6,v*.44),m.fill(),m.fillStyle="rgba(0,0,0,0.55)",m.fillRect(20,20,330,150),m.fillStyle="#fff",m.font="700 34px system-ui",m.fillText("HOLE 7 · PAR 4",40,64),m.font="400 28px system-ui",m.fillText("Carry 212 m · Speed 148 km/h",40,104),m.fillText("Spin 2650 rpm",40,140)}),l=new Zt(new ee(r-.3,o-.3),new te({map:c,color:new Tt(.95,.95,.95)}));l.position.set(0,o/2,-a/2+.05),s.add(l);const d=ze(1776424,{roughness:.5});s.add($(r,o,.06,d,{y:o/2,z:-a/2}));const f=new lt({color:1118498,transparent:!0,opacity:.55,roughness:1,side:Ne});for(const m of[-1,1]){const u=Et(new ee(a,o),f,{x:m*r/2,y:o/2,cast:!1});u.rotation.y=Math.PI/2,s.add(u),s.add($(.06,o,.06,Nt.blackMetal,{x:m*r/2,y:o/2,z:a/2}))}s.add($(r,.06,.06,Nt.blackMetal,{y:o,z:a/2})),s.add($(r,.06,a,d,{y:o+.03}));const h=Et(new ee(r-.2,a-.4),ze(3112266,{roughness:1}),{y:.01,cast:!1});h.rotation.x=-Math.PI/2,s.add(h);const p=Et(new ee(1.4,1.6),ze(4231532,{roughness:1}),{y:.02,z:1.2,cast:!1});p.rotation.x=-Math.PI/2,s.add(p),s.add(gt(.012,.012,.06,Nt.whiteMatte,{y:.05,z:1},6)),s.add(Et(new Ve(.04,12,10),Nt.ceramic,{y:.1,z:1}));const g=new Pt;g.add(gt(.012,.012,1.1,Nt.blackMetal,{y:.55},6)),g.add($(.12,.05,.05,Nt.brass,{x:.05,y:.02})),g.position.set(.9,0,1.9),g.rotation.z=.25,s.add(g),s.add(Ct(.4,.15,.25,.03,Nt.graphite,{x:-.8,y:.08,z:1.3})),s.add($(r,.04,.04,ne("#22c55e",1.6),{y:.03,z:a/2,cast:!1}));const x=En(2,.45,(m,u,v)=>{m.fillStyle="#0b2e1f",m.fillRect(0,0,u,v),m.fillStyle="#86efac",m.font="800 54px system-ui",m.textAlign="center",m.fillText("⛳ GOLF SIMULATOR",u/2,64)});return x.position.set(0,o+.4,a/2),s.add(x),Ni(n,s,t,e,i)}function ny(n,t,e,i=0){const s=new Pt,r=En(5.2,.6,(h,p,g)=>{h.fillStyle="#121022",h.fillRect(0,0,p,g),h.fillStyle="#fde68a",h.font="800 64px system-ui",h.textAlign="center",h.fillText("BOT FUEL BAR · OIL · ELECTRICITY BOOST · ELECTROLYTES",p/2,82)},{pxPerUnit:240});r.position.set(0,2.75,-.6),s.add(r);const a=new Pt;a.add(Ct(1.2,1.7,.7,.05,ze(8138002,{roughness:.4}),{y:.85})),a.add($(.9,.5,.02,ne("#f59e0b",1.2),{y:1.25,z:.36,cast:!1}));const o=ze(15381256,{metalness:.7,roughness:.35});for(let h=0;h<6;h++)a.add(Ct(.22,.3,.14,.03,o,{x:-.36+h%3*.36,y:.2+Math.floor(h/3)*.34,z:.45}));const c=gt(.02,.02,.8,Nt.blackMetal,{x:.65,y:1,z:.1},6);c.rotation.z=.3,a.add(c),a.position.x=-1.9,s.add(a);const l=h=>{const p=new Pt;return p.add(gt(.28,.32,1.6,ze(1976635,{metalness:.6,roughness:.3}),{y:.8},20)),p.add(Et(new Zi(.3,.03,8,32),ne("#22d3ee",2.2),{y:1.3,cast:!1})),p.add(Et(new Zi(.3,.03,8,32),ne("#22d3ee",2.2),{y:.8,cast:!1})),p.children.slice(-2).forEach(g=>g.rotation.x=Math.PI/2),p.add(gt(.05,.05,.12,ne("#facc15",2),{y:1.65},10)),p.position.x=h,p};s.add(l(-.25),l(.45));const d=new Pt;d.add(Ct(1,1.9,.7,.05,ze(15067115,{roughness:.3}),{y:.95})),d.add($(.85,1.5,.02,new lt({color:10147839,transparent:!0,opacity:.35,roughness:.1}),{y:1.05,z:.36,cast:!1}));const f=[2282478,16020150,10741301,16486972];for(let h=0;h<3;h++)for(let p=0;p<5;p++)d.add(gt(.05,.05,.26,new lt({color:f[(p+h)%4],emissive:f[(p+h)%4],emissiveIntensity:.4}),{x:-.3+p*.15,y:.55+h*.45,z:.2},10));return d.position.x=1.8,s.add(d),Ni(n,s,t,e,i)}function Pc(n,t,e,i,s=6.6,r=15723234){const a=ze(r,{roughness:1});for(let o=t;o<=e;o+=.9)n.add($(.06,.7,3.2,a,{x:o,y:s,z:i,cast:!1})),n.add(gt(.006,.006,7-s-.35,Nt.blackMetal,{x:o,y:s+.35+(7-s-.35)/2,z:i},4))}function Df(n,t,e,i,s=0,r=6,a=3){const o=new Pt,c=[15327958,13148794,16118250,10251077,14273461],l=new gn(.3,.3,.06,6);for(let d=0;d<a;d++)for(let f=0;f<r;f++){const h=Et(l,ze(c[(d*3+f)%c.length],{roughness:1}),{x:f*.54+d%2*.27,y:d*.47,cast:!1});h.rotation.x=Math.PI/2,o.add(h)}return o.position.set(t,e,i),o.rotation.y=s,n.add(o),o}function wr(n,t,e,i,s=0,r=1.4,a=1,o=0){const c=[["#ff006e","#ffbe0b","#3a86ff","#1b1b3a"],["#06d6a0","#118ab2","#ffd166","#0b132b"],["#f15bb5","#9b5de5","#00bbf9","#14102a"]][o%3],l=Tn(512,Math.round(512*a/r),(f,h,p)=>{f.fillStyle=c[3],f.fillRect(0,0,h,p);for(let g=0;g<7;g++)f.fillStyle=c[g%3],f.globalAlpha=.85,f.beginPath(),f.arc((g*97+o*51)%h,(g*61+o*37)%p,40+g*23%90,0,Math.PI*2),f.fill();f.globalAlpha=1,f.strokeStyle="#ffffff",f.lineWidth=6,f.beginPath(),f.moveTo(0,p*.7),f.bezierCurveTo(h*.3,p*.2,h*.7,p,h,p*.3),f.stroke()}),d=new Pt;return d.add($(r+.1,a+.1,.05,Nt.brass,{})),d.add(Et(new ee(r,a),new lt({map:l,roughness:.7,emissive:16777215,emissiveMap:l,emissiveIntensity:.2}),{z:.03,cast:!1})),d.position.set(t,e,i),d.rotation.y=s,n.add(d),d}function iy(n,t,e,i=0){const s=new Pt,r=Tn(768,512,(d,f,h)=>{d.fillStyle="#123a73",d.fillRect(0,0,f,h),d.strokeStyle="rgba(255,255,255,0.12)",d.lineWidth=1;for(let p=0;p<f;p+=24)d.beginPath(),d.moveTo(p,0),d.lineTo(p,h),d.stroke();for(let p=0;p<h;p+=24)d.beginPath(),d.moveTo(0,p),d.lineTo(f,p),d.stroke();d.strokeStyle="#e0f2fe",d.lineWidth=4,d.strokeRect(120,90,420,300),d.strokeRect(120,90,200,160),d.strokeRect(320,250,220,140),d.beginPath(),d.arc(320,250,60,Math.PI,Math.PI*1.5),d.stroke(),d.font="600 22px ui-monospace",d.fillStyle="#e0f2fe",d.fillText("LIVING 5.4 × 4.2",140,180),d.fillText("STUDY",360,320),d.fillText("GROUND FLOOR PLAN · 1:100",120,450)}),a=Et(new ee(1.8,1.2),new lt({map:r,roughness:.8,emissive:16777215,emissiveMap:r,emissiveIntensity:.25}),{y:1.05});a.rotation.x=-Math.PI/2+.45,s.add(a);const o=$(1.9,.04,1.3,Nt.oak,{y:1.02});o.rotation.x=.45,s.add(o);for(const d of[-1,1]){const f=$(.05,1,.05,Nt.blackMetal,{x:d*.8,y:.5,z:-.3});s.add(f),s.add($(.05,.75,.05,Nt.blackMetal,{x:d*.8,y:.37,z:.35}))}const c=$(1.6,.01,.06,Nt.whiteMatte,{y:1.1,z:.1});c.rotation.x=.45,s.add(c);const l=gt(.05,.12,.12,ze(1120295,{emissive:16773569,emissiveIntensity:.5}),{x:.9,y:1.7,z:-.4},14);s.add(l),s.add(gt(.01,.01,.8,Nt.brass,{x:.9,y:1.3,z:-.45},6));for(let d=0;d<4;d++){const f=gt(.05,.05,.8,ze(d%2?14742270:16317180),{x:-1.2,y:.4+d*.02,z:-.3+d*.12},10);f.rotation.x=.2,s.add(f)}return Ni(n,s,t,e,i)}function sy(n,t,e){const i=new Pt;i.add($(1.2,.8,1.2,Nt.whiteMatte,{y:.4}));const s=ze(16317180,{roughness:.4});i.add($(.9,.02,.9,ze(8843180),{y:.81})),i.add($(.5,.22,.4,s,{x:-.1,y:.93,z:-.1})),i.add($(.3,.16,.3,s,{x:.22,y:.9,z:.15})),i.add($(.52,.02,.42,ze(9741240),{x:-.1,y:1.05,z:-.1})),i.add($(.2,.01,.12,new lt({color:3718648,transparent:!0,opacity:.7}),{x:.25,y:.83,z:-.25}));for(let a=0;a<4;a++)i.add(Et(new Ve(.05,8,6),Nt.leaf2,{x:-.38+a*.25,y:.88,z:.38}));const r=$(1,.5,1,new ei({color:16777215,transparent:!0,opacity:.12,roughness:.05}),{y:1.06,cast:!1});return i.add(r),i.position.set(t,0,e),n.add(i),i}function ry(n,t,e){const i=new Pt;i.add(gt(.5,.5,.5,Nt.whiteMatte,{y:.25},24));const s=Ct(.5,.06,.5,.03,Nt.walnut,{y:.78});i.add(s);const r=Ct(.5,.42,.05,.03,Nt.walnut,{y:1.05,z:-.22});r.rotation.x=-.15,i.add(r);for(const a of[-1,1])for(const o of[-1,1])i.add(gt(.02,.015,.28,Nt.walnut,{x:a*.2,y:.62,z:o*.2},6));return i.position.set(t,0,e),n.add(i),i}function ay(n,t,e){const i=new Pt;i.add(gt(.5,.5,.5,Nt.whiteMatte,{y:.25},24)),i.add(gt(.3,.22,.2,Nt.terracotta,{y:.6},16)),i.add(gt(.03,.04,.35,ze(5980208),{y:.85},6));for(let s=0;s<6;s++){const r=Et(new Ve(.16,10,8),s%2?Nt.leaf:Nt.leaf2,{x:Math.cos(s)*.15,y:1.05+s%3*.05,z:Math.sin(s)*.15});r.scale.set(1,.55,1),i.add(r)}return i.position.set(t,0,e),n.add(i),i}function Aa(n,t,e,i=1.1){const s=new Pt;return s.add(gt(i,i,.05,Nt.oak,{y:.74},40)),s.add(gt(.06,.08,.72,Nt.blackMetal,{y:.37},12)),s.add(gt(.4,.4,.02,Nt.blackMetal,{y:.01},24)),s.position.set(t,0,e),n.add(s),s}function Td(n,t,e,i,s,r,a=0){const o=new Pt;o.add(Ct(i,.06,s,.03,Nt.walnut,{y:.75}));for(const l of[-1,1])o.add($(.08,.72,s*.6,Nt.blackMetal,{x:l*(i/2-.4),y:.36}));const c=Math.floor((r-(r>6?2:0))/2);for(let l=0;l<c;l++){const d=-i/2+i/(c+1)*(l+1);Sn(o,d,-s/2-.45,0),Sn(o,d,s/2+.45,Math.PI)}return r>6&&(Sn(o,-i/2-.5,0,Math.PI/2),Sn(o,i/2+.5,0,-Math.PI/2)),Ni(n,o,t,e,a)}function bs(n,t,e=3,{frame:i=Nt.bronze,tint:s}={}){const r=s?new ei({color:s,transparent:!0,opacity:.16,roughness:.05,depthWrite:!1,side:Ne}):Nt.glass;for(const[a,o,c,l]of t){const d=Math.hypot(c-a,l-o),f=Math.atan2(-(l-o),c-a),h=new Pt;h.position.set(a,0,o),h.rotation.y=f;const p=Et(new ee(d,e),r,{x:d/2,y:e/2,cast:!1,receive:!1});p.renderOrder=5,h.add(p),h.add($(d,.06,.08,i,{x:d/2,y:e})),h.add($(d,.06,.08,i,{x:d/2,y:.03}));for(let g=0;g<=Math.max(1,Math.round(d/1.8));g++)h.add($(.05,e,.08,i,{x:g/Math.max(1,Math.round(d/1.8))*d,y:e/2,receive:!1}));n.add(h)}}function Gi(n,t,e,i){for(const[s,r,a,o]of t){const c=Math.hypot(a-s,o-r),l=Math.atan2(-(o-r),a-s),d=$(c,e,.18,i,{x:(s+a)/2,y:e/2,z:(r+o)/2});d.rotation.y=l,n.add(d)}}function Nf(n,t,e,i=0){const s=new Pt;s.add(Ct(.7,2.1,1,.02,ze(987413,{metalness:.6,roughness:.35}),{y:1.05}));const r=new te({color:new Tt("#22c55e").multiplyScalar(2)}),a=new te({color:new Tt("#38bdf8").multiplyScalar(2)});for(let o=0;o<14;o++)s.add($(.6,.1,.02,ze(2040880,{metalness:.5}),{y:.2+o*.13,z:.51,cast:!1})),s.add($(.03,.03,.01,o%3?r:a,{x:.22,y:.2+o*.13,z:.525,cast:!1}));return Ni(n,s,t,e,i)}function Le(n,t,e,i,s,r=0,{w:a=2.2,h:o=.4,bg:c="#111827",fg:l="#f8fafc",size:d=52}={}){const f=En(a,o,(h,p,g)=>{h.fillStyle=c,h.fillRect(0,0,p,g),h.fillStyle=l,h.font=`800 ${d}px system-ui`,h.textAlign="center",h.textBaseline="middle",h.fillText(t,p/2,g/2+2)},{frame:!1});return f.position.set(e,i,s),f.rotation.y=r,n.add(f),f}const ue={x0:ce+.2,x1:ce+4.4,z0:-yt,z1:-3.6};let pa=null;function oy(){if(pa)return pa;const n=document.createElement("canvas");n.width=512,n.height=256;const t=n.getContext("2d");[[60,120],[180,40],[320,160],[420,60]].forEach(([i,s])=>{const r=t.createLinearGradient(i,0,i+s,0);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(220,225,255,0.55)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.save(),t.transform(1,0,-.5,1,0,0),t.fillStyle=r,t.fillRect(i,0,s,256),t.restore()});const e=new vn(n);return e.colorSpace=Pe,pa=new te({map:e,transparent:!0,opacity:.07,blending:xi,depthWrite:!1,side:Ne}),pa}function ma(n,t,e,i,s,r,a,{sill:o=!0,top:c=!0,accent:l="#ffcf8a"}={}){const d=ve.M,f=Math.hypot(i-t,s-e),h=Math.atan2(-(s-e),i-t),p=new Pt;p.position.set(t,0,e),p.rotation.y=h;const g=new Zt(new ee(f,r),d.glass);g.position.set(f/2,r/2,0),g.renderOrder=5,p.add(g);const x=new Zt(new ee(f,r),oy());x.position.set(f/2,r/2,.01),x.renderOrder=6,p.add(x);const m=Math.max(1,Math.round(f/a));for(let u=0;u<=m;u++)p.add($(.07,r,.12,d.bronze,{x:u/m*f,y:r/2,receive:!1}));return r>3&&p.add($(f,.05,.1,d.bronze,{x:f/2,y:1.05,cast:!1})),o&&(p.add($(f,.14,.18,d.bronze,{x:f/2,y:.07})),p.add($(f,.025,.03,ne("#ffd59a",2),{x:f/2,y:.15,z:.08,cast:!1}))),c&&(p.add($(f+.1,.18,.2,d.bronze,{x:f/2,y:r})),p.add($(f,.025,.03,ne(l,2),{x:f/2,y:r-.1,z:.1,cast:!1}))),n.add(p),p}function ly(n,t,{finish:e}={}){const i=ve.M;n.add($(ce*2+.6,.6,yt*2+.6,i.plinth,{y:-.3,cast:!1}));const s=Et(new ee(ce*2,yt*2),e||(t.level<0?i.marbleFloor:i.floor),{y:.001,cast:!1});s.rotation.x=-Math.PI/2,n.add(s);const r=ne("#ffd59a",1.6);if(n.add($(ce*2+.6,.04,.04,r,{y:0,z:yt+.3,cast:!1,receive:!1})),n.add($(.04,.04,yt*2+.6,r,{x:ce+.3,y:0,cast:!1,receive:!1})),n.add($(ce*2+.6,.03,.03,ne("#ffc070",1.2),{y:-.58,z:yt+.3,cast:!1,receive:!1})),t.level<0){const u=new lt({color:3816008,roughness:.9});n.add($(ce*2,an,.4,u,{y:an/2,z:-yt-.1})),n.add($(.4,an,yt*2,u,{x:-ce-.1,y:an/2})),n.add($(.4,an,yt*2+.2+ue.z1,u,{x:ce+.1,y:an/2,z:(yt+ue.z1)/2+.1})),n.add($(ce*2,.5,.25,u,{y:.25,z:yt}));for(let v=-ce+2.5;v<ce;v+=5)n.add($(.5,an,.5,u,{x:v,y:an/2,z:-yt+.25}));n.add($(ce*2,.03,.03,ne("#38bdf8",1.4),{y:an-.25,z:-yt+.12,cast:!1}))}else ma(n,-ce,-yt,ce,-yt,an,2.5),ma(n,-ce,yt,-ce,-yt,an,3),ma(n,-ce,yt,ce,yt,1.05,3,{sill:!1,top:!0,accent:"#ffcf8a"}),ma(n,ce,yt,ce,ue.z1,1.05,3,{sill:!1,top:!0,accent:"#ffcf8a"}),n.add($(.22,an+.1,.22,i.bronze,{x:-ce,y:an/2,z:-yt}));if(t.level>=0)for(const u of[-ce,-5,5])n.add($(.26,an,.26,i.bronze,{x:u,y:an/2,z:yt-.15}));const a=En(9,.5,(u,v,b)=>{u.fillStyle="#0d0b26",u.fillRect(0,0,v,b),u.fillStyle="#f5c46b",u.font="800 70px system-ui",u.textBaseline="middle",u.fillText(t.label,30,b/2+3),u.fillStyle="#f5f3ff",u.font="700 64px system-ui",u.fillText(t.name.toUpperCase(),150,b/2+3)},{frame:!1,emissive:1});a.position.set(-ce+4.8,-.3,yt+.31),n.add(a);const o=document.createElement("div");o.className="room-label floor-label",o.textContent=`${t.label} · ${t.name}`;const c=new wc(o);c.position.set(0,.05,yt+.2),n.add(c);const l=new lt({color:15526113,roughness:.4,metalness:0}),d=ue.x1-ue.x0,f=ue.z1-ue.z0,h=(ue.x0+ue.x1)/2,p=(ue.z0+ue.z1)/2;n.add($(d,Yi,f,l,{x:h,y:Yi/2-.6,z:p}));const g=new lt({color:12105160,metalness:1,roughness:.25});for(const u of[-2,.6-2+2.2]){const v=ue.z0+1.5+(u<0?0:2.5);n.add($(.06,2.5,1.4,g,{x:ue.x0-.03,y:1.25,z:v})),n.add($(.07,2.62,.04,i.brass,{x:ue.x0-.035,y:1.31,z:v})),n.add($(.07,.06,1.5,i.brass,{x:ue.x0-.035,y:2.55,z:v})),n.add($(.03,.08,.3,ne("#fbbf24",1.8),{x:ue.x0-.06,y:2.85,z:v,cast:!1}))}const x=En(1.6,.42,(u,v,b)=>{u.fillStyle="#0d0b26",u.fillRect(0,0,v,b),u.fillStyle="#fde68a",u.font="800 54px system-ui",u.textAlign="center",u.textBaseline="middle",u.fillText(`LIFT · ${t.label}`,v/2,b/2+2)},{frame:!1});x.position.set(ue.x0-.07,3.35,ue.z0+2.75),x.rotation.y=-Math.PI/2,n.add(x),n.add($(1,2.3,.06,new lt({color:3880278,roughness:.5}),{x:h+.8,y:1.15,z:ue.z1+.03}));const m=En(1,.3,(u,v,b)=>{u.fillStyle="#065f46",u.fillRect(0,0,v,b),u.fillStyle="#ecfdf5",u.font="800 40px system-ui",u.textAlign="center",u.textBaseline="middle",u.fillText("▲▼ STAIRS",v/2,b/2+2)},{frame:!1});m.position.set(h+.8,2.6,ue.z1+.04),n.add(m),n.add($(.05,Yi,.05,ne("#ffd59a",1.4),{x:ue.x1+.03,y:Yi/2-.6,z:ue.z1+.03,cast:!1}))}function cy(n){const t=ve.M;n.add($(ce*2+.6,.6,yt*2+.6,t.plinth,{y:.3,cast:!1})),n.add($(ce*2+.6,.04,.04,ne("#ffd59a",1.6),{y:.62,z:yt+.3,cast:!1})),n.add($(ue.x1-ue.x0,1.4,ue.z1-ue.z0,new lt({color:15526113,roughness:.4}),{x:(ue.x0+ue.x1)/2,y:.7,z:(ue.z0+ue.z1)/2}));const e=new lt({color:1981066,roughness:.25,metalness:.6});for(let i=0;i<6;i++)for(let s=0;s<2;s++){const r=$(3.2,.05,1.6,e,{x:-11+i*3.6,y:1,z:-5+s*2.2});r.rotation.x=-.25,n.add(r)}}const hy={x0:-ce-1.5,x1:ue.x1+1.5,z0:-yt-1.5,z1:yt+1.5};function dy(n,t,e){const i=new lt({color:14275270,roughness:.7}),s=e-t,r=(t+e)/2,a=-ce-.3,o=ue.x1+.3,c=-yt-.3,l=yt+.3,d=1.6,f=[$(d,s,l-c+2*d,i,{x:a-d/2,y:r,cast:!1}),$(d,s,l-c+2*d,i,{x:o+d/2,y:r,cast:!1}),$(o-a,s,d,i,{x:(a+o)/2,y:r,z:c-d/2,cast:!1})],h=new Pt;h.add($(o-a,s,d,i,{x:(a+o)/2,y:r,z:l+d/2,cast:!1})),h.add($(o-a,s-.6,.2,i,{x:(a+o)/2,y:r-.3,z:l-.1,cast:!1})),[...f,h].forEach(g=>n.add(g));const p=ne("#ffc070",1.3);return n.add($(o-a+2*d,.05,.05,p,{x:(a+o)/2,y:e,z:l+d,cast:!1})),n.add($(.05,.05,l-c+2*d,p,{x:o+d,y:e,cast:!1})),{front:h}}const Ad={},on=(n,t)=>Ad[n]||(Ad[n]=t());function Ic(n,{scale:t=1.3,ring:e=!0,manager:i=!1}={}){const s=new Tt(n),r=new Pt;r.scale.setScalar(t);const a=new ei({color:16185084,roughness:.28,clearcoat:.6,clearcoatRoughness:.2}),o=new ei({color:s,roughness:.3,clearcoat:.5,emissive:s,emissiveIntensity:.1}),c=new lt({color:1315886,roughness:.15,metalness:.4}),l=new te({color:s.clone().multiplyScalar(2.2)});let d=0;for(const P of String(n))d=d*31+P.charCodeAt(0)>>>0;const f=d%4,h=[["#ffffff","#ef4444"],["#22c55e","#f8fafc"],["#f97316","#111827"],["#38bdf8","#fde047"],["#f472b6","#ffffff"],["#facc15","#1f2937"]][d%6],p=new lt({color:[3099245,2040617,12166270,3883602][f],roughness:.85}),g=new lt({color:16316660,roughness:.5}),x=new lt({color:h[0],roughness:.45}),m=new lt({color:h[1],roughness:.4,emissive:h[1],emissiveIntensity:.15}),u=[];for(const P of[-1,1]){const N=new Pt;N.position.set(P*.15,.46,0),N.add(Et(on("leg",()=>new gn(.095,.085,.4,12)),p,{y:-.2})),N.add(Ct(.22,.06,.34,.025,g,{y:-.44,z:.04})),N.add(Ct(.2,.1,.28,.045,x,{y:-.37,z:.03})),N.add(Ct(.21,.035,.16,.015,m,{y:-.37,z:.04})),N.add(Ct(.17,.04,.08,.02,g,{y:-.34,z:.15})),r.add(N),u.push(N)}const v=new Pt;v.position.y=.5,r.add(v);const b=new lt({color:[1120295,2042167,8138002,998718][d%4],roughness:.55});if(v.add(Ct(.68,.64,.5,.16,f===1?b:o,{y:.32})),f===1)v.add(Ct(.3,.56,.05,.04,o,{y:.32,z:.235})),v.add(Ct(.7,.07,.52,.03,m,{y:.03}));else{v.add(Ct(.4,.18,.05,.05,new lt({color:s.clone().multiplyScalar(.7),roughness:.7}),{y:.16,z:.24}));for(const N of[-.06,.06])v.add(Et(on("string",()=>new gn(.012,.012,.2,6)),a,{x:N,y:.5,z:.255}));const P=Et(on("hood",()=>new Zi(.22,.08,8,18,Math.PI)),o,{y:.66,z:-.12});P.rotation.x=-.4,v.add(P)}v.add(Ct(.3,.12,.05,.04,a,{y:.45,z:.24})),v.add(Et(on("chest",()=>new ti(.05,16)),l,{y:.36,z:.265,cast:!1}));const _=[];for(const P of[-1,1]){const N=new Pt;N.position.set(P*.4,.52,0),N.add(Et(on("arm",()=>new _r(.085,.32,4,10)),f===1?b:o,{y:-.2})),N.add(Et(on("cuff",()=>new gn(.09,.09,.05,12)),a,{y:-.36})),N.add(Et(on("hand",()=>new Ve(.085,12,10)),a,{y:-.43})),N.rotation.z=P*.12,v.add(N),_.push(N)}const M=new Pt;M.position.y=.98,v.add(M),M.add(Ct(.82,.6,.62,.2,a,{})),M.add(Ct(.64,.36,.08,.1,c,{z:.3,cast:!1}));const S=[];for(const P of[-1,1]){const N=Et(on("eye",()=>new _r(.045,.06,4,8)),l,{x:P*.14,y:.01,z:.345,cast:!1});M.add(N),S.push(N)}for(const P of[-1,1]){const N=gt(.1,.1,.08,o,{x:P*.43},16);N.rotation.z=Math.PI/2,M.add(N)}if(M.add(gt(.015,.015,.22,c,{y:.4},6)),!i){const P=new lt({color:h[1]==="#ffffff"||h[1]==="#f8fafc"?1120295:h[1],roughness:.6});if(f===0||f===2){const N=new Pt;N.position.y=.27,N.rotation.y=f===2?Math.PI:0,N.add(Et(on("capdome",()=>new Ve(.36,20,10,0,Math.PI*2,0,Math.PI/2)),P,{}));const X=Et(on("brim",()=>new gn(.24,.24,.025,20,1,!1,-Math.PI/2,Math.PI)),P,{z:.26,y:.01});X.scale.z=1.1,N.add(X),M.add(N)}else if(f===3){const N=Et(on("hp",()=>new Zi(.42,.03,8,24,Math.PI)),P,{y:.02});N.rotation.y=Math.PI/2,M.add(N);for(const X of[-1,1]){const H=gt(.13,.13,.08,P,{x:X*.45},16);H.rotation.z=Math.PI/2,M.add(H)}}else M.add(Et(on("beanie",()=>new Ve(.37,20,10,0,Math.PI*2,0,Math.PI/2)),P,{y:.24})),M.add(gt(.375,.375,.1,P,{y:.25},20))}const A=Et(on("bulb",()=>new Ve(.06,14,10)),l,{y:.53,cast:!1});if(M.add(A),i){const P=new lt({color:15381256,metalness:.8,roughness:.3}),N=Et(new gi(.06,.26,4),P,{y:.42,z:.27});N.rotation.x=Math.PI,v.add(N);const X=gt(.3,.33,.1,new lt({color:1973067,roughness:.6}),{y:.34},20);M.add(X),M.add(gt(.34,.34,.02,P,{y:.3},20));const H=Ct(.28,.36,.03,.02,new lt({color:9132587,roughness:.6}),{y:-.38,z:.12});H.add(Et(new ee(.22,.28),new te({color:16317180}),{z:.02,cast:!1})),H.rotation.x=-.5,_[1].add(H)}let y=null,E=null;if(e){y=new te({color:s.clone().multiplyScalar(2),transparent:!0,opacity:.9,side:Ne}),E=new Zt(on("ring",()=>new Ka(.62,.71,64)),y),E.rotation.x=-Math.PI/2,E.position.y=.012,r.add(E);const P=new Zt(on("glow",()=>new ee(2.4,2.4)),new te({map:Lf(`rgba(${s.r*255|0},${s.g*255|0},${s.b*255|0},0.5)`),transparent:!0,depthWrite:!1,blending:xi}));P.rotation.x=-Math.PI/2,P.position.y=.01,r.add(P)}const R=Math.random()*10;let L=2+Math.random()*4;const D=qa.lerp;function F(P,N="idle"){if(N==="walking"){const H=Math.sin(P*7+R);u[0].rotation.x=H*.45,u[1].rotation.x=-H*.45,_[0].rotation.x=-H*.35,_[1].rotation.x=D(_[1].rotation.x,-.6,.1),v.position.y=.5+Math.abs(Math.cos(P*7+R))*.04,M.rotation.y=D(M.rotation.y,Math.sin(P*.7)*.25,.05)}else u[0].rotation.x=D(u[0].rotation.x,0,.15),u[1].rotation.x=D(u[1].rotation.x,0,.15),v.position.y=.5+Math.sin(P*2.2+R)*.035;N==="working"?(M.rotation.y=D(M.rotation.y,-.25+Math.sin(P*.8+R)*.12,.08),M.rotation.x=D(M.rotation.x,.2,.08),_[0].rotation.x=-1.05+Math.sin(P*16+R)*.14,_[1].rotation.x=-1.05+Math.sin(P*16+R+Math.PI)*.14,l.color.copy(s).multiplyScalar(2.4+Math.sin(P*9)*.5),y&&(y.opacity=.75+Math.sin(P*5)*.25,E.scale.setScalar(1+Math.sin(P*3)*.05))):N==="idle"&&(M.rotation.y=D(M.rotation.y,Math.sin(P*.55+R)*.6,.05),M.rotation.x=D(M.rotation.x,0,.05),_[0].rotation.x=D(_[0].rotation.x,Math.sin(P*1.6+R)*.08,.1),_[1].rotation.x=D(_[1].rotation.x,i?-.6:-Math.sin(P*1.6+R)*.08,.1),l.color.copy(s).multiplyScalar(1.5),y&&(y.opacity=.4,E.scale.setScalar(1)));const X=P>L&&P<L+.12;S.forEach(H=>H.scale.y=X?.15:1),P>L+.12&&(L=P+2.5+Math.random()*4),A.scale.setScalar(1+Math.sin(P*4+R)*.15)}return{group:r,head:M,body:v,arms:_,update:F}}const Hi=n=>n?n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"--:--",fy=75*60*1e3,Rd=new Map;function uy(n,t){if(!n)return null;let e=Rd.get(n);return e||(e={img:new Image,ok:!1,failed:!1,cbs:[]},e.img.decoding="async",e.img.onload=()=>{e.ok=!0,e.cbs.splice(0).forEach(i=>i())},e.img.onerror=()=>{e.failed=!0,e.cbs.splice(0).forEach(i=>i())},e.img.src=n,Rd.set(n,e)),!e.ok&&!e.failed&&t&&e.cbs.push(t),e}function ar(n,t,e,i){const s=String(t||"").split(/\s+/).filter(Boolean),r=[];let a="";for(let c=0;c<s.length;c++){const l=a?`${a} ${s[c]}`:s[c];if(n.measureText(l).width<=e){a=l;continue}if(a&&r.push(a),a=s[c],r.length===i){a="",r[i-1]+=" …";break}}a&&r.length<i&&r.push(a);const o=r.length-1;if(o>=0){let c=r[o];for(;n.measureText(c).width>e&&c.length>3;)c=c.slice(0,-3)+"…";r[o]=c}return r}function py(n,{width:t=1024,height:e=640,anisotropy:i=8,onNeedsRedraw:s}={}){const r=t,a=e,o=a/640,c=document.createElement("canvas");c.width=r,c.height=a;const l=c.getContext("2d"),d=new vn(c);d.colorSpace=Pe,d.anisotropy=i;let f="";const h={dot:{x:0,y:0},cursor:{x:0,y:0,h:60},working:!1,image:!1},p=(m,u,v="system-ui, sans-serif")=>`${m} ${Math.round(u*o)}px ${v}`;function g(m,u,v,b,_){l.fillStyle=n.color,l.globalAlpha=.25,l.fillRect(0,0,r,100*o),l.globalAlpha=1,l.fillStyle="rgba(8,8,26,0.55)",l.fillRect(0,0,r,100*o),l.fillStyle=n.color,l.fillRect(0,0,14*o,100*o),l.fillStyle="#ffffff",l.font=p(700,56),l.textBaseline="alphabetic",l.fillText(n.name,40*o,68*o),l.font=p(800,44);const M=u?"WORKING":"IDLE",S=l.measureText(M).width;l.fillStyle=u?"#4ade80":"#94a3b8",l.textAlign="right",l.fillText(M,r-36*o,66*o),l.textAlign="left",h.dot={x:r-36*o-S-30*o,y:51*o},l.beginPath(),l.arc(h.dot.x,h.dot.y,13*o,0,Math.PI*2),u?l.fill():(l.lineWidth=4*o,l.strokeStyle="#94a3b8",l.stroke());const A=100*o+44*o;l.fillStyle="rgba(8,8,26,0.7)",l.fillRect(0,100*o,r,62*o),l.font=p(700,32),v?(l.fillStyle="#4ade80",l.fillText(`● LIVE · reported ${Hi(m.reportedAt)}`,40*o,A)):b?(l.fillStyle="#a5b4fc",l.fillText(`reported ${Hi(m.reportedAt)}`,40*o,A)):(l.fillStyle="#fbbf24",l.fillText("estimated from activity",40*o,A)),l.font=p(500,32),l.fillStyle="#b4b2e0",l.textAlign="right",l.fillText(`updated ${Hi(_)}`,r-36*o,A),l.textAlign="left"}function x(m){const u=m.status==="working",v=m.source==="reported"&&m.reportedAt,b=v&&Date.now()-m.reportedAt.getTime()<fy,_=m.lastActive||m.updatedAt,M=(m.events||[]).slice(-2).reverse(),S=m.screenshot?uy(m.screenshot,()=>{f="",s&&s()}):null,A=!!(S&&S.ok),y=JSON.stringify([m.status,m.task,m.detail,m.source,b,v&&Hi(m.reportedAt),Hi(_),M.map(R=>[Hi(R.ts),R.message]),m.screenshot,A]);if(y===f)return h;f=y;const E=l.createLinearGradient(0,0,0,a);if(E.addColorStop(0,u?"#0f1738":"#0c0c22"),E.addColorStop(1,u?"#0a0f28":"#08081a"),l.fillStyle=E,l.fillRect(0,0,r,a),A){const R=S.img,L=162*o,D=a-96*o,F=Math.min(r/R.width,(D-L)/R.height),P=R.width*F,N=R.height*F;l.fillStyle="#05050f",l.fillRect(0,L,r,D-L),l.drawImage(R,(r-P)/2,L+(D-L-N)/2,P,N),g(m,u,b,v,_),l.fillStyle="rgba(8,8,26,0.88)",l.fillRect(0,D,r,a-D),l.fillStyle=n.color,l.fillRect(0,D,r,4*o),l.font=p(700,46),l.fillStyle="#ffffff";const X=ar(l,m.task||"—",r-80*o,1)[0]||"";l.fillText(X,40*o,D+64*o),h.cursor={x:40*o+l.measureText(X).width+12*o,y:D+26*o,h:46*o},h.image=!0}else{l.fillStyle="rgba(255,255,255,0.02)";for(let P=0;P<a;P+=6)l.fillRect(0,P,r,2);g(m,u,b,v,_),l.font=p(700,26),l.fillStyle="#8b8bc4",l.fillText("CURRENT TASK",40*o,206*o),l.font=p(700,70),l.fillStyle=u?"#ffffff":"#d9d9ee";const R=ar(l,m.task||"—",r-90*o,3),L=80*o;R.forEach((P,N)=>l.fillText(P,40*o,276*o+N*L));const D=276*o+(R.length-1)*L;h.cursor={x:40*o+l.measureText(R[R.length-1]||"").width+14*o,y:D-52*o,h:60*o},m.detail&&(l.font=p(500,36),l.fillStyle="#c4c2f0",l.fillText(ar(l,m.detail,r-90*o,1)[0]||"",40*o,D+56*o));const F=a-108*o;l.fillStyle="rgba(139,92,246,0.35)",l.fillRect(40*o,F,r-80*o,2*o),M.forEach((P,N)=>{const X=F+44*o+N*42*o;l.font=p(500,28,"ui-monospace, Menlo, monospace"),l.fillStyle="#7a78b4";const H=Hi(P.ts);l.fillText(H,40*o,X);const et=40*o+l.measureText(H).width+22*o;l.font=p(400,30),l.fillStyle="#d6d5f2",l.fillText(ar(l,P.message,r-et-40*o,1)[0]||"",et,X)}),M.length||(l.font=p(400,30),l.fillStyle="#6f6fa8",l.fillText("No recent events",40*o,F+44*o)),h.image=!1}return h.working=u,d.needsUpdate=!0,h}return{tex:d,draw:x,W:r,H:a,invalidate:()=>f=""}}function my(n,t,e,{onNeedsRedraw:i}={}){const s=ve.M,r=new Tt(t.color),a=new Pt;a.position.set(t.desk.x,0,t.desk.z),a.rotation.y=t.desk.rot||0,n.add(a);const o=!!t.desk.wide,c=t.kind==="station",l=o?4.4:3.2,d=1.15,f=.76;a.add(Ct(l,.06,d,.02,s.walnut,{y:f}));for(const ot of[-1,1])for(const k of[-1,1])a.add($(.045,f-.03,.045,s.blackMetal,{x:ot*(l/2-.08),y:(f-.03)/2,z:k*(d/2-.08)}));a.add(Ct(.5,.55,d-.15,.02,s.whiteMatte,{x:-l/2+.4,y:.42})),a.add($(l-.04,.012,.012,ne(t.color,1.8),{y:f-.035,z:d/2,cast:!1}));const h=o?3.9:2.9,p=o?1600:1280,g=800,x=h*(g/p),m=py(t,{width:p,height:g,onNeedsRedraw:()=>i&&i(t.id)}),u=new Pt,v=Ct(h+.1,x+.1,.07,.03,s.graphite,{});u.add(v);const b=new te({map:m.tex}),_=new Zt(new ee(h,x),b);_.position.z=.037,u.add(_),u.add($(h*.4,x*.5,.05,s.graphite,{z:-.05}));const M=new Zt(new ti(1,24),new te({color:new Tt("#4ade80").multiplyScalar(1.3),transparent:!0})),S=new Zt(new ee(1,1),new te({color:r.clone().multiplyScalar(1.4)})),A=new Zt(new ee(h,x*.06),new te({color:5267632,transparent:!0,opacity:.06,blending:xi,depthWrite:!1}));[M,S,A].forEach((ot,k)=>{ot.position.z=.04+k*.001,u.add(ot)});const y=(ot,k)=>[(ot/p-.5)*h,(.5-k/g)*x],E=.25,R=new Pt;if(u.position.y=E+x/2,u.rotation.x=-.06,R.add(u),R.add(gt(.045,.045,E+x*.3,s.blackMetal,{y:(E+x*.3)/2,z:-.08},12)),R.add(Ct(.6,.03,.34,.01,s.blackMetal,{y:.015,z:-.04})),R.position.set(o?-.3:-.45,f+.03,-.25),a.add(R),v.userData.agentId=t.id,_.userData.agentId=t.id,o){const ot=Ct(1.2,.8,.05,.02,s.graphite,{x:-l/2-.55,y:f+.75,z:-.05});ot.rotation.y=.5,a.add(ot);const k=Et(new ee(1.1,.7),new te({color:new Tt(r).multiplyScalar(.35)}),{x:-l/2-.54,y:f+.75,z:-.02,cast:!1});k.rotation.y=.5,a.add(k),a.add(gt(.03,.03,.4,s.blackMetal,{x:-l/2-.55,y:f+.2,z:-.07},8))}const L=o?2.2:1.6;a.add(Ct(.62,.025,.2,.01,s.whiteMatte,{x:0,y:f+.045,z:.3})),a.add(Ct(.07,.03,.11,.015,s.whiteMatte,{x:.5,y:f+.045,z:.32}));const D=gt(.06,.055,.13,new lt({color:r,roughness:.3}),{x:l/2-.22,y:f+.095,z:.3},16);a.add(D),a.add(gt(.07,.055,.1,s.ceramic,{x:-l/2+.25,y:f+.08,z:.3},12));for(let ot=0;ot<5;ot++){const k=Et(new gi(.025,.12,5),s.leaf2,{x:-l/2+.25+Math.cos(ot)*.03,y:f+.17,z:.3+Math.sin(ot)*.03});k.rotation.set(Math.sin(ot)*.4,0,Math.cos(ot)*.4),a.add(k)}if(c){a.add(Ct(.3,.04,.4,.02,s.graphite,{x:-.9,y:f+.05,z:.25}));for(let ot=0;ot<12;ot++)a.add($(.05,.01,.05,ot%4===3?s.brass:s.whiteMatte,{x:-.97+ot%4*.05,y:f+.075,z:.18+Math.floor(ot/4)*.07}));for(let ot=0;ot<4;ot++)a.add($(.42,.012,.3,s.whiteMatte,{x:.9,y:f+.04+ot*.013,z:.25}))}let F=null;const P=new Pt;P.position.set(L,0,-1),a.add(P),c||(F=Ic(t.color,{scale:1.25}),P.add(F.group));const N=new Zt(new An(1.1,2.1,1.1),new te({visible:!1}));N.position.y=1.05,N.userData.agentId=t.id,P.add(N),c&&N.position.set(-L,1.05,1);const X=document.createElement("div");X.className="tag",X.dataset.agent=t.id,X.innerHTML=`<span class="tag-dot" style="background:${t.color}"></span><span class="tag-name">${t.name}</span><span class="tag-state"></span>`;const H=new wc(X);H.position.set(c?-L:0,c?f+x+.75:2.6,c?.8:0),P.add(H);let et=!1,Z=null;function tt(ot){ot.status!==Z&&(Z=ot.status,et=ot.status==="working",X.classList.toggle("working",et),X.querySelector(".tag-state").textContent=et?"working":"idle");const k=m.draw(ot),[nt,ft]=y(k.dot.x,k.dot.y);M.position.set(nt,ft,M.position.z),M.scale.setScalar(13*g/640/p*h),M.visible=et;const[B,q]=y(k.cursor.x+9,k.cursor.y+k.cursor.h/2);S.position.set(B,q,S.position.z),S.scale.set(14/p*h*(g/640),k.cursor.h/g*x,1),S.userData.show=et&&!k.image,S.visible=S.userData.show,A.visible=et,b.color.setScalar(et?1:.6)}function j(ot,k=!0){k&&(F&&F.update(ot,et?"working":"idle"),et&&(M.material.opacity=.35+(.5+.5*Math.sin(ot*4))*.65,S.visible=S.userData.show&&Math.floor(ot*2.2)%2===0,A.position.y=x/2-ot*.18%1*x))}function Ut(){_.updateWorldMatrix(!0,!1);const ot=new I().setFromMatrixPosition(_.matrixWorld),k=new I(0,0,1).applyQuaternion(_.getWorldQuaternion(new Ln));return{center:ot,normal:k,width:h,height:x}}return{agent:t,hit:N,frame:_,tag:X,tex:m.tex,setData:tt,update:j,screenView:Ut,isWorking:()=>et,worldPos:()=>P.getWorldPosition(new I)}}const Cd=3600*1e3;function gy(n,t=Date.now()){const e=n.lastActive?n.lastActive.getTime():0;return n.status==="working"&&e&&t-e>2*Cd?"no update for 2h+":n.status==="idle"&&e&&t-e>6*Cd?"idle 6h+":/error|fail|blocked|stuck/i.test(n.task||"")?"reports a problem":null}function xy(n,t,e,{board:i}={}){const s=Ic("#e2e8f0",{scale:1.15,ring:!1,manager:!0});n.add(s.group);const r=e.map(([b,_])=>new I(b,0,_));s.group.position.copy(r[0]);let a=0,o=0;const c=document.createElement("div");c.className="tag manager-tag",c.innerHTML='<span class="tag-dot" style="background:#fbbf24"></span><span class="tag-name">Floor Manager</span><span class="tag-state"></span><div class="mgr-tip"></div>';const l=new wc(c);l.position.set(0,2.45,0),s.group.add(l);const d=new Zt(new An(1,2,1),new te({visible:!1}));d.position.y=1,d.userData.managerFloor=t.id,s.group.add(d);let f=null,h=null;if(i){const b=document.createElement("canvas");b.width=1024,b.height=640,h=b.getContext("2d"),f=new vn(b),f.colorSpace=Pe;const _=new Pt;_.add($(i.w+.1,i.w*.625+.1,.06,ve.M.graphite,{}));const M=new Zt(new ee(i.w,i.w*.625),new te({map:f}));M.position.z=.035,_.add(M),_.position.set(i.x,i.y,i.z),_.rotation.y=i.rot||0,n.add(_)}let p={working:0,total:0,flags:[]};function g(b,_){const M=Date.now(),S=b.map(E=>({a:E,s:_(E.id),flag:gy(_(E.id),M)})),A=S.filter(E=>E.s.status==="working").length,y=S.filter(E=>E.flag);p={working:A,total:S.length,flags:y},c.querySelector(".tag-state").textContent=y.length?`⚠ ${y.length}`:`${A}/${S.length}`,c.classList.toggle("alert",y.length>0),c.querySelector(".mgr-tip").innerHTML=`<b>${t.label} · ${t.name}</b><br>${A} of ${S.length} working`+(y.length?`<br>${y.map(E=>`⚠ ${E.a.name}: ${E.flag}`).join("<br>")}`:"<br>✓ nobody needs help"),h&&x(S,A,y)}function x(b,_,M){const S=h,A=1024,y=640;S.fillStyle="#0b0a24",S.fillRect(0,0,A,y),S.fillStyle="#fbbf24",S.fillRect(0,0,A,96),S.fillStyle="#1c1404",S.font="800 50px system-ui",S.textBaseline="middle",S.fillText(`FLOOR ${t.label} · STATUS`,34,50),S.textAlign="right",S.font="700 44px system-ui",S.fillText(`${_}/${b.length} working`,A-34,50),S.textAlign="left";const E=Math.min(78,420/Math.max(1,b.length)),R=E/78;b.forEach((L,D)=>{const F=150+D*E;S.fillStyle=L.a.color,Dn(S,34,F-26*R,16,52*R,6),S.fill(),S.fillStyle="#f1f0ff",S.font=`700 ${Math.round(40*R)}px system-ui`,S.fillText(L.a.name.length>24?L.a.name.slice(0,23)+"…":L.a.name,68,F),S.textAlign="right",S.fillStyle=L.flag?"#f87171":L.s.status==="working"?"#4ade80":"#94a3b8",S.font=`700 ${Math.round(36*R)}px system-ui`,S.fillText(L.flag?`⚠ ${L.flag}`:L.s.status.toUpperCase(),A-34,F),S.textAlign="left"}),M.length?(S.fillStyle="#f87171",S.font="600 34px system-ui",S.fillText(`⚠ Floor Manager is checking on ${M.map(L=>L.a.name).join(", ")}`,34,y-40)):(S.fillStyle="#4ade80",S.font="600 34px system-ui",S.fillText("✓ Floor Manager: nobody needs help right now",34,y-40)),f.needsUpdate=!0}const m=new I;let u=0;function v(b){const _=Math.min(.1,b-u);if(u=b,b<o){s.update(b,"idle");return}const M=r[(a+1)%r.length];m.subVectors(M,s.group.position),m.y=0;const S=m.length();if(S<.05){a=(a+1)%r.length,o=b+2.5+a%2*2;return}const A=Math.min(S,.95*_);s.group.position.addScaledVector(m.normalize(),A);let E=Math.atan2(m.x,m.z)-s.group.rotation.y;E=Math.atan2(Math.sin(E),Math.cos(E)),s.group.rotation.y+=E*Math.min(1,_*6),s.update(b,"walking")}return{update:v,setSummary:g,hit:d,tag:c,summary:()=>p}}const _y="https://s.tradingview.com/embed-widget",ga=(n,t)=>`${_y}/${n}/?locale=en#${encodeURIComponent(JSON.stringify(t))}`,Zn={symbolOverview:()=>ga("symbol-overview",{symbols:[["S&P 500","FOREXCOM:SPXUSD|1D"],["Bitcoin","BITSTAMP:BTCUSD|1D"],["USD/INR","FX_IDC:USDINR|1D"],["Gold","TVC:GOLD|1D"]],chartOnly:!1,width:"100%",height:"100%",locale:"en",colorTheme:"dark",autosize:!0,showVolume:!1,hideDateRanges:!1,scalePosition:"right",scaleMode:"Normal",fontSize:"12",noTimeScale:!1,valuesTracking:"1",changeMode:"price-and-percent",chartType:"area",lineColor:"#f5c46b",topColor:"rgba(245,196,107,0.35)",bottomColor:"rgba(245,196,107,0)"}),ticker:()=>ga("ticker-tape",{symbols:[{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"FX_IDC:USDINR",title:"USD/INR"},{proName:"BINANCE:ETHUSDT",title:"ETH"},{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"TVC:GOLD",title:"Gold"},{proName:"TVC:USOIL",title:"Crude"},{proName:"BINANCE:ASTERUSDT",title:"ASTER"}],showSymbolLogo:!0,colorTheme:"dark",isTransparent:!0,displayMode:"adaptive"}),mini:n=>ga("mini-symbol-overview",{symbol:n,width:"100%",height:"100%",dateRange:"1D",colorTheme:"dark",isTransparent:!0,autosize:!0}),overview:()=>ga("market-overview",{colorTheme:"dark",dateRange:"1D",showChart:!0,width:"100%",height:"100%",isTransparent:!0,showSymbolLogo:!0,tabs:[{title:"Crypto",symbols:[{s:"BITSTAMP:BTCUSD",d:"Bitcoin"},{s:"BINANCE:ETHUSDT",d:"Ethereum"},{s:"BINANCE:SOLUSDT",d:"Solana"}]},{title:"Forex",symbols:[{s:"FX_IDC:USDINR",d:"USD/INR"},{s:"FX:EURUSD",d:"EUR/USD"}]},{title:"Indices",symbols:[{s:"FOREXCOM:SPXUSD",d:"S&P 500"},{s:"FOREXCOM:NSXUSD",d:"Nasdaq 100"}]}]})};function vy(n,t,e="TradingView · live on this floor"){return Tn(1024,640,(i,s,r)=>{i.fillStyle="#0a0f1f",i.fillRect(0,0,s,r),i.strokeStyle="rgba(255,255,255,0.06)";for(let d=0;d<s;d+=64)i.beginPath(),i.moveTo(d,80),i.lineTo(d,r),i.stroke();for(let d=80;d<r;d+=64)i.beginPath(),i.moveTo(0,d),i.lineTo(s,d),i.stroke();i.fillStyle="#e2e8f0",i.font="700 44px system-ui",i.fillText(n,32,56),i.fillStyle="#64748b",i.font="500 26px system-ui",i.textAlign="right",i.fillText(e,s-32,54),i.textAlign="left";let a=r*.6,o=t;const c=[];for(let d=0;d<=s;d+=16)o=(o*9301+49297)%233280,a+=(o/233280-.48)*34,a=Math.max(140,Math.min(r-40,a)),c.push([d,a]);const l=i.createLinearGradient(0,140,0,r);l.addColorStop(0,"rgba(34,197,94,0.35)"),l.addColorStop(1,"rgba(34,197,94,0)"),i.beginPath(),i.moveTo(0,r),c.forEach(([d,f])=>i.lineTo(d,f)),i.lineTo(s,r),i.fillStyle=l,i.fill(),i.beginPath(),c.forEach(([d,f],h)=>h?i.lineTo(d,f):i.moveTo(d,f)),i.strokeStyle="#22c55e",i.lineWidth=4,i.stroke()})}function ql(n,t,e){const i=ve.M,s=[],r=900;for(const[o,c]of e.entries()){const l=new Pt;l.position.set(c.x,c.y,c.z),l.rotation.y=c.rotY||0,n.add(l),l.add($(c.w+.14,c.h+.14,.08,i.graphite,{}));const d=new Zt(new ee(c.w,c.h),new te({map:vy(c.title,17+o*31,c.sub),color:new Tt(.9,.9,.9)}));d.position.z=.045,l.add(d),l.add($(c.w,.03,.03,ne("#22c55e",1.6),{y:-c.h/2-.1,z:.05,cast:!1}));const f=document.createElement("div");f.className="tv3d",f.style.width=`${r}px`,f.style.height=`${Math.round(r*c.h/c.w)}px`;const h=new zv(f);h.scale.setScalar(c.w/r),h.position.z=.05,l.add(h),h.visible=!1,s.push({obj:h,el:f,url:c.url,loaded:!1,s:c.w/r})}s.forEach(o=>{o.anchor=o.obj.parent,o.anchor.remove(o.obj),t.add(o.obj)});const a=new he;return{setLive(o){for(const c of s)o&&!c.loaded&&(c.el.innerHTML=`<iframe src="${c.url}" loading="lazy" allowtransparency="true" frameborder="0" scrolling="no"></iframe>`,c.loaded=!0),c.obj.visible=o,c.el.style.display=o?"":"none"},sync(){for(const o of s)o.obj.visible&&(o.anchor.updateWorldMatrix(!0,!1),a.copy(o.anchor.matrixWorld).multiply(new he().compose(new I(0,0,.05),new Ln,new I().setScalar(o.s))),a.decompose(o.obj.position,o.obj.quaternion,o.obj.scale))}}}function yy(n,t){const e=ve.M,i=2048,s=965,r=document.createElement("canvas");r.width=i,r.height=s;const a=r.getContext("2d"),o=new vn(r);o.colorSpace=Pe,o.anisotropy=8;const c=new Pt,l=7,d=l*(s/i);c.add(Ct(l+.25,d+.25,.14,.04,e.graphite,{y:0}));const f=new Zt(new ee(l,d),new te({map:o,color:new Tt(.95,.95,.95)}));f.position.z=.075,c.add(f),c.add($(l+.2,.03,.03,ne("#7c3aed",2.6),{y:-d/2-.14,z:.06,cast:!1})),c.position.set(0,1.9+d/2,-yt+.75),n.add(c);for(const g of[-1,1])n.add($(.1,1.95,.1,e.bronze,{x:g*(l/2-.4),y:.97,z:-yt+.7}));n.add($(l-.3,.08,.5,e.walnut,{y:.04,z:-yt+.7}));const h=Object.fromEntries(t.map(g=>[g.id,g]));function p(g,x){const m=a.createLinearGradient(0,0,i,s);m.addColorStop(0,"#0c0d2b"),m.addColorStop(1,"#141038"),a.fillStyle=m,a.fillRect(0,0,i,s),a.fillStyle="rgba(255,255,255,0.018)";for(let S=0;S<s;S+=6)a.fillRect(0,S,i,2);a.fillStyle="#ef4444",a.beginPath(),a.arc(70,72,14,0,Math.PI*2),a.fill(),a.fillStyle="#e9e7ff",a.font="700 52px system-ui, sans-serif",a.fillText("LIVE ACTIVITY FEED",100,90),a.fillStyle="#8b8bc4",a.font="500 46px ui-monospace, Menlo, monospace",a.textAlign="right",a.fillText(Ba(new Date),i-50,90),a.textAlign="left",a.fillStyle="#2d2a6e",a.fillRect(50,125,i-100,3);const u=1440,v=g.slice(-10);v.forEach((S,A)=>{const y=196+A*74,E=h[S.agentId];A===v.length-1&&(a.fillStyle="rgba(139,92,246,0.18)",Dn(a,40,y-50,u-20,66,10),a.fill()),a.fillStyle="#6f6fa8",a.font="500 38px ui-monospace, Menlo, monospace",a.fillText(Ba(S.ts),60,y),a.fillStyle=(E==null?void 0:E.color)||"#fff",a.font="700 38px system-ui, sans-serif";const R=(E==null?void 0:E.name)||S.agentId;a.fillText(R,280,y);const L=a.measureText(R).width;a.fillStyle="#dcdcf5",a.font="400 38px system-ui, sans-serif";let D=S.message;const F=u-310-L-30;for(;a.measureText(D).width>F&&D.length>4;)D=D.slice(0,-2);D!==S.message&&(D=D.trimEnd()+"…"),a.fillText(D,280+L+22,y)});const b=u+70;a.fillStyle="#1a1848",Dn(a,b-20,150,i-b-30,s-190,18),a.fill(),a.fillStyle="#8b8bc4",a.font="700 36px system-ui, sans-serif",a.fillText("AGENTS",b+10,212);const _=Math.min(60,(s-300)/Math.max(1,t.length)),M=Math.max(.72,_/60);t.forEach((S,A)=>{const y=x(S.id),E=262+A*_;a.fillStyle=S.color,a.beginPath(),a.arc(b+20,E-11*M,11*M,0,Math.PI*2),a.fill(),a.fillStyle="#ecebff",a.font=`600 ${Math.round(32*M)}px system-ui, sans-serif`;let R=S.name;for(;a.measureText(R).width>300&&R.length>3;)R=R.slice(0,-1);a.fillText(R===S.name?R:R+"…",b+44,E),a.fillStyle=y.status==="working"?"#4ade80":"#94a3b8",a.font=`600 ${Math.round(28*M)}px system-ui, sans-serif`,a.textAlign="right",a.fillText(y.status==="working"?"● working":"○ idle",i-70,E),a.textAlign="left"}),o.needsUpdate=!0}return{draw:p}}function Gs(n,t,e,i=0){const s=ve.M;return n.add($(.1,1.6,.1,s.blackMetal,{x:t,y:.8,z:e})),n.add(gt(.35,.35,.04,s.blackMetal,{x:t,y:.02,z:e},20)),{x:t,y:2.15,z:e,rot:i,w:1.7}}function My(n,{cssScene:t}){const e=ve.M,i=[],s=ql(n,t,[{title:"Ticker",url:Zn.ticker(),x:-2,y:6.35,z:-yt+.45,w:17.6,h:.55},{title:"BTC / USD",url:Zn.mini("BITSTAMP:BTCUSD"),x:-8.4,y:4.45,z:-yt+.45,w:4.6,h:2.9},{title:"USD / INR",url:Zn.mini("FX_IDC:USDINR"),x:-3.5,y:4.45,z:-yt+.45,w:4.6,h:2.9},{title:"Market overview",url:Zn.overview(),x:2.6,y:4.2,z:-yt+.45,w:6.6,h:3.4}]);return n.add($(18,.1,.5,e.walnut,{x:-2,y:2.35,z:-yt+.35})),Le(n,"TRADING FLOOR · LIVE MARKETS",-2,2.6,-yt+.62,0,{w:4.4,h:.32,bg:"#052e1a",fg:"#86efac",size:40}),Ji(n,-6.4,3.6,7.2,3.4,e.rugIndigo),[-9,-6.4,-3.8].forEach(r=>jv(n,r,3.4,Math.PI)),to(n,-6.4,5.4,.5),ey(n,10.4,-4.6,0),ny(n,-13.6,-1.2,Math.PI/2),wr(n,6.6,3.6,-yt+.3,0,2.2,1.4,0),Df(n,13.6,2.3,2.4,-Math.PI/2,5,3),De(n,-14.2,-8.2,1.15,1),De(n,7.6,7.8,1,0),De(n,-14.2,7.9,1,0),De(n,4.2,1.8,.8,0),br(n,-10.6,5.6),Os(n,10.8,4.8,-Math.PI/4,e.velvetTeal),Os(n,8.6,5.6,Math.PI/6,e.velvetTeal),{markets:s,ups:i,waypoints:[[-1,1.2],[6.5,1.2],[6.5,6.6],[-11.5,6.6],[-11.5,1.2]],board:Gs(n,4.6,6.8,-.35),light:[[-6,0],[6,0]]}}function Sy(n,{agents:t}){const e=ve.M,i=yy(n,t);return ty(n,-11.4,6.6,0),Ji(n,10.4,5.4,6,3.2,e.rugSand),Cc(n,10.4,6.6,Math.PI,e.velvetPlum,2.6),Os(n,7.8,5.2,Math.PI/2,e.velvetTeal),to(n,10.4,5,.55),Rc(n,-14.6,1.6,Math.PI/2),Pc(n,-12,12,.8,6.2),wr(n,-8.2,4.4,-yt+.3,0,1.6,1.1,1),wr(n,8.2,4.4,-yt+.3,0,1.6,1.1,2),De(n,-14.2,-8.2,1.1,1),De(n,14.2,7.9,1,0),De(n,-4.2,-8.2,1,0),De(n,4.2,-8.2,1,0),De(n,-6.8,7.6,.9,1),br(n,13.8,4.2),{feed:i,waypoints:[[-3.6,-1.2],[-11.5,-1.2],[11.6,-1.2],[-3.6,-1.2],[-3.6,3.9],[6.2,3.9],[-3.6,3.9]],board:Gs(n,-4.6,6.4,.25),light:[[-6,0],[6,0]]}}function by(n,{agents:t,stations:e}){const i=ve.M,s=[],r=t.filter(g=>g.floor==="studio");Le(n,"LIVE WORK WALL",-3.6,6.6,-yt+.55,0,{w:3.4,h:.34,bg:"#1e1b4b",fg:"#e0e7ff",size:44});const a=Math.min(4.4,22.8/Math.max(1,r.length));r.forEach((g,x)=>{const m=a-.3,u=m*.625,v=-14.4+a*(x+.5),b=new Pt;b.position.set(v,4.85,-yt+.5),n.add(b),b.add(Ct(m+.12,u+.12,.08,.03,i.graphite,{}));const _=new Zt(new ee(m,u),new te({map:e.get(g.id).tex}));_.position.z=.045,_.userData.agentId=g.id,b.add(_),b.add($(m,.03,.03,ne(g.color,1.8),{y:-u/2-.1,z:.05,cast:!1})),s.push({hit:_})});const o=document.createElement("canvas");o.width=1024,o.height=768;const c=new vn(o);c.colorSpace=Pe;const l=new Pt;l.position.set(10.6,4.6,-yt+.5),n.add(l),l.add(Ct(4+.12,3+.12,.08,.03,i.graphite,{}));const d=new Zt(new ee(4,3),new te({map:c}));d.position.z=.045,l.add(d);function f(g){const x=o.getContext("2d");x.fillStyle="#f8f5ee",x.fillRect(0,0,1024,768),x.fillStyle="#1f1b3a",x.font="800 56px system-ui",x.fillText("STUDIO TASK BOARD",40,80);const m=Math.min(150,620/Math.max(1,r.length)),u=m/150;r.forEach((v,b)=>{const _=g(v.id),M=120+b*m,S=m-12;x.fillStyle=v.color,Dn(x,40,M,944,S,14),x.globalAlpha=.18,x.fill(),x.globalAlpha=1,x.fillStyle=v.color,x.fillRect(40,M,14,S),x.fillStyle="#1f1b3a",x.font=`700 ${Math.round(40*Math.max(.8,u))}px system-ui`,x.fillText(v.name,76,M+44*u+4),x.textAlign="right",x.fillStyle=_.status==="working"?"#15803d":"#64748b",x.fillText(_.status.toUpperCase(),964,M+44*u+4),x.textAlign="left",x.fillStyle="#334155",x.font=`400 ${Math.round(34*Math.max(.78,u))}px system-ui`;const A=m>=120?2:1;ar(x,_.task,880,A).forEach((y,E)=>x.fillText(y,76,M+88*u+6+E*36))}),c.needsUpdate=!0}iy(n,-12.6,1.6,.4),sy(n,-8.4,1.8),Rc(n,-14.6,-5.6,Math.PI/2),ry(n,-3.4,.9),ay(n,2.2,.9),Qv(n,5,.6,-.2),Ji(n,11.4,4.8,0,0,i.rugIndigo,!0),Aa(n,11.4,4.8,1.2);const h=[];[["#f97316",0],["#22d3ee",2.1],["#a3e635",4.2]].forEach(([g,x])=>{const m=Ic(g,{scale:.95,ring:!1});m.group.position.set(11.4+Math.cos(x)*1.75,0,4.8+Math.sin(x)*1.75),m.group.rotation.y=Math.atan2(11.4-m.group.position.x,4.8-m.group.position.z),n.add(m.group),h.push(m)});const p=En(1.6,.9,(g,x,m)=>{g.fillStyle="#111",g.fillRect(0,0,x,m),g.strokeStyle="#f97316",g.lineWidth=14,g.beginPath(),g.arc(x/2,m/2-10,90,0,Math.PI*1.6),g.stroke(),g.fillStyle="#fff",g.font="700 30px system-ui",g.textAlign="center",g.fillText("LOGO v4",x/2,m-18)});return p.position.set(11.4,1.6,6.9),p.rotation.y=Math.PI,n.add(p),Le(n,"DESIGN TEAM",11.4,3.2,7.6,Math.PI,{w:2.2,h:.32,bg:"#3b0764",fg:"#f5d0fe",size:44}),Pc(n,-12,12,-.2,6.2),Df(n,14.6,2.6,-1.2,-Math.PI/2,4,3),wr(n,-14.6+.2,4,4.4,Math.PI/2,1.8,1.2,2),De(n,-14.2,7.9,1.1,1),De(n,6.2,7.9,1,0),De(n,14.2,-8.2,1,1),br(n,-10.4,4.6),{drawBoard:f,ups:s,update:g=>h.forEach((x,m)=>x.update(g+m,Math.sin(g*.4+m)>.3?"working":"idle")),waypoints:[[-6.8,3.6],[6.6,3.2],[7.6,.2],[-6.6,.2]],board:Gs(n,-6.2,6.4,.3),light:[[-6,0],[6,0]]}}const Vs=(n,t,e)=>{n.save(),n.font="800 26px system-ui";const i="EXAMPLE DATA",s=n.measureText(i).width;n.fillStyle="rgba(251,191,36,0.9)",Dn(n,t-s-54,e-52,s+30,38,8),n.fill(),n.fillStyle="#1c1404",n.textBaseline="middle",n.fillText(i,t-s-39,e-32),n.restore()};function Pr(n,t,e,i){n.fillStyle="#070b1a",n.fillRect(0,0,t,2e3),n.fillStyle=i,n.fillRect(0,0,t,8),n.fillStyle="#e2e8f0",n.font="800 40px system-ui",n.textBaseline="alphabetic",n.fillText(e,28,62)}function Pd(n,t,e){Pr(n,t,"PROPERTY DASHBOARD","#f59e0b"),[["Parcels tracked","1,248"],["Registered","1,032"],["In possession","978"],["In dispute","41"],["Flagged","17"]].forEach(([a,o],c)=>{const l=28+c%3*((t-56)/3),d=90+Math.floor(c/3)*130;n.fillStyle="#111a33",Dn(n,l,d,(t-56)/3-14,116,12),n.fill(),n.fillStyle=c===3?"#f87171":c===4?"#fbbf24":"#f8fafc",n.font="800 46px system-ui",n.fillText(o,l+18,d+58),n.fillStyle="#94a3b8",n.font="500 24px system-ui",n.fillText(a,l+18,d+96)});const s=[62,48,80,35,55,72,40],r=e-80;n.fillStyle="#94a3b8",n.font="600 22px system-ui",n.fillText("Est. profit by region (example)",t*.36+30,285),s.forEach((a,o)=>{n.fillStyle=o%2?"#38bdf8":"#22c55e",n.fillRect(t*.36+30+o*(t*.6/7),r-a*2.4,t*.6/7-14,a*2.4)}),Vs(n,t,e)}function Id(n,t,e){Pr(n,t,"PARCEL MAP","#22d3ee"),n.fillStyle="#0b2530",n.fillRect(20,84,t-40,e-104);let i=7;const s=()=>(i=(i*9301+49297)%233280)/233280;for(let a=0;a<9;a++){const o=60+s()*(t-120),c=120+s()*(e-200);n.beginPath();for(let l=0;l<7;l++){const d=l/7*Math.PI*2,f=60+s()*70;n.lineTo(o+Math.cos(d)*f,c+Math.sin(d)*f*.7)}n.closePath(),n.fillStyle=`hsla(${180+a*14},45%,${18+a%3*5}%,1)`,n.fill(),n.strokeStyle="rgba(148,233,255,0.35)",n.lineWidth=2,n.stroke()}n.strokeStyle="rgba(255,255,255,0.25)",n.lineWidth=5,n.beginPath(),n.moveTo(20,e*.7),n.bezierCurveTo(t*.3,e*.4,t*.6,e*.9,t-20,e*.45),n.stroke();const r=["#22c55e","#22c55e","#fbbf24","#f87171","#38bdf8"];for(let a=0;a<26;a++){const o=50+s()*(t-100),c=110+s()*(e-190);n.fillStyle=r[a%5],n.beginPath(),n.arc(o,c,9,0,Math.PI*2),n.fill(),n.strokeStyle="#fff",n.lineWidth=2,n.stroke()}n.fillStyle="rgba(7,11,26,0.8)",Dn(n,34,e-150,330,104,10),n.fill(),[["Registered","#22c55e"],["Pending","#fbbf24"],["Dispute","#f87171"]].forEach(([a,o],c)=>{n.fillStyle=o,n.beginPath(),n.arc(56,e-124+c*30,8,0,7),n.fill(),n.fillStyle="#e2e8f0",n.font="500 22px system-ui",n.fillText(a,74,e-116+c*30)}),n.fillStyle="#94a3b8",n.font="500 20px system-ui",n.fillText("not real locations",t-240,62),Vs(n,t,e)}const Ld=[["Deed reading (OCR + AI)","#22c55e"],["Parcel classification","#22c55e"],["Registration / possession check","#fbbf24"],["Profit calculation","#22c55e"],["Circle-rate refresh","#38bdf8"],["Land-deal data refresh","#38bdf8"],["Project news scan","#22c55e"]];function wy(n,t,e,i=0){Pr(n,t,"AUTOMATION STATUS","#22c55e"),Ld.forEach(([s,r],a)=>{const o=104+a*((e-150)/Ld.length),c=(i*(.05+a*.013)+a*.17)%1;n.fillStyle="#cbd5e1",n.font="600 25px system-ui",n.fillText(s,28,o+22),n.fillStyle="#111a33",Dn(n,t*.55,o+2,t*.4,24,12),n.fill(),n.fillStyle=r,Dn(n,t*.55,o+2,Math.max(24,t*.4*c),24,12),n.fill()}),Vs(n,t,e)}const qo=["Circle rates revised in District A (example)","New ring road approved near Parcel cluster 7","Registry office hours extended this month","Land-deal volume up 4% week on week","Metro extension tender opens next quarter","Court listing update for 3 tracked cases"];function Ey(n,t,e,i=0){Pr(n,t,"NEWS FEED","#a78bfa");const s=Math.floor(i/4)%qo.length;for(let r=0;r<5;r++){const a=96+r*92,o=qo[(r+s)%qo.length];n.fillStyle=r===0?"rgba(167,139,250,0.18)":"#0d1428",Dn(n,20,a,t-40,80,10),n.fill(),n.fillStyle="#a78bfa",n.font="700 20px ui-monospace",n.fillText(`EXAMPLE · ${String(9+r).padStart(2,"0")}:${String(r*13%60).padStart(2,"0")}`,36,a+30),n.fillStyle="#e2e8f0",n.font="600 26px system-ui",n.fillText(o.length>44?o.slice(0,43)+"…":o,36,a+64)}Vs(n,t,e)}function Ty(n,t,e,i=0){Pr(n,t,"HYBRID INFRA · ON-SITE + CLOUD","#38bdf8");const s=(c,l,d,f,h,p,g)=>{n.fillStyle="#0d1428",Dn(n,c,l,d,f,14),n.fill(),n.strokeStyle=g,n.lineWidth=3,n.stroke(),n.fillStyle=g,n.font="800 28px system-ui",n.fillText(h,c+18,l+40),p.forEach(([x,m,u],v)=>{n.fillStyle="#94a3b8",n.font="500 22px system-ui",n.fillText(x,c+18,l+80+v*34),n.fillStyle=u?"#4ade80":"#fbbf24",n.font="700 22px system-ui",n.textAlign="right",n.fillText(m,c+d-18,l+80+v*34),n.textAlign="left"})},r=(t-110)/2;s(28,90,r,e-160,"ON-SITE (B1)",[["Racks online","12 / 12",1],["CRAC cooling","OK · 22°C",1],["UPS","mains · 100%",1],["Generator","standby",1],["ISP A / ISP B","up / up",1]],"#22c55e"),s(28+r+54,90,r,e-160,"CLOUD",[["Uplink","2 × 1 Gbps",1],["Backup sync","last 02:00",1],["AI inference","healthy",1],["Object storage","68% used",1],["Failover","ready",1]],"#38bdf8");const a=28+r+27,o=e/2;n.fillStyle="#38bdf8";for(let c=0;c<3;c++){const l=(i*.8+c/3)%1;n.globalAlpha=1-l,n.beginPath(),n.arc(a,o-40+l*80,7,0,7),n.fill()}n.globalAlpha=1,Vs(n,t,e)}function Vi(n,t,e,i,{px:s=900,x:r,y:a,z:o,rotY:c=0,frame:l=!0}={}){const d=ve.M,f=document.createElement("canvas");f.width=s,f.height=Math.round(s*e/t);const h=new vn(f);h.colorSpace=Pe,h.anisotropy=8;const p=new Pt;p.position.set(r,a,o),p.rotation.y=c,n.add(p),l&&p.add(Ct(t+.12,e+.12,.08,.03,d.graphite,{}));const g=new Zt(new ee(t,e),new te({map:h}));g.position.z=.045,p.add(g);const x=m=>{i(f.getContext("2d"),f.width,f.height,m),h.needsUpdate=!0};return x(0),{redraw:x,group:p}}function $l(n,t,e,i,s){const r=new Pt;return r.position.set(t,e,i),r.rotation.y=s,n.add(r),r.add(Ct(.22,.34,.05,.02,new lt({color:988970,metalness:.6,roughness:.3}),{})),r.add(Et(new ti(.06,20),ne("#22d3ee",2.2),{y:-.04,z:.03,cast:!1})),r.add($(.14,.05,.01,ne("#4ade80",1.8),{y:.1,z:.03,cast:!1})),r}function Ra(n,t,e,i,s=4937059){const r=$(1,2.25,.08,new lt({color:s,metalness:.5,roughness:.4}),{x:t,y:1.125,z:e});return r.rotation.y=i,n.add(r),r}function Dd(n,t,e,i,s){for(let r=0;r<i;r++)Nf(n,t+r*.75,e,s)}function Nd(n,t,e,i){const s=new Pt;s.position.set(t,0,e),s.rotation.y=i,n.add(s),s.add(Ct(1.8,2,.9,.03,new lt({color:15067115,roughness:.4}),{y:1}));for(let r=0;r<9;r++)s.add($(1.5,.03,.02,ve.M.graphite,{y:.4+r*.12,z:.46,cast:!1}));return s.add($(.35,.22,.02,ne("#38bdf8",1.4),{x:.55,y:1.65,z:.46,cast:!1})),s}function Uf(n,t,e,i,s,{perforated:r=!1,lifted:a=[]}={}){const o=Tn(256,256,(l,d,f)=>{if(l.fillStyle=r?"#9aa0ae":"#b9bccb",l.fillRect(0,0,d,f),l.strokeStyle="#6b7080",l.lineWidth=6,l.strokeRect(0,0,d,f),r){l.fillStyle="#585d6c";for(let h=24;h<d;h+=22)for(let p=24;p<f;p+=22)l.beginPath(),l.arc(h,p,5,0,7),l.fill()}});o.wrapS=o.wrapT=Li,o.repeat.set((i-t)/.6,(s-e)/.6);const c=Et(new ee(i-t,s-e),new lt({map:o,roughness:.7,metalness:.1}),{x:(t+i)/2,y:.11,z:(e+s)/2,cast:!1});c.rotation.x=-Math.PI/2,n.add(c),n.add($(i-t,.1,.04,ve.M.blackMetal,{x:(t+i)/2,y:.05,z:s}));for(const[l,d]of a){n.add($(.58,.02,.58,new lt({color:1381663}),{x:l,y:.115,z:d,cast:!1}));const f=$(.58,.03,.58,new lt({color:12172491}),{x:l+.1,y:.4,z:d+.35});f.rotation.x=1,n.add(f),["#3b82f6","#f59e0b","#22c55e"].forEach((h,p)=>{const g=gt(.02,.02,.56,new lt({color:h}),{x:l-.18+p*.12,y:.13,z:d},6);g.rotation.x=Math.PI/2,n.add(g)})}}function Kl(n,t,e,i,s,r,a=2.4){return Le(n,t,e,i,s,r,{w:a,h:.34,bg:"#7f1d1d",fg:"#fee2e2",size:38})}function Ay(n){const t=ve.M,e=new lt({color:4867411,roughness:.85});bs(n,[[-8.2,-9,-8.2,-4.7],[-8.2,-3.6,-8.2,-2.6],[-15,-2.6,-8.2,-2.6]],3,{tint:14207231}),Le(n,"DEPARTMENT HEAD",-11.6,3.25,-2.6,0,{w:2.6,h:.3,bg:"#312e81",fg:"#e0e7ff",size:40}),Aa(n,-13.2,-4,.75),[0,1,2,3].forEach(_=>{const M=_/4*Math.PI*2+.6;Sn(n,-13.2+Math.cos(M)*1.1,-4+Math.sin(M)*1.1,Math.atan2(Math.cos(M),Math.sin(M))+Math.PI)}),Rc(n,-14.6,-7,Math.PI/2),De(n,-9,-8.4,.9,1),Ji(n,-11.6,-5.4,6,5.2,t.rugIndigo),bs(n,[[-8.2,-2.6,-8.2,0],[-8.2,1.1,-8.2,4.2],[-15,4.2,-8.2,4.2]],3,{tint:13166335}),Le(n,"MEETING ROOM · 10",-11.6,3.25,4.2,0,{w:2.6,h:.3,bg:"#0c4a6e",fg:"#e0f2fe",size:40}),Td(n,-11,.8,3.4,1.3,10),Vi(n,2.6,1.6,Pd,{x:-14.65,y:2,z:-.3,rotY:Math.PI/2}),Vi(n,2.6,1.6,Id,{x:-14.65,y:2,z:2.4,rotY:Math.PI/2}),Uf(n,-7.6,-3.6,7.4,6,{lifted:[[-6.9,1.8],[6.6,-2.8]]});const i=new lt({color:15196888,roughness:.5}),s=["#f59e0b","#38bdf8","#22c55e","#f472b6"];[-4.8,0,4.8].forEach((_,M)=>{for(let S=0;S<2;S++)for(let A=0;A<2;A++){const y=_-.78+A*1.56,E=S?-.825:-1.575,R=S?1:-1;n.add(Ct(1.5,.05,.75,.02,i,{x:y,y:.86,z:E}));for(const N of[-1,1])n.add($(.05,.84,.6,t.blackMetal,{x:y+N*.7,y:.42,z:E}));const L=E-R*.26,D=S?0:Math.PI,F=Ct(.62,.38,.03,.01,t.graphite,{x:y,y:1.25,z:L});F.rotation.y=D,n.add(F);const P=Et(new ee(.56,.32),new te({color:new Tt(s[(M+S+A)%4]).multiplyScalar(.5)}),{x:y,y:1.25,z:L+R*.02,cast:!1});P.rotation.y=D,n.add(P),n.add($(.03,.3,.03,t.blackMetal,{x:y,y:1,z:L-R*.03})),n.add($(.2,.04,.06,ne("#facc15",1.2),{x:y+.5,y:.9,z:L,cast:!1})),Sn(n,y,E+R*.75,S?Math.PI:0)}n.add($(.06,.3,1.5,i,{x:_,y:1.05,z:-1.2})),n.add($(.05,2,.05,t.blackMetal,{x:_,y:1.95,z:-1.2}))}),n.add($(13.4,.04,.4,t.blackMetal,{y:2.95,z:-1.2,cast:!1}));for(let _=-6.6;_<=6.6;_+=.5)n.add($(.03,.03,.4,t.blackMetal,{x:_,y:2.97,z:-1.2,cast:!1}));["#3b82f6","#f59e0b","#22c55e","#e11d48"].forEach((_,M)=>{const S=gt(.025,.025,13.2,new lt({color:_}),{y:3,z:-1.33+M*.09,cast:!1},6);S.rotation.z=Math.PI/2,n.add(S)});for(const _ of[-6.6,6.6])n.add(gt(.01,.01,4,t.blackMetal,{x:_,y:5,z:-1.2},4));const r=Tn(600,600,(_,M,S)=>{_.strokeStyle="#fbbf24",_.lineWidth=10,_.setLineDash([36,22]),_.strokeRect(10,10,M-20,S-20),_.fillStyle="rgba(251,191,36,0.85)",_.font="800 64px system-ui",_.textAlign="center",_.fillText("FUTURE BAY",M/2,S/2-10),_.font="700 56px system-ui",_.fillText("+4 desks",M/2,S/2+64)});[-2.6,2.6].forEach(_=>{const M=Et(new ee(3.2,3),new te({map:r,transparent:!0,depthWrite:!1}),{x:_,y:.125,z:3.8,cast:!1});M.rotation.x=-Math.PI/2,n.add(M)}),Le(n,"OPEN OFFICE · 12 DESKS → 20",0,3.35,-1.2,0,{w:3.6,h:.3,bg:"#1f2937",fg:"#fde68a",size:38}),Le(n,"LIVE MONITORING · PROPERTY INTELLIGENCE  (EXAMPLE DATA)",0,5,-yt+.5,0,{w:9,h:.36,bg:"#111827",fg:"#fde68a",size:40});const a=2.8,o=[Pd,Id,wy,Ey,Ty].map((_,M)=>Vi(n,a,1.9,_,{x:-5.9+M*2.95,y:3.6,z:-yt+.5,px:840})),c=Vi(n,14.6,.32,(_,M,S,A=0)=>{_.fillStyle="#0b1020",_.fillRect(0,0,M,S),_.fillStyle="#fde68a",_.font="700 30px system-ui",_.textBaseline="middle";const y="EXAMPLE DATA ·  17 deeds flagged for review  ·  circle-rate refresh queued for 02:00  ·  ISP A + ISP B up  ·  cloud backup synced  ·  3 field visits scheduled  ·  ",E=_.measureText(y).width,R=A*80%E;_.fillText(y+y+y,-R,S/2)},{x:0,y:2.38,z:-yt+.5,px:2400,frame:!1});n.add(Ct(6.4,.06,.9,.02,t.walnut,{x:-1,y:.78,z:-6.3}));for(const _ of[-1,1])n.add($(.06,.75,.7,t.blackMetal,{x:-1+_*3,y:.4,z:-6.3}));[-3,-1,1].forEach(_=>{n.add(Ct(.9,.5,.04,.01,t.graphite,{x:_,y:1.3,z:-6.55})),n.add(Et(new ee(.84,.45),new te({color:new Tt("#0ea5e9").multiplyScalar(.55)}),{x:_,y:1.3,z:-6.525,cast:!1})),Sn(n,_,-5.6,Math.PI)}),Le(n,"AI SUPERVISION DESK",-1,.55,-5.83,0,{w:1.8,h:.2,bg:"#0c4a6e",fg:"#e0f2fe",size:34}),Gi(n,[[7.9,-9,7.9,-6.2],[7.9,-6.2,10.8,-6.2],[10.8,-6.2,10.8,-9]],3,new lt({color:14078944,roughness:.7})),Ra(n,8.7,-6.12,0,9146275),Ra(n,10,-6.12,0,9146275),Le(n,"🚻 TOILETS",9.35,2.6,-6.08,0,{w:1.8,h:.3,bg:"#1e3a8a",fg:"#fff",size:40}),bs(n,[[7.9,-5.6,10.8,-5.6],[7.9,-5.6,7.9,-3],[7.9,-3,9,-3],[10,-3,10.8,-3],[10.8,-3,10.8,-5.6]],2.8,{tint:12573694}),Aa(n,9.35,-4.3,.5),Sn(n,9.35,-5,0),n.add(Ct(1.2,.7,.05,.02,t.graphite,{x:9.35,y:1.6,z:-5.5})),Le(n,"VIDEO CALL",9.35,3,-3,0,{w:1.6,h:.26,bg:"#1e3a8a",fg:"#fff",size:38}),Le(n,"WELCOME · VISITORS & CLIENTS",13,3,-8.75,0,{w:3.6,h:.34,bg:"#3f1d0b",fg:"#fde68a",size:40}),n.add(Ct(2.4,1.05,.7,.04,t.walnut,{x:12.6,y:.53,z:-6.6})),n.add($(2.5,.05,.8,t.marbleWhite,{x:12.6,y:1.07,z:-6.6})),Sn(n,12.6,-7.4,0),Cc(n,12.9,-1.4,Math.PI,t.linen,2.4),Os(n,11.4,-3.4,Math.PI/2,t.velvetTeal),to(n,12.9,-3,.5),De(n,14.4,-4.6,1,1),De(n,11.2,-8.4,.8,0),bs(n,[[9.6,0,11.6,0],[12.7,0,15,0],[9.6,0,9.6,4.2]],3,{tint:16639626}),Gi(n,[[9.6,4.3,15,4.3]],3,new lt({color:2761024,roughness:.6})),Ji(n,12.3,2.1,5,3.8,t.rugSand),Td(n,11.8,2.1,2.4,1.1,6);const l=Vi(n,2.9,1.65,Ry,{x:14.75,y:1.85,z:2.1,rotY:-Math.PI/2,px:1100}),d=En(3.4,.7,(_,M,S)=>{_.fillStyle="#2a2140",_.fillRect(0,0,M,S),_.fillStyle="#fbbf24",_.font="800 70px Georgia, serif",_.textAlign="center",_.textBaseline="middle",_.fillText("SIDATREYA",M/2,S*.38),_.fillStyle="#e9d5ff",_.font="600 36px system-ui",_.fillText("PROPERTY & LAND INTELLIGENCE",M/2,S*.76)},{frame:!1});d.position.set(12.3,2.2,4.2),d.rotation.y=Math.PI,n.add(d),Le(n,"CLIENT PRESENTATION ROOM",12.3,3.25,0,0,{w:3.4,h:.3,bg:"#713f12",fg:"#fef3c7",size:40}),De(n,10.1,3.7,.8,0),Gi(n,[[9.6,4.8,15,4.8],[9.6,4.8,9.6,5.6],[9.6,6.6,9.6,9]],3.2,e),Gi(n,[[9.6,9,15,9]],1.1,e),n.add($(5.4,.12,.2,ne("#ef4444",1.2),{x:12.3,y:3.15,z:4.7,cast:!1})),Ra(n,9.56,6.1,Math.PI/2,7020576),$l(n,9.48,1.35,6.85,-Math.PI/2),Vi(n,.5,.32,(_,M,S)=>{_.fillStyle="#04131c",_.fillRect(0,0,M,S),_.fillStyle="#67e8f9",_.font="800 70px ui-monospace",_.fillText("20°C",20,90),_.font="700 44px ui-monospace",_.fillText("RH 45%",24,160),_.fillStyle="#4ade80",_.fillText("● STABLE",24,220)},{x:9.48,y:1.6,z:7.6,rotY:-Math.PI/2,px:400}),Kl(n,"DEED RECORDS · RESTRICTED",9.46,2.75,6.6,-Math.PI/2,2.8),Le(n,"FIRE-RATED 2 HR · CLIMATE CONTROLLED",9.46,2.4,6.6,-Math.PI/2,{w:2.8,h:.22,bg:"#450a0a",fg:"#fecaca",size:30});const f=new lt({color:7041664,metalness:.7,roughness:.35}),h=[14075809,13219210,14866104].map(_=>new lt({color:_,roughness:.9}));for(let _=0;_<4;_++){const M=5.5+_*.85;n.add($(4,2.4,.5,f,{x:12.6,y:1.2,z:M}));for(let A=0;A<4;A++)for(let y=0;y<9;y++)n.add($(.36,.42,.06,h[(_+A+y)%3],{x:10.9+y*.42,y:.35+A*.56,z:M+.27,cast:!1}));const S=gt(.12,.12,.05,t.brass,{x:14.7,y:1.2,z:M+.27},12);S.rotation.x=Math.PI/2,n.add(S)}n.add(Ct(2.6,.06,.9,.02,i,{x:7.6,y:.86,z:7.4}));for(const _ of[-1,1])n.add($(.05,.84,.75,t.blackMetal,{x:7.6+_*1.2,y:.42,z:7.4}));n.add(Ct(.9,.4,.6,.04,new lt({color:15987958,roughness:.4}),{x:7,y:1.1,z:7.4}));const p=$(.7,.03,.45,t.blackMetal,{x:7,y:1.38,z:7.15});p.rotation.x=-.4,n.add(p);for(let _=0;_<6;_++)n.add($(.6,.008,.4,t.whiteMatte,{x:7,y:1.4+_*.01,z:7.15,cast:!1}));n.add($(.5,.04,.02,ne("#22d3ee",2),{x:7,y:1,z:7.71,cast:!1})),n.add(Ct(.8,.5,.04,.01,t.graphite,{x:8.3,y:1.35,z:7.15})),n.add(Et(new ee(.74,.44),new te({color:new Tt("#22d3ee").multiplyScalar(.5)}),{x:8.3,y:1.35,z:7.175,cast:!1})),Sn(n,7.6,8.3,Math.PI),Le(n,"SCAN & INTAKE → AI PIPELINE",7.6,2.2,6.85,0,{w:2.8,h:.3,bg:"#083344",fg:"#a5f3fc",size:38});const g=Tn(256,16,(_,M,S)=>{_.fillStyle="#000",_.fillRect(0,0,M,S);for(let A=0;A<M;A+=64)_.fillStyle="#22d3ee",_.fillRect(A,0,30,S)});g.wrapS=Li,g.repeat.set(12,1);const x=new te({map:g,transparent:!0,opacity:.9,blending:xi,depthWrite:!1}),m=Et(new ee(15,.08),x,{x:-.6,y:3.12,z:6.9,cast:!1});m.rotation.x=-Math.PI/2,n.add(m);const u=Et(new ee(1.8,.08),x,{x:6.9,y:2.25,z:6.88,cast:!1});u.rotation.z=Math.PI/2,n.add(u),n.add($(15,.06,.18,t.blackMetal,{x:-.6,y:3.08,z:6.9,cast:!1})),bs(n,[[-10.4,4.8,-10.4,9]],2.6,{tint:16639626}),n.add(Ct(4.2,.95,.65,.03,t.walnut,{x:-12.7,y:.48,z:8.5})),n.add($(4.3,.05,.75,t.marbleWhite,{x:-12.7,y:.98,z:8.5})),n.add(Ct(.8,1.9,.7,.04,new lt({color:13751771,metalness:.7,roughness:.3}),{x:-14.5,y:.95,z:5.4})),n.add(gt(.12,.1,.25,t.ceramic,{x:-12,y:1.13,z:8.5},14)),n.add(Ct(.45,.4,.35,.03,t.blackMetal,{x:-13.4,y:1.2,z:8.5})),Aa(n,-12.6,6.4,.6),Sn(n,-13.4,6.4,Math.PI/2),Sn(n,-11.8,6.4,-Math.PI/2),Le(n,"PANTRY",-12.7,2.3,9.1,0,{w:1.4,h:.28,bg:"#78350f",fg:"#fef3c7",size:40});const v=new lt({color:3621201,roughness:.8});Gi(n,[[-10.2,6.8,-8.2,6.8],[-8.2,6.8,-8.2,7.4]],2.8,v),Gi(n,[[-8.2,8.4,-8.2,9]],2.8,v),Nf(n,-9.6,8.2,0),$l(n,-8.1,1.3,7.8,Math.PI/2),Kl(n,"NETWORK · RESTRICTED",-9.2,2.45,6.7,Math.PI,1.9),wr(n,-14.65,4.2,-5.8,Math.PI/2,1.6,1,1),De(n,-7.2,7.4,1,0),De(n,5.6,5.6,.9,1),De(n,-7.2,-8.2,1,1),Pc(n,-6,6,2.6,6.2);let b=-1;return{waypoints:[[-6.4,1.2],[6.4,1.2],[6.4,-4.2],[-6.4,-4.2]],board:Gs(n,5.2,4.2,-.3),light:[[-10,0],[2,0],[12,2]],update(_){g.offset.x=-_*.6,!(_-b<.5)&&(b=_,o[2].redraw(_),o[3].redraw(_),o[4].redraw(_),c.redraw(_),l.redraw(_))}}}function Ry(n,t,e,i=0){const s=Math.floor(i/6)%3;n.fillStyle="#0f0a1e",n.fillRect(0,0,t,e);const r=n.createLinearGradient(0,0,t,e);if(r.addColorStop(0,"#1e1145"),r.addColorStop(1,"#3b1d0b"),n.fillStyle=r,n.fillRect(0,0,t,e),n.fillStyle="#fbbf24",n.font="800 50px Georgia, serif",n.fillText("Sidatreya · Property & Land Intelligence",40,80),n.fillStyle="#e9d5ff",n.font="600 32px system-ui",n.fillText(["Portfolio overview","Site visual · Parcel cluster 7","Value growth (illustrative)"][s],40,130),s===1){n.fillStyle="#365314",n.fillRect(60,170,t-120,e-250),n.strokeStyle="#fde68a",n.setLineDash([16,10]),n.lineWidth=6,n.strokeRect(160,220,t-320,e-360),n.setLineDash([]),[[260,280,220,140],[540,300,180,200],[780,260,120,120]].forEach(([a,o,c,l])=>{n.fillStyle="#e5e7eb",n.fillRect(a,o,c,l),n.fillStyle="#94a3b8",n.fillRect(a,o,c,18)});for(let a=0;a<14;a++)n.fillStyle="#4d7c0f",n.beginPath(),n.arc(120+a*62,e-110,22,0,7),n.fill()}else if(s===2){n.strokeStyle="#22c55e",n.lineWidth=8,n.beginPath();for(let a=0;a<=10;a++){const o=80+a*((t-160)/10),c=e-120-Math.pow(a,1.4)*22-Math.sin(a)*14;a?n.lineTo(o,c):n.moveTo(o,c)}n.stroke(),n.fillStyle="#94a3b8",n.font="500 24px system-ui",n.fillText("Indexed value, illustrative only",80,e-70)}else[["Parcels","1,248"],["Countries","India first"],["Clients served","38"]].forEach(([a,o],c)=>{const l=60+c*((t-120)/3);n.fillStyle="rgba(255,255,255,0.06)",Dn(n,l,190,(t-120)/3-30,220,18),n.fill(),n.fillStyle="#fff",n.font="800 60px system-ui",n.fillText(o,l+26,300),n.fillStyle="#c4b5fd",n.font="600 30px system-ui",n.fillText(a,l+26,360)});Vs(n,t,e)}function Cy(n){const t=ve.M,e=new lt({color:4935516,roughness:.85});Uf(n,-14.8,-8.8,3.8,3.6,{perforated:!0,lifted:[[-1,2.4]]}),Gi(n,[[3.8,-8.8,3.8,-6.9],[3.8,-5.8,3.8,3.6],[-14.8,3.6,3.8,3.6]],3.2,e),Dd(n,-11.6,-4.6,10,0),Dd(n,-11.6,-1.4,10,Math.PI),n.add($(7.6,.04,2.2,new lt({color:9684477,transparent:!0,opacity:.25,depthWrite:!1}),{x:-8.2,y:2.15,z:-3,cast:!1})),Le(n,"COLD AISLE",-8.2,2.4,-3,0,{w:1.6,h:.26,bg:"#1e3a8a",fg:"#dbeafe",size:40}),Nd(n,-14,-6.6,Math.PI/2),Nd(n,-14,-.6,Math.PI/2),Le(n,"CRAC 1",-13.5,2.3,-6.6,Math.PI/2,{w:1,h:.24,bg:"#0c4a6e",fg:"#e0f2fe",size:40}),Le(n,"CRAC 2",-13.5,2.3,-.6,Math.PI/2,{w:1,h:.24,bg:"#0c4a6e",fg:"#e0f2fe",size:40});const i=(h,p,g,x,m)=>{const u=new Pt;u.position.set(h,0,p),u.rotation.y=g,n.add(u),u.add(Ct(.9,1.2,.3,.03,new lt({color:2042167,metalness:.5}),{y:1.6})),u.add($(.6,.06,.02,ne(m,1.8),{y:1.9,z:.16,cast:!1})),u.add(gt(.07,.07,1,new lt({color:m==="#f59e0b"?16096779:3900150}),{y:2.7},10));const v=En(1.2,.3,(b,_,M)=>{b.fillStyle=m,b.fillRect(0,0,_,M),b.fillStyle="#0b0b10",b.font="800 46px system-ui",b.textAlign="center",b.textBaseline="middle",b.fillText(x,_/2,M/2+2)},{frame:!1});v.position.set(0,.8,.12),u.add(v)};i(-3,-8.75,0,"ISP A","#f59e0b"),i(-14.75,2.4,Math.PI/2,"ISP B","#60a5fa");const s=En(5.6,.9,(h,p,g)=>{h.fillStyle="#0b1324",h.fillRect(0,0,p,g),h.fillStyle="#38bdf8",h.fillRect(0,0,16,g),h.fillStyle="#e0f2fe",h.font="800 84px system-ui",h.textBaseline="middle",h.fillText("Hybrid: on-site servers + cloud",50,g/2+4)},{pxPerUnit:200});s.position.set(-5.4,4.2,-8.68),n.add(s);const r=Vi(n,3.2,1.9,(h,p,g,x=0)=>{h.fillStyle="#060b18",h.fillRect(0,0,p,g),h.fillStyle="#e2e8f0",h.font="800 40px system-ui",h.fillText("CLOUD UPLINK",30,60);for(let m=0;m<3;m++){h.fillStyle="#1f2937",h.fillRect(60+m*70,200,56,180);for(let u=0;u<6;u++)h.fillStyle=(u+m)%3?"#22c55e":"#38bdf8",h.fillRect(70+m*70,214+u*28,10,8)}h.fillStyle="#94a3b8",h.font="600 26px system-ui",h.fillText("ON-SITE · B1",60,420),h.fillStyle="#e0f2fe",[[p-230,230,60],[p-170,200,75],[p-100,235,55]].forEach(([m,u,v])=>{h.beginPath(),h.arc(m,u,v,0,7),h.fill()}),h.fillRect(p-290,230,245,60),h.fillStyle="#94a3b8",h.fillText("CLOUD",p-210,340),h.strokeStyle="#38bdf8",h.lineWidth=6,h.setLineDash([18,12]),h.lineDashOffset=-x*60,h.beginPath(),h.moveTo(280,290),h.lineTo(p-300,260),h.stroke(),h.setLineDash([]),h.fillStyle="#4ade80",h.font="700 26px system-ui",h.fillText("● LINK UP · 2 × 1 Gbps (example)",30,g-30)},{x:.4,y:4,z:-8.6,px:800});Ra(n,3.86,-6.35,Math.PI/2,3359061),$l(n,3.95,1.35,-5.55,Math.PI/2),Kl(n,"SERVER ROOM · AUTHORISED ONLY",3.95,2.75,-6.35,Math.PI/2,3),Le(n,"UPS & BATTERY BANK",9,2.7,-2.7,0,{w:2.6,h:.3,bg:"#14532d",fg:"#dcfce7",size:40});for(let h=0;h<2;h++)n.add(Ct(1.1,2,.85,.03,new lt({color:2042167,metalness:.5,roughness:.4}),{x:5.4+h*1.3,y:1,z:-1.8})),n.add($(.4,.25,.02,ne("#4ade80",1.5),{x:5.4+h*1.3,y:1.6,z:-1.36,cast:!1}));for(let h=0;h<2;h++)for(let p=0;p<6;p++)n.add($(.75,1.6,.7,new lt({color:4937059,roughness:.6}),{x:8.4+p*.85,y:.8,z:-1.8+h*2.4})),n.add($(.5,.05,.02,ne(p%3?"#4ade80":"#facc15",1.4),{x:8.4+p*.85,y:1.4,z:-1.8+h*2.4+(h?-.36:.36),cast:!1}));const a=new Pt;a.position.set(9,0,6.6),n.add(a),a.add(Ct(4.6,1.9,1.8,.06,new lt({color:13273604,roughness:.45,metalness:.3}),{y:1.05})),a.add($(4.8,.15,2,t.blackMetal,{y:.08}));for(let h=0;h<8;h++)a.add($(.04,1.2,.02,t.blackMetal,{x:-2+h*.15,y:1.1,z:.91,cast:!1}));a.add(gt(.12,.12,4.2,t.blackMetal,{x:1.8,y:4,z:-.4},12)),a.add(Ct(1.4,.9,1,.05,new lt({color:3621201}),{x:3.6,y:.45}));const o=En(2.8,.36,(h,p,g)=>{h.fillStyle="#111",h.fillRect(0,0,p,g),h.fillStyle="#facc15",h.font="800 46px system-ui",h.textAlign="center",h.textBaseline="middle",h.fillText("BACKUP GENERATOR · 500 kVA",p/2,g/2+2)},{frame:!1});o.position.set(0,2.25,.92),a.add(o);const c=new lt({color:10265519,transparent:!0,opacity:.35,side:Ne,depthWrite:!1}),l=Et(new ee(10,2.2),c,{x:9.6,y:1.1,z:4.4,cast:!1});n.add(l),Le(n,"B1 · SERVER & UTILITIES",12.6,3.2,-8.68,0,{w:3.6,h:.38,bg:"#0f172a",fg:"#e2e8f0",size:44});const d=Et(new ee(.12,12),new te({color:16436245}),{x:4.3,y:.012,z:.2,cast:!1});d.rotation.x=-Math.PI/2,n.add(d);let f=-1;return{waypoints:[[5.2,-4.6],[13.4,-4.6],[13.4,3.4],[5.2,3.4]],board:Gs(n,12.6,3.2,-.4),light:[[-6,-2],[9,0]],lightColor:13623551,update(h){h-f<.25||(f=h,r.redraw(h))}}}const Lc=(n,t=.55)=>new ei({color:n,transparent:!0,opacity:t,roughness:.04,metalness:0,transmission:.4,clearcoat:1,side:Ne});function $o(n,t,e,i,s,r,a,o=0,c=4.2,l=2.4){const d=En(c,l,(f,h,p)=>{f.fillStyle="#0a0812",f.fillRect(0,0,h,p),f.fillStyle=e,f.fillRect(0,0,h,10),f.fillStyle="#f8fafc",f.font="800 58px Georgia, serif",f.textBaseline="alphabetic",f.fillText(t,34,80),f.font="600 32px system-ui",i.forEach((g,x)=>{f.fillStyle=x%2?"#cbd5e1":e,f.fillText(g,34,140+x*46)})},{pxPerUnit:200});return d.position.set(s,r,a),d.rotation.y=o,n.add(d),d}function Ko(n,t,e,i,s,r){const a=new Tt().setHSL(r,.75,.6),o=Lc(a,.6);n.add(gt(.11*s,.13*s,.05*s,o,{x:t,y:e+.025*s,z:i},16));const c=Et(new Ve(.11*s,18,14),o,{x:t,y:e+.15*s,z:i});n.add(c),n.add(gt(.03*s,.045*s,.32*s,o,{x:t,y:e+.4*s,z:i},12)),n.add(gt(.05*s,.03*s,.06*s,o,{x:t,y:e+.59*s,z:i},12));const l=gt(.015*s,.015*s,.14*s,o,{x:t+.09*s,y:e+.16*s,z:i},8);l.rotation.z=-.9,n.add(l)}function Py(n,t,e,i,s,r){n.add(gt(.07,.08,.1,new lt({color:s,roughness:.35,metalness:.3}),{x:t,y:e+.05,z:i},20)),n.add($(.1,.012,.012,ne(r,2.4),{x:t,y:e+.06,z:i+.08,cast:!1})),n.add(gt(.025,.04,.14,Lc(14412542,.5),{x:t,y:e+.17,z:i},12))}function xa(n,t,e,i,s=0){const r=ve.M,a=new Pt;a.position.set(t,0,e),a.rotation.y=s,n.add(a),a.add(Ct(i,.9,.7,.03,r.blackMetal,{y:.45})),a.add($(i-.06,.02,.64,ne("#fde68a",1.3),{y:.91,cast:!1}));const o=Et(new An(i,.7,.7),r.glass,{y:1.27,cast:!1,receive:!1});return o.renderOrder=5,a.add(o),a}function Iy(n){const t=ve.M;Ji(n,-7.5,1,12,8,t.rugIndigo),Ji(n,7.5,1,12,8,t.rugSand),bs(n,[[-.6,-yt,-.6,-3],[.6,-yt,.6,-3]],3,{tint:12891645}),Le(n,"DAB LAB",-7.5,5.4,-yt+.35,0,{w:5,h:.9,bg:"#14092a",fg:"#c4b5fd",size:120}),Le(n,"Blown-glass gallery · dabber bar",-7.5,4.65,-yt+.35,0,{w:5,h:.4,bg:"#14092a",fg:"#e9d5ff",size:46}),n.add($(12,3.2,.3,t.graphite,{x:-7.5,y:2.3,z:-yt+.25}));for(let a=0;a<3;a++){const o=1.1+a*.95;n.add($(11.4,.05,.5,t.glass,{x:-7.5,y:o,z:-yt+.6,cast:!1})),n.add($(11.4,.02,.02,ne("#a78bfa",2),{x:-7.5,y:o+.03,z:-yt+.84,cast:!1}));for(let c=0;c<12;c++)Ko(n,-12.8+c*.95,o+.03,-yt+.6,1.1,(c*7+a*3)%12/12)}const e=xa(n,-10,-2.2,3),i=xa(n,-5,-2.2,3);for(let a=0;a<4;a++)Ko(e,-1.05+a*.7,.92,0,1.25,a/4),Ko(i,-1.05+a*.7,.92,0,1.25,(a+.5)/4);n.add(Ct(8.5,1.05,.9,.05,t.walnut,{x:-7.5,y:.53,z:1.6})),n.add($(8.6,.05,1,t.marbleWhite,{x:-7.5,y:1.08,z:1.6})),n.add($(8.5,.03,.03,ne("#c084fc",2),{x:-7.5,y:.1,z:2.08,cast:!1})),[[1118481,"#22d3ee"],[15067115,"#a3e635"],[7020968,"#f0abfc"],[1013358,"#5eead4"],[11817737,"#fde047"],[1981066,"#60a5fa"]].forEach(([a,o],c)=>Py(n,-11+c*1.4,1.1,1.6,a,o));for(let a=0;a<5;a++)Sn(n,-10.6+a*1.55,2.7,Math.PI,3018853);$o(n,"Dabber brands","#c084fc",["Puffco Peak Pro · Proxy","Dr. Dabber Switch · Boost EVO","Focus V Carta 2","Storz & Bickel","Lookah Seahorse · Halo"],-14.65,3,-.6,Math.PI/2,4.2,2.6),$o(n,"Glass on show","#a78bfa",["Heady recyclers & incyclers","Worked-glass rigs & sculptures","Quartz bangers · carb caps","Terp pearls · spinner caps"],-14.65,3,4.6,Math.PI/2,4.2,2.2),Cc(n,0,7.2,Math.PI,t.velvetPlum,3),Os(n,-1.9,5.6,Math.PI/2,t.velvetTeal),Os(n,1.9,5.6,-Math.PI/2,t.velvetTeal),to(n,0,5.6,.6),br(n,-2.8,7.6,12891645),br(n,2.8,7.6,8843180),Le(n,"DISPENSARY",7.5,5.4,-yt+.35,0,{w:5,h:.9,bg:"#05210f",fg:"#86efac",size:110}),Le(n,"Rosin · extracts · flower",7.5,4.65,-yt+.35,0,{w:5,h:.4,bg:"#05210f",fg:"#d9f99d",size:46}),n.add($(12,3.2,.3,t.walnut,{x:7.5,y:2.3,z:-yt+.25}));const r=new lt({color:1118481,roughness:.4,metalness:.5});for(let a=0;a<3;a++){const o=1.1+a*.95;n.add($(11.4,.05,.5,t.oak,{x:7.5,y:o,z:-yt+.6})),n.add($(11.4,.02,.02,ne("#86efac",1.6),{x:7.5,y:o+.03,z:-yt+.84,cast:!1}));for(let c=0;c<16;c++){const l=2.1+c*.72,d=new Tt().setHSL(a===0?.3:a===1?.12:.09,.7,.35+c%4*.08);n.add(gt(.12,.12,.26,Lc(16777215,.35),{x:l,y:o+.16,z:-yt+.6},14)),n.add(gt(.1,.1,.16,new lt({color:d,roughness:.8}),{x:l,y:o+.11,z:-yt+.6},12)),n.add(gt(.125,.125,.05,r,{x:l,y:o+.31,z:-yt+.6},14))}}n.add(Ct(8.5,1.05,.9,.05,t.oak,{x:7.5,y:.53,z:1.6})),n.add($(8.6,.05,1,t.marbleWhite,{x:7.5,y:1.08,z:1.6})),n.add($(8.5,.03,.03,ne("#4ade80",2),{x:7.5,y:.1,z:2.08,cast:!1}));for(let a=0;a<8;a++){const o=new Tt().setHSL(.11,.85,.45+a%3*.08);n.add(gt(.1,.1,.06,t.brass,{x:4.2+a*.9,y:1.14,z:1.5},16)),n.add(gt(.085,.085,.02,new ei({color:o,roughness:.15,clearcoat:1}),{x:4.2+a*.9,y:1.18,z:1.5},16))}return xa(n,5,-2.2,3),xa(n,10,-2.2,3),$o(n,"Today's menu","#4ade80",["Live rosin · cold-cure badder","Hash rosin · full-melt bubble hash","Live resin · diamonds & sauce","Top-shelf flower · indoor craft","Pre-rolls · edibles"],14,3,4.6,-Math.PI/2,4.2,2.6),De(n,-14.2,-8.2,1.1,1),De(n,14.2,7.9,1,0),De(n,-14.2,7.6,1,0),De(n,4.2,7.6,.9,1),De(n,-4.2,7.6,.9,1),{waypoints:[[-3,3.6],[-12,3.6],[-12,-.6],[12,-.6],[12,3.6],[3,3.6]],board:Gs(n,3.6,5.4,-.3),light:[[-7.5,0],[7.5,0]],lightColor:15321343}}const bn=Math.PI*2,si="#ffd9a0",Er={cx:(ue.x1-ce)/2,cz:0,A:(ue.x1+ce)/2+4.3,B:yt+1.8};let Ud=777;const Ze=()=>(Ud=Ud*16807%2147483647)/2147483647;function Fs(n,t,e,i,s=4,r=180){const a=[];for(let o=0;o<r;o++){const c=o/r*bn,l=Math.cos(c),d=Math.sin(c);a.push({x:n+e*Math.sign(l)*Math.abs(l)**(2/s),z:t+i*Math.sign(d)*Math.abs(d)**(2/s),u:o/r})}return a}function _n(n,t,e,i,{cast:s=!0}={}){const r=n.length,a=n.map((p,g)=>{let x,m;if(!t&&g===0)x=n[1].x-p.x,m=n[1].z-p.z;else if(!t&&g===r-1)x=p.x-n[r-2].x,m=p.z-n[r-2].z;else{const v=n[(g-1+r)%r],b=n[(g+1)%r];x=b.x-v.x,m=b.z-v.z}const u=Math.hypot(x,m)||1;return{x:m/u,z:-x/u}}),o=n.map((p,g)=>{const x=e(p,g),m=a[g],u=(v,b)=>[p.x+m.x*v,b,p.z+m.z*v];return[u(x.d0,x.yb),u(x.d1,x.yb),u(x.d1,x.yt),u(x.d0,x.yt)]}),c=[],l=[],d=t?r:r-1;for(const[p,g]of[[0,3],[1,2],[3,2],[0,1]]){const x=c.length/3;for(let m=0;m<r;m++)c.push(...o[m][p],...o[m][g]);for(let m=0;m<d;m++){const u=x+m*2,v=x+(m+1)%r*2;l.push(u,v,u+1,v,v+1,u+1)}}const f=new Ae;f.setAttribute("position",new jt(c,3)),f.setIndex(l),f.computeVertexNormals();const h=new Zt(f,i);return h.castShadow=s,h.receiveShadow=!0,h}function Dc(n,t,e,i){const s=new zs(n.map(o=>new at(o.x,-o.z))),r=new Rr(s,{depth:e,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:3,curveSegments:4});r.rotateX(-Math.PI/2);const a=new Zt(r,i);return a.position.y=t,a.receiveShadow=!0,a.castShadow=!0,a}function Od(n,t,e,i,s,r=[0,0,0]){const a=new zs(t.map(([l,d])=>new at(l,d))),o=new Rr(a,{depth:e,bevelEnabled:!1});o.translate(0,0,-e/2);const c=new Zt(o,i);return c.position.set(...s),c.rotation.set(...r),c.castShadow=!0,n.add(c),c}const ka=(n,t,e)=>Math.max(0,Math.sin(n*bn*t+e));function Ly(n,t){const e=ve.M,{cx:i,cz:s,A:r,B:a}=Er,o=Fs(i,s,r,a,4.2),c=t.level*1.15;n.add(Dc(o,-.62,.5,e.plinth));const l=p=>({yb:-.9-1.1*ka(p.u,2,c+Math.PI)**1.5,yt:.3+1.25*ka(p.u,2,c)**2,d0:-.05,d1:.42});n.add(_n(o,!0,l,e.shell)),n.add(_n(o,!0,p=>{const g=l(p);return{yb:g.yb-.02,yt:g.yb+.03,d0:.1,d1:.16}},ne(si,1.7),{cast:!1}));const d=e.shell,f=new An(.1,Yi,.7);o.filter(p=>p.z<-a*.55||p.x<i-r*.8).forEach((p,g)=>{if(g%4)return;const x=Et(f,d,{x:p.x,y:Yi/2-.6,z:p.z,receive:!1});x.rotation.y=Math.atan2(p.x-i,p.z-s)+.6*Math.sin(p.u*bn*3+c),n.add(x)}),Od(n,[[0,0],[3.8,.05],[0,.55]],.12,e.shell,[i-r+.4,.4,yt+1.2],[0,.5+t.level*.2,0]),Od(n,[[0,0],[-3.2,0],[0,2.4]],.14,e.shell,[ue.x1+1.1,0,ue.z1+.5],[0,-.3,0])}function Dy(n,t){const e=ve.M,i=t.level*.9,s=[];for(let a=0;a<=90;a++)s.push({x:-ce+.2+a/90*(ce*2-.4),z:-yt+.3,u:a/90});const r=[];for(let a=0;a<=60;a++)r.push({z:yt-.4-a/60*(yt*2-.8),x:-ce+.3,u:a/60});for(const[a,o]of[[s,2.5],[r,1.6]]){const c=l=>{const d=6.15+.35*Math.sin(l.u*bn*o+i);return{yb:d,yt:d+.28,d0:0,d1:-.75}};n.add(_n(a,!1,c,e.shell,{cast:!1})),n.add(_n(a,!1,l=>{const d=c(l);return{yb:d.yb-.03,yt:d.yb,d0:-.55,d1:-.7}},ne(si,2),{cast:!1}))}n.add($(ce*2-.4,.03,.05,ne("#ffcf8a",1.4),{y:.03,z:-yt+.12,cast:!1}))}function _a(n,{x:t,y:e,z:i,rotY:s=0,w:r=10,h:a=.32,items:o,label:c="EXAMPLE DATA · NOT LIVE PRICES",speed:l=.02}){const h=Tn(4096,96,x=>{x.fillStyle="#05070c",x.fillRect(0,0,4096,96),x.font="700 54px ui-monospace, Menlo, monospace",x.textBaseline="middle";let m=20;const u=(v,b)=>{x.fillStyle=b,x.fillText(v,m,96/2+2),m+=x.measureText(v).width+40};for(;m<3896;){x.fillStyle="#f59e0b",x.fillRect(m-8,14,x.measureText(c).width+16,68),x.fillStyle="#111",x.fillText(c,m,50),m+=x.measureText(c).width+50;for(const v of o){if(m>3796)break;u(v.t,v.up===void 0?"#e5e7eb":v.up?"#22c55e":"#ef4444")}}});h.wrapS=Li,h.repeat.x=Math.min(1,r/a*(96/4096));const p=new Pt;p.position.set(t,e,i),p.rotation.y=s,n.add(p),p.add($(r+.08,a+.08,.06,ve.M.graphite,{cast:!1}));const g=Et(new ee(r,a),new te({map:h,color:new Tt(1.25,1.25,1.25)}),{z:.035,cast:!1});return p.add(g),{group:p,update:x=>{h.offset.x=x*l%1}}}const va=[{t:"NIFTY 50 ▲ 0.62%",up:!0},{t:"SENSEX ▲ 0.61%",up:!0},{t:"RELIANCE ▲ 1.00%",up:!0},{t:"TCS ▼ 0.31%",up:!1},{t:"HDFCBANK ▲ 0.95%",up:!0},{t:"INFY ▲ 1.18%",up:!0},{t:"S&P 500 ▲ 0.45%",up:!0},{t:"NASDAQ ▼ 0.12%",up:!1},{t:"GOLD ▲ 0.20%",up:!0}];function Zl(n,{x:t,z:e,rx:i=3.2,rz:s=2,fest:r,skylight:a=!0,bamboo:o=!0,koi:c=!0,sign:l=!1,ceil:d=7}){const f=ve.M,h=new Pt;h.position.set(t,0,e),n.add(h);const p=[],g=Fs(0,0,i,s,2,96);h.add(_n(g,!0,k=>({yb:0,yt:.32+.1*Math.sin(k.u*bn*2),d0:0,d1:.28}),f.shell)),h.add(_n(g,!0,k=>({yb:.33+.1*Math.sin(k.u*bn*2),yt:.36+.1*Math.sin(k.u*bn*2),d0:.04,d1:.08}),ne(si,1.6),{cast:!1}));const x=[[-.45,-.25,.55],[.35,.3,.42],[.55,-.35,.3],[-.15,.45,.26]],m=Tn(1024,1024,(k,nt,ft)=>{k.fillStyle="#e8e3d8",k.fillRect(0,0,nt,ft);for(let B=0;B<4e3;B++)k.fillStyle=`rgba(120,110,95,${Ze()*.18})`,k.fillRect(Ze()*nt,Ze()*ft,2,2);k.strokeStyle="rgba(140,128,110,0.55)",k.lineWidth=3;for(let B=40;B<nt*.75;B+=18)k.beginPath(),k.ellipse(nt/2,ft/2,B,B,0,0,bn),k.stroke();for(const[B,q,ht]of x){const Ot=nt/2+B*nt/2,xt=ft/2+q*ft/2;k.fillStyle="#e8e3d8",k.beginPath(),k.arc(Ot,xt,ht*260+60,0,bn),k.fill();for(let Ht=0;Ht<4;Ht++)k.beginPath(),k.arc(Ot,xt,ht*200+20+Ht*18,0,bn),k.stroke()}}),u=Et(new ti(1,72),new lt({map:m,roughness:.95}),{y:.02,cast:!1});u.rotation.x=-Math.PI/2,u.scale.set(i-.02,s-.02,1),h.add(u);const v=new lt({color:7827562,roughness:.92,flatShading:!0}),b=new lt({color:5208626,roughness:1,flatShading:!0});for(const[k,nt,ft]of x){const B=Et(new xc(1,0),v,{x:k*i,y:ft*.35,z:nt*s});B.scale.set(ft*1.25,ft*.85,ft),B.rotation.set(Ze(),Ze()*3,Ze()*.4),h.add(B);for(let q=0;q<4;q++){const ht=Et(new Cs(.22*ft+.08,0),b,{x:k*i+Math.cos(q*1.7)*ft*1.1,y:.05,z:nt*s+Math.sin(q*1.7)*ft*.9});ht.scale.y=.35,h.add(ht)}}const _=-.05*i,M=-.05*s,S=new lt({color:4863014,roughness:.85}),A=gt(.07,.12,1.5,S,{x:_,y:.75,z:M},8);A.rotation.z=.12,h.add(A);for(let k=0;k<4;k++){const nt=gt(.03,.06,1,S,{x:_+Math.cos(k*1.6)*.3,y:1.6,z:M+Math.sin(k*1.6)*.3},6);nt.rotation.set(Math.sin(k*1.6)*.7,0,-Math.cos(k*1.6)*.7),h.add(nt)}const y=110,E=new Fl(new Cs(.22,0),new lt({roughness:.7,flatShading:!0}),y),R=new he,L=new Tt,D=["#8f1a14","#a8231a","#c2361f","#7a1410","#b8481f"];for(let k=0;k<y;k++){const nt=Ze()*bn,ft=Math.sqrt(Ze())*1.35,B=1.9+Ze()*.75-ft*.25;R.compose(new I(_+Math.cos(nt)*ft,B,M+Math.sin(nt)*ft*.85),new Ln().setFromEuler(new vi(Ze(),Ze(),Ze())),new I(1,.6,1).multiplyScalar(.7+Ze()*.6)),E.setMatrixAt(k,R),E.setColorAt(k,L.set(D[k%D.length]))}if(E.castShadow=!0,h.add(E),o){const k=new lt({color:9416266,roughness:.5}),nt=new lt({color:6265402,roughness:.6,side:Ne});for(let ft=0;ft<9;ft++){const B=.62*i+(Ze()-.5)*.7,q=-.2*s+(Ze()-.5)*.8,ht=Math.min(d-.8,3.6+Ze()*1.8),Ot=gt(.045,.05,ht,k,{x:B,y:ht/2,z:q},8);Ot.rotation.z=(Ze()-.5)*.08,h.add(Ot);for(let xt=0;xt<6;xt++){const Ht=Et(new ee(.5,.1),nt,{x:B+Math.cos(xt)*.2,y:ht*(.6+xt*.07),z:q+Math.sin(xt)*.2,cast:!1});Ht.rotation.set(.3,xt*1.1,-.4),h.add(Ht)}}}const F=.62*i,P=.45*s,N=new te({color:new Tt("#ffc46b").multiplyScalar(2.4)});h.add(gt(.22,.26,.12,v,{x:F,y:.06,z:P},6)),h.add(gt(.07,.09,.55,v,{x:F,y:.4,z:P},8)),h.add(gt(.2,.16,.08,v,{x:F,y:.72,z:P},6)),h.add($(.2,.2,.2,N,{x:F,y:.86,z:P,cast:!1})),h.add(Et(new gi(.34,.2,6),v,{x:F,y:1.06,z:P})),h.add(Et(new Ve(.05,8,6),v,{x:F,y:1.19,z:P}));const X=-.62*i,H=.4*s;h.add(gt(.32,.36,.38,v,{x:X,y:.19,z:H},10));const et=new ei({color:2051927,roughness:.04,metalness:.1,clearcoat:1}),Z=Et(new ti(.24,20),et,{x:X,y:.385,z:H,cast:!1});Z.rotation.x=-Math.PI/2,h.add(Z);const tt=gt(.025,.025,.7,new lt({color:10465626}),{x:X+.35,y:.55,z:H},8);if(tt.rotation.z=1.2,h.add(tt),c){const k=.25*i,nt=-.55*s+.25,ft=Et(new ti(1,40),et,{x:k,y:.03,z:nt,cast:!1});ft.rotation.x=-Math.PI/2,ft.scale.set(.9,.5,1),h.add(ft);const B=[];for(let q=0;q<5;q++){const ht=Et(new _r(.05,.16,4,8),new lt({color:q%2?16742938:16117990,roughness:.4,emissive:q%2?4462592:2236962}),{y:.05,cast:!1});ht.rotation.z=Math.PI/2;const Ot=new Pt;Ot.position.set(k,0,nt),Ot.add(ht),ht.position.x=.35+q*.08,h.add(Ot),B.push(Ot)}p.push(q=>B.forEach((ht,Ot)=>{ht.rotation.y=q*(.35+Ot*.07)+Ot,ht.scale.set(1,1,.55)}));for(let q=0;q<4;q++)h.add(gt(.22,.24,.07,v,{x:k-.9+q*.6,y:.04,z:nt+.55+Math.sin(q)*.12},10))}const j=-.3*i,Ut=.62*s;h.add(Ct(.5,.14,.34,.04,new lt({color:3881791,roughness:.6}),{x:j,y:.07,z:Ut}));const ot=gt(.03,.05,.4,S,{x:j,y:.32,z:Ut},6);ot.rotation.z=.4,h.add(ot);for(let k=0;k<4;k++){const nt=Et(new Cs(.13,0),new lt({color:4025132,flatShading:!0}),{x:j-.1+k*.08,y:.5+k%2*.06,z:Ut});nt.scale.y=.5,h.add(nt)}if(l){const k=Tn(512,256,(B,q,ht)=>{B.fillStyle="#2b2b2e",B.fillRect(0,0,q,ht),B.fillStyle="#c9c5bd",B.font="600 46px Georgia, serif",B.textAlign="center",B.textBaseline="middle",B.fillText("SIDATREYA DESIGNS",q/2,ht/2)}),nt=Ct(1.3,.75,.22,.03,new lt({color:2829102,roughness:.8}),{x:.75*i,y:.38,z:.75*s});nt.rotation.set(-.12,-.5,0),h.add(nt);const ft=Et(new ee(1.2,.6),new lt({map:k,roughness:.8}),{z:.115,cast:!1});nt.add(ft)}if(r){const k=Math.round((i+s)*3);for(let nt=0;nt<k;nt++){const ft=nt/k*bn;r.diya(t+Math.cos(ft)*(i+.45),e+Math.sin(ft)*(s+.45))}}if(a){const k=Fs(0,0,i*.7,s*.7,2,64);h.add(_n(k,!0,()=>({yb:d-.25,yt:d,d0:0,d1:.35}),f.shell,{cast:!1}));const nt=document.createElement("canvas");nt.width=8,nt.height=256;const ft=nt.getContext("2d"),B=ft.createLinearGradient(0,0,0,256);B.addColorStop(0,"rgba(255,244,220,0.5)"),B.addColorStop(.7,"rgba(255,244,220,0.08)"),B.addColorStop(1,"rgba(255,244,220,0)"),ft.fillStyle=B,ft.fillRect(0,0,8,256);const q=new vn(nt);q.colorSpace=Pe;const ht=new te({map:q,transparent:!0,opacity:.14,blending:xi,depthWrite:!1,side:Ii});for(const Ht of[.75]){const me=Et(new gn(.7*Ht,.95*Ht,d-.1,40,1,!0),ht,{y:(d-.1)/2,cast:!1});me.scale.set(i,1,s),me.rotation.z=.06,me.renderOrder=8,h.add(me)}const Ot=Et(new ee(2,2),new te({map:Lf("rgba(255,240,205,0.22)"),transparent:!0,blending:xi,depthWrite:!1}),{y:.05,cast:!1});Ot.rotation.x=-Math.PI/2,Ot.scale.set(i*.95,s*.95,1),h.add(Ot);const xt=new Mf(16773594,22,d+4,.7,.7,1.5);xt.position.set(.3,d+.5,0),xt.target.position.set(0,0,0),h.add(xt,xt.target),p.push(Ht=>{ht.opacity=.13+Math.sin(Ht*.6)*.03})}return{group:h,update:k=>p.forEach(nt=>nt(k))}}function Ny(n,{x:t,z:e,rotY:i=0,s=1.4}){const r=ve.M,a=new Pt;a.position.set(t,0,e),a.rotation.y=i,n.add(a);const o=Fs(0,0,1.9,1.05,3,72);a.add(Dc(o,0,.42,r.shell)),a.add(_n(o,!0,()=>({yb:.05,yt:.09,d0:.03,d1:.08}),ne(si,1.8),{cast:!1}));const c=new Pt;c.position.y=.48,c.scale.setScalar(s),a.add(c);const l=r.bullBronze,d=(x,m,u,v,b,_,M=0,S=0)=>{const A=Et(new Ve(1,28,20),l,{x:v,y:b,z:_});return A.scale.set(x,m,u),A.rotation.set(0,S,M),c.add(A),A};d(.78,.36,.34,-.05,1.02,0,.12),d(.46,.46,.4,.42,1.08,0,-.35),d(.36,.34,.33,-.62,1.12,0,.25),d(.32,.22,.26,.2,.78,0,0),d(.24,.22,.26,.78,.86,0,-.7),d(.26,.17,.2,1.02,.66,0,-.95),d(.11,.1,.14,1.16,.46,0,0);for(const x of[-1,1])d(.05,.04,.03,1.12,.7,x*.15);for(const x of[-1,1]){const m=new Bl([new I(.98,.8,x*.14),new I(1,.86,x*.38),new I(1.14,.98,x*.52),new I(1.36,1.06,x*.46)]),u=new za(m,20,.05,8),v=u.attributes.position,b=new I;for(let _=0;_<v.count;_++){const M=Math.floor(_/9)/20,S=m.getPoint(Math.min(1,M));b.fromBufferAttribute(v,_).sub(S).multiplyScalar(1-.85*M).add(S),v.setXYZ(_,b.x,b.y,b.z)}c.add(Et(u,l))}const f=new lt({color:2759181,metalness:1,roughness:.45}),h=(x,m,u,v,b,_,M=.1)=>{const S=new Pt;S.position.set(x,.92,m),S.rotation.z=u,c.add(S),S.add(gt(M,M*.8,b,l,{y:-b/2},10));const A=new Pt;A.position.y=-b,A.rotation.z=v,S.add(A),A.add(Et(new Ve(M*.85,10,8),l)),A.add(gt(M*.7,M*.55,_,l,{y:-_/2},10)),A.add(gt(M*.6,M*.75,.08,f,{y:-_-.02},10))};h(.52,.17,-.65,.45,.42,.44,.12),h(.38,-.17,-.3,.1,.42,.46,.12),h(-.66,.17,.7,-.15,.48,.5,.12),h(-.58,-.17,.45,.05,.48,.5,.12);const p=new Bl([new I(-.94,1.22,0),new I(-1.16,1.42,.04),new I(-1.08,1.7,.08),new I(-.86,1.74,.06)]);c.add(Et(new za(p,16,.028,6),l)),d(.06,.1,.06,-.83,1.76,.06),c.traverse(x=>{x.isMesh&&(x.castShadow=!0)});const g=new Mf(16769720,40,10,.5,.5,1.4);return g.position.set(1.5,6.4,2),g.target=a,a.add(g),a}function Fd(n,t,e,i,s=1){const r=new Pt;r.position.set(t,e,i),r.scale.setScalar(s),n.add(r);const a=new lt({color:13936202,metalness:1,roughness:.25,wireframe:!0,emissive:3810568});r.add(new Zt(new Mc(1,.38,140,10,2,3),a));const o=new te({color:9075296});for(const c of[-.8,.8])r.add(Et(new gn(.006,.006,3,4),o,{x:c,y:2.4,cast:!1}));return{group:r,update:c=>{r.rotation.y=c*.08}}}function Uy(n,t,e,i=1){const s=ve.M,r=new Pt;r.position.set(t,0,e),n.add(r),r.add(gt(.5,.6,.9,s.shell,{y:.45},32));const a=new Ae,o=[],c=[],l=120,d=6;for(let h=0;h<=l;h++)for(let p=0;p<=d;p++){const g=h/l*bn,x=(p/d-.5)*.5;o.push((1+x*Math.cos(g/2))*Math.cos(g)*.6,(1+x*Math.cos(g/2))*Math.sin(g)*.6,x*Math.sin(g/2)*.6)}for(let h=0;h<l;h++)for(let p=0;p<d;p++){const g=h*(d+1)+p,x=g+d+1;c.push(g,x,g+1,x,x+1,g+1)}a.setAttribute("position",new jt(o,3)),a.setIndex(c),a.computeVertexNormals();const f=new Zt(a,new lt({color:12745274,metalness:1,roughness:.25,side:Ne}));return f.position.y=1.65,f.scale.setScalar(i),f.castShadow=!0,r.add(f),{group:r,update:h=>{f.rotation.y=h*.15}}}function Oy(n,t,e,i,s,r=2.4,a=4.2){const o=Tn(512,Math.round(512*a/r),(l,d,f)=>{l.fillStyle="#1b1612",l.fillRect(0,0,d,f);for(let h=0;h<46;h++){l.strokeStyle=h%3?"rgba(201,160,90,0.85)":"rgba(120,90,50,0.9)",l.lineWidth=3,l.beginPath();for(let p=0;p<=f;p+=8)l.lineTo(h*(d/40)+Math.sin(p*.012+h*.25)*40+Math.sin(p*.004)*60,p);l.stroke()}}),c=new Pt;return c.position.set(t,e,i),c.rotation.y=s,n.add(c),c.add(Ct(r+.3,a+.3,.12,.12,ve.M.shell,{})),c.add(Et(new ee(r,a),new lt({map:o,metalness:.6,roughness:.35,emissive:16777215,emissiveMap:o,emissiveIntensity:.12}),{z:.065,cast:!1})),c.add($(r+.2,.03,.04,ne(si,1.6),{y:-a/2-.12,z:.07,cast:!1})),c}function Fy(n,t,e,i){const s=new Pt;s.position.set(t,e,i),n.add(s);const r=new lt({color:14199893,metalness:1,roughness:.2}),a=[1.3,1,.7].map((o,c)=>{const l=new Zt(new Zi(o,.035,10,80),r);return l.rotation.x=Math.PI/2+c*.35,s.add(l),l});return s.add(Et(new gn(.006,.006,7-e,4),new te({color:9075296}),{y:(7-e)/2,cast:!1})),{group:s,update:o=>a.forEach((c,l)=>{c.rotation.z=o*(.1+l*.05),c.rotation.y=Math.sin(o*.3+l)*.4})}}function zy(n,{x:t,z:e,r:i,a0:s,a1:r,h:a=2.6}){const o=[];for(let l=0;l<=40;l++){const d=s+(r-s)*(l/40);o.push({x:t+Math.sin(d)*i,z:e+Math.cos(d)*i,u:l/40})}n.add(_n(o,!1,l=>({yb:0,yt:a+.25*Math.sin(l.u*Math.PI),d0:0,d1:.2}),ve.M.shell)),n.add(_n(o,!1,l=>({yb:a+.25*Math.sin(l.u*Math.PI),yt:a+.03+.25*Math.sin(l.u*Math.PI),d0:.05,d1:.15}),ne(si,2),{cast:!1}))}function By(n,t,e){const i=ve.M,{cx:s,cz:r,A:a,B:o}=Er,c=Fs(s,r,a,o,4.2);n.add(Dc(c,0,.6,i.plinth));const l=p=>({yb:-.3,yt:1+3.4*ka(p.u,1,2.4)**2+1.4*ka(p.u,2,.6)**2,d0:-.05,d1:.45});n.add(_n(c,!0,l,i.shell)),n.add(_n(c,!0,p=>{const g=l(p);return{yb:g.yt-.05,yt:g.yt,d0:0,d1:.08}},ne(si,1.8),{cast:!1}));const d=Zl(e||n,{x:-6.5,z:3.8,rx:3.6,rz:2.2,fest:t,skylight:!1,bamboo:!0,koi:!0,sign:!0,ceil:9}),f=Tn(2400,300,(p,g,x)=>{p.clearRect(0,0,g,x),p.font='800 220px "Helvetica Neue", Arial, sans-serif',p.textAlign="center",p.textBaseline="middle",p.lineJoin="round",p.lineWidth=18,p.strokeStyle="rgba(40,26,12,0.9)",p.strokeText("SIDATREYA DESIGNS",g/2,x/2+8),p.shadowColor="rgba(255,200,120,0.9)",p.shadowBlur=24,p.fillStyle="#ffd98a",p.fillText("SIDATREYA DESIGNS",g/2,x/2+8)}),h=Et(new ee(22,2.75),new te({map:f,transparent:!0,color:new Tt(1.12,1.08,1),depthWrite:!1}),{x:s-2,y:3.4,z:yt+1.6,cast:!1});h.rotation.x=-.05,h.renderOrder=9,n.add(h),n.add($(22.4,.08,.3,i.bronze,{x:s-2,y:1.95,z:yt+1.45}));for(const p of[-9,0,9])n.add($(.1,1.4,.1,i.bronze,{x:s-2+p,y:1.3,z:yt+1.45}));return{update:d.update,logo:h}}function ky(n,{x:t,y:e,z:i,w:s=30,h:r=.7}){const c=document.createElement("canvas");c.width=4096,c.height=96;const l=new vn(c);l.colorSpace=Pe,l.wrapS=Li,l.repeat.x=Math.min(1,s/r*(96/4096));const d=new Pt;d.position.set(t,e,i),n.add(d),d.add($(s+.1,r+.1,.08,ve.M.graphite,{cast:!1})),d.add(Et(new ee(s,r),new te({map:l,color:new Tt(1.3,1.3,1.3)}),{z:.045,cast:!1}));function f(h,p){const g=c.getContext("2d");g.fillStyle="#05070c",g.fillRect(0,0,4096,96);const m=h.map(b=>({a:b,s:p(b.id)})).filter(b=>b.s.status==="working");g.font="700 56px ui-monospace, Menlo, monospace",g.textBaseline="middle";let u=30;const v=(b,_)=>{g.fillStyle=_,g.fillText(b,u,96/2+2),u+=g.measureText(b).width+50};for(;u<3696;){v("● LIVE OFFICE DATA","#22c55e"),v(`${h.length} AGENTS`,"#f5f5f4"),v(`${m.length} WORKING`,"#86efac"),v(`${h.length-m.length} IDLE`,"#fcd34d");for(const b of m.slice(0,4))v(`${b.a.name.toUpperCase()} ▶ ON TASK`,"#e5e7eb");v("SIDATREYA DESIGNS","#f5c46b")}l.needsUpdate=!0}return{group:d,draw:f,update:h=>{l.offset.x=h*.015%1}}}function Hy(n,{x:t,z:e,rotY:i=0,w:s=12,h:r=6.75,y:a=15}){const o=ve.M,c=new Pt;c.position.set(t,0,e),c.rotation.y=i,n.add(c);for(const l of[-1,1]){const d=[];for(let g=0;g<=30;g++){const x=g/30;d.push([l*(s/2-.3)+l*Math.sin(x*Math.PI)*.9*(1-x),-2+x*(a+r/2+3)])}const f=new zs;f.moveTo(d[0][0]-.6,d[0][1]),d.forEach(([g,x],m)=>f.lineTo(g+(l>0?.35:-.35)*(1-m/30),x)),[...d].reverse().forEach(([g,x])=>f.lineTo(g-(l>0?.25:-.25),x));const h=new Rr(f,{depth:.6,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:2});h.translate(0,0,-.9);const p=new Zt(h,o.shell);p.castShadow=!0,c.add(p)}return c.add(Ct(s+.5,r+.5,.35,.2,o.shell,{y:a,z:-.2})),c.add($(s+.3,.04,.06,ne(si,2),{y:a-r/2-.2,z:0,cast:!1})),c.add($(s+.3,.04,.06,ne(si,2),{y:a+r/2+.2,z:0,cast:!1})),c}function Gy(n,{y0:t,y1:e}){const i=ve.M,{cx:s,cz:r,A:a,B:o}=Er,c=[{u0:.33,u1:.97,off:1.05,ya:t-.6,yb:e+2.6,hw:1.15,d:.34},{u0:.46,u1:1.04,off:1.55,ya:t+6.5,yb:e-3,hw:.7,d:.26}];for(const l of c){const f=[],h=Fs(s,r,a+l.off,o+l.off,4.2,720);for(let g=0;g<=220;g++){const x=l.u0+(l.u1-l.u0)*(g/220),m=Math.round((x%1+1)%1*720)%720;f.push({...h[m],s:g/220})}const p=g=>{const x=Math.sin(Math.PI*g.s)**.55,m=l.ya+(l.yb-l.ya)*(.5-.5*Math.cos(Math.PI*g.s));return{yb:m-l.hw*x,yt:m+l.hw*x,d0:0,d1:l.d*(.25+.75*x)}};n.add(_n(f,!1,p,i.shell)),n.add(_n(f,!1,g=>{const x=p(g);return{yb:x.yb-.02,yt:x.yb+.04,d0:x.d1-.06,d1:x.d1+.01}},ne(si,1.9),{cast:!1}))}}const In=n=>n*Yi;function Vy(n,t,e,{renderer:i,cssScene:s,onStationRedraw:r}){const a=ve.M=$v();Jv(a),n.background=new Tt(1713991),n.environment=Kv(i),n.environmentIntensity=.7,n.add(new r0(16773600,5916214,.85));const o=new kh(16770760,1.6);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-21,right:21,top:15,bottom:-15,near:1,far:70}),o.shadow.bias=-4e-4,o.shadow.normalBias=.03,n.add(o,o.target);const c=new kh(11122920,.45);c.position.set(-18,30,-22),n.add(c);const l=Zv(n,{hole:hy}),d=dy(n,In(-1)-.6,-.6),f=new Map,h=new Map,p=[],g=[];for(const k of e){const nt=new Pt;nt.position.y=In(k.level),nt.name=`floor-${k.id}`,n.add(nt),ly(nt,k),k.level>=0&&(Ly(nt,k),Dy(nt,k));const ft=t.filter(B=>B.floor===k.id);ft.forEach((B,q)=>h.set(B.id,my(nt,B,q,{onNeedsRedraw:r}))),f.set(k.id,{floor:k,group:nt,agents:ft})}const x={agents:t,stations:h,cssScene:s},m={trading:My(f.get("trading").group,x),admin:Sy(f.get("admin").group,x),studio:by(f.get("studio").group,x),property:Ay(f.get("property").group),b1:Cy(f.get("b1").group),recreation:Iy(f.get("recreation").group)},u=new Pt;u.position.y=In(Math.max(...e.map(k=>k.level))+1)-.6,n.add(u),cy(u);const v=new Pt;v.position.y=.62,u.add(v);const b=Xo(v);for(const[k,nt]of f){const ft=m[k];nt.content=ft;for(const[B,q]of ft.light||[]){const ht=new l0(ft.lightColor||16761992,10,17,1.7);ht.position.set(B,4.8,q),nt.group.add(ht),g.push(ht)}nt.manager=xy(nt.group,nt.floor,ft.waypoints,{board:ft.board}),ft.update&&p.push({id:k,fn:ft.update})}const _=(k,nt,ft)=>new I(k,nt,ft),M=[];for(const k of["trading","admin","studio","property","recreation"]){const nt=Xo(f.get(k).group);nt.stringLights([[_(-ce+.25,6.75,yt-.1),_(-ce+.25,6.75,-yt+.2),.35,3]]),M.push({id:k,fest:nt})}const S=M[1].fest,A=M[2].fest;S.lantern(-10,5.2,2,"#ff7b00"),S.lantern(9.5,5.4,2.4,"#ff006e"),S.rangoli(-1.6,5.4,1.3,1),A.lantern(-4,5.4,2.6,"#c77dff"),A.lantern(9.6,5.2,1,"#ffb703"),A.rangoli(-8.4,6.3,.95,2),M[0].fest.lantern(-11.2,5.4,5.6,"#ffb703"),M[3].fest.lantern(12.8,5.2,-4,"#ff7b00"),M[3].fest.diya(12.9,-3,.5);const y={trading:[],admin:[],studio:[],property:[],recreation:[],b1:[]},E=k=>f.get(k).group,R=M[0].fest,L=M[3].fest,D=Xo(E("b1"));M.push({id:"b1",fest:D}),zy(E("trading"),{x:1.2,z:5.6,r:3.2,a0:Math.PI-.62,a1:Math.PI+.62,h:2.4}),Ny(E("trading"),{x:1.3,z:4.4,rotY:-.35,s:1.45}),R.rangoli(1.3,6.9,.8,0);for(let k=0;k<9;k++){const nt=k/9*Math.PI*2;R.diya(1.3+Math.cos(nt)*2.25,4.4+Math.sin(nt)*1.45)}y.trading.push(Fd(E("trading"),-6.4,4.6,3.4,.85).update),y.trading.push(_a(E("trading"),{x:-ce+.35,y:5.55,z:0,rotY:Math.PI/2,w:14,h:.34,items:va}).update),y.admin.push(Zl(E("admin"),{x:3.4,z:6.7,rx:2.6,rz:1.45,fest:M[1].fest,bamboo:!1}).update),y.admin.push(Uy(E("admin"),-7.6,7.5).update),y.admin.push(_a(E("admin"),{x:0,y:5.75,z:-yt+.42,w:9.5,h:.32,items:va}).update),y.studio.push(Zl(E("studio"),{x:1,z:5.9,rx:4,rz:2.25,fest:M[2].fest,sign:!0}).update),Oy(E("studio"),-ce+.3,3,-.2,Math.PI/2,2.6,4.4),y.studio.push(Fd(E("studio"),9,5,1.2,.6).update),y.studio.push(_a(E("studio"),{x:-3.6,y:3.4,z:-yt+.42,w:12.5,h:.3,items:va}).update),L.rangoli(3.2,7.3,.85,1),y.property.push(Fy(E("property"),0,5.2,3.6).update),y.property.push(_a(E("property"),{x:0,y:5.6,z:-yt+.42,w:9,h:.3,items:va}).update),D.rangoli(6.4,.2,.75,2);const F=By(u,b,v),P=new Pt;n.add(P);const N=ky(P,{x:Er.cx,y:In(0)-1.25,z:yt+2.05,w:30,h:.62}),X=In(Math.max(...e.map(k=>k.level))+1)-.6,H=new Pt;n.add(H),Gy(P,{y0:In(0),y1:X});const et=ql(H,s,[{title:"LIVE MARKETS",sub:"TradingView ticker tape · live",url:Zn.ticker(),x:Er.cx-2,y:X+1.35,z:yt+1.75,w:21,h:.62}]),Z=Hy(P,{x:27.5,z:3.5,rotY:-.18,w:12,h:6.75,y:In(2)}),tt=ql(Z,s,[{title:"SIDATREYA DESIGNS · MARKETS",sub:"TradingView · live feed",url:Zn.symbolOverview(),x:0,y:In(2),z:0,w:12,h:6.75}]);let j=null;function Ut(k){j=k;const nt=k?f.get(k).floor.level:1/0;for(const q of f.values())q.group.visible=!k||q.floor.id===k;d.front.visible=k!=="b1",u.visible=!k;const ft=In(k?nt:1);o.position.set(12,ft+18,15),o.target.position.set(-1,ft,-1);const B=k?1:2.2;Object.assign(o.shadow.camera,{left:-21*B,right:21*B,top:15*B,bottom:-15*B,far:70*B}),o.shadow.camera.updateProjectionMatrix(),m.trading.markets.setLive(k==="trading"),P.visible=!k,H.visible=!k,et.setLive(!k),tt.setLive(!k)}Ut(null);const ot=k=>j?k===j:!0;return{byFloor:f,stations:h,content:m,setFloor:Ut,wallScreen:m.admin.feed,get current(){return j},hitTargets:[...h.values()].flatMap(k=>[k.hit,k.frame]).concat(m.studio.ups.map(k=>k.hit)),managerHits:[...f.values()].map(k=>k.manager.hit),updateManagers(k){for(const nt of f.values())nt.manager.setSummary(nt.agents,k);m.studio.drawBoard(k),N.draw(t,k)},update(k){l.update(k),M.forEach(({id:nt,fest:ft})=>ot(nt)&&ft.update(k)),h.forEach(nt=>nt.update(k,ot(nt.agent.floor)));for(const nt of f.values())nt.group.visible&&nt.manager.update(k);p.forEach(nt=>ot(nt.id)&&nt.fn(k)),m.trading.markets.sync(),j||(et.sync(),tt.sync(),N.update(k),F.update(k),b.update(k));for(const[nt,ft]of Object.entries(y))ot(nt)&&ft.forEach(B=>B(k));g.forEach((nt,ft)=>nt.intensity=10+Math.sin(k*3+ft*2)*.4)}}}function Wy({agents:n,floors:t,world:e,feed:i}){const s=document.getElementById("overlay"),r=s.querySelector(".ov-body"),a=s.querySelector(".ov-title");let o=null,c=null;const l=new Map,d=document.getElementById("btn-screens"),f=document.getElementById("btn-markets"),h=()=>{d.classList.toggle("on",o==="screens"),f.classList.toggle("on",o==="markets")};function p(){o=null,s.classList.add("hidden"),clearInterval(c),r.innerHTML="",l.clear(),h()}s.querySelector(".ov-close").onclick=p,window.addEventListener("keydown",u=>u.key==="Escape"&&o&&p()),s.addEventListener("click",u=>{u.target===s&&p()});function g(){o="screens",a.textContent="Agent screens",r.innerHTML="",r.className="ov-body screens";for(const u of[...t].reverse()){const v=n.filter(S=>S.floor===u.id),b=e.byFloor.get(u.id).manager.summary(),_=document.createElement("div");if(_.className="ov-floor",_.innerHTML=`<b>${u.label} · ${u.name}</b><span>${v.length?`${b.working}/${b.total} working`:"infrastructure"}${b.flags.length?` · ⚠ ${b.flags.map(S=>S.a.name).join(", ")}`:""}</span>`,r.appendChild(_),!v.length)continue;const M=document.createElement("div");M.className="ov-grid",r.appendChild(M);for(const S of v){const A=e.stations.get(S.id).tex.image,y=document.createElement("canvas");y.width=A.width,y.height=A.height,y.onclick=()=>{p(),window.office.focusAgent(S.id)},M.appendChild(y),l.set(S.id,y)}}m(),clearInterval(c),c=setInterval(m,4e3),s.classList.remove("hidden"),h()}function x(){o="markets",a.textContent="Markets · live (TradingView)",r.className="ov-body markets",r.innerHTML=`
      <iframe class="tv-ticker" src="${Zn.ticker()}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      <div class="tv-grid">
        <iframe src="${Zn.mini("BITSTAMP:BTCUSD")}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
        <iframe src="${Zn.mini("FX_IDC:USDINR")}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      </div>
      <iframe class="tv-overview" src="${Zn.overview()}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      <p class="tv-note">Market data by TradingView. Example dashboards on Floor 04 are placeholder data.</p>`,clearInterval(c),l.clear(),s.classList.remove("hidden"),h()}function m(){o==="screens"&&l.forEach((u,v)=>{const b=e.stations.get(v).tex.image;u.getContext("2d").drawImage(b,0,0)})}return d.onclick=()=>o==="screens"?p():g(),f.onclick=()=>o==="markets"?p():x(),{refresh:m,openScreens:g,openMarkets:x,close:p}}const Nc=new URLSearchParams(location.search).get("demo")==="1",Ge=Nc?Vv({intervalMs:3200}):Wv({url:"./status.json",intervalMs:15e3}),Uc=document.getElementById("app"),sn=new uv({antialias:!0,powerPreference:"high-performance"}),Xy=Math.min(window.innerWidth,window.innerHeight)<700;sn.setPixelRatio(Math.min(window.devicePixelRatio,Xy?1.25:1.75));sn.setSize(window.innerWidth,window.innerHeight);sn.shadowMap.enabled=!0;sn.shadowMap.type=or;sn.toneMapping=Xa;sn.toneMappingExposure=1;Uc.appendChild(sn.domElement);const Ir=new kv;Ir.setSize(window.innerWidth,window.innerHeight);Ir.domElement.className="css3d";Uc.appendChild(Ir.domElement);const Of=new tf,ns=new Rv;ns.setSize(window.innerWidth,window.innerHeight);ns.domElement.className="css2d";Uc.appendChild(ns.domElement);const eo=new tf,un=new mn(38,window.innerWidth/window.innerHeight,.1,600);function Oc(n){const t=window.innerWidth/window.innerHeight<1,e=window.innerWidth/window.innerHeight,i=t?Math.min(3.4,1.5/e):window.innerWidth<1e3?1.25:1;if(!n)return{pos:new I(37*i,34+6*i,84*i),target:new I(1.5,In(2.5)+.6,0)};const s=In(Hs.find(a=>a.id===n).level),r=n==="b1"?4.5:0;return{pos:new I(6*i,s+(13.2+r)*i,27.5*i),target:new I(t?1.5:-1.2,s+1.8,-2)}}const zd=new URLSearchParams(location.search);let yi=Hs.some(n=>n.id===zd.get("floor"))?zd.get("floor"):null,ni=Oc(yi);un.position.copy(ni.pos);const Nn=new mv(un,sn.domElement);Nn.target.copy(ni.target);Nn.enableDamping=!0;Nn.dampingFactor=.08;Nn.minDistance=4;Nn.maxDistance=150;Nn.maxPolarAngle=Math.PI*.47;Nn.update();const Ws=new Dv(sn);Ws.addPass(new Nv(eo,un));const Yy=new Us(new at(window.innerWidth,window.innerHeight),.6,.55,1);Ws.addPass(Yy);Ws.addPass(new If({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126,0.7152,0.0722));
      c.rgb = mix(c.rgb, c.rgb * vec3(1.05,1.0,0.94), 0.6);               // warm grade
      c.rgb += vec3(0.010,0.006,0.002) * (1.0 - smoothstep(0.0, 0.25, l));  // lift shadows towards indigo
      float v = smoothstep(0.95, 0.35, distance(vUv, vec2(0.5)));
      c.rgb *= mix(0.72, 1.0, v);
      gl_FragColor = c; }`}));Ws.addPass(new Ov);const Gn=Vy(eo,fn,Hs,{renderer:sn,cssScene:Of,onStationRedraw:n=>Tr(n)});Gn.setFloor(yi);document.getElementById("title").textContent=Tc.title;document.getElementById("subtitle").textContent=Tc.subtitle;document.title=Tc.title;const Zo=document.getElementById("sidebar"),Lr=new Map;for(const n of[...Hs].reverse()){const t=fn.filter(i=>i.floor===n.id),e=document.createElement("div");if(e.className="floor-head",e.textContent=`${n.label} · ${n.name}`,e.addEventListener("click",()=>Dr(n.id)),Zo.appendChild(e),!t.length){const i=document.createElement("div");i.className="floor-empty",i.textContent="Infrastructure · Floor Manager on duty",Zo.appendChild(i)}for(const i of t){const s=document.createElement("div");s.className="agent-card",s.style.setProperty("--c",i.color),s.innerHTML=`
      <div class="row"><div class="name"><span class="avatar"></span>${i.name}</div><span class="pill"></span></div>
      <div class="task"></div>
      <div class="bar"><i></i></div>`,s.addEventListener("click",()=>so(i.id)),Zo.appendChild(s),Lr.set(i.id,s)}}const qy=document.getElementById("floorbar"),Ff=new Map;for(const n of[{id:null,label:"ALL",name:"All floors"},...[...Hs].reverse()]){const t=document.createElement("button");t.innerHTML=`<b>${n.label}</b><span>${n.id?n.name:"Building"}</span>`,t.title=n.name,t.addEventListener("click",()=>Dr(n.id)),qy.appendChild(t),Ff.set(n.id,t)}function Dr(n,{fly:t=!0}={}){yi=n,Gn.setFloor(n),ni=Oc(n),Ff.forEach((i,s)=>i.classList.toggle("on",s===n)),document.body.dataset.floor=n||"all";const e=new URL(location.href);n?e.searchParams.set("floor",n):e.searchParams.delete("floor"),history.replaceState(null,"",e),t&&(no=null,Lr.forEach(i=>i.classList.remove("selected")),Ps.classList.add("hidden"),io(ni.pos.clone(),ni.target.clone()))}function Tr(n){const t=Ge.getState(n),e=Lr.get(n),i=e.querySelector(".pill");i.className=`pill ${t.status}`,i.textContent=t.status,e.querySelector(".task").textContent=t.task,e.querySelector(".bar").style.visibility=t.status==="working"&&t.hasProgress!==!1&&t.progress>0?"visible":"hidden",e.querySelector(".bar > i").style.width=`${Math.round(t.progress*100)}%`,Gn.stations.get(n).setData({...t,updatedAt:Ge.updatedAt||null,events:Ge.history.filter(s=>s.agentId===n).slice(-2)}),no===n&&Bf(n)}function zf(){const n=fn.map(e=>Ge.getState(e.id)),t=n.filter(e=>e.status==="working").length;document.getElementById("count-working").textContent=t,document.getElementById("count-idle").textContent=n.length-t,document.getElementById("count-total").textContent=n.length}const Ps=document.getElementById("infocard");let no=null;function Bf(n){const t=fn.find(s=>s.id===n),e=Ge.getState(n),i=Ge.history.filter(s=>s.agentId===n).slice(-4).reverse();Ps.style.setProperty("--c",t.color),Ps.innerHTML=`
    <button class="close" title="Close">×</button>
    <h3><span class="avatar" style="width:12px;height:12px;border-radius:4px;background:${t.color};box-shadow:0 0 10px ${t.color}"></span>${t.name}
      <span class="pill ${e.status}" style="margin-left:auto">${e.status}</span></h3>
    <div class="role">${t.role}</div>
    <div class="label">Current task</div>
    <div class="val">${e.task}</div>
    ${e.status==="working"&&e.progress>0?`<div class="bar" style="--c:${t.color}"><i style="width:${Math.round(e.progress*100)}%"></i></div>`:""}
    <div class="label">Recent activity</div>
    <ul>${i.length?i.map(s=>`<li><time>${Ba(s.ts)}</time>${s.message}</li>`).join(""):"<li>No activity yet</li>"}</ul>`,Ps.querySelector(".close").onclick=Fc}let di=null;function io(n,t,e=900){di={fromP:un.position.clone(),fromT:Nn.target.clone(),toP:n,toT:t,t0:performance.now(),ms:e}}function so(n){var o;const t=(o=fn.find(c=>c.id===n))==null?void 0:o.floor;t&&t!==yi&&Dr(t,{fly:!1}),no=n,Lr.forEach((c,l)=>c.classList.toggle("selected",l===n));const e=Gn.stations.get(n).screenView(),i=2*Math.atan(Math.tan(qa.degToRad(un.fov/2))*un.aspect),s=Math.max(2.2,e.width*1.05/(2*Math.tan(i/2)*(window.innerWidth>900?.52:.9))),r=e.center.clone(),a=r.clone().add(e.normal.clone().multiplyScalar(s)).add(new I(0,s*.12,0));io(a,r),Bf(n),Ps.classList.remove("hidden")}function Fc(){no=null,Lr.forEach(n=>n.classList.remove("selected")),Ps.classList.add("hidden"),io(ni.pos.clone(),ni.target.clone())}window.addEventListener("keydown",n=>{(n.key==="r"||n.key==="R"||n.key==="Escape")&&Fc()});const kf=n=>{for(let t=n;t;t=t.parent)if(!t.visible&&t!==n)return!1;return!0},Ha=new p0,Ga=new at;let Ca=null;sn.domElement.addEventListener("pointerdown",n=>Ca={x:n.clientX,y:n.clientY});sn.domElement.addEventListener("pointerup",n=>{if(!Ca||Math.hypot(n.clientX-Ca.x,n.clientY-Ca.y)>5)return;Ga.set(n.clientX/window.innerWidth*2-1,-(n.clientY/window.innerHeight)*2+1),Ha.setFromCamera(Ga,un);const t=Ha.intersectObjects(Gn.hitTargets.filter(kf),!1)[0];t&&so(t.object.userData.agentId)});sn.domElement.addEventListener("pointermove",n=>{Ga.set(n.clientX/window.innerWidth*2-1,-(n.clientY/window.innerHeight)*2+1),Ha.setFromCamera(Ga,un),sn.domElement.style.cursor=Ha.intersectObjects(Gn.hitTargets.filter(kf),!1).length?"pointer":""});ns.domElement.addEventListener("click",n=>{const t=n.target.closest(".tag");t&&t.dataset.agent?so(t.dataset.agent):t&&t.classList.contains("manager-tag")&&t.classList.toggle("open")});fn.forEach(n=>Tr(n.id));zf();const Hf=Wy({agents:fn,floors:Hs,world:Gn,feed:Ge}),zc=()=>Gn.wallScreen.draw(Ge.history,Ge.getState),Bc=()=>Gn.updateManagers(Ge.getState);Bc();zc();Ge.subscribe(n=>{if(n.type==="heartbeat"||n.type==="error")return Va();n.agentId&&Nc?Tr(n.agentId):fn.forEach(t=>Tr(t.id)),zf(),zc(),Bc(),Hf.refresh(),Va()});Ge.start();const $y=75*60*1e3,Ky=document.getElementById("live-label"),Bd=document.getElementById("live-chip"),kd=n=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});function Va(){let n,t;Nc?(n="demo · simulated feed",t="live"):Ge.updatedAt?Date.now()-Ge.updatedAt.getTime()>$y?(n=`stale · updated ${kd(Ge.updatedAt)}`,t="stale"):(n=`live · updated ${kd(Ge.updatedAt)}`,t="live"):(n=Ge.error?"offline · no status data":"connecting…",t="stale"),Ky.textContent=n,Bd.className=`chip ${t}`,Bd.title=Ge.updatedAt?`Last update: ${Ge.updatedAt.toLocaleString()}`:""}Va();const Zy=document.getElementById("clock");let Jy=0;const Gf=()=>{Zy.textContent=Ba(new Date),++Jy%30===0&&(fn.forEach(n=>Tr(n.id)),Bc()),zc(),Va()};Gf();setInterval(Gf,1e3);window.addEventListener("resize",()=>{un.aspect=window.innerWidth/window.innerHeight,un.updateProjectionMatrix(),sn.setSize(window.innerWidth,window.innerHeight),Ws.setSize(window.innerWidth,window.innerHeight),ns.setSize(window.innerWidth,window.innerHeight),Ir.setSize(window.innerWidth,window.innerHeight),ni=Oc(yi)});const Qy=performance.now(),jy=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;sn.setAnimationLoop(()=>{const n=(performance.now()-Qy)/1e3;if(di){const t=Math.min(1,(performance.now()-di.t0)/di.ms),e=jy(t);un.position.lerpVectors(di.fromP,di.toP,e),Nn.target.lerpVectors(di.fromT,di.toT,e),t>=1&&(di=null)}Nn.update(),Gn.update(n),Ws.render(),(yi==="trading"||!yi)&&Ir.render(Of,un),ns.render(eo,un),performance.now()-Vf>120&&t1()});let Vf=0,Jo=[];function t1(){Vf=performance.now(),Jo.length||(Jo=[...ns.domElement.querySelectorAll(".tag")]);const n=yi?[0,-1,1,-2,2,-3]:[0,-1,1],t=window.innerWidth,e=[];for(const r of Jo){if(r.classList.remove("declutter-hidden"),r.style.display==="none")continue;const a=r.getBoundingClientRect();if(!a.width||getComputedStyle(r).visibility==="hidden")continue;const o=parseFloat(r.dataset.oy||"0"),c=parseFloat(r.dataset.ox||"0");e.push({el:r,x0:a.left-c,x1:a.right-c,y0:a.top-o,y1:a.bottom-o,mgr:r.classList.contains("manager-tag")})}e.sort((r,a)=>r.mgr-a.mgr||a.y0-r.y0);const i=[],s=(r,a,o,c)=>i.some(l=>r<l.x1+2&&a>l.x0-2&&o<l.y1+1&&c>l.y0-1);for(const r of e){const a=r.y1-r.y0+3;let o=0;r.x1>t-4&&r.x0<t?o=t-4-r.x1:r.x0<4&&r.x1>0&&(o=4-r.x0);const c=r.x0+o,l=r.x1+o;let d=null;for(const f of n)if(!s(c,l,r.y0+f*a,r.y1+f*a)){d=f*a;break}d===null?(r.el.classList.add("declutter-hidden"),d=0,o=0):i.push({x0:c,x1:l,y0:r.y0+d,y1:r.y1+d}),(String(d)!==(r.el.dataset.oy||"0")||String(o)!==(r.el.dataset.ox||"0"))&&(r.el.dataset.oy=String(d),r.el.dataset.ox=String(o),r.el.style.marginTop=`${d}px`,r.el.style.marginLeft=`${o}px`)}}window.office={feed:Ge,focusAgent:so,clearFocus:Fc,selectFloor:Dr,overlays:Hf,scene:eo,camera:un,world:Gn,view:(n,t,e=10)=>io(new I(...n),new I(...t),e)};Dr(yi,{fly:!1});un.position.copy(ni.pos);Nn.target.copy(ni.target);Nn.update();
