const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const highlight = document.getElementById("highlight");
const addItem = document.querySelector("#additem");
const list = document.getElementById("list");
const remove = document.querySelector("#remove");
const toggleHighlight = document.querySelector("#toggle");
const listItems = document.getElementsByClassName('list-li')

console.log(document.getElementById("another"))

highlight.addEventListener('click', () => {
  title.style.color = 'red';
  paragraph.style.color = "blue";
  highlight.innerHTML = "Highlighted"
})

addItem.addEventListener('click', () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${list.childElementCount + 1}`;
  newItem.className = `list-li`
  list.appendChild(newItem)
  console.log(newItem)
})

remove.addEventListener("click", () => {
  if (list.firstChild) list.firstChild.remove();
})


let count = 0;
toggleHighlight.addEventListener("click", () => {

  if (listItems.length > count) {
    console.log(count)
    if (count == 0) {
      listItems[0].classList.toggle("highlight")
    }
    count = count + 1;
    listItems[count - 1].classList.toggle("highlight")
    listItems[count].classList.toggle("highlight")
    console.log(count)
  }
})

