import React from 'react'
import Form1 from './Form1'
//import Form2 from './Form2'
import Form3 from './Form3'

const Form = (props) => {
    return (
        <form>
            <h6 class="heading-small text-muted mb-4">Informacion de Usuario</h6>
            <Form1
                userName={props.perfil.displayName}
                {...props.perfil}
            />
            <hr class="my-4" />

            <hr class="my-4" />

            <h6 class="heading-small text-muted mb-4">Sobre mi</h6>
            <Form3
                content = "A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
            />
        </form>
    )
}

export default Form
