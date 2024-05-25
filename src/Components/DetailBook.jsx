import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DetailBook = () => {
    const para = useParams();
    console.log(para);
    const allBookData = useLoaderData();
    console.log(allBookData);
    const netData = allBookData.find((x) => x.bookId === parseInt(para.id));
    console.log(netData);
    return (
        <div>
            <div className='w-full h-auto lg:h-[80vh] mt-5 flex flex-col lg:flex-row justify-start items-start'>
                <div className='flex-1 flex justify-center items-center'>
                    <img className='w-full lg:w-[400px] h-[250px] lg:h-[400px]' src={netData.image} alt="" />
                </div>
                <div className='flex-1 space-y-4'>
                    <h2 className='text-3xl font-semibold'>{netData.bookName}</h2>
                    <h3 className='text-xl'>By : {netData.author}</h3>
                    <hr />
                    <h3 className='text-xl'>{netData.category}</h3>
                    <hr />
                    <p className='text-xs text-gray-600'><span className='font-semibold'>Review:-</span>{netData.review}</p>
                    <div className='my-2 flex justify-start items-center gap-3'>
                        {
                            netData.tags?.map((x1, i) => <p key={i} className='text-green-600 text-xs font-semibold px-3'>{x1}</p>)
                        }
                    </div>
                    <hr />
                    <p className='text-xs text-gray-600'>Number Of Pages:<span className='text-black font-bold ml-8'>{netData.totalPages}</span></p>
                    <p className='text-xs text-gray-600'>Publisher:<span className='text-black font-bold ml-8'>{netData.publisher}</span></p>
                    <p className='text-xs text-gray-600'>Year Of Publication:<span className='text-black font-bold ml-8'>{netData.yearOfPublishing}</span></p>
                    <p className='text-xs text-gray-600'>Rating:<span className='text-black font-bold ml-8'>{netData.rating}</span></p>
                    <div className='flex justify-start items-center gap-4'>
                         <button className='btn btn-outline btn-info'>Read</button>
                         <button className='btn btn-outline btn-info'>Wish List</button>
                    </div>
                </div>
            </div>
            <div className='w-full my-6 flex justify-center items-center'>
                 <a className='btn btn-error btn-outline btn-wide' href="/">Back Home</a>
            </div>
        </div>
    );
};

export default DetailBook;