import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const datas = useLoaderData();

  const data = datas.find((data) => data.id === Number(id));
  const { image, title, cost, description } = data;

  return (
    <div className="hero h-[70vh] bg-[#ffcffd40]">
      <div className="hero-content p-8 max-w-full gap-10 justify-between flex-col lg:flex-row">
        <div className="flex-1">
          <img
            src={image}
            className="h-[300px] md:h-[500px] object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl  font-bold">{title}</h1>
          <p className="py-6 text-lg">{description}</p>
          <p className="font-bold text-3xl pb-6">
            {cost}
            <span className="text-3xl align-sub">$</span>
          </p>
          <button className="btn bg-primary border-none hover:bg-primary">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
