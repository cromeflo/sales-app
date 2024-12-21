const $formProduct = document.getElementById("product-form");
const $formCustomer = document.getElementById("customer-form");

this.productsArray = [];
this.customersArray = [];

$formProduct.addEventListener("submit", (event) =>{
        event.preventDefault();
        const form =event.target;
        // Capturar valores del form
        const product = new Product(form.productName.value, parseFloat(form.productPrice.value), parseInt(form.productStock.value));
        this.productsArray.push(product);
        // Renderizado
        const list = document.getElementById("products-list");
        list.innerHTML = "";
        productsArray.forEach((element)=>{
            list.appendChild(element.renderUI())
        })
        form.reset();
    }
)

$formCustomer.addEventListener("submit", (event) =>{
        event.preventDefault();
        const form =event.target;
        // Capturar valores del form
        const customer = new Customer(form.customerName.value, form.customerEmail.value);
        this.customersArray.push(customer);
        // Renderizado
        const list = document.getElementById("customers-list");
        list.innerHTML = "";
        customersArray.forEach((element)=>{
            list.appendChild(element.renderUI())
        })
        form.reset();
    }
)

// Sus addEventListener tiene que ir al final