function Product(name, price, stock) {
    // Propiedades:
    this.id = Date.now();
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.createdAt = new Date();
}


// Métodos del prototipo:
Product.prototype.updateStock = function(quantity) {
    // Actualiza el stock y valida que no sea negativo
    const newStock = this.stock;
    if (newStock >= 0) {
        this.stock = quantity;
        return this.stock;
    }
};

Product.prototype.getFormattedPrice = function() {
    // Retorna el precio formateado como moneda (S/ 1,500.00)
    return `S/ ${this.price.toFixed(2)}`;
};

Product.prototype.getProductInfo = function() {
    // retorna: Pelota Adidas - S/ 389.00 (Stock: 14)
    return `${this.name} - ${this.getFormattedPrice()} (Stock: ${this.stock})`;
};

Product.prototype.renderUI = function() {
    // retornar un elemento HTML `li` con la información del producto
    const li = document.createElement('li');
    li.className = 'list-group d-flex justify-content-between align-items-center';
    li.innerHTML = `
                        <span>${this.getProductInfo()}</span>
                        <div class="btn-group">
                            <button class="btn btn-sm btn-success">+</button>
                            <button class="btn btn-sm btn-danger">-</button>
                        </div>
                    `;
    return li;
};

Product.prototype.matches = function(query) {
    // Busca en nombre del producto
    if (!query) return true;

    const searchTerm = query.toLowerCase().trim();
    return this.name.toLowerCase().includes(searchTerm);
};

// En Product
/* if (!name || typeof price !== 'number' || price <= 0 || stock < 0) {
    throw new Error('Datos inválidos');
} */