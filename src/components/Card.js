import React from "react";

const Card = ({ children }) => {
    return (
        <div className="wrapper">
            <div className="card">
                {children}
            </div>
        </div>
    )
}

export default Card;
