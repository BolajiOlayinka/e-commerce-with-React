import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

class App extends React.Component{

  render(){
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
       
        </Switch>
        <Modal/>
{/*         
        <Details/>
        <Cart/>
        <Default/> */}
      </React.Fragment>
    );
  }
}
export default App;
// function App() {
//   return (

//     <div className="container">
//              <div className="row">
//                <div className="col-6">Column 1</div>
//                <div className="col-6"><span><i className="fas fa-home"></i></span></div>
//        </div>
//          </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }



