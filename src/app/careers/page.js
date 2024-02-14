import Benefits from "@/components/Careers/Benefits";
import CareersIntro from "@/components/Careers/CareersIntro";
import OurValue from "@/components/Careers/OurValues";
import Last from "@/components/Home/Last";
import FAQ from "@/components/Home/FAQ";
import JobOpenings from "@/components/Careers/JobOpenings";

export default function Careers(){
    return(
        <>
            <div className="space-y-[50px]">
                <CareersIntro/>
                <OurValue/>
                <Benefits/>
                <JobOpenings/>
                <FAQ/>
                <Last/>
            </div>
        </>
    )
}