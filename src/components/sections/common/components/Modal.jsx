import PropTypes from "prop-types";
import {CloseButton} from "./CloseButton.jsx";
import {Portal} from "react-portal";
import {useEffect, useState} from "react";
import $ from 'jquery';


let numberOfModal = 0;

const modalFadeAnimationDuration = 110;


Modal.propTypes = {
    modalTitle: PropTypes.string.isRequired,
    children: PropTypes.any,
    additionalClasses: PropTypes.array,
    _urlHashId: PropTypes.string.isRequired,
    fadeInDuration: PropTypes.number,
    onModalClosing: PropTypes.func,
    onModalClosed: PropTypes.func.isRequired,
};

export function Modal({modalTitle, children, additionalClasses=null,
                          _urlHashId, fadeInDuration, onModalClosing, onModalClosed}) {
    fadeInDuration = fadeInDuration ?? modalFadeAnimationDuration;

    const modalId = "modal-" + numberOfModal++;
    const [opened, setOpened] = useState(true);

    async function onCloseButtonClicked(e) {
        // return false to cancel close, or null/integer to determine how long the close animation will be.
        const cancelClose = onModalClosing == null? null : onModalClosing(e, modalId);
        console.assert(cancelClose === false || cancelClose === null || Number.isSafeInteger(cancelClose));
        if (cancelClose === false)
            return;

        const closingFadingOutDuration = cancelClose ?? modalFadeAnimationDuration;
        await $(`#${modalId}`).fadeOut(closingFadingOutDuration, () => {
            setOpened(false);
            onModalClosed(e);
        });
    }

    useEffect(() => {
        const modalElement = $(`#${modalId}`);
        modalElement.fadeOut(0, function () {
            modalElement.removeClass("hidden");
            modalElement.fadeIn(fadeInDuration);
        });
    }, []);

    const initialModalClasses = ["modal-container", "hidden",];
    const modalClasses = initialModalClasses.concat(additionalClasses ?? []);

    return (<>
        {opened &&
            <Portal>
                <div className={modalClasses.join(' ')}
                     id={modalId}>
                    <div tabIndex="-1" className="modal-box bg-gray-700">
                        <div className="header flex flex-row justify-center items-center border-b border-gray-600">
                            <h3 className="modal-title flex-grow text-xl font-semibold font-white">
                                {modalTitle}
                            </h3>
                            <div className="close-btn" onClick={onCloseButtonClicked}>
                                <CloseButton/>
                            </div>
                        </div>
                        <div className="content">
                            {children}
                        </div>
                    </div>
                </div>
            </Portal>
        }
    </>);
}


function setUrlHash(value) {
    if (value === '')
        value = '!';

    if(history.pushState) {
        if (!value.startsWith("#"))
            value = "#" + value;
        history.pushState(null, null, value);
        return;
    }
    location.hash = value;

}
