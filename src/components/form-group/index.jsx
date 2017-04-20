import React from 'react';

export const FormGroup = ({type, value, onChange, label}) => (
    <div className="form-group">
        <label>{label}</label>
        <input
            value={value}
            onChange={onChange}
            className="form-control"
            type={type}
            placeholder={label}/>
    </div>
);
