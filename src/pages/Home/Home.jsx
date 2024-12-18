import React from 'react';
import Navbar from '../shared/Navbar';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <header>

            <Navbar></Navbar>
            </header>
            <main className='px-2'>
            <h1>this is home</h1>

            </main>
        </div>
    );
};

export default Home;