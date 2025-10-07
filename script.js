document.getElementById('otForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const employeeId = document.getElementById('employeeId').value;
  const department = document.getElementById('department').value;
  const date = document.getElementById('date').value;
  const hours = document.getElementById('hours').value;
  const remarks = document.getElementById('remarks').value;

  // For now, just show a success message
  document.getElementById('message').textContent = `Thank you, ${name}. Your OT submission of ${hours} hours on ${date} has been recorded.`;

  // Reset form
  document.getElementById('otForm').reset();

  // TODO: Send data to backend or Google Sheets/Database
});
