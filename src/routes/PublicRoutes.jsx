import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";
import HomePage from "../components/home/HomePage";
import AddAnC from "../components/artAndCrafts/addAnC";
import ArtAndCrafts from "../components/artAndCrafts/ArtAndCrafts";
import MyAnC from "../components/artAndCrafts/MyAnC";

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
                path: 'myAnC/:id',
                element: <MyAnC></MyAnC>,
                loader: ({ params }) => fetch(`http://localhost:5000/myPaintings/${params.id}`)


            },

            {
                path: 'signup',
                element: <Signup></Signup>,
                loader: () => fetch(`http://localhost:5000/${id}`),
            },
            {
                path: 'login',
                element: <Login></Login>
            },

        ]
    },
]);

export default router