import React, { useEffect, useState } from 'react';
import Project from './Project';

const MyProject = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProjects(data)
            })
    }, [])
    return (
        <div className='bg-primary py-12'>
            <h1 className='text-center text-warning text-4xl font-bold pb-10'>MY PROJECTS</h1>
            <div className='lg:pl-12 px-4 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    projects.map(project => <Project
                        project={project}
                    >

                    </Project>)
                }
            </div>
        </div>
    );
};

export default MyProject;