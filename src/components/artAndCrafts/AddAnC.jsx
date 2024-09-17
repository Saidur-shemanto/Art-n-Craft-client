import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../authentication/AuthProvider';

const AddAnC = () => {
    const { user } = useContext(AuthContext)



    const handleAnCSubmit = (e) => {
        e.preventDefault()
        const image = e.target.image.value
        const itemName = e.target.itemName.value
        const sub = e.target.subCat.value
        const shortDesc = e.target.shortDesc.value
        const price = e.target.price.value
        const rating = e.target.rating.value
        const custom = e.target.custom.value
        const process = e.target.process.value
        const userId = user.uid
        const paintInfo = {
            userId, image, itemName, sub, shortDesc, price, rating, custom, process
        }
        fetch('https://an-c-server-md-saidur-rahman-shemantos-projects.vercel.app/paintings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(paintInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })





    }
    return (
        <div>
            <form className="w-[20rem] mx-auto" onSubmit={handleAnCSubmit}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Image</span>
                    </div>
                    <input name="image" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Item Name</span>
                    </div>
                    <input name="itemName" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Sub Category</span>
                    </div>
                    <select name='subCat' className="select select-bordered w-full max-w-xs">
                        <option selected disabled>Select Sub Category</option>
                        <option value='Landscape Painting'>Landscape Painting</option>
                        <option value='Portrait Drawing'>Portrait Drawing</option>
                        <option value='Watercolor Painting'>Watercolor Paiting</option>
                        <option value='Oil Painting'>Oil Paiting</option>
                        <option value='Charcoal Sketching'>Charcoal Sketching</option>
                        <option value='Cartoon Drawing'>Cartoon Drawing</option>
                    </select>
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Short Description</span>
                    </div>
                    <textarea name='shortDesc' className="textarea textarea-bordered" placeholder="Bio"></textarea>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Price</span>
                    </div>
                    <input name="price" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Rating</span>
                    </div>
                    <input name="rating" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Customization</span>
                    </div>
                    <select name='custom' className="select select-bordered w-full max-w-xs">
                        <option selected value='Yes'>Yes</option>
                        <option value='No'>No</option>

                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Processing Time</span>
                    </div>
                    <input name="process" type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <br />



                <button className="btn text-white bg-orange-500 w-full">Submit</button>



            </form>

        </div>
    );
};

export default AddAnC;