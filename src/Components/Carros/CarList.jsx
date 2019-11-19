import React,{Fragment,useState,useEffect} from 'react'
import './style.css'
import Aside from '../Home/Aside'
import { firestore } from '../../firebase'
import {Link} from '@reach/router'
import Login from '../../InicioSesion/Login'
import index from '../../Alg'



const CarList=({user})=>{


  var [carros,setCarros]=useState(null)


   const borrar=(uid)=>{


     firestore.collection("autos").doc(uid).delete().then(alert("Borrado con exito"))
    
       index.deleteObject(uid, (err, content) => {
      if (err) throw err;
    
      console.log(content);
    });
      
   }

  useEffect(()=>{
      async function getDatos(){
        let datos 
       
       datos=await firestore.collection("autos").onSnapshot(el=>{

        console.log(el)
        setCarros(el)
       })
         
       
      }

      getDatos()
  },[user])    



  return (

  <Fragment>
{ user?
<div class="table-responsive">
 
 <table class="table">
   <thead>
     <tr>
       <th scope="col">#</th>
       <th scope="col">Marca</th>
       <th scope="col">Modelo</th>
       <th scope="col">Precio</th>
    
     </tr>
   </thead>
   <tbody>
     {
               carros && carros.docs.map(el=>{
                   console.log(el.data())
                  return( 
                  <tr>
               <th scope="row">{el.data().uid}</th>
               <td>{el.data().marca}</td>
               <td>{el.data().modelo}</td>
               <td>{el.data().precio}</td>
               <td><span class="label label-warning">{el.data().asunto}</span></td>
               <td>
                   <div class="btn-group btn-group-xs" role="group" aria-label="...">
                       <Link type="button" to={`/editar/${el.data().uid}`} class="btn btn-default">Edit</Link>
                       <button type="button" onClick={()=>borrar(el.data().uid)} class="btn btn-default" >Delete</button>
                   </div>
               </td>
              
           </tr>)
               })
           }
   </tbody>
 </table>
 
 </div>
 :<Login></Login>
}
   



  </Fragment>
    



  )
 


}



export default CarList