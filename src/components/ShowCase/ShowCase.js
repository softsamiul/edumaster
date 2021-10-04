import React from 'react';
import image from '../../images/showcase-img.jpeg';

const ShowCase = (props) => {
    
    return (
        <div className="flex-col md:flex justify-between items-center md:w-4/5 w-full mx-auto py-6">
            <div className="left-section md:w-2/4 w-10/12 mx-auto">
                <h2 className="md:text-6xl text-2xl font-bold capitalize">India’s largest education platform</h2>
                <p className="text-lg mt-4">A modern, global school for a modern, global academic experience.</p>
            </div>
            <div className="right-section md:w-2/4 w-10/12 mx-auto">
                <img src={image} className="w-full rounded" alt="showcase img" />
            </div>
        </div>
    );
};

export default ShowCase;