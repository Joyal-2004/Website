// Authentication pages JavaScript (login, signup)

document.addEventListener("DOMContentLoaded", () => {
  // Password validation for signup
  const passwordInput = document.getElementById("password")
  const confirmPasswordInput = document.getElementById("confirm_password")

  if (passwordInput && confirmPasswordInput) {
    // Password strength indicators
    const lengthCheck = document.getElementById("length")
    const uppercaseCheck = document.getElementById("uppercase")
    const lowercaseCheck = document.getElementById("lowercase")
    const numberCheck = document.getElementById("number")
    const specialCheck = document.getElementById("special")

    passwordInput.addEventListener("input", function () {
      const password = this.value

      // Check password length
      if (password.length >= 8) {
        lengthCheck.classList.add("valid")
        lengthCheck.classList.remove("invalid")
      } else {
        lengthCheck.classList.add("invalid")
        lengthCheck.classList.remove("valid")
      }

      // Check for uppercase letter
      if (/[A-Z]/.test(password)) {
        uppercaseCheck.classList.add("valid")
        uppercaseCheck.classList.remove("invalid")
      } else {
        uppercaseCheck.classList.add("invalid")
        uppercaseCheck.classList.remove("valid")
      }

      // Check for lowercase letter
      if (/[a-z]/.test(password)) {
        lowercaseCheck.classList.add("valid")
        lowercaseCheck.classList.remove("invalid")
      } else {
        lowercaseCheck.classList.add("invalid")
        lowercaseCheck.classList.remove("valid")
      }

      // Check for number
      if (/[0-9]/.test(password)) {
        numberCheck.classList.add("valid")
        numberCheck.classList.remove("invalid")
      } else {
        numberCheck.classList.add("invalid")
        numberCheck.classList.remove("valid")
      }

      // Check for special character
      if (/[^A-Za-z0-9]/.test(password)) {
        specialCheck.classList.add("valid")
        specialCheck.classList.remove("invalid")
      } else {
        specialCheck.classList.add("invalid")
        specialCheck.classList.remove("valid")
      }
    })

    // Check password confirmation
    confirmPasswordInput.addEventListener("input", function () {
      if (this.value === passwordInput.value) {
        this.setCustomValidity("")
        this.classList.remove("error")

        // Remove error message if it exists
        const errorMessage = this.nextElementSibling
        if (errorMessage && errorMessage.classList.contains("error-message")) {
          errorMessage.remove()
        }
      } else {
        this.setCustomValidity("Passwords do not match")
        this.classList.add("error")

        // Add error message if it doesn't exist
        let errorMessage = this.nextElementSibling
        if (!errorMessage || !errorMessage.classList.contains("error-message")) {
          errorMessage = document.createElement("div")
          errorMessage.classList.add("error-message")
          errorMessage.textContent = "Passwords do not match"
          this.parentNode.insertBefore(errorMessage, this.nextSibling)
        }
      }
    })
  }

  // Form submission
  const authForm = document.querySelector(".auth-form")

  if (authForm) {
    authForm.addEventListener("submit", function (e) {
      // Additional validation can be added here

      // For demo purposes, we'll add a loading state to the button
      const submitButton = this.querySelector('button[type="submit"]')
      const originalText = submitButton.textContent

      submitButton.disabled = true
      submitButton.textContent = "Please wait..."

      // In a real application, you would submit the form to the server
      // For demo purposes, we'll let the form submit normally
    })
  }

  // Social login buttons
  const socialButtons = document.querySelectorAll(".social-btn")

  socialButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()

      // In a real application, you would redirect to the OAuth provider
      // For demo purposes, we'll just show an alert
      alert("Social login functionality would be implemented in a production environment.")
    })
  })
})

