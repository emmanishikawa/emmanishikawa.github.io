interface SubheaderProps {
  text: string;
}

export default function ParagraphBlock({ text }: SubheaderProps) {
  return <p className="my-2 text-[20px] font-bold text-white">{text}</p>;
}
