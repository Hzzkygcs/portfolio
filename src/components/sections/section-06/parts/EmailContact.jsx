import PropTypes from "prop-types";
import {useState} from "react";
import ReactMutable from "../../../../core/ReactMutable.js";
import {Toast} from "../../common/components/Toast.jsx";
import {getStructuredId} from "../../commpon_utilities/structuredId.js";

const emailContactPropTypes = {
    email: PropTypes.string.isRequired,
};
export default function EmailContact({email,}) {
    const toastIconSrc = "/img/misc/copy-svgrepo-com.svg";

    function setActiveToastsForwarding(value) {
        return setActiveToasts(value);
    }

    const [activeToasts, setActiveToasts] = useState(ReactMutable.create(
        setActiveToastsForwarding, {}
    ));


    function onClick() {
        copyToClipboard(email);
        createNewToast();
    }
    function createNewToast() {
        const artificialToastId = getStructuredId();

        // noinspection UnnecessaryLocalVariableJS
        const toastElement = (
            <Toast toastMessage={'Email copied'}
                   toastIconSrc={"/img/misc/copy-svgrepo-com.svg"}
                   additionalClass={['copied-notification-toast']}
                   onToastFinished={onToastFinished}
                   key={`${artificialToastId}`}
            />
        );

        activeToasts[artificialToastId] = toastElement;
        activeToasts.notifyMutation();

        function onToastFinished() {
            delete activeToasts[artificialToastId];
            activeToasts.notifyMutation();
        }
    }


    return (
        <>
            <div className="p-2">
                <a className="cursor-pointer"
                   data-tippy-content="click to copy this email to clipboard"
                   onClick={onClick}>
                    <div>
                        <img src="/img/social-media/gmail.png"
                             className="inline-block w-10 h-10 ml-4 mr-4"
                             alt={'gmail logo'}
                        />
                        <span className="text-xl font-thin align-middle">
                        {email}
                    </span>
                    </div>
                </a>
            </div>

            {Object.values(activeToasts.v)}

            {/* for eager loading/caching */}
            <img src={toastIconSrc} className="hidden" alt={''} />
        </>
    );
}
EmailContact.propTypes = emailContactPropTypes;

function copyToClipboard(value) {
    navigator.clipboard.writeText(value);
}