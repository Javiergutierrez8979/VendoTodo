import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CategoryFilter = ({ onFilterChange }) => {
  const { productos } = useContext(CartContext);
  const [selectedPriceRange, setSelectedPriceRange] = React.useState('');

  // Obtener todos los rangos de precios disponibles de los productos
  const priceRanges = [
    'Menos de $10000',
    '$10000.00 - $50000.00',
    '$50000 - $100000',
    'Más de $100000'
  ];

  const handlePriceChange = (event) => {
    const priceRange = event.target.value;
    setSelectedPriceRange(priceRange);
    onFilterChange(priceRange); // Llama a la función de actualización pasada como prop
  };

  return (
    <div className="category-filter">
      <select value={selectedPriceRange} onChange={handlePriceChange}>
        <option value=''>Todos los precios</option>
        {priceRanges.map((range, index) => (
          <option key={index} value={range}>{range}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
