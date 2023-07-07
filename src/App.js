import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/loginAndRegister/Login";
import Forgetpassword from "./pages/loginAndRegister/ForgotPassword";
import Signup from "./pages/loginAndRegister/Signup";
import AppMain from "./appMain";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<SignIn/>} />
      <Route path="/forgot-password" element={<Forgetpassword/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="*" element={<AppMain/>} />
    </Routes>
  );
};

export default App;