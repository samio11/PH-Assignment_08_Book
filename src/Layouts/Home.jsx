import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-2xl font-bold leading-none sm:text-4xl">Books To Freshen Your
                            <span className="text-green-600">Mind</span>
                        </h1>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-3">
                            <Link to={'listedBooks'} className="px-8 py-3 text-lg font-semibold rounded bg-green-600 text-gray-50">View The List</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://fcs-img.s3.amazonaws.com/1ebda62b-7f02-4fab-8e39-a5e6016ae6b4/f1d732b8-d832-4dec-8920-add000e241dc/XL.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;