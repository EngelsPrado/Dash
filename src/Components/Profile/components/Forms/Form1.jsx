import React,{useState} from 'react'
import { firestore } from '../../../../firebase'

const Form1 = (props) => {


    const [name,setName]=useState(props.userName)
    console.log(props.uid)
    const config=()=>{

  
      firestore.collection("users").doc(props.uid).update({
          displayName:name
      })
   

    }


    return (
        // < !--Form1 -- >
        <div class="pl-lg-4">
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group focused">
                        <label class="form-control-label" for="input-username">Nombre de Usuario</label>
                        <input  onChange={(e)=>setName(e.target.value)} type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" value={name} />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label class="form-control-label" for="input-email">Dirección de correo</label>
                        <input type="email" id="input-email" class="form-control form-control-alternative" placeholder="jesse@example.com" />
                    </div>
                </div>
            </div>
            <button onClick={config} type="button" class="btn btn-info">Hacer cambios</button>
        </div>                         
    )
}

export default Form1
