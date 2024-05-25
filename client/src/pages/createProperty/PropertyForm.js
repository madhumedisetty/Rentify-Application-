import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import Basic from "./Basic";
import Location from "./Location";
import Amenities from "./Amenities";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";

function PropertyForm() {
  const location = useLocation();
  const data = location.state;
  console.log("data in propert form from edit options = ", data);

  // let isEdit = data.isEdit;
  let isEdit = false;
  let initialState = {};
  if (isEdit) {
    initialState = { ...data.property };
  } else {
    initialState = {
      propertyName: "",
      description: "",
      type: "",
      status: "",
      price: 10000,
      city: "",
      pincode: 500090,
      landmark: "",
      address: "",
      bedrooms: 1,
      bathrooms: 1,
      balconies: 1,
      parking: "",
      furnishing: "",
      area: 18200,
      facing: "",
      ownerName: "",
      ownerEmail: "",
      ownerPhoneNumber: "",
      images: [],
    };
  }
  const [currentStep, setCurrentStep] = useState(0);
  const [finalValues, setFinalValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const commonPropsForSteps = {
    currentStep,
    setCurrentStep,
    finalValues,
    setFinalValues,
    loading,
    setLoading,
    isEdit,
  };

  const steps = [
    {
      title: "Basic",
      content: <Basic {...commonPropsForSteps} />,
    },
    {
      title: "Location",
      content: <Location {...commonPropsForSteps} />,
    },
    {
      title: "Amenities",
      content: <Amenities {...commonPropsForSteps} />,
    },
    {
      title: "Contact",
      content: <Contact {...commonPropsForSteps} />,
    },
  ];

  useEffect(() => {
    console.log("useEffect in propertyForm data = ", finalValues);
  }, [finalValues]);

  return (
    <div>
      <Steps className="text-sm" current={currentStep} items={steps} />

      <div className="mt-8">{steps[currentStep].content}</div>
    </div>
  );
}

export default PropertyForm;
