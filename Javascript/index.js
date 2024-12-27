window.onload = function() {

  const calculateButton = document.getElementById("calculateButton");
  const form = document.getElementById("form");

  function calculate(event) {
    event.preventDefault();
    const maths = parseInt(document.getElementById("maths").value) || 0;
    const science = parseInt(document.getElementById("science").value) || 0;
    const english = parseInt(document.getElementById("english").value) || 0;
    const history = parseInt(document.getElementById("history").value) || 0;
    const percentage = parseInt(((maths + science + english + history) / 400) * 100);
    const gpa = ((maths + science + english + history) / 400) * 4;

    const result = document.getElementById("result");
    result.innerHTML = `Percentage => ${percentage}% 
    GPA => ${gpa}`
    form.reset()
  }
  calculateButton.addEventListener("click", calculate)
}

const arr = [12, 13, 14, 15];

// implementing stack in javascript
// 
