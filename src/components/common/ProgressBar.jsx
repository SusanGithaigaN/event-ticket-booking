import PropTypes from "prop-types";
import React from "react";

export default function ProgressBar({ progress }) {
    return (
        <>
            {progress.map(({ done, rem }, index) => (
                <div key={index} className="flex flex-row w-full h-2 rounded-full mb-6">
                    <div
                        className="bg-[#24A0B5] h-2 rounded-l-full"
                        style={{ width: `${done}%` }}
                    ></div>
                    <div
                        className="bg-[#0D4149] h-2 rounded-r-full"
                        style={{ width: `${rem}%` }}
                    ></div>
                </div>
            ))}
        </>
    );
}

// PropTypes
ProgressBar.propTypes = {
    progress: PropTypes.arrayOf(
        PropTypes.shape({
            done: PropTypes.number.isRequired,
            rem: PropTypes.number.isRequired,
        })
    ).isRequired,
};
