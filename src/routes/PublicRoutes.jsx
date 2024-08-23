import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <div>nigga</div>
            },
            {
                path: 'add-AnC',
                element: <div>niiga2</div>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: 'login',
                element: <Login></Login>
            },

        ]
    },
]);

export default router