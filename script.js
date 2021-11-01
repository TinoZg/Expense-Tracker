const expenseTrackerForm = document.querySelector("form");
const tableBody = document.querySelector("tbody");
let items = JSON.parse(localStorage.getItem("items")) || [];
// If local storage is not empty, render items
if (localStorage.getItem("items")) {
  items.map((item) => addItemToTable(item));
}

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

    // Delete the item
    removeItem(itemId);
  }
});
