const Parent = document.querySelector("#parent");
const buttons = document.querySelectorAll(".btn")
const count = document.querySelector("#counter");

console.table({ id: "hello" })
console.table()

parent.addEventListener("click", (e) => {
  const target = e.target;
  console.log(target.classList[0])
  if (target.classList[0] === 'btn') {
    count.innerHTML = (Number(count.innerHTML) + 1);
  }
  if (target.id === "reset") {
    count.innerHTML = 0;
  }
})
const table = {

}



