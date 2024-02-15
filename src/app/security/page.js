import Security2 from "@/components/Security/Security2";
import SecurityIntro from "@/components/Security/SecurityIntro";

export default function Page(){
    return(
        <>
            <div className="space-y-[50px]">
                <SecurityIntro/>
                <Security2/>
            </div>
        </>
    )
}