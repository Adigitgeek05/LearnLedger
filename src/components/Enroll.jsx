
import i1 from '/i1.svg'
import e1 from '/e1.svg'
import v1 from '/v1.svg'

export default function Enroll() {
    return (
        <div className="min-h-screen bg-white  py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-2 text-center justify-center items-center ">
            <h1 className="text-3xl font-inter font-bold text-black mb-12 text-center">
              User 
            </h1>
            <h1 className="text-3xl font-inter font-bold text-[#9747FF] mb-12 text-center">
               Enrollment 
            </h1>
            </div>
    
            <div className="relative">
              
    
              {[
                {
                  step: 1,
                  title: "User Enrolls to Course",
                  subtitle: "",
                  image: '/i1.svg',
                  arrow: '/v1.svg'
                  
                },
                {
                  step: 2,
                  title: "Pays for the Course",
                  subtitle: "+5% more if paid in EDU",
                  arrow: '/v2.svg'
                },
                {
                  step: 3,
                  title: "Milestone #1",
                  subtitle: "Gets +5% EDU for 30% Course Completion",
                  arrow: '/v3.svg'
                },
                {
                  step: 4,
                  title: "Milestone #4",
                  subtitle: "Gets +25% EDU",
                },
                {
                  step: 5,
                  title: "Get Certification",
                  subtitle: "Mints SBT to Learners",
                  icon: "fa-certificate",
                  image: {e1},
                },
              ].map((item, index,array) => (
                <div
                  key={item.step}
                  className="relative  items-center mb-12 last:mb-0"
                >
                  <div
                    className={`w-full flex ${index % 2 === 0 ? "justify-start" : "justify-end"} items-center`}
                  >
                    <div
                      className={`flex  items-center gap-4 w-[calc(50%-20px)] ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
                    >
                     {item.image && index === 0 && (
                        <img src={item.image} alt="" className="w-[126px] h-[126px] rounded-lg" />
                      )}
    
                      <div
                        className={`flex-grow bg-[#d0c9f8] rounded-lg py-10 px-10    `}
                      >
                        <div className="flex justify-center items-center text-center  w-8 h-8 bg-[#9747FF] text-white font-inter rounded-full ">
                            {item.step}
                        </div>
                        <h3 className=" text-lg font-inter font-semibold text-[#9747FF]">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="mt-1 text-sm font-inter text-[#7A7A7A]">
                            {item.subtitle}
                          </p>
                        )}
                        
                        
                      </div>
                      
                    </div>
                  </div>
                  <div className='pl-60 '>
                  {index < array.length - 1 && (
                    <img src={item.arrow} alt="Arrow" className="w-40 h-40  items-center justify-center flex" />
                  )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

