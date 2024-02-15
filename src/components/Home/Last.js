import Image from "next/image";
import Link from "next/link";
import CTA from "../../../public/AbstractDesign.svg";
import CTA1 from "../../../public/CTA1.svg";

export default function Last() {
  return (
    <>

        <div className="relative border-[1px] border-[rgb(38,38,38)] p-[30px] extraL:p-[80px] large:p-[60px] bg-[rgb(28,28,28)] rounded-[20px] bg-[url('/CTA.svg')] bg-no-repeat bg-cover ">

    

          <div className="extraL:flex large:flex">
            <div className="relative extraL:w-9/12 space-y-[14px] large:space-y-[10px]">
              <h1 className="small:text-center medium:text-center  text-[24px] large:text-[30px] extraL:text-[36px] ">
                Start your financial journey with{" "}
                <span className="text-[rgb(202,255,51)]">YourBank today!</span>
              </h1>
              <p className="font-lex font-thin text-[rgb(179,179,179)] small:text-center medium:text-center ">
                Ready to take control of your finances? Join YourBank now, and
                let us help you achieve your financial goals with our tailored
                solutions and exceptional customer service
              </p>
            </div>

            <div className="extraL:ml-auto flex flex-col  items-center">
              <button className=" w-44 small:w-32 small:mx-auto medium:mx-auto bg-[rgb(202,255,51,1)] text-center  h-fit text-black mt-[10px] px-[24px] py-[14px] rounded-[82px] small:px-[2px] small:py-[7px]">
                <Link href="/signin">Open Account</Link>
              </button>
            </div>
          </div>
        </div>
     
    </>
  );
}
