import React from 'react';
import './SingleService.css';
const SingleService = (props) => {
    const {title, strDesc, strImg} = props.service;
    
    return (
        <div className="single-service-wrap p-4">
            <div >
                <img src={strImg} className="h-60 mx-auto rounded-lg" alt="service 1 img" />
            </div>
            <h3 className="text-2xl font-semibold text-center">{title}</h3>
            <p className="text-base">{strDesc}</p>
        </div>
    );
};

export default SingleService;