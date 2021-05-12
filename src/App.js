import React from 'react';
import './styles/App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import ProductList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import SeeProduct from './components/SeeProduct';

class App extends React.Component {

  state = {
    name: ''
  }

  render() {
    return (
      <div className="App">


      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/products/:id" component={SeeProduct} />
        <Route exact path="/products/add" component={AddProduct} />
      </Switch>
        
      </div>
    );
  }
}

export default App;
