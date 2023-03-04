import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const ProjectsCard = ({project}) => {
    const {imgUrl, title , description, link} = project;
    
    
   const submitVisit = (value) => {
    console.log(value)
   }
    
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
              
                <button className='text-white mx-5 proj-imgbx ' onClick={link} >Lets visit <ArrowRightCircle></ArrowRightCircle></button>
            </div>
        </Col>
    );
};

export default ProjectsCard;