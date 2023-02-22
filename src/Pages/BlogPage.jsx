import React, { useEffect, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import ThemeLight from '../Components/ThemeLight'
import { URL_LINK } from '../Secure/Link'
import Loader from '../Secure/Loader'
import { motion } from "framer-motion"

function BlogPage() {

  const [loading, setLoading] = useState(true)

  const params = useParams()
  const history = useNavigate()

  const [data, setData] = useState([])
  const { title, description, image, updatedAt, category } = data;


  const historyFun = () => {
    history('/Blogger');
  }

  const fetData = () => {
    fetch(`${URL_LINK}/blog/${params.id}`, {
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
    fetData()
  }, [])

  useEffect(() => {
    const spin = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => {
      clearTimeout(spin);
    };
  }, [])

  const body = data.description;


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
              <div className="col-12">
                <div className="blog-page">
                  <h2>{title}</h2>
                  <h5>{category}</h5>
                  <h5>{updatedAt}</h5>
                  <img className='blogpage-img' src={image} alt="" />
                  {/* <p>{description}</p> */}
                  <div dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              </div>
            </div>
          </motion.div>
      }

    </>
  )
}

export default BlogPage