import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/product";
import axios from "axios";
import { useState, useEffect } from "react";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:8000/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  console.log(products, "products");
  return (
    <div className="py-2">
      <Container>
        <h1 className="text-center my-4">Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
