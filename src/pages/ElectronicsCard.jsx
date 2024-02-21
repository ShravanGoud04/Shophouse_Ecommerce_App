import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { add } from "../features/carts/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ElectronicsCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
    toast.success("🦄 Item added in the cart", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <div className='col-4'>
        <img
          src={product.image}
          alt=''
        />
        <h3>{product.title}</h3>
        {/* <div className="priceAndBtn"> */}
        <p>Price : ${product.price}</p>
        <button
          className='cartBtn'
          onClick={() => handleAdd(product)}
        >
          <p>Add to cart</p>
          <FaCartPlus />
        </button>
        {/* </div> */}

        <button className='reviewBtn'>
          {product.rating.rate} ||
          <span className='reviewCount'>
            &nbsp; {product.rating.count} ratings
          </span>
        </button>
      </div>
    </>
  );
};

export default ElectronicsCard;
