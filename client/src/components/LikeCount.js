import React, { useState } from "react";
import { likeProperty } from "../apicalls/properties";
import { message } from "antd";

function LikeCount({ property }) {
  const [like, setLike] = useState(property.like);

  const getData = async () => {
    try {
      const response = await likeProperty({ id: property._id });
      if (!response.success) {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <div className="flex ">
      <i
        onClick={async (e) => {
          await getData();
          setLike(like + 1);
        }}
        className="ri-heart-3-line "
      ></i>
      <span className="ml-1 text-md mr-2">{like}</span>
    </div>
  );
}

export default LikeCount;
