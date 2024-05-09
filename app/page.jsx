import React from 'react';
import Link from 'next/link';

export const metadata = {
    Title: 'Home – Rental Property',
    keywords: 'Test Home',
};

const HomePage = () => {
    return (
        <div>
            <h1 className="text-3xl">HomePage</h1>
            <Link href="/properties">Show Properties</Link>
        </div>
    );
};

export default HomePage;
