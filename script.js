function shareWebsite() {
  if (navigator.share) {
      navigator.share({
         title: "ରଥଯାତ୍ରା ପୋର୍ଟାଲ",
         text: "Visit our Digital Gallery",
         url: "window.location.origin
  }).catch(() => {});
  } else {

navigator.clipboard.writeText(window.location.origin);
      alert("Website link copied.");
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("../service-worker.js")
      .then(() => {
        console.log("Service Worker Registered");
      })
      .catch(err => {
        console.log(err);
      });
  });
}