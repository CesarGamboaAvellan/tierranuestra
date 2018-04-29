import React from 'react';

class StatusReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'StatusReport',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default StatusReport;
