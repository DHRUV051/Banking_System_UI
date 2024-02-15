import Link from "next/link";
import Image from "next/image";
import LOGO from "../../public/assets/Logo.svg";
import Mail from "../../public/assets/mail.svg";
import Phone from "../../public/assets/phone.svg";
import Location from "../../public/assets/location.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/Twitter.svg";
import Linkedin from "../../public/assets/Linkedin.svg";

import Data from "@/utils/data";

export default function Footer() {
  return (
    <>
      <div
        className="relative bg-[rgb(28,28,28,1)] pt-[50px] pb-[30px] px-[16px] 
      large:pt-[60px] large:pb-[30px] large:px-[80px]
      extraL:pt-[100px] extraL:px-[162px] extraL:pb-[50px]
    "
      >
        {/* First Section */}
        <div className="flex flex-col justify-center items-center ">
          <div>
            <Image
              src={LOGO}
              alt=""
              width=""
              height=""
              className="small:w-1/2 mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <ul className="mt-5 flex  space-x-4 text-[14px] large:text-[18px] extraL:text-[18px] large:mt-10 extraL:mt-10">
              {Data.map((item, key) => {
                return (
                  <li key={item.id}>
                    <Link href={item.href}>
                      <span className="">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="my-[30px] border-[1px] border-[rgb(38,38,38)]"></div>

        {/* Second Section */}
        <div className="flex flex-col justify-center items-center">
          <div className="large:flex extraL:flex space-x-4 ">
            <div className="flex space-x-4">
              <div className="flex space-x-2 small:w-1/2">
                <Image src={Mail} alt="" className="" width="auto" />
                <h1 className="small:overflow-auto text-[14px] large:text-[18px] extraL:text-[18px]">
                  hello@skillbirdge.com
                </h1>
              </div>

              <div className="flex space-x-2 small:w-1/2 ">
                <Image src={Phone} alt="" width="auto"  />
                <h1 className="small:overflow-auto text-[14px] large:text-[18px] extraL:text-[18px]">
                  +9191813232309
                </h1>
              </div>
            </div>

            <div className="small:mt-[15px] medium:mt-[15px]">    
            <div className="flex space-x-2  justify-center items-center ">
              <Image src={Location} alt="" width="auto" height="" />
              <h1 className="text-[14px] large:text-[18px] extraL:text-[18px]">
                Somewhere in the World
              </h1>
            </div>
            </div>
          </div>
        </div>

        <div className="my-[30px] border-[1px] border-[rgb(38,38,38)]"></div>

        {/* Third Section */}

        <div className="mt-[30px] border-[1px] border-[rgb(38,38,38)] bg-[rgb(26,26,26)] rounded-[12px]  pt-[50px] px-[24px]  pb-[30px] large:py-[12px] large:px-[12px] extraL:py-[16px] extraL:px-[30px] large:rounded-[100px] extraL:rounded-[100px]">

          <div className="flex small:flex-col medium:flex-col small:justify-center medium:justify-center small:items-center medium:items-center large:justify-between extraL:justify-between large:space-x-8 extraL:space-x-8">

            <div className="flex space-x-[8px] small:-mt-[70px] medium:-mt-[70px]">
              <Image src={Facebook} alt="" width="" height="" />
              <Image src={Twitter} alt="" width="" height="" />
              <Image src={Linkedin} alt="" width="" height="" />
            </div>

            <div className="pt-[30px] small:pt-[10px] medium:pt-[10px]">
              <h1 className="text-[rgb(173,179,179)] text-[14px] large:text-[16px] extraL:text-[18px] extraL:-mt-[20px] large:-mt-[20px] ">
                YourBank All Rights Reserved
              </h1>
            </div>

            <div className="pt-[30px] small:pt-[10px] medium:pt-[10px]">
              <h1 className="text-[rgb(173,179,179)] text-[14px] large:text-[18px] extraL:text-[18px] extraL:-mt-[20px] large:-mt-[20px]">
                Privacy Policy | Terms of Service
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
