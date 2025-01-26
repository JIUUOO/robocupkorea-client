interface ImageReferencedProps {
  src: string;
  origin: string;
}

export default function ImageReferenced({ src, origin }: ImageReferencedProps) {
  const handleClick = () => {
    alert(origin);
  };

  return <img src={src} alt={src} className="rounded" onClick={handleClick} />;
}
