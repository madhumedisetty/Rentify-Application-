/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import FilterComponent from "../../components/FilterComponent";
import ListProperties from "../../components/ListProperties";
import { message } from "antd";
import { AllProperties } from "../../apicalls/properties";

function Home() {
  const [properties, setProperty] = useState([]);
  const [filters, setFilter] = useState({});
  const [pagination, setPagination] = useState({ currentPage: 1 });
  const [responseData, setResponseData] = useState({});
  const [totalDocuments, setTotalDocuments] = useState(1);
  console.log("filters in home page = ", filters);

  const getData = async () => {
    try {
      const response = await AllProperties({ filters, pagination });
      console.log("response in home page = ", response);
      if (response.success) {
        setProperty(response.data.propertiesList);
        setResponseData(response.data);
        setTotalDocuments(response.data.pagination.totalDocuments);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      console.log("error = ", error);
      message.error(error.message);
    }
  };

  console.log("responseData in home page = ", responseData);
  useEffect(() => {
    console.log("useEffect in Home page");
    getData();
  }, [filters, pagination]);

  return (
    <div>
      <FilterComponent setFilterFun={setFilter} homeFilters={filters} />
      <ListProperties
        properties={properties}
        setPagination={setPagination}
        pageNumber={pagination.currentPage}
        totalDocuments={totalDocuments}
      />
    </div>
  );
}

export default Home;
