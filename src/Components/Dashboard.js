import React from 'react';




class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: JSON.stringify(localStorage.getItem('user')).FirstName,
    };
  }
    render() {
      return (
        <div>
      <h4>Welcome {this.state.name}</h4>
          <div className="row">
            <div className="col-md-3 card p-3"></div>
            <div className="col-md-3 card p-3"></div>
            <div className="col-md-3 card p-3"></div>
            <div className="col-md-3 card p-3"></div>
          </div>
        </div>
      );
    }
  }










export default DashBoard;