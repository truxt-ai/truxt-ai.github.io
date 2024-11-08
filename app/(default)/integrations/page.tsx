export const metadata = {
  title: "Apps - Truxt",
  description: "Page description",
};

import Hero from "./hero";
import AppList from "@/components/app-list";
import Cta from "@/components/cta-alternative";

export default function Apps() {
  return (
    <>
      <Hero />
      <AppList />
      <Cta
        heading="Create your next project with Truxt"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
