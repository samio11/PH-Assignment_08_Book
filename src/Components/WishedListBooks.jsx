import React from 'react';
import { getWishInfo } from './localStorageLogic';
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const WishedListBooks = () => {
    const wishedBook = getWishInfo()
    console.log(wishedBook);
    return (
        <div>
           <div className='space-y-4'>
            {
                wishedBook.map((x, idx) => {
                    return (
                        <div key={idx} className=" h-auto lg:h-[300px] bg-base-200 w-full flex flex-col lg:flex-row justify-start items-start gap-4">
                            <div className='w-full lg:w-[38%]'>
                                <img src={x.image} className="w-full h-[300px] rounded-lg shadow-2xl" />

                            </div>
                            <div className='w-full lg:w-[55%] pl-5 space-y-4'>
                                <h2 className='text-2xl font-bold mt-3'>{x.bookName}</h2>
                                <p>By:-{x.author}</p>
                                <div className='flex justify-around items-center'>
                                    <div className='flex-1 flex justify-around items-center'>
                                        {
                                            x.tags?.map((x1, i) => <p key={i} className='text-green-600 text-xs font-semibold px-3'>#{x1}</p>)
                                        }
                                    </div>
                                    <div className='flex-1 flex justify-start items-center gap-2'>
                                        <p><IoLocationOutline /></p>
                                        <p>Year of publication:{x.yearOfPublishing}</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center gap-5'>
                                    <div className='flex justify-start items-center gap-2'>
                                       <p><IoPersonOutline /></p>
                                       <p>Publisher:{x.publisher}</p>
                                    </div>
                                    <div className='flex justify-start items-center gap-2'>
                                       <p><IoNewspaperOutline /></p>
                                       <p>Page:{x.totalPages}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex flex-col lg:flex-row justify-start items-center gap-5'>
                                    <h2 className='p-4 text-blue-500 bg-blue-100 rounded-3xl'>Category:{x.category}</h2>
                                    <h2 className='p-4 text-orange-500 bg-orange-100 rounded-3xl'>Rating:{x.rating}</h2>
                                    <Link className='btn btn-success text-white' to={`/detail/${x.bookId}`}>Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    );
};

export default WishedListBooks;