import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PaintingCard from './PaintingCard';

const ArtAndCrafts = () => {
    const [filter, setFilter] = useState('All')
    const loader = useLoaderData()
    const [paintings, setPaintings] = useState(loader)
    const handleCatChange = (e) => {
        setFilter()
        if (e.target.value === 'All') {
            setPaintings(loader)

        } else {
            const filteredPaintings = paintings.filter(paint => paint.sub === e.target.value)
            setPaintings(filteredPaintings)
        }


    }
    return (
        <div>
            <label className="form-control w-full max-w-xs">
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
            {paintings.map(p => <PaintingCard></PaintingCard>)}

        </div>
    );
};

export default ArtAndCrafts;