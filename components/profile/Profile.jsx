import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { ethers } from "ethers";
import { SiEthereum } from "react-icons/si";

import { MyNFT } from '../nft'
import { Metamask } from "../../context";
import { getNFTItems } from '../../helpers';
import { NoDataFound } from "../miscellaneous";
import { useLocalStorage } from "../miscellaneous/hooks";

function Profile() {
  const [nfts, setNfts] = useState([])
  const [balance, setBalance] = useState("0.00");
  const [isLoading, setIsLoading] = useState(false);
  const { useUserStorage, web3 } = useContext(Metamask.context);

  // Get User Data from Local Storage
  const [userData, setUserData] = useUserStorage();
  const userAddress = userData.address || "";
  const [usersProfile] = useLocalStorage("user_profile", []);
  const currentUserData = usersProfile.find(
    (value) => value.address === userAddress
  ) || {
    name: "Demo User",
    username: "demo123",
    description: "This is demo description",
    socialLinks: {
      facebook: "",
      instagram: "",
      twitter: "",
    },
  };

  useEffect(() => {
    const onLoadGetBalance = async (address = "") => {
      let walletAddress = address.trim() ? address.trim() : userAddress;
      var newBalance = "0.00";
      if (walletAddress) {
        let provider = await Metamask.getWeb3Provider();
        let bal = await provider.getBalance(walletAddress);
        let newbal = new ethers.utils.parseEther(bal.toString());
        newbal = newbal.toString()
        newBalance = parseFloat(newbal);
  
        // .toFixed(4)
      }
      setBalance(newBalance);
    };

    onLoadGetBalance();
    loadNFTs()

  }, [userAddress]);

  const trimAddress = (address) => {
    address = address.trim() ? address.trim() : "";
    if (address) {
      return `${address.substring(0, 7)}...${address.substr(
        address.length - 5
      )}`;
    }
    return "";
  };

  async function loadNFTs() {
    setIsLoading(true)
    let items = await getNFTItems();
    items = items.filter(item => typeof item !== 'undefined' && item);
    setNfts(items)
    setIsLoading(false)
  }

  return (
    <>
      <section className="myprofile_page py-20">
        <div className="container mx-auto ">
          <div className="lg:flex  md:flex block items-center dark:bg-[#16151a] bg-[#f3f3f3] p-10">
            <div
              className="basis-3/12  myprofile_page_profile_row_image "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="px-7">
                <div className="myprofile_page_profile_row_image_box">
                  <Image
                    src="/images/profile-image1.jpg"
                    alt="Profile Bg Image"
                    className="rounded-lg rounded-full object-cover"
                    height="400px"
                    width="400px"
                  />
                </div>
              </div>
            </div>
            <div
              className="basis-5/12  myprofile_page_pr0file_row_image_content "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <h2 className="dark:text-white text-[#000]  font-bold	text-3xl">
                {currentUserData.name ?? "Demo User"}
              </h2>
              <h2 className="text-white font-bold text-md text-[#571a81] my-2">
                @{currentUserData.username ?? "demo123"}
              </h2>
              <p className="text-[#acacac] text-base " title={userAddress}>
                {trimAddress(userAddress)}
              </p>
              <p className="text-[#acacac] text-base text-primary flex items-center lg:justify-flex-start  md:justify-flex-start mt-2 -ml-1">
                <SiEthereum /> {balance}
              </p>
            </div>
            <div
              className="basis-2/12  myprofile_page_pr0file_row_image_btn "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="grid mb-5 editprofile_submit_btn">
                {/* <p className="text-[#acacac] text-base text-right">500 Followers</p> */}
              </div>
            </div>
            <div
              className="basis-3/12  myprofile_page_pr0file_row_image_btn lg:ml-10 md:ml-10 ml-0  lg:p-10 md:p-10 p-2"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="grid  mb-5 editprofile_submit_btn">
                <Link href="/profile/edit" passHref>
                  <button className="bg-blue-500 hover:bg-blue-700 rounded-full text-white font-bold py-3 px-6">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="myprofile_onsale mb-20 ">
        <div className="container mx-auto ">
          <div className="flex flex-row space-x-4 justify-center mb-20 ">
            <h2
              className="dark:text-white text-[#000] text-4xl font-semibold	text-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              On Sale
            </h2>
          </div>

          <div className="lg:flex  md:flex block flex-row lg:space-x-4 md:space-x-4 space-x-0">
            {isLoading ? (
                <div className="nodatafound_row lg:pb-10 md:pb-10 pb-10 px-3 ">
                  <NoDataFound>Loading...</NoDataFound>
                </div>
              ) :
                (nfts.length ?
                  nfts.map((nft, key) => {
                    return <MyNFT key={key} {...nft} />
                  }) : (
                    <div className="nodatafound_row lg:pb-10 md:pb-10 pb-10 px-3 ">
                      <NoDataFound>No Sale Found</NoDataFound>
                    </div>
                  )
                )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
