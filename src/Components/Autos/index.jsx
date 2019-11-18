import React, {Fragment,useEffect,useState} from 'react'
import './style.css'
import { firestore } from './../../firebase'
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
         <SearchBox />
         <ClearRefinements />
         <CurrentRefinements />
         <RangeInput attribute="precio" />
         <HitsPerPage
        defaultRefinement={4}
        items={[{ value: 2 }, { value: 4 }, { value: 6 }, { value: 8 }]}
      />
       <RefinementList attribute="marca"/>
       <RefinementList attribute="tipo"/>
       <RefinementList attribute="anio"/>
       <RefinementList attribute="transmision"/>
         <Hits   hitComponent={Hit}/>
          
        <Pagination></Pagination>
         
    </InstantSearch>

      </div>
     

    </div>
 
    
        
  
   </Fragment>
  

  )

}

export default Auto