const menuToggle = document.getElementById("menu-toggle");
const wrapper = document.getElementById("wrapper");

menuToggle.addEventListener("click", () => {
    wrapper.classList.toggle("toggled");
});
const tbody = document.getElementById('tableBody');
const products = [
    { id: 1, name: "Apple iPhone 14", category: "Smartphones", price: "$999", stock: 20, status: 'Available' },
    { id: 2, name: "Samsung Galaxy S23", category: "Smartphones", price: "$899", stock: 15, status: 'Available' },
    { id: 3, name: "Dell XPS 13", category: "Laptops", price: "$1299", stock: 50, status: 'Available' }
];

fetchDate(products);

function fetchDate(json) {
    for (i = 0; i < json.length; i++) {
        tbody.innerHTML = tbody.innerHTML + `
          <tr>
            <td>${json[i].id}</td>
            <td>${json[i].name}</td>
            <td>${json[i].category}</td>
            <td>${json[i].price}</td>
            <td>${json[i].stock}</td>
            <td><span class="badge bg-success">${json[i].status}</span></td>
            <td>
                <button class="btn btn-sm btn-info">Edit</button>
                <button class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>`;
    }

}

function addProduct() {
    // push
}

function removeProduct() {
    // filter , find
    // delete
}

function search() {
    const input = document.getElementById('search-input').value;
    var filltered = products.filter(product => product.name.includes(input));
    for (i = 0; i < filltered.length; i++) {
        tbody.innerHTML =  `
          <tr>
            <td>${filltered[i].id}</td>
            <td>${filltered[i].name}</td>
            <td>${filltered[i].category}</td>
            <td>${filltered[i].price}</td>
            <td>${filltered[i].stock}</td>
            <td><span class="badge bg-success">${filltered[i].status}</span></td>
            <td>
                <button class="btn btn-sm btn-info">Edit</button>
                <button class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>`;
    }
}

function edit() {
    // find 
}