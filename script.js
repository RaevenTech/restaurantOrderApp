import { menuArray } from "./data.js";

const menuItems = document.getElementById("menu-items")
const selectedItem = document.getElementById("selected-item")
const closeOrderBtn = document.getElementById("close-order-btn")

let menuItemHtml = ""
menuArray.forEach(function(item){
  item = `
    <div class="menu-item">
          <h1 class="menu-item-img">${item.image}</h1>
          <div class="menu-item-info">
            <h3 class="menu-item-name">${item.name}</h3>
            <p class="menu-item-description">${item.ingredients}</p>
            <h3 class="menu-item-price">€${item.price}</h3>
          </div>
          <button class="add-btn" id="add-btn" >+</button>
        </div>
  `
  menuItems.innerHTML += item
})

closeOrderBtn.addEventListener("click", function(){
  selectedItem.style.display = "none"
})

document.getElementById("add-btn").addEventListener("click",function(){
  selectedItem.style.display = "block"
})


