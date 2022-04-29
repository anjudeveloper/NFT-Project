import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Card(props) {
  const router = useRouter();

  const {
    description = "fdfgdfgs fgsd gtert ",
    image = "/images/portfolio-04.jpg",
    name = "Demo Title",
    owner,
    price = "0.00",
    seller = "",
    tokenId = 0,
  } = props;

  const redirectToDetailPage = (event, tokenId) => {
    event.preventDefault();
    router.push({
      pathname: "/explore/[tokenId]",
      query: { tokenId: tokenId },
    });
  };

  return (
    <div
      className="basis-1/4 myprofile_onsale_col"
      data-aos="flip-left"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="300"
      data-aos-duration="2000"
    >
      <div className="myprofile_onsale_column_box  m-1   p-2  border-2 dark:border-[#16151a] rounded-lg dark:bg-[#16151a]   bg-[#fff] cursor-pointer ">
        <a href="#" onClick={(event) => redirectToDetailPage(event, tokenId)}>
          <div className="explore_section_column_box_image">
            <img
              src={image}
              alt="NFT Image"
              className="object-cover w-full rounded-lg"
              height={300}
              width={300}
            />
            <div className="myprofile_onsale_weth">
              <a className="text-[#571a81] text-xs  font-bold leading-6">
                {price} ETH
              </a>
            </div>
          </div>
        </a>
        <div className="myprofile_onsale_column_box_content  text-center py-3 px-3">
          <div className="myprofile_onsale_column_box_content_headingrow flex  items-center justify-between ">
            <h2 className="dark:text-white text-[#000] font-normal	 text-xl">
              {name}
            </h2>
          </div>
          <p className="dark:text-[#acacac]  text-[#969696] text-left text-sm my-3">
            {description}
          </p>
          {/* <div className="myprofile_onsale_column_box_content_purchase_btn flex justify-left ">
                        <button className=" hover:bg-[#571a81]  dark:text-[#fff] text-[#000] hover:text-[#fff] text-sm font-normal	 py-2 px-6 rounded-full border-2 dark:border-[#fff] border:[#000] hover:border-[#571a81] bg-transparent"> Buy Now</button>
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
