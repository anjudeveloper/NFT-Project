import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { FaEthereum } from "react-icons/fa";

function Filter({ data, setData }) {
  const [filterData, setFilterData] = useState({
    name: "",
    sold: "",
    range: [0, 100],
  });
  const { name, sold, range } = filterData;

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    event.preventDefault();
    setFilterData({ ...filterData, range: newValue });
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const newValue =
      name == "sold"
        ? value == "true"
          ? true
          : value == "false"
          ? false
          : value
        : value;
    setFilterData({ ...filterData, [name]: newValue });
  };

  const handleFilter = (filterObject) => {
    const nftName = filterObject.name;
    const nftSold = filterObject.sold;
    const [start, end] = filterObject.range;

    var i, newData;
    // Loop through all list items, and hide those who don't match the search query
    newData = [];
    for (i = 0; i < data.length; i++) {
      const item = data[i];
      const itemName = item.name;
      const itemSold = item.isSold;
      const itemPrice = item.price;
      let pushStatus = false;

      if (nftName && itemName.toUpperCase().indexOf(nftName) > -1) {
        pushStatus = true;
      }
      if (nftSold) {
        if (itemSold && nftSold == "yes") {
          pushStatus = true;
        }
        if (!itemSold && nftSold == "no") {
          pushStatus = true;
        }
      }
      if (itemPrice >= start && itemPrice <= end) {
        pushStatus = true;
      }

      if (pushStatus) {
        newData.push(item);
      }
    }
    setData(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFilter(filterData);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setFilterData({
      name: "",
      sold: null,
      range: [0, 100],
    });
    setData(data);
  };

  return (
    <div>
      <form
        className="w-full mb-10 mt-10"
        onSubmit={handleSubmit}
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-5 grid-cols-1">
          <div className=" px-3 mb-6 md:mb-0">
            <label
              className="block dark:text-[#fff] text-[#363434]  text-md mb-2"
              htmlFor="grid-city"
            >
              Name
            </label>
            <div className="">
              <input
                type="text"
                name="name"
                className="block shadow appearance-none w-full bg-transparent border-2 border-[#ffffff14] rounded py-3 px-4 leading-tight dark:text-white text-[#7d7d7d] text-sm"
                placeholder="Enter Name"
                value={name}
                onChange={handleChange}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="  px-3 mb-6 md:mb-0">
            <label
              className="block dark:text-[#fff] text-[#363434] text-md mb-2"
              htmlFor="grid-state"
            >
              Sold
            </label>
            <div className="">
              <select
                className="block shadow appearance-none w-full bg-transparent border-2 border-[#ffffff14] rounded py-3 px-4 leading-tight dark:text-white text-[#7d7d7d] text-sm"
                name="sold"
                onChange={handleChange}
              >
                <option value="">Select Sold</option>
                <option value={sold == "yes"}>
                  Yes
                </option>
                <option value={sold == "no"}>
                  No
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className=" px-3 mb-6 md:mb-0">
            <label
              className="block dark:text-[#fff] text-[#363434] text-md mb-2"
              htmlFor="grid-zip"
            >
              Price range
            </label>
            <div
              className="dark:text-white text-[#969696]"
              style={{
                margin: "0",
                display: "block",
                width: "fit-content",
              }}
            >
              <Slider
                value={range}
                onChange={rangeSelector}
                valueLabelDisplay="auto"
                min={0}
                max={500}
              />
              Your range of Price is between{" "}
              <FaEthereum className="inline-flex -mt-1" /> {range[0]} and{" "}
              <FaEthereum className="inline-flex -mt-1" /> {range[1]}
            </div>
          </div>
          <div className=" px-3 mb-6 md:mb-0">
            <button
              type="submit"
              className="border-2 rounded-full mr-1 text-white hover:bg-[#571a81] hover:border-[#571a81] font-bold py-2 px-6"
            >
              Submit
            </button>{" "}
            <button
              type="button"
              onClick={handleReset}
              className="border-2 rounded-full text-white hover:bg-[#571a81] hover:border-[#571a81] font-bold py-2 px-6"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filter;
