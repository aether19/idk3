import { Link } from 'react-router';

interface PhotoStripProps {
  images: { src: string; alt?: string }[];
  height?: string;
  linkTo?: string;
}

export default function PhotoStrip({ images, height = 'h-[400px]', linkTo }: PhotoStripProps) {
  const content = (
    <div className={`w-full ${height} hidden md:grid grid-cols-${Math.min(images.length, 5)}`}>
      {images.map((img, i) => (
        <div key={i} className="overflow-hidden">
          <img
            src={img.src}
            alt={img.alt || ''}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );

  const mobileContent = (
    <div className={`md:hidden w-full ${height} overflow-x-auto flex snap-x snap-mandatory scroll-smooth`}>
      {images.map((img, i) => (
        <div key={i} className="flex-shrink-0 w-[80vw] snap-start">
          <img
            src={img.src}
            alt={img.alt || ''}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="block">
        {content}
        {mobileContent}
      </Link>
    );
  }

  return (
    <>
      {content}
      {mobileContent}
    </>
  );
}
