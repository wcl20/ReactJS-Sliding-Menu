import React from "react";
import { useDispatch } from "react-redux";
import { openMenu, showMenu } from "../actions";

function Button(props) {

  const dispatch = useDispatch();

  function handleClick(event, direction) {
    dispatch(showMenu(direction));
    setTimeout(() => dispatch(openMenu(direction)), 100);
  }

  return (
    <div className={`button ${props.direction.toLowerCase()}`} onClick={e => handleClick(e, props.direction)}>
      <p><i className="arrow"></i></p>
    </div>
  );
}

export default Button;
