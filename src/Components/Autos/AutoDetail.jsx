import React,{Fragment,useState,useEffect} from 'react'
import { firestore } from './../../firebase'
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
                <div class="col-md-12">
                    {auto && auto.marca}
                </div>
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
                <div class="col-md-8">
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
                                        <h5 class="text-secondary">Combustible</h5>
                                        <h6>{auto&&auto.combustible}</h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h5 class="text-secondary">KMS Recorridos</h5>
                                        <h6>{auto&&auto.km}</h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h5 class="text-secondary">Tipo</h5>
                                         <h6>{auto&&auto.tipo}</h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h5 class="text-secondary">TRANSMISSION</h5>
                                            <h6> {auto&&auto.transmision}</h6>
                                    </div>
                                  </div>
                                <div class="row mb-4">
                                    <div class="col-md-3">
                                        <h5 class="text-secondary">Año</h5>
                                        <h6>{auto&&auto.anio}</h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h5 class="text-secondary">Stock</h5>
                                        <h6>{auto&&auto.stock}</h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h5 class="text-secondary">COLOR</h5>
                                        <h6>{auto&&auto.color}</h6>
                                    </div>
                                    <div class="col-md-3">
                                        <h5 class="text-secondary">Modelo</h5>
                                        <h6>{auto&&auto.modelo}</h6>
                                    </div>
                                  </div>
                                <div class="row mb-4">
                                    <div class="col-md-12">
                                        <h5 class="text-secondary">Marca</h5>
                                        <h6>{auto&&auto.marca}</h6>
                                    </div>
                                  </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-3">
                      {/* falta */}
                      {/* <FormCotizar uid={uid}  ></FormCotizar> */}
                    </div>
                </div>
              
            </div>
            



     
 
    </Fragment>


  )


}

export default AutoDetail