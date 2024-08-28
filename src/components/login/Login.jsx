import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthProvider";
const Login = (props) => {
    const { login } = useContext(AuthContext)
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        login(email, password)
            .then(user => console.log(user))
            .catch(error => console.log(error))


    }
    return (
        <form onSubmit={handleLoginSubmit} className="w-[20rem] mx-auto">
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Email</span>
                </div>
                <input name="email" type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>


            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Password</span>
                </div>
                <input name="password" type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
            <br />
            <div className="w-full space-y-2">
                <div className="flex gap-1">
                    <div className="flex w-[49%] justify-center items-center btn ">
                        <FaGoogle />

                    </div>
                    <div className="flex w-[49%] justify-center items-center btn ">
                        <FaGithub />

                    </div>
                </div>

                <button className="btn btn-success w-full">Submit</button>

            </div>
            <p>Do not have any account? please <Link to='/signup' className="text-purple-500 underline cursor-pointer">Sign up</Link></p>

        </form>

    )
};

export default Login;
