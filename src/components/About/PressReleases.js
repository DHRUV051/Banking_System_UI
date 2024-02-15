import Image from "next/image";
import Press1 from "../../../public/assets/About/press1.svg";
import Press2 from "../../../public/assets/About/press2.svg";
import Press3 from "../../../public/assets/About/press3.svg";
import Press4 from "../../../public/assets/About/press4.svg";




export default function PressReleases() {
  return (
    <>
      <div className="extraL:mb-[80px] large:mb-[60px] mb-[40px]">
        <h1 className="small:text-center medium:text-center text-[24px] large:text-[28px] extraL:text-[48px] text-[rgb(202,255,51,100%)]">
        Press Releases
        </h1>
        <p className="text-[14px] large:text-[16px] extraL:text-[18px] font-light text-[rgb(179,179,179,100%)] small:text-center medium:text-center extraL:w-11/12">
        Stay updated with the latest happenings and exciting developments at YourBank through our press releases.
        </p>
      </div>

      <div className="space-y-[20px] extraL:space-y-0 large:space-y-0 extraL:grid extraL:grid-cols-2 extraL:gap-[30px] large:grid large:grid-cols-2 large:gap-[0px]">

            <div className="bg-[rgb(28,28,28)] border-[1px] border-[rgb(38,38,38)] p-[20px] extraL:p-[30px] large:p-[24px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[16px] rounded-br-[16px] ">

            <div>
            <Image src={Press1} alt="" width="" height="" className="w-full rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[12px] rounded-br-[12px]"/>
            </div>

            <div className="mt-[30px] large:mt-[40px] extraL:mt-[51px]">

              <div>
                  <h1 className="text-[18px] large:text-[20px] extraL:text-[24px]">YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</h1>

                  <div className="flex space-x-[10px] mt-[10px] large:mt-[14px] extraL:mt-[20px]">
                  <div className="px-[12px] py-[6px] large:px-[14px] extraL:px-[16px] extraL:py-[8px] border-[1px] border-[rgb(38,38,38)] text-[rgb(179,179,179)] font-light text-[14px] large:text-[16px] extraL:text-[18px] bg-[rgb(26,26,26)] w-fit rounded-[68px]">
                    <h1>Location: India</h1>
                  </div>

                  <div className="px-[12px] py-[6px] large:px-[14px] extraL:px-[16px] extraL:py-[8px] border-[1px] border-[rgb(38,38,38)] text-[rgb(179,179,179)] font-light text-[14px] large:text-[16px] extraL:text-[18px] bg-[rgb(26,26,26)] w-fit rounded-[68px]">
                    <h1>Date: 06/11/2024</h1>
                  </div>
                  </div>

                  <p className="mt-[24px] extraL:mt-[30px] font-light text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.
                  </p>
                  
              </div>  

            </div>

            </div>

            {/* Press2 */}
            <div className="bg-[rgb(28,28,28)] border-[1px] border-[rgb(38,38,38)] p-[20px] extraL:p-[30px] large:p-[24px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[16px] rounded-br-[16px] ">

            <div>
            <Image src={Press2} alt="" width="" height="" className="w-full rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[12px] rounded-br-[12px]"/>
            </div>

            <div className="mt-[30px] large:mt-[40px] extraL:mt-[51px]">

              <div>
                  <h1 className="text-[18px] large:text-[20px] extraL:text-[24px]">
                  YourBank Expands Branch Network with Opening of New Location in Chennai
                  </h1>

                  <div className="flex space-x-[10px] mt-[10px] large:mt-[14px] extraL:mt-[20px]">
                  <div className="px-[12px] py-[6px] large:px-[14px] extraL:px-[16px] extraL:py-[8px] border-[1px] border-[rgb(38,38,38)] text-[rgb(179,179,179)] font-light text-[14px] large:text-[16px] extraL:text-[18px] bg-[rgb(26,26,26)] w-fit rounded-[68px]">
                    <h1>Location: India</h1>
                  </div>

                  <div className="px-[12px] py-[6px] large:px-[14px] extraL:px-[16px] extraL:py-[8px] border-[1px] border-[rgb(38,38,38)] text-[rgb(179,179,179)] font-light text-[14px] large:text-[16px] extraL:text-[18px] bg-[rgb(26,26,26)] w-fit rounded-[68px]">
                    <h1>Date: 12/11/2024</h1>
                  </div>
                  </div>

                  <p className="mt-[24px] extraL:mt-[30px] font-light text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.
                  </p>
                  
              </div>  

            </div>

            </div>


            {/* Press3 */}
            <div className="bg-[rgb(28,28,28)] border-[1px] border-[rgb(38,38,38)] p-[20px] extraL:p-[30px] large:p-[24px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[16px] rounded-br-[16px] ">

            <div>
            <Image src={Press3} alt="" width="" height="" className="w-full rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[12px] rounded-br-[12px]"/>
            </div>

            <div className="mt-[30px] large:mt-[40px] extraL:mt-[51px]">

              <div>
                  <h1 className="text-[18px] large:text-[20px] extraL:text-[24px]">
                  YourBank Partners with Local Nonprofit to Support Financial Education Initiatives
                  </h1>

                  <div className="flex space-x-[10px] mt-[10px] large:mt-[14px] extraL:mt-[20px]">
                  <div className="px-[12px] py-[6px] large:px-[14px] extraL:px-[16px] extraL:py-[8px] border-[1px] border-[rgb(38,38,38)] text-[rgb(179,179,179)] font-light text-[14px] large:text-[16px] extraL:text-[18px] bg-[rgb(26,26,26)] w-fit rounded-[68px]">
                    <h1>Location: India</h1>
                  </div>

                  <div className="px-[12px] py-[6px] large:px-[14px] extraL:px-[16px] extraL:py-[8px] border-[1px] border-[rgb(38,38,38)] text-[rgb(179,179,179)] font-light text-[14px] large:text-[16px] extraL:text-[18px] bg-[rgb(26,26,26)] w-fit rounded-[68px]">
                    <h1>Date: 24/12/2024</h1>
                  </div>
                  </div>

                  <p className="mt-[24px] extraL:mt-[30px] font-light text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.
                  </p>
                  
              </div>  

            </div>

            </div>


            {/* Press4 */}
            <div className="bg-[rgb(28,28,28)] border-[1px] border-[rgb(38,38,38)] p-[20px] extraL:p-[30px] large:p-[24px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[16px] rounded-br-[16px] ">

            <div>
            <Image src={Press4} alt="" width="" height="" className="w-full rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[12px] rounded-br-[12px]"/>
            </div>

            <div className="mt-[30px] large:mt-[40px] extraL:mt-[51px]">

              <div>
                  <h1 className="text-[18px] large:text-[20px] extraL:text-[24px]">YourBank YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility
                  </h1>

                  <div className="flex space-x-[10px] mt-[10px] large:mt-[14px] extraL:mt-[20px]">
                  <div className="px-[12px] py-[6px] large:px-[14px] extraL:px-[16px] extraL:py-[8px] border-[1px] border-[rgb(38,38,38)] text-[rgb(179,179,179)] font-light text-[14px] large:text-[16px] extraL:text-[18px] bg-[rgb(26,26,26)] w-fit rounded-[68px]">
                    <h1>Location: India</h1>
                  </div>

                  <div className="px-[12px] py-[6px] large:px-[14px] extraL:px-[16px] extraL:py-[8px] border-[1px] border-[rgb(38,38,38)] text-[rgb(179,179,179)] font-light text-[14px] large:text-[16px] extraL:text-[18px] bg-[rgb(26,26,26)] w-fit rounded-[68px]">
                    <h1>Date: 28/12/2024</h1>
                  </div>
                  </div>

                  <p className="mt-[24px] extraL:mt-[30px] font-light text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.
                  </p>
                  
              </div>  

            </div>

            </div>



      </div>


    </>
  );
}
