import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className='header-2'>
        <div className='row'>
          <div className='col-2 col-2-span'>
            <h1>
              {" "}
              The Best <br /> Look Anytime <br />
              Anywhere
            </h1>
            {/* <h1>Give your <br /> Fashion <br/> A New Style</h1> */}
            <p>
              Refresh your style with on-trend pieces from <br /> clothing
              collection.Anyone can get dressed <br />
              up and glamorous.
              <br />{" "}
            </p>
            <a
              href=''
              className='btn'
            >
              Explore Now &#8594;
            </a>
          </div>
          <div className='col-2'>
            <img
              src='.\src\assets\hero.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
