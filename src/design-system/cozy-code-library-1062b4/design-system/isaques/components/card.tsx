import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "default" | "soft" | "ink" | "gradientSoft" | "gradientDepth";
}

const tones: Record<NonNullable<CardProps["tone"]>, string> = {
  default: "border border-border bg-surface text-foreground",
  soft: "bg-surface-soft text-foreground",
  ink: "bg-foreground text-background",
  gradientSoft: "bg-gradient-soft text-foreground",
  gradientDepth: "bg-gradient-depth text-primary-foreground",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card({ className, tone = "default", ...props }, ref) {
  return <div ref={ref} className={cn("rounded-lg", tones[tone], className)} {...props} />;
});

export interface CardSectionProps extends HTMLAttributes<HTMLDivElement> {}
export const CardHeader = forwardRef<HTMLDivElement, CardSectionProps>(function CardHeader({ className, ...props }, ref) { return <div ref={ref} className={cn("space-y-2 p-6 pb-3", className)} {...props} />; });
export const CardContent = forwardRef<HTMLDivElement, CardSectionProps>(function CardContent({ className, ...props }, ref) { return <div ref={ref} className={cn("p-6 pt-3", className)} {...props} />; });
export const CardFooter = forwardRef<HTMLDivElement, CardSectionProps>(function CardFooter({ className, ...props }, ref) { return <div ref={ref} className={cn("flex items-center gap-3 p-6 pt-3", className)} {...props} />; });

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}
export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(function CardTitle({ className, ...props }, ref) { return <h3 ref={ref} className={cn("font-display text-xl font-semibold", className)} {...props} />; });
export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}
export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(function CardDescription({ className, ...props }, ref) { return <p ref={ref} className={cn("text-sm leading-6 text-muted", className)} {...props} />; });