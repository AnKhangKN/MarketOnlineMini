import React from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "./style";

const CategoryPage = () => {
  const { id, name } = useParams();

  return (
    <>
      <Wrapper>
        <div style={{ width: 1200, margin: "auto" }}>
          <h1>Category ID: {id}</h1>
          <h2>Category Name: {name}</h2>
        </div>
      </Wrapper>
    </>
  );
};

export default CategoryPage;
