import Image from "next/image";
import Link from "next/link";

import Verify from "../../../public/assets/verify.svg";
import Home2 from "../../../public/assets/home1.svg";
import Home3 from "../../../public/assets/Home3.svg";

export default function Introduction() {
  return (
    <>
      <div className=" large:flex extraL:flex h-fit">
        <div className="extraL:w-1/2 large:w-1/2 ">
          <div className="small:mx-auto medium:mx-auto w-fit px-[16px] py-[8px] bg-[rgb(38,38,38)] rounded-[61px] flex space-x-1 ">
          <Image 
            src={Verify} 
            alt="" 
            width={30}
            className=""
            />
            <h1 className="text-[12px] small:mt-[5px] medium:mt-[6px] large:mt-[4px]  mt-[1px] extraL:text-[18px] large:text-[14px]">
              No LLC Required, No Credit Check.
            </h1>
          </div>

          <div className="small:mx-auto medium:mx-auto mt-5 w-full h-fit  font-semibold">
            <p className="small:text-center medium:text-center text-[24px] large:text-[31px] extraL:text-[48px]">
              Welcome to YourBank Empowering Your
              <span className="text-[rgb(202,255,51)]">Financial Journey</span>
            </p>
          </div>

          <div className="mt-2 small:text-center medium:text-center">
            <p className="text-[14px] text-[rgb(228,228,231)] large:text-[14px] extraL:text-[18px]">
              At YourBank, our mission is to provide comprehensive banking
              solutions that empower individuals and businesses to achieve their
              financial goals. We are committed to delivering personalized and
              innovative services that prioritize our customers&apos; needs.
            </p>
          </div>

          <div className="extraL:mr-auto large:mr-auto small:flex small:flex-col small:justify-between medium:flex medium:flex-col medium:justify-between">
            <button className="extraL:ml-auto w-fit  small:mx-auto medium:mx-auto bg-[rgb(202,255,51,1)] text-center  h-fit text-black mt-[30px] px-[20px] py-[14px] rounded-[82px] small:px-[2px] small:py-[7px]">
              <Link href="/login">Open Account</Link>
            </button>
          </div>
        </div>

        <div className="extraL:w-1/2 large:w-1/2 relative small:mt-[50px] medium:mt-[50px]">
          <Image
            src={Home3}
            alt=""
            className="absolute right-0 top-0"
            width=""
            height=""
          />
          <div className="small:w-full medium:h-1/2 relative ">
            <Image
              src={Home2}
              alt=""
              className="w-full h-full "
              width=""
              height=""
            />
          </div>
        </div>

      </div>
    </>
  );
}
