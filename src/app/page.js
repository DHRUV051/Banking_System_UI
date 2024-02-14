import FAQ from "@/components/Home/FAQ";
import Features from "@/components/Home/Feactures";
import Introduction from "@/components/Home/Introduction";
import Last from "@/components/Home/Last";
import Product from "@/components/Home/Products";
import Testimonials from "@/components/Home/Testimonials";
import UseCases from "@/components/Home/UseCases";

export default function Home() {
  return (
    <>
      <div className="space-y-[50px]">
        <Introduction />
        <Product />
        <UseCases />
        <Features />
        <FAQ />
        <Testimonials />
        <Last />
      </div>
    </>
  );
}
