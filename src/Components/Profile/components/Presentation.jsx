import React from 'react'

const Presentation = (props) => {
    return (
        //  Presentacion Say Hello Profile
        <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" >
            <span class="mask bg-gradient-default opacity-8"></span>

            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Hola {props.fullName}</h1>
                        <p class="text-white mt-0 mb-5">Esta es su página de perfil de usuario. Tu puedes ver el progreso que haces trabajando y administrando sus proyectos o tareas asignados.</p>
                        <a href="#!" class="btn btn-info">Editar perfil</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation
