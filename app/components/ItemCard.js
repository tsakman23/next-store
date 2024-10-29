"use client";

import styles from './ItemCard.module.css';
import Link from 'next/link';

const ItemCard = ({ item }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.price}>${item.price.toFixed(2)}</p>
            <Link href={`/items/${item.slug}`} className="text-blue-600 hover:underline">
                View Details
            </Link>
        </div>
    );
};

export default ItemCard;
