import React from 'react'
import { Link } from 'react-router-dom'

function ButtonLink(props) {
    return (
        <>
            <div className="row m-0 mt-5">
                <div className="col-lg-12 col-md-12 col-12 text-center">
                    <Link to={props.url} className='button'>{props.title}</Link>
                </div>
            </div>
        </>
    )
}

export default ButtonLink