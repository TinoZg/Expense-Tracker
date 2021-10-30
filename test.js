const expenseTrackerForm = document.querySelector("form");
const tableBody = document.querySelector("tbody");
const items = [];

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
  // const item = document.getElementById(id);
  items = items.filter((id) => item.id !== parseInt(id));
};

expenseTrackerForm.addEventListener("submit", (e) => {
  // Prevent page from reloading
  e.preventDefault();

  const name = document.querySelector("input[name=Name]");
  const date = document.querySelector("input[name=Date]");
  const amount = document.querySelector("input[name=Amount]");
  // console.log(name, date, amount);

  // Each item will be uniquely represented with current time in miliseconds
  const item = {
    id: new Date().getTime(),
    name: name.value,
    date: date.value,
    amount: amount.value,
  };

  // Add new item
  items.push(item);

  // Add new item to local storage
  localStorage.setItem("items", JSON.stringify(items));

  // Reset form
  expenseTrackerForm.reset();

  // Give focus to name input
  name.focus();

  // Add item to table
  addItemToTable(item);
});

tableBody.addEventListener("click", (e) => {
  // Check if we clicked on delete button (class "remove-item" previously added to delete button)
  if (e.target.classList.contains("remove-item")) {
    // Get id of item we want to delete
    const itemId = e.target.closest("tr").id;

    console.log(typeof itemId);
    // Delete the item
    removeItem(itemId);
  }
});
