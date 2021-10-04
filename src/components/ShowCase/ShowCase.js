import React from 'react';
import image from '../../images/showcase-img.jpeg';

const ShowCase = (props) => {
    
    return (
        <div className="flex justify-between items-center w-4/5 mx-auto py-6">
            <div className="left-section w-2/4">
                <h2 className="text-6xl font-extrabold capitalize">India’s largest education platform</h2>
                <p className="text-lg mt-4">A modern, global school for a modern, global academic experience.</p>
            </div>
            <div className="right-section w-2/4">
                <img src={image} className="w-full rounded" alt="showcase img" />
            </div>
        </div>
    );
};

export default ShowCase;