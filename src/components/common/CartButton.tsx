'use client'

import { useRouter } from 'next/navigation'

interface CartButtonProps {
  quantity: number;
  isPulsing: boolean;
}

export default function CartButton({ quantity, isPulsing }: CartButtonProps) {
  const router = useRouter()

  return (
    <button 
      onClick={() => router.push('/cart')}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-amber-600 text-white rounded-full shadow-lg flex items-center gap-3 hover:bg-amber-700 active:bg-amber-800 transition-colors"
    >
      <div className="flex items-center gap-2">
        <span className="font-medium">Xem giỏ hàng</span>
        <span 
          className={`
            bg-white text-amber-600 w-6 h-6 rounded-full 
            flex items-center justify-center text-sm font-medium
            transition-transform duration-300
            ${isPulsing ? 'scale-125' : 'scale-100'}
          `}
        >
          {quantity}
        </span>
      </div>
    </button>
  )
} 