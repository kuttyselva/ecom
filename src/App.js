import React from 'react';
import HomePage from './page/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Shop from './page/shop/shop.component';
import Header from './components/header/header.component';



function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
