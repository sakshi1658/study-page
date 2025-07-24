const container = document.getElementById('question-list');

questions.forEach((item, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h2>${item.q}</h2>`;
  card.addEventListener('click', () => {
    window.location.href = `answer.html?id=${index}`;
  });
  container.appendChild(card);
});
