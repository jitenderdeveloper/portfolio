import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonLink from '../Components/ButtonLink'
import Heading from '../Components/Heading'
import { URL_LINK } from '../Secure/Link'

function Blogs() {

    const [data, setData] = useState([])
    // console.log(data)
    const getData = () => {
        fetch(`${URL_LINK}/blog`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application'
            }
        }).then((res) => res.json())
            .then((result) => {
                setData(result.Blog_List)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="container p-0 Good-developer" id='blog'>
                <Heading title="Latest" title1="Blogs" title2="&" title3="Source Code" />
                <div className="row m-0">
                    {
                        data.reverse().slice(0, 4).map((val, ind) => {
                            const { _id, title, desc_list, category, image, updatedAt } = val;
                            return (
                                <div key={ind} className="col-lg-3 col-md-3 col-12">
                                    <Link to={`/BlogPage/${_id}`}>
                                        <div className="feature-card blog-card">
                                            <div className="card-img">
                                                <img src={image} alt="" />
                                            </div>
                                            <div className="card-content blog">
                                                <h3>{title.slice(0, 44)}...</h3>
                                                <p>{desc_list.slice(0, 180)}...</p>
                                            </div>
                                            <div className="card-date">
                                                <h5>{updatedAt.slice(0, 10)}</h5>
                                                <h5>{category}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <ButtonLink url="/Blogger" title="See More" />
            </div>
        </>
    )
}

export default Blogs