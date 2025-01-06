if (!self.define) {
  let e,
    i = {};
  const s = (s, n) => (
    (s = new URL(s + ".js", n).href),
    i[s] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[c]) return;
    let o = {};
    const d = (e) => s(e, c),
      l = { module: { uri: c }, exports: o, require: d };
    i[c] = Promise.all(n.map((e) => l[e] || d(e))).then((e) => (r(...e), o));
  };
}
define(["./workbox-3e911b1d"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "./assets/index-DBfdVDTZ.css", revision: null },
        { url: "./assets/index-E_zDefLq.js", revision: null },
        { url: "./index.html", revision: "b4a8971d7220be77bda4beeda5f38289" },
        {
          url: "./registerSW.js",
          revision: "1872c500de691dce40960bb85481de07",
        },
        {
          url: "./silent-check-sso.html",
          revision: "18fe31213139aa06c567cc5fec75b981",
        },
        { url: "./favicon.ico", revision: "d3d745f66b8d76b7e1fbbebca71743a6" },
        {
          url: "./icons/144_144.png",
          revision: "ea3d6378662801a525784846d37074d1",
        },
        {
          url: "./icons/192_192_maskable.png",
          revision: "bdd9fd7f7e0b00fc87ecea36ac1a47da",
        },
        {
          url: "./icons/384_384_maskable.png",
          revision: "6b54893d686ffb9b53f5b8dc9271ae72",
        },
        {
          url: "./icons/512_512_maskable.png",
          revision: "b52ef64c1c5f7f32d872adc09b077927",
        },
        {
          url: "./icons/1024_1024_maskable.png",
          revision: "4e40c6ab61f68246ee5acc5009562ef6",
        },
        {
          url: "./manifest.webmanifest",
          revision: "d7c50d4c29d950e2e38f6f5377df3e0e",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
