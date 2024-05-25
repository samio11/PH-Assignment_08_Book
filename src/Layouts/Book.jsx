import React from 'react';
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Book = ({ x }) => {
    const navigate = useNavigate();
    const handleDetail = () =>{
         navigate(`/detail/${x.bookId}`)
    }
    return (
        <div>
            <div onClick={()=>handleDetail()} className="p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
                <img src={x.image} alt="" className="object-cover object-center w-full rounded-md h-[300px] bg-gray-500" />
                <div className='my-2 flex justify-start items-center gap-3'>
                    {
                        x.tags?.map((x1, i) => <p key={i} className='text-green-600 text-xs font-semibold px-3'>{x1}</p>)
                    }
                </div>
                <h1 className='my-2 text-2xl font-semibold'>{x.bookName}</h1>
                <p className='my-2 text-gray-400'>{x.author}</p>
                <hr className='mt-4' />
                <div className='flex justify-between items-center px-2'>
                    <p className='text-gray-500'>{x.category}</p>
                    <div className='flex justify-center items-center gap-2'>
                        <p><CiStar /></p>
                        <p>{x.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;