import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './page/Home';
import About from './page/About';
import Photo from './page/Photo';
import Homenew from './page/Homenew';
import Subcat from './page/Subcat';
import Newapi from './page/Newapi';
import Photot from './page/Photot';
import Users from './page/Users';
import {
  Switch,
  Route,
  Router,
} from "react-router-dom";



function App() {
  return (
    <>
      <Navbar/>


      <Switch>
      <Route path="/" exact>
      <Home/>
      </Route> 

      <Route path="/about" exact>
      <About/>
      </Route> 

      <Route path="/homw2" exact>
      <Homenew/>
      </Route> 
      <Route path="/newapi" exact>
      <Newapi/>
      </Route> 


      <Route path="/photo/:id" render={props=>(
        <Photo {...props}/>
      )}>
        </Route>

        <Route path="/photot/:id" render={props=>(
        <Photot {...props}/>
      )}>
        </Route>

        <Route path="/user/:id" render={props=>(
            <Users {...props}/>)}>
        </Route>

        <Route path="/search/:id" render={props=>(
        <Subcat {...props}/>
      )}>
        </Route>
      </Switch>
    

 

    </>
  );
}

export default App;
