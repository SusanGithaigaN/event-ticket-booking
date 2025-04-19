import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttons }) => {
    if (!buttons || !Array.isArray(buttons)) {
        console.error("The 'buttons' prop is missing or invalid.");
        // prevent rendering if buttons is undefined or invalid
        return null;
    }

    return (
        <div className="flex justify-between mt-6 gap-8">
            {buttons.map((button, index) => {
                const ButtonTag = button.href ? "a" : "button";
                return (
                    <ButtonTag
                        key={index}
                        href={button.href}
                        onClick={button.onClick}
                        className={`w-32 lg:w-48 px-4 py-2 text-sm text-center ${button.variant === "primary"
                                ? "text-gray-200 bg-[#24A0B5] hover:bg-[#6ad0e2]"
                                : "text-gray-400 bg-transparent hover:bg-[#eaf8fb] border-1 border-[#24A0B5]"
                            } rounded-lg`}
                    >
                        {button.label}
                    </ButtonTag>
                );
            })}
        </div>
    );
};

// PropTypes validation
Button.propTypes = {
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string,
            onClick: PropTypes.func,
            label: PropTypes.string.isRequired,
            variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
        })
    ).isRequired,
};

export default Button;
