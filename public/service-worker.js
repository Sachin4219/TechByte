const cacheName = "v1";

self.addEventListener("install", (e) => {
  console.log("start the invasion");
});

self.addEventListener("activate", (e) => {
  console.log("invasion started");

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("service worker: clearing old cache!");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

async function cacheThenNetwork(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    console.log("Found response in cache:", cachedResponse);
    return cachedResponse;
  }
  console.log("Falling back to network");
  return fetch(request);
}

self.addEventListener("fetch", (event) => {
  console.log(`Handling fetch event for ${event.request.url}`);
  event.respondWith(cacheThenNetwork(event.request));
});

// self.addEventListener("fetch", (e) => {
//   console.log("service worker fetching");

//   e.respondWith(
//     fetch(e.request)
//       .then((res) => {
//         caches.open(cacheName).then((cache) => {
//           cache.put(e.request, res.clone());
//         });
//         return res;
//       })
//       .catch(() => caches.match(e.request).then((res) => res))
//   );
// });

const applicationServerPublicKey =
  "BKRns56lTgiccLbI4tVnvoBrzAeKhbDcZzVSR1Kexd2yVZS3mal9_lPL6Ec8nsYL64acQHgsZbyuC5WZsiTZDic";
/* eslint-enable max-len */

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

self.addEventListener("push", function (event) {
  console.log(event);
  console.log("[Service Worker] Push Received.");
  const push = JSON.parse(event.data.text());
  const title = push.title;
  const options = {
    body: push.body,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", function (event) {
  console.log("[Service Worker] Notification click Received.");

  event.notification.close();

  event.waitUntil(clients.openWindow("https://developers.google.com/web/"));
});

self.addEventListener("pushsubscriptionchange", function (event) {
  console.log("[Service Worker]: 'pushsubscriptionchange' event fired.");
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  event.waitUntil(
    self.registration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey,
      })
      .then(function (newSubscription) {
        // TODO: Send to application server
        console.log("[Service Worker] New subscription: ", newSubscription);
      })
  );
});
