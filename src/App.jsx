import "./styles/output.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const WorkFlow = lazy(() => import("./components/WorkFlow"));
const NotFound = lazy(
  () => import("./components/404-error_component/404-error"),
);

// Simple full-page loader shown between route transitions
function PageLoader() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div
        className="w-10 h-10 rounded-full border-2 border-[#00ffce]/30
                      border-t-[#00ffce] animate-spin"
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Toaster position="top-right" /> {/* ✅ Required for lazy routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workflow" element={<WorkFlow />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
