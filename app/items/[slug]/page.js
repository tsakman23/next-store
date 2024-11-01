// app/items/[slug]/page.js
import items from '../../data/items.json';
import ItemDetail from '../../components/ItemDetail';

export default async function ItemDetailPage({ params }) {
    const { slug } = await params;
    const item = items.find(item => item.slug === slug);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <ItemDetail item={item} />
        </div>
    );
}
