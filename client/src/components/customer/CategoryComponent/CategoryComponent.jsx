import React from "react";
import logoDo from "../../../assets/logo/LogoMarketOnlineMiniDo.png";
import { ItemCategory, TitleCategory } from "./style";
import { useNavigate } from "react-router-dom";
import useSlug from "../../../hooks/useSlug";

const categories = [
  { id: 1, name: "Điện thoại", image: logoDo },
  { id: 2, name: "Laptop", image: logoDo },
  { id: 3, name: "Thời trang", image: logoDo },
  { id: 4, name: "Tên danh mục rất dài hhhhhhhhhhhhhhhhh", image: logoDo },
];

const CategoryComponent = () => {
  const navigate = useNavigate();

  const { toSlug } = useSlug();

  const handleNavigateCategoryPage = ({ id, name }) => {
    const slug = toSlug(name);
    navigate(`/category/${slug}/${id}`);
  };

  return (
    <>
      <div style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>
        Danh mục
      </div>
      <div style={{ maxWidth: 400 }}>
        {categories.map((category) => (
          <ItemCategory
            key={category.id}
            onClick={() => handleNavigateCategoryPage(category)}
          >
            <div
              style={{
                minWidth: 50,
                width: 50,
                height: 50,
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={category.image}
                alt={category.name}
              />
            </div>
            <TitleCategory>{category.name}</TitleCategory>
          </ItemCategory>
        ))}
      </div>
    </>
  );
};

export default CategoryComponent;
