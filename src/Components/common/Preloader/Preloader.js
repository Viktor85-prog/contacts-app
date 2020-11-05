import React from "react";

import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
  return (
    <div className="preloader">
      <img src={preloader} alt="загрузка" />
    </div>
  );
};

export default Preloader;
