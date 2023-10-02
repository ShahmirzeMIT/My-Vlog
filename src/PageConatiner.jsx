import React from "react";
import { MyNavBar } from "./layout/navbar/navbar";
import Footer from "./layout/footer/footer";
import { Outlet } from "react-router-dom";

export const PageConatiner = () => {
  return (
    <div>
      <header>
        <MyNavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
     <Footer />
      </footer>
    </div>
  );
};
