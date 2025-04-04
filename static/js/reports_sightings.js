// Reports & Sightings page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // File upload handling
  const fileInput = document.getElementById("photo")
  const fileLabel = document.querySelector(".file-upload-label span")
  const selectedFile = document.querySelector(".selected-file")
  const fileUpload = document.querySelector(".file-upload")

  if (fileInput) {
    // Handle file selection
    fileInput.addEventListener("change", function () {
      if (this.files && this.files[0]) {
        const fileName = this.files[0].name
        selectedFile.textContent = fileName
        fileLabel.textContent = "File selected"

        // Add success styling
        fileUpload.style.borderColor = "#27ae60"
        fileUpload.style.backgroundColor = "rgba(39, 174, 96, 0.1)"
      } else {
        resetFileUpload()
      }
    })

    // Handle drag and drop
    fileUpload.addEventListener("dragover", function (e) {
      e.preventDefault()
      this.style.borderColor = "#27ae60"
      this.style.backgroundColor = "rgba(39, 174, 96, 0.1)"
    })

    fileUpload.addEventListener("dragleave", (e) => {
      e.preventDefault()
      if (!fileInput.files || !fileInput.files[0]) {
        resetFileUpload()
      }
    })

    fileUpload.addEventListener("drop", function (e) {
      e.preventDefault()
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        fileInput.files = e.dataTransfer.files
        const fileName = e.dataTransfer.files[0].name
        selectedFile.textContent = fileName
        fileLabel.textContent = "File selected"

        // Add success styling
        this.style.borderColor = "#27ae60"
        this.style.backgroundColor = "rgba(39, 174, 96, 0.1)"
      }
    })
  }

  function resetFileUpload() {
    fileLabel.textContent = "Choose a file or drag it here"
    selectedFile.textContent = ""
    fileUpload.style.borderColor = "#ddd"
    fileUpload.style.backgroundColor = "transparent"
  }

  // Form validation
  const sightingForm = document.getElementById("sightingForm")

  if (sightingForm) {
    sightingForm.addEventListener("submit", function (e) {
      let isValid = true

      // Basic validation
      const requiredFields = this.querySelectorAll("[required]")
      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          field.classList.add("error")
          isValid = false
        } else {
          field.classList.remove("error")
        }
      })

      // Email validation
      const emailField = document.getElementById("email")
      if (emailField && emailField.value.trim() && !isValidEmail(emailField.value.trim())) {
        emailField.classList.add("error")
        isValid = false
      }

      if (!isValid) {
        e.preventDefault()

        // Scroll to first error
        const firstError = this.querySelector(".error")
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" })
          firstError.focus()
        }
      } else {
        // Show loading state on submit button
        const submitBtn = this.querySelector(".submit-btn")
        const originalText = submitBtn.innerHTML
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...'
        submitBtn.disabled = true

        // Re-enable after 3 seconds if form doesn't submit (for demo purposes)
        setTimeout(() => {
          if (submitBtn.disabled) {
            submitBtn.innerHTML = originalText
            submitBtn.disabled = false
          }
        }, 3000)
      }
    })

    // Clear error state on input
    const formInputs = sightingForm.querySelectorAll(".form-control")
    formInputs.forEach((input) => {
      input.addEventListener("input", function () {
        this.classList.remove("error")
      })
    })
  }

  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Animate sighting cards on scroll
  const sightingCards = document.querySelectorAll(".sighting-card")

  function checkSightingCards() {
    sightingCards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (cardPosition < screenPosition) {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  sightingCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Add scroll event listener
  window.addEventListener("scroll", checkSightingCards)

  // Initial check
  checkSightingCards()
})

