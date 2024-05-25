/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Button, Form, Input, Modal, Select, Tag } from "antd";
import {
  parkingTypes,
  propertyStatuses,
  propertyTypes,
  furnishingTypes,
  facingTypes,
} from "../constants/index";

function FilterComponent({ setFilterFun, homeFilters }) {
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const onFinish = (values) => {
    console.log("values = ", values);
    let keyValuePair = Object.entries(values).filter((ele) => {
      return (
        ele[1] !== undefined &&
        ele[1] !== null &&
        ele[1] !== "" &&
        ele[1] !== "null"
      );
    });
    console.log("keyValuePair = ", keyValuePair);
    if (keyValuePair.length > 0) {
      setFilterFun(values);
    }
    setShowFiltersModal(false);
  };
  return (
    <>
      <div className="flex justify-between p-5 border rounded-sm border-solid border-gray-300 mb-5 items-center mt-5">
        <div>
          {Object.keys(homeFilters).length === 0 ? (
            <span className="text-gray-500 text-sm">No filters applied</span>
          ) : (
            <div className="flex flex-wrap gap-5">
              {Object.keys(homeFilters).map((key) => {
                console.log("key in object-keys = ", key);
                const value = typeof homeFilters[key];
                if (value !== "undefined") {
                  return (
                    <div className="capitalize flex flex-col gap-1" key={key}>
                      <span className="text-gray-500 text-sm">{key}</span>
                      <Tag
                        onClose={() => {
                          delete homeFilters[key];
                          setFilterFun({ ...homeFilters });
                        }}
                        closable
                        closeIcon
                        className="flex items-center gap-1 border border-solid border-primary"
                      >
                        <div className="span text-primary text-sm ">
                          {homeFilters[key]}
                        </div>
                      </Tag>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
        <div className="flex gap-5">
          <Button
            onClick={() => {
              setFilterFun({});
            }}
          >
            Clear
          </Button>
          <Button
            className="ml-2 text-white"
            onClick={() => {
              setShowFiltersModal(true);
            }}
          >
            Show Filters
          </Button>
        </div>
      </div>

      {showFiltersModal && (
        <Modal
          title={
            <h1 className="text-xl font-semibold text-primary text-center uppercase">
              Apply Filters
            </h1>
          }
          open={showFiltersModal}
          footer={null}
          onCancel={() => {
            setShowFiltersModal(false);
          }}
          centered
          width={800}
        >
          <Form
            onFinish={onFinish}
            layout="vertical"
            initialValues={homeFilters}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <Form.Item label="Property Type" name="type">
                <Select options={propertyTypes} />
              </Form.Item>
              <Form.Item label="Rent / Sale" name="status">
                <Select options={propertyStatuses} />
              </Form.Item>
              <Form.Item label="City" name="city">
                <Input />
              </Form.Item>
              <Form.Item label="Furnishing" name="furnishing">
                <Select options={furnishingTypes} />
              </Form.Item>
              <Form.Item label="Parking" name="parking">
                <Select options={parkingTypes} />
              </Form.Item>
              <Form.Item label="Vastu" name="facing">
                <Select options={facingTypes} />
              </Form.Item>
            </div>

            <div className="mt-7 flex justify-end gap-5">
              <Button
                onClick={() => {
                  setShowFiltersModal(false);
                }}
              >
                Cancel
              </Button>
              <Button className="ml-2" type="primary" htmlType="submit">
                Apply
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </>
  );
}

export default FilterComponent;
