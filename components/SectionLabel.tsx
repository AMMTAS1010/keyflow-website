export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold tracking-[3px] text-[#999] uppercase">
      {children}
    </span>
  );
}
