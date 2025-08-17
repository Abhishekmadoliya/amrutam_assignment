import React from 'react';
import { Plus, Star } from 'lucide-react';

// interface Product {
//   id: string;
//   name: string;
//   image: string;
//   rating: number;
//   reviews: number;
//   originalPrice?: number;
//   salePrice: number;
//   isOnSale?: boolean;
// }

// interface ProductCardProps {
//   product: Product;
// }

export default function ProductCard({ product }) {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group ]">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isOnSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            Sale
          </div>
        )}
      </div>
      
    </div>
      <div className="flex flex-col h-full items-center p-5 text-sm text-black ">
        <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 leading-tight text-center">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            
            <span className="">
              ₹{product.salePrice}
            </span>
            <span>.200ml</span>
          </div>
          
        </div>


        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>


          <button className="bg-green-600 hover:bg-green-700 text-white  rounded-md text-sm font-medium transition-colors relative left-18">
            <Plus />
          </button>
        </div>
        
      </div>
    </div>
  );
}