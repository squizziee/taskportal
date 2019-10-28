var expandBtn = document.querySelector(".expand-btn");
expandBtn.addEventListener("click", function () {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});

$(".redirectable-link").click(function() {
    $(this).toggleClass("animated");
    $(this).toggleClass("flash");
});