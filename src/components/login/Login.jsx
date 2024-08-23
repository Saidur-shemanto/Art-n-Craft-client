import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Login = (props) => {
    return (
        <form action="" className="w-[20rem] mx-auto">
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Email</span>
                </div>
                <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
            <br />
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Password</span>
                </div>
                <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
            <div >
                <div className="flex">
                    <div className="flex items-center border-2 p-4">
                        <FaGoogle />
                        <p>Google</p>
                    </div>
                    <div className="flex items-center border-2 p-4">
                        <FaGithub />
                        <p>Github</p>
                    </div>
                </div>
                <button className="btn btn-success w-full">Submit</button>

            </div>

        </form>

    )
};

export default Login;
