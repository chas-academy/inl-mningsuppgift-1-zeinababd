// Arrayer enligt uppgiftskravet
const income = [];
const expenses = [];

// Event-lyssnare för knapparna
document.getElementById("addIncome").addEventListener("click", () => addTransaction("income"));
document.getElementById("addExpense").addEventListener("click", () => addTransaction("expense"));

// Lägg till transaktion: { description, amount, type }
function addTransaction(type) {
  const descriptionInput = document.getElementById("description");
  const amountInput = document.getElementById("amount");

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!description || isNaN(amount)) {
    alert("Fyll i både beskrivning och ett giltigt belopp.");
    return;
  }

  const transaction = { description, amount, type };

  if (type === "income") {
    income.push(transaction);
  } else {
    expenses.push(transaction);
  }

  // Rensa fälten och uppdatera vyn
  descriptionInput.value = "";
  amountInput.value = "";
  updateDisplay();
}

// Uppdatera listor och totalsaldo
function updateDisplay() {
  const incomeUl = document.getElementById("incomeList");
  const expenseUl = document.getElementById("expenseList");
  const totalSpan = document.getElementById("totalBalance");

  // Rensa listor
  incomeUl.innerHTML = "";
  expenseUl.innerHTML = "";

  // Visa inkomster
  income.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.description}: +${item.amount} kr`;
    incomeUl.appendChild(li);
  });

  // Visa utgifter
  expenses.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.description}: -${item.amount} kr`;
    expenseUl.appendChild(li);
  });

  // Räkna totalt saldo: inkomster minus utgifter
  const totalIncome = income.reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = expenses.reduce((sum, t) => sum + t.amount, 0);
  totalSpan.textContent = (totalIncome - totalExpenses) + " kr";
}





// Rör ej denna kod
showContacts(contactBook, groupToShow);
module.exports = { showContacts };
