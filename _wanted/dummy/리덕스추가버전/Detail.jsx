import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const {detailText} = useParams();
  
  return (
      <div>
        <h1>내 버킷 리스트</h1>
        <p>{detailText}</p>
      </div>
  );
};

export default Detail;