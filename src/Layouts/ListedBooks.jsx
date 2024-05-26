import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const ListedBooks = () => {
    const [tab,setTab] = useState(0);
    return (
        <div className='space-y-5'>
            <div className='w-full flex justify-center items-center bg-gray-100 h-[70px]'>
                <h3 className='text-2xl font-bold'>Books</h3>
            </div>
            <div className='w-full flex justify-center items-center h-[70px]'>
                <button className='btn btn-success text-white'>Sort By</button>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <Link to={''} onClick={()=>setTab(0)} role='tab' className={`tab ${tab === 0 &&'tab-active'}`}>Read List</Link>
                <Link to={'wishList'} onClick={()=>setTab(1)} role='tab' className={`tab ${tab === 1 &&'tab-active'}`}>Wish List</Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;