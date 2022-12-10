import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectsCard = ({project}) => {
    const {imgUrl, title , description} = project;
    return (
        <Col sm={6} md={4} >
            <div  className='proj-imgbx '>
                <img src={imgUrl} alt="" />
                <div>
                    <h2>
                        {title}
                    </h2>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    );
};

export default ProjectsCard;