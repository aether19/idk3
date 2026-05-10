import { Link } from 'react-router';

interface SpeciesCardProps {
  name: string;
  latin?: string;
  description?: string;
  season?: string;
  image: string;
  aspect?: string;
  showDetails?: boolean;
}

export default function SpeciesCard({
  name,
  latin,
  description,
  season,
  image,
  aspect = 'aspect-[3/4]',
  showDetails = false,
}: SpeciesCardProps) {
  return (
    <Link to="/contact" className={`group relative block overflow-hidden ${aspect}`}>
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080604]/90 via-[#080604]/20 to-transparent" />
      {/* Amber hover overlay */}
      <div className="absolute inset-0 bg-amber/0 group-hover:bg-amber/[0.07] transition-colors duration-500" />
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
        {season && showDetails && (
          <span className="font-eyebrow text-amber text-[11px] block mb-2">
            {season}
          </span>
        )}
        <h3 className="font-condensed text-[28px] lg:text-[32px] text-warm-white uppercase tracking-[0.05em] leading-none">
          {name}
        </h3>
        {latin && showDetails && (
          <p className="font-display italic text-[13px] text-warm-muted mt-1">
            {latin}
          </p>
        )}
        {description && showDetails && (
          <p className="font-body text-[14px] text-warm-muted mt-2 line-clamp-2">
            {description}
          </p>
        )}
        {!showDetails && (
          <p className="font-body italic text-[14px] text-warm-muted mt-2">
            Fully guided hunt
          </p>
        )}
        <span className="font-display text-[14px] text-amber mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Inquire &rarr;
        </span>
      </div>
    </Link>
  );
}
