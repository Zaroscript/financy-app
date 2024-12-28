let totalIncome = 0;
let totalExpenses = 0;
let budget = 0;

function loadData() {
  const savedIncome = localStorage.getItem("totalIncome");
  const savedExpenses = localStorage.getItem("totalExpenses");
  const savedBudget = localStorage.getItem("budget");

  if (savedIncome) totalIncome = parseFloat(savedIncome);
  if (savedExpenses) totalExpenses = parseFloat(savedExpenses);
  if (savedBudget) budget = parseFloat(savedBudget);

  updateSummary();
}

document.getElementById("addIncomeBtn").addEventListener("click", function () {
  const source = document.getElementById("incomeSource").value;
  const amount = parseFloat(document.getElementById("incomeAmount").value);

  if (source && !isNaN(amount)) {
    totalIncome += amount;
    localStorage.setItem("totalIncome", totalIncome);
    updateSummary();
    document.getElementById("incomeSource").value = "";
    document.getElementById("incomeAmount").value = "";
  }
});

document.getElementById("addExpenseBtn").addEventListener("click", function () {
  const source = document.getElementById("expenseSource").value;
  const amount = parseFloat(document.getElementById("expenseAmount").value);

  if (source && !isNaN(amount)) {
    totalExpenses += amount;
    localStorage.setItem("totalExpenses", totalExpenses);
    updateSummary();
    document.getElementById("expenseSource").value = "";
    document.getElementById("expenseAmount").value = "";
  }
});

document.getElementById("setBudgetBtn").addEventListener("click", function () {
  const amount = parseFloat(document.getElementById("budgetAmount").value);

  if (!isNaN(amount)) {
    budget = amount;
    localStorage.setItem("budget", budget);
    updateSummary();
    document.getElementById("budgetAmount").value = "";
  }
});

function updateSummary() {
  document.getElementById("totalIncome").innerText = totalIncome.toFixed(2);
  document.getElementById("totalExpenses").innerText = totalExpenses.toFixed(2);
  document.getElementById("budget").innerText = budget.toFixed(2);
  document.getElementById("remaining").innerText = (
    budget - totalExpenses
  ).toFixed(2);
}

loadData();
