import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import Item from '../componentes/Item';
import CategoryFilter from '../componentes/CategoryFilter'; // Mantén el mismo nombre

const ItemListContainer = () => {
  const { productos } = useContext(CartContext);
  const [filteredProductos, setFilteredProductos] = useState(productos);
  const [priceRange, setPriceRange] = useState('');

  useEffect(() => {
    // Filtrar productos según el rango de precios
    const filterProductsByPrice = (range) => {
      if (!range) {
        setFilteredProductos(productos);
        return;
      }

      let minPrice, maxPrice;

      switch (range) {
        case 'Menos de $10000':
          maxPrice = 10000;
          break;
        case '$10000.00 - $50000.00':
          minPrice = 10000;
          maxPrice = 50000;
          break;
        case '$50000 - $100000':
          minPrice = 50000;
          maxPrice = 100000;
          break;
        case 'Más de $100000':
          minPrice = 100000;
          break;
        default:
          setFilteredProductos(productos);
          return;
      }

      const filtered = productos.filter(product => {
        if (minPrice && maxPrice) {
          return product.precio >= minPrice && product.precio <= maxPrice;
        } else if (minPrice) {
          return product.precio >= minPrice;
        } else if (maxPrice) {
          return product.precio <= maxPrice;
        }
        return true;
      });

      setFilteredProductos(filtered);
    };

    filterProductsByPrice(priceRange);
  }, [productos, priceRange]);

  const handleFilterChange = (selectedRange) => {
    setPriceRange(selectedRange); // Actualiza el estado del rango de precios
  };

  return (
    <div className="item-list-container">
      <CategoryFilter onFilterChange={handleFilterChange} />
      <div className="item-list">
        {filteredProductos.length > 0 ? (
          filteredProductos.map((producto) => (
            <Item key={producto.id} item={producto} />
          ))
        ) : (
          <p>No hay productos disponibles para el rango de precios seleccionado.</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
