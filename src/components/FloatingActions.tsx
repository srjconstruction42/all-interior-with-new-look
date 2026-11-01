import { Phone, MessageCircle } from "lucide-react";
import { PHONE, WHATSAPP } from "@/data/services";

const FloatingActions = () => (
  <div className="fixed bottom-4 left-4 z-40 flex flex-col gap-3">
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"><MessageCircle className="w-7 h-7" /></a>
    <a href={`tel:${PHONE}`} aria-label="Call SRJ Construction"
      className="w-14 h-14 rounded-full bg-accent text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform"><Phone className="w-6 h-6" /></a>
  </div>
);

export default FloatingActions;
