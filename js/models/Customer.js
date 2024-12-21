function Customer(name, email) {
    // Propiedades:
    this.id = Date.now();
    this.name = name;
    this.email = email.toLowerCase();
    /* this.telefono = telefono; */
    this.totalPurchases = 0;
    this.createdAt = new Date();
}

// Métodos del prototipo:
Customer.prototype.updateEmail = function(email) {
    // Actualiza el email
    //REGEX
    if (!email || !email.includes("@")) {
        throw new Error("Email invalido");
    }
    this.email = email.toLowerCase();
};

Customer.prototype.renderUI = function() {
    // retornar un elemento HTML `li` con la información del cliente
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
                    <div class="accordion">
                        <div class="d-flex justify-content-between align-items-cente">
                            <div>
                            <h6>${this.name}</h6>
                        <div>
                            <h6>El nombre del Cliente</h6>
                            <small>email@gmail.com</small>
                        </div>
                        <div>
                            <form>
                                <input type="email" class="form-control form-controlsm" value="email@email.com"
                                <button>
                            </form>
                        </div>
                    `;
    return li;
};

Customer.prototype.matches = function(query) {
 // Busca en nombre y email
};

// En Customer
/* if (!name || !email || !email.includes('@')) {
    throw new Error('Datos inválidos');
} */