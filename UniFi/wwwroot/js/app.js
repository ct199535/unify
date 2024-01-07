
(function(){var n={2259:function(n,t,e){"use strict";var r=e(3862),o=e(3396);const l=(0,o._)("br",null,null,-1),u=(0,o._)("br",null,null,-1),i=(0,o._)("br",null,null,-1),a=(0,o._)("br",null,null,-1),c=(0,o._)("p",{style:{color:"white"}},"Step 1",-1),f=(0,o._)("p",{style:{color:"white"}},"Connect Your Solana Wallet",-1),s=(0,o._)("br",null,null,-1),p=(0,o._)("br",null,null,-1),d=(0,o._)("br",null,null,-1),b=(0,o._)("p",{style:{color:"white"}},"Step 2",-1),g=(0,o._)("p",{style:{color:"white"}},"Sign Message to Verify Wallet",-1),v=(0,o._)("br",null,null,-1);function y(n,t,e,r,y,h){const w=(0,o.up)("wallet-multi-button"),_=(0,o.up)("center");return(0,o.wg)(),(0,o.j4)(_,null,{default:(0,o.w5)((()=>[l,u,i,a,c,f,s,(0,o.Wm)(w,{dark:""}),p,d,b,g,v,(0,o._)("button",{class:"btn-normal",onClick:t[0]||(t[0]=(...n)=>r.signMsg&&r.signMsg(...n))},"Sign Message")])),_:1})}e(2801);var h=e(9844),w=e(6265),_=e.n(w),m=e(5941),O={components:{WalletMultiButton:h.aD},setup(){const{publicKey:n,signMessage:t}=(0,h.Os)(),e=()=>{if("phantom"in window){const n=window.phantom?.solana;if(n?.isPhantom)return n}};var r=!0;r=!!n.value;const o=()=>{n.value?(r=!0,m.log("true")):(r=!1,m.log("false"))},l=async()=>{if(!n.value)return alert("Connect your wallet first.");if(!t)return alert("Wallet Not supported");const r=e(),o=(new TextEncoder).encode("UniFy"),l=await r.signMessage(o,"utf8");if(!l)return alert("No signature");var u=(new TextEncoder).encode(n.value.toBase58());_()({method:"post",url:"/Profiles/AddWallet",data:{message:btoa(String.fromCharCode.apply(null,o)),signature:btoa(String.fromCharCode.apply(null,l.signature)),pub:btoa(String.fromCharCode.apply(null,u)),ver:btoa(String.fromCharCode.apply(null,n.value.toBytes()))}}).then((function(n){if(!n)return alert("Verification Failed");window.location.href="/"})).catch((function(n){m.log(n)}))};return{signMsg:l,signFlag:r,checkSignFlag:o}}},j=e(89);const S=(0,j.Z)(O,[["render",y]]);var C=S,k=e(1388),M=e(9770);const P={wallets:[new M.O({network:k.Q.Mainnet})],autoConnect:!0};(0,r.ri)(C).use(h.ZP,P).mount("#app")},7420:function(){},5856:function(){},6601:function(){}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={id:r,loaded:!1,exports:{}};return n[r].call(l.exports,l,l.exports,e),l.loaded=!0,l.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,l){if(!r){var u=1/0;for(f=0;f<n.length;f++){r=n[f][0],o=n[f][1],l=n[f][2];for(var i=!0,a=0;a<r.length;a++)(!1&l||u>=l)&&Object.keys(e.O).every((function(n){return e.O[n](r[a])}))?r.splice(a--,1):(i=!1,l<u&&(u=l));if(i){n.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var f=n.length;f>0&&n[f-1][2]>l;f--)n[f]=n[f-1];n[f]=[r,o,l]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){var n,t=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__};e.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var l=Object.create(null);e.r(l);var u={};n=n||[null,t({}),t([]),t(t)];for(var i=2&o&&r;"object"==typeof i&&!~n.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(n){u[n]=function(){return r[n]}}));return u["default"]=function(){return r},e.d(l,u),l}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,l,u=r[0],i=r[1],a=r[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(o in i)e.o(i,o)&&(e.m[o]=i[o]);if(a)var f=a(e)}for(t&&t(r);c<u.length;c++)l=u[c],e.o(n,l)&&n[l]&&n[l][0](),n[l]=0;return e.O(f)},r=self["webpackChunkwalletconnect"]=self["webpackChunkwalletconnect"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(2259)}));r=e.O(r)})();
//# sourceMappingURL=app.js.map