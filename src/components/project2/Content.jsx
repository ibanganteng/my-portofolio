import React from "react";
import Link from "next/link";

export default function Content() {
  return (
    <div className="m-10 sm:p-10 grid sm:grid-cols-12 grid-cols-2 gap-4 ">
      <div className="min-h-[300px] rounded-md  bg-[url('https://media.istockphoto.com/id/1720313840/photo/full-size-photo-of-carefree-overjoyed-happy-woman-dance-motion-wear-lime-yellow-flared-outfit.webp?b=1&s=170667a&w=0&k=20&c=c-IhaVzVhOSKR8aur3RsE59KScFS_7Da_ATtoZ6oJ_s=')] sm:bg-contain bg-no-repeat bg-center bg-[#9771C4] sm:col-span-7">
        <div className="flex flex-col justify-between items-start mt-8 ml-12 h-[100px]">
          <h1 className="text-white text-2xl">
            WHAT TO WEAR FOR THE WEEK AHEAD
          </h1>
          <Link className="hover:text-white hover:underline" href="#">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="min-h-[300px] rounded-md  bg-[url('https://media.istockphoto.com/id/1478936078/photo/confident-attractive-stylish-asian-woman-luxury-dress-cloth-sit-on-white-stool-smiling.webp?b=1&s=170667a&w=0&k=20&c=uMwuGORYyAvJUMaTXx1fz9wNoUCZQKS92Et4mzJ4iPY=')] sm:bg-contain bg-no-repeat bg-center bg-[#B57F61]  sm:col-span-5 ">
        <div className="flex flex-col justify-between items-start mt-8 ml-3 h-[100px]">
          <h1 className="text-white text-left text-2xl">
            ALL THE DRESS YOU NEED
          </h1>
          <Link className="hover:text-white hover:underline" href="#">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="min-h-[300px] rounded-md bg-[url('https://plus.unsplash.com/premium_photo-1713820020904-4ec446b3c714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhlfGVufDB8MHwwfHx8MA%3D%3D')] sm:bg-contain bg-no-repeat bg-center bg-[#E2E6E5] sm:col-span-5">
        <div className="flex flex-col justify-between items-start mt-8 ml-12 h-[100px]">
          <h1 className="text-black text-left text-2xl">GET ALL YOU NEED</h1>
          <Link className="hover:text-white hover:underline" href="#">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="h-50 w-45 rounded-md bg-[url('https://media.istockphoto.com/id/1497178369/photo/group-of-girls-laughing-together-in-a-studio.webp?b=1&s=170667a&w=0&k=20&c=5_a8iyrhmLbgPvNRjfgdcv7QiS0cdddEF6IhqeZM-bk=')] sm:bg-contain bg-no-repeat bg-center bg-[#A7C6D9]   sm:col-span-7">
        <div className="flex flex-col justify-between items-start mt-8 ml-12 h-[100px]">
          <h1 className="text-black text-left text-2xl">GET ALL YOU NEED</h1>
          <Link className="hover:text-white hover:underline" href="#">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
