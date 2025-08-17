import Footer from "../Pages/Frontend/Components/Footer";
import Header from "../Pages/Frontend/Components/Header";
import Hero from "../Pages/Frontend/Components/Hero";
import Section from "../Pages/Frontend/Components/Section";
import Services from "../Pages/Frontend/Components/Services";
const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
