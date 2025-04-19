import React from "react";
import PropTypes from "prop-types";

export default function Progress({ title, step }) {
    return (
        <>
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-thin">{title}</h2>
                <span className="text-sm text-gray-400 underline underline-offset-6">{step}</span>
            </div>
        </>
    );
}

// PropTypes
Progress.propTypes = {
    title: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired,
};
