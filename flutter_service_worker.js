'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "167a76b214e1445756158f8a33a7f48c",
"assets/AssetManifest.bin.json": "eb2f351a741bd3a35a3e3fdd3ea65b28",
"assets/AssetManifest.json": "1962dcd6b17e676436bab9fff335ff40",
"assets/assets/icons/github.png": "552ffbac97b68b23b8a9c64c44f2ab9c",
"assets/assets/icons/linkedin.png": "2ebc8e739e575908c335c84bc052c833",
"assets/assets/icons/medium.png": "8440186b4930a10bb2ed799b8d143a76",
"assets/assets/icons/message2.png": "224c893a7e87b2c7028bff63d66c461e",
"assets/assets/icons/whatsApp.png": "488bbf0026c4fe6d41accf91e0d94f1c",
"assets/assets/images/advanced-analytic-tools.jpg": "82dcafa6127333626df5240f6952bf3f",
"assets/assets/images/AirflowLogo.png": "149b0c3cde643cc23b26eaa1b1a3fbac",
"assets/assets/images/business_advantages_of_data_analysis.jpg": "b5dce75a53a423a5c976a69d5f6622e8",
"assets/assets/images/ChatGPT%2520Image%2520Jul%25203,%25202025,%252003_24_12%2520AM.png": "1a4399c4fc17f292b4a804f9d3f45c8a",
"assets/assets/images/coverphic.png": "95c24866c20fbf8a6d0762099aab974a",
"assets/assets/images/do-data-analysis-using-excel-spss-python-libraries-and-data-interpretation.jpg": "43a7e2bb4dd3287ab306cdfef73954ad",
"assets/assets/images/docker.png": "1a52816bbef4a15bb0dcf9fd7b99b1f7",
"assets/assets/images/download%2520(4).jpeg": "7640fb70ae851d000bace9a4b02a2b1d",
"assets/assets/images/EDA.jpg": "178f601fb759d4b81bf3c75c793844f5",
"assets/assets/images/health.png": "f8ebbdab419ff74b5d7f4351f40c39dd",
"assets/assets/images/logo.png": "d4bdccf53416ced387ec959892efde67",
"assets/assets/images/logo2.png": "a182c3cbcef2c306c916a0847772eb4e",
"assets/assets/images/medium2.png": "ad76693f330aac4c8f6d993eea4fb780",
"assets/assets/images/ML.jpg": "b6048e093f2853e2e769b1e31d469ec8",
"assets/assets/images/ML2.jpg": "718f84db82bb91067dd9638230bc7f7b",
"assets/assets/images/mysql.avif": "3b7fe20787365d94ea095e5999dc3b1a",
"assets/assets/images/Mysql.jpg": "fdf0497ee0777c227eb20476c8d816c4",
"assets/assets/images/postgres.png": "d5900d1b861dbd931b70b129c279e7e6",
"assets/assets/images/power%2520BI.JPG": "aa66da569b3aab9bd8564fea1402f117",
"assets/assets/images/predictive-analytics-new.jpg": "21b1a1b3fe873cda5c820d1d0364ec05",
"assets/assets/images/predictive-analytics-trends.webp": "4779efa18a51a17d65387247e6874a43",
"assets/assets/images/python.png": "f75f00423751f2ff9dd80a2bd074237a",
"assets/assets/images/python2.png": "ad959e232f1eee87d76a9a9f27240665",
"assets/assets/images/R.png": "2792f9eb01bbadaafa2a2199fb31f4cd",
"assets/assets/images/Sales.jpg": "83fc2c8a58b4b660dc478f320ff65d4e",
"assets/assets/images/Scope-of-data-analysis-booming-in-India.jpg": "1ecab12406f5a251d17e8d29e586098d",
"assets/assets/images/social.png": "6dfc2c13c42206ec638c0858cc16a7c7",
"assets/assets/images/SQL.jpeg": "02eaadfa277cf9f9559038ceed7fee80",
"assets/assets/images/tableau.png": "4083ecc70e362a4cf6a681edf99a77f9",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "58ebf5947c421c26899f0f13f9d58a8c",
"assets/NOTICES": "d3bdaf913bde0dd06b28a88b11c80265",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6afc0613341ec266b1429110533f0dbf",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "15abcd705ee4786e5de80569bb2fbde1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf1e45747974a42ebcf850f57cc46223",
"/": "bf1e45747974a42ebcf850f57cc46223",
"main.dart.js": "d710438cae5ad34aea2823fbdf3dbec1",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
