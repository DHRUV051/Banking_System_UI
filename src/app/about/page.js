import AboutIntro from "@/components/About/AboutInto";
import AboutSecond from "@/components/About/AboutSecond";
import PressReleases from "@/components/About/PressReleases";

export default function About(){
    return (
        <>
            <div className="space-y-[50px]">
                <AboutIntro/>
                <AboutSecond/>
                <PressReleases/>
            </div>
        </>
    )
}