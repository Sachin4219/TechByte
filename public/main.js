if ("serviceWorker" in navigator) {
  console.log("hey");
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../service_worker.js")
      .then((reg) => console.log("service worker registered!"))
      .catch((err) => console.log(err));
  });
}
