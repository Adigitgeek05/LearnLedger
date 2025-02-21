import { useState } from "react";
import Logo from '/Logo.svg'
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => setIsOpen(!isOpen);
  
    const handleLinkClick = (link) => {
      setIsOpen(false);
      console.log(`Navigating to: ${link}`);
    };
  
    return (
      
        <nav className="bg-white w-full shadow-2xl z-10 shadow-[#9747FF]   border-gray-200 px-4 py-3">
          <div className=" mx-auto flex items-center justify-between max-w-[1500px] px-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold flex items-center gap-2">
                <div className="w-[66px] h-[66px] ">
               <img src={Logo} alt="" />
               </div>
               <div className="flex flex-col">
                <span className="text-[#000000]">Learn</span>
                <span className="text-[#9747FF]"> Ledger</span>
                </div>
              </div>
            </div>
  
            <div className="hidden md:flex items-center space-x-40">
              {["Home", "Product", "Docs", "Whitepaper"].map((item, index) => (
                <div key={item} className="flex items-center">
                  <button
                    onClick={() => handleLinkClick(item.toLowerCase())}
                    className="text-gray-600 text-lg font-bold hover:text-[#9747FF] transition-colors font-roboto"
                  >
                    {item}
                  </button>
                  {index < 3 }
                </div>
              ))}
            </div>
            <div className="pl-8 ">
            <div className="hidden w-full md:flex items-center space-x-4 bg-gradient-to-r from-[#6B46C1]/10 to-[#8B5CF6]/10 px-6  py-2 rounded-full">
              <a
                href="#"
                className="bg-white p-2 rounded-full text-gray-600 hover:text-[#6B46C1] transition-colors shadow-sm"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full text-gray-600 hover:text-[#6B46C1] transition-colors shadow-sm"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full text-gray-600 hover:text-[#6B46C1] transition-colors shadow-sm"
              >
                <FaDiscord />
              </a>
            </div>
            </div>
  
            <button onClick={toggleMenu} className="md:hidden text-gray-600">
              <i
                className={`fas ${isOpen ? <IoMdClose /> : <FaBars />} text-2xl`}
              ></i>
            </button>
          </div>
  
          {isOpen && (
            <div className="md:hidden mt-4 pb-4">
              {["Home", "Product", "Docs", "Whitepaper"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleLinkClick(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 font-roboto"
                >
                  {item}
                </button>
              ))}
              <div className="flex justify-center space-x-6 mt-4 bg-gradient-to-r from-[#6B46C1]/10 to-[#8B5CF6]/10 py-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#6B46C1] transition-colors"
                >
                  <FaTelegramPlane />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#6B46C1] transition-colors"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#6B46C1] transition-colors"
                >
                 <FaDiscord />
                </a>
              </div>
            </div>
          )}
        </nav>
      
    );
  }