import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <>
            <div className='bg-slate-200 p-4 text-black m-4 rounded-xl text-xl'>
                <h2>{title}</h2>
            </div>
             
        </>
        
    );
};

export default Bookmark;