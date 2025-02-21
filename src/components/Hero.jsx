import { useState } from "react";
import h1 from '/h1.svg';
import h2 from '/h2.svg';
import h3 from '/h3.svg';

export default function Hero() {
    return (
      <div className="min-h-screen bg-white z-0">
        <div className="container mx-auto py-8 md:py-16">
          <div className="hidden md:block">
            <div className="text-center mb-12">
              <h1 className="text-6xl font-bold text-[#9747FF] mb-4">
                Earn While You Learn!
              </h1>
              <p className="text-xl text-gray-600">
                Get Up to 25% cashback in EDU tokens
              </p>
            </div>
  
            <div className="relative flex">
              <div className="">
                <img
                  src={h2}
                  alt=""
                  className="w-[398px] h-[398px]"
                />
              </div>
              <div className="">
                <img
                  src={h1}
                  alt=""
                  className="w-[685px] h-[457px]"
                />
              </div>
              <div className="">
                <img
                  src={h3}
                  alt=""
                  className="w-[481px] h-[481px]"
                />
              </div>
            </div>
          </div>
  
          <div className="md:hidden">
            <div className="text-center mb-8 px-4">
              <h1 className="text-4xl font-bold text-[#9747FF] leading-tight">
                Earn
                <br />
                While You
                <br />
                Learn!
              </h1>
              <p className="text-gray-600 mt-3">
                Get Up to 25%
                <br />
                cashback in EDU tokens
              </p>
            </div>
  
            <div className=" flex flex-col items-center">
            <div className="mb-8 ">
              <div className="relative">
                <img
                  src={h1}
                  alt="Person using mobile phone for learning"
                  className="w-[288px]  h-[192px] object-contain transform  transition-transform duration-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 w-full max-w-[400px]">
              <div className="flex justify-center">
                <div className="relative ">
                  <img
                    src={h2}
                    alt="Balance scale with Bitcoin and Dollar symbols"
                    className="w-[233px] h-[233px] object-contain "
                  />
                 
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative ">
                  <img
                    src={h3}
                    alt="Laptop showing educational content"
                    className="w-[233px] h-[233px] object-contain "
                  />
                </div>
              </div>
  
          
          </div>
        </div>
      </div>
      <div className="items-center text-center px-4">
              <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold w-full max-w-[280px] mx-auto">
                Start Learning
              </button>
            </div>
      </div>
      </div>

    );
}