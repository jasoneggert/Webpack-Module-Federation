(()=>{var e,r,t,n,o,a,i={463:(e,r,t)=>{window.app2Url="http://localhost:3002",t.e(575).then(t.bind(t,575))},841:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof app2)return e();t.l(app2Url+"/remoteEntry.js",(t=>{if("undefined"!=typeof app2)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"app2")})).then((()=>app2))}},u={};function f(e){var r=u[e];if(void 0!==r)return r.exports;var t=u[e]={exports:{}};return i[e](t,t.exports,f),t.exports}f.m=i,f.c=u,f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);f.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,f.d(o,a),o},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>e+".js",f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="app1:",f.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,u;if(void 0!==o)for(var p=document.getElementsByTagName("script"),l=0;l<p.length;l++){var s=p[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+o){i=s;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var c=(r,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),u&&document.head.appendChild(i)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={874:[874]},a={874:["default","./App",841]},f.f.remotes=(e,r)=>{f.o(o,e)&&o[e].forEach((e=>{var t=f.R;t||(t=[]);var n=a[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),f.m[e]=()=>{throw r},n.p=0},i=(e,t,a,i,u,f)=>{try{var p=e(t,a);if(!p||!p.then)return u(p,i,f);var l=p.then((e=>u(e,i)),o);if(!f)return l;r.push(n.p=l)}catch(e){o(e)}},u=(e,r,o)=>i(r.get,n[1],t,0,p,o),p=r=>{n.p=1,f.m[e]=e=>{e.exports=r()}};i(f,n[2],0,0,((e,r,t)=>e?i(f.I,n[0],0,e,u,t):o()),1)}}))},(()=>{f.S={};var e={},r={};f.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];f.o(f.S,t)||(f.S[t]={});var a=f.S[t],i="app1",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(o[r]={get:t,from:i,eager:!!n})},p=[];return"default"===t&&(u("react-dom","17.0.2",(()=>Promise.all([f.e(542),f.e(80)]).then((()=>()=>f(542))))),u("react","17.0.2",(()=>f.e(378).then((()=>()=>f(378))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=f(841);if(!o)return;var a=e=>e&&e.init&&e.init(f.S[t],n);if(o.then)return p.push(o.then(a,r));var i=a(o);if(i&&i.then)return p.push(i.catch(r))}catch(e){r(e)}})()),p.length?e[t]=Promise.all(p).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;f.g.importScripts&&(e=f.g.location+"");var r=f.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),f.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return n}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+f()+")":1===u?"("+f()+" || "+f()+")":2===u?i.pop()+" "+i.pop():r(u))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,f=!0;;u++,i++){var p,l,s=u<r.length?(typeof r[u])[0]:"";if(i>=n.length||"o"==(l=(typeof(p=n[i]))[0]))return!f||("u"==s?u>o&&!a:""==s!=a);if("u"==l){if(!f||"u"!=s)return!1}else if(f)if(s==l)if(u<=o){if(p!=r[u])return!1}else{if(a?p>r[u]:p<r[u])return!1;p!=r[u]&&(f=!1)}else if("s"!=s&&"n"!=s){if(a||u<=o)return!1;f=!1,u--}else{if(u<=o||l<s!=a)return!1;f=!1}else"s"!=s&&"n"!=s&&(f=!1,u--)}}var c=[],d=c.pop.bind(c);for(i=1;i<r.length;i++){var h=r[i];c.push(1==h?d()|d():2==h?d()&d():h?t(h,n):!d())}return!!d()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},o=(e,o,u,f)=>{var p=n(e,u);return t(f,p)||a(((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(e,u,p,f)),i(e[u][p])},a=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},i=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,n,o){var a=f.I(r);return a&&a.then?a.then(e.bind(e,r,f.S[r],t,n,o)):e(r,f.S[r],t,n,o)})(((e,r,t,n,a)=>r&&f.o(r,t)?o(r,0,t,n):a())),p={},l={471:()=>u("default","react",[1,17,0,2],(()=>f.e(378).then((()=>()=>f(378))))),711:()=>u("default","react-dom",[1,17,0,2],(()=>Promise.all([f.e(542),f.e(80)]).then((()=>()=>f(542))))),80:()=>u("default","react",[4,17,0,2],(()=>f.e(744).then((()=>()=>f(378)))))},s={80:[80],575:[471,711]};f.f.consumes=(e,r)=>{f.o(s,e)&&s[e].forEach((e=>{if(f.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,f.m[e]=t=>{delete f.c[e],t.exports=r()}},n=r=>{delete p[e],f.m[e]=t=>{throw delete f.c[e],r}};try{var o=l[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};f.f.j=(r,t)=>{var n=f.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^8(0|74)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=f.p+f.u(r),i=new Error;f.l(a,(t=>{if(f.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,u]=t,p=0;if(a.some((r=>0!==e[r]))){for(n in i)f.o(i,n)&&(f.m[n]=i[n]);u&&u(f)}for(r&&r(t);p<a.length;p++)o=a[p],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkapp1=self.webpackChunkapp1||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),f(463)})();