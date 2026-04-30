interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
      {children}
    </p>
  );
}
