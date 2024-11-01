// app/components/ItemDetail.js
import Link from 'next/link';
import styles from './ItemDetail.module.css';

export default function ItemDetail({ item }) {
    if (!item) {
        return <div className="text-red-500 text-center">Item not found</div>; // Handle item not found case
    }

    return (
        <div className="container mx-auto p-6 shadow-lg rounded-lg max-w-lg bg-white">
            <h1 className="text-4xl font-bold mb-4 text-center">{item.title}</h1>
            <p className="text-gray-700 mb-4 text-center">{item.description}</p>
            <p className="text-gray-500 mb-4">{item.details}</p>
            <p className="text-2xl font-bold text-gray-900 mb-6 text-center">${item.price.toFixed(2)}</p>
            <Link href="/" className="inline-block w-full text-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded transition duration-200">
                Back to Item List
            </Link>
        </div>
    );
}
