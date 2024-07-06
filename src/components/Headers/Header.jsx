import React from 'react';
import profile from '../../assets/images/profile.jpg'
const Header = () => {
    return (
        <header className='flex justify-between m-6 items-center border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-green-500 md:text-4xl ml-4'>Knowledge Cafe</h1>
            <img className='w-24 rounded-3xl md:mb-4 mr-4' src={profile}/>
        </header>
    );
};

export default Header;