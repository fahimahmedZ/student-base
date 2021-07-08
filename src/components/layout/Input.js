import React from 'react'

const Input = (props) => {
    const {placeholder ="Enter PlaceHolder text", value, onChange, type = "text", name} = props;
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            className="form-control"
            onChange={onChange}
        />
    )
}

export default Input
