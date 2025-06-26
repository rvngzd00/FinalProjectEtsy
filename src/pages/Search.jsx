// import React, { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import ProductCard from '../components/ProductCard';
// import '../assets/style/Search.css';

// // Import helper components and data
// import { 
//   searchResults, 
//   filterOptions,
//   FilterCheckbox,
//   Pagination,
//   SearchInput
// } from '../components/helpers';

// export default function Search() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('q') || '';
//   const [filters, setFilters] = useState({
//     category: [],
//     priceRange: [],
//     rating: [],
//     shipping: []
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortBy, setSortBy] = useState('relevance');

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [filterType]: prev[filterType].includes(value)
//         ? prev[filterType].filter(item => item !== value)
//         : [...prev[filterType], value]
//     }));
//   };

//   const clearFilters = () => {
//     setFilters({
//       category: [],
//       priceRange: [],
//       rating: [],
//       shipping: []
//     });
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     // In a real app, you would fetch new data here
//   };

//   const totalPages = 10; // Mock total pages

//   return (
//     <div className="search-page">
//       <div className="search-container">
//         <div className="search-header">
//           <h1 className="search-title">
//             Search results for "{query}"
//           </h1>
//           <p className="search-subtitle">
//             {searchResults.length} items found
//           </p>
//         </div>

//         <div className="search-content">
//           {/* Filters */}
//           <div className="search-filters">
//             <div className="filters-card">
//               <div className="filters-header">
//                 <h2 className="filters-title">Filters</h2>
//                 <button 
//                   onClick={clearFilters}
//                   className="filters-clear"
//                 >
//                   Clear all
//                 </button>
//               </div>

//               {/* Category Filter */}
//               <div className="filter-group">
//                 <label className="filter-label">Category</label>
//                 <div className="filter-options">
//                   {filterOptions.category.map(option => (
//                     <FilterCheckbox
//                       key={option.value}
//                       label={option.label}
//                       value={option.value}
//                       checked={filters.category.includes(option.value)}
//                       onChange={(value) => handleFilterChange('category', value)}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Price Range Filter */}
//               <div className="filter-group">
//                 <label className="filter-label">Price</label>
//                 <div className="filter-options">
//                   {filterOptions.priceRange.map(option => (
//                     <FilterCheckbox
//                       key={option.value}
//                       label={option.label}
//                       value={option.value}
//                       checked={filters.priceRange.includes(option.value)}
//                       onChange={(value) => handleFilterChange('priceRange', value)}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Rating Filter */}
//               <div className="filter-group">
//                 <label className="filter-label">Rating</label>
//                 <div className="filter-options">
//                   {filterOptions.rating.map(option => (
//                     <FilterCheckbox
//                       key={option.value}
//                       label={option.label}
//                       value={option.value}
//                       checked={filters.rating.includes(option.value)}
//                       onChange={(value) => handleFilterChange('rating', value)}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Shipping Filter */}
//               <div className="filter-group">
//                 <label className="filter-label">Shipping</label>
//                 <div className="filter-options">
//                   {filterOptions.shipping.map(option => (
//                     <FilterCheckbox
//                       key={option.value}
//                       label={option.label}
//                       value={option.value}
//                       checked={filters.shipping.includes(option.value)}
//                       onChange={(value) => handleFilterChange('shipping', value)}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Results */}
//           <div className="search-results">
//             <div className="results-header">
//               <div className="results-controls">
//                 <div className="results-sort">
//                   <span className="sort-label">Sort by:</span>
//                   <select
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                     className="sort-select"
//                   >
//                     <option value="relevance">Relevance</option>
//                     <option value="price-low">Price: Low to High</option>
//                     <option value="price-high">Price: High to Low</option>
//                     <option value="newest">Newest</option>
//                     <option value="rating">Highest Rated</option>
//                   </select>
//                 </div>
//                 <div className="results-count">
//                   {searchResults.length} items
//                 </div>
//               </div>
//             </div>

//             <div className="products-grid">
//               {searchResults.map(product => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>

//             {/* Pagination */}
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } 