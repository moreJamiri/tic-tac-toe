import React, { useState } from "react";

const Radio = () => {
  const [options, setOptions] = useState({
    name: "platform",
    selectedOption: "windows",
    options: [{ value: "windows" }, { value: "mac" }, { value: "linux" }],
  });

  const handleChange = (e) => {
    const newOptions = { ...options, selectedOption: e.target.value };
    setOptions(newOptions);
  };

  return (
    <div>
      Select a choice
      {options.options.map((option) => {
        return (
          <div key={option.value}>
            <label>
              <input
                type="radio"
                name={options.name}
                value={option.value}
                checked={option.value === options.selectedOption}
                onChange={handleChange}
              />
              {option.value}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
