let numberOfModal = 0;

const modalFadeAnimationDuration = 110;


function showModal(title, contentDomElements=[], additionalClasses=[], modalParent=null){
    modalParent = (modalParent == null)? $("body") : modalParent;
    const modal = instantiateNewModalDomElement();
    addClassesToModal(modal, additionalClasses);

    const id = "modal-" + numberOfModal;
    modal.attr('id', id);

    modal.find(".modal-title").html(title);
    appendContentsToModal(modal, contentDomElements)
    const isClosed = new Deferred();
    defineModalCloseEventHandler(modal, isClosed);
    modal.hide().appendTo(modalParent).fadeIn(modalFadeAnimationDuration);
    modalParent.addClass("on-modal-opened");
    return {
        isClosedPromise: isClosed,
        elementId: id,
    };
}

function instantiateNewModalDomElement() {
    const templateElement = $("#main-modal-template");
    return $(templateElement.html());
}

function addClassesToModal(modal, classes){
    for (const $class of classes) {
        modal.addClass($class);
    }
}


function appendContentsToModal(modal, contentDomElements){
    const contentContainer = modal.find(".content");
    for (const content of contentDomElements) {
        contentContainer.append(content);
    }
}


/**
 * @param modal
 * @param {Deferred} isClosed
 */
function defineModalCloseEventHandler(modal, isClosed){
    modal.find(".close-btn").on('click', () => {
        isClosed.resolve();
        $("body").removeClass("on-modal-opened");
        modal.fadeOut(modalFadeAnimationDuration, () => modal.remove());
    });
}