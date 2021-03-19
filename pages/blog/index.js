import axios from "axios";
import React from "react";
import Blog from "../../components/blogpage/Blog";
import BlogHeader from "../../components/blogpage/BlogHeader";

const fetchData = async () =>
  await axios
    .get("http://dmlms.wpengine.com/wp-json/wp/v2/posts")
    .then((res) => ({
      error: false,
      posts: res.data,
    }))
    .catch(() => ({
      error: true,
      posts: null,
    }));

const blog = ({ posts }) => {
  return (
    <div>
      <BlogHeader />
      <Blog posts={posts} />
    </div>
  );
};

export default blog;

export const getStaticProps = async () => {
  const posts = await fetchData();

  return {
    props: { posts },
  };
};
