import React from "react";
import PropTypes from "prop-types";
import "../assets/css/list-item-wrapper.css"

const ListItem = ({ text, icon }) => {
    return (
        <li>
            <div className="list-item-child">
                <div className="list-item-text">
                    <span>{text}</span>
                </div>
                {icon && (
                    <div className="list-item-icon">
                        {icon}
                    </div>
                )}
            </div>
        </li>
    )
}

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.element,
}

// don't re-render this component if text and icon don't change
// You can use React.memo and function that returns true if props don't change
function ListItemAreEqual(prevProps, nextProps){
    return (
        prevProps.text === nextProps.text && prevProps.icon === nextProps.icon
    )
}

export default React.memo(ListItem, ListItemAreEqual);
