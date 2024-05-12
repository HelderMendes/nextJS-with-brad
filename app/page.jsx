import React from 'react';
import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';

export const metadata = {
    Title: 'Home – Rental Property',
    keywords: 'Test Home',
};

const HomePage = () => {
    return (
        <>
            <Hero />
            <InfoBoxes />
        </>
    );
};

export default HomePage;
