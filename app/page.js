"use client";

import { useEffect, useState } from 'react';
import ItemCard from './components/ItemCard';

export default function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const res = await fetch('/api/items');
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setItems(data);
        };

        fetchItems();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Item List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(item => (
                    <ItemCard key={item.slug} item={item} />
                ))}
            </div>
        </div>
    );
}
