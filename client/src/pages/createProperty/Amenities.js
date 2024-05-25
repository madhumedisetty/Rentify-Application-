import React from "react";
import { Button, Select, InputNumber, Form } from "antd";
import {
  facingTypes,
  parkingTypes,
  furnishingTypes,
} from "../../constants/index";

function Amenities({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
}) {
  const onFinish = (values) => {
    console.log("values in amenities component = ", values);
    setFinalValues({ ...finalValues, ...values });
    setCurrentStep(currentStep + 1);
  };

  // bedrooms , bathrooms , balconies , parking , furnishing , area , totalFloors ,facing , age
  return (
    <Form layout="vertical" onFinish={onFinish} initialValues={finalValues}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Form.Item
          name="bedrooms"
          label="Bedrooms"
          rules={[
            {
              required: true,
              message: "Please input bedrooms!",
            },
          ]}
        >
          <InputNumber
            min={1}
            max={20}
            className="w-full"
            placeholder="Bedrooms"
          />
        </Form.Item>
        <Form.Item
          name="bathrooms"
          label="Bathrooms"
          rules={[
            {
              required: true,
              message: "Please input bathrooms!",
            },
          ]}
        >
          <InputNumber
            min={1}
            max={20}
            className="w-full"
            placeholder="Bathrooms"
          />
        </Form.Item>
        <Form.Item
          name="balconies"
          label="Balconies"
          rules={[
            {
              required: true,
              message: "Please input balconies!",
            },
          ]}
        >
          <InputNumber
            min={1}
            max={20}
            className="w-full"
            placeholder="Balconies"
          />
        </Form.Item>
        <Form.Item
          name="parking"
          label="Parking"
          rules={[
            {
              required: true,
              message: "Please input parking!",
            },
          ]}
        >
          <Select options={parkingTypes} />
        </Form.Item>
        <Form.Item
          name="furnishing"
          label="Furnishing"
          rules={[
            {
              required: true,
              message: "Please input furnishing!",
            },
          ]}
        >
          <Select options={furnishingTypes} />
        </Form.Item>
        <Form.Item
          name="area"
          label="Area"
          rules={[
            {
              required: true,
              message: "Please input area!",
            },
          ]}
        >
          <InputNumber min={3000} className="w-full" placeholder="Area" />
        </Form.Item>
        <Form.Item
          name="facing"
          label="Facing"
          rules={[
            {
              required: true,
              message: "Please input facing!",
            },
          ]}
        >
          <Select options={facingTypes} />
        </Form.Item>
      </div>

      <div className="flex justify-end gap-5 mt-7">
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        <Button className="ml-3" type="primary" htmlType="submit">
          Next
        </Button>
      </div>
    </Form>
  );
}

export default Amenities;
