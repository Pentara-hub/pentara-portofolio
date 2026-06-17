import { useState } from "react";
import Footer from "../Pages/Frontend/Components/Footer";
import Header from "../Pages/Frontend/Components/Header";
import ContactModal from "../Pages/Frontend/Components/ContactModal";
import ScrollFab from "../Pages/Frontend/Components/ScrollFab";
import CursorGlow from "../components/CursorGlow";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState("choose");
  const [activeMode, setActiveMode] = useState(null);

  const openContact = () => { setModalStep("choose"); setModalOpen(true); };

  return (
    <>
      <CursorGlow />
      <div className="relative z-[2]">
        <Header onContact={openContact} />
        <Outlet context={{ onContact: openContact, onModeSelect: setActiveMode, activeMode }} />
        <Footer />
      </div>
      <ScrollFab onContact={openContact} />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} step={modalStep} setStep={setModalStep} />
    </>
  );
};

export default MainLayout;
