import {useState} from 'react'
import f1 from '/f1.svg'
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="items-center text-center  flex">
            
          
            <h1 className="text-3xl font-inter font-bold text-gray-900 ">
              Frequently Asked Questions
            </h1>
          <div className="flex justify-center items-center ">
              <img src={f1} alt="" className='w-[195px] h-[192px] '/>
            </div>
            </div>
            <div className='bg-black m-auto  '>
          <div className="bg-[#7F56D9]">
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
                  <i
                    className={`fa-solid ${
                      activeIndex === index ? "fa-minus" : "fa-plus"
                    } text-[#8B5CF6] transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  ></i>
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
  
  
  