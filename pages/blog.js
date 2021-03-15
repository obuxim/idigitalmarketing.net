import React from 'react';
import Blog from '../components/blogpage/Blog';
import BlogHeader from '../components/blogpage/BlogHeader';

const blog = () => {
    return (
        <div>
            <BlogHeader />
            <Blog />
        </div>
    );
};

export default blog;