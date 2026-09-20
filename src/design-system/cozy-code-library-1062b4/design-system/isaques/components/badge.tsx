import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "neutral" | "outline" | "success";
}

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  accent: "bg-accent-soft text-foreground",
  neutral: "bg-surface-soft text-muted",
  outline: "border border-border text-foreground",
  success: "bg-primary text-primary-foreground",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, variant = "accent", ...props },
  ref,
) {
  return <span ref={ref} className={cn("inline-flex h-6 items-center rounded-sm px-2 text-xs font-semibold", variants[variant], className)} {...props} />;
});