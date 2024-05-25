import React from "react";
import { Button, Form, Input } from "antd";

function Location({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
}) {
  const onFinish = (values) => {
    console.log("values in location onFinish = ", values);
    setFinalValues({ ...finalValues, ...values });
    setCurrentStep(currentStep + 1);
  };

  // city , pincode , lanmark , address
  return (
    <Form layout="vertical" onFinish={onFinish} initialValues={finalValues}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Form.Item
          name="city"
          label="City"
          rules={[
            {
              required: true,
              message: "Please input city!",
            },
          ]}
        >
          <Input placeholder="City" />
        </Form.Item>
        <Form.Item
          name="pincode"
          label="Pincode"
          rules={[
            {
              required: true,
              message: "Please input pincode!",
            },
          ]}
        >
          <Input className="w-full" placeholder="Pincode" />
        </Form.Item>
        <Form.Item
          name="landmark"
          label="Landmark"
          rules={[
            {
              required: true,
              message: "Please input landmark!",
            },
          ]}
        >
          <Input placeholder="Landmark" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input address!",
            },
          ]}
          className="col-span-1 lg:col-span-3"
        >
          <Input.TextArea rows={6} placeholder="Address" />
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

export default Location;
