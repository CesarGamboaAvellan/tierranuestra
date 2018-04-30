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
import piñas from '../../assets/Layer16.png';
import pina2 from '../../assets/pina2.png';
import pina3 from '../../assets/pina3.png';
import pina4 from '../../assets/pina4.png';

class StatusReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Tierran Nuestra latina  ',
    };
  }

  render() {
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
          className="row col-md-12 col-xs-12 col-lg-12 bg-star"
        >
          <div className="start-product">
            <h1 className="start-product-title pina-container">Nuestro Producto Estrella</h1>
            <p className="start-product-text">
            Desde hace m&aacute;s de 50 a&ntilde;os,
              la Pi&ntilde;a ha sido en Costa Rica
               una de las fuentes m&aacute;s
                fuertes de ingreso para el sector
                 agrario. En sus inicios toda la
                  producci&oacute;n se destinaba
                   para el consumo nacional como
                    fruta fresca y para la elaboraci&oacute;n
                     de jugos, pulpas y mermeladas.
                      Los a&ntilde;os acumulados de experiencia
                       abren las puertas a nuevas oportunidades,
                        y es en la segunda etapa de los a&ntilde;os
                         80&rsquo;s cuando con la variedad conocida
                          como Cayenna Lisa se dan los primeros pasos
                           de exportaci&oacute;n.<br />Con el paso de
                            los a&ntilde;os y la apertura de nuevos mercados
                             mundiales se exporta variedad Champaca y para
                              satisfacci&oacute;n de los consumidores m&aacute;s
                               exigentes en el 2001
                                la calidad Golden se posiciona
                                como la preferida.
            </p>
            <p className="start-product-text">Contamos con planta de
               producci&oacute;n y procesamiento
                propia, adem&aacute;s de nuestro
                 propio terreno de cultivo en el
                  cual mimamos cada pi&ntilde;a,
                   una a una, para ofrecer un excelente
                    producto de calidad inmejorable.
            </p>
            <button className="button-pina">Conocer todos los productos</button>
          </div>
          <div className="pina-container"><img src={piñas} className="pinas-png" alt="ribbon" /></div>
        </div>
        <div
          className="row col-md-12 col-xs-12 col-lg-12 bg-star"
        >
          <img src={pina2} className="pina2" alt="pineaple" />
          <img src={pina3} className="pina3" alt="pineaple2" />
          <img src={pina4} className="pina4" alt="pineaple3" />
        </div>
        <div
          className="row col-md-12 col-xs-12 col-lg-12 footer"
        >
          <h4 className="copyright"> Tierra Nuestra Latina © 2016</h4>
        </div>
      </div>
    );
  }
}

export default StatusReport;
