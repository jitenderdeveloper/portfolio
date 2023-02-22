import React, { useEffect, useState } from 'react'
import { FiCalendar, FiFilter, FiArrowLeft } from "react-icons/fi";
import ThemeLight from '../Components/ThemeLight';
import { URL_LINK } from '../Secure/Link';
import { Link, useNavigate } from "react-router-dom";
import Loader from '../Secure/Loader';
import { motion } from "framer-motion"
import BlogBtn from '../PageComponents/BlogBtn';

function Blogger() {
    const [loading, setLoading] = useState(true)

    const history = useNavigate()
    const [data, setData] = useState([]);

    const [fData, setFData] = useState(data)
    // console.log("fData ->", fData)

    const allCategory = [...new Set(data.map((val) => { return (val.category) })), "All"];
    let ReverseData = allCategory.reverse()

    const [fiData, setFiData] = useState(allCategory)

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

    useEffect(() => {
        setFData(data);
        setFiData(allCategory)
    }, [data]);









    const historyFun = () => {
        history('/');
    }

    const getData = () => {
        fetch(`${URL_LINK}/blog`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((result) => {
                setData(result.Blog_List)
            })
    }

    useEffect(() => {
        getData()
    }, [])


    useEffect(() => {
        const spin = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => {
            clearTimeout(spin);
        };
    }, [])


    return (
        <>
            {
                loading ? <Loader /> :
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="container mt-4 mb-4">
                        <div className="row mb-4 sticky-top">
                            <div className="col-12">
                                <div className="headinger">
                                    <a type='button' onClick={historyFun} className='back-btn'> <FiArrowLeft /></a>
                                    <ThemeLight />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <BlogBtn FilterFun={FilterFun} fiData={fiData} />
                            <div className="col-lg-8 col-md-8 col-12">
                                <div className="blog-page">
                                    <div className="row">
                                        {
                                            fData.map((val, ind) => {
                                                const { _id, title, category, createdAt, desc_list } = val;
                                                return (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }} key={ind} className="col-12 blog-se">
                                                        <Link to={`/BlogPage/${_id}`}>
                                                            <div className="blog-content-section">
                                                                <div className="profile-sectio">
                                                                    <img src="assets/image/profile.jfif" alt="" />
                                                                    <div className="heading-profile">
                                                                        <h3>{title.slice(0, 65)}...</h3>
                                                                        <h5 className='cate'> <FiFilter /> {category}</h5>
                                                                        <h5><FiCalendar /> {createdAt.slice(0, 10)}</h5>
                                                                    </div>
                                                                </div>
                                                                <div className="main-blog-content">
                                                                    <p>{desc_list}...</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </motion.div>
                                                )
                                            })

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
            }

        </>
    )
}

export default Blogger