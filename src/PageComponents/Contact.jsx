import React, { useState } from 'react'
import Heading from '../Components/Heading'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL_LINK } from '../Secure/Link';
import { useNavigate } from 'react-router-dom';

function Contact() {

    const nevigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const [store, setStore] = useState([]);
    // console.log(store)

    const submitHandler = () => {

        if (!name && !email && !comment) {
            toast.error('All Fields are Required...', {
                position: "top-right",
                autoClose: "1000",
                limit: "1",
                theme: "colored",
            })
            // console.log('worng')
        } else {
            const data = { name, email, comment };
            console.log("fetching data", data)
            setStore([...store, data])

            fetch(`${URL_LINK}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepted': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => res.json())
                .then((result) => {
                    nevigate('/Blogger')
                })
            toast.success(`${name} Thanks for contact... `, {
                position: "top-right",
                autoClose: "1000",
                limit: "1",
                theme: "colored",
            })
        }
    }


    return (
        <>
            <div className="container p-0 Good-developer" id='contact'>
                <Heading title="Chat with" title1="Me" />
                <div className="row m-0">
                    <div className="col-12 p-0 contact-w mx-auto">
                        <div className="contact-form">
                            <form action="">
                                <div className="input-form">
                                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter you name' />
                                </div>
                                <div className="input-form">
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter you E-mail' />
                                </div>
                                <div className="input-form">
                                    <textarea cols="20" rows="10" onChange={(e) => setComment(e.target.value)} placeholder='Message...'></textarea>
                                </div>
                                <div className="input-form">
                                    <button type='button' onClick={submitHandler} >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default Contact