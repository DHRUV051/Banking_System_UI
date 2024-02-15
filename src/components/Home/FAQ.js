export default function FAQ(){
    return (
        <>
        
            <div className="small:text-center medium:text-center">
        <h1 className="  text-[28px] large:text-[38px] extraL:text-[48px]">
        <span className="text-[rgb(202,255,51)]">Frequently </span>
        Asked Questions        
       </h1>

        <p className="text-[14px] text-[rgb(228,228,231)] large:text-[14px] extraL:text-[18px] mt-2">
        Still you have any questions? Contact our Team via support@yourbank.com
        </p>
      </div>

            <div className="large:grid large:grid-cols-2 large:gap-5 extraL:grid extraL:grid-cols-2 extraL:gap-5 small:space-y-[20px] medium:space-y-[20px]">

            <div className="p-[30px] border-[1px] border-[rgb(38,38,38)] bg-[rgb(28,28,28)] rounded-[10px] divide-y-[1px] divide-[rgb(48,48,48)] space-y-[15px]">
                
                    <h1 className="text-[14px] large:text-[16px] extraL:text-[20px]">How do I open an account with YourBank?</h1>
            
                <p className="pt-[20px] text-[14px] text-[rgb(179,179,179)] large:text-[14px] extraL:text-[18px]">Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
            </div>

            <div className="p-[30px] border-[1px] border-[rgb(38,38,38)] bg-[rgb(28,28,28)] rounded-[10px] divide-y-[1px] divide-[rgb(48,48,48)] space-y-[15px] ">
                <div className="flex">
                    <h1 className="text-[14px] large:text-[16px] extraL:text-[20px]">What documents do I need to provide to apply for a loan?</h1>
                    
                </div>
                <p className="pt-[20px] text-[14px] text-[rgb(179,179,179)] large:text-[14px] extraL:text-[18px]">
                The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver&apos;`s license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.
                </p>
            </div>

            

            <div className="p-[30px] border-[1px] border-[rgb(38,38,38)] bg-[rgb(28,28,28)] rounded-[10px] divide-y-[1px] divide-[rgb(48,48,48)] space-y-[15px] ">
                <div className="flex">
                    <h1 className="text-[14px] large:text-[16px] extraL:text-[20px]">How can I access my accounts online?</h1>
                    
                </div>
            <div className="extraL:backdrop-blur-lg extraL:opacity-[0.5]  extraL:bg-gradient-to-t  extraL:from-[rgb(28,28,28)] extraL:to-[rgb(58,58,58,1)] extraL:-ml-8 extraL:-mr-8 large:backdrop-blur-lg large:opacity-[0.5]  large:bg-gradient-to-t  large:from-[rgb(28,28,28)] large:to-[rgb(58,58,58,1)] large:-ml-8 large:-mr-8"> 

                <p className="pt-[20px] text-[14px] text-[rgb(179,179,179)] large:text-[14px] extraL:text-[18px]  extraL:ml-8 extraL:mr-8 
                large:ml-8 large:mr-8 
                ">
                Accessing your accounts online is simple and secure. Visit our website and click on the &quot;Login&quot; button. Enter your username and password to access your accounts. If you haven&apos;t registered for online banking, click on the &quot;Enroll Now&quot; button and follow the registration process. If you need assistance, our customer support team is available to guide you.
                </p>
                </div>
            </div>

            <div className="p-[30px] border-[1px] border-[rgb(38,38,38,0)] bg-[rgb(28,28,28)] rounded-[10px] divide-y-[1px] divide-[rgb(48,48,48)] space-y-[15px]">
                <div className="flex">
                    <h1 className="text-[14px] large:text-[16px] extraL:text-[20px]">Are my transactions and personal information secure?</h1>
                    
                </div>
                <div className="backdrop-blur-lg opacity-[0.5] bg-gradient-to-t  from-[rgb(28,28,28)] to-[rgb(58,58,58,1)] -ml-8 -mr-8  "> 

                <p className="pt-[20px] text-[14px] text-[rgb(179,179,179)] large:text-[14px] extraL:text-[18px]  ml-8 mr-8 
                 ">
                    At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.    
                </p>
                </div>
            </div>

            </div>

        
            
            <div className=" flex flex-col justify-center items-center">
                <button className=" border-[1px] border-[rgb(38,38,38)] bg-[rgb(28,28,28)] rounded-[10px] px-[20px] py-[14px]">
                    Load All FAQ&apos;s
                </button>
            </div>
        
        
        </>
    )
}