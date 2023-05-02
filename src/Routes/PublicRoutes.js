import Checkout from "../Components/Checkout/Checkout";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Conditions from "../Pages/Conditions";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import NewsMedia from "../Pages/NewsMedia";
import Privacy from "../Pages/Privacy";
<<<<<<< HEAD
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
=======
>>>>>>> f8fbd98b65bce12b91672fe21ef681434bf43fd5
import Products from "../Pages/Products";
import Refound from "../Pages/Refound";
import Services from "../Pages/Services";

const PublicRoutes = [
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/services", Component: Services },
  { path: "/products", Component: Products },
  { path: "/news-media", Component: NewsMedia },
  { path: "/blogs", Component: Blogs },
  { path: "/contact", Component: Contact },
  { path: "/checkout", Component: Checkout },
  { path: "/products/details", Component: ProductDetails },
];

export default PublicRoutes;
