import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import parchment_logo from '../assets/parchment.png';
import arrow from '../assets/arrow.png';

const Derek = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-neutral text-base-300">
            <nav className='container mx-auto flex items-center my-8'>
                <Link to="/" className="flex items-center hover:opacity-75 transition-opacity duration-200">
                    <img src={parchment_logo} alt="Parchment Logo" className="w-16 h-16" />
                    <h1 className='text-accent font-semibold ml-3 text-2xl'>
                        Parchment
                    </h1>
                </Link>
            </nav>
            <main className="flex-1 container mx-auto px-4 py-8">
                <article className="bg-white shadow-xl p-6 rounded-lg">
                    <header className="mb-6">
                        <h2 className="text-3xl font-bold mb-2">Parchment Blog</h2>
                        <p className="text-sm text-base-400">By Derek Williams - May 16, 2024</p>
                    </header>
                    <section className="text-lg leading-relaxed">
                        <p className="mb-4">
                             placeholder
                        </p>
                    </section>
                </article>
                <div className="flex justify-center mt-8">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="flex items-center bg-primary text-white font-bold py-2 px-4 rounded hover:opacity-75 transition-opacity duration-200"
                    >
                        <img src={arrow} alt="Arrow" className="w-4 h-4 mr-2 transform rotate-180" />
                        Go Back
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Derek;
