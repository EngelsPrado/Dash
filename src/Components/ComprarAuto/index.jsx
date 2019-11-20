import React,{Fragment,useEffect,useState} from 'react'
import { firestore } from '../../firebase';
import {Link} from '@reach/router'
import Login from '../../InicioSesion/Login';
import index from './../../Alg'
const Comprar=({user})=>{


    var [coti,setCoti]=useState(null)


    const publicar=(auto)=>{


     
     console.log(auto)

     
     firestore.collection("autos").doc(auto.uid).set({
        ...auto
       })


       index
       .saveObject({...auto,id:auto.uid,objectID:auto.uid,authorId:user.uid,name:user.displayName, estado:false,
         createdAt: Math.round((new Date()).getTime() / 1000)})
       .then(() => {
         console.log('Contacts imported into Algolia');
       })
       .catch(error => {
         console.error('Error when importing contact into Algolia', error);
   
       }); 
           
       

    }

    useEffect(()=>{
        async function getDatos(){
          let datos 
         
         datos=await firestore.collection("comprar").get()
           
         console.log(datos)
         setCoti(datos)
        }
  
        getDatos()
    },[])    

    return(
        
  <Fragment>{ user?
<div class="table-responsive">
 
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Marca</th>
      <th scope="col">Modelo</th>
      <th scope="col">Precio</th>
      <th scope="col">Color</th>
      <th scope="col">Km</th>
      <th scope="col">Combustible</th>
      <th scope="col">Tipo</th>
      <th scope="col">Transmision</th>
      <th scope="col">Año</th>
    </tr>
  </thead>
  <tbody>
    {
              coti && coti.docs.map(el=>{
                  console.log(el.data())
                 return( 
                 <tr>
              <th scope="row">{el.data().uid}</th>
              <td>{el.data().marca}</td>
              <td>{el.data().modelo}</td>
              <td>{el.data().precio}</td>
              <td>{el.data().color}</td>
              <td>{el.data().km}</td>
              <td>{el.data().combustible}</td>
              <td>{el.data().tipo}</td>
              <td>{el.data().transmision}</td>
              <td>{el.data().anio}</td>

           
              <td>
                  <div class="btn-group btn-group-xs" role="group" aria-label="...">
                      <Link type="button" to={`/revisar/${el.data().uid}`} class="btn btn-default">Editar</Link>
                      <button  onClick={()=>publicar(el.data())} class="btn btn-default">Publicar</button>
                  </div>
              </td>
             
          </tr>)
              })
          }
  </tbody>
</table>

</div>:<Login></Login>}
    </Fragment>
      
  
  
    )
}

export default  Comprar