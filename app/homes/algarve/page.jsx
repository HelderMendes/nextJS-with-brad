import React from 'react';
import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/utils/requests';

const AlgarvePage = async () => {
    const properties = await fetchProperties();

    // Sort Properties by date
    properties.sort((b, a) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
                {properties.length === 0 ? (
                    <h1>No Properties found in ALGARVE at this moment</h1>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {properties.map((property) => (
                            <PropertyCard
                                key={property._id}
                                property={property}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
export default AlgarvePage;
