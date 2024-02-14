import Image from "next/image";
import Intro from "../../../public/assets/Careers/Intro1.svg";

export default function CareersIntro() {
  return (
    <>
      <div className="bg-[rgb(28,28,28)] rounded-[20px]">
        <div className="bg-[url('/AbstractDesign1.svg')] bg-no-repeat bg-right-top flex flex-col justify-center items-center p-[14px] large:p-[40px] extraL:p-[50px]  ">
          <div className="extraL:flex ">
            {/* large:flex */}
            
            <Image
              src={Intro}
              alt=""
              width=""
              height=""
              className="w-full  mx-auto large:w-[80%]  extraL:w-2/3 extraL:ml-auto extraL:order-last static bg-transparent "
            />
            {/* large:w-2/3 large:ml-auto large:order-last */}

            <div
              className="relative mx-auto bg-[rgb(26,26,26,100%)] w-full p-[24px] -mt-[41px] 
            h-fit rounded-[20px] 
                large:w-[80%]  large:p-[60px]
             extraL:-mr-[260px] extraL:z-10 extraL:w-1/2 extraL:p-[80px] extraL:rounded-br-[60px] extraL:rounded-tl-[20px] extraL:rounded-bl-[20px] extraL:rounded-tr-none extraL:-mt-0"
            >

                {/*  large:rounded-br-[60px] large:rounded-tl-[20px] large:rounded-bl-[20px] large:rounded-tr-none large:-mr-[175px] large:z-10 large:w-1/2 large:-mt-0 */}
              <div className="extraL:space-y-[23px] large:space-y-[20px] space-y-[14px]">

                <h1 className="small:text-center medium:text-center text-[24px] large:text-[28px] extraL:text-[38px]">
                  Welcome to{' '}
                  <span className="text-[rgb(202,255,51,100%)]">YourBank</span>{" "}
                  Careers!
                </h1>

                <p className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] small:text-center medium:text-center ">
                  Join our team and embark on a rewarding journey in the banking
                  industry. At YourBank, we are committed to fostering a culture
                  of excellence and providing opportunities for professional
                  growth. With a focus on innovation, customer service, and
                  integrity, we strive to make a positive impact in the lives of
                  our customers and communities. Join us today and be a part of
                  our mission to shape the future of banking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
