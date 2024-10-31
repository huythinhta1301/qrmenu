'use client'
import { CategoryCard } from "@/components/categories/CategoryCard"
import CartButton from "@/components/common/CartButton";
import { FloatingCartButton } from "@/components/common/FloatingCartButton"
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export interface Category {
    id: number;
    name: string;
    image: string;
  }
  
  

const categories: Category[] = [
  { id: 1, name: 'Ramen', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
  { id: 2, name: 'Sushi', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
  { id: 3, name: 'Udon', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
  { id: 4, name: 'Rice', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
  { id: 5, name: 'Cate 5', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
  { id: 6, name: 'Cate 6', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
  { id: 7, name: 'Cate 7', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
  { id: 8, name: 'Cate 8', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
]

// Banner data
const banners = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMuuB9Lxqh7p2W5n8nubx1amjQ5KiqjdYA8U5QJ5LMRKBZzw84dpQxDvoRH4cPzXnNuo&usqp=CAU',
    title: 'Banner 1'
  },
  {
    id: 2,
    image: 'https://www.almex-sta.com/files/topics/236_ext_12_0.jpg',
    title: 'Banner 2'
  },
  {
    id: 3,
    image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png',
    title: 'Banner 3'
  }
]

export default function CategoriesPage() {
  const [cartQuantity, setCartQuantity] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cartQuantity')
      return saved ? parseInt(saved) : 0
    }
    return 0
  })

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

      <div className="w-full pt-16">
        {/* Banner Section */}
        <div className="mb-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="aspect-[16/9] w-full"
          >
            {banners.map((banner) => (
              <SwiperSlide key={banner.id}>
                <div className="relative w-full h-full">
                  <img 
                    src={banner.image} 
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-medium">{banner.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Categories Grid */}
        <div className="px-4">
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
              />
            ))}
          </div>
        </div>
      </div>

      <CartButton quantity={cartQuantity} isPulsing={false} />
    </main>
  )
} 