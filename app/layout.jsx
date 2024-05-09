import React from 'react';
import '@/assets/styles/globals.css';
import NavBar from '@/components/NavBar';

export const matadata = {
    title: 'Property Pulse | Your the Perfect Rental Home',
    description: 'Find your dream rental home',
    keywords: 'Rental Property, Find Rental, Find Property',
};

const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <NavBar />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default MainLayout;
