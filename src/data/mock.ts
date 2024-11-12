export interface Topping {
  name: string;
  price: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  toppings: Topping[];
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface OrderInfo {
  tableId: string;
  orderTime: string;
  section: string;
}

// Mock Data
export const categories: Category[] = [
    { id: 1, name: 'Ramen', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
    { id: 2, name: 'Sushi', image: 'https://media.istockphoto.com/id/1053854126/vi/anh/t%E1%BA%A5t-c%E1%BA%A3-nh%E1%BB%AFng-g%C3%AC-b%E1%BA%A1n-c%C3%B3-th%E1%BB%83-%C4%83n-sushi.jpg?s=612x612&w=0&k=20&c=l1wwloVofm1wvxNAxM-Ak2xWtKEjvAYtTcFDgGJUDWY=' },
    { id: 3, name: 'Udon', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
    { id: 4, name: 'Rice', image: 'https://japanesetaste.com/cdn/shop/articles/how-to-make-katsudon-pork-cutlet-rice-bowl-at-home-japanese-taste.jpg?v=1694486981&width=5760' },
    { id: 5, name: 'Cate 5', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
    { id: 6, name: 'Cate 6', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
    { id: 7, name: 'Cate 7', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
    { id: 8, name: 'Cate 8', image: 'https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png' },
  // Add more categories...
]

export const products: Product[] = [
  {
    id: 1,
    name: "Ramen Tonkotsu",
    price: 89000,
    description: "Mì ramen với nước dùng tonkotsu béo ngậy, hương vị đậm đà.",
    image: "https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png",
    categoryId: 1,
    toppings: [
      { name: 'Butter', price: 20000 },
      { name: 'Menma', price: 30000 },
      { name: 'Nori', price: 30000 },
    ]
  },
  {
    id: 2,
    name: "Ramen Tonkotsu",
    price: 89000,
    description: "Mì ramen với nước dùng tonkotsu béo ngậy, hương vị đậm đà.",
    image: "https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png",
    categoryId: 1,
    toppings: [
      { name: 'Butter', price: 20000 },
      { name: 'Menma', price: 30000 },
      { name: 'Nori', price: 30000 },
    ]
  },
  {
    id: 3,
    name: "Ramen Tonkotsu",
    price: 89000,
    description: "Mì ramen với nước dùng tonkotsu béo ngậy, hương vị đậm đà.",
    image: "https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png",
    categoryId: 1,
    toppings: [
      { name: 'Butter', price: 20000 },
      { name: 'Menma', price: 30000 },
      { name: 'Nori', price: 30000 },
    ]
  },
  {
    id: 4,
    name: "Ramen Tonkotsu",
    price: 89000,
    description: "Mì ramen với nước dùng tonkotsu béo ngậy, hương vị đậm đà.",
    image: "https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png",
    categoryId: 1,
    toppings: [
      { name: 'Butter', price: 20000 },
      { name: 'Menma', price: 30000 },
      { name: 'Nori', price: 30000 },
    ]
  },
  {
    id: 5,
    name: "Ramen Tonkotsu",
    price: 89000,
    description: "Mì ramen với nước dùng tonkotsu béo ngậy, hương vị đậm đà.",
    image: "https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png",
    categoryId: 1,
    toppings: [
      { name: 'Butter', price: 20000 },
      { name: 'Menma', price: 30000 },
      { name: 'Nori', price: 30000 },
    ]
  },
  // Add more products...
]

export const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Ramen Tonkotsu",
    price: 140000,
    quantity: 2,
    image: "https://dashilabvn.com/wp-content/uploads/2021/05/SIZE-HINH-WEB-17.png"
  },
  // Add more cart items...
]

export const orderInfo: OrderInfo = {
  tableId: "123",
  orderTime: "2024-06-08, 22:00PM",
  section: "123124908xxx"
}

export const banners = [
  {
    id: 1,
    title: "Special Ramen",
    image: "https://example.com/banner1.jpg"
  },
  // Add more banners...
] 