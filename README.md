# study-page
# 📘 Interview Q&A Web App

This is a simple and responsive web app to help you revise and organize your **interview questions and answers**. It's built using HTML, CSS, and JavaScript with a clean design and animations.

👉 [Live Demo](https://yourusername.github.io/interview-qa/)

---

## 📌 Features

- Responsive card-based layout
- Clickable question cards
- Separate answer view with back navigation
- Data stored and accessed via JavaScript array
- Clean animations and modern UI

---

## 📁 Project Structure

 interview-qa/
├── index.html → Homepage: lists questions as cards
├── answer.html → Shows selected question's answer
├── style.css → All styling and responsive design
├── data.js → Questions & answers stored in JS array
├── script.js → Dynamic card creation and navigation
└── README.md → Project overview


---

## 🔄 How Data Works

### 1. `data.js`

Contains all questions and answers in this format:

```js
const questions = [
  {
    q: "What is Angular?",
    a: "Angular is a TypeScript-based framework used to build single-page applications..."
  },
  ...
];


2. index.html + script.js
The questions are looped over and displayed as clickable cards.

On clicking a card, the user is redirected to answer.html?id={index}.

js

window.location.href = `answer.html?id=${index}`;
3. answer.html
Reads the id from the URL.

Looks up the corresponding question and answer from questions[].

Displays the content on the page.

Includes a "Back" button that returns to the homepage.


// ************************* how data is saving ***********************************************

🧠 How Data Is Saved (localStorage logic)
This app allows you to add questions directly from the browser UI without editing code!

✅ What Happens When You Add a Question:
You enter a new question and answer.

It's saved to localStorage using:

js

localStorage.setItem('questions', JSON.stringify(savedQuestions));
On every page load:

The app first checks localStorage for user-added questions.

It then merges them with the default ones from data.js.

✅ Your Data Stays Even If You:
Refresh the page

Close and reopen the browser

Navigate away and return

As long as you’re using the same device and browser, your added questions remain available.

🧹 Optional:
To clear all saved questions:

js

localStorage.removeItem('questions');