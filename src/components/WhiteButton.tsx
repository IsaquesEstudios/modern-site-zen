import { Button, type ButtonProps } from "@/design-system/cozy-code-library-1062b4";

/**
 * Variação clara do botão do design system, para uso sobre superfícies escuras
 * (cards com tone="ink" / "gradientDepth"). Usa apenas tokens do sistema.
 */
export function WhiteButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      variant="secondary"
      className={["bg-background text-primary hover:bg-surface-soft", className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
