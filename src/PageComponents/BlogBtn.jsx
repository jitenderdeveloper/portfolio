import React from 'react'
import { FiFilter } from 'react-icons/fi'

function BlogBtn({ FilterFun, fiData }) {
    return (
        <>
            <div className="col-lg-4 col-md-4 col-12 mobile-mar">
                <div className="filter-section">
                    <div className="filter-Heading-section">
                        <h3><FiFilter /> Filter</h3>
                        <ul>
                            {
                                fiData.map((val, ind) => {
                                    return (
                                        <li key={ind} type='button' onClick={() => FilterFun(val)}>{val}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogBtn