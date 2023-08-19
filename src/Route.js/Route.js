import { Route, Routes, Navigate } from "react-router-dom";
import Store from "../Components/Store";
import About from "../Pages/About";
import Headpage from "../Pages/Headpage";
import React, { useContext } from "react";
import ContactUs from "../Pages/ContactUs";
import LoginForm from "../Pages/LoginForm";
import AuthContext from "../LoginStore/Auth-context";
import Store2 from "../Components/Store2";
import Store3 from "../Components/Store3";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermCondition from "../Pages/Term&Condition";

function Routee() {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/store"
          element={
            authCtx.isLoggedIn ? <Store /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/store/Women"
          element={
            authCtx.isLoggedIn ? <Store2 /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/store/electronics"
          element={
            authCtx.isLoggedIn ? <Store3 /> : <Navigate to="/login" replace />
          }
        />

        <Route path="/" element={<Headpage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}></Route>
        <Route path="/term&condition" element={<TermCondition/>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default Routee;
