import React, { useEffect, useState } from 'react'
import Heading from '../Components/Heading'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { URL_LINK } from '../Secure/Link';

function Review() {

    const [data, setData] = useState([]);

    const fetData = () => {
        fetch(`${URL_LINK}/testimonial`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((result) => {
                setData(result.Testimonial_list
                )
            })
    }

    useEffect(() => {
        fetData()
    }, [])
    return (
        <>
            <div className="container p-0 Good-developer review" id='review'>
                <Heading title1="Reviews" />
                <div className="row m-0">
                    <Swiper spaceBetween={50}
                        slidesPerView={3}
                        autoplay={true}
                        breakpoints={{
                            700: {
                                spaceBetween: 0,
                                slidesPerView: 3,
                            },
                            500: {
                                spaceBetween: 100,
                                slidesPerView: 2,
                            },
                            411: {
                                spaceBetween: 100,
                                slidesPerView: 2,
                            },
                            300: {
                                spaceBetween: 0,
                                slidesPerView: 1,
                            },
                        }} className="row m-0">
                        {
                            data.reverse().slice(0,9).map((val, ind) => {
                                const { name, email, description, city } = val;
                                return (
                                    <SwiperSlide key={ind} className="col-lg-3 col-md-3 col-12">
                                        <div className="feature-card review-section">
                                            <div className="review-content">
                                                <p>{description}</p>
                                                <div className="profile">
                                                    <img src="assets/image/profile.jfif" alt="" />
                                                    <div className="profile-content">
                                                        <h4>{name}</h4>
                                                        <h5>{email}</h5>
                                                        <h5>{city}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Review