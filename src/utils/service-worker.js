/* eslint-disable no-restricted-globals */

import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { NetworkFirst } from "workbox-strategies";
import { CacheableResponse } from "workbox-cacheable-response";

clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);

// Тут можно документацию глянуть: https://developer.chrome.com/docs/workbox/caching-strategies-overview/#cache-first-falling-back-to-network
// По теме этого проекта: https://developer.chrome.com/docs/workbox/serving-cached-audio-and-video/
// Если сайт упал: https://developer.chrome.com/docs/workbox/managing-fallback-responses/

// Небольшой пример плагина посмотрим
// Вообще у него куча настроек, и сколько раз кэш брать, и сколько по времени живет, и тд
// https://developer.chrome.com/docs/workbox/modules/workbox-cacheable-response/
const cacheableResponse = new CacheableResponse({
  statuses: [0, 200], // только для статусов указанных тут
  headers: {
    "x-is-cacheable": "true",
  },
});

registerRoute(
  // почитать https://developer.chrome.com/docs/workbox/modules/workbox-routing/
  () => true, // (request) => true
  // Тут идет проверка, если true - кэшируем, если false - то нет
  // request - объект запроса
  // Пример  ({request}) => request.destination === 'image',
  // т.е. тут мы кэшируем все запросы, давай я в App.js, в useEffect сделаю запрос и посмотрим
  new NetworkFirst({
    cacheName: "api-cache", // имя кэша в браузера, заходишь Application -> Cache storage и там будет
    plugins: [
      cacheableResponse, // наш плагин, плагинов можно несколько использовать
    ],
  }),
);

// Все что ниже это дефолтный код который генерирует воркбокс, можно посмотреть

// registerRoute(
//   // Return false to exempt requests from being fulfilled by index.html.
//   ({ request, url }) => {
//     // If this isn't a navigation, skip.
//     if (request.mode !== "navigate") {
//       return false;
//     } // If this is a URL that starts with /_, skip.

//     if (url.pathname.startsWith("/_")) {
//       return false;
//     } // If this looks like a URL for a resource, because it contains // a file extension, skip.

//     if (url.pathname.match(fileExtensionRegexp)) {
//       return false;
//     } // Return true to signal that we want to use the handler.

//     return true;
//   },
//   createHandlerBoundToURL(`${process.env.PUBLIC_URL}/index.html`),
// );

// // An example runtime caching route for requests that aren't handled by the
// // precache, in this case same-origin .png requests like those from in public/
// registerRoute(
//   // Add in any other file extensions or routing criteria as needed.
//   ({ url }) => url.origin === self.location.origin && url.pathname.endsWith(".png"), // Customize this strategy as needed, e.g., by changing to CacheFirst.
//   new StaleWhileRevalidate({
//     cacheName: "images",
//     plugins: [
//       // Ensure that once this runtime cache reaches a maximum size the
//       // least-recently used images are removed.
//       new ExpirationPlugin({ maxEntries: 50 }),
//     ],
//   }),
// );

// // This allows the web app to trigger skipWaiting via
// // registration.waiting.postMessage({ type: 'SKIP_WAITING' })
// self.addEventListener("message", (event) => {
//   if (event.data && event.data.type === "SKIP_WAITING") {
//     self.skipWaiting();
//   }
// });

// // Any other custom service worker logic can go here.
