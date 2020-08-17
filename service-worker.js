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
    "revision": "81bbbaaa03676d23e96fb579c48fe58c"
  },
  {
    "url": "assets/css/0.styles.a3695467.css",
    "revision": "cc9d78b2eee6dafacf436bae108aee48"
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
    "url": "assets/js/10.8dd6664d.js",
    "revision": "b796d261a5f1b79a575f6f9d148ee795"
  },
  {
    "url": "assets/js/11.ed8e9999.js",
    "revision": "133917b84fbfb26bfc9c06c43a1db03c"
  },
  {
    "url": "assets/js/12.415ad0ec.js",
    "revision": "a4d588ae09c13455c55a5eb77c678deb"
  },
  {
    "url": "assets/js/13.4ce22206.js",
    "revision": "69982ee61329f01f4e924b618f2671bc"
  },
  {
    "url": "assets/js/14.93d2533b.js",
    "revision": "a19ecf158be1864a917912abba083468"
  },
  {
    "url": "assets/js/15.7187b245.js",
    "revision": "9161283a313c97cd3874d9e32a7b0e96"
  },
  {
    "url": "assets/js/16.eefbd19d.js",
    "revision": "2cc4406af66172b5e0e65d62dd44f59a"
  },
  {
    "url": "assets/js/17.da332b6c.js",
    "revision": "0016af617529f32a25d57261224e8554"
  },
  {
    "url": "assets/js/18.48479088.js",
    "revision": "f372ffd2d933d0b0a4ca38faa9b15e2b"
  },
  {
    "url": "assets/js/19.3e7ce880.js",
    "revision": "bcd4d6f6ec72b1253c400ed1cdd44651"
  },
  {
    "url": "assets/js/2.7ca1b396.js",
    "revision": "420e7650ea251cf7bd438193d132e199"
  },
  {
    "url": "assets/js/20.928efb8e.js",
    "revision": "0afcf05004ec3ce440bc1bc76afc48d4"
  },
  {
    "url": "assets/js/21.bfba9270.js",
    "revision": "daa040d5922d99e85d9354fdd13607e2"
  },
  {
    "url": "assets/js/22.a0635f7f.js",
    "revision": "f723b7648f6121369388bc67ce799259"
  },
  {
    "url": "assets/js/23.c1a2404e.js",
    "revision": "cfd73ffbdc471755c2b66865d7c78ffe"
  },
  {
    "url": "assets/js/24.a6b93a90.js",
    "revision": "e7a7c86f0dff8089fd8457353a968fbc"
  },
  {
    "url": "assets/js/25.3d394148.js",
    "revision": "4b5a9b4356bed7c10a30337d8d6249eb"
  },
  {
    "url": "assets/js/26.b2c069be.js",
    "revision": "eaa05f0f139a84daffa9888a65be03f6"
  },
  {
    "url": "assets/js/27.266522ee.js",
    "revision": "a459b054750bcb8b3ffc16fa565d7164"
  },
  {
    "url": "assets/js/28.537b06f4.js",
    "revision": "0c5124091da0e005bb4c163a1f10ab14"
  },
  {
    "url": "assets/js/29.9a1236aa.js",
    "revision": "6c51716f9b70c3c445b9713b87c8417c"
  },
  {
    "url": "assets/js/3.915fedd0.js",
    "revision": "2e1dcdc7dcdde8bc7f9b1850acc6e302"
  },
  {
    "url": "assets/js/30.4305032d.js",
    "revision": "30d1bed54add48df4c339925c8d8b3f1"
  },
  {
    "url": "assets/js/31.68d946a9.js",
    "revision": "f60ae8b9170c6983fad8f4bbf3b24e4e"
  },
  {
    "url": "assets/js/32.0c8f3851.js",
    "revision": "7a98185eee4cb365fceab047ee14ade1"
  },
  {
    "url": "assets/js/4.84ef7e18.js",
    "revision": "a8fe328add84f519aa222a0ebfafd220"
  },
  {
    "url": "assets/js/5.70bd12f8.js",
    "revision": "d8d335b9f72a0fa654468ae083d68eba"
  },
  {
    "url": "assets/js/6.a8243013.js",
    "revision": "8ba7e8a0089d593bd63e454ab0ec5b25"
  },
  {
    "url": "assets/js/7.356d6854.js",
    "revision": "861237c30c25ffb71b55b77407f4ce75"
  },
  {
    "url": "assets/js/8.b1d39b26.js",
    "revision": "5c070941c3e37bce29edf138c82e1766"
  },
  {
    "url": "assets/js/9.c7d43724.js",
    "revision": "5eb7a22736181d818287f00cade8b0bc"
  },
  {
    "url": "assets/js/app.49047a5a.js",
    "revision": "359afbac87343eaae93fb46c1f2ea926"
  },
  {
    "url": "Book/OOP-Principle/00-Intro/index.html",
    "revision": "ed89dc8fd4ab0b4f381e134e2f288303"
  },
  {
    "url": "Book/OOP-Principle/01-Loved-Human/index.html",
    "revision": "f568c01506cf743c5f3143716a589501"
  },
  {
    "url": "Book/OOP-Principle/02-Java-As-PL/index.html",
    "revision": "532cbce2e92c63fb03c0bec958887fb6"
  },
  {
    "url": "Book/OOP-Principle/03-Java-As-OOP/index.html",
    "revision": "e8c9c1edba2055fa3cb7d14530b388dd"
  },
  {
    "url": "Book/OOP-Principle/04-Extended-By-Java/index.html",
    "revision": "050160ea3731e77724f32ddf4bd02cfe"
  },
  {
    "url": "Book/OOP-Principle/05-SOLID/index.html",
    "revision": "07e2521354d81d52eebecb03012a07f6"
  },
  {
    "url": "Book/OOP-Principle/06-Design-Pattern/index.html",
    "revision": "1960374a7435355bf7a64e09a47a9532"
  },
  {
    "url": "Book/OOP-Principle/07-Spring-Triangle/index.html",
    "revision": "83f1db3e075dd36dea66975b4c3e8ee6"
  },
  {
    "url": "index.html",
    "revision": "6f98278ba26148fbaa964ffb86dc6655"
  },
  {
    "url": "Review/2020-year/01-First-Half/index.html",
    "revision": "d128149571d98409f5dd19a12576c041"
  },
  {
    "url": "Review/2020-year/01-First-Quarter/index.html",
    "revision": "f094eb011a30dd94ab962b69395c67a3"
  },
  {
    "url": "Review/2020-year/01-January/index.html",
    "revision": "3b5262c7b4a971eadf582f0420ad9244"
  },
  {
    "url": "Review/2020-year/02-February/index.html",
    "revision": "0627201d31ea211789053f7b1df5128a"
  },
  {
    "url": "Review/2020-year/02-Second-Quarter/index.html",
    "revision": "73ed159e9c00a002ec490be84e72d7e2"
  },
  {
    "url": "Review/2020-year/03-March/index.html",
    "revision": "0dad2d2a4d106c8db3acb3c3610bf31e"
  },
  {
    "url": "Review/2020-year/04-April/index.html",
    "revision": "a897a122f5af479f2274c4d3f542895e"
  },
  {
    "url": "Review/2020-year/05-May/index.html",
    "revision": "e93e1999150dd94aa8421dac4fa3c575"
  },
  {
    "url": "Review/2020-year/06-June/index.html",
    "revision": "51f3e47e6ca6e52eab619b521b689753"
  },
  {
    "url": "Review/2020-year/07-July/index.html",
    "revision": "ed7c155862fa3fae3fb93e25ad6261bf"
  },
  {
    "url": "Typescript/Interface/index.html",
    "revision": "3c0cbb9b06e26065fe49a294091e157b"
  },
  {
    "url": "Typescript/namespace-module/index.html",
    "revision": "6a7f9a3370438a971cc4e4cec12b76d7"
  },
  {
    "url": "Vuepress/Deploy/index.html",
    "revision": "bb2e7ab532dff166e0a28a773204a803"
  },
  {
    "url": "Vuepress/Plantuml/index.html",
    "revision": "b8c40513a3eb0239ac1fd44604ca1b0f"
  },
  {
    "url": "Vuepress/Starter/index.html",
    "revision": "e749ffc553de19c490549b0346c424a6"
  },
  {
    "url": "Vuepress/Theme/index.html",
    "revision": "c91e8400ab3b635731f20853d34d1b54"
  },
  {
    "url": "Vuepress/Utterances/index.html",
    "revision": "95b02761b7f0962047195d535164a6d4"
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
