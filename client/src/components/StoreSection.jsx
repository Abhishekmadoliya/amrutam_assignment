import React, { useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Grid2x2,
  Scissors,
  Sparkles,
  Leaf,
  Bone,
  Shield,
} from "lucide-react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

const categories = [
  { id: "all", name: "All", icon: <Grid2x2 /> },
  { id: "hair", name: "Hair", icon: <Scissors /> },
  { id: "skin", name: "Skin", icon: <Sparkles /> },
  { id: "digestion", name: "Digestion", icon: <Leaf /> },
  { id: "bones", name: "Bones", icon: <Bone /> },
  { id: "immunity", name: "Immunity", icon: <Shield /> },
  { id: "more", name: "More", icon: "➕" },
];

const products = [
  {
    id: "1",
    name: "Amrutam Kuntal Care Hair Spa | Do-it-yourself Hair Treatment",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    reviews: 203,
    originalPrice: 599,
    salePrice: 499,
    isOnSale: true,
    category: "hair",
  },
  {
    id: "2",
    name: "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
    image:
      "https://images.pexels.com/photos/7262800/pexels-photo-7262800.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.3,
    reviews: 156,
    originalPrice: 399,
    salePrice: 299,
    isOnSale: true,
    category: "hair",
  },
  {
    id: "3",
    name: "Amrutam Nail Shodhan Malt | Complete Care For Women's Health And Beauty",
    image:
      "https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 89,
    originalPrice: 799,
    salePrice: 649,
    isOnSale: true,
    category: "skin",
  },
  {
    id: "4",
    name: "Amrutam Digestive Care Tablets | Natural Digestion Support",
    image:
      "https://images.pexels.com/photos/3873146/pexels-photo-3873146.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.4,
    reviews: 124,
    salePrice: 399,
    category: "digestion",
  },
  {
    id: "5",
    name: "Amrutam Bone Strength Formula | Joint and Bone Health",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    reviews: 78,
    originalPrice: 899,
    salePrice: 699,
    isOnSale: true,
    category: "bones",
  },
  {
    id: "6",
    name: "Amrutam Immunity Booster | Natural Defense System",
    image:
      "https://images.pexels.com/photos/7262800/pexels-photo-7262800.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 234,
    salePrice: 549,
    category: "immunity",
  },
];

export default function StoreSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen">
      {/* Store Header */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Collection Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Summer Collection
            </h3>
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
              Load More Products
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or category filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
