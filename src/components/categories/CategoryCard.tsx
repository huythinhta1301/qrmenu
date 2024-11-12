'use client'

import Link from 'next/link'
import { Category } from '@/data/mock'

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link 
      href={`/categories/${category.id}?name=${encodeURIComponent(category.name)}`}
      className="relative aspect-square rounded-lg overflow-hidden"
    >
      <img 
        src={category.image} 
        alt={category.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-medium">{category.name}</h3>
      </div>
    </Link>
  )
} 