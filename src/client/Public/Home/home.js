import { extend } from "lodash";
import React, { Component, useState, useEffect, Fragment, useRef } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      age: '',
      pincode: ''
    }

  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    const { email, age, pincode } = this.state;
    return (
      <div className="row align-items-center justify-content-center h-100v">
        <div className="col-lg-4 col-md-8 col-sm-10 col-10">
          <div className="auth-form">
            <h2 className="text-center app-text-primary">Slot Notifier</h2>
            <form id="login" className="mt-3">
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" className={`form-control`} value={email} onChange={(e) => this.handleInputChange(e)} />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <input type="number" name="age" placeholder="Age" min="18" className={`form-control`} value={age} onChange={(e) => this.handleInputChange(e)} />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <input type="number" name="pincode" placeholder="Pincode" min="111111" max="999999" className={`form-control`} value={pincode} onChange={(e) => this.handleInputChange(e)} />
                  </div>
                </div>
              </div>
              <button className="btn app-btn-primary btn-block">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default Home;
