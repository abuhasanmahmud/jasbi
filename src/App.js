import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";

import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Checkout from "./pages/Checkout/Checkout";
import { useSelector } from "react-redux";
import ConfirmOrderPage from "./components/Order/ConfirmOrderPage/ConfirmOrderPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import Category from "./pages/Category/Category";
import CheckOutSuccess from "./components/CheckOutSuccess/CheckOutSuccess";
import StripChekout from "./pages/StripeCheckout/StripCheckout";
import ForgetPassword from "./pages/Account/forgetPassword";
import ResetPassword from "./pages/Account/resetPassword";
import Header2 from "./components/home/Header/Header2";
import Company from "./pages/Company/Company";
import Home2 from "./pages/Home/Home2";
import Team from "./pages/Team/Team";
import Features from "./pages/Features/Features";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* <Header2 /> */}
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="/stripe-checkout" element={<StripChekout />}></Route> */}
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        {/* {/* <Route path="/offer" element={<Offer />}></Route> */}
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/confirm-order" element={<ConfirmOrderPage />}></Route>
        <Route path="/user-profile" element={<UserProfile />}></Route>
        <Route path="/category" element={<Category />}></Route>

        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/company"
          element={
            <PrivateRoute>
              <Company />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/team"
          element={
            <PrivateRoute>
              <Team />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/features"
          element={
            <PrivateRoute>
              <Features />
            </PrivateRoute>
          }
        ></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>

      <Route path="/signin" element={<SignIn />}></Route>
      {/* <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
      <Route path="/resetpassword/:token" element={<ResetPassword />}></Route> */}
    </Route>
  )
);

function App() {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} user={userInfo} />
      <ToastContainer />
    </div>
  );
}

export default App;
