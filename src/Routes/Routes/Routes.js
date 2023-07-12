import {createBrowserRouter,} from "react-router-dom";
import Main from "../../LayOut/Main";
import News from "../../Pages/News/News";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";

export const routes =  createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch("http://localhost:5000/news")
            },
            {
                path:"/news/:id",
                element:<News></News>
            },
            {
                path:"/category/:id",
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
])