import React from 'react';
import axios from "axios";
import CoursePageHeader from '../../components/coursepage/CoursePageHeader';
import Courses from '../../components/coursepage/Courses';
import courseSingle from './../../components/coursesinglepage/CourseSingleContent';
const fetchData = async () => 
    await axios.get(courseSingle)
    .then(res => ({
        error: false,
        posts: res.data,
    }))
    .catch(() => ({
      error: true,
      posts: null,
    }),
);

const course = ({courses}) => {
    return (
        <div>
            <CoursePageHeader />
            <Courses courses={courses}/>
        </div>
    );
};

export default course;


export const getStaticProps = async () => {
    const courses = await fetchData();
    return {
        props: { courses },
    };
};
  