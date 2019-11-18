import React,{Fragment,useContext} from 'react'

import Login from '../../InicioSesion/Login'
import {UserContext} from './../../Providers/UserProvider'
import {Link} from '@reach/router'
import Aside from './Aside'
import Auto from '../Autos'
const Home=({user})=>{

  console.log(user)

  return (

    <Fragment>

      {

          user ?<Fragment>
            
            <Auto user={user}></Auto>
            
          </Fragment>:<Login></Login>


      } 
 

    </Fragment>
  

  )
 
 

}

export default Home