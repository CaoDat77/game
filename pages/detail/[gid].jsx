import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { products } from "../../store/features/products/products.slice";
import { useSelector, useDispatch } from "react-redux";
import {
  loadProduct,
  selectProductsList,
} from "../../store/features/products/products.slice";

const GameDetail = ({ data }) => {
  console.log(data);
  return (
    <Container>
      {data.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </Container>
  );
};

export default GameDetail;

//staticPath - Có bao nhiêu sản phẩm
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3002/products");
  const data = await res.json();
  console.log(data);

  return {
    paths: data.map((item) => ({ params: { gid: String(item.id) } })),
    fallback: false,
  };
};

// staticProps - thông tin cụ thể 1 sản phẩm là gì
export const getStaticProps = async (ctx) => {
  const { gid } = ctx.params;
  const res = await fetch("http://localhost:3002/id" + gid);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
