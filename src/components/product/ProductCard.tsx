import React, { useState } from 'react';
import { Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger } from '../ui/dialogOpacity'
import { Button } from '../ui/button'
import { products } from '@/data/mock';
import { DialogClose } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
const ProductCard = () => {
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  const product = products[0];
  
  const triggerText = "Choose Product";

  const handleToppingChange = (topping: string) => {
    setSelectedToppings((prev) =>
      prev.includes(topping) ? prev.filter((t) => t !== topping) : [...prev, topping]
    );
  };

  const handleAddToCart = (action: 'add' | 'sub') => {
    setCartQuantity(action === 'sub'?  cartQuantity - 1 : cartQuantity + 1 )
    console.log(cartQuantity);
    const totalPrice = product.price + selectedToppings.reduce((total, topping) => {
      const toppingItem = product.toppings.find((t: any) => t.name === topping);
      return total + (toppingItem ? toppingItem.price : 0);
    }, 0);
  };

  return (
    <>

      <DialogContent className="sm:max-w-[425px] bg-black text-white z-[150] max-w-[90%] w-[500px] p-0 border border-gray-800">
        <DialogHeader className="space-y-4">
          <div className="relative w-full h-48 sm:h-64">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-4">
            <DialogTitle className="text-xl font-bold">{product.name}</DialogTitle>
            <DialogDescription className="text-sm text-gray-400">{product.description}</DialogDescription>
          </div>
        </DialogHeader>

        <div className="p-4 space-y-4">
          <h4 className="font-medium text-lg">Topping</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.toppings.map((topping: any) => (
              <label key={topping.name} className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={selectedToppings.includes(topping.name)}
                  onChange={() => handleToppingChange(topping.name)}
                  className="w-4 h-4"
                />
                <span>{topping.name} (+{topping.price} VND)</span>
              </label>
            ))}
          </div>
        </div>

        <DialogFooter className="flex flex-col gap-4 p-4 border-t border-gray-800">
          <div className="flex justify-center items-center">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white w-8 h-8" 
              disabled={cartQuantity === 0} 
              onClick={() => handleAddToCart('sub')}
            >
              -
            </Button>
            <span className="text-white mx-4 w-8 text-center">{cartQuantity}</span>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white w-8 h-8" 
              onClick={() => handleAddToCart('add')}
            >
              +
            </Button>
          </div>
          <Button className='w-full py-2 transition-all duration-300 hover:bg-white hover:text-black'>
            {cartQuantity > 0 ? 'Đặt hàng' : 'Quay lại'}
          </Button>
        </DialogFooter>
      </DialogContent>
      </>
  );
};

export default ProductCard;