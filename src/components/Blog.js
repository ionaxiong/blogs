import React from 'react';

const Blog = ({ blog }) => {
  return (
    <div>
      <h3> {blog.title} </h3>
      <p>
        {' '}
        {blog.date} by {blog.author}{' '}
      </p>
      <p> {blog.content} </p>
      <p> Views: {blog.views} </p>
      <p>Likes : {blog.likes} </p>
    </div>
  );
};

export default Blog;
