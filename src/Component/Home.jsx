import React from 'react';

const Home = () => (
    <div className="flex items-center justify-center  ">
        <div className="text-center space-y-6 px-6 md:px-16 mt-11">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-[#02073F]">
                Welcome to Rent Rush
            </h1>
            <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto">
                Discover your dream ride or rent out your own. At Rent Rush, we bring the most luxurious, 
                reliable, and affordable options to your fingertips. Step into the world of convenience and elegance.
            </p>
            <button className="mt-6 px-8 py-3 bg-[#02073F] text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                Start Exploring
            </button>
        </div>
    </div>
);

export default Home;
