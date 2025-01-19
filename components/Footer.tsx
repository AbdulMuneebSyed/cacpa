
"use client"
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    useEffect(()=>{
        gsap.to(".footerAnimation",{
                scale:.8,
                // y:50,
                scaleX:1.5,
                scrollTrigger:{
                    trigger: ".footerAnimation",
                    start: "top 75%",
                    end: "top 20%",
                            scrub: true,

                }
        }) 
    },[])
  return (
    <div className="bg-[#3f5964]">
      <footer className="bg-white text-gray-800 shadow-lg hidden md:block footerAnimation rounded-xl py-12">
        {/* Increased padding */}
        <div className="container mx-auto px-8">
          {/* Increased padding */}
          {/* Top Section */}
          <div className="flex justify-between my-5">
            <Image
              src="/logo/logo.png"
              alt="capco Logo"
              width={180}
              height={60}
              className="object-contain"
            />
            <Link href="/contactus">
              <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 sm:py-3 sm:px-8 text-sm md:py-4 md:px-10 md:text-xl">
                Let's Talk
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {" "}
            {/* Increased gap */}
            <div className="mt-6 md:flex-col flex sm:flex-row items-center justify-around">
              {" "}
              <div className="w-full flex justify-center">
                <Image
                  src="/logo/logo2.png"
                  alt="Three flags logo Logo"
                  width={50} // You still need to provide a width value here
                  height={0}
                  className="object-contain w-28"
                />
              </div>
              {/* Increased margin */}
              <div className="mt-6 flex space-x-6">
                {" "}
                {/* Increased space between icons */}
                <a href="#" className="hover:text-blue-500 text-xl">
                  {" "}
                  {/* Increased icon size */}
                  <i className="fab fa-x"></i>
                </a>
                <a href="#" className="hover:text-blue-500 text-xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-blue-500 text-xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-blue-500 text-xl">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="hover:text-blue-500 text-xl">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            {/* Logo and Address */}
            <div>
              <h3 className="font-bold text-xl">Locations</h3>{" "}
              {/* Increased font size */}
              <ul className="mt-6 space-y-3">
                {" "}
                {/* Increased space between items */}
                <li>
                  <strong>Canada:</strong>
                  <br />
                  123 Main Street, Toronto, ON, M1H 3A1
                </li>
                <li>
                  <strong>Qatar:</strong>
                  <br />
                  Building No: 67, Street No: 250, Zone No: 45, Doha
                </li>
                <li>
                  <strong>India:</strong>
                  <br />
                  Plot No. 45, Hitech City, Hyderabad, Telangana 500081
                </li>
              </ul>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-xl">Quick Links</h3>{" "}
              {/* Increased font size */}
              <ul className="mt-6 space-y-3">
                {" "}
                {/* Increased space between items */}
                <ul>
                  <li>
                    <Link href="/" className="hover:underline text-lg">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/aboutus" className="hover:underline text-lg">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contactus" className="hover:underline text-lg">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            {/* Our Services */}
            <div>
              <h3 className="font-bold text-xl">Our Services</h3>
              <ul className="mt-6 space-y-3">
                <li className="text-lg">
                  <Link href="/services/bmc">
                    Business Management & Consultancy
                  </Link>
                </li>
                <li className="text-lg">
                  <Link href="/services/hrm">Human Resource Management</Link>
                </li>
                <li className="text-lg">
                  <Link href="/services/dmbc">
                    Digital Marketing & Business Consulting
                  </Link>
                </li>
                <li className="text-lg">
                  <Link href="/services/wm">Warehouse Management</Link>
                </li>
                <li className="text-lg">
                  <Link href="/services/grmc">
                    Governance, Risk Management & Compliance
                  </Link>
                </li>
                <li className="text-lg">
                  <Link href="/services/wdhs">
                    Web Development & Hosting Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="mt-10 text-center border-t border-gray-200 pt-6">
            {" "}
            {/* Increased margin and padding */}
            <p className="text-base">
              {" "}
              {/* Increased font size */}
              &copy; 2024 Capco Company, All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <footer className="bg-white text-gray-800 shadow-lg md:hidden py-12">
        {/* Increased padding */}
        <div className="container mx-auto px-8">
          {/* Increased padding */}
          {/* Top Section */}
          <div className="flex justify-between my-5">
            <Image
              src="/logo/logo.png"
              alt="capco Logo"
              width={180}
              height={60}
              className="object-contain"
            />
            <Link href="/contactus">
              <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 sm:py-3 sm:px-8 text-sm md:py-4 md:px-10 md:text-xl">
                Let's Talk
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {" "}
            {/* Increased gap */}
            <div className="mt-6">
              {" "}
              <div className="w-full flex justify-center">
                <Image
                  src="/logo/logo2.png"
                  alt="Three flags logo Logo"
                  width={50} // You still need to provide a width value here
                  height={0}
                  className="object-contain w-20"
                />
              </div>
              {/* Increased margin */}
              <div className="mt-6 flex space-x-6">
                {" "}
                {/* Increased space between icons */}
                <a href="#" className="hover:text-blue-500 text-xl">
                  {" "}
                  {/* Increased icon size */}
                  <i className="fab fa-x"></i>
                </a>
                <a href="#" className="hover:text-blue-500 text-xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-blue-500 text-xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-blue-500 text-xl">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="hover:text-blue-500 text-xl">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            {/* Logo and Address */}
            <div>
              <h3 className="font-bold text-xl">Locations</h3>{" "}
              {/* Increased font size */}
              <ul className="mt-6 space-y-3">
                {" "}
                {/* Increased space between items */}
                <li>
                  <strong>Canada:</strong>
                  <br />
                  123 Main Street, Toronto, ON, M1H 3A1
                </li>
                <li>
                  <strong>Qatar:</strong>
                  <br />
                  Building No: 67, Street No: 250, Zone No: 45, Doha
                </li>
                <li>
                  <strong>India:</strong>
                  <br />
                  Plot No. 45, Hitech City, Hyderabad, Telangana 500081
                </li>
              </ul>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-xl">Quick Links</h3>{" "}
              {/* Increased font size */}
              <ul className="mt-6 space-y-3">
                {" "}
                {/* Increased space between items */}
                <ul>
                  <li>
                    <Link href="/" className="hover:underline text-lg">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/aboutus" className="hover:underline text-lg">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contactus" className="hover:underline text-lg">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            {/* Our Services */}
            <div>
              <h3 className="font-bold text-xl">Our Services</h3>{" "}
              {/* Increased font size */}
              <ul className="mt-6 space-y-3">
                <li className="text-lg">
                  <Link href="/service/bmc">
                    Business Management & Consultancy
                  </Link>
                </li>
                <li className="text-lg">
                  <Link href="/services/hrm">Human Resource Management</Link>
                </li>
                <li className="text-lg">
                  <Link href="/services/dmbc">
                    Digital Marketing & Business Consulting
                  </Link>
                </li>
                <li className="text-lg">
                  <Link href="/services/wm">Warehouse Management</Link>
                </li>
                <li className="text-lg">
                  <Link href="/services/grmc">
                    Governance, Risk Management & Compliance
                  </Link>
                </li>
                <li className="text-lg">
                  <Link href="/services/wdhs">
                    Web Development & Hosting Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="mt-10 text-center border-t border-gray-200 pt-6">
            {" "}
            {/* Increased margin and padding */}
            <p className="text-base">
              {" "}
              {/* Increased font size */}
              &copy; 2024 Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
