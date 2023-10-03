// StarWars.js
import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../assets/scss/just/starwars.scss";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiLogoGraphql } from "react-icons/bi";
import Logo from "../../assets/image/6.png";
import { Fade } from "react-reveal";
import MyContact from "../../components/contact";
import Think from "../../assets/image/think.png";
import CircularProgress from '@mui/material/CircularProgress';
const StarWars = () => {
  const [show, setShow] = useState(() => {
    const storedShow = localStorage.getItem("show");
    console.log(JSON.parse(storedShow));
    return storedShow ? JSON.parse(storedShow) : true;
  });

  useEffect(() => {
    localStorage.setItem("show", JSON.stringify(show));
  }, []);
  const handleNavLinkClick = () => {
    setShow(false);
  };

  return (
    <>
      <main className="container">
        <div className="starwars-data d-flex align-items-center">
          <Fade right>
            <div className="left">
              <h1>What you want to get information about StarWars?</h1>
              <p>
                If you wanna get information about StarWars You will be given
                information
              </p>
            </div>
          </Fade>
          <Fade left>
            <div className="right">
              <img src={Logo} alt="" />
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <MyContact text="text" />
        </Fade>

        <div className="choose">Choose and Get Information</div>
        <nav className=" d-flex justify-content-center" id="text">
          <NavLink
            to="people"
            className="d-flex align-items-center px-1 links"
            onClick={handleNavLinkClick}
          >
            <BsFillPeopleFill /> People
          </NavLink>
          <NavLink
            to="planets"
            className="d-flex align-items-center px-1 links"
            onClick={handleNavLinkClick}
          >
            <BiLogoGraphql /> PLanets
          </NavLink>
        </nav>
        <Fade bottom>
          <Outlet />
        </Fade>
        {show ? (
          <div className="think my-4">
            <img src={Think} alt="" />
          </div>
        ) : (
          ""
        )}
      </main>
      <footer></footer>
    </>
  );
};

export default StarWars;
