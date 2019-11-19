import React,{Fragment,useState,useEffect} from 'react'
import { firestore } from '../../firebase'
import AutoList from './AutoList'
import Carousel from 'react-bootstrap/Carousel'



const AutoDetail=({uid,user})=>{


   const [auto,setAuto]=useState(null)


    useEffect(()=>{


      async function getAuto(){


         let dato= await firestore.collection("autos").doc(uid).get()
         console.log(dato.data())
         setAuto(dato.data())

      }
      getAuto()

    },[])

  return (


    <Fragment>
                 
            <div class="container">
              <div class="row">
                <h1 class="col-md-12">
                    {auto && auto.marca}
                </h1>
              </div>
            </div>
            {/* init */}<Carousel>
                          
                           {
                             auto && auto.photoURL.map(foto=>{
                               return <Carousel.Item> <img
                               className="d-block w-100"
                               src={foto}
                               alt="First slide"
                              
                             />
                             </Carousel.Item>
                             })
                           }
                            
                          
                        </Carousel>
            {/* end  */}
            <div class="container">
              <div class="row mb-2">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                            <div class="col-md-12">
                                <h4 class="text-danger">Caracteristicas</h4>
                                <hr/>
                            </div>
                          </div>
                                <div class="row mb-4">
                                    <div class="col-md-3">
                                        <h3 class="text-secondary">Combustible</h3>
                                        <h4>{auto&&auto.combustible}</h4>
                                    </div>
                                    <div class="col-md-3">
                                        <h3 class="text-secondary">KMS Recorridos</h3>
                                        <h4>{auto&&auto.km}</h4>
                                    </div>
                                    <div class="col-md-3">
                                        <h3 class="text-secondary">Tipo</h3>
                                         <h4>{auto&&auto.tipo}</h4>
                                    </div>
                                    <div class="col-md-3">
                                        <h3 class="text-secondary">TRANSMISSION</h3>
                                            <h4> {auto&&auto.transmision}</h4>
                                    </div>
                                  </div>
                                <div class="row mb-4">
                                    <div class="col-md-3">
                                        <h3 class="text-secondary">Año</h3>
                                        <h4>{auto&&auto.anio}</h4>
                                    </div>
                                    <div class="col-md-3">
                                        <h3 class="text-secondary">Stock</h3>
                                        <h4>{auto&&auto.stock}</h4>
                                    </div>
                                    <div class="col-md-3">
                                        <h3 class="text-secondary">COLOR</h3>
                                        <h4>{auto&&auto.color}</h4>
                                    </div>
                                    <div class="col-md-3">
                                        <h3 class="text-secondary">Modelo</h3>
                                        <h4>{auto&&auto.modelo}</h4>
                                    </div>
                                  </div>
                                <div class="row mb-4">
                                    <div class="col-md-12">
                                        <h3 class="text-secondary">Marca</h3>
                                        <h4>{auto&&auto.marca}</h4>
                                    </div>
                                  </div>
                        </div>
                    </div>
                    </div>
                  
                </div>
              
            </div>
            



     
 
    </Fragment>


  )


}

export default AutoDetail