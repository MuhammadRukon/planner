import ContactUs from "./ContactUs";
import GoogleMap from "./GoogleMap";

const GetInTouch = () => {
  return (
    <div>
      <h2 className="text-center mt-20 font-bold font-primary text-5xl">
        Get In Touch
      </h2>
      <div className="flex justify-between mt-16 gap-6">
        <div className="flex-1">
          <GoogleMap />
        </div>
        <div className="flex-1">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
