interface ImageProps {
  src: string;
}

export default function Image({ src }: ImageProps) {
  return <img src={src} alt={src} className="rounded" />;
}
