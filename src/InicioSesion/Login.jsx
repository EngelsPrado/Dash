import React,{Fragment,useState} from 'react'
import './style.css'
import { signInWithGoogle,signInWithFacebook } from './../firebase';
import { auth } from 'firebase';

const Login= ()=>{

    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')

    const sesion=(e)=>{

      e.preventDefault()
      
        auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    }

     return (
      <Fragment>

<div class="container m-auto">
    <div class="row">
        <div class="col-md-3 col-md-offset-4 caja-logo">
            <div class="account-box">
                <div class="logo ">
                    <img src="/img/logo.png" alt="" className="logo_imagen"/>
                </div>
                <form class="form-signin" >
                <div class="form-group">
                    <input  value={email} onChange={(e)=>setEmail(e.target.value)}  type="text" class="form-control" placeholder="Correo" required autofocus />
                </div>
                <div class="form-group">
                    <input value={pass} onChange={(e)=>setPass(e.target.value)}  type="password" class="form-control" placeholder="Contraseña" required />
                </div>
                <label class="checkbox centrar">
                    <input type="checkbox" value="remember-me" />
                    Mantenme conectado
                </label>
                <button class="btn-light action-button btn inicio" onClick={sesion} type="submit">
                    Iniciar Sesion</button>
                </form>
                <a class="forgotLnk " href="http://www.jquery2dotnet.com">No puedo acceder a mi cuenta</a>
                <div class="or-box">
                    <span class="or">o</span>
                    <div class="row">
                        <div class="col-md-6 row-block">
                            <button   onClick={signInWithFacebook} class="btn btn-facebook btn-block">Facebook</button>
                        </div>
                        <div class="col-md-6 row-block">
                            <button onClick={signInWithGoogle} class="btn btn-google btn-block">Google</button>
                        </div>
                    </div>
                </div>
                <div class="or-box row-block">
                    <div class="row">
                        <div class="col-md-12 row-block">
                            <a href="http://www.jquery2dotnet.com" class="btn-light action-button btn crear">Crear nueva cuenta</a>
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
export default Login
