import React from 'react';

// interface Category {
//   id: string;
//   name: string;
//   icon: string;
// }

// interface CategoryFilterProps {
//   categories: Category[];
//   activeCategory: string;
//   onCategoryChange: (categoryId: string) => void;
// }

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex justify-center space-x-6 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 ${
            activeCategory === category.id
              ? 'bg-green-100 text-green-700 shadow-md'
              : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-green-600'
          }`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
            activeCategory === category.id ? 'bg-green-200' : 'bg-gray-100'
          }`}>
            <span className="text-2xl">{category.icon}</span>
          </div>
          <span className="text-sm font-medium">{category.name}</span>
        </button>
      ))}
    </div>
  );
}