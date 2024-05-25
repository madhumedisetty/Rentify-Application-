import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { propertyStatuses, propertyTypes } from "../../constants/index";

const initialState = {
  propertyName: "",
  description: "",
  type: "",
  status: "",
  price: 10000,
};

function Basic({ currentStep, setCurrentStep, finalValues, setFinalValues }) {
  const [basicObj, setBasicObj] = useState(initialState);

  const onFinish = (values) => {
    console.log("values in Basic onFinish = ", values);
    setFinalValues({ ...finalValues, ...values });
    setCurrentStep(currentStep + 1);
  };

  return (
    <Form onFinish={onFinish} layout="vertical" initialValues={finalValues}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Form.Item
          name="propertyName"
          label="Property Name"
          rules={[
            {
              required: true,
              message: "Please input property name!",
            },
          ]}
          className="col-span-1 lg:col-span-3"
        >
          <Input
            onChange={(e) => {
              setBasicObj({ ...basicObj, propertyName: e.target.value });
            }}
            placeholder="Property Name"
          />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input description!",
            },
          ]}
          className="col-span-1 lg:col-span-3"
        >
          <Input.TextArea
            onChange={(e) => {
              setBasicObj({ ...basicObj, description: e.target.value });
            }}
            rows={6}
            placeholder="Description"
          />
        </Form.Item>

        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
              message: "Please input type!",
            },
          ]}
        >
          <Select options={propertyTypes} />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          rules={[
            {
              required: true,
              message: "Please input status!",
            },
          ]}
        >
          <Select options={propertyStatuses} />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: "Please input price!",
            },
          ]}
        >
          <InputNumber
            min={15000}
            className="w-full"
            type="number"
            placeholder="Price"
          />
        </Form.Item>
      </div>

      <div className="flex justify-end gap-5 mt-7">
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        <Button className="ml-3" htmlType="submit" type="primary">
          Next
        </Button>
      </div>
    </Form>
  );
}

export default Basic;
