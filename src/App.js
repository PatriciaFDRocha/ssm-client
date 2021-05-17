import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { getAllProducts, loggedin } from './api';

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';

import HomePage from './components/HomePage';
import Signup from './components/Signup';
import Login from './components/Login';
import ProductList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import SeeProduct from './components/SeeProduct';
import EditProduct from './components/EditProduct';
import ShoppingCart from './components/ShoppingCart';
import About from './components/About';
import PrivateRoute from './components/PrivateRoute';
import Checkout from './components/Checkout';



class App extends React.Component {

  state = {
    products: [],
    filteredProduct: [],
    searchKeyword: "",
    loggedInUser: null,
  }

  async componentDidMount() {
    if (this.state.loggedInUser === null) {
      const response = await loggedin();

      if (response.data._id) {
        this.setCurrentUser(response.data);
      }
    }

    const responseFromProducts = await getAllProducts();
    
    this.setState({
       products: responseFromProducts.data,
    });
  }


  setCurrentUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };


  handleSearch = (keyword) => {
   this.props.history.push(`/products?search=${keyword}`);
  }

  render() {

    const { loggedInUser } = this.state;

    return (
      <div className="App" style={{ height: '100%' }}>
        <Navbar handleSearch={this.handleSearch} loggedInUser={loggedInUser} setCurrentUser={this.setCurrentUser} />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductList} />
          <PrivateRoute exact path="/products/add" component={AddProduct} />
          <Route exact path="/products/:id" component={SeeProduct} />
          <PrivateRoute exact path="/products/:id/edit" component={EditProduct} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/login"
            render={(props) => {
              return <Login {...props} setCurrentUser={this.setCurrentUser} />;
            }}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/shopping-cart" component={ShoppingCart} />
          <Route exact path="/checkout" component={Checkout} /> 
        </Switch>
        
      </div>
    );
  }
}

export default withRouter(App);
