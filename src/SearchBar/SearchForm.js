import React from "react";
import "antd/dist/antd.css";
import { Form, Select, Switch, Slider } from "antd";
const { Option } = Select;

const SearchForm = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  // const onFormLayoutChange = ({ size }) => {
  //   setComponentSize(size);
  // };
  return (
    <Form size="small">
      <Form.Item
        name="select-multiple"
        label="Gender"
        rules={[
          {
            required: false,
            message: "Select Gender!",
            type: "array",
          },
        ]}
      >
        <Select mode="multiple" placeholder="Please select favourite colors">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="trans">Trans</Option>
          <Option value="non-binary">Non-binary</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="select-multiple"
        label="Sexual Preference"
        rules={[
          {
            required: false,
            message: "Select Gender!",
            type: "array",
          },
        ]}
      >
        <Select mode="multiple" placeholder="Please select favourite colors">
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="select-multiple"
        label="Region"
        rules={[
          {
            required: false,
            message: "Select Gender!",
            type: "array",
          },
        ]}
      >
        <Select mode="multiple" placeholder="Please select favourite colors">
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </Form.Item>

      <Form.Item name="switch" label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item name="age-slider" label="Age">
        <Slider
          marks={{
            0: "",
            20: "",
          }}
        />
      </Form.Item>

      <Form.Item name="sub-slider" label="Subscription Cost">
        <Slider
          marks={{
            0: "",
            100: "",
          }}
        />
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
