import Link from "next/link";
import { Container, Row, Col, Pagination, Form } from "react-bootstrap";
import styles from "../../styles/Shop.module.css";
import Sologan from "../componnet/Sologan";
import Product from "../componnet/item";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProductsList,
  loadProduct,
} from "../../store/features/products/products.slice";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  Slider,
  styled,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import qs from "query-string";

function Shop({ data = [], filter, url }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadProduct({ productId: 1 }));
  }, []);

  const [searchText, setSearchText] = React.useState("");
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  };

  const { products, currentPage, totalPage, pageChanged, filterChanged } =
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

  const router = useRouter();
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      // categories: filter.categories,
      // brand: filter.brand,
    },
  });
  const filterRef = React.useRef();

  const categories = [
    {
      id: 2,
      label: "Table",
      value: "Table",
    },
    {
      id: 3,
      label: "Chair",
      value: "Chair",
    },
    {
      id: 4,
      label: "other",
      value: "other",
    },
  ];

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
                  <Form
                    onChange={() => {
                      const filter = [];
                      console.log(filter);
                      filterRef.current.elements.filter.forEach((checkbox) => {
                        if (checkbox.checked) filter.push(checkbox.value);
                      });

                      dispatch(filterChanged(filter));
                    }}
                    ref={filterRef}
                  >
                    <Box mb="30px">
                      <FormGroup>
                        {categories.map((categories) => {
                          return (
                            <Form.Check
                              name="filter"
                              type="checkbox"
                              key={categories.id}
                              label={categories.label}
                              value={categories.value}
                            />
                          );
                        })}
                      </FormGroup>
                    </Box>
                  </Form>
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
              <Pagination className={styles.pagination}>
                {paginationItems}
              </Pagination>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}

export default Shop;

// export const getServerSideProps = async (context) => {
//   const { categories = [] } = context.query;

//   const url = qs.stringifyUrl(
//     {
//       url: "http://localhost:3002/products",
//       query: {
//         categories,
//       },
//     },
//     {
//       skipEmptyString: true,
//       skipNull: true,
//     }
//   );

//   const res = await fetch(url);

//   const data = await res.json();

//   return {
//     props: {
//       data,
//       url,
//       filter: {
//         categories,
//       },
//     },
//   };
// };
