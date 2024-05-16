import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parchment_logo from '../assets/parchment.png';
import stock_image from '../assets/stock.png';
import arrow from '../assets/arrow.png';

const words = ['Multi-taskers.', 'Students.', 'Professionals.', 'Adventurers.', 'Everyone.'];

const Team = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState(words[currentWordIndex]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [caretVisible, setCaretVisible] = useState(true);

    useEffect(() => {
        const caretBlinkInterval = setInterval(() => {
            setCaretVisible(vis => !vis);
        }, 250);

        let textChangeTimeout;
        if (isDeleting) {
            textChangeTimeout = setTimeout(() => {
                setDisplayText(prev => prev.slice(0, -1));
                if (displayText.length === 1) {
                    setIsDeleting(false);
                    setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
                }
            }, 100);
        } else {
            textChangeTimeout = setTimeout(() => {
                setDisplayText(words[currentWordIndex].slice(0, displayText.length + 1));
                if (displayText.length === words[currentWordIndex].length) {
                    setIsDeleting(true);
                }
            }, 200);
        }

        return () => {
            clearInterval(caretBlinkInterval);
            clearTimeout(textChangeTimeout);
        };
    }, [displayText, isDeleting, currentWordIndex]);

    return (
        <div className="flex flex-col h-screen bg-neutral">
            <nav className='container mx-auto flex items-center my-8'>
                <Link to="/" className="flex items-center hover:opacity-75 transition-opacity duration-200">
                    <img src={parchment_logo} alt="Parchment Logo" className="w-16 h-16" />
                    <h1 className='construction-text ml-3 text-2xl'>
                        Parchment
                    </h1>
                </Link>
            </nav>
            <div className="flex flex-row flex-1 items-center justify-center">
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
                        <h2 className="card-title text-base-300">Nathaniel Anthony Thickett</h2>
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
            <div className="text-center pb-2 md:pb-4">
                <p className="construction-text md:text-[15px]">
                    Made by Beavers, for {displayText}
                    <span className={`inline-block ${caretVisible ? '' : 'opacity-0'}`}>|</span>
                </p> 
            </div>
        </div>
    );
};

export default Team;
