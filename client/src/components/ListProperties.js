import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Pagination } from "antd";
import LikeCount from "./LikeCount";

function ListProperties({
  properties,
  setPagination,
  pageNumber,
  totalDocuments,
}) {
  const paginationFun = (page, pageSize) => {
    console.log("page in paginationFun = ", page);
    console.log("pageSize in paginationFun = ", pageSize);
    setPagination({
      currentPage: page,
    });
  };
  return (
    <>
      <div className="w-full">
        <Row gutter={[20]} className="mt-2">
          {properties.map((property, index) => (
            <Col span={6} key={index} className="mt-2">
              <div className="card flex flex-col gap-1 cursor-pointer">
                <img src={property.images[0]} alt="" height={200} />

                <div className="flex justify-between">
                  <div className="p-1 flex flex-col">
                    <span className="text-sm text-primary font-bold">
                      {property.propertyName}
                    </span>
                    <span className="text-gray-700 text-xs">
                      {property.city} , {property.landmark}
                    </span>
                  </div>
                  <LikeCount property={property} />
                </div>

                <div className="p-1 bg-gray-100 flex justify-between items-center rounded-b">
                  <span className="text-primary text-md font-bold">
                    $ {property.price}
                  </span>
                  <Link
                    className="text-sm text-primary font-semibold no-underline"
                    to={`/user/property/${property._id}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Pagination
          current={pageNumber}
          pageSize={8}
          style={{ float: "right", margin: "8px" }}
          defaultCurrent={pageNumber}
          total={totalDocuments}
          onChange={(page, pageSize) => paginationFun(page, pageSize)}
        />
      </div>
    </>
  );
}

export default ListProperties;
