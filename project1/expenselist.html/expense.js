// script.js

// Select elements
const form = document.getElementById('expense-form');
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const expenseDate = document.getElementById('expense-date');
const expenseList = document.getElementById('expenses');
const totalExpense = document.getElementById('total');

// Load expenses from localStorage
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Function to update the expense list
function updateExpenses() {
  expenseList.innerHTML = '';
  let total = 0;

  expenses.forEach((expense, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${expense.name} - ${expense.amount} - ${expense.date}
      <button onclick="deleteExpense(${index})">Delete</button>
    `;
    expenseList.appendChild(li);
    total += parseFloat(expense.amount);
  });

  totalExpense.innerText = total.toFixed(2);
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Function to add an expense
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const expense = {
    name: expenseName.value,
    amount: expenseAmount.value,
    date: expenseDate.value,
  };

  expenses.push(expense);
  updateExpenses();

  form.reset();
});

// Function to delete an expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  updateExpenses();
}

// Initial render
updateExpenses();