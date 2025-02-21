import Marquee from 'react-fast-marquee';
import o1 from '/o1.png';
import o2 from  '/o2.svg'
import o3 from  '/o3.svg'
import o4 from  '/o4.svg'
import o5 from  '/o5.png'
import o6 from  '/o6.png'
import o7 from '/o7.svg'
export default function Partner () {
  return (
    
      <div className="  bg-white ">
    <div className=" flex items-center justify-center space-x-2 text-3xl font-bold">
      <h1 className="text-[#9747FF]">Our</h1>
      <h1>Partners</h1>
      </div>
    <div className='py-10 space-x-20'>
      
    <Marquee>
  <img src={o1} alt="" className="mx-4" />
  <img src={o2} alt="" className="mx-4" />
  <img src={o5} alt="" className="mx-4" />
  <img src={o4} alt="" className="mx-4" />
  <img src={o5} alt="" className="mx-4" />
  <img src={o6} alt="" className="mx-4" />
  <img src={o7} alt="" className="mx-4" />
</Marquee>

      </div>
    </div>
  )
}


