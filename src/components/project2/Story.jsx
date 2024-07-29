import Head from "next/head";
import Link from "next/link";

export default function Story() {
  return (
    <div className="m-10 grid gap-4  sm:grid-cols-2   ">
      <div className="  min-h-[100px] rounded-lg shadow ">
        <h1 className="text-8xl text-wrap">GET YOURSELF INTO THE RIGHT</h1>
      </div>
      <div className="min-h-[100px] rounded-lg shadow   ">
        <p className="p-8 text-left ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex justify-start ml-10 mb-5">
          <button className="bg-black text-white p-2 rounded-lg ">
            <Link href="#shop"> SHOP NOW</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
