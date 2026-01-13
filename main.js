const grid = document.getElementById("product-grid");

products.forEach(p=>{
    grid.innerHTML += `
<div class="card">
  <img src="${p.image}" class="product-img" alt="${p.name}">
  <h3>${p.name}</h3>
  <p class="rating">⭐⭐⭐⭐☆</p>
  <p class="price">₹${p.price}</p>
  <button onclick="location.href='product-details.html?id=${p.id}'">View</button>
  <button onclick="addToCart(${p.id})">Add to Cart</button>
</div>`;

  
});
