function sharePortal() {

    const shareData = {
        title: "THE ଦର୍ପଣ",
        text:Visit our Ratha Yatra Portal.\n\n📸 Photos\n🎥 Videos\n📥 Download Original Files\n\nOpen here:",
        url: "https://rathayatracommittee-deula.github.io/RathaYatraPortalDarpana/"
    };

    if (navigator.share) {
        navigator.share(shareData);
    } else {
        navigator.clipboard.writeText(shareData.url);
        alert("Website link copied successfully!");
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
