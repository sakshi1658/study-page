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
    container.appendChild(card);
  });
}

function toggleForm() {
  const form = document.getElementById('form-container');
  form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
}

function addNewQuestion() {
  const q = document.getElementById('new-question').value.trim();
  const a = document.getElementById('new-answer').value.trim();
  if (!q || !a) return alert("Please enter both question and answer");

  const newQA = { q, a };
  savedQuestions.push(newQA);
  localStorage.setItem('questions', JSON.stringify(savedQuestions));

  allQuestions.push(newQA);
  renderCards();

  document.getElementById('new-question').value = '';
  document.getElementById('new-answer').value = '';
  toggleForm();
}

renderCards();

