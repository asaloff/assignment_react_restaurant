import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import FeaturedImage from './FeaturedImage';
import Menu from './menu/Menu';
import Reservations from './Reservations';
import Contact from './Contact';
import ToTopButton from './ToTopButton';

class App extends Component {
  render() {
    return (
      <div className="App container" id="top">
        <header className="App-header">
          <h1 className="App-title text-center">React Restuarant</h1>
        </header>
        <Nav />
        <FeaturedImage />
        <hr />
        <Menu />
        <hr className="clear" />
        <Reservations />
        <hr className="clear" />
        <Contact />
        <ToTopButton />
      </div>
    );
  }
}

export default App;
