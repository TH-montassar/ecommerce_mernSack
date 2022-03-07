import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Home/>} />
          
        </Routes>
      </BrowserRouter>
      ,
    </Provider>
  );
};

export default App;
