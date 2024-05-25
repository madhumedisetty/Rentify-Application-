import React, { Suspense } from "react";
import { Button } from "antd";
import Loader from "../../components/Loader";
import PropertiesTable from "./PropertiesTable";
import { useNavigate } from "react-router-dom";

function SellerProperties() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary mb-5">Properties</h1>
        <Button
          type="default"
          onClick={() => {
            navigate("/add-property");
          }}
        >
          Create Property
        </Button>
      </div>
      <Suspense fallback={<Loader />}>
        <PropertiesTable />
      </Suspense>
    </div>
  );
}

export default SellerProperties;
