import React from "react";
import TextField from "./TextField";
import "../assets/css/textfield.css";

const SearchField = ({ searchParam, onChange }) => {
    return (
        <div className="search-wrapper text-field-wrapper">
            <TextField name="search" value={searchParam} placeholder="Search Items" onChange={onChange} />
        </div>
    )
};

export default SearchField;
