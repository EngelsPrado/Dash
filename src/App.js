import React,{Fragment,useContext } from 'react';
import logo from './logo.svg';

import Home from './Components/Home';
import {Router} from '@reach/router'
import Header from './Components/Home/Header';
import Aside from './Components/Home/Aside';
import Registro from './Components/Registro';
import {UserContext} from './Providers/UserProvider'
import CarList from './Components/Carros/CarList';
import Profile from './Components/Profile/Profile';
import Editar from './Components/EditarCarros';
import Cotizaciones from './Components/Cotizaciones';
import AutoDetail from './Components/Autos/AutoDetail';
import NotFound from './pages/404';
import Revisar from './Components/ComprarAuto/Revisar';
import Comprar from './Components/ComprarAuto';



function App() {

   const user=useContext(UserContext)

  return (
     
   <Fragment>

     <Header user={user}></Header>
     {/* <Aside user={user}></Aside> */}
     <Router>
     <Home user={user} path="/"></Home>
     <Registro  user={user} path="/register"></Registro> 
     <CarList  user={user} path="/autos" ></CarList>
     <Profile path="/profile/:uid" user={user} ></Profile>
     <Editar user={user} path="/editar/:uid" ></Editar>
     <Revisar user={user} path="/revisar/:uid" ></Revisar>
     <Cotizaciones user={user} path="/cotizaciones" ></Cotizaciones>
     <AutoDetail path="/autos/:uid" user={user}></AutoDetail>
     <Comprar  user={user} path="/comprar" ></Comprar>
     <NotFound  default ></NotFound>
     </Router>
    
   </Fragment>

  );
}

export default App;
