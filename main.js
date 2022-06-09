const shareBtn = document.getElementById("share-btn");
const popup = document.getElementById("share-popup");

shareBtn.addEventListener("click", function() {
    popup.classList.toggle("show");
});