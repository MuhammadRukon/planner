const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.909495310727!2d90.3736264307496!3d23.748186249822037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b37ef4d09d%3A0x62503a7ef71da410!2sRabindra%20Sarobar!5e0!3m2!1sen!2sbd!4v1696700087473!5m2!1sen!2sbd"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Responsive Google Map"
      className="w-full h-[400px] md:h-[500px] lg:h-full bg-[#ffcffd60] rounded-lg"
    ></iframe>
  );
};

export default GoogleMap;
