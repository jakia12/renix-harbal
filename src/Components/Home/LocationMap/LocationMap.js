import React from "react";

const LocationMap = () => {
  return (
    <div className="flex justify-center items-center">
      <iframe
        title="Location of kaliganj"
        className="w-full "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49054.68074050157!2d90.54448909689107!3d23.960052577111465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755d24f8c3ee9b1%3A0xe9598bac4cdb4452!2sKaliganj%20Upazila!5e0!3m2!1sen!2sbd!4v1681713632702!5m2!1sen!2sbd"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default LocationMap;
