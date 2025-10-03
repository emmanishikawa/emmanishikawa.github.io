interface ListBlockProps {
  items: string[];
}

export default function ListBlock({ items }: ListBlockProps) {
  return (
    <ul className="list-disc list-inside my-2 ml-4">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
