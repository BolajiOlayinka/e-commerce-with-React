import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo-white-sm.png';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 text-center">
            {/* <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
            
                <div className="col-lg-3 col-md-3 col-sm-10 col-xs-10">
                        <Link to ="/">
                        <img src={logo} alt="store" className="navbar-brand"/>
                    </Link>
                    <p className="text-left">Artify is an online art gallery that deals in sales 
                    of artwork within and outside the country</p> 
                </div>
                <div className="col-lg-3 col-md-3 col-sm-10 col-xs-10 text-left sm-mt-5">
                    <p className="text-left">Site Map</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Careers</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-10 col-xs-10 text-left sm-mt-5">
                    <p>My Accounts</p>
                    <p>Support</p>
                    <p>Corporate Responsibility</p>
                    <p>FAQs</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-10 col-xs-10 text-left sm-mt-5">
                    <p>Contact Us</p>
                    <p>Address:</p>
                    <p>Phone Number:</p>
                    <p>Email Address:</p>
                </div>
            </div> */}
            <div className="container-fluid text-center d-none d-lg-block pt-5">
            <div className="row">
                <div className="col-10 mx-auto col-lg-3">
                <Link to ="/">
                        <img src={logo} alt="store" className="navbar-brand"/>
                    </Link>
                    <p className="text-left">Artify is an online art gallery that deals in sales 
                    of artwork within and outside the country</p> 
                </div>
                <div className="col-10 mx-auto col-lg-3">
                    <p>Site Map</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Careers</p>
                </div>
                <div className="col-10 mx-auto col-lg-3">
                    <p>My Accounts</p>
                    <p>Support</p>
                    <p>Corporate Responsibility</p>
                    <p>FAQs</p>
                </div>
                <div className="col-10 mx-auto col-lg-3 mx-auto">
                    <p>Contact Us</p>
                    <p>Address:</p>
                    <p>Phone Number:</p>
                    <p>Email Address:</p>
                </div>
                
            </div>
        </div>
             
            </FooterWrapper>
                
            
        )
    }
}
const FooterWrapper = styled.nav `
background:var(--mainBlue);
.nav-Link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
p{
    color:var(--mainWhite)!important;
    font-size:1rem;
    width:100%;
    text-align:justify;
    
}
`