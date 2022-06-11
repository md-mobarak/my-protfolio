import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details';

const ProjectDetails = () => {
    const { id } = useParams()
    const [projectDetails, setProjectDetails] = useState([])
    const projectId = projectDetails.filter(p => id == p._id)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/md-mobarak/my-protfolio/main/public/project.json')
            .then(res => res.json())
            .then(data => {
                setProjectDetails(data)
            })
    }, [id])

    return (
        <div>
            {projectId.map(detail => <Details
                detail={detail}
            ></Details>)}

        </div>
    );
};

export default ProjectDetails;