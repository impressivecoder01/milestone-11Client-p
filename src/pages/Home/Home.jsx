import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <header>

            <Navbar></Navbar>
            </header>
            <main className='px-2'>
            <h1>this is home</h1>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;