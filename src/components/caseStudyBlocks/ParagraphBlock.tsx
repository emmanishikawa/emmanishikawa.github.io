interface ParagraphBlockProps {
  text: string;
}

export default function ParagraphBlock({ text }: ParagraphBlockProps) {
  return <p className="my-2 text-mygray-500">{text}</p>;
}
