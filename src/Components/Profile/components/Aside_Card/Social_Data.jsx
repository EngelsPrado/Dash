import React from 'react'

const Social_Data = (props) => {
    return (
        <div class="row">
            <div class="col">
                <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                        <span class="heading">{props.friends}</span>
                        <span class="description">Amigos</span>
                    </div>
                    <div>
                        <span class="heading">{props.photos}</span>
                        <span class="description">Fotos</span>
                    </div>
                    <div>
                        <span class="heading">{props.comments}</span>
                        <span class="description">Comentarios</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social_Data
