// Contact page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Form validation
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      let isValid = true
      const nameInput = document.getElementById("name")
      const emailInput = document.getElementById("email")
      const subjectInput = document.getElementById("subject")
      const messageInput = document.getElementById("message")

      // Simple validation
      if (!nameInput.value.trim()) {
        nameInput.classList.add("error")
        isValid = false
      } else {
        nameInput.classList.remove("error")
      }

      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add("error")
        isValid = false
      } else {
        emailInput.classList.remove("error")
      }

      if (!subjectInput.value.trim()) {
        subjectInput.classList.add("error")
        isValid = false
      } else {
        subjectInput.classList.remove("error")
      }

      if (!messageInput.value.trim()) {
        messageInput.classList.add("error")
        isValid = false
      } else {
        messageInput.classList.remove("error")
      }

      if (!isValid) {
        e.preventDefault()

        // Scroll to the first error
        const firstError = contactForm.querySelector(".error")
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" })
          firstError.focus()
        }
      }
    })

    // Clear error state on input
    const formInputs = contactForm.querySelectorAll(".form-control")
    formInputs.forEach((input) => {
      input.addEventListener("input", function () {
        this.classList.remove("error")
      })
    })
  }

  // FAQ accordion functionality
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      // Close other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active")
        }
      })

      // Toggle current item
      item.classList.toggle("active")
    })
  })

  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
})

