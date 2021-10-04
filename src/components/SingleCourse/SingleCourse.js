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
                <img src={thumbnail} className="rounded-lg h-36 md:h-48 mx-auto thumbnail" alt="Course thumbnail" />
            </div>
            <h2 className="md:text-xl text-lg font-base py-2">{courseName}</h2>
            <h4 className="text-lg font-base">{user}{instructor}</h4>
            <div className="flex justify-between">
                <p>{time}{duration} Hours</p>
                <p>{priceIcon}{price}</p>
            </div>
            {/* <div className="flex justify-between">
                <p>{classes} Classes</p>
                <p>{project} Projects</p>
                <p>{type}</p>
            </div> */}
            <div className="md:flex flex-none justify-between mt-2 btn-wrapper">
                
                <button className="py-2 px-6 bg-blue-900 text-white rounded-lg font-medium">Enroll Now</button>
                <NavLink to="/courses">
                    <button className="py-2 px-6 md:inline hidden bg-green-700 btn-details text-white rounded-lg font-medium">See Details</button>
                </NavLink>
            </div>
            
        </div>
    );
};

export default SingleCourse;