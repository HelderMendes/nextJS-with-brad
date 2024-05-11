import React from 'react';
import Hero from '@/components/Hero';

export const metadata = {
    Title: 'Home – Rental Property',
    keywords: 'Test Home',
};

const HomePage = () => {
    return (
        <div className="">
            <h1 className="text-3xl m-14 text-center w-15">
                <Hero />
            </h1>
        </div>
    );
};

export default HomePage;
