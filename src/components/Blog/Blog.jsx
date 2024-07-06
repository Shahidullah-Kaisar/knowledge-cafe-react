import React from 'react';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddBookmarks ,handleTime}) => {

    const {id,title,author,cover_img,posted_date,author_img,hashtags,reading_time} = blog;

    return (
        <div className='sm:ml-6'>
            <img className='w-full rounded-3xl mb-10 mt-10' src={cover_img} alt="" />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-xl'>{reading_time} min read</span>
                    <button className='ml-5 text-2xl hover:text-green-500 transition delay-150' onClick={ () =>handleAddBookmarks(blog)}><CiBookmark /></button>
                </div>
                
                
            </div>
            <div className='ml-20'>
                <h1 className='text-3xl mb-4'>{title}</h1>
                <p className='text-blue-500 space-x-4'>
                    {
                        hashtags.map( (hash ,idx) => <span key={idx}> <a href="">{hash}</a></span> )
                    }
                </p>
            </div>
            <button className='mt-3 ml-20 mb-8 text-blue-500 underline hover:text-blue-400 transition delay-150' onClick={() => handleTime(id,reading_time)}>Mark as Read</button>
            
        </div>
    );
};

export default Blog;