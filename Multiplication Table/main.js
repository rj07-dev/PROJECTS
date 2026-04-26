function drawTable() {
  const rows = parseInt(document.getElementById('rows').value);
  const cols = parseInt(document.getElementById('cols').value);
  const output = document.getElementById('tableOutput');

  if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
    output.innerHTML = '<p>Please enter valid numbers for rows and columns.</p>';
    return;
  }

  let table = '<table>';
  table += '<tr><th>#</th>';

  for (let c = 1; c <= cols; c++) {
    table += `<th>${c}</th>`;
  }

  table += '</tr>';

  for (let r = 1; r <= rows; r++) {
    table += `<tr><th>${r}</th>`;
    for (let c = 1; c <= cols; c++) {
      table += `<td>${r} × ${c} = ${r * c}</td>`;
    }
    table += '</tr>';
  }

  table += '</table>';
  output.innerHTML = table;
}

drawTable();