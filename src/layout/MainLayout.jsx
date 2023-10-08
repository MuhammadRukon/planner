import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="bg-[#ffcffd30]">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
