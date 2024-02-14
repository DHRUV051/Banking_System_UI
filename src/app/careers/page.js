import CareersIntro from "@/components/Careers/CareersIntro";
import OurValue from "@/components/Careers/OurValues";

export default function Careers(){
    return(
        <>
            <div className="space-y-[50px]">
                <CareersIntro/>
                <OurValue/>
            </div>
        </>
    )
}