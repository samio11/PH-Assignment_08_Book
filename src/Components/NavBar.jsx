import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 font-semibold" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/listedBooks"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 font-semibolde" : ""
                            }
                        >
                            Listed Books
                        </NavLink>
                        <NavLink
                            to="/readPages"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 font-semibold" : ""
                            }
                        >
                            Pages To read
                        </NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Vipe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-4">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "btn btn-success btn-outline" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/listedBooks"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "btn btn-success btn-outline" : ""
                            }
                        >
                            Listed Books
                        </NavLink>
                        <NavLink
                            to="/readPages"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "btn btn-success btn-outline" : ""
                            }
                        >
                            Pages To read
                        </NavLink>
                    </ul>
                  
                </div>
                <div className="navbar-end flex flex-col lg:flex-row justify-end items-end lg:items-center gap-2">
                    <a className="btn btn-success text-white">Sign In</a>
                    <a className="btn btn-info text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;