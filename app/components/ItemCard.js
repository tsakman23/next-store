"use client";

import styles from './ItemCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ItemCard({ item }) {
    return (
        <Link href={`/items/${item.slug}`}>
            <div className={`${styles.card} p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <Image src={item.imageUrl} alt={item.name} width={500} height={300} className="w-full h-48 object-cover rounded-md mb-4" />
                <h2 className="text-xl font-semibold text-pink-600">{item.name}</h2>
                <p className="text-pink-400 italic">{item.flavor}</p>
                <p className="text-gray-700 my-2">{item.description}</p>
                <div className="mt-auto mb-4">
                    <p className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</p>
                </div>
            </div>
        </Link>
    );
}
