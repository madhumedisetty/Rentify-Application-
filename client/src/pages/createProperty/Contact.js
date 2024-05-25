import React from "react";
import { Button, Form, Input, message } from "antd";
import { AddProperty, EditProperty } from "../../apicalls/properties";
import { useNavigate } from "react-router-dom";
import { imagesArr } from "../../constants/index";

function Contact({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
  loading,
  setLoading,
  isEdit = false,
}) {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    function randomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randomIndex = randomNumber(0, imagesArr.length - 1);
    console.log("random index number = ", randomIndex);
    try {
      console.log("values in Contact onFInish = ", values);
      console.log("finalValues in COntact onFInish = ", finalValues);
      const tempFinalValues = {
        ...finalValues,
        ...values,
        images: [imagesArr[randomIndex]],
      };

      console.log("tempFinalValues = ", tempFinalValues);
      let response = null;
      if (isEdit) {
        response = await EditProperty(tempFinalValues);
      } else {
        response = await AddProperty(tempFinalValues);
      }
      message.success(response.message);
      navigate("/seller-properties");
    } catch (error) {
      console.log("error = ", error);
      message.error(error.message);
    }
  };

  // ownerName , ownerEmail , ownerPhone , ownerAddress , showOwnerContact
  return (
    <Form onFinish={onFinish} layout="vertical" initialValues={finalValues}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Form.Item
          name="ownerName"
          label="Owner Name"
          rules={[
            {
              required: true,
              message: "Please input owner name!",
            },
          ]}
        >
          <Input placeholder="Owner Name" />
        </Form.Item>
        <Form.Item
          name="ownerEmail"
          label="Owner Email"
          rules={[
            {
              required: true,
              message: "Please input owner email!",
            },
          ]}
        >
          <Input type="email" placeholder="Owner Email" />
        </Form.Item>
        <Form.Item
          name="ownerPhoneNumber"
          label="Owner Phone"
          rules={[
            {
              required: true,
              message: "Please input owner phone!",
            },
          ]}
        >
          <Input placeholder="Owner Phone" />
        </Form.Item>
      </div>
      <div className="flex justify-end gap-5 mt-7">
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        <Button
          className="ml-3"
          type="primary"
          htmlType="submit"
          loading={loading}
        >
          Save Property
        </Button>
      </div>
    </Form>
  );
}

export default Contact;
