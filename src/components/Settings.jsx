import React from "react";
import SettingButton from "./SettingButton";
import SettingsItem from "./SettingsItem";
import logo from "../logo.png";

const Settings = ({ settings, setShowGame }) => {
  const handleChange = (e, setting) => {
    const [data, setData] = setting;
    const newdata = {
      ...data,
      selectedOption: e.currentTarget.value,
    };
    setData(newdata);
  };

  const checkHidden = (setting) => {
    if (setting[0].showBy) {
      const conditionValue = settings.filter(
        (s) => s[0].name === setting[0].showBy
      )[0][0].selectedOption;

      if (conditionValue === setting[0].showIf) return false;
      return true;
    }
  };

  return (
    <div className="container">
      <header className="setting_header">
        <img className="setting_header_image" src={logo} alt="دوزبازی" />
        <h1 className="setting_header_title">دوزبازی</h1>
      </header>
      <div className="setting_items">
        {settings.map((setting) => {
          return (
            <SettingsItem
              key={setting[0].name}
              setting={setting[0]}
              setSetting={(e) => handleChange(e, setting)}
              hidden={checkHidden(setting)}
            />
          );
        })}
      </div>
      <SettingButton onSubmit={() => setShowGame(true)} />
      <footer className="setting_footer">
        {/* Warning */}
        <p style={{ color: "red" }}>
          <i className="fas fa-triangle-exclamation" /> حالت تک نفره (بازی با
          کامپیوتر) فعلا اضافه نشده است!
        </p>

        <p className="setting_footer_text">
          Coded with
          <i className="fa fa-heart"></i>
          by <a href="https://github.com/moreJamiri">moreJamiri</a>
        </p>
      </footer>
    </div>
  );
};

export default Settings;
