const form = document.getElementById('projectForm');
const table = document.getElementById('projectTable');
const tableBody = table.querySelector('tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const projectName = document.getElementById('projectName').value;
  const projectType = document.getElementById('projectType').value;
  const projectDescription = document.getElementById('projectDescription').value;
  const startDate = document.getElementById('startDate').value;
  const teamMembers = document.getElementById('teamMembers').value;

  const row = document.createElement('tr');

  row.innerHTML = `
        <td>${projectName}</td>
        <td>${projectType}</td>
        <td>${projectDescription}</td>
        <td>${startDate}</td>
        <td>${teamMembers}</td>
      `;

  tableBody.appendChild(row);

  table.style.display = 'table';

  form.reset();
});
