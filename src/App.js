import React, { useState } from 'react';
// import axios from 'axios';

const App = (props) => {
  // const [blogs, setBlogs] = useState([
  //   { title: '', date: '', author: '', content: '', views: 0, likes: 0 },
  // ]);
  console.log(props)

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {props.blogs.map((blog) => 
          <>
            <li index={blog.id}>
              {blog.title}
              {blog.date}
            </li>
            <li> {blog.author} </li>
            <li> {blog.content} </li>
            <li>
              {' '}
              {blog.views} {blog.likes}{' '}
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default App;
