import Benefits from "@/components/Careers/Benefits";
import CareersIntro from "@/components/Careers/CareersIntro";
import OurValue from "@/components/Careers/OurValues";
import FAQ from "@/components/Home/FAQ";
import JobOpenings from "@/components/Careers/JobOpenings";
import Last from "@/components/Careers/Last";


export default function Careers(){
    return(
        <>
            <div className="space-y-[50px]">
                <CareersIntro/>
                <div className="space-y-[50px] relative">
                <OurValue/>
                <Benefits/>
                <JobOpenings/>
                <FAQ/>
                <Last/>
                </div>
            </div>
        </>
    )
}