import { createBrowserRouter } from "react-router-dom";
import MainWebLayout from "../Layouts/MainWebLayout";
import Error from "../Layouts/Error";
import Home from "../Layouts/Home";
import ListedBooks from "../Layouts/ListedBooks";
import PagesRead from "../Layouts/PagesRead";

export const my_web = createBrowserRouter([
    {
        path: "/",
        element: <MainWebLayout></MainWebLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/listedBooks",
                element:<ListedBooks></ListedBooks>
            },
            {
                path:"/readPages",
                element:<PagesRead></PagesRead>
            }
        ]
    }
])
