interface SubheaderProps {
  text: string;
}

export default function ParagraphBlock({ text }: SubheaderProps) {
  return <h2 className="my-2 text-[20px] font-bold text-white">{text}</h2>;
}
