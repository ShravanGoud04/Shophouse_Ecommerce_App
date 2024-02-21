import React from "react";

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='footer-col-1'>
              <h3>Download Our App</h3>
              <p>
                Download App for Android <br /> and ios mobile Phone.
              </p>
              <div className='app-logo'>
                <img
                  src='src\assets\play-store.png'
                  alt=''
                />
                <img
                  src='src\assets\app-store.png'
                  alt=''
                />
              </div>
            </div>
            <div className='footer-col-2'>
              <h1 id='text'>Shophouse</h1>

              <p>
                Our Purpose Is TO Sustainably <br /> Make the Pleasure and
                Benefits of Sports Accessible to the Many.
              </p>
            </div>
            <div className='footer-col-3'>
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>
            <div className='footer-col-4'>
              <h3>Follow us</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className='copyright'>Copyright 2023 - SG </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
