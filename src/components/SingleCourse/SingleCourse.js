import { faClock, faDollarSign, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './SingleCOurse.css';
const SingleCourse = (props) => {
    const {classes, courseName, duration, instructor, price, project, thumbnail, type} = props.course;
    console.log(props);
    console.log(thumbnail);
    
    const user = <FontAwesomeIcon style={{marginRight:'15px'}} className="text-blue-900" icon={faUserCircle} />
    const time = <FontAwesomeIcon style={{marginRight:'15px'}} className="text-blue-900" icon={faClock} />
    const priceIcon = <FontAwesomeIcon style={{marginRight:'5px'}} icon={faDollarSign} />
    
    return (
        <div className="single-course-wrap p-4 rounded">
            <div>
                <img src={thumbnail} className="rounded-lg h-60" alt="Course thumbnail" />
            </div>
            <h2 className="text-2xl font-semibold py-2">{courseName}</h2>
            <h4 className="text-lg font-bold">{user}{instructor}</h4>
            <div className="flex justify-between">
                <p>{time}{duration} Hours</p>
                <p>{priceIcon}{price}</p>
            </div>
            <div className="flex justify-between mt-2">
                {/* <p>{classes} Classes</p>
                <p>{project} Projects</p>
                <p>{type}</p> */}
                <button className="py-2 px-6 bg-blue-900 text-white rounded-lg font-semibold">Enroll Now</button>
                <NavLink to="/courses">
                    <button className="py-2 px-6 bg-green-700 text-white rounded-lg font-semibold">See Details</button>
                </NavLink>
            </div>
            
        </div>
    );
};

export default SingleCourse;