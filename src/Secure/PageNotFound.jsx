import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-l2">
                        <div className="found">
                            <h2>Page not Found..</h2>
                            <Link to="/" type='button' className='btn btn-dark'>Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound