import { Container } from "../layout";
import Link from "next/link";
import { AnimateSection } from "../animate-section";

export function About() {
  return (
    <AnimateSection>
      <Container className="pt-10 pb-16 flex flex-col gap-4 [&_p]:text-foreground/90 [&_a]:font-medium [&_a]:hover:underline">
        <h2 className="font-medium text-3xl">About me</h2>
        <p>
          I currently work as a freelance software engineer, helping startups
          and teams bring their ideas to life through modern UIs, integrations,
          and scalable backend systems. I&apos;m a long-term contributor at{" "}
          <Link href="https://thecampstack.com" target="_blank">
            TheCampStack
          </Link>
          , where I focus on building recommendation engines, custom workflows
          and developer tooling. Previously I was at{" "}
          <Link href="https://mytpen.app" target="_blank">
            myTpen
          </Link>{" "}
          and{" "}
          <Link href="https://abilitybeyond.org" target="_blank">
            Ability Beyond
          </Link>{" "}
          on data-driven platforms and automation tools.
        </p>

        <p>
          My work spans across building workflows that handle +10,000 of monthly
          invocations to designing user-facing features in high-traffic
          environments. I&apos;m especially drawn to systems that blend product
          thinking with deep technical execution.
        </p>

        <p>
          Outside of work, I&apos;m a curious mind—following science,
          experimenting with motion design, playing video games, and working
          toward building a meaningful online presence.
        </p>
      </Container>
    </AnimateSection>
  );
}
