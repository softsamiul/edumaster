import React from 'react';
import SingleCourse from '../components/SingleCourse/SingleCourse';
import useCourses from '../hooks/useCourses';

const Courses = () => {
    const [courses] = useCourses();
    return (
        <div className="w-4/5 mx-auto">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {
                    courses.map(course => <SingleCourse key={course.courseId} course={course}></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default Courses;