import Image from "next/image";
import Product1 from "../../../public/assets/product1.svg";
import Product2 from "../../../public/assets/product2.svg";
import Product3 from "../../../public/assets/product3.svg";

export default function Product() {
  return (
    <>
      <div className="small:text-center medium:text-center">
        <h1 className="  text-[24px] large:text-[31px] extraL:text-[48px]">
          Our <span className="text-[rgb(202,255,51)]">Products</span>
        </h1>

        <div className="extraL:flex large:flex">
          <div className="extraL:w-2/3 large:w-2/3">
            <p className="text-[14px] text-[rgb(228,228,231)] large:text-[14px] extraL:text-[18px] mt-2">
              Discover a range of comprehensive and customizable banking
              products at YourBank, designed to suit your unique financial needs
              and aspirations
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

      <div className="my-[50px] px-[10px] small:divide-y-[1px] medium:divide-y-[1px] large:divide-x-[1px] extraL:divide-x-[1px] divide-[rgb(38,38,38)] extraL:flex large:flex">
        {/* Product 1 */}
        <div className="flex flex-col justify-center items-center py-[30px] extraL:py-0 large:py-0 large:px-[30px] extraL:px-[30px] extraL:w-1/3 large:w-1/3">
          <Image src={Product1} alt="" className="" width="" height="" />
          <div className="text-center">
            <h1 className="mt-2 text-[20px] extraL:text-[24px] ">
              Checking Accounts
            </h1>
            <p className="text-[14px] text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
              Enjoy easy and convenient access to your funds with our range of
              checking account options. Benefit from features such as online and
              mobile banking, debit cards, and free ATM access.
            </p>
          </div>
        </div>

        {/* Product 2 */}

        <div className="flex flex-col justify-center items-center py-[30px] extraL:py-0 large:py-0 large:px-[30px] extraL:px-[30px] extraL:w-1/3 large:w-1/3">
          <Image src={Product2} alt="" className="" width="" height="" />
          <div className="text-center">
            <h1 className="mt-2 text-[20px]  extraL:text-[24px] ">
              Savings Accounts
            </h1>
            <p className="text-[14px]  text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
              Build your savings with our competitive interest rates and
              flexible savings account options. Whether you&apos;re saving for a
              specific goal or want to grow your wealth over time, we have the
              right account for you.
            </p>
          </div>
        </div>

        {/* Product 3 */}

        <div className="mt-5 flex flex-col justify-center items-center py-[30px] extraL:py-0 large:py-0 large:px-[30px] extraL:px-[30px] extraL:w-1/3 large:w-1/3">
          <Image src={Product3} alt="" width="" height="" />
          <div className="text-center">
            <h1 className="mt-2 text-[20px] extraL:text-[24px] ">
              Loans and Mortgages
            </h1>
            <p className="text-[14px]  text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
              Realize your dreams with our flexible loan and mortgage options.
              From personal loans to home mortgages, our experienced loan
              officers are here to guide you through the application process and
              help you secure the funds you need.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
