import Image from "next/image";
import Quote from "../../../public/assets/quote.svg";
import Arrow from "../../../public/assets/Arrow.svg";

export default function Testimonials() {
  return (
    <>
      <div className="small:text-center medium:text-center">
        <h1 className="  text-[24px] large:text-[31px] extraL:text-[48px]">
          Our <span className="text-[rgb(202,255,51)]">Testimonials</span>
        </h1>

        <div className="extraL:flex large:flex">
          <div className="extraL:w-2/3 large:w-2/3">
            <p className="text-[14px] text-[rgb(228,228,231)] large:text-[14px] extraL:text-[18px] mt-2">
              Discover how YourBank has transformed lives with innovative
              digital solutions and personalized customer service. See why our
              clients trust us for a secure and prosperous financial journey
            </p>
          </div>

          <div className="extraL:ml-auto large:ml-auto">
            <div className="bg-[rgb(28,28,28)] border-[1px] border-[rgb(38,38,38)] flex p-[12px] rounded-[140px] small:mx-auto medium:mx-auto mt-[30px] extraL:mt-0 large:mt-0 overflow-auto">
              <div className=" text-black text-center medium:mx-auto">
                <h1 className="bg-[rgb(202,255,51)]  px-[18px] py-[10px] rounded-[140px] w-44">
                  For Individuals
                </h1>
              </div>

              <div className=" text-center medium:mx-auto">
                <h1 className="px-[18px] py-[10px] rounded-[140px] w-44">
                  For Businesses
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="extraL:flex large:flex justify-between gap-10 extraL:bg-test mt-[50px]">
        <div className="flex gap-[30px]">

          <div className="extraL:w-1/3 large:w-1/3 bg-[rgb(28,28,28)]  border-[1px] border-[rgb(38,38,38)] p-[20px] rounded-[12px] small:hidden medium:hidden extraL:bg-test large:bg-test ">
            <div className="items-center justify-center w-full flex space-x-3">
              <hr className="w-full h-[1px] my-8 bg-[rgb(38,38,38)] border-0 rounded " />
              <Image src={Quote} alt="" width="" height="" />
              <hr className="w-full h-[1px] my-8 bg-[rgb(38,38,38)] border-0 rounded " />
            </div>

            <div>
              <p className="text-center mt-[25px] text-[14px] large:text-[16px] extraL:text-[18px] leading-[21px] large:leading-[24px] extraL:leading-[27px] ]">
              YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.
              </p>
            </div>

            <div>
              <h1 className="text-[rgb(202,255,51)] text-center mt-[25px] text-[16px] extraL:text-[18px]">
              Sara T
              </h1>
            </div>
          </div>

          <div className="extraL:w-1/3 large:w-1/3 bg-[rgb(28,28,28)]  border-[1px] border-[rgb(38,38,38)] p-[20px] rounded-[12px]">
            <div className="items-center justify-center w-full flex space-x-3">
              <hr className="w-full h-[1px] my-8 bg-[rgb(38,38,38)] border-0 rounded " />
              <Image src={Quote} alt="" width="" height="" />
              <hr className="w-full h-[1px] my-8 bg-[rgb(38,38,38)] border-0 rounded " />
            </div>

            <div>
              <p className="text-center mt-[25px] text-[14px] large:text-[16px] extraL:text-[18px] leading-[21px] large:leading-[24px] extraL:leading-[27px]">
                I recently started my own business, and YourBank has been
                instrumental in helping me set up my business accounts and
                secure the financing I needed. Their expert guidance and
                tailored solutions have been invaluable.
              </p>
            </div>

            <div>
              <h1 className="text-[rgb(202,255,51)] text-center mt-[25px] text-[16px] extraL:text-[18px]">
                John D{" "}
              </h1>
            </div>
          </div>

          <div className="extraL:w-1/3 large:w-1/3 bg-[rgb(28,28,28)]  border-[1px] border-[rgb(38,38,38)] p-[20px] rounded-[12px] small:hidden medium:hidden">
            <div className="items-center justify-center w-full flex space-x-3">
              <hr className="w-full h-[1px] my-8 bg-[rgb(38,38,38)] border-0 rounded " />
              <Image src={Quote} alt="" width="" height="" />
              <hr className="w-full h-[1px] my-8 bg-[rgb(38,38,38)] border-0 rounded " />
            </div>

            <div>
              <p className="text-center mt-[25px] text-[14px] large:text-[16px] extraL:text-[18px] leading-[21px] large:leading-[24px] extraL:leading-[27px]">
              I love the convenience of YourBank&apos;s mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.
              </p>
            </div>

            <div>
              <h1 className="text-[rgb(202,255,51)] text-center mt-[25px] text-[16px] extraL:text-[18px]">
              Emily G
              </h1>
            </div>
          </div>

        </div>

        <div className="flex justify-center space-x-10 mt-5 extraL:hidden large:hidden">
          <div className="extraL:order-first large:order-first flex align-middle">
            <Image src={Arrow} alt="" width="" height="" />
          </div>

          <div className="extraL:order-last large:order-last flex align-middle">
            <Image
              src={Arrow}
              alt=""
              width=""
              height=""
              className="rotate-180 "
            />
          </div>
        </div>

        <div className="small:hidden medium:hidden extraL:order-first large:order-first flex align-middle">
          <Image src={Arrow} alt="" width={250} height="" className="" />
        </div>

        <div className="small:hidden medium:hidden extraL:order-last large:order-last flex align-middle">
          <Image
            src={Arrow}
            alt=""
            width={250}
            height=""
            className="rotate-180 "
          />
        </div>
      </div>


    </>
  );
}
