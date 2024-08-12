import Image from "next/image";
import Hero from "@src/components/sections/hero";
import Features from "@src/components/sections/features";
import Pricing from "@src/components/sections/pricing";
import OpenSource from "@src/components/sections/open-source";



export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      {/* <OpenSource /> */}
    </>
  );
}
