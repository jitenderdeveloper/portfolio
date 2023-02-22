import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Blogger from "./Pages/Blogger";
import BlogPage from "./Pages/BlogPage";
import Home from "./Pages/Home";
import GoToUp from "./Secure/GoToUp";
import { URL_LINK } from "./Secure/Link";
import PageNotFound from "./Secure/PageNotFound";
import ScrollToTop from "./Secure/ScrollToTop";

const ContextData = createContext();

function App() {

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`${URL_LINK}/product`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((result) => {
        // console.log("result ->", result)
        setData(result.Product_List)
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <ScrollToTop />
      {/* <GoToUp /> */}
      <ContextData.Provider value={data}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blogger" element={<Blogger />} />
          <Route path="/BlogPage/:id" element={<BlogPage />} />

          <Route path="/PageNotFound" element={<PageNotFound />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </ContextData.Provider>
    </>
  );
}

export default App;
export { ContextData };
