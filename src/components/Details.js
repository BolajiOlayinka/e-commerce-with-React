import React, { Component } from 'react';
import {ProductConsumer} from "../Context";
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
               const {id, company, img, info, price, title, inCart}=
               value.detailsProduct;
               return (
                <div className="container py-5">
                    {/* Title */}
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    {/*Title End */}
                    {/* Product Info */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3 ">
                            <img src={img} className="img-fluid" alt="product"/>
                        </div>
                        {/* Product Text */}
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2> model:{title}</h2>
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                made by:<span className="text-uppercase">{company}</span>
                            </h4>
                            <h4 className="text-blue"><strong> price: <span>$</span>{price}</strong></h4>
                            <p className ="text-capitalize font-weight-bold mt-3 mb-0">some info about product:<span className="text-muted">{info}</span></p>
                            <Link to ='/'>
                            <ButtonContainer>
                                back to products
                            </ButtonContainer>
                            </Link>
                            <ButtonContainer cart disableed={inCart? true:false}
                            onClick={()=>{
                                value.addToCart(id);
                                value.openModal(id);
                            }}>
                               {inCart ? "inCart": "Add to Cart"} 
                            </ButtonContainer>

                            
                            
                        </div>
                        {/* End ProdUCT Text */}
                     </div>
                    {/* End Product Info */}
                </div>
               )
                }}
            </ProductConsumer>
        )
    }
}
