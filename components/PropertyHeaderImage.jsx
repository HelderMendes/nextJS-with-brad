import Image from 'next/image';
import React from 'react';

// const PropertyHeaderImage = ({ image, property }) => {
const PropertyHeaderImage = ({ image }) => {
    return (
        <>
            <section>
                <div className="container-xl m-auto">
                    <div className="grid grid-cols-1">
                        <Image
                            // src={`/images/properties/${image}`}
                            src={image}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="object-cover h-[400px] w-full"
                            priority={true}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default PropertyHeaderImage;
