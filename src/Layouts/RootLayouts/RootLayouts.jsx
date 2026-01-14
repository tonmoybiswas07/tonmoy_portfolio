import React, { useEffect, useState } from "react";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Pages/Shared/Footer/Footer";
import Loader from "@/Components/ui/Loader/Loader";

const RootLayouts = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial load / API simulation
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className=" max-w-7xl mx-auto overflow-x-hidden bg-gradient-to-b from-[#020617] to-[#020617]/90 text-white min-w-screen min-h-screen">
      <div className="">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayouts;
