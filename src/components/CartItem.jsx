import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { QtyUpdate, newPrice, remove } from "../features/carts/cartSlice";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  // const { carts } = useSelector((state) => state.carts);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
    toast.error("Item Removed", {
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

  const [Qty, setQty] = useState(1);

  const handlezero = () => {
    if (Qty <= 1) {
      setQty(1);
    }
  };

  const PriceUpdate = (id, num) => {
    const newPayload = {
      id,
      num,
    };
    dispatch(QtyUpdate(newPayload));

    dispatch(newPrice(newPayload));
  };

  useEffect(() => {
    handlezero();
    // PriceUpdate()
  }, [Qty]);

  return (
    <>
      <div className='cart-item'>
        <img
          src={item.image}
          alt=''
        />
        {/* item.NewPrice ?(item.NewPrice).toFixed(2) : (item.price).toFixed(2) */}
        <span>
          <h1>{item.title}</h1>
          <h3>
            Rate : $
            {item.NewPrice.toFixed(2)
              ? item.NewPrice.toFixed(2)
              : item.price.toFixed(2)}
          </h3>
          <h3>
            Qty :<strong onClick={() => PriceUpdate(item.id, -1)}>-</strong>{" "}
            {item.qty}
            <strong onClick={() => PriceUpdate(item.id, +1)}>+</strong>
          </h3>
        </span>
        <button
          className='remove-btn'
          onClick={() => handleRemove(item.id)}
        >
          Remove Item
        </button>
      </div>
    </>
  );
};

export default CartItem;

// import React, { useEffect, useMemo, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { remove } from "../features/carts/cartSlice";
// import { toast } from "react-toastify";

// const CartItem = ({ cart }) => {
//   const dispatch = useDispatch();

//   const [count, setcount] = useState(1);
//   const handleCountfunc = (num) => {
//     return num * cart.price;
//   };
//   const handleCount = useMemo(() => {
//     return handleCountfunc(count);
//   }, [count]);

//   const handleRemove = (id) => {
//     dispatch(remove(id));
//     toast.error("Item Removed", {
//       position: "bottom-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };

//   return (
//     <>
//       <tr>
//         <td>
//           <div className='cart-info'>
//             <img
//               src={cart.image}
//               alt=''
//             />
//             <div>
//               <p>{cart.title}</p>
//               <small>Price : ${cart.price}</small>
//               <br />

//               {/* <a href=''></a> */}
//               <Link
//                 className='linkTag'
//                 onClick={() => handleRemove(cart.id)}
//               >
//                 Remove
//               </Link>
//             </div>
//           </div>
//         </td>

//         <td>
//           <input
//             onChange={(e) => setcount(e.target.value)}
//             type='number'
//             defaultValue={1}
//           />
//         </td>
//         <td>${handleCount}</td>
//       </tr>
//     </>
//   );
// };

// export default CartItem;
