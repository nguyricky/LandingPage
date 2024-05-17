import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import parchment_logo from '../assets/parchment.png';
import stock_image from '../assets/stock.png';
import arrow from '../assets/arrow.png';
import arrowW from '../assets/arrow-w.png';

const Team = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen bg-neutral">
            <nav className='container mx-auto flex items-center my-8'>
                <Link to="/" className="flex items-center hover:opacity-75 transition-opacity duration-200">
                    <img src={parchment_logo} alt="Parchment Logo" className="w-16 h-16" />
                    <h1 className='text-accent font-semibold ml-3 text-2xl'>
                        Parchment
                    </h1>
                </Link>
            </nav>
            <div className='flex container mx-auto px-4 py-8'>
                <div className="flex justify-start mb-4">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="flex items-center bg-white text-base-300 font-bold py-2 px-4 rounded hover:opacity-75 transition-opacity duration-200"
                    >
                        <img src={arrowW} alt="Arrow" className="w-4 h-4 mr-2 transform rotate-180 fill-current" />
                        Go Back
                    </button>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="card card-compact w-80 bg-neutral shadow-xl">
                    <figure><img src={stock_image} alt="PFP" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-base-300">Ricky Nguyen</h2>
                        <p className='text-base-300'>nguyrick@oregonstate.edu</p>
                        <div className="card-actions mt-4">
                            <Link to="/ricky" className="flex items-center bg-primary opacity-90 hover:opacity-75 text-white font-bold py-2 px-4 rounded">
                                Read Blog
                                <img src={arrow} alt="Arrow" className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-neutral shadow-xl mx-12">
                    <figure><img src={stock_image} alt="PFP" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-base-300">Derek Williams</h2>
                        <p className='text-base-300'>willdere@oregonstate.edu</p>
                        <div className="card-actions mt-4">
                            <Link to="/derek" className="flex items-center bg-primary opacity-90 hover:opacity-75 text-white font-bold py-2 px-4 rounded">
                                Read Blog
                                <img src={arrow} alt="Arrow" className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-neutral shadow-xl mr-12">
                    <figure><img src={stock_image} alt="PFP" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-base-300">Nathaniel Thickett</h2>
                        <p className='text-base-300'>thicketn@oregonstate.edu</p>
                        <div className="card-actions mt-4">
                            <Link to="/nate" className="flex items-center bg-primary opacity-90 hover:opacity-75 text-white font-bold py-2 px-4 rounded">
                                Read Blog
                                <img src={arrow} alt="Arrow" className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-neutral shadow-xl">
                    <figure><img src={stock_image} alt="PFP" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-base-300">Logan Glasser</h2>
                        <p className='text-base-300'>glasserlk@oregonstate.edu</p>
                        <div className="card-actions mt-4">
                            <Link to="/logan" className="flex items-center bg-primary opacity-90 hover:opacity-75 text-white font-bold py-2 px-4 rounded">
                                Read Blog
                                <img src={arrow} alt="Arrow" className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
