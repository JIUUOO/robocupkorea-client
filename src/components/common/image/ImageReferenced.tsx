interface ImageReferencedProps {
  src: string;
  origin: string;
}

export default function ImageReferenced({ src, origin }: ImageReferencedProps) {
  const handleClick = () => {
    alert(origin);
  };

  return <img src={src} alt={src} className="aspect-[109/48] w-full rounded" onClick={handleClick} />;
}
