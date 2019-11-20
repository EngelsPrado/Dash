import React,{Fragment,useState,useEffect} from 'react'
import { firestore } from '../../firebase'
import {Link} from '@reach/router'



const AutoList=({dato,user})=>{

     console.log(dato)
  


    return (                     

    
        
                <div class="text-center ml-5">
                    
                    
                    
                    <div class="col-12 box border ">
                  
                        <div class="box-carimage">
                            <img src={dato.photoURL[0]} alt=""/>
                        </div>
                        <div class="box-cartitle">
                        <h4> {dato.marca}</h4>
                        </div>
                        <div class="box-carprice">
                        <h4><i class="fas fa-dollar-sign"></i>{dato.precio}</h4>
                        </div>
                        <div class="box-date pb-3">
                            <small>Año: {dato.anio} </small>
                            
                        </div>
                        <Link to={`/autos/${dato.uid}`} class="btn btn-outline-danger"> Ver mas detalles</Link>
                    </div>
                </div>
            
                             
                      
                        
                    

        
        
    )
  


}


export default AutoList