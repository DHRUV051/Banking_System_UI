import Image from "next/image";
import Image1 from "../../../public/assets/About/Image1.svg";
import Image2 from "../../../public/assets/About/Image2.svg";


export default function AboutSecond() {
  return (
    <>
      <div>
        <h1 className="small:text-center medium:text-center text-[24px] large:text-[28px] extraL:text-[48px] text-[rgb(202,255,51,100%)]">
          Mission & Vision
        </h1>
        <p className="text-[14px] large:text-[16px] extraL:text-[18px] font-light text-[rgb(179,179,179,100%)] small:text-center medium:text-center extraL:w-11/12">
          We envision being a leading force in the industry, driven by
          innovation, integrity, and inclusivity, creating a brighter financial
          future for individuals and businesses while maintaining a strong
          commitment to customer satisfaction and community development
        </p>
      </div>

    <div className="my-[60px]  extraL:my-[80px] small:space-y-[50px] medium:space-y-[60px]">

        {/* Mission Card */}
        <div className="flex medium:flex-col small:flex-col items-center justify-center">

<div className="large:w-1/2 extraL:w-1/2 bg-[url('/assets/About/ImageBG1.svg')] bg-no-repeat px-[60px] pt-[60px] pb-0 rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[20px] rounded-br-[20px] small:w-full medium:w-full small:px-[20px] small:pt-[20px] medium:px-[20px] medium:pt-[20px] medium:flex medium:flex-col medium:justify-between medium:items-center">
    
  <Image src={Image1} alt="" width="" height="" className="rounded-tl-[50px] rounded-tr-[50px] w-full medium:w-fit"/>

</div>

<div className=" extraL:w-2/3 large:w-full  extraL:flex large:flex h-fit justify-between">

  <div className="small:order-first medium:order-first flex items-center justify-center small:mb-[20px] medium:mb-[30px]">

    <hr className="extraL:w-[1px] extraL:h-full large:w-[1px] large:h-full w-full h-[1px]  bg-[rgb(202,255,51,100%)] border-0  " />
  </div>

  <div className="extraL:w-11/12  large:w-9/12 space-y-[14px] large:space-y-[20px] extraL:space-y-[30px]">
    <h1 className="small:text-center medium:text-center text-[26px] large:text-[32px] extraL:text-[38px] ">
    Mission
    </h1>
    <p className="small:text-center medium:text-center text-[14px] large:text-[16px] extraL:text-[18px] font-light text-[rgb(179,179,179,100%)] ">
    At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.
    </p>
  </div>
</div>



</div>

        {/* Vision Card */}
        <div className="flex medium:flex-col small:flex-col items-center justify-center">

        <div className="extraL:order-last large:order-last large:w-1/2 extraL:w-1/2 bg-[url('/assets/About/ImageBG1.svg')] bg-no-repeat px-[60px] pt-[60px] pb-0 rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[20px] rounded-br-[20px] small:w-full medium:w-full small:px-[20px] small:pt-[20px] medium:px-[20px] medium:pt-[20px] medium:flex medium:flex-col medium:justify-between medium:items-center ">
            
          <Image src={Image2} alt="" width="" height="" className="rounded-tl-[50px] rounded-tr-[50px] w-full medium:w-fit"/>

        </div>

        <div className=" extraL:w-2/3 large:w-full  extraL:flex large:flex h-fit justify-between">

          <div className="order-last small:order-first medium:order-first flex items-center justify-center small:mb-[20px] medium:mb-[30px]">

            <hr className="extraL:w-[1px] extraL:h-full large:w-[1px] large:h-full w-full h-[1px]  bg-[rgb(202,255,51,100%)] border-0  " />
          </div>

          <div className="extraL:w-11/12  large:w-9/12 space-y-[14px] large:space-y-[20px] extraL:space-y-[30px]">
            <h1 className="small:text-center medium:text-center text-[26px] large:text-[32px] extraL:text-[38px] ">
            Vision
            </h1>
            <p className="small:text-center medium:text-center text-[14px] large:text-[16px] extraL:text-[18px] font-light text-[rgb(179,179,179,100%)] ">
            Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.
            </p>
          </div>
        </div>


        
        </div>


        
       

    </div>

    </>
  );
}
