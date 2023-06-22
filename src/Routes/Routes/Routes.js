import {createBrowserRouter,} from "react-router-dom";
import Main from "../../LayOut/Main";
import News from "../../Pages/News/News";

export const routes =  createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:"/news/:id",
                element:<News></News>
            }
        ]
    },
])