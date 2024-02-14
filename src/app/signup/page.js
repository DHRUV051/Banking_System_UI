import Testimonials from "@/components/Home/Testimonials";
import SignUp from "@/components/Sign Up/SignUp";

export default function SIGNUP() {
  return (
    <>
      <div>
        <div className="extraL:mx-[120px] large:mx-[100px] mb-[150px] ">
          <SignUp />
        </div>
        <Testimonials />
      </div>
    </>
  );
}
