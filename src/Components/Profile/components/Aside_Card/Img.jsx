import React from 'react'

const Img = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                    <a href="/profile">
                        <img src={props.img} className="rounded-circle" alt={props.img}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Img
