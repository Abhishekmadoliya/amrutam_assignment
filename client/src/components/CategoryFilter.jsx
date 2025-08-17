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
    <div className="flex justify-start md:justify-center space-x-3 sm:space-x-4 md:space-x-6 mb-6 sm:mb-8 min-w-max">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex flex-col items-center p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-200 ${
            activeCategory === category.id
              ? 'bg-green-100 text-green-700 shadow-md'
              : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-green-600'
          }`}
        >
          <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-1 sm:mb-2 ${
            activeCategory === category.id ? 'bg-green-200' : 'bg-gray-100'
          }`}>
            <span className="text-lg sm:text-xl md:text-2xl">{category.icon}</span>
          </div>
          <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{category.name}</span>
        </button>
      ))}
    </div>
  );
}