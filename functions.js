// Function for adding new items to the table
const addItemToTable = (item) => {
  const newTableRow = document.createElement("tr");
  newTableRow.setAttribute("id", item.id);
  newTableRow.innerHTML = `<td>${item.name}</td>
                           <td>${item.date}</td>
                           <td>${item.amount}</td>
                           <td><button class="remove-item btn btn-dark">Delete</Button></td>`;
  tableBody.appendChild(newTableRow);
};

// Function for removing items
const removeItem = (id) => {
  // Remove item from items array
  items = items.filter((item) => item.id !== parseInt(id));

  // Remove item from the DOM
  document.getElementById(id).remove();

  // If items array is empty, remove everything from local storage
  if (items.length === 0) {
    localStorage.clear();
    return;
  }

  // Remove item from local storage
  localStorage.setItem("items", JSON.stringify(items));
};
