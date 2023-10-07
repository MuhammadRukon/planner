import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-[#ffcffd30] flex flex-col gap-4 justify-center items-center w-full h-screen">
      <p className="text-3xl font-bold">Ooops!</p>
      <p className="text-3xl font-bold">404 not found!</p>
      <Link className="btn bg-primary" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
