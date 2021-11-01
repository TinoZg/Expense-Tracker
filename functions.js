// Function for adding new items to the table
const addItemToTable = (item) => {
  const newTableRow = document.createElement("tr");
  newTableRow.setAttribute("id", item.id);
  newTableRow.innerHTML = `<td>${item.name}</td>
                           <td>${item.date}</td>
                           <td>${item.amount}</td>
                           <td><button class="remove-item">Delete</Button></td>`;
  tableBody.appendChild(newTableRow);
};

// Function for removing items
const removeItem = (id) => {
  items = items.filter((item) => item.id !== parseInt(id));
};
