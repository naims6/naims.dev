import { BlurFade } from "./animation-wrapper"

export default function Footer() {
  return (
    <div className="py-7 border-t border-border/40 mt-10">
      <BlurFade delay={0.2} inView>
        <h1 className="text-center text-muted-foreground">
          © 2026 Naim Sorker. All rights reserved.
        </h1>
      </BlurFade>
    </div>
  )
}
