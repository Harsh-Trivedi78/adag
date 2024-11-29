// App.js
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/NavbarElement";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Profile from './pages/profile';
import Login from "./pages/login";
import ChangePassword from "./pages/changePassword"; // Ensure the import path is correct
import YourServices from "./pages/YourServices";
import Layout from './pages/Layout';
import Work from './pages/Work';
import CreateBooks from "./pages/create";
import { SnackbarProvider } from 'notistack';
import EditBook from "./pages/edit";
import ShowBook from './pages/show';
import DeleteBook from './pages/delete';
import Services from './pages/Services';
import { UserProvider } from './components/Navbar/UserContext'; // Ensure the import path is correct
import PaymentGateway from "./pages/Payment";
import WebDevelopmentSection from "./pages/WebDevelopmentSection";
import CookieBanner from "./pages/CookieBanner";
import CreativeAdvertisingSection from "./pages/CreativeAgency";
import DigitalMarketingSection from "./pages/Dm";
import AdvertisingServicesSection from "./pages/AdvertisingServicesSection";
import { gapi } from 'gapi-script';
import Chatbot from "./pages/chatbot";
import PrivacyPolicy from "./pages/privacy";
import Branding from "./pages/Branding";
import ConsultancyComponent from "./pages/ConsultancyComponent";
import DesignServicesComponent from "./pages/DSC";


const clientId = "316197304295-rpp5joramj7pbku5oht3m56t0e41uq6s.apps.googleusercontent.com";

// Function to initialize Google API
const initializeGapi = () => {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      clientId: clientId,
      scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid' // Include the necessary scopes
    });
  });
};

function App() {
  useEffect(() => {
    initializeGapi();
  }, []); // Runs once on component mount

  return (
    <SnackbarProvider maxSnack={3}>
      <UserProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/home" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/profile" element={<Layout><Profile /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/YourServices" element={<YourServices />} />
            <Route path="/Work" element={<Layout><Work /></Layout>} />
            <Route path="/createbooks" element={<CreateBooks />} />
            <Route path='/books/edit/:id' element={<EditBook />} />
            <Route path='/books/details/:id' element={<ShowBook />} />
            <Route path='/books/delete/:id' element={<DeleteBook />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/PaymentGateway' element={<PaymentGateway />} />
            <Route path='/WebDevelopmentSection' element={<WebDevelopmentSection />} />
            <Route path='/CreativeAdvertisingSection' element={<CreativeAdvertisingSection />} />
            <Route path='/DigitalMarketingSection' element={<DigitalMarketingSection />} />
            <Route path='/AdvertisingServicesSection' element={<AdvertisingServicesSection />} />
            <Route path='/Chatbot' element={<Chatbot />} />
            <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
            <Route path='/Branding' element={<Branding />} />
            <Route path='/ConsultancyComponent' element={<ConsultancyComponent />} />
            <Route path='/DesignServicesComponent' element={<DesignServicesComponent />} />
          
          </Routes>
          <CookieBanner />
        </Router>
      </UserProvider>
    </SnackbarProvider>
  );
}

export default App;
