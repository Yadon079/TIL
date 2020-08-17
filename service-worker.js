/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8c024b518c1cae37945289be186d8e8a"
  },
  {
    "url": "assets/css/0.styles.a3695467.css",
    "revision": "cc9d78b2eee6dafacf436bae108aee48"
  },
  {
    "url": "assets/img/1.62efd2c5.png",
    "revision": "62efd2c5c8d41524c732c06065c4ed58"
  },
  {
    "url": "assets/img/1.84ece906.jpg",
    "revision": "84ece906702c077622429d806405f7a9"
  },
  {
    "url": "assets/img/2.48daf3da.jpg",
    "revision": "48daf3da16589c6b9ead6f15c11adf34"
  },
  {
    "url": "assets/img/2.6eaa01ca.png",
    "revision": "6eaa01ca4b8cd3f37bed0a3e359046ac"
  },
  {
    "url": "assets/img/3.2681b52d.jpg",
    "revision": "2681b52df49bb19284c24c3faef49afa"
  },
  {
    "url": "assets/img/4.37a9dcd1.jpg",
    "revision": "37a9dcd1bf5b7f99e8bdf24f791bc955"
  },
  {
    "url": "assets/img/5.33f6cb23.jpg",
    "revision": "33f6cb2352aa5a09c26ade71af4b7aa3"
  },
  {
    "url": "assets/img/6.7062d58e.jpg",
    "revision": "7062d58e0ec72182b1259663a2fe18eb"
  },
  {
    "url": "assets/img/7.b7702195.jpg",
    "revision": "b77021954e655d2ed40e6438a86080dd"
  },
  {
    "url": "assets/img/8.d7ad36eb.jpg",
    "revision": "d7ad36ebb243768fb1c4e1d66000dd16"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a911c67f.js",
    "revision": "9279eb63ec9cf55207bfa20d26a534aa"
  },
  {
    "url": "assets/js/11.34ea21cc.js",
    "revision": "cd7e858b8121f2819d7e043a4ed87556"
  },
  {
    "url": "assets/js/12.c78c51ce.js",
    "revision": "2427eab3781243bb607c0192a47f93e8"
  },
  {
    "url": "assets/js/13.954fbc29.js",
    "revision": "f6295f8174eeac38bde51d27c3201753"
  },
  {
    "url": "assets/js/14.803a519f.js",
    "revision": "b11fdf862e9f58602ac223605cf53a12"
  },
  {
    "url": "assets/js/15.d7802725.js",
    "revision": "bb982919f860dd1761e72bf0fa2e6d2d"
  },
  {
    "url": "assets/js/16.0095fb81.js",
    "revision": "7509d34acd81faac1d5a48042cb4bfe6"
  },
  {
    "url": "assets/js/17.e50e4462.js",
    "revision": "e9cc8b31a2913e9fa499cce4d152b09e"
  },
  {
    "url": "assets/js/18.8ab51c13.js",
    "revision": "5147dcde7f1ef8f5ee02a4578bdb8165"
  },
  {
    "url": "assets/js/19.3c09aa35.js",
    "revision": "1a5d72ddb662ef1c03edef18e0c2ea7f"
  },
  {
    "url": "assets/js/2.bd8ffef2.js",
    "revision": "6d758e859e3c347c13867e2d66ac831b"
  },
  {
    "url": "assets/js/20.f6fa089b.js",
    "revision": "eb23616773b4166bf7ba612e46dbe839"
  },
  {
    "url": "assets/js/21.bce8d381.js",
    "revision": "94dcea2e837789bef3d40da1b16aa05e"
  },
  {
    "url": "assets/js/22.958c1f3b.js",
    "revision": "70a67ac237721aa43351ff4ce274cdfd"
  },
  {
    "url": "assets/js/23.d612cb0d.js",
    "revision": "36447c94aa01d244866fbabba86d8e1d"
  },
  {
    "url": "assets/js/24.53566f81.js",
    "revision": "70ebb6ed82b794c5f1a702d6600b52fb"
  },
  {
    "url": "assets/js/25.0178238c.js",
    "revision": "93b7f8246fe4f6a08c95e7232bbaecea"
  },
  {
    "url": "assets/js/26.fb03f54e.js",
    "revision": "0b7f9dc2e6da1bb8a5f990a84daede67"
  },
  {
    "url": "assets/js/27.36948876.js",
    "revision": "5e9ff8a32784e63b9c90f5f6a3f5ec4e"
  },
  {
    "url": "assets/js/28.469e6931.js",
    "revision": "498fbfa5c5af490a995e233c8d73486c"
  },
  {
    "url": "assets/js/29.da15395a.js",
    "revision": "6a05eaf15551f99158cc14f7c2cc5eb1"
  },
  {
    "url": "assets/js/3.d3fa7a3b.js",
    "revision": "628f5bcc46bc5d76672fcb477dc0b592"
  },
  {
    "url": "assets/js/30.b49c60b3.js",
    "revision": "94152cde9d47df177df0469534b62672"
  },
  {
    "url": "assets/js/31.73a9e837.js",
    "revision": "c3bb9361ef1f74510cba2ef27a3200c2"
  },
  {
    "url": "assets/js/32.20530141.js",
    "revision": "7b6d277d55817046bfde0a05d22ab3c3"
  },
  {
    "url": "assets/js/4.5180a808.js",
    "revision": "7d88b2e6f415d83dea9f53ae814d0ec8"
  },
  {
    "url": "assets/js/5.55d68fd6.js",
    "revision": "215a85385c43bbb8a9c27463affc4fc1"
  },
  {
    "url": "assets/js/6.4bc6fe32.js",
    "revision": "42f6144c8a4f8add7fb39d2564d4c621"
  },
  {
    "url": "assets/js/7.4abc0036.js",
    "revision": "58ea08fea5a085b0e5a2be1cf4b6fec4"
  },
  {
    "url": "assets/js/8.af568353.js",
    "revision": "4b5a46f4e5c1a3aa5b50e5cd172285b9"
  },
  {
    "url": "assets/js/9.11d0ce20.js",
    "revision": "1001c9d473605327e88c40f91451d67c"
  },
  {
    "url": "assets/js/app.8532e2f3.js",
    "revision": "ff15d9e2939eb1c1a525e46344830a46"
  },
  {
    "url": "Book/OOP-Principle/00-Intro/index.html",
    "revision": "270d340f235647c30bf22dfc12cfd391"
  },
  {
    "url": "Book/OOP-Principle/01-Loved-Human/index.html",
    "revision": "0f12466d4632cc3d4a6f554f385ae61d"
  },
  {
    "url": "Book/OOP-Principle/02-Java-As-PL/index.html",
    "revision": "cb1bee08860550f048d66a6a1f1e0221"
  },
  {
    "url": "Book/OOP-Principle/03-Java-As-OOP/index.html",
    "revision": "16f4dcc1b2f1095d1de3770a4a16e3cb"
  },
  {
    "url": "Book/OOP-Principle/04-Extended-By-Java/index.html",
    "revision": "78c875ec535688c10facc4e10f8dc84b"
  },
  {
    "url": "Book/OOP-Principle/05-SOLID/index.html",
    "revision": "6d23f6b7604c3efffc6e0bac2efeb119"
  },
  {
    "url": "Book/OOP-Principle/06-Design-Pattern/index.html",
    "revision": "fb64c0dc78c5f4f975b1fc4a9f89083e"
  },
  {
    "url": "Book/OOP-Principle/07-Spring-Triangle/index.html",
    "revision": "341132199470f44fa93fe7e8a002dfc5"
  },
  {
    "url": "index.html",
    "revision": "57d2a5e5aa0c13837abde66169bedebe"
  },
  {
    "url": "Review/2020-year/01-First-Half/index.html",
    "revision": "6ad8be339d3fea88118e4c7892dae108"
  },
  {
    "url": "Review/2020-year/01-First-Quarter/index.html",
    "revision": "be238fc49425c91ede24fc7eb81ff5f4"
  },
  {
    "url": "Review/2020-year/01-January/index.html",
    "revision": "362bf58190a9e9cf07f7a57f18b51282"
  },
  {
    "url": "Review/2020-year/02-February/index.html",
    "revision": "48e586e7fe88c5763af57d51ec7478bd"
  },
  {
    "url": "Review/2020-year/02-Second-Quarter/index.html",
    "revision": "442bac6f05fb8a9adcf373f60f497c44"
  },
  {
    "url": "Review/2020-year/03-March/index.html",
    "revision": "0672e5bccc50ed201e01cc88d2ad61a7"
  },
  {
    "url": "Review/2020-year/04-April/index.html",
    "revision": "679f93e3454d56b98e1374207a429e40"
  },
  {
    "url": "Review/2020-year/05-May/index.html",
    "revision": "f9ffb15345575346cc3c83468c1eb5c9"
  },
  {
    "url": "Review/2020-year/06-June/index.html",
    "revision": "97f3131edb634170e0cd94ac483f3a38"
  },
  {
    "url": "Review/2020-year/07-July/index.html",
    "revision": "213bbdc9bc8c7cd5233e3711e4352f3f"
  },
  {
    "url": "Typescript/Interface/index.html",
    "revision": "0cd8a0b25fa4b253bb445cea10dd7f1e"
  },
  {
    "url": "Typescript/namespace-module/index.html",
    "revision": "bf13efcc1d665a1ca0e4ae4567e9652a"
  },
  {
    "url": "Vuepress/Deploy/index.html",
    "revision": "ed827902de6c8074f573df45f02d941c"
  },
  {
    "url": "Vuepress/Plantuml/index.html",
    "revision": "6f07b54d1812afad64958c6e0056bf1e"
  },
  {
    "url": "Vuepress/Starter/index.html",
    "revision": "49f97529daf77db2ba33861ace2e2a1d"
  },
  {
    "url": "Vuepress/Theme/index.html",
    "revision": "db456ffbdda59238bfabab93697a0d40"
  },
  {
    "url": "Vuepress/Utterances/index.html",
    "revision": "ccc428ace9754ce802591b8d73c308da"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
