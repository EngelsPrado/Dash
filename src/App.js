import React,{Fragment,useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {Router} from '@reach/router'
import Header from './Components/Home/Header';
import Aside from './Components/Home/Aside';
import Registro from './Components/Registro';
import {UserContext} from './Providers/UserProvider'



function App() {

   const user=useContext(UserContext)

  return (
     
   <Fragment>

     <Header></Header>
     <Router>
     <Home user={user} path="/"></Home>
     <Registro  user={user} path="/register"></Registro> 
     </Router>
    
   </Fragment>

  );
}

export default App;
