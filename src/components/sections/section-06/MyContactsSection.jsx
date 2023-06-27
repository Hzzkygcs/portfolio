import PropTypes from "prop-types";
import EmailContact from "./parts/EmailContact.jsx";
import OtherContacts from "./parts/OtherContacts.jsx";

const myContactsSectionPropTypes = {
    rowPos: PropTypes.number.isRequired,
};
export default function MyContactsSection({rowPos,}) {


    return (<>
        <div id="connect-with-me"
             className="content-section-container ending-section flex flex-col justify-start items-stretch
                min-h-[50vh]"
             style={{
                 gridRow: rowPos,
             }}>

            <div className="flex flex-col flex-grow justify-center items-center w-full mt-8">
                <h2 className="text-4xl mb-16">Reach Me</h2>

                <EmailContact email={'immanuel.nuel02@gmail.com'} />
                <OtherContacts />
            </div>
        </div>

    {/*



        <div class="flex flex-col flex-grow justify-center items-center w-full mt-8">
            <h2 class="text-4xl mb-16">Reach Me</h2>

            <div class="p-2">
                <a class="cursor-pointer"
                   data-tippy-content="click to copy this email to clipboard"
                   onclick="navigator.clipboard.writeText('<%- myContacts.email %>');
                            showToast({
                                toastMessage: 'Email copied',
                                toastIconSrc: '<%- toastIconSrc %>',
                                additionalClass: ['copied-notification-toast'],
                            });">
                    <div>
                        <img src="/img/social-media/gmail.png" class="inline-block w-10 h-10 ml-4 mr-4">

                        <span class="text-xl font-thin align-middle">
                            <%- myContacts.email %>
                        </span>
                    </div>
                </a>
            </div>
            <div class="flex flex-row justify-center items-center p-2">
                <a target="_blank" href="<%- myContacts.linkedinUrl %>"
                   data-tippy-content="Linked in">
                    <img src="/img/social-media/linked-in.svg"
                         class="social-media-icon">
                </a>
                <a target="_blank" href="<%- myContacts.gitlabUrl %>"
                   data-tippy-content="Gitlab">
                    <img src="/img/social-media/gitlab.png"
                         class="social-media-icon">
                </a>
                <a target="_blank" href="<%- myContacts.githubUrl %>"
                   data-tippy-content="Github">
                    <img src="/img/social-media/github.svg"
                         class="social-media-icon">
                </a>
                <a target="_blank" href="<%- myContacts.stackoverflowUrl %>"
                   data-tippy-content="Stackoverflow">
                    <img src="/img/social-media/stackoverflow.png"
                         class="social-media-icon">
                </a>
                <a target="_blank" href="<%- myContacts.instagramUrl %>"
                   data-tippy-content="Instagram">
                    <img src="/img/social-media/instagram.svg"
                         class="instagram social-media-icon">
                </a>
            </div>
        </div>
    </div>


    <!-- for eager loading/caching -->
    <img src="<%- toastIconSrc %>" class="hidden">


    <script>
        tippy('[data-tippy-content]');
    </script>
    */}
    </>);
}
MyContactsSection.propTypes = myContactsSectionPropTypes;

