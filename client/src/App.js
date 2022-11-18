import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { BASE_PATH, USER_PATH, PRODUCT_PATH } from "./constants/path";

const LandingPage = lazy(() => import("./pages/LandingPage"))
const LoginPage = lazy(() => import("./pages/LoginPage"))
const RegisterPage = lazy(() => import("./pages/RegisterPage"))
const NavPage = lazy(() => import("./pages/NavPage"))
const FooterPage = lazy(() => import("./pages/FooterPage"))
const UploadProductPage = lazy(() => import("./pages/UploadProductPage"))
const DetailProductPage = lazy(() => import("./pages/DetailProductPage"))
const CartPage = lazy(() => import("./pages/CartPage"))
const HistoryPage = lazy(() => import("./pages/HistoryPage"))

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavPage />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route exact path={BASE_PATH} element={<LandingPage />} />
          <Route exact path={USER_PATH.LOGIN} element={<LoginPage />} />
          <Route exact path={USER_PATH.REGISTER} element={<RegisterPage />} />
          <Route exact path={PRODUCT_PATH.UPLOAD} element={<UploadProductPage />} /> {/* 로그인한 유저만 접속 가능 */}
          <Route exact path={PRODUCT_PATH.PRODUCTID} element={<DetailProductPage />} /> {/* 로그인하지 않아도 접속 가능 */}
          <Route exact path={USER_PATH.CART} element={<CartPage />} /> {/* 로그인한 유저만 접속 가능 */}
          <Route exact path={USER_PATH.HISTORY} element={<HistoryPage />} /> {/* 로그인한 유저만 접속 가능 */}
        </Routes>
      </div>
      <FooterPage />
    </Suspense>
  )
}

export default App;