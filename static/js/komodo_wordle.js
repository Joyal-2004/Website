const speciesList = ["komod", "tiger", "rhino", "mynas", "eagle"]
const targetWord = speciesList[Math.floor(Math.random() * speciesList.length)].toUpperCase()
let currentRow = 0
let currentGuess = ""
let gameOver = false

function createBoard() {
  const board = document.getElementById("board")
  for (let i = 0; i < 6 * 5; i++) {
    const tile = document.createElement("div")
    tile.classList.add("tile")
    board.appendChild(tile)
  }
}

function createKeyboard() {
  const keyboard = document.getElementById("keyboard")
  const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("")
  keys.forEach((letter) => {
    const key = document.createElement("div")
    key.classList.add("key")
    key.textContent = letter
    key.onclick = () => addLetter(letter)
    keyboard.appendChild(key)
  })

  keyboard.appendChild(document.createElement("br")) // Line break to separate keys

  // Add Backspace button
  const backspace = document.createElement("div")
  backspace.classList.add("key", "special-key")
  backspace.textContent = "⌫ Backspace"
  backspace.onclick = () => removeLetter()
  keyboard.appendChild(backspace)

  // Add spacing
  const spacer = document.createElement("div")
  spacer.style.width = "30px"
  keyboard.appendChild(spacer)

  // Add Enter button
  const enter = document.createElement("div")
  enter.classList.add("key", "special-key")
  enter.textContent = "Enter"
  enter.onclick = () => checkGuess()
  keyboard.appendChild(enter)
}

function addLetter(letter) {
  if (gameOver || currentGuess.length >= 5) return
  currentGuess += letter
  updateBoard()
}

function removeLetter() {
  if (gameOver || currentGuess.length === 0) return
  currentGuess = currentGuess.slice(0, -1)
  updateBoard()
}

function updateBoard() {
  const tiles = document.querySelectorAll(".tile")
  for (let i = 0; i < 5; i++) {
    tiles[currentRow * 5 + i].textContent = currentGuess[i] || ""
  }
}

function checkGuess() {
  if (gameOver || currentGuess.length < 5) return
  const tiles = document.querySelectorAll(".tile")
  const guessArray = currentGuess.split("")
  const targetArray = targetWord.split("")

  for (let i = 0; i < 5; i++) {
    if (guessArray[i] === targetArray[i]) {
      tiles[currentRow * 5 + i].classList.add("correct")
    } else if (targetArray.includes(guessArray[i])) {
      tiles[currentRow * 5 + i].classList.add("present")
    } else {
      tiles[currentRow * 5 + i].classList.add("absent")
    }
  }

  if (currentGuess === targetWord) {
    document.getElementById("message").textContent = "🎉 Congratulations! You guessed it!"
    gameOver = true
    setTimeout(() => askToRestart(), 1000)
  } else if (currentRow === 5) {
    document.getElementById("message").textContent = `❌ Game Over! The word was ${targetWord}`
    gameOver = true
    setTimeout(() => askToRestart(), 1000)
  } else {
    currentRow++
    currentGuess = ""
  }
}

function askToRestart() {
  setTimeout(() => {
    if (confirm("Game over! Do you want to play again?")) {
      location.reload()
    }
  }, 500)
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkGuess()
  } else if (event.key === "Backspace") {
    removeLetter()
  } else if (/^[a-zA-Z]$/.test(event.key)) {
    addLetter(event.key.toUpperCase())
  }
})

// Initialize the game when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  createBoard()
  createKeyboard()
})

