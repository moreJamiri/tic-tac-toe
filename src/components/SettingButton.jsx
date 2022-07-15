import React from "react";

const SettingButton = ({ onSubmit }) => {
  return (
    <div className="setting_item">
      <button className="setting_item_button" onClick={onSubmit}>
        شروع بازی
      </button>
    </div>
  );
};

export default SettingButton;
