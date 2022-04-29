import React, { useContext, useEffect } from "react";
import { Header, Footer } from "../components/layouts";
import { useCommonContext } from "../context/Common";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";
 
import AOS from "aos";
import "aos/dist/aos.css";

function Layout({ children, ...props }) {
  const { darkMode } = useCommonContext();
  const {
    title = "Home",
    breadcrumb = false,
    breadcrumbLinks = [
      {
        name: "Home",
        href: "/",
      },
    ],
  } = props;

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  });

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Header />
      <div className="bg-[#fff] dark:bg-[#09080d]">
        {breadcrumb ? (
          <div className="breadcrumb bg-[url('/images/banner-bg-image1.jpg')] bg-cover bg-center  pt-40 pb-20  border-[#ffffff14]  bg-cover bg-center">
            <div className="container mx-auto">
              <div
                className="flex  space-x-2 items-center justify-center"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <div className="breadcrumb_title text-cener">
                  <h2 className="text-white text-6xl text-center font-semibold">
                    {title}
                  </h2>
                  <ul className="list-none  flex text-[#fff]  mt-5 text-md font-bold  items-center justify-center space-x-2">
                    {breadcrumbLinks.map((link, bckKey) => {
                      let last = breadcrumbLinks.length == bckKey + 1;
                      let active = !link.href || link.active ? " active" : "";
                      return (
                        <li key={bckKey}>
                          <span>
                            <Link href={link.href}>
                              <a className={`hover:text-[#571a81]${active}`}>
                                {link.name}
                              </a>
                            </Link>
                          </span>
                          {!last && (
                            <span>
                              <a>
                                <GoChevronRight />
                              </a>
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
