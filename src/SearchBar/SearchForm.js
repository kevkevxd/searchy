import React from "react";
import "antd/dist/antd.css";
import { Form, Select, Slider } from "antd";
const { Option } = Select;

const SearchForm = (props) => {
  const textWrapColor = props.isDark ? "white" : "black";
  return (
    <Form size="small" style={{ color: textWrapColor }}>
      <Form.Item
        name="Gender"
        rules={[
          {
            required: false,
            message: "Select Gender!",
            type: "array",
          },
        ]}
      >
        <Select mode="multiple" placeholder="Filter By Gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="trans">Trans</Option>
          <Option value="non-binary">Non-binary</Option>
        </Select>
      </Form.Item>
      <Form.Item name="Sexual Preference">
        <Select mode="multiple" placeholder="Creator's Preferred Content">
          <Option value="Solo">Solo</Option>
          <Option value="Straight">Straight</Option>
          <Option value="Lesbian">Lesbian</Option>
          <Option value="Gay">Gay</Option>
          <Option value="Bisexual">Bisexual</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="Region"
        // label="Region"
      >
        <Select mode="multiple" placeholder="Creator's Region">
          <Option value="North America">North America</Option>
          <Option value="South America">South America</Option>
          <Option value="Europe">Europe</Option>
          <Option value="Middle East">Middle East</Option>
          <Option value="Asia">Asia</Option>
          <Option value="South Asia">South Asia</Option>
          <Option value="Sub-Saharan Africa">Sub-Saharan Africa</Option>
        </Select>
      </Form.Item>
      Filter by Age
      <Form.Item name="age-slider">
        <br></br>
        <Slider
          min={18}
          marks={{ 18: "", 59: "" }}
          range
          defaultValue={[18, 59]}
        />
      </Form.Item>
      Subscription Cost
      <Form.Item name="sub-slider">
        <Slider
          onChange={props.sliderValue}
          marks={{
            0: "",
            100: "",
          }}
        />
      </Form.Item>
      Dark Mode
    </Form>
  );
};

export default SearchForm;
