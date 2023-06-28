import React from "react";

/**
 * @param {React.ElementType} AllowedElement
 * @returns {function(*, *, *): null}
 */
export default function getSpecificElementValidator(AllowedElement){
    return function (props, propName, componentName) {
        const prop = props[propName]

        let error = null
        React.Children.forEach(prop, function (child) {
            if (child.type !== AllowedElement) {
                error = new Error('`' + componentName + '` children should be of type `Card`.');
            }
        })
        return error
    };
}