import { Button, Checkbox, Input, InputNumber, Select, Switch } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useEffect, useState } from "react";
import { SelectData } from "../../constant";
import { useDarkMode } from "../../hooks/useDarkMode";
import style from "./Insert.module.scss";

function Insert() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const onChange = (value: number | string | null) => {
    console.log("changed", value);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const HandleCheck = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const backgroundColor = darkMode ? "#181818" : "#fff";
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <div>
      <form action="">
        <fieldset>
          <legend className={darkMode ? style.dark_color : ""}>
            Insert Row
          </legend>
          <Input
            placeholder="Name"
            size="middle"
            className={darkMode ? style.dark_input : ""}
          />
          <InputNumber
            className={darkMode ? style.dark_inputNumber : style.input_number}
            min={1}
            size="middle"
            placeholder="Age"
            onChange={onChange}
          />
          <Select
            defaultValue="Subscried"
            style={{ width: 200 }}
            onChange={handleChange}
            options={SelectData}
          />
          <Checkbox
            onChange={HandleCheck}
            className={darkMode ? style.dark_color : ""}
          >
            Employed
          </Checkbox>
          <Button type="primary">Insert</Button>
          <hr />
          <div className={style.switch_wrapper}>
            <Switch
              defaultChecked={false}
              size="default"
              className={style.switch}
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className={darkMode ? style.dark_color : ""}>Mode</div>
          </div>
          <Button className={darkMode ? style.darkBtn : ""} type="primary">
            Delete
          </Button>
        </fieldset>
      </form>
    </div>
  );
}

export default Insert;
