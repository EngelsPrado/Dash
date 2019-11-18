import React,{Fragment,useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {Router} from '@reach/router'
import Header from './Components/Home/Header';
import Aside from './Components/Home/Aside';
import Registro from './Components/Registro';
import {UserContext} from './Providers/UserProvider'
import CarList from './Components/Carros/CarList';
import Profile from './Components/Profile/Profile';
import Editar from './Components/EditarCarros';



function App() {

   const user=useContext(UserContext)

  return (
     
   <Fragment>

     <Header user={user}></Header>
     <Aside user={user}></Aside>
     <Router>
     <Home user={user} path="/"></Home>
     <Registro  user={user} path="/register"></Registro> 
     <CarList  user={user} path="/autos" ></CarList>
     <Profile path="/profile/:uid"  ></Profile>
     <Editar user={user} path="/editar/:uid" ></Editar>
     </Router>
    
   </Fragment>

  );
}

export default App;
