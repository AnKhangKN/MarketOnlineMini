import { Button, Col, Row } from "antd";
import React, { useState } from "react";

const SuggestionToday = () => {
  const itemsPerRow = 5;
  const rowsPerLoad = 4;

  const products = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Sản phẩm ${i + 1}`,
  }));

  const [visibleRows, setVisibleRows] = useState(rowsPerLoad);
  const totalVisibleItems = visibleRows * itemsPerRow;
  const visibleProducts = products.slice(0, totalVisibleItems);

  const handleShowMore = () => {
    setVisibleRows((prev) => prev + 2);
  };

  return (
    <>
      <h4>Gợi ý hôm nay</h4>
      <Row gutter={[16, 16]}>
        {visibleProducts.map((product) => (
          <Col key={product.id} flex="20%">
            <div
              style={{
                border: "1px solid #eee",
                padding: "12px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              {product.name}
            </div>
          </Col>
        ))}
      </Row>

      {totalVisibleItems < products.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button onClick={handleShowMore} type="primary">
            Xem thêm
          </Button>
        </div>
      )}
    </>
  );
};

export default SuggestionToday;
