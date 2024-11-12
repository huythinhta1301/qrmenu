'use client'

import { Header } from "@/components/common/Header"
import { useState } from "react"
import { CartItem, cartItems as initialCartItems, orderInfo } from "@/data/mock"
import { useRouter } from "next/navigation"
export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialCartItems)
  const router = useRouter()
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function handleClearCart() {
    localStorage.removeItem('cartQuantity')
  }

  return (
    <main className="mx-auto min-h-screen pb-20 bg-black text-white max-w-md relative">
      <Header />
      
      <div className="pt-5 pb-[200px]">
        {/* Order Info */}
        <div className="px-4 py-3 text-sm text-gray-400 border-b border-gray-800">
          <div>Table ID: {orderInfo.tableId}</div>
          <div>Order time: {orderInfo.orderTime}</div>
          <div>Section: {orderInfo.section}</div>
        </div>

        {/* Cart Items */}
        <div className="divide-y divide-gray-800">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3 p-4">
              <input type="checkbox" className="w-4 h-4" />
              <div className="w-16 h-16 bg-gray-800">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm">{item.name}</h3>
                <p className="text-sm">{item.price.toLocaleString()}đ</p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="w-6 h-6 bg-gray-800 rounded-full">-</button>
                  <span>{item.quantity}</span>
                  <button className="w-6 h-6 bg-gray-800 rounded-full">+</button>
                  <button className="ml-auto">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modified Total and Actions section */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto px-4 py-3 space-y-3 bg-black border-t border-gray-800">
        <div className="flex justify-between items-center py-2">
          <span>Temporary total amount:</span>
          <span className="font-medium">{total.toLocaleString()}đ</span>
        </div>

        <button className="w-full py-3 bg-white text-black rounded-lg font-medium"  onClick={() => router.push('/ordering')}>
          ORDER
        </button>
        <button className="w-full py-3 bg-gray-800 rounded-lg" onClick={handleClearCart}>
          CLEAR ALL CART
        </button>
        <button className="w-full py-3 bg-gray-800 rounded-lg">
          CALL TO SUPPORT
        </button>
      </div>
    </main>
  )
} 