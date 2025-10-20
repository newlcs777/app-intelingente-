import React from "react";

const SelectDefault = ({ label, options, value, onChange, defaultValue }) => {
    return (
        <label className="select-labe">
            {label}
            <select 
                className="select-default"
                value={value} 
                onChange={onChange} 
                required
            >
                <option value="">{defaultValue || "Selecione..."}</option>
                {options.map((option, index) => {
                    const optionValue = typeof option === "object" ? option.value : option;
                    const optionLabel = typeof option === "object" ? option.label : option;
                    return (
                        <option key={optionValue || index} value={optionValue}>
                            {optionLabel}
                        </option>
                    );
                })}
            </select>
        </label>
    );
};



export default SelectDefault ;
