var expandBtn = document.querySelector(".expand-btn");
var closeBtn = document.querySelector(".close-btn");

expandBtn.addEventListener("click", function () {
    toggleFullScreen();
});

closeBtn.addEventListener("click", function () {
    window.open("", "_self").close();
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}