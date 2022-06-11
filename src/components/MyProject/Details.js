import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

const Details = ({ detail }) => {
    const navigate = useNavigate()
    const { screenShot1, screenShot2, screenShot3, screenShot4 } = detail
    return (
        <div className='bg-neutral'>
            <div className='bg-neutral grid grid-cols-1 lg:grid-cols-2 '>
                <div>
                    <div class="carousel w-full ">
                        <div id="item1" class="carousel-item w-full">
                            <img src={screenShot1} alt='' class="rounded-lg w-full" />
                        </div>
                        <div id="item2" class="carousel-item w-full">
                            <img src={screenShot2} alt='' class="rounded-lg w-full" />
                        </div>
                        <div id="item3" class="carousel-item w-full">
                            <img src={screenShot3} alt='' class="rounded-lg w-full" />
                        </div>
                        <div id="item4" class="carousel-item w-full">
                            <img src={screenShot4} alt='' class="rounded-lg w-full" />
                        </div>
                    </div>
                    <div class="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" class="btn btn-xs">1</a>
                        <a href="#item2" class="btn btn-xs">2</a>
                        <a href="#item3" class="btn btn-xs">3</a>
                        <a href="#item4" class="btn btn-xs">4</a>
                    </div>
                </div>
                <div className='ml-12'>
                    <h1 className='text-warning py-4  text-center lg:text-4xl lg:font-bold'>Site Details</h1>
                    <div className='flex justify-evenly'>
                        <button className='btn btn-error text-white'>Go To Site</button>
                        <button className='btn btn-error mx-6 text-white'>Clint-Site</button>
                        <button className='btn btn-error text-white'>Server-Site</button>
                    </div>
                </div>

            </div>
            <div className='text-center'>  <button onClick={() => navigate('/')} className='btn btn-warning'>Back</button></div>
        </div>
    );
};

export default Details;