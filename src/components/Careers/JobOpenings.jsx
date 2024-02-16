import Image from "next/image";
import Bag from "../../../public/assets/Careers/Bag.svg";

export default function JobOpenings() {
  return (
    <>
      <div>
        <h1 className="small:text-center medium:text-center large:text-left extraL:text-left text-[24px] large:text-[38px] extraL:text-[48px] text-[rgb(202,255,51,100%)]">
          Job Openings
        </h1>

        <p className="text-[14px] extraL:text-[16px] font-light text-[rgb(179,179,179,100%)] small:text-center medium:text-center large:w-11/12 extraL:w-11/12 ">
          Explore exciting job openings at YourBank, where we value talent,
          innovation, and a passion for customer service. Join our team and be
          part of shaping a brighter future in the banking industry
        </p>
      </div>

      <div
        className="mt-[60px] extraL:mt-[80px] small:space-y-[20px] medium:space-y-[20px]
      large:grid large:grid-cols-2 large:gap-[20px] extraL:grid extraL:grid-cols-2 extraL:gap-[30px]
      "
      >
        <div
          className="bg-[rgb(28,28,28,100%)] border-[1px] border-[hsl(0,0%,15%)] 
        p-[24px] large:p-[40px] extraL:p-[50px] rounded-[16px] w-full"
        >
          <h1 className="font-semibold extraL:text-[30px] large:text-[24px] text-[20px]">
            Relationship Manager
          </h1>

          <div className="mt-[6px] extraL:flex large:flex extraL:space-x-[10px] large:space-x-[8px] small:space-y-[6px] medium:space-y-[6px]">
            <div className="medium:w-fit bg-[rgb(26,26,26,100%)] border-[1px] border-[rgb(38,38,38,100%)] px-[10px] py-[6px] rounded-[66px] text-[rgb(179,179,179,100%)]  font-light text-[14px] large:text-[16px] extraL:text-[18px] overflow-auto w-full text-nowrap">
              <span>Location: India</span>
            </div>

            <div className=" medium:w-fit bg-[rgb(26,26,26,100%)] border-[1px] border-[rgb(38,38,38,100%)] px-[10px] py-[6px] w-full rounded-[66px] text-[rgb(179,179,179,100%)]  font-light text-[14px] large:text-[16px] extraL:text-[18px] overflow-auto text-nowrap">
              Department: Retail Banking
            </div>
          </div>

          <div className="mt-[30px] large:mt-[40px] extraL:mt-[50px] space-y-[8px] extraL:space-y-[20px] large:space-y-[16px]">
            <h1 className="font-semibold text-[18px] large:text-[20px] extraL:text-[24px]">
              About This Job
            </h1>
            <p className="text-[rgb(179,179,179)] font-light text-[14px] large:text-[16px] extraL:text-[18px]">
              As a Relationship Manager at YourBank, you will be responsible for
              developing and maintaining relationships with our valued
              customers. You will proactively identify their financial needs and
              offer tailored solutions to help them achieve their goals. We are
              seeking individuals with excellent communication skills, a strong
              sales acumen, and a passion for delivering exceptional customer
              service.
            </p>
          </div>

          <div className="mt-[30px] large:mt-[40px] extraL:mt-[50px] space-y-[10px] extraL:space-y-[20px] large:space-y-[16px]">
            <h1 className="font-semibold text-[18px] large:text-[20px] extraL:text-[24px]">
              Requirements & Qualifications
            </h1>
            <div className="space-y-[14px] extraL:space-y-[20px]">
              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Bachelor&apos;s degree in Business, Finance, or a related field
                </p>
              </div>

              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Minimum of 3 years of experience in sales or relationship
                  management in the banking industry
                </p>
              </div>

              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Proven track record of meeting and exceeding sales targets
                </p>
              </div>

              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Excellent interpersonal and negotiation skills
                </p>
              </div>

              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Strong knowledge of banking products and services
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[30px] large:mt-[40px] extraL:mt-[50px]">
            <button className="w-fit extraL:p-[16] p-[12px] text-black bg-[rgb(202,255,51,100%)] rounded-[82px]">
              Apply Now
            </button>
          </div>
        </div>

        {/* Second Role */}
        <div
          className="bg-[rgb(28,28,28,100%)] border-[1px] border-[rgb(38,38,38)] 
        p-[24px] large:p-[40px] extraL:p-[50px] rounded-[16px]"
        >
          <h1 className="font-semibold extraL:text-[30px] large:text-[24px] text-[20px]">
            Risk Analyst
          </h1>

          <div className="mt-[6px] extraL:flex large:flex extraL:space-x-[10px] large:space-x-[8px] small:space-y-[6px] medium:space-y-[6px]">
            <div className="medium:w-fit bg-[rgb(26,26,26,100%)] border-[1px] border-[rgb(38,38,38,100%)] px-[10px] py-[6px] rounded-[66px] text-[rgb(179,179,179,100%)]  font-light text-[14px] large:text-[16px] extraL:text-[18px] overflow-auto w-full text-nowrap">
              <span>Location: India</span>
            </div>

            <div className="medium:w-fit bg-[rgb(26,26,26,100%)] border-[1px] border-[rgb(38,38,38,100%)] px-[10px] py-[6px] w-full rounded-[66px] text-[rgb(179,179,179,100%)]  font-light text-[14px] large:text-[16px] extraL:text-[18px] overflow-auto text-nowrap">
              Department: Risk Management
            </div>
          </div>

          <div className="mt-[30px] large:mt-[40px] extraL:mt-[50px] space-y-[8px] extraL:space-y-[20px] large:space-y-[16px]">
            <h1 className="font-semibold text-[18px] large:text-[20px] extraL:text-[24px]">
              About This Job
            </h1>
            <p className="text-[rgb(179,179,179)] font-light text-[14px] large:text-[16px] extraL:text-[18px]">
              As a Risk Analyst at YourBank, you will play a vital role in
              identifying and assessing potential risks to our organization. You
              will analyze data, conduct risk assessments, and develop
              strategies to mitigate risks. We are looking for detail-oriented
              individuals with strong analytical skills and a solid
              understanding of risk management principles.
            </p>
          </div>

          <div className="mt-[30px] large:mt-[40px] extraL:mt-[50px] space-y-[10px] extraL:space-y-[20px] large:space-y-[16px]">
            <h1 className="font-semibold text-[18px] large:text-[20px] extraL:text-[24px]">
              Requirements & Qualifications
            </h1>

            <div className="space-y-[14px] extraL:space-y-[20px]">
              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Bachelor&apos;s degree in Business, Finance, or a related field
                </p>
              </div>

              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Minimum of 2 years of experience in risk management or a
                  similar role
                </p>
              </div>

              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Proficiency in risk analysis tools and techniques
                </p>
              </div>

              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Strong analytical and problem-solving skills
                </p>
              </div>

              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Knowledge of regulatory requirements and industry best
                  practices
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[30px] large:mt-[85px] extraL:mt-[77px]">
            <button className="w-fit extraL:p-[16] p-[12px] text-black bg-[rgb(202,255,51,100%)] rounded-[82px]">
              Apply Now
            </button>
          </div>
        </div>

        {/* Third Role */}
        <div
          className="bg-[rgb(28,28,28,100%)] border-[1px] border-[rgb(38,38,38)] 
        p-[24px] large:p-[40px] extraL:p-[50px] rounded-[16px]"
        >
          <h1 className="font-semibold extraL:text-[30px] large:text-[24px] text-[20px]">
            IT Security Specialist
          </h1>

          <div className="mt-[6px] extraL:flex large:flex extraL:space-x-[10px] large:space-x-[8px] small:space-y-[6px] medium:space-y-[6px]">
            <div className="medium:w-fit bg-[rgb(26,26,26,100%)] border-[1px] border-[rgb(38,38,38,100%)] px-[10px] py-[6px] rounded-[66px] text-[rgb(179,179,179,100%)]  font-light text-[14px] large:text-[16px] extraL:text-[18px] overflow-auto w-full text-nowrap">
              <span>Location: India</span>
            </div>

            <div className="medium:w-fit bg-[rgb(26,26,26,100%)] border-[1px] border-[rgb(38,38,38,100%)] px-[10px] py-[6px] w-full rounded-[66px] text-[rgb(179,179,179,100%)]  font-light text-[14px] large:text-[16px] extraL:text-[18px] overflow-auto text-nowrap">
              Department: Information Technology
            </div>
          </div>

          <div className="mt-[30px] large:mt-[40px] extraL:mt-[50px] space-y-[8px] extraL:space-y-[20px] large:space-y-[16px]">
            <h1 className="font-semibold text-[18px] large:text-[20px] extraL:text-[24px]">
              About This Job
            </h1>
            <p className="text-[rgb(179,179,179)] font-light text-[14px] large:text-[16px] extraL:text-[18px]">
              As an IT Security Specialist at YourBank, you will be responsible
              for ensuring the security and integrity of our information
              systems. You will develop and implement security protocols,
              conduct vulnerability assessments, and respond to security
              incidents. We are seeking individuals with a strong technical
              background, knowledge of cybersecurity best practices, and a
              commitment to maintaining the confidentiality of customer data.
            </p>
          </div>

          <div className="mt-[30px] large:mt-[40px] extraL:mt-[50px] space-y-[10px] extraL:space-y-[20px] large:space-y-[16px]">
            <h1 className="font-semibold text-[18px] large:text-[20px] extraL:text-[24px]">
              Requirements & Qualifications
            </h1>

            <div className="space-y-[14px] extraL:space-y-[20px]">
              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Bachelor&apos;s degree in Computer Science, Information Security,
                  or a related field
                </p>
              </div>

              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Minimum of 5 years of experience in IT security or a similar
                  role
                </p>
              </div>

              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  In-depth knowledge of network security protocols and
                  technologies
                </p>
              </div>

              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Familiarity with regulatory frameworks such as PCI DSS and
                  GDPR
                </p>
              </div>

              <div className="space-x-[8px] extraL:space-x-[10px] flex">
                <Image src={Bag} alt="" width="" height="" />
                <p className="font-extralight text-[rgb(179,179,179)] text-[14px] large:text-[16px] extraL:text-[18px]">
                  Professional certifications such as CISSP or CISM are
                  preferred
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[30px] large:mt-[40px] extraL:mt-[50px]">
            <button className="w-fit extraL:p-[16] p-[12px] text-black bg-[rgb(202,255,51,100%)] rounded-[82px]">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
