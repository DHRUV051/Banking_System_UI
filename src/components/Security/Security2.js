import Image from "next/image";
import Icon1 from "../../../public/assets/Security/Icon1.svg";
import Icon2 from "../../../public/assets/Security/Icon2.svg";
import Icon3 from "../../../public/assets/Security/Icon3.svg";
import Icon4 from "../../../public/assets/Security/Icon4.svg";

export default function Security2() {
  return (
    <>
      <div className="space-y-[10] extraL:space-y-[20px]">
        <h1 className="small:text-center medium:text-center large:text-left extraL:text-left text-[24px] large:text-[38px] extraL:text-[48px] ">
          How We
          <span className="text-[rgb(202,255,51,100%)] "> Protect You</span>
        </h1>

        <p className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] small:text-center medium:text-center large:w-11/12 extraL:w-11/12 ">
          At YourBank, we prioritize the security and confidentiality of your
          financial information. Our state-of-the-art encryption technology and
          stringent data protection measures ensure your assets and transactions
          are safeguarded at all times
        </p>
      </div>


        <div className="mt-[100px] extraL:bg-[url('/Background.svg')] px-[10px] bg-no-repeat  bg-contain">
       
        
    
      <div className="extraL:pt-[90px] extraL:grid extraL:grid-cols-2 large:grid large:grid-cols-2 extraL:gap-[50px] large:gap-[30px] small:space-y-[24px] medium:space-y-[24px]  bg-top ">


        <div
          className="rounded-[20px] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/assets/Careers/CardBGS.svg')` }}
        >
          <div className="p-[24px] space-y-[20px] large:p-[40px] large:space-y-[24px] extraL:p-[50px] extraL:space-y-[30px] ">
            <div className="flex space-x-[10px] large:space-x-[14px] extraL:space-x-[20px]">
              <Image src={Icon1} alt="" width="" height="" />

              <h1 className="mt-[5px] w-full extraL:mt-[30px] text-[18px] large:text-[20px] extraL:text-[24px]">
              Secure Online Banking Platform
              </h1>
            </div>

            <p className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] ">
            Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.
            </p>
          </div>
        </div>

        <div
          className="rounded-[20px] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/assets/Careers/CardBGS.svg')` }}
        >
          <div className="p-[24px] space-y-[20px] large:p-[40px] large:space-y-[24px] extraL:p-[50px] extraL:space-y-[30px] ">
            <div className="flex space-x-[10px] large:space-x-[14px] extraL:space-x-[20px]">
              <Image src={Icon2} alt="" width="" height="" />

              <h1 className="mt-[5px] extraL:mt-[30px] text-[18px] large:text-[20px] extraL:text-[24px] w-full ">
              Multi-Factor Authentication
              </h1>
            </div>

            <p className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] ">
            To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.
            </p>
          </div>
        </div>

        <div
          className="rounded-[20px]  bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/assets/Careers/CardBGS.svg')` }}
        >
          <div className="p-[24px] space-y-[20px] large:p-[40px] large:space-y-[24px] extraL:p-[50px] extraL:space-y-[30px] ">
            <div className="flex space-x-[10px] large:space-x-[14px] extraL:space-x-[20px]">
              <Image src={Icon3} alt="" width="" height="" />

              <h1 className="mt-[5px] extraL:mt-[30px] text-[18px] large:text-[20px] extraL:text-[24px] w-full ">
              Fraud Monitoring
              </h1>
            </div>

            <p className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] ">
            We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.
            </p>
          </div>
        </div>

        <div
          className="rounded-[20px] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/assets/Careers/CardBGS.svg')` }}
        >
          <div className="p-[24px] space-y-[20px] large:p-[40px] large:space-y-[24px] extraL:p-[50px] extraL:space-y-[30px] ">
            <div className="flex space-x-[10px] large:space-x-[14px] extraL:space-x-[20px]">
              <Image src={Icon4} alt="" width="" height="" />

              <h1 className="mt-[5px] extraL:mt-[30px] text-[18px] large:text-[20px] extraL:text-[24px] w-full ">
              Secure Mobile Banking
              </h1>
            </div>

            <p className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] ">
            Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.
            </p>
          </div>
        </div>

      </div>

      </div>
    </>
  );
}
