import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center pt-12 pb-4 bg-[#ffcffd30]">
      <aside>
        <Link to="/" className="text-4xl font-logo font-bold">
          Planner
        </Link>
        <p className="font-bold">
          PH Ltd. <br />
          Providing reliable wedding plans since 2023
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
