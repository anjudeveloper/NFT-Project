import React from "react";
import Image from "next/image";
import Link from "next/link";

function MyNFT(props) {
  const {
    description = "fdfgdfgs fgsd gtert ",
    image = "/images/portfolio-04.jpg",
    name = "Demo User 1",
    owner = "0x0000000000000000000000000000000000000000",
    price = "0.01",
    seller = "0x9a784f8F11A669B2FDeE6c6e26D3f371E73EaDF7",
    tokenId = 2,
  } = props;

  return (
    <div
      className="basis-2/12 myprofile_onsale_col m-1"
      data-aos="flip-left"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="300"
      data-aos-duration="2000"
    >
      <div className="myprofile_onsale_column_box border-2 dark:border-[#16151a] rounded-lg  cursor-pointer pb-3 ">
        <Link
          href={{
            pathname: "/nft/[tokenId]",
            query: { tokenId: tokenId },
          }}
          passHref
        >
          <div className="explore_section_column_box_image text-center">
            <img
              src={image}
              className="text-center w-full  border border-[#ffffff14] border-3"
              alt="my image"
              height="100px"
              width="100px"
            />
          </div>
        </Link>
        <div className="myprofile_onsale_column_box_content  text-center ">
          <div className="myprofile_onsale_column_box_content_headingrow flex justify-center">
            <h2 className="dark:text-white text-[#000] font-normal	 text-xl  text-center  ">
              {name}
            </h2>
          </div>
          <p className="dark:text-[#acacac]  text-[#969696] text-center text-sm my-3 lg:px-1 md:px-1 px-3">
            {description}
          </p>
          <div className="text-center  ">
            <a className="text-[#fff] bg-[#571a81] text-xs  rounded-full px-3 py-1 font-bold leading-6">
              {price} ETH
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNFT;
