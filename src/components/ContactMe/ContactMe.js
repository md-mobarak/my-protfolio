import React from 'react';

const ContactMe = () => {
    return (
        <div className='py-12 bg-primary'>
            <h1 className='text-success text-4xl font-bold text-center pb-12'>CONTACT ME</h1>
            <form action="">
                <div className='lg:flex justify-evenly'>
                    <input type="text" placeholder="Type Your Name" class="input input-bordered bg-neutral input-secondary w-full max-w-xs" />
                    <input type="email" placeholder="Type Email" class="input input-bordered bg-neutral input-secondary w-full max-w-xs" />
                </div>
                <textarea className='input input-bordered bg-neutral input-secondary w-full max-w-xs' name="" id="" cols="50" rows="10"></textarea>
            </form>
        </div>
    );
};

export default ContactMe;