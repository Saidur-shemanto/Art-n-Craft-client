import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";
import HomePage from "../components/home/HomePage";
import AddAnC from "../components/artAndCrafts/addAnC";
import ArtAndCrafts from "../components/artAndCrafts/ArtAndCrafts";
import MyAnC from "../components/artAndCrafts/MyAnC";
import PrivateRoutes from "./PrivateRoutes";
import PaintingDetails from "../components/artAndCrafts/PaintingDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
                loader: () => fetch('https://an-c-server-md-saidur-rahman-shemantos-projects.vercel.app/paintings')
            },
            {
                path: 'add-anc',
                element: <PrivateRoutes><AddAnC></AddAnC></PrivateRoutes>
            },
            {
                path: 'art-and-crafts',
                element: <ArtAndCrafts></ArtAndCrafts>,
                loader: () => fetch('https://an-c-server-md-saidur-rahman-shemantos-projects.vercel.app/paintings')

            },
            {
                path: 'myAnC/:id',
                element: <PrivateRoutes><MyAnC></MyAnC></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://an-c-server-md-saidur-rahman-shemantos-projects.vercel.app/myPaintings/${params.id}`)


            },
            {
                path: 'art-and-crafts/:id',
                element: <PrivateRoutes><PaintingDetails></PaintingDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://an-c-server-md-saidur-rahman-shemantos-projects.vercel.app/paintings/${params.id}`)


            },

            {
                path: 'signup',
                element: <Signup></Signup>,

            },
            {
                path: 'login',
                element: <Login></Login>
            },

        ]
    },
]);

export default router