// app/components/ItemList.js
import ItemCard from './ItemCard';

export default function ItemList({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(item => (
        <ItemCard key={item.slug} item={item} />
      ))}
    </div>
  );
}
