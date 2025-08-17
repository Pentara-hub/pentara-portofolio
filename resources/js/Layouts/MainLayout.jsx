import Footer from "../Pages/Frontend/Components/Footer";
import Header from "../Pages/Frontend/Components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children ?? <Outlet />}
      <Footer />
    </>
  );
};

export default MainLayout;
