import PropTypes from "prop-types";
import { useState } from "react";
const Blog = ({ data }) => {
  const { id, blog, title } = data;
  const [isOpen, setIsOpen] = useState(false);
  const shortBlog = blog.slice(0, 400);
  return (
    <div className="hero bg-[#ffcffd70]">
      <div className="hero-content max-w-full p-20 flex-col lg:flex-row bg">
        <div>
          <h1 className="text-3xl font-semibold">Blog No: {id}</h1>
          <h1 className="text-5xl font-bold mt-8">{title}</h1>
          <p className="py-6 text-lg">
            {isOpen ? blog : shortBlog}
            <span
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-700 font-bold cursor-pointer"
            >
              {isOpen ? "" : "...read more."}
            </span>
          </p>
          <p
            onClick={() => setIsOpen(!isOpen)}
            className="text-right text-green-700 font-bold cursor-pointer"
          >
            {isOpen && "show less."}
          </p>
        </div>
      </div>
    </div>
  );
};
Blog.propTypes = {
  data: PropTypes.object,
};
export default Blog;
