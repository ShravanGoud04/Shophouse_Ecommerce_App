import { FaCartPlus } from "react-icons/fa";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/carts/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    let x = carts.filter((item) => item.id == product.id);

    if (x.length) {
      navigate("/cart");
      // alert("Item is allready in cart");
    } else {
      const cartProduct = { ...product, qty: 1, NewPrice: product.price };

      dispatch(add(cartProduct));

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
    }
    // dispatch(add(cartProduct));

    // toast.success("🦄 Item added in the cart", {
    //   position: "bottom-right",
    //   autoClose: 2000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
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

export default ProductCard;
