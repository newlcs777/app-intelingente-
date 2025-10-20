import React from "react";
import Select from "./SelectDefault";

const SelectInput = ({ label, value, onChange }) => {
    return (
        <Select 
            label={label} 
            options={[1, 2, 3, 4, 5, 6,7,8,9]} 
            value={value} 
            onChange={onChange} 
            required
        />

        
    );
};

export default SelectInput;
