import Contact from "@/components/homeComponents/Contact";
import Feature from "@/components/homeComponents/Feature";
import Hero from "@/components/homeComponents/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto" >
    <Hero/>
    <Feature/>
    <Contact/>
    </div>
  );
}
