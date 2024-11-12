'use client'

import { useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { products } from '@/data/mock';
import { Dialog, DialogTrigger } from '@/components/ui/dialogOpacity';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product/ProductCard';
import CartButton from '@/components/common/CartButton';
import { Header } from '@/components/common/Header';
export default function CategoryDetail() {
  const params = useParams();
  const searchParams = useSearchParams();
  const categoryName = searchParams.get('name') || 'Danh mục';
  
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isCartPulsing, setIsCartPulsing] = useState(false);
  const [animatingButtonId, setAnimatingButtonId] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleAddToCart = (action: 'add' | 'sub') => {
    setCartQuantity(action === 'add' ? cartQuantity + 1 : cartQuantity - 1);
  };

  return (
    <div className="pb-20 text-white p-2">
      <Header categoryName={categoryName} />
      <div className="w-full">
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
              <p className="text-sm text-gray-400 mb-2 line-clamp-2 pr-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-medium">{product.price.toLocaleString()}đ</span>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      onClick={handleOpenDialog}
                      className={`px-3 py-1 bg-amber-600 rounded-full text-sm
                        hover:bg-amber-700 active:bg-amber-800
                        transition-all duration-300
                        ${animatingButtonId === product.id ? 'scale-90 bg-green-600' : 'scale-100'}`}
                    >
                      Chọn sản phẩm
                    </Button>
                  </DialogTrigger>
                  <ProductCard />
                </Dialog>
              </div>
            </div>
          </div>
        ))}
      </div>      
      <CartButton quantity={cartQuantity} isPulsing={isCartPulsing} />
    </div>
  );
}