'use client';
import React from 'react';
import Link from 'next/link';
import {
    useRouter,
    useParams,
    useSearchParams,
    usePathname,
} from 'next/navigation';

const PropertiesIdPage = () => {
    const router = useRouter();
    const { id } = useParams();
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const pathname = usePathname();

    console.log('Hoi There from the client server ' + name + ' ' + id);

    return (
        <div>
            <h1 className="text-3xl">Property ID Page for Any id</h1>
            <button
                onClick={() => router.push('/')}
                className="bg-blue-500 p-2"
            >
                Go Home
            </button>
            <button onClick={() => router.push('/')} className="bg-red-300 p-2">
                Go Home {...id}
            </button>
            <button
                onClick={() => router.push('/')}
                className="bg-orange-400 p-2"
            >
                Go Home {name}
            </button>
            <button
                onClick={() => router.push('/homes')}
                className="bg-violet-600 p-2 text-white"
            >
                Go Home {pathname} {name}
            </button>
            <br />
            <Link className="p-4" href="/">
                Go Back Home
            </Link>
        </div>
    );
};

export default PropertiesIdPage;
