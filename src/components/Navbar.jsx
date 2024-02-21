import {
  FaShoppingCart,
  FaBars,
  FaUserCircle,
  FaUserCheck,
  FaUserPlus,
  FaUserMinus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  //  { var MenuItems = document.getElementById("MenuItems");
  //  MenuItems.style.maxHeight = "0px";}
  const { carts } = useSelector((state) => state.carts);

  const menutoggle = () => {
    if (MenuItems.style.maxHeight == "0px") {
      MenuItems.style.maxHeight = "200px";
    } else {
      MenuItems.style.maxHeight = "0px";
    }
  };
  return (
    <>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <Link to={"/"}>
              <h1 id='text'>Shophouse</h1>
            </Link>
          </div>
          <nav>
            <ul id='MenuItems'>
              <li>
                <Link to={"/"}>HOME</Link>
              </li>
              <li>
                <Link to={"/electronics"}>ELECTRONICS</Link>
              </li>
              <li>
                <Link to={"/jewelery"}>JEWELERY</Link>
              </li>
              <li>
                <Link to={"/mensClothing"}>MEN'S CLOTHING</Link>
              </li>
              <li>
                <Link to={"/womensClothing"}>WOMEN'S CLOTHING</Link>
              </li>
            </ul>
            <form>
              {/* <input type="text" placeholder="Enter Product Name...." /> */}
              <div className='search'>
                <input
                  type='text'
                  className='search__input'
                  placeholder='Enter Product Name...'
                />
                <button className='search__button'>
                  <svg
                    className='search__icon'
                    aria-hidden='true'
                    viewBox='0 0 24 24'
                  >
                    <g>
                      <path d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'></path>
                    </g>
                  </svg>
                </button>
              </div>
            </form>
            <div
              className='userr'
              id='In_Out'
            >
              <ul>
                <FaUserCircle className='circleUser' />
                <li id='user'>
                  <a href=''>
                    <FaUserCheck />
                  </a>
                  <a href=''>
                    <FaUserPlus />
                  </a>
                  <a href=''>
                    <FaUserMinus />
                  </a>
                </li>
              </ul>
            </div>
            <a
              style={{ fontSize: "24px" }}
              href=''
            >
              <Link to={"/cart"}>
                <button className='btnn cartt'>
                  <span>
                    Cart &nbsp; <FaShoppingCart className='cartt' /> (
                    {carts.length})
                  </span>
                </button>
              </Link>

              {/* <button className="cartt">Cart < FaShoppingCart  className="cartt"/> (0)</button> */}
            </a>
          </nav>
          <FaBars
            className='menu-icon'
            onClick={menutoggle}
          />
          {/* <img src="./images/menu.png" className="menu-icon" /> */}
        </div>
      </div>
    </>
  );
};

// -----------toggle menu for js---------

export default Navbar;
