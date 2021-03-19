import React from 'react';
import BlogSingleHeader from "../../components/blogpage/BlogSingleHeader";
import BlogSingleContent from "../../components/blogpage/BlogSingleContent";
const blogsingle = () => {
    return (
        <div>
            <BlogSingleHeader />
            <BlogSingleContent/>
        </div>
    );
};

export default blogsingle;

export const getServerSideProps = async (context) => {
    const post_id = context.params.id;
    const response = await fetch(
      `https://trainingexpress.org.uk/wp-json/wp/v2/posts/${post_id}`
    );
    const json = await response.json();

    return {
      props: {
        post: json,
      },
    };
};