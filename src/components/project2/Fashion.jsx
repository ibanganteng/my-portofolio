import React from "react";
import Link from "next/link";

export default function Fashion() {
  return (
    <div>
      <div className="md:flex justify-between m-20">
        <h1 className="text-5xl underline mb-5">Couple Fashion</h1>
        <Link href="#shop" className="text-2xl underline mt-8">
          ShopNow
        </Link>
      </div>
      <div className="grid md:grid-cols-12 m-10 gap-8">
        <div className="relative min-h-[100px] bg-blue-400 md:col-span-8">
          <img
            src="https://media.istockphoto.com/id/1307330502/photo/rich-and-happy-people-on-the-street.webp?b=1&s=170667a&w=0&k=20&c=UqU16oDpnsbnqUmTI8JqB6ZoM0XhUd2LjSXHOQ6PAtI="
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-10 bg-opacity-50 bg-white">
            <h1 className="text-2xl">Back From Office</h1>
            <p>New Arrival</p>
          </div>
        </div>
        <div className="min-h-[100px] bg-pink-100 md:col-span-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1699547216130-8db0556e6369?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvdXBsZSUyMHN0eWxlfGVufDB8MXwwfHx8MA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="relative bottom-0 left-0 p-10 bg-opacity-50 bg-white">
            <h1 className="text-2xl">Get Lost</h1>
            <p>New Arrival</p>
          </div>
        </div>
        <div className="min-h-[100px] bg-blue-400 md:col-span-6">
          <img
            src="https://media.istockphoto.com/id/994087524/photo/a-couple-of-young-man-and-woman-dancing-hip-hop-at-studio.webp?b=1&s=170667a&w=0&k=20&c=Um7R414lZOlhVATsPI0kRjaMrvc6OvHDAv6jYVQSDJ4="
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-h-[100px] bg-pink-200 md:col-span-6">
          <img
            src="https://media.istockphoto.com/id/1213297871/photo/young-couple-walking-in-the-street.webp?b=1&s=170667a&w=0&k=20&c=P3jDYNskUGVTX4uy_YM_tKF6jDjxuMLz6BczrkfXYak="
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
