import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const { _id, img, name } = project;
    const navigate = useNavigate()
    // console.log(_id);
    const projectDetails = (id) => {
        // console.log(id);
        navigate(`/projectDetail/${id}`)
    }
    return (
        <div
            data-aos="flip-right"
            data-aos-delay="600"
            data-aos-duration="1000"
        >
            <div class="card lg:w-96 lg:bg-error bg-warning shadow-xl">
                <figure><img className='w-full h-full lg:h-[250px]' src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title lg:text-white">{name}</h2>
                    <p className='lg:text-white'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, tempore? Nemo aliquid iure placeat saepe nostrum labore cupiditate molestiae fugit.
                    </p>
                    <div class="card-actions justify-center">
                        <button onClick={() => projectDetails(_id)} class="btn btn-primary lg:hover:text-white lg:bg-warning lg:text-black">Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;