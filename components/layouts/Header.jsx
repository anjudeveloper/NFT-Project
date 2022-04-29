import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { BsSun, BsMoon } from "react-icons/bs";
import Link from "next/link";
import { Common, Metamask } from "../../context";
import Menus from "../../data/menus.json";
import CustomNavLink from "./CustomNavLink";
import Image from "next/image";
import TextField from "@mui/material/TextField";

function Header() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const { darkMode, setDarkMode, useMarketItems } = Common.useContext();
  const [marketItems, setMarketItems] = useMarketItems();
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(false);
  const { useUserStorage, login, logout, web3 } = useContext(Metamask.context);

  // Get User Data from Local Storage
  const [userData, setUserData] = useUserStorage();
  const userAddress = userData.address || "";
  const router = useRouter();
  const [search, setSearch] = useState("");

  const connectToWallet = (event) => {
    event.preventDefault();
    login();
  };

  const disconnectToWallet = (event) => {
    event.preventDefault();
    logout();
  };

  const searchMarketItems = async (value) => {
    var filter, i;
    if (!value) return false;
    filter = value.toUpperCase();
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < marketItems.length; i++) {
      let marketItem = marketItems[i];
      let { name, description, price, symbol, tokenId } = marketItem;
      if (
        name.toUpperCase().indexOf(filter) > -1
        // || (description.toUpperCase().indexOf(filter) > -1)
        // || (price.toUpperCase().indexOf(filter) > -1)
        // || (symbol.toUpperCase().indexOf(filter) > -1)
      ) {
        router.push(`/explore/${tokenId}`);
        return;
      }
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="z-10 bg-transparent absolute  w-full border-b-2  border-[#ffffff14] ">
        <div className="container mx-auto header">
          <div className="lg:flex md:flex block flex-row">

            <div className="basis-7/12 flex left_header items-center">
              <Link
                href="/"
                passHref
                className="cursor-pointer text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-white"
              >
                <img
                  src="/logo1.png"
                  alt="my image"
                  height="100px"
                  width="226px"
                  className="cursor-pointer"
                />
              </Link>
              <div className="menus ">
                <nav className=" flex flex-wrap items-center justify-between ">
                  <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full flex justify-between  lg:w-auto md:w-auto    px-4 lg:static lg:block md:static md:block  lg:justify-start">
                      <button
                        className="  inline-flex p-3  rounded lg:hidden md:hidden text-white ml-auto hover:text-white outline-none "
                        onClick={() => setActive(!active)}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                    <nav className="flex items-center flex-wrap ">
                      <div
                        className={`${active ? "menu_active " : ""
                          }w-full lg:inline-flexlg:flex-grow lg:w-auto`}
                      >
                        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                          <ul className="flex  flex-col md:flex-row lg:flex-row list-none ml-auto">
                            {Menus.map((menu, index) => (
                              <li key={`menu-${index}`} className="nav-item">
                                <CustomNavLink {...menu}>
                                  {menu.name}
                                </CustomNavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </nav>
              </div>
            </div>

            <div className="basis-5/12 right_header flex items-center justify-end">
              <ul className="w-full flex items-center justify-end ">
                {userAddress ? (
                  <li className="dropdown inline px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide float-right">
                    <div className="rounded-full dropdown inline text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
                      <img
                        src="/images/boy-avater.png"
                        alt="my image"
                        height="32px"
                        width="35px"
                        className="rounded-full"
                      />
                    </div>
                    <div className="dropdown-menu absolute hidden h-auto flex ">
                      <ul className="block w-full bg-white shadow px-12 py-8">
                        <li>
                          {" "}
                          <Link passHref className="py-1" href="/profile">
                            My Profile
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link passHref className="py-1" href="/profile/edit">
                            Edit Profile
                          </Link>
                        </li>
                        <li onClick={disconnectToWallet}>
                          <a href="#" className="py-1">
                            Sign Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li className="dropdown inline px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide float-right	">
                    <div className=" rounded-full dropdown inline text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide  cursor-pointer">
                      <button
                        className=" hover:bg-[#571a81] text-center mx-auto text-[#fff] font-bold py-1 px-2 border-2 border-[#fff] hover:border-[#571a81] rounded-full bg-transparent text-sm"
                        onClick={connectToWallet}
                      >
                        {" "}
                        SIGN IN
                      </button>
                    </div>
                  </li>
                )}
              </ul>
              <div className="header_sun_icon text-[#fff] mr-4 rounded-full  p-2  cursor-pointer ">
                <a
                  id="theme-toggle pointer-events-auto"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? <BsMoon /> : <BsSun />}
                </a>
              </div>

              <div className="search">
                <TextField
                  id="outlined-basic"
                  onChange={inputHandler}
                  variant="outlined"
                  fullWidth
                  placeholder="Search Here..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
