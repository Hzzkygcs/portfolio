import PropTypes from "prop-types";
import React, {useState} from "react";
import {Modal} from "../../common/components/Modal.jsx";
import ExperienceBox from "./ExperienceBox.jsx";

ExperienceBoxAndModal.propTypes = {
    givenId: PropTypes.number,
    img_src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    modalTitle: PropTypes.string,
    detail: PropTypes.string.isRequired,
    children: PropTypes.any,
    onClick: PropTypes.func,
};
export default function ExperienceBoxAndModal({img_src, title, modalTitle, detail, children}) {
    modalTitle = modalTitle ?? title;

    const [modalIsOpened, setModalIsOpened] = useState(false);
    function openModal() {setModalIsOpened(true);}
    function closeModal() {setModalIsOpened(false);}


    return (<>
        <ExperienceBox title={title}
                       img_src={img_src}
                       detail={detail}
                       onClick={openModal}>
            {modalIsOpened &&
                <Modal modalTitle={modalTitle}
                       _urlHashId={'experience-' + getUrlHashId(title)}
                       onModalClosed={closeModal}>
                    {children}
                </Modal>
            }
        </ExperienceBox>
    </>);
}

function getUrlHashId(title){
    const partiallyEncodedTitle = title.replaceAll(" ", '-').toLowerCase();
    return encodeURIComponent(partiallyEncodedTitle);
}




