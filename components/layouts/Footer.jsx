import React from "react";
import Image from "next/image";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#24243557]">
      <footer className="bg-[#16151a]">
        <div className="bg-[#16151a] py-5 ">
          <div className="container   mx-auto footer py-10">
            <div className="flex  items-center justify-center">
              <div className="flex left_footer text-center ">
                <div className="left_footer_logo">
                  <a
                    className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-white mb-4"
                    href="#pablo"
                  >
                    <img
                      src="/logo.png"
                      alt="my image"
                      height="100px"
                      width="226px"
                    />
                  </a>
                  <p className="text-[#fff] lg:text-base md:text-base text-sm leading-6">
                    Where Bitcoin was hailed as the digital answer to currency,{" "}
                    <br />
                    NFTsare now being touted as the digital answer to
                    collectables.{" "}
                  </p>

                  <ul className="list-none  flex text-[#fff]   items-center justify-center  lg:py-8 md:py-8 py-0 pt-6 pb-0  ">
                    <li className=" text-[#fff] hover:text-[#571a81]  hover:border-[#571a81] rounded-full border-[#fff] p-2 border mr-4 ">
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>

                    <li className=" text-[#fff] hover:text-[#571a81]  hover:border-[#571a81] rounded-full border-[#fff] p-2 border mr-4 ">
                      <a href="#">
                        <BsInstagram />
                      </a>
                    </li>

                    <li className=" text-[#fff] hover:text-[#571a81]  hover:border-[#571a81] rounded-full border-[#fff] p-2 border mr-4 ">
                      <a href="#">
                        <BsTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mx-auto bottom_copyright_footer dark:[#16151a] bg-[#16151a] lg:px-20 md:px-20  px-5  lg:pb-0   md :pb-0 pb-4  border-t-2 border-[#ffffff14] ">
            <div className="footer-copyright lg:flex md:flex block  items-center justify-between">
              <p className="text-[#fff] text-sm	leading-9 text-center py-2">
                © NftMarketplace, Inc. All rights reserved.{" "}
              </p>
              <ul className="list-none  flex text-[#fff]  text-sm  items-center justify-center  lg:space-x-10 md:space-x-10 space-x-3 ">
                <a href="#" className="hover:text-[#571a81]">
                  <li>Privacy Policy</li>
                </a>
                <a href="#" className="hover:text-[#571a81]">
                  <li>Terms & Conditions</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
