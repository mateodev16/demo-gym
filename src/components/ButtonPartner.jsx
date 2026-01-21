import { FaArrowRight } from "react-icons/fa6";

export default function PartnerButton() {
  return (
    <button className="flex items-center gap-2 px-6 py-3 bg-brand-secondary hover:bg-brand-primary mt-10 font-medium rounded-lg transition-all group">
      <span>Quiero ser socio</span>
      <FaArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
    </button>
    
  );
}