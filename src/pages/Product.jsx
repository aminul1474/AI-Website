import { useState } from "react";
import { useCRUD } from "../ai-dev/ai-ui/useCRUD";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

function Product() {
  const [readItem] = useCRUD("product");
  const dispatch = useDispatch();

  function handleAdd(vl) {
    console.log(vl);
    const { id, image, itemName, price } = vl;
    const newItem = {
      productId: id,
      name: itemName,
      image,
      quntity: 1,
      unitPrice: price,
    };
    dispatch(addItem(newItem));
  }

  return (
    <>
      <ul className=" grid grid-cols-2 justify-items-center gap-[2px] bg-[#f4f4f4] p-5 lg:grid-cols-3">
        {readItem?.map((vl) => (
          <li
            key={vl?.id}
            className=" bg-[#fff] p-4 hover:shadow-[0_0_6px_0_rgba(1,1,1,.3)]"
          >
            <span className=" text-sm text-slate-500">{vl?.categories}</span>
            <h2 className=" mt-2 text-xs font-bold text-[#0062bd]">
              {vl?.itemName}
            </h2>
            <img className=" mt-2" src={vl?.image} alt="proImg" />
            <div className=" mt-2 flex items-center justify-between align-middle">
              <span className=" text-[1.05rem] font-semibold text-slate-500">
                ${vl?.price}
              </span>
              <button
                onClick={() => handleAdd(vl)}
                className={` rounded-full bg-slate-300 p-2 text-slate-100  transition-all duration-300 hover:bg-yellow-500`}
              >
                <MdAddShoppingCart className=" text-lg" />
              </button>
            </div>
            <div className=" hidden">
              <span>hover</span>
              <span>area</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Product;
