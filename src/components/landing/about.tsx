import { BlurFade } from "../animation-wrapper";

export default function About() {
  return (
    <div>
      <BlurFade delay={0.25} inView>
        <p className="max-w-2xl text-base lg:text-lg text-muted-foreground leading-relaxed">
          I am a Full Stack Developer. My goal in the next{" "}
          <span className="font-semibold text-foreground">2-3 years</span> is to
          become a good{" "}
          <span className="font-semibold text-foreground">Tech Leader</span> by
          guiding junior developers, making better technical decisions, and
          helping teams build impactful products that create meaningful value for users and businesses.
        </p>
      </BlurFade>
    </div>
  );
}
