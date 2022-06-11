import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fv8o44a', 'template_0rfgi78', form.current, 'DES6bkYZNvY2Owpzl')
            .then((result) => {
                console.log(result.text);
                toast.success("Wow! successfully send Your Message!")
            }, (error) => {
                console.log(error.text);
                toast.error("Try This again Letter!")
            });
        e.target.reset()
    };


    return (
        <div data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-duration="1000"
            className='py-12 bg-primary '>
            <h1 className='text-success text-4xl font-bold text-center pb-4 lg:pb-12'>CONTACT ME</h1>
            <form className='border border-secondary border-rounded py-6'
                ref={form} onSubmit={sendEmail}
            >
                <div className='text-center lg:flex justify-evenly'>
                    <input type="text" name="user_name" placeholder="*Type Your Name" class="input input-bordered mb-12 lg:mb-0 bg-neutral input-secondary text-white w-full max-w-xs" />
                    <input type="email" name="user_email" placeholder="*Type Email" class="input input-bordered bg-neutral input-secondary w-full text-white max-w-xs" />
                </div>
                <div className='flex items-center justify-center mt-6 w-full'>
                    <textarea name="message" placeholder='*Type Message' className=' w-[50%] bg-neutral rounded-lg text-white' id="" cols="70" rows="10"></textarea>
                </div>
                <div className='flex items-center justify-center mt-6'>
                    <button type='submit' className='bg-gradient-to-r from-green-400 to-blue-500 btn btn-ghost normal-case text-2xl text-yellow-300 '>SEND MESSAGE</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default ContactMe;