import React from 'react';
import '@/assets/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
    title: 'Property Pulse | Your the Perfect Rental Home',
    description: 'Find your dream rental home',
    keywords: 'Rental Property, Find Rental, Find Property',
};

const MainLayout = ({ children }) => {
    return (
        <AuthProvider>
            <html lang="en">
                <body>
                    <NavBar />
                    <main>{children}</main>
                    <Footer className="mt-6" />
                </body>
            </html>
        </AuthProvider>
    );
};

export default MainLayout;
