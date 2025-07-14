const tasks = [
  "Complete HTML assignment",
  "Revise JavaScript DOM",
  "Submit GUVI task",
  "Prepare for mock interview",
  "Learn about APIs",
  "Practice coding problems",
  "Update LinkedIn profile",
  "Read about pagination",
  "Do project deployment",
  "Debug CSS issues",
  "Revisit Flexbox",
  "Push code to GitHub"
];

const tasksPerPage = 5;
let currentPage = 1;

function displayTasks(page) {
  const list = document.getElementById("task-list");
  list.innerHTML = "";

  const start = (page - 1) * tasksPerPage;
  const end = start + tasksPerPage;
  const paginatedItems = tasks.slice(start, end);

  paginatedItems.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  });
}

function setupPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const pageCount = Math.ceil(tasks.length / tasksPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");

    btn.addEventListener("click", () => {
      currentPage = i;
      displayTasks(currentPage);
      setupPagination();
    });

    pagination.appendChild(btn);
  }
}

window.onload = () => {
  displayTasks(currentPage);
  setupPagination();
};
