import React from 'react'

const Content = (props) => {
    return (
        <div className="text-center-direction">
            <h3>
                {props.userName}<span className="font-weight-light">, {props.age}</span>
            </h3>
            <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2"></i>{props.location}</div>


            <div className="h5 mt-4"><i className="ni business_briefcase-24 mr-2"></i>{props.job}</div>
            <div><i className="ni education_hat mr-2"></i>{props.education}</div>
            <hr className="my-4" />
            <p>{props.description}</p>
            <a href="/profile">Mostrar mas</a>
        </div>
    )
}

export default Content
