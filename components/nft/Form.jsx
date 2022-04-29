import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { useRouter } from "next/router";
import Web3Modal from "web3modal";
import Image from "next/image";
import { Metamask } from "../../context";

import { nftaddress, nftmarketaddress } from "../../config";
import NFT from '../../artifacts/contracts/NFT.sol/NFT.json';
import Market from '../../artifacts/contracts/NFTMarket.sol/NFTMarket.json';

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

function Form() {
  const [fileUrl, setFileUrl] = useState(null);
  const [isValidated, setIsValidated] = useState(false);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
  });
  const { useUserStorage, web3 } = useContext(Metamask.context);

  // Get User Data from Local Storage
  const [userData, setUserData] = useUserStorage();
  const userAddress = userData.address || "";
  const router = useRouter();

  useEffect(() => {
    if (!userAddress) {
      router.push("/");
      return;
    }
  }, [userAddress, router]);

  async function onFileChange(e) {
    const file = e.target.files[0];
    try {
      //try uploading the file
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      //file saved in the url path below
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (e) {
      console.log("Error uploading file: ", e);
    }
  }

  //1. create item (image/video) and upload to ipfs
  async function createItem() {
    const { name, description, price } = formInput; //get the value from the form input

    //form validation
    if (!name || !description || !price || !fileUrl) {
      return;
    }

    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });

    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      //pass the url to sav eit on Polygon adter it has been uploaded to IPFS
      createSale(url);
    } catch (error) {
      console.log(`Error uploading file: `, error);
    }
  }

  //2. List item for sale
  async function createSale(url) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    //sign the transaction
    const signer = provider.getSigner();
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
    let transaction = await contract.createToken(url);
    let tx = await transaction.wait();

    //get the tokenId from the transaction that occured above
    //there events array that is returned, the first item from that event
    //is the event, third item is the token id.
    console.log("Transaction Create token: ", tx);
    console.log("Transaction events: ", tx.events[0]);
    let event = tx.events[0];
    let value = event.args[2];
    let tokenId = value.toNumber(); //we need to convert it a number

    //get a reference to the price entered in the form
    const price = ethers.utils.parseUnits(formInput.price, "ether");

    contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

    //get the listing price
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();

    transaction = await contract.createMarketItem(nftaddress, tokenId, price, {
      value: listingPrice,
    });

    await transaction.wait();
    console.log("Transaction of Create item: ", tx);
    router.push('/nft')
  }

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    updateFormInput({ ...formInput, [name]: value });
  };

  const isFormValidated = () => {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl) {
      return false;
    }
    return true;
  };

  return (
    <section className="createpage_section  pb-20 pt-20">
      <div className="container mx-auto ">
        <div className="flex flex-row justify-center ">
          <div className="basis-1/12 "></div>
          <div
            className="basis-4/12 createpage_left_side"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <div className="mb-3 w-96 mb-5 createpage_left_side_column_input">
              <h2 className="dark:text-white text-[#000] font-bold	text-lg	">
                Upload file
              </h2>
              <p className="text-[#acacac] text-base	mb-3">
                Drag or choose your file to upload
              </p>
            </div>
            <div className="mb-3 w-96 createpage_left_side_column">
              {fileUrl ? (
                <img
                  src={fileUrl}
                  alt="Picture of the author"
                  className="rounded mt-4"
                  width={270}
                  height={230}
                />
              ) : (
                <label
                  htmlFor="formFileSm"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
                </label>
              )}

              <input
                className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={onFileChange}
                type="file"
              />
            </div>
          </div>
          <div
            className="basis-7/12  createpage_right_side"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="create_form dark:bg-[#16151a] bg-[#f3f3f3]  p-5 rounded-lg ">
              <form className="w-full mb-10 mt-10">
                <div className="grid grid-cols-2 mb-5">
                  <div className=" px-3 mb-6 md:mb-0">
                    <label
                      className="block dark:text-[#fff] text-[#363434] text-md mb-2"
                      htmlFor="grid-city"
                    >
                      NFT Name
                    </label>
                    <input
                      className="shadow appearance-none w-full w-full dark:text-white text-[#969696]  dark:bg-transparent bg-[#fff] border-2 border-[#ffffff14] rounded py-3 px-4 leading-tight  text-white text-sm text-white"
                      onChange={handleChange}
                      name="name"
                      value={formInput.name}
                      type="text"
                      placeholder="Enter NFT Name"
                    />
                  </div>
                  <div className=" px-3 mb-6 md:mb-0">
                    <label
                      className="block dark:text-[#fff] text-[#363434] text-md mb-2"
                      htmlFor="grid-city"
                    >
                      Item Price in eth
                    </label>
                    <input
                      className="shadow appearance-none w-full w-full dark:text-white text-[#969696] dark:bg-transparent bg-[#fff] border-2 border-[#ffffff14] rounded py-3 px-4 leading-tight  text-white text-sm text-white"
                      onChange={handleChange}
                      name="price"
                      value={formInput.price}
                      type="number"
                      placeholder="Enter NFT Price"
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-1 mb-5">
                  <div className=" px-3 mb-6 md:mb-0">
                    <label
                      className="block dark:text-[#fff] text-[#363434] text-md mb-2"
                      htmlFor="grid-city"
                    >
                      Discription
                    </label>
                    <input
                      className="shadow appearance-none w-full w-full dark:text-white text-[#969696] dark:bg-transparent bg-[#fff] border-2 border-[#ffffff14] rounded py-3 px-4 leading-tight  text-white text-sm text-white"
                      type="text"
                      name="description"
                      onChange={handleChange}
                      value={formInput.description}
                      placeholder="Enter Description Of The Item"
                    ></input>
                  </div>
                </div>
                <div className="grid grid-cols-4 mb-5 editprofile_submit_btn">
                  {isFormValidated() ? (
                    <button
                      type="button"
                      className="bg-blue-500 hover:bg-blue-700 rounded-full text-white font-bold py-3 px-6"
                      onClick={createItem}
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="bg-blue-500 rounded-full text-white font-bold py-3 px-6 cursor-not-allowed"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
