import { GridBackground } from "@/components/grid-background";
import { About, Blogs, Hero } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Blogs />
      <GridBackground />
    </main>
  );
}
