import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero h-[80vh] bg-hero bg-no-repeat bg-cover">
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-6xl font-bold font-primary">
            Plan Your Wedding
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link
            to="/book"
            className="btn bg-primary  border-none hover:bg-primary"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
