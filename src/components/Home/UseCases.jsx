import Image from "next/image";
import UseCase from "../../../public/assets/Sub Container.svg";
import UseCase1 from "../../../public/assets/Sub Container1.svg";

export default function UseCases() {
  return (
    <>
      <div className="small:text-center medium:text-center">
        <h1 className="text-[rgb(202,255,51)] text-[24px] large:text-[31px] extraL:text-[48px]">
          Use Cases
        </h1>
        <p className="text-[14px] text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions.
        </p>
      </div>

      {/* Use Cases */}

      <div className="small:mt-[50px] large:flex extraL:flex extraL:justify-between extraL:gap-10  large:justify-between large:gap-5 ">
        <div className="large:w-1/2 extraL:w-1/2">
          <Image
            src={UseCase}
            alt=""
            className="mx-auto large:hidden extraL:hidden"
            width=""
            height=""
          />
          <Image
            src={UseCase1}
            alt=""
            className="w-full h-full small:hidden medium:hidden"
            width=""
            height=""
          />
        </div>

        <div className="mt-[50px] large:mt-0 extraL:mt-0 large:w-1/2 extraL:w-1/2">
          <div className="small:text-center medium:text-center">
            <h1 className="extraL:text-[30px] large:text-[26px]">
              For Individuals
            </h1>
            <p className="text-[14px]  text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
              For individuals, our mortgage services pave the way to
              homeownership, and our flexible personal loans provide vital
              support during various life milestones. We also prioritize
              retirement planning, ensuring a financially secure future for our
              customers
            </p>
          </div>

          <div className="large:flex extraL:flex extraL:space-x-[40px] large:space-x-[35px]">
            <div className="small:text-center medium:text-center py-[50px] extraL:py-2 large:w-1/3 extraL:w-1/3">
              <h1 className="text-[40px] text-[rgb(202,255,51)] extraL:text-[56px] ">
                78%
              </h1>
              <p className="text-[14px] text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
                Secure Retirement Planning
              </p>
            </div>

            <div className="small:text-center medium:text-center py-[50px] extraL:py-2 large:w-1/3 extraL:w-1/3">
              <h1 className="text-[40px] text-[rgb(202,255,51)] extraL:text-[56px] ">
                63%
              </h1>
              <p className="text-[14px] text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
                Manageable Debt Consolidation
              </p>
            </div>

            <div className="small:text-center medium:text-center py-[50px] extraL:py-2 large:w-1/3 extraL:w-1/3">
              <h1 className="text-[40px] text-[rgb(202,255,51)] extraL:text-[56px] ">
                91%
              </h1>
              <p className="text-[14px] text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
                Reducing financial burdens
              </p>
            </div>
          </div>

          <div className="mt-[30px] bg-[rgb(26,26,26)] w-fit px-[20px] py-[14px] rounded-[82px] border-[1px] border-[rgb(38,38,38)] small:mx-auto medium:mx-auto">
            <button>Learn more</button>
          </div>
        </div>
      </div>

      {/* Bussiness */}

      <div className="small:mt-[50px] large:flex extraL:flex extraL:justify-between extraL:gap-10 large:justify-between large:gap-5 ">
        <div className="large:w-1/2 extraL:w-1/2 order-last">
          <Image
            src={UseCase}
            alt=""
            className="mx-auto large:hidden extraL:hidden"
            width=""
            height=""
          />
          <Image
            src={UseCase1}
            alt=""
            className="w-full h-full small:hidden medium:hidden"
            width=""
            height=""
          />
        </div>

        <div className="mt-[50px] large:mt-0 extraL:mt-0 large:w-1/2 extraL:w-1/2">
          <div className="small:text-center medium:text-center">
            <h1 className="extraL:text-[30px] large:text-[26px]">
              For Business
            </h1>
            <p className="text-[14px]  text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2 w-11/12 ">
              For businesses, we empower growth with working capital solutions
              that optimize cash flow, and our tailored financing options fuel
              business expansion. Whatever your financial aspirations, YourBank
              is committed to providing the right tools and support to achieve
              them
            </p>
          </div>

          <div className="large:flex extraL:flex extraL:space-x-[40px]">
            <div className="small:text-center medium:text-center py-[50px] extraL:py-2 extraL:w-1/3">
              <h1 className="text-[40px] text-[rgb(202,255,51)] extraL:text-[56px] ">
                65%
              </h1>
              <p className="text-[14px] text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
                Cash Flow Management
              </p>
            </div>

            <div className="small:text-center medium:text-center py-[50px] extraL:py-2 extraL:w-1/3">
              <h1 className="text-[40px] text-[rgb(202,255,51)] extraL:text-[56px] ">
                70%
              </h1>
              <p className="text-[14px] text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
                Drive Business Expansion
              </p>
            </div>

            <div className="small:text-center medium:text-center py-[50px] extraL:py-2 extraL:w-1/3">
              <h1 className="text-[40px] text-[rgb(202,255,51)] extraL:text-[56px] ">
                45%
              </h1>
              <p className="text-[14px] text-[rgb(179,179,179)] large:text-[16px] extraL:text-[18px] mt-2">
                Streamline payroll processing
              </p>
            </div>
          </div>

          <div className="mt-[30px] bg-[rgb(26,26,26)] w-fit px-[20px] py-[14px] rounded-[82px] border-[1px] border-[rgb(38,38,38)] small:mx-auto medium:mx-auto mb-[30px]">
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </>
  );
}
