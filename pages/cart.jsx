import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../store/features/cart/cart.slice";
function Cart() {
  const { cartItems } = useSelector(selectCart);
  console.log(cartItems);
  return <div className=""></div>;
}

export default Cart;
