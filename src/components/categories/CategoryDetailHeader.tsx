import Link from 'next/link'
import { Header } from '../common/Header';

interface CategoryDetailHeaderProps {
  categoryName: string;
}

export function CategoryDetailHeader({ categoryName }: CategoryDetailHeaderProps) {
  return (
    <>
      <Header />
      
      <div className="fixed top-14 left-1/2 -translate-x-1/2 w-full max-w-md bg-black z-10 border-b border-gray-800">
        <div className="px-4 py-3 flex items-center">
          <Link href="/categories" className="mr-3">
            <div className="w-6 h-6">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>    
            </div>
          </Link>
          <h1 className="text-lg font-medium">{categoryName}</h1>
        </div>
      </div>
    </>
  )
} 