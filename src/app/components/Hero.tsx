import React from 'react'
import profilePic from '../../../public/images/hero-profile.jpg'
import 'font-awesome/css/font-awesome.min.css';
import Image from 'next/image';

type Props = {}

// const Hero = (props: Props) => {
//   return (
//     <>
//       <div>Paul</div>
//       <div></div>
//       <div>Doho</div>
//     </>
//   )
// }


 const Hero = () => {
  return (
      <div className="text-white h-screen flex flex-col justify-between p-20 w-screen">
          {/* First Row */}
          <div className="flex items-center justify-between w-full">
              <div className="text-9xl">Paul</div>
              <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                  <a href="https://github.com/yourusername" className="text-sm hover:underline">
                      url
                  </a>
              </div>
          </div>
          
          {/* Second Row */}
          <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-yellow-500"></div>
                  <Image src={profilePic} width={250} height={250} alt="Your Image"  />
              </div>
              <div className="text-9xl flex-grow text-right">Doho</div>
          </div>

          {/* Third Row */}
          <div className="border-t border-gray-600 w-full">
              <div className="flex items-center justify-between py-4 w-full">
                  <div className="text-lg">Portfolio 2023</div>
                  <a href="#about" className="px-4 py-2 hover:bg-gray-700 transition">
                      <i className="fas fa-arrow-down"></i>
                  </a>
                  <div className="text-lg">Software Engineer</div>
              </div>
          </div>
      </div>
  );
}


export default Hero