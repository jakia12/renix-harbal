import About from "../Pages/About";
import Message from "../Pages/AboutUs/Message";
import Mission from "../Pages/AboutUs/Mission";
import Profile from "../Pages/AboutUs/Profile";
import Responsibility from "../Pages/AboutUs/Responsibility";
import Blogs from "../Pages/Blogs";
import Conditions from "../Pages/Conditions";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import NewsMedia from "../Pages/NewsMedia";
import Privacy from "../Pages/Privacy";
import Products from "../Pages/Products";
import Refound from "../Pages/Refound";
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
        { path: "/privacy-policy", Component: Privacy},
        { path: "/refound-return", Component: Refound},
        { path: "/terms-conditions", Component: Conditions},
        { path: "/company-profile", Component: Profile},
        { path: "/mission-vission", Component: Mission},
        { path: "/corporate-social-responsibility", Component: Responsibility},
        { path: "/message-from-managing-director", Component: Message},
    ];

export default PublicRoutes;
