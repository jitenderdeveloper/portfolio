import React, { useEffect, useState } from 'react'
import Heading from '../Components/Heading'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { URL_LINK } from '../Secure/Link';
import { Link } from 'react-router-dom';

function Clients() {

    const [data, setData] = useState([]);

    const fetData = () => {
        fetch(`${URL_LINK}/client`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((result) => {
                console.log(result)
                setData(result.Client_list)
            })
    }

    useEffect(() => {
        fetData()
    }, [])
    return (
        <>
            <div className="container p-0 Good-developer clients" id='client'>
                <Heading title1="Clients" />
                <div className="row m-0">
                    <Swiper spaceBetween={50}
                        slidesPerView={3}
                        autoplay={true}
                        breakpoints={{
                            700: {
                                spaceBetween: 0,
                                slidesPerView: 6,
                            },
                            500: {
                                spaceBetween: 100,
                                slidesPerView: 5,
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
                            data.reverse().slice(0, 9).map((val, ind) => {
                                const { logo, title } = val;
                                return (
                                    <SwiperSlide key={ind} className="col-lg-2 col-md-2 col-12">
                                        <div className="feature-card review-section">
                                            <Link to="" title={title}>
                                                <div className="review-content client-image">
                                                    <img src={logo} alt="" />
                                                </div>
                                            </Link>
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

export default Clients