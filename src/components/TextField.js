import React from "react";
import clsx from "clsx";
import "../assets/css/textfield.css";

const TextField = React.forwardRef(({ className, name,...rest}, ref) => (<div className={clsx(className, "text-field-wrapper")}>
        <input type="text" ref={ref} className="text-field" name={name} {...rest} />
    </div>
));

export default TextField;
