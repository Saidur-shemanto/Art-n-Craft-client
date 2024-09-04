import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PaintingCard from './PaintingCard';

const ArtAndCrafts = () => {
    const loader = useLoaderData()
    const [paintings, setPaintings] = useState(loader)
    const handleCatChange = (e) => {
        if (e.target.value === 'All') {
            setPaintings(loader)

        } else {
            const filteredPaintings = loader.filter(paint => paint.sub === e.target.value)
            setPaintings(filteredPaintings)
        }


    }
    return (
        <div className='container mx-auto '>
            <label className="form-control w-full max-w-xs mx-auto ">
                <div className="label">
                    <span className="label-text">Sub Category</span>
                </div>
                <select onChange={handleCatChange} className="select select-bordered w-full max-w-xs">
                    <option value='All' selected>All</option>
                    <option value='Landscape Painting'>Landscape Painting</option>
                    <option value='Portrait Drawing'>Portrait Drawing</option>
                    <option value='Watercolor Painting'>Watercolor Paiting</option>
                    <option value='Oil Painting'>Oil Paiting</option>
                    <option value='Charcoal Sketching'>Charcoal Sketching</option>
                    <option value='Cartoon Drawing'>Cartoon Drawing</option>
                </select>
            </label>
            <div className='grid grid-cols-3'>
                {paintings.map(p => <PaintingCard paintings={p} key={p._id}></PaintingCard>)}

            </div>


        </div>
    );
};

export default ArtAndCrafts;