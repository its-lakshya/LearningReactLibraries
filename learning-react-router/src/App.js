import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Error from "./Components/Error";
import Products from "./Components/Products";
import FeaturedProducts from "./Components/FeaturedProducts";
import NewProducts from "./Components/NewProducts";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";
import Admin from "./Components/Admin";
import Profile from "./Components/Profile";

const LazyAbout = React.lazy(() => import("./Components/About"));

// index routing routes the child route at parent level

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="about"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="profile" element={<Profile/> }/>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
