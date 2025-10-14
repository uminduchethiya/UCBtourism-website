import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './shared/layouts/Layout'
import Home from './features/home/pages/HomePage'
import AboutUs from './features/aboutus/pages/AboutUs'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ContactUs from './features/contactus/services/ContactUs'
import ToursList from './features/tours/pages/ToursList'
import ToursSingle from './features/tours/pages/ToursSingle'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Layout>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/contactus" element={<ContactUs/>}/>
    <Route path="/tourslist" element={<ToursList/>}/>
     <Route path="/tours/:id" element={<ToursSingle />} />
    </Routes>
  </Layout>
  </BrowserRouter>
)
