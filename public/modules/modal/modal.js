let numberOfModal = 0;
function showModal(title, elementsForContent=[], additionalClass=[]){
    const templateElement = $("#main-modal-template");
    const modal = $(templateElement.html());

    for (const class_ of additionalClass) {
        modal.addClass(class_);
    }

    const isClosed = new Deferred();
    const id = "modal-" + numberOfModal;
    modal.attr('id', id);


    modal.find(".modal-title").html(title);
    const contentContainer = modal.find(".content");
    for (const content of elementsForContent) {
        contentContainer.append(content);
    }
    modal.find(".close-btn").on('click', () => {
        isClosed.resolve();
        modal.fadeOut(100, () => modal.remove());
    });

    $("body").append(modal);
    return {
        isClosedPromise: isClosed,
        elementId: id,
    };
}