import React from 'react'
import './style.css'
import { Link } from '@reach/router'
import NotFoundImg from './404.png'

const NotFound = () => (
    <div className="text-center">
        <img src={NotFoundImg} alt="404 NotFound" className="Error_Image" />
        
        <div className="info">
        <h1 className="text-error er">ERROR !</h1>
        <h4 className="text-nf">PAGE NOT FOUND</h4>

        <p>La pagina que esta buscando no existe o fue removida
            <br/>Volver a Home
        </p>

        <Link to="/">
            <button className="btn btn-primary btn-button">Página de Inicio</button>
        </Link>
        </div>
    </div>
)

export default NotFound