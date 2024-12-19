function Customer(name, email) {
    // Propiedades:
    // - id
    // - name
    // - email
    // - totalPurchases (inicia en 0)
    // - createdAt
}

// Métodos del prototipo:
Customer.prototype.updateEmail = function(email) {
    // Actualiza el email
};

Customer.prototype.renderUI = function() {
    // retornar un elemento HTML `li` con la información del cliente
};

Customer.prototype.matches = function(query) {
 // Busca en nombre y email
};

// En Customer
if (!name || !email || !email.includes('@')) {
    throw new Error('Datos inválidos');
}