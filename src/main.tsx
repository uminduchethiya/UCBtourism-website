import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./shared/layouts/Layout";
import Home from "./features/home/pages/HomePage";
import AboutUs from "./features/aboutus/pages/AboutUs";
import ContactUs from "./features/contactus/services/ContactUs";
import ToursList from "./features/tours/pages/ToursList";
import ToursSingle from "./features/tours/pages/ToursSingle";
import PlanYourTour from "./features/planner/pages/PlanYourTour";
import GalleryPage from "./features/gallery/pages/GalleryPage";
import DriversPage from "./features/drivers/pages/DriversPage";
import DestinationsList from "./features/destinations/pages/DestinationsList";
import DestinationSingle from "./features/destinations/pages/DestinationSingle";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contactus" element={<Navigate to="/contact" replace />} />
        <Route path="/tours" element={<ToursList />} />
        <Route path="/tourslist" element={<Navigate to="/tours" replace />} />
        <Route path="/tours/:id" element={<ToursSingle />} />
        <Route path="/plan-your-tour" element={<PlanYourTour />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/destinations" element={<DestinationsList />} />
        <Route path="/destinations/:slug" element={<DestinationSingle />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
