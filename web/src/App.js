import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import aboutUs from './pages/aboutUs';
import ContactUs from './pages/contact-us';
import tasse from './pages/tasse';
import assiette from './pages/assiette';
import vases from './pages/vases';
import autres from './pages/autres';
import Slide from './pages/slideshow'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/aboutUs' component={aboutUs} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/tasse' component={tasse} />
        <Route path='/assiette' component={assiette} />
        <Route path='/vases' component={vases} />
        <Route path='/autres' component={autres} />
        <Route path="/slideshow" component={Slide} />

      </Switch>
    </Router>
  );
}

export default App;
