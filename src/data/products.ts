export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  category: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wicker Basket - Large",
    description: "Handcrafted large wicker basket perfect for fruits, vegetables, and gift hampers. Made from natural materials with sturdy handles for easy carrying.",
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    category: "Storage Baskets",
    inStock: true,
  },
  {
    id: "2",
    name: "Organic Cotton Bread Basket",
    description: "Elegant bread basket lined with organic cotton. Keeps your bread fresh and adds a rustic touch to your dining table.",
    price: 799,
    originalPrice: 999,
    discount: 20,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
    category: "Kitchen Baskets",
    inStock: true,
  },
  {
    id: "3",
    name: "Bamboo Picnic Basket Set",
    description: "Complete picnic basket set with plates, cutlery, and glasses for 4 people. Perfect for outdoor adventures and romantic getaways.",
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400",
    category: "Picnic Baskets",
    inStock: true,
  },
  {
    id: "4",
    name: "Decorative Flower Basket",
    description: "Beautiful decorative basket ideal for fresh or dried flower arrangements. Adds charm to any room in your home.",
    price: 599,
    originalPrice: 749,
    discount: 20,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400",
    category: "Decorative Baskets",
    inStock: true,
  },
  {
    id: "5",
    name: "Seagrass Storage Basket - Medium",
    description: "Natural seagrass basket with lid. Perfect for organizing your home, storing toys, or keeping laundry tidy.",
    price: 899,
    originalPrice: 1099,
    discount: 18,
    image: "https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?w=400",
    category: "Storage Baskets",
    inStock: true,
  },
  {
    id: "6",
    name: "Jute Gift Basket Hamper",
    description: "Eco-friendly jute basket perfect for creating gift hampers. Fill with treats and goodies for a thoughtful present.",
    price: 449,
    originalPrice: 549,
    discount: 18,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400",
    category: "Gift Baskets",
    inStock: true,
  },
  {
    id: "7",
    name: "Rattan Fruit Bowl Basket",
    description: "Stylish rattan fruit bowl basket. Keeps fruits fresh with natural ventilation while looking beautiful on your counter.",
    price: 699,
    originalPrice: 849,
    discount: 18,
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400",
    category: "Kitchen Baskets",
    inStock: true,
  },
  {
    id: "8",
    name: "Vintage Wine Carrier Basket",
    description: "Elegant wine carrier basket holding 2 bottles. Perfect for gifting or carrying wine to dinner parties.",
    price: 1099,
    originalPrice: 1399,
    discount: 21,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400",
    category: "Gift Baskets",
    inStock: true,
  },
  {
    id: "9",
    name: "Woven Laundry Basket - XL",
    description: "Extra large woven laundry basket with handles. Durable construction holds heavy loads while looking stylish.",
    price: 1599,
    originalPrice: 1999,
    discount: 20,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    category: "Storage Baskets",
    inStock: true,
  },
  {
    id: "10",
    name: "Mini Easter Basket Set (3 pcs)",
    description: "Set of 3 mini decorative baskets. Perfect for Easter, small plants, or desktop organization.",
    price: 549,
    originalPrice: 699,
    discount: 21,
    image: "https://images.unsplash.com/photo-1457530378978-8bac673b8062?w=400",
    category: "Decorative Baskets",
    inStock: true,
  },
];

export const categories = [
  "All",
  "Storage Baskets",
  "Kitchen Baskets",
  "Picnic Baskets",
  "Decorative Baskets",
  "Gift Baskets",
];
