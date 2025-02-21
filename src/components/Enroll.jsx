import i1 from "/i1.svg";
import e1 from "/e1.svg";
import v1 from "/v1.svg";

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

        <div className="relative flex flex-col gap-12">
          {[
            {
              step: 1,
              title: "User Enrolls to Course",
              subtitle: "",
              image: "/i1.svg",
              arrow: "/v1.svg",
            },
            {
              step: 2,
              title: "Pays for the Course",
              subtitle: "+5% more if paid in EDU",
              arrow: "/v2.svg",
            },
            {
              step: 3,
              title: "Milestone #1",
              subtitle: "Gets +5% EDU for 30% Course Completion",
              arrow: "/v3.svg",
            },
            {
              step: 4,
              title: "Milestone #4",
              subtitle: "Gets +25% EDU",
              arrow: "/v4.svg",
            },
            {
              step: 5,
              title: "Get Certification",
              subtitle: "Mints SBT to Learners",
              image: "/e1.svg",
            },
          ].map((item, index, array) => (
            <div key={item.step} className="relative last:mb-0">
              <div className={`w-full flex items-center`}>
                <div
                  className={`flex  items-center justify-between w-full  ${
                    index % 2 === 0
                      ? "justify-start pl-20"
                      : "justify-end pr-20"
                  } `}
                >
                  <div
                    className={`flex flex-col rounded-2xl bg-[#d0c9f8]  py-10 px-10 w-[calc(60%-20px)]   `}
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
                  {item.image && (index === 0 || index === 4) && (
                    <img
                      src={item.image}
                      alt=""
                      className="w-[126px] h-[126px] rounded-lg ml-auto mr-20 "
                    />
                  )}
                </div>
              </div>
              <div className="pl-60 ">
                {index < array.length - 1 && (
                  <img
                    src={item.arrow}
                    alt="Arrow"
                    className={`w-40  h-40 ${
                      index % 2 == 0 ? " left-[20%]" : "right-[20%]"
                    } absolute items-center justify-center flex`}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
