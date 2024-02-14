"use client";

import Data from "@/utils/data";
import { HiOutlineXMark } from "react-icons/hi2";

import Link from "next/link";
import Image from "next/image";
import HeaderDesign from "../../public/HeaderDesign.svg";
import LOGO from "../../public/assets/Logo.svg";
import Menu from "../../public/assets/menu.svg";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const path = usePathname();

  return (
    <>
      {/* public\HeaderDesign.svg */}
      <div className="pb-[30px] text-[14px] large:text-[16px] extraL:text-[18px]  bg-no-repeat py-[20px] px-[34px] small:px-[17px] small:py-[10px] relative ">
        <Image
          src={HeaderDesign}
          alt=""
          priority={true}
          width=""
          height=""
          className="absolute top-0 left-0 extraL:w-1/3 large:w-1/3 "
        />
        <div className="relative bg-[rgb(26,26,26)] py-[20px] px-[34px] flex justify-between rounded-[100px] large:space-x-1 pt-[20px] border-t-[1px] border-b-[1px] border-[rgb(38,38,38)] align-middle">
          <div>
            <Link href="/">
              <Image
                src={LOGO}
                alt=""
                className="small:w-4/5 mt-2"
                width=""
                height=""
              />
            </Link>
          </div>

          {/* Small and Medium */}
          <div
            className={
              menu
                ? "extraL:hidden large:hidden"
                : "extraL:hidden large:hidden bg-[rgb(202,255,51)]  px-[14px] rounded-[82px] small:px-[8px]   ml-auto mb-auto h-fit w-fit z-10 mt-2  "
            }
          >
            <button onClick={() => setMenu(!menu)}>
              {menu ? (
                <>
                  <div className="fixed bg-[rgb(26,26,26)] inset-0 medium:w-1/2 medium:ml-auto medium:opacity-[0.99] z-10 small:opacity-[0.99] scroll-auto ">
                    <div className="fixed right-10 top-10">
                      <button onClick={() => setMenu(!menu)}>
                        <HiOutlineXMark className="text-[30px]" />
                      </button>
                    </div>

                    <ul className="space-y-5 mt-16 ">
                      {Data.map((item) => {
                        return (
                          
                            <li
                              key={item.id}
                              className="cursor-pointer text-left mx-10 "
                            >
                              <Link
                                onClick={() => setMenu(!menu)}
                                href={item.href}
                                className={
                                  path === item.href
                                    ? " underline underline-offset-2 rounded-[82px]"
                                    : ""
                                }
                              >
                                {item.name}
                              </Link>
                            </li>
                          
                        );
                      })}

                      <li key="signin" className="cursor-pointer mt-2">
                        <div className="mx-auto bg-[rgb(205,255,51)] text-black px-[24px] py-[12px] rounded-[82px] w-1/2">
                          <Link href="/signin">Sign in</Link>
                        </div>
                      </li>

                      <li key="login" className=" cursor-pointer mt-2 ">
                        <div className=" mx-auto bg-[rgb(205,255,51)] text-black px-[24px] py-[12px] rounded-[82px] w-1/2  ">
                          <Link href="/login">Login</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <Image
                    src={Menu}
                    alt=""
                    className="small:w-2/3 mx-auto mt-2 w-fit h-fit "
                    width=""
                    height=""
                  />
                </>
              )}
            </button>
          </div>

          {/* Navbar */}
          <div>
            <ul className="flex mt-3 small:hidden medium:hidden space-x-5 ">
              {Data.map((item) => {
                return (
                  
                    <li key={item.id}  className="justify-between">
                      <Link
                        className={
                          path === item.href
                            ? "bg-[rgb(38,38,38)] px-[18px] py-[10px] rounded-[82px]"
                            : ""
                        }
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    </li>
                  
                );
              })}
            </ul>
          </div>

          <div>
            <ul className="mt-3 small:hidden medium:hidden space-x-5 flex">
              <li key="signinnav">
                <Link href="/signup">Sign Up</Link>
              </li>

              <li key="loginnav">
                <div className=" bg-[rgb(205,255,51)] text-black px-[24px] py-[12px] rounded-[82px] -mt-[13px]">
                  <Link href="/login">Login</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
