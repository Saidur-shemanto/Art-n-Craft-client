import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../authentication/AuthProvider";
import { updateProfile } from "firebase/auth";

const Signup = (props) => {
    const { createUser } = useContext(AuthContext)
    const handleSignupSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const password = e.target.password.value
        const email = e.target.email.value
        const photoUrl = e.target.photo.value

        const newUser = { name, email, photoUrl }

        createUser(email, password)
            .then(user => {
                const _id = user.user.auth.currentUser.uid
                newUser._id = _id
                console.log(newUser)

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        updateProfile(user.user, {
                            displayName: name, photoURL: photoUrl
                        })

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

            })
            .catch(error => console.log(error))





    }
    return (
        <form onSubmit={handleSignupSubmit} className="w-[20rem] mx-auto">
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Name</span>
                </div>
                <input name="name" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Email</span>
                </div>
                <input name="email" type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Photo URL</span>
                </div>
                <input name="photo" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Password</span>
                </div>
                <input name="password" type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
            <br />



            <button className="btn btn-success w-full">Submit</button>

            <p className="mt-2">Already have an account? please <Link to='/login' className=" text-purple-500 underline cursor-pointer">Login</Link></p>


        </form>
    )
};

export default Signup;
