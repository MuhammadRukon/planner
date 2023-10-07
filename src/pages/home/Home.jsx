import { useLoaderData } from "react-router-dom";
import Services from "../../components/Services";
import Banner from "../../components/banner";
import Testimonial from "../../components/Testimonial";

import GetInTouch from "../../components/GetInTouch";

const Home = () => {
  const datas = useLoaderData();
  return (
    <div>
      <Banner />
      <Services datas={datas} />
      <Testimonial />
      <GetInTouch />
    </div>
  );
};

export default Home;
