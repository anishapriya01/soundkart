let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id){
 let p = products.find(x=>x.id===id);
 let item = cart.find(x=>x.id===id);
 if(item) item.qty++;
 else cart.push({...p,qty:1});
 localStorage.setItem("cart",JSON.stringify(cart));
 alert("Added to cart");
}

function displayCart(){
 let div=document.getElementById("cart-items");
 let total=0;
 div.innerHTML="";
 cart.forEach(i=>{
  total+=i.price*i.qty;
  div.innerHTML+=`
   <div class="cart-card">
    <h4>${i.name}</h4>
    <p>Qty: ${i.qty}</p>
    <p>₹${i.price*i.qty}</p>
   </div>`;
 });
 document.getElementById("total").innerText="Total: ₹"+total;
}
