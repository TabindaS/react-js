import React from "react";
import PropTypes from "prop-types";

export const ButtonHover = ({ className, onClick, label, isDisabled }) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <button onClick={onClick}><div className={className} disabled={isDisabled}>
        <span>{label}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
    </div>
    </button>
);

ButtonHover.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string,
    isDisabled: PropTypes.bool
};

ButtonHover.defaultProps = {
    className: "cta",
    onClick: null,
    label: "Click Me",
    isDisabled: false
};
