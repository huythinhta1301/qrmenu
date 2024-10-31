'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import CartButton from '@/components/common/CartButton'

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
    {
      id: 1,
      name: "Ramen Tonkotsu",
      price: 89000,
      description: "Mì ramen với nước dùng tonkotsu béo ngậy, hương vị đậm đà.",
      image: "https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png"
    },
    {
      id: 2,
      name: "Sushi Cá Ngừ",
      price: 120000,
      description: "Sushi với cá ngừ tươi ngon, được cuốn từ gạo Nhật Bản.",
      image: "https://www.vinmec.com/static/uploads/20210317_143609_055773_sushi_max_1800x1800_jpg_3690d18076.jpg"
    },
    {
      id: 3,
      name: "Curry Nhật Bản",
      price: 75000,
      description: "Cà ri Nhật Bản thơm ngon, được chế biến từ các nguyên liệu tươi sống.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa90yheVkZJMWzui_p1gomv_nZ2VSgiy5Z1Q&s"
    },
    {
      id: 4,
      name: "Udon Noodle",
      price: 80000,
      description: "Mì udon dày, mềm, phục vụ với nước dùng xương ngon.",
      image: "https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png"
    },
    {
      id: 5,
      name: "Tempura Tôm",
      price: 95000,
      description: "Tôm tẩm bột chiên giòn, đi kèm với nước sốt đậm đà.",
      image: "https://www.vinmec.com/static/uploads/20210317_143609_055773_sushi_max_1800x1800_jpg_3690d18076.jpg"
    },
    {
      id: 6,
      name: "Takoyaki",
      price: 60000,
      description: "Bánh takoyaki nhân bạch tuộc, phủ sốt mayonnaise và rong biển.",
      image: "https://www.vinmec.com/static/uploads/20210317_143609_055773_sushi_max_1800x1800_jpg_3690d18076.jpg"
    },
    {
      id: 7,
      name: "Miso Ramen",
      price: 85000,
      description: "Mì ramen với nước dùng miso, hương vị đậm đà và ngọt ngào.",
      image: "https://www.vinmec.com/static/uploads/20210317_143609_055773_sushi_max_1800x1800_jpg_3690d18076.jpg"
    },
    {
      id: 8,
      name: "Onigiri",
      price: 40000,
      description: "Cơm nắm truyền thống, nhân cá hoặc umeboshi.",
      image: "https://www.vinmec.com/static/uploads/20210317_143609_055773_sushi_max_1800x1800_jpg_3690d18076.jpg"
    },
    {
      id: 9,
      name: "Chashu Ramen",
      price: 95000,
      description: "Mì ramen với thịt heo chashu mềm, nước dùng ngon tuyệt.",
      image: "https://www.vinmec.com/static/uploads/20210317_143609_055773_sushi_max_1800x1800_jpg_3690d18076.jpg"
    },
    {
      id: 10,
      name: "Sashimi Cá Hồi",
      price: 150000,
      description: "Cá hồi tươi sống, cắt lát mỏng, phục vụ với nước tương.",
      image: "https://www.vinmec.com/static/uploads/20210317_143609_055773_sushi_max_1800x1800_jpg_3690d18076.jpg"
    }
  ];
  


export default function CategoryDetail() {
  const params = useParams()
  const searchParams = useSearchParams()
  const categoryName = searchParams.get('name') || 'Danh mục'
  
  const [cartQuantity, setCartQuantity] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cartQuantity')
      return saved ? parseInt(saved) : 0
    }
    return 0
  })

  const [isCartPulsing, setIsCartPulsing] = useState(false)
  const [animatingButtonId, setAnimatingButtonId] = useState<number | null>(null)

  const handleAddToCart = (productId: number) => {
    // Animate nút "Thêm"
    setAnimatingButtonId(productId)
    
    // Animate số lượng trong giỏ hàng
    setIsCartPulsing(true)
    
    // Tăng số lượng và lưu vào localStorage
    setCartQuantity(prev => {
      const newQuantity = prev + 1
      localStorage.setItem('cartQuantity', newQuantity.toString())
      return newQuantity
    })

    // Reset animations
    setTimeout(() => {
      setAnimatingButtonId(null)
      setIsCartPulsing(false)
    }, 300)
  }

  return (
    <main className="mx-auto min-h-screen pb-20 bg-black text-white max-w-md relative">
      {/* Header */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-black z-10 border-b border-gray-800">
        <div className="px-4 py-3 flex items-center">
          <Link href="/categories" className="mr-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">{categoryName}</h1>
        </div>
      </header>

      {/* Product List */}
      <div className="w-full pt-16 px-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-4 py-4 border-b border-gray-800">
            <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">{product.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-medium">{product.price.toLocaleString()}đ</span>
                <button 
                  onClick={() => handleAddToCart(product.id)}
                  className={`
                    px-3 py-1 bg-amber-600 rounded-full text-sm 
                    hover:bg-amber-700 active:bg-amber-800 
                    transition-all duration-300
                    ${animatingButtonId === product.id ? 'scale-90 bg-green-600' : 'scale-100'}
                  `}
                >
                  Thêm
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CartButton quantity={cartQuantity} isPulsing={isCartPulsing} />
    </main>
  )
} 