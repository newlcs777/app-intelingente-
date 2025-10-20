import React, { useState } from "react";
import SelectInput from "../components/SelectInput";

const ParentInput = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <SelectInput
        label="Quantas refeições você faz diariamente?"
        value={selectedValue}
        onChange={handleChange}
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      />
      <SelectInput
        label="Nível de Treinamento"
        value={selectedValue}
        onChange={handleChange}
        options={[
          { value: "A", label: "Sedentário" },
          { value: "B", label: "Pouco Treinado" },
          { value: "C", label: "Treinado" },
          { value: "D", label: "Atleta" }
        ]}
      />
    </div>
  );
};

export default ParentInput;
