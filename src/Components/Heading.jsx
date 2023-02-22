import React from 'react'

function Heading(props) {
    return (
        <>
            <div className="row m-0">
                <div className="col-12 p-0">
                    <div className="main-heading sec-heading">
                        <h2>{props.title}<span className='span'> {props.title1} </span> {props.title2} <span className='span'> {props.title3} </span></h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading