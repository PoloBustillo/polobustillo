import React from "react";
import { useState, useEffect, useRef } from "react";
import { elastic as Menu } from "react-burger-menu";

import {
  Link
} from 'react-router-dom'
export default (props) => {

  const [myState, _setMyState] = useState(false);

  const myStateRef = useRef(myState);
  const setMyState = data => {
    myStateRef.current = data;
    _setMyState(data);
  };

  const listener = (e) => {
    if(myStateRef.current && !(e.target.tagName.toLowerCase() === 'button')){
        setMyState(false)
    }

  };

  useEffect(() => {
    window.addEventListener("click", listener);
  }, []);

  const handleStateChange= (state)=> {
        setMyState(state.isOpen)
  }

  return (
    // Pass on our props
    <Menu isOpen={myState} onStateChange={(state) => handleStateChange(state)} {...props} >
        <Link data-content="Home" className="menu-item" to="/home">Home</Link>
        <Link data-content="Citas" className="menu-item" to="/citas">Citas</Link>
        <Link data-content="Terapias" className="menu-item" to="/terapias">Terapias</Link>
        <Link data-content="Actividades" className="menu-item" to="/actividades">Actividades</Link>
        <Link data-content="Contacto" className="menu-item" to="/contacto">Contacto</Link>
    </Menu>
  );
};
