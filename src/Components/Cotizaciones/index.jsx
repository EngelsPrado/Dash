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
<div class="table-responsive">
 
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Correo</th>
      <th scope="col">Nombre</th>
      <th scope="col">Telefono</th>
      <th scope="col">Asunto</th>
    </tr>
  </thead>
  <tbody>
    {
              coti && coti.docs.map(el=>{
                  console.log(el.data())
                 return( 
                 <tr>
              <th scope="row">{el.data().uid}</th>
              <td>{el.data().email}</td>
              <td>{el.data().nombre}</td>
              <td>{el.data().tel}</td>
              <td><span class="label label-warning">{el.data().asunto}</span></td>
              <td>
                  <div class="btn-group btn-group-xs" role="group" aria-label="...">
                      <Link type="button" to={`/editar/${el.data().uid}`} class="btn btn-default">Edit</Link>
                      <button type="button" class="btn btn-default" >Delete</button>
                  </div>
              </td>
             
          </tr>)
              })
          }
  </tbody>
</table>

</div>
    </Fragment>
      
  
  
    )
}

export default  Cotizaciones