import { useState,useEffect } from "react";
import ele from '/ele.svg'


export default function Section() {
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      setIsLoaded(true);
    }, []);
  
    return (
      <div className="min-h-screen bg-white  p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <div className="flex items-center justify-center relative w-full">
              <div className="flex text-[#9747FF] font-inter space-x-2 sm:text-xl text-3xl md:text-4xl font-bold">
                <h1>Benefits </h1>
                <h1 className="text-black ">of Enrollment</h1>
              </div>
              <div className="absolute-right-8">
                <img src={ele} alt="" />
              </div>
            </div>
          </div>
  
          <div
            className={"grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300 ease-in-out" }
          >
            <div className="border-2 border-[#9747FF] rounded-4xl px-2 text-center   transition-colors duration-300">
              <h2 className="flex py-10  items-center justify-center  text-[#9747FF] text-xl font-inter font-bold">
              Anonymous Login through web3 wallet 
              </h2>
            </div>
  
            <div className="border-2 border-[#9747FF] rounded-4xl p-6 text-center   transition-colors duration-300">
              <h3 className="py-8 text-[#9747FF] items-center justify-center text-xl font-inter font-bold ">
                Reward Based Learning
              </h3>
            </div>
  
            <div className="border-2 border-[#9747FF] rounded-4xl p-6 text-center  transition-colors duration-300">
              <h3 className="py-8 text-[#9747FF] items-center justify-center text-xl font-inter font-bold ">
                Immutable Certifications
              </h3>
            </div>
  
            <div className="border-2 border-[#9747FF] rounded-4xl p-6 text-center  transition-colors duration-300">
              <h3 className="py-8 items-center justify-center text-[#9747FF] text-xl font-inter font-bold ">
                Multiple Payment Options
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
  