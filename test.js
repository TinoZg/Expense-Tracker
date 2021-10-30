const expenseTrackerForm = document.querySelector("form");
const items = [];

const addItemToTable = (item) => {
  const tableBody = document.querySelector("tbody");
  const newTableRow = document.createElement("tr");
  newTableRow.setAttribute("id", item.id);
  newTableRow.innerHTML = `<td>${item.name}</td>
                           <td>${item.date}</td>
                          <td>${item.amount}</td>`;
  tableBody.appendChild(newTableRow);
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
