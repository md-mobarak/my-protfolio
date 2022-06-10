import React from 'react';
import profile from '../../asset/ripon.jpg'

const AboutMe = () => {
    return (
        <div className=''>
            <div class="hero min-h-screen bg-primary">
                <div class="hero-content flex-col lg:flex-row gap-x-24 py-24">

                    <img
                        src={profile} alt='' className='hover:translate-y-8 lg:w-[50%] rounded-full border-pink-500 ease-in-out duration-300  ' />

                    <div className='flex items-center'>
                        <div>
                            <h1 class="text-5xl hover:text-warning text-white font-bold text-center text-secondary">About Me</h1>
                            <p class="py-6 hover:text-warning text-white text-xl">Hello! I’m Mobarak Hossen. Web Developer with good experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, ReactJS, Angular JS. Strong background in management and leadership.</p>
                            <p className='text-2xl text-secondary font-bold'>NAME : <span className='text-white font-thin'> Mobarak Hossen</span></p>
                            <p className='text-2xl text-secondary font-bold'>DATE OF BIRTH : <span className='text-white font-thin'> 10-05-2000</span></p>
                            <p className='text-2xl text-secondary font-bold'>NATIONALITY : <span className='text-white font-thin'> Bangladeshi</span> </p>
                            <p className='text-2xl text-secondary font-bold'>ADDRESS : <span className='text-white font-thin'> Chittagong,Bangladesh</span> </p>
                            <p className='text-2xl text-secondary font-bold'>PHONE : <span className='text-white font-thin'> +8801825639631</span> </p>
                            <p className='text-2xl text-secondary font-bold'>G-MAIL : <span className='text-white font-thin'>MdMobarakhossen112@gmail.com</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;