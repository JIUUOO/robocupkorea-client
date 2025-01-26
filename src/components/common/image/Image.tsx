interface ImageProps {
  src: string;
}

export default function Image({ src }: ImageProps) {
  return <img src={src} alt={src} className="aspect-[109/48] w-full rounded" />;
}
