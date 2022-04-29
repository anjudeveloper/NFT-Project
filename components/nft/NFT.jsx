import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { MyNFT } from '../nft'
import Link from "next/link";
import { Metamask } from '../../context'
import { getNFTItems } from '../../helpers';
import { NoDataFound } from "../miscellaneous";

function NFT() {
  const [nfts, setNfts] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const { useUserStorage, web3 } = useContext(Metamask.context);

  // Get User Data from Local Storage
  const [userData, setUserData] = useUserStorage();
  const userAddress = userData.address || '';
  const router = useRouter();

  useEffect(() => {
    if (!userAddress) {
      router.push('/');
      return;
    }
    loadNFTs()

  }, [userAddress, router]);
 

  async function loadNFTs() {
    setIsLoading(true)
    let items = await getNFTItems('fetchMyNFTs');
    items = items.filter(item => typeof item !== 'undefined' && item);
    setNfts(items)
    setIsLoading(false)
  }


  return (
    <div className="dark:bg-[#09080d] bg-[#fff]">
      <section className="explore_section  pb-20 pt-20 lg:px-10 md:px-2 px-1" >
        <div className="container mx-auto">
          <div className="flex flex-row space-x-2 pb-10 justify-between">
            <h2 className="dark:text-white text-[#000] text-4xl font-semibold	text-center" data-aos="zoom-in" data-aos-duration="3000">My NFT</h2>
            <div className="editprofile_submit_btn ">
              <Link href="/nft/create" className="editprofile_submit_btn " >
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-normal	 py-2 px-4 rounded-full">New Create</a>
              </Link>
            </div>

          </div>
          <div className="lg:flex md:flex block flex-wrap">
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
                    <NoDataFound>No NFT Found</NoDataFound>
                  </div>
                )
              )}
          </div>
        </div>
      </section>

    </div>
  )

}

export default NFT;
