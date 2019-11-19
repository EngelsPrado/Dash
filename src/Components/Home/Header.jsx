import React,{Fragment} from 'react'
import {Link} from '@reach/router'
import {signOut} from './../../firebase'


const Header=({user})=>{

  console.log(user)

   return (

     <Fragment>
      <ul class="nav nav-tabs p-5">
  <li class="nav-item">
    <Link class="nav-link active" to="/">Home</Link>
  </li>
 {

   user? <li class="nav-item dropdown">
   <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Administrador</a>
   <div class="dropdown-menu">
     <Link class="dropdown-item" to={`/profile/${user&&user.uid}`}>Mi perfil</Link>
     <Link class="dropdown-item" to="/register">Registrar Auto</Link>
     <Link class="dropdown-item" to="/cotizaciones">Ver cotizaciones</Link>
     <Link class="dropdown-item" to="/autos">Ver autos registrados</Link>
     <div class="dropdown-divider"></div>
     <button class="dropdown-item" onClick={signOut}>Cerrar sesion</button>
   </div>
 </li>:null

 }
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
 
</ul>      



     </Fragment>

   )
  
  
 

}

export default Header