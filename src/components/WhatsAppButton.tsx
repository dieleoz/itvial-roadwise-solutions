import { MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/context/WhatsAppContext";

export default function WhatsAppButton() {
  const phone = "573188200400";
  const { message } = useWhatsApp();
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
