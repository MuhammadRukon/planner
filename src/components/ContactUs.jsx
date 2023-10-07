const ContactUs = () => {
  return (
    <>
      <h2 className="text-left font-bold font-primary text-4xl">Contact Us</h2>
      <form className="card-body p-0 mt-7">
        <div className="flex gap-4">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="first name"
              className="input input-bordered focus:outline-none"
              required
            />
          </div>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="last name"
              className="input input-bordered focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered focus:outline-none"
            required
          />
        </div>
        <span className="label-text">Message</span>
        <textarea
          className="textarea h-[200px] textarea-bordered resize-none focus:outline-none"
          placeholder="Write here..."
        ></textarea>
        <div className="form-control mt-6">
          <button className="btn bg-primary hover:bg-primary border-none">
            Mail
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactUs;