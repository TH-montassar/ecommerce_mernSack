import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Search from "./pages/search";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen  h-full">
          <Header />
          <div className="mt-[80px]">
         
           <div className="container max-w-[73rem] mx-auto">
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
           </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
