import { Hero } from "@/components/sections/Hero";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { ProjectList } from "@/components/sections/ProjectList";

export default function Home() {
  return (
    <div>
      <Hero />
      <section>
        <SectionLabel label="Featured Work" delay={0.5} />
        <ProjectList />
      </section>
    </div>
  );
}
