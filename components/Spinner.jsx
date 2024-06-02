'use client';
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display: 'block',
    margin: '100px auto',
};

const SpinnerLoading = ({ loading }) => {
    return (
        <ClipLoader
            color="#1d4ed8"
            loading={loading}
            cssOverride={override}
            size={200}
            aria-label="Loading Spinner"
        />
    );
};

export default SpinnerLoading;
