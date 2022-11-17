import React, { Suspense, lazy } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "./hooks/auth";

const Landing = lazy(() => import("./components/Landing/Landing"))
const Login = lazy(() => import("./components/Login/Login"))
const Register = lazy(() => import("./components/Register/Register"))
const Nav = lazy(() => import("./components/Nav/Nav"))
const Footer = lazy(() => import("./components/Footer/Footer"))
const UploadProduct = lazy(() => import("./components/UploadProduct/UploadProduct"))
const DetailProduct = lazy(() => import("./components/DetailProduct/DetailProduct"))
const Cart = lazy(() => import("./components/Cart/Cart"))
const History = lazy(() => import("./components/History/History"))

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Nav />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(Landing, null)} />
          <Route exact path="/login" component={Auth(Login, false)} />
          <Route exact path="/register" component={Auth(Register, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProduct, true)} /> {/* 로그인한 유저만 접속 가능 */}
          <Route exact path="/product/:productId" component={Auth(DetailProduct, null)} /> {/* 로그인하지 않아도 접속 가능 */}
          <Route exact path="/user/cart" component={Auth(Cart, true)} /> {/* 로그인한 유저만 접속 가능 */}
          <Route exact path="/history" component={Auth(History, true)} /> {/* 로그인한 유저만 접속 가능 */}
        </Switch>
      </div>
      <Footer />
    </Suspense>
  )
}

export default App;