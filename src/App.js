import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import Login from './components/Login';
import ProductList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import SeeProduct from './components/SeeProduct';
import Navbar from './components/NavBar';
import { getAllProducts } from './api';


class App extends React.Component {

  state = {
    products: [],
    filteredProduct: [],
    searchKeyword: ""
  }

  async componentDidMount() {
    const response = await getAllProducts();
    
    this.setState({
        products: response.data,
    });
}


  handleSearch = (keyword) => {
   this.props.history.push(`/products?search=${keyword}`);
  
  }

  render() {
    return (
      <div className="App">
      <Navbar handleSearch={this.handleSearch} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/products/add" component={AddProduct} />
        <Route exact path="/products/:id" component={SeeProduct} />
      </Switch>
        
      </div>
    );
  }
}

export default withRouter(App);
