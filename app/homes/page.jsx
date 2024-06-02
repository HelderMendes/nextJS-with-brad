'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaUser, FaSmileBeam, FaHome, FaHamburger } from 'react-icons/fa';

const HomesPage = () => {
    const router = useRouter();

    return (
        <div className="mt-4 p-6 bg-slate-200">
            <h1 className="text-3xl pb-4">Properties Page</h1>
            <button
                onClick={() => router.push('/')}
                className="p-5 text-bg- text-red-100 bg-slate-950"
            >
                Properties Home <FaSmileBeam className="inline-block ml-3" />
            </button>
            <p>
                <br />
            </p>
            <button
                onClick={() => router.push('/')}
                className="p-2 mt-5 text-2xl bg-red-600 text-slate-950 font-bold text"
            >
                Properties Home <FaUser className="inline-block mx-10" />
            </button>
            <p>
                <br />
            </p>
            <Link href="/" className="bg-green-500 p-4 mb-4 block">
                Go Back Home <FaHamburger className="inline-block mx-3" />{' '}
                <FaHome className="inline-block ml-9" />
            </Link>
            <p>Plus andere dingen</p>
        </div>
    );
};

export default HomesPage;
