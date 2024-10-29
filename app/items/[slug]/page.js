// app/items/[slug]/page.js
import items from '../../data/items.json';
import Link from 'next/link';

export default async function ItemDetail({ params }) {
    const { slug } = await params;
    const item = items.find(item => item.slug === slug);

    if (!item) {
        return <div className="text-red-500">Item not found</div>; // Handle item not found case
    }

    return (
        <div className="container mx-auto p-6 shadow-md rounded-lg">
            <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-2xl font-bold text-gray-900 mb-4">${item.price.toFixed(2)}</p>
            <Link href="/" className="inline-block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded transition duration-200">
                Back to Item List
            </Link>
        </div>
    );
}
