import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoutes";
import WebNav from "./Layouts/WebNav";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "./Layouts/Footer";
import Main from "./mainLayout/Main";
import AdminDashboard from "./dashboardLayout/AdminDashboard";
import AdminRoutes from "./Routes/AdminRoute";

function App() {
  return (
    <div>

      <Routes>
        {/* main layout */}
        <Route path="/" element={<Main />}>
          {PublicRoutes.map(({ path, Component }, index) => (
            <Route key={index + 45} path={path} element={<Component />} />
          ))}
        </Route>

        {/* dashboard layout */}
        <Route path="/adminDashboard" element={<AdminDashboard />}>
          {AdminRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>

      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
