const container = document.getElementById('question-list');
const savedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
const allQuestions = [...questions, ...savedQuestions];

function renderCards() {
  container.innerHTML = '';
  allQuestions.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h2>${item.q}</h2>`;
    card.addEventListener('click', () => {
      localStorage.setItem('selectedQuestion', JSON.stringify(item));
      window.location.href = `answer.html`;
    });
    // Show Edit/Delete only for user-added questions
    if (index >= questions.length) {
      const btnGroup = document.createElement('div');
      btnGroup.style.marginTop = '10px';
      btnGroup.style.display = 'flex';
      btnGroup.style.gap = '8px';
      // Edit button
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.className = 'edit-btn';
      editBtn.onclick = (e) => {
        e.stopPropagation();
        editQuestion(index - questions.length);
      };
      // Delete button
      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.className = 'delete-btn';
      delBtn.onclick = (e) => {
        e.stopPropagation();
        deleteQuestion(index - questions.length);
      };
      btnGroup.appendChild(editBtn);
      btnGroup.appendChild(delBtn);
      card.appendChild(btnGroup);
    }
    container.appendChild(card);
  });
}

function toggleForm() {
  const form = document.getElementById('form-container');
  form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
}

let editIndex = null;

function addNewQuestion() {
  const q = document.getElementById('new-question').value.trim();
  const a = document.getElementById('new-answer').value.trim();
  if (!q || !a) return alert("Please enter both question and answer");

  if (editIndex !== null) {
    // Edit mode
    savedQuestions[editIndex] = { q, a };
    localStorage.setItem('questions', JSON.stringify(savedQuestions));
    allQuestions[questions.length + editIndex] = { q, a };
    editIndex = null;
  } else {
    // Add mode
    const newQA = { q, a };
    savedQuestions.push(newQA);
    localStorage.setItem('questions', JSON.stringify(savedQuestions));
    allQuestions.push(newQA);
  }
  renderCards();
  document.getElementById('new-question').value = '';
  document.getElementById('new-answer').value = '';
  toggleForm();
}

function deleteQuestion(idx) {
  if (!confirm('Delete this question?')) return;
  savedQuestions.splice(idx, 1);
  localStorage.setItem('questions', JSON.stringify(savedQuestions));
  allQuestions.splice(questions.length + idx, 1);
  renderCards();
}

function editQuestion(idx) {
  const qa = savedQuestions[idx];
  document.getElementById('new-question').value = qa.q;
  document.getElementById('new-answer').value = qa.a;
  editIndex = idx;
  const form = document.getElementById('form-container');
  form.style.display = 'flex';
}

renderCards();

