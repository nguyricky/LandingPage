import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import parchment_logo from '../assets/parchment.png';
import arrow from '../assets/arrow-w.png';

const Ricky = () => {
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
                <div className="flex justify-start mb-4">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="flex items-center bg-white text-base-300 font-bold py-2 px-4 rounded hover:opacity-75 transition-opacity duration-200"
                    >
                        <img src={arrow} alt="Arrow" className="w-4 h-4 mr-2 transform rotate-180 fill-current" />
                        Go Back
                    </button>
                </div>
                <article className="bg-white shadow-xl p-6 rounded-lg">
                    <header className="mb-6">
                        <h2 className="text-3xl font-bold mb-2">Parchment Blog</h2>
                        <p className="text-sm text-base-400">By Logan Glasser - May 16, 2024</p>
                    </header>
                    <section className="text-lg leading-relaxed">
                        <p className="mb-4">
                            When I joined this class, and had the option to sign up for different projects, Parchment caught my eye. It was a project that would build a new way to view the file explorer and I was very interested, so I signed up for it as my first choice and got in. I was assigned to the third of three OSU parchment groups. When I was first starting, my first task was a fairly simple bug fix, which allowed me to get familiar with the code base, as well as become familiar with how to run the prototype on my machine.   </p>
                        <p className="mb-4">
                            Then, I was assigned to work on Parchment's sidebar with five other students. Parchment's sidebar would be made through html, css, and javascript, and would consist of a system similar to Google Drive's sidebar. The focus was to read all of the files in a given part of the system and to display it to the user in as clean a way as possible, including dropdown folders, drag and drop functionality, and smooth animations. I helped work on that with the group for most of my Winter term, focusing mostly on the javascript side of the project. Through the sidebar team, I was able to learn more about how a codebase of that size operated, and I also got better at consistent communication with a team of members.           </p>
                        <p className="mb-4">
                            In the beginning of April, I was moved from the sidebar team to a team that had the goal of building some of the basic functionality of parchment but for a Windows specific build. This required us use C#, which neither me or my group had ever used before, so over the course of working on this project, I have learned a lot about C#, and the team and I have gotten a basic version of Parchment running, with the ability to create, delete, and edit files, with a sidebar to navigate through each of the different files. </p>
                        <p className="mb-4"> 
                            Over the period of taking this course, I have reinforced my javascript skills, learned the basics of C#, and also got some great practice working with a team of programmers on assignments for an extended period of time. </p>
                    </section>
                </article>
            </main>
        </div>
    );
};

export default Ricky;
