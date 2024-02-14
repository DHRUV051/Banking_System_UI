import Testimonials from "@/components/Home/Testimonials";
import Login from "@/components/Login In/Login";

export default function LOGINPAGE() {
  return (
    <>
      <div>
        <div className="extraL:mx-[120px] large:mx-[100px] mb-[150px] ">
        <Login />
        </div>
        <Testimonials/>
      </div>
    </>
  );
}
