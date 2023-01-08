import Image from "next/image";
import Link from "next/link";
import { IFrameRouterContext } from "@lib/plugin-logic/plugin-context";
import { useRef, useState, useEffect, useContext } from "react";
import landingPic from "@assets/webp/landing.webp";
import logo from "@assets/png/logo.png";
import lap1 from "@assets/png/1copy.png";
import { AiTwotoneStar } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";

function Home() {
  const IframeRef = useRef(null);
  const iframeRouterContext = useContext(IFrameRouterContext);
  useEffect(() => {
    // sendMessage();
  }, []);

  return (
    <div className="w-full ">
      <section className="relative flex items-start justify-center w-full">
        <nav className="pl-[8rem] pr-[8.3rem] w-[calc(100vw_-_10rem)]  flex absolute z-20  h-[6rem] bg-transparent items-center justify-between space-x-5">
          <div className="flex items-center justify-center space-x-12">
            <Image
              style={{ objectFit: "cover" }}
              src={logo.src}
              alt="landing logo"
              width={50}
              height={50}
            />
            <ul className=" flex space-x-6">
              <button
                className="text-xs "
                onClick={() =>
                  // @ts-ignore
                  iframeRouterContext.navigateParent({
                    path: "/",
                    isIFrame: true,
                    displayedURL: "/",
                  })
                }
              >
                Home
              </button>
              <button className="text-xs">
                <Link href="/about">About</Link>
              </button>
              <button
                className="text-xs"
                onClick={() =>
                  // @ts-ignore
                  iframeRouterContext.navigateParent({
                    path: "/about",
                    isIFrame: true,
                    displayedURL: "/about",
                  })
                }
              >
                Contact
              </button>
            </ul>
          </div>
          <div className="flex space-x-8 items-center">
            <span>
              <p className="text-xs text-blue-700">Log in</p>
            </span>
            <button className="px-4 py-2 text-blue-700 border border-blue-700 text-xs font-light">
              sign up
            </button>
          </div>
        </nav>
        <main className="hero h-screen">
          <div className="relative">
            <div className="absolute  h-[calc(100vh_+_1.3rem)] w-[calc(100vw_/_1.58)]   bg-blue-900/90"></div>
            <div className="absolute  h-[calc(100vh_+_1.3rem)] w-[calc(100vw_/_2.72)] right-0  bg-white/80"></div>
            <Image
              style={{ objectFit: "cover" }}
              src={landingPic.src}
              alt="landing image"
              width={1800}
              height={700}
            />
          </div>
        </main>
        <div className="absolute z-20 top-[13rem] flex justify-between items-center min-w-[64rem]  ">
          <div className="name flex flex-col max-w-[23rem] space-y-8">
            <span className="flex justify-start items-center space-x-2">
              <span className="">
                <AiTwotoneStar />
              </span>
              <span className="">
                <p className=""> Top market company</p>
              </span>
            </span>
            <span className="">
              <p className="text-6xl text-[#FFA3A3] font-bold">
                Focus on the work that matters
              </p>
            </span>
            <span className="">
              <p className="text-white font-light text-md">
                udix is the world’s first smart workspace. We bring all your
                team’s content together while letting you use the tools you
                love.
              </p>
            </span>
            <span className="flex justify-start  items-center space-x-2">
              <span className="">
                <p className="text-xs text-[#FFA3A3]"> Read More</p>
              </span>
              <span className="">
                <IoIosArrowDropdown className="text-[#FFA3A3]" />
              </span>
            </span>
          </div>
          <div className="form flex  max-w-[45rem] bg-white">
            <div className="form pl-[3rem] pr-[2.5rem] py-[4rem] flex flex-col space-y-3">
              <div className="">
                <p className="font-extrabold text-md text-black">
                  Get started now
                </p>
              </div>
              <div className="w-[14rem]">
                <InputField place="Name" />
              </div>
              <div className="">
                <InputField place="Email" />
              </div>
              <div className="">
                <InputField place="Phone Number" />
              </div>
              <div className="">
                <InputField place="Company Name" />
              </div>
              <div className="">
                <button className="px-4 py-2 drop-shadow-lg text-white bg-blue-700 border border-blue-700 text-xs font-light">
                  sign up
                </button>
              </div>
            </div>
            <div className="relative pl-[1rem] pr-[1.5rem] flex items-center justify-center">
              <div className="h-[22rem] w-[4rem] bg-indigo-600/10"></div>
              <div className="absolute bottom-10 pr-2">
                <Image
                  style={{ objectFit: "cover" }}
                  src={lap1.src}
                  alt="landing image"
                  width={150}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen w-screen bg-white flex flex-col items-start z-30 ">
        <div className="flex items-center justify-center w-full"></div>
        <div className=""></div>
      </section>
    </div>
  );
}

export default Home;

const InputField = ({ place }: any) => {
  return (
    <input
      type="text"
      id="first_name"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={place}
      required
    />
  );
};
