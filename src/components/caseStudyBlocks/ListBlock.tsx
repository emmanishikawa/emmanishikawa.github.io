interface ListBlockProps {
  items: string[];
}

export default function ListBlock({ items }: ListBlockProps) {
  return (
    <ul className="list-['\-'] list-inside my-2 ml-4 text-mygray-500">
      {items.map((item, i) => (
        <li key={i}> {item}</li>
      ))}
    </ul>
  );
}
