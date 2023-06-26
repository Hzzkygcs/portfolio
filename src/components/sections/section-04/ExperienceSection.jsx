const experienceSectionPropTypes = {
    rowPos
};
export default function ExperienceSection({rowPos}) {

    return (<>
        <div id="experiences"
             className="content-section-container flex flex-col items-center"
             style="grid-row: <%- rowPos %>;">
            <h1 className="text-4xl">
                Experiences
            </h1>

        {/* TODO
            <% Object.keys(experienceGroups).forEach(function(experienceGroupName){ %>
            <% var experiences = experienceGroups[experienceGroupName]; %>
            <div class="flex flex-col items-center mt-5">
                <h2 class="text-2xl mb-3">
                    <%= experienceGroupName %>
                </h2>

                <%- include("used-templates/experience-box-template.ejs", {experiences: experiences}) %>
            </div>
            <% }) %>
        */}
        </div>
    </>);
}
ExperienceSection.propTypes = experienceSectionPropTypes;

