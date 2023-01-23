const carouselMetadata = new ModuleMetadataManager("carousel");

function carouselChangeSlide(carouselId, goToNext=true){
    const carousel = document.getElementById(carouselId);
    const contents = $(carousel).find(".content-layer").children();
    contents.removeClass("left");
    contents.removeClass("right");

    if (carouselMetadata.getMetadata(carousel, "curr-page") == null)
        carouselMetadata.setMetadata(carousel, "curr-page", 0);

    const pageIncrement = goToNext? 1 : -1;
    const currPage = carouselMetadata.getMetadata(carousel, "curr-page");
    const nextPage = (currPage + pageIncrement) % contents.length;
    carouselMetadata.setMetadata(carousel, "curr-page", nextPage);

    const slideDirectionClass = goToNext ? "left" : "right";
    const currPageEl = contents.eq(currPage);
    const nextPageEl = contents.eq(nextPage);
    currPageEl.removeClass("active");
    currPageEl.addClass("deactivating");
    currPageEl.addClass(slideDirectionClass);

    console.log(nextPageEl.class);
    nextPageEl.addClass("active");
    nextPageEl.addClass(slideDirectionClass);
    nextPageEl.removeClass("not-active");

    let executed = false;
    const animationEndEventListener = () => {
        if (executed)
            return;
        executed = true;
        currPageEl[0].removeEventListener("animationend", animationEndEventListener);
        currPageEl.removeClass("deactivating");
        currPageEl.addClass("not-active");
    };
    currPageEl[0].addEventListener('animationend', animationEndEventListener);
    setTimeout(animationEndEventListener, 750);
}