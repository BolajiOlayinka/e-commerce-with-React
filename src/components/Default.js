import React, { Component } from 'react';
import image from '../404.svg';

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
              <div className="row">
              
                  <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                  <h4>Page Not Found</h4>
                  <h5>The Requested URL <span className="text-danger">{this.props.location.pathname}</span>{""} Was Not Found</h5>
                  <img src={image}  className="img-fluid" style={{width:'70%' }}  alt="404"/>
                      
                      
                  </div>
              </div>
            </div>
        )
    }
}

