let public_key =
  "BKRns56lTgiccLbI4tVnvoBrzAeKhbDcZzVSR1Kexd2yVZS3mal9_lPL6Ec8nsYL64acQHgsZbyuC5WZsiTZDic";

function urlBase64ToUint8Array(base64String) {
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

async function send() {
  console.log("Registering service worker");
  const register = await navigator.serviceWorker.register("service-worker.js");

  try {
    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: public_key,
    });
    console.log(subscription);
    console.log("Push registered!");

    // send push notifications
    const resp = await fetch("https://techbytebackend.onrender.com/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscription),
    });

    console.log("push sent", resp);
  } catch (err) {
    console.log(err);
  }
}

if ("serviceWorker" in navigator) {
  send().catch((err) => console.log(err));
}

const pushBtn = document.querySelector("#push-btn");

pushBtn.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      console.log("hello");
      new Notification("example notification", {
        body: "this is testing notification",
        data: { hello: "whats up silly user" },
      });
    } else {
      alert("notifcation not granted");
    }
  });
});
