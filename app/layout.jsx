import React from 'react';
import '@/assets/styles/globals.css';

export const matadata = {
    title: 'Property Pulse | Your the Perfect Rental Home',
    description: 'Find your dream rental home',
    keywords: 'Rental Property, Find Rental, Find Property',
};

const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div>{children}</div>
            </body>
        </html>
    );
};

export default MainLayout;
