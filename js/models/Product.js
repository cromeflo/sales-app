function Product(name, price, stock) {
    // Propiedades:
    // - id (generar con Date.now())
    // - name
    // - price
    // - stock
    // - createdAt (new Date())
}

// Métodos del prototipo:
Product.prototype.updateStock = function(quantity) {
    // Actualiza el stock y valida que no sea negativo
};

Product.prototype.getFormattedPrice = function() {
    // Retorna el precio formateado como moneda (S/ 1,500.00)
};

Product.prototype.getProductInfo = function() {
    // retorna: Pelota Adidas - S/ 389.00 (Stock: 14)
};

Product.prototype.renderUI = function() {
    // retornar un elemento HTML `li` con la información del producto
};

Product.prototype.matches = function(query) {
 // Busca en nombre del producto
};

// En Product
if (!name || typeof price !== 'number' || price <= 0 || stock < 0) {
    throw new Error('Datos inválidos');
}
