import React,{Fragment,useState,useEffect} from 'react'
import Aside from '../Home/Aside'
import { Formik } from "formik";
import { firestore,auth,storage } from '../../firebase';
import index from './../../Alg'
const uuidv4 = require('uuid/v4');

const uid = () => {
    return auth.currentUser.uid;
  };
  var urls=[]
   

const Registro =({user})=>{

    console.log(user)
    

    const handleSubmit = values => {
       
   
         const id= uuidv4()

         const auto={
          uid:id,
          marca:values.marca,
          modelo:values.modelo,
          color:values.color,
          km:values.km,
          combustible:values.cb,
          transmision:values.tras,
          stock:values.stock,
          tipo:values.tipo,
          precio:values.precio,
          anio:values.anio,
          photoURL:{}
         }

        firestore.collection("autos").doc(id).set({
         ...auto
        })

 
        index
        .saveObject({...auto,id,objectID:id,authorId:user.uid,name:user.displayName, estado:false,
          createdAt: Math.round((new Date()).getTime() / 1000)})
        .then(() => {
          console.log('Contacts imported into Algolia');
        })
        .catch(error => {
          console.error('Error when importing contact into Algolia', error);
    
        }); 
        
       for (let i = 0; i < values.file.length; i++) {
           // const element = array[index];
           storage.ref()
           .child("user-profiles")
           .child(uid())
           .child(values.file[i].name)
           .put(values.file[i])
           .then(response => response.ref.getDownloadURL())
           .then(photoURL => {urls=[...urls,photoURL]; 
            
            firestore.collection("autos").doc(id).update({photoURL:urls})
          
            index.partialUpdateObject({photoURL:urls,objectID:id}, (err, content) => {
              if (err) throw err;
              
              console.log(content);
            });   
          
          });
        
           
        }

       
         
     } 

   



    return (


        <Fragment>

               <div className="row">
 
              
            {/*  */}
            <Formik
      initialValues={{  marca: "", modelo: "", color: "" ,km:"",cb:"",tras:"",stock:"",tipo:"",precio:"",file:null,anio:"" }}
      validate={values => {
        let errors = {};
        if (!values.marca) {
          errors.email = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        handleSubmit(values);
        setSubmitting();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
        /* and other goodies */
      }) => (
        <form className="col-9" onSubmit={handleSubmit}>
        
        <div class="row p-5">
                <div class="col-4">
                  <label>Marca</label>
                  <input   name="marca"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.marca} type="text" class="form-control" placeholder="Marca"/>
                </div>
                <div class="col-4">
                <label>Modelo</label>
                  <input  name="modelo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.modelo} type="text" class="form-control" placeholder="Modelo"/>
                </div>
                <div class="col-4">
                  <label>Color</label>
                  <input  name="color"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.color} type="text" class="form-control" placeholder="Color"/>
                </div>
                <div class="col-4">
                <label>Kilometraje</label>
                  <input  name="km"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.km} type="number" class="form-control" placeholder="Kilometraje"/>
                </div>
                <div class="col-4">
                <label>Combustible</label>
                  <input  name="cb"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cb} type="text" class="form-control" placeholder="Combustible"/>
                </div>
                <div class="col-4">
                <label for="inputState">Transmision</label>
                  <select name="tras"  onChange={handleChange}
              onBlur={handleBlur}
              value={values.tras} id="inputState" class="form-control">
                
                    <option value="manual">Manual</option>
                    <option value="automatica">Automatica</option>
                  </select>
                </div>
                <div class="col-4">
                <label>Stock</label>
                  <input    name="stock"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.stock} type="number" class="form-control" placeholder="Stock"/>
                </div>


                <div class="col-4">
                <label for="inputState">Tipo</label>
                  <select name="tipo" value={values.tipo}   onChange={handleChange}
              onBlur={handleBlur} id="inputState" class="form-control">
                
                    <option value="usado">Usado</option>
                    <option value="nuevo" >Nuevo</option>
                  </select>
                </div>

                <div class="col-4">
                <label for="exampleFormControlFile1">Fotos</label>
                <input  id="file" multiple
            name="file"
            type="file"
            onChange={event => {
              setFieldValue("file", event.currentTarget.files);
            }}  class="form-control-file" id="exampleFormControlFile1"/>
                </div>


                <div class="col-4">
                <label>Precio</label>
                  <input  name="precio"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.precio} type="number" class="form-control" placeholder="Precio"/>
                </div>
                <div class="col-4">
                <label>Año</label>
                  <input  name="anio"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.anio} type="number" class="form-control" placeholder="Año"/>
                </div>

               



              </div>
              <button class="btn btn-success" type="submit" >
                Submit
                </button>
        </form>
      )}
    </Formik>


               </div>

        </Fragment>

    )
}

export default Registro