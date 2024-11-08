export const metadata = {
  title: "Customers - Truxt",
  description: "Page description",
};

import Hero from "./hero";
import WallOfLove from "@/components/wall-of-love";
import Cta from "@/components/cta-alternative";

export default function Customers() {
  return (
    <>
      <Hero />
      <WallOfLove />
      <Cta
        heading="Create your next project with Truxt"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
