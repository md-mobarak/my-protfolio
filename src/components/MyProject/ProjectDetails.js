import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams()
    const [projectDetails, setProjectDetails] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/md-mobarak/my-protfolio/main/public/project.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjectDetails(data)
            })
    }, [])

    return (
        <div>
            <h1>hello{projectDetails.length}</h1>
            <h1>hello{id}</h1>
        </div>
    );
};

export default ProjectDetails;