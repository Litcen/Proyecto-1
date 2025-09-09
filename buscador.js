const productos = [
  { id: 1, nombre: "Rubor con aplicador", precio: "10Bs" },
  { id: 2, nombre: "Sombras", precio: "15Bs" },
  { id: 3, nombre: "Deliniadores", precio: "10Bs" },
  { id: 4, nombre: "Vaselina De Arroz", precio: "7Bs" },
  { id: 5, nombre: "Mascarrillas", precio: "5Bs" },
  { id: 6, nombre: "Tinta Mariposa", precio: "10Bs" },
  { id: 7, nombre: "Esponjas", precio: "5Bs" },
  { id: 8, nombre: "Perfumes", precio: "30Bs" }
];

// Función para mostrar las sugerencias mientras el usuario escribe
function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const suggestionsBox = document.getElementById('suggestions');
  const productList = document.getElementById('productList');

  // Limpiar las sugerencias previas
  suggestionsBox.innerHTML = '';
  
  if (query.length > 0) {
    // Filtrar productos según la búsqueda
    const filteredProducts = productos.filter(product =>
      product.nombre.toLowerCase().includes(query)
    );

    // Mostrar las sugerencias de productos
    filteredProducts.forEach(product => {
      const suggestionItem = document.createElement('div');
      suggestionItem.classList.add('suggestion-item');
      suggestionItem.textContent = product.nombre;
      suggestionItem.onclick = () => displayFilteredProducts([product]);  
      suggestionsBox.appendChild(suggestionItem);
    });

    // Mostrar las sugerencias si hay coincidencias
    suggestionsBox.style.display = filteredProducts.length > 0 ? 'block' : 'none';

    // Mostrar los productos filtrados en la parte inferior
    displayFilteredProducts(filteredProducts);
  } else {
    suggestionsBox.style.display = 'none'; // Si no hay búsqueda, ocultar las sugerencias
    productList.innerHTML = ''; // Limpiar lista de productos
  }
}

// Función para mostrar los productos filtrados
function displayFilteredProducts(filteredProducts) {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';  // Limpiar la lista de productos anteriores

  if (filteredProducts.length === 0) {
    productList.innerHTML = '<p>No se encontraron productos.</p>';
  } else {
    filteredProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-item');
      productDiv.innerHTML = `
        <h2>${product.nombre}</h2>
        <p><strong>Precio:</strong> ${product.precio}</p>
      `;
      productList.appendChild(productDiv);
    });
  }
}