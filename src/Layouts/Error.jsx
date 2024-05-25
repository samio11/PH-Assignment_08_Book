import Lottie from 'lottie-react';
import React from 'react';
import err1 from './ErrorAni.json';

const Error = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <Lottie className='w-[70%] h-[70%]' animationData={err1}></Lottie>
        </div>
    );
};

export default Error;