interface SectionEyebrowProps {
  text: string;
  className?: string;
}

export default function SectionEyebrow({ text, className = '' }: SectionEyebrowProps) {
  return (
    <span className={`font-eyebrow text-amber block mb-4 ${className}`}>
      {text}
    </span>
  );
}
