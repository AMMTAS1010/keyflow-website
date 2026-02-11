import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bg?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  bg = "#F8F8F8",
}: FeatureCardProps) {
  return (
    <div
      className="rounded-xl p-6"
      style={{ backgroundColor: bg }}
    >
      <div className="w-10 h-10 rounded-lg bg-[#1B1B1B] flex items-center justify-center mb-4">
        <Icon size={20} className="text-white" />
      </div>
      <h3 className="text-base font-semibold text-[#1B1B1B] mb-2">{title}</h3>
      <p className="text-sm text-[#666] leading-relaxed">{description}</p>
    </div>
  );
}
