import ParagraphBlock from "./ParagraphBlock";
import ImageBlock from "./ImageBlock";
import ListBlock from "./ListBlock";
import SubheaderBlock from "./SubheaderBlock";

interface Block {
  type: string;
  text?: string;
  src?: string;
  alt?: string;
  items?: string[];
  language?: string;
}

export default function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "subheader":
      return <SubheaderBlock text={block.text!} />;
    case "paragraph":
      return <ParagraphBlock text={block.text!} />;
    case "image":
      return <ImageBlock src={block.src!} alt={block.alt || ""} />;
    case "list":
      return <ListBlock items={block.items!} />;
    default:
      return null;
  }
}
