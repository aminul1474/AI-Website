import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import CartModal from "./CartModal";
import CartInfo from "./CartInfo";
import { useSelector } from "react-redux";

function Cart() {
  const [show, setShow] = useState(false); //!dev
  const { cartItems } = useSelector((st) => st.cart);
  return (
    <>
      <button
        className={`${cartItems.length > 0 ? "text-yellow-400" : ""}`}
        onClick={() => setShow((bl) => !bl)}
      >
        <span className=" inline-block">
          <HiOutlineShoppingBag className=" h-6 w-6" />
        </span>
        <span className=" inline-block -translate-x-1 -translate-y-5 rounded-full bg-slate-400 px-1.5 py-0 text-sm ">
          {cartItems.length}
        </span>
      </button>
      {show && ( //!dev
        <CartModal setShow={setShow}>
          <CartInfo />
        </CartModal>
      )}
    </>
  );
}

export default Cart;
