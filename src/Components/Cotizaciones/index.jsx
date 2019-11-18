import React,{Fragment,useEffect,useState} from 'react'
import { firestore } from '../../firebase';
import {Link} from '@reach/router'

const Cotizaciones=()=>{


    var [coti,setCoti]=useState(null)

    useEffect(()=>{
        async function getDatos(){
          let datos 
         
         datos=await firestore.collection("cotizaciones").get()
           
         console.log(datos)
         setCoti(datos)
        }
  
        getDatos()
    },[])    

    return(
        
  <Fragment>

 


   
  <div class="container">
  
  <div class="listWrap">
  
      <ul class="list">
      
          <li>
              <span>ID</span>
              <span>Email</span>
              <span>Nombre</span>
              <span>Telefono</span>
              <span>Asunto</span>
              <span></span>
          </li>
          {
              coti && coti.docs.map(el=>{
                  console.log(el.data())
                 return <li>
              <span >{el.data().uid}</span>
              <span>{el.data().email}</span>
              <span>{el.data().nombre}</span>
              <span>{el.data().tel}</span>
              <span><span class="label label-warning">{el.data().asunto}</span></span>
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

export default  Cotizaciones