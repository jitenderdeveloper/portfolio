import React from 'react'

function WorkBtn({ FilterFun, fiData }) {

    return (
        <div className="row mb-5 m-0">
            <div className="col-12 p-0">
                <div className="buton-list">
                    {
                        fiData.map((val, ind) => {
                            return (
                                <button key={ind} type='button' onClick={() => FilterFun(val)}>{val}</button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WorkBtn