import React from 'react'
import {Link} from '@reach/router'

const Buttons = ({uid}) => {
    return (
        <div className="card-header  border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            <div className="d-flex justify-content-between">
                <a href="/profile" className="btn btn-sm btn-info mr-4">Conectar</a>
                <Link to={`/chat/${uid}`} className="btn btn-sm btn-default float-right">Mensajes</Link>
            </div>
        </div>
    )
}

export default Buttons
