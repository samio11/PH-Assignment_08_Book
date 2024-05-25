import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';

const MainWebLayout = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainWebLayout;