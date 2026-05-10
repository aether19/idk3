interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  hunt?: string;
}

export default function TestimonialCard({ quote, name, location, hunt }: TestimonialCardProps) {
  return (
    <div className="border-l-[3px] border-amber pl-6">
      <p className="font-body italic text-[18px] text-warm-white leading-[1.75]">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="font-small-caps text-warm-muted mt-4 tracking-[0.1em]">
        &mdash; {name}, {location}{hunt ? ` — ${hunt}` : ''}
      </p>
    </div>
  );
}
