import Link from "next/link";
import Image from "next/image";
import Eye from "../../../public/assets/eye.svg";
import Google from "../../../public/assets/google.svg";
import Facebook from "../../../public/assets/Facebook1.svg";
import Apple from "../../../public/assets/Apple1.svg";

export default function SignUp() {
  return (
    <>
      <div className="relative bg-[url('/Login.svg')] bg-no-repeat bg-cover p-[30px] large:px-[80px] large:py-[80px] extraL:px-[150px] extraL:py-[100px] border-[1px] border-[rgb(38,38,38)] rounded-[26px] w-full h-full">
        <div
          className="absolute inset-0  ml-auto bg-no-repeat bg-right-top bg-cover w-[167px] h-[159px] extraL:scale-[2.0] extraL:top-[85px] extraL:right-[85px] "
          style={{ backgroundImage: `url('/Abstract Design.svg')` }}
        ></div>

        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-[rgb(202,255,51)] font-medium text-[28px] large:text-[38px] extraL:text-[48px] text-center">
            Sign Up
          </h1>

          <p className="mt-[10px] text-[14px] large:text-[16px] extraL:text-[18px] font-light text-[rgb(179,179,179)] text-center large:w-96">
            Welcome back! Please log in to access your account.
          </p>
        </div>

        <div className="mt-[40px] extraL:mt-[80px] large:mt-[60px ] ">
          <form className="space-y-[20px] extraL:mb-[40px] large:mb-[30px]">
            <div className="large:flex extraL:flex justify-center large:space-x-[24px] extraL:space-x-[30px]">
              <label className="extraL:w-1/2 large:w-[200px]">
                <div className="bg-[rgb(22,22,22,100%)] mb-[24px]  p-[16px] border-[1px] border-[rgb(38,38,38)] text-[rgb(179,179,179)] rounded-[88px] w-full  large:p-[20px] extraL:p-[24px] overflow-auto">
                  <input
                    type="text"
                    name="Email"
                    placeholder="Enter Your Email"
                    className="bg-transparent focus:outline-none extraL:text-[18px] text-[16px] font-light"
                  />
                </div>
              </label>

              <label className="extraL:w-1/2 large:w-[200px]">
                <div
                  className="bg-[rgb(22,22,22,100%)] mb-[24px]  p-[16px] border-[1px] border-[rgb(38,38,38)] text-[rgb(179,179,179)] rounded-[88px] w-full  large:p-[20px] 
              extraL:p-[24px] flex overflow-auto"
                >
                  <input
                    type="password"
                    name="Password"
                    autoComplete="on"
                    placeholder="Enter Your Password"
                    className="bg-transparent focus:outline-none extraL:text-[18px] text-[16px] font-light"
                  />
                  <Image src={Eye} alt="" width="auto" className="ml-auto" />
                </div>
              </label>
            </div>
          </form>

          <div>
            <h1 className="text-center underline underline-offset-4 text-[14px] extraL:text-[18px] large:text-[16px] cursor-pointer">
              Forgot Password?
            </h1>
          </div>

          <div className="mt-[24px] large:mt-[30px] extraL:mt-[40px] flex flex-col justify-center  items-center space-y-[24px]">

          <Link
                href="/signup"
                className="cursor-pointer extraL:w-1/2 medium:w-1/2 large:w-44 small:w-full"
            >
            <button className="cursor-pointer w-full extraL:px-[20px] extraL:py-[18px] px-[24px] py-[14px]  text-center text-[14px] extraL:text-[18px]    rounded-[62px] bg-[rgb(202,255,51,100%)] text-black  border-[1px] border-[rgb(51,51,51)]" >
              
                Sign Up
              
            </button>
            </Link>

            <Link
                href="/login"
                className="extraL:w-1/2 medium:w-1/2 large:w-44 small:w-full"
            >
            <button className="w-full extraL:px-[20px] extraL:py-[18px] px-[24px] py-[14px]  text-center text-[14px] extraL:text-[18px]  bg-[rgb(38,38,38,100%)]  rounded-[62px]  border-[1px] border-[rgb(51,51,51)]" >
              
                Login
              
            </button>
            </Link>


          </div>

          <div className="mt-[24px] large:mt-[30px] extraL:mt-[40px] mx-auto extraL:w-full large:w-full ">
            <div className="items-center justify-center flex ">
              <hr className="w-1/2 extraL:w-1/2 large:w-full h-[1px] my-8 bg-[rgb(179,179,179)] border-0 rounded " />

              <h1 className="text-center large:w-full extraL:w-1/2 w-1/2 text-[14px] extraL:text-[18px] ">
                Or Continue with
              </h1>

              <hr className="w-1/2 extraL:w-1/2 large:w-full h-[1px] my-8 bg-[rgb(179,179,179)] border-0 rounded " />
            </div>
          </div>

          <div className="mt-[24px] mx-auto large:mt-[30px] extraL:mt-[40px] flex flex-col justify-center items-center">
            <div className="flex space-x-[20px] extraL:space-x-[24px]">
              <Image
                src={Google}
                alt=""
                width="auto"
                height=""
                className="cursor-pointer small:w-[50px] medium:w-[60px] extraL:w-[90px] large:w-[70px]"
              />
              <Image
                src={Facebook}
                alt=""
                width="auto"
                height=""
                className="cursor-pointer small:w-[50px] medium:w-[60px] extraL:w-[90px] large:w-[70px]"
              />
              <Image
                src={Apple}
                alt=""
                width="auto"
                height=""
                className="cursor-pointer small:w-[50px] medium:w-[60px] extraL:w-[90px] large:w-[70px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
