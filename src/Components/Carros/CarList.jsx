import React,{Fragment,useState,useEffect} from 'react'
import './style.css'
import Aside from '../Home/Aside'
import { firestore } from '../../firebase'
import {Link} from '@reach/router'



const CarList=({user})=>{


  var [carros,setCarros]=useState(null)

  useEffect(()=>{
      async function getDatos(){
        let datos 
       
       datos=await firestore.collection("autos").get()
         
       console.log(datos)
       setCarros(datos)
      }

      getDatos()
  },[user])    



  return (

  <Fragment>

 


   
<div class="container">

<div class="listWrap">

    <ul class="list">
    
        <li>
            <span>ID</span>
            <span>Marca</span>
            <span>Modelo</span>
            <span>Precio</span>
            <span>Estado</span>
            <span></span>
        </li>
        {
            carros && carros.docs.map(el=>{
                console.log(el.data())
               return <li>
            <span >{el.data().uid}</span>
            <span>{el.data().marca}</span>
            <span>{el.data().modelo}</span>
            <span>{el.data().precio}</span>
            <span><span class="label label-warning">{el.data().tipo}</span></span>
            <span>
                <div class="btn-group btn-group-xs" role="group" aria-label="...">
                    <Link type="button" to={`/editar/${el.data().uid}`} class="btn btn-default">Edit</Link>
                    <button type="button" class="btn btn-default" >Delete</button>
                </div>
            </span>
            <span></span>
        </li>
            })
        }
      
     
    </ul>

</div>

</div>

  </Fragment>
    



  )
 


}



export default CarList