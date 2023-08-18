import Blog from "./pages/blog"

const ROUTES = [
    {
        path: "",
        index: true,
        element: <Blog/>,
    },
    {
        path: "details",
        index: false,
        // element: <UserDetails/>,
    },
]

export default ROUTES