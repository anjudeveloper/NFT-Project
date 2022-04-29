import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineUser } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import SweetAlert from "react-bootstrap-sweetalert";
import NoDataFound from "./miscellaneous/NoDataFound";

import { Filter, NFTCard } from "./nft";
import { Metamask } from "../context";
import { getNFTItems } from "../helpers";

function Home() {
  const [explores, setExplores] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { useUserStorage, web3 } = useContext(Metamask.context);
  const [userData, setUserData] = useUserStorage();
  const userAddress = userData.address || "";
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    loadNFTs();
  }, [userAddress]);

  const redirectToCreateNft = () => {
    if (userAddress) {
      router.push("/nft");
    } else {
      setLoggedIn(false);
    }
  };

  const AlertTitle = (props) => {
    const { title = "Please Sign In!" } = props;
    return <span className="text-dark">{title}</span>;
  };

  async function loadNFTs() {
    setIsLoading(true);
    const items = await getNFTItems("fetchAllMarketItems");
    setExplores(items.slice(0, 8));
    setProducts(items.slice(0, 4));
    setIsLoading(false);
  }

  return (
    <>
      {!loggedIn && (
        <SweetAlert
          danger
          title={<AlertTitle />}
          onConfirm={() => setLoggedIn(!loggedIn)}
          confirmBtnCssClass="text-[#333] font-bold py-2 px-5 border-2 border-[#333] rounded-full"
        >
          You are not loged In!
        </SweetAlert>
      )}
      <section className="homepage_banner bg-[url('/images/banner-bg-image3.jpg')] bg-cover bg-center min-h-screen flex  items-center justify-center pt-20 ">
        <div className="container mx-auto ">
          <div className="lg:flex md:flex block flex-row justify-center ">
            <div className="basis-1/12   banner_left_section"></div>

            <div
              className="basis-10/12	  banner_left_section text-center "
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <h1 className="text-white font-bold	text-center text-8xl">
                Search your rare NFT by world class artists
              </h1>
              <p className="text-[#fff] text-lg text-center  lg:w-4/6 md:w-4/6 w-10/12 mx-auto my-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                expedita beatae exercitationem quasi ullam esse?
              </p>
              <button
                className="lg:mt-10 md:mt-10 mt-0  hover:bg-[#571a81] text-center mx-auto text-[#fff] font-bold py-3 px-6 border-2 border-[#fff] hover:border-[#571a81] rounded-full bg-transparent"
                onClick={redirectToCreateNft}
              >
                {" "}
                Get started
              </button>
            </div>
            <div className="basis-1/12  banner_left_section"></div>
          </div>
        </div>
      </section>
      <section className="explore_section  lg:pb-20  md:pb-20  pb-10  lg:pt-20  md:pt-20  pt-10 ">
        <div className="container mx-auto">
          <div className="flex flex-row space-x-2 lg:pb-0 md:pb-0 pb-0 ">
            <h2
              className="dark:text-white text-[#000] lg:text-4xl md:text-4xl text-2xl  font-semibold	text-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              Explore
            </h2>
          </div>
          <div className="lg:flex md:flex block flex-wrap mt-5">
            {isLoading ? (
              <div className="nodatafound_row lg:pb-10 md:pb-10 pb-10 px-3 ">
                <NoDataFound>Loading...</NoDataFound>
              </div>
            ) : explores.length ? (
              explores.map((nft, key) => {
                return <NFTCard key={key} {...nft} />;
              })
            ) : (
              <div className="nodatafound_row lg:pb-10 md:pb-10 pb-10 px-3 ">
                <NoDataFound>No Explore Found</NoDataFound>
              </div>
            )}
          </div>
        </div>

        <div
          className="text-center mx-auto editprofile_submit_btn"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <Link href="/explore" passHref>
            <button className=" mt-10 hover:bg-blue-700 text-center mx-auto  dark:text-[#fff] text-[#fff] font-bold py-3 px-6 rounded-full bg-transparent">
              See All
            </button>
          </Link>
        </div>
      </section>

      {/***********broadband**************/}
      {/*****get in touch******/}
      <section className="broadband_section lg:my-10 md:my-10 my-0  pb-12 ">
        <div className="container mx-auto">
          <div className="lg:flex broadband_section_flex  md:flex block flex-row lg:space-x-4 md:space-x-4 space-x-0 lg:space-y-0 md:space-y-0 space-y-3">
            <div
              className="lg:basis-1/4  md:basis-1/2  broadband_section_col"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="broadband_section_column_box  px-4 py-5  border dark:border-gray-800 dark:border-[#16151a] border-[#f1f1f1] bg-[#fff] dark:bg-[#16151a] border-2 rounded-lg flex align-center  cursor-pointer transition ease-in-out hover:border-[#571a81]">
                <h3 className="font-semibold broadband_section_col_abs_text	">
                  1
                </h3>
                <div className="broadband_section_column_box_image">
                  <img
                    src="/images/client-1.png"
                    className="rounded-full rounded-lg  w-24 h-24  border border-[#ffffff14] border-3"
                    alt="my image"
                    height="100px"
                    width="100px"
                  />
                </div>

                <div className="broadband_section_column_box_content  px-3 flex-col	flex align-center justify-center">
                  <h2 className="dark:text-white text-[#000] font-semibold	text-lg	">
                    Brodband
                  </h2>
                  <p className="dark:text-[#acacac]  text-[#969696] text-base">
                    {" "}
                    $2500,000
                  </p>
                </div>
              </div>
            </div>

            <div
              className="lg:basis-1/4  md:basis-1/2  broadband_section_col "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="broadband_section_column_box  px-4 py-5  border dark:border-gray-800 dark:border-[#16151a] border-[#f1f1f1] bg-[#fff] dark:bg-[#16151a] border-2 rounded-lg flex align-center  cursor-pointer transition ease-in-out hover:border-[#571a81]">
                <h3 className="font-semibold broadband_section_col_abs_text	">
                  2
                </h3>
                <div className="broadband_section_column_box_image">
                  <img
                    src="/images/client-1.png"
                    className="rounded-full rounded-lg  w-24 h-24  border border-[#ffffff14] border-3"
                    alt="my image"
                    height="100px"
                    width="100px"
                  />
                </div>

                <div className="broadband_section_column_box_content  px-3 flex-col	flex align-center justify-center">
                  <h2 className="dark:text-white text-[#000] font-semibold	text-lg	">
                    Brodband
                  </h2>
                  <p className="dark:text-[#acacac]  text-[#969696] text-base">
                    {" "}
                    $2500,000
                  </p>
                </div>
              </div>
            </div>

            <div
              className="lg:basis-1/4 md:basis-1/2   broadband_section_col "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="broadband_section_column_box  px-4 py-5  border dark:border-gray-800 dark:border-[#16151a] border-[#f1f1f1] bg-[#fff] dark:bg-[#16151a] border-2 rounded-lg flex align-center  cursor-pointer transition ease-in-out hover:border-[#571a81]">
                <h3 className="font-semibold broadband_section_col_abs_text	">
                  3
                </h3>
                <div className="broadband_section_column_box_image">
                  <img
                    src="/images/client-1.png"
                    className="rounded-full rounded-lg  w-24 h-24  border border-[#ffffff14] border-3"
                    alt="my image"
                    height="100px"
                    width="100px"
                  />
                </div>
                <div className="broadband_section_column_box_content  px-3 flex-col	flex align-center justify-center">
                  <h2 className="dark:text-white text-[#000] font-semibold	text-lg	">
                    Brodband
                  </h2>
                  <p className="dark:text-[#acacac]  text-[#969696] text-base">
                    {" "}
                    $2500,000
                  </p>
                </div>
              </div>
            </div>
            <div
              className="lg:basis-1/4  md:basis-1/2  broadband_section_col "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="broadband_section_column_box  px-4 py-5  border dark:border-gray-800 dark:border-[#16151a] border-[#f1f1f1] bg-[#fff] dark:bg-[#16151a] border-2 rounded-lg flex align-center  cursor-pointer transition ease-in-out hover:border-[#571a81]">
                <h3 className="font-semibold broadband_section_col_abs_text	">
                  4
                </h3>
                <div className="broadband_section_column_box_image">
                  <img
                    src="/images/client-1.png"
                    className="rounded-full rounded-lg  w-24 h-24  border border-[#ffffff14] border-3"
                    alt="my image"
                    height="100px"
                    width="100px"
                  />
                </div>

                <div className="broadband_section_column_box_content  px-3 flex-col	flex align-center justify-center">
                  <h2 className="dark:text-white text-[#000] font-semibold	text-lg	">
                    Brodband
                  </h2>
                  <p className="dark:text-[#acacac]  text-[#969696] text-base">
                    {" "}
                    $2500,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*********products*******/}

      <section className="myprofile_onsale  lg:px-10  md:px-10  px-4  py-20 dark:bg-[#16151a] bg-[#f3f3f3]">
        <div className="container mx-auto ">
          <div className="flex flex-row space-x-4 justify-between  items-center mb-5 ">
            <h2
              className="dark:text-white text-[#000] lg:text-4xl md:text-4xl text-2xl  font-semibold	text-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              Products
            </h2>
            <div
              className="text-center mx-auto editprofile_submit_btn"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <Link href="/explore" passHref>
                <button className="hover:bg-blue-700 text-center mx-auto  dark:text-[#fff] text-[#fff] font-bold py-3 px-6 rounded-full	bg-transparent">
                  See All
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:flex md:flex  block  flex-row lg:space-x-4 md:space-x-4 space-x-0   lg:space-y-0 md:space-y-0 space-y-3 flex-row space-x-4 ">
            {isLoading ? (
              <div className="nodatafound_row lg:pb-10 md:pb-10 pb-10 px-3 ">
                <NoDataFound>Loading...</NoDataFound>
              </div>
            ) : products.length ? (
              products.map((nft, key) => {
                return <NFTCard key={key} {...nft} />;
              })
            ) : (
              <div className="nodatafound_row lg:pb-10 md:pb-10 pb-10 px-3 ">
                <NoDataFound>No Product Found</NoDataFound>
              </div>
            )}
          </div>
        </div>
      </section>

      {/*****get in touch******/}
      <section className="getintouch_section my-10 py-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex block  flex-row lg:space-x-2 md:space-x-2 space-x-0 lg:space-y-0 md:space-y-0 space-y-2 pb-10">
            <h2
              className="dark:text-white  text-[#000] lg:text-4xl md:text-4xl text-2xl  font-semibold "
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              Get in touch. Stay in touch.
            </h2>
          </div>
          <div className="lg:flex md:flex block  flex-row lg:space-x-2 md:space-x-2 space-x-0 lg:space-y-0 md:space-y-0  space-y-3 flex-row ">
            <div
              className="basis-1/3  getintouch_section_col "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="getintouch_section_column_box  py-6 px-4  bg-[#fff]  dark:bg-[#16151a] border dark:border-[#16151a] border-[#f1f1f1] rounded-lg  ">
                <div className="getintouch_section_column_box_icons text-[#571a81] text-5xl">
                  <BiSupport />
                </div>
                <div className="getintouch_section_column_box_content py-3 ">
                  <h2 className="dark:text-white  text-[#000]  font-normal		text-lg	py-3">
                    24 / 7 Support
                  </h2>
                  <p className="dark:text-[#acacac]  text-[#969696] text-base	">
                    Got a problem? Just get in touch.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="basis-1/3  getintouch_section_col"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="getintouch_section_column_box  py-6 px-4  bg-[#fff]  dark:bg-[#16151a] border dark:border-[#16151a] border-[#f1f1f1] rounded-lg  ">
                <div className="getintouch_section_column_box_icons text-[#571a81] text-5xl">
                  <AiOutlineUser />
                </div>
                <div className="getintouch_section_column_box_content py-3 ">
                  <h2 className="dark:text-white  text-[#000]  font-normal		text-lg	py-3">
                    24 / 7 Support
                  </h2>
                  <p className="dark:text-[#acacac]  text-[#969696] text-base">
                    Got a problem? Just get in touch.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="basis-1/3  getintouch_section_col"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="getintouch_section_column_box  py-6 px-4   bg-[#fff]  dark:bg-[#16151a] border dark:border-[#16151a] border-[#f1f1f1] rounded-lg  ">
                <div className="getintouch_section_column_box_icons text-[#571a81] text-5xl">
                  <MdOutlineProductionQuantityLimits />
                </div>
                <div className="getintouch_section_column_box_content py-3 ">
                  <h2 className="dark:text-white  text-[#000]  font-bold	text-lg	py-3">
                    24 / 7 Support
                  </h2>
                  <p className="dark:text-[#acacac]  text-[#969696] text-base">
                    Got a problem? Just get in touch.
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

export default Home;
