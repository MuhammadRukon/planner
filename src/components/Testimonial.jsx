import { AiFillStar } from "react-icons/ai";
const Testimonial = () => {
  return (
    <>
      <h2 className="text-center mt-20 font-bold font-primary text-5xl">
        Our Happy Clients
      </h2>
      <div className="carousel w-full mt-16 rounded-lg">
        <div
          id="slide1"
          className="carousel-item relative w-full bg-[#ffcffd70] py-20"
        >
          <div className="card flex-col lg:flex-row w-[80%] md:w-[60%] mx-auto items-center gap-4 md:gap-8 card-side p-8 bg-white drop-shadow-[0px_0px_30px_rgba(153,42,163,0.3)]">
            <figure className="w-full h-full md:w-[300px]">
              <img
                src="https://i.ibb.co/QQyvTZS/client1.jpg"
                className="rounded-lg h-full"
                alt="Movie"
              />
            </figure>
            <div className=" flex-1 flex gap-4 flex-col justify-center">
              <h2 className="text-2xl font-bold">Muhammad Rukon</h2>

              <p>
                Their meticulous planning and creativity made our dream come
                true. Every detail was perfect. Highly recommended for a
                picture-perfect wedding!
              </p>
              <div className="flex gap-1 text-2xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 md:left-16 md:right-16 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle bg-white border-primary"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-white border-primary"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full bg-[#ffcffd70] py-20"
        >
          <div className="card flex-col lg:flex-row w-[80%] md:w-[60%] mx-auto items-center gap-4 md:gap-8 card-side p-8 bg-white drop-shadow-[0px_0px_30px_rgba(153,42,163,0.3)]">
            <figure className="w-full h-full  md:w-[300px]">
              <img
                src="https://i.ibb.co/bR4fWwR/client2.jpg"
                className="rounded-lg h-full"
                alt="Movie"
              />
            </figure>
            <div className=" flex-1 flex gap-4 flex-col justify-center">
              <h2 className="text-2xl font-bold">Anwar hossain</h2>

              <p>
                Can not thank them enough. They experts in this type of works.
                Every detail was perfect. Highly recommended for a
                picture-perfect wedding!
              </p>
              <div className="flex gap-1 text-2xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 md:left-16 md:right-16 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-white border-primary"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-white border-primary"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full bg-[#ffcffd70] py-20"
        >
          <div className="card flex-col lg:flex-row w-[80%] md:w-[60%] mx-auto items-center gap-4 md:gap-8 card-side p-8 bg-white drop-shadow-[0px_0px_30px_rgba(153,42,163,0.3)]">
            <figure className="w-full h-full md:w-[300px]">
              <img
                src="https://i.ibb.co/tPpbnX3/client3.jpg"
                className="rounded-lg h-full"
                alt="Movie"
              />
            </figure>
            <div className=" flex-1 flex gap-4 flex-col justify-center">
              <h2 className="text-2xl font-bold">Muhammad Rukon</h2>

              <p>
                Their meticulous planning and creativity made our dream come
                true. Every detail was perfect. Highly recommended for a
                picture-perfect wedding!
              </p>
              <div className="flex gap-1 text-2xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 md:left-16 md:right-16 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-white border-primary"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-white border-primary"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full bg-[#ffcffd70] py-20"
        >
          <div className="card flex-col lg:flex-row w-[80%] md:w-[60%] mx-auto items-center gap-4 md:gap-8 card-side p-8 bg-white drop-shadow-[0px_0px_30px_rgba(153,42,163,0.3)]">
            <figure className="w-full h-full md:w-[300px]">
              <img
                src="https://i.ibb.co/f23hvF7/client4.jpg"
                className="rounded-lg h-full"
                alt="Movie"
              />
            </figure>
            <div className=" flex-1 flex gap-4 flex-col justify-center">
              <h2 className="text-2xl font-bold">Muhammad Rukon</h2>

              <p>
                Their meticulous planning and creativity made our dream come
                true. Every detail was perfect. Highly recommended for a
                picture-perfect wedding!
              </p>
              <div className="flex gap-1 text-2xl text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 md:left-16 md:right-16 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-white border-primary"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-white border-primary"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
