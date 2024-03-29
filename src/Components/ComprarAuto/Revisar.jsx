import React,{Fragment,useState,useEffect} from 'react'
import { Formik } from "formik";
import { firestore,auth,storage } from '../../firebase';
import index from './../../Alg'
import {Redirect} from '@reach/router'

const Revisar =({uid,user})=>{

    console.log(user)
    
    const [carro,setCarro]=useState(null)
    const [precio,setPrecio]=useState(null)
    const [stock,setStock]=useState(null)
    const [redirect,setD]=useState(false)
    useEffect(()=>{

        async function getDatos(){


           let dato=await firestore.collection("comprar").doc(uid).get()
           console.log(dato.data())
           setCarro(dato)
           setPrecio(dato.data().precio)
           setStock(dato.data().stock) 
        } 
       getDatos()
       
      },[user])

    const editar =  e => {
       
        e.preventDefault()
       console.log("holis")
        console.log(precio)
     
        firestore.collection("comprar").doc(uid).update({
         precio,
         stock
        })

        
      setD(true)
        
     }

   



    return (


        <Fragment>
        {
          redirect? <Redirect to="/" />:null
             
        }
               <div className="row">
 
              
            {/*  */}
           
        <form className="col-12" >
        
        <div class="row p-5">
                <div class="col-4">
                  <label>Marca</label>
                  <input  disabled  name="marca"
            //   onChange={handleChange}
     
              value={carro&&carro.data().marca} type="text" class="form-control" placeholder="Marca"/>
                </div>
                <div class="col-4">
                <label>Modelo</label>
                  <input   disabled name="modelo"
            //   onChange={handleChange}
           
              value={carro&&carro.data().modelo} type="text" class="form-control" placeholder="Modelo"/>
                </div>
                <div class="col-4">
                  <label>Color</label>
                  <input  disabled  name="color"
            //   onChange={handleChange}
         
              value={carro&&carro.data().color} type="text" class="form-control" placeholder="Color"/>
                </div>
                <div class="col-4">
                <label>Kilometraje</label>
                  <input  disabled  name="km"
            //   onChange={handleChange}
           
              value={carro&&carro.data().km} type="number" class="form-control" placeholder="Kilometraje"/>
                </div>
                <div class="col-4">
                <label>Combustible</label>
                  <input  disabled name="cb"
            //   onChange={handleChange}
          
              value={carro&&carro.data().combustible} type="text" class="form-control" placeholder="Combustible"/>
                </div>
                <div class="col-4">
                <label for="inputState">Transmision</label>
                  <select  disabled name="tras"  
        
              value={carro&&carro.data().transmision} id="inputState" class="form-control">
                
                    <option value="manual">Manual</option>
                    <option value="automatica">Automatica</option>
                  </select>
                </div>
                <div class="col-4">
                <label>Stock</label>
                  <input    name="stock"
            //   onChange={handleChange}
     
            value={stock} onChange={(e)=>setStock(e.target.value)}type="number" class="form-control" placeholder="Stock"/>
                </div>


                <div class="col-4">
                <label for="inputState">Tipo</label>
                  <select  disabled name="tipo" value={carro&&carro.data().tipo}  // onChange={handleChange}
           id="inputState" class="form-control">
                
                    <option value="usado">Usado</option>
                    <option value="nuevo" >Nuevo</option>
                  </select>
                </div>


                <div class="col-4">
                <label>Precio</label>
                  <input  name="precio"
            //   onChange={handleChange}
            
              value={precio} onChange={(e)=>setPrecio(e.target.value)} type="number" class="form-control" placeholder="Precio"/>
                </div>
                <div class="col-4">
                <label>Año</label>
                  <input  disabled name="anio"
            //   onChange={handleChange}
       
              value={carro&&carro.data().anio} type="number" class="form-control" placeholder="Año"/>
                </div>

            

              </div>
              <button class="btn btn-success ml-5" onClick={editar} type="submit" >
                Submit
                </button>
        </form>
  
               </div>

        </Fragment>

    )
}

export default Revisar