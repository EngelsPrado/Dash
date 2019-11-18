import React,{Fragment} from 'react'
import {Link} from '@reach/router'
import {signOut} from './../../firebase'


const Header=({user})=>{

  console.log(user)

   return (

     <Fragment>
                  

          <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src={user&&user.photoURL} class="rounded-circle w-10 perfil" alt="User Image"/>
          <span class="hidden-xs">Mi cuenta</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link class="dropdown-item" to={`/profile/${user&&user.uid}`}>Mi perfil</Link>
          <Link class="dropdown-item" to="/carrito">Carrito</Link>
          <button onClick={signOut}  class="dropdown-item" >Cerrar Sesion</button>
          </div>

     </Fragment>

   )
  
  
 

}

export default Header