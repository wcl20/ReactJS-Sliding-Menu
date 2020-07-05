import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, hideMenu } from "../actions";

function Menu({ direction }) {

  // Create a reference to the menu content
  const ref = useRef(null);
  const dispatch = useDispatch();
  const display = useSelector(state => {
    let dir = direction.charAt(0) + direction.slice(1).toLowerCase();
    return state[`menu${dir}`].display;
  });

  useEffect(() => {
    // Handle click
    function handleClick(event) {
      if (!ref.current.contains(event.target) && display === "open") {
        dispatch(closeMenu(direction));
        setTimeout(() => dispatch(hideMenu(direction)), 500);
      }
    }
    window.addEventListener("click", handleClick, true);
    return function cleanup() {
      window.removeEventListener("click", handleClick, true);
    }
  });

  return (
    <div className={ `menu ${ direction.toLowerCase()} ${display}` }>
      <div className="bar">
        <p><i className="arrow"></i></p>
      </div>
      <div className="content" ref={ref} >
      </div>
    </div>
  );
}

export default Menu;
