import React from 'react';
import Header from './Header/Header';
import Cover from '../../assets/Piña.png';
import logo from '../../assets/Logo.png';
import ribbon from '../../assets/Ribbon.png';
import Graph from '../../assets/Graph.png';
import Box from '../../assets/Box.png';
import Gears from '../../assets/Gears.png';
import Cycle from '../../assets/Cycle.png';
import Megaphone from '../../assets/Megaphone.png';

class StatusReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Tierran Nuestra latina  ',
    };
  }

  render() {
    const style1 = {
      backgroundColor: 'white',
    };
    const style2 = {
      backgroundColor: 'blue',
    };
    const style3 = {
      backgroundColor: 'yellow',
    };

    return (
      <div className="container-fluid">
        <Header />
        <div
          className="row col-md-12 col-xs-12 col-lg-12"
        >
          <img src={Cover} className="piña" alt="cover" />
          <img src={logo} className="logo" alt="logo" />
          <button className="button1 purple">
            Nuestros Productos
          </button>
          <button className="button2 purple">
            Contactanos
          </button>
        </div>
        <div
          className="row col-md-12 col-xs-12 col-lg-12"
          style={style1}
        >
          <div className="about-us-box">
            <h1 className="about-us-title">Sobre Nosotros</h1>
            <h2 className="about-text">A principios del año 2015
             y con la misión de conseguir el mejor Fruto Dorado,
              nos dimos a la tarea de visitar fincas, plantaciones
               y plantas de empaque en toda Costa Rica.
                Con el objetivo claro de ofrecer a nuestros
                 exigentes y selectivos clientes en los más
                  grandes mercados Europeos un producto diferenciado,
                   llegamos a Pital de San Carlos en la zona norte
                    de Costa Rica Centroamérica.
                     Ahí dimos los primeros pasos
                      respecto a lo que definimos
                       como nuestros principales
                        “Valores de Negocio Integral”:
            </h2>
            <div className="about-us-box about-is-icons no-margin">
              <img src={ribbon} className="ribbon-png" alt="ribbon" />
              <img src={Graph} className="graph-png" alt="Graph" />
              <img src={Box} className="box-png" alt="Box" />
              <img src={Gears} className="gears-png" alt="Gears" />
              <img src={Cycle} className="cycle-png" alt="Cycle" />
              <img src={Megaphone} className="megaphone-png" alt="Megaphone" />
            </div>
            <div className="about-us-box about-is-icons no-margin icons-caption">
              <div className="ribbon-caption">
                <span className="">Comercio Justo</span>
              </div>
              <div className="graph-caption">
                <span className="">Sostenibilidad en la
              Cadena de Valor y
                  <br />Procesos Productivos
                </span>
              </div>
              <div className="box-caption">
                <span className="">Altos Estándares
              de Cultivo, Producción,
              Selección, Empaque,
              Embarque y Venta
                </span>
              </div>
              <div className="gears-caption">
                <span className="">
              Desarrollo
              Integral de todas
              las áreas de la
              compañía
                </span>
              </div>
              <div className="cycle-caption">
                <span className="">
              Innovación
              Constante
                </span>
              </div>
              <div className="megaphone-caption">
                <span className="">
              Visión de Futuro
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row col-md-12 col-xs-12 col-lg-12"
          style={style2}
        >Star product here
        </div>
        <div
          className="col-md-6 col-xs-6 col-lg-6"
          style={style3}
        >description goes here
        </div>
        <div
          className="col-md-6 col-xs-6 col-lg-6"
          style={style2}
        >pictures here
        </div>
        <div
          className="row col-md-12 col-xs-12 col-lg-12"
          style={style3}
        >Other 3 pictures here
        </div>
      </div>
    );
  }
}

export default StatusReport;
