import React from "react";
import PropTypes from "prop-types";

const SvgIcon = ({ src, alt, ...rest }) => {
    return (
        <img src={src} alt={alt} {...rest} />
    )
}

SvgIcon.propTypes = {
    src: PropTypes.string.isRequired,
}

export default SvgIcon;
