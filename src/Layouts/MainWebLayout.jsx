import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet, useNavigation } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

const MainWebLayout = () => {
    const navigation = useNavigation();

    return (
        <div className='max-w-screen-xl mx-auto'>
            <NavBar></NavBar>
            {
                navigation.state === 'loading' ? 
                   <RingLoader className='text-center mt-10' color="#36d7b7" size={120} />
              : <Outlet></Outlet>
            }
        </div>
    );
};

export default MainWebLayout;