import Profile from '../Pages/AboutUs/Profile';
import Mission from '../Pages/AboutUs/Mission';
import Responsibility from '../Pages/AboutUs/Responsibility';
import Message from '../Pages/AboutUs/Message';


export const aboutRoutes = [
    { path: "company-profile", Component: Profile },
    { path: "mission-vission", Component: Mission },
    { path: "corporate-social-responsibility", Component: Responsibility },
    { path: "message-from-managing-director", Component: Message },
]