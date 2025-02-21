import {useState} from 'react'
import f1 from '/f1.svg'
import { CiCirclePlus } from "react-icons/ci";
export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const faqData = [
      {
        question: "What services do you offer?",
        answer:
          "We offer a comprehensive range of digital solutions including web development, mobile app development, UI/UX design, and digital marketing strategies tailored to your business needs.",
      },
      {
        question: "How do I get started?",
        answer:
          "Getting started is easy! Simply reach out to us through our contact form or schedule a free consultation. We'll discuss your requirements and create a customized plan for your project.",
      },
      {
        question: "What are your business hours?",
        answer:
          "Our regular business hours are Monday through Friday, 9:00 AM to 6:00 PM EST. However, we provide 24/7 support for urgent matters to our premium clients.",
      },
      {
        question: "Do you offer support?",
        answer:
          "Yes, we provide comprehensive support for all our services. Our dedicated support team is available to assist you with any questions or issues you may encounter.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, PayPal, bank transfers, and cryptocurrency. We can also arrange flexible payment plans for larger projects.",
      },
      {
        question: "How can I contact you?",
        answer:
          "You can reach us through email at support@example.com, call us at (555) 123-4567, or use the contact form on our website. We typically respond within 24 hours.",
      },
    ];   
  
    return (
      <div className="min-h-screen bg-white">
        <div className=" max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="items-center justify-center text-center  flex">
            
          
            <div className=" space-x-2 flex rounded-full border-4  border-[#9747FF] p-4 text-3xl font-inter font-bold text-gray-900 ">
              <h1>Frequently Asked </h1>
              <h1 className='text-[#9747FF]'>Questions</h1> 
            </div>
          
            </div>
            <div className=' m-auto  pt-8'>
          <div className="bg-[#F5EEFF]">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                >
                  <span className="text-gray-900 font-inter text-lg">
                    {faq.question}
                  </span>
                  <img 
                    className={` ${
                      activeIndex === index ? "fa-minus" : <CiCirclePlus />

                    } text-[#8B5CF6] transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  ></img>
                </button>
                {activeIndex === index && (
                  <div className="p-4 sm:p-6 pt-0">
                    <p className="text-gray-700 font-inter">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  