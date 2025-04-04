// Schools & Communities page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Story slider functionality
  const storyCards = document.querySelectorAll(".story-card")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  let currentStoryIndex = 0

  // Hide all stories except the first one
  if (storyCards.length > 1) {
    for (let i = 1; i < storyCards.length; i++) {
      storyCards[i].style.display = "none"
    }
  }

  // Next button functionality
  if (nextBtn && storyCards.length > 1) {
    nextBtn.addEventListener("click", () => {
      storyCards[currentStoryIndex].style.display = "none"
      currentStoryIndex = (currentStoryIndex + 1) % storyCards.length
      storyCards[currentStoryIndex].style.display = "flex"
    })
  }

  // Previous button functionality
  if (prevBtn && storyCards.length > 1) {
    prevBtn.addEventListener("click", () => {
      storyCards[currentStoryIndex].style.display = "none"
      currentStoryIndex = (currentStoryIndex - 1 + storyCards.length) % storyCards.length
      storyCards[currentStoryIndex].style.display = "flex"
    })
  }

  // Resources tabs functionality
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabPanes = document.querySelectorAll(".tab-pane")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons and panes
      tabBtns.forEach((b) => b.classList.remove("active"))
      tabPanes.forEach((p) => p.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Show corresponding tab pane
      const tabId = this.getAttribute("data-tab")
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Feature card animations on scroll
  const featureCards = document.querySelectorAll(".feature-card")

  function checkFeatureCards() {
    featureCards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (cardPosition < screenPosition) {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  featureCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Add scroll event listener
  window.addEventListener("scroll", checkFeatureCards)

  // Initial check
  checkFeatureCards()

  // Spotlight card animations on scroll
  const spotlightCards = document.querySelectorAll(".spotlight-card")

  function checkSpotlightCards() {
    spotlightCards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (cardPosition < screenPosition) {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  spotlightCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Add scroll event listener
  window.addEventListener("scroll", checkSpotlightCards)

  // Initial check
  checkSpotlightCards()

  // Form submission handling
  const contactForm = document.querySelector(".contact-form form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // In a real application, you would send the form data to the server here
      // For now, we'll just show a success message

      const formData = new FormData(contactForm)
      const formValues = {}

      for (const [key, value] of formData.entries()) {
        formValues[key] = value
      }

      console.log("Form submitted with values:", formValues)

      // Show success message
      contactForm.innerHTML = `
                <div class="alert alert-success">
                    <h4>Thank you for your message!</h4>
                    <p>We'll get back to you as soon as possible.</p>
                </div>
            `
    })
  }
})

