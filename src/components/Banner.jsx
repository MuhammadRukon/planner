import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className=" bg-[#ffcffd30] pb-20">
        <div className="container mx-auto  hero h-[80vh] bg-hero bg-no-repeat bg-cover">
          <div className="hero-overlay bg-opacity-70 "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-6xl font-bold font-primary">
                Plan Your Wedding
              </h1>
              <p className="mb-5 leading-7 md:text-lg">
                With our skilled team of wedding experts, we are here to
                orchestrate your perfect day where every moment will be crafted
                to perfection. Let us transform your vision into an exquisite
                celebration that captures the true essence of your love.
              </p>
              <Link
                to="/"
                className="btn bg-primary font-primary border-none hover:bg-primary"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
