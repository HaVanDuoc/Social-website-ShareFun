import React, { useState } from "react";

const FieldInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { id, errorMessage, ...inputProps } = props;
    console.log(errorMessage);

    const handleFocus = () => {
        setFocused(true);
    };

    return (
        <div className="field">
            <input
                {...inputProps}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FieldInput;
