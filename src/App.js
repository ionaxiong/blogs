import React, { useState } from 'react';
import Blog from './components/Blog';
// import axios from 'axios';

const App = ({ blogs }) => {
  // const [blogs, setBlogs] = useState([
  //   { title: '', date: '', author: '', content: '', views: 0, likes: 0 },
  // ]);

  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;
