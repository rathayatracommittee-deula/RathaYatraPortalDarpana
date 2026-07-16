function shareWebsite() {

const shareData = {
title: "ରଥଯାତ୍ରା ପୋର୍ଟାଲ",
text: "Visit our Ratha Yatra Digital Gallery",
url: "https://rathayatracommittee-deula.github.io/RathaYatraPortalDarpana/"
};

if (navigator.share) {

navigator.share(shareData);

} else {

navigator.clipboard.writeText(shareData.url);

alert("Website link copied!");

}

}