import React from "react";
import Image from "next/image";

function About() {
  return (
    <>
      <section
        className="explore_section pt-20 "
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <div className="container mx-auto">
          <div className="grid pb-10  text-center ">
            <h2 className="dark:text-[#09080d] text-[#fff] font-bold lg:text-7xl  md:text-7xl  text-4xl aboutpage_nftheading">
              Nft Marketplace
            </h2>
            <p className="dark:text-[#acacac] text-[#969696] text-base	my-8 lg:mx-40  md:mx-10 mx-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industr standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="aboutpage_about_section">
        <div className="container-fluid mx-auto px-10 ">
          <div className="lg:flex md:flex block flex-row  ">
            <div className="basis-3/12 lg:pr-5 md:pr-5 pr-0 ">
              <img
                src="/images/banner-02.jpg"
                className="rounded-lg object-cover"
                alt="my image"
                height="250px"
                width="300px"
              />
              <img
                src="/images/portfolio-01.jpg"
                className="rounded-lg object-cover"
                alt="my image"
                height="250px"
                width="300px"
              />
            </div>
            <div className="basis-3/12 lg:pr-5 md:pr-5 pr-0 lg:mt-0 md:mt-0 mt-5 ">
              <img
                src="/images/portfolio-03.jpg"
                className="rounded-lg object-cover"
                alt="my image"
                height="250px"
                width="300px"
              />
              <img
                src="/images/portfolio-10.jpg"
                className="rounded-lg object-cover"
                alt="my image"
                height="250px"
                width="300px"
              />
            </div>
            <div
              className="basis-6/12  createpage_right_side lg:px-14 md:px-14 px-0 flex flex-col justify-center items-start"
              data-aos="flip-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <h6 className="text-[#571a81] font-medium text-lg  text-left py-3">
                About Us
              </h6>

              <h2 className="dark:text-white text-[#000] font-medium lg:text-7xl md:text-4xl text-2xl	 py-3">
                Helping You Grow In Every Stage.
              </h2>
              <p className="dark:text-[#acacac] text-[#969696] text-base lg:mt-10 md:mt-5 mt-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutvalue_section  lg:pb-20 md:pb-20 pb-0 lg:pt-20 md:pt-20 pt-0">
        <div className="container mx-auto ">
          <div className="lg:flex md:flex block  lg:space-x-10 md:space-x-10 space-x-0">
            <div
              className="basis-1/4 aboutvalue_section_col "
              data-aos="flip-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="aboutvalue_sectioncolumn_box  py-6 px-10  rounded-lg  ">
                <div className="aboutvalue_section_column_box_content py-3 text-center ">
                  <h2 className="text-white font-medium text-[#571a81] text-7xl py-3">
                    500
                  </h2>
                  <p className="dark:text-[#acacac] text-[#969696]  text-base">
                    All Creators
                  </p>
                </div>
              </div>
            </div>
            <div
              className="basis-1/4 aboutvalue_section_col "
              data-aos="flip-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="aboutvalue_sectioncolumn_box  py-6 px-10  rounded-lg  ">
                <div className="aboutvalue_section_column_box_content py-3 text-center ">
                  <h2 className="text-white font-medium text-[#571a81] text-7xl py-3">
                    500
                  </h2>
                  <p className="dark:text-[#acacac] text-[#969696] text-base">
                    All Creators
                  </p>
                </div>
              </div>
            </div>
            <div
              className="basis-1/4 aboutvalue_section_col "
              data-aos="flip-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="aboutvalue_sectioncolumn_box  py-6 px-10  rounded-lg  ">
                <div className="aboutvalue_section_column_box_content py-3 text-center ">
                  <h2 className="text-white font-medium text-[#571a81] text-7xl py-3">
                    500
                  </h2>
                  <p className="dark:text-[#acacac] text-[#969696]  text-base">
                    All Creators
                  </p>
                </div>
              </div>
            </div>
            <div
              className="basis-1/4 aboutvalue_section_col "
              data-aos="flip-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="aboutvalue_sectioncolumn_box  py-6 px-10  rounded-lg  ">
                <div className="aboutvalue_section_column_box_content py-3 text-center ">
                  <h2 className="text-white font-medium text-[#571a81] text-7xl py-3">
                    500
                  </h2>
                  <p className="dark:text-[#acacac] text-[#969696] text-base">
                    All Creators
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutcreate_section  pb-20 pt-0">
        <div className="container mx-auto ">
          <div className="lg:flex md:flex block lg:space-x-10 md:space-x-10 space-x-0 lg:space-y-0 md:space-y-0  space-y-10">
            <div
              className="basis-1/3 aboutcreate_section_col dark:bg-[#16151a] bg-[#f3f3f3] rounded-lg "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="aboutcreate_section_column_box  py-6 px-10  rounded-lg  ">
                <div className="aboutcreate_section_column_box_content py-3 ">
                  <Image
                    src="/images/banner03.jpg"
                    className="rounded-lg object-cover w-24"
                    alt="my image"
                    height="250px"
                    width="300px"
                  />
                  <h2 className="dark:text-white text-[#000] font-medium text-lg  py-3">
                    Set up you nft
                  </h2>
                  <p className="dark:text-[#acacac] text-[#969696] text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text
                  </p>
                </div>
              </div>
            </div>
            <div
              className="basis-1/3 aboutcreate_section_col dark:bg-[#16151a] bg-[#f3f3f3]  rounded-lg "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="aboutcreate_section_column_box  py-6 px-10  rounded-lg  ">
                <div className="aboutcreate_section_column_box_content py-3 ">
                  <img
                    src="/images/banner04.jpg"
                    className="rounded-lg object-cover w-24"
                    alt="my image"
                    height="250px"
                    width="300px"
                  />
                  <h2 className="dark:text-white text-[#000] font-medium text-lg  py-3">
                    Set up you nft
                  </h2>
                  <p className="dark:text-[#acacac] text-[#969696]  text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="basis-1/3 aboutcreate_section_col dark:bg-[#16151a] bg-[#f3f3f3]  rounded-lg "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="aboutcreate_section_column_box  py-6 px-8 rounded-lg">
                <div className="aboutcreate_section_column_box_content py-3 ">
                  <img
                    src="/images/banner05.jpg"
                    className="rounded-lg object-cover w-24"
                    alt="my image"
                    height="250px"
                    width="300px"
                  />
                  <h2 className="dark:text-white text-[#000] font-medium text-lg  py-3">
                    Set up you nft
                  </h2>
                  <p className="dark:text-[#acacac] text-[#969696] text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
