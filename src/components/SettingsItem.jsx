import React from "react";

const SettingsItem = ({ setting, setSetting, hidden }) => {
  return (
    <div className={`setting_item ${hidden ? "hidden" : ""}`}>
      <SettingLabel label={setting.label} />

      <div className="setting_item_options">
        {setting.options.map((option) => {
          return (
            <SettingsOption
              key={option.value}
              name={setting.name}
              option={option}
              checked={option.value === setting.selectedOption}
              onClick={setSetting}
            />
          );
        })}
      </div>
    </div>
  );
};

const SettingLabel = ({ label }) => {
  return <h3 className="setting_item_label">{label}</h3>;
};

const SettingsOption = ({ name, option, checked, onClick }) => {
  const id = `${name}-${option.value}`;
  return (
    <div className="setting_item_options_option">
      <input
        id={id}
        type="radio"
        name={name}
        value={option.value}
        checked={checked}
        onChange={onClick}
      />
      <label htmlFor={id}>{option.label}</label>
    </div>
  );
};

export default SettingsItem;
