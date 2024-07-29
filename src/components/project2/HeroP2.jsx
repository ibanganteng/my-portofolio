import React from "react";

export default function HeroP2() {
  return (
    <div className="grid  sm:grid-cols-12 gap-4 ">
      <div className="  sm:col-span-5">
        <img
          src="https://media.istockphoto.com/id/1300510279/photo/teenage-girl-with-skateboard-in-the-park-on-a-sunny-day.webp?b=1&s=170667a&w=0&k=20&c=A-R3sznUSVFwfgW9tTaP7v3RgpkyPvofglECchzzqCw="
          className="w-full h-full"
        />
      </div>
      <div className=" sm:col-span-7">
        <img
          src="https://images.unsplash.com/photo-1503342452485-86b7f54527ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBjbG90aGVzfGVufDB8MHwwfHx8MA%3D%3D"
          className="w-full "
        />
      </div>
    </div>
  );
}
