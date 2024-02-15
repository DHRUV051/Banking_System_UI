import Image from "next/image";
import Intro from "../../../public/assets/Security/Intro1.svg";

export default function SecurityIntro() {
  return (
    <>
      <div className="bg-[rgb(28,28,28)] rounded-[20px]">
        <div className="bg-[url('/AbstractDesign1.svg')] bg-no-repeat bg-right-top flex flex-col justify-center items-center p-[14px] large:p-[40px] extraL:p-[50px]  ">
          <div className="extraL:flex large:flex extraLarge:flex">
            {/* large:flex */}

            <div className="extraL:w-2/3 extraLarge:w-[99%] large:w-[80%] large:order-last extraL:order-last static bg-transparent ">
              <Image
                src={Intro}
                alt=""
                width=""
                height=""
                className="small:mx-auto medium:w-[90%] medium:mx-auto extraL:w-full extraL:ml-auto large:w-full large:ml-auto  static bg-transparent extraLarge:w-full extraLarge:ml-auto "
              />
            </div>
            {/* large:w-2/3 large:ml-auto large:order-last */}

            <div
              className="relative small:mx-auto medium:mx-auto bg-[rgb(26,26,26,100%)] w-full p-[24px] -mt-[41px] 
              h-fit rounded-[20px] 
             medium:w-[90%]
              large:w-[60%]  large:px-[60px] large:rounded-br-[60px] large:rounded-tl-[20px] large:rounded-bl-[20px] large:rounded-tr-none large:-mr-[130px] large:z-10  large:-mt-0

             extraL:-mr-[150px] extraL:z-10 extraL:w-2/3 extraL:px-[80px] extraL:rounded-br-[60px] extraL:rounded-tl-[20px] extraL:rounded-bl-[20px] extraL:rounded-tr-none extraL:-mt-0
             
             extraLarge:w-[90%] extraLarge:z-10 extraLarge:-mr-[100px] 
             
             "
            >
              {/*  large:rounded-br-[60px] large:rounded-tl-[20px] large:rounded-bl-[20px] large:rounded-tr-none large:-mr-[175px] large:z-10 large:w-1/2 large:-mt-0 */}
              <div className="extraL:space-y-[23px] large:space-y-[20px] space-y-[14px]">
                <h1 className="small:text-center medium:text-center text-[24px] large:text-[28px] extraL:text-[48px]">
                  Your Security is Our{" "}
                  <span className="text-[rgb(202,255,51,100%)]">
                    Top Priority
                  </span>{" "}
                </h1>

                <p className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] small:text-center medium:text-center extraLarge:hidden">
                  Join our team and embark on a rewarding journey in the banking
                  industry. At YourBank, we are committed to fostering a culture
                  of excellence and providing opportunities for professional
                  growth. With a focus on innovation, customer service, and
                  integrity, we strive to make a positive impact in the lives of
                  our customers and communities. Join us today and be a part of
                  our mission to shape the future of banking.
                </p>

                <p className="extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] small:hidden medium:hidden large:hidden extraL:hidden extraLarge:block ">
                  Join our team and embark on a rewarding journey in the banking
                  industry. At YourBank, we are committed to fostering a culture
                  of excellence and providing opportunities for professional
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /*

*/
}
