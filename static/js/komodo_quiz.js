function submitQuiz() {
  const resultsContainer = document.getElementById("results")
  const answersContainer = document.getElementById("answersContainer")
  const questions = [
    { question: "question1", correct: "b" },
    { question: "question2", correct: "c" },
    { question: "question3", correct: "b" },
    { question: "question4", correct: "b" },
    { question: "question5", correct: "b" },
    { question: "question6", correct: "a" },
  ]
  let scoreCount = 0

  questions.forEach((q) => {
    const answer = document.querySelector(`input[name="${q.question}"]:checked`)
    if (answer && answer.value === q.correct) {
      scoreCount++
    }
  })

  resultsContainer.innerHTML = `You scored ${scoreCount} out of ${questions.length}!`

  if (scoreCount === questions.length) {
    resultsContainer.innerHTML += `<p>Well done, you know your stuff!</p>`
  } else if (scoreCount >= 4) {
    resultsContainer.innerHTML += `<p>Great attempt! Keep studying to improve.</p>`
  } else {
    resultsContainer.innerHTML += `<p>Don't worry, keep learning and you'll get there!</p>`
  }

  // Create a custom answers page instead of linking to a separate HTML file
  answersContainer.innerHTML = `
        <div class="answers-section">
            <h3>Correct Answers:</h3>
            <ol>
                <li>B) Deforestation</li>
                <li>C) Komodo Dragon</li>
                <li>B) Identifying and protecting endangered species</li>
                <li>B) Habitat loss and deforestation</li>
                <li>B) Participating in habitat restoration</li>
                <li>A) Volunteering for conservation projects</li>
            </ol>
        </div>
    `

  // Scroll to results
  resultsContainer.scrollIntoView({ behavior: "smooth" })
}

// Add event listeners for keyboard navigation
document.addEventListener("DOMContentLoaded", () => {
  // Allow using Enter key to submit the quiz
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      submitQuiz()
    }
  })

  // Highlight the selected option for better user experience
  const radioButtons = document.querySelectorAll('input[type="radio"]')
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      // Remove highlight from all choices in this question group
      const name = this.getAttribute("name")
      const choices = document.querySelectorAll(`input[name="${name}"]`)
      choices.forEach((choice) => {
        choice.parentElement.classList.remove("selected")
      })

      // Add highlight to selected choice
      this.parentElement.classList.add("selected")
    })
  })
})

