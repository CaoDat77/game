import { Row, Col } from "react-bootstrap";
import styles from "../../styles/Product.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  selectProductById,
} from "../../store/features/products/products.slice";

function Product({ product }) {
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const handleAddToCartClick = () => {
    dispatch(addItem({ id: product.id, quantity: 1 }));
    toast("Thêm sản phẩm vào giỏ hàng thành cmn công");
  };

  return (
    <div className={styles.mB15}>
      <img className={styles.image} src={product.image} alt="" />
      <button onClick={handleAddToCartClick}>Add to cart</button>
    </div>
  );
}

export default Product;
