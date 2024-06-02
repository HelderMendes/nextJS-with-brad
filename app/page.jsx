import React from 'react';
import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';

export const metadata = {
    Title: 'Home – Rental Property',
    keywords: 'Test Home',
};

const HomePage = () => {
    // const HomePage = async () => {
    // console.log(process.env.MONGODB_URI);
    // await connectDB();

    return (
        <>
            <Hero />
            <InfoBoxes />
            <HomeProperties />
        </>
    );
};

export default HomePage;
