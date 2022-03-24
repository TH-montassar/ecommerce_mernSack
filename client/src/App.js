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
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Categories from "./pages/categories";



const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen  h-full">
          <Header />
          <div className="mt-20">
            <div className="container mx-auto px-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/categories" element={<Categories/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/details/:slug" element={<Details/>} />
                
              </Routes>
            </div>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
