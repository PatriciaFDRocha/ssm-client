import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { getAllProducts, loggedin } from './api';

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import Login from './components/Login';
import ProductList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import SeeProduct from './components/SeeProduct';
import EditProduct from './components/EditProduct';
import About from './components/About';
import PrivateRoute from './components/PrivateRoute';
import SeeAllShops from './components/SeeAllShops';
import AddShop from './components/AddShop';
import SeeOnlyShop from './components/SeeOnlyShop';
import EditShop from './components/EditShop';
import WishList from './components/WishList';
import AddReview from './components/AddReview';
import ShoppingCart from './components/ShoppingCart';

import PaymentTemplate from './components/Payment';
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
      <ToastContainer />
        <Navbar handleSearch={this.handleSearch} loggedInUser={loggedInUser} setCurrentUser={this.setCurrentUser} />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute exact path="/products" component={ProductList} />
          
          <PrivateRoute exact path="/products/add" component={AddProduct} />
          
          <Route exact path="/products/:id" render={(props) => <SeeProduct loggedInUser={loggedInUser} {...props} />} />
          
          <PrivateRoute exact path="/products/:id/edit" component={EditProduct} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact path="/login"
            render={(props) => {
              return <Login {...props} setCurrentUser={this.setCurrentUser} />;
            }}
          />

          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={SeeAllShops} />
          <Route exact path="/shop/add" component={AddShop} />
          <Route 
            exact path="/shop/:id" 
            render={(props) => <SeeOnlyShop 
            loggedInUser={loggedInUser} {...props} />} 
          />

          <Route 
            exact path="/shop/:id/edit" 
            render={(props) => <EditShop 
            loggedInUser={loggedInUser} {...props} />}
          />

          <Route exact path="/favourites" 
            render={(props) => <WishList 
            loggedInUser={loggedInUser} {...props} />}
          />

          <Route exact path="/reviews/:id/add" 
            render={(props) => <AddReview 
            loggedInUser={loggedInUser} {...props} />}
          />

          <Route exact path="/shopping-cart" 
            render={(props) => <ShoppingCart 
            loggedInUser={loggedInUser} {...props} />}
           />

          <Route exact path="/payment" component={PaymentTemplate} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
        
      </div>
    );
  }
}

export default withRouter(App);
