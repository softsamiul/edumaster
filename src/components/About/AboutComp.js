import React from 'react';
import aboutImg from '../../images/about-us.png';
import './AboutComp.css';
const AboutComp = () => {
    return (
        <div className="w-4/5 mx-auto mb-10">
            <div className="flex justify-between items-center">
                <div className="w-2/4">
                    <img className="h-80" src={aboutImg} alt="About us img" />
                </div>
                <div className="w-2/4">
                    <h2 className="text-4xl font-bold mb-2">Achieve Your Goals</h2>
                    <p className="text-basic">We are a modern, global school for a modern, global academic experience. We offer world's top quality education. Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision. Talk with instructors, ask questions, answer live polls, and get your doubts cleared - all while the class is going on.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutComp;