/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Carousel, Button, message, Col, Row, Modal } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { getPropertyById } from "../../apicalls/properties";
import ButtonComponent from "../../components/Button";

function PropertyPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [property, setProperty] = useState({});
  const [showOwnerDetails, setShowOwnerDetails] = useState(false);

  const getData = async () => {
    try {
      const response = await getPropertyById({ id: params.id });
      console.log("response in propertyPage = ", response);
      if (response.success) {
        setProperty(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      console.log("error = ", error);
      message.error(error.message);
    }
  };

  const getSectionTitle = (title) => (
    <div>
      <h1 className="text-xl font-bold text-gray-700">{title}</h1>
      <hr className="border border-solid border-gray-300" />
    </div>
  );

  const getAttributeDetails = ({ name, value }) => {
    return (
      <div className="flex justify-between">
        <span className="text-sm text-gray-600">{name}</span>
        <span className="text-sm text-gray-600">{value}</span>
      </div>
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Button type="default" onClick={() => navigate("/")}>
        Back to Properties
      </Button>
      {property && (
        <>
          <h1 className="text-2xl font-bold text-primary m-2">
            {property.propertyName}
          </h1>
          <Row>
            <Col span={12}>
              <div className="">
                <Carousel autoplay>
                  {property?.images?.map((ele, index) => (
                    <div key={index}>
                      <img src={ele} alt={""} className="w-90" />
                    </div>
                  ))}
                </Carousel>

                <h1 className="text-xl font-bold text-gray-700 mt-2">
                  $ {property.price} / {property.status}
                </h1>

                <p className="text-sm text-gray-600">{property.description}</p>
              </div>
            </Col>
            <Col span={12}>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="border border-solid border-gray-300 rounded">
                  <div className="flex flex-col gap-1">
                    {getSectionTitle("Amenities")}
                    {getAttributeDetails({
                      name: "Bedrooms",
                      value: property.bedrooms,
                    })}
                    {getAttributeDetails({
                      name: "Bathrooms",
                      value: property.bathrooms,
                    })}
                    {getAttributeDetails({
                      name: "Parking",
                      value: property.parking,
                    })}
                    {getAttributeDetails({
                      name: "Area",
                      value: property.area,
                    })}
                    {getAttributeDetails({
                      name: "Parking",
                      value: property.parking,
                    })}
                    {getAttributeDetails({
                      name: "Furnishing",
                      value: property.furnishing,
                    })}
                  </div>

                  <div className="flex flex-col mt-2 gap-1">
                    {getSectionTitle("Address")}
                    {getAttributeDetails({
                      name: "City",
                      value: property.city,
                    })}
                    {getAttributeDetails({
                      name: "Landmark",
                      value: property.landmark,
                    })}
                    {getAttributeDetails({
                      name: "Zipcode",
                      value: property.pincode,
                    })}
                    {getAttributeDetails({
                      name: "Address",
                      value: property.address,
                    })}
                  </div>

                  <ButtonComponent
                    marginTop="mt-2"
                    title={"OwnerDetails"}
                    fullWidth={true}
                    variant="outlined"
                    onClick={() => {
                      setShowOwnerDetails(true);
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>

          {showOwnerDetails && (
            <Modal
              title={
                <h1 className="text-xl font-semibold text-primary text-center uppercase">
                  Owner Details
                </h1>
              }
              open={showOwnerDetails}
              footer={null}
              onCancel={() => {
                setShowOwnerDetails(false);
              }}
              centered
              width={800}
            >
              <Row>
                <Col span={24} className="flex flex-col gap-2">
                  <div className="flex flex-col mt-2 gap-1">
                    {getAttributeDetails({
                      name: "Owner name",
                      value: property.ownerName,
                    })}
                    {getAttributeDetails({
                      name: "Email",
                      value: property.ownerEmail,
                    })}
                    {getAttributeDetails({
                      name: "Phone",
                      value: property.ownerPhoneNumber,
                    })}
                  </div>
                </Col>
              </Row>
            </Modal>
          )}
        </>
      )}
    </div>
  );
}

export default PropertyPage;
