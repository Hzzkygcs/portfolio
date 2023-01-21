let toastCount = 0;
function showToast(
    toastMessage, toastIconSrc, timeoutMs=3000,
    showingUpAnimationDurationMs=300,
    leavingAnimationDurationMs=500,
){
    const toastTemplate = $("#toast-template");
    const toastElement = $(toastTemplate.html());
    const toastId = "toast-" + toastCount++;

    toastElement.attr("id", toastId);
    toastElement.find(".toast-logo").attr("src", toastIconSrc);
    toastElement.find(".toast-msg").html(toastMessage);
    toastElement.get(0).style.setProperty("--show-up-animation-duration",
        showingUpAnimationDurationMs + "ms");

    $("body").append(toastElement);
    setTimeout(() => {
        toastElement.addClass("deployed");
    }, 5);
    return setTimeout(() => {
        toastElement.fadeOut(leavingAnimationDurationMs, () => {
            toastElement.remove();
        });
    }, timeoutMs);
}