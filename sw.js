if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const l=e=>s(e,c),t={module:{uri:c},exports:o,require:l};i[c]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BLUtnNGh.js",revision:null},{url:"assets/index-DpBghPjp.css",revision:null},{url:"index.html",revision:"6b95da8e43e78b617d23e17aae5cd1fc"},{url:"registerSW.js",revision:"e03f5d9b9eca98ae2d158fa58b2c3334"},{url:"silent-check-sso.html",revision:"18fe31213139aa06c567cc5fec75b981"},{url:"favicon.ico",revision:"d3d745f66b8d76b7e1fbbebca71743a6"},{url:"./icons/144_144.png",revision:"b159977147161b1317b69828faa57b60"},{url:"./icons/192_192_maskable.png",revision:"5a277d2b4f29dd1f2e051f4ebdf33b11"},{url:"./icons/384_384_maskable.png",revision:"e30146e540c2c2932d92ca368b0b9de5"},{url:"./icons/512_512_maskable.png",revision:"6a0a513acc9d2dc62fe6b8e56c3a432b"},{url:"./icons/1024_1024_maskable.png",revision:"f6c8b6ceab3b33e06c80a57d3837658f"},{url:"manifest.webmanifest",revision:"604b35ba347cf2c21164fe703bb6480d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
