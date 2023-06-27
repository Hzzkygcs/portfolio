import PropTypes from "prop-types";

const contactDetailPropTypes = {
    tooltipText: PropTypes.string.isRequired,
    contactTargetUrl: PropTypes.string.isRequired,
    contactImageUrl: PropTypes.string.isRequired,
    alt: PropTypes.string,
};
export default function ContactDetail({tooltipText, contactTargetUrl, contactImageUrl, alt}) {
    return (<>
        <a target="_blank" href={contactTargetUrl}
           data-tippy-content={tooltipText}>
            <img src={contactImageUrl}
                 className="social-media-icon"
                 alt={alt ?? 'icon-logo'}/>
        </a>
    </>);
}
ContactDetail.propTypes = contactDetailPropTypes;

