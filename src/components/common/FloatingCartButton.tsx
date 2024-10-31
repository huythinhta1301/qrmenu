'use client'

interface FloatingCartButtonProps {
  quantity: number;
  onClick?: () => void;
}

export function FloatingCartButton({ quantity, onClick }: FloatingCartButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-amber-600 text-white rounded-full shadow-lg flex items-center gap-3"
    >
      <div className="flex items-center gap-2">
        <span className="font-medium">Xem giỏ hàng</span>
        <span className="bg-white text-amber-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">
          {quantity}
        </span>
      </div>
    </button>
  )
} 