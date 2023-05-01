import React from "react";
import "./App.scss";
import { Header } from "./Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { Footer } from "./Footer";
import { Route, Routes } from "react-router-dom";
import { SecondPage } from "./pages/SecondPage/SecondPage";
import { SignIn } from "./pages/SigIn/SigIn";
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="second" element={<SecondPage />} />
        <Route path="signin" element={<SignIn />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
