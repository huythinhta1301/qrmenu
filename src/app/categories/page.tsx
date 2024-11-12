'use client'
import { CategoryCard } from "@/components/categories/CategoryCard"
import CartButton from "@/components/common/CartButton";
import { FloatingCartButton } from "@/components/common/FloatingCartButton"
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Header } from "@/components/common/Header"
import { Category, categories as initCategories } from "@/data/mock"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

  
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
  const [items, setItems] = useState<Category[]>(initCategories)

  const [cartQuantity, setCartQuantity] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cartQuantity')
      return saved ? parseInt(saved) : 0
    }
    return 0
  })

  return (
    <div>
      <Header />
      <div className="w-full">
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
            {items.map((category) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
              />
            ))}
          </div>
        </div>
      </div>

      <CartButton quantity={cartQuantity} isPulsing={false} />
      </div>
  )
} 