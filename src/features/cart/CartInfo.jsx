import { useDispatch, useSelector } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { deleteItem } from "./cartSlice";

function CartInfo() {
  const { cartItems } = useSelector((st) => st.cart);

  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteItem(id));
  }

  //console.log(cartItems);

  // const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 22.99 }].map(
  //   (item) => <li key={5}>{item.name}</li>,
  // );
  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li
            className=" grid grid-cols-[auto_1fr_auto] items-center gap-2 border-b-2 "
            key={item.productId}
          >
            <img className=" h-20 w-20" src={item.image} alt="img" />
            <div className=" self-start">
              <h2 className=" mt-2 text-xs font-bold text-[#0062bd]">
                {item.name}
              </h2>
              <span className=" text-stone-500">{item.unitPrice}</span>
            </div>
            <button
              onClick={() => handleDelete(item.productId)}
              className=" self-center text-2xl font-semibold text-red-500"
            >
              <TiDeleteOutline />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartInfo;
