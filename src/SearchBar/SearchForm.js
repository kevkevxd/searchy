import React from "react";
import "antd/dist/antd.css";
import { Form, Select, Switch, Slider, Col, Row, Checkbox } from "antd";
const { Option } = Select;

const SearchForm = (props) => {
  return (
    <Form size="small">
      <Form.Item
        name="Gender"
        // label="Gender"
        rules={[
          {
            required: false,
            message: "Select Gender!",
            type: "array",
          },
        ]}
      >
        <Select mode="multiple" placeholder="Sort By Gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="trans">Trans</Option>
          <Option value="non-binary">Non-binary</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="Sexual Preference"
        // label="Sexual Preference"
        rules={[
          {
            required: false,
            message: "Select Gender!",
            type: "array",
          },
        ]}
      >
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
        rules={[
          {
            required: false,
            message: "Select Gender!",
            type: "array",
          },
        ]}
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
      Sort by Age Range
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
          marks={{
            0: "",
            100: "",
          }}
        />
      </Form.Item>
      <Form.Item name="Dark-Mode" label="Dark Mode" valuePropName="checked">
        <Switch />
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
