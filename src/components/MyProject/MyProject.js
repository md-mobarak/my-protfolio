import React, { useEffect, useState } from 'react';

const MyProject = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data)
            })
    }, [])
    return (
        <div className='bg-primary py-12'>
            <h1 className='text-center text-warning text-4xl font-bold pb-10'>MY PROJECTS</h1>
            <div className='lg:pl-12 pl-4 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    projects.map(project => <div
                        data-aos="flip-right"
                        data-aos-delay="600"
                        data-aos-duration="1000"
                    >
                        <div class="card w-96 bg-warning shadow-xl">
                            <figure><img className='w-full lg:h-[250px]' src={project.img} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{project.name}</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, tempore? Nemo aliquid iure placeat saepe nostrum labore cupiditate molestiae fugit.
                                </p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Explore More</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyProject;