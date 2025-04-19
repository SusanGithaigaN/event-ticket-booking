import React from "react";
import PropTypes from "prop-types";

export default function InputField({ fields }) {
    return (
        <div className="border border-[#0E464F] rounded-lg bg-[#08343C] p-1 text-white text-sm space-y-2 md:space-y-4">
            {fields.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className={`grid grid-cols-2 gap-4 ${rowIndex < fields.length - 1 ? "border-b border-[#0E464F] pb-4" : ""}`}
                >
                    {row.map(({ id, label, type, placeholder, rows }, colIndex) => (
                        <div key={id} className={colIndex === 0 ? "pr-4 border-r border-[#0E464F]" : "pl-4"}>
                            <label className="text-gray-400 block mb-1" htmlFor={id}>
                                {label}
                            </label>
                            {type === "textarea" ? (
                                <textarea
                                    id={id}
                                    placeholder={placeholder}
                                    className="w-full bg-transparent rounded-md p-2 text-white placeholder-gray-500"
                                    rows={rows}
                                ></textarea>
                            ) : (
                                <input
                                    id={id}
                                    type={type}
                                    placeholder={placeholder}
                                    className="w-full bg-transparent rounded-md p-2 text-white placeholder-gray-500"
                                />
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

// PropTypes
InputField.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                placeholder: PropTypes.string.isRequired,
                rows: PropTypes.number, // Only required for textarea
            })
        )
    ).isRequired,
};
