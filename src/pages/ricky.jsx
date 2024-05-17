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
                        <p className="text-sm text-base-400">By Ricky Nguyen - May 16, 2024</p>
                    </header>
                    <section className="text-lg leading-relaxed">
                        <p className="mb-4">
                            Wrapping up my final year at Oregon State University, I was thrilled to dive into my senior capstone project. Luckily enough, I was able to get my first choice project — Parchment. As someone who has always been passionate about front-end development, being assigned to Parchment and the front-end team was a dream come true. This role perfectly aligned with my interests and allowed me to truly hone my skills that I’ve built throughout my academic career.                        </p>
                        <p className="mb-4">
                            One of the most rewarding aspects of this project was working in an environment that closely mirrored the dynamics of a start-up. The fast-paced, collaborative setting offered a glimpse into real-world industry scenarios, presenting both challenges and learning opportunities. The experience was immersive, requiring quick thinking, problem-solving, and a strong team spirit. This environment taught me the value of adaptability and innovation in tech projects.
                        </p>
                        <p className="mb-4">
                            My journey began with familiarizing myself with the codebase and fixing minor bugs, which was essential for understanding the project’s foundation. As I gained confidence, I took on more complex tasks, such as taking the initiative by creating and styling major components of the application’s Sidebar. Working on the Sidebar portion of the application was a transformative experience. It demanded a deep dive into HTML, CSS, and JavaScript, as well as learning a proprietary framework unique to our project. And then later in the process, switching to a more Swift like codebase.
                        </p>
                        <p className="mb-4">
                            Looking back, I am immensely grateful for this capstone project. It has solidified my passion for front-end development and provided me with practical skills and experiences that will serve me well in the future. I am excited to bring my enthusiasm and expertise to new projects and challenges. This experience has been a significant step in my professional journey, and I look forward to what lies ahead.
                        </p>
                    </section>
                </article>
            </main>
        </div>
    );
};

export default Ricky;
