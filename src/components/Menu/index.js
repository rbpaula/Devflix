import React from 'react';
import Logo from '../../assets/img/devflix-logo.png';
import './Menu.css';
import Button from '../Button';

function Menu(){
    return (
      <nav className="Menu">
      <a href="/">
            <img className="Logo" src={Logo} alt="DEVFLIX Logo"/>
          </a>

        <Button className="ButtonLink" href="/">
            Novo Vídeo
        </Button>
      </nav>
    );
}

export default Menu;