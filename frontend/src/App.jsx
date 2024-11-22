import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'
import ContactUs from './components/contactus/ContactUs';
import MobileApp from './components/MobileApp/MobileApp';
import EligibilityCriteria from './components/Supplier/EligibilityCriteria';
import SupplierRegistration from './components/Supplier/SupplierRegistration';
import TermsConditions from './components/Supplier/TermsConditions';
import SuccessConfirmation from './components/Supplier/SuccessConfirmation';
import BecomeSupplierOverview from './components/Supplier/BecomeSupplierOverview';
import PrivacyPolicy from './components/Terms and conditions/PrivacyPolicy';
import Delivery from './components/Delivery/Delivery';
import AboutUs from './components/AboutUs/AboutUs';
const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/order' element={<PlaceOrder />}/>
          <Route path='/myorders' element={<MyOrders />}/>
          <Route path='/verify' element={<Verify />}/>
          <Route path="/contact" element={<ContactUs />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/supplier" element={<BecomeSupplierOverview />} />
        <Route path="/supplier/eligibility" element={<EligibilityCriteria />} />
        <Route path="/supplier/registration" element={<SupplierRegistration />} />
        <Route path="/supplier/terms" element={<TermsConditions />} />
        <Route path="/supplier/success" element={<SuccessConfirmation />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
