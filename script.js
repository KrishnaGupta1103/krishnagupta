document.getElementById("topBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
let scrollToTopBtn = document.getElementById("topBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}