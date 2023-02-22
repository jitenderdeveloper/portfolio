import React from 'react'
import Heading from '../Components/Heading'
import GoodDeveloperJson from '../Secure/GoodDeveloperJson'

function GoodDeveloper() {
    return (
        <>
            <div className="container p-0 Good-developer">
                <Heading title="I know that" title1="Good Code" title2="means" title3="Good Business" />
                <div className="row m-0">
                    {
                        GoodDeveloperJson.map((val, ind) => {
                            return (
                                <div key={ind} className="col-lg-3 col-md-3 col-12">
                                    <div className="feature-card">
                                        <div className="card-img">
                                            <img src={val.image} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h3>{val.title}</h3>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default GoodDeveloper