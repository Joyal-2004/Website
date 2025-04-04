// Forgot Password page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  const forgotPasswordForm = document.getElementById("forgot-password-form")
  const emailInput = document.getElementById("email")
  const emailError = document.getElementById("email-error")

  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", (e) => {
      let isValid = true

      // Reset error state
      emailInput.classList.remove("error")
      emailError.classList.remove("visible")

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

      if (!isValid) {
        e.preventDefault()
      } else {
        // In a real application, you would handle form submission here
        // For demo purposes, we'll just prevent the default action and show a success message
        e.preventDefault()

        // Show loading state
        const submitBtn = forgotPasswordForm.querySelector('button[type="submit"]')
        const originalText = submitBtn.textContent
        submitBtn.disabled = true
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'

        // Simulate API call
        setTimeout(() => {
          // Replace form with success message
          forgotPasswordForm.innerHTML = `
            <div class="success-message">
              <div class="success-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <h3>Reset Link Sent!</h3>
              <p>We've sent password reset instructions to your email address. Please check your inbox and follow the instructions to reset your password.</p>
              <p class="note">If you don't see the email, please check your spam folder.</p>
              <a href="${window.location.origin}/login" class="btn primary-btn">Back to Login</a>
            </div>
          `

          // Add styles for success message
          const style = document.createElement("style")
          style.textContent = `
            .success-message {
              text-align: center;
              animation: fadeIn 0.5s ease-out;
            }
            .success-icon {
              width: 80px;
              height: 80px;
              background-color: #27ae60;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 25px;
              box-shadow: 0 5px 15px rgba(39, 174, 96, 0.3);
            }
            .success-icon i {
              font-size: 35px;
              color: white;
            }
            .success-message h3 {
              font-size: 1.8rem;
              margin-bottom: 15px;
              color: #2c3e50;
            }
            .success-message p {
              color: #666;
              margin-bottom: 20px;
            }
            .success-message .note {
              font-size: 0.9rem;
              color: #888;
              font-style: italic;
            }
            .success-message .btn {
              margin-top: 10px;
            }
          `
          document.head.appendChild(style)
        }, 2000)
      }
    })

    // Real-time validation
    emailInput.addEventListener("input", function () {
      this.classList.remove("error")
      emailError.classList.remove("visible")
    })
  }

  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
})

