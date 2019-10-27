var closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function() {
    $(".modal-central").removeClass("lightSpeedIn");
    $(".modal-central").addClass("zoomOutDown");
    $(".modal-bg").addClass("modal-bg-hidden");
});

function callModal() {
    $(".modal-central").removeClass("zoomOutDown");
    $(".modal-bg").removeClass("modal-bg-hidden");
    $(".modal-central").addClass("lightSpeedIn");
}