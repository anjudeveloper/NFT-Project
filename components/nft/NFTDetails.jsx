import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import { ethers } from "ethers";

import { getNFTItems } from "../../helpers";
import { NFTCard } from ".";
import { Metamask } from "../../context";
import { NoDataFound } from "../miscellaneous";
import { getNftMarketContract, trimString } from "../../helpers";
import { NFT } from "../../utils";

export default function NFTDetail() {
  const [nftDetail, setNftDetail] = useState({
    description: "...",
    image: "/images/portfolio-10.jpg",
    name: "Test",
    owner: "",
    price: "0.00",
    seller: "",
    tokenId: 0,
    isSold: false,
  });

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const tokenId = router.query.tokenId;
  const currentPath = router.asPath;
  let redirectUrl = currentPath.replace(`/${tokenId}`, "");
  const { useUserStorage } = useContext(Metamask.context);
  const [userData] = useUserStorage();
  const userAddress = userData.address || "";

  useEffect(() => {
    const loadNftDetails = async () => {
      setIsLoading(true);
      const items = await getNFTItems("fetchAllMarketItems");
      const item = items.find((item) => item.tokenId == tokenId);
      if (typeof item !== "undefined" && item) {
        setNftDetail(item);
        setRelatedProducts(items.slice(0, 4));
        setIsLoading(false);
      } else {
        router.push(redirectUrl);
      }
    };

    loadNftDetails();
  }, [tokenId, redirectUrl, router]);

  async function handleBuyNFT(event) {
    event.preventDefault();
    const contract = await getNftMarketContract();
    // //set the price
    const price = new ethers.utils.parseUnits(
      nftDetail.price.toString(),
      "ether"
    );

    //make the sale
    const transaction = await contract.createMarketSale(
      NFT.Address,
      nftDetail.itemId,
      {
        value: price,
      }
    );
    const tx = await transaction.wait();
    console.log(tx);
    router.push('/nft');
  }

  if (isLoading) {
    return (
      <div className="nodatafound_row lg:pb-10 md:pb-10 pb-10 px-3 ">
        <NoDataFound>Loading...</NoDataFound>
      </div>
    );
  }

  return (
    <div className="dark:bg-[#09080d] bg-[#fff]">
      <section className="productdetail_section  lg:pb-20 md:pb-0 pb-0 pt-20">
        <div className="container mx-auto">
          <div className="lg:flex md:block block ">
            <div
              className="basis-5/12 productdetail_section_image_col"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <div className="productdetail_section_image_col_imagebox  m-1   p-2  rounded-lg dark:bg-[#16151a] bg-[#f3f3f3]   cursor-pointer hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                <img
                  src={nftDetail.image}
                  className="object-cover w-full rounded-lg"
                  alt="my image"
                  height="600px"
                  width="600px"
                />
              </div>
            </div>

            <div
              className="basis-7/12 lg:pl-10 md:pl-0 pl-0 "
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <div className="productdetail_section__col_content_box m-1  p-2]">
                <div className="productdetail_section_col_content_box py-3 px-3">
                  <h2 className="dark:text-white text-[#000] font-bold text-4xl capitalize">
                    {nftDetail.name}
                  </h2>
                  <div className="lg:flex md:flex block mt-3 items-center justify-between productdetail_section_col_content_sizebox_row lg:space-y-0 md:space-y-0 space-y-5">
                    <div className="productdetail_section_col_content_sizebox flex items-center  dark:bg-[#16151a] bg-[#f3f3f3] r">
                      <h2 className="dark:text-white text-[#000] font-normal text-md">
                        Token ID :{" "}
                      </h2>
                      <p className="dark:text-[#acacac] text-[#969696] text-base pl-2">
                        {nftDetail.tokenId}
                      </p>
                    </div>
                    <div className="productdetail_section_col_content_sizebox flex items-center dark:bg-[#16151a] bg-[#f3f3f3] ">
                      <h2 className="dark:text-white text-[#000] font-normal text-md">
                        Price :{" "}
                      </h2>
                      <p className="dark:text-[#acacac] text-[#969696] text-base pl-2">
                        <FaEthereum className="inline-flex -mt-1 mr-1" />
                        {nftDetail.price}
                      </p>
                    </div>
                    <div className="productdetail_section_col_content_sizebox flex items-center dark:bg-[#16151a] bg-[#f3f3f3] ">
                      <p className="dark:text-[#acacac] text-[#969696] text-base pl-2">
                        <span className={nftDetail.isSold ? "text-green-500" : "text-red-500"}>{nftDetail.isSold ? "Sold" : "UnSold"}</span>
                      </p>
                    </div>
                  </div>
                  <p className="dark:text-[#acacac] text-[#969696] text-base my-8">
                    Seller :{" "}
                    <span title={nftDetail.seller}>
                      {trimString(nftDetail.seller)}
                    </span>
                  </p>
                  <p className="dark:text-[#acacac] text-[#969696] text-base my-8">
                    Owner :{" "}
                    <span title={nftDetail.owner}>
                      {trimString(nftDetail.owner)}
                    </span>
                  </p>
                  <p className="dark:text-[#acacac] text-[#969696] text-base my-8">
                    {nftDetail.description}
                  </p>
                  {!nftDetail.isSold ? (
                    <div className="myprofile_onsale_column_box_content_purchase_btn flex justify-left ">
                      <button
                        className="hover:bg-[#571a81] dark:text-[#fff] text-[#000] hover:text-[#fff] text-sm font-normal py-2 px-6 rounded-full border-2 dark:border-[#fff] border:[#000] hover:border-[#571a81] bg-transparent"
                        onClick={handleBuyNFT}
                      >
                        {" "}
                        Buy Now
                      </button>
                    </div>
                  ) : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="explore_section  pb-20 pt-20">
        <div className="container mx-auto">
          <div className="flex flex-row space-x-2 pb-10 ">
            <h2
              className="dark:text-white text-[#000] text-4xl font-semibold	text-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              Related Products
            </h2>
          </div>
          <div className="lg:flex md:flex  block  flex-row lg:space-x-4 md:space-x-4 space-x-0   lg:space-y-0 md:space-y-0 space-y-3 flex-row space-x-4	">
            {relatedProducts.map((nft, key) => {
              return <NFTCard key={key} {...nft} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
