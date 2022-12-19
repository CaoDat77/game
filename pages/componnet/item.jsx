import { Row, Col } from "react-bootstrap";
import styles from "../../styles/Product.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/features/cart/cart.slice";
import Link from "next/link";

function Product({ product }) {
  // const { productId } = useParams();
  // const dispatch = useDispatch();
  // console.log(addItem);
  // const handleAddToCartClick = () => {
  //   dispatch(addItem({ productId: product.id, quantity: 1 }));
  //   toast("Thêm sản phẩm vào giỏ hàng thành cmn công");
  // };

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
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
