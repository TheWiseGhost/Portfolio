import Navbar from "@/components/global/Navbar";
import Hero from "@/components/Hero";
import Main from "@/components/noteslide/Main";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="my_grid">
        <Hero />
      </div>
      <div className="scroll-smooth pt-40">
        <Main />
      </div>
    </div>
  );
}
