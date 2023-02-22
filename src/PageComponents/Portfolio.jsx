import React, { useContext, useEffect, useState } from 'react'
import { FiBriefcase, FiEye, FiFilter } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import Heading from '../Components/Heading'
import { motion } from "framer-motion"

import { ContextData } from '../App';
import WorkBtn from './WorkBtn';
import { URL_LINK } from '../Secure/Link';

function Portfolio() {
    var data = useContext(ContextData);
    // console.log("final data -->", data)

    const [fData, setFData] = useState(useContext(ContextData))

    const allCategory = [...new Set(data.map((val) => { return (val.category) })), "All"];
    let ReverseData = allCategory.reverse()

    const [fiData, setFiData] = useState(allCategory)

    const [modal, setModal] = useState([])
    const { title, price, logo, link, image, description, category } = modal;

    useEffect(() => {
        setFData(data);
        setFiData(allCategory)
    }, [data]);



    const FilterFun = (ele) => {
        if (ele == "All") {
            setFData(data)
        } else {
            const FinalData = data.filter((val) => {
                return val.category === ele;
            });
            setFData(FinalData)
        }

    }


    const getValue = (id) => {
        fetch(`${URL_LINK}/product/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((result) => {
                // console.log("result ->", result)
                setModal(result.Product_List)
            })
    }

    return (
        <>
            <div className="container p-0 protfolio" id='work'>
                <Heading title="My Creative" title1="Work" title2="Section" />
                <WorkBtn FilterFun={FilterFun} fiData={fiData} />
                <div className="row m-0">
                    {
                        fData.slice(0, 30).reverse().map((val, ind) => {
                            // console.log("finaldata show ->", val)
                            const { _id, title, description, image, category } = val;
                            return (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }} key={ind} className="col-lg-3 col-md-3 col-12 protfolio-margin">
                                    <div className="feature-card">
                                        <div className="card-img work-section">
                                            <img src={image} alt="" />
                                            <h5 className='category'>{category}</h5>
                                            <button type='button' className='viewPage' onClick={() => getValue(_id)} data-bs-toggle="modal" data-bs-target="#staticBackdrop"><FiEye /> More </button>
                                        </div>
                                        <div className="card-content protfolio-content">
                                            <h3>{title}</h3>
                                            {/* <p>{description}</p> */}
                                            <p>{description.slice(0, 109)}...</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            </div>
                            <div className="modal-body">
                                <div className="blog-content-section">
                                    <div className="profile-sectio">
                                        <img src={logo} alt="" />
                                        <div className="heading-profile">
                                            <h3>{title}</h3>
                                            <h5 className='cate'> <FiFilter /> {category}</h5>
                                            <h5><FiBriefcase /> {price}</h5>
                                        </div>
                                    </div>
                                    <div className="company-image">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="main-blog-content modal-para">
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                <button type="button" className='button' data-bs-dismiss="modal">Close</button>
                                <Link to={link} type="button" target="_blank" className='button'>Live Preview</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio