import React from 'react';
import img from '../../asset/programmer4.jpg'
import ContactMe from '../ContactMe/ContactMe';
import AboutMe from './AboutMe';
import Card from './Card';
import Skill from './Skill';

const Home = () => {

    return (
        <div>
            <div className=' bg-gradient-to-r w-full pt-12 from-blue-200 to-blue-400 grid grid-cols-1 lg:grid-cols-2 h-[600px]'>

                <div className='flex justify-center items-center'>
                    <div>
                        <h1 className='text-5xl font-bold text-sky-700'>hello!  <span className='text-2xl block'>I am Mobarak Hossen</span> </h1>
                        <button onClick={() => window.location.replace("https://md-mobarak.github.io/practice-13-3-22/")} className='ease-in-out duration-300 font-bold border-xl border-pink-300 btn btn-primary bg-gradient-to-r from-green-400 to-blue-500 mt-2'>Download Resume</button>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='rounded-lg' src={img} alt="" />
                </div>

            </div>
            <AboutMe></AboutMe>
            <Skill></Skill>
            <Card></Card>
            <ContactMe></ContactMe>
        </div>

    );
};

export default Home;