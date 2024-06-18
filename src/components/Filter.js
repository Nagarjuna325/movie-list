import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const categories = ['Any', 'Action', 'Comedy', 'Thriller', 'Drama'];
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="filter">
      <div className="filter-group">
        <label>Rating:</label>
        <select value={filter.rating} onChange={(e) => setFilter({ ...filter, rating: e.target.value })}>
          <option value="Any">Any rating</option>
          {ratings.map((rating) => (
            <option key={rating} value={rating}>
              {rating} stars
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label>Genre:</label>
        <select value={filter.category} onChange={(e) => setFilter({ ...filter, category: e.target.value })}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
