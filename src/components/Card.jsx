import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  const { id, image, description, title } = data;
  return (
    <div className="card border rounded-md">
      <figure className="w-full h-[250px] pt-4 px-4 ">
        <img
          src={image}
          alt="Shoes"
          className="w-full h-full object-cover rounded-md"
        />
      </figure>
      <div className="card-body pb-8 items-center text-center">
        <h2 className="card-title font-primary text-2xl">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link
            to={`/details/${id}`}
            className="btn mt-2 btn-primary border-none bg-primary hover:bg-primary text-black"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  data: PropTypes.object,
};
export default Card;
