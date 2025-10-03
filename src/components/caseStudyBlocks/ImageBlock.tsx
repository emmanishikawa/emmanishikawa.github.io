interface ImageBlockProps {
  src: string;
  alt: string;
}

export default function ImageBlock({ src, alt }: ImageBlockProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="my-4 rounded-xl border border-blue-border"
    />
  );
}
