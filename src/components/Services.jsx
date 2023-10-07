import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import PropTypes from "prop-types";
const Services = ({ datas }) => {
  datas = useLoaderData();
  return (
    <div className="container mx-auto">
      <h2 className="text-center mt-20 font-bold font-primary text-5xl">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-24">
        {datas.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};
Services.propTypes = {
  datas: PropTypes.array,
};

export default Services;
