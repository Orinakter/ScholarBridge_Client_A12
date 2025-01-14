import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosContact } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import footerLogo from '../../../assets/images/logo.png'

const Footer = () => {
    return (
        <div>
             <footer className="bg-[#CEE6F2] text-gray-600 py-10 mt-80 ">
  <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
   
    <div>
     <div className="flex items-center gap-3 mb-4">
      <img src={footerLogo} alt=""  className="w-[50px] h-[40px] rounded-full" />
     <h2 className="text-xl font-bold text-[#126e82]"> ScholarBridge</h2>
     </div>
      <p className="text-sm ">
      ScholarBridge is a platform dedicated to connecting students, researchers, and academics with opportunities for collaboration, mentorship, and discovery. It bridges the gap between curiosity and achievement, empowering scholars to thrive.
      </p>
    </div>

    
    <div>
      <h3 className="text-lg font-bold text-[#126e82] mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="/" className="hover:text-[#126e82]">Home</a></li>
        <li><a href="/all-artifacts" className="hover:text-[#126e82]">All Scholarship</a></li>
        <li><a href="/add-artifact" className="hover:text-[#126e82]">User Dashboard</a></li>
        <li><a href="/login" className="hover:text-[#126e82]">Admin Dashboard</a></li>
        <li><a href="/login" className="hover:text-[#126e82]">Login</a></li>
      </ul>
    </div>

   
    <div>
      <h3 className="text-lg font-bold text-[#126e82] mb-4">Contact Us</h3>
      <ul className="space-y-2">
        <li className="flex items-center gap-3 ">
        <MdEmail className='text-[#126e82] ' />
          <a className="hover:text-[#126e82] ">support@scholarbridge.com</a>
        </li>
        <li class="flex items-center gap-3">
        <IoIosContact className='text-[#126e82] ' />
         <a className="hover:text-[#126e82]">+1 234 567 890</a> 
        </li>
        <li className="flex items-center gap-3">
        <FaLocationDot className='text-[#126e82] ' />
          <a className="hover:text-[#126e82]">123 Scholar St., Learning City</a>
        </li>
      </ul>
    </div>

    <div className="">
      <h2 className='text-lg font-bold mb-2 text-[#126e82]'>Follow Us</h2>
      <div className="flex space-x-4 text-xl text-[#126e82] ">

      <a href='https://www.facebook.com/orinakter.2000?mibextid=ZbWKwL'><FaFacebook/></a>
            
            <a href='https://www.linkedin.com/in/orinakter23/'>
            <FaLinkedin />
            </a>
            <a href='https://www.instagram.com/orin_akter123?igsh=MXR4Z3Q0ZGJrdm1zeQ=='>
              <FaInstagram />
            </a>

      </div>
    </div>
  </div>

  
  <div className="mt-8 border-t border-[#126e82] pt-6 text-center text-sm">
    <p>Copyright 2025 ArtifactLog. All rights reserved.</p>
    <p>
      Developed by <a className="text-[#126e82] font-bold hover:underline">Orin Akther</a>.
    </p>
  </div>
</footer>
            
        </div>
    );
};

export default Footer;