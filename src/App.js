import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoutes";
import WebNav from "./Layouts/WebNav";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <WebNav />
      <Routes>
        {PublicRoutes.map(({ path, Component }, index) => (
          <Route key={index + 45} path={path} element={<Component />} />
        ))}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
