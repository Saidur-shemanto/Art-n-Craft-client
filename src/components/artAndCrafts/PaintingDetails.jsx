import React, { useContext } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../authentication/AuthProvider';
import Swal from 'sweetalert2';

const PaintingDetails = () => {
    const loader = useLoaderData()
    const { user } = useContext(AuthContext)

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/paintings/${loader[0]._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }
    const handleEdit = (event) => {
        event.preventDefault()
        const form = event.target;

        const image = form.image.value;
        const itemName = form.itemName.value;
        const sub = form.subCat.value;
        const shortDesc = form.shortDesc.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const custom = form.custom.value;
        const process = form.process.value;

        const updatedPainting = { image, itemName, sub, shortDesc, price, rating, custom, process }


        // send data to the server
        fetch(`http://localhost:5000/paintings/${loader[0]._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPainting)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    document.getElementById('closeModal').click();

                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div className='flex w-full items-center p-20 relative'>
            <div className='w-full'>
                <p className='text-6xl'>{loader[0].itemName}</p>
                <p className='text-xl'>{loader[0].shortDesc}</p>

            </div>
            <div className='w-full'>
                <img src={loader[0].image} alt="" className='w-full' />
            </div>
            {user.uid === loader[0].userId ?
                <div className="dropdown dropdown-bottom absolute right-20 top-0">
                    <div tabIndex={0} role="button" className="btn m-1"><SlOptionsVertical /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
                        <li onClick={() => document.getElementById('my_modal_3').showModal()}><a>Edit</a></li>
                        <li onClick={handleDelete}><a>Delete</a></li>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}

                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button id='closeModal' className="btn  btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <form method="dialog" className="w-[20rem] mx-auto" onSubmit={handleEdit}>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Image</span>
                                        </div>
                                        <input name="image" type="text" defaultValue={loader[0].image} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    </label>

                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Item Name</span>
                                        </div>
                                        <input name="itemName" type="text" defaultValue={loader[0].itemName} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
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
                                        <textarea name='shortDesc' defaultValue={loader[0].shortDesc} className="textarea textarea-bordered" placeholder="Bio"></textarea>
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Price</span>
                                        </div>
                                        <input name="price" defaultValue={loader[0].price} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Rating</span>
                                        </div>
                                        <input name="rating" type="text" defaultValue={loader[0].rating} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
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
                                        <input name="process" defaultValue={loader[0].process} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    </label>
                                    <br />



                                    <button className="btn text-white bg-orange-500 w-full">Submit</button>



                                </form>
                            </div>
                        </dialog>
                    </ul>
                </div> :
                <div className="tooltip dropdown dropdown-bottom absolute right-20 top-0" data-tip='you cannot edit or delete this as you are not the uploader'>
                    <div tabIndex={0} role="button" className=" btn m-1 " ><SlOptionsVertical /></div>
                </div>}


        </div>
    );
};

export default PaintingDetails;