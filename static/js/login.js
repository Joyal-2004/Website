// Login page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form")
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")
  const emailError = document.getElementById("email-error")
  const passwordError = document.getElementById("password-error")
  const togglePasswordBtn = document.getElementById("toggle-password")

  // Toggle password visibility
  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
      passwordInput.setAttribute("type", type)

      // Toggle icon
      if (type === "text") {
        togglePasswordBtn.innerHTML = '<i class="fas fa-eye-slash"></i>'
      } else {
        togglePasswordBtn.innerHTML = '<i class="fas fa-eye"></i>'
      }
    })
  }

  // Form validation
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      let isValid = true

      // Reset error states
      emailInput.classList.remove("error")
      passwordInput.classList.remove("error")
      emailError.classList.remove("visible")
      passwordError.classList.remove("visible")

      // Validate email
      if (!emailInput.value.trim()) {
        emailInput.classList.add("error")
        emailError.textContent = "Email is required"
        emailError.classList.add("visible")
        isValid = false
      } else if (!isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add("error")
        emailError.textContent = "Please enter a valid email address"
        emailError.classList.add("visible")
        isValid = false
      }

      // Validate password
      if (!passwordInput.value.trim()) {
        passwordInput.classList.add("error")
        passwordError.textContent = "Password is required"
        passwordError.classList.add("visible")
        isValid = false
      }

      if (!isValid) {
        e.preventDefault()
        loginForm.classList.add("shake")
        setTimeout(() => {
          loginForm.classList.remove("shake")
        }, 600)
      } else {
        // In a real application, you would handle form submission here
        // For demo purposes, we'll just prevent the default action
        e.preventDefault()

        // Show loading state
        const submitBtn = loginForm.querySelector('button[type="submit"]')
        const originalText = submitBtn.textContent
        submitBtn.disabled = true
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...'

        // Simulate API call
        setTimeout(() => {
          // Reset button
          submitBtn.disabled = false
          submitBtn.textContent = originalText

          // Show success message (in a real app, you would redirect to dashboard)
          const successMessage = document.createElement("div")
          successMessage.className = "alert alert-success"
          successMessage.textContent = "Login successful! Redirecting to dashboard..."

          loginForm.parentNode.insertBefore(successMessage, loginForm)
          loginForm.style.display = "none"

          // Redirect after a delay (for demo purposes)
          setTimeout(() => {
            window.location.href = "/"
          }, 2000)
        }, 1500)
      }
    })

    // Real-time validation
    emailInput.addEventListener("blur", function () {
      if (!this.value.trim()) {
        this.classList.add("error")
        emailError.textContent = "Email is required"
        emailError.classList.add("visible")
      } else if (!isValidEmail(this.value.trim())) {
        this.classList.add("error")
        emailError.textContent = "Please enter a valid email address"
        emailError.classList.add("visible")
      } else {
        this.classList.remove("error")
        emailError.classList.remove("visible")
      }
    })

    passwordInput.addEventListener("blur", function () {
      if (!this.value.trim()) {
        this.classList.add("error")
        passwordError.textContent = "Password is required"
        passwordError.classList.add("visible")
      } else {
        this.classList.remove("error")
        passwordError.classList.remove("visible")
      }
    })

    // Clear error on input
    emailInput.addEventListener("input", function () {
      this.classList.remove("error")
      emailError.classList.remove("visible")
    })

    passwordInput.addEventListener("input", function () {
      this.classList.remove("error")
      passwordError.classList.remove("visible")
    })
  }

  // Social login buttons
  const socialButtons = document.querySelectorAll(".social-btn")

  socialButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      // In a real application, you would handle social login here
      // For demo purposes, we'll just show an alert
      const provider = this.getAttribute("data-provider")
      alert(`Logging in with ${provider}. This would redirect to ${provider}'s authentication page.`)
    })
  })

  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
})

