import React from 'react'
import Link from 'next/link'
type CategoryProps = {
    cat: {
        name: string;
        href: string;
        image: string;
        description: string;
    };
}

const CategoryCard = ({ cat }: CategoryProps) => {
    return (
        <Link key={cat.name} href={cat.href} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h4 className="text-xl font-bold text-gray-700">{cat.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
            </div>
        </Link>
    )
}

export default CategoryCard