import React from 'react';
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readTime}) => {
    
    return (
        <>
            <div className='md:w-1/3'>

                <h2 className='mt-4 ml-20 text-2xl text-red-500 '>Total Reading Time: {readTime}</h2>
                <div className='bg-gray-500 p-6 ml-20 rounded-xl mt-8 '>

                    <h1 className='md:text-3xl ml-2 mb-4 text-green-400'>Bookmarks Blogs: {bookmarks.length}</h1>
                    <h2 className='md:text-3xl ml-6 mb-8 text-red-500 '>Your Reading Blog</h2>

                    {
                        bookmarks.map(loop => <Bookmark key={loop.id} bookmark={loop}></Bookmark> )
                    }
                </div>
                
              
                
            </div>
        </>
        
    );
};

export default Bookmarks;