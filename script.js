// Fetching the data and converting to object

fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })

  // Accessing the array data
  .then((objectData) => {
    let GridData = "";

    // here we are taking the values and adding them to inner html
    objectData.map((values) => {
      GridData += `<div class="product-card">
      <img src="${values.image}" alt="img" class="product-img">
      <h2 class="product-title">${values.title}</h2>
      
      <p class="category">${values.category}</p>
      <span class="price">${values.price}</span>
      <i class='bx bx-cart-add add-cart'></i>
  </div>`
    });
    document.getElementById("shop_body").innerHTML = GridData;
  })

  // Error handling
  .catch((err) => {
    console.log(err);
  });
