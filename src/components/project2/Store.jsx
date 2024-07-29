import React from "react";

function Store() {
  return (
    <div className="m-10 p-10 ">
      <h1 className="sm:text-5xl">BEST SELLER</h1>
      <div className="grid sm:grid-cols-2   ">
        <div className="mt-4  grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-1 sm:max-h-9">
          <button className=" border-4 text-black sm:p-2 sm:mr-2 block">
            CLOTHING
          </button>
          <button className="border-4 text-black sm:p-2 sm:mr-4 ml-2 ">
            DRESS
          </button>
          <button className="border-4 text-black sm:p-2 sm:mr-4 ml-2">
            JEANS
          </button>
          <button className="border-4 text-black sm:p-2 sm:mr-4 ml-2">
            OFFICESS
          </button>
        </div>
        <div>
          <p className="text-left sm:m-0 m-4">
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

      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mt-8 " id="shop">
        <div className="max-w-65 max-h-65 sm:mt-0 mt-8 ">
          <img
            src="https://dynamic.zacdn.com/TdOQlH1hH2_L55jEgCjf8QyKg-M=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/adidas-1374-6358883-2.jpg"
            alt=""
            className="w-full h-full rounded-lg bg-red-300"
          />
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl">ADIDAS</h1>
              <h1 className="text-2xl">$80,25</h1>
            </div>
            <p>jacquard Jersey Dress</p>
          </div>
        </div>
        <div className="max-w-65 max-h-65 sm:mt-0 mt-8">
          <img
            src="https://dynamic.zacdn.com/id43qQJjMl48vpt_0QeLMbyjp7U=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/adidas-5624-9044044-2.jpg"
            alt=""
            className="w-full h-full rounded-lg bg-red-300"
          />
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl">ADIDAS</h1>
              <h1 className="text-2xl">$70,25</h1>
            </div>
            <p>Sport Wear</p>
          </div>
        </div>
        <div className="max-w-65 max-h-65 sm:mt-0 mt-10">
          <img
            src="https://dynamic.zacdn.com/7HKAGCHAU0bS1bxmgmLY59haszc=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/jacqueline-de-yong-7211-3348644-2.jpg"
            alt=""
            className="w-full h-full rounded-lg bg-red-300"
          />
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl">JACQUELINE DEYOUNG</h1>
              <h1 className="text-2xl">$90,25</h1>
            </div>
            <p>Divya Short Sleves Dress</p>
          </div>
        </div>
        <div className="max-w-65 max-h-65 sm:mt-0 mt-10">
          <img
            src="https://dynamic.zacdn.com/MwzDPwBQ_Bf_1GWuN9ilkNKgkr8=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/trendyol-8189-8996344-2.jpg"
            alt=""
            className="w-full h-full rounded-lg bg-red-300"
          />
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl">TRENDYOL</h1>
              <h1 className="text-2xl">$100,25</h1>
            </div>
            <p>Shirred Midi Dress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
