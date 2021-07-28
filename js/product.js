const product = [
  {
    id: 1,
    title: "SIMPLE PRODUCT 001",
    category: "Category1",
    price: 340.00,
    img: "./img/products/1-300x400.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "SIMPLE PRODUCT 002",
    category: "Category1",
    price: 155.00,
    img: "./img/products/5-300x400.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "SIMPLE PRODUCT 003",
    category: "Category3",
    price: 6.99,
    img: "./img/products/6-300x400.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "SIMPLE PRODUCT 004",
    category: "Category4",
    price: 20.99,
    img: "./img/products/8-300x400.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "SIMPLE PRODUCT 005",
    category: "Cateogry2",
    price: 22.99,
    img: "./img/products/9-300x400.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "SIMPLE PRODUCT 006",
    category: "Category3",
    price: 18.99,
    img: "./img/products/11-300x400.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "SIMPLE PRODUCT 007",
    category: "Cateogry2",
    price: 8.99,
    img: "./img/products/14-300x400.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 9,
    title: "SIMPLE PRODUCT 008",
    category: "Category4",
    price: 16.99,
    img: "./img/products/16-300x400.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "SIMPLE PRODUCT 009",
    category: "Category1",
    price: 16.99,
    img: "./img/products/17-300x400.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "SIMPLE PRODUCT 010",
    category: "Category3",
    price: 16.99,
    img: "./img/products/18-300x400.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "SIMPLE PRODUCT 011",
    category: "Category3",
    price: 16.99,
    img: "./img/products/19-300x400.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: "SIMPLE PRODUCT 012",
    category: "Cateogry2",
    price: 16.99,
    img: "./img/products/20-300x400.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.featured_product');
const btnContainer = document.querySelector('.btn-container');


window.addEventListener('DOMContentLoaded', function(){
  diplayMenuItems(product)
  displayMenuButtons();
});


function diplayMenuItems(menuItems) {
  let displayProduct = menuItems.map(function(item){
    return `
        <div class="item">
          <div class="product-info">
            <img src=${item.img}>
            <ul class="product-detials">
              <li class="category">
                <a href="#">${item.category}</a>
              </li>
              <li class="title">
                <a href="#">${item.title}</a>
              </li>
              <li class="price">
                <h3>$${item.price}</h3>
              </li>
              <li class="add-cart">
                <a href="#"><i class="fa fa-shopping-cart"></i>Add to cart</a>
              </li>
            </ul>
            <div class="product-overlay">
              <div class="product-cart">
                <ul class="cart">
                  <li><a href="#"><i class="fa fa-heart"></i></a></li>
                  <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                  <li><a href="#"><i class="fa fa-eye"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    `;
  });
  displayProduct = displayProduct.join('');
  sectionCenter.innerHTML = displayProduct;
}


function displayMenuButtons() {
  const categories = product.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = product.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        diplayMenuItems(product);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}



// best seller
const best_seller_product = [
{
    id: 1,
    title: "SIMPLE PRODUCT 001",
    category: "Category1",
    price: 340.00,
    img: "./img/products/1-300x400.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "SIMPLE PRODUCT 002",
    category: "Category1",
    price: 155.00,
    img: "./img/products/5-300x400.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "SIMPLE PRODUCT 003",
    category: "Category3",
    price: 6.99,
    img: "./img/products/6-300x400.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "SIMPLE PRODUCT 004",
    category: "Category4",
    price: 20.99,
    img: "./img/products/8-300x400.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  }
];

const bestSeller = document.querySelector('.best_seller');
window.addEventListener('DOMContentLoaded', function(){
  let displayBestSeller = best_seller_product.map(function(bestSell){
    return `
        <div class="item">
          <div class="product-info">
            <img src=${bestSell.img}>
            <ul class="product-detials">
              <li class="category">
                <a href="#">${bestSell.category}</a>
              </li>
              <li class="title">
                <a href="#">${bestSell.title}</a>
              </li>
              <li class="price">
                <h3>$${bestSell.price}</h3>
              </li>
              <li class="add-cart">
                <a href="#"><i class="fa fa-shopping-cart"></i>Add to cart</a>
              </li>
            </ul>
            <div class="product-overlay">
              <div class="product-cart">
                <ul class="cart">
                  <li><a href="#"><i class="fa fa-heart"></i></a></li>
                  <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                  <li><a href="#"><i class="fa fa-eye"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    `;
  });
  displayBestSeller = displayBestSeller.join('');
  bestSeller.innerHTML = displayBestSeller;
});