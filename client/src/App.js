import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { BASE_PATH, USER_PATH, PRODUCT_PATH } from "./constants/path";

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

import './reset.css'
import './App.css'

const LandingPage = lazy(() => import("./pages/LandingPage"))
const Navbar = lazy(() => import("./components/Navbar"))
const LoginPage = lazy(() => import("./pages/LoginPage"))
const RegisterPage = lazy(() => import("./pages/RegisterPage"))
const ListProductPage = lazy(() => import("./pages/ListProductPage"))
const FooterPage = lazy(() => import("./pages/FooterPage"))
// const UploadProductPage = lazy(() => import("./pages/UploadProductPage"))
const DetailProductPage = lazy(() => import("./pages/DetailProductPage"))
// const CartPage = lazy(() => import("./pages/CartPage"))
// const HistoryPage = lazy(() => import("./pages/HistoryPage"))

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Navbar />
      <Routes>

        <Route exact path={BASE_PATH} element={<LandingPage />} />
        <Route exact path={USER_PATH.LOGIN} element={<LoginPage />} />
        <Route exact path={USER_PATH.REGISTER} element={<RegisterPage />} />
        {/*
        <Route exact path={PRODUCT_PATH.UPLOAD} element={<UploadProductPage />} />
        <Route exact path={USER_PATH.CART} element={<CartPage />} />
        <Route exact path={USER_PATH.HISTORY} element={<HistoryPage />} />
      */}

        <Route exact path={PRODUCT_PATH.PRODUCTLIST} element={<ListProductPage />} />
        <Route exact path={PRODUCT_PATH.DETAIL} element={<DetailProductPage />} />

      </Routes>
      <FooterPage />
    </Suspense>
  )
}

export default App;