import React from 'react';
import CoursesComp from '../components/Courses/CoursesComp';
import ServicesComp from '../components/Services/ServicesComp';
import ShowCase from '../components/ShowCase/ShowCase';

const Home = () => {
    
    // console.log(images[0].img1);
    
    return (
        <>
         <div className="w-4/5 mx-auto">
            <ShowCase></ShowCase>   
            <ServicesComp></ServicesComp>
            <CoursesComp></CoursesComp>
         </div>
        </>
    );
};

export default Home;