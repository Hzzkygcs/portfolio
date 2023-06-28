import PropTypes from "prop-types";
import {Portal} from "react-portal";
import {useEffect} from "react";


Toast.propTypes = {
    toastMessage: PropTypes.string.isRequired,
    toastIconSrc: PropTypes.string.isRequired,
    timeoutMs: PropTypes.number,
    showingUpAnimationDurationMs: PropTypes.number,
    leavingAnimationDurationMs: PropTypes.number,
    additionalClass: PropTypes.array,
    onToastFinished: PropTypes.func,
};

let toastCount = 0;

export function Toast({
    toastMessage, toastIconSrc, timeoutMs = 3000,
    showingUpAnimationDurationMs = 300,
    leavingAnimationDurationMs = 500,
    additionalClass = [],
    onToastFinished=()=>{},
}) {
    const [showingUp, setShowingUp] = useState(true);
    const toastId = "toast-" + toastCount++;

    const additionalClassesAsStr = (additionalClass ?? []).join(' ');

    function toastElement() {
        return $(`#${toastId}`)
    }
    useEffect(function () {
        setTimeout(() => {
            toastElement().addClass("deployed");
        }, 5);

        setTimeout(() => {
            toastElement.fadeOut(leavingAnimationDurationMs, () => {
                onToastFinished();
            });
        }, timeoutMs);
    }, []);

    return (<>
        {showingUp && <Portal>
            <div id={toastId}
                 className={`toast-box
                     flex items-center w-full max-w-xs p-4 space-x-4
                     text-gray-500 bg-gray-50 divide-x divide-gray-200
                     rounded-lg shadow space-x ${additionalClassesAsStr}`}
                 role="alert"
                 style={{
                     '--show-up-animation-duration': showingUpAnimationDurationMs,
                 }}>


                <img className="toast-logo w-8 h-8" src={toastIconSrc} />
                <div className="toast-msg pl-4">{toastMessage}</div>
            </div>
        </Portal>}
    </>);
}


