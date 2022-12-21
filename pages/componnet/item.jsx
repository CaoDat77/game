import { Row, Col } from "react-bootstrap";
import styles from "../../styles/Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import React from "react";
import { addItem } from "../../store/features/cart/cart.slice";

function Product({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ itemId: product.id }));
  };

  return (
    <div className={styles.mB15}>
      <img className={styles.image} src={product.image} alt="" />
      <Link
        href={{
          pathname: "/detail/[gid]",
          query: { gid: product.id },
        }}
      >
        {product.name}
      </Link>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
