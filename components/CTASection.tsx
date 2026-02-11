import Link from "next/link";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  trustText: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  trustText,
}: CTASectionProps) {
  return (
    <section className="py-24 px-6 md:px-20">
      <div className="mx-auto max-w-[1440px] text-center">
        <h2 className="text-3xl md:text-[44px] font-bold text-[#1B1B1B] leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-lg text-[#666] max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="bg-[#1B1B1B] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#333] transition-colors"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="border border-[#E0E0E0] text-[#1B1B1B] px-8 py-3.5 rounded-lg font-medium hover:bg-[#F8F8F8] transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
        <p className="mt-6 text-sm text-[#999]">{trustText}</p>
      </div>
    </section>
  );
}
