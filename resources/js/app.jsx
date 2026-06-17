import { BrowserRouter, Routes, Route, Navigate, useOutletContext } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Frontend/Home";
import CaseStudyPage from "./Pages/Frontend/case-study/CaseStudyPage";
import ScrollToTop from "./ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomeWithContext() {
  const ctx = useOutletContext() || {};
  return <Home onContact={ctx.onContact} onModeSelect={ctx.onModeSelect} activeMode={ctx.activeMode} />;
}

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        toastClassName="!rounded-xl !bg-brand !border !border-white/10 !text-white !font-sans !text-sm"
        progressClassName="!bg-white"
      />
      <ScrollToTop offset={80} />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeWithContext />} />
          <Route path="/case-study/:id" element={<CaseStudyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
