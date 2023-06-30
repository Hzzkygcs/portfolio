import React from "react";

export function replaceNewLineWithBrTag(sourceString, brClass='') {
    return replaceStringWithElement(sourceString, "\n", (<>
        &nbsp;
        <br className={brClass} />
    </>));
}

export function replaceStringWithElement(sourceString, targetString, element) {
    const splitted = sourceString.split(targetString);
    const ret = [];

    for (let i = 0; i < splitted.length-1; i++) {
        const evenId = 2 * i;
        const oddId = evenId + 1;

        ret.push(<React.Fragment key={evenId}>{splitted[i]}</React.Fragment>);
        ret.push(React.cloneElement(element, {
            key: oddId,
        }));
    }
    const lastSplitted = splitted[splitted.length - 1]
    ret.push(lastSplitted);

    return ret;
}