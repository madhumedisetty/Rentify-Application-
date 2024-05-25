import { Table, message, Popconfirm } from "antd";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { DeleteProperty, SellerProperties } from "../../apicalls/properties";
import { useNavigate } from "react-router-dom";

function PropertiesTable() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onDelete = async (id) => {
    try {
      setLoading(true);
      const response = await DeleteProperty({ id });
      await getData();
      message.success(response.message);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Property Name",
      dataIndex: "propertyName",
      key: "propertyName",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render(price) {
        return `$${price}`;
      },
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      render(updatedAt) {
        return dayjs(updatedAt).format("DD MMM YYYY HH:mm A");
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render(value, record) {
        return (
          <div className="flex gap-5">
            <Popconfirm
              style={{ backgroundColor: "white", color: "black" }}
              title="Delete the Property"
              description="Are you sure to delete this Property?"
              onConfirm={() => onDelete(record._id)}
              onCancel={() => {}}
              okText="Delete Property"
              cancelText="Cancel"
            >
              <i className="ri-delete-bin-line"></i>
            </Popconfirm>
            <Popconfirm
              style={{ backgroundColor: "white", color: "black" }}
              title="Edit the Property"
              description="Are you sure to Edit this Property?"
              onConfirm={() =>
                navigate("/add-property", {
                  state: {
                    isEdit: true,
                    property: record,
                  },
                })
              }
              onCancel={() => {}}
              okText="Edit"
              cancelText="Cancel"
            >
              <i className="ri-pencil-line"></i>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const getData = async () => {
    try {
      const response = await SellerProperties();
      console.log("response = ", response);
      if (response.success) {
        setProperties(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      console.log("error = ", error);
      message.error(error.message);
    }
  };

  useEffect(() => {
    console.log("useEffecvt in PropertiesTables in seller");
    getData();
  }, []);

  return (
    <div className="capitalize mt-2">
      <Table
        dataSource={properties}
        columns={columns}
        loading={loading}
        rowKey="id"
      />
    </div>
  );
}

export default PropertiesTable;
