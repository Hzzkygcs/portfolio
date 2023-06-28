import PropTypes from "prop-types";
import {useState} from "react";

const emailContactPropTypes = {
    email: PropTypes.string.isRequired,
};
export default function EmailContact({email,}) {
    const toastIconSrc = "/img/misc/copy-svgrepo-com.svg";
    const [activeToasts, setActiveToasts] = useState([]);



    function onClick() {
        navigator.clipboard.writeText(email);
        showToast({
            toastMessage: 'Email copied',
            toastIconSrc: toastIconSrc, /* TODO */
            additionalClass: ['copied-notification-toast'],
        });
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

            {/* for eager loading/caching */}
            <img src={toastIconSrc} className="hidden" alt={''} />
        </>
    );
}
EmailContact.propTypes = emailContactPropTypes;

