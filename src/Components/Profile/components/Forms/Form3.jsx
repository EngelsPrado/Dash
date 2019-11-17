import React from 'react'

const Form3 = (props) => {
    return (
        <div class="pl-lg-4">
            <div class="form-group focused">
                <label>Sobre mi</label>
                <textarea rows="4" class="form-control form-control-alternative" placeholder="Pocas palabras sobre mi ...">{props.content}</textarea>
            </div>
        </div>
    )
}

export default Form3
