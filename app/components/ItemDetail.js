// app/components/ItemDetail.js
import Link from 'next/link';
import Image from 'next/image';
import styles from './ItemDetail.module.css';

export default function ItemDetail({ item }) {
    if (!item) {
        return <div className="text-red-500 text-center">Item not found</div>; // Handle item not found case
    }

    return (
    <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">{item.name}</h1>
        <div className={`${styles.container} mx-auto p-6 shadow-lg rounded-lg max-w-md bg-white`}>
            <div className="flex flex-col md:flex-row md:items-start">
                {/* Image on the left */}
                <div className={`${styles.imageWrapper} mb-4 md:mb-0 md:mr-6`}>
                    <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={500}
                        height={300}
                        className={`${styles.image} rounded-lg shadow-md`}
                        layout="responsive"
                    />
                </div>
                {/* Content on the right */}
                <div className="flex-grow">
                    <h1 className={`${styles.title} text-4xl font-bold mb-4`}>{item.title}</h1>
                    <p className="text-gray-700 mb-2">{item.description}</p>
                    <p className="text-gray-500 mb-4">{item.details}</p>
                    <p className={`${styles.price} mb-6`}>${item.price.toFixed(2)}</p>
                    <Link href="/" className="inline-block w-full md:w-auto text-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded transition duration-200">
                        Back to Item List
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
}
