import React from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import "./Navbar.css";
import { toggledarkMode } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const isModeDark = useSelector((state) => state.DarkModereducer.mode);

  const handleMode = () => {
    dispatch(toggledarkMode());
  };

  return (
    <div className="navbarContainer">
      <div className="navHeading">Awesome TodoList using React & Redux</div>
      <div>
        <div className="reactIcon">
          {isModeDark === false ? <MdOutlineLightMode /> : <MdDarkMode />}
        </div>
        <button onClick={handleMode}>
          {isModeDark === false ? "dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
