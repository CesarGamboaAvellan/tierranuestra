import React from 'react';
import Header from './Header/Header';
import Cover from '../../assets/Piña.png';
import logo from '../../assets/Logo.png';

class StatusReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Tierran Nuestra latina  ',
    };
  }

  render() {
    const style1 = {
      backgroundColor: 'red',
    };
    const style2 = {
      backgroundColor: 'blue',
    };
    const style3 = {
      backgroundColor: 'yellow',
    };
    const style4 = {
      backgroundColor: 'green',
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
          style={style3}
        >About us goes here
        </div>
        <div
          className="row col-md-12 col-xs-12 col-lg-12"
          style={style4}
        >Icons here
        </div>
        <div
          className="row col-md-12 col-xs-12 col-lg-12"
          style={style1}
        >Star product here
        </div>
        <div
          className="col-md-6 col-xs-6 col-lg-6"
          style={style1}
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
