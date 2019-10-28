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
    $(this).addClass("animated");
    $(this).addClass("flash");
    setTimeout(function(){
        $(this).removeClass("animated");
        $(this).removeClass("flash");
    }, 1000);
});
