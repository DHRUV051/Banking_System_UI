import Image from "next/image";

import Icon1 from "../../../public/assets/Careers/Icon1.svg";
import Icon2 from "../../../public/assets/Careers/Icon2.svg";
import Icon3 from "../../../public/assets/Careers/Icon3.svg";
import Icon4 from "../../../public/assets/Careers/Icon4.svg";

export default function Benefits() {
  return (
    <>
      <div className="space-y-[10] extraL:space-y-[20px]">
        <h1 className="small:text-center medium:text-center large:text-left extraL:text-left text-[24px] large:text-[38px] extraL:text-[48px]">
          Our <span className="text-[rgb(202,255,51,100%)] ">Benefits</span>
        </h1>

        <p className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] small:text-center medium:text-center large:w-11/12 extraL:w-11/12 ">
          At YourBank, we value our employees and are dedicated to their
          well-being and success. We offer a comprehensive range of benefits
          designed to support their personal and professional growth.
        </p>
      </div>

      <div className="mt-[60px] extraL:grid extraL:grid-cols-2 large:grid large:grid-cols-2 extraL:gap-[50px] large:gap-[30px] small:space-y-[24px] medium:space-y-[24px]">

  

          <div  
            className=" rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[14px] rounded-br-[14px]
            extraL:rounded-tl-[20px] extraL:rounded-tr-[50px]  extraL: extraL:rounded-bl-[50px] extraL:rounded-br-[20px] bg-no-repeat bg-cover"
            style={{ backgroundImage: `url('/assets/Careers/CardBGS.svg')` }}
          >

            <div className="p-[24px] space-y-[20px] large:p-[40px] large:space-y-[24px] extraL:p-[50px] extraL:space-y-[30px] ">
             
              <div className="flex space-x-[10px] large:space-x-[14px] extraL:space-x-[20px]">

                <Image src={Icon1} alt="" width="" height="" />

                <h1 className="mt-[5px] w-full extraL:mt-[18px] text-[18px] large:text-[20px] extraL:text-[24px]">
                  Competitive Compensation
                </h1>

              </div>

           
                <p  className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] ">
                We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.
                </p>
                

            </div>

            
          </div>

            

          <div
            className=" rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[14px] rounded-br-[14px]
            extraL:rounded-tl-[20px] extraL:rounded-tr-[50px]  extraL: extraL:rounded-bl-[50px] extraL:rounded-br-[20px]
            bg-no-repeat bg-cover"
            style={{ backgroundImage: `url('/assets/Careers/CardBGS.svg')` }}
          >
            <div className="p-[24px] space-y-[20px] large:p-[40px] large:space-y-[24px] extraL:p-[50px] extraL:space-y-[30px] ">
             
              <div className="flex space-x-[10px] large:space-x-[14px] extraL:space-x-[20px]">

                <Image src={Icon2} alt="" width="" height="" />

                <h1 className="mt-[5px] extraL:mt-[18px] text-[18px] large:text-[20px] extraL:text-[24px] w-full ">
                Health and Wellness
                </h1>

              </div>

           
                <p  className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] ">
                We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.
                </p>
                

            </div>
          </div>

         


          <div
            className="rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[14px] rounded-br-[14px]
            extraL:rounded-tl-[20px] extraL:rounded-tr-[50px]  extraL: extraL:rounded-bl-[50px] extraL:rounded-br-[20px]
            bg-no-repeat bg-cover"
            style={{ backgroundImage: `url('/assets/Careers/CardBGS.svg')` }}
          >
            <div className="p-[24px] space-y-[20px] large:p-[40px] large:space-y-[24px] extraL:p-[50px] extraL:space-y-[30px] ">
             
              <div className="flex space-x-[10px] large:space-x-[14px] extraL:space-x-[20px]">

                <Image src={Icon3} alt="" width="" height="" />

                <h1 className="mt-[5px] extraL:mt-[18px] text-[18px] large:text-[20px] extraL:text-[24px] w-full ">
                Retirement Planning
                </h1>

              </div>

           
                <p  className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] ">
                YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.
                </p>
                

            </div>
          </div>




          <div
            className="rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[14px] rounded-br-[14px]
            extraL:rounded-tl-[20px] extraL:rounded-tr-[50px]  extraL: extraL:rounded-bl-[50px] extraL:rounded-br-[20px]
            bg-no-repeat bg-cover"
            style={{ backgroundImage: `url('/assets/Careers/CardBGS.svg')` }}
          >
            <div className="p-[24px] space-y-[20px] large:p-[40px] large:space-y-[24px] extraL:p-[50px] extraL:space-y-[30px] ">
             
              <div className="flex space-x-[10px] large:space-x-[14px] extraL:space-x-[20px]">

                <Image src={Icon4} alt="" width="" height="" />

                <h1 className="mt-[5px] extraL:mt-[18px] text-[18px] large:text-[20px] extraL:text-[24px] w-full ">
                Work-Life Balance
                </h1>

              </div>

           
                <p  className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] ">
                We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.
                </p>
                

            </div>
          </div>

    
    </div>
      
    </>
  );
}
