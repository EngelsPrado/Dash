import React, {Fragment,useEffect,useState} from 'react'
import './style.css'
import { firestore } from '../../firebase'
import AutoList from './AutoList'
import {Breadcrumb, CurrentRefinements , RangeInput,RefinementList,Panel,InstantSearch, SearchBox, Hits, HitsPerPage,ClearRefinements, Pagination,Menu } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch('QHNRM6MI8E', 'e6a2cc55534d6411d953249c82282be6');

const Auto= ({user})=>{

    
	const [autos,setAutos]=useState(null)

 /*	useEffect(()=>{

          
     async function getDatos(){
         let auto
  
        firestore.collection("autos").onSnapshot(car=>{
			setAutos(car.docs)
		})

	 }

      getDatos()
	},[])
  */
 const  Hit=(props)=>{
    console.log(props.hit)
    return (
      
        
          <AutoList dato={props.hit} user={user} ></AutoList>
    
      
    );
   }



  return (

   <Fragment>
	
    <div className="row">

      <div className="col-12"> 
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

      </div>
     

    </div>
 
    
        
  
   </Fragment>
  

  )

}

export default Auto