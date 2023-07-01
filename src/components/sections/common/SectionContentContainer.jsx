import PropTypes from "prop-types";
import React from "react";


SectionContentContainer.propTypes = {
    elementId: PropTypes.string.isRequired,
    rowPos: PropTypes.number.isRequired,
    title: PropTypes.string,
    additionalClass: PropTypes.array,
    children: PropTypes.any,
};

export function SectionContentContainer({elementId, rowPos, title=null,
                                            additionalClass=[], children,}) {
    return (<>
        <div id={elementId}
             className={"content-section-container flex flex-col items-center " + additionalClass.join(' ')}
             style={{gridRow: rowPos}}>
            {title && (
                <h1 className="text-4xl">
                    {title}
                </h1>
            )}

            {children}
        </div>
    </>);
}


