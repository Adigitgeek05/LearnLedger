import { useState } from "react";
import i2 from "/i2.svg"
import i3 from "/i3.svg"
import i4 from "/i4.svg" 
import i5 from "/i5.svg"
import i6 from "/i6.svg"


export default function Roadmap() {
    const [roadmapItems, setRoadmapItems] = useState([
      {
        id: 1,
        title: "Testnet Launch",
        icon: <img src={i2} alt="" />,
        status: "completed",
      },
      {
        id: 2,
        title: "Mainnet Launch",
        icon: <img src={i2} alt="" />,
        status: "pending",
      },
      {
        id: 3,
        title: "Integration Pilot with Ecosystem Partners",
        
        status: "pending",
      },
      {
        id: 4,
        title: "ERC20 Token Generation Event (TGE)",
        
        status: "pending",
      },
      {
        id: 5,
        title: "Token Listing on Major Exchanges",
       
        status: "pending",
      },
    ]);
  
    const toggleStatus = (id) => {
      setRoadmapItems((items) =>
        items.map((item) =>
          item.id === id
            ? {
                ...item,
                status: item.status === "completed" ? "pending" : "completed",
              }
            : item,
        ),
      );
    };
  
    const RoadmapItem = ({ id, title, icon, status, isLast }) => {
      const isCompleted = status === "completed";
  
      return (
        
        <div className="flex items-center group">
           
          <div className="flex flex-col items-center">
            
            <button
              onClick={() => toggleStatus(id)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isCompleted
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              }`}
            >
              <span
                className={`text-xl ${
                  isCompleted ? "text-white" : "text-gray-600 dark:text-gray-200"
                }`}
              >
                {icon}
              </span>
            </button>
            {!isLast && (
              <div
                className={`h-16 w-0.5 my-2 transition-all duration-300 dark:bg-gray-700
                `}
              ></div>
            )}
          </div>
          <div className="ml-4 pb-20">
            <h3
              className={`text-lg text-[#9747FF] font-bold transition-all duration-300 `
                }
            >
              {title}
            </h3>
          </div>
        </div>
      );
    };
  
    return (
      <div className="max-w-2xl mx-auto p-8">
        <div className="space-x-2 flex items-center justify-center text-center text-3xl font-bold pb-14  text-black ">
          <h1 >Roadmap for </h1> 
          <h1 className="text-[#9747FF]"> Token Exchanging </h1>
        </div>
  
        <div className="space-y-2">
          {roadmapItems.map((item, index) => (
            <RoadmapItem
              key={item.id}
              id={item.id}
              title={item.title}
              
              status={item.status}
              isLast={index === roadmapItems.length - 1}
            />
          ))}
        </div>
      </div>
    );
  }
  
  
  