const categoriesList = document.querySelector("#categories");
const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  console.log(`Category: ${categoryTitle}`);
  const categoryElements = item.querySelectorAll("ul > li");
  console.log(`Elements: ${categoryElements.length}`);
});
