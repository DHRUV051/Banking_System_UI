import Image from "next/image";
import vector from "../../../public/assets/vector.svg";

export default function Features() {
  return (
    <>
      <div className="small:text-center medium:text-center">
        <h1 className="  text-[24px] large:text-[31px] extraL:text-[48px]">
          Our <span className="text-[rgb(202,255,51)]">Features</span>
        </h1>

        <p className="text-[14px]  text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2 extraL:w-11/12 leading-[27px]">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience
        </p>
      </div>

      <div className="large:flex extraL:flex">
        <div className="large:1/5 extraL:w-1/5 bg-[rgb(28,28,28)] px-[10px] py-[12px] flex rounded-[10px] mx-auto extraL:flex-col large:flex-col large:mr-[20px] extraL:mr-[20px]  h-fit small:space-x-10 overflow-auto medium:space-x-10 large:justify-between large:items-center extraL:justify-between extraL:items-center ">
          <div className="">
            <h1 className="bg-[rgb(18,18,18)] border-[1px] border-[rgb(38,38,38)]  rounded-[100px]  px-[20px] py-[14px] text-[rgb(202,255,51)] w-48 text-center">
              Online Banking
            </h1>
          </div>

          <div className=" extraL:mt-[10px] large:mt-[10px] ">
            <h1 className="bg-[26,26,26] border-[1px] border-[rgb(38,38,38)]  text-center  px-[20px] py-[14px] rounded-[100px]  w-48">
              Financial Tools
            </h1>
          </div>

          <div className="extraL:mt-[10px] large:mt-[10px] ">
            <h1 className="bg-[26,26,26] border-[1px] border-[rgb(38,38,38)]  px-[20px] py-[14px] rounded-[100px] w-48 text-center">
              Customer Support
            </h1>
          </div>
        </div>

        <div className="large:w-4/5 extraL:w-4/5 small:my-[30px] medium:my-[30px] small:space-y-[20px] medium:space-y-[20px] large:grid large:grid-cols-2 extraL:grid extraL:grid-cols-2 large:gap-5 extraL:gap-5">
          <div className="p-[30px] border-[1px] border-[rgb(38,38,38)] bg-[rgb(28,28,28,1)] rounded-[10px]">
            <div className="flex">
              <h1 className="mt-2 text-[20px] extraL:text-[24px]">
                24/7 Account Access
              </h1>
              <Image
                src={vector}
                alt=""
                className="ml-auto"
                width=""
                height=""
              />
            </div>
            <p className="pt-[20px] text-[14px]  text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2 ">
              Enjoy the convenience of accessing your accounts anytime, anywhere
              through our secure online banking platform. Check balances,
              transfer funds, and pay bills with ease.
            </p>
          </div>

          <div className="p-[30px] border-[1px] border-[rgb(38,38,38)] bg-[rgb(28,28,28,1)] rounded-[10px]">
            <div className="flex">
              <h1 className="mt-2 text-[20px] extraL:text-[24px]">
                Mobile Banking App
              </h1>
              <Image
                src={vector}
                alt=""
                className="ml-auto"
                width=""
                height=""
              />
            </div>
            <p className="pt-[20px] text-[14px]  text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
              Stay connected to your finances on the go with our user-friendly
              mobile banking app. Easily manage your accounts, deposit checks,
              and make payments from your smartphone or tablet.
            </p>
          </div>

          <div className="p-[30px] border-[1px] border-[rgb(38,38,38)] bg-[rgb(28,28,28,1)] rounded-[10px]">
            <div className="flex">
              <h1 className="mt-2 text-[20px] extraL:text-[24px]">
                Secure Transactions
              </h1>
              <Image
                src={vector}
                alt=""
                className="ml-auto"
                width=""
                height=""
              />
            </div>
            <p className=" pt-[20px] text-[14px]  text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
              Rest assured knowing that your transactions are protected by
              industry-leading security measures. We employ encryption and
              multi-factor authentication to safeguard your financial
              information.
            </p>
          </div>

          <div className="p-[30px] border-[1px] border-[rgb(38,38,38)] bg-[rgb(28,28,28,1)] rounded-[10px]">
            <div className="flex">
              <h1 className="mt-2 text-[20px] extraL:text-[24px]">
                Bill Pay and Transfers
              </h1>
              <Image
                src={vector}
                alt=""
                className="ml-auto"
                width=""
                height=""
              />
            </div>
            <p className="pt-[20px] text-[14px]  text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
              Save time and avoid late fees with our convenient bill pay
              service. Set up recurring payments or make one-time transfers
              between your accounts with just a few clicks.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
