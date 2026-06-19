import { ArrowUpRight } from "lucide-react";
import { profile } from "../content/portfolio";
import { cn } from "../lib/utils";

type ContactButtonProps = {
  className?: string;
};

export function ContactButton({ className }: ContactButtonProps) {
  return (
    <a
      href={profile.contactUrl}
      className={cn(
        "liquid-glass-strong group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-glass-inner transition duration-200 hover:scale-[1.02] active:scale-[0.98]",
        className,
      )}
      aria-label={`Contact ${profile.name}`}
    >
      <span>{profile.contactLabel}</span>
      <ArrowUpRight aria-hidden="true" className="h-5 w-5 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
