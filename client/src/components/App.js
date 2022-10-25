import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";

import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadProductPage from "./views/UploadProductPage/UploadProductPage.js";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import CartPage from './views/CartPage/CartPage';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} /> {/* 로그인한 유저만 접속 가능 */}
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} /> {/* 로그인하지 않아도 접속 가능 */}
          <Route exact path="/user/cart" component={Auth(CartPage, true)} /> {/* 로그인한 유저만 접속 가능 */}
        </Switch>
      </div>
      <Footer />
    </Suspense>
  )
}

export default App;
