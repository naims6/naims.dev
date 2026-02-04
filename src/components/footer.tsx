import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-muted/20 mt-10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
        <p className="text-sm text-muted-foreground font-medium text-center">
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://www.facebook.com/naim.sorker6"
            target="_blank"
            className="text-foreground hover:text-primary transition-colors font-bold underline decoration-primary/30 underline-offset-4"
          >
            Naim Sorker
          </Link>
          . <span>All rights reserved.</span>
        </p>
        <div className="h-1 w-12 bg-primary/20 rounded-full" />
      </div>
    </footer>
  );
}
