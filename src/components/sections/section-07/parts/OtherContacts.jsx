import ContactDetail from "../components/ContactDetail.jsx";

const otherContactsPropTypes = {};
export default function OtherContacts({}) {

    return (<>
        <div className="flex flex-row justify-center items-center p-2">
            <ContactDetail target="_blank"
                           contactTargetUrl="https://www.linkedin.com/in/immanuel-/"
                           tooltipText="Linked in"
                           contactImageUrl="/img/social-media/linked-in.svg"
            />

            <ContactDetail target="_blank"
                           contactTargetUrl="https://gitlab.com/immanuel.nuel02"
                           tooltipText="Gitlab"
                           contactImageUrl="/img/social-media/gitlab.png"
            />

            <ContactDetail target="_blank"
                           contactTargetUrl="https://github.com/Hzzkygcs"
                           tooltipText="Github"
                           contactImageUrl="/img/social-media/github.svg"
            />

            <ContactDetail target="_blank"
                           contactTargetUrl="https://stackoverflow.com/users/7069108/hzzkygcs"
                           tooltipText="Stackoverflow"
                           contactImageUrl="/img/social-media/stackoverflow.png"
            />

            <ContactDetail target="_blank"
                           contactTargetUrl="https://www.instagram.com/immanuel_312/"
                           tooltipText="Instagram"
                           contactImageUrl="/img/social-media/instagram.svg"
            />
        </div>
    </>);
}
OtherContacts.propTypes = otherContactsPropTypes;

