"use client";
import React from "react";
import { Personal } from "./project2/data";

import { useState } from "react";

function Modal({ certificate, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded">
        <img src={certificate.imgUrl} alt="" className="w-85 h-85 mx-auto" />
        <div className="sm:flex justify-between m-5">
          <h1 className="text-3xl m-5">{certificate.name}</h1>
          <p className="m-5 text-left">{certificate.des}</p>
          <button onClick={onClose} className="btn btn-primary text-white">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AboutMe() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  const handleCertificateClick = (certificate) => {
    setActiveCertificate(certificate);
  };

  const handleClose = () => {
    setActiveCertificate(null);
  };

  return (
    <div>
      <div className="bg-white m-10 flex justify-center">
        <div className="grid sm:grid-cols-3">
          {Personal.map((certificate, index) => (
            <div
              className="m-5 cursor-pointer"
              key={index}
              onClick={() => handleCertificateClick(certificate)}
            >
              <img className="mt-20" src={certificate.imgUrl} alt="" />
              <h1 className="text-3xl m-5">{certificate.name}</h1>
              <p className="m-5">{certificate.des}</p>
            </div>
          ))}
        </div>
      </div>
      {activeCertificate && (
        <Modal certificate={activeCertificate} onClose={handleClose} />
      )}
    </div>
  );
}
