import { WHATSAPP_URL } from "@/components/PageTemplate";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-md bg-gradient-action px-4 py-3 text-sm font-semibold text-primary-foreground shadow-system transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      Chamar no WhatsApp
    </a>
  );
}
