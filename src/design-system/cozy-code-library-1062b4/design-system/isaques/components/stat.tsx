import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/utils";

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: ReactNode;
  detail?: string;
  trend?: "up" | "down" | "neutral";
}

export const Stat = forwardRef<HTMLDivElement, StatProps>(function Stat(
  { className, label, value, detail, trend = "neutral", ...props }, ref,
) {
  return (
    <div ref={ref} className={cn("space-y-2 border-t border-border pt-4", className)} {...props}>
      <p className="text-xs font-semibold uppercase text-muted">{label}</p>
      <p className="font-display text-3xl font-semibold text-foreground">{value}</p>
      {detail ? <p className={cn("text-xs", trend === "up" && "text-primary", trend === "down" && "text-danger", trend === "neutral" && "text-muted")}>{detail}</p> : null}
    </div>
  );
});