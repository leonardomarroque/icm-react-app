import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { MainContainer } from "./ui.css";

export default function Layout() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
}
