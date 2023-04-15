import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import NewsMedia from "../Pages/NewsMedia";
import Products from "../Pages/Products";
import Services from "../Pages/Services";

const PublicRoutes =
    [
        { path: "/", Component: Home },
        { path: "/about", Component: About },
        { path: "/services", Component: Services },
        { path: "/products", Component: Products },
        { path: "/news-media", Component: NewsMedia },
        { path: "/blogs", Component: Blogs },
        { path: "/contact", Component: Contact },
    ];

export default PublicRoutes;
