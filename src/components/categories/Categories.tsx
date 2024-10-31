import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  { id: 1, name: 'Cate 1', image: '/images/category1.jpg' },
  { id: 2, name: 'Cate 2', image: '/images/category2.jpg' },
  // ... thêm các categories khác
]

export function Categories() {
  return (
    <div className="w-full px-4 py-6">
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <Card key={category.id} className="overflow-hidden">
            <CardContent className="p-0 relative h-[120px]">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">
                  {category.name}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 