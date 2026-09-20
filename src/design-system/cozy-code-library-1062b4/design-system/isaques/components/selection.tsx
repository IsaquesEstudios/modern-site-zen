import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  size?: "sm" | "md";
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { className, size = "md", ...props }, ref,
) {
  return <input ref={ref} type="checkbox" className={cn("shrink-0 cursor-pointer rounded-sm border-border accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:cursor-not-allowed disabled:opacity-50", size === "sm" ? "size-4" : "size-5", className)} {...props} />;
});

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  size?: "sm" | "md";
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { className, size = "md", ...props }, ref,
) {
  return (
    <label className={cn("relative inline-flex shrink-0 cursor-pointer items-center has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50", className)}>
      <input ref={ref} type="checkbox" className="peer sr-only" {...props} />
      <span className={cn("rounded-full bg-border transition peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-focus peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background after:absolute after:rounded-full after:bg-surface after:shadow-sm after:transition-transform peer-checked:after:translate-x-full", size === "sm" ? "h-5 w-9 after:left-0.5 after:top-0.5 after:size-4" : "h-6 w-11 after:left-0.5 after:top-0.5 after:size-5")} aria-hidden="true" />
    </label>
  );
});