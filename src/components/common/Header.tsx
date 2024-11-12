'use client'

import { usePathname, useRouter } from 'next/navigation'

interface HeaderProps {
  categoryName?: string;
}

export function Header({ categoryName }: HeaderProps) {
  const pathname = usePathname()
  const router = useRouter()
  const isCartPage = pathname === '/cart'
  const isCategoryPage = /^\/categories\/?$/.test(pathname)

  return (
    <>
      <header className="fixed top-0 w-full max-w-md bg-black z-[49] left-1/2 -translate-x-1/2 overflow-x-hidden">
        <div className="mx-auto max-w-md">
          {/* Top row with logo and actions */}
          <div className="px-4 py-2 flex items-center justify-between border-b border-gray-800">
            <img src="https://img.freepik.com/premium-vector/ramen-logo-design-vector-japanese-food_562967-76.jpg" alt="Logo" className="h-8" />
            <div className="flex items-center gap-4">
            <button id="search-button" className="p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              {!isCartPage && (
                <button id="search-button" className="p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              )}
              <button className="px-4 py-1 bg-white text-black rounded-full text-sm font-medium">
                Trợ giúp
              </button>
              
            </div>
          </div>

          {/* Section cua nut BACL lai trang truoc */}
          {(!isCategoryPage) && (
            <div className="px-4 py-2 flex items-center border-b border-gray-800">
              <button onClick={() => router.back()} className="mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-lg font-medium">
                {isCartPage ? 'Giỏ hàng' : categoryName}
              </h1>
            </div>
          )}
        </div>
      </header>
      {/* Add a spacer div to push content down */}
      <div className={`w-full ${!isCategoryPage ? 'h-[84px]' : 'h-[48px]'}`} />
    </>
  )
} 