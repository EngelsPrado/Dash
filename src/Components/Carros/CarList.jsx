import React,{Fragment,useState,useEffect} from 'react'
import './style.css'
import Aside from '../Home/Aside'
import { firestore } from '../../firebase'
import {Link} from '@reach/router'
import Login from '../../InicioSesion/Login'
import index from '../../Alg'

import {Breadcrumb, CurrentRefinements , RangeInput,RefinementList,Panel,InstantSearch, SearchBox, Hits, HitsPerPage,ClearRefinements, Pagination,Menu } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch('QHNRM6MI8E', 'e6a2cc55534d6411d953249c82282be6');


const CarList=({user})=>{


  var [carros,setCarros]=useState(null)

  const  Hit=(props)=>{
    console.log(props.hit)
    return (
      
        
      <Fragment>
        <li scope="row"><span> ID:</span>{props.hit.uid}</li>
        <li><span> Marca:</span>{props.hit.marca}</li>
        <li><span> Modelo:</span>{props.hit.modelo}</li>
        <li><span> Precio:</span>{props.hit.precio}</li>
        <li><span> Stock:</span>{props.hit.stock}</li>
        <li><span> Año:</span>{props.hit.anio}</li>
        <li>
            <div class="btn-group btn-group-xs" role="group" aria-label="...">
                <Link type="button" to={`/editar/${props.hit.uid}`} class="btn btn-default">Editar</Link>
                <Link type="button" to={`/autos/${props.hit.uid}`} class="btn btn-default">Ver auto</Link>
                <button type="button" onClick={()=>borrar(props.hit.uid)} class="btn btn-default" >Delete</button>
            </div>
        </li>
        
   
        </Fragment>

                    
      
    );
   }

   const borrar=(uid)=>{

 
 
     firestore.collection("autos").doc(uid).delete().then(alert("Borrado con exito"))
    
       index.deleteObject(uid, (err, content) => {
      if (err) throw err;
    
      console.log(content);
    });

 

      
   }

/*  useEffect(()=>{
      async function getDatos(){
        let datos 
       
       datos=await firestore.collection("autos").onSnapshot(el=>{

        console.log(el)
        setCarros(el)
       })
         
       
      }

      getDatos()
  },[user])    

*/

  return (

  <Fragment>
{ user?<div className="ml-5">
  
   
<InstantSearch  searchClient={searchClient} indexName="rent">
        <div className="row ml-2">
         <SearchBox />
          <div className="col-2">
          <ClearRefinements />
        
          </div>
          
        </div>
    
        
         <CurrentRefinements />
        
      <div className="row mt-2 ">
       <div className="b col-sm-4 col-md-2 col-xl-2 col-md-2  ">
        <h3>Marcas</h3> 
        <RefinementList limit={2}
        showMoreLimit={5}
        showMore={true} attribute="marca"/>
       </div>

       <div className="b col-sm-4 col-md-2 col-xl-2 col-md-2 "> 
        <h3>Tipo</h3> 
        <RefinementList limit={2}
        showMoreLimit={5}
        showMore={true} attribute="tipo"/>
       </div>
       <div className= "b col-sm-4 col-md-2 col-xl-2 col-md-2 " >
       <h3>Año</h3> 
       <RefinementList limit={2}
        showMoreLimit={5}
        showMore={true} attribute="anio"/>
       </div>
       <div  className="b col-sm-4 col-md-2 col-xl-2 col-md-2 ">
       <h3>Transmision</h3> 
       <RefinementList attribute="transmision"/>
       </div>

        <div className="b col-sm-4 col-md-2 col-xl-2 col-md-2 ">
        <h3>Precio</h3>
          <RangeInput attribute="precio" />
        </div>
        <div className=" col-sm-5 col-md-4 col-xl-3 col-md-3 ">
            <h3>Resultados por pagina</h3>
            <HitsPerPage
        defaultRefinement={4}
        items={[{ value: 2 }, { value: 4 }, { value: 6 }, { value: 8 }]}
         />
          </div>

      </div>

    
         <Hits  hitComponent={Hit}/>
            
         <Pagination></Pagination>
    </InstantSearch>
  
  </div>:<Login></Login>}


  </Fragment>
    



  )
 


}



export default CarList