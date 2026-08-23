import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "invert";
}) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex shrink-0 items-center gap-3", className)}
      aria-label="Menopausa Além do Espelho — página inicial"
    >
      <span
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-xl text-base font-bold transition-transform group-hover:scale-105",
          tone === "invert" ? "bg-cyan text-petrol-deep" : "bg-primary text-primary-foreground",
        )}
      >
        M
      </span>
      <span className="min-w-0 leading-none">
        <span
          className={cn(
            "block text-[1.0625rem] font-bold uppercase leading-none tracking-tight",
            tone === "invert" ? "text-primary-foreground" : "text-primary",
          )}
        >
          Menopausa
        </span>
        <span
          className={cn(
            "mt-1 block text-[0.6875rem] font-medium uppercase leading-none tracking-[0.22em]",
            tone === "invert" ? "text-cyan" : "text-teal",
          )}
        >
          Além do Espelho
        </span>
      </span>
    </Link>
  );
}
