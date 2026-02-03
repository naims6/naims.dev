import { BlurFade } from "./animation-wrapper";

export default function About() {
  return (
    <div className="space-y-4">
      <BlurFade delay={0.25} inView>
        <p className="text-xl lg:text-2xl font-black text-foreground leading-[1.15]">
          Building{" "}
          <span className="relative inline-block">
            <span className="text-primary italic">scalable</span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/20 rounded-full" />
          </span>{" "}
          digital products while keeping the user experience simple and smooth.
        </p>
      </BlurFade>
      <BlurFade delay={0.4} inView>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          I'm a Full Stack Developer specializing in the{" "}
          <span className="font-bold text-foreground italic">MERN stack</span>{" "}
          and <span className="font-bold text-foreground italic">Next.js</span>.
          I enjoy turning designs into real, working applications by writing
          clean code and focusing on performance, usability, and a smooth user
          experience.
        </p>
      </BlurFade>
    </div>
  );
}
