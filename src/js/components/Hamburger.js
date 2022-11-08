import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../reducers/features/hamburger/hamburgerSlice";
import { GoGrabber } from "react-icons/go";
import { IoIosClose } from "react-icons/io";
import Backdrop from "../backdrop/backdrop";
import Navigation from "./Navigation";

const Hamburger = () => {
  const dispatch = useDispatch();
  const openNav = useSelector((state) => state.hamburger.open);

  const navIcon = openNav ? (
    <IoIosClose size={25} onClick={() => dispatch(toggleNav())} />
  ) : (
    <GoGrabber size={25} onClick={() => dispatch(toggleNav())} />
  );

  const backdrop = openNav && (
    <Backdrop handleClick={() => dispatch(toggleNav())}>
      <Navigation class="display-flex" />
    </Backdrop>
  );

  return (
    <div className="hamburger-container">
      {navIcon}
      {backdrop}
    </div>
  );
};

export default Hamburger;
