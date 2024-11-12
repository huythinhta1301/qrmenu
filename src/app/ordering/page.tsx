import { Header } from '@/components/common/Header';
import { Button } from "@/components/ui/button";
import React from 'react';

export default function OrderPage() {
  const sections = [
    { id: '1231240908xx1', status: 'Cooking', products: 2, time: '5 minutes' },
    { id: '1231240908xx2', status: 'Cooking', products: 2, time: '8 minutes' },
  ];

  return (
    <>
    <Header />
    <div className="pt-6 min-h-screen bg-black overflow-hidden">
      

      <div className="max-w-md mx-auto p-4">
        {/* Image Placeholder */}
        <div className="aspect-square w-full bg-gray-100 rounded-2xl mb-6">
          <div className="w-full h-full flex items-center justify-center">
          <img src='https://lottie.host/9a02035e-b884-47f2-a5b4-fb7ac6fbeb78/dIKWmCho5U.json' className='object-fill'/>
          </div>
        </div>
        
          {/* Order Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold">Preparing your order</h1>
            <span className="text-gray-500 text-sm">Table ID: 123</span>
          </div>

          {/* Order Sections */}
          {sections.map((section) => (
            <div key={section.id} className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm">• Section No.: {section.id}</span>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="h-7 rounded-full bg-gray-200 hover:bg-gray-300 text-xs px-4"
                >
                  View detail
                </Button>
              </div>

              {/* Progress Steps */}
              <div className="relative mb-3">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">Cooking</span>
                  <span className="text-sm text-gray-500">Delivered</span>
                  <span className="text-sm text-gray-500">Completed</span>
                </div>
                
                <div className="relative">
                  <div className="absolute top-1/2 w-full h-[1px] bg-gray-200" />
                  <div className="relative flex justify-between">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500">
                Remain {section.products} products will be delivered to you in {section.time}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="sticky bottom-0 bg-white p-4 border-t max-w-md mx-auto w-full space-y-3">
        <Button 
          variant="secondary" 
          className="w-full h-11 rounded-xl bg-gray-100 hover:bg-gray-200"
        >
          CALL TO SUPPORT
        </Button>
        <Button 
          className="w-full h-11 rounded-xl bg-gray-800 hover:bg-gray-900"
        >
          PAYMENT REQUEST
        </Button>
      </div>
    </>
  );
}

