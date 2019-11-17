import React,{Fragment,useContext} from 'react'
import './style.css'
import Login from '../../InicioSesion/Login'
import {UserContext} from './../../Providers/UserProvider'
import {Link} from '@reach/router'
import Aside from './Aside'
const Home=({user})=>{

  

  return (

    <Fragment>

      {

          user ?<Fragment>
            
          <Aside></Aside>
            
            
        </Fragment>:<Login></Login>


      } 
 

    </Fragment>
  

  )
 
 

}

export default Home