import React from 'react';
import img from '../../asset/programmer4.jpg'
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import MyProject from '../MyProject/MyProject';
import AboutMe from './AboutMe';
import Card from './Card';
import Skill from './Skill';

const Home = () => {

    return (
        <div>
            <div className=' bg-neutral w-full pt-12 grid grid-cols-1 lg:grid-cols-2 h-[600px]'>

                <div className='flex justify-center items-center'>
                    <div>
                        <h1 data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-delay="200"
                            data-aos-duration="2000"
                            className={`text-2xl lg:text-6xl font-bold text-success hover:text-warning`}>hello!  <span className='text-2xl lg:text-4xl block'>I am Mobarak Hossen
                            </span>
                            <span> Jr.Web-Developer</span>
                        </h1>
                        <button onClick={() => window.location.replace("https://drive.google.com/file/d/1tZFNGNjcOkR-1QhVIfMXIQyUaZLOuAaA/view?usp=sharing")} className='ease-in-out duration-300 font-bold border-xl border-pink-300 btn btn-primary bg-gradient-to-r from-green-400 to-blue-500 mt-2'>Download Resume</button>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='rounded-lg h-[400px]' src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" />
                </div>

            </div>
            <AboutMe></AboutMe>
            <Skill></Skill>
            <Card></Card>
            <MyProject></MyProject>
            <ContactMe></ContactMe>

        </div>

    );
};

export default Home;