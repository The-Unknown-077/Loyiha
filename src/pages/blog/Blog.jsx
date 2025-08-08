import React from 'react'
import Locate from '../../components/locate/Locate'
import blogImg1 from '../../assets/blogImg1.png'
import blogImg2 from '../../assets/blogImg2.png'
import blogImg3 from '../../assets/blogImg3.png'
import recent1 from '../../assets/recent1.png'
import recent2 from '../../assets/recent2.png'
import recent3 from '../../assets/recent3.png'
import recent4 from '../../assets/recent4.png'
import recent5 from '../../assets/recent5.png'
import { HiMiniUser } from "react-icons/hi2";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
const Blog = () => {
  return (
   <>
   <Locate text={"Blog"}/>
       
    <section className='w-full py-[100px]'>
      <div className="container flex gap-[25px] max-[1220px]:flex-col">
        
      <div className='flex flex-col gap-7 max-w-[820px]'>
        <div className='flex flex-col'>
          <div className='w-full'>
            <img className='object-contain' src={blogImg1} alt="" />
          </div>
          <div className='mt-2'>
            <div className='flex gap-8'>
              <div className='flex gap-1.5 items-center text-gray-400 text-[18px]'>
                <HiMiniUser className='text-[22px]'/>
                <span>Admin</span>
              </div>
              <div className='flex gap-1.5 items-center text-gray-400 text-[18px]'>
                <FaCalendar className='text-[20px]'/>
                <span>14 Oct 2022</span>
              </div>
              <div className='flex gap-1.5 items-center text-gray-400 text-[18px]'>
                <FaTag className='text-[22px]'/>
                <span>Wood</span>
              </div>
            </div>
            <div className='flex flex-col gap-3 items-baseline mt-2'>
              <h2 className='font-medium text-[30px]'>Going all-in with millennial design</h2>
            <p className='text-[#9F9F9F] text-[16px]/[1.5]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <button className='py-3 px-1.5 border-b '>Read more</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='w-full'>
            <img className='object-contain' src={blogImg2} alt="" />
          </div>
          <div className='mt-2'>
            <div className='flex gap-8'>
              <div className='flex gap-1.5 items-center text-gray-400 text-[18px]'>
                <HiMiniUser className='text-[22px]'/>
                <span>Admin</span>
              </div>
              <div className='flex gap-1.5 items-center text-gray-400 text-[18px]'>
                <FaCalendar className='text-[20px]'/>
                <span>14 Oct 2022</span>
              </div>
              <div className='flex gap-1.5 items-center text-gray-400 text-[18px]'>
                <FaTag className='text-[22px]'/>
                <span>Handmade</span>
              </div>
            </div>
            <div className='flex flex-col gap-3 items-baseline mt-2'>
              <h2 className='font-medium text-[30px]'>Exploring new ways of decorating</h2>
            <p className='text-[#9F9F9F] text-[16px]/[1.5]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <button className='py-3 px-1.5 border-b '>Read more</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='w-full'>
            <img className='object-contain' src={blogImg3} alt="" />
          </div>
          <div className='mt-2'>
            <div className='flex gap-8'>
              <div className='flex gap-1.5 items-center text-gray-400 text-[18px]'>
                <HiMiniUser className='text-[22px]'/>
                <span>Admin</span>
              </div>
              <div className='flex gap-1.5 items-center text-gray-400 text-[18px]'>
                <FaCalendar className='text-[20px]'/>
                <span>14 Oct 2022</span>
              </div>
              <div className='flex gap-1.5 items-center text-gray-400 text-[18px]'>
                <FaTag className='text-[22px]'/>
                <span>Wood</span>
              </div>
            </div>
            <div className='flex flex-col gap-3 items-baseline mt-2'>
              <h2 className='font-medium text-[30px]'>Handmade pieces that took time to make</h2>
            <p className='text-[#9F9F9F] text-[16px]/[1.5]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <button className='py-3 px-1.5 border-b '>Read more</button>
            </div>
          </div>
        </div>
      </div>
        <div className='px-[7px] w-full flex flex-col gap-6'>
        <div className='relative flex flex-col gap-5'>
          <input type="text" className='py-[8px] w-full indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px] max-[1220px]:w-0 max-[1220px]:px-[150px]'/>
          <CiSearch className='absolute right-7 text-gray-400 top-0 translate-y-1/2 translate-x-1/2 text-[22px] max-[1220px]:hidden'/>
          <h2 className='font-medium text-[24px] mt-[15px]'>Categories</h2>
          <div className="flex justify-between items-center text-[#9F9F9F] max-[1220px]:justify-stretch max-[1120px]:gap-3">
            <span>Crafts</span>
            <span>2</span>
          </div>
          <div className="flex justify-between items-center text-[#9F9F9F] max-[1220px]:justify-stretch max-[1120px]:gap-3">
            <span>Design</span>
            <span>8</span>
          </div>
          <div className="flex justify-between items-center text-[#9F9F9F] max-[1220px]:justify-stretch max-[1120px]:gap-3">
            <span>Handmade</span>
            <span>7</span>
          </div>
          <div className="flex justify-between items-center text-[#9F9F9F] max-[1220px]:justify-stretch max-[1120px]:gap-3">
            <span>Handmade</span>
            <span>1</span>
          </div>
          <div className="flex justify-between items-center text-[#9F9F9F] max-[1220px]:justify-stretch max-[1120px]:gap-3">
            <span>Wood</span>
            <span>6</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className='font-medium text-[24px] mt-[15px]'>Recent Posts</h2>
          <div className='flex gap-3'>
            <img className='size-[80px]' src={recent1} alt="" />
            <div className='flex flex-col max-w-[150px]'>
              <p>Going all-in with millennial design</p>
              <span className='text-[#9f9f9f]'>03 Aug 2022</span>
            </div>
          </div>
          <div className='flex gap-3'>
            <img className='size-[80px]' src={recent2} alt="" />
            <div className='flex flex-col max-w-[150px]'>
              <p>Exploring new ways of decorating</p>
              <span className='text-[#9f9f9f]'>03 Aug 2022</span>
            </div>
          </div>
          <div className='flex gap-3'>
            <img className='size-[80px]' src={recent3} alt="" />
            <div className='flex flex-col max-w-[150px]'>
              <p>Handmade pieces that took time to make</p>
              <span className='text-[#9f9f9f]'>03 Aug 2022</span>
            </div>
          </div>
          <div className='flex gap-3'>
            <img className='size-[80px]' src={recent4} alt="" />
            <div className='flex flex-col max-w-[150px]'>
              <p>Modern home in Milan</p>
              <span className='text-[#9f9f9f]'>03 Aug 2022</span>
            </div>
          </div>
          <div className='flex gap-3'>
            <img className='size-[80px]' src={recent5} alt="" />
            <div className='flex flex-col max-w-[150px]'>
              <p>Colorful office redesign</p>
              <span className='text-[#9f9f9f]'>03 Aug 2022</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Blog