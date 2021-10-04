import { useEffect, useState } from "react";

const useCourse = () => {
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        fetch('/fakedbcourses.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])

    return [course, setCourse];
}

export default useCourse;