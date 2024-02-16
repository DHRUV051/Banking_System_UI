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
import clsx from "clsx";

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
          className="absolute top-0 left-0 extraL:w-1/3 large:w-1/3 small:w-2/3 medium:w-2/3"
        />
        <div className="relative bg-[rgb(26,26,26)] py-[20px] px-[34px] flex justify-between rounded-[100px] large:space-x-1 pt-[20px] border-t-[1px] border-b-[1px] border-[rgb(38,38,38)] align-middle">
          <div>
            <Link href="/">
              <Image
                src={LOGO}
                alt=""
                className="small:w-4/5 large:w-4/5 mt-2 cursor-pointer"
                width=""
                height=""
              />
            </Link>
          </div>

          {/* Small and Medium */}

          <button
            onClick={() => setMenu(!menu)}
            className={
              menu
                ? "extraL:hidden large:hidden"
                : "extraL:hidden large:hidden bg-[rgb(202,255,51)]  px-[14px] rounded-[82px] small:px-[8px] ml-auto mb-auto h-fit w-fit  mt-2"
            }
          >
            <Image
              src={Menu}
              alt=""
              className={clsx(
                menu ? "hidden " : "small:w-2/3 mx-auto mt-2 w-fit h-fit"
              )}
              width=""
              height=""
            />
          </button>

          <div
            className={clsx(
              menu
                ? "fixed top-0 left-0 h-screen z-50 w-screen large:hidden extraL:hidden bg-black/50 backdrop-blur-sm  translate-x-0 transition-all ease-in-out  duration-75 "
                : "translate-x-full  duration-75 -z-50 fixed top-0 left-0 h-screen  w-screen large:hidden extraL:hidden bg-black/50 backdrop-blur-sm"
            )}
          >
            <section
              className={clsx(
                "text-black bg-[rgb(38,38,38)] flex-col  fixed right-0 top-0 h-screen p-8 gap-8 z-50 medium:w-1/2  small:w-full flex"
              )}
            >
              <button className="mt-0 mb-5 text-3xl cursor-pointer ml-auto">
                <HiOutlineXMark
                  onClick={() => setMenu(!menu)}
                  className="text-white"
                />
              </button>

              <div>
                <ul className="flex flex-col justify-center text-white space-y-5 tracking-normal">
                  {Data.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="justify-between cursor-pointer "
                      >
                        <Link
                          className={
                            path === item.href
                              ? " underline underline-offset-2 rounded-[82px] font-semibold"
                              : ""
                          }
                          href={item.href}
                          onClick={() => setMenu(!menu)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}

                  <Link href="/signup">
                    <li key="signin" className="cursor-pointer mt-2">
                      <div className="mx-auto bg-[rgb(205,255,51)] text-black px-[24px] py-[12px] rounded-[82px] w-1/2 medium:w-36 text-center">
                        Sign Up
                      </div>
                    </li>
                  </Link>

                  <Link href="/login">
                    <li key="login" className=" cursor-pointer mt-2 ">
                      <div className=" mx-auto bg-[rgb(205,255,51)] text-black px-[24px] py-[12px] rounded-[82px] w-1/2  medium:w-36 text-center">
                        Login
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
            </section>
          </div>

          {/* Navbar */}
          <div>
            <ul className="flex mt-3 large:mt-[13px] small:hidden medium:hidden space-x-5 ">
              {Data.map((item) => {
                return (
                  <li key={item.id} className="justify-between cursor-pointer">
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
            <ul className="mt-3 large:mt-[13px] small:hidden medium:hidden space-x-5 flex">
              <Link href="/signup" className="cursor-pointer">
                <li key="signinnav">Sign Up</li>
              </Link>

              <Link href="/login" className="cursor-pointer">
                <li key="loginnav">
                  <div className=" bg-[rgb(205,255,51)] text-black px-[24px] py-[12px] rounded-[82px] -mt-[13px]">
                    Login
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
