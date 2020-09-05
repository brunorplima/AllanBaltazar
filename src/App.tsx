import React from 'react';
import Banner from './components/banner/Banner';
import Intro from './components/intro/Intro';
import WishList from './components/whish-list/WishList';
import ThankMural from './components/thank-mural/ThankMural';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <Intro />
      <WishList />
      <ThankMural />
    </div>
  );
}

export default App;
