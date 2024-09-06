import React, { useState, lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound';
import AppLoader from './loader/AppLoader';
import ReactPixel from 'react-facebook-pixel';

const LazyLayout = lazy(() => import('../src/layout/Layout'));
const LazyHomePage = lazy(() => import('../src/pages/Homepage'));
// const LazyLogin = lazy(() => import('./pages/Login'));
// const LazyRegister = lazy(() => import('./pages/Register'));
const LazyProductDetails = lazy(() => import('./pages/ProductDetails'));
const LazyProductCardList = lazy(() => import('./pages/ProductList'));
const LazyCart = lazy(() => import('./pages/Cart'));
const LazyAboutUs = lazy(() => import('./pages/AboutUs'));
const LazyContactUs = lazy(() => import('./pages/ContactUs'));
const LazyPolicies = lazy(() => import('./pages/Policies'));
const LazySuccess = lazy(() => import('./pages/PaymentSuccessful'));
const LazyFail = lazy(() => import('./pages/PaymentFailed'));
const LazyOccasionWear = lazy(() => import('./pages/OccasionWear'));
const LazyJewelry = lazy(() => import('./pages/Jewelry'));
const LazyShawls= lazy(() => import('./pages/Shawls'));
const LazyShawlsDetails= lazy(() => import('./pages/ShawlDetails'));

function App() {
  const [toggle, setToggle] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    const pixelId = '360127443821372';
    ReactPixel.init(pixelId);
    ReactPixel.pageView();
  }, [location]);

  return (
      <>
      <Suspense fallback={<AppLoader />}>
        <LazyLayout toggle={toggle} setToggle={setToggle}>
          <Routes>
            <Route path="/" element={<LazyHomePage />} />
            {/* <Route path="/login" element={<LazyLogin />} />
            <Route path="/register" element={<LazyRegister />} /> */}
            <Route path="/products" element={<LazyProductCardList />} />
            <Route path="/products/:id" element={<LazyProductDetails />} />
            <Route path="/cart" element={<LazyCart />} />
            <Route path="/contact-us" element={<LazyContactUs />} />
            <Route path="/about-us" element={<LazyAboutUs />} />
            <Route path="/policies" element={<LazyPolicies />} />
            <Route path="/payment-success" element={<LazySuccess />} />
            <Route path="/payment-fail" element={<LazyFail />} />
            <Route path="/occasion-wear" element={<LazyOccasionWear />} />
            <Route path="/jewelry" element={<LazyJewelry />} />
            <Route path="/shawls" element={<LazyShawls />} />
            <Route path="/shawls-details/:id" element={<LazyShawlsDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LazyLayout>
      </Suspense>
      <ToastContainer /> 
      </>
  );
}

export default App;