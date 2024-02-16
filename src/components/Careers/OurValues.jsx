export default function OurValue() {
  return (
    <>
      <div>
        <h1 className="small:text-center medium:text-center large:text-left extraL:text-left text-[24px] large:text-[38px] extraL:text-[48px]">
          Our <span className="text-[rgb(202,255,51,100%)] ">Values</span>
        </h1>

        <p className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] small:text-center medium:text-center large:w-11/12 extraL:w-11/12 ">
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </p>
      </div>

      {/* Values */}
      <div className="mt-[50px] small:space-y-[50px] medium:space-y-[50px] large:grid large:grid-cols-2 large:gap-[60px] extraL:grid extraL:grid-cols-2 extraL:gap-[80px] ">

        <div className="flex h-fit space-x-[20px]">
          <div className="flex items-center justify-center">
            <hr className="w-[1px] h-full my-8 bg-[rgb(202,255,51,100%)] border-0 rounded " />
          </div>

          <div className="space-y-[14px] large:space-y-[20px] extraL:space-y-[30px]">
            <h1 className="text-[30px] large:text-[40px] extraL:text-[50px] text-[rgb(76,76,77,100%)]">
              Integrity
            </h1>
            <p className="text-[14px] large:text-[16px] extraL:text-[18px] font-light text-[rgb(179,179,179,100%)] ">
              We conduct ourselves with utmost honesty, transparency, and
              ethical behavior. We believe in doing what is right for our
              customers, colleagues, and stakeholders, even when faced with
              difficult choices.
            </p>
          </div>
        </div>

        <div className="flex h-fit space-x-[20px]">
          <div className="flex items-center justify-center">
            <hr className="w-[1px] h-full my-8 bg-[rgb(202,255,51,100%)] border-0 rounded " />
          </div>

          <div className="space-y-[14px] large:space-y-[20px] extraL:space-y-[30px]">
            <h1 className="text-[30px] large:text-[40px] extraL:text-[50px] text-[rgb(76,76,77,100%)]">
            Customer Centricity
            </h1>
            <p className="text-[14px] large:text-[16px] extraL:text-[18px] font-light text-[rgb(179,179,179,100%)] ">
            Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.
            </p>
          </div>
        </div>


        <div className="flex h-fit space-x-[20px]">
          <div className="flex items-center justify-center">
            <hr className="w-[1px] h-full my-8 bg-[rgb(202,255,51,100%)] border-0 rounded " />
          </div>

          <div className="space-y-[14px] large:space-y-[20px] extraL:space-y-[30px]">
            <h1 className="text-[30px] large:text-[40px] extraL:text-[50px] text-[rgb(76,76,77,100%)]">
            Collaboration
            </h1>
            <p className="text-[14px] large:text-[16px] extraL:text-[18px] font-light text-[rgb(179,179,179,100%)] ">
            We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.
            </p>
          </div>
        </div>


        <div className="flex h-fit space-x-[20px]">
          <div className="flex items-center justify-center">
            <hr className="w-[1px] h-full my-8 bg-[rgb(202,255,51,100%)] border-0 rounded " />
          </div>

          <div className="space-y-[14px] large:space-y-[20px] extraL:space-y-[30px]">
            <h1 className="text-[30px] large:text-[40px] extraL:text-[50px] text-[rgb(76,76,77,100%)]">
            Innovation
            </h1>
            <p className="text-[14px] large:text-[16px] extraL:text-[18px] font-light text-[rgb(179,179,179,100%)] ">
            We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
