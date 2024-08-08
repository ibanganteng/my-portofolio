import React, { useState } from "react";
import { dresses, jeans, officess, cloting } from "./data";

function Store() {
  const [selectedCategory, setSelectedCategory] = useState("cloting");

  function handleDressIsOpen() {
    setSelectedCategory("dress");
  }

  function handleJeansIsOpen() {
    setSelectedCategory("jeans");
  }
  function handleOfficeIsOpen() {
    setSelectedCategory("office");
  }
  function handleClotingIsOpen() {
    setSelectedCategory("cloting");
  }

  return (
    <div className="m-10 p-10" id="shop">
      <h1 className="sm:text-5xl">BEST SELLER</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 sm:max-h-9 gap-4 mb-10 ">
          <button
            onClick={handleClotingIsOpen}
            className="border-4 text-black sm:p-2 sm:mr-2 block"
          >
            CLOTHING
          </button>
          <button
            onClick={handleDressIsOpen}
            className="border-4 text-black sm:p-2 sm:mr-4 ml-2"
          >
            DRESS
          </button>
          <button
            onClick={handleJeansIsOpen}
            className="border-4 text-black sm:p-2 sm:mr-4 ml-2"
          >
            JEANS
          </button>
          <button
            onClick={handleOfficeIsOpen}
            className="border-4 text-black sm:p-2 sm:mr-4 ml-2"
          >
            OFFICESS
          </button>
        </div>
        <div>
          <p className="text-left sm:m-0 sm:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            euismod, magna a molestie consectetur, nibh elit cursus magna, vel
            fermentum libero justo ac risus. Quisque purus metus, sodales at
            vestibulum vel, congue sit amet lacus. Sed nec dictum eros. Fusce ac
            nibh eget libero sollicitudin faucibus. Mauris vitae ornare risus.
            Mauris rhoncus, sapien non consequat convallis, dui diam volutpat
            sem, quis luctus elit nunc non augue. Duis sed justo in felis congue
            rhoncus. Etiam sed hendrerit magna, nec imperdiet est. Praesent id
            enim vitae odio blandit dapibus sit amet et dolor."
          </p>
        </div>
      </div>
      <div>
        {selectedCategory == "cloting" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {cloting.map((clot, index) => (
              <div key={index}>
                <div className="max-w-65 max-h-65 sm:mt-0 mt-8">
                  <img
                    src={clot.imgUrl}
                    alt=""
                    className="w-full h-full rounded-lg bg-red-300"
                  />
                  <div>
                    <div className="flex justify-between m-5">
                      <h1 className="sm:text-3xl">{clot.name}</h1>
                      <h1 className="sm:text-3xl">{clot.price}</h1>
                    </div>
                    <p className="m-5">{clot.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        {selectedCategory === "dress" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {dresses.map((dress, index) => (
              <div key={index}>
                <div className="max-w-65 max-h-65 sm:mt-0 mt-8">
                  <img
                    src={dress.imgUrl}
                    alt=""
                    className="w-full h-full rounded-lg bg-red-300"
                  />
                  <div>
                    <div className="flex justify-between m-5">
                      <h1 className="sm:text-4xl">{dress.name}</h1>
                      <h1 className="sm:text-4xl">{dress.price}</h1>
                    </div>
                    <p className="m-5">{dress.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedCategory === "jeans" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {jeans.map((jean, index) => (
              <div key={index}>
                <div className="max-w-65 max-h-65 sm:mt-0 mt-8">
                  <img
                    src={jean.imgUrl}
                    alt=""
                    className="w-full h-full rounded-lg bg-red-300"
                  />
                  <div>
                    <div className="flex justify-between m-5">
                      <h1 className="sm:text-3xl">{jean.name}</h1>
                      <h1 className="sm:text-2xl">{jean.price}</h1>
                    </div>
                    <p className="m-5">{jean.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        {selectedCategory === "office" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
            {officess.map((office, index) => (
              <div key={index}>
                <div className="max-w-65 max-h-65 sm:mt-0 mt-8">
                  <img
                    src={office.imgUrl}
                    alt=""
                    className="w-full h-full rounded-lg bg-red-300 "
                  />
                  <div>
                    <div className="flex justify-between m-5">
                      <h1 className="sm:text-4xl">{office.name}</h1>
                      <h1 className="sm:text-4xl">{office.price}</h1>
                    </div>
                    <p className="m-5">{office.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Store;
