import React from 'react'
import Img from './Aside_Card/Img'
import SocialData from './Aside_Card/Social_Data'
import Content from './Aside_Card/Content'
import Buttons from './Aside_Card/Buttons'

const AsideCard = ({photo,name,uid}) => {
    return (

        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div class="card card-profile shadow">

                <Img
                    img={photo}
                />

                <Buttons uid={uid}/>

                <div class="card-body pt-0 pt-md-4">
                    <SocialData
                        friends="22"
                        photos="10"
                        comments="89"
                    />

                    <Content
                        userName={name}
                        age="22"
                        location="Nicaragua - Managua"
                        job="Estudiante y aficionado en tecnologías web"
                        education="University of Computer Science"
                        description="Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music."
                    />
                </div>


            </div>
        </div>
    )
}

export default AsideCard
