let dishes=[];
let menu  = document.getElementById("menu-btn");
menu.addEventListener('click',async ()=>
{
  const response = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
  const data = await response.json();
  console.log(data)
  const menu = document.getElementById("menu");
  data.forEach((item) => {
    menu.innerHTML += `
      <div class="card-body">
        <img src="${item.imgSrc}" alt="${item.imageAlt}" width="50%">
        <h2>${item.name}</h2>
        <p>${item.price}<p>
      </div>
    `;
    dishes.push(item.name);
  });
}
);
 
function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const order = {
        burgers: [dishes[Math.floor(Math.random() * arrayOfDishes.length)], arrayOfDishes[Math.floor(Math.random() * arrayOfDishes.length)], arrayOfDishes[Math.floor(Math.random() * arrayOfDishes.length)]]
        
      };
      console.log(order.burgers);
      resolve(order);
    }, 2500);
  });
}
 
function orderPrep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({order_status: true, paid: false});
    }, 1500);
  });
}
 
function payOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({order_status: true, paid: true});
    }, 1000);
  });
}
 
function thankyouFnc() {
  alert("Thank you for eating with us today!");
}
 
// Attach event listener to order button
const orderBtn = document.getElementById("order-btn");
orderBtn.addEventListener("click", async () => {
  try {
    const order = await takeOrder();
    console.log("Order placed: ", order);
 
    const orderStatus = await orderPrep();
    console.log("Order status: ", orderStatus);
 
    const payment = await payOrder();
    console.log("Payment status: ", payment);
 
    if (payment.paid) {
      thankyouFnc();
    }
  } catch (error) {
    console.error(error);
  }
});
 
// Call getMenu function on page loa