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
    "revision": "1ac3fa6afe5792cac7a5bd57d545c79d"
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
    "url": "assets/js/10.ce813e6a.js",
    "revision": "eff75bbd26f90d6ad326d27472ea9e1b"
  },
  {
    "url": "assets/js/11.0370a6f3.js",
    "revision": "27b5ce2fd5d5aa7fadf79f6187cc45bb"
  },
  {
    "url": "assets/js/12.43892a8a.js",
    "revision": "9979ec4ef7dd625097e84645ec997d41"
  },
  {
    "url": "assets/js/13.3534a52e.js",
    "revision": "b69d60d5f29189326e1182b57f0dcbd3"
  },
  {
    "url": "assets/js/14.e45a5725.js",
    "revision": "62d4a03b07d3de518e8fc99bd8f9b15a"
  },
  {
    "url": "assets/js/15.e8c4be15.js",
    "revision": "b763f25c4d548eed0f3d9a785fca9819"
  },
  {
    "url": "assets/js/16.dd922af4.js",
    "revision": "c537e1701ed8d9472e34c59da1af8c49"
  },
  {
    "url": "assets/js/17.e04197fc.js",
    "revision": "7e9bfe22b874360cf4107a188e673f28"
  },
  {
    "url": "assets/js/18.2c1bea3e.js",
    "revision": "ce0cb91ed8ebf2f32837e7ce49d46542"
  },
  {
    "url": "assets/js/19.0fd9e188.js",
    "revision": "b8d8e2f2b6b7803e745aa6a350a384c3"
  },
  {
    "url": "assets/js/2.7ca1b396.js",
    "revision": "420e7650ea251cf7bd438193d132e199"
  },
  {
    "url": "assets/js/20.36483df3.js",
    "revision": "04ec17a5e0dcd491607501dfec8577c1"
  },
  {
    "url": "assets/js/21.ae61790b.js",
    "revision": "57a88efda7a046618c699cc48bc91887"
  },
  {
    "url": "assets/js/22.98d18dd1.js",
    "revision": "8a60b04a81cdc9e5fbfe577ea4086772"
  },
  {
    "url": "assets/js/23.a4d6fff0.js",
    "revision": "99e7072c9d04cd1830d4ba92e0518159"
  },
  {
    "url": "assets/js/24.d08179d8.js",
    "revision": "b63900a47c3051bbdb468a18a473bf40"
  },
  {
    "url": "assets/js/25.5d22aeb3.js",
    "revision": "2a777c4bd9ceb6342246fc359a68d125"
  },
  {
    "url": "assets/js/26.dfca39d7.js",
    "revision": "c4a6e342a5b99499a7fed387144946b4"
  },
  {
    "url": "assets/js/27.4943b518.js",
    "revision": "af2ed80549fdaebdfbe9bfc376f5eb08"
  },
  {
    "url": "assets/js/28.0b4d4877.js",
    "revision": "4803982a717a24d2046c1f11790c42f4"
  },
  {
    "url": "assets/js/29.c6881fce.js",
    "revision": "02f83a58f6927d09739a2729018cc5db"
  },
  {
    "url": "assets/js/3.915fedd0.js",
    "revision": "2e1dcdc7dcdde8bc7f9b1850acc6e302"
  },
  {
    "url": "assets/js/30.13a8af7b.js",
    "revision": "ede44ebecb0369db36185bc2f166913d"
  },
  {
    "url": "assets/js/31.5876f17d.js",
    "revision": "7773f9a6108f9a9e263caffcc77494fe"
  },
  {
    "url": "assets/js/4.a08c9b39.js",
    "revision": "2cbf50589b709f89acba315456507858"
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
    "url": "assets/js/9.5b7dee3e.js",
    "revision": "7e9d03056f977b1b8254807b75798ddf"
  },
  {
    "url": "assets/js/app.3d2c78bd.js",
    "revision": "b0620e8c3fc80144a79b59478fdacd02"
  },
  {
    "url": "Blog/Book-Review/2020y/01-Jan./index.html",
    "revision": "73d558683fc4739ceadbce930d253098"
  },
  {
    "url": "Blog/Book-Review/2020y/02-Feb./index.html",
    "revision": "92458b2947f023da7c5bac16ccc37c93"
  },
  {
    "url": "Blog/Book-Review/2020y/03-Mar./index.html",
    "revision": "af68f237ea5ee6de1ae7c6ca41bdb44c"
  },
  {
    "url": "Blog/Book-Review/2020y/04-Apr./index.html",
    "revision": "f83d0492dec63df76f7365b9f6e5b589"
  },
  {
    "url": "Blog/Book-Review/2020y/05-May./index.html",
    "revision": "b4ff8ac565f17b025320276d534e1b9d"
  },
  {
    "url": "Blog/Book-Review/2020y/06-Jun./index.html",
    "revision": "15d197d09d21f14a41e15f6a5c32d13b"
  },
  {
    "url": "Blog/Book-Review/2020y/07-Jul./index.html",
    "revision": "d53b4813ea588f2e088cfe3e8d12303e"
  },
  {
    "url": "index.html",
    "revision": "d773d37ce9c86e1cf16b3b73b30bd16e"
  },
  {
    "url": "Review/2020-year/01-First-Half/index.html",
    "revision": "4cab8a0d91279f8572ab0868715ac9f9"
  },
  {
    "url": "Review/2020-year/01-First-Quarter/index.html",
    "revision": "d3797308bd2d8db1641c1050d099852d"
  },
  {
    "url": "Review/2020-year/01-January/index.html",
    "revision": "e0dddff613281bdd9e02ee1a9b9ffb95"
  },
  {
    "url": "Review/2020-year/02-February/index.html",
    "revision": "587abe5089ce6d0a5079424d832e4835"
  },
  {
    "url": "Review/2020-year/02-Second-Quarter/index.html",
    "revision": "7e2e5d5a3bc7b8bc078edd5430aba047"
  },
  {
    "url": "Review/2020-year/03-March/index.html",
    "revision": "28b24175189723f5bfd1fb651f054e99"
  },
  {
    "url": "Review/2020-year/04-April/index.html",
    "revision": "c0cee67c8c88ec8ebc9bd49dcb06a492"
  },
  {
    "url": "Review/2020-year/05-May/index.html",
    "revision": "1f8d3e1c7ef06f8cab1626a5bdba2678"
  },
  {
    "url": "Review/2020-year/06-June/index.html",
    "revision": "e6aad7bb3deb4baaf19e31b7e5680656"
  },
  {
    "url": "Review/2020-year/07-July/index.html",
    "revision": "de09706a8367cb7de6a80fdd8745f2f2"
  },
  {
    "url": "Typescript/Interface/index.html",
    "revision": "dd674a5e6b1e955c25f61b0686dbee85"
  },
  {
    "url": "Typescript/namespace-module/index.html",
    "revision": "3338ad831f833c3587c7f73b3a0ee8dd"
  },
  {
    "url": "Vuepress/Deploy/index.html",
    "revision": "0cc27567293f0e2ca2a7e4b41e4bf9da"
  },
  {
    "url": "Vuepress/Plantuml/index.html",
    "revision": "3e4deefd65ecc8566fd86ca04a3cb6cb"
  },
  {
    "url": "Vuepress/Starter/index.html",
    "revision": "ecd004d6882f8851c1d4aa152c425166"
  },
  {
    "url": "Vuepress/Theme/index.html",
    "revision": "baf8943bba8b1056afc2c9fa7995364e"
  },
  {
    "url": "Vuepress/Utterances/index.html",
    "revision": "49ba7fe5de2f4c7a3e63ac0d7ca200c8"
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
