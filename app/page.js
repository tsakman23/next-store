"use client";

import { useEffect, useState } from 'react';
import ItemCard from './components/ItemCard';
import './globals.css';

export default function Home() {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

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

    // Filter items based on search query
    const filteredItems = items.filter(item => {
        if (!searchQuery) {
            return true; // Return all items if searchQuery is empty
        }
        const query = searchQuery.toLowerCase();
        return item.title?.toLowerCase().includes(query) ||
               item.description?.toLowerCase().includes(query);
    });

    return (
      <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-center title mb-4 md:mb-0">Mama&apos;s Ice Cream Shop</h1>
              <div className="md:ml-4 mb-4 md:mb-0 w-full md:w-auto">
                  <input
                      type="text"
                      placeholder="Search for ice cream..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-black p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200"
                  />
              </div>
          </div>
          {/* Underline */}
          <hr className="my-4 border-t-7 border-white" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.length > 0 ? (
                  filteredItems.map(item => (
                      <ItemCard key={item.slug} item={item} />
                  ))
              ) : (
                  <p className="text-gray-500 text-center col-span-full">No items found</p>
              )}
          </div>
      </div>
  );
}
