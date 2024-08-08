import React from "react";
import { Personal } from "./project2/data";

export default function AboutMe() {
  return (
    <div>
      <div className="bg-white m-10 flex justify-center">
        <div className="grid grid-cols-1 ">
          {Personal.map((certificate, index) => (
            <div key={index}>
              <img className="mt-20" src={certificate.imgUrl} alt="" />
              <h1 className="text-3xl m-5">{certificate.name}</h1>
              <p className="m-5">{certificate.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
