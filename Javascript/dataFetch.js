// fetching the data

async function fetchProducts() {
  const response = await fetch('https://dummyjson.com/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log(data, "this is the data")
  return data;
}


// creating the card
function createCard(product) {
  const card = document.createElement("div");
  card.className = 'card';
 
  const img = document.createElement('img');
  img.src = product.thumbnail;
  card.appendChild(img);

  const title = document.createElement('h3');
  title.textContent = product.title;
  card.appendChild(title);

  const description = document.createElement('p');
  description.textContent = product.description;
  card.appendChild(description);

  return card;
}
// displaying the products

async function displayProducts() {
  const data = await fetchProducts();
  const productContainer = document.getElementById('product-container');

  data.products.forEach(product => {
    const card = createCard(product);
    productContainer.appendChild(card);
  });
}

displayProducts();

