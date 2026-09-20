export function ImagePlaceholder({
  label = "Imagem",
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Espaço reservado para ${label.toLowerCase()}`}
      className={`flex w-full items-center justify-center rounded-md border border-dashed border-border bg-surface-soft ${ratio} ${className}`}
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-muted">{label}</span>
    </div>
  );
}
