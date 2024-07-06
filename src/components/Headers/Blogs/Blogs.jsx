import React, { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';

const Blogs = ({handleAddBookmarks ,handleTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='md:w-2/3'>
            <h1 className='md:text-3xl ml-6'>Blogs: {blogs.length}</h1>

            {
                blogs.map(loop => <Blog key={loop.id} blog={loop} handleAddBookmarks={handleAddBookmarks} handleTime={handleTime}></Blog>)
            }
        </div>
    );
};

export default Blogs;