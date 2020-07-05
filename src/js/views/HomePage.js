import React from 'react';
import Menu from "../components/Menu"
import Button from "../components/Button"
import { UP, DOWN, LEFT, RIGHT } from "../constants/actionTypes";

function HomePage() {

  return (
    <div className="homepage">
      <div className="button-container">
        <div>
          <Button direction={UP} />
          <Button direction={RIGHT} />
        </div>
        <div>
          <Button direction={LEFT} />
          <Button direction={DOWN} />
        </div>
      </div>
      <Menu direction={UP}/>
      <Menu direction={RIGHT}/>
      <Menu direction={LEFT}/>
      <Menu direction={DOWN}/>
    </div>
  );
}

export default HomePage;
