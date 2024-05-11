'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faSmileBeam,
    faHomeAlt,
    faHamburger,
} from '@fortawesome/free-solid-svg-icons';

const PropertiesPage = () => {
    const router = useRouter();

    return (
        <div className="mt-4 p-6 bg-slate-200">
            <h1 className="text-3xl pb-4">Properties Page</h1>
            <button
                onClick={() => router.push('/')}
                className="p-5 text-bg- text-red-100 bg-slate-950"
            >
                Properties Home <FontAwesomeIcon icon={faSmileBeam} />
            </button>
            <p>
                <br />
            </p>
            <button
                onClick={() => router.push('/')}
                className="p-2 mt-5 text-2xl bg-red-600 text-slate-950 font-bold text"
            >
                Properties Home <FontAwesomeIcon icon={faUser} />
            </button>
            <p>
                <br />
            </p>
            <Link href="/">
                Go Back Home <FontAwesomeIcon icon={faHamburger} size="2x" />{' '}
                <FontAwesomeIcon icon={faHomeAlt} size="2x" />
            </Link>
        </div>
    );
};

export default PropertiesPage;
