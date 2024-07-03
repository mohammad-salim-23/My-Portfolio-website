import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About/About";
import Home from "../pages/Home";
import ProjectDetails from "../component/ProjectDetails";

export const router = createBrowserRouter([
    {
    path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
            ,

            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/project-details/:id",
                element:<ProjectDetails></ProjectDetails>
            }
        ]
    }
    
])