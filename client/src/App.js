import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Product from './components/Product';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/store' exact component={Store}/>
        <Route path='/product/:id' exact component={Product}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/cart' exact component={Cart}/>
      </Switch>
    </Router>
  );
}

export default App;
