import React, { useState } from "react";
import Loader from "../component/Loader";


const Personalizing = () => {

  return (
    <>
      <div className="w-full flex items-center flex-col">
        <div className="h-screen w-screen bg-white flex items-center justify-center flex-col">
          <h1 className="text-5xl">
            Thank you <span className="text-color">Mrudul</span>, i&#8217;m <span className="text-color">Personalizing</span> the experience for you,
          </h1>
          <h1 className="text-5xl mt-6">Please Wait...</h1>
          <Loader />
        </div>
      </div>
    </>
  );
};

export default Personalizing;
