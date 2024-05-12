'use client';

import React from 'react';
import {
    useRouter,
    useParams,
    usePathname,
    useSearchParams,
    // useSelectedLayoutSegments,
} from 'next/navigation';

const HomesCatchAllPage = () => {
    // const segments = useSelectedLayoutSegments();

    const router = useRouter();
    console.log('Hoi There from server');
    const { id } = useParams();
    console.log(
        'Hoi There from the client server with the URL ...ID' + ' ' + id
    );
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const pathname = usePathname();

    // console.log('Hoi There from the client server ' + name + ' ' + id);

    return (
        <div>
            Homes Catch All Page [...ID]
            {/* <ul>
                {segments.map((segment, index) => (
                    <li key={index}>{segment} Homes Catch All Page ge</li>
                ))}
            </ul> */}
            <h1 className="text-3xl">Property ID Page for Any id</h1>
            <button
                onClick={() => router.push('/properties')}
                className="bg-black text-lg text-yellow-100 p-2 font-bold"
            >
                Properties
            </button>
            <p>
                <br />
            </p>
            <button
                onClick={() => router.push('/properties')}
                className="bg-black text-lg text-yellow-100 p-2 font-bold"
            >
                Go To Properties <i className="far fa-laugh-beam"></i> //{' '}
                {...id}
            </button>
            <p>
                <br />
            </p>
            <button
                onClick={() => router.push('/properties')}
                className="bg-black text-lg text-yellow-100 p-2 font-bold"
            >
                Properties with param name {name}
            </button>
            <p>
                <br />
            </p>
            <button
                onClick={() => router.push('/properties')}
                className="text-black p-2 bg-violet-600 font-bold text-lg"
            >
                Properties with pathname + param (name=) {pathname} {name}
            </button>
        </div>
    );
};

export default HomesCatchAllPage;
