import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";
import HomePage from "../components/home/HomePage";
import AddAnC from "../components/artAndCrafts/addAnC";
import ArtAndCrafts from "../components/artAndCrafts/ArtAndCrafts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: 'add-anc',
                element: <AddAnC></AddAnC>
            },
            {
                path: 'art-and-crafts',
                element: <ArtAndCrafts></ArtAndCrafts>,
                loader: () => fetch('http://localhost:5000/paintings')

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