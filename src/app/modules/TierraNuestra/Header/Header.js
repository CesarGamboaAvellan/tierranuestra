import React from 'react';
import cartIcon from '../../../assets/cartIcon.png';
import Language from '../../../assets/Language.png';

const header = () => (
  <div
    className="row col-md-12 col-xs-12 col-lg-12"
  >
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar-alig">
      <img src={Language} alt="shopcart" />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto nav-bar-right">
          <li className="nav-item active">
            <a
              className="nav-link"
              href="google.com"
            >
            Inicio
              <span
                className="sr-only"
              >(current)
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="google.com">Quienes Somos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="google.com">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="google.com">Nuestros Productos</a>
          </li>
          <li>
            <img src={cartIcon} alt="shopcart" />
          </li>
        </ul>
      </div>
    </nav>
  </div>
);


export default header;

