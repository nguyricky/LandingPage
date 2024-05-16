import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parchment_logo from '../assets/parchment.png';
import collab_svg from '../assets/collab.svg';
import arrow from '../assets/arrow.png';

const words = ['Multi-taskers.', 'Students.', 'Professionals.', 'Adventurers.', 'Everyone.'];

const Frontal = () => {
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
            <div className="flex flex-1 items-center justify-center">
                <div className='flex flex-row'>
                    <img src={collab_svg} alt="Collab" className="w-96" />
                    <div className="w-[700px] ml-24">
                        <p className="tracking-widest text-center text-accent text-2xl font-black mb-6">
                            Rediscover Simplicity with Parchment
                        </p>
                        <p className="text-lg text-base-300 font-medium	text-center mb-6">
                            In the early days of computing, desktops offered a simple and intuitive workspace. However, modern workflows have become cluttered with multiple tabs, windows, and monitors, complicating productivity. Parchment brings back the streamlined, unified workspace of the past, making it easier for you to focus and stay organized.
                        </p>
                        <p className="text-lg text-base-300 font-medium	text-center">
                            Parchment is our solution.
                        </p>
                        <div className="flex justify-center mt-6">
                            <Link to="/team" className="flex items-center bg-primary opacity-90 hover:opacity-75 text-white font-bold py-2 px-4 rounded">
                                Meet Our Team
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

export default Frontal;
