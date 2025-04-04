// Signup page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form")
  const firstNameInput = document.getElementById("first-name")
  const lastNameInput = document.getElementById("last-name")
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")
  const confirmPasswordInput = document.getElementById("confirm-password")
  const termsCheckbox = document.getElementById("terms")
  const togglePasswordBtn = document.getElementById("toggle-password")
  const toggleConfirmPasswordBtn = document.getElementById("toggle-confirm-password")
  const passwordStrengthMeter = document.getElementById("password-strength-meter")
  const passwordStrengthText = document.getElementById("password-strength-text")
  const userTypeOptions = document.querySelectorAll(".user-type-option")

  // User type selection
  if (userTypeOptions.length > 0) {
    userTypeOptions.forEach((option) => {
      option.addEventListener("click", function () {
        // Remove active class from all options
        userTypeOptions.forEach((opt) => opt.classList.remove("active"))

        // Add active class to clicked option
        this.classList.add("active")

        // Update hidden input value
        const userTypeInput = document.getElementById("user-type")
        if (userTypeInput) {
          userTypeInput.value = this.getAttribute("data-type")
        }
      })
    })
  }

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

  // Toggle confirm password visibility
  if (toggleConfirmPasswordBtn && confirmPasswordInput) {
    toggleConfirmPasswordBtn.addEventListener("click", () => {
      const type = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password"
      confirmPasswordInput.setAttribute("type", type)

      // Toggle icon
      if (type === "text") {
        toggleConfirmPasswordBtn.innerHTML = '<i class="fas fa-eye-slash"></i>'
      } else {
        toggleConfirmPasswordBtn.innerHTML = '<i class="fas fa-eye"></i>'
      }
    })
  }

  // Password strength meter
  if (passwordInput && passwordStrengthMeter && passwordStrengthText) {
    passwordInput.addEventListener("input", function () {
      const password = this.value
      const strength = calculatePasswordStrength(password)

      // Update strength meter
      passwordStrengthMeter.style.width = `${strength.score * 25}%`
      passwordStrengthMeter.style.backgroundColor = strength.color
      passwordStrengthText.textContent = strength.message
      passwordStrengthText.style.color = strength.color
    })
  }

  // Calculate password strength
  function calculatePasswordStrength(password) {
    if (!password) {
      return { score: 0, message: "", color: "#ecf0f1" }
    }

    let score = 0

    // Length check
    if (password.length >= 8) score++
    if (password.length >= 12) score++

    // Complexity checks
    if (/[A-Z]/.test(password)) score++
    if (/[a-z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    // Adjust final score (max 4)
    score = Math.min(4, Math.floor(score / 1.5))

    // Return score with message and color
    const messages = ["", "Weak", "Fair", "Good", "Strong"]
    const colors = ["#ecf0f1", "#e74c3c", "#f39c12", "#3498db", "#27ae60"]

    return {
      score: score,
      message: messages[score],
      color: colors[score],
    }
  }

  // Form validation
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      let isValid = true

      // Reset all error states
      const inputs = signupForm.querySelectorAll(".form-control")
      const errorMessages = signupForm.querySelectorAll(".error-message")

      inputs.forEach((input) => input.classList.remove("error"))
      errorMessages.forEach((msg) => msg.classList.remove("visible"))

      // Validate first name
      if (!firstNameInput.value.trim()) {
        firstNameInput.classList.add("error")
        document.getElementById("first-name-error").textContent = "First name is required"
        document.getElementById("first-name-error").classList.add("visible")
        isValid = false
      }

      // Validate last name
      if (!lastNameInput.value.trim()) {
        lastNameInput.classList.add("error")
        document.getElementById("last-name-error").textContent = "Last name is required"
        document.getElementById("last-name-error").classList.add("visible")
        isValid = false
      }

      // Validate email
      if (!emailInput.value.trim()) {
        emailInput.classList.add("error")
        document.getElementById("email-error").textContent = "Email is required"
        document.getElementById("email-error").classList.add("visible")
        isValid = false
      } else if (!isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add("error")
        document.getElementById("email-error").textContent = "Please enter a valid email address"
        document.getElementById("email-error").classList.add("visible")
        isValid = false
      }

      // Validate password
      if (!passwordInput.value.trim()) {
        passwordInput.classList.add("error")
        document.getElementById("password-error").textContent = "Password is required"
        document.getElementById("password-error").classList.add("visible")
        isValid = false
      } else if (passwordInput.value.length < 8) {
        passwordInput.classList.add("error")
        document.getElementById("password-error").textContent = "Password must be at least 8 characters"
        document.getElementById("password-error").classList.add("visible")
        isValid = false
      }

      // Validate confirm password
      if (!confirmPasswordInput.value.trim()) {
        confirmPasswordInput.classList.add("error")
        document.getElementById("confirm-password-error").textContent = "Please confirm your password"
        document.getElementById("confirm-password-error").classList.add("visible")
        isValid = false
      } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.classList.add("error")
        document.getElementById("confirm-password-error").textContent = "Passwords do not match"
        document.getElementById("confirm-password-error").classList.add("visible")
        isValid = false
      }

      // Validate terms checkbox
      if (!termsCheckbox.checked) {
        document.getElementById("terms-error").classList.add("visible")
        isValid = false
      }

      if (!isValid) {
        e.preventDefault()
        signupForm.classList.add("shake")
        setTimeout(() => {
          signupForm.classList.remove("shake")
        }, 600)

        // Scroll to first error
        const firstError = signupForm.querySelector(".form-control.error")
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" })
          firstError.focus()
        }
      } else {
        // In a real application, you would handle form submission here
        // For demo purposes, we'll just prevent the default action
        e.preventDefault()

        // Show loading state
        const submitBtn = signupForm.querySelector('button[type="submit"]')
        const originalText = submitBtn.textContent
        submitBtn.disabled = true
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...'

        // Simulate API call
        setTimeout(() => {
          // Reset button
          submitBtn.disabled = false
          submitBtn.textContent = originalText

          // Show success message
          const successMessage = document.createElement("div")
          successMessage.className = "alert alert-success"
          successMessage.textContent = "Account created successfully! Redirecting to dashboard..."

          signupForm.parentNode.insertBefore(successMessage, signupForm)
          signupForm.style.display = "none"

          // Redirect after a delay (for demo purposes)
          setTimeout(() => {
            window.location.href = "/"
          }, 2000)
        }, 1500)
      }
    })

    // Real-time validation

    // First name validation
    firstNameInput.addEventListener("blur", function () {
      if (!this.value.trim()) {
        this.classList.add("error")
        document.getElementById("first-name-error").textContent = "First name is required"
        document.getElementById("first-name-error").classList.add("visible")
      } else {
        this.classList.remove("error")
        document.getElementById("first-name-error").classList.remove("visible")
      }
    })

    // Last name validation
    lastNameInput.addEventListener("blur", function () {
      if (!this.value.trim()) {
        this.classList.add("error")
        document.getElementById("last-name-error").textContent = "Last name is required"
        document.getElementById("last-name-error").classList.add("visible")
      } else {
        this.classList.remove("error")
        document.getElementById("last-name-error").classList.remove("visible")
      }
    })

    // Email validation
    emailInput.addEventListener("blur", function () {
      if (!this.value.trim()) {
        this.classList.add("error")
        document.getElementById("email-error").textContent = "Email is required"
        document.getElementById("email-error").classList.add("visible")
      } else if (!isValidEmail(this.value.trim())) {
        this.classList.add("error")
        document.getElementById("email-error").textContent = "Please enter a valid email address"
        document.getElementById("email-error").classList.add("visible")
      } else {
        this.classList.remove("error")
        document.getElementById("email-error").classList.remove("visible")
      }
    })

    // Password validation
    passwordInput.addEventListener("blur", function () {
      if (!this.value.trim()) {
        this.classList.add("error")
        document.getElementById("password-error").textContent = "Password is required"
        document.getElementById("password-error").classList.add("visible")
      } else if (this.value.length < 8) {
        this.classList.add("error")
        document.getElementById("password-error").textContent = "Password must be at least 8 characters"
        document.getElementById("password-error").classList.add("visible")
      } else {
        this.classList.remove("error")
        document.getElementById("password-error").classList.remove("visible")
      }

      // Also check confirm password if it has a value
      if (confirmPasswordInput.value.trim()) {
        if (confirmPasswordInput.value !== this.value) {
          confirmPasswordInput.classList.add("error")
          document.getElementById("confirm-password-error").textContent = "Passwords do not match"
          document.getElementById("confirm-password-error").classList.add("visible")
        } else {
          confirmPasswordInput.classList.remove("error")
          document.getElementById("confirm-password-error").classList.remove("visible")
        }
      }
    })

    // Confirm password validation
    confirmPasswordInput.addEventListener("blur", function () {
      if (!this.value.trim()) {
        this.classList.add("error")
        document.getElementById("confirm-password-error").textContent = "Please confirm your password"
        document.getElementById("confirm-password-error").classList.add("visible")
      } else if (this.value !== passwordInput.value) {
        this.classList.add("error")
        document.getElementById("confirm-password-error").textContent = "Passwords do not match"
        document.getElementById("confirm-password-error").classList.add("visible")
      } else {
        this.classList.remove("error")
        document.getElementById("confirm-password-error").classList.remove("visible")
      }
    })

    // Terms checkbox validation
    termsCheckbox.addEventListener("change", function () {
      if (this.checked) {
        document.getElementById("terms-error").classList.remove("visible")
      } else {
        document.getElementById("terms-error").classList.add("visible")
      }
    })

    // Clear error on input
    const inputs = signupForm.querySelectorAll(".form-control")
    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        this.classList.remove("error")
        const errorId = `${this.id}-error`
        const errorElement = document.getElementById(errorId)
        if (errorElement) {
          errorElement.classList.remove("visible")
        }
      })
    })
  }

  // Social signup buttons
  const socialButtons = document.querySelectorAll(".social-btn")

  socialButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      // In a real application, you would handle social signup here
      // For demo purposes, we'll just show an alert
      const provider = this.getAttribute("data-provider")
      alert(`Signing up with ${provider}. This would redirect to ${provider}'s authentication page.`)
    })
  })

  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
})

