import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyAnC = () => {
    const loader = useLoaderData()
    console.log(loader)
    return (
        <div>
            {loader.length}

        </div>
    );
};

export default MyAnC;