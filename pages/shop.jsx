import Link from "next/link";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import styles from "../styles/Shop.module.css";
import Sologan from "./componnet/Sologan";
import Product from "./componnet/item";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProductsList,
  loadProduct,
} from "../store/features/products/products.slice";
import { useEffect } from "react";
import { selectAllProducts } from "../store/features/products/products.slice";
import { searchFilterChange } from "../store/features/products/filter.slice";
function Shop() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = React.useState("");
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  };

  useEffect(() => {
    dispatch(loadProduct({ productId: 1 }));
  }, []);
  const { products, currentPage, totalPage, pageChanged } =
    useSelector(selectProductsList);

  const paginationItems = new Array(totalPage)
    .fill(null)
    .map((value, index) => (
      <Pagination.Item
        key={index}
        active={index === currentPage}
        onClick={() => dispatch(pageChanged(index))}
      >
        {index + 1}
      </Pagination.Item>
    ));

  return (
    <Container fluid className={styles.page}>
      <Container fluid className={styles.bg}>
        <Sologan text="SHOP" />
      </Container>
      <section className={styles.mT80}>
        <Container>
          <Row>
            <Col lg={4}>
              <div className={styles.input}>
                <input
                  value={searchText}
                  className={styles.search}
                  type="text"
                  placeholder="Search"
                  onChange={handleSearchTextChange}
                />
                <div className={styles.icon}>
                  <SearchIcon />
                </div>
              </div>
              <div className="">
                <h1>CATEGORIES</h1>
                <div className="">
                  <p>TABLE</p>
                  <p>CHAIR</p>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <Row>
                {/* <select
                  className={styles.search}
                  type="text"
                  placeholder="Search"
                /> */}
                <div className={styles.sort}>
                  <select className={styles.select}>
                    <option value="">Default Sorting</option>
                  </select>
                </div>

                {products.map((product, index) => (
                  <Col lg={4} key={index}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              <Pagination>{paginationItems}</Pagination>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}

export default Shop;
