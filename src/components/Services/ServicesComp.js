import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './ServicesComp.css';
const ServicesComp = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./fakedbservices.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    console.log(services[0]);
    
    return (
        <div>
            <div className="courses-section-tagline mb-2 text-center font-bold  py-10">
                <h2 className="text-4xl">Our Services</h2>
                <blockquote className="italic mt-2">World's top class services available here!</blockquote>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    services.map(service => <SingleService key={service.serviceId} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default ServicesComp;