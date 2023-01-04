import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import landingPic from "@assets/webp/landing.webp";
import logo from "@assets/png/logo.png";
import pic1 from "@assets/png/1.png";
import pic2 from "@assets/png/2.png";
import pic3 from "@assets/png/3.png";
import pic4 from "@assets/png/4.png";
import pic5 from "@assets/png/5.png";

function Home() {
  const IframeRef = useRef(null);

  useEffect(() => {
    // sendMessage();
  }, []);

  return (
    <div className="w-full ">
      <section className="relative flex items-start justify-center w-full">
        <nav className=" w-[calc(100vw_-_10rem)]  flex absolute z-20  h-[6rem] bg-transparent items-center justify-between space-x-5">
          <div className="flex items-center justify-center space-x-12">
            <Image
              style={{ objectFit: "cover" }}
              src={logo.src}
              alt="landing logo"
              width={100}
              height={50}
            />
            <ul className=" flex space-x-6">
              <li className="text-xs">Home</li>
              <li className="text-xs">About</li>
              <li className="text-xs">Contact</li>
            </ul>
          </div>
          <div className="flex space-x-8 items-center">
            <span>
              <p className="text-xs">Log in</p>
            </span>
            <button className="px-3 py-2 bg-[#E32764] rounded-lg text-xs font-light">
              Become an agent
            </button>
          </div>
        </nav>
        <main className="hero h-screen">
          <div className="relative">
            <div className="absolute w-screen  h-[calc(100vh_+_1rem)]  bg-black/50"></div>
            <Image
              style={{ objectFit: "cover" }}
              src={landingPic.src}
              alt="landing image"
              width={1800}
              height={700}
            />
          </div>
        </main>
        <div className="absolute z-20 top-[13rem] flex flex-col items-center ">
          <div className="name max-w-[48rem] ">
            <p className="font-extrabold text-transparent text-center leading-[4.5rem]  text-6xl bg-clip-text bg-gradient-to-r from-[#E32764] to-[#0285E0] ">
              We simplify the process of COVID-19 Travel Tests.
            </p>
          </div>
          <div className="sname pt-8">
            <p className="text-white text-md font-light tracking-wider ">
              Access Global travel updates . Get Tested for travel
            </p>
          </div>
          <div className="form max-w-[28rem]   flex flex-col space-y-1 pt-[3rem]">
            <span className="">
              <p className="text-xs">Choose the Country:</p>
            </span>
            <div className="flex flex-col space-y-4">
              <span className="">
                <DropDown />
              </span>
              <span className="flex space-x-3 ">
                <span className="flex-[50%]">
                  {" "}
                  <DropDown />
                </span>
                <span className="flex-[50%]">
                  {" "}
                  <DropDown />
                </span>
              </span>
              <span className="">
                <button className="px-[8rem] py-3 bg-[#E32764] rounded-lg text-sm font-normal">
                  Book Your Tests
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen w-screen bg-white flex flex-col items-start z-30 ">
        <div className="flex items-center justify-center w-full">
          <div className="px-[2rem] rounded-lg mt-[10rem] flex items-center justify-between bg-[#F9FAFB] w-[calc(100vw_-_20rem)] h-[10rem]">
            <div className="">
              <Image
                style={{ objectFit: "cover" }}
                src={pic1.src}
                alt="landing pic1"
                width={90}
                height={20}
              />
            </div>
            <div className="">
              <Image
                style={{ objectFit: "cover" }}
                src={pic2.src}
                alt="landing pic2"
                width={90}
                height={20}
              />
            </div>
            <div className="">
              <Image
                style={{ objectFit: "cover" }}
                src={pic3.src}
                alt="landing pic3"
                width={90}
                height={20}
              />
            </div>
            <div className="">
              <Image
                style={{ objectFit: "cover" }}
                src={pic4.src}
                alt="landing pic4"
                width={90}
                height={20}
              />
            </div>
            <div className="">
              <Image
                style={{ objectFit: "cover" }}
                src={pic5.src}
                alt="landing pic5"
                width={90}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className=""></div>
      </section>
    </div>
  );
}

export default Home;

const DropDown = () => {
  return (
    <>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </>
  );
};
