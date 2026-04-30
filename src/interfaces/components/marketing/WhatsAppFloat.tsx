import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-600/30 transition hover:-translate-y-0.5 hover:bg-emerald-600 lg:bottom-8 lg:right-8"
      aria-label="Solicitar orçamento no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
