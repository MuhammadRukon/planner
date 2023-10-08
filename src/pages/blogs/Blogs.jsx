import { useLoaderData } from "react-router-dom";
import Blog from "../../components/Blog";

const Blogs = () => {
  const datas = useLoaderData();
  console.log(datas);
  return (
    <div className="pt-20 bg-[#ffcffd30]">
      <div className="container mx-auto space-y-20">
        {datas.map((data) => (
          <Blog key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
