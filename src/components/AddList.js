import React from "react";
import PropTypes from "prop-types";
import TextField from "./TextField";
import "../assets/css/add-to-list.css";

const AddList = ({ addToList }) => {
    const input = React.createRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const value = input.current.value;
        addToList(value);
        input.current.value = "";
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <TextField ref={input} type="text" name="addItem" className="add-field" placeholder="Add Items..." />
        </form>
    )
};

function AddListPropsAreEqual(prevProps, nextProps){
    return prevProps.addToList === nextProps.addToList
}

AddList.propTypes = {
    addToList: PropTypes.func.isRequired
}

export default React.memo(AddList, AddListPropsAreEqual);
