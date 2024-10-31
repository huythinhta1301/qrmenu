'use client'

import { CartButton } from "@/components/common/CartButton"
import Link from 'next/link'

interface Category {
  id: number;
  name: string;
  image: string;
}

interface CategoryLayoutProps {
  categories: Category[];
}

export function CategoryLayout({ categories }: CategoryLayoutProps) {
  return (
    <main className="mx-auto min-h-screen pb-20 bg-black text-white max-w-md relative">
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-black z-10 border-b border-gray-800">
        <div className="px-4 py-3 flex items-center justify-between">
          <img src="https://img.freepik.com/premium-vector/ramen-logo-design-vector-japanese-food_562967-76.jpg" alt="Logo" className="h-8" />
          <div className="flex items-center gap-4">
            <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </button>
            <button className="px-4 py-1 bg-white text-black rounded-full text-sm font-medium">
              Thanh toán
            </button>
          </div>
        </div>
      </header>

      <div className="w-full px-4 pt-16">
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <Link 
              href={`/categories/${category.id}`} 
              key={category.id} 
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
          ))}
        </div>
      </div>

      <CartButton />
    </main>
  )
} 