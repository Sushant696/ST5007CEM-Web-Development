console.log("hello world!")

// what is event propagation?
// Movement of Event through the DOM. It determines in which order the elements receives the event.
// Three phase of event propagation
// capture phase : Event starts from the root element all the way to the target element
// Target phase: The event reaches the target element.
// Bubbling phase : The event travels back up from the target element to the root.

document.getElementById("child").addEventListener("click", function() {
  console.log("Click child");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("parent clicked");
}, true);

document.getElementById("grand").addEventListener("click", (e) => {
  if (e.target.id.startsWith('item')) {
    console.log(e.target.id)
  }
})
