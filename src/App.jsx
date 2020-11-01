import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Services';
import Navbar from './Navbar';
import Footer from './Footer';
import Board from './Board/Board';
import { Switch, Route, Redirect } from "react-router-dom"; 
import Register from './Register';
import Register2 from './Register2';

const App =() => {
  return ( 
    <>
      <Navbar />
      <Switch>
        <Route exact path= "/" component={Home} />
        <Route exact path= "/about" component={About} />
        <Route exact path= "/service" component={Service} />
        <Route exact path= "/board" component={Board} />
        <Route exact path= "/contact" component={Contact} />
        <Route exact path= "/register" component={Register} />
        <Route exact path= "/register2" component={Register2} />
        <Redirect to= "/" />
      </Switch>
      <Footer />
    </>
  );
};
export default App;