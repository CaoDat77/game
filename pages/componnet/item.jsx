import { Row, Col } from "react-bootstrap";
import styles from "../../styles/Product.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {
//   addItemToCart,
//   selectProductById,
// } from "../store/features/products/products.slice";
import Image from "next/image";
function Product({ product }) {
  console.log(product);
  return (
    <div className={styles.mB15}>
      <Image className={styles.image} src={product.image} alt="" />
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
