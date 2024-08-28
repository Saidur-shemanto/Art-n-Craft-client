import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ArtAndCrafts = () => {
    const paintings = useLoaderData()
    return (
        <div>
            {paintings.length}

        </div>
    );
};

export default ArtAndCrafts;